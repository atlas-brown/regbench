var tape = require('tape');
var only = require('..');

var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

var expected = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com'
};

tape('only(obj, keys) - given an array', function(t) {
  t.plan(1);
  t.deepEqual(only(obj, ['name', 'email', 'last']), expected, 'should return only the whitelisted properties');
});

tape('only(obj, keys) - given a string', function(t) {
  t.plan(1);
  t.deepEqual(only(obj, 'name email last'), expected, 'should return only the whitelisted properties');
});

tape('only(obj, keys) - omit undefineds', function(t) {
  t.plan(1);
  t.deepEqual(only({}, 'foo bar baz'), {}, 'should omit undefineds');
});
