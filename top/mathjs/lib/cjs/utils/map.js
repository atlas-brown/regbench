"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartitionedMap = exports.ObjectWrappingMap = void 0;
exports.assign = assign;
exports.createEmptyMap = createEmptyMap;
exports.createMap = createMap;
exports.toObject = toObject;
var _customs = require("./customs.js");
var _is = require("./is.js");
/**
 * A map facade on a bare object.
 *
 * The small number of methods needed to implement a scope,
 * forwarding on to the SafeProperty functions. Over time, the codebase
 * will stop using this method, as all objects will be Maps, rather than
 * more security prone objects.
 */
class ObjectWrappingMap {
  constructor(object) {
    this.wrappedObject = object;
    this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter(key => this.has(key)).values();
  }
  get(key) {
    return (0, _customs.getSafeProperty)(this.wrappedObject, key);
  }
  set(key, value) {
    (0, _customs.setSafeProperty)(this.wrappedObject, key, value);
    return this;
  }
  has(key) {
    return (0, _customs.isSafeProperty)(this.wrappedObject, key) && key in this.wrappedObject;
  }
  entries() {
    return mapIterator(this.keys(), key => [key, this.get(key)]);
  }
  forEach(callback) {
    for (const key of this.keys()) {
      callback(this.get(key), key, this);
    }
  }
  delete(key) {
    if ((0, _customs.isSafeProperty)(this.wrappedObject, key)) {
      delete this.wrappedObject[key];
    }
  }
  clear() {
    for (const key of this.keys()) {
      this.delete(key);
    }
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}

/**
 * Create a map with two partitions: a and b.
 * The set with bKeys determines which keys/values are read/written to map b,
 * all other values are read/written to map a
 *
 * For example:
 *
 *   const a = new Map()
 *   const b = new Map()
 *   const p = new PartitionedMap(a, b, new Set(['x', 'y']))
 *
 * In this case, values `x` and `y` are read/written to map `b`,
 * all other values are read/written to map `a`.
 */
exports.ObjectWrappingMap = ObjectWrappingMap;
class PartitionedMap {
  /**
   * @param {Map} a
   * @param {Map} b
   * @param {Set} bKeys
   */
  constructor(a, b, bKeys) {
    this.a = a;
    this.b = b;
    this.bKeys = bKeys;
    this[Symbol.iterator] = this.entries;
  }
  get(key) {
    return this.bKeys.has(key) ? this.b.get(key) : this.a.get(key);
  }
  set(key, value) {
    if (this.bKeys.has(key)) {
      this.b.set(key, value);
    } else {
      this.a.set(key, value);
    }
    return this;
  }
  has(key) {
    return this.b.has(key) || this.a.has(key);
  }
  keys() {
    return new Set([...this.a.keys(), ...this.b.keys()])[Symbol.iterator]();
  }
  entries() {
    return mapIterator(this.keys(), key => [key, this.get(key)]);
  }
  forEach(callback) {
    for (const key of this.keys()) {
      callback(this.get(key), key, this);
    }
  }
  delete(key) {
    return this.bKeys.has(key) ? this.b.delete(key) : this.a.delete(key);
  }
  clear() {
    this.a.clear();
    this.b.clear();
  }
  get size() {
    return [...this.keys()].length;
  }
}

/**
 * Create a new iterator that maps over the provided iterator, applying a mapping function to each item
 */
exports.PartitionedMap = PartitionedMap;
function mapIterator(it, callback) {
  return {
    next: () => {
      const n = it.next();
      return n.done ? n : {
        value: callback(n.value),
        done: false
      };
    }
  };
}

/**
 * Creates an empty map, or whatever your platform's polyfill is.
 *
 * @returns an empty Map or Map like object.
 */
function createEmptyMap() {
  return new Map();
}

/**
 * Creates a Map from the given object.
 *
 * @param { Map | { [key: string]: unknown } | undefined } mapOrObject
 * @returns
 */
function createMap(mapOrObject) {
  if (!mapOrObject) {
    return createEmptyMap();
  }
  if ((0, _is.isMap)(mapOrObject)) {
    return mapOrObject;
  }
  if ((0, _is.isObject)(mapOrObject)) {
    return new ObjectWrappingMap(mapOrObject);
  }
  throw new Error('createMap can create maps from objects or Maps');
}

/**
 * Unwraps a map into an object.
 *
 * @param {Map} map
 * @returns { [key: string]: unknown }
 */
function toObject(map) {
  if (map instanceof ObjectWrappingMap) {
    return map.wrappedObject;
  }
  const object = {};
  for (const key of map.keys()) {
    const value = map.get(key);
    (0, _customs.setSafeProperty)(object, key, value);
  }
  return object;
}

/**
 * Copies the contents of key-value pairs from each `objects` in to `map`.
 *
 * Object is `objects` can be a `Map` or object.
 *
 * This is the `Map` analog to `Object.assign`.
 */
function assign(map) {
  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }
  for (const args of objects) {
    if (!args) {
      continue;
    }
    if ((0, _is.isMap)(args)) {
      for (const key of args.keys()) {
        map.set(key, args.get(key));
      }
    } else if ((0, _is.isObject)(args)) {
      for (const key of Object.keys(args)) {
        map.set(key, args[key]);
      }
    }
  }
  return map;
}