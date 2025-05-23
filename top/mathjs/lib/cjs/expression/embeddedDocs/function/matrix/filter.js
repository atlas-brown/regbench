"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterDocs = void 0;
const filterDocs = exports.filterDocs = {
  name: 'filter',
  category: 'Matrix',
  syntax: ['filter(x, test)'],
  description: 'Filter items in a matrix.',
  examples: ['isPositive(x) = x > 0', 'filter([6, -2, -1, 4, 3], isPositive)', 'filter([6, -2, 0, 1, 0], x != 0)'],
  seealso: ['sort', 'map', 'forEach']
};