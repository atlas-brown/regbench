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
import React from 'react';
import Area from './Area';
import Edge from './Edge';
import Heatmap from './Heatmap';
import Interval from './Interval';
import Line from './Line';
import Point from './Point';
import Polygon from './Polygon';
import LineAdvance from './LineAdvance';
import warn from 'warning';
var GEOM_MAP = {
    area: Area,
    edge: Edge,
    heatmap: Heatmap,
    interval: Interval,
    line: Line,
    point: Point,
    polygon: Polygon,
    // bx 做了预设的图形
    'line-advance': LineAdvance,
};
export default function (props) {
    var type = props.type, cfg = __rest(props, ["type"]);
    var Geom = GEOM_MAP[type];
    if (Geom)
        return React.createElement(Geom, __assign({}, cfg));
    warn(false, 'Only support the below type: area|edge|heatmap|interval|line|point|polygon|line-advance');
    return null;
}
//# sourceMappingURL=index.js.map