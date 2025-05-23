"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAcot = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
const name = 'acot';
const dependencies = ['typed', 'BigNumber'];
const createAcot = exports.createAcot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    BigNumber
  } = _ref;
  /**
   * Calculate the inverse cotangent of a value, defined as `acot(x) = atan(1/x)`.
   *
   * To avoid confusion with the matrix arccotanget, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.acot(x)
   *
   * Examples:
   *
   *    math.acot(0.5)           // returns number 1.1071487177940904
   *    math.acot(2)             // returns number 0.4636476090008061
   *    math.acot(math.cot(1.5)) // returns number 1.5
   *
   * See also:
   *
   *    cot, atan
   *
   * @param {number | BigNumber| Complex} x   Function input
   * @return {number | BigNumber| Complex} The arc cotangent of x
   */
  return typed(name, {
    number: _index.acotNumber,
    Complex: function (x) {
      return x.acot();
    },
    BigNumber: function (x) {
      return new BigNumber(1).div(x).atan();
    }
  });
});