import { flatten } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
import { isMatrix, isNumber } from '../../utils/is.js';
import { createRng } from './util/seededRNG.js';
var name = 'pickRandom';
var dependencies = ['typed', 'config', '?on'];
export var createPickRandom = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    on
  } = _ref;
  // seeded pseudo random number generator
  var rng = createRng(config.randomSeed);
  if (on) {
    on('config', function (curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = createRng(curr.randomSeed);
      }
    });
  }

  /**
   * Random pick one or more values from a one dimensional array.
   * Array elements are picked using a random function with uniform or weighted distribution.
   *
   * Syntax:
   *
   *     math.pickRandom(array)
   *     math.pickRandom(array, number)
   *     math.pickRandom(array, weights)
   *     math.pickRandom(array, number, weights)
   *     math.pickRandom(array, weights, number)
   *     math.pickRandom(array, { weights, number, elementWise })
   *
   * Examples:
   *
   *     math.pickRandom([3, 6, 12, 2])                  // returns one of the values in the array
   *     math.pickRandom([3, 6, 12, 2], 2)               // returns an array of two of the values in the array
   *     math.pickRandom([3, 6, 12, 2], { number: 2 })   // returns an array of two of the values in the array
   *     math.pickRandom([3, 6, 12, 2], [1, 3, 2, 1])    // returns one of the values in the array with weighted distribution
   *     math.pickRandom([3, 6, 12, 2], 2, [1, 3, 2, 1]) // returns an array of two of the values in the array with weighted distribution
   *     math.pickRandom([3, 6, 12, 2], [1, 3, 2, 1], 2) // returns an array of two of the values in the array with weighted distribution
   *
   *     math.pickRandom([{x: 1.0, y: 2.0}, {x: 1.1, y: 2.0}], { elementWise: false })
   *         // returns one of the items in the array
   *
   * See also:
   *
   *     random, randomInt
   *
   * @param {Array | Matrix} array     A one dimensional array
   * @param {Int} number               An int or float
   * @param {Array | Matrix} weights   An array of ints or floats
   * @return {number | Array}          Returns a single random value from array when number is undefined.
   *                                   Returns an array with the configured number of elements when number is defined.
   */
  return typed(name, {
    'Array | Matrix': function Array__Matrix(possibles) {
      return _pickRandom(possibles, {});
    },
    'Array | Matrix, Object': function Array__Matrix_Object(possibles, options) {
      return _pickRandom(possibles, options);
    },
    'Array | Matrix, number': function Array__Matrix_number(possibles, number) {
      return _pickRandom(possibles, {
        number
      });
    },
    'Array | Matrix, Array | Matrix': function Array__Matrix_Array__Matrix(possibles, weights) {
      return _pickRandom(possibles, {
        weights
      });
    },
    'Array | Matrix, Array | Matrix, number': function Array__Matrix_Array__Matrix_number(possibles, weights, number) {
      return _pickRandom(possibles, {
        number,
        weights
      });
    },
    'Array | Matrix, number, Array | Matrix': function Array__Matrix_number_Array__Matrix(possibles, number, weights) {
      return _pickRandom(possibles, {
        number,
        weights
      });
    }
  });

  /**
   * @param {Array | Matrix} possibles
   * @param {{
   *   number?: number,
   *   weights?: Array | Matrix,
   *   elementWise: boolean
   * }} options
   * @returns {number | Array}
   * @private
   */
  function _pickRandom(possibles, _ref2) {
    var {
      number,
      weights,
      elementWise = true
    } = _ref2;
    var single = typeof number === 'undefined';
    if (single) {
      number = 1;
    }
    var createMatrix = isMatrix(possibles) ? possibles.create : isMatrix(weights) ? weights.create : null;
    possibles = possibles.valueOf(); // get Array
    if (weights) {
      weights = weights.valueOf(); // get Array
    }
    if (elementWise === true) {
      possibles = flatten(possibles);
      weights = flatten(weights);
    }
    var totalWeights = 0;
    if (typeof weights !== 'undefined') {
      if (weights.length !== possibles.length) {
        throw new Error('Weights must have the same length as possibles');
      }
      for (var i = 0, len = weights.length; i < len; i++) {
        if (!isNumber(weights[i]) || weights[i] < 0) {
          throw new Error('Weights must be an array of positive numbers');
        }
        totalWeights += weights[i];
      }
    }
    var length = possibles.length;
    var result = [];
    var pick;
    while (result.length < number) {
      if (typeof weights === 'undefined') {
        pick = possibles[Math.floor(rng() * length)];
      } else {
        var randKey = rng() * totalWeights;
        for (var _i = 0, _len = possibles.length; _i < _len; _i++) {
          randKey -= weights[_i];
          if (randKey < 0) {
            pick = possibles[_i];
            break;
          }
        }
      }
      result.push(pick);
    }
    return single ? result[0] : createMatrix ? createMatrix(result) : result;
  }
});