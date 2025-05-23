import { nearlyEqual as bigNearlyEqual } from '../../utils/bignumber/nearlyEqual.js';
import { nearlyEqual } from '../../utils/number.js';
import { factory } from '../../utils/factory.js';
import { createMatAlgo03xDSf } from '../../type/matrix/utils/matAlgo03xDSf.js';
import { createMatAlgo12xSfs } from '../../type/matrix/utils/matAlgo12xSfs.js';
import { createMatAlgo05xSfSf } from '../../type/matrix/utils/matAlgo05xSfSf.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
import { createCompareUnits } from './compareUnits.js';
var name = 'compare';
var dependencies = ['typed', 'config', 'matrix', 'equalScalar', 'BigNumber', 'Fraction', 'DenseMatrix', 'concat'];
export var createCompare = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    equalScalar,
    matrix,
    BigNumber,
    Fraction,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed,
    equalScalar
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });

  /**
   * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.
   *
   * x and y are considered equal when the relative difference between x and y
   * is smaller than the configured absTol and relTol. The function cannot be used to
   * compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.compare(x, y)
   *
   * Examples:
   *
   *    math.compare(6, 1)           // returns 1
   *    math.compare(2, 3)           // returns -1
   *    math.compare(7, 7)           // returns 0
   *    math.compare('10', '2')      // returns 1
   *    math.compare('1000', '1e3')  // returns 0
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('40 mm')
   *    math.compare(a, b)           // returns 1
   *
   *    math.compare(2, [1, 2, 3])   // returns [1, 0, -1]
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, larger, largerEq, compareNatural, compareText
   *
   * @param  {number | BigNumber | bigint | Fraction | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | bigint | Fraction | Unit | string | Array | Matrix} y Second value to compare
   * @return {number | BigNumber | bigint | Fraction | Array | Matrix} Returns the result of the comparison:
   *                                                          1 when x > y, -1 when x < y, and 0 when x == y.
   */
  return typed(name, createCompareNumber({
    typed,
    config
  }), {
    'boolean, boolean': function boolean_boolean(x, y) {
      return x === y ? 0 : x > y ? 1 : -1;
    },
    'BigNumber, BigNumber': function BigNumber_BigNumber(x, y) {
      return bigNearlyEqual(x, y, config.relTol, config.absTol) ? new BigNumber(0) : new BigNumber(x.cmp(y));
    },
    'bigint, bigint': function bigint_bigint(x, y) {
      return x === y ? 0n : x > y ? 1n : -1n;
    },
    'Fraction, Fraction': function Fraction_Fraction(x, y) {
      return new Fraction(x.compare(y));
    },
    'Complex, Complex': function Complex_Complex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
export var createCompareNumber = /* #__PURE__ */factory(name, ['typed', 'config'], _ref2 => {
  var {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function number_number(x, y) {
      return nearlyEqual(x, y, config.relTol, config.absTol) ? 0 : x > y ? 1 : -1;
    }
  });
});