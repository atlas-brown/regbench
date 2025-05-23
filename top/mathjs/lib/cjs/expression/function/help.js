"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHelp = void 0;
var _factory = require("../../utils/factory.js");
var _customs = require("../../utils/customs.js");
var _embeddedDocs = require("../embeddedDocs/embeddedDocs.js");
var _object = require("../../utils/object.js");
const name = 'help';
const dependencies = ['typed', 'mathWithTransform', 'Help'];
const createHelp = exports.createHelp = /* #__PURE__ */(0, _factory.factory)(name, dependencies, _ref => {
  let {
    typed,
    mathWithTransform,
    Help
  } = _ref;
  /**
   * Retrieve help on a function or data type.
   * Help files are retrieved from the embedded documentation in math.docs.
   *
   * Syntax:
   *
   *    math.help(search)
   *
   * Examples:
   *
   *    console.log(math.help('sin').toString())
   *    console.log(math.help(math.add).toString())
   *    console.log(math.help(math.add).toJSON())
   *
   * @param {Function | string | Object} search   A function or function name
   *                                              for which to get help
   * @return {Help} A help object
   */
  return typed(name, {
    any: function (search) {
      let prop;
      let searchName = search;
      if (typeof search !== 'string') {
        for (prop in mathWithTransform) {
          // search in functions and constants
          if ((0, _object.hasOwnProperty)(mathWithTransform, prop) && search === mathWithTransform[prop]) {
            searchName = prop;
            break;
          }
        }

        /* TODO: implement help for data types
         if (!text) {
         // search data type
         for (prop in math.type) {
         if (hasOwnProperty(math, prop)) {
         if (search === math.type[prop]) {
         text = prop
         break
         }
         }
         }
         }
         */
      }
      const doc = (0, _customs.getSafeProperty)(_embeddedDocs.embeddedDocs, searchName);
      if (!doc) {
        const searchText = typeof searchName === 'function' ? searchName.name : searchName;
        throw new Error('No documentation found on "' + searchText + '"');
      }
      return new Help(doc);
    }
  });
});