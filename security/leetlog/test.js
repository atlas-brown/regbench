const test = require('tape');
const index = require('./');

test('aliceblue', function(t) {
    t.deepEqual(index.aliceblue('hello'), { "color": "aliceblue", "args": "hello" });
    t.end();
});

test('antiquewhite', function(t) {
    t.deepEqual(index.antiquewhite('hello', 'my', 'friend'), { "color": "antiquewhite", "args": "hello my friend" });
    t.end();
});

test('aqua', function(t) {
    t.deepEqual(index.aqua('hello'), { "color": "aqua", "args": "hello" });
    t.end();
});

test('aquamarine', function(t) {
    t.deepEqual(index.aquamarine('hello', 'my', 'friend'), { "color": "aquamarine", "args": "hello my friend" });
    t.end();
});
