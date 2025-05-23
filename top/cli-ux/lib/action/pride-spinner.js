"use strict";
// tslint:disable restrict-plus-operands
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const supportsColor = (0, tslib_1.__importStar)(require("supports-color"));
const spinner_1 = (0, tslib_1.__importDefault)(require("./spinner"));
function color(s, frameIndex) {
    const prideColors = [
        chalk_1.default.keyword('pink'),
        chalk_1.default.red,
        chalk_1.default.keyword('orange'),
        chalk_1.default.yellow,
        chalk_1.default.green,
        chalk_1.default.cyan,
        chalk_1.default.blue,
        chalk_1.default.magenta,
    ];
    if (!supportsColor)
        return s;
    const has256 = supportsColor.stdout ? supportsColor.stdout.has256 : (process.env.TERM || '').includes('256');
    const prideColor = prideColors[frameIndex] || prideColors[0];
    return has256 ? prideColor(s) : chalk_1.default.magenta(s);
}
class PrideSpinnerAction extends spinner_1.default {
    _frame() {
        const frame = this.frames[this.frameIndex];
        this.frameIndex = ++this.frameIndex % this.frames.length;
        return color(frame, this.frameIndex);
    }
}
exports.default = PrideSpinnerAction;
