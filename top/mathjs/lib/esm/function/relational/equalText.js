import { factory } from '../../utils/factory.js';
var name = 'equalText';
var dependencies = ['typed', 'compareText', 'isZero'];
export var createEqualText = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    compareText,
    isZero
  } = _ref;
  /**
   * Check equality of two strings. Comparison is case sensitive.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.equalText(x, y)
   *
   * Examples:
   *
   *    math.equalText('Hello', 'Hello')     // returns true
   *    math.equalText('a', 'A')             // returns false
   *    math.equal('2e3', '2000')            // returns true
   *    math.equalText('2e3', '2000')        // returns false
   *
   *    math.equalText('B', ['A', 'B', 'C']) // returns [false, true, false]
   *
   * See also:
   *
   *    equal, compareText, compare, compareNatural
   *
   * @param  {string | Array | DenseMatrix} x First string to compare
   * @param  {string | Array | DenseMatrix} y Second string to compare
   * @return {number | Array | DenseMatrix} Returns true if the values are equal, and false if not.
   */
  return typed(name, {
    'any, any': function any_any(x, y) {
      return isZero(compareText(x, y));
    }
  });
});