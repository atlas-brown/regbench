"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {

  "accept array values": valid(s.arr(), []),

  "reject non-array values": {
    "boolean"  : invalid(s.arr(), false),
    "date"     : invalid(s.arr(), new Date()),
    "null"     : invalid(s.arr(), null),
    "number"   : invalid(s.arr(), 1),
    "object"   : invalid(s.arr(), {}),
    "string"   : invalid(s.arr(), ""),
    "undefined": invalid(s.arr(), undefined)
  },

  "don't retain state": stateRetention(s.arr(), null, []),

  "nonEmpty rule": {
    "non-empty": valid(s.arr().nonEmpty(), [true]),
    "empty": invalid(s.arr().nonEmpty(), []),
    "don't retain state": stateRetention(s.arr().nonEmpty(), [], [true]),
  },

  "each rule": {
    "empty": valid(s.arr(s.bool()), []),
    "all valid": valid(s.arr(s.bool()), [true, false, true]),
    "any invalid": invalid(s.arr(s.bool()), [true, "test"]),
    "don't retain state": {
      "with an empty array":
        stateRetention(s.arr(s.str()), [true], []),
      "or otherwise":
        stateRetention(s.arr(s.str()), [true], ["test"]),
    }
  }
};
