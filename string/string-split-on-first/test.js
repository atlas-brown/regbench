const test = require('ava');
const splitOnFirst = require('.');


test('splitOnFirst with simple separator', t => {
	t.deepEqual(splitOnFirst('a-b-c', '-'), ['a', 'b-c']);
});

test('splitOnFirst with complex separator', t => {
	t.deepEqual(splitOnFirst('a---b---c', '---'), ['a', 'b---c']);
});

test('splitOnFirst with colon separator', t => {
	t.deepEqual(splitOnFirst('key:value:value2', ':'), ['key', 'value:value2']);
});

test('splitOnFirst with separator not found', t => {
	t.deepEqual(splitOnFirst('a-b-c', '+'), []);
});

test('splitOnFirst with empty string separator', t => {
	t.deepEqual(splitOnFirst('abc', ''), []);
});

test('splitOnFirst with empty input and separator', t => {
	t.deepEqual(splitOnFirst('', ''), []);
});

test('splitOnFirst throws TypeError when separator is null', t => {
	t.throws(() => {
		splitOnFirst('abc', null);
	}, {
		instanceOf: TypeError,
		message: 'Expected the arguments to be of type `string`'
	});
});
