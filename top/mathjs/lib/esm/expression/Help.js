import { isHelp } from '../utils/is.js';
import { clone } from '../utils/object.js';
import { format } from '../utils/string.js';
import { factory } from '../utils/factory.js';
var name = 'Help';
var dependencies = ['evaluate'];
export var createHelpClass = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    evaluate
  } = _ref;
  /**
   * Documentation object
   * @param {Object} doc  Object containing properties:
   *                      {string} name
   *                      {string} category
   *                      {string} description
   *                      {string[]} syntax
   *                      {string[]} examples
   *                      {string[]} seealso
   * @constructor
   */
  function Help(doc) {
    if (!(this instanceof Help)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    if (!doc) throw new Error('Argument "doc" missing');
    this.doc = doc;
  }

  /**
   * Attach type information
   */
  Help.prototype.type = 'Help';
  Help.prototype.isHelp = true;

  /**
   * Generate a string representation of the Help object
   * @return {string} Returns a string
   * @private
   */
  Help.prototype.toString = function () {
    var doc = this.doc || {};
    var desc = '\n';
    if (doc.name) {
      desc += 'Name: ' + doc.name + '\n\n';
    }
    if (doc.category) {
      desc += 'Category: ' + doc.category + '\n\n';
    }
    if (doc.description) {
      desc += 'Description:\n    ' + doc.description + '\n\n';
    }
    if (doc.syntax) {
      desc += 'Syntax:\n    ' + doc.syntax.join('\n    ') + '\n\n';
    }
    if (doc.examples) {
      desc += 'Examples:\n';

      // after evaluating the examples, we restore config in case the examples
      // did change the config.
      var configChanged = false;
      var originalConfig = evaluate('config()');
      var scope = {
        config: newConfig => {
          configChanged = true;
          return evaluate('config(newConfig)', {
            newConfig
          });
        }
      };
      for (var i = 0; i < doc.examples.length; i++) {
        var expr = doc.examples[i];
        desc += '    ' + expr + '\n';
        var res = void 0;
        try {
          // note: res can be undefined when `expr` is an empty string
          res = evaluate(expr, scope);
        } catch (e) {
          res = e;
        }
        if (res !== undefined && !isHelp(res)) {
          desc += '        ' + format(res, {
            precision: 14
          }) + '\n';
        }
      }
      desc += '\n';
      if (configChanged) {
        evaluate('config(originalConfig)', {
          originalConfig
        });
      }
    }
    if (doc.mayThrow && doc.mayThrow.length) {
      desc += 'Throws: ' + doc.mayThrow.join(', ') + '\n\n';
    }
    if (doc.seealso && doc.seealso.length) {
      desc += 'See also: ' + doc.seealso.join(', ') + '\n';
    }
    return desc;
  };

  /**
   * Export the help object to JSON
   */
  Help.prototype.toJSON = function () {
    var obj = clone(this.doc);
    obj.mathjs = 'Help';
    return obj;
  };

  /**
   * Instantiate a Help object from a JSON object
   * @param {Object} json
   * @returns {Help} Returns a new Help object
   */
  Help.fromJSON = function (json) {
    var doc = {};
    Object.keys(json).filter(prop => prop !== 'mathjs').forEach(prop => {
      doc[prop] = json[prop];
    });
    return new Help(doc);
  };

  /**
   * Returns a string representation of the Help object
   */
  Help.prototype.valueOf = Help.prototype.toString;
  return Help;
}, {
  isClass: true
});