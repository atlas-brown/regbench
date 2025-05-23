/* eslint no-shadow: 0 */

const test = require("tape-catch");
const addToMean = require("./");
const ss = require("../dist/simple-statistics.js");

test("addToMean", function (t) {
    t.test("can get add a single value to a mean", function (t) {
        const values = [13, 14, 15, 8, 20];
        t.equal(addToMean(ss.mean(values), values.length, 53), 20.5);
        t.equal(
            addToMean(ss.mean(values), values.length, 53),
            ss.mean(values.concat(53))
        );
        t.end();
    });
    t.end();
});
