"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
_Object$defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _xregexp = _interopRequireDefault(require("./xregexp"));
var _build = _interopRequireDefault(require("./addons/build"));
var _matchrecursive = _interopRequireDefault(require("./addons/matchrecursive"));
var _unicodeBase = _interopRequireDefault(require("./addons/unicode-base"));
var _unicodeCategories = _interopRequireDefault(require("./addons/unicode-categories"));
var _unicodeProperties = _interopRequireDefault(require("./addons/unicode-properties"));
var _unicodeScripts = _interopRequireDefault(require("./addons/unicode-scripts"));
(0, _build["default"])(_xregexp["default"]);
(0, _matchrecursive["default"])(_xregexp["default"]);
(0, _unicodeBase["default"])(_xregexp["default"]);
(0, _unicodeCategories["default"])(_xregexp["default"]);
(0, _unicodeProperties["default"])(_xregexp["default"]);
(0, _unicodeScripts["default"])(_xregexp["default"]);
var _default = exports["default"] = _xregexp["default"];
module.exports = exports.default;