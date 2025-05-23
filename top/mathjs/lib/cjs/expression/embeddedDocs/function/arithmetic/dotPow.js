"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotPowDocs = void 0;
const dotPowDocs = exports.dotPowDocs = {
  name: 'dotPow',
  category: 'Operators',
  syntax: ['x .^ y', 'dotPow(x, y)'],
  description: 'Calculates the power of x to y element wise.',
  examples: ['a = [1, 2, 3; 4, 5, 6]', 'a .^ 2'],
  seealso: ['pow']
};