var test = require('tape-catch');
var set = require('./');
var compare = require('../../collection/collection-compare');

test('sets existing property using dot-notation arg', function(t) {
  t.plan(4);
  var obj1 = {a: {aa: {aaa: 2}}};
  t.isEqual(set(obj1, 'a.aa.aaa', 3), true);
  t.ok(compare(obj1, {a: {aa: {aaa: 3}}}));
  var obj2 = {a: {aa: {aaa: 2}}};
  t.isEqual(set(obj2, 'a.aa', {bbb: 7}), true);
  t.ok(compare(obj2, {a: {aa: {bbb: 7}}}));
  t.end();
});

test('sets existing property using array arg', function(t) {
  t.plan(4);
  var obj1 = {a: {aa: {aaa: 2}}};
  t.isEqual(set(obj1, ['a', 'aa', 'aaa'], 3), true);
  t.ok(compare(obj1, {a: {aa: {aaa: 3}}}));
  var obj2 = {a: {aa: {aaa: 2}}};
  t.isEqual(set(obj2, ['a', 'aa'], {bbb: 7}), true);
  t.ok(compare(obj2, {a: {aa: {bbb: 7}}}));
  t.end();
});

test('sets non-existent property using dot-notation arg', function(t) {
  t.plan(4);
  var obj1 = {};
  t.isEqual(set(obj1, 'a.aa.aaa', 4), true);
  t.ok(compare(obj1, {a: {aa: {aaa: 4}}}));
  var obj2 = {};
  t.isEqual(set(obj2, 'a.aa', {bbb: 7}), true);
  t.ok(compare(obj2, {a: {aa: {bbb: 7}}}));
  t.end();
});

test('sets non-existent property using array arg', function(t) {
  t.plan(4);
  var obj1 = {};
  t.isEqual(set(obj1, ['a', 'aa', 'aaa'], 4), true);
  t.ok(compare(obj1, {a: {aa: {aaa: 4}}}));
  var obj2 = {};
  t.isEqual(set(obj2, ['a', 'aa'], {bbb: 7}), true);
  t.ok(compare(obj2, {a: {aa: {bbb: 7}}}));
  t.end();
});

test("doesn't interrupt property chain, using dot-notation arg", function(t) {
  t.plan(2);
  var obj1 = {a: 5};
  t.isEqual(set(obj1, 'a.aa.aaa', 4), false);
  // ok to clobber last property
  var obj2 = {a: {aa: 9}};
  t.isEqual(set(obj2, 'a.aa', {bbb: 7}), true);
  t.end();
});

test("doesn't interrupt property chain, using array arg", function(t) {
  t.plan(2);
  var obj1 = {a: 5};
  t.isEqual(set(obj1, ['a', 'aa', 'aaa'], 4), false);
  // ok to clobber last property
  var obj2 = {a: {aa: 9}};
  t.isEqual(set(obj2, ['a', 'aa'], {bbb: 7}), true);
  t.end();
});

test('does not mutate path', function(t) {
  t.plan(6);
  var path = ['a', 'aa', 'aaa'];
  var obj1 = {a: {aa: {aab: 2}}};
  var obj2 = {a: {aa: {aac: 2}}};
  t.isEqual(set(obj1, path, 3), true);
  t.ok(compare(obj1, {a: {aa: {aaa: 3, aab: 2}}}));
  t.ok(compare(path, ['a', 'aa', 'aaa']));
  t.isEqual(set(obj2, path, 3), true);
  t.ok(compare(obj2, {a: {aa: {aaa: 3, aac: 2}}}));
  t.ok(compare(path, ['a', 'aa', 'aaa']));
  t.end();
});

test("doesn't support setting of prototype (and related) values", function(t) {
  t.plan(5);
  t.throws(function() {
    var obj1 = {a: {}};
    set(obj1, '__proto__.x', function malice() {});
  });
  t.throws(function() {
    var obj1 = {a: {}};
    set(obj1, ['a', 'b', '__proto__'], {toString: 'hehehe'});
  });
  t.throws(function() {
    var obj2 = {a: {}};
    set(obj2, 'constructor', function FakeConstructor() {});
  });
  t.throws(function() {
    var obj3 = {a: {}};
    set(obj3, 'prototype.y', 'hahahaha');
  });
  // case where unsafe value is hidden in an array which will coerce to string on assignment
  t.throws(function() {
    var obj1 = {a: {}};
    set(obj1, ['a', 'b', ['__proto__']], {toString: 'hehehe'});
  });
  t.end();
});

/* eslint-disable no-undef*/
if (typeof Symbol === 'function') {
  test('supports symbol prop', function(t) {
    t.plan(2);
    var obj1 = {a: {}};
    var sym = Symbol();
    t.isEqual(set(obj1.a, sym, 7), true);
    t.ok(obj1.a[sym] === 7);
    t.end();
  });
}
