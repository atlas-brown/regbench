"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reshapeDocs = void 0;
const reshapeDocs = exports.reshapeDocs = {
  name: 'reshape',
  category: 'Matrix',
  syntax: ['reshape(x, sizes)'],
  description: 'Reshape a multi dimensional array to fit the specified dimensions.',
  examples: ['reshape([1, 2, 3, 4, 5, 6], [2, 3])', 'reshape([[1, 2], [3, 4]], [1, 4])', 'reshape([[1, 2], [3, 4]], [4])', 'reshape([1, 2, 3, 4], [-1, 2])'],
  seealso: ['size', 'squeeze', 'resize']
};