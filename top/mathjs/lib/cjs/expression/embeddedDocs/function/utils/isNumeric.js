"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumericDocs = void 0;
const isNumericDocs = exports.isNumericDocs = {
  name: 'isNumeric',
  category: 'Utils',
  syntax: ['isNumeric(x)'],
  description: 'Test whether a value is a numeric value. ' + 'Returns true when the input is a number, BigNumber, Fraction, or boolean.',
  examples: ['isNumeric(2)', 'isNumeric("2")', 'hasNumericValue("2")', 'isNumeric(0)', 'isNumeric(bignumber(500))', 'isNumeric(fraction(0.125))', 'isNumeric(2 + 3i)', 'isNumeric([2.3, "foo", false])'],
  seealso: ['isInteger', 'isZero', 'isNegative', 'isPositive', 'isNaN', 'hasNumericValue']
};