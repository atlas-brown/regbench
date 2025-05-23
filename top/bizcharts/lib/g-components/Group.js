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
var react_1 = __importDefault(require("react"));
var for_in_1 = __importDefault(require("@antv/util/lib/for-in"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var debounce_1 = __importDefault(require("@antv/util/lib/debounce"));
var is_array_1 = __importDefault(require("@antv/util/lib/is-array"));
var unique_id_1 = __importDefault(require("@antv/util/lib/unique-id"));
var group_1 = __importStar(require("../context/group"));
var events_1 = require("./Base/events");
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isReady: false,
        };
        _this.handleRender = (0, debounce_1.default)(function () {
            if (!_this.instance) {
                var _a = _this.props, group = _a.group, zIndex = _a.zIndex, name_1 = _a.name;
                // children.push 中push 找不到
                _this.instance = group.chart.canvas.addGroup({ zIndex: zIndex, name: name_1 });
                group.chart.canvas.sort();
                _this.setState({ isReady: true });
            }
            else {
                _this.forceUpdate();
            }
        }, 300);
        _this.configGroup = function (props) {
            var _a;
            var rotate = props.rotate, animate = props.animate, rotateAtPoint = props.rotateAtPoint, scale = props.scale, translate = props.translate, move = props.move;
            if (rotate) {
                _this.instance.rotate(rotate);
            }
            if ((0, is_array_1.default)(rotateAtPoint)) {
                // @ts-ignore
                (_a = _this.instance).rotateAtPoint.apply(_a, rotateAtPoint);
            }
            if (scale) {
                _this.instance.rotate(scale);
            }
            if (translate) {
                _this.instance.translate(translate[0], translate[1]);
            }
            if (move) {
                _this.instance.move(move.x, move.y);
            }
            if (animate) {
                var toAttrs = animate.toAttrs, animateCfg = __rest(animate, ["toAttrs"]);
                _this.instance.animate(toAttrs, animateCfg);
            }
        };
        _this.bindEvents = function () {
            _this.instance.off();
            (0, for_in_1.default)(events_1.EVENTS, function (v, k) {
                if ((0, is_function_1.default)(_this.props[k])) {
                    _this.instance.on(v, _this.props[k]);
                }
            });
        };
        var group = props.group, zIndex = props.zIndex, name = props.name;
        _this.id = (0, unique_id_1.default)('group');
        if (group.isChartCanvas) {
            group.chart.on('afterrender', _this.handleRender);
        }
        else {
            _this.instance = group.addGroup({ zIndex: zIndex, name: name });
            _this.configGroup(props);
        }
        return _this;
    }
    Group.prototype.componentWillUnmount = function () {
        var group = this.props.group;
        if (group.isChartCanvas) {
            group.chart.off('afterrender', this.handleRender);
        }
        if (this.instance) {
            this.instance.remove(true);
        }
    };
    Group.prototype.getInstance = function () {
        return this.instance;
    };
    Group.prototype.render = function () {
        var group = this.props.group;
        if (this.instance) {
            this.instance.clear();
            this.bindEvents();
        }
        return (group.isChartCanvas && this.state.isReady) || !group.isChartCanvas ? (react_1.default.createElement(group_1.default.Provider, { value: this.instance },
            react_1.default.createElement(react_1.default.Fragment, { key: (0, unique_id_1.default)(this.id) }, this.props.children))) : (react_1.default.createElement(react_1.default.Fragment, null));
    };
    Group.defaultProps = {
        zIndex: 3,
    };
    return Group;
}(react_1.default.Component));
exports.default = (0, group_1.withGroupContext)(Group);
//# sourceMappingURL=Group.js.map