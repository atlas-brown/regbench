"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDocs = void 0;
const formatDocs = exports.formatDocs = {
  name: 'format',
  category: 'Utils',
  syntax: ['format(value)', 'format(value, precision)'],
  description: 'Format a value of any type as string.',
  examples: ['format(2.3)', 'format(3 - 4i)', 'format([])', 'format(pi, 3)'],
  seealso: ['print']
};