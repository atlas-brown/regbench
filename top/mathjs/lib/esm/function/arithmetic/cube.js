import { factory } from '../../utils/factory.js';
import { cubeNumber } from '../../plain/number/index.js';
var name = 'cube';
var dependencies = ['typed'];
export var createCube = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Compute the cube of a value, `x * x * x`.
   * To avoid confusion with `pow(M,3)`, this function does not apply to matrices.
   * If you wish to cube every entry of a matrix, see the examples.
   *
   * Syntax:
   *
   *    math.cube(x)
   *
   * Examples:
   *
   *    math.cube(2)            // returns number 8
   *    math.pow(2, 3)          // returns number 8
   *    math.cube(4)            // returns number 64
   *    4 * 4 * 4               // returns number 64
   *
   *    math.map([1, 2, 3, 4], math.cube) // returns Array [1, 8, 27, 64]
   *
   * See also:
   *
   *    multiply, square, pow, cbrt
   *
   * @param  {number | BigNumber | bigint | Fraction | Complex | Unit} x  Number for which to calculate the cube
   * @return {number | BigNumber | bigint | Fraction | Complex | Unit} Cube of x
   */
  return typed(name, {
    number: cubeNumber,
    Complex: function Complex(x) {
      return x.mul(x).mul(x); // Is faster than pow(x, 3)
    },
    BigNumber: function BigNumber(x) {
      return x.times(x).times(x);
    },
    bigint: function bigint(x) {
      return x * x * x;
    },
    Fraction: function Fraction(x) {
      return x.pow(3); // Is faster than mul()mul()mul()
    },
    Unit: function Unit(x) {
      return x.pow(3);
    }
  });
});