var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import _isArray from '@antv/util/lib/is-array';
import _deepMix from '@antv/util/lib/deep-mix';
import _each from '@antv/util/lib/each';
import warn from 'warning';
import shallowEqual from '../../utils/shallowEqual';
var ViewHelper = /** @class */ (function () {
    function ViewHelper(chart) {
        this.config = {};
        this.isRootView = false;
        this.chart = chart;
    }
    ViewHelper.prototype.creatViewInstance = function (options) {
        this.view = this.chart.createView(this.processOptions(options));
        // @ts-ignore
        this.view.rootChart = this.chart;
    };
    ViewHelper.prototype.getView = function () {
        return this.view;
    };
    ViewHelper.prototype.update = function (newConfig) {
        var _this = this;
        // 不需要重建实例
        var preData = this.config.data;
        var scale = newConfig.scale, animate = newConfig.animate, filter = newConfig.filter, visible = newConfig.visible;
        var _a = newConfig.data, data = _a === void 0 ? [] : _a;
        if (data.rows) {
            warn(!data.rows, 'bizcharts@4不支持 dataset数据格式，请使用data={dv.rows}');
            data = data.rows;
        }
        if (!this.view || _isArray(preData) && preData.length === 0) {
            // hack g2 数据切换的问题
            this.destroy();
            this.creatViewInstance(newConfig);
        }
        // 数据
        if (_isArray(preData)) {
            this.view.changeData(data);
            // 数据只做2级浅比较
            var isEqual_1 = true;
            if (preData.length !== data.length) {
                isEqual_1 = false;
            }
            else {
                preData.forEach(function (element, index) {
                    if (!shallowEqual(element, data[index])) {
                        isEqual_1 = false;
                    }
                });
            }
            if (!isEqual_1) {
                this.view.changeData(data);
            }
        }
        else {
            this.view.data(data);
        }
        // 比例尺
        this.view.scale(scale);
        // animate
        this.view.animate(animate);
        // filter
        _each(this.config.filter, function (it, index) {
            // 销毁
            if (_isArray(it)) {
                _this.view.filter(it[0], null);
            }
            else {
                _this.view.filter(index, null);
            }
        });
        _each(filter, function (it, index) {
            if (_isArray(it)) {
                _this.view.filter(it[0], it[1]);
            }
            else {
                _this.view.filter(index, it);
            }
        });
        // visible 
        if (visible) {
            this.view.show();
        }
        else {
            this.view.hide();
        }
        this.config = __assign(__assign({}, newConfig), { data: data });
    };
    ViewHelper.prototype.destroy = function () {
        if (this.view) {
            this.view.destroy();
            this.view = null;
        }
        this.config = {};
    };
    ViewHelper.prototype.processOptions = function (options) {
        var region = options.region, start = options.start, end = options.end, other = __rest(options, ["region", "start", "end"]);
        warn(!start, 'start 属性将在5.0后废弃，请使用 region={{ start: {x:0,y:0}}} 替代');
        warn(!end, 'end 属性将在5.0后废弃，请使用 region={{ end: {x:0,y:0}}} 替代');
        var regionCfg = _deepMix({ start: { x: 0, y: 0 }, end: { x: 1, y: 1 } }, { start: start, end: end }, region);
        return __assign(__assign({}, other), { region: regionCfg });
    };
    return ViewHelper;
}());
export default ViewHelper;
//# sourceMappingURL=viewHelper.js.map