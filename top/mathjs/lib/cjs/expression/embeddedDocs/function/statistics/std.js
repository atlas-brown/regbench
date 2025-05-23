"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stdDocs = void 0;
const stdDocs = exports.stdDocs = {
  name: 'std',
  category: 'Statistics',
  syntax: ['std(a, b, c, ...)', 'std(A)', 'std(A, dimension)', 'std(A, normalization)', 'std(A, dimension, normalization)'],
  description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
  examples: ['std(2, 4, 6)', 'std([2, 4, 6, 8])', 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', 'std([1, 2, 3; 4, 5, 6])'],
  seealso: ['max', 'mean', 'min', 'median', 'prod', 'sum', 'variance']
};