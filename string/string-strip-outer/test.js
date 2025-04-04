const test = require('ava');
const stripOuter = require('./index.js');

test('strip outer foobar bar', t => {
	t.is(stripOuter('foobarfoo', 'foo'), 'bar');
});

test('strip outer unicorncake unicorn', t => {
	t.is(stripOuter('unicorncake', 'unicorn'), 'cake');
});

test('strip outer unicorncake cake', t => {
	t.is(stripOuter('unicorncake', 'cake'), 'unicorn');
});
