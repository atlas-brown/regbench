import { factory } from '../../utils/factory.js';
import { createMatAlgo02xDS0 } from '../../type/matrix/utils/matAlgo02xDS0.js';
import { createMatAlgo03xDSf } from '../../type/matrix/utils/matAlgo03xDSf.js';
import { createMatAlgo07xSSf } from '../../type/matrix/utils/matAlgo07xSSf.js';
import { createMatAlgo11xS0s } from '../../type/matrix/utils/matAlgo11xS0s.js';
import { createMatAlgo12xSfs } from '../../type/matrix/utils/matAlgo12xSfs.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
var name = 'dotDivide';
var dependencies = ['typed', 'matrix', 'equalScalar', 'divideScalar', 'DenseMatrix', 'concat', 'SparseMatrix'];
export var createDotDivide = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    equalScalar,
    divideScalar,
    DenseMatrix,
    concat,
    SparseMatrix
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed,
    equalScalar
  });
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    SparseMatrix
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
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

  /**
   * Divide two matrices element wise. The function accepts both matrices and
   * scalar values.
   *
   * Syntax:
   *
   *    math.dotDivide(x, y)
   *
   * Examples:
   *
   *    math.dotDivide(2, 4)   // returns 0.5
   *
   *    a = [[9, 5], [6, 1]]
   *    b = [[3, 2], [5, 2]]
   *
   *    math.dotDivide(a, b)   // returns [[3, 2.5], [1.2, 0.5]]
   *    math.divide(a, b)      // returns [[1.75, 0.75], [-1.75, 2.25]]
   *
   * See also:
   *
   *    divide, multiply, dotMultiply
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x Numerator
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}                    Quotient, `x ./ y`
   */
  return typed(name, matrixAlgorithmSuite({
    elop: divideScalar,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});