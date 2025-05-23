"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traceDocs = void 0;
const traceDocs = exports.traceDocs = {
  name: 'trace',
  category: 'Matrix',
  syntax: ['trace(A)'],
  description: 'Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.',
  examples: ['A = [1, 2, 3; -1, 2, 3; 2, 0, 3]', 'trace(A)'],
  seealso: ['concat', 'det', 'diag', 'identity', 'inv', 'ones', 'range', 'size', 'squeeze', 'subset', 'transpose', 'zeros']
};