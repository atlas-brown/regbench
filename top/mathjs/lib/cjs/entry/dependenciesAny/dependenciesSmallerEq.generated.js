"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smallerEqDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesSparseMatrixClassGenerated = require("./dependenciesSparseMatrixClass.generated.js");
var _dependenciesConcatGenerated = require("./dependenciesConcat.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const smallerEqDependencies = exports.smallerEqDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  SparseMatrixDependencies: _dependenciesSparseMatrixClassGenerated.SparseMatrixDependencies,
  concatDependencies: _dependenciesConcatGenerated.concatDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSmallerEq: _factoriesAny.createSmallerEq
};