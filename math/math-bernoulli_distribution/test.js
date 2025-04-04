/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const bernoulliDistribution = require("./");

test("bernoulliDistribution", function (t) {
    t.test(
        "can return generate probability and cumulative probability distributions for p = 0.3",
        function (t) {
            t.ok(Array.isArray(bernoulliDistribution(0.3)));
            t.equal(bernoulliDistribution(0.3)[0], 0.7, ss.epsilon);
            t.equal(bernoulliDistribution(0.3)[1], 0.3, ss.epsilon);
            t.end();
        }
    );
    t.test("can return null when p is not a valid probability", function (t) {
        t.throws(function () {
            bernoulliDistribution(-0.01);
        }, "p should be greater than 0.0");
        t.throws(function () {
            bernoulliDistribution(1.5);
        }, "p should be less than 1.0");
        t.end();
    });
    t.end();
});
