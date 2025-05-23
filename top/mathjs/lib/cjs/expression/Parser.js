"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParserClass = void 0;
var _factory = require("../utils/factory.js");
var _map = require("../utils/map.js");
const name = 'Parser';
const dependencies = ['evaluate', 'parse'];
const createParserClass = exports.createParserClass = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    evaluate,
    parse
  } = _ref;
  /**
   * @constructor Parser
   * Parser contains methods to evaluate or parse expressions, and has a number
   * of convenience methods to get, set, and remove variables from memory. Parser
   * keeps a scope containing variables in memory, which is used for all
   * evaluations.
   *
   * Methods:
   *    const result = parser.evaluate(expr)  // evaluate an expression
   *    const value = parser.get(name)        // retrieve a variable from the parser
   *    const values = parser.getAll()        // retrieve all defined variables
   *    parser.set(name, value)               // set a variable in the parser
   *    parser.remove(name)                   // clear a variable from the
   *                                          // parsers scope
   *    parser.clear()                        // clear the parsers scope
   *
   * Example usage:
   *    const parser = new Parser()
   *    // Note: there is a convenience method which can be used instead:
   *    // const parser = new math.parser()
   *
   *    // evaluate expressions
   *    parser.evaluate('sqrt(3^2 + 4^2)')        // 5
   *    parser.evaluate('sqrt(-4)')               // 2i
   *    parser.evaluate('2 inch in cm')           // 5.08 cm
   *    parser.evaluate('cos(45 deg)')            // 0.7071067811865476
   *
   *    // define variables and functions
   *    parser.evaluate('x = 7 / 2')              // 3.5
   *    parser.evaluate('x + 3')                  // 6.5
   *    parser.evaluate('f(x, y) = x^y')          // f(x, y)
   *    parser.evaluate('f(2, 3)')                // 8
   *
   *    // get and set variables and functions
   *    const x = parser.get('x')                 // 3.5
   *    const f = parser.get('f')                 // function
   *    const g = f(3, 2)                         // 9
   *    parser.set('h', 500)
   *    const i = parser.evaluate('h / 2')        // 250
   *    parser.set('hello', function (name) {
   *        return 'hello, ' + name + '!'
   *    })
   *    parser.evaluate('hello("user")')          // "hello, user!"
   *
   *    // clear defined functions and variables
   *    parser.clear()
   *
   */
  function Parser() {
    if (!(this instanceof Parser)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    Object.defineProperty(this, 'scope', {
      value: (0, _map.createEmptyMap)(),
      writable: false
    });
  }

  /**
   * Attach type information
   */
  Parser.prototype.type = 'Parser';
  Parser.prototype.isParser = true;

  /**
   * Parse and evaluate the given expression
   * @param {string | string[]} expr   A string containing an expression,
   *                                   for example "2+3", or a list with expressions
   * @return {*} result     The result, or undefined when the expression was empty
   * @throws {Error}
   */
  Parser.prototype.evaluate = function (expr) {
    // TODO: validate arguments
    return evaluate(expr, this.scope);
  };

  /**
   * Get a variable (a function or variable) by name from the parsers scope.
   * Returns undefined when not found
   * @param {string} name
   * @return {* | undefined} value
   */
  Parser.prototype.get = function (name) {
    // TODO: validate arguments
    if (this.scope.has(name)) {
      return this.scope.get(name);
    }
  };

  /**
   * Get a map with all defined variables
   * @return {Object} values
   */
  Parser.prototype.getAll = function () {
    return (0, _map.toObject)(this.scope);
  };

  /**
   * Get a map with all defined variables
   * @return {Map} values
   */
  Parser.prototype.getAllAsMap = function () {
    return this.scope;
  };
  function isValidVariableName(name) {
    if (name.length === 0) {
      return false;
    }
    for (let i = 0; i < name.length; i++) {
      const cPrev = name.charAt(i - 1);
      const c = name.charAt(i);
      const cNext = name.charAt(i + 1);
      const valid = parse.isAlpha(c, cPrev, cNext) || i > 0 && parse.isDigit(c);
      if (!valid) {
        return false;
      }
    }
    return true;
  }

  /**
   * Set a symbol (a function or variable) by name from the parsers scope.
   * @param {string} name
   * @param {* | undefined} value
   */
  Parser.prototype.set = function (name, value) {
    if (!isValidVariableName(name)) {
      throw new Error(`Invalid variable name: '${name}'. Variable names must follow the specified rules.`);
    }
    this.scope.set(name, value);
    return value;
  };

  /**
   * Remove a variable from the parsers scope
   * @param {string} name
   */
  Parser.prototype.remove = function (name) {
    this.scope.delete(name);
  };

  /**
   * Clear the scope with variables and functions
   */
  Parser.prototype.clear = function () {
    this.scope.clear();
  };
  return Parser;
}, {
  isClass: true
});