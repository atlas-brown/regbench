"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createZeros = void 0;
var _is = require("../../utils/is.js");
var _number = require("../../utils/number.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
const name = 'zeros';
const dependencies = ['typed', 'config', 'matrix', 'BigNumber'];
const createZeros = exports.createZeros = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    config,
    matrix,
    BigNumber
  } = _ref;
  /**
   * Create a matrix filled with zeros. The created matrix can have one or
   * multiple dimensions.
   *
   * Syntax:
   *
   *    math.zeros(m)
   *    math.zeros(m, format)
   *    math.zeros(m, n)
   *    math.zeros(m, n, format)
   *    math.zeros([m, n])
   *    math.zeros([m, n], format)
   *
   * Examples:
   *
   *    math.zeros()                   // returns []
   *    math.zeros(3)                  // returns [0, 0, 0]
   *    math.zeros(3, 2)               // returns [[0, 0], [0, 0], [0, 0]]
   *    math.zeros(3, 'dense')         // returns [0, 0, 0]
   *
   *    const A = [[1, 2, 3], [4, 5, 6]]
   *    math.zeros(math.size(A))       // returns [[0, 0, 0], [0, 0, 0]]
   *
   * See also:
   *
   *    ones, identity, size, range
   *
   * @param {...(number|BigNumber) | Array} size    The size of each dimension of the matrix
   * @param {string} [format]           The Matrix storage format
   *
   * @return {Array | Matrix}           A matrix filled with zeros
   */
  return typed(name, {
    '': function () {
      return config.matrix === 'Array' ? _zeros([]) : _zeros([], 'default');
    },
    // math.zeros(m, n, p, ..., format)
    // TODO: more accurate signature '...number | BigNumber, string' as soon as typed-function supports this
    '...number | BigNumber | string': function (size) {
      const last = size[size.length - 1];
      if (typeof last === 'string') {
        const format = size.pop();
        return _zeros(size, format);
      } else if (config.matrix === 'Array') {
        return _zeros(size);
      } else {
        return _zeros(size, 'default');
      }
    },
    Array: _zeros,
    Matrix: function (size) {
      const format = size.storage();
      return _zeros(size.valueOf(), format);
    },
    'Array | Matrix, string': function (size, format) {
      return _zeros(size.valueOf(), format);
    }
  });

  /**
   * Create an Array or Matrix with zeros
   * @param {Array} size
   * @param {string} [format='default']
   * @return {Array | Matrix}
   * @private
   */
  function _zeros(size, format) {
    const hasBigNumbers = _normalize(size);
    const defaultValue = hasBigNumbers ? new BigNumber(0) : 0;
    _validate(size);
    if (format) {
      // return a matrix
      const m = matrix(format);
      if (size.length > 0) {
        return m.resize(size, defaultValue);
      }
      return m;
    } else {
      // return an Array
      const arr = [];
      if (size.length > 0) {
        return (0, _array.resize)(arr, size, defaultValue);
      }
      return arr;
    }
  }

  // replace BigNumbers with numbers, returns true if size contained BigNumbers
  function _normalize(size) {
    let hasBigNumbers = false;
    size.forEach(function (value, index, arr) {
      if ((0, _is.isBigNumber)(value)) {
        hasBigNumbers = true;
        arr[index] = value.toNumber();
      }
    });
    return hasBigNumbers;
  }

  // validate arguments
  function _validate(size) {
    size.forEach(function (value) {
      if (typeof value !== 'number' || !(0, _number.isInteger)(value) || value < 0) {
        throw new Error('Parameters in function zeros must be positive integers');
      }
    });
  }
});

// TODO: zeros contains almost the same code as ones. Reuse this?