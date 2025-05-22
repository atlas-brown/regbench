"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var invalid = common.invalid;
var stateRetention = common.stateRetention;

module.exports = {

  "accept object values": valid(s.obj(), {}),

  "reject non-object values": {
    "boolean"  : invalid(s.obj(), false),
    "null"     : invalid(s.obj(), null),
    "number"   : invalid(s.obj(), 1),
    "string"   : invalid(s.obj(), ""),
    "undefined": invalid(s.obj(), undefined)
  },

  "don't retain state": stateRetention(s.obj(), null, {}),

  "prop rule": {

    "single property":
      valid(s.obj({ x: s.num() }), { x: 1 }),

    "multiple properties":
      valid(s.obj({ x: s.num(), y: s.num(), z: s.num() }),
        { x: 1, y: 2, z: 3 }),

    "missing property":
      invalid(s.obj({ x: s.num() }), {}),

    "any invalid":
      invalid(s.obj({ x: s.num() }), { x: true }),

    "don't retain state":
      stateRetention(s.obj({ x: s.num() }), {}, { x: 1 })
  }
};
