/* eslint no-shadow: 0 */

const test = require("tap").test;
const ss = require("../dist/simple-statistics.js");
const chunk = require("./");

test("chunk", function (t) {
    t.test("can get chunks of an array", function (t) {
        t.same(chunk([1, 2], 1), [[1], [2]]);
        t.same(chunk([1, 2], 2), [[1, 2]]);
        t.same(chunk([1, 2, 3, 4], 4), [[1, 2, 3, 4]]);
        t.same(chunk([1, 2, 3, 4], 2), [
            [1, 2],
            [3, 4]
        ]);
        t.same(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
        t.same(chunk([1, 2, 3, 4, 5, 6, 7], 2), [
            [1, 2],
            [3, 4],
            [5, 6],
            [7]
        ]);
        t.same(chunk([], 2), []);
        t.throws(function () {
            chunk([1, 2], 0);
        }, "Throws with zero chunk size");

        t.throws(function () {
            chunk([1, 2], 1.5);
        }, "Throws with non-integer chunk size");
        t.end();
    });
    t.end();
});
