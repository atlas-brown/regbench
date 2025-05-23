"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getNextAppLoaderError", {
    enumerable: true,
    get: function() {
        return getNextAppLoaderError;
    }
});
const _path = require("path");
const _simpleWebpackError = require("./simpleWebpackError");
const _entries = require("../../../entries");
function getNextAppLoaderError(err, module, compiler) {
    try {
        if (!module.loaders[0].loader.includes((0, _entries.getAppLoader)())) {
            return false;
        }
        const file = (0, _path.relative)(compiler.context, module.buildInfo.route.absolutePagePath);
        return new _simpleWebpackError.SimpleWebpackError(file, err.message);
    } catch  {
        return false;
    }
}

//# sourceMappingURL=parseNextAppLoaderError.js.map