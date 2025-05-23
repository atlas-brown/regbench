"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var circle_1 = __importDefault(require("@antv/g2/lib/facet/circle"));
var list_1 = __importDefault(require("@antv/g2/lib/facet/list"));
var matrix_1 = __importDefault(require("@antv/g2/lib/facet/matrix"));
var mirror_1 = __importDefault(require("@antv/g2/lib/facet/mirror"));
var rect_1 = __importDefault(require("@antv/g2/lib/facet/rect"));
var tree_1 = __importDefault(require("@antv/g2/lib/facet/tree"));
var useChartView_1 = __importDefault(require("../../hooks/useChartView"));
var useChartInstance_1 = __importDefault(require("../../hooks/useChartInstance"));
var core_1 = require("../../core");
(0, core_1.registerFacet)('rect', rect_1.default);
(0, core_1.registerFacet)('mirror', mirror_1.default);
(0, core_1.registerFacet)('list', list_1.default);
(0, core_1.registerFacet)('matrix', matrix_1.default);
(0, core_1.registerFacet)('circle', circle_1.default);
(0, core_1.registerFacet)('tree', tree_1.default);
function Facet(props) {
    var chart = (0, useChartView_1.default)();
    var chartInstance = (0, useChartInstance_1.default)();
    var type = props.type, children = props.children, cfg = __rest(props, ["type", "children"]);
    // @ts-ignore
    if (chart.facetInstance) {
        // 分面如果已存在不能重复执行，销毁重新配置
        // @ts-ignore
        chart.facetInstance.destroy();
        // @ts-ignore
        chart.facetInstance = null;
        // todo: 是否有必要区分数据更新和配置项更新，当前处理为全部都重绘
        chartInstance.forceReRender = true; // 重新渲染，不能更新
    }
    if ((0, is_function_1.default)(children)) {
        chart.facet(type, __assign(__assign({}, cfg), { 
            // @ts-ignore
            eachView: children }));
    }
    else {
        chart.facet(type, __assign({}, cfg));
    }
    return null;
}
exports.default = Facet;
//# sourceMappingURL=index.js.map