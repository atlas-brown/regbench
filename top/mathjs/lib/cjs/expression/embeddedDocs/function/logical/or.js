"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orDocs = void 0;
const orDocs = exports.orDocs = {
  name: 'or',
  category: 'Logical',
  syntax: ['x or y', 'or(x, y)'],
  description: 'Logical or. Test if at least one value is defined with a nonzero/nonempty value.',
  examples: ['true or false', 'false or false', '0 or 4'],
  seealso: ['not', 'and', 'xor']
};