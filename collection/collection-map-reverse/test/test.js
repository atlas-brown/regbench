var assert      = require('assert');
var mapReverse  = require('../');

it('Should iterate an array', function () {
    var testData = [1, 2, 3, 4];
    var results  = mapReverse(testData, function (el, index, array) {
        assert.strictEqual(index, testData.indexOf(el));
        assert.strictEqual(array, testData);
        return el * 2;
    });

    assert.deepEqual(results, [8, 6, 4, 2]);
});

it('Should allow to splice an array', function () {
    var testData = [1, 2, 3, 4, 5, 6, 7];
    var results  = mapReverse(testData, function (el, index, array) {
        assert.strictEqual(index, testData.indexOf(el));
        assert.strictEqual(array, testData);
        return (el % 2) ? testData.splice(testData.indexOf(el), 1) : 0;
    });

    assert.deepEqual(results, [[7], 0, [5], 0, [3], 0, [1]]);
    assert.deepEqual(testData, [2, 4, 6]);
});
