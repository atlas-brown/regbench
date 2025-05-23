import { flatten as flattenArray } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
var name = 'flatten';
var dependencies = ['typed'];
export var createFlatten = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Flatten a multidimensional matrix into a single dimensional matrix.
   * A new matrix is returned, the original matrix is left untouched.
   *
   * Syntax:
   *
   *    math.flatten(x)
   *
   * Examples:
   *
   *    math.flatten([[1,2], [3,4]])   // returns [1, 2, 3, 4]
   *
   * See also:
   *
   *    concat, resize, size, squeeze
   *
   * @param {Matrix | Array} x   Matrix to be flattened
   * @return {Matrix | Array} Returns the flattened matrix
   */
  return typed(name, {
    Array: function Array(x) {
      return flattenArray(x);
    },
    Matrix: function Matrix(x) {
      // Return the same matrix type as x (Dense or Sparse Matrix)
      // Return the same data type as x
      return x.create(flattenArray(x.valueOf(), true), x.datatype());
    }
  });
});