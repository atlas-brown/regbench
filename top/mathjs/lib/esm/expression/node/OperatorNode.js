import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { isNode, isConstantNode, isOperatorNode, isParenthesisNode } from '../../utils/is.js';
import { map } from '../../utils/array.js';
import { createSubScope } from '../../utils/scope.js';
import { escape } from '../../utils/string.js';
import { getSafeProperty, isSafeMethod } from '../../utils/customs.js';
import { getAssociativity, getPrecedence, isAssociativeWith, properties } from '../operators.js';
import { latexOperators } from '../../utils/latex.js';
import { factory } from '../../utils/factory.js';
var name = 'OperatorNode';
var dependencies = ['Node'];
export var createOperatorNode = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    Node
  } = _ref;
  /**
   * Returns true if the expression starts with a constant, under
   * the current parenthesization:
   * @param {Node} expression
   * @param {string} parenthesis
   * @return {boolean}
   */
  function startsWithConstant(expr, parenthesis) {
    var curNode = expr;
    if (parenthesis === 'auto') {
      while (isParenthesisNode(curNode)) curNode = curNode.content;
    }
    if (isConstantNode(curNode)) return true;
    if (isOperatorNode(curNode)) {
      return startsWithConstant(curNode.args[0], parenthesis);
    }
    return false;
  }

  /**
   * Calculate which parentheses are necessary. Gets an OperatorNode
   * (which is the root of the tree) and an Array of Nodes
   * (this.args) and returns an array where 'true' means that an argument
   * has to be enclosed in parentheses whereas 'false' means the opposite.
   *
   * @param {OperatorNode} root
   * @param {string} parenthesis
   * @param {Node[]} args
   * @param {boolean} latex
   * @return {boolean[]}
   * @private
   */
  function calculateNecessaryParentheses(root, parenthesis, implicit, args, latex) {
    // precedence of the root OperatorNode
    var precedence = getPrecedence(root, parenthesis, implicit);
    var associativity = getAssociativity(root, parenthesis);
    if (parenthesis === 'all' || args.length > 2 && root.getIdentifier() !== 'OperatorNode:add' && root.getIdentifier() !== 'OperatorNode:multiply') {
      return args.map(function (arg) {
        switch (arg.getContent().type) {
          // Nodes that don't need extra parentheses
          case 'ArrayNode':
          case 'ConstantNode':
          case 'SymbolNode':
          case 'ParenthesisNode':
            return false;
          default:
            return true;
        }
      });
    }
    var result;
    switch (args.length) {
      case 0:
        result = [];
        break;
      case 1:
        // unary operators
        {
          // precedence of the operand
          var operandPrecedence = getPrecedence(args[0], parenthesis, implicit, root);

          // handle special cases for LaTeX, where some of the parentheses aren't needed
          if (latex && operandPrecedence !== null) {
            var operandIdentifier;
            var rootIdentifier;
            if (parenthesis === 'keep') {
              operandIdentifier = args[0].getIdentifier();
              rootIdentifier = root.getIdentifier();
            } else {
              // Ignore Parenthesis Nodes when not in 'keep' mode
              operandIdentifier = args[0].getContent().getIdentifier();
              rootIdentifier = root.getContent().getIdentifier();
            }
            if (properties[precedence][rootIdentifier].latexLeftParens === false) {
              result = [false];
              break;
            }
            if (properties[operandPrecedence][operandIdentifier].latexParens === false) {
              result = [false];
              break;
            }
          }
          if (operandPrecedence === null) {
            // if the operand has no defined precedence, no parens are needed
            result = [false];
            break;
          }
          if (operandPrecedence <= precedence) {
            // if the operands precedence is lower, parens are needed
            result = [true];
            break;
          }

          // otherwise, no parens needed
          result = [false];
        }
        break;
      case 2:
        // binary operators
        {
          var lhsParens; // left hand side needs parenthesis?
          // precedence of the left hand side
          var lhsPrecedence = getPrecedence(args[0], parenthesis, implicit, root);
          // is the root node associative with the left hand side
          var assocWithLhs = isAssociativeWith(root, args[0], parenthesis);
          if (lhsPrecedence === null) {
            // if the left hand side has no defined precedence, no parens are needed
            // FunctionNode for example
            lhsParens = false;
          } else if (lhsPrecedence === precedence && associativity === 'right' && !assocWithLhs) {
            // In case of equal precedence, if the root node is left associative
            // parens are **never** necessary for the left hand side.
            // If it is right associative however, parens are necessary
            // if the root node isn't associative with the left hand side
            lhsParens = true;
          } else if (lhsPrecedence < precedence) {
            lhsParens = true;
          } else {
            lhsParens = false;
          }
          var rhsParens; // right hand side needs parenthesis?
          // precedence of the right hand side
          var rhsPrecedence = getPrecedence(args[1], parenthesis, implicit, root);
          // is the root node associative with the right hand side?
          var assocWithRhs = isAssociativeWith(root, args[1], parenthesis);
          if (rhsPrecedence === null) {
            // if the right hand side has no defined precedence, no parens are needed
            // FunctionNode for example
            rhsParens = false;
          } else if (rhsPrecedence === precedence && associativity === 'left' && !assocWithRhs) {
            // In case of equal precedence, if the root node is right associative
            // parens are **never** necessary for the right hand side.
            // If it is left associative however, parens are necessary
            // if the root node isn't associative with the right hand side
            rhsParens = true;
          } else if (rhsPrecedence < precedence) {
            rhsParens = true;
          } else {
            rhsParens = false;
          }

          // handle special cases for LaTeX, where some of the parentheses aren't needed
          if (latex) {
            var _rootIdentifier;
            var lhsIdentifier;
            var rhsIdentifier;
            if (parenthesis === 'keep') {
              _rootIdentifier = root.getIdentifier();
              lhsIdentifier = root.args[0].getIdentifier();
              rhsIdentifier = root.args[1].getIdentifier();
            } else {
              // Ignore ParenthesisNodes when not in 'keep' mode
              _rootIdentifier = root.getContent().getIdentifier();
              lhsIdentifier = root.args[0].getContent().getIdentifier();
              rhsIdentifier = root.args[1].getContent().getIdentifier();
            }
            if (lhsPrecedence !== null) {
              if (properties[precedence][_rootIdentifier].latexLeftParens === false) {
                lhsParens = false;
              }
              if (properties[lhsPrecedence][lhsIdentifier].latexParens === false) {
                lhsParens = false;
              }
            }
            if (rhsPrecedence !== null) {
              if (properties[precedence][_rootIdentifier].latexRightParens === false) {
                rhsParens = false;
              }
              if (properties[rhsPrecedence][rhsIdentifier].latexParens === false) {
                rhsParens = false;
              }
            }
          }
          result = [lhsParens, rhsParens];
        }
        break;
      default:
        if (root.getIdentifier() === 'OperatorNode:add' || root.getIdentifier() === 'OperatorNode:multiply') {
          result = args.map(function (arg) {
            var argPrecedence = getPrecedence(arg, parenthesis, implicit, root);
            var assocWithArg = isAssociativeWith(root, arg, parenthesis);
            var argAssociativity = getAssociativity(arg, parenthesis);
            if (argPrecedence === null) {
              // if the argument has no defined precedence, no parens are needed
              return false;
            } else if (precedence === argPrecedence && associativity === argAssociativity && !assocWithArg) {
              return true;
            } else if (argPrecedence < precedence) {
              return true;
            }
            return false;
          });
        }
        break;
    }

    // Handles an edge case of parentheses with implicit multiplication
    // of ConstantNode.
    // In that case, parenthesize ConstantNodes that follow an unparenthesized
    // expression, even though they normally wouldn't be printed.
    if (args.length >= 2 && root.getIdentifier() === 'OperatorNode:multiply' && root.implicit && parenthesis !== 'all' && implicit === 'hide') {
      for (var i = 1; i < result.length; ++i) {
        if (startsWithConstant(args[i], parenthesis) && !result[i - 1] && (parenthesis !== 'keep' || !isParenthesisNode(args[i - 1]))) {
          result[i] = true;
        }
      }
    }
    return result;
  }
  class OperatorNode extends Node {
    /**
     * @constructor OperatorNode
     * @extends {Node}
     * An operator with two arguments, like 2+3
     *
     * @param {string} op           Operator name, for example '+'
     * @param {string} fn           Function name, for example 'add'
     * @param {Node[]} args         Operator arguments
     * @param {boolean} [implicit]  Is this an implicit multiplication?
     * @param {boolean} [isPercentage] Is this an percentage Operation?
     */
    constructor(op, fn, args, implicit, isPercentage) {
      super();
      // validate input
      if (typeof op !== 'string') {
        throw new TypeError('string expected for parameter "op"');
      }
      if (typeof fn !== 'string') {
        throw new TypeError('string expected for parameter "fn"');
      }
      if (!Array.isArray(args) || !args.every(isNode)) {
        throw new TypeError('Array containing Nodes expected for parameter "args"');
      }
      this.implicit = implicit === true;
      this.isPercentage = isPercentage === true;
      this.op = op;
      this.fn = fn;
      this.args = args || [];
    }
    get type() {
      return name;
    }
    get isOperatorNode() {
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
      // validate fn
      if (typeof this.fn !== 'string' || !isSafeMethod(math, this.fn)) {
        if (!math[this.fn]) {
          throw new Error('Function ' + this.fn + ' missing in provided namespace "math"');
        } else {
          throw new Error('No access to function "' + this.fn + '"');
        }
      }
      var fn = getSafeProperty(math, this.fn);
      var evalArgs = map(this.args, function (arg) {
        return arg._compile(math, argNames);
      });
      if (typeof fn === 'function' && fn.rawArgs === true) {
        // pass unevaluated parameters (nodes) to the function
        // "raw" evaluation
        var rawArgs = this.args;
        return function evalOperatorNode(scope, args, context) {
          return fn(rawArgs, math, createSubScope(scope, args));
        };
      } else if (evalArgs.length === 1) {
        var evalArg0 = evalArgs[0];
        return function evalOperatorNode(scope, args, context) {
          return fn(evalArg0(scope, args, context));
        };
      } else if (evalArgs.length === 2) {
        var _evalArg = evalArgs[0];
        var evalArg1 = evalArgs[1];
        return function evalOperatorNode(scope, args, context) {
          return fn(_evalArg(scope, args, context), evalArg1(scope, args, context));
        };
      } else {
        return function evalOperatorNode(scope, args, context) {
          return fn.apply(null, map(evalArgs, function (evalArg) {
            return evalArg(scope, args, context);
          }));
        };
      }
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      for (var i = 0; i < this.args.length; i++) {
        callback(this.args[i], 'args[' + i + ']', this);
      }
    }

    /**
     * Create a new OperatorNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {OperatorNode} Returns a transformed copy of the node
     */
    map(callback) {
      var args = [];
      for (var i = 0; i < this.args.length; i++) {
        args[i] = this._ifNode(callback(this.args[i], 'args[' + i + ']', this));
      }
      return new OperatorNode(this.op, this.fn, args, this.implicit, this.isPercentage);
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {OperatorNode}
     */
    clone() {
      return new OperatorNode(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage);
    }

    /**
     * Check whether this is an unary OperatorNode:
     * has exactly one argument, like `-a`.
     * @return {boolean}
     *     Returns true when an unary operator node, false otherwise.
     */
    isUnary() {
      return this.args.length === 1;
    }

    /**
     * Check whether this is a binary OperatorNode:
     * has exactly two arguments, like `a + b`.
     * @return {boolean}
     *     Returns true when a binary operator node, false otherwise.
     */
    isBinary() {
      return this.args.length === 2;
    }

    /**
     * Get string representation.
     * @param {Object} options
     * @return {string} str
     */
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      var implicit = options && options.implicit ? options.implicit : 'hide';
      var args = this.args;
      var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, false);
      if (args.length === 1) {
        // unary operators
        var assoc = getAssociativity(this, parenthesis);
        var operand = args[0].toString(options);
        if (parens[0]) {
          operand = '(' + operand + ')';
        }

        // for example for "not", we want a space between operand and argument
        var opIsNamed = /[a-zA-Z]+/.test(this.op);
        if (assoc === 'right') {
          // prefix operator
          return this.op + (opIsNamed ? ' ' : '') + operand;
        } else if (assoc === 'left') {
          // postfix
          return operand + (opIsNamed ? ' ' : '') + this.op;
        }

        // fall back to postfix
        return operand + this.op;
      } else if (args.length === 2) {
        var lhs = args[0].toString(options); // left hand side
        var rhs = args[1].toString(options); // right hand side
        if (parens[0]) {
          // left hand side in parenthesis?
          lhs = '(' + lhs + ')';
        }
        if (parens[1]) {
          // right hand side in parenthesis?
          rhs = '(' + rhs + ')';
        }
        if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
          return lhs + ' ' + rhs;
        }
        return lhs + ' ' + this.op + ' ' + rhs;
      } else if (args.length > 2 && (this.getIdentifier() === 'OperatorNode:add' || this.getIdentifier() === 'OperatorNode:multiply')) {
        var stringifiedArgs = args.map(function (arg, index) {
          arg = arg.toString(options);
          if (parens[index]) {
            // put in parenthesis?
            arg = '(' + arg + ')';
          }
          return arg;
        });
        if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
          return stringifiedArgs.join(' ');
        }
        return stringifiedArgs.join(' ' + this.op + ' ');
      } else {
        // fallback to formatting as a function call
        return this.fn + '(' + this.args.join(', ') + ')';
      }
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: name,
        op: this.op,
        fn: this.fn,
        args: this.args,
        implicit: this.implicit,
        isPercentage: this.isPercentage
      };
    }

    /**
     * Instantiate an OperatorNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     ```
     *     {"mathjs": "OperatorNode",
     *      "op": "+", "fn": "add", "args": [...],
     *      "implicit": false,
     *      "isPercentage":false}
     *     ```
     *     where mathjs is optional
     * @returns {OperatorNode}
     */
    static fromJSON(json) {
      return new OperatorNode(json.op, json.fn, json.args, json.implicit, json.isPercentage);
    }

    /**
     * Get HTML representation.
     * @param {Object} options
     * @return {string} str
     */
    _toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      var implicit = options && options.implicit ? options.implicit : 'hide';
      var args = this.args;
      var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, false);
      if (args.length === 1) {
        // unary operators
        var assoc = getAssociativity(this, parenthesis);
        var operand = args[0].toHTML(options);
        if (parens[0]) {
          operand = '<span class="math-parenthesis math-round-parenthesis">(</span>' + operand + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        if (assoc === 'right') {
          // prefix operator
          return '<span class="math-operator math-unary-operator ' + 'math-lefthand-unary-operator">' + escape(this.op) + '</span>' + operand;
        } else {
          // postfix when assoc === 'left' or undefined
          return operand + '<span class="math-operator math-unary-operator ' + 'math-righthand-unary-operator">' + escape(this.op) + '</span>';
        }
      } else if (args.length === 2) {
        // binary operatoes
        var lhs = args[0].toHTML(options); // left hand side
        var rhs = args[1].toHTML(options); // right hand side
        if (parens[0]) {
          // left hand side in parenthesis?
          lhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + lhs + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        if (parens[1]) {
          // right hand side in parenthesis?
          rhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + rhs + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
          return lhs + '<span class="math-operator math-binary-operator ' + 'math-implicit-binary-operator"></span>' + rhs;
        }
        return lhs + '<span class="math-operator math-binary-operator ' + 'math-explicit-binary-operator">' + escape(this.op) + '</span>' + rhs;
      } else {
        var stringifiedArgs = args.map(function (arg, index) {
          arg = arg.toHTML(options);
          if (parens[index]) {
            // put in parenthesis?
            arg = '<span class="math-parenthesis math-round-parenthesis">(</span>' + arg + '<span class="math-parenthesis math-round-parenthesis">)</span>';
          }
          return arg;
        });
        if (args.length > 2 && (this.getIdentifier() === 'OperatorNode:add' || this.getIdentifier() === 'OperatorNode:multiply')) {
          if (this.implicit && this.getIdentifier() === 'OperatorNode:multiply' && implicit === 'hide') {
            return stringifiedArgs.join('<span class="math-operator math-binary-operator ' + 'math-implicit-binary-operator"></span>');
          }
          return stringifiedArgs.join('<span class="math-operator math-binary-operator ' + 'math-explicit-binary-operator">' + escape(this.op) + '</span>');
        } else {
          // fallback to formatting as a function call
          return '<span class="math-function">' + escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">' + '(</span>' + stringifiedArgs.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
        }
      }
    }

    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     */
    _toTex(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
      var implicit = options && options.implicit ? options.implicit : 'hide';
      var args = this.args;
      var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, true);
      var op = latexOperators[this.fn];
      op = typeof op === 'undefined' ? this.op : op; // fall back to using this.op

      if (args.length === 1) {
        // unary operators
        var assoc = getAssociativity(this, parenthesis);
        var operand = args[0].toTex(options);
        if (parens[0]) {
          operand = "\\left(".concat(operand, "\\right)");
        }
        if (assoc === 'right') {
          // prefix operator
          return op + operand;
        } else if (assoc === 'left') {
          // postfix operator
          return operand + op;
        }

        // fall back to postfix
        return operand + op;
      } else if (args.length === 2) {
        // binary operators
        var lhs = args[0]; // left hand side
        var lhsTex = lhs.toTex(options);
        if (parens[0]) {
          lhsTex = "\\left(".concat(lhsTex, "\\right)");
        }
        var rhs = args[1]; // right hand side
        var rhsTex = rhs.toTex(options);
        if (parens[1]) {
          rhsTex = "\\left(".concat(rhsTex, "\\right)");
        }

        // handle some exceptions (due to the way LaTeX works)
        var lhsIdentifier;
        if (parenthesis === 'keep') {
          lhsIdentifier = lhs.getIdentifier();
        } else {
          // Ignore ParenthesisNodes if in 'keep' mode
          lhsIdentifier = lhs.getContent().getIdentifier();
        }
        switch (this.getIdentifier()) {
          case 'OperatorNode:divide':
            // op contains '\\frac' at this point
            return op + '{' + lhsTex + '}' + '{' + rhsTex + '}';
          case 'OperatorNode:pow':
            lhsTex = '{' + lhsTex + '}';
            rhsTex = '{' + rhsTex + '}';
            switch (lhsIdentifier) {
              case 'ConditionalNode': //
              case 'OperatorNode:divide':
                lhsTex = "\\left(".concat(lhsTex, "\\right)");
            }
            break;
          case 'OperatorNode:multiply':
            if (this.implicit && implicit === 'hide') {
              return lhsTex + '~' + rhsTex;
            }
        }
        return lhsTex + op + rhsTex;
      } else if (args.length > 2 && (this.getIdentifier() === 'OperatorNode:add' || this.getIdentifier() === 'OperatorNode:multiply')) {
        var texifiedArgs = args.map(function (arg, index) {
          arg = arg.toTex(options);
          if (parens[index]) {
            arg = "\\left(".concat(arg, "\\right)");
          }
          return arg;
        });
        if (this.getIdentifier() === 'OperatorNode:multiply' && this.implicit && implicit === 'hide') {
          return texifiedArgs.join('~');
        }
        return texifiedArgs.join(op);
      } else {
        // fall back to formatting as a function call
        // as this is a fallback, it doesn't use
        // fancy function names
        return '\\mathrm{' + this.fn + '}\\left(' + args.map(function (arg) {
          return arg.toTex(options);
        }).join(',') + '\\right)';
      }
    }

    /**
     * Get identifier.
     * @return {string}
     */
    getIdentifier() {
      return this.type + ':' + this.fn;
    }
  }
  _defineProperty(OperatorNode, "name", name);
  return OperatorNode;
}, {
  isClass: true,
  isNode: true
});