"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.powDocs = void 0;
const powDocs = exports.powDocs = {
  name: 'pow',
  category: 'Operators',
  syntax: ['x ^ y', 'pow(x, y)'],
  description: 'Calculates the power of x to y, x^y.',
  examples: ['2^3', '2*2*2', '1 + e ^ (pi * i)', 'pow([[1, 2], [4, 3]], 2)', 'pow([[1, 2], [4, 3]], -1)'],
  seealso: ['multiply', 'nthRoot', 'nthRoots', 'sqrt']
};