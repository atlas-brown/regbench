const test = require('tape');
const leftPad = require('./');

test('leftPad should add padding to the left of a string', (t) => {
    t.equal(leftPad('hello', 8, ' '), '   hello', 'should add 3 spaces to the left');
    t.equal(leftPad('world', 10, '-'), '-----world', 'should add 5 dashes to the left');
    t.equal(leftPad('123', 5, '0'), '00123', 'should add 2 zeros to the left');
    t.equal(leftPad('test', 4, '*'), 'test', 'should not add padding if string length is equal to or greater than target length');
    t.end();
});

test('leftPad should handle empty string', (t) => {
    t.equal(leftPad('', 5, '-'), '-----', 'should add 5 dashes to the left');
    t.end();
});

test('leftPad should handle negative target length', (t) => {
    t.equal(leftPad('hello', -5, ' '), 'hello', 'should return the original string');
    t.end();
});

test('leftPad should handle non-string input', (t) => {
    t.equal(leftPad(123, 8, '0'), '00000123', 'should convert number to string and add padding');
    t.equal(leftPad(true, 6, '-'), '--true', 'should convert boolean to string and add padding');
    t.equal(leftPad(null, 4, '*'), 'null', 'should return the original value if not a string');
    t.end();
});

test('leftPad should handle special characters', (t) => {
    t.equal(leftPad('@', 5, '-'), '----@', 'should add 4 dashes to the left');
    t.equal(leftPad('!', 3, '*'), '**!', 'should add 2 asterisks to the left');
    t.equal(leftPad('&', 6, '#'), '#####&', 'should add 5 hashtags to the left');
    t.end();
});
