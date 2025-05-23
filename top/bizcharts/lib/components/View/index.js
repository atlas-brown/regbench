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
exports.View = void 0;
var react_1 = __importDefault(require("react"));
var root_1 = __importDefault(require("../../context/root"));
var view_1 = __importDefault(require("../../context/view"));
var viewHelper_1 = __importDefault(require("./viewHelper"));
var View = exports.View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'view';
        return _this;
    }
    View.prototype.componentWillUnmount = function () {
        this.viewHelper.destroy();
        this.viewHelper = null;
    };
    View.prototype.render = function () {
        if (!this.viewHelper) {
            // @ts-ignore
            this.viewHelper = new viewHelper_1.default(this.context.chart);
        }
        this.viewHelper.update(this.props);
        return (react_1.default.createElement(view_1.default.Provider, { value: this.viewHelper.view },
            react_1.default.createElement(react_1.default.Fragment, null, this.props.children)));
    };
    View.defaultProps = {
        visible: true,
        preInteractions: [],
        filter: [],
    };
    return View;
}(react_1.default.Component));
View.contextType = root_1.default;
exports.default = View;
//# sourceMappingURL=index.js.map