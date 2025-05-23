"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xorDocs = void 0;
const xorDocs = exports.xorDocs = {
  name: 'xor',
  category: 'Logical',
  syntax: ['x xor y', 'xor(x, y)'],
  description: 'Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.',
  examples: ['true xor false', 'false xor false', 'true xor true', '0 xor 4'],
  seealso: ['not', 'and', 'or']
};