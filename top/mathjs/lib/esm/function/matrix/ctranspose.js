import { factory } from '../../utils/factory.js';
var name = 'ctranspose';
var dependencies = ['typed', 'transpose', 'conj'];
export var createCtranspose = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    transpose,
    conj
  } = _ref;
  /**
   * Transpose and complex conjugate a matrix. All values of the matrix are
   * reflected over its main diagonal and then the complex conjugate is
   * taken. This is equivalent to complex conjugation for scalars and
   * vectors.
   *
   * Syntax:
   *
   *     math.ctranspose(x)
   *
   * Examples:
   *
   *     const A = [[1, 2, 3], [4, 5, math.complex(6,7)]]
   *     math.ctranspose(A)      // returns [[1, 4], [2, 5], [3, {re:6,im:-7}]]
   *
   * See also:
   *
   *     transpose, diag, inv, subset, squeeze
   *
   * @param {Array | Matrix} x  Matrix to be ctransposed
   * @return {Array | Matrix}   The ctransposed matrix
   */
  return typed(name, {
    any: function any(x) {
      return conj(transpose(x));
    }
  });
});