import { isMatrix } from '../../utils/is.js';
import { clone } from '../../utils/object.js';
import { format } from '../../utils/string.js';
import { factory } from '../../utils/factory.js';
var name = 'det';
var dependencies = ['typed', 'matrix', 'subtractScalar', 'multiply', 'divideScalar', 'isZero', 'unaryMinus'];
export var createDet = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    subtractScalar,
    multiply,
    divideScalar,
    isZero,
    unaryMinus
  } = _ref;
  /**
   * Calculate the determinant of a matrix.
   *
   * Syntax:
   *
   *    math.det(x)
   *
   * Examples:
   *
   *    math.det([[1, 2], [3, 4]]) // returns -2
   *
   *    const A = [
   *      [-2, 2, 3],
   *      [-1, 1, 3],
   *      [2, 0, -1]
   *    ]
   *    math.det(A) // returns 6
   *
   * See also:
   *
   *    inv
   *
   * @param {Array | Matrix} x  A matrix
   * @return {number} The determinant of `x`
   */
  return typed(name, {
    any: function any(x) {
      return clone(x);
    },
    'Array | Matrix': function det(x) {
      var size;
      if (isMatrix(x)) {
        size = x.size();
      } else if (Array.isArray(x)) {
        x = matrix(x);
        size = x.size();
      } else {
        // a scalar
        size = [];
      }
      switch (size.length) {
        case 0:
          // scalar
          return clone(x);
        case 1:
          // vector
          if (size[0] === 1) {
            return clone(x.valueOf()[0]);
          }
          if (size[0] === 0) {
            return 1; // det of an empty matrix is per definition 1
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + format(size) + ')');
          }
        case 2:
          {
            // two-dimensional array
            var rows = size[0];
            var cols = size[1];
            if (rows === cols) {
              return _det(x.clone().valueOf(), rows, cols);
            }
            if (cols === 0) {
              return 1; // det of an empty matrix is per definition 1
            } else {
              throw new RangeError('Matrix must be square ' + '(size: ' + format(size) + ')');
            }
          }
        default:
          // multi dimensional array
          throw new RangeError('Matrix must be two dimensional ' + '(size: ' + format(size) + ')');
      }
    }
  });

  /**
   * Calculate the determinant of a matrix
   * @param {Array[]} matrix  A square, two dimensional matrix
   * @param {number} rows     Number of rows of the matrix (zero-based)
   * @param {number} cols     Number of columns of the matrix (zero-based)
   * @returns {number} det
   * @private
   */
  function _det(matrix, rows, cols) {
    if (rows === 1) {
      // this is a 1 x 1 matrix
      return clone(matrix[0][0]);
    } else if (rows === 2) {
      // this is a 2 x 2 matrix
      // the determinant of [a11,a12;a21,a22] is det = a11*a22-a21*a12
      return subtractScalar(multiply(matrix[0][0], matrix[1][1]), multiply(matrix[1][0], matrix[0][1]));
    } else {
      // Bareiss algorithm
      // this algorithm have same complexity as LUP decomposition (O(n^3))
      // but it preserve precision of floating point more relative to the LUP decomposition
      var negated = false;
      var rowIndices = new Array(rows).fill(0).map((_, i) => i); // matrix index of row i
      for (var k = 0; k < rows; k++) {
        var k_ = rowIndices[k];
        if (isZero(matrix[k_][k])) {
          var _k = void 0;
          for (_k = k + 1; _k < rows; _k++) {
            if (!isZero(matrix[rowIndices[_k]][k])) {
              k_ = rowIndices[_k];
              rowIndices[_k] = rowIndices[k];
              rowIndices[k] = k_;
              negated = !negated;
              break;
            }
          }
          if (_k === rows) return matrix[k_][k]; // some zero of the type
        }
        var piv = matrix[k_][k];
        var piv_ = k === 0 ? 1 : matrix[rowIndices[k - 1]][k - 1];
        for (var i = k + 1; i < rows; i++) {
          var i_ = rowIndices[i];
          for (var j = k + 1; j < rows; j++) {
            matrix[i_][j] = divideScalar(subtractScalar(multiply(matrix[i_][j], piv), multiply(matrix[i_][k], matrix[k_][j])), piv_);
          }
        }
      }
      var det = matrix[rowIndices[rows - 1]][rows - 1];
      return negated ? unaryMinus(det) : det;
    }
  }
});