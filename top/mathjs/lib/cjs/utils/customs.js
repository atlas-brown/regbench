"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSafeMethod = getSafeMethod;
exports.getSafeProperty = getSafeProperty;
exports.isPlainObject = isPlainObject;
exports.isSafeMethod = isSafeMethod;
exports.isSafeProperty = isSafeProperty;
exports.setSafeProperty = setSafeProperty;
var _object = require("./object.js");
/**
 * Get a property of a plain object
 * Throws an error in case the object is not a plain object or the
 * property is not defined on the object itself
 * @param {Object} object
 * @param {string} prop
 * @return {*} Returns the property value when safe
 */
function getSafeProperty(object, prop) {
  // only allow getting safe properties of a plain object
  if (isSafeProperty(object, prop)) {
    return object[prop];
  }
  if (typeof object[prop] === 'function' && isSafeMethod(object, prop)) {
    throw new Error('Cannot access method "' + prop + '" as a property');
  }
  throw new Error('No access to property "' + prop + '"');
}

/**
 * Set a property on a plain object.
 * Throws an error in case the object is not a plain object or the
 * property would override an inherited property like .constructor or .toString
 * @param {Object} object
 * @param {string} prop
 * @param {*} value
 * @return {*} Returns the value
 */
// TODO: merge this function into access.js?
function setSafeProperty(object, prop, value) {
  // only allow setting safe properties of a plain object
  if (isSafeProperty(object, prop)) {
    object[prop] = value;
    return value;
  }
  throw new Error('No access to property "' + prop + '"');
}

/**
 * Test whether a property is safe to use on an object or Array.
 * For example .toString and .constructor are not safe
 * @param {Object | Array} object
 * @param {string} prop
 * @return {boolean} Returns true when safe
 */
function isSafeProperty(object, prop) {
  if (!isPlainObject(object) && !Array.isArray(object)) {
    return false;
  }
  // SAFE: whitelisted
  // e.g length
  if ((0, _object.hasOwnProperty)(safeNativeProperties, prop)) {
    return true;
  }
  // UNSAFE: inherited from Object prototype
  // e.g constructor
  if (prop in Object.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Object.prototype is a root object
    return false;
  }
  // UNSAFE: inherited from Function prototype
  // e.g call, apply
  if (prop in Function.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Function.prototype is a root object
    return false;
  }
  return true;
}

/**
 * Validate whether a method is safe.
 * Throws an error when that's not the case.
 * @param {Object} object
 * @param {string} method
 * @return {function} Returns the method when valid
 */
function getSafeMethod(object, method) {
  if (!isSafeMethod(object, method)) {
    throw new Error('No access to method "' + method + '"');
  }
  return object[method];
}

/**
 * Check whether a method is safe.
 * Throws an error when that's not the case (for example for `constructor`).
 * @param {Object} object
 * @param {string} method
 * @return {boolean} Returns true when safe, false otherwise
 */
function isSafeMethod(object, method) {
  if (object === null || object === undefined || typeof object[method] !== 'function') {
    return false;
  }
  // UNSAFE: ghosted
  // e.g overridden toString
  // Note that IE10 doesn't support __proto__ and we can't do this check there.
  if ((0, _object.hasOwnProperty)(object, method) && Object.getPrototypeOf && method in Object.getPrototypeOf(object)) {
    return false;
  }
  // SAFE: whitelisted
  // e.g toString
  if ((0, _object.hasOwnProperty)(safeNativeMethods, method)) {
    return true;
  }
  // UNSAFE: inherited from Object prototype
  // e.g constructor
  if (method in Object.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Object.prototype is a root object
    return false;
  }
  // UNSAFE: inherited from Function prototype
  // e.g call, apply
  if (method in Function.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Function.prototype is a root object
    return false;
  }
  return true;
}
function isPlainObject(object) {
  return typeof object === 'object' && object && object.constructor === Object;
}
const safeNativeProperties = {
  length: true,
  name: true
};
const safeNativeMethods = {
  toString: true,
  valueOf: true,
  toLocaleString: true
};