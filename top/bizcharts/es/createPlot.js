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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useCallback, useEffect, useRef, useState } from 'react';
import _uniqId from '@antv/util/lib/unique-id';
import _isFunction from '@antv/util/lib/is-function';
import withContainer from './boundary/withContainer';
import ErrorBoundary, { ErrorFallback } from './boundary/ErrorBoundary';
import RootChartContext from './context/root';
import ChartViewContext from './context/view';
import { visibleHelper } from './utils/plotTools';
import shallowEqual from './utils/shallowEqual';
import pickWithout from './utils/pickWithout';
import cloneDeep from './utils/cloneDeep';
import { REACT_PIVATE_PROPS } from './utils/constant';
import { ResizeObserver } from '@juggle/resize-observer';
import getElementSize from './utils/getElementSize';
import { polyfillEvents, polyfillTitleEvent, polyfillDescriptionEvent, } from './plots/core/polyfill';
import { debounce, isArray, isFunction, isNil } from '@antv/util';
import isEqual from './utils/isEqual';
import warn from 'warning';
// 国际化处理
import { registerLocale } from '@antv/g2plot/lib/core/locale';
import { EN_US_LOCALE } from '@antv/g2plot/lib/locales/en_US';
import { ZH_CN_LOCALE } from '@antv/g2plot/lib/locales/zh_CN';
/** default locale register */
registerLocale('en-US', EN_US_LOCALE);
registerLocale('zh-CN', ZH_CN_LOCALE);
var DEFAULT_PLACEHOLDER = (React.createElement("div", { style: { position: 'absolute', top: '48%', left: '50%', color: '#aaa', textAlign: 'center' } }, "\u6682\u65E0\u6570\u636E"));
var DESCRIPTION_STYLE = {
    padding: '8px 24px 10px 10px',
    fontFamily: 'PingFang SC',
    fontSize: 12,
    color: 'grey',
    textAlign: 'left',
    lineHeight: '16px',
};
var TITLE_STYLE = {
    padding: '10px 0 0 10px',
    fontFamily: 'PingFang SC',
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    lineHeight: '20px',
};
var BasePlot = /** @class */ (function (_super) {
    __extends(BasePlot, _super);
    function BasePlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._context = { chart: null };
        return _this;
    }
    BasePlot.prototype.componentDidMount = function () {
        if (this.props.children && this.g2Instance.chart) {
            this.g2Instance.chart.render();
        }
        polyfillEvents(this.g2Instance, {}, this.props);
        this.g2Instance.data = this.props.data;
        this.preConfig = cloneDeep(pickWithout(this.props, __spreadArray(__spreadArray([], REACT_PIVATE_PROPS, true), [
            'container',
            'PlotClass',
            'onGetG2Instance',
            'data',
        ], false)));
    };
    BasePlot.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.children && this.g2Instance.chart) {
            this.g2Instance.chart.render();
        }
        // 兼容1.0 的events写法
        polyfillEvents(this.g2Instance, prevProps, this.props);
    };
    BasePlot.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this.g2Instance) {
            setTimeout(function () {
                _this.g2Instance.destroy();
                _this.g2Instance = null;
                _this._context.chart = null;
            }, 0);
        }
    };
    BasePlot.prototype.getG2Instance = function () {
        return this.g2Instance;
    };
    BasePlot.prototype.getChartView = function () {
        return this.g2Instance.chart;
    };
    BasePlot.prototype.checkInstanceReady = function () {
        // 缓存配置
        var currentConfig = pickWithout(this.props, __spreadArray(__spreadArray([], REACT_PIVATE_PROPS, true), [
            'container',
            'PlotClass',
            'onGetG2Instance',
            'data',
        ], false));
        if (!this.g2Instance) {
            this.initInstance();
            this.g2Instance.render();
        }
        else if (this.shouldReCreate()) {
            // forceupdate
            this.g2Instance.destroy();
            this.initInstance();
            this.g2Instance.render();
        }
        else if (this.diffConfig()) {
            // options更新
            this.g2Instance.update(__assign(__assign({}, currentConfig), { data: this.props.data }));
        }
        else if (this.diffData()) {
            this.g2Instance.changeData(this.props.data);
        }
        this.preConfig = cloneDeep(currentConfig);
        this.g2Instance.data = this.props.data;
    };
    BasePlot.prototype.initInstance = function () {
        var _a = this.props, container = _a.container, PlotClass = _a.PlotClass, onGetG2Instance = _a.onGetG2Instance, children = _a.children, options = __rest(_a, ["container", "PlotClass", "onGetG2Instance", "children"]);
        this.g2Instance = new PlotClass(container, options);
        this._context.chart = this.g2Instance;
        if (_isFunction(onGetG2Instance)) {
            onGetG2Instance(this.g2Instance);
        }
    };
    BasePlot.prototype.diffConfig = function () {
        // 只有数据更新就不重绘，其他全部直接重新创建实例。
        var preConfig = this.preConfig || {};
        var currentConfig = pickWithout(this.props, __spreadArray(__spreadArray([], REACT_PIVATE_PROPS, true), [
            'container',
            'PlotClass',
            'onGetG2Instance',
            'data',
        ], false));
        return !isEqual(preConfig, currentConfig);
    };
    BasePlot.prototype.diffData = function () {
        // 只有数据更新就不重绘，其他全部直接重新创建实例。
        var preData = this.g2Instance.data;
        var data = this.props.data;
        if (!isArray(preData) || !isArray(data)) {
            // 非数组直接对比
            return !preData === data;
        }
        if (preData.length !== data.length) {
            return true;
        }
        var isEqual = true;
        preData.forEach(function (element, index) {
            if (!shallowEqual(element, data[index])) {
                isEqual = false;
            }
        });
        return !isEqual;
    };
    BasePlot.prototype.shouldReCreate = function () {
        var forceUpdate = this.props.forceUpdate;
        if (forceUpdate) {
            return true;
        }
        return false;
    };
    BasePlot.prototype.render = function () {
        this.checkInstanceReady();
        var chartView = this.getChartView();
        return (React.createElement(RootChartContext.Provider, { value: this._context },
            React.createElement(ChartViewContext.Provider, { value: chartView },
                React.createElement("div", { key: _uniqId('plot-chart') }, this.props.children))));
    };
    return BasePlot;
}(React.Component));
var BxPlot = withContainer(BasePlot);
function createPlot(PlotClass, name, transCfg) {
    if (transCfg === void 0) { transCfg = function (cfg) { return cfg; }; }
    var Com = React.forwardRef(function (props, ref) {
        // containerStyle 应该删掉，可以通过containerProps.style 配置不影响用户暂时保留
        var title = props.title, description = props.description, _a = props.autoFit, autoFit = _a === void 0 ? true : _a, forceFit = props.forceFit, _b = props.errorContent, errorContent = _b === void 0 ? ErrorFallback : _b, containerStyle = props.containerStyle, containerProps = props.containerProps, placeholder = props.placeholder, ErrorBoundaryProps = props.ErrorBoundaryProps, isMaterial = props.isMaterial, cfg = __rest(props, ["title", "description", "autoFit", "forceFit", "errorContent", "containerStyle", "containerProps", "placeholder", "ErrorBoundaryProps", "isMaterial"]);
        var realCfg = transCfg(cfg);
        var container = useRef();
        var titleDom = useRef();
        var descDom = useRef();
        var _c = useState(0), chartHeight = _c[0], setChartHeight = _c[1];
        var resizeObserver = useRef();
        var resizeFn = useCallback(function () {
            if (!container.current) {
                return;
            }
            var containerSize = getElementSize(container.current, props);
            var titleSize = titleDom.current
                ? getElementSize(titleDom.current)
                : { width: 0, height: 0 };
            var descSize = descDom.current ? getElementSize(descDom.current) : { width: 0, height: 0 };
            var ch = containerSize.height - titleSize.height - descSize.height;
            if (ch === 0) {
                // 高度为0 是因为用户没有设置高度
                ch = 350;
            }
            if (ch < 20) {
                // 设置了高度，但是太小了
                ch = 20;
            }
            // 误差达到1像素后再重置，防止精度问题
            if (Math.abs(chartHeight - ch) > 1) {
                setChartHeight(ch);
            }
        }, [container.current, titleDom.current, chartHeight, descDom.current]);
        var resize = useCallback(debounce(resizeFn, 500), [resizeFn]);
        var FallbackComponent = React.isValidElement(errorContent)
            ? function () { return errorContent; }
            : errorContent;
        // 每个图表的showPlaceholder 逻辑不一样，有的是判断value，该方法为静态方法
        if (placeholder && !realCfg.data) {
            var pl = placeholder === true ? DEFAULT_PLACEHOLDER : placeholder;
            // plot 默认是400px高度
            return (React.createElement(ErrorBoundary, __assign({ FallbackComponent: FallbackComponent }, ErrorBoundaryProps),
                React.createElement("div", { style: {
                        width: props.width || '100%',
                        height: props.height || 400,
                        textAlign: 'center',
                        position: 'relative',
                    } }, pl)));
        }
        var titleCfg = visibleHelper(title, false);
        var descriptionCfg = visibleHelper(description, false);
        var titleStyle = __assign(__assign({}, TITLE_STYLE), titleCfg.style);
        var descStyle = __assign(__assign(__assign({}, DESCRIPTION_STYLE), descriptionCfg.style), { top: titleStyle.height });
        var isAutoFit = forceFit !== undefined ? forceFit : autoFit;
        if (!isNil(forceFit)) {
            warn(false, '请使用autoFit替代forceFit');
        }
        useEffect(function () {
            if (!isAutoFit) {
                if (container.current) {
                    resizeFn();
                    resizeObserver.current && resizeObserver.current.unobserve(container.current);
                }
            }
            else {
                if (container.current) {
                    resizeFn();
                    resizeObserver.current = new ResizeObserver(resize);
                    resizeObserver.current.observe(container.current);
                }
                else {
                    setChartHeight(0);
                }
            }
            return function () {
                resizeObserver.current &&
                    container.current &&
                    resizeObserver.current.unobserve(container.current);
            };
        }, [container.current, isAutoFit]);
        return (React.createElement(ErrorBoundary, __assign({ FallbackComponent: FallbackComponent }, ErrorBoundaryProps),
            React.createElement("div", __assign({ ref: function (el) {
                    container.current = el; // null or div
                    // 合并ref，供搭建引擎消费。原来的ref已使用，搭建引擎需要最外层div。
                    if (isMaterial) {
                        if (isFunction(ref)) {
                            ref(el);
                        }
                        else if (ref) {
                            ref.current = el;
                        }
                    }
                }, className: "bizcharts-plot" }, containerProps, { style: {
                    position: 'relative',
                    height: props.height || '100%',
                    width: props.width || '100%',
                } }),
                titleCfg.visible && (React.createElement("div", __assign({ ref: titleDom }, polyfillTitleEvent(realCfg), { className: "bizcharts-plot-title", style: titleStyle }), titleCfg.text)),
                descriptionCfg.visible && (React.createElement("div", __assign({ ref: descDom }, polyfillDescriptionEvent(realCfg), { className: "bizcharts-plot-description", style: descStyle }), descriptionCfg.text)),
                !!chartHeight && (React.createElement(BxPlot
                // API 统一
                , __assign({ 
                    // API 统一
                    appendPadding: [10, 5, 10, 10], autoFit: isAutoFit, 
                    // 注意：isMaterial ref 吐的是最外层div，供ali-lowcode-engine消费。原先的消费方式不能breack。
                    ref: isMaterial ? undefined : ref }, realCfg, { PlotClass: PlotClass, containerStyle: __assign(__assign({}, containerStyle), { height: chartHeight }) }))))));
    });
    Com.displayName = name || PlotClass.name;
    return Com;
}
export default createPlot;
//# sourceMappingURL=createPlot.js.map