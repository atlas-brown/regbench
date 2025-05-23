"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsolveAll = void 0;
var _factory = require("../../../utils/factory.js");
var _solveValidation = require("./utils/solveValidation.js");
const name = 'usolveAll';
const dependencies = ['typed', 'matrix', 'divideScalar', 'multiplyScalar', 'subtractScalar', 'equalScalar', 'DenseMatrix'];
const createUsolveAll = exports.createUsolveAll = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    divideScalar,
    multiplyScalar,
    subtractScalar,
    equalScalar,
    DenseMatrix
  } = _ref;
  const solveValidation = (0, _solveValidation.createSolveValidation)({
    DenseMatrix
  });

  /**
   * Finds all solutions of a linear equation system by backward substitution. Matrix must be an upper triangular matrix.
   *
   * `U * x = b`
   *
   * Syntax:
   *
   *    math.usolveAll(U, b)
   *
   * Examples:
   *
   *    const a = [[-2, 3], [2, 1]]
   *    const b = [11, 9]
   *    const x = usolveAll(a, b)  // [ [[8], [9]] ]
   *
   * See also:
   *
   *    usolve, lup, slu, usolve, lusolve
   *
   * @param {Matrix, Array} U       A N x N matrix or array (U)
   * @param {Matrix, Array} b       A column vector with the b values
   *
   * @return {DenseMatrix[] | Array[]}  An array of affine-independent column vectors (x) that solve the linear system
   */
  return typed(name, {
    'SparseMatrix, Array | Matrix': function (m, b) {
      return _sparseBackwardSubstitution(m, b);
    },
    'DenseMatrix, Array | Matrix': function (m, b) {
      return _denseBackwardSubstitution(m, b);
    },
    'Array, Array | Matrix': function (a, b) {
      const m = matrix(a);
      const R = _denseBackwardSubstitution(m, b);
      return R.map(r => r.valueOf());
    }
  });
  function _denseBackwardSubstitution(m, b_) {
    // the algorithm is derived from
    // https://www.overleaf.com/read/csvgqdxggyjv

    // array of right-hand sides
    const B = [solveValidation(m, b_, true)._data.map(e => e[0])];
    const M = m._data;
    const rows = m._size[0];
    const columns = m._size[1];

    // loop columns backwards
    for (let i = columns - 1; i >= 0; i--) {
      let L = B.length;

      // loop right-hand sides
      for (let k = 0; k < L; k++) {
        const b = B[k];
        if (!equalScalar(M[i][i], 0)) {
          // non-singular row

          b[i] = divideScalar(b[i], M[i][i]);
          for (let j = i - 1; j >= 0; j--) {
            // b[j] -= b[i] * M[j,i]
            b[j] = subtractScalar(b[j], multiplyScalar(b[i], M[j][i]));
          }
        } else if (!equalScalar(b[i], 0)) {
          // singular row, nonzero RHS

          if (k === 0) {
            // There is no valid solution
            return [];
          } else {
            // This RHS is invalid but other solutions may still exist
            B.splice(k, 1);
            k -= 1;
            L -= 1;
          }
        } else if (k === 0) {
          // singular row, RHS is zero

          const bNew = [...b];
          bNew[i] = 1;
          for (let j = i - 1; j >= 0; j--) {
            bNew[j] = subtractScalar(bNew[j], M[j][i]);
          }
          B.push(bNew);
        }
      }
    }
    return B.map(x => new DenseMatrix({
      data: x.map(e => [e]),
      size: [rows, 1]
    }));
  }
  function _sparseBackwardSubstitution(m, b_) {
    // array of right-hand sides
    const B = [solveValidation(m, b_, true)._data.map(e => e[0])];
    const rows = m._size[0];
    const columns = m._size[1];
    const values = m._values;
    const index = m._index;
    const ptr = m._ptr;

    // loop columns backwards
    for (let i = columns - 1; i >= 0; i--) {
      let L = B.length;

      // loop right-hand sides
      for (let k = 0; k < L; k++) {
        const b = B[k];

        // values & indices (column i)
        const iValues = [];
        const iIndices = [];

        // first & last indeces in column
        const firstIndex = ptr[i];
        const lastIndex = ptr[i + 1];

        // find the value at [i, i]
        let Mii = 0;
        for (let j = lastIndex - 1; j >= firstIndex; j--) {
          const J = index[j];
          // check row
          if (J === i) {
            Mii = values[j];
          } else if (J < i) {
            // store upper triangular
            iValues.push(values[j]);
            iIndices.push(J);
          }
        }
        if (!equalScalar(Mii, 0)) {
          // non-singular row

          b[i] = divideScalar(b[i], Mii);

          // loop upper triangular
          for (let j = 0, lastIndex = iIndices.length; j < lastIndex; j++) {
            const J = iIndices[j];
            b[J] = subtractScalar(b[J], multiplyScalar(b[i], iValues[j]));
          }
        } else if (!equalScalar(b[i], 0)) {
          // singular row, nonzero RHS

          if (k === 0) {
            // There is no valid solution
            return [];
          } else {
            // This RHS is invalid but other solutions may still exist
            B.splice(k, 1);
            k -= 1;
            L -= 1;
          }
        } else if (k === 0) {
          // singular row, RHS is zero

          const bNew = [...b];
          bNew[i] = 1;

          // loop upper triangular
          for (let j = 0, lastIndex = iIndices.length; j < lastIndex; j++) {
            const J = iIndices[j];
            bNew[J] = subtractScalar(bNew[J], iValues[j]);
          }
          B.push(bNew);
        }
      }
    }
    return B.map(x => new DenseMatrix({
      data: x.map(e => [e]),
      size: [rows, 1]
    }));
  }
});