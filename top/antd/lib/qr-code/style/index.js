"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _fastColor = require("@ant-design/fast-color");
var _style = require("../../style");
var _internal = require("../../theme/internal");
const genQRCodeStyle = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    colorSplit
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: token.paddingSM,
      backgroundColor: token.colorWhite,
      borderRadius: token.borderRadiusLG,
      border: `${(0, _cssinjs.unit)(lineWidth)} ${lineType} ${colorSplit}`,
      position: 'relative',
      overflow: 'hidden',
      [`& > ${componentCls}-mask`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: token.colorText,
        lineHeight: token.lineHeight,
        background: token.QRCodeMaskBackgroundColor,
        textAlign: 'center',
        [`& > ${componentCls}-expired, & > ${componentCls}-scanned`]: {
          color: token.QRCodeTextColor
        }
      },
      '> canvas': {
        alignSelf: 'stretch',
        flex: 'auto',
        minWidth: 0
      },
      '&-icon': {
        marginBlockEnd: token.marginXS,
        fontSize: token.controlHeight
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent',
      padding: 0,
      borderRadius: 0
    }
  };
};
const prepareComponentToken = token => ({
  QRCodeMaskBackgroundColor: new _fastColor.FastColor(token.colorBgContainer).setA(0.96).toRgbString()
});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _internal.genStyleHooks)('QRCode', token => {
  const mergedToken = (0, _internal.mergeToken)(token, {
    QRCodeTextColor: token.colorText
  });
  return genQRCodeStyle(mergedToken);
}, prepareComponentToken);