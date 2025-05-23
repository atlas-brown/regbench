"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var for_in_1 = __importDefault(require("@antv/util/lib/for-in"));
var is_function_1 = __importDefault(require("@antv/util/lib/is-function"));
var pickWithout_1 = __importDefault(require("../../utils/pickWithout"));
var constant_1 = require("../../utils/constant");
var cloneDeep_1 = __importDefault(require("../../utils/cloneDeep"));
var events_1 = require("./events");
var Helper = /** @class */ (function () {
    function Helper(shape) {
        this.shape = shape;
    }
    Helper.prototype.createInstance = function (props) {
        this.instance = props.group.addShape(this.shape, (0, pickWithout_1.default)(props, ['group', 'ctx']));
    };
    Helper.prototype.destroy = function () {
        if (this.instance) {
            this.instance.remove(true);
            this.instance = null;
        }
    };
    Helper.prototype.update = function (props) {
        var _this = this;
        var newConfig = (0, pickWithout_1.default)(props, __spreadArray([], constant_1.REACT_PIVATE_PROPS, true));
        this.destroy();
        this.createInstance(newConfig);
        var attrs = newConfig.attrs, animate = newConfig.animate, isClipShape = newConfig.isClipShape, visible = newConfig.visible, matrix = newConfig.matrix, others = __rest(newConfig, ["attrs", "animate", "isClipShape", "visible", "matrix"]);
        this.instance.attr(attrs);
        if (animate) {
            var toAttrs = animate.toAttrs, animateCfg = __rest(animate, ["toAttrs"]);
            this.instance.animate(toAttrs, animateCfg);
        }
        if (isClipShape) {
            this.instance.isClipShape();
        }
        if (visible === false) {
            this.instance.hide();
        }
        if (matrix) {
            this.instance.setMatrix(matrix);
        }
        (0, for_in_1.default)(events_1.EVENTS, function (v, k) {
            if ((0, is_function_1.default)(others[k])) {
                _this.instance.on(v, others[k]);
            }
        });
        this.config = (0, cloneDeep_1.default)(newConfig);
    };
    return Helper;
}());
exports.default = Helper;
//# sourceMappingURL=Helper.js.map