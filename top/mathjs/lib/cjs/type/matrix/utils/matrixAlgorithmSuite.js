"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatrixAlgorithmSuite = void 0;
var _factory = require("../../../utils/factory.js");
var _object = require("../../../utils/object.js");
var _matAlgo13xDD = require("./matAlgo13xDD.js");
var _matAlgo14xDs = require("./matAlgo14xDs.js");
var _broadcast = require("./broadcast.js");
const name = 'matrixAlgorithmSuite';
const dependencies = ['typed', 'matrix'];
const createMatrixAlgorithmSuite = exports.createMatrixAlgorithmSuite = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix
  } = _ref;
  const matAlgo13xDD = (0, _matAlgo13xDD.createMatAlgo13xDD)({
    typed
  });
  const matAlgo14xDs = (0, _matAlgo14xDs.createMatAlgo14xDs)({
    typed
  });

  /**
   * Return a signatures object with the usual boilerplate of
   * matrix algorithms, based on a plain options object with the
   * following properties:
   *   elop: function -- the elementwise operation to use, defaults to self
   *   SS: function -- the algorithm to apply for two sparse matrices
   *   DS: function -- the algorithm to apply for a dense and a sparse matrix
   *   SD: function -- algo for a sparse and a dense; defaults to SD flipped
   *   Ss: function -- the algorithm to apply for a sparse matrix and scalar
   *   sS: function -- algo for scalar and sparse; defaults to Ss flipped
   *   scalar: string -- typed-function type for scalars, defaults to 'any'
   *
   * If Ss is not specified, no matrix-scalar signatures are generated.
   *
   * @param {object} options
   * @return {Object<string, function>} signatures
   */
  return function matrixAlgorithmSuite(options) {
    const elop = options.elop;
    const SD = options.SD || options.DS;
    let matrixSignatures;
    if (elop) {
      // First the dense ones
      matrixSignatures = {
        'DenseMatrix, DenseMatrix': (x, y) => matAlgo13xDD(...(0, _broadcast.broadcast)(x, y), elop),
        'Array, Array': (x, y) => matAlgo13xDD(...(0, _broadcast.broadcast)(matrix(x), matrix(y)), elop).valueOf(),
        'Array, DenseMatrix': (x, y) => matAlgo13xDD(...(0, _broadcast.broadcast)(matrix(x), y), elop),
        'DenseMatrix, Array': (x, y) => matAlgo13xDD(...(0, _broadcast.broadcast)(x, matrix(y)), elop)
      };
      // Now incorporate sparse matrices
      if (options.SS) {
        matrixSignatures['SparseMatrix, SparseMatrix'] = (x, y) => options.SS(...(0, _broadcast.broadcast)(x, y), elop, false);
      }
      if (options.DS) {
        matrixSignatures['DenseMatrix, SparseMatrix'] = (x, y) => options.DS(...(0, _broadcast.broadcast)(x, y), elop, false);
        matrixSignatures['Array, SparseMatrix'] = (x, y) => options.DS(...(0, _broadcast.broadcast)(matrix(x), y), elop, false);
      }
      if (SD) {
        matrixSignatures['SparseMatrix, DenseMatrix'] = (x, y) => SD(...(0, _broadcast.broadcast)(y, x), elop, true);
        matrixSignatures['SparseMatrix, Array'] = (x, y) => SD(...(0, _broadcast.broadcast)(matrix(y), x), elop, true);
      }
    } else {
      // No elop, use this
      // First the dense ones
      matrixSignatures = {
        'DenseMatrix, DenseMatrix': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...(0, _broadcast.broadcast)(x, y), self);
        }),
        'Array, Array': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...(0, _broadcast.broadcast)(matrix(x), matrix(y)), self).valueOf();
        }),
        'Array, DenseMatrix': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...(0, _broadcast.broadcast)(matrix(x), y), self);
        }),
        'DenseMatrix, Array': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...(0, _broadcast.broadcast)(x, matrix(y)), self);
        })
      };
      // Now incorporate sparse matrices
      if (options.SS) {
        matrixSignatures['SparseMatrix, SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return options.SS(...(0, _broadcast.broadcast)(x, y), self, false);
        });
      }
      if (options.DS) {
        matrixSignatures['DenseMatrix, SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return options.DS(...(0, _broadcast.broadcast)(x, y), self, false);
        });
        matrixSignatures['Array, SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return options.DS(...(0, _broadcast.broadcast)(matrix(x), y), self, false);
        });
      }
      if (SD) {
        matrixSignatures['SparseMatrix, DenseMatrix'] = typed.referToSelf(self => (x, y) => {
          return SD(...(0, _broadcast.broadcast)(y, x), self, true);
        });
        matrixSignatures['SparseMatrix, Array'] = typed.referToSelf(self => (x, y) => {
          return SD(...(0, _broadcast.broadcast)(matrix(y), x), self, true);
        });
      }
    }

    // Now add the scalars
    const scalar = options.scalar || 'any';
    const Ds = options.Ds || options.Ss;
    if (Ds) {
      if (elop) {
        matrixSignatures['DenseMatrix,' + scalar] = (x, y) => matAlgo14xDs(x, y, elop, false);
        matrixSignatures[scalar + ', DenseMatrix'] = (x, y) => matAlgo14xDs(y, x, elop, true);
        matrixSignatures['Array,' + scalar] = (x, y) => matAlgo14xDs(matrix(x), y, elop, false).valueOf();
        matrixSignatures[scalar + ', Array'] = (x, y) => matAlgo14xDs(matrix(y), x, elop, true).valueOf();
      } else {
        matrixSignatures['DenseMatrix,' + scalar] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(x, y, self, false);
        });
        matrixSignatures[scalar + ', DenseMatrix'] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(y, x, self, true);
        });
        matrixSignatures['Array,' + scalar] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(matrix(x), y, self, false).valueOf();
        });
        matrixSignatures[scalar + ', Array'] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(matrix(y), x, self, true).valueOf();
        });
      }
    }
    const sS = options.sS !== undefined ? options.sS : options.Ss;
    if (elop) {
      if (options.Ss) {
        matrixSignatures['SparseMatrix,' + scalar] = (x, y) => options.Ss(x, y, elop, false);
      }
      if (sS) {
        matrixSignatures[scalar + ', SparseMatrix'] = (x, y) => sS(y, x, elop, true);
      }
    } else {
      if (options.Ss) {
        matrixSignatures['SparseMatrix,' + scalar] = typed.referToSelf(self => (x, y) => {
          return options.Ss(x, y, self, false);
        });
      }
      if (sS) {
        matrixSignatures[scalar + ', SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return sS(y, x, self, true);
        });
      }
    }
    // Also pull in the scalar signatures if the operator is a typed function
    if (elop && elop.signatures) {
      (0, _object.extend)(matrixSignatures, elop.signatures);
    }
    return matrixSignatures;
  };
});