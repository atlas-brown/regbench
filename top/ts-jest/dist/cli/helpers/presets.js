"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsWIthBabel = exports.jsWithTs = exports.defaults = exports.allPresets = void 0;
const definePreset = (fullName) => ({
    fullName,
    get name() {
        return this.isDefault ? 'ts-jest' : fullName;
    },
    get label() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return fullName.split('/').pop();
    },
    get jsVarName() {
        return this.isDefault
            ? 'defaults'
            : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                fullName
                    .split('/')
                    .pop()
                    // eslint-disable-next-line no-useless-escape
                    .replace(/\-([a-z])/g, (_, l) => l.toUpperCase());
    },
    get value() {
        return require(`../../../${fullName.replace(/^ts-jest\//, '')}/jest-preset`);
    },
    jsImport(varName = 'tsjPreset') {
        return `const { ${this.jsVarName}: ${varName} } = require('ts-jest/presets')`;
    },
    get isDefault() {
        return fullName === "ts-jest/presets/default" /* JestPresetNames.default */;
    },
});
/** @internal */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.allPresets = {};
/** @internal */
exports.defaults = (exports.allPresets["ts-jest/presets/default" /* JestPresetNames.default */] = definePreset("ts-jest/presets/default" /* JestPresetNames.default */));
/** @internal */
exports.jsWithTs = (exports.allPresets["ts-jest/presets/js-with-ts" /* JestPresetNames.jsWithTs */] = definePreset("ts-jest/presets/js-with-ts" /* JestPresetNames.jsWithTs */));
/** @internal */
exports.jsWIthBabel = (exports.allPresets["ts-jest/presets/js-with-babel" /* JestPresetNames.jsWIthBabel */] = definePreset("ts-jest/presets/js-with-babel" /* JestPresetNames.jsWIthBabel */));
