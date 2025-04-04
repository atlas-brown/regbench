const test = require('ava');
const m = require('./');

test("all tests", t => {
	const arr = [1, 2, 3, 4, 5];

	t.is(m(arr, 3).length, 3);
	t.is(m(arr, 0).length, 0);
	t.is(m(arr, 10).length, 5);
	t.is(m([], 5).length, 0);
});
