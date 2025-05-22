"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {

  "accept null": valid(s.nil(), null),
  "accept undefined": valid(s.nil(), undefined),

  "reject non-null/undefined values": {
    "array"    : invalid(s.nil(), []),
    "boolean"  : invalid(s.nil(), true),
    "date"     : invalid(s.nil(), new Date()),
    "number"   : invalid(s.nil(), 1),
    "object"   : invalid(s.nil(), {}),
    "string"   : invalid(s.nil(), "abc"),
  },

  "don't retain state": stateRetention(s.nil(), 1, null)

};
