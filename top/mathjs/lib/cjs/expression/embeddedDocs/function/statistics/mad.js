"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.madDocs = void 0;
const madDocs = exports.madDocs = {
  name: 'mad',
  category: 'Statistics',
  syntax: ['mad(a, b, c, ...)', 'mad(A)'],
  description: 'Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.',
  examples: ['mad(10, 20, 30)', 'mad([1, 2, 3])'],
  seealso: ['mean', 'median', 'std', 'abs']
};