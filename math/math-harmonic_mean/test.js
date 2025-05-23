/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const harmonicMean = require("./");

function rnd(x) {
    return Math.round(x * 1000) / 1000;
}

test("harmonicMean", function (t) {
    // From http://en.wikipedia.org/wiki/Harmonic_mean
    t.test("can get the mean of two or more numbers", function (t) {
        t.equal(harmonicMean([1, 1]), 1);
        t.equal(rnd(harmonicMean([2, 3])), 2.4);
        t.equal(harmonicMean([1, 2, 4]), 12 / 7);
        t.end();
    });

    t.test("cannot calculate for empty lists", function (t) {
        t.throws(function () {
            harmonicMean([]);
        });
        t.end();
    });

    t.test("cannot calculate for lists with negative numbers", function (t) {
        t.throws(function () {
            harmonicMean([-1]);
        });
        t.end();
    });
    t.end();
});
