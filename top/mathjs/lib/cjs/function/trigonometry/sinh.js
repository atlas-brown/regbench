"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSinh = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
const name = 'sinh';
const dependencies = ['typed'];
const createSinh = exports.createSinh = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Calculate the hyperbolic sine of a value,
   * defined as `sinh(x) = 1/2 * (exp(x) - exp(-x))`.
   *
   * To avoid confusion with the matrix hyperbolic sine, this function does
   * not apply to matrices.
   *
   * Syntax:
   *
   *    math.sinh(x)
   *
   * Examples:
   *
   *    math.sinh(0.5)       // returns number 0.5210953054937474
   *
   * See also:
   *
   *    cosh, tanh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic sine of x
   */
  return typed(name, {
    number: _index.sinhNumber,
    'Complex | BigNumber': x => x.sinh()
  });
});