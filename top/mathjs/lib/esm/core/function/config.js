import { clone, deepExtend } from '../../utils/object.js';
import { DEFAULT_CONFIG } from '../config.js';
export var MATRIX_OPTIONS = ['Matrix', 'Array']; // valid values for option matrix
export var NUMBER_OPTIONS = ['number', 'BigNumber', 'Fraction']; // valid values for option number

export function configFactory(config, emit) {
  /**
   * Set configuration options for math.js, and get current options.
   * Will emit a 'config' event, with arguments (curr, prev, changes).
   *
   * This function is only available on a mathjs instance created using `create`.
   *
   * Syntax:
   *
   *     math.config(config: Object): Object
   *
   * Examples:
   *
   *
   *     import { create, all } from 'mathjs'
   *
   *     // create a mathjs instance
   *     const math = create(all)
   *
   *     math.config().number                // outputs 'number'
   *     math.evaluate('0.4')                // outputs number 0.4
   *     math.config({number: 'Fraction'})
   *     math.evaluate('0.4')                // outputs Fraction 2/5
   *
   * @param {Object} [options] Available options:
   *                            {number} relTol
   *                              Minimum relative difference between two
   *                              compared values, used by all comparison functions.
   *                            {number} absTol
   *                              Minimum absolute difference between two
   *                              compared values, used by all comparison functions.
   *                            {string} matrix
   *                              A string 'Matrix' (default) or 'Array'.
   *                            {string} number
   *                              A string 'number' (default), 'BigNumber', 'bigint', or 'Fraction'
   *                            {number} precision
   *                              The number of significant digits for BigNumbers.
   *                              Not applicable for Numbers.
   *                            {string} parenthesis
   *                              How to display parentheses in LaTeX and string
   *                              output.
   *                            {string} randomSeed
   *                              Random seed for seeded pseudo random number generator.
   *                              Set to null to randomly seed.
   * @return {Object} Returns the current configuration
   */
  function _config(options) {
    if (options) {
      if (options.epsilon !== undefined) {
        // this if is only for backwards compatibility, it can be removed in the future.
        console.warn('Warning: The configuration option "epsilon" is deprecated. Use "relTol" and "absTol" instead.');
        var optionsFix = clone(options);
        optionsFix.relTol = options.epsilon;
        optionsFix.absTol = options.epsilon * 1e-3;
        delete optionsFix.epsilon;
        return _config(optionsFix);
      }
      var prev = clone(config);

      // validate some of the options
      validateOption(options, 'matrix', MATRIX_OPTIONS);
      validateOption(options, 'number', NUMBER_OPTIONS);

      // merge options
      deepExtend(config, options);
      var curr = clone(config);
      var changes = clone(options);

      // emit 'config' event
      emit('config', curr, prev, changes);
      return curr;
    } else {
      return clone(config);
    }
  }

  // attach the valid options to the function so they can be extended
  _config.MATRIX_OPTIONS = MATRIX_OPTIONS;
  _config.NUMBER_OPTIONS = NUMBER_OPTIONS;

  // attach the config properties as readonly properties to the config function
  Object.keys(DEFAULT_CONFIG).forEach(key => {
    Object.defineProperty(_config, key, {
      get: () => config[key],
      enumerable: true,
      configurable: true
    });
  });
  return _config;
}

/**
 * Validate an option
 * @param {Object} options         Object with options
 * @param {string} name            Name of the option to validate
 * @param {Array.<string>} values  Array with valid values for this option
 */
function validateOption(options, name, values) {
  if (options[name] !== undefined && !values.includes(options[name])) {
    // unknown value
    console.warn('Warning: Unknown value "' + options[name] + '" for configuration option "' + name + '". ' + 'Available options: ' + values.map(value => JSON.stringify(value)).join(', ') + '.');
  }
}