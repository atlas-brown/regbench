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
import React from 'react';
import _debounce from '@antv/util/lib/debounce';
import { getChartSize } from '@antv/g2/lib/util/dom';
import { ResizeObserver } from '@juggle/resize-observer';
import ErrorBoundary, { ErrorFallback } from '../../boundary/ErrorBoundary';
import withContainer from '../../boundary/withContainer';
import RootChartContext from '../../context/root';
import ChartViewContext from '../../context/view';
import GroupContext from '../../context/group';
import ChartHelper from './chartHelper';
import { isFunction } from '@antv/util';
export var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart(props) {
        var _this = _super.call(this, props) || this;
        _this.isRootView = true;
        _this.resize = _debounce(function () {
            var _a;
            var chart = _this.chartHelper.chart;
            if (_this.props.autoFit && _this.chartHelper.chart) {
                var width = (_a = getChartSize(_this.props.container, _this.props.autoFit, chart.width, chart.height), _a.width), height = _a.height;
                if (chart.width !== width || chart.height !== height) {
                    chart.changeSize(width, height);
                    chart.emit('resize');
                }
            }
        }, 300);
        // 监听容器发生resize
        _this.resizeObserver = new ResizeObserver(_this.resize);
        _this.resizeObserver.observe(props.container);
        _this.chartHelper = new ChartHelper();
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
            var pl = placeholder === true ? (React.createElement("div", { style: { position: 'relative', top: '48%', color: '#aaa', textAlign: 'center' } }, "\u6682\u65E0\u6570\u636E")) : (placeholder);
            return React.createElement(ErrorBoundary, __assign({}, ErrorBoundaryProps), pl);
        }
        this.chartHelper.update(this.props);
        if (errorContent) {
            // 兼容 4.0 的用法
            ErrorBoundaryProps = __assign({ fallback: errorContent }, ErrorBoundaryProps);
        }
        else {
            // react-ErrorBoundary
            ErrorBoundaryProps = {
                FallbackComponent: ErrorFallback,
            };
        }
        return (
        // @ts-ignore
        React.createElement(ErrorBoundary, __assign({}, ErrorBoundaryProps, { key: this.chartHelper.key, onError: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.isError = true;
                isFunction(ErrorBoundaryProps.onError) && ErrorBoundaryProps.onError.apply(ErrorBoundaryProps, args);
            }, onReset: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.isError = false;
                isFunction(ErrorBoundaryProps.onReset) && ErrorBoundaryProps.onReset.apply(ErrorBoundaryProps, args);
            }, resetKeys: [this.chartHelper.key], fallback: errorContent }),
            React.createElement(RootChartContext.Provider, { value: this.chartHelper },
                React.createElement(ChartViewContext.Provider, { value: this.chartHelper.chart },
                    React.createElement(GroupContext.Provider, { value: this.chartHelper.extendGroup }, this.props.children)))));
    };
    Chart.defaultProps = {
        placeholder: false,
        visible: true,
        interactions: [],
        filter: [],
    };
    return Chart;
}(React.Component));
export default withContainer(Chart);
//# sourceMappingURL=index.js.map