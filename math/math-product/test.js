/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("../dist/simple-statistics.js");
const product = require("./");

test("product", function (t) {
    t.test("can get the product of one number", function (t) {
        t.equal(product([2]), 2);
        t.end();
    });

    t.test("can get the product of two numbers", function (t) {
        t.equal(product([2, 3]), 6);
        t.end();
    });

    t.test("can get the product of a negative number", function (t) {
        t.equal(product([-1, 2, 3, 4]), -24);
        t.end();
    });

    t.test(
        "the product of no numbers is one - the multiplicative identity",
        function (t) {
            t.equal(product([]), 1);
            t.end();
        }
    );
    t.end();
});
