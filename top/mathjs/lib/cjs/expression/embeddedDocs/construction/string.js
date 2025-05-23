"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringDocs = void 0;
const stringDocs = exports.stringDocs = {
  name: 'string',
  category: 'Construction',
  syntax: ['"text"', 'string(x)'],
  description: 'Create a string or convert a value to a string',
  examples: ['"Hello World!"', 'string(4.2)', 'string(3 + 2i)'],
  seealso: ['bignumber', 'boolean', 'complex', 'index', 'matrix', 'number', 'unit']
};