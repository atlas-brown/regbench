"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons/EyeOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcImage = _interopRequireDefault(require("rc-image"));
var _useZIndex = require("../_util/hooks/useZIndex");
var _motion = require("../_util/motion");
var _warning = require("../_util/warning");
var _context = require("../config-provider/context");
var _useCSSVarCls = _interopRequireDefault(require("../config-provider/hooks/useCSSVarCls"));
var _locale = require("../locale");
var _PreviewGroup = _interopRequireWildcard(require("./PreviewGroup"));
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Image = props => {
  const {
      prefixCls: customizePrefixCls,
      preview,
      className,
      rootClassName,
      style
    } = props,
    otherProps = __rest(props, ["prefixCls", "preview", "className", "rootClassName", "style"]);
  if (process.env.NODE_ENV !== 'production') {
    const warning = (0, _warning.devUseWarning)('Image');
    warning.deprecated(!(preview && typeof preview === 'object' && 'destroyOnClose' in preview), 'destroyOnClose', 'destroyOnHidden');
  }
  const {
    getPrefixCls,
    getPopupContainer: getContextPopupContainer,
    className: contextClassName,
    style: contextStyle,
    preview: contextPreview
  } = (0, _context.useComponentConfig)('image');
  const [imageLocale] = (0, _locale.useLocale)('Image');
  const prefixCls = getPrefixCls('image', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // Style
  const rootCls = (0, _useCSSVarCls.default)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls, rootCls);
  const mergedRootClassName = (0, _classnames.default)(rootClassName, hashId, cssVarCls, rootCls);
  const mergedClassName = (0, _classnames.default)(className, hashId, contextClassName);
  const [zIndex] = (0, _useZIndex.useZIndex)('ImagePreview', typeof preview === 'object' ? preview.zIndex : undefined);
  const mergedPreview = React.useMemo(() => {
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === 'object' ? preview : {};
    const {
        getContainer,
        closeIcon,
        rootClassName,
        destroyOnClose,
        destroyOnHidden
      } = _preview,
      restPreviewProps = __rest(_preview, ["getContainer", "closeIcon", "rootClassName", "destroyOnClose", "destroyOnHidden"]);
    return Object.assign(Object.assign({
      mask: (/*#__PURE__*/React.createElement("div", {
        className: `${prefixCls}-mask-info`
      }, /*#__PURE__*/React.createElement(_EyeOutlined.default, null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview)),
      icons: _PreviewGroup.icons
    }, restPreviewProps), {
      // TODO: In the future, destroyOnClose in rc-image needs to be upgrade to destroyOnHidden
      destroyOnClose: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyOnClose,
      rootClassName: (0, _classnames.default)(mergedRootClassName, rootClassName),
      getContainer: getContainer !== null && getContainer !== void 0 ? getContainer : getContextPopupContainer,
      transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', _preview.transitionName),
      maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', _preview.maskTransitionName),
      zIndex,
      closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : contextPreview === null || contextPreview === void 0 ? void 0 : contextPreview.closeIcon
    });
  }, [preview, imageLocale, contextPreview === null || contextPreview === void 0 ? void 0 : contextPreview.closeIcon]);
  const mergedStyle = Object.assign(Object.assign({}, contextStyle), style);
  return wrapCSSVar(/*#__PURE__*/React.createElement(_rcImage.default, Object.assign({
    prefixCls: prefixCls,
    preview: mergedPreview,
    rootClassName: mergedRootClassName,
    className: mergedClassName,
    style: mergedStyle
  }, otherProps)));
};
Image.PreviewGroup = _PreviewGroup.default;
if (process.env.NODE_ENV !== 'production') {
  Image.displayName = 'Image';
}
var _default = exports.default = Image;