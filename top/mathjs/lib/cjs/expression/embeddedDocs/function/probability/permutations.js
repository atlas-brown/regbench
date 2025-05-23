"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permutationsDocs = void 0;
const permutationsDocs = exports.permutationsDocs = {
  name: 'permutations',
  category: 'Probability',
  syntax: ['permutations(n)', 'permutations(n, k)'],
  description: 'Compute the number of permutations of n items taken k at a time',
  examples: ['permutations(5)', 'permutations(5, 3)'],
  seealso: ['combinations', 'combinationsWithRep', 'factorial']
};