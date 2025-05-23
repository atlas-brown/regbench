var _reduced = /*#__PURE__*/require("./_reduced.js");
var _xfBase = /*#__PURE__*/require("./_xfBase.js");
var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };
  return XTakeWhile;
}();
function _xtakeWhile(f) {
  return function (xf) {
    return new XTakeWhile(f, xf);
  };
}
module.exports = _xtakeWhile;