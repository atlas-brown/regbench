var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Linear, registerTickMethod, registerScale, getScale } from '@antv/scale';
import linearTickMethod from './linear-tick';
registerTickMethod('linear-strict-tick-method', linearTickMethod);
/**
 * 线性度量
 * @class
 */
var LinearStrict = /** @class */ (function (_super) {
    __extends(LinearStrict, _super);
    function LinearStrict(props) {
        var _this = _super.call(this, props) || this;
        _this.type = 'linear-strict';
        return _this;
    }
    LinearStrict.prototype.initCfg = function () {
        _super.prototype.initCfg.call(this);
        this.tickMethod = 'linear-strict-tick-method';
    };
    LinearStrict.prototype.calculateTicks = function () {
        var preNice = this.nice;
        // 强制按照计算出来的ticks，需要设置nice为true，不然会根据最值进行过滤
        this.nice = true;
        var ticks = _super.prototype.calculateTicks.call(this);
        this.nice = preNice;
        // 根据ticks设置最值
        if (ticks.length) {
            this.min = ticks[0];
            this.max = ticks[ticks.length - 1];
        }
        return ticks;
    };
    return LinearStrict;
}(Linear));
export default LinearStrict;
if (!getScale('linear-strict')) {
    registerScale('linear-strict', LinearStrict);
}
//# sourceMappingURL=scale.js.map