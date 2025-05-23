// Copyright (c) 2006-2024, Timothy A. Davis, All Rights Reserved.
// SPDX-License-Identifier: LGPL-2.1+
// https://github.com/DrTimothyAldenDavis/SuiteSparse/tree/dev/CSparse/Source

/**
 * Permutes a sparse matrix C = P * A * Q
 *
 * @param {SparseMatrix}  a         The Matrix A
 * @param {Array}   pinv            The row permutation vector
 * @param {Array}   q               The column permutation vector
 * @param {boolean} values          Create a pattern matrix (false), values and pattern otherwise
 *
 * @return {Matrix}                 C = P * A * Q, null on error
 */
export function csPermute(a, pinv, q, values) {
  // a arrays
  var avalues = a._values;
  var aindex = a._index;
  var aptr = a._ptr;
  var asize = a._size;
  var adt = a._datatype;
  // rows & columns
  var m = asize[0];
  var n = asize[1];
  // c arrays
  var cvalues = values && a._values ? [] : null;
  var cindex = []; // (aptr[n])
  var cptr = []; // (n + 1)
  // initialize vars
  var nz = 0;
  // loop columns
  for (var k = 0; k < n; k++) {
    // column k of C is column q[k] of A
    cptr[k] = nz;
    // apply column permutation
    var j = q ? q[k] : k;
    // loop values in column j of A
    for (var t0 = aptr[j], t1 = aptr[j + 1], t = t0; t < t1; t++) {
      // row i of A is row pinv[i] of C
      var r = pinv ? pinv[aindex[t]] : aindex[t];
      // index
      cindex[nz] = r;
      // check we need to populate values
      if (cvalues) {
        cvalues[nz] = avalues[t];
      }
      // increment number of nonzero elements
      nz++;
    }
  }
  // finalize the last column of C
  cptr[n] = nz;
  // return C matrix
  return a.createSparseMatrix({
    values: cvalues,
    index: cindex,
    ptr: cptr,
    size: [m, n],
    datatype: adt
  });
}