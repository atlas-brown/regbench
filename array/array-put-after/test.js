const test = require("ava")
const putAfter = require(".")

test("main", t => {
	t.is(putAfter("ac", "a", "b"), "abc")
	t.is(putAfter("ac", 0, "b"), "abc")

	t.deepEqual(putAfter(["a", "c"], "a", "b"), ["a", "b", "c"])
	t.deepEqual(putAfter(["a", "c"], 0, "b"), ["a", "b", "c"])
})
