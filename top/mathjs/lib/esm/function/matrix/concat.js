import { isBigNumber, isMatrix, isNumber } from '../../utils/is.js';
import { clone } from '../../utils/object.js';
import { arraySize, concat as _concat } from '../../utils/array.js';
import { IndexError } from '../../error/IndexError.js';
import { DimensionError } from '../../error/DimensionError.js';
import { factory } from '../../utils/factory.js';
var name = 'concat';
var dependencies = ['typed', 'matrix', 'isInteger'];
export var createConcat = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    isInteger
  } = _ref;
  /**
   * Concatenate two or more matrices.
   *
   * Syntax:
   *
   *     math.concat(A, B, C, ...)
   *     math.concat(A, B, C, ..., dim)
   *
   * Where:
   *
   * - `dim: number` is a zero-based dimension over which to concatenate the matrices.
   *   By default the last dimension of the matrices.
   *
   * Examples:
   *
   *    const A = [[1, 2], [5, 6]]
   *    const B = [[3, 4], [7, 8]]
   *
   *    math.concat(A, B)                  // returns [[1, 2, 3, 4], [5, 6, 7, 8]]
   *    math.concat(A, B, 0)               // returns [[1, 2], [5, 6], [3, 4], [7, 8]]
   *    math.concat('hello', ' ', 'world') // returns 'hello world'
   *
   * See also:
   *
   *    size, squeeze, subset, transpose
   *
   * @param {... Array | Matrix} args     Two or more matrices
   * @return {Array | Matrix} Concatenated matrix
   */
  return typed(name, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    '...Array | Matrix | number | BigNumber': function Array__Matrix__number__BigNumber(args) {
      var i;
      var len = args.length;
      var dim = -1; // zero-based dimension
      var prevDim;
      var asMatrix = false;
      var matrices = []; // contains multi dimensional arrays

      for (i = 0; i < len; i++) {
        var arg = args[i];

        // test whether we need to return a Matrix (if not we return an Array)
        if (isMatrix(arg)) {
          asMatrix = true;
        }
        if (isNumber(arg) || isBigNumber(arg)) {
          if (i !== len - 1) {
            throw new Error('Dimension must be specified as last argument');
          }

          // last argument contains the dimension on which to concatenate
          prevDim = dim;
          dim = arg.valueOf(); // change BigNumber to number

          if (!isInteger(dim)) {
            throw new TypeError('Integer number expected for dimension');
          }
          if (dim < 0 || i > 0 && dim > prevDim) {
            // TODO: would be more clear when throwing a DimensionError here
            throw new IndexError(dim, prevDim + 1);
          }
        } else {
          // this is a matrix or array
          var m = clone(arg).valueOf();
          var size = arraySize(m);
          matrices[i] = m;
          prevDim = dim;
          dim = size.length - 1;

          // verify whether each of the matrices has the same number of dimensions
          if (i > 0 && dim !== prevDim) {
            throw new DimensionError(prevDim + 1, dim + 1);
          }
        }
      }
      if (matrices.length === 0) {
        throw new SyntaxError('At least one matrix expected');
      }
      var res = matrices.shift();
      while (matrices.length) {
        res = _concat(res, matrices.shift(), dim);
      }
      return asMatrix ? matrix(res) : res;
    },
    '...string': function string(args) {
      return args.join('');
    }
  });
});