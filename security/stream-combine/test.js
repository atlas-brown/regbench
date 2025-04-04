const test = require("tape");
const StreamCombine = require("./");
const { Readable } = require("stream");

test("StreamCombine", (t) => {
  t.test("should throw an error if streams argument is not provided", (t) => {
    t.throws(
      () => new StreamCombine(),
      /Streams argument is required/,
      "throws an error"
    );
    t.end();
  });

  t.test("should throw an error if streams argument is not an array", (t) => {
    t.throws(
      () => new StreamCombine({}),
      /Streams should be an Array/,
      "throws an error"
    );
    t.end();
  });

  t.test("should throw an error if streams array is empty", (t) => {
    t.throws(
      () => new StreamCombine([]),
      /Streams array should not be empty/,
      "throws an error"
    );
    t.end();
  });

  t.test("should throw an error if key argument is not provided", (t) => {
    t.throws(
      () => new StreamCombine([new Readable()]),
      /Key argument is required/,
      "throws an error"
    );
    t.end();
  });

  t.test("should combine streams based on the provided key", (t) => {
    const stream1 = new Readable({ objectMode: true });
    const stream2 = new Readable({ objectMode: true });

    const result = [];
    const combinedStream = new StreamCombine([stream1, stream2], "id");
    combinedStream.on("end", () => {
      t.deepEqual(
        result,
        [
          { data: [{ id: 1, value: "A" }], indexes: [0], id: 1 },
          { data: [{ id: 2, value: "B" }], indexes: [1], id: 2 },
          { data: [{ id: 3, value: "C" }], indexes: [0], id: 3 },
          { data: [{ id: 4, value: "D" }], indexes: [1], id: 4 },
        ],
        "combines streams correctly"
      );
      t.end();
    });

    stream1.push({ id: 1, value: "A" });
    stream1.push({ id: 3, value: "C" });
    stream1.push(null);

    stream2.push({ id: 2, value: "B" });
    stream2.push({ id: 4, value: "D" });
    stream2.push(null);

    combinedStream.on("data", (data) => {
      result.push(data);
    });
  });
});