"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crossDocs = void 0;
const crossDocs = exports.crossDocs = {
  name: 'cross',
  category: 'Matrix',
  syntax: ['cross(A, B)'],
  description: 'Calculate the cross product for two vectors in three dimensional space.',
  examples: ['cross([1, 1, 0],  [0, 1, 1])', 'cross([3, -3, 1], [4, 9, 2])', 'cross([2, 3, 4],  [5, 6, 7])'],
  seealso: ['multiply', 'dot']
};