"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSum = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _number = require("../../utils/number.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
const name = 'sum';
const dependencies = ['typed', 'config', 'add', 'numeric'];
const createSum = exports.createSum = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    add,
    numeric
  } = _ref;
  /**
   * Compute the sum of a matrix or a list with values.
   * In case of a multidimensional array or matrix, the sum of all
   * elements will be calculated.
   *
   * Syntax:
   *
   *     math.sum(a, b, c, ...)
   *     math.sum(A)
   *     math.sum(A, dimension)
   *
   * Examples:
   *
   *     math.sum(2, 1, 4, 3)               // returns 10
   *     math.sum([2, 1, 4, 3])             // returns 10
   *     math.sum([[2, 5], [4, 3], [1, 7]]) // returns 22
   *
   * See also:
   *
   *    mean, median, min, max, prod, std, variance, cumsum
   *
   * @param {... *} args  A single matrix or multiple scalar values
   * @return {*} The sum of all values
   */
  return typed(name, {
    // sum([a, b, c, d, ...])
    'Array | Matrix': _sum,
    // sum([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': _nsumDim,
    // sum(a, b, c, d, ...)
    '...': function (args) {
      if ((0, _collection.containsCollections)(args)) {
        throw new TypeError('Scalar values expected in function sum');
      }
      return _sum(args);
    }
  });

  /**
   * Recursively calculate the sum of an n-dimensional array
   * @param {Array | Matrix} array
   * @return {number} sum
   * @private
   */
  function _sum(array) {
    let sum;
    (0, _collection.deepForEach)(array, function (value) {
      try {
        sum = sum === undefined ? value : add(sum, value);
      } catch (err) {
        throw (0, _improveErrorMessage.improveErrorMessage)(err, 'sum', value);
      }
    });

    // make sure returning numeric value: parse a string into a numeric value
    if (sum === undefined) {
      sum = numeric(0, config.number);
    }
    if (typeof sum === 'string') {
      sum = numeric(sum, (0, _number.safeNumberType)(sum, config));
    }
    return sum;
  }
  function _nsumDim(array, dim) {
    try {
      const sum = (0, _collection.reduce)(array, dim, add);
      return sum;
    } catch (err) {
      throw (0, _improveErrorMessage.improveErrorMessage)(err, 'sum');
    }
  }
});