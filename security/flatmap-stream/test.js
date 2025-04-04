'use strict';

var es = require('./event-stream')
    , it = require('it-is')

exports['flatmap'] = function (test) {
    es.readArray([[1], [1, 2], [1, 2, 3]])
        .pipe(es.flatmap(function (e, cb) {
            cb(null, e + 1)
        }))
        .pipe(es.writeArray(function (error, array) {
            console.log(array)
            test.deepEqual([2, 2, 3, 2, 3, 4], array)
            test.end()
        }))
}

var tape = require('tape')

function test(m) {
    if (m.parent) return
    for (var name in m.exports) {
        tape(name, function (t) {
            console.log('start', name)
            t.done = t.end
            m.exports[name](t)
        })
    }
}


test(module)