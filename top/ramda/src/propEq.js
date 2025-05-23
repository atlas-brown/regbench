var _curry3 = /*#__PURE__*/require("./internal/_curry3.js");
var prop = /*#__PURE__*/require("./prop.js");
var equals = /*#__PURE__*/require("./equals.js");
/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq),
 * and test nested path property with [`R.pathEq`](#pathEq).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig a -> String -> Object -> Boolean
 * @param {*} val The value to compare the property with
 * @param {String} name the specified object property's key
 * @param {*} obj The object to check the property in
 * @return {Boolean} `true` if the value equals the specified object property,
 *         `false` otherwise.
 * @see R.whereEq, R.pathEq, R.propSatisfies, R.equals
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      const kids = [abby, fred, rusty, alois];
 *      const hasBrownHair = R.propEq('brown', 'hair');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/_curry3(function propEq(val, name, obj) {
  return equals(val, prop(name, obj));
});
module.exports = propEq;