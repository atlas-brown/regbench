"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityDocs = void 0;
const identityDocs = exports.identityDocs = {
  name: 'identity',
  category: 'Matrix',
  syntax: ['identity(n)', 'identity(m, n)', 'identity([m, n])'],
  description: 'Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.',
  examples: ['identity(3)', 'identity(3, 5)', 'a = [1, 2, 3; 4, 5, 6]', 'identity(size(a))'],
  seealso: ['concat', 'det', 'diag', 'inv', 'ones', 'range', 'size', 'squeeze', 'subset', 'trace', 'transpose', 'zeros']
};