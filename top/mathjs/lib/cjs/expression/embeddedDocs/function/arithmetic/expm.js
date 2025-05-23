"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expmDocs = void 0;
const expmDocs = exports.expmDocs = {
  name: 'expm',
  category: 'Arithmetic',
  syntax: ['exp(x)'],
  description: 'Compute the matrix exponential, expm(A) = e^A. ' + 'The matrix must be square. ' + 'Not to be confused with exp(a), which performs element-wise exponentiation.',
  examples: ['expm([[0,2],[0,0]])'],
  seealso: ['exp']
};