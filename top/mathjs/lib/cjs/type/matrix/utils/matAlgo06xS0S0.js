"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatAlgo06xS0S0 = void 0;
var _factory = require("../../../utils/factory.js");
var _DimensionError = require("../../../error/DimensionError.js");
var _collection = require("../../../utils/collection.js");
const name = 'matAlgo06xS0S0';
const dependencies = ['typed', 'equalScalar'];
const createMatAlgo06xS0S0 = exports.createMatAlgo06xS0S0 = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    equalScalar
  } = _ref;
  /**
   * Iterates over SparseMatrix A and SparseMatrix B nonzero items and invokes the callback function f(Aij, Bij).
   * Callback function invoked (Anz U Bnz) times, where Anz and Bnz are the nonzero elements in both matrices.
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0 && B(i,j) !== 0
   * C(i,j) = ┤
   *          └  0            ; otherwise
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */
  return function matAlgo06xS0S0(a, b, callback) {
    // sparse matrix arrays
    const avalues = a._values;
    const asize = a._size;
    const adt = a._datatype || a._data === undefined ? a._datatype : a.getDataType();
    // sparse matrix arrays
    const bvalues = b._values;
    const bsize = b._size;
    const bdt = b._datatype || b._data === undefined ? b._datatype : b.getDataType();

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new _DimensionError.DimensionError(asize.length, bsize.length);
    }

    // check rows & columns
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    }

    // rows & columns
    const rows = asize[0];
    const columns = asize[1];

    // datatype
    let dt;
    // equal signature to use
    let eq = equalScalar;
    // zero value
    let zero = 0;
    // callback signature to use
    let cf = callback;

    // process data types
    if (typeof adt === 'string' && adt === bdt && adt !== 'mixed') {
      // datatype
      dt = adt;
      // find signature that matches (dt, dt)
      eq = typed.find(equalScalar, [dt, dt]);
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result arrays
    const cvalues = avalues && bvalues ? [] : undefined;
    const cindex = [];
    const cptr = [];

    // workspaces
    const x = cvalues ? [] : undefined;
    // marks indicating we have a value in x for a given column
    const w = [];
    // marks indicating value in a given row has been updated
    const u = [];

    // loop columns
    for (let j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length;
      // columns mark
      const mark = j + 1;
      // scatter the values of A(:,j) into workspace
      (0, _collection.scatter)(a, j, w, x, u, mark, cindex, cf);
      // scatter the values of B(:,j) into workspace
      (0, _collection.scatter)(b, j, w, x, u, mark, cindex, cf);
      // check we need to process values (non pattern matrix)
      if (x) {
        // initialize first index in j
        let k = cptr[j];
        // loop index in j
        while (k < cindex.length) {
          // row
          const i = cindex[k];
          // check function was invoked on current row (Aij !=0 && Bij != 0)
          if (u[i] === mark) {
            // value @ i
            const v = x[i];
            // check for zero value
            if (!eq(v, zero)) {
              // push value
              cvalues.push(v);
              // increment pointer
              k++;
            } else {
              // remove value @ i, do not increment pointer
              cindex.splice(k, 1);
            }
          } else {
            // remove value @ i, do not increment pointer
            cindex.splice(k, 1);
          }
        }
      } else {
        // initialize first index in j
        let p = cptr[j];
        // loop index in j
        while (p < cindex.length) {
          // row
          const r = cindex[p];
          // check function was invoked on current row (Aij !=0 && Bij != 0)
          if (u[r] !== mark) {
            // remove value @ i, do not increment pointer
            cindex.splice(p, 1);
          } else {
            // increment pointer
            p++;
          }
        }
      }
    }
    // update cptr
    cptr[columns] = cindex.length;

    // return sparse matrix
    return a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: adt === a._datatype && bdt === b._datatype ? dt : undefined
    });
  };
});