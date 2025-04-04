const test = require('ava');
const trimLeft = require('./')

// Split the test into multiple tests
test('one-trail', t => {
	t.is(trimLeft(' unicorn '), 'unicorn ');
});

test('two-trail', t => {
	t.is(trimLeft('  unicorn  '), 'unicorn  ');
});

test('newlines', t => {
	t.is(trimLeft('\r\n  \nunicorn'), 'unicorn');
});

test('unicode', t => {
	t.is(trimLeft('\u00A0\uFEFFunicorn'), 'unicorn');
});

test('zws, nel, bom', t => {
	// Zero-width space (zws), next line character (nel), non-character (bom) are not whitespace
	t.is(trimLeft('\u200B\u0085\uFFFE'), '\u200B\u0085\uFFFE');
});
