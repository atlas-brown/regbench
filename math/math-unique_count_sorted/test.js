/* eslint no-shadow: 0 */

const test = require("tape-catch");
const uniqueCountSorted = require("./");

test("uniqueCountSorted", function (t) {
    t.equal(uniqueCountSorted([]), 0);
    t.equal(uniqueCountSorted([1]), 1);
    t.equal(uniqueCountSorted([undefined]), 1);
    t.equal(uniqueCountSorted([1, 2, 3, 4]), 4);
    t.equal(uniqueCountSorted([1, 2, 3, 3, 4]), 4);
    t.equal(uniqueCountSorted([1, 2, 3, 3, 4, 4]), 4);
    t.equal(uniqueCountSorted([1, 1, 2, 3, 3, 4, 4]), 4);
    t.end();
});
