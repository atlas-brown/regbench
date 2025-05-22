"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toString = exports.cdr = exports.car = exports.cons = exports.checkPair = exports.isPair = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check if something is pair
 * @example
 * const pair = cons(5, 'hello');
 * isPair(pair); // true
 * isPair(5); // false
 */
var isPair = function isPair(pair) {
  return typeof pair === 'function' && pair.pair;
};

exports.isPair = isPair;

var checkPair = function checkPair(pair) {
  if (!isPair(pair)) {
    var value = _typeof(pair) === 'object' ? JSON.stringify(pair, null, 2) : String(pair);
    throw new Error("Argument must be pair, but it was '".concat(value, "'"));
  }
};
/**
 * Build pair
 * @example
 * const pair = cons(5, 'hello');
 * @example
 * const pair = cons(cons(1, null), 'world');
 */


exports.checkPair = checkPair;

var cons = function cons(a, b) {
  var pair = function pair(message) {
    switch (message) {
      case 'car':
        return a;

      case 'cdr':
        return b;

      default:
        throw new Error("Unknown message '".concat(message, "'"));
    }
  };

  pair.pair = true;
  return pair;
};
/**
 * Get car (first element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * car(pair); // 5
 */


exports.cons = cons;

var car = function car(pair) {
  checkPair(pair);
  return pair('car');
};
/**
 * Get cdr (second element) from pair
 * @example
 * const pair = cons(5, 'hello');
 * cdr(pair); // hello
 */


exports.car = car;

var cdr = function cdr(pair) {
  checkPair(pair);
  return pair('cdr');
};
/**
 * Convert pair to string (recursively)
 * @example
 * toString(cons('', 10)); // ('', 10)
 */


exports.cdr = cdr;

var toString = function toString(pair) {
  checkPair(pair);

  var rec = function rec(p) {
    if (!isPair(p)) {
      return String(p);
    }

    var left = car(p);
    var right = cdr(p);
    return "(".concat(rec(left), ", ").concat(rec(right), ")");
  };

  return rec(pair);
};

exports.toString = toString;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQTs7Ozs7OztBQU9PLElBQU0sU0FBUyxTQUFULE1BQVMsQ0FBQyxJQUFEO0FBQUEsU0FBMEIsT0FBTyxJQUFQLEtBQWdCLFVBQWhCLElBQThCLEtBQUssSUFBN0Q7QUFBQSxDQUFmOzs7O0FBRUEsSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBdUI7QUFDOUMsTUFBSSxDQUFDLE9BQU8sSUFBUCxDQUFMLEVBQW1CO0FBQ2pCLFFBQU0sUUFBUSxRQUFPLElBQVAsTUFBZ0IsUUFBaEIsR0FBMkIsS0FBSyxTQUFMLENBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUEzQixHQUEyRCxPQUFPLElBQVAsQ0FBekU7QUFDQSxVQUFNLElBQUksS0FBSiw4Q0FBZ0QsS0FBaEQsT0FBTjtBQUNEO0FBQ0YsQ0FMTTtBQU9QOzs7Ozs7Ozs7OztBQU9PLElBQU0sT0FBTyxTQUFQLElBQU8sQ0FBQyxDQUFELEVBQVMsQ0FBVCxFQUEwQjtBQUM1QyxNQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsT0FBRCxFQUFzQjtBQUNqQyxZQUFRLE9BQVI7QUFDRSxXQUFLLEtBQUw7QUFDRSxlQUFPLENBQVA7O0FBQ0YsV0FBSyxLQUFMO0FBQ0UsZUFBTyxDQUFQOztBQUNGO0FBQ0UsY0FBTSxJQUFJLEtBQUosNEJBQThCLE9BQTlCLE9BQU47QUFOSjtBQVFELEdBVEQ7O0FBVUEsT0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQU8sSUFBUDtBQUNELENBYk07QUFlUDs7Ozs7Ozs7OztBQU1PLElBQU0sTUFBTSxTQUFOLEdBQU0sQ0FBQyxJQUFELEVBQXFCO0FBQ3RDLFlBQVUsSUFBVjtBQUNBLFNBQU8sS0FBSyxLQUFMLENBQVA7QUFDRCxDQUhNO0FBS1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNLE1BQU0sU0FBTixHQUFNLENBQUMsSUFBRCxFQUFxQjtBQUN0QyxZQUFVLElBQVY7QUFDQSxTQUFPLEtBQUssS0FBTCxDQUFQO0FBQ0QsQ0FITTtBQUtQOzs7Ozs7Ozs7QUFLTyxJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsSUFBRCxFQUF3QjtBQUM5QyxZQUFVLElBQVY7O0FBQ0EsTUFBTSxNQUFNLFNBQU4sR0FBTSxDQUFDLENBQUQsRUFBTztBQUNqQixRQUFJLENBQUMsT0FBTyxDQUFQLENBQUwsRUFBZ0I7QUFDZCxhQUFPLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7O0FBQ0QsUUFBTSxPQUFPLElBQUksQ0FBSixDQUFiO0FBQ0EsUUFBTSxRQUFRLElBQUksQ0FBSixDQUFkO0FBQ0Esc0JBQVcsSUFBSSxJQUFKLENBQVgsZUFBeUIsSUFBSSxLQUFKLENBQXpCO0FBQ0QsR0FQRDs7QUFTQSxTQUFPLElBQUksSUFBSixDQUFQO0FBQ0QsQ0FaTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbnR5cGUgTWVzc2FnZSA9ICdjYXInIHwgJ2Nkcic7XG5cbnR5cGUgUGFpciA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBhbnk7XG5cbi8qKlxuICogQ2hlY2sgaWYgc29tZXRoaW5nIGlzIHBhaXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwYWlyID0gY29ucyg1LCAnaGVsbG8nKTtcbiAqIGlzUGFpcihwYWlyKTsgLy8gdHJ1ZVxuICogaXNQYWlyKDUpOyAvLyBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgaXNQYWlyID0gKHBhaXI6ID9QYWlyKTogYm9vbGVhbiA9PiB0eXBlb2YgcGFpciA9PT0gJ2Z1bmN0aW9uJyAmJiBwYWlyLnBhaXI7XG5cbmV4cG9ydCBjb25zdCBjaGVja1BhaXIgPSAocGFpcjogP1BhaXIpOiB2b2lkID0+IHtcbiAgaWYgKCFpc1BhaXIocGFpcikpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBwYWlyID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHBhaXIsIG51bGwsIDIpIDogU3RyaW5nKHBhaXIpO1xuICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgbXVzdCBiZSBwYWlyLCBidXQgaXQgd2FzICcke3ZhbHVlfSdgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCdWlsZCBwYWlyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGFpciA9IGNvbnMoNSwgJ2hlbGxvJyk7XG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGFpciA9IGNvbnMoY29ucygxLCBudWxsKSwgJ3dvcmxkJyk7XG4gKi9cbmV4cG9ydCBjb25zdCBjb25zID0gKGE6IGFueSwgYjogYW55KTogUGFpciA9PiB7XG4gIGNvbnN0IHBhaXIgPSAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuICAgIHN3aXRjaCAobWVzc2FnZSkge1xuICAgICAgY2FzZSAnY2FyJzpcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICBjYXNlICdjZHInOlxuICAgICAgICByZXR1cm4gYjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtZXNzYWdlICcke21lc3NhZ2V9J2ApO1xuICAgIH1cbiAgfTtcbiAgcGFpci5wYWlyID0gdHJ1ZTtcbiAgcmV0dXJuIHBhaXI7XG59O1xuXG4vKipcbiAqIEdldCBjYXIgKGZpcnN0IGVsZW1lbnQpIGZyb20gcGFpclxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHBhaXIgPSBjb25zKDUsICdoZWxsbycpO1xuICogY2FyKHBhaXIpOyAvLyA1XG4gKi9cbmV4cG9ydCBjb25zdCBjYXIgPSAocGFpcjogUGFpcik6IGFueSA9PiB7XG4gIGNoZWNrUGFpcihwYWlyKTtcbiAgcmV0dXJuIHBhaXIoJ2NhcicpO1xufTtcblxuLyoqXG4gKiBHZXQgY2RyIChzZWNvbmQgZWxlbWVudCkgZnJvbSBwYWlyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGFpciA9IGNvbnMoNSwgJ2hlbGxvJyk7XG4gKiBjZHIocGFpcik7IC8vIGhlbGxvXG4gKi9cbmV4cG9ydCBjb25zdCBjZHIgPSAocGFpcjogUGFpcik6IGFueSA9PiB7XG4gIGNoZWNrUGFpcihwYWlyKTtcbiAgcmV0dXJuIHBhaXIoJ2NkcicpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHBhaXIgdG8gc3RyaW5nIChyZWN1cnNpdmVseSlcbiAqIEBleGFtcGxlXG4gKiB0b1N0cmluZyhjb25zKCcnLCAxMCkpOyAvLyAoJycsIDEwKVxuICovXG5leHBvcnQgY29uc3QgdG9TdHJpbmcgPSAocGFpcjogUGFpcik6IHN0cmluZyA9PiB7XG4gIGNoZWNrUGFpcihwYWlyKTtcbiAgY29uc3QgcmVjID0gKHApID0+IHtcbiAgICBpZiAoIWlzUGFpcihwKSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhwKTtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IGNhcihwKTtcbiAgICBjb25zdCByaWdodCA9IGNkcihwKTtcbiAgICByZXR1cm4gYCgke3JlYyhsZWZ0KX0sICR7cmVjKHJpZ2h0KX0pYDtcbiAgfTtcblxuICByZXR1cm4gcmVjKHBhaXIpO1xufTtcbiJdfQ==