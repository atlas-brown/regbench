"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distanceDocs = void 0;
const distanceDocs = exports.distanceDocs = {
  name: 'distance',
  category: 'Geometry',
  syntax: ['distance([x1, y1], [x2, y2])', 'distance([[x1, y1], [x2, y2]])'],
  description: 'Calculates the Euclidean distance between two points.',
  examples: ['distance([0,0], [4,4])', 'distance([[0,0], [4,4]])'],
  seealso: []
};