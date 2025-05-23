import { absNumber, acoshNumber, acosNumber, acothNumber, acotNumber, acschNumber, acscNumber, addNumber, andNumber, asechNumber, asecNumber, asinhNumber, asinNumber, atan2Number, atanhNumber, atanNumber, bitAndNumber, bitNotNumber, bitOrNumber, bitXorNumber, cbrtNumber, combinationsNumber, coshNumber, cosNumber, cothNumber, cotNumber, cschNumber, cscNumber, cubeNumber, divideNumber, expm1Number, expNumber, gammaNumber, gcdNumber, isIntegerNumber, isNaNNumber, isNegativeNumber, isPositiveNumber, isZeroNumber, lcmNumber, leftShiftNumber, lgammaNumber, log10Number, log1pNumber, log2Number, logNumber, modNumber, multiplyNumber, normNumber, notNumber, nthRootNumber, orNumber, powNumber, rightArithShiftNumber, rightLogShiftNumber, roundNumber, sechNumber, secNumber, signNumber, sinhNumber, sinNumber, sqrtNumber, squareNumber, subtractNumber, tanhNumber, tanNumber, unaryMinusNumber, unaryPlusNumber, xgcdNumber, xorNumber } from './plain/number/index.js';
import { factory } from './utils/factory.js';
import { noIndex, noMatrix, noSubset } from './utils/noop.js';

// ----------------------------------------------------------------------------
// classes and functions

// core
export { createTyped } from './core/function/typed.js';

// classes
export { createResultSet } from './type/resultset/ResultSet.js';
export { createRangeClass } from './type/matrix/Range.js';
export { createHelpClass } from './expression/Help.js';
export { createChainClass } from './type/chain/Chain.js';
export { createHelp } from './expression/function/help.js';
export { createChain } from './type/chain/function/chain.js';

// algebra
export { createResolve } from './function/algebra/resolve.js';
export { createSimplify } from './function/algebra/simplify.js';
export { createSimplifyConstant } from './function/algebra/simplifyConstant.js';
export { createSimplifyCore } from './function/algebra/simplifyCore.js';
export { createDerivative } from './function/algebra/derivative.js';
export { createRationalize } from './function/algebra/rationalize.js';

// arithmetic
export var createUnaryMinus = /* #__PURE__ */createNumberFactory('unaryMinus', unaryMinusNumber);
export var createUnaryPlus = /* #__PURE__ */createNumberFactory('unaryPlus', unaryPlusNumber);
export var createAbs = /* #__PURE__ */createNumberFactory('abs', absNumber);
export var createAddScalar = /* #__PURE__ */createNumberFactory('addScalar', addNumber);
export var createSubtractScalar = /* #__PURE__ */createNumberFactory('subtractScalar', subtractNumber);
export var createCbrt = /* #__PURE__ */createNumberFactory('cbrt', cbrtNumber);
export { createCeilNumber as createCeil } from './function/arithmetic/ceil.js';
export var createCube = /* #__PURE__ */createNumberFactory('cube', cubeNumber);
export var createExp = /* #__PURE__ */createNumberFactory('exp', expNumber);
export var createExpm1 = /* #__PURE__ */createNumberFactory('expm1', expm1Number);
export { createFixNumber as createFix } from './function/arithmetic/fix.js';
export { createFloorNumber as createFloor } from './function/arithmetic/floor.js';
export var createGcd = /* #__PURE__ */createNumberFactory('gcd', gcdNumber);
export var createLcm = /* #__PURE__ */createNumberFactory('lcm', lcmNumber);
export var createLog10 = /* #__PURE__ */createNumberFactory('log10', log10Number);
export var createLog2 = /* #__PURE__ */createNumberFactory('log2', log2Number);
export var createMod = /* #__PURE__ */createNumberFactory('mod', modNumber);
export var createMultiplyScalar = /* #__PURE__ */createNumberFactory('multiplyScalar', multiplyNumber);
export var createMultiply = /* #__PURE__ */createNumberFactory('multiply', multiplyNumber);
export var createNthRoot = /* #__PURE__ */
createNumberOptionalSecondArgFactory('nthRoot', nthRootNumber);
export var createSign = /* #__PURE__ */createNumberFactory('sign', signNumber);
export var createSqrt = /* #__PURE__ */createNumberFactory('sqrt', sqrtNumber);
export var createSquare = /* #__PURE__ */createNumberFactory('square', squareNumber);
export var createSubtract = /* #__PURE__ */createNumberFactory('subtract', subtractNumber);
export var createXgcd = /* #__PURE__ */createNumberFactory('xgcd', xgcdNumber);
export var createDivideScalar = /* #__PURE__ */createNumberFactory('divideScalar', divideNumber);
export var createPow = /* #__PURE__ */createNumberFactory('pow', powNumber);
export var createRound = /* #__PURE__ */
createNumberOptionalSecondArgFactory('round', roundNumber);
export var createLog = /* #__PURE__ */
createNumberOptionalSecondArgFactory('log', logNumber);
export var createLog1p = /* #__PURE__ */createNumberFactory('log1p', log1pNumber);
export var createAdd = /* #__PURE__ */createNumberFactory('add', addNumber);
export { createHypot } from './function/arithmetic/hypot.js';
export var createNorm = /* #__PURE__ */createNumberFactory('norm', normNumber);
export var createDivide = /* #__PURE__ */createNumberFactory('divide', divideNumber);

// bitwise
export var createBitAnd = /* #__PURE__ */createNumberFactory('bitAnd', bitAndNumber);
export var createBitNot = /* #__PURE__ */createNumberFactory('bitNot', bitNotNumber);
export var createBitOr = /* #__PURE__ */createNumberFactory('bitOr', bitOrNumber);
export var createBitXor = /* #__PURE__ */createNumberFactory('bitXor', bitXorNumber);
export var createLeftShift = /* #__PURE__ */createNumberFactory('leftShift', leftShiftNumber);
export var createRightArithShift = /* #__PURE__ */createNumberFactory('rightArithShift', rightArithShiftNumber);
export var createRightLogShift = /* #__PURE__ */createNumberFactory('rightLogShift', rightLogShiftNumber);

// combinatorics
export { createStirlingS2 } from './function/combinatorics/stirlingS2.js';
export { createBellNumbers } from './function/combinatorics/bellNumbers.js';
export { createCatalan } from './function/combinatorics/catalan.js';
export { createComposition } from './function/combinatorics/composition.js';

// constants
export { createE, createUppercaseE, createFalse,
// createI,
createInfinity, createLN10, createLN2, createLOG10E, createLOG2E, createNaN, createNull, createPhi, createPi, createUppercasePi, createSQRT1_2,
// eslint-disable-line camelcase
createSQRT2, createTau, createTrue, createVersion } from './constants.js';

// create
export { createNumber } from './type/number.js';
export { createBigint } from './type/bigint.js';
export { createString } from './type/string.js';
export { createBoolean } from './type/boolean.js';
export { createParser } from './expression/function/parser.js';

// expression
export { createNode } from './expression/node/Node.js';
export { createAccessorNode } from './expression/node/AccessorNode.js';
export { createArrayNode } from './expression/node/ArrayNode.js';
export { createAssignmentNode } from './expression/node/AssignmentNode.js';
export { createBlockNode } from './expression/node/BlockNode.js';
export { createConditionalNode } from './expression/node/ConditionalNode.js';
export { createConstantNode } from './expression/node/ConstantNode.js';
export { createFunctionAssignmentNode } from './expression/node/FunctionAssignmentNode.js';
export { createIndexNode } from './expression/node/IndexNode.js';
export { createObjectNode } from './expression/node/ObjectNode.js';
export { createOperatorNode } from './expression/node/OperatorNode.js';
export { createParenthesisNode } from './expression/node/ParenthesisNode.js';
export { createRangeNode } from './expression/node/RangeNode.js';
export { createRelationalNode } from './expression/node/RelationalNode.js';
export { createSymbolNode } from './expression/node/SymbolNode.js';
export { createFunctionNode } from './expression/node/FunctionNode.js';
export { createParse } from './expression/parse.js';
export { createCompile } from './expression/function/compile.js';
export { createEvaluate } from './expression/function/evaluate.js';
export { createParserClass } from './expression/Parser.js';

// logical
export var createAnd = /* #__PURE__ */createNumberFactory('and', andNumber);
export var createNot = /* #__PURE__ */createNumberFactory('not', notNumber);
export var createOr = /* #__PURE__ */createNumberFactory('or', orNumber);
export var createXor = /* #__PURE__ */createNumberFactory('xor', xorNumber);

// matrix
export { createMapSlices } from './function/matrix/mapSlices.js';
export { createFilter } from './function/matrix/filter.js';
export { createForEach } from './function/matrix/forEach.js';
export { createMap } from './function/matrix/map.js';
export { createRange } from './function/matrix/range.js';
export { createSize } from './function/matrix/size.js';
// FIXME: create a lightweight "number" implementation of subset only supporting plain objects/arrays
export var createIndex = /* #__PURE__ */factory('index', [], () => noIndex);
export var createMatrix = /* #__PURE__ */factory('matrix', [], () => noMatrix); // FIXME: needed now because subset transform needs it. Remove the need for it in subset
export var createSubset = /* #__PURE__ */factory('subset', [], () => noSubset);
// TODO: provide number+array implementations for map, filter, forEach, zeros, ...?
// TODO: create range implementation for range?
export { createPartitionSelect } from './function/matrix/partitionSelect.js';

// probability
export var createCombinations = createNumberFactory('combinations', combinationsNumber);
export var createGamma = createNumberFactory('gamma', gammaNumber);
export var createLgamma = createNumberFactory('lgamma', lgammaNumber);
export { createCombinationsWithRep } from './function/probability/combinationsWithRep.js';
export { createFactorial } from './function/probability/factorial.js';
export { createMultinomial } from './function/probability/multinomial.js';
export { createPermutations } from './function/probability/permutations.js';
export { createPickRandom } from './function/probability/pickRandom.js';
export { createRandomNumber as createRandom } from './function/probability/random.js';
export { createRandomInt } from './function/probability/randomInt.js';

// relational
export { createEqualScalarNumber as createEqualScalar } from './function/relational/equalScalar.js';
export { createCompareNumber as createCompare } from './function/relational/compare.js';
export { createCompareNatural } from './function/relational/compareNatural.js';
export { createCompareTextNumber as createCompareText } from './function/relational/compareText.js';
export { createEqualNumber as createEqual } from './function/relational/equal.js';
export { createEqualText } from './function/relational/equalText.js';
export { createSmallerNumber as createSmaller } from './function/relational/smaller.js';
export { createSmallerEqNumber as createSmallerEq } from './function/relational/smallerEq.js';
export { createLargerNumber as createLarger } from './function/relational/larger.js';
export { createLargerEqNumber as createLargerEq } from './function/relational/largerEq.js';
export { createDeepEqual } from './function/relational/deepEqual.js';
export { createUnequalNumber as createUnequal } from './function/relational/unequal.js';

// special
export { createErf } from './function/special/erf.js';
export { createZeta } from './function/special/zeta.js';
// statistics
export { createMode } from './function/statistics/mode.js';
export { createProd } from './function/statistics/prod.js';
export { createMax } from './function/statistics/max.js';
export { createMin } from './function/statistics/min.js';
export { createSum } from './function/statistics/sum.js';
export { createCumSum } from './function/statistics/cumsum.js';
export { createMean } from './function/statistics/mean.js';
export { createMedian } from './function/statistics/median.js';
export { createMad } from './function/statistics/mad.js';
export { createVariance } from './function/statistics/variance.js';
export { createQuantileSeq } from './function/statistics/quantileSeq.js';
export { createStd } from './function/statistics/std.js';
export { createCorr } from './function/statistics/corr.js';

// string
export { createFormat } from './function/string/format.js';
export { createPrint } from './function/string/print.js';

// trigonometry
export var createAcos = /* #__PURE__ */createNumberFactory('acos', acosNumber);
export var createAcosh = /* #__PURE__ */createNumberFactory('acosh', acoshNumber);
export var createAcot = /* #__PURE__ */createNumberFactory('acot', acotNumber);
export var createAcoth = /* #__PURE__ */createNumberFactory('acoth', acothNumber);
export var createAcsc = /* #__PURE__ */createNumberFactory('acsc', acscNumber);
export var createAcsch = /* #__PURE__ */createNumberFactory('acsch', acschNumber);
export var createAsec = /* #__PURE__ */createNumberFactory('asec', asecNumber);
export var createAsech = /* #__PURE__ */createNumberFactory('asech', asechNumber);
export var createAsin = /* #__PURE__ */createNumberFactory('asin', asinNumber);
export var createAsinh = /* #__PURE__ */createNumberFactory('asinh', asinhNumber);
export var createAtan = /* #__PURE__ */createNumberFactory('atan', atanNumber);
export var createAtan2 = /* #__PURE__ */createNumberFactory('atan2', atan2Number);
export var createAtanh = /* #__PURE__ */createNumberFactory('atanh', atanhNumber);
export var createCos = /* #__PURE__ */createNumberFactory('cos', cosNumber);
export var createCosh = /* #__PURE__ */createNumberFactory('cosh', coshNumber);
export var createCot = /* #__PURE__ */createNumberFactory('cot', cotNumber);
export var createCoth = /* #__PURE__ */createNumberFactory('coth', cothNumber);
export var createCsc = /* #__PURE__ */createNumberFactory('csc', cscNumber);
export var createCsch = /* #__PURE__ */createNumberFactory('csch', cschNumber);
export var createSec = /* #__PURE__ */createNumberFactory('sec', secNumber);
export var createSech = /* #__PURE__ */createNumberFactory('sech', sechNumber);
export var createSin = /* #__PURE__ */createNumberFactory('sin', sinNumber);
export var createSinh = /* #__PURE__ */createNumberFactory('sinh', sinhNumber);
export var createTan = /* #__PURE__ */createNumberFactory('tan', tanNumber);
export var createTanh = /* #__PURE__ */createNumberFactory('tanh', tanhNumber);

// transforms
export { createMapSlicesTransform } from './expression/transform/mapSlices.transform.js';
export { createFilterTransform } from './expression/transform/filter.transform.js';
export { createForEachTransform } from './expression/transform/forEach.transform.js';
export { createMapTransform } from './expression/transform/map.transform.js';
export { createMaxTransform } from './expression/transform/max.transform.js';
export { createMeanTransform } from './expression/transform/mean.transform.js';
export { createMinTransform } from './expression/transform/min.transform.js';
export { createRangeTransform } from './expression/transform/range.transform.js';
export var createSubsetTransform = /* #__PURE__ */factory('subset', [], () => noSubset, {
  isTransformFunction: true
});
export { createStdTransform } from './expression/transform/std.transform.js';
export { createSumTransform } from './expression/transform/sum.transform.js';
export { createCumSumTransform } from './expression/transform/cumsum.transform.js';
export { createVarianceTransform } from './expression/transform/variance.transform.js';

// utils
export { createClone } from './function/utils/clone.js';
export var createIsInteger = /* #__PURE__ */createNumberFactory('isInteger', isIntegerNumber);
export var createIsNegative = /* #__PURE__ */createNumberFactory('isNegative', isNegativeNumber);
export { createIsNumeric } from './function/utils/isNumeric.js';
export { createHasNumericValue } from './function/utils/hasNumericValue.js';
export var createIsPositive = /* #__PURE__ */createNumberFactory('isPositive', isPositiveNumber);
export var createIsZero = /* #__PURE__ */createNumberFactory('isZero', isZeroNumber);
export var createIsNaN = /* #__PURE__ */createNumberFactory('isNaN', isNaNNumber);
export { createTypeOf } from './function/utils/typeOf.js';
export { createIsPrime } from './function/utils/isPrime.js';
export { createNumeric } from './function/utils/numeric.js';

// json
export { createReviver } from './json/reviver.js';
export { createReplacer } from './json/replacer.js';

// helper functions to create a factory function for a function which only needs typed-function
function createNumberFactory(name, fn) {
  return factory(name, ['typed'], _ref => {
    var {
      typed
    } = _ref;
    return typed(fn);
  });
}
function createNumberOptionalSecondArgFactory(name, fn) {
  return factory(name, ['typed'], _ref2 => {
    var {
      typed
    } = _ref2;
    return typed({
      number: fn,
      'number,number': fn
    });
  });
}