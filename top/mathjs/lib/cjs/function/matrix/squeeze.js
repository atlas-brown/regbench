"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSqueeze = void 0;
var _object = require("../../utils/object.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
const name = 'squeeze';
const dependencies = ['typed'];
const createSqueeze = exports.createSqueeze = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Squeeze a matrix, remove inner and outer singleton dimensions from a matrix.
   *
   * Syntax:
   *
   *     math.squeeze(x)
   *
   * Examples:
   *
   *     math.squeeze([3])           // returns 3
   *     math.squeeze([[3]])         // returns 3
   *
   *     const A = math.zeros(3, 1)    // returns [[0], [0], [0]] (size 3x1)
   *     math.squeeze(A)             // returns [0, 0, 0] (size 3)
   *
   *     const B = math.zeros(1, 3)    // returns [[0, 0, 0]] (size 1x3)
   *     math.squeeze(B)             // returns [0, 0, 0] (size 3)
   *
   *     // only inner and outer dimensions are removed
   *     const C = math.zeros(2, 1, 3) // returns [[[0, 0, 0]], [[0, 0, 0]]] (size 2x1x3)
   *     math.squeeze(C)             // returns [[[0, 0, 0]], [[0, 0, 0]]] (size 2x1x3)
   *
   * See also:
   *
   *     subset
   *
   * @param {Matrix | Array} x      Matrix to be squeezed
   * @return {Matrix | Array} Squeezed matrix
   */
  return typed(name, {
    Array: function (x) {
      return (0, _array.squeeze)((0, _object.clone)(x));
    },
    Matrix: function (x) {
      const res = (0, _array.squeeze)(x.toArray());
      // FIXME: return the same type of matrix as the input
      return Array.isArray(res) ? x.create(res, x.datatype()) : res;
    },
    any: function (x) {
      // scalar
      return (0, _object.clone)(x);
    }
  });
});