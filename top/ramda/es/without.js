import _curry2 from "./internal/_curry2.js";
import _Set from "./internal/_Set.js";
import reject from "./reject.js";

/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference, R.remove
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/_curry2(function without(xs, list) {
  var toRemove = new _Set();
  for (var i = 0; i < xs.length; i += 1) {
    toRemove.add(xs[i]);
  }
  return reject(toRemove.has.bind(toRemove), list);
});
export default without;