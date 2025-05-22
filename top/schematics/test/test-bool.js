"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {
  /*jshint -W053 */

  "accept boolean values": valid(s.bool(), true),

  "accept Boolean instance values": valid(s.bool(), new Boolean()),

  "reject non-boolean values": {
    "array"    : invalid(s.bool(), []),
    "date"     : invalid(s.bool(), new Date()),
    "null"     : invalid(s.bool(), null),
    "number"   : invalid(s.bool(), 1),
    "object"   : invalid(s.bool(), {}),
    "string"   : invalid(s.bool(), ""),
    "undefined": invalid(s.bool(), undefined)
  },

  "don't retain state": stateRetention(s.bool(), null, true)
};
