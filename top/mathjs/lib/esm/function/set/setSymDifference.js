import { flatten } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
var name = 'setSymDifference';
var dependencies = ['typed', 'size', 'concat', 'subset', 'setDifference', 'Index'];
export var createSetSymDifference = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    size,
    concat,
    subset,
    setDifference,
    Index
  } = _ref;
  /**
   * Create the symmetric difference of two (multi)sets.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setSymDifference(set1, set2)
   *
   * Examples:
   *
   *    math.setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])            // returns [1, 2, 5, 6]
   *    math.setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [1, 2, 5, 6]
   *
   * See also:
   *
   *    setUnion, setIntersect, setDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The symmetric difference of two (multi)sets
   */
  return typed(name, {
    'Array | Matrix, Array | Matrix': function Array__Matrix_Array__Matrix(a1, a2) {
      if (subset(size(a1), new Index(0)) === 0) {
        // if any of them is empty, return the other one
        return flatten(a2);
      } else if (subset(size(a2), new Index(0)) === 0) {
        return flatten(a1);
      }
      var b1 = flatten(a1);
      var b2 = flatten(a2);
      return concat(setDifference(b1, b2), setDifference(b2, b1));
    }
  });
});