/* global describe, it */
// import assert from 'assert';
const assert = require('assert');
// import trimRight from './index.js'; // Ensure this path points to your trimRight function
const trimRight = require('./');

describe('trimRight function tests', function () {
	it('should trim spaces from the right side of the string', function () {
		assert.equal(trimRight('  unicorn  '), '  unicorn');
	});

	it('should trim carriage returns and new lines from the right side', function () {
		assert.equal(trimRight('unicorn\r\n  \n'), 'unicorn');
	});

	it('should trim non-breaking space and zero-width no-break space from the right side', function () {
		assert.equal(trimRight('unicorn\u00A0\uFEFF'), 'unicorn');
	});

	it('should not trim zero-width space, next line character, and non-character from the right side', function () {
		assert.equal(trimRight('\u200B\u0085\uFFFE'), '\u200B\u0085\uFFFE');
	});
});
