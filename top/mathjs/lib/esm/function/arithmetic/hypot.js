import { factory } from '../../utils/factory.js';
import { flatten } from '../../utils/array.js';
import { isComplex } from '../../utils/is.js';
var name = 'hypot';
var dependencies = ['typed', 'abs', 'addScalar', 'divideScalar', 'multiplyScalar', 'sqrt', 'smaller', 'isPositive'];
export var createHypot = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    abs,
    addScalar,
    divideScalar,
    multiplyScalar,
    sqrt,
    smaller,
    isPositive
  } = _ref;
  /**
   * Calculate the hypotenuse of a list with values. The hypotenuse is defined as:
   *
   *     hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...)
   *
   * For matrix input, the hypotenuse is calculated for all values in the matrix.
   *
   * Syntax:
   *
   *     math.hypot(a, b, ...)
   *     math.hypot([a, b, c, ...])
   *
   * Examples:
   *
   *     math.hypot(3, 4)      // 5
   *     math.hypot(3, 4, 5)   // 7.0710678118654755
   *     math.hypot([3, 4, 5]) // 7.0710678118654755
   *     math.hypot(-2)        // 2
   *
   * See also:
   *
   *     abs, norm
   *
   * @param {... number | BigNumber | Array | Matrix} args    A list with numeric values or an Array or Matrix.
   *                                                          Matrix and Array input is flattened and returns a
   *                                                          single number for the whole matrix.
   * @return {number | BigNumber} Returns the hypothenusa of the input values.
   */
  return typed(name, {
    '... number | BigNumber': _hypot,
    Array: _hypot,
    Matrix: M => _hypot(flatten(M.toArray(), true))
  });

  /**
   * Calculate the hypotenuse for an Array with values
   * @param {Array.<number | BigNumber>} args
   * @return {number | BigNumber} Returns the result
   * @private
   */
  function _hypot(args) {
    // code based on `hypot` from es6-shim:
    // https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L1619-L1633
    var result = 0;
    var largest = 0;
    for (var i = 0; i < args.length; i++) {
      if (isComplex(args[i])) {
        throw new TypeError('Unexpected type of argument to hypot');
      }
      var value = abs(args[i]);
      if (smaller(largest, value)) {
        result = multiplyScalar(result, multiplyScalar(divideScalar(largest, value), divideScalar(largest, value)));
        result = addScalar(result, 1);
        largest = value;
      } else {
        result = addScalar(result, isPositive(value) ? multiplyScalar(divideScalar(value, largest), divideScalar(value, largest)) : value);
      }
    }
    return multiplyScalar(largest, sqrt(result));
  }
});