"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeepEqual = void 0;
var _factory = require("../../utils/factory.js");
const name = 'deepEqual';
const dependencies = ['typed', 'equal'];
const createDeepEqual = exports.createDeepEqual = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    equal
  } = _ref;
  /**
   * Test element wise whether two matrices are equal.
   * The function accepts both matrices and scalar values.
   *
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.deepEqual(x, y)
   *
   * Examples:
   *
   *    math.deepEqual(2, 4)   // returns false
   *
   *    a = [2, 5, 1]
   *    b = [2, 7, 1]
   *
   *    math.deepEqual(a, b)   // returns false
   *    math.equal(a, b)       // returns [true, false, true]
   *
   * See also:
   *
   *    equal, unequal
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x First matrix to compare
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Second matrix to compare
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}
   *            Returns true when the input matrices have the same size and each of their elements is equal.
   */
  return typed(name, {
    'any, any': function (x, y) {
      return _deepEqual(x.valueOf(), y.valueOf());
    }
  });

  /**
   * Test whether two arrays have the same size and all elements are equal
   * @param {Array | *} x
   * @param {Array | *} y
   * @return {boolean} Returns true if both arrays are deep equal
   */
  function _deepEqual(x, y) {
    if (Array.isArray(x)) {
      if (Array.isArray(y)) {
        const len = x.length;
        if (len !== y.length) {
          return false;
        }
        for (let i = 0; i < len; i++) {
          if (!_deepEqual(x[i], y[i])) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    } else {
      if (Array.isArray(y)) {
        return false;
      } else {
        return equal(x, y);
      }
    }
  }
});