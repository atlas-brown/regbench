"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reDocs = void 0;
const reDocs = exports.reDocs = {
  name: 're',
  category: 'Complex',
  syntax: ['re(x)'],
  description: 'Get the real part of a complex number.',
  examples: ['re(2 + 3i)', 'im(2 + 3i)', 're(-5.2i)', 're(2.4)'],
  seealso: ['im', 'conj', 'abs', 'arg']
};