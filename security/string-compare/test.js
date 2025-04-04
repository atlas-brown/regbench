const test = require('tape');
const stringCompare = require('./');

test('Basic comparison', (t) => {
    t.equal(stringCompare('apple', 'banana'), -1, 'apple should come before banana');
    t.end();
});

test('Another basic comparison', (t) => {
    t.equal(stringCompare('banana', 'apple'), 1, 'apple should come before banana');
    t.end();
});

test('Case sensitivity', (t) => {
    t.equal(stringCompare('a', 'A'), -1, 'Lowercase a should come after uppercase A');
    t.end();
});

test('Comparison with accented characters', (t) => {
    t.equal(stringCompare('é', 'e'), 1, 'é should come after e');
    t.end();
});