"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortDocs = void 0;
const sortDocs = exports.sortDocs = {
  name: 'sort',
  category: 'Matrix',
  syntax: ['sort(x)', 'sort(x, compare)'],
  description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
  examples: ['sort([5, 10, 1])', 'sort(["C", "B", "A", "D"], "natural")', 'sortByLength(a, b) = size(a)[1] - size(b)[1]', 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'],
  seealso: ['map', 'filter', 'forEach']
};