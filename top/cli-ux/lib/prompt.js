"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anykey = exports.confirm = exports.prompt = void 0;
const tslib_1 = require("tslib");
const Errors = (0, tslib_1.__importStar)(require("@oclif/core/lib/errors"));
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const config_1 = (0, tslib_1.__importDefault)(require("./config"));
const deps_1 = (0, tslib_1.__importDefault)(require("./deps"));
function normal(options, retries = 100) {
    if (retries < 0)
        throw new Error('no input');
    return new Promise((resolve, reject) => {
        let timer;
        if (options.timeout) {
            timer = setTimeout(() => {
                process.stdin.pause();
                reject(new Error('Prompt timeout'));
            }, options.timeout);
            timer.unref();
        }
        process.stdin.setEncoding('utf8');
        process.stderr.write(options.prompt);
        process.stdin.resume();
        process.stdin.once('data', data => {
            if (timer)
                clearTimeout(timer);
            process.stdin.pause();
            data = data.trim();
            if (!options.default && options.required && data === '') {
                resolve(normal(options, retries - 1));
            }
            else {
                resolve(data || options.default);
            }
        });
    });
}
function getPrompt(name, type, defaultValue) {
    let prompt = '> ';
    if (defaultValue && type === 'hide') {
        defaultValue = '*'.repeat(defaultValue.length);
    }
    if (name && defaultValue)
        prompt = name + ' ' + chalk_1.default.yellow('[' + defaultValue + ']') + ': ';
    else if (name)
        prompt = `${name}: `;
    return prompt;
}
async function single(options) {
    var _a;
    const raw = process.stdin.isRaw;
    if (process.stdin.setRawMode)
        process.stdin.setRawMode(true);
    options.required = (_a = options.required) !== null && _a !== void 0 ? _a : false;
    const response = await normal(options);
    if (process.stdin.setRawMode)
        process.stdin.setRawMode(Boolean(raw));
    return response;
}
function replacePrompt(prompt) {
    process.stderr.write(deps_1.default.ansiEscapes.cursorHide + deps_1.default.ansiEscapes.cursorUp(1) + deps_1.default.ansiEscapes.cursorLeft + prompt +
        deps_1.default.ansiEscapes.cursorDown(1) + deps_1.default.ansiEscapes.cursorLeft + deps_1.default.ansiEscapes.cursorShow);
}
function _prompt(name, inputOptions = {}) {
    const prompt = getPrompt(name, inputOptions.type, inputOptions.default);
    const options = Object.assign({ isTTY: Boolean(process.env.TERM !== 'dumb' && process.stdin.isTTY), name,
        prompt, type: 'normal', required: true, default: '' }, inputOptions);
    switch (options.type) {
        case 'normal':
            return normal(options);
        case 'single':
            return single(options);
        case 'mask':
            return deps_1.default.passwordPrompt(options.prompt, {
                method: options.type,
                required: options.required,
                default: options.default,
            }).then((value) => {
                replacePrompt(getPrompt(name, 'hide', inputOptions.default));
                return value;
            });
        case 'hide':
            return deps_1.default.passwordPrompt(options.prompt, {
                method: options.type,
                required: options.required,
                default: options.default,
            });
        default:
            throw new Error(`unexpected type ${options.type}`);
    }
}
/**
 * prompt for input
 */
function prompt(name, options = {}) {
    return config_1.default.action.pauseAsync(() => {
        return _prompt(name, options);
    }, chalk_1.default.cyan('?'));
}
exports.prompt = prompt;
/**
 * confirmation prompt (yes/no)
 */
function confirm(message) {
    return config_1.default.action.pauseAsync(async () => {
        const confirm = async () => {
            const response = (await _prompt(message)).toLowerCase();
            if (['n', 'no'].includes(response))
                return false;
            if (['y', 'yes'].includes(response))
                return true;
            return confirm();
        };
        return confirm();
    }, chalk_1.default.cyan('?'));
}
exports.confirm = confirm;
/**
 * "press anykey to continue"
 */
async function anykey(message) {
    const tty = Boolean(process.stdin.setRawMode);
    if (!message) {
        message = tty ?
            `Press any key to continue or ${chalk_1.default.yellow('q')} to exit` :
            `Press enter to continue or ${chalk_1.default.yellow('q')} to exit`;
    }
    const char = await prompt(message, { type: 'single', required: false });
    if (tty)
        process.stderr.write('\n');
    if (char === 'q')
        Errors.error('quit');
    if (char === '\u0003')
        Errors.error('ctrl-c');
    return char;
}
exports.anykey = anykey;
