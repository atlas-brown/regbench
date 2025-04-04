var test = require('tape');
var delve = require('.');

var obj = {
    undef: undefined,
    zero: 0,
    one: 1,
    n: null,
    f: false,
    a: {
        two: 2,
        b: {
            three: 3,
            c: {
                four: 4
            }
        }
    }
};

// Helper function to assert equality of a given path, as dot notation and array.
// Optional third argument is for default when the object is not found
function check(t, path, value, def) {
    var out = delve(obj, path, def);
    t.equal(out, value, `delve(obj, "${path}") should be ${value}, got ${out}`);

    if (path) {
        var arr = path.split('.');
        t.equal(delve(obj, arr, def), value, `delve(obj, ${JSON.stringify(arr)}) should be ${value}`);
    }
}

// Test cases
test('No Defaults', function (t) {
    check(t, '', undefined);
    check(t, 'one', obj.one);
    check(t, 'one.two', undefined);
    check(t, 'a', obj.a);
    check(t, 'a.two', obj.a.two);
    check(t, 'a.b', obj.a.b);
    check(t, 'a.b.three', obj.a.b.three);
    check(t, 'a.b.c', obj.a.b.c);
    check(t, 'a.b.c.four', obj.a.b.c.four);
    check(t, 'n', obj.n);
    check(t, 'n.badkey', undefined);
    check(t, 'f', false);
    check(t, 'f.badkey', undefined);
    t.end();
});

test('With Defaults', function (t) {
    check(t, '', 'foo', 'foo');
    check(t, 'undef', 'foo', 'foo');
    check(t, 'n', null, 'foo');
    check(t, 'n.badkey', 'foo', 'foo');
    check(t, 'zero', 0, 'foo');
    check(t, 'a.badkey', 'foo', 'foo');
    check(t, 'a.badkey.anotherbadkey', 'foo', 'foo');
    check(t, 'f', false, 'foo');
    check(t, 'f.badkey', 'foo', 'foo');
    t.end();
});

test('Undefined key throws an error', function (t) {
    t.throws(() => delve(obj, undefined), 'delve with undefined key should throw');
    t.throws(() => delve(obj, undefined, 'foo'), 'delve with undefined key and default should throw');
    t.end();
});

test('Undefined obj uses default', function (t) {
    var backupObj = obj;
    obj = undefined;
    check(t, 'one', undefined);
    check(t, 'one', 'foo', 'foo');
    obj = backupObj;
    t.end();
});
