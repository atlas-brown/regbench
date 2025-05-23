"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizeDocs = void 0;
const sizeDocs = exports.sizeDocs = {
  name: 'size',
  category: 'Matrix',
  syntax: ['size(x)'],
  description: 'Calculate the size of a matrix.',
  examples: ['size(2.3)', 'size("hello world")', 'a = [1, 2; 3, 4; 5, 6]', 'size(a)', 'size(1:6)'],
  seealso: ['concat', 'count', 'det', 'diag', 'identity', 'inv', 'ones', 'range', 'squeeze', 'subset', 'trace', 'transpose', 'zeros']
};