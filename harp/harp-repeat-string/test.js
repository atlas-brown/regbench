/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var repeat = require('./');

describe('repeat', function() {

  describe('when a number is not given', function() {
    it('should return an empty string', function() {
      assert.equal(repeat('a'), '');
    });
  });

  describe('when zero or null is given as the number', function() {
    it('should return an empty string for an empty string and zero', function() {
      assert.equal(repeat('', 0), '');
    });

    it('should return an empty string for a non-empty string and zero', function() {
      assert.equal(repeat('a', 0), '');
    });

    it('should return an empty string for an empty string and null', function() {
      assert.equal(repeat('', null), '');
    });

    it('should return an empty string for a non-empty string and null', function() {
      assert.equal(repeat('a', null), '');
    });
  });

  describe('when repeating a string', function() {
    it('should return an empty string for zero repeats', function() {
      assert.equal(repeat(' ', 0), '');
    });

    it('should return a single character for one repeat', function() {
      assert.equal(repeat('a', 1), 'a');
    });

    it('should repeat the string twice', function() {
      assert.equal(repeat('a', 2), 'aa');
    });

    it('should repeat the string three times', function() {
      assert.equal(repeat('a', 3), 'aaa');
    });

    it('should handle spaces in strings', function() {
      assert.equal(repeat('   ', 3), '         ');
    });

    it('should handle strings with spaces', function() {
      assert.equal(repeat('a ', 3), 'a a a ');
    });

    it('should repeat the string ten times', function() {
      assert.equal(repeat('a', 10), 'aaaaaaaaaa');
    });

    it('should handle strings with spaces repeated ten times', function() {
      assert.equal(repeat('b ', 10), 'b b b b b b b b b b ');
    });

    it('should handle a different string repeated ten times', function() {
      assert.equal(repeat('a ', 10), 'a a a a a a a a a a ');
    });

    it('should repeat a longer string twenty-five times', function() {
      assert.equal(repeat('abc ', 25), 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc ');
    });
  });

  describe('when the multiplier is a string', function() {
    it('should treat "0" as zero', function() {
      assert.equal(repeat('a', '0'), '');
    });

    it('should treat "1" as one', function() {
      assert.equal(repeat('a', '1'), 'a');
    });

    it('should treat "2" as two', function() {
      assert.equal(repeat('a', '2'), 'aa');
    });

    it('should repeat ten times when the multiplier is "10"', function() {
      assert.equal(repeat('a', '10'), 'aaaaaaaaaa');
    });

    it('should handle spaces with string multiplier of "10"', function() {
      assert.equal(repeat('b ', '10'), 'b b b b b b b b b b ');
    });

    it('should handle different strings with string multiplier of "10"', function() {
      assert.equal(repeat('a ', '10'), 'a a a a a a a a a a ');
    });
  });

  describe('string caching', function() {
    it('should cache a single character string', function() {
      assert.equal(repeat('a', '5'), 'aaaaa');
    });

    it('should cache a string with a space', function() {
      assert.equal(repeat('b ', '5'), 'b b b b b ');
    });

    it('should cache a different string with a space', function() {
      assert.equal(repeat('a ', '5'), 'a a a a a ');
    });

    it('should cache a new string after changing the character', function() {
      assert.equal(repeat('c ', '5'), 'c c c c c ');
    });

    it('should repeat a previously cached string', function() {
      assert.equal(repeat('a ', '5'), 'a a a a a ');
    });

    it('should repeat another previously cached string', function() {
      assert.equal(repeat('b ', '5'), 'b b b b b ');
    });
  });

  describe('error handling', function() {
    it('should throw an error when no string is given (number)', function() {
      assert.throws(function() { repeat(10); }, /expected a string/);
    });

    it('should throw an error when no string is given (null)', function() {
      assert.throws(function() { repeat(null); }, /expected a string/);
    });
  });

});
