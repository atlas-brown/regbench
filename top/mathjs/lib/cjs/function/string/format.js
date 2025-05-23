"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormat = void 0;
var _string = require("../../utils/string.js");
var _factory = require("../../utils/factory.js");
const name = 'format';
const dependencies = ['typed'];
const createFormat = exports.createFormat = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Format a value of any type into a string.
   *
   * Syntax:
   *
   *    math.format(value)
   *    math.format(value, options)
   *    math.format(value, precision)
   *    math.format(value, callback)
   *
   * Where:
   *
   *  - `value: *`
   *    The value to be formatted
   *  - `options: Object`
   *    An object with formatting options. Available options:
   *    - `notation: string`
   *      Number notation. Choose from:
   *      - `'fixed'`
   *        Always use regular number notation.
   *        For example `'123.40'` and `'14000000'`
   *      - `'exponential'`
   *        Always use exponential notation.
   *        For example `'1.234e+2'` and `'1.4e+7'`
   *      - `'engineering'`
   *        Always use engineering notation: always have exponential notation,
   *        and select the exponent to be a multiple of `3`.
   *        For example `'123.4e+0'` and `'14.0e+6'`
   *      - `'auto'` (default)
   *        Regular number notation for numbers having an absolute value between
   *        `lower` and `upper` bounds, and uses exponential notation elsewhere.
   *        Lower bound is included, upper bound is excluded.
   *        For example `'123.4'` and `'1.4e7'`.
   *      - `'bin'`, `'oct'`, or `'hex'`
   *        Format the number using binary, octal, or hexadecimal notation.
   *        For example `'0b1101'` and `'0x10fe'`.
   *    - `wordSize: number | BigNumber`
   *      The word size in bits to use for formatting in binary, octal, or
   *      hexadecimal notation. To be used only with `'bin'`, `'oct'`, or `'hex'`
   *      values for `notation` option. When this option is defined the value
   *      is formatted as a signed twos complement integer of the given word
   *      size and the size suffix is appended to the output.
   *      For example `format(-1, {notation: 'hex', wordSize: 8}) === '0xffi8'`.
   *      Default value is undefined.
   *    - `precision: number | BigNumber`
   *      Limit the number of digits of the formatted value.
   *      For regular numbers, must be a number between `0` and `16`.
   *      For bignumbers, the maximum depends on the configured precision,
   *      see function `config()`.
   *      In case of notations `'exponential'`, `'engineering'`, and `'auto'`,
   *      `precision` defines the total number of significant digits returned.
   *      In case of notation `'fixed'`, `precision` defines the number of
   *      significant digits after the decimal point.
   *      `precision` is undefined by default.
   *    - `lowerExp: number`
   *      Exponent determining the lower boundary for formatting a value with
   *      an exponent when `notation='auto'`. Default value is `-3`.
   *    - `upperExp: number`
   *      Exponent determining the upper boundary for formatting a value with
   *      an exponent when `notation='auto'`. Default value is `5`.
   *    - `fraction: string`. Available values: `'ratio'` (default) or `'decimal'`.
   *      For example `format(fraction(1, 3))` will output `'1/3'` when `'ratio'`
   *      is configured, and will output `'0.(3)'` when `'decimal'` is configured.
   *    - `truncate: number`. Specifies the maximum allowed length of the
   *      returned string. If it had been longer, the excess characters
   *      are deleted and replaced with `'...'`.
   * - `callback: function`
   *   A custom formatting function, invoked for all numeric elements in `value`,
   *   for example all elements of a matrix, or the real and imaginary
   *   parts of a complex number. This callback can be used to override the
   *   built-in numeric notation with any type of formatting. Function `callback`
   *   is called with `value` as parameter and must return a string.
   *
   * When `value` is an Object:
   *
   * - When the object contains a property `format` being a function, this function
   *   is invoked as `value.format(options)` and the result is returned.
   * - When the object has its own `toString` method, this method is invoked
   *   and the result is returned.
   * - In other cases the function will loop over all object properties and
   *   return JSON object notation like '{"a": 2, "b": 3}'.
   *
   * When value is a function:
   *
   * - When the function has a property `syntax`, it returns this
   *   syntax description.
   * - In other cases, a string `'function'` is returned.
   *
   * Examples:
   *
   *    math.format(6.4)                                        // returns '6.4'
   *    math.format(1240000)                                    // returns '1.24e+6'
   *    math.format(1/3)                                        // returns '0.3333333333333333'
   *    math.format(1/3, 3)                                     // returns '0.333'
   *    math.format(21385, 2)                                   // returns '21000'
   *    math.format(12e8, {notation: 'fixed'})                  // returns '1200000000'
   *    math.format(2.3,  {notation: 'fixed', precision: 4})    // returns '2.3000'
   *    math.format(52.8, {notation: 'exponential'})            // returns '5.28e+1'
   *    math.format(12400, {notation: 'engineering'})           // returns '12.4e+3'
   *    math.format(2000, {lowerExp: -2, upperExp: 2})          // returns '2e+3'
   *
   *    function formatCurrency(value) {
   *      // return currency notation with two digits:
   *      return '$' + value.toFixed(2)
   *
   *      // you could also use math.format inside the callback:
   *      // return '$' + math.format(value, {notation: 'fixed', precision: 2})
   *    }
   *    math.format([2.1, 3, 0.016], formatCurrency)            // returns '[$2.10, $3.00, $0.02]'
   *
   * See also:
   *
   *    print
   *
   * @param {*} value                               Value to be stringified
   * @param {Object | Function | number} [options]  Formatting options
   * @return {string} The formatted value
   */
  return typed(name, {
    any: _string.format,
    'any, Object | function | number | BigNumber': _string.format
  });
});