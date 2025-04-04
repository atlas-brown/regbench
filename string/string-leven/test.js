import test from 'ava';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);  // Dynamically create 'require'
const leven = require('./');

// Test 1
test('test 1: single character difference', t => {
	t.is(leven('a', 'b'), 1);
});

// Test 2
test('test 2: single character change in a 2-character string', t => {
	t.is(leven('ab', 'ac'), 1);
});

// Test 3
test('test 3: single character change', t => {
	t.is(leven('ac', 'bc'), 1);
});

// Test 4
test('test 4: single character substitution in a 3-character string', t => {
	t.is(leven('abc', 'axc'), 1);
});

// Test 5
test('test 5: Levenshtein distance with multiple changes', t => {
	t.is(leven('kitten', 'sitting'), 3);
});

// Test 6
test('test 6: Levenshtein distance with multiple deletions and substitutions', t => {
	t.is(leven('xabxcdxxefxgx', '1ab2cd34ef5g6'), 6);
});

// Test 7
test('test 7: 2-character substitutions', t => {
	t.is(leven('cat', 'cow'), 2);
});

// Test 8
test('test 8: multiple substitutions', t => {
	t.is(leven('xabxcdxxefxgx', 'abcdefg'), 6);
});

// Test 9
test('test 9: multiple substitutions over a longer string', t => {
	t.is(leven('javawasneat', 'scalaisgreat'), 7);
});

// Test 10
test('test 10: substitution in a 7-character string', t => {
	t.is(leven('example', 'samples'), 3);
});

// Test 11
test('test 11: multiple substitutions in an 8-character string', t => {
	t.is(leven('sturgeon', 'urgently'), 6);
});

// Test 12
test('test 12: substitution in a longer string', t => {
	t.is(leven('levenshtein', 'frankenstein'), 6);
});

// Test 13
test('test 13: Levenshtein distance with substitutions in a word pair', t => {
	t.is(leven('distance', 'difference'), 5);
});

// Test 14
test('test 14: Unicode strings with similar patterns', t => {
	t.is(leven('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
});
