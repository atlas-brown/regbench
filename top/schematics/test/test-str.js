"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {

  "accept strings": valid(s.str(), ""),

  "reject non-string values": {
    "array"    : invalid(s.str(), []),
    "boolean"  : invalid(s.str(), true),
    "date"     : invalid(s.str(), new Date()),
    "null"     : invalid(s.str(), null),
    "number"   : invalid(s.str(), 1),
    "object"   : invalid(s.str(), {}),
    "undefined": invalid(s.str(), undefined)
  },

  "don't retain state": stateRetention(s.str(), null, ""),

  "nonEmpty rule": {
    "non-empty": valid(s.str().nonEmpty(), "test"),
    "empty": invalid(s.str().nonEmpty(), ""),
    "don't retain state": stateRetention(s.str().nonEmpty(), "", "test")
  },

  "pattern rule": {
    "valid": valid(s.str().pattern(/^[0-9]{3}$/), "123"),
    "invalid": invalid(s.str().pattern(/^[0-9]{3}$/), "abc")
  },

  "enum rule": {
    "valid": valid(s.str().enum(["foo", "bar"]), "foo"),
    "invalid": invalid(s.str().enum(["foo", "bar"]), "abc")
  }
};
