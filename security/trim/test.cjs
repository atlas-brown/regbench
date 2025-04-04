const test = require('tape-catch');

const trim = require("./");

test("ReDos in trim", (t) => {
  t.plan(1);
  // const measureTime = require("../utils").measureTime;
  // let t = measureTime(function () {
  t.equal(trim("1" + " ".repeat(50000) + "1"), "1" + " ".repeat(50000) + "1");

  // });
  // let time = t[0] + t[1] / 1000000000;
  // expect(time).toBeGreaterThan(1);
});
