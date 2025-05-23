"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUnionDocs = void 0;
const setUnionDocs = exports.setUnionDocs = {
  name: 'setUnion',
  category: 'Set',
  syntax: ['setUnion(set1, set2)'],
  description: 'Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.',
  examples: ['setUnion([1, 2, 3, 4], [3, 4, 5, 6])', 'setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])'],
  seealso: ['setIntersect', 'setDifference']
};