import { factory } from '../../utils/factory.js';
import { arraySize } from '../../utils/array.js';
var name = 'rotate';
var dependencies = ['typed', 'multiply', 'rotationMatrix'];
export var createRotate = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    multiply,
    rotationMatrix
  } = _ref;
  /**
     * Rotate a vector of size 1x2 counter-clockwise by a given angle
     * Rotate a vector of size 1x3 counter-clockwise by a given angle around the given axis
     *
     * Syntax:
     *
     *    math.rotate(w, theta)
     *    math.rotate(w, theta, v)
     *
     * Examples:
     *
     *    math.rotate([11, 12], math.pi / 2)                           // returns [-12, 11]
     *    math.rotate(matrix([11, 12]), math.pi / 2)                   // returns [-12, 11]
     *
     *    math.rotate([1, 0, 0], unit('90deg'), [0, 0, 1])             // returns [0, 1, 0]
     *    math.rotate(matrix([1, 0, 0]), unit('90deg'), [0, 0, 1])     // returns Matrix [0, 1, 0]
     *
     *    math.rotate([1, 0], math.complex(1 + i))                     // returns [cos(1 + i) - sin(1 + i), sin(1 + i) + cos(1 + i)]
     *
     * See also:
     *
     *    matrix, rotationMatrix
     *
     * @param {Array | Matrix} w                             Vector to rotate
     * @param {number | BigNumber | Complex | Unit} theta    Rotation angle
     * @param {Array | Matrix} [v]                           Rotation axis
     * @return {Array | Matrix}                              Multiplication of the rotation matrix and w
     */
  return typed(name, {
    'Array , number | BigNumber | Complex | Unit': function Array__number__BigNumber__Complex__Unit(w, theta) {
      _validateSize(w, 2);
      var matrixRes = multiply(rotationMatrix(theta), w);
      return matrixRes.toArray();
    },
    'Matrix , number | BigNumber | Complex | Unit': function Matrix__number__BigNumber__Complex__Unit(w, theta) {
      _validateSize(w, 2);
      return multiply(rotationMatrix(theta), w);
    },
    'Array, number | BigNumber | Complex | Unit, Array | Matrix': function Array_number__BigNumber__Complex__Unit_Array__Matrix(w, theta, v) {
      _validateSize(w, 3);
      var matrixRes = multiply(rotationMatrix(theta, v), w);
      return matrixRes;
    },
    'Matrix, number | BigNumber | Complex | Unit, Array | Matrix': function Matrix_number__BigNumber__Complex__Unit_Array__Matrix(w, theta, v) {
      _validateSize(w, 3);
      return multiply(rotationMatrix(theta, v), w);
    }
  });
  function _validateSize(v, expectedSize) {
    var actualSize = Array.isArray(v) ? arraySize(v) : v.size();
    if (actualSize.length > 2) {
      throw new RangeError("Vector must be of dimensions 1x".concat(expectedSize));
    }
    if (actualSize.length === 2 && actualSize[1] !== 1) {
      throw new RangeError("Vector must be of dimensions 1x".concat(expectedSize));
    }
    if (actualSize[0] !== expectedSize) {
      throw new RangeError("Vector must be of dimensions 1x".concat(expectedSize));
    }
  }
});