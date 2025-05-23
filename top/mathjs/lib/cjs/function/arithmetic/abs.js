"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAbs = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var _index = require("../../plain/number/index.js");
const name = 'abs';
const dependencies = ['typed'];
const createAbs = exports.createAbs = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Calculate the absolute value of a number. For matrices, the function is
   * evaluated element wise.
   *
   * Syntax:
   *
   *    math.abs(x)
   *
   * Examples:
   *
   *    math.abs(3.5)                // returns number 3.5
   *    math.abs(-4.2)               // returns number 4.2
   *
   *    math.abs([3, -5, -1, 0, 2])  // returns Array [3, 5, 1, 0, 2]
   *
   * See also:
   *
   *    sign
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Array | Matrix | Unit} x
   *            A number or matrix for which to get the absolute value
   * @return {number | BigNumber | bigint | Fraction | Complex | Array | Matrix | Unit}
   *            Absolute value of `x`
   */
  return typed(name, {
    number: _index.absNumber,
    'Complex | BigNumber | Fraction | Unit': x => x.abs(),
    bigint: x => x < 0n ? -x : x,
    // deep map collection, skip zeros since abs(0) = 0
    'Array | Matrix': typed.referToSelf(self => x => (0, _collection.deepMap)(x, self, true))
  });
});