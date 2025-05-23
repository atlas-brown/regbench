"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.largerDocs = void 0;
const largerDocs = exports.largerDocs = {
  name: 'larger',
  category: 'Relational',
  syntax: ['x > y', 'larger(x, y)'],
  description: 'Check if value x is larger than y. Returns true if x is larger than y, and false if not. Comparing a value with NaN returns false.',
  examples: ['2 > 3', '5 > 2*2', 'a = 3.3', 'b = 6-2.8', '(a > b)', '(b < a)', '5 cm > 2 inch'],
  seealso: ['equal', 'unequal', 'smaller', 'smallerEq', 'largerEq', 'compare']
};