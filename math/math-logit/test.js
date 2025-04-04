/* eslint no-shadow: 0 */

const test = require("tape-catch");
const logit = require("./");

test("logit", function (t) {
    t.test("throws on logit < 0", function (t) {
        t.throws(() => {
            logit(-1);
        });
        t.end();
    });

    t.test("computes the logit otherwise", function (t) {
        t.equal(logit(0.5), 0);
        t.end();
    });

    t.end();
});
