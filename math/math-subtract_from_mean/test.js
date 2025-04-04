/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("./dist/simple-statistics.js");
const subtractFromMean = require("./");

test("subtractFromMean", function (t) {
    t.test("can remove a single value from a mean", function (t) {
        const values = [13, 14, 15, 8, 20, 54];
        t.equal(subtractFromMean(ss.mean(values), values.length, 54), 14);
        t.equal(
            subtractFromMean(ss.mean(values), values.length, 54),
            ss.mean(values.slice(0, -1))
        );
        t.end();
    });
    t.end();
});
