const test = require('tape-catch');
const isPalindrome = require('.');

test('isPalindrome', t => {
    t.equal(isPalindrome('racecar'), true);
    t.equal(isPalindrome('hello'), false);
    t.equal(isPalindrome(''), true);
    t.equal(isPalindrome('a'), true);
    t.equal(isPalindrome('ab'), false);
    t.equal(isPalindrome('aba'), true);
    t.equal(isPalindrome('abba'), true);
    t.equal(isPalindrome('abcba'), true);
    t.equal(isPalindrome('abcdba'), false);
    t.equal(isPalindrome('abcddcba'), true);
    t.throws(() => isPalindrome(123), 'throws an error when input is not a string');
    t.end();
});
