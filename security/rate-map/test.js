const test = require('tape');
const rateMap = require('./');

test('rateMap', t => {
    t.plan(5);
  t.equal(rateMap(0, 0, 100), 0, 'should return the start value when val is 0');
  t.equal(rateMap(1, 0, 100), 100, 'should return the end value when val is 1');
  t.equal(rateMap(0.5, 0, 100), 50, 'should return the middle value when val is 0.5');
  t.equal(rateMap(0.25, 50, 100), 62.5, 'should return the correct value when val is 0.25 and start is not 0');
  t.equal(rateMap(0.75, -50, 50), 25, 'should return the correct value when val is 0.75 and start and end are negative and positive');
});

test('error conditions', t => {
    t.plan(8);
  t.throws(
    () => rateMap('0.5', 0, 100),
    'should throw a TypeError when val is not a number'
  );

  t.throws(
    () => rateMap(Infinity, 0, 100),
    'should throw a RangeError when val is not a finite number'
  );

  t.throws(
    () => rateMap(-0.1, 0, 100),
    'should throw a RangeError when val is a negative number'
  );

  t.throws(
    () => rateMap(1.1, 0, 100),
    'RangeError',
  );

  t.throws(
    () => rateMap(0.5, '0', 100),
    'should throw a TypeError when start is not a number'
  );

  t.throws(
    () => rateMap(0.5, 0, '100'),
    'should throw a TypeError when end is not a number'
  );

  t.throws(
    () => rateMap(0.5, Infinity, 100),
    'should throw a RangeError when start is not a finite number'
  );

  t.throws(
    () => rateMap(0.5, 0, Infinity),
    'should throw a RangeError when end is not a finite number'
  );

  t.end();
});
