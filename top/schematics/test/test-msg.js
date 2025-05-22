"use strict";

var s = require("../index");
var common = require("./common");
var valid = common.valid;
var stateRetention = common.stateRetention;

module.exports = {

  "ignore valid": valid(s.msg("An error occurred", s.str()), ""),

  "overwrite existing error message": function (test) {
    var msg = "test message " + Date.now();
    s.msg(msg, s.nil()).run(false)
      .then(function (result) {
        test.equal(result.valid, false);
        test.equal(result.msg, msg);
        test.done();
      });
  },

  "don't retain state": stateRetention(s.msg("foo", s.str()), null, "")

};
