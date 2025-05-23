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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceDiff = void 0;
exports.diffSentences = diffSentences;
var base_js_1 = require("./base.js");
var SentenceDiff = /** @class */ (function (_super) {
    __extends(SentenceDiff, _super);
    function SentenceDiff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SentenceDiff.prototype.tokenize = function (value) {
        return value.split(/(?<=[.!?])(\s+|$)/);
    };
    return SentenceDiff;
}(base_js_1.default));
exports.sentenceDiff = new SentenceDiff();
function diffSentences(oldStr, newStr, options) {
    return exports.sentenceDiff.diff(oldStr, newStr, options);
}
