import { factory } from '../../utils/factory.js';
var name = 'catalan';
var dependencies = ['typed', 'addScalar', 'divideScalar', 'multiplyScalar', 'combinations', 'isNegative', 'isInteger'];
export var createCatalan = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    addScalar,
    divideScalar,
    multiplyScalar,
    combinations,
    isNegative,
    isInteger
  } = _ref;
  /**
   * The Catalan Numbers enumerate combinatorial structures of many different types.
   * catalan only takes integer arguments.
   * The following condition must be enforced: n >= 0
   *
   * Syntax:
   *
   *   math.catalan(n)
   *
   * Examples:
   *
   *    math.catalan(3) // returns 5
   *    math.catalan(8) // returns 1430
   *
   * See also:
   *
   *    bellNumbers
   *
   * @param {Number | BigNumber} n    nth Catalan number
   * @return {Number | BigNumber}     Cn(n)
   */
  return typed(name, {
    'number | BigNumber': function number__BigNumber(n) {
      if (!isInteger(n) || isNegative(n)) {
        throw new TypeError('Non-negative integer value expected in function catalan');
      }
      return divideScalar(combinations(multiplyScalar(n, 2), n), addScalar(n, 1));
    }
  });
});