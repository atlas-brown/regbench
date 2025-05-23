/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const combinations = require("./");

test("combinations", function (t) {
    t.test("generates 1 permutation", function (t) {
        t.same(combinations([1], 1), [[1]]);
        t.end();
    });
    t.test(
        "generates combinations of 1,2,3 choosing two at a time",
        function (t) {
            t.same(combinations([1, 2, 3], 2), [
                [1, 2],
                [1, 3],
                [2, 3]
            ]);
            t.end();
        }
    );
    t.end();
});
