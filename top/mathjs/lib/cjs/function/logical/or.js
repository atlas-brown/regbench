"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOr = void 0;
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matAlgo05xSfSf = require("../../type/matrix/utils/matAlgo05xSfSf.js");
var _factory = require("../../utils/factory.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
const name = 'or';
const dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
const createOr = exports.createOr = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  } = _ref;
  const matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed
  });
  const matAlgo05xSfSf = (0, _matAlgo05xSfSf.createMatAlgo05xSfSf)({
    typed,
    equalScalar
  });
  const matAlgo12xSfs = (0, _matAlgo12xSfs.createMatAlgo12xSfs)({
    typed,
    DenseMatrix
  });
  const matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed,
    matrix,
    concat
  });

  /**
   * Logical `or`. Test if at least one value is defined with a nonzero/nonempty value.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.or(x, y)
   *
   * Examples:
   *
   *    math.or(2, 4)   // returns true
   *
   *    a = [2, 5, 0]
   *    b = [0, 22, 0]
   *    c = 0
   *
   *    math.or(a, b)   // returns [true, true, false]
   *    math.or(b, c)   // returns [false, true, false]
   *
   * See also:
   *
   *    and, not, xor
   *
   * @param  {number | BigNumber | bigint | Complex | Unit | Array | Matrix} x First value to check
   * @param  {number | BigNumber | bigint | Complex | Unit | Array | Matrix} y Second value to check
   * @return {boolean | Array | Matrix}
   *            Returns true when one of the inputs is defined with a nonzero/nonempty value.
   */
  return typed(name, {
    'number, number': _index.orNumber,
    'Complex, Complex': function (x, y) {
      return x.re !== 0 || x.im !== 0 || y.re !== 0 || y.im !== 0;
    },
    'BigNumber, BigNumber': function (x, y) {
      return !x.isZero() && !x.isNaN() || !y.isZero() && !y.isNaN();
    },
    'bigint, bigint': _index.orNumber,
    'Unit, Unit': typed.referToSelf(self => (x, y) => self(x.value || 0, y.value || 0))
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});