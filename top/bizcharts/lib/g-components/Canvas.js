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
var g_canvas_1 = require("@antv/g-canvas");
var g_svg_1 = require("@antv/g-svg");
var withContainer_1 = __importDefault(require("../boundary/withContainer"));
var ErrorBoundary_1 = __importDefault(require("../boundary/ErrorBoundary"));
var canvas_1 = __importDefault(require("../context/canvas"));
var group_1 = __importDefault(require("../context/group"));
var CanvasHelper = /** @class */ (function () {
    function CanvasHelper() {
    }
    CanvasHelper.prototype.createInstance = function (props) {
        var children = props.children, renderer = props.renderer, config = __rest(props, ["children", "renderer"]);
        if (renderer === 'svg') {
            this.instance = new g_svg_1.Canvas(__assign({}, config));
        }
        else {
            this.instance = new g_canvas_1.Canvas(__assign({}, config));
        }
    };
    CanvasHelper.prototype.update = function (newConfig) {
        if (!this.instance) {
            this.createInstance(newConfig);
        }
    };
    CanvasHelper.prototype.draw = function () {
        if (!this.instance) {
            return;
        }
        this.instance.draw();
    };
    CanvasHelper.prototype.destory = function () {
        if (this.instance) {
            this.instance.remove();
            this.instance = null;
        }
    };
    return CanvasHelper;
}());
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(props) {
        var _this = _super.call(this, props) || this;
        _this.helper = new CanvasHelper();
        return _this;
    }
    Canvas.prototype.componentDidMount = function () {
        this.helper.draw();
    };
    Canvas.prototype.componentWillUnmount = function () {
        this.helper.destory();
    };
    Canvas.prototype.getInstance = function () {
        return this.helper.instance;
    };
    Canvas.prototype.render = function () {
        this.helper.update(this.props);
        return (react_1.default.createElement(ErrorBoundary_1.default, __assign({}, this.props.ErrorBoundaryProps),
            react_1.default.createElement(canvas_1.default.Provider, { value: this.helper },
                react_1.default.createElement(group_1.default.Provider, { value: this.helper.instance },
                    react_1.default.createElement(react_1.default.Fragment, null, this.props.children)))));
    };
    return Canvas;
}(react_1.default.Component));
exports.default = (0, withContainer_1.default)(Canvas);
//# sourceMappingURL=Canvas.js.map