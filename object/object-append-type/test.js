'use strict';

const appendType = require('.');
const noop = require('lodash/noop');
const test = require('tape');

test('appendType()', t => {
	t.equal(
		appendType(true),
		'true (boolean)',
		'should stringify boolean.'
	);

	t.equal(
		appendType(1.23),
		'1.23 (number)',
		'should stringify number.'
	);

	t.equal(
		appendType('foo'),
		'foo (string)',
		'should stringify string.'
	);

	t.equal(
		appendType(Symbol('bar')),
		'Symbol(bar) (symbol)',
		'should stringify symbol.'
	);

	t.equal(
		appendType(noop),
		'function noop() {\n  // No operation performed.\n} (function)',
		'should stringify function.'
	);

	t.equal(
		appendType(/baz/u),
		'/baz/u (object)',
		'should stringify object.'
	);

	t.equal(
		appendType(undefined),
		'undefined',
		'should return \'undefined\' when it receives `undefined`.'
	);

	t.equal(
		appendType(null),
		'null',
		'should return \'null\' when it receives `null`.'
	);

	t.end();
});
