/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("./dist/simple-statistics.js");
const permutationsHeap = require("./");

test("permutationsHeap", function (t) {
    t.test("generates 1 permutation", function (t) {
        t.same(permutationsHeap([1]), [[1]]);
        t.end();
    });
    t.test("generates 1, 2, 3 permutations", function (t) {
        t.same(permutationsHeap([1, 2, 3].sort()), [
            [1, 2, 3],
            [2, 1, 3],
            [3, 1, 2],
            [1, 3, 2],
            [2, 3, 1],
            [3, 2, 1]
        ].sort());
        t.end();
    });
    t.end();
});
