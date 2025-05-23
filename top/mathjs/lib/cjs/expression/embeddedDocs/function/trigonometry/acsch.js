"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acschDocs = void 0;
const acschDocs = exports.acschDocs = {
  name: 'acsch',
  category: 'Trigonometry',
  syntax: ['acsch(x)'],
  description: 'Calculate the inverse hyperbolic cosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.',
  examples: ['acsch(0.5)'],
  seealso: ['asech', 'acoth']
};