"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareDependencies = void 0;
var _dependenciesBigNumberClassGenerated = require("./dependenciesBigNumberClass.generated.js");
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesFractionClassGenerated = require("./dependenciesFractionClass.generated.js");
var _dependenciesConcatGenerated = require("./dependenciesConcat.generated.js");
var _dependenciesEqualScalarGenerated = require("./dependenciesEqualScalar.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const compareDependencies = exports.compareDependencies = {
  BigNumberDependencies: _dependenciesBigNumberClassGenerated.BigNumberDependencies,
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  FractionDependencies: _dependenciesFractionClassGenerated.FractionDependencies,
  concatDependencies: _dependenciesConcatGenerated.concatDependencies,
  equalScalarDependencies: _dependenciesEqualScalarGenerated.equalScalarDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createCompare: _factoriesAny.createCompare
};