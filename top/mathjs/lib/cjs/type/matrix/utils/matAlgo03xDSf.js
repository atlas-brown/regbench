"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatAlgo03xDSf = void 0;
var _factory = require("../../../utils/factory.js");
var _DimensionError = require("../../../error/DimensionError.js");
const name = 'matAlgo03xDSf';
const dependencies = ['typed'];
const createMatAlgo03xDSf = exports.createMatAlgo03xDSf = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed
  } = _ref;
  /**
   * Iterates over SparseMatrix items and invokes the callback function f(Dij, Sij).
   * Callback function invoked M*N times.
   *
   *
   *          ┌  f(Dij, Sij)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  f(Dij, 0)    ; otherwise
   *
   *
   * @param {Matrix}   denseMatrix       The DenseMatrix instance (D)
   * @param {Matrix}   sparseMatrix      The SparseMatrix instance (C)
   * @param {Function} callback          The f(Dij,Sij) operation to invoke, where Dij = DenseMatrix(i,j) and Sij = SparseMatrix(i,j)
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(Sij,Dij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97477571
   */
  return function matAlgo03xDSf(denseMatrix, sparseMatrix, callback, inverse) {
    // dense matrix arrays
    const adata = denseMatrix._data;
    const asize = denseMatrix._size;
    const adt = denseMatrix._datatype || denseMatrix.getDataType();
    // sparse matrix arrays
    const bvalues = sparseMatrix._values;
    const bindex = sparseMatrix._index;
    const bptr = sparseMatrix._ptr;
    const bsize = sparseMatrix._size;
    const bdt = sparseMatrix._datatype || sparseMatrix._data === undefined ? sparseMatrix._datatype : sparseMatrix.getDataType();

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new _DimensionError.DimensionError(asize.length, bsize.length);
    }

    // check rows & columns
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    }

    // sparse matrix cannot be a Pattern matrix
    if (!bvalues) {
      throw new Error('Cannot perform operation on Dense Matrix and Pattern Sparse Matrix');
    }

    // rows & columns
    const rows = asize[0];
    const columns = asize[1];

    // datatype
    let dt;
    // zero value
    let zero = 0;
    // callback signature to use
    let cf = callback;

    // process data types
    if (typeof adt === 'string' && adt === bdt && adt !== 'mixed') {
      // datatype
      dt = adt;
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result (DenseMatrix)
    const cdata = [];

    // initialize dense matrix
    for (let z = 0; z < rows; z++) {
      // initialize row
      cdata[z] = [];
    }

    // workspace
    const x = [];
    // marks indicating we have a value in x for a given column
    const w = [];

    // loop columns in b
    for (let j = 0; j < columns; j++) {
      // column mark
      const mark = j + 1;
      // values in column j
      for (let k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        const i = bindex[k];
        // update workspace
        x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]);
        w[i] = mark;
      }
      // process workspace
      for (let y = 0; y < rows; y++) {
        // check we have a calculated value for current row
        if (w[y] === mark) {
          // use calculated value
          cdata[y][j] = x[y];
        } else {
          // calculate value
          cdata[y][j] = inverse ? cf(zero, adata[y][j]) : cf(adata[y][j], zero);
        }
      }
    }

    // return dense matrix
    return denseMatrix.createDenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: adt === denseMatrix._datatype && bdt === sparseMatrix._datatype ? dt : undefined
    });
  };
});