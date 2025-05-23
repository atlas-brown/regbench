"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDifferenceDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesIndexClassGenerated = require("./dependenciesIndexClass.generated.js");
var _dependenciesCompareNaturalGenerated = require("./dependenciesCompareNatural.generated.js");
var _dependenciesSizeGenerated = require("./dependenciesSize.generated.js");
var _dependenciesSubsetGenerated = require("./dependenciesSubset.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const setDifferenceDependencies = exports.setDifferenceDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  IndexDependencies: _dependenciesIndexClassGenerated.IndexDependencies,
  compareNaturalDependencies: _dependenciesCompareNaturalGenerated.compareNaturalDependencies,
  sizeDependencies: _dependenciesSizeGenerated.sizeDependencies,
  subsetDependencies: _dependenciesSubsetGenerated.subsetDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSetDifference: _factoriesAny.createSetDifference
};