"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParenthesisNode = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
const name = 'ParenthesisNode';
const dependencies = ['Node'];
const createParenthesisNode = exports.createParenthesisNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    Node
  } = _ref;
  class ParenthesisNode extends Node {
    /**
     * @constructor ParenthesisNode
     * @extends {Node}
     * A parenthesis node describes manual parenthesis from the user input
     * @param {Node} content
     * @extends {Node}
     */
    constructor(content) {
      super();
      // validate input
      if (!(0, _is.isNode)(content)) {
        throw new TypeError('Node expected for parameter "content"');
      }
      this.content = content;
    }
    get type() {
      return name;
    }
    get isParenthesisNode() {
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
      return this.content._compile(math, argNames);
    }

    /**
     * Get the content of the current Node.
     * @return {Node} content
     * @override
     **/
    getContent() {
      return this.content.getContent();
    }

    /**
     * Execute a callback for each of the child nodes of this node
     * @param {function(child: Node, path: string, parent: Node)} callback
     */
    forEach(callback) {
      callback(this.content, 'content', this);
    }

    /**
     * Create a new ParenthesisNode whose child is the result of calling
     * the provided callback function on the child of this node.
     * @param {function(child: Node, path: string, parent: Node) : Node} callback
     * @returns {ParenthesisNode} Returns a clone of the node
     */
    map(callback) {
      const content = callback(this.content, 'content', this);
      return new ParenthesisNode(content);
    }

    /**
     * Create a clone of this node, a shallow copy
     * @return {ParenthesisNode}
     */
    clone() {
      return new ParenthesisNode(this.content);
    }

    /**
     * Get string representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toString(options) {
      if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
        return '(' + this.content.toString(options) + ')';
      }
      return this.content.toString(options);
    }

    /**
     * Get a JSON representation of the node
     * @returns {Object}
     */
    toJSON() {
      return {
        mathjs: name,
        content: this.content
      };
    }

    /**
     * Instantiate an ParenthesisNode from its JSON representation
     * @param {Object} json  An object structured like
     *                       `{"mathjs": "ParenthesisNode", "content": ...}`,
     *                       where mathjs is optional
     * @returns {ParenthesisNode}
     */
    static fromJSON(json) {
      return new ParenthesisNode(json.content);
    }

    /**
     * Get HTML representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toHTML(options) {
      if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
        return '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return this.content.toHTML(options);
    }

    /**
     * Get LaTeX representation
     * @param {Object} options
     * @return {string} str
     * @override
     */
    _toTex(options) {
      if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
        return `\\left(${this.content.toTex(options)}\\right)`;
      }
      return this.content.toTex(options);
    }
  }
  (0, _defineProperty2.default)(ParenthesisNode, "name", name);
  return ParenthesisNode;
}, {
  isClass: true,
  isNode: true
});