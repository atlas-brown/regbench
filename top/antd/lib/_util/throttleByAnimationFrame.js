"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
function throttleByAnimationFrame(fn) {
  let requestId;
  const later = args => () => {
    requestId = null;
    fn.apply(void 0, (0, _toConsumableArray2.default)(args));
  };
  const throttled = (...args) => {
    if (requestId == null) {
      requestId = (0, _raf.default)(later(args));
    }
  };
  throttled.cancel = () => {
    _raf.default.cancel(requestId);
    requestId = null;
  };
  return throttled;
}
var _default = exports.default = throttleByAnimationFrame;