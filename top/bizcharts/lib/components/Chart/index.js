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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = void 0;
var react_1 = __importDefault(require("react"));
var debounce_1 = __importDefault(require("@antv/util/lib/debounce"));
var dom_1 = require("@antv/g2/lib/util/dom");
var resize_observer_1 = require("@juggle/resize-observer");
var ErrorBoundary_1 = __importStar(require("../../boundary/ErrorBoundary"));
var withContainer_1 = __importDefault(require("../../boundary/withContainer"));
var root_1 = __importDefault(require("../../context/root"));
var view_1 = __importDefault(require("../../context/view"));
var group_1 = __importDefault(require("../../context/group"));
var chartHelper_1 = __importDefault(require("./chartHelper"));
var util_1 = require("@antv/util");
var Chart = exports.Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart(props) {
        var _this = _super.call(this, props) || this;
        _this.isRootView = true;
        _this.resize = (0, debounce_1.default)(function () {
            var _a;
            var chart = _this.chartHelper.chart;
            if (_this.props.autoFit && _this.chartHelper.chart) {
                var width = (_a = (0, dom_1.getChartSize)(_this.props.container, _this.props.autoFit, chart.width, chart.height), _a.width), height = _a.height;
                if (chart.width !== width || chart.height !== height) {
                    chart.changeSize(width, height);
                    chart.emit('resize');
                }
            }
        }, 300);
        // 监听容器发生resize
        _this.resizeObserver = new resize_observer_1.ResizeObserver(_this.resize);
        _this.resizeObserver.observe(props.container);
        _this.chartHelper = new chartHelper_1.default();
        return _this;
    }
    Chart.prototype.componentDidMount = function () {
        if (this.isError) {
            this.chartHelper.destory();
        }
        else {
            this.chartHelper.render();
        }
    };
    Chart.prototype.componentDidUpdate = function () {
        var _a;
        if (this.isError) {
            this.chartHelper.destory();
            return;
        }
        // 更新图表大小
        var width = (_a = this.props, _a.width), height = _a.height, autoFit = _a.autoFit;
        // 已经自适应就不更新大小了
        if (!autoFit && this.chartHelper.chart) {
            if ((width >= 0 && width !== this.chartHelper.chart.width) ||
                (height >= 0 && height !== this.chartHelper.chart.height)) {
                var nextWidth = width || this.chartHelper.chart.width;
                var nextHeight = height || this.chartHelper.chart.height;
                // changeSize方法内部有调用render, 自动更新无需
                this.chartHelper.chart.changeSize(nextWidth, nextHeight);
                this.chartHelper.chart.emit('resize');
            }
            else {
                this.chartHelper.render();
            }
        }
        else {
            this.chartHelper.render();
        }
    };
    Chart.prototype.componentWillUnmount = function () {
        this.chartHelper.destory();
        this.resizeObserver.unobserve(this.props.container);
    };
    // 外部通过ref调用获取实例
    Chart.prototype.getG2Instance = function () {
        return this.chartHelper.chart;
    };
    Chart.prototype.render = function () {
        var _a;
        var _this = this;
        var placeholder = (_a = this.props, _a.placeholder), data = _a.data, errorContent = _a.errorContent;
        var ErrorBoundaryProps = this.props.ErrorBoundaryProps;
        if ((data === undefined || data.length === 0) && placeholder) {
            this.chartHelper.destory();
            var pl = placeholder === true ? (react_1.default.createElement("div", { style: { position: 'relative', top: '48%', color: '#aaa', textAlign: 'center' } }, "\u6682\u65E0\u6570\u636E")) : (placeholder);
            return react_1.default.createElement(ErrorBoundary_1.default, __assign({}, ErrorBoundaryProps), pl);
        }
        this.chartHelper.update(this.props);
        if (errorContent) {
            // 兼容 4.0 的用法
            ErrorBoundaryProps = __assign({ fallback: errorContent }, ErrorBoundaryProps);
        }
        else {
            // react-ErrorBoundary
            ErrorBoundaryProps = {
                FallbackComponent: ErrorBoundary_1.ErrorFallback,
            };
        }
        return (
        // @ts-ignore
        react_1.default.createElement(ErrorBoundary_1.default, __assign({}, ErrorBoundaryProps, { key: this.chartHelper.key, onError: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.isError = true;
                (0, util_1.isFunction)(ErrorBoundaryProps.onError) && ErrorBoundaryProps.onError.apply(ErrorBoundaryProps, args);
            }, onReset: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.isError = false;
                (0, util_1.isFunction)(ErrorBoundaryProps.onReset) && ErrorBoundaryProps.onReset.apply(ErrorBoundaryProps, args);
            }, resetKeys: [this.chartHelper.key], fallback: errorContent }),
            react_1.default.createElement(root_1.default.Provider, { value: this.chartHelper },
                react_1.default.createElement(view_1.default.Provider, { value: this.chartHelper.chart },
                    react_1.default.createElement(group_1.default.Provider, { value: this.chartHelper.extendGroup }, this.props.children)))));
    };
    Chart.defaultProps = {
        placeholder: false,
        visible: true,
        interactions: [],
        filter: [],
    };
    return Chart;
}(react_1.default.Component));
exports.default = (0, withContainer_1.default)(Chart);
//# sourceMappingURL=index.js.map