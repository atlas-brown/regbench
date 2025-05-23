"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConcatTransform = void 0;
var _is = require("../../utils/is.js");
var _errorTransform = require("./utils/errorTransform.js");
var _factory = require("../../utils/factory.js");
var _concat = require("../../function/matrix/concat.js");
const name = 'concat';
const dependencies = ['typed', 'matrix', 'isInteger'];
const createConcatTransform = exports.createConcatTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    isInteger
  } = _ref;
  const concat = (0, _concat.createConcat)({
    typed,
    matrix,
    isInteger
  });

  /**
   * Attach a transform function to math.range
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function concat
   * from one-based to zero based
   */
  return typed('concat', {
    '...any': function (args) {
      // change last argument from one-based to zero-based
      const lastIndex = args.length - 1;
      const last = args[lastIndex];
      if ((0, _is.isNumber)(last)) {
        args[lastIndex] = last - 1;
      } else if ((0, _is.isBigNumber)(last)) {
        args[lastIndex] = last.minus(1);
      }
      try {
        return concat.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});