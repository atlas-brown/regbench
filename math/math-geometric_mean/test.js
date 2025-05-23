/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const geometricMean = require("./");

test("geometric mean", function (t) {
    // From http://en.wikipedia.org/wiki/Geometric_mean
    t.test("can get the mean of two numbers", function (t) {
        t.equal(geometricMean([2, 8]), 4);
        t.equal(geometricMean([4, 1, 1 / 32]), 0.5);
        t.equal(Math.round(geometricMean([2, 32, 1])), 4);
        t.end();
    });

    t.test("cannot calculate for empty lists", function (t) {
        t.throws(function () {
            geometricMean([]);
        });
        t.end();
    });

    t.test("cannot calculate for lists with negative numbers", function (t) {
        t.throws(function () {
            geometricMean([-1]);
        });
        t.end();
    });

    t.test("equals zero if array contains zero", function (t) {
        if (geometricMean([0, 1, 2]) !== 0) {
            t.fail("geometric mean of array containing zero is not zero");
        }
        t.end();
    });
    t.end();
});
