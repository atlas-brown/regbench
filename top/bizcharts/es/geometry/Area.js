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
import Area from '@antv/g2/lib/geometry/area';
import BaseGemo from './Base';
import { registerGeometry } from '../core';
import '@antv/g2/lib/geometry/shape/area';
registerGeometry('Area', Area);
var AreaGeom = /** @class */ (function (_super) {
    __extends(AreaGeom, _super);
    function AreaGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'area';
        return _this;
    }
    return AreaGeom;
}(BaseGemo));
export default AreaGeom;
//# sourceMappingURL=Area.js.map