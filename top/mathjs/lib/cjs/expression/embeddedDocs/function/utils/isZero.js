"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isZeroDocs = void 0;
const isZeroDocs = exports.isZeroDocs = {
  name: 'isZero',
  category: 'Utils',
  syntax: ['isZero(x)'],
  description: 'Test whether a value is zero.',
  examples: ['isZero(2)', 'isZero(0)', 'isZero(-4)', 'isZero([3, 0, -2, 0])'],
  seealso: ['isInteger', 'isNumeric', 'isNegative', 'isPositive']
};