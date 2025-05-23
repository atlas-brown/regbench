"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meanDocs = void 0;
const meanDocs = exports.meanDocs = {
  name: 'mean',
  category: 'Statistics',
  syntax: ['mean(a, b, c, ...)', 'mean(A)', 'mean(A, dimension)'],
  description: 'Compute the arithmetic mean of a list of values.',
  examples: ['mean(2, 3, 4, 1)', 'mean([2, 3, 4, 1])', 'mean([2, 5; 4, 3])', 'mean([2, 5; 4, 3], 1)', 'mean([2, 5; 4, 3], 2)', 'mean([1.0, 2.7, 3.2, 4.0])'],
  seealso: ['max', 'median', 'min', 'prod', 'std', 'sum', 'variance']
};