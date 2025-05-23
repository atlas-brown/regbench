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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react");
var ring_progress_1 = require("@antv/g2plot/lib/plots/ring-progress");
var createPlot_1 = __importDefault(require("../createPlot"));
exports.default = (0, createPlot_1.default)(ring_progress_1.RingProgress, 'RingProgressChart', function (opt) {
    // value 转为data，用于placeholder统一判断
    return __assign({ data: opt.percent, color: '#5B8FF9' }, opt);
});
//# sourceMappingURL=RingProgressChart.js.map