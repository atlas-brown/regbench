import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);  // Dynamically create 'require'
const ccount = require('./');

// Test for string coercion
test('ccount should coerce non-string values to string', function () {
  // @ts-expect-error: incorrect value.
  assert.equal(ccount(true, 't'), 1, 'should coerce to string');
});

// Test for invalid character input
test('ccount should throw an error when character is invalid', function () {
  assert.throws(
    function () {
      // @ts-expect-error: incorrect value.
      ccount(true, 0);
    },
    /Expected character/,
    'should throw when character is invalid'
  );
});

// Test for empty string input
test('ccount should return 0 when searching in an empty string', function () {
  assert.equal(ccount('', 'f'), 0);
});

// Test for counting characters in a string
test('ccount should count occurrences of a character in a string', function () {
  assert.equal(ccount('foo', 'o'), 2);
  assert.equal(ccount('fo fooo fo', 'o'), 5);
  assert.equal(ccount('ooo', 'o'), 3);
});

// Test for counting emoji characters in a string
test('ccount should count occurrences of emoji characters in a string', function () {
  assert.equal(ccount('a🤔b🤔c', '🤔'), 2);
});
