import { deepForEach } from '../../utils/collection.js';
import { factory } from '../../utils/factory.js';
import { safeNumberType } from '../../utils/number.js';
import { improveErrorMessage } from './utils/improveErrorMessage.js';
var name = 'prod';
var dependencies = ['typed', 'config', 'multiplyScalar', 'numeric'];
export var createProd = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
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
    'Array | Matrix, number | BigNumber': function Array__Matrix_number__BigNumber(array, dim) {
      // TODO: implement prod(A, dim)
      throw new Error('prod(A, dim) is not yet supported');
      // return reduce(arguments[0], arguments[1], math.prod)
    },
    // prod(a, b, c, d, ...)
    '...': function _(args) {
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
    var prod;
    deepForEach(array, function (value) {
      try {
        prod = prod === undefined ? value : multiplyScalar(prod, value);
      } catch (err) {
        throw improveErrorMessage(err, 'prod', value);
      }
    });

    // make sure returning numeric value: parse a string into a numeric value
    if (typeof prod === 'string') {
      prod = numeric(prod, safeNumberType(prod, config));
    }
    if (prod === undefined) {
      throw new Error('Cannot calculate prod of an empty array');
    }
    return prod;
  }
});