"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetIntersect = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
const name = 'setIntersect';
const dependencies = ['typed', 'size', 'subset', 'compareNatural', 'Index', 'DenseMatrix'];
const createSetIntersect = exports.createSetIntersect = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    size,
    subset,
    compareNatural,
    Index,
    DenseMatrix
  } = _ref;
  /**
   * Create the intersection of two (multi)sets.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setIntersect(set1, set2)
   *
   * Examples:
   *
   *    math.setIntersect([1, 2, 3, 4], [3, 4, 5, 6])            // returns [3, 4]
   *    math.setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [3, 4]
   *
   * See also:
   *
   *    setUnion, setDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The intersection of two (multi)sets
   */
  return typed(name, {
    'Array | Matrix, Array | Matrix': function (a1, a2) {
      let result;
      if (subset(size(a1), new Index(0)) === 0 || subset(size(a2), new Index(0)) === 0) {
        // of any of them is empty, return empty
        result = [];
      } else {
        const b1 = (0, _array.identify)((0, _array.flatten)(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural));
        const b2 = (0, _array.identify)((0, _array.flatten)(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural));
        result = [];
        for (let i = 0; i < b1.length; i++) {
          for (let j = 0; j < b2.length; j++) {
            if (compareNatural(b1[i].value, b2[j].value) === 0 && b1[i].identifier === b2[j].identifier) {
              // the identifier is always a decimal int
              result.push(b1[i]);
              break;
            }
          }
        }
      }
      // return an array, if both inputs were arrays
      if (Array.isArray(a1) && Array.isArray(a2)) {
        return (0, _array.generalize)(result);
      }
      // return a matrix otherwise
      return new DenseMatrix((0, _array.generalize)(result));
    }
  });
});