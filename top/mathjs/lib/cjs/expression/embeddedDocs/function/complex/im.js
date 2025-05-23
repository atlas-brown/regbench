"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imDocs = void 0;
const imDocs = exports.imDocs = {
  name: 'im',
  category: 'Complex',
  syntax: ['im(x)'],
  description: 'Get the imaginary part of a complex number.',
  examples: ['im(2 + 3i)', 're(2 + 3i)', 'im(-5.2i)', 'im(2.4)'],
  seealso: ['re', 'conj', 'abs', 'arg']
};