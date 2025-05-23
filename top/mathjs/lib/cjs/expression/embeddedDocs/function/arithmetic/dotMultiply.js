"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotMultiplyDocs = void 0;
const dotMultiplyDocs = exports.dotMultiplyDocs = {
  name: 'dotMultiply',
  category: 'Operators',
  syntax: ['x .* y', 'dotMultiply(x, y)'],
  description: 'Multiply two values element wise.',
  examples: ['a = [1, 2, 3; 4, 5, 6]', 'b = [2, 1, 1; 3, 2, 5]', 'a .* b'],
  seealso: ['multiply', 'divide', 'dotDivide']
};