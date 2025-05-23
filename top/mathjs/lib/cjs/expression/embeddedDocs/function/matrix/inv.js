"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invDocs = void 0;
const invDocs = exports.invDocs = {
  name: 'inv',
  category: 'Matrix',
  syntax: ['inv(x)'],
  description: 'Calculate the inverse of a matrix',
  examples: ['inv([1, 2; 3, 4])', 'inv(4)', '1 / 4'],
  seealso: ['concat', 'det', 'diag', 'identity', 'ones', 'range', 'size', 'squeeze', 'subset', 'trace', 'transpose', 'zeros']
};