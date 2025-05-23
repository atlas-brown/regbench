"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsNumeric = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
const name = 'isNumeric';
const dependencies = ['typed'];
const createIsNumeric = exports.createIsNumeric = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Test whether a value is an numeric value.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isNumeric(x)
   *
   * Examples:
   *
   *    math.isNumeric(2)                     // returns true
   *    math.isNumeric('2')                   // returns false
   *    math.hasNumericValue('2')             // returns true
   *    math.isNumeric(0)                     // returns true
   *    math.isNumeric(math.bignumber('42'))  // returns true
   *    math.isNumeric(math.bigint('42'))     // returns true
   *    math.isNumeric(math.fraction(4))      // returns true
   *    math.isNumeric(math.complex('2-4i'))  // returns false
   *    math.isNumeric([2.3, 'foo', false])   // returns [true, false, true]
   *
   * See also:
   *
   *    isZero, isPositive, isNegative, isInteger, hasNumericValue
   *
   * @param {*} x       Value to be tested
   * @return {boolean}  Returns true when `x` is a `number`, `BigNumber`,
   *                    `Fraction`, or `boolean`. Returns false for other types.
   *                    Throws an error in case of unknown types.
   */
  return typed(name, {
    'number | BigNumber | bigint | Fraction | boolean': () => true,
    'Complex | Unit | string | null | undefined | Node': () => false,
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self))
  });
});