import { factory } from '../../utils/factory.js';
var name = 'sylvester';
var dependencies = ['typed', 'schur', 'matrixFromColumns', 'matrix', 'multiply', 'range', 'concat', 'transpose', 'index', 'subset', 'add', 'subtract', 'identity', 'lusolve', 'abs'];
export var createSylvester = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    schur,
    matrixFromColumns,
    matrix,
    multiply,
    range,
    concat,
    transpose,
    index,
    subset,
    add,
    subtract,
    identity,
    lusolve,
    abs
  } = _ref;
  /**
   *
   * Solves the real-valued Sylvester equation AX+XB=C for X, where A, B and C are
   * matrices of appropriate dimensions, being A and B squared. Notice that other
   * equivalent definitions for the Sylvester equation exist and this function
   * assumes the one presented in the original publication of the the Bartels-
   * Stewart algorithm, which is implemented by this function.
   * https://en.wikipedia.org/wiki/Sylvester_equation
   *
   * Syntax:
   *
   *     math.sylvester(A, B, C)
   *
   * Examples:
   *
   *     const A = [[-1, -2], [1, 1]]
   *     const B = [[2, -1], [1, -2]]
   *     const C = [[-3, 2], [3, 0]]
   *     math.sylvester(A, B, C)      // returns DenseMatrix [[-0.25, 0.25], [1.5, -1.25]]
   *
   * See also:
   *
   *     schur, lyap
   *
   * @param {Matrix | Array} A  Matrix A
   * @param {Matrix | Array} B  Matrix B
   * @param {Matrix | Array} C  Matrix C
   * @return {Matrix | Array}   Matrix X, solving the Sylvester equation
   */
  return typed(name, {
    'Matrix, Matrix, Matrix': _sylvester,
    'Array, Matrix, Matrix': function Array_Matrix_Matrix(A, B, C) {
      return _sylvester(matrix(A), B, C);
    },
    'Array, Array, Matrix': function Array_Array_Matrix(A, B, C) {
      return _sylvester(matrix(A), matrix(B), C);
    },
    'Array, Matrix, Array': function Array_Matrix_Array(A, B, C) {
      return _sylvester(matrix(A), B, matrix(C));
    },
    'Matrix, Array, Matrix': function Matrix_Array_Matrix(A, B, C) {
      return _sylvester(A, matrix(B), C);
    },
    'Matrix, Array, Array': function Matrix_Array_Array(A, B, C) {
      return _sylvester(A, matrix(B), matrix(C));
    },
    'Matrix, Matrix, Array': function Matrix_Matrix_Array(A, B, C) {
      return _sylvester(A, B, matrix(C));
    },
    'Array, Array, Array': function Array_Array_Array(A, B, C) {
      return _sylvester(matrix(A), matrix(B), matrix(C)).toArray();
    }
  });
  function _sylvester(A, B, C) {
    var n = B.size()[0];
    var m = A.size()[0];
    var sA = schur(A);
    var F = sA.T;
    var U = sA.U;
    var sB = schur(multiply(-1, B));
    var G = sB.T;
    var V = sB.U;
    var D = multiply(multiply(transpose(U), C), V);
    var all = range(0, m);
    var y = [];
    var hc = (a, b) => concat(a, b, 1);
    var vc = (a, b) => concat(a, b, 0);
    for (var k = 0; k < n; k++) {
      if (k < n - 1 && abs(subset(G, index(k + 1, k))) > 1e-5) {
        var RHS = vc(subset(D, index(all, k)), subset(D, index(all, k + 1)));
        for (var j = 0; j < k; j++) {
          RHS = add(RHS, vc(multiply(y[j], subset(G, index(j, k))), multiply(y[j], subset(G, index(j, k + 1)))));
        }
        var gkk = multiply(identity(m), multiply(-1, subset(G, index(k, k))));
        var gmk = multiply(identity(m), multiply(-1, subset(G, index(k + 1, k))));
        var gkm = multiply(identity(m), multiply(-1, subset(G, index(k, k + 1))));
        var gmm = multiply(identity(m), multiply(-1, subset(G, index(k + 1, k + 1))));
        var LHS = vc(hc(add(F, gkk), gmk), hc(gkm, add(F, gmm)));
        var yAux = lusolve(LHS, RHS);
        y[k] = yAux.subset(index(range(0, m), 0));
        y[k + 1] = yAux.subset(index(range(m, 2 * m), 0));
        k++;
      } else {
        var _RHS = subset(D, index(all, k));
        for (var _j = 0; _j < k; _j++) {
          _RHS = add(_RHS, multiply(y[_j], subset(G, index(_j, k))));
        }
        var _gkk = subset(G, index(k, k));
        var _LHS = subtract(F, multiply(_gkk, identity(m)));
        y[k] = lusolve(_LHS, _RHS);
      }
    }
    var Y = matrix(matrixFromColumns(...y));
    var X = multiply(U, multiply(Y, transpose(V)));
    return X;
  }
});