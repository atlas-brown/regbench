"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSimplifyCore = void 0;
var _is = require("../../utils/is.js");
var _operators = require("../../expression/operators.js");
var _util = require("./simplify/util.js");
var _factory = require("../../utils/factory.js");
const name = 'simplifyCore';
const dependencies = ['typed', 'parse', 'equal', 'isZero', 'add', 'subtract', 'multiply', 'divide', 'pow', 'AccessorNode', 'ArrayNode', 'ConstantNode', 'FunctionNode', 'IndexNode', 'ObjectNode', 'OperatorNode', 'ParenthesisNode', 'SymbolNode'];
const createSimplifyCore = exports.createSimplifyCore = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    parse,
    equal,
    isZero,
    add,
    subtract,
    multiply,
    divide,
    pow,
    AccessorNode,
    ArrayNode,
    ConstantNode,
    FunctionNode,
    IndexNode,
    ObjectNode,
    OperatorNode,
    ParenthesisNode,
    SymbolNode
  } = _ref;
  const node0 = new ConstantNode(0);
  const node1 = new ConstantNode(1);
  const nodeT = new ConstantNode(true);
  const nodeF = new ConstantNode(false);
  // test if a node will always have a boolean value (true/false)
  // not sure if this list is complete
  function isAlwaysBoolean(node) {
    return (0, _is.isOperatorNode)(node) && ['and', 'not', 'or'].includes(node.op);
  }
  const {
    hasProperty,
    isCommutative
  } = (0, _util.createUtil)({
    FunctionNode,
    OperatorNode,
    SymbolNode
  });
  /**
   * simplifyCore() performs single pass simplification suitable for
   * applications requiring ultimate performance. To roughly summarize,
   * it handles cases along the lines of simplifyConstant() but where
   * knowledge of a single argument is sufficient to determine the value.
   * In contrast, simplify() extends simplifyCore() with additional passes
   * to provide deeper simplification (such as gathering like terms).
   *
   * Specifically, simplifyCore:
   *
   * * Converts all function calls with operator equivalents to their
   *   operator forms.
   * * Removes operators or function calls that are guaranteed to have no
   *   effect (such as unary '+').
   * * Removes double unary '-', '~', and 'not'
   * * Eliminates addition/subtraction of 0 and multiplication/division/powers
   *   by 1 or 0.
   * * Converts addition of a negation into subtraction.
   * * Eliminates logical operations with constant true or false leading
   *   arguments.
   * * Puts constants on the left of a product, if multiplication is
   *   considered commutative by the options (which is the default)
   *
   * Syntax:
   *
   *     math.simplifyCore(expr)
   *     math.simplifyCore(expr, options)
   *
   * Examples:
   *
   *     const f = math.parse('2 * 1 * x ^ (1 - 0)')
   *     math.simplifyCore(f)                          // Node "2 * x"
   *     math.simplify('2 * 1 * x ^ (1 - 0)', [math.simplifyCore]) // Node "2 * x"
   *
   * See also:
   *
   *     simplify, simplifyConstant, resolve, derivative
   *
   * @param {Node | string} node
   *     The expression to be simplified
   * @param {Object} options
   *     Simplification options, as per simplify()
   * @return {Node} Returns expression with basic simplifications applied
   */
  function _simplifyCore(nodeToSimplify) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const context = options ? options.context : undefined;
    if (hasProperty(nodeToSimplify, 'trivial', context)) {
      // This node does nothing if it has only one argument, so if so,
      // return that argument simplified
      if ((0, _is.isFunctionNode)(nodeToSimplify) && nodeToSimplify.args.length === 1) {
        return _simplifyCore(nodeToSimplify.args[0], options);
      }
      // For other node types, we try the generic methods
      let simpChild = false;
      let childCount = 0;
      nodeToSimplify.forEach(c => {
        ++childCount;
        if (childCount === 1) {
          simpChild = _simplifyCore(c, options);
        }
      });
      if (childCount === 1) {
        return simpChild;
      }
    }
    let node = nodeToSimplify;
    if ((0, _is.isFunctionNode)(node)) {
      const op = (0, _operators.getOperator)(node.name);
      if (op) {
        // Replace FunctionNode with a new OperatorNode
        if (node.args.length > 2 && hasProperty(node, 'associative', context)) {
          // unflatten into binary operations since that's what simplifyCore handles
          while (node.args.length > 2) {
            const last = node.args.pop();
            const seclast = node.args.pop();
            node.args.push(new OperatorNode(op, node.name, [last, seclast]));
          }
        }
        node = new OperatorNode(op, node.name, node.args);
      } else {
        return new FunctionNode(_simplifyCore(node.fn), node.args.map(n => _simplifyCore(n, options)));
      }
    }
    if ((0, _is.isOperatorNode)(node) && node.isUnary()) {
      const a0 = _simplifyCore(node.args[0], options);
      if (node.op === '~') {
        // bitwise not
        if ((0, _is.isOperatorNode)(a0) && a0.isUnary() && a0.op === '~') {
          return a0.args[0];
        }
      }
      if (node.op === 'not') {
        // logical not
        if ((0, _is.isOperatorNode)(a0) && a0.isUnary() && a0.op === 'not') {
          // Has the effect of turning the argument into a boolean
          // So can only eliminate the double negation if
          // the inside is already boolean
          if (isAlwaysBoolean(a0.args[0])) {
            return a0.args[0];
          }
        }
      }
      let finish = true;
      if (node.op === '-') {
        // unary minus
        if ((0, _is.isOperatorNode)(a0)) {
          if (a0.isBinary() && a0.fn === 'subtract') {
            node = new OperatorNode('-', 'subtract', [a0.args[1], a0.args[0]]);
            finish = false; // continue to process the new binary node
          }
          if (a0.isUnary() && a0.op === '-') {
            return a0.args[0];
          }
        }
      }
      if (finish) return new OperatorNode(node.op, node.fn, [a0]);
    }
    if ((0, _is.isOperatorNode)(node) && node.isBinary()) {
      const a0 = _simplifyCore(node.args[0], options);
      let a1 = _simplifyCore(node.args[1], options);
      if (node.op === '+') {
        if ((0, _is.isConstantNode)(a0) && isZero(a0.value)) {
          return a1;
        }
        if ((0, _is.isConstantNode)(a1) && isZero(a1.value)) {
          return a0;
        }
        if ((0, _is.isOperatorNode)(a1) && a1.isUnary() && a1.op === '-') {
          a1 = a1.args[0];
          node = new OperatorNode('-', 'subtract', [a0, a1]);
        }
      }
      if (node.op === '-') {
        if ((0, _is.isOperatorNode)(a1) && a1.isUnary() && a1.op === '-') {
          return _simplifyCore(new OperatorNode('+', 'add', [a0, a1.args[0]]), options);
        }
        if ((0, _is.isConstantNode)(a0) && isZero(a0.value)) {
          return _simplifyCore(new OperatorNode('-', 'unaryMinus', [a1]));
        }
        if ((0, _is.isConstantNode)(a1) && isZero(a1.value)) {
          return a0;
        }
        return new OperatorNode(node.op, node.fn, [a0, a1]);
      }
      if (node.op === '*') {
        if ((0, _is.isConstantNode)(a0)) {
          if (isZero(a0.value)) {
            return node0;
          } else if (equal(a0.value, 1)) {
            return a1;
          }
        }
        if ((0, _is.isConstantNode)(a1)) {
          if (isZero(a1.value)) {
            return node0;
          } else if (equal(a1.value, 1)) {
            return a0;
          }
          if (isCommutative(node, context)) {
            return new OperatorNode(node.op, node.fn, [a1, a0], node.implicit); // constants on left
          }
        }
        return new OperatorNode(node.op, node.fn, [a0, a1], node.implicit);
      }
      if (node.op === '/') {
        if ((0, _is.isConstantNode)(a0) && isZero(a0.value)) {
          return node0;
        }
        if ((0, _is.isConstantNode)(a1) && equal(a1.value, 1)) {
          return a0;
        }
        return new OperatorNode(node.op, node.fn, [a0, a1]);
      }
      if (node.op === '^') {
        if ((0, _is.isConstantNode)(a1)) {
          if (isZero(a1.value)) {
            return node1;
          } else if (equal(a1.value, 1)) {
            return a0;
          }
        }
      }
      if (node.op === 'and') {
        if ((0, _is.isConstantNode)(a0)) {
          if (a0.value) {
            if (isAlwaysBoolean(a1)) return a1;
            if ((0, _is.isConstantNode)(a1)) {
              return a1.value ? nodeT : nodeF;
            }
          } else {
            return nodeF;
          }
        }
        if ((0, _is.isConstantNode)(a1)) {
          if (a1.value) {
            if (isAlwaysBoolean(a0)) return a0;
          } else {
            return nodeF;
          }
        }
      }
      if (node.op === 'or') {
        if ((0, _is.isConstantNode)(a0)) {
          if (a0.value) {
            return nodeT;
          } else {
            if (isAlwaysBoolean(a1)) return a1;
          }
        }
        if ((0, _is.isConstantNode)(a1)) {
          if (a1.value) {
            return nodeT;
          } else {
            if (isAlwaysBoolean(a0)) return a0;
          }
        }
      }
      return new OperatorNode(node.op, node.fn, [a0, a1]);
    }
    if ((0, _is.isOperatorNode)(node)) {
      return new OperatorNode(node.op, node.fn, node.args.map(a => _simplifyCore(a, options)));
    }
    if ((0, _is.isArrayNode)(node)) {
      return new ArrayNode(node.items.map(n => _simplifyCore(n, options)));
    }
    if ((0, _is.isAccessorNode)(node)) {
      return new AccessorNode(_simplifyCore(node.object, options), _simplifyCore(node.index, options));
    }
    if ((0, _is.isIndexNode)(node)) {
      return new IndexNode(node.dimensions.map(n => _simplifyCore(n, options)));
    }
    if ((0, _is.isObjectNode)(node)) {
      const newProps = {};
      for (const prop in node.properties) {
        newProps[prop] = _simplifyCore(node.properties[prop], options);
      }
      return new ObjectNode(newProps);
    }
    // cannot simplify
    return node;
  }
  return typed(name, {
    Node: _simplifyCore,
    'Node,Object': _simplifyCore
  });
});