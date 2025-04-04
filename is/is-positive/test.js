/* eslint no-new-wrappers: 0 */
import test from 'ava';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);  // Dynamically create 'require'
const m = require('.');

test('returns true for number 1', t => {
	t.true(m(1));
});

test('returns true for Number object with value 1', t => {
	t.true(m(new Number(1)));
});

test('returns false for number 0', t => {
	t.false(m(0));
});

test('returns false for negative number', t => {
	t.false(m(-1));
});

test('returns false for string "1"', t => {
	t.false(m('1'));
});

test('returns false for NaN', t => {
	t.false(m(NaN));
});

test('returns false for boolean true', t => {
	t.false(m(true));
});

test('returns false when no argument is provided', t => {
	t.false(m());
});
