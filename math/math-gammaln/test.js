/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const gammaln = require("./");

test("gammaln", function (t) {
    t.test("gammaln for positive real float should be correct", function (t) {
        t.equal(gammaln(11.54), 16.388002631263966);
        t.end();
    });
    t.test("exp(gammaln(n)) for n should equal gamma(n)", function (t) {
        t.equal(
            Math.round(Math.exp(gammaln(8.2))),
            Math.round(ss.gamma(8.2))
        );
        t.end();
    });
    t.test("gammaln for negative n should be Infinity", function (t) {
        t.equal(gammaln(-42.5), Infinity);
        t.end();
    });
    t.test("gammaln for n === 0 should return NaN", function (t) {
        t.equal(gammaln(0), Infinity);
        t.end();
    });

    t.end();
});
