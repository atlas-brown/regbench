"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAtan = void 0;
var _factory = require("../../utils/factory.js");
const name = 'atan';
const dependencies = ['typed'];
const createAtan = exports.createAtan = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Calculate the inverse tangent of a value.
   *
   * To avoid confusion with matrix arctangent, this function does not apply
   * to matrices.
   *
   * Syntax:
   *
   *    math.atan(x)
   *
   * Examples:
   *
   *    math.atan(0.5)           // returns number 0.4636476090008061
   *    math.atan(2)             // returns number 1.1071487177940904
   *    math.atan(math.tan(1.5)) // returns number 1.5
   *
   * See also:
   *
   *    tan, asin, acos
   *
   * @param {number | BigNumber | Complex} x   Function input
   * @return {number | BigNumber | Complex} The arc tangent of x
   */
  return typed('atan', {
    number: function (x) {
      return Math.atan(x);
    },
    Complex: function (x) {
      return x.atan();
    },
    BigNumber: function (x) {
      return x.atan();
    }
  });
});