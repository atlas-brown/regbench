import { factory } from '../../../utils/factory.js';
import { createSolveValidation } from './utils/solveValidation.js';
var name = 'lsolveAll';
var dependencies = ['typed', 'matrix', 'divideScalar', 'multiplyScalar', 'subtractScalar', 'equalScalar', 'DenseMatrix'];
export var createLsolveAll = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    divideScalar,
    multiplyScalar,
    subtractScalar,
    equalScalar,
    DenseMatrix
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix
  });

  /**
   * Finds all solutions of a linear equation system by forwards substitution. Matrix must be a lower triangular matrix.
   *
   * `L * x = b`
   *
   * Syntax:
   *
   *    math.lsolveAll(L, b)
   *
   * Examples:
   *
   *    const a = [[-2, 3], [2, 1]]
   *    const b = [11, 9]
   *    const x = lsolveAll(a, b)  // [ [[-5.5], [20]] ]
   *
   * See also:
   *
   *    lsolve, lup, slu, usolve, lusolve
   *
   * @param {Matrix, Array} L       A N x N matrix or array (L)
   * @param {Matrix, Array} b       A column vector with the b values
   *
   * @return {DenseMatrix[] | Array[]}  An array of affine-independent column vectors (x) that solve the linear system
   */
  return typed(name, {
    'SparseMatrix, Array | Matrix': function SparseMatrix_Array__Matrix(m, b) {
      return _sparseForwardSubstitution(m, b);
    },
    'DenseMatrix, Array | Matrix': function DenseMatrix_Array__Matrix(m, b) {
      return _denseForwardSubstitution(m, b);
    },
    'Array, Array | Matrix': function Array_Array__Matrix(a, b) {
      var m = matrix(a);
      var R = _denseForwardSubstitution(m, b);
      return R.map(r => r.valueOf());
    }
  });
  function _denseForwardSubstitution(m, b_) {
    // the algorithm is derived from
    // https://www.overleaf.com/read/csvgqdxggyjv

    // array of right-hand sides
    var B = [solveValidation(m, b_, true)._data.map(e => e[0])];
    var M = m._data;
    var rows = m._size[0];
    var columns = m._size[1];

    // loop columns
    for (var i = 0; i < columns; i++) {
      var L = B.length;

      // loop right-hand sides
      for (var k = 0; k < L; k++) {
        var b = B[k];
        if (!equalScalar(M[i][i], 0)) {
          // non-singular row

          b[i] = divideScalar(b[i], M[i][i]);
          for (var j = i + 1; j < columns; j++) {
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

          var bNew = [...b];
          bNew[i] = 1;
          for (var _j = i + 1; _j < columns; _j++) {
            bNew[_j] = subtractScalar(bNew[_j], M[_j][i]);
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
  function _sparseForwardSubstitution(m, b_) {
    // array of right-hand sides
    var B = [solveValidation(m, b_, true)._data.map(e => e[0])];
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr;

    // loop columns
    for (var i = 0; i < columns; i++) {
      var L = B.length;

      // loop right-hand sides
      for (var k = 0; k < L; k++) {
        var b = B[k];

        // values & indices (column i)
        var iValues = [];
        var iIndices = [];

        // first & last indeces in column
        var firstIndex = ptr[i];
        var lastIndex = ptr[i + 1];

        // find the value at [i, i]
        var Mii = 0;
        for (var j = firstIndex; j < lastIndex; j++) {
          var J = index[j];
          // check row
          if (J === i) {
            Mii = values[j];
          } else if (J > i) {
            // store lower triangular
            iValues.push(values[j]);
            iIndices.push(J);
          }
        }
        if (!equalScalar(Mii, 0)) {
          // non-singular row

          b[i] = divideScalar(b[i], Mii);
          for (var _j2 = 0, _lastIndex = iIndices.length; _j2 < _lastIndex; _j2++) {
            var _J = iIndices[_j2];
            b[_J] = subtractScalar(b[_J], multiplyScalar(b[i], iValues[_j2]));
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

          var bNew = [...b];
          bNew[i] = 1;
          for (var _j3 = 0, _lastIndex2 = iIndices.length; _j3 < _lastIndex2; _j3++) {
            var _J2 = iIndices[_j3];
            bNew[_J2] = subtractScalar(bNew[_J2], iValues[_j3]);
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