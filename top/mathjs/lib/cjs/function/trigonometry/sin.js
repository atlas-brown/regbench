"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSin = void 0;
var _factory = require("../../utils/factory.js");
var _trigUnit = require("./trigUnit.js");
const name = 'sin';
const dependencies = ['typed'];
const createSin = exports.createSin = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  const trigUnit = (0, _trigUnit.createTrigUnit)({
    typed
  });

  /**
   * Calculate the sine of a value.
   *
   * To avoid confusion with the matrix sine, this function does not apply
   * to matrices.
   *
   * Syntax:
   *
   *    math.sin(x)
   *
   * Examples:
   *
   *    math.sin(2)                      // returns number 0.9092974268256813
   *    math.sin(math.pi / 4)            // returns number 0.7071067811865475
   *    math.sin(math.unit(90, 'deg'))   // returns number 1
   *    math.sin(math.unit(30, 'deg'))   // returns number 0.5
   *
   *    const angle = 0.2
   *    math.pow(math.sin(angle), 2) + math.pow(math.cos(angle), 2) // returns number 1
   *
   * See also:
   *
   *    cos, tan
   *
   * @param {number | BigNumber | Complex | Unit} x  Function input
   * @return {number | BigNumber | Complex} Sine of x
   */
  return typed(name, {
    number: Math.sin,
    'Complex | BigNumber': x => x.sin()
  }, trigUnit);
});