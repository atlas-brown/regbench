"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {

  "accept the first validator passing": valid(s.or(s.str(), s.bool()), ""),
  "accept the second validator passing": valid(s.or(s.str(), s.bool()), true),

  "reject both validators failing": invalid(s.or(s.str(), s.bool()), 5),

  "don't retain state": stateRetention(s.or(s.str(), s.bool()), null, "")

};
