"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils = tslib_1.__importStar(require("./utils"));
var anonymousFunc = /(<anonymous>|Function):(\d+):(\d+)/;
/**
 * This is a centralized class of any error that could be thrown internally (mostly by the parser).
 * Besides standard .message it keeps some additional data like a path to the file where the error
 * occurred along with line and column numbers.
 *
 * @class
 * @extends Error
 * @type {module.LessError}
 *
 * @prop {string} type
 * @prop {string} filename
 * @prop {number} index
 * @prop {number} line
 * @prop {number} column
 * @prop {number} callLine
 * @prop {number} callExtract
 * @prop {string[]} extract
 *
 * @param {Object} e              - An error object to wrap around or just a descriptive object
 * @param {Object} fileContentMap - An object with file contents in 'contents' property (like importManager) @todo - move to fileManager?
 * @param {string} [currentFilename]
 */
var LessError = function (e, fileContentMap, currentFilename) {
    Error.call(this);
    var filename = e.filename || currentFilename;
    this.message = e.message;
    this.stack = e.stack;
    if (fileContentMap && filename) {
        var input = fileContentMap.contents[filename];
        var loc = utils.getLocation(e.index, input);
        var line = loc.line;
        var col = loc.column;
        var callLine = e.call && utils.getLocation(e.call, input).line;
        var lines = input ? input.split('\n') : '';
        this.type = e.type || 'Syntax';
        this.filename = filename;
        this.index = e.index;
        this.line = typeof line === 'number' ? line + 1 : null;
        this.column = col;
        if (!this.line && this.stack) {
            var found = this.stack.match(anonymousFunc);
            /**
             * We have to figure out how this environment stringifies anonymous functions
             * so we can correctly map plugin errors.
             *
             * Note, in Node 8, the output of anonymous funcs varied based on parameters
             * being present or not, so we inject dummy params.
             */
            var func = new Function('a', 'throw new Error()');
            var lineAdjust = 0;
            try {
                func();
            }
            catch (e) {
                var match = e.stack.match(anonymousFunc);
                lineAdjust = 1 - parseInt(match[2]);
            }
            if (found) {
                if (found[2]) {
                    this.line = parseInt(found[2]) + lineAdjust;
                }
                if (found[3]) {
                    this.column = parseInt(found[3]);
                }
            }
        }
        this.callLine = callLine + 1;
        this.callExtract = lines[callLine];
        this.extract = [
            lines[this.line - 2],
            lines[this.line - 1],
            lines[this.line]
        ];
    }
};
if (typeof Object.create === 'undefined') {
    var F = function () { };
    F.prototype = Error.prototype;
    LessError.prototype = new F();
}
else {
    LessError.prototype = Object.create(Error.prototype);
}
LessError.prototype.constructor = LessError;
/**
 * An overridden version of the default Object.prototype.toString
 * which uses additional information to create a helpful message.
 *
 * @param {Object} options
 * @returns {string}
 */
LessError.prototype.toString = function (options) {
    var _a;
    options = options || {};
    var isWarning = ((_a = this.type) !== null && _a !== void 0 ? _a : '').toLowerCase().includes('warning');
    var type = isWarning ? this.type : "".concat(this.type, "Error");
    var color = isWarning ? 'yellow' : 'red';
    var message = '';
    var extract = this.extract || [];
    var error = [];
    var stylize = function (str) { return str; };
    if (options.stylize) {
        var type_1 = typeof options.stylize;
        if (type_1 !== 'function') {
            throw Error("options.stylize should be a function, got a ".concat(type_1, "!"));
        }
        stylize = options.stylize;
    }
    if (this.line !== null) {
        if (!isWarning && typeof extract[0] === 'string') {
            error.push(stylize("".concat(this.line - 1, " ").concat(extract[0]), 'grey'));
        }
        if (typeof extract[1] === 'string') {
            var errorTxt = "".concat(this.line, " ");
            if (extract[1]) {
                errorTxt += extract[1].slice(0, this.column) +
                    stylize(stylize(stylize(extract[1].substr(this.column, 1), 'bold') +
                        extract[1].slice(this.column + 1), 'red'), 'inverse');
            }
            error.push(errorTxt);
        }
        if (!isWarning && typeof extract[2] === 'string') {
            error.push(stylize("".concat(this.line + 1, " ").concat(extract[2]), 'grey'));
        }
        error = "".concat(error.join('\n') + stylize('', 'reset'), "\n");
    }
    message += stylize("".concat(type, ": ").concat(this.message), color);
    if (this.filename) {
        message += stylize(' in ', color) + this.filename;
    }
    if (this.line) {
        message += stylize(" on line ".concat(this.line, ", column ").concat(this.column + 1, ":"), 'grey');
    }
    message += "\n".concat(error);
    if (this.callLine) {
        message += "".concat(stylize('from ', color) + (this.filename || ''), "/n");
        message += "".concat(stylize(this.callLine, 'grey'), " ").concat(this.callExtract, "/n");
    }
    return message;
};
exports.default = LessError;
//# sourceMappingURL=less-error.js.map