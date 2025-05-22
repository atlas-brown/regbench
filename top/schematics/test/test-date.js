"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {

  "accept Date values": valid(s.date(), new Date()),

  "reject non-Date values": {
    "array"    : invalid(s.date(), []),
    "boolean"  : invalid(s.date(), true),
    "null"     : invalid(s.date(), null),
    "number"   : invalid(s.date(), 1),
    "object"   : invalid(s.date(), {}),
    "string"   : invalid(s.date(), ""),
    "undefined": invalid(s.date(), undefined)
  },

  "don't retain state": stateRetention(s.date(), null, new Date()),

  "valid rule": {
    "valid": valid(s.date().valid(), new Date()),
    "invalid": invalid(s.date().valid(), new Date(NaN)),
    "don't retain state": stateRetention(s.date().valid(), new Date(NaN), new Date()),
  }
};
