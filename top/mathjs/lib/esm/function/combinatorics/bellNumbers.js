import { factory } from '../../utils/factory.js';
var name = 'bellNumbers';
var dependencies = ['typed', 'addScalar', 'isNegative', 'isInteger', 'stirlingS2'];
export var createBellNumbers = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    addScalar,
    isNegative,
    isInteger,
    stirlingS2
  } = _ref;
  /**
   * The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S.
   * bellNumbers only takes integer arguments.
   * The following condition must be enforced: n >= 0
   *
   * Syntax:
   *
   *   math.bellNumbers(n)
   *
   * Examples:
   *
   *    math.bellNumbers(3) // returns 5
   *    math.bellNumbers(8) // returns 4140
   *
   * See also:
   *
   *    stirlingS2
   *
   * @param {Number | BigNumber} n    Total number of objects in the set
   * @return {Number | BigNumber}     B(n)
   */
  return typed(name, {
    'number | BigNumber': function number__BigNumber(n) {
      if (!isInteger(n) || isNegative(n)) {
        throw new TypeError('Non-negative integer value expected in function bellNumbers');
      }

      // Sum (k=0, n) S(n,k).
      var result = 0;
      for (var i = 0; i <= n; i++) {
        result = addScalar(result, stirlingS2(n, i));
      }
      return result;
    }
  });
});