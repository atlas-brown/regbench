var test = require('tape-catch');
var orderBy = require('./');

test('produces a new sorted array', function(t) {
  t.plan(2);

  var arr = [10, 1, 5, 20, 15, 35, 30, 6, 8];

  var copied = arr.slice();

  t.deepEqual(orderBy(arr), [1, 5, 6, 8, 10, 15, 20, 30, 35]);

  t.deepEqual(arr, copied);

  t.end();
});

test('sort array of objects using a property with string type', function(t) {
  t.plan(3);

  var users = [
    {user: 'fabio', age: 34},
    {user: 'max', age: 29},
    {user: 'zacarias', age: 44},
    {user: 'robert', age: 28},
    {user: 'klaus', age: 38},
  ];

  var copied = users.slice();

  t.deepEqual(orderBy(users, [{property: 'age'}]), [
    {user: 'robert', age: 28},
    {user: 'max', age: 29},
    {user: 'fabio', age: 34},
    {user: 'klaus', age: 38},
    {user: 'zacarias', age: 44},
  ]);

  t.deepEqual(orderBy(users, [{property: 'user'}]), [
    {user: 'fabio', age: 34},
    {user: 'klaus', age: 38},
    {user: 'max', age: 29},
    {user: 'robert', age: 28},
    {user: 'zacarias', age: 44},
  ]);

  t.deepEqual(users, copied);

  t.end();
});

test('sort array of objects using property as a callback function', function(t) {
  t.plan(3);

  var users = [
    {user: 'fabio', age: 34},
    {user: 'max', age: 29},
    {user: 'zacarias', age: 44},
    {user: 'robert', age: 28},
    {user: 'klaus', age: 38},
  ];

  var copied = users.slice();

  t.deepEqual(
    orderBy(users, [
      {
        property(o) {
          return o.age;
        },
      },
    ]),
    [
      {user: 'robert', age: 28},
      {user: 'max', age: 29},
      {user: 'fabio', age: 34},
      {user: 'klaus', age: 38},
      {user: 'zacarias', age: 44},
    ]
  );

  t.deepEqual(
    orderBy(users, [
      {
        property(o) {
          return o.user;
        },
      },
    ]),
    [
      {user: 'fabio', age: 34},
      {user: 'klaus', age: 38},
      {user: 'max', age: 29},
      {user: 'robert', age: 28},
      {user: 'zacarias', age: 44},
    ]
  );

  t.deepEqual(users, copied);

  t.end();
});

test('sort array of objects in descending order', function(t) {
  t.plan(3);

  var users = [
    {user: 'fabio', age: 34},
    {user: 'max', age: 29},
    {user: 'zacarias', age: 44},
    {user: 'robert', age: 28},
    {user: 'klaus', age: 38},
  ];

  var copied = users.slice();

  t.deepEqual(
    orderBy(users, [
      {
        property(o) {
          return o.age;
        },
        order: 'desc',
      },
    ]),
    [
      {user: 'zacarias', age: 44},
      {user: 'klaus', age: 38},
      {user: 'fabio', age: 34},
      {user: 'max', age: 29},
      {user: 'robert', age: 28},
    ]
  );

  t.deepEqual(
    orderBy(users, [{property: 'user', order: 'desc'}]),
    [
      {user: 'zacarias', age: 44},
      {user: 'robert', age: 28},
      {user: 'max', age: 29},
      {user: 'klaus', age: 38},
      {user: 'fabio', age: 34},
    ]
  );

  t.deepEqual(users, copied);

  t.end();
});

test('invalid', function(t) {
  t.plan(8);

  t.throws(function() {
    orderBy();
  });

  t.throws(function() {
    orderBy(null);
  });

  t.throws(function() {
    orderBy({});
  });

  t.throws(function() {
    orderBy([], []);
  });

  t.throws(function() {
    orderBy([{user: 'zacarias'}, {user: 'klaus'}], [null]);
  });

  t.throws(function() {
    orderBy([{user: 'zacarias'}, {user: 'klaus'}], [{}]);
  });

  t.throws(function() {
    orderBy([], 1);
  });

  t.throws(function() {
    orderBy([1, 2, 3, 0], {});
  });

  t.end();
});
