"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importFactory = importFactory;
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
var _object = require("../../utils/object.js");
var _ArgumentsError = require("../../error/ArgumentsError.js");
function importFactory(typed, load, math, importedFactories) {
  /**
   * Import functions from an object or a module.
   *
   * This function is only available on a mathjs instance created using `create`.
   *
   * Syntax:
   *
   *    math.import(functions)
   *    math.import(functions, options)
   *
   * Where:
   *
   * - `functions: Object`
   *   An object with functions or factories to be imported.
   * - `options: Object` An object with import options. Available options:
   *   - `override: boolean`
   *     If true, existing functions will be overwritten. False by default.
   *   - `silent: boolean`
   *     If true, the function will not throw errors on duplicates or invalid
   *     types. False by default.
   *   - `wrap: boolean`
   *     If true, the functions will be wrapped in a wrapper function
   *     which converts data types like Matrix to primitive data types like Array.
   *     The wrapper is needed when extending math.js with libraries which do not
   *     support these data type. False by default.
   *
   * Examples:
   *
   *    import { create, all } from 'mathjs'
   *    import * as numbers from 'numbers'
   *
   *    // create a mathjs instance
   *    const math = create(all)
   *
   *    // define new functions and variables
   *    math.import({
   *      myvalue: 42,
   *      hello: function (name) {
   *        return 'hello, ' + name + '!'
   *      }
   *    })
   *
   *    // use the imported function and variable
   *    math.myvalue * 2               // 84
   *    math.hello('user')             // 'hello, user!'
   *
   *    // import the npm module 'numbers'
   *    // (must be installed first with `npm install numbers`)
   *    math.import(numbers, {wrap: true})
   *
   *    math.fibonacci(7) // returns 13
   *
   * @param {Object | Array} functions  Object with functions to be imported.
   * @param {Object} [options]          Import options.
   */
  function mathImport(functions, options) {
    const num = arguments.length;
    if (num !== 1 && num !== 2) {
      throw new _ArgumentsError.ArgumentsError('import', num, 1, 2);
    }
    if (!options) {
      options = {};
    }
    function flattenImports(flatValues, value, name) {
      if (Array.isArray(value)) {
        value.forEach(item => flattenImports(flatValues, item));
      } else if ((0, _is.isObject)(value) || isModule(value)) {
        for (const name in value) {
          if ((0, _object.hasOwnProperty)(value, name)) {
            flattenImports(flatValues, value[name], name);
          }
        }
      } else if ((0, _factory.isFactory)(value) || name !== undefined) {
        const flatName = (0, _factory.isFactory)(value) ? isTransformFunctionFactory(value) ? value.fn + '.transform' // TODO: this is ugly
        : value.fn : name;

        // we allow importing the same function twice if it points to the same implementation
        if ((0, _object.hasOwnProperty)(flatValues, flatName) && flatValues[flatName] !== value && !options.silent) {
          throw new Error('Cannot import "' + flatName + '" twice');
        }
        flatValues[flatName] = value;
      } else {
        if (!options.silent) {
          throw new TypeError('Factory, Object, or Array expected');
        }
      }
    }
    const flatValues = {};
    flattenImports(flatValues, functions);
    for (const name in flatValues) {
      if ((0, _object.hasOwnProperty)(flatValues, name)) {
        // console.log('import', name)
        const value = flatValues[name];
        if ((0, _factory.isFactory)(value)) {
          // we ignore name here and enforce the name of the factory
          // maybe at some point we do want to allow overriding it
          // in that case we can implement an option overrideFactoryNames: true
          _importFactory(value, options);
        } else if (isSupportedType(value)) {
          _import(name, value, options);
        } else {
          if (!options.silent) {
            throw new TypeError('Factory, Object, or Array expected');
          }
        }
      }
    }
  }

  /**
   * Add a property to the math namespace
   * @param {string} name
   * @param {*} value
   * @param {Object} options  See import for a description of the options
   * @private
   */
  function _import(name, value, options) {
    var _math$Unit;
    // TODO: refactor this function, it's to complicated and contains duplicate code
    if (options.wrap && typeof value === 'function') {
      // create a wrapper around the function
      value = _wrap(value);
    }

    // turn a plain function with a typed-function signature into a typed-function
    if (hasTypedFunctionSignature(value)) {
      value = typed(name, {
        [value.signature]: value
      });
    }
    if (typed.isTypedFunction(math[name]) && typed.isTypedFunction(value)) {
      if (options.override) {
        // give the typed function the right name
        value = typed(name, value.signatures);
      } else {
        // merge the existing and typed function
        value = typed(math[name], value);
      }
      math[name] = value;
      delete importedFactories[name];
      _importTransform(name, value);
      math.emit('import', name, function resolver() {
        return value;
      });
      return;
    }
    const isDefined = math[name] !== undefined;
    const isValuelessUnit = (_math$Unit = math.Unit) === null || _math$Unit === void 0 ? void 0 : _math$Unit.isValuelessUnit(name);
    if (!isDefined && !isValuelessUnit || options.override) {
      math[name] = value;
      delete importedFactories[name];
      _importTransform(name, value);
      math.emit('import', name, function resolver() {
        return value;
      });
      return;
    }
    if (!options.silent) {
      throw new Error('Cannot import "' + name + '": already exists');
    }
  }
  function _importTransform(name, value) {
    if (value && typeof value.transform === 'function') {
      math.expression.transform[name] = value.transform;
      if (allowedInExpressions(name)) {
        math.expression.mathWithTransform[name] = value.transform;
      }
    } else {
      // remove existing transform
      delete math.expression.transform[name];
      if (allowedInExpressions(name)) {
        math.expression.mathWithTransform[name] = value;
      }
    }
  }
  function _deleteTransform(name) {
    delete math.expression.transform[name];
    if (allowedInExpressions(name)) {
      math.expression.mathWithTransform[name] = math[name];
    } else {
      delete math.expression.mathWithTransform[name];
    }
  }

  /**
   * Create a wrapper a round an function which converts the arguments
   * to their primitive values (like convert a Matrix to Array)
   * @param {Function} fn
   * @return {Function} Returns the wrapped function
   * @private
   */
  function _wrap(fn) {
    const wrapper = function wrapper() {
      const args = [];
      for (let i = 0, len = arguments.length; i < len; i++) {
        const arg = arguments[i];
        args[i] = arg && arg.valueOf();
      }
      return fn.apply(math, args);
    };
    if (fn.transform) {
      wrapper.transform = fn.transform;
    }
    return wrapper;
  }

  /**
   * Import an instance of a factory into math.js
   * @param {function(scope: object)} factory
   * @param {Object} options  See import for a description of the options
   * @param {string} [name=factory.name] Optional custom name
   * @private
   */
  function _importFactory(factory, options) {
    var _factory$meta$formerl, _factory$meta;
    let name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : factory.fn;
    if (name.includes('.')) {
      throw new Error('Factory name should not contain a nested path. ' + 'Name: ' + JSON.stringify(name));
    }
    const namespace = isTransformFunctionFactory(factory) ? math.expression.transform : math;
    const existingTransform = name in math.expression.transform;
    const existing = (0, _object.hasOwnProperty)(namespace, name) ? namespace[name] : undefined;
    const resolver = function () {
      // collect all dependencies, handle finding both functions and classes and other special cases
      const dependencies = {};
      factory.dependencies.map(_factory.stripOptionalNotation).forEach(dependency => {
        if (dependency.includes('.')) {
          throw new Error('Factory dependency should not contain a nested path. ' + 'Name: ' + JSON.stringify(dependency));
        }
        if (dependency === 'math') {
          dependencies.math = math;
        } else if (dependency === 'mathWithTransform') {
          dependencies.mathWithTransform = math.expression.mathWithTransform;
        } else if (dependency === 'classes') {
          // special case for json reviver
          dependencies.classes = math;
        } else {
          dependencies[dependency] = math[dependency];
        }
      });
      const instance = /* #__PURE__ */factory(dependencies);
      if (instance && typeof instance.transform === 'function') {
        throw new Error('Transforms cannot be attached to factory functions. ' + 'Please create a separate function for it with export const path = "expression.transform"');
      }
      if (existing === undefined || options.override) {
        return instance;
      }
      if (typed.isTypedFunction(existing) && typed.isTypedFunction(instance)) {
        // merge the existing and new typed function
        return typed(existing, instance);
      }
      if (options.silent) {
        // keep existing, ignore imported function
        return existing;
      } else {
        throw new Error('Cannot import "' + name + '": already exists');
      }
    };
    const former = (_factory$meta$formerl = (_factory$meta = factory.meta) === null || _factory$meta === void 0 ? void 0 : _factory$meta.formerly) !== null && _factory$meta$formerl !== void 0 ? _factory$meta$formerl : '';
    const needsTransform = isTransformFunctionFactory(factory) || factoryAllowedInExpressions(factory);
    const withTransform = math.expression.mathWithTransform;

    // TODO: add unit test with non-lazy factory
    if (!factory.meta || factory.meta.lazy !== false) {
      (0, _object.lazy)(namespace, name, resolver);
      if (former) (0, _object.lazy)(namespace, former, resolver);

      // FIXME: remove the `if (existing &&` condition again. Can we make sure subset is loaded before subset.transform? (Name collision, and no dependencies between the two)
      if (existing && existingTransform) {
        _deleteTransform(name);
        if (former) _deleteTransform(former);
      } else {
        if (needsTransform) {
          (0, _object.lazy)(withTransform, name, () => namespace[name]);
          if (former) (0, _object.lazy)(withTransform, former, () => namespace[name]);
        }
      }
    } else {
      namespace[name] = resolver();
      if (former) namespace[former] = namespace[name];

      // FIXME: remove the `if (existing &&` condition again. Can we make sure subset is loaded before subset.transform? (Name collision, and no dependencies between the two)
      if (existing && existingTransform) {
        _deleteTransform(name);
        if (former) _deleteTransform(former);
      } else {
        if (needsTransform) {
          (0, _object.lazy)(withTransform, name, () => namespace[name]);
          if (former) (0, _object.lazy)(withTransform, former, () => namespace[name]);
        }
      }
    }

    // TODO: improve factories, store a list with imports instead which can be re-played
    importedFactories[name] = factory;
    math.emit('import', name, resolver);
  }

  /**
   * Check whether given object is a type which can be imported
   * @param {Function | number | string | boolean | null | Unit | Complex} object
   * @return {boolean}
   * @private
   */
  function isSupportedType(object) {
    return typeof object === 'function' || typeof object === 'number' || typeof object === 'string' || typeof object === 'boolean' || object === null || (0, _is.isUnit)(object) || (0, _is.isComplex)(object) || (0, _is.isBigNumber)(object) || (0, _is.isFraction)(object) || (0, _is.isMatrix)(object) || Array.isArray(object);
  }
  function isModule(object) {
    return typeof object === 'object' && object[Symbol.toStringTag] === 'Module';
  }
  function hasTypedFunctionSignature(fn) {
    return typeof fn === 'function' && typeof fn.signature === 'string';
  }
  function allowedInExpressions(name) {
    return !(0, _object.hasOwnProperty)(unsafe, name);
  }
  function factoryAllowedInExpressions(factory) {
    return !factory.fn.includes('.') &&
    // FIXME: make checking on path redundant, check on meta data instead
    !(0, _object.hasOwnProperty)(unsafe, factory.fn) && (!factory.meta || !factory.meta.isClass);
  }
  function isTransformFunctionFactory(factory) {
    return factory !== undefined && factory.meta !== undefined && factory.meta.isTransformFunction === true || false;
  }

  // namespaces and functions not available in the parser for safety reasons
  const unsafe = {
    expression: true,
    type: true,
    docs: true,
    error: true,
    json: true,
    chain: true // chain method not supported. Note that there is a unit chain too.
  };
  return mathImport;
}