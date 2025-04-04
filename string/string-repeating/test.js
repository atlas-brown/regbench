import test from 'ava';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);  // Dynamically create 'require'
const repeating = require('./');

test('error', t => {
	t.throws(() => {
		repeating(5, 5);
	}, {
		message: 'Expected `input` to be a `string`, got `number`'
	});

	t.throws(() => {
		repeating(-5, 'foo');
	}, {
		message: 'Expected `count` to be a positive finite number, got `-5`'
	});
});

test('repeating', t => {
	t.is(repeating(5), '     ');
	t.is(repeating(5, ''), '');
	t.is(repeating(5, 'a'), 'aaaaa');
	t.is(repeating(3, 'unicorn'), 'unicornunicornunicorn');
});
