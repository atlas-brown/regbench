import test from 'ava';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);  // Dynamically create 'require'
const lowercaseKeys = require('./');

test('main', t => {
	t.true(lowercaseKeys({FOO: true}).foo);
	t.true(lowercaseKeys({FOO: true, bAr: true}).bar);
});
