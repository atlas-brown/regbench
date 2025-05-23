"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createKldivergence = void 0;
var _factory = require("../../utils/factory.js");
const name = 'kldivergence';
const dependencies = ['typed', 'matrix', 'divide', 'sum', 'multiply', 'map', 'dotDivide', 'log', 'isNumeric'];
const createKldivergence = exports.createKldivergence = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    matrix,
    divide,
    sum,
    multiply,
    map,
    dotDivide,
    log,
    isNumeric
  } = _ref;
  /**
     * Calculate the Kullback-Leibler (KL) divergence  between two distributions
     *
     * Syntax:
     *
     *     math.kldivergence(x, y)
     *
     * Examples:
     *
     *     math.kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])   //returns 0.24376698773121153
     *
     *
     * @param  {Array | Matrix} q    First vector
     * @param  {Array | Matrix} p    Second vector
     * @return {number}              Returns distance between q and p
     */
  return typed(name, {
    'Array, Array': function (q, p) {
      return _kldiv(matrix(q), matrix(p));
    },
    'Matrix, Array': function (q, p) {
      return _kldiv(q, matrix(p));
    },
    'Array, Matrix': function (q, p) {
      return _kldiv(matrix(q), p);
    },
    'Matrix, Matrix': function (q, p) {
      return _kldiv(q, p);
    }
  });
  function _kldiv(q, p) {
    const plength = p.size().length;
    const qlength = q.size().length;
    if (plength > 1) {
      throw new Error('first object must be one dimensional');
    }
    if (qlength > 1) {
      throw new Error('second object must be one dimensional');
    }
    if (plength !== qlength) {
      throw new Error('Length of two vectors must be equal');
    }

    // Before calculation, apply normalization
    const sumq = sum(q);
    if (sumq === 0) {
      throw new Error('Sum of elements in first object must be non zero');
    }
    const sump = sum(p);
    if (sump === 0) {
      throw new Error('Sum of elements in second object must be non zero');
    }
    const qnorm = divide(q, sum(q));
    const pnorm = divide(p, sum(p));
    const result = sum(multiply(qnorm, map(dotDivide(qnorm, pnorm), x => log(x))));
    if (isNumeric(result)) {
      return result;
    } else {
      return Number.NaN;
    }
  }
});