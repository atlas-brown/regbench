"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetSize = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
const name = 'setSize';
const dependencies = ['typed', 'compareNatural'];
const createSetSize = exports.createSetSize = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    compareNatural
  } = _ref;
  /**
   * Count the number of elements of a (multi)set. When a second parameter is 'true', count only the unique values.
   * A multi-dimension array will be converted to a single-dimension array before the operation.
   *
   * Syntax:
   *
   *    math.setSize(set)
   *    math.setSize(set, unique)
   *
   * Examples:
   *
   *    math.setSize([1, 2, 2, 4])          // returns 4
   *    math.setSize([1, 2, 2, 4], true)    // returns 3
   *
   * See also:
   *
   *    setUnion, setIntersect, setDifference
   *
   * @param {Array | Matrix} a  A multiset
   * @param {boolean} [unique]  If true, only the unique values are counted. False by default
   * @return {number}           The number of elements of the (multi)set
   */
  return typed(name, {
    'Array | Matrix': function (a) {
      return Array.isArray(a) ? (0, _array.flatten)(a).length : (0, _array.flatten)(a.toArray()).length;
    },
    'Array | Matrix, boolean': function (a, unique) {
      if (unique === false || a.length === 0) {
        return Array.isArray(a) ? (0, _array.flatten)(a).length : (0, _array.flatten)(a.toArray()).length;
      } else {
        const b = (0, _array.flatten)(Array.isArray(a) ? a : a.toArray()).sort(compareNatural);
        let count = 1;
        for (let i = 1; i < b.length; i++) {
          if (compareNatural(b[i], b[i - 1]) !== 0) {
            count++;
          }
        }
        return count;
      }
    }
  });
});