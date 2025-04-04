const test = require('tape');
const arrayify = require('array-back');

test('if already array, do nothing', (t) => {
  const arr = [1, 2, 3];
  const result = arrayify(arr);
  t.equal(arr, result, 'should return the same array instance');
  t.end();
});

test('arrayify()', (t) => {
  t.deepEqual(arrayify(undefined), [], 'undefined should become an empty array');
  t.deepEqual(arrayify(null), [null], 'null should become [null]');
  t.deepEqual(arrayify(0), [0], '0 should become [0]');
  t.deepEqual(arrayify([1, 2]), [1, 2], '[1, 2] should stay [1, 2]');
  t.deepEqual(arrayify(new Set([1, 2])), [1, 2], 'Set should become an array of its values');

  function func() {
    t.deepEqual(arrayify(arguments), [1, 2, 3], 'arguments object should be arrayified');
  }
  func(1, 2, 3);

  t.deepEqual(arrayify({ one: 1 }), [{ one: 1 }], 'object should become [object]');

  const map = new Map();
  map.set('one', 1);
  map.set('two', 2);
  t.deepEqual(arrayify(map), [map], 'Map should become an array containing the map');

  t.end();
});
