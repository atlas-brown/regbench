'use strict';

var es = require('./event-stream')
var flatmap = require('./flatmap-stream');

exports['flatmap'] = function (test) {
    es.readArray([[1], [1, 2], [1, 2, 3]])
        .pipe(flatmap(function (e, cb) {
            cb(null, e + 1)
        }))
        .pipe(es.writeArray(function (error, array) {
            test.deepEqual(array, [2, 2, 3, 2, 3, 4])
            test.end()
        }))
}

var tape = require('tape-catch')

function test(m) {
    if (m.parent) return
    for (var name in m.exports) {
        tape(name, function (t) {
            t.done = t.end
            m.exports[name](t)
        })
    }
}


test(module)
