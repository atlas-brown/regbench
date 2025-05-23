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
var line_1 = __importDefault(require("@antv/g2/lib/geometry/line"));
require("@antv/g2/lib/geometry/shape/line/step");
var Base_1 = __importDefault(require("./Base"));
var core_1 = require("../core");
require("@antv/g2/lib/geometry/shape/line/step");
(0, core_1.registerGeometry)('Line', line_1.default);
var LineGeom = /** @class */ (function (_super) {
    __extends(LineGeom, _super);
    function LineGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'line';
        return _this;
    }
    return LineGeom;
}(Base_1.default));
exports.default = LineGeom;
//# sourceMappingURL=Line.js.map