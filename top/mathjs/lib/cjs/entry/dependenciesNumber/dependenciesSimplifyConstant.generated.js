"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyConstantDependencies = void 0;
var _dependenciesAccessorNodeGenerated = require("./dependenciesAccessorNode.generated.js");
var _dependenciesArrayNodeGenerated = require("./dependenciesArrayNode.generated.js");
var _dependenciesConstantNodeGenerated = require("./dependenciesConstantNode.generated.js");
var _dependenciesFunctionNodeGenerated = require("./dependenciesFunctionNode.generated.js");
var _dependenciesIndexNodeGenerated = require("./dependenciesIndexNode.generated.js");
var _dependenciesObjectNodeGenerated = require("./dependenciesObjectNode.generated.js");
var _dependenciesOperatorNodeGenerated = require("./dependenciesOperatorNode.generated.js");
var _dependenciesSymbolNodeGenerated = require("./dependenciesSymbolNode.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const simplifyConstantDependencies = exports.simplifyConstantDependencies = {
  AccessorNodeDependencies: _dependenciesAccessorNodeGenerated.AccessorNodeDependencies,
  ArrayNodeDependencies: _dependenciesArrayNodeGenerated.ArrayNodeDependencies,
  ConstantNodeDependencies: _dependenciesConstantNodeGenerated.ConstantNodeDependencies,
  FunctionNodeDependencies: _dependenciesFunctionNodeGenerated.FunctionNodeDependencies,
  IndexNodeDependencies: _dependenciesIndexNodeGenerated.IndexNodeDependencies,
  ObjectNodeDependencies: _dependenciesObjectNodeGenerated.ObjectNodeDependencies,
  OperatorNodeDependencies: _dependenciesOperatorNodeGenerated.OperatorNodeDependencies,
  SymbolNodeDependencies: _dependenciesSymbolNodeGenerated.SymbolNodeDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSimplifyConstant: _factoriesNumber.createSimplifyConstant
};