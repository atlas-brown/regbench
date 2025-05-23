"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewColumn = ViewColumn;
const globals_1 = require("../../globals");
/**
 * ViewColumn decorator is used to mark a specific class property as a view column.
 */
function ViewColumn(options) {
    return function (object, propertyName) {
        (0, globals_1.getMetadataArgsStorage)().columns.push({
            target: object.constructor,
            propertyName: propertyName,
            mode: "regular",
            options: options || {},
        });
    };
}

//# sourceMappingURL=ViewColumn.js.map
