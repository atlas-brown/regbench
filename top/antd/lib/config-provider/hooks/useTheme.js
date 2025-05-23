"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTheme;
var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));
var _isEqual = _interopRequireDefault(require("rc-util/lib/isEqual"));
var _warning = require("../../_util/warning");
var _internal = require("../../theme/internal");
var _useThemeKey = _interopRequireDefault(require("./useThemeKey"));
function useTheme(theme, parentTheme, config) {
  var _a, _b;
  const warning = (0, _warning.devUseWarning)('ConfigProvider');
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, _internal.defaultConfig), {
    hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : _internal.defaultConfig.hashed,
    cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
  }) : parentTheme;
  const themeKey = (0, _useThemeKey.default)();
  if (process.env.NODE_ENV !== 'production') {
    const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
    const validKey = !!(typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || themeKey);
    process.env.NODE_ENV !== "production" ? warning(!cssVarEnabled || validKey, 'breaking', 'Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.') : void 0;
  }
  return (0, _useMemo.default)(() => {
    var _a, _b;
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
    const mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: config === null || config === void 0 ? void 0 : config.prefixCls
    }, typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0, _isEqual.default)(prevTheme, nextTheme, true);
  }));
}