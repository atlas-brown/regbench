"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccessorNode = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _access = require("./utils/access.js");
const name = 'AccessorNode';
const dependencies = ['subset', 'Node'];
const createAccessorNode = exports.createAccessorNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    subset,
    Node
  } = _ref;
  const access = (0, _access.accessFactory)({
    subset
  });

  /**
   * Are parenthesis needed?
   * @private
   */
  function needParenthesis(node) {
    // TODO: maybe make a method on the nodes which tells whether they need parenthesis?
    return !((0, _is.isAccessorNode)(node) || (0, _is.isArrayNode)(node) || (0, _is.isConstantNode)(node) || (0, _is.isFunctionNode)(node) || (0, _is.isObjectNode)(node) || (0, _is.isParenthesisNode)(node) || (0, _is.isSymbolNode)(node));
  }
  class AccessorNode extends Node {
    /**
     * @constructor AccessorNode
     * @extends {Node}
     * Access an object property or get a matrix subset
     *
     * @param {Node} object                 The object from which to retrieve
     *                                      a property or subset.
     * @param {IndexNode} index             IndexNode containing ranges
     */
    constructor(object, index) {
      super();
      if (!(0, _is.isNode)(object)) {
        throw new TypeError('Node expected for parameter "object"');
      }
      if (!(0, _is.isIndexNode)(index)) {
        throw new TypeError('IndexNode expected for parameter "index"');
      }
      this.object = object;
      this.index = index;
    }

    // readonly property name
    get name() {
      if (this.index) {
        return this.index.isObjectProperty() ? this.index.getObjectProperty() : '';
      } else {
        return this.object.name || '';
      }
    }
    get type() {
      return name;
    }
    get isAccessorNode() {
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
      const evalObject = this.object._compile(math, argNames);
      const evalIndex = this.index._compile(math, argNames);
      if (this.index.isObjectProperty()) {
        const prop = this.index.getObjectProperty();
        return function evalAccessorNode(scope, args, context) {
          // get a property from an object evaluated using the scope.
          return (0, _customs.getSafeProperty)(evalObject(scope, args, context), prop);
        };
      } else {
        return function evalAccessorNode(scope, args, context) {
          const object = evalObject(scope, args, context);
          // we pass just object here instead of context:
          const index = evalIndex(scope, args, object);
          return access(object, index);
        };
      }
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      callback(this.object, 'object', this);
      callback(this.index, 'index', this);
    }

    /**
     * Create a new AccessorNode whose children are the results of calling
     * the provided callback function for each child of the original node.
     * @param {function(child: Node, path: string, parent: Node): Node} callback
     * @returns {AccessorNode} Returns a transformed copy of the node
     */
    map(callback) {
      return new AccessorNode(this._ifNode(callback(this.object, 'object', this)), this._ifNode(callback(this.index, 'index', this)));
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {AccessorNode}
     */
    clone() {
      return new AccessorNode(this.object, this.index);
    }

    /**
     * Get string representation
     * @param {Object} options
     * @return {string}
     */
    _toString(options) {
      let object = this.object.toString(options);
      if (needParenthesis(this.object)) {
        object = '(' + object + ')';
      }
      return object + this.index.toString(options);
    }

    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string}
     */
    _toHTML(options) {
      let object = this.object.toHTML(options);
      if (needParenthesis(this.object)) {
        object = '<span class="math-parenthesis math-round-parenthesis">(</span>' + object + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return object + this.index.toHTML(options);
    }

    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string}
     */
    _toTex(options) {
      let object = this.object.toTex(options);
      if (needParenthesis(this.object)) {
        object = '\\left(\' + object + \'\\right)';
      }
      return object + this.index.toTex(options);
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: name,
        object: this.object,
        index: this.index
      };
    }

    /**
     * Instantiate an AccessorNode from its JSON representation
     * @param {Object} json
     *     An object structured like
     *     `{"mathjs": "AccessorNode", object: ..., index: ...}`,
     *     where mathjs is optional
     * @returns {AccessorNode}
     */
    static fromJSON(json) {
      return new AccessorNode(json.object, json.index);
    }
  }
  (0, _defineProperty2.default)(AccessorNode, "name", name);
  return AccessorNode;
}, {
  isClass: true,
  isNode: true
});