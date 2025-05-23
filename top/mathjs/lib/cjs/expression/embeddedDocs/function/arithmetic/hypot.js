"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hypotDocs = void 0;
const hypotDocs = exports.hypotDocs = {
  name: 'hypot',
  category: 'Arithmetic',
  syntax: ['hypot(a, b, c, ...)', 'hypot([a, b, c, ...])'],
  description: 'Calculate the hypotenuse of a list with values.',
  examples: ['hypot(3, 4)', 'sqrt(3^2 + 4^2)', 'hypot(-2)', 'hypot([3, 4, 5])'],
  seealso: ['abs', 'norm']
};