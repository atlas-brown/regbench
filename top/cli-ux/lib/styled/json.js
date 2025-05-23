"use strict";
// tslint:disable restrict-plus-operands
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const __1 = (0, tslib_1.__importDefault)(require(".."));
function styledJSON(obj) {
    const json = JSON.stringify(obj, null, 2);
    if (!chalk_1.default.level) {
        __1.default.info(json);
        return;
    }
    const cardinal = require('cardinal');
    const theme = require('cardinal/themes/jq');
    __1.default.info(cardinal.highlight(json, { json: true, theme }));
}
exports.default = styledJSON;
