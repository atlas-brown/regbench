"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBellNumbers = void 0;
var _factory = require("../../utils/factory.js");
const name = 'bellNumbers';
const dependencies = ['typed', 'addScalar', 'isNegative', 'isInteger', 'stirlingS2'];
const createBellNumbers = exports.createBellNumbers = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    addScalar,
    isNegative,
    isInteger,
    stirlingS2
  } = _ref;
  /**
   * The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S.
   * bellNumbers only takes integer arguments.
   * The following condition must be enforced: n >= 0
   *
   * Syntax:
   *
   *   math.bellNumbers(n)
   *
   * Examples:
   *
   *    math.bellNumbers(3) // returns 5
   *    math.bellNumbers(8) // returns 4140
   *
   * See also:
   *
   *    stirlingS2
   *
   * @param {Number | BigNumber} n    Total number of objects in the set
   * @return {Number | BigNumber}     B(n)
   */
  return typed(name, {
    'number | BigNumber': function (n) {
      if (!isInteger(n) || isNegative(n)) {
        throw new TypeError('Non-negative integer value expected in function bellNumbers');
      }

      // Sum (k=0, n) S(n,k).
      let result = 0;
      for (let i = 0; i <= n; i++) {
        result = addScalar(result, stirlingS2(n, i));
      }
      return result;
    }
  });
});