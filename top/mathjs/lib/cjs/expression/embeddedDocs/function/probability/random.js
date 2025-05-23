"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomDocs = void 0;
const randomDocs = exports.randomDocs = {
  name: 'random',
  category: 'Probability',
  syntax: ['random()', 'random(max)', 'random(min, max)', 'random(size)', 'random(size, max)', 'random(size, min, max)'],
  description: 'Return a random number.',
  examples: ['random()', 'random(10, 20)', 'random([2, 3])'],
  seealso: ['pickRandom', 'randomInt']
};