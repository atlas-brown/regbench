(function (root, factory) {
  /*jshint strict: false*/
  /*global define*/
  if (typeof define === "function" && define.amd) {
    // AMD, register as an anonymous module.
    define(["bluebird"], factory);
  } else if (typeof exports === "object") {
    // Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = factory(require("bluebird"));
  } else {
    // Browser globals (root is window)
    root.schematics = factory(root.bluebird);
  }
}(this, function (BPromise) {

  "use strict";

  /**
   * Take functions from `Object.prototype` for use with `.call` later. This
   * ensures the original implementations are used in cases where an object has
   * an overwritten `hasOwnProperty` or `toString` property.
   */
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;

  /**
   * Internal utility methods.
   */
  var _ = (function () {

    var _ = {
      /**
       * Shallow-copies the properties of `source` onto `target`.
       */
      extend: function (target) {
        /*jshint maxcomplexity: 4*/
        for (var i = 1, source; (source = arguments[i]) != null; i++) {
          for (var k in source) {
            if (hasOwnProp.call(source, k)) target[k] = source[k];
          }
        }
        return target;
      }
    };

    /**
     * Create `isType` functions for testing basic JS types.
     */
    ["Boolean", "Number", "String", "Date", "Object", "Array"].forEach(function (k) {
      var className = "[object " + k + "]";
      _["is" + k] = function (value) {
        return toString.call(value) === className;
      };
    });

    return _;
  }());

  var schematics = (function () {

    /**
     * Runs a validation chain where `chain` is an array of step functions that
     * will be run sequentially, each accepting `value` and returning a result
     * object. `valueOnSuccess` determines whether a `value` property will be
     * added to the result object if validation succeeds (defaults to `true`).
     */
    var runner = function (chain, value, valueOnSuccess) {
      return chain.reduce(function (last, step) {
        return last.then(function (result) {
          return result.valid ? step(value) : result;
        });
      }, BPromise.resolve({ valid: true })).then(function (result) {
          if (result.valid && valueOnSuccess !== false) result.value = value;
          return result;
        });
    };

    /**
     * Creates a new validation chain using `ruleDefs` to specify the rules that
     * can be added to the chain, and using `chain` as the already-accumulated
     * validation steps to run in the chain.
     */
    var mkV = function (ruleDefs, chain) {
      ruleDefs = _.extend({}, ruleDefs);
      var v = {
        run: function (value, valueOnSuccess) {
          return runner(chain, value, valueOnSuccess);
        },
        extend: function(newRuleDefs) {
          return mkV(_.extend({}, ruleDefs, newRuleDefs), chain);
        }
      };
      for (var k in ruleDefs) {
        if (hasOwnProp.call(ruleDefs, k)) v[k] = mkRule(ruleDefs, chain, ruleDefs[k]);
      }
      return v;
    };

    /**
     * Creates a function that copies a validation chain and extends it with a
     * new rule.
     */
    var mkRule = function (ruleDefs, chain, ruleDef) {
      return function () {
        return mkV(ruleDefs, chain.concat([ruleDef.apply(undefined, arguments)]));
      };
    };

    /**
     * Create the schematics root object.
     */
    return mkV({}, []);
  }());

  /**
   * Helper for generating validation result objects.
   */
  var handleTest = function (success, msg) {
    return success ? { valid: true } : { valid: false, msg: msg };
  };

  /**
   * Creates a validation handler for a simple predicate function. `test` is
   * the predicate, `msg` is the error message to use when the predicate fails.
   */
  var predicateTest = function (msg, test) {
    return function () {
      return function (value) {
        return handleTest(test(value), msg);
      };
    };
  };

  /**
   * Rule definition for checking a list-like value is not empty.
   */
  var nonEmpty = predicateTest("Value is empty", function (value) {
    return value.length > 0;
  });

  /**
   * Rule definition for checking a date value contains a valid date.
   */
  var validDate = predicateTest("Date is invalid", function (value) {
    return !isNaN(value.getTime());
  });

  /**
   * Rule definition for checking a number is greater than or equal to a minimum
   * value.
   */
  var min = function (minimum) {
    return predicateTest("Value was less than the expected minimum", function (value) {
      return value >= minimum;
    })();
  };

  /**
   * Rule definition for checking a number is less than or equal to a maximum
   * value.
   */
  var max = function (maximum) {
    return predicateTest("Value was greater than the expected maximum", function (value) {
      return value <= maximum;
    })();
  };

  /**
   * Rule definition for checking if a number is a real number - that is, not
   * Infinite or NaN.
   */
  var isReal = predicateTest("Number is not a real", isFinite);

  /**
   * Rule definition for checking a string matches a regular expression pattern.
   */
  var pattern = function (rx) {
    return predicateTest("String did not match specified pattern", function (value) {
      return rx.test(value);
    })();
  };

  /**
   * Rule definition for checking a string is one of a set list of values.
   */
  var strEnum = function (values) {
    return predicateTest("String was not one of '" + values.join("', '") + "'", function (value) {
      return values.indexOf(value) !== -1;
    })();
  };

  /**
   * Rule definition for checking object properties, where `obj` is an object
   * with enumerable keys, and each value is a sub-validator.
   */
  var obj = (function () {
    var mkTest = function (name, test) {
      return {
        name: name,
        run: function (value) {
          if (!hasOwnProp.call(value, name)) {
            return BPromise.resolve(handleTest(false, "Property is missing"));
          }
          return test.run(value[name], false);
        }
      };
    };
    return function (obj) {
      var tests = [];
      for (var k in obj) {
        if (hasOwnProp.call(obj, k)) {
          tests.push(mkTest(k, obj[k]));
        }
      }
      return function (value) {
        if (!_.isObject(value)) {
          return { valid: false, msg: "Value is not an object" };
        }
        if (!obj) return { valid: true };
        var result = { valid: true, why: {} };
        return BPromise.all(tests.map(function (rule) {
            return rule.run(value)
              .then(function (xresult) {
                if (!xresult.valid) result.valid = false;
                result.why[rule.name] = xresult;
                return xresult;
              });
          }))
          .return(result);
      };
    };
  }());

  /**
   * Rule definition for checking the items of an array, where `validator` is
   * the sub-validator to run on each item.
   */
  var arr = function (validator) {
    return function (values) {
      if (!_.isArray(values)) {
        return { valid: false, msg: "Value is not an array" };
      }
      if (!validator) return { valid: true };
      var result = { valid: true, whys: [] };
      return BPromise.all(values.map(function (x, i) {
          return validator.run(x, false)
            .then(function (xresult) {
              if (!xresult.valid) result.valid = false;
              result.whys[i] = xresult;
              return xresult;
            });
        }))
        .return(result);
    };
  };

  /**
   * Rule definition for trying alternate validators.
   */
  var or = function (v1, v2) {
    return function (value) {
      return v1.run(value, false)
        .then(function (xresult) {
          return xresult.valid ? xresult : v2.run(value, false);
        });
    };
  };

  /**
   * Rule definition for providing custom error messages.
   */
  var msg = function (msg, v) {
    return function (value) {
      return v.run(value, false)
        .then(function (xresult) {
          return xresult.valid ? xresult : { valid: false, msg: msg };
        });
    };
  };

  /**
   * Extend the `schematics` object with the basic validators and return.
   */
  return _.extend(schematics, {

    or: schematics.extend({ or: or }).or,

    nil: schematics.extend({
      type: predicateTest("Value is not null or undefined", function (value) {
        return value == null;
      })
    }).type,

    bool: schematics.extend({
      type: predicateTest("Value is not a boolean", _.isBoolean)
    }).type,

    num: schematics.extend({
      type: predicateTest("Value is not a number", _.isNumber),
      min: min,
      max: max,
      isReal: isReal
    }).type,

    str: schematics.extend({
      type: predicateTest("Value is not a string", _.isString),
      pattern: pattern,
      enum: strEnum,
      nonEmpty: nonEmpty
    }).type,

    date: schematics.extend({
      type: predicateTest("Value is not a date", _.isDate),
      valid: validDate
    }).type,

    obj: schematics.extend({ type: obj }).type,

    arr: schematics.extend({
      type: arr,
      nonEmpty: nonEmpty,
    }).type,

    msg: schematics.extend({ msg: msg }).msg

  });

}));
