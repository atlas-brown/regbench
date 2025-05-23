"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProd = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _number = require("../../utils/number.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
const name = 'prod';
const dependencies = ['typed', 'config', 'multiplyScalar', 'numeric'];
const createProd = exports.createProd = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    multiplyScalar,
    numeric
  } = _ref;
  /**
   * Compute the product of a matrix or a list with values.
   * In case of a multidimensional array or matrix, the sum of all
   * elements will be calculated.
   *
   * Syntax:
   *
   *     math.prod(a, b, c, ...)
   *     math.prod(A)
   *
   * Examples:
   *
   *     math.multiply(2, 3)           // returns 6
   *     math.prod(2, 3)               // returns 6
   *     math.prod(2, 3, 4)            // returns 24
   *     math.prod([2, 3, 4])          // returns 24
   *     math.prod([[2, 5], [4, 3]])   // returns 120
   *
   * See also:
   *
   *    mean, median, min, max, sum, std, variance
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The product of all values
   */
  return typed(name, {
    // prod([a, b, c, d, ...])
    'Array | Matrix': _prod,
    // prod([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function (array, dim) {
      // TODO: implement prod(A, dim)
      throw new Error('prod(A, dim) is not yet supported');
      // return reduce(arguments[0], arguments[1], math.prod)
    },
    // prod(a, b, c, d, ...)
    '...': function (args) {
      return _prod(args);
    }
  });

  /**
   * Recursively calculate the product of an n-dimensional array
   * @param {Array} array
   * @return {number} prod
   * @private
   */
  function _prod(array) {
    let prod;
    (0, _collection.deepForEach)(array, function (value) {
      try {
        prod = prod === undefined ? value : multiplyScalar(prod, value);
      } catch (err) {
        throw (0, _improveErrorMessage.improveErrorMessage)(err, 'prod', value);
      }
    });

    // make sure returning numeric value: parse a string into a numeric value
    if (typeof prod === 'string') {
      prod = numeric(prod, (0, _number.safeNumberType)(prod, config));
    }
    if (prod === undefined) {
      throw new Error('Cannot calculate prod of an empty array');
    }
    return prod;
  }
});