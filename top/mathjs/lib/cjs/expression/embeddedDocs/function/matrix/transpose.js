"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transposeDocs = void 0;
const transposeDocs = exports.transposeDocs = {
  name: 'transpose',
  category: 'Matrix',
  syntax: ['x\'', 'transpose(x)'],
  description: 'Transpose a matrix',
  examples: ['a = [1, 2, 3; 4, 5, 6]', 'a\'', 'transpose(a)'],
  seealso: ['concat', 'det', 'diag', 'identity', 'inv', 'ones', 'range', 'size', 'squeeze', 'subset', 'trace', 'zeros']
};