import { isBigInt, isBigNumber } from '../../utils/is.js';
import { format, sign } from '../../utils/number.js';
import { factory } from '../../utils/factory.js';
var name = 'Range';
var dependencies = [];
export var createRangeClass = /* #__PURE__ */factory(name, dependencies, () => {
  /**
   * Create a range of numbers. A range has a start, step, and end,
   * and contains functions to iterate over the range.
   *
   * A range can be constructed as:
   *
   *     const range = new Range(start, end)
   *     const range = new Range(start, end, step)
   *
   * Note that the endpoints and step may be specified with other numeric
   * types such as bigint or BigNumber, but they will be demoted to the
   * built-in `number` type and the Range will only contain numbers. The
   * rationale for this demotion is that Range objects are primarily used
   * for indexing Matrix objects, and Matrix objects may only be indexed
   * with `number`s.
   *
   * To get the result of the range:
   *     range.forEach(function (x) {
   *         console.log(x)
   *     })
   *     range.map(function (x) {
   *         return math.sin(x)
   *     })
   *     range.toArray()
   *
   * Example usage:
   *
   *     const c = new Range(2, 6)       // 2:1:5
   *     c.toArray()                     // [2, 3, 4, 5]
   *     const d = new Range(2, -3, -1)  // 2:-1:-2
   *     d.toArray()                     // [2, 1, 0, -1, -2]
   *
   * @class Range
   * @constructor Range
   * @param {number} start  included lower bound
   * @param {number} end    excluded upper bound
   * @param {number} [step] step size, default value is 1
   */
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    var hasStart = start !== null && start !== undefined;
    var hasEnd = end !== null && end !== undefined;
    var hasStep = step !== null && step !== undefined;
    if (hasStart) {
      if (isBigNumber(start)) {
        start = start.toNumber();
      } else if (typeof start !== 'number' && !isBigInt(start)) {
        throw new TypeError('Parameter start must be a number or bigint');
      }
    }
    if (hasEnd) {
      if (isBigNumber(end)) {
        end = end.toNumber();
      } else if (typeof end !== 'number' && !isBigInt(end)) {
        throw new TypeError('Parameter end must be a number or bigint');
      }
    }
    if (hasStep) {
      if (isBigNumber(step)) {
        step = step.toNumber();
      } else if (typeof step !== 'number' && !isBigInt(step)) {
        throw new TypeError('Parameter step must be a number or bigint');
      }
    }
    this.start = hasStart ? parseFloat(start) : 0;
    this.end = hasEnd ? parseFloat(end) : 0;
    this.step = hasStep ? parseFloat(step) : 1;
  }

  /**
   * Attach type information
   */
  Range.prototype.type = 'Range';
  Range.prototype.isRange = true;

  /**
   * Parse a string into a range,
   * The string contains the start, optional step, and end, separated by a colon.
   * If the string does not contain a valid range, null is returned.
   * For example str='0:2:11'.
   * @memberof Range
   * @param {string} str
   * @return {Range | null} range
   */
  Range.parse = function (str) {
    if (typeof str !== 'string') {
      return null;
    }
    var args = str.split(':');
    var nums = args.map(function (arg) {
      return parseFloat(arg);
    });
    var invalid = nums.some(function (num) {
      return isNaN(num);
    });
    if (invalid) {
      return null;
    }
    switch (nums.length) {
      case 2:
        return new Range(nums[0], nums[1]);
      case 3:
        return new Range(nums[0], nums[2], nums[1]);
      default:
        return null;
    }
  };

  /**
   * Create a clone of the range
   * @return {Range} clone
   */
  Range.prototype.clone = function () {
    return new Range(this.start, this.end, this.step);
  };

  /**
   * Retrieve the size of the range.
   * Returns an array containing one number, the number of elements in the range.
   * @memberof Range
   * @returns {number[]} size
   */
  Range.prototype.size = function () {
    var len = 0;
    var start = this.start;
    var step = this.step;
    var end = this.end;
    var diff = end - start;
    if (sign(step) === sign(diff)) {
      len = Math.ceil(diff / step);
    } else if (diff === 0) {
      len = 0;
    }
    if (isNaN(len)) {
      len = 0;
    }
    return [len];
  };

  /**
   * Calculate the minimum value in the range
   * @memberof Range
   * @return {number | undefined} min
   */
  Range.prototype.min = function () {
    var size = this.size()[0];
    if (size > 0) {
      if (this.step > 0) {
        // positive step
        return this.start;
      } else {
        // negative step
        return this.start + (size - 1) * this.step;
      }
    } else {
      return undefined;
    }
  };

  /**
   * Calculate the maximum value in the range
   * @memberof Range
   * @return {number | undefined} max
   */
  Range.prototype.max = function () {
    var size = this.size()[0];
    if (size > 0) {
      if (this.step > 0) {
        // positive step
        return this.start + (size - 1) * this.step;
      } else {
        // negative step
        return this.start;
      }
    } else {
      return undefined;
    }
  };

  /**
   * Execute a callback function for each value in the range.
   * @memberof Range
   * @param {function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Range being traversed.
   */
  Range.prototype.forEach = function (callback) {
    var x = this.start;
    var step = this.step;
    var end = this.end;
    var i = 0;
    if (step > 0) {
      while (x < end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    } else if (step < 0) {
      while (x > end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    }
  };

  /**
   * Execute a callback function for each value in the Range, and return the
   * results as an array
   * @memberof Range
   * @param {function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @returns {Array} array
   */
  Range.prototype.map = function (callback) {
    var array = [];
    this.forEach(function (value, index, obj) {
      array[index[0]] = callback(value, index, obj);
    });
    return array;
  };

  /**
   * Create an Array with a copy of the Ranges data
   * @memberof Range
   * @returns {Array} array
   */
  Range.prototype.toArray = function () {
    var array = [];
    this.forEach(function (value, index) {
      array[index[0]] = value;
    });
    return array;
  };

  /**
   * Get the primitive value of the Range, a one dimensional array
   * @memberof Range
   * @returns {Array} array
   */
  Range.prototype.valueOf = function () {
    // TODO: implement a caching mechanism for range.valueOf()
    return this.toArray();
  };

  /**
   * Get a string representation of the range, with optional formatting options.
   * Output is formatted as 'start:step:end', for example '2:6' or '0:0.2:11'
   * @memberof Range
   * @param {Object | number | function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */
  Range.prototype.format = function (options) {
    var str = format(this.start, options);
    if (this.step !== 1) {
      str += ':' + format(this.step, options);
    }
    str += ':' + format(this.end, options);
    return str;
  };

  /**
   * Get a string representation of the range.
   * @memberof Range
   * @returns {string}
   */
  Range.prototype.toString = function () {
    return this.format();
  };

  /**
   * Get a JSON representation of the range
   * @memberof Range
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}`
   */
  Range.prototype.toJSON = function () {
    return {
      mathjs: 'Range',
      start: this.start,
      end: this.end,
      step: this.step
    };
  };

  /**
   * Instantiate a Range from a JSON object
   * @memberof Range
   * @param {Object} json A JSON object structured as:
   *                      `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}`
   * @return {Range}
   */
  Range.fromJSON = function (json) {
    return new Range(json.start, json.end, json.step);
  };
  return Range;
}, {
  isClass: true
});