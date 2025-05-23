/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const quantileRankSorted = require("./");

test("quantileRankSorted", function (t) {
    // Data and results from
    // [Scipy](https://github.com/scipy/scipy/blob/master/scipy/stats/stats.py)
    t.test("can get proper quantile ranks", function (t) {
        t.equal(quantileRankSorted([1, 2, 3, 4], 3), 0.75);
        t.equal(quantileRankSorted([1, 2, 3, 3, 4], 3), 0.7);
        t.equal(quantileRankSorted([1, 2, 3, 4], 6), 1);
        t.equal(quantileRankSorted([1, 2, 3, 4], -3), 0);
        t.equal(quantileRankSorted([1, 2, 3, 3, 5], 4), 0.8);
        t.end();
    });
    t.end();
});
