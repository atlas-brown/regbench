import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { isNode } from '../../utils/is.js';
import { keywords } from '../keywords.js';
import { escape } from '../../utils/string.js';
import { forEach, join } from '../../utils/array.js';
import { toSymbol } from '../../utils/latex.js';
import { getPrecedence } from '../operators.js';
import { factory } from '../../utils/factory.js';
var name = 'FunctionAssignmentNode';
var dependencies = ['typed', 'Node'];
export var createFunctionAssignmentNode = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    Node
  } = _ref;
  /**
   * Is parenthesis needed?
   * @param {Node} node
   * @param {Object} parenthesis
   * @param {string} implicit
   * @private
   */
  function needParenthesis(node, parenthesis, implicit) {
    var precedence = getPrecedence(node, parenthesis, implicit);
    var exprPrecedence = getPrecedence(node.expr, parenthesis, implicit);
    return parenthesis === 'all' || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  class FunctionAssignmentNode extends Node {
    /**
     * @constructor FunctionAssignmentNode
     * @extends {Node}
     * Function assignment
     *
     * @param {string} name           Function name
     * @param {string[] | Array.<{name: string, type: string}>} params
     *                                Array with function parameter names, or an
     *                                array with objects containing the name
     *                                and type of the parameter
     * @param {Node} expr             The function expression
     */
    constructor(name, params, expr) {
      super();
      // validate input
      if (typeof name !== 'string') {
        throw new TypeError('String expected for parameter "name"');
      }
      if (!Array.isArray(params)) {
        throw new TypeError('Array containing strings or objects expected for parameter "params"');
      }
      if (!isNode(expr)) {
        throw new TypeError('Node expected for parameter "expr"');
      }
      if (keywords.has(name)) {
        throw new Error('Illegal function name, "' + name + '" is a reserved keyword');
      }
      var paramNames = new Set();
      for (var param of params) {
        var _name = typeof param === 'string' ? param : param.name;
        if (paramNames.has(_name)) {
          throw new Error("Duplicate parameter name \"".concat(_name, "\""));
        } else {
          paramNames.add(_name);
        }
      }
      this.name = name;
      this.params = params.map(function (param) {
        return param && param.name || param;
      });
      this.types = params.map(function (param) {
        return param && param.type || 'any';
      });
      this.expr = expr;
    }
    get type() {
      return name;
    }
    get isFunctionAssignmentNode() {
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
      var childArgNames = Object.create(argNames);
      forEach(this.params, function (param) {
        childArgNames[param] = true;
      });

      // compile the function expression with the child args
      var evalExpr = this.expr._compile(math, childArgNames);
      var name = this.name;
      var params = this.params;
      var signature = join(this.types, ',');
      var syntax = name + '(' + join(this.params, ', ') + ')';
      return function evalFunctionAssignmentNode(scope, args, context) {
        var signatures = {};
        signatures[signature] = function () {
          var childArgs = Object.create(args);
          for (var i = 0; i < params.length; i++) {
            childArgs[params[i]] = arguments[i];
          }
          return evalExpr(scope, childArgs, context);
        };
        var fn = typed(name, signatures);
        fn.syntax = syntax;
        scope.set(name, fn);
        return fn;
      };
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      callback(this.expr, 'expr', this);
    }

    /**
     * Create a new FunctionAssignmentNode whose children are the results of
     * calling the provided callback function for each child of the original
     * node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {FunctionAssignmentNode} Returns a transformed copy of the node
     */
    map(callback) {
      var expr = this._ifNode(callback(this.expr, 'expr', this));
      return new FunctionAssignmentNode(this.name, this.params.slice(0), expr);
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {FunctionAssignmentNode}
     */
    clone() {
      return new FunctionAssignmentNode(this.name, this.params.slice(0), this.expr);
    }

    /**
     * get string representation
     * @param {Object} options
     * @return {string} str
     */
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      var expr = this.expr.toString(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = '(' + expr + ')';
      }
      return this.name + '(' + this.params.join(', ') + ') = ' + expr;
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      var types = this.types;
      return {
        mathjs: name,
        name: this.name,
        params: this.params.map(function (param, index) {
          return {
            name: param,
            type: types[index]
          };
        }),
        expr: this.expr
      };
    }

    /**
     * Instantiate an FunctionAssignmentNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     ```
     *     {"mathjs": "FunctionAssignmentNode",
     *      name: ..., params: ..., expr: ...}
     *     ```
     *     where mathjs is optional
     * @returns {FunctionAssignmentNode}
     */
    static fromJSON(json) {
      return new FunctionAssignmentNode(json.name, json.params, json.expr);
    }

    /**
     * get HTML representation
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      var params = [];
      for (var i = 0; i < this.params.length; i++) {
        params.push('<span class="math-symbol math-parameter">' + escape(this.params[i]) + '</span>');
      }
      var expr = this.expr.toHTML(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + expr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return '<span class="math-function">' + escape(this.name) + '</span>' + '<span class="math-parenthesis math-round-parenthesis">(</span>' + params.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span>' + '<span class="math-operator math-assignment-operator ' + 'math-variable-assignment-operator math-binary-operator">=</span>' + expr;
    }

    /**
     * get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      var expr = this.expr.toTex(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = "\\left(".concat(expr, "\\right)");
      }
      return '\\mathrm{' + this.name + '}\\left(' + this.params.map(toSymbol).join(',') + '\\right)=' + expr;
    }
  }
  _defineProperty(FunctionAssignmentNode, "name", name);
  return FunctionAssignmentNode;
}, {
  isClass: true,
  isNode: true
});