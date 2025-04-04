/* eslint no-shadow: 0 */

const test = require("tape-catch");
const ss = require("./dist/simple-statistics.js");
const standardNormalTable = require("./");

test("standardNormalTable", function (t) {
    test("all entries are numeric", function (t) {
        for (let i = 0; i < standardNormalTable.length; i++) {
            if (
                typeof standardNormalTable[i] !== "number" ||
                standardNormalTable[i] < 0 ||
                standardNormalTable[i] > 1
            ) {
                t.fail("standard normal table value invalid");
            }
            else {
                t.ok(true, "correct values");
            }
        }
        t.end();
    });
    t.end();
});
