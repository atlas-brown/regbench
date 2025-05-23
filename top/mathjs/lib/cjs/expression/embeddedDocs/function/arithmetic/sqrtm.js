"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqrtmDocs = void 0;
const sqrtmDocs = exports.sqrtmDocs = {
  name: 'sqrtm',
  category: 'Arithmetic',
  syntax: ['sqrtm(x)'],
  description: 'Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.',
  examples: ['sqrtm([[33, 24], [48, 57]])'],
  seealso: ['sqrt', 'abs', 'square', 'multiply']
};