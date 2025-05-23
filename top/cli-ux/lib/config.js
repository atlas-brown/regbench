"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.Config = void 0;
const tslib_1 = require("tslib");
const semver = (0, tslib_1.__importStar)(require("semver"));
const version = semver.parse(require('../package.json').version);
const g = global;
const globals = g['cli-ux'] || (g['cli-ux'] = {});
const actionType = (Boolean(process.stderr.isTTY) &&
    !process.env.CI &&
    !['dumb', 'emacs-color'].includes(process.env.TERM) &&
    'spinner') || 'simple';
/* eslint-disable node/no-missing-require */
const Action = actionType === 'spinner' ? require('./action/spinner').default : require('./action/simple').default;
const PrideAction = actionType === 'spinner' ? require('./action/pride-spinner').default : require('./action/simple').default;
/* eslint-enable node/no-missing-require */
class Config {
    constructor() {
        this.outputLevel = 'info';
        this.action = new Action();
        this.prideAction = new PrideAction();
        this.errorsHandled = false;
        this.showStackTrace = true;
    }
    get debug() {
        return globals.debug || process.env.DEBUG === '*';
    }
    set debug(v) {
        globals.debug = v;
    }
    get context() {
        return globals.context || {};
    }
    set context(v) {
        globals.context = v;
    }
}
exports.Config = Config;
function fetch() {
    if (globals[version.major])
        return globals[version.major];
    globals[version.major] = new Config();
    return globals[version.major];
}
exports.config = fetch();
exports.default = exports.config;
