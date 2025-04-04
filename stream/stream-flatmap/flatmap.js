function flatMap(mapper, chunk, cb) {
    if (Array.isArray(chunk)) {
      chunk.forEach((c) => mapper(c, cb));
    } else {
      // Push the result directly if it's not an array
      mapper(chunk, cb);
    }
}

module.exports = flatMap;
