import { nearlyEqual as bigNearlyEqual } from '../../utils/bignumber/nearlyEqual.js';
import { nearlyEqual } from '../../utils/number.js';
import { factory } from '../../utils/factory.js';
import { createMatAlgo03xDSf } from '../../type/matrix/utils/matAlgo03xDSf.js';
import { createMatAlgo07xSSf } from '../../type/matrix/utils/matAlgo07xSSf.js';
import { createMatAlgo12xSfs } from '../../type/matrix/utils/matAlgo12xSfs.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
import { createCompareUnits } from './compareUnits.js';
var name = 'larger';
var dependencies = ['typed', 'config', 'bignumber', 'matrix', 'DenseMatrix', 'concat', 'SparseMatrix'];
export var createLarger = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    bignumber,
    matrix,
    DenseMatrix,
    concat,
    SparseMatrix
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    SparseMatrix
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
   * Test whether value x is larger than y.
   *
   * The function returns true when x is larger than y and the relative
   * difference between x and y is larger than the configured relTol and absTol. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.larger(x, y)
   *
   * Examples:
   *
   *    math.larger(2, 3)             // returns false
   *    math.larger(5, 2 + 2)         // returns true
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('2 inch')
   *    math.larger(a, b)             // returns false
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, largerEq, compare
   *
   * @param  {number | BigNumber | bigint | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | bigint | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is larger than y, else returns false
   */
  function bignumLarger(x, y) {
    return x.gt(y) && !bigNearlyEqual(x, y, config.relTol, config.absTol);
  }
  return typed(name, createLargerNumber({
    typed,
    config
  }), {
    'boolean, boolean': (x, y) => x > y,
    'BigNumber, BigNumber': bignumLarger,
    'bigint, bigint': (x, y) => x > y,
    'Fraction, Fraction': (x, y) => x.compare(y) === 1,
    'Fraction, BigNumber': function Fraction_BigNumber(x, y) {
      return bignumLarger(bignumber(x), y);
    },
    'BigNumber, Fraction': function BigNumber_Fraction(x, y) {
      return bignumLarger(x, bignumber(y));
    },
    'Complex, Complex': function Complex_Complex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
export var createLargerNumber = /* #__PURE__ */factory(name, ['typed', 'config'], _ref2 => {
  var {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function number_number(x, y) {
      return x > y && !nearlyEqual(x, y, config.relTol, config.absTol);
    }
  });
});