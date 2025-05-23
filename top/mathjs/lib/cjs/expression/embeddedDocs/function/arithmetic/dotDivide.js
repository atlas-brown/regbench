"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotDivideDocs = void 0;
const dotDivideDocs = exports.dotDivideDocs = {
  name: 'dotDivide',
  category: 'Operators',
  syntax: ['x ./ y', 'dotDivide(x, y)'],
  description: 'Divide two values element wise.',
  examples: ['a = [1, 2, 3; 4, 5, 6]', 'b = [2, 1, 1; 3, 2, 5]', 'a ./ b'],
  seealso: ['multiply', 'dotMultiply', 'divide']
};