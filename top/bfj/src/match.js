'use strict'

const check = require('check-types')
const DataStream = require('./datastream')
const events = require('./events')
const Hoopy = require('hoopy')
const jsonpath = require('jsonpath')
const { PassThrough } = require('node:stream')
const walk = require('./walk')

const DEFAULT_BUFFER_LENGTH = 256

module.exports = match

/**
 * Public function `match`.
 *
 * Asynchronously parses a stream of JSON data, returning a stream of items
 * that match the argument. Note that if a value is `null`, it won't be matched
 * because `null` is used to signify end-of-stream in node.
 *
 * @param stream:         Readable instance representing the incoming JSON.
 *
 * @param selector:       Regular expression, string or predicate function used to
 *                        identify matches. If a regular expression or string is
 *                        passed, only property keys are tested. If a predicate is
 *                        passed, both the key and the value are passed to it as
 *                        arguments.
 *
 * @option minDepth:      Number indicating the minimum depth to apply the selector
 *                        to. The default is `0`, but setting it to a higher value
 *                        can improve performance and reduce memory usage by
 *                        eliminating the need to actualise top-level items.
 *
 * @option numbers:       Boolean, indicating whether numerical keys (e.g. array
 *                        indices) should be coerced to strings before testing the
 *                        match. Only applies if the `selector` argument is a string
 *                        or regular expression.
 *
 * @option ndjson:        Set this to true to parse newline-delimited JSON,
 *                        default is `false`.
 *
 * @option recursive:     Set this to true to recursively parse
 *                        matched string values,
 *                        default is `false`.
 *
 * @option yieldRate:     The number of data items to process per timeslice,
 *                        default is 1024.
 *
 * @option bufferLength:  The length of the match buffer, default is 256.
 *
 * @option highWaterMark: If set, will be passed to the readable stream constructor
 *                        as the value for the highWaterMark option.
 **/
function match (stream, selector, options = {}) {
  const keys = []
  const scopes = []
  const properties = []
  const matches = new Hoopy(options.bufferLength || DEFAULT_BUFFER_LENGTH)
  let streamOptions
  const { highWaterMark } = options
  if (highWaterMark) {
    streamOptions = { highWaterMark }
  }
  const results = options.results || new DataStream(read, streamOptions)

  let chunkStream, selectorFunction, selectorPath, selectorString, resume
  let coerceNumbers = false
  let awaitPush = ! options.results
  let isEnded = false
  let length = 0
  let index = 0

  const minDepth = options.minDepth || 0
  check.assert.greaterOrEqual(minDepth, 0)

  const recursive = options.recursive || false
  check.assert.boolean(recursive)

  if (check.function(selector)) {
    selectorFunction = selector
    selector = null
  } else if (check.string(selector)) {
    check.assert.nonEmptyString(selector)

    if (selector.startsWith('$.')) {
      selectorPath = jsonpath.parse(selector)
      check.assert.identical(selectorPath.shift(), {
        expression: {
          type: 'root',
          value: '$',
        },
      })
      selectorPath.forEach((part) => {
        check.assert.equal(part.scope, 'child')
      })
    } else {
      selectorString = selector
      coerceNumbers = !! options.numbers
    }

    selector = null
  } else {
    check.assert.instanceStrict(selector, RegExp)
    coerceNumbers = !! options.numbers
  }

  const emitter = walk(stream, {
    ...options,
    streamChunkSize: recursive ? matches.length : null,
  })

  emitter.on(events.array, array)
  emitter.on(events.object, object)
  emitter.on(events.property, property)
  emitter.on(events.endArray, endScope)
  emitter.on(events.endObject, endScope)
  emitter.on(events.string, value)
  emitter.on(events.number, value)
  emitter.on(events.literal, value)
  emitter.on(events.end, end)
  emitter.on(events.error, error)
  emitter.on(events.dataError, dataError)

  if (recursive) {
    emitter.on(events.stringChunk, stringChunk)
  }

  return results

  function read () {
    if (awaitPush) {
      awaitPush = false

      if (isEnded) {
        if (length > 0) {
          after()
        }

        return endResults()
      }
    }

    if (resume) {
      const resumeCopy = resume
      resume = null
      resumeCopy()
      after()
    }
  }

  function after () {
    if (awaitPush || resume) {
      return
    }

    let i

    for (i = 0; i < length && ! resume; ++i) {
      if (! results.push(matches[i + index])) {
        pause()
      }
    }

    if (i === length) {
      index = length = 0
    } else {
      length -= i
      index += i
    }
  }

  function pause () {
    resume = emitter.pause()
  }

  function endResults () {
    if (! awaitPush) {
      results.push(null)
    }
  }

  function array () {
    scopes.push([])
  }

  function object () {
    scopes.push({})
  }

  function property (name) {
    keys.push(name)

    if (scopes.length < minDepth) {
      return
    }

    properties.push(name)
  }

  function endScope () {
    if (selectorPath) {
      keys.pop()
    }
    value(scopes.pop())
  }

  function value (v) {
    if (chunkStream) {
      chunkStream = null
    }

    if (scopes.length < minDepth) {
      return
    }

    let key

    if (scopes.length > 0) {
      const scope = scopes[scopes.length - 1]

      if (Array.isArray(scope)) {
        key = scope.length
      } else {
        key = properties.pop()
      }

      scope[key] = v
    }

    if (v === null) {
      return
    }

    if (selectorFunction) {
      if (selectorFunction(key, v, scopes.length)) {
        push(v)
      }
    } else if (selectorPath) {
      if (isSelectorPathSatisfied([ ...keys, key ])) {
        push(v)
      }
    } else {
      if (coerceNumbers && typeof key === 'number') {
        key = key.toString()
      }

      if ((selectorString && selectorString === key) || (selector && selector.test(key))) {
        push(v)
      }
    }
  }

  function isSelectorPathSatisfied (path) {
    if (selectorPath.length !== path.length) {
      return false
    }

    return selectorPath.every(({ expression, operation }, i) => {
      if (
        (operation === 'member' && expression.type === 'identifier') ||
        (operation === 'subscript' && (
          expression.type === 'string_literal' ||
          expression.type === 'numeric_literal'
        ))
      ) {
        return path[i] === expression.value
      }

      if (
        operation === 'subscript' &&
        expression.type === 'wildcard' &&
        expression.value === '*'
      ) {
        return true
      }

      return false
    })
  }

  function push (v) {
    if (length + 1 === matches.length) {
      pause()
    }

    matches[index + length++] = v

    after()
  }

  function stringChunk (chunk) {
    if (!chunkStream) {
      chunkStream = new PassThrough(streamOptions)
      match(
        chunkStream,
        selectorFunction || selectorPath || selectorString || selector,
        { ...options, results },
      )
    }

    chunkStream.write(chunk)
  }

  function end () {
    isEnded = true
    endResults()
  }

  function error (e) {
    results.emit('error', e)
  }

  function dataError (e) {
    results.emit('dataError', e)
  }
}
