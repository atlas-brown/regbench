"use strict";

var _ = require("lodash");

var checkTreeConsistency = function (test, node) {
  /*jshint maxcomplexity: 4*/
  if (!node.valid) {
    test.ok(false, "`valid: false` did not propagate correctly");
  }
  _.each(node.why || node.whys || [], function (value) {
    checkTreeConsistency(test, value);
  });
};

exports.valid = function (schema, value) {
  return function (test) {
    schema.run(value)
      .then(function (result) {
        test.ok(result.valid);
        checkTreeConsistency(test, result);
        test.done();
      });
  };
};

exports.invalid = function (schema, value) {
  return function (test) {
    schema.run(value)
      .then(function (result) {
        test.equal(result.valid, false);
        test.done();
      });
  };
};

exports.stateRetention = function (schema, badValue, goodValue) {
  var lastResult = null;
  return function (test) {
    schema.run(badValue)
      .then(function (result) {
        lastResult = result;
        test.equal(result.valid, false);
        return schema.run(goodValue);
      })
      .then(function (result) {
        test.ok(result.valid);
        checkTreeConsistency(test, result, true);
        return schema.run(badValue);
      })
      .then(function (result) {
        test.equal(result.valid, false);
        test.done();
      });
  };
};
