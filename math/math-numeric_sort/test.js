/* eslint no-shadow: 0 */

const test = require("tape-catch");
const numericSort = require("./")

test("numericSort", function (t) {
    t.same(numericSort([1, 2]), [1, 2]);
    t.same(numericSort([2, 1]), [1, 2]);

    const input = [2, 1];
    const output = [1, 2];
    t.same(numericSort(input), output);
    t.same(input, [2, 1], "does not mutate input");

    t.end();
});
