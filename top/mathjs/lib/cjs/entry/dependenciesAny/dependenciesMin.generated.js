"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minDependencies = void 0;
var _dependenciesIsNaNGenerated = require("./dependenciesIsNaN.generated.js");
var _dependenciesNumericGenerated = require("./dependenciesNumeric.generated.js");
var _dependenciesSmallerGenerated = require("./dependenciesSmaller.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const minDependencies = exports.minDependencies = {
  isNaNDependencies: _dependenciesIsNaNGenerated.isNaNDependencies,
  numericDependencies: _dependenciesNumericGenerated.numericDependencies,
  smallerDependencies: _dependenciesSmallerGenerated.smallerDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createMin: _factoriesAny.createMin
};