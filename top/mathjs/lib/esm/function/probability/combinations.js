import { factory } from '../../utils/factory.js';
import { combinationsNumber } from '../../plain/number/combinations.js';
var name = 'combinations';
var dependencies = ['typed'];
export var createCombinations = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Compute the number of ways of picking `k` unordered outcomes from `n`
   * possibilities.
   *
   * Combinations only takes integer arguments.
   * The following condition must be enforced: k <= n.
   *
   * Syntax:
   *
   *     math.combinations(n, k)
   *
   * Examples:
   *
   *    math.combinations(7, 5) // returns 21
   *
   * See also:
   *
   *    combinationsWithRep, permutations, factorial
   *
   * @param {number | BigNumber} n    Total number of objects in the set
   * @param {number | BigNumber} k    Number of objects in the subset
   * @return {number | BigNumber}     Number of possible combinations.
   */
  return typed(name, {
    'number, number': combinationsNumber,
    'BigNumber, BigNumber': function BigNumber_BigNumber(n, k) {
      var BigNumber = n.constructor;
      var result, i;
      var nMinusk = n.minus(k);
      var one = new BigNumber(1);
      if (!isPositiveInteger(n) || !isPositiveInteger(k)) {
        throw new TypeError('Positive integer value expected in function combinations');
      }
      if (k.gt(n)) {
        throw new TypeError('k must be less than n in function combinations');
      }
      result = one;
      if (k.lt(nMinusk)) {
        for (i = one; i.lte(nMinusk); i = i.plus(one)) {
          result = result.times(k.plus(i)).dividedBy(i);
        }
      } else {
        for (i = one; i.lte(k); i = i.plus(one)) {
          result = result.times(nMinusk.plus(i)).dividedBy(i);
        }
      }
      return result;
    }

    // TODO: implement support for collection in combinations
  });
});

/**
 * Test whether BigNumber n is a positive integer
 * @param {BigNumber} n
 * @returns {boolean} isPositiveInteger
 */
function isPositiveInteger(n) {
  return n.isInteger() && n.gte(0);
}