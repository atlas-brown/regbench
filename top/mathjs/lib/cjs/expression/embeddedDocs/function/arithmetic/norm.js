"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normDocs = void 0;
const normDocs = exports.normDocs = {
  name: 'norm',
  category: 'Arithmetic',
  syntax: ['norm(x)', 'norm(x, p)'],
  description: 'Calculate the norm of a number, vector or matrix.',
  examples: ['abs(-3.5)', 'norm(-3.5)', 'norm(3 - 4i)', 'norm([1, 2, -3], Infinity)', 'norm([1, 2, -3], -Infinity)', 'norm([3, 4], 2)', 'norm([[1, 2], [3, 4]], 1)', 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")']
};