import test from 'ava';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const modifyValues = require('./');

test('main', t => {
	t.is(modifyValues({foo: 'UNICORN'}, value => value.toLowerCase()).foo, 'unicorn');
});
