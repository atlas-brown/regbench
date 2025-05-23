"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSymbolNode = void 0;
var _string = require("../../utils/string.js");
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _latex = require("../../utils/latex.js");
const name = 'SymbolNode';
const dependencies = ['math', '?Unit', 'Node'];
const createSymbolNode = exports.createSymbolNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    math,
    Unit,
    Node
  } = _ref;
  /**
   * Check whether some name is a valueless unit like "inch".
   * @param {string} name
   * @return {boolean}
   */
  function isValuelessUnit(name) {
    return Unit ? Unit.isValuelessUnit(name) : false;
  }
  class SymbolNode extends Node {
    /**
     * @constructor SymbolNode
     * @extends {Node}
     * A symbol node can hold and resolve a symbol
     * @param {string} name
     * @extends {Node}
     */
    constructor(name) {
      super();
      // validate input
      if (typeof name !== 'string') {
        throw new TypeError('String expected for parameter "name"');
      }
      this.name = name;
    }
    get type() {
      return 'SymbolNode';
    }
    get isSymbolNode() {
      return true;
    }

    /**
     * Compile a node into a JavaScript function.
     * This basically pre-calculates as much as possible and only leaves open
     * calculations which depend on a dynamic scope with variables.
     * @param {Object} math     Math.js namespace with functions and constants.
     * @param {Object} argNames An object with argument names as key and `true`
     *                          as value. Used in the SymbolNode to optimize
     *                          for arguments from user assigned functions
     *                          (see FunctionAssignmentNode) or special symbols
     *                          like `end` (see IndexNode).
     * @return {function} Returns a function which can be called like:
     *                        evalNode(scope: Object, args: Object, context: *)
     */
    _compile(math, argNames) {
      const name = this.name;
      if (argNames[name] === true) {
        // this is a FunctionAssignment argument
        // (like an x when inside the expression of a function
        // assignment `f(x) = ...`)
        return function (scope, args, context) {
          return (0, _customs.getSafeProperty)(args, name);
        };
      } else if (name in math) {
        return function (scope, args, context) {
          return scope.has(name) ? scope.get(name) : (0, _customs.getSafeProperty)(math, name);
        };
      } else {
        const isUnit = isValuelessUnit(name);
        return function (scope, args, context) {
          return scope.has(name) ? scope.get(name) : isUnit ? new Unit(null, name) : SymbolNode.onUndefinedSymbol(name);
        };
      }
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      // nothing to do, we don't have any children
    }

    /**
     * Create a new SymbolNode with children produced by the given callback.
     * Trivial since a SymbolNode has no children
     * @param {function(child: Node, path: string, parent: Node) : Node} callback
     * @returns {SymbolNode} Returns a clone of the node
     */
    map(callback) {
      return this.clone();
    }

    /**
     * Throws an error 'Undefined symbol {name}'
     * @param {string} name
     */
    static onUndefinedSymbol(name) {
      throw new Error('Undefined symbol ' + name);
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {SymbolNode}
     */
    clone() {
      return new SymbolNode(this.name);
    }

    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(options) {
      return this.name;
    }

    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(options) {
      const name = (0, _string.escape)(this.name);
      if (name === 'true' || name === 'false') {
        return '<span class="math-symbol math-boolean">' + name + '</span>';
      } else if (name === 'i') {
        return '<span class="math-symbol math-imaginary-symbol">' + name + '</span>';
      } else if (name === 'Infinity') {
        return '<span class="math-symbol math-infinity-symbol">' + name + '</span>';
      } else if (name === 'NaN') {
        return '<span class="math-symbol math-nan-symbol">' + name + '</span>';
      } else if (name === 'null') {
        return '<span class="math-symbol math-null-symbol">' + name + '</span>';
      } else if (name === 'undefined') {
        return '<span class="math-symbol math-undefined-symbol">' + name + '</span>';
      }
      return '<span class="math-symbol">' + name + '</span>';
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: 'SymbolNode',
        name: this.name
      };
    }

    /**
     * Instantiate a SymbolNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "SymbolNode", name: "x"}`,
     *                       where mathjs is optional
     * @returns {SymbolNode}
     */
    static fromJSON(json) {
      return new SymbolNode(json.name);
    }

    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toTex(options) {
      let isUnit = false;
      if (typeof math[this.name] === 'undefined' && isValuelessUnit(this.name)) {
        isUnit = true;
      }
      const symbol = (0, _latex.toSymbol)(this.name, isUnit);
      if (symbol[0] === '\\') {
        // no space needed if the symbol starts with '\'
        return symbol;
      }
      // the space prevents symbols from breaking stuff like '\cdot'
      // if it's written right before the symbol
      return ' ' + symbol;
    }
  }
  return SymbolNode;
}, {
  isClass: true,
  isNode: true
});