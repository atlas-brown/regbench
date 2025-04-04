/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const zScore = require("./");

// The zScore method is also tested in the normal distribution tests.
test("zScore", function (t) {
    t.equal(zScore(78, 80, 5), -0.4);
    t.equal(zScore(78, 90, 5), -2.4);
    t.equal(zScore(78, 90, 2), -6);
    t.end();
});
