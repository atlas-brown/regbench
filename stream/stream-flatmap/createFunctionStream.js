const { Transform } = require('stream');

/**
 * Creates a stream that applies the given function to each chunk of data.
 * @param {Function} fn - The function to apply to each chunk.
 * @param {Object} opts - Optional configuration for the Transform stream.
 * @returns {Transform} - A Transform stream that applies the function.
 */
function createFunctionStream(fn, opts = {}) {
  return new Transform({
    ...opts,
    objectMode: true, // Enable object mode to support non-buffer data
    transform(chunk, encoding, callback) {

      try {
        // Apply the provided function to the chunk
          fn(chunk, (error, result) => {
              if (error) {
                // Handle errors by passing them to the callback
                callback(error);
                return;
              }
              this.push(result);
          });
        
        // Signal that transformation is complete
        callback();
      } catch (err) {
        // Handle errors by passing them to the callback
        callback(err);
      }
    }
  });
}

module.exports = createFunctionStream;
