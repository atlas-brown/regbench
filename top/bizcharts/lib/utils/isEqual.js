"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@antv/util");
var isEqual = function (value, other) {
    if ((0, util_1.isObject)(value) && (0, util_1.isObject)(other)) {
        var valueKeys = Object.keys(value);
        var otherKeys = Object.keys(other);
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < valueKeys.length; i++) {
            rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if ((0, util_1.isArray)(value) && (0, util_1.isArray)(other)) {
        if (value.length !== other.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if (value === other) {
        return true;
    }
    if (!value || !other) {
        return false;
    }
    return false;
};
exports.default = isEqual;
//# sourceMappingURL=isEqual.js.map