"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var is_string_1 = __importDefault(require("@antv/util/lib/is-string"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var base_1 = __importDefault(require("@antv/g2/lib/geometry/label/base"));
var view_1 = __importDefault(require("../context/view"));
var core_1 = require("../core");
var compareProps_1 = __importDefault(require("../utils/compareProps"));
var warning_1 = __importDefault(require("warning"));
require("./Label");
// 交互事件
require("./actions");
var cloneDeep_1 = __importDefault(require("../utils/cloneDeep"));
(0, core_1.registerGeometryLabel)('base', base_1.default);
var DEFAULT_SORT_GEOMETRYS = ['line', 'area'];
var GeomHelper = /** @class */ (function () {
    function GeomHelper() {
        this.config = {};
    }
    GeomHelper.prototype.setView = function (view) {
        this.view = view;
        this.rootChart = view.rootChart || view; // 顶层chart实例
    };
    GeomHelper.prototype.createGeomInstance = function (GemoBaseClassName, cfg) {
        this.geom = this.view[GemoBaseClassName](cfg);
        var sortable = cfg.sortable;
        // 复写原型
        // @ts-ignore
        this.geom.__beforeMapping = this.geom.beforeMapping;
        // @ts-ignore
        this.geom.beforeMapping = function (data) {
            var xScale = this.getXScale();
            if (sortable !== false && data && data[0] && DEFAULT_SORT_GEOMETRYS.includes(GemoBaseClassName) && ['time', 'timeCat'].includes(xScale.type)) {
                this.sort(data);
            }
            return this.__beforeMapping(data);
        };
        this.GemoBaseClassName = GemoBaseClassName;
    };
    GeomHelper.prototype.update = function (newConfig, component) {
        var _this = this;
        if (!this.geom) {
            this.setView(component.context);
            // 如果是时间类型则对数据排序
            this.createGeomInstance(component.GemoBaseClassName, newConfig);
            this.interactionTypes = component.interactionTypes;
        }
        (0, compareProps_1.default)(this.config, newConfig, ['position', 'shape', 'color', 'label', 'style', 'tooltip', 'size', 'animate', 'state', 'customInfo'], function (value, key) {
            var _a;
            // value 已被转为array
            (0, warning_1.default)(!(key === 'label' && value[0] === true), 'label 值类型错误，应为false | LabelOption | FieldString');
            (_a = _this.geom)[key].apply(_a, value);
        });
        (0, compareProps_1.default)(this.config, newConfig, ['adjust'], function (value, key) {
            if ((0, is_string_1.default)(value[0])) {
                _this.geom[key](value[0]);
            }
            else {
                _this.geom[key](value);
            }
        });
        // 状态设置
        this.geom.state(newConfig.state || {});
        // selected 和 active 使用 interacttion 替代
        // setElements 设置 selected 和 active 默认值
        this.rootChart.on('processElemens', function () {
            if ((0, is_function_1.default)(newConfig.setElements)) {
                newConfig.setElements(_this.geom.elements);
            }
        });
        // 交互
        // interaction 
        (0, compareProps_1.default)(this.config, newConfig, this.interactionTypes, function (value, key) {
            if (value[0]) {
                _this.rootChart.interaction(key);
            }
            else {
                _this.rootChart.removeInteraction(key);
            }
        });
        // 缓存
        this.config = (0, cloneDeep_1.default)(newConfig);
    };
    GeomHelper.prototype.destroy = function () {
        if (this.geom) {
            this.geom.destroy();
            this.geom = null;
        }
        this.config = {};
    };
    return GeomHelper;
}());
var BaseGeom = /** @class */ (function (_super) {
    __extends(BaseGeom, _super);
    function BaseGeom(props) {
        var _this = _super.call(this, props) || this;
        _this.interactionTypes = [];
        _this.geomHelper = new GeomHelper();
        return _this;
    }
    BaseGeom.prototype.componentWillUnmount = function () {
        this.geomHelper.destroy();
    };
    BaseGeom.prototype.render = function () {
        var _this = this;
        this.geomHelper.update(this.props, this);
        return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.Children.map(this.props.children, function (ele) {
            return react_1.default.isValidElement(ele) ? react_1.default.cloneElement(ele, { parentInstance: _this.geomHelper.geom }) : react_1.default.createElement(react_1.default.Fragment, null);
        }));
    };
    return BaseGeom;
}(react_1.default.Component));
BaseGeom.contextType = view_1.default;
exports.default = BaseGeom;
//# sourceMappingURL=Base.js.map