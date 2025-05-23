const spongeCase = require("./");

/* Since strings are non-deterministic, we test string length to ensure integrity */

const TEST_CASES = [
  ["", 0],
  ["test", 4],
  ["test string", 11],
  ["Test String", 11],
  ["TestV2", 6],
  ["rAnDoM cAsE", 11],
];

describe("random case", () => {
  for (const [input, length] of TEST_CASES) {
    it(`${input} -> ${length}`, () => {
      expect(spongeCase(input)).toHaveLength(length);
    });
  }
});
