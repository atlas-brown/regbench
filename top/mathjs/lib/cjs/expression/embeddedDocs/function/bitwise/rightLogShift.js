"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightLogShiftDocs = void 0;
const rightLogShiftDocs = exports.rightLogShiftDocs = {
  name: 'rightLogShift',
  category: 'Bitwise',
  syntax: ['x >>> y', 'rightLogShift(x, y)'],
  description: 'Bitwise right logical shift of a value x by y number of bits.',
  examples: ['8 >>> 1', '4 << 1', '-12 >>> 2'],
  seealso: ['bitAnd', 'bitNot', 'bitOr', 'bitXor', 'leftShift', 'rightArithShift']
};