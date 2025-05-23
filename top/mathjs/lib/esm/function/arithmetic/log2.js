import { log2Number } from '../../plain/number/index.js';
import { promoteLogarithm } from '../../utils/bigint.js';
import { deepMap } from '../../utils/collection.js';
import { factory } from '../../utils/factory.js';
var name = 'log2';
var dependencies = ['typed', 'config', 'Complex'];
export var createLog2 = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    Complex
  } = _ref;
  /**
   * Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.log2(x)
   *
   * Examples:
   *
   *    math.log2(0.03125)           // returns -5
   *    math.log2(16)                // returns 4
   *    math.log2(16) / math.log2(2) // returns 4
   *    math.pow(2, 4)               // returns 16
   *
   * See also:
   *
   *    exp, log, log1p, log10
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the logarithm.
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            Returns the 2-base logarithm of `x`
   */
  function complexLog2Number(x) {
    return _log2Complex(new Complex(x, 0));
  }
  return typed(name, {
    number: function number(x) {
      if (x >= 0 || config.predictable) {
        return log2Number(x);
      } else {
        // negative value -> complex value computation
        return complexLog2Number(x);
      }
    },
    bigint: promoteLogarithm(4, log2Number, config, complexLog2Number),
    Complex: _log2Complex,
    BigNumber: function BigNumber(x) {
      if (!x.isNegative() || config.predictable) {
        return x.log(2);
      } else {
        // downgrade to number, return Complex valued result
        return complexLog2Number(x.toNumber());
      }
    },
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self))
  });

  /**
   * Calculate log2 for a complex value
   * @param {Complex} x
   * @returns {Complex}
   * @private
   */
  function _log2Complex(x) {
    var newX = Math.sqrt(x.re * x.re + x.im * x.im);
    return new Complex(Math.log2 ? Math.log2(newX) : Math.log(newX) / Math.LN2, Math.atan2(x.im, x.re) / Math.LN2);
  }
});