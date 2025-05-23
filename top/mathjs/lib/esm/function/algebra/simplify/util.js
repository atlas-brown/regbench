import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { isFunctionNode, isOperatorNode, isParenthesisNode } from '../../../utils/is.js';
import { factory } from '../../../utils/factory.js';
import { hasOwnProperty } from '../../../utils/object.js';
var name = 'simplifyUtil';
var dependencies = ['FunctionNode', 'OperatorNode', 'SymbolNode'];
export var createUtil = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    FunctionNode,
    OperatorNode,
    SymbolNode
  } = _ref;
  // TODO commutative/associative properties rely on the arguments
  // e.g. multiply is not commutative for matrices
  // The properties should be calculated from an argument to simplify, or possibly something in math.config
  // the other option is for typed() to specify a return type so that we can evaluate the type of arguments

  /* So that properties of an operator fit on one line: */
  var T = true;
  var F = false;
  var defaultName = 'defaultF';
  var defaultContext = {
    /*      */add: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    /**/unaryPlus: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    /* */subtract: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    },
    /* */multiply: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    /*   */divide: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    },
    /*    */paren: {
      trivial: T,
      total: T,
      commutative: T,
      associative: F
    },
    /* */defaultF: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    }
  };
  var realContext = {
    divide: {
      total: F
    },
    log: {
      total: F
    }
  };
  var positiveContext = {
    subtract: {
      total: F
    },
    abs: {
      trivial: T
    },
    log: {
      total: T
    }
  };
  function hasProperty(nodeOrName, property) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultContext;
    var name = defaultName;
    if (typeof nodeOrName === 'string') {
      name = nodeOrName;
    } else if (isOperatorNode(nodeOrName)) {
      name = nodeOrName.fn.toString();
    } else if (isFunctionNode(nodeOrName)) {
      name = nodeOrName.name;
    } else if (isParenthesisNode(nodeOrName)) {
      name = 'paren';
    }
    if (hasOwnProperty(context, name)) {
      var properties = context[name];
      if (hasOwnProperty(properties, property)) {
        return properties[property];
      }
      if (hasOwnProperty(defaultContext, name)) {
        return defaultContext[name][property];
      }
    }
    if (hasOwnProperty(context, defaultName)) {
      var _properties = context[defaultName];
      if (hasOwnProperty(_properties, property)) {
        return _properties[property];
      }
      return defaultContext[defaultName][property];
    }
    /* name not found in context and context has no global default */
    /* So use default context. */
    if (hasOwnProperty(defaultContext, name)) {
      var _properties2 = defaultContext[name];
      if (hasOwnProperty(_properties2, property)) {
        return _properties2[property];
      }
    }
    return defaultContext[defaultName][property];
  }
  function isCommutative(node) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultContext;
    return hasProperty(node, 'commutative', context);
  }
  function isAssociative(node) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultContext;
    return hasProperty(node, 'associative', context);
  }

  /**
   * Merge the given contexts, with primary overriding secondary
   * wherever they might conflict
   */
  function mergeContext(primary, secondary) {
    var merged = _objectSpread({}, primary);
    for (var prop in secondary) {
      if (hasOwnProperty(primary, prop)) {
        merged[prop] = _objectSpread(_objectSpread({}, secondary[prop]), primary[prop]);
      } else {
        merged[prop] = secondary[prop];
      }
    }
    return merged;
  }

  /**
   * Flatten all associative operators in an expression tree.
   * Assumes parentheses have already been removed.
   */
  function flatten(node, context) {
    if (!node.args || node.args.length === 0) {
      return node;
    }
    node.args = allChildren(node, context);
    for (var i = 0; i < node.args.length; i++) {
      flatten(node.args[i], context);
    }
  }

  /**
   * Get the children of a node as if it has been flattened.
   * TODO implement for FunctionNodes
   */
  function allChildren(node, context) {
    var op;
    var children = [];
    var _findChildren = function findChildren(node) {
      for (var i = 0; i < node.args.length; i++) {
        var child = node.args[i];
        if (isOperatorNode(child) && op === child.op) {
          _findChildren(child);
        } else {
          children.push(child);
        }
      }
    };
    if (isAssociative(node, context)) {
      op = node.op;
      _findChildren(node);
      return children;
    } else {
      return node.args;
    }
  }

  /**
   *  Unflatten all flattened operators to a right-heavy binary tree.
   */
  function unflattenr(node, context) {
    if (!node.args || node.args.length === 0) {
      return;
    }
    var makeNode = createMakeNodeFunction(node);
    var l = node.args.length;
    for (var i = 0; i < l; i++) {
      unflattenr(node.args[i], context);
    }
    if (l > 2 && isAssociative(node, context)) {
      var curnode = node.args.pop();
      while (node.args.length > 0) {
        curnode = makeNode([node.args.pop(), curnode]);
      }
      node.args = curnode.args;
    }
  }

  /**
   *  Unflatten all flattened operators to a left-heavy binary tree.
   */
  function unflattenl(node, context) {
    if (!node.args || node.args.length === 0) {
      return;
    }
    var makeNode = createMakeNodeFunction(node);
    var l = node.args.length;
    for (var i = 0; i < l; i++) {
      unflattenl(node.args[i], context);
    }
    if (l > 2 && isAssociative(node, context)) {
      var curnode = node.args.shift();
      while (node.args.length > 0) {
        curnode = makeNode([curnode, node.args.shift()]);
      }
      node.args = curnode.args;
    }
  }
  function createMakeNodeFunction(node) {
    if (isOperatorNode(node)) {
      return function (args) {
        try {
          return new OperatorNode(node.op, node.fn, args, node.implicit);
        } catch (err) {
          console.error(err);
          return [];
        }
      };
    } else {
      return function (args) {
        return new FunctionNode(new SymbolNode(node.name), args);
      };
    }
  }
  return {
    createMakeNodeFunction,
    hasProperty,
    isCommutative,
    isAssociative,
    mergeContext,
    flatten,
    allChildren,
    unflattenr,
    unflattenl,
    defaultContext,
    realContext,
    positiveContext
  };
});