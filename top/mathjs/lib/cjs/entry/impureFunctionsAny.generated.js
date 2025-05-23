"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derivative = exports.compile = exports.chain = exports.SymbolNode = exports.RelationalNode = exports.RangeNode = exports.Parser = exports.ParenthesisNode = exports.OperatorNode = exports.ObjectNode = exports.Node = exports.IndexNode = exports.Help = exports.FunctionNode = exports.FunctionAssignmentNode = exports.ConstantNode = exports.ConditionalNode = exports.Chain = exports.BlockNode = exports.AssignmentNode = exports.ArrayNode = exports.AccessorNode = void 0;
Object.defineProperty(exports, "docs", {
  enumerable: true,
  get: function () {
    return _embeddedDocs.embeddedDocs;
  }
});
exports.symbolicEqual = exports.simplifyCore = exports.simplifyConstant = exports.simplify = exports.reviver = exports.resolve = exports.rationalize = exports.parser = exports.parse = exports.leafCount = exports.help = exports.evaluate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _configReadonly = require("./configReadonly.js");
var _factoriesAny = require("../factoriesAny.js");
var _pureFunctionsAnyGenerated = require("./pureFunctionsAny.generated.js");
var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

const math = {}; // NOT pure!
const mathWithTransform = {}; // NOT pure!
const classes = {}; // NOT pure!

const Node = exports.Node = (0, _factoriesAny.createNode)({
  mathWithTransform
});
const ObjectNode = exports.ObjectNode = (0, _factoriesAny.createObjectNode)({
  Node
});
const OperatorNode = exports.OperatorNode = (0, _factoriesAny.createOperatorNode)({
  Node
});
const ParenthesisNode = exports.ParenthesisNode = (0, _factoriesAny.createParenthesisNode)({
  Node
});
const RelationalNode = exports.RelationalNode = (0, _factoriesAny.createRelationalNode)({
  Node
});
const ArrayNode = exports.ArrayNode = (0, _factoriesAny.createArrayNode)({
  Node
});
const BlockNode = exports.BlockNode = (0, _factoriesAny.createBlockNode)({
  Node,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet
});
const ConditionalNode = exports.ConditionalNode = (0, _factoriesAny.createConditionalNode)({
  Node
});
const ConstantNode = exports.ConstantNode = (0, _factoriesAny.createConstantNode)({
  Node
});
const RangeNode = exports.RangeNode = (0, _factoriesAny.createRangeNode)({
  Node
});
const reviver = exports.reviver = (0, _factoriesAny.createReviver)({
  classes
});
const Chain = exports.Chain = (0, _factoriesAny.createChainClass)({
  math,
  typed: _pureFunctionsAnyGenerated.typed
});
const FunctionAssignmentNode = exports.FunctionAssignmentNode = (0, _factoriesAny.createFunctionAssignmentNode)({
  Node,
  typed: _pureFunctionsAnyGenerated.typed
});
const chain = exports.chain = (0, _factoriesAny.createChain)({
  Chain,
  typed: _pureFunctionsAnyGenerated.typed
});
const AccessorNode = exports.AccessorNode = (0, _factoriesAny.createAccessorNode)({
  Node,
  subset: _pureFunctionsAnyGenerated.subset
});
const AssignmentNode = exports.AssignmentNode = (0, _factoriesAny.createAssignmentNode)({
  matrix: _pureFunctionsAnyGenerated.matrix,
  Node,
  subset: _pureFunctionsAnyGenerated.subset
});
const IndexNode = exports.IndexNode = (0, _factoriesAny.createIndexNode)({
  Node,
  size: _pureFunctionsAnyGenerated.size
});
const SymbolNode = exports.SymbolNode = (0, _factoriesAny.createSymbolNode)({
  Unit: _pureFunctionsAnyGenerated.Unit,
  Node,
  math
});
const FunctionNode = exports.FunctionNode = (0, _factoriesAny.createFunctionNode)({
  Node,
  SymbolNode,
  math
});
const parse = exports.parse = (0, _factoriesAny.createParse)({
  AccessorNode,
  ArrayNode,
  AssignmentNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  FunctionAssignmentNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  RangeNode,
  RelationalNode,
  SymbolNode,
  config: _configReadonly.config,
  numeric: _pureFunctionsAnyGenerated.numeric,
  typed: _pureFunctionsAnyGenerated.typed
});
const resolve = exports.resolve = (0, _factoriesAny.createResolve)({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const simplifyConstant = exports.simplifyConstant = (0, _factoriesAny.createSimplifyConstant)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config: _configReadonly.config,
  mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  typed: _pureFunctionsAnyGenerated.typed
});
const compile = exports.compile = (0, _factoriesAny.createCompile)({
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const simplifyCore = exports.simplifyCore = (0, _factoriesAny.createSimplifyCore)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse,
  pow: _pureFunctionsAnyGenerated.pow,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
const evaluate = exports.evaluate = (0, _factoriesAny.createEvaluate)({
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const Help = exports.Help = (0, _factoriesAny.createHelpClass)({
  evaluate
});
const Parser = exports.Parser = (0, _factoriesAny.createParserClass)({
  evaluate,
  parse
});
const simplify = exports.simplify = (0, _factoriesAny.createSimplify)({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  equal: _pureFunctionsAnyGenerated.equal,
  parse,
  replacer: _pureFunctionsAnyGenerated.replacer,
  resolve,
  simplifyConstant,
  simplifyCore,
  typed: _pureFunctionsAnyGenerated.typed
});
const symbolicEqual = exports.symbolicEqual = (0, _factoriesAny.createSymbolicEqual)({
  OperatorNode,
  parse,
  simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
const leafCount = exports.leafCount = (0, _factoriesAny.createLeafCount)({
  parse,
  typed: _pureFunctionsAnyGenerated.typed
});
const parser = exports.parser = (0, _factoriesAny.createParser)({
  Parser,
  typed: _pureFunctionsAnyGenerated.typed
});
const rationalize = exports.rationalize = (0, _factoriesAny.createRationalize)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse,
  pow: _pureFunctionsAnyGenerated.pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
const derivative = exports.derivative = (0, _factoriesAny.createDerivative)({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  numeric: _pureFunctionsAnyGenerated.numeric,
  parse,
  simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
const help = exports.help = (0, _factoriesAny.createHelp)({
  Help,
  mathWithTransform,
  typed: _pureFunctionsAnyGenerated.typed
});
(0, _extends2.default)(math, {
  e: _pureFunctionsAnyGenerated.e,
  false: _pureFunctionsAnyGenerated._false,
  fineStructure: _pureFunctionsAnyGenerated.fineStructure,
  i: _pureFunctionsAnyGenerated.i,
  Infinity: _pureFunctionsAnyGenerated._Infinity,
  LN10: _pureFunctionsAnyGenerated.LN10,
  LOG10E: _pureFunctionsAnyGenerated.LOG10E,
  NaN: _pureFunctionsAnyGenerated._NaN,
  null: _pureFunctionsAnyGenerated._null,
  phi: _pureFunctionsAnyGenerated.phi,
  SQRT1_2: _pureFunctionsAnyGenerated.SQRT1_2,
  sackurTetrode: _pureFunctionsAnyGenerated.sackurTetrode,
  tau: _pureFunctionsAnyGenerated.tau,
  true: _pureFunctionsAnyGenerated._true,
  'E': _pureFunctionsAnyGenerated.e,
  version: _pureFunctionsAnyGenerated.version,
  efimovFactor: _pureFunctionsAnyGenerated.efimovFactor,
  LN2: _pureFunctionsAnyGenerated.LN2,
  pi: _pureFunctionsAnyGenerated.pi,
  replacer: _pureFunctionsAnyGenerated.replacer,
  reviver,
  SQRT2: _pureFunctionsAnyGenerated.SQRT2,
  typed: _pureFunctionsAnyGenerated.typed,
  'PI': _pureFunctionsAnyGenerated.pi,
  weakMixingAngle: _pureFunctionsAnyGenerated.weakMixingAngle,
  abs: _pureFunctionsAnyGenerated.abs,
  acos: _pureFunctionsAnyGenerated.acos,
  acot: _pureFunctionsAnyGenerated.acot,
  acsc: _pureFunctionsAnyGenerated.acsc,
  addScalar: _pureFunctionsAnyGenerated.addScalar,
  arg: _pureFunctionsAnyGenerated.arg,
  asech: _pureFunctionsAnyGenerated.asech,
  asinh: _pureFunctionsAnyGenerated.asinh,
  atan: _pureFunctionsAnyGenerated.atan,
  atanh: _pureFunctionsAnyGenerated.atanh,
  bigint: _pureFunctionsAnyGenerated.bigint,
  bitNot: _pureFunctionsAnyGenerated.bitNot,
  boolean: _pureFunctionsAnyGenerated.boolean,
  clone: _pureFunctionsAnyGenerated.clone,
  combinations: _pureFunctionsAnyGenerated.combinations,
  complex: _pureFunctionsAnyGenerated.complex,
  conj: _pureFunctionsAnyGenerated.conj,
  cos: _pureFunctionsAnyGenerated.cos,
  cot: _pureFunctionsAnyGenerated.cot,
  csc: _pureFunctionsAnyGenerated.csc,
  cube: _pureFunctionsAnyGenerated.cube,
  equalScalar: _pureFunctionsAnyGenerated.equalScalar,
  erf: _pureFunctionsAnyGenerated.erf,
  exp: _pureFunctionsAnyGenerated.exp,
  expm1: _pureFunctionsAnyGenerated.expm1,
  filter: _pureFunctionsAnyGenerated.filter,
  flatten: _pureFunctionsAnyGenerated.flatten,
  forEach: _pureFunctionsAnyGenerated.forEach,
  format: _pureFunctionsAnyGenerated.format,
  getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType,
  hex: _pureFunctionsAnyGenerated.hex,
  im: _pureFunctionsAnyGenerated.im,
  isInteger: _pureFunctionsAnyGenerated.isInteger,
  isNegative: _pureFunctionsAnyGenerated.isNegative,
  isPositive: _pureFunctionsAnyGenerated.isPositive,
  isZero: _pureFunctionsAnyGenerated.isZero,
  LOG2E: _pureFunctionsAnyGenerated.LOG2E,
  lgamma: _pureFunctionsAnyGenerated.lgamma,
  log10: _pureFunctionsAnyGenerated.log10,
  log2: _pureFunctionsAnyGenerated.log2,
  map: _pureFunctionsAnyGenerated.map,
  multiplyScalar: _pureFunctionsAnyGenerated.multiplyScalar,
  not: _pureFunctionsAnyGenerated.not,
  number: _pureFunctionsAnyGenerated.number,
  oct: _pureFunctionsAnyGenerated.oct,
  pickRandom: _pureFunctionsAnyGenerated.pickRandom,
  print: _pureFunctionsAnyGenerated.print,
  random: _pureFunctionsAnyGenerated.random,
  re: _pureFunctionsAnyGenerated.re,
  sec: _pureFunctionsAnyGenerated.sec,
  sign: _pureFunctionsAnyGenerated.sign,
  sin: _pureFunctionsAnyGenerated.sin,
  splitUnit: _pureFunctionsAnyGenerated.splitUnit,
  square: _pureFunctionsAnyGenerated.square,
  string: _pureFunctionsAnyGenerated.string,
  subtractScalar: _pureFunctionsAnyGenerated.subtractScalar,
  tan: _pureFunctionsAnyGenerated.tan,
  typeOf: _pureFunctionsAnyGenerated.typeOf,
  acosh: _pureFunctionsAnyGenerated.acosh,
  acsch: _pureFunctionsAnyGenerated.acsch,
  asec: _pureFunctionsAnyGenerated.asec,
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  chain,
  combinationsWithRep: _pureFunctionsAnyGenerated.combinationsWithRep,
  cosh: _pureFunctionsAnyGenerated.cosh,
  csch: _pureFunctionsAnyGenerated.csch,
  isNaN: _pureFunctionsAnyGenerated.isNaN,
  isPrime: _pureFunctionsAnyGenerated.isPrime,
  mapSlices: _pureFunctionsAnyGenerated.mapSlices,
  matrix: _pureFunctionsAnyGenerated.matrix,
  matrixFromFunction: _pureFunctionsAnyGenerated.matrixFromFunction,
  ones: _pureFunctionsAnyGenerated.ones,
  randomInt: _pureFunctionsAnyGenerated.randomInt,
  reshape: _pureFunctionsAnyGenerated.reshape,
  sech: _pureFunctionsAnyGenerated.sech,
  sinh: _pureFunctionsAnyGenerated.sinh,
  sparse: _pureFunctionsAnyGenerated.sparse,
  sqrt: _pureFunctionsAnyGenerated.sqrt,
  squeeze: _pureFunctionsAnyGenerated.squeeze,
  tanh: _pureFunctionsAnyGenerated.tanh,
  transpose: _pureFunctionsAnyGenerated.transpose,
  xgcd: _pureFunctionsAnyGenerated.xgcd,
  zeros: _pureFunctionsAnyGenerated.zeros,
  acoth: _pureFunctionsAnyGenerated.acoth,
  asin: _pureFunctionsAnyGenerated.asin,
  bin: _pureFunctionsAnyGenerated.bin,
  concat: _pureFunctionsAnyGenerated.concat,
  coth: _pureFunctionsAnyGenerated.coth,
  ctranspose: _pureFunctionsAnyGenerated.ctranspose,
  diag: _pureFunctionsAnyGenerated.diag,
  dotMultiply: _pureFunctionsAnyGenerated.dotMultiply,
  equal: _pureFunctionsAnyGenerated.equal,
  fraction: _pureFunctionsAnyGenerated.fraction,
  identity: _pureFunctionsAnyGenerated.identity,
  isNumeric: _pureFunctionsAnyGenerated.isNumeric,
  kron: _pureFunctionsAnyGenerated.kron,
  largerEq: _pureFunctionsAnyGenerated.largerEq,
  leftShift: _pureFunctionsAnyGenerated.leftShift,
  mode: _pureFunctionsAnyGenerated.mode,
  nthRoot: _pureFunctionsAnyGenerated.nthRoot,
  numeric: _pureFunctionsAnyGenerated.numeric,
  prod: _pureFunctionsAnyGenerated.prod,
  resize: _pureFunctionsAnyGenerated.resize,
  rightArithShift: _pureFunctionsAnyGenerated.rightArithShift,
  round: _pureFunctionsAnyGenerated.round,
  size: _pureFunctionsAnyGenerated.size,
  smaller: _pureFunctionsAnyGenerated.smaller,
  to: _pureFunctionsAnyGenerated.to,
  unaryMinus: _pureFunctionsAnyGenerated.unaryMinus,
  unequal: _pureFunctionsAnyGenerated.unequal,
  xor: _pureFunctionsAnyGenerated.xor,
  add: _pureFunctionsAnyGenerated.add,
  atan2: _pureFunctionsAnyGenerated.atan2,
  bitAnd: _pureFunctionsAnyGenerated.bitAnd,
  bitOr: _pureFunctionsAnyGenerated.bitOr,
  bitXor: _pureFunctionsAnyGenerated.bitXor,
  cbrt: _pureFunctionsAnyGenerated.cbrt,
  compare: _pureFunctionsAnyGenerated.compare,
  compareText: _pureFunctionsAnyGenerated.compareText,
  count: _pureFunctionsAnyGenerated.count,
  deepEqual: _pureFunctionsAnyGenerated.deepEqual,
  divideScalar: _pureFunctionsAnyGenerated.divideScalar,
  dotDivide: _pureFunctionsAnyGenerated.dotDivide,
  equalText: _pureFunctionsAnyGenerated.equalText,
  floor: _pureFunctionsAnyGenerated.floor,
  gcd: _pureFunctionsAnyGenerated.gcd,
  hasNumericValue: _pureFunctionsAnyGenerated.hasNumericValue,
  hypot: _pureFunctionsAnyGenerated.hypot,
  larger: _pureFunctionsAnyGenerated.larger,
  log: _pureFunctionsAnyGenerated.log,
  lsolve: _pureFunctionsAnyGenerated.lsolve,
  matrixFromColumns: _pureFunctionsAnyGenerated.matrixFromColumns,
  max: _pureFunctionsAnyGenerated.max,
  min: _pureFunctionsAnyGenerated.min,
  mod: _pureFunctionsAnyGenerated.mod,
  nthRoots: _pureFunctionsAnyGenerated.nthRoots,
  or: _pureFunctionsAnyGenerated.or,
  partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
  qr: _pureFunctionsAnyGenerated.qr,
  rightLogShift: _pureFunctionsAnyGenerated.rightLogShift,
  smallerEq: _pureFunctionsAnyGenerated.smallerEq,
  subset: _pureFunctionsAnyGenerated.subset,
  subtract: _pureFunctionsAnyGenerated.subtract,
  trace: _pureFunctionsAnyGenerated.trace,
  usolve: _pureFunctionsAnyGenerated.usolve,
  catalan: _pureFunctionsAnyGenerated.catalan,
  compareNatural: _pureFunctionsAnyGenerated.compareNatural,
  composition: _pureFunctionsAnyGenerated.composition,
  diff: _pureFunctionsAnyGenerated.diff,
  distance: _pureFunctionsAnyGenerated.distance,
  dot: _pureFunctionsAnyGenerated.dot,
  index: _pureFunctionsAnyGenerated.index,
  invmod: _pureFunctionsAnyGenerated.invmod,
  lcm: _pureFunctionsAnyGenerated.lcm,
  log1p: _pureFunctionsAnyGenerated.log1p,
  lsolveAll: _pureFunctionsAnyGenerated.lsolveAll,
  matrixFromRows: _pureFunctionsAnyGenerated.matrixFromRows,
  multiply: _pureFunctionsAnyGenerated.multiply,
  range: _pureFunctionsAnyGenerated.range,
  row: _pureFunctionsAnyGenerated.row,
  setCartesian: _pureFunctionsAnyGenerated.setCartesian,
  setDistinct: _pureFunctionsAnyGenerated.setDistinct,
  setIsSubset: _pureFunctionsAnyGenerated.setIsSubset,
  setPowerset: _pureFunctionsAnyGenerated.setPowerset,
  slu: _pureFunctionsAnyGenerated.slu,
  sort: _pureFunctionsAnyGenerated.sort,
  unaryPlus: _pureFunctionsAnyGenerated.unaryPlus,
  usolveAll: _pureFunctionsAnyGenerated.usolveAll,
  zpk2tf: _pureFunctionsAnyGenerated.zpk2tf,
  and: _pureFunctionsAnyGenerated.and,
  ceil: _pureFunctionsAnyGenerated.ceil,
  column: _pureFunctionsAnyGenerated.column,
  cross: _pureFunctionsAnyGenerated.cross,
  det: _pureFunctionsAnyGenerated.det,
  fix: _pureFunctionsAnyGenerated.fix,
  inv: _pureFunctionsAnyGenerated.inv,
  pinv: _pureFunctionsAnyGenerated.pinv,
  pow: _pureFunctionsAnyGenerated.pow,
  setDifference: _pureFunctionsAnyGenerated.setDifference,
  setMultiplicity: _pureFunctionsAnyGenerated.setMultiplicity,
  setSymDifference: _pureFunctionsAnyGenerated.setSymDifference,
  sqrtm: _pureFunctionsAnyGenerated.sqrtm,
  sum: _pureFunctionsAnyGenerated.sum,
  vacuumImpedance: _pureFunctionsAnyGenerated.vacuumImpedance,
  wienDisplacement: _pureFunctionsAnyGenerated.wienDisplacement,
  atomicMass: _pureFunctionsAnyGenerated.atomicMass,
  bohrMagneton: _pureFunctionsAnyGenerated.bohrMagneton,
  boltzmann: _pureFunctionsAnyGenerated.boltzmann,
  conductanceQuantum: _pureFunctionsAnyGenerated.conductanceQuantum,
  coulomb: _pureFunctionsAnyGenerated.coulomb,
  cumsum: _pureFunctionsAnyGenerated.cumsum,
  deuteronMass: _pureFunctionsAnyGenerated.deuteronMass,
  dotPow: _pureFunctionsAnyGenerated.dotPow,
  electricConstant: _pureFunctionsAnyGenerated.electricConstant,
  elementaryCharge: _pureFunctionsAnyGenerated.elementaryCharge,
  expm: _pureFunctionsAnyGenerated.expm,
  faraday: _pureFunctionsAnyGenerated.faraday,
  fft: _pureFunctionsAnyGenerated.fft,
  gamma: _pureFunctionsAnyGenerated.gamma,
  gravitationConstant: _pureFunctionsAnyGenerated.gravitationConstant,
  hartreeEnergy: _pureFunctionsAnyGenerated.hartreeEnergy,
  ifft: _pureFunctionsAnyGenerated.ifft,
  inverseConductanceQuantum: _pureFunctionsAnyGenerated.inverseConductanceQuantum,
  klitzing: _pureFunctionsAnyGenerated.klitzing,
  loschmidt: _pureFunctionsAnyGenerated.loschmidt,
  magneticConstant: _pureFunctionsAnyGenerated.magneticConstant,
  molarMass: _pureFunctionsAnyGenerated.molarMass,
  molarPlanckConstant: _pureFunctionsAnyGenerated.molarPlanckConstant,
  neutronMass: _pureFunctionsAnyGenerated.neutronMass,
  nuclearMagneton: _pureFunctionsAnyGenerated.nuclearMagneton,
  planckCharge: _pureFunctionsAnyGenerated.planckCharge,
  planckLength: _pureFunctionsAnyGenerated.planckLength,
  planckTemperature: _pureFunctionsAnyGenerated.planckTemperature,
  protonMass: _pureFunctionsAnyGenerated.protonMass,
  quantumOfCirculation: _pureFunctionsAnyGenerated.quantumOfCirculation,
  reducedPlanckConstant: _pureFunctionsAnyGenerated.reducedPlanckConstant,
  rydberg: _pureFunctionsAnyGenerated.rydberg,
  secondRadiation: _pureFunctionsAnyGenerated.secondRadiation,
  setSize: _pureFunctionsAnyGenerated.setSize,
  speedOfLight: _pureFunctionsAnyGenerated.speedOfLight,
  stefanBoltzmann: _pureFunctionsAnyGenerated.stefanBoltzmann,
  thomsonCrossSection: _pureFunctionsAnyGenerated.thomsonCrossSection,
  avogadro: _pureFunctionsAnyGenerated.avogadro,
  bohrRadius: _pureFunctionsAnyGenerated.bohrRadius,
  createUnit: _pureFunctionsAnyGenerated.createUnit,
  divide: _pureFunctionsAnyGenerated.divide,
  electronMass: _pureFunctionsAnyGenerated.electronMass,
  factorial: _pureFunctionsAnyGenerated.factorial,
  firstRadiation: _pureFunctionsAnyGenerated.firstRadiation,
  gravity: _pureFunctionsAnyGenerated.gravity,
  intersect: _pureFunctionsAnyGenerated.intersect,
  lup: _pureFunctionsAnyGenerated.lup,
  magneticFluxQuantum: _pureFunctionsAnyGenerated.magneticFluxQuantum,
  molarMassC12: _pureFunctionsAnyGenerated.molarMassC12,
  multinomial: _pureFunctionsAnyGenerated.multinomial,
  parse,
  permutations: _pureFunctionsAnyGenerated.permutations,
  planckMass: _pureFunctionsAnyGenerated.planckMass,
  polynomialRoot: _pureFunctionsAnyGenerated.polynomialRoot,
  resolve,
  setIntersect: _pureFunctionsAnyGenerated.setIntersect,
  simplifyConstant,
  solveODE: _pureFunctionsAnyGenerated.solveODE,
  stirlingS2: _pureFunctionsAnyGenerated.stirlingS2,
  unit: _pureFunctionsAnyGenerated.unit,
  bellNumbers: _pureFunctionsAnyGenerated.bellNumbers,
  compile,
  eigs: _pureFunctionsAnyGenerated.eigs,
  fermiCoupling: _pureFunctionsAnyGenerated.fermiCoupling,
  gasConstant: _pureFunctionsAnyGenerated.gasConstant,
  kldivergence: _pureFunctionsAnyGenerated.kldivergence,
  lusolve: _pureFunctionsAnyGenerated.lusolve,
  mean: _pureFunctionsAnyGenerated.mean,
  molarVolume: _pureFunctionsAnyGenerated.molarVolume,
  planckConstant: _pureFunctionsAnyGenerated.planckConstant,
  quantileSeq: _pureFunctionsAnyGenerated.quantileSeq,
  setUnion: _pureFunctionsAnyGenerated.setUnion,
  simplifyCore,
  variance: _pureFunctionsAnyGenerated.variance,
  classicalElectronRadius: _pureFunctionsAnyGenerated.classicalElectronRadius,
  evaluate,
  median: _pureFunctionsAnyGenerated.median,
  simplify,
  symbolicEqual,
  corr: _pureFunctionsAnyGenerated.corr,
  freqz: _pureFunctionsAnyGenerated.freqz,
  leafCount,
  mad: _pureFunctionsAnyGenerated.mad,
  parser,
  rationalize,
  std: _pureFunctionsAnyGenerated.std,
  zeta: _pureFunctionsAnyGenerated.zeta,
  derivative,
  norm: _pureFunctionsAnyGenerated.norm,
  rotationMatrix: _pureFunctionsAnyGenerated.rotationMatrix,
  help,
  planckTime: _pureFunctionsAnyGenerated.planckTime,
  schur: _pureFunctionsAnyGenerated.schur,
  rotate: _pureFunctionsAnyGenerated.rotate,
  sylvester: _pureFunctionsAnyGenerated.sylvester,
  lyap: _pureFunctionsAnyGenerated.lyap,
  config: _configReadonly.config
});
(0, _extends2.default)(mathWithTransform, math, {
  mapSlices: (0, _factoriesAny.createMapSlicesTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  filter: (0, _factoriesAny.createFilterTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  forEach: (0, _factoriesAny.createForEachTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  map: (0, _factoriesAny.createMapTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  or: (0, _factoriesAny.createOrTransform)({
    DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  and: (0, _factoriesAny.createAndTransform)({
    add: _pureFunctionsAnyGenerated.add,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    not: _pureFunctionsAnyGenerated.not,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  concat: (0, _factoriesAny.createConcatTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  index: (0, _factoriesAny.createIndexTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType
  }),
  print: (0, _factoriesAny.createPrintTransform)({
    add: _pureFunctionsAnyGenerated.add,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  sum: (0, _factoriesAny.createSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  bitAnd: (0, _factoriesAny.createBitAndTransform)({
    add: _pureFunctionsAnyGenerated.add,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    not: _pureFunctionsAnyGenerated.not,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  min: (0, _factoriesAny.createMinTransform)({
    config: _configReadonly.config,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    numeric: _pureFunctionsAnyGenerated.numeric,
    smaller: _pureFunctionsAnyGenerated.smaller,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  subset: (0, _factoriesAny.createSubsetTransform)({
    add: _pureFunctionsAnyGenerated.add,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  bitOr: (0, _factoriesAny.createBitOrTransform)({
    DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
    concat: _pureFunctionsAnyGenerated.concat,
    equalScalar: _pureFunctionsAnyGenerated.equalScalar,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  cumsum: (0, _factoriesAny.createCumSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    typed: _pureFunctionsAnyGenerated.typed,
    unaryPlus: _pureFunctionsAnyGenerated.unaryPlus
  }),
  diff: (0, _factoriesAny.createDiffTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    number: _pureFunctionsAnyGenerated.number,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  max: (0, _factoriesAny.createMaxTransform)({
    config: _configReadonly.config,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    larger: _pureFunctionsAnyGenerated.larger,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  range: (0, _factoriesAny.createRangeTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    isPositive: _pureFunctionsAnyGenerated.isPositive,
    larger: _pureFunctionsAnyGenerated.larger,
    largerEq: _pureFunctionsAnyGenerated.largerEq,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  row: (0, _factoriesAny.createRowTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  column: (0, _factoriesAny.createColumnTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  mean: (0, _factoriesAny.createMeanTransform)({
    add: _pureFunctionsAnyGenerated.add,
    divide: _pureFunctionsAnyGenerated.divide,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  quantileSeq: (0, _factoriesAny.createQuantileSeqTransform)({
    add: _pureFunctionsAnyGenerated.add,
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    compare: _pureFunctionsAnyGenerated.compare,
    divide: _pureFunctionsAnyGenerated.divide,
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    larger: _pureFunctionsAnyGenerated.larger,
    mapSlices: _pureFunctionsAnyGenerated.mapSlices,
    multiply: _pureFunctionsAnyGenerated.multiply,
    partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  variance: (0, _factoriesAny.createVarianceTransform)({
    add: _pureFunctionsAnyGenerated.add,
    divide: _pureFunctionsAnyGenerated.divide,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    mapSlices: _pureFunctionsAnyGenerated.mapSlices,
    multiply: _pureFunctionsAnyGenerated.multiply,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  std: (0, _factoriesAny.createStdTransform)({
    map: _pureFunctionsAnyGenerated.map,
    sqrt: _pureFunctionsAnyGenerated.sqrt,
    typed: _pureFunctionsAnyGenerated.typed,
    variance: _pureFunctionsAnyGenerated.variance
  })
});
(0, _extends2.default)(classes, {
  BigNumber: _pureFunctionsAnyGenerated.BigNumber,
  Complex: _pureFunctionsAnyGenerated.Complex,
  Fraction: _pureFunctionsAnyGenerated.Fraction,
  Matrix: _pureFunctionsAnyGenerated.Matrix,
  Node,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  Range: _pureFunctionsAnyGenerated.Range,
  RelationalNode,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet,
  ArrayNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
  RangeNode,
  Chain,
  FunctionAssignmentNode,
  SparseMatrix: _pureFunctionsAnyGenerated.SparseMatrix,
  ImmutableDenseMatrix: _pureFunctionsAnyGenerated.ImmutableDenseMatrix,
  Index: _pureFunctionsAnyGenerated.Index,
  AccessorNode,
  AssignmentNode,
  FibonacciHeap: _pureFunctionsAnyGenerated.FibonacciHeap,
  IndexNode,
  Spa: _pureFunctionsAnyGenerated.Spa,
  Unit: _pureFunctionsAnyGenerated.Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});
Chain.createProxy(math);