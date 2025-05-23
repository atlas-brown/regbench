"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _style = require("../../style");
var _fade = require("../../style/motion/fade");
var _internal = require("../../theme/internal");
var _util = _interopRequireDefault(require("../util"));
var _keyframes = _interopRequireDefault(require("./keyframes"));
// ============================== Group ==============================
const floatButtonGroupStyle = token => {
  const {
    antCls,
    componentCls,
    floatButtonSize,
    margin,
    borderRadiusLG,
    borderRadiusSM,
    badgeOffset,
    floatButtonBodyPadding,
    zIndexPopupBase,
    calc
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  return {
    [groupPrefixCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      zIndex: zIndexPopupBase,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      position: 'fixed',
      height: 'auto',
      boxShadow: 'none',
      minWidth: floatButtonSize,
      minHeight: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      bottom: token.floatButtonInsetBlockEnd,
      borderRadius: borderRadiusLG,
      [`${groupPrefixCls}-wrap`]: {
        zIndex: -1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      },
      [`&${groupPrefixCls}-rtl`]: {
        direction: 'rtl'
      },
      [componentCls]: {
        position: 'static'
      }
    }),
    [`${groupPrefixCls}-top > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'column',
      top: 'auto',
      bottom: calc(floatButtonSize).add(margin).equal(),
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: margin,
        bottom: calc(margin).mul(-1).equal()
      }
    },
    [`${groupPrefixCls}-bottom > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'column',
      top: calc(floatButtonSize).add(margin).equal(),
      bottom: 'auto',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: margin,
        top: calc(margin).mul(-1).equal()
      }
    },
    [`${groupPrefixCls}-right > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'row',
      left: {
        _skip_check_: true,
        value: calc(floatButtonSize).add(margin).equal()
      },
      right: {
        _skip_check_: true,
        value: 'auto'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: margin,
        height: '100%',
        left: {
          _skip_check_: true,
          value: calc(margin).mul(-1).equal()
        }
      }
    },
    [`${groupPrefixCls}-left > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'row',
      left: {
        _skip_check_: true,
        value: 'auto'
      },
      right: {
        _skip_check_: true,
        value: calc(floatButtonSize).add(margin).equal()
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: margin,
        height: '100%',
        right: {
          _skip_check_: true,
          value: calc(margin).mul(-1).equal()
        }
      }
    },
    [`${groupPrefixCls}-circle`]: {
      gap: margin,
      [`${groupPrefixCls}-wrap`]: {
        gap: margin
      }
    },
    [`${groupPrefixCls}-square`]: {
      [`${componentCls}-square`]: {
        padding: 0,
        borderRadius: 0,
        [`&${groupPrefixCls}-trigger`]: {
          borderRadius: borderRadiusLG
        },
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderBottom: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        },
        [`${antCls}-badge`]: {
          [`${antCls}-badge-count`]: {
            top: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal(),
            insetInlineEnd: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal()
          }
        }
      },
      [`${groupPrefixCls}-wrap`]: {
        borderRadius: borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        [`${componentCls}-square`]: {
          boxShadow: 'none',
          borderRadius: 0,
          padding: floatButtonBodyPadding,
          [`${componentCls}-body`]: {
            width: token.floatButtonBodySize,
            height: token.floatButtonBodySize,
            borderRadius: borderRadiusSM
          }
        }
      }
    },
    [`${groupPrefixCls}-top > ${groupPrefixCls}-wrap, ${groupPrefixCls}-bottom > ${groupPrefixCls}-wrap`]: {
      [`> ${componentCls}-square`]: {
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderBottom: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        }
      }
    },
    [`${groupPrefixCls}-left > ${groupPrefixCls}-wrap, ${groupPrefixCls}-right > ${groupPrefixCls}-wrap`]: {
      [`> ${componentCls}-square`]: {
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        '&:last-child': {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderInlineEnd: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        }
      }
    },
    [`${groupPrefixCls}-circle-shadow`]: {
      boxShadow: 'none'
    },
    [`${groupPrefixCls}-square-shadow`]: {
      boxShadow: token.boxShadowSecondary,
      [`${componentCls}-square`]: {
        boxShadow: 'none',
        padding: floatButtonBodyPadding,
        [`${componentCls}-body`]: {
          width: token.floatButtonBodySize,
          height: token.floatButtonBodySize,
          borderRadius: borderRadiusSM
        }
      }
    }
  };
};
// ============================== Shared ==============================
const sharedFloatButtonStyle = token => {
  const {
    antCls,
    componentCls,
    floatButtonBodyPadding,
    floatButtonIconSize,
    floatButtonSize,
    borderRadiusLG,
    badgeOffset,
    dotOffsetInSquare,
    dotOffsetInCircle,
    zIndexPopupBase,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      border: 'none',
      position: 'fixed',
      cursor: 'pointer',
      zIndex: zIndexPopupBase,
      // Do not remove the 'display: block' here.
      // Deleting it will cause marginBottom to become ineffective.
      // Ref: https://github.com/ant-design/ant-design/issues/44700
      display: 'block',
      width: floatButtonSize,
      height: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      bottom: token.floatButtonInsetBlockEnd,
      boxShadow: token.boxShadowSecondary,
      // Pure Panel
      '&-pure': {
        position: 'relative',
        inset: 'auto'
      },
      '&:empty': {
        display: 'none'
      },
      [`${antCls}-badge`]: {
        width: '100%',
        height: '100%',
        [`${antCls}-badge-count`]: {
          transform: 'translate(0, 0)',
          transformOrigin: 'center',
          top: calc(badgeOffset).mul(-1).equal(),
          insetInlineEnd: calc(badgeOffset).mul(-1).equal()
        }
      },
      [`${componentCls}-body`]: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: `all ${token.motionDurationMid}`,
        [`${componentCls}-content`]: {
          overflow: 'hidden',
          textAlign: 'center',
          minHeight: floatButtonSize,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: `${(0, _cssinjs.unit)(calc(floatButtonBodyPadding).div(2).equal())} ${(0, _cssinjs.unit)(floatButtonBodyPadding)}`,
          [`${componentCls}-icon`]: {
            textAlign: 'center',
            margin: 'auto',
            width: floatButtonIconSize,
            fontSize: floatButtonIconSize,
            lineHeight: 1
          }
        }
      }
    }),
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    },
    [`${componentCls}-circle`]: {
      height: floatButtonSize,
      borderRadius: '50%',
      [`${antCls}-badge`]: {
        [`${antCls}-badge-dot`]: {
          top: dotOffsetInCircle,
          insetInlineEnd: dotOffsetInCircle
        }
      },
      [`${componentCls}-body`]: {
        borderRadius: '50%'
      }
    },
    [`${componentCls}-square`]: {
      height: 'auto',
      minHeight: floatButtonSize,
      borderRadius: borderRadiusLG,
      [`${antCls}-badge`]: {
        [`${antCls}-badge-dot`]: {
          top: dotOffsetInSquare,
          insetInlineEnd: dotOffsetInSquare
        }
      },
      [`${componentCls}-body`]: {
        height: 'auto',
        borderRadius: borderRadiusLG
      }
    },
    [`${componentCls}-default`]: {
      backgroundColor: token.floatButtonBackgroundColor,
      transition: `background-color ${token.motionDurationMid}`,
      [`${componentCls}-body`]: {
        backgroundColor: token.floatButtonBackgroundColor,
        transition: `background-color ${token.motionDurationMid}`,
        '&:hover': {
          backgroundColor: token.colorFillContent
        },
        [`${componentCls}-content`]: {
          [`${componentCls}-icon`]: {
            color: token.colorText
          },
          [`${componentCls}-description`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: (0, _cssinjs.unit)(token.fontSizeLG),
            color: token.colorText,
            fontSize: token.fontSizeSM
          }
        }
      }
    },
    [`${componentCls}-primary`]: {
      backgroundColor: token.colorPrimary,
      [`${componentCls}-body`]: {
        backgroundColor: token.colorPrimary,
        transition: `background-color ${token.motionDurationMid}`,
        '&:hover': {
          backgroundColor: token.colorPrimaryHover
        },
        [`${componentCls}-content`]: {
          [`${componentCls}-icon`]: {
            color: token.colorTextLightSolid
          },
          [`${componentCls}-description`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: (0, _cssinjs.unit)(token.fontSizeLG),
            color: token.colorTextLightSolid,
            fontSize: token.fontSizeSM
          }
        }
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => ({
  dotOffsetInCircle: (0, _util.default)(token.controlHeightLG / 2),
  dotOffsetInSquare: (0, _util.default)(token.borderRadiusLG)
});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _internal.genStyleHooks)('FloatButton', token => {
  const {
    colorTextLightSolid,
    colorBgElevated,
    controlHeightLG,
    marginXXL,
    marginLG,
    fontSize,
    fontSizeIcon,
    controlItemBgHover,
    paddingXXS,
    calc
  } = token;
  const floatButtonToken = (0, _internal.mergeToken)(token, {
    floatButtonBackgroundColor: colorBgElevated,
    floatButtonColor: colorTextLightSolid,
    floatButtonHoverBackgroundColor: controlItemBgHover,
    floatButtonFontSize: fontSize,
    floatButtonIconSize: calc(fontSizeIcon).mul(1.5).equal(),
    floatButtonSize: controlHeightLG,
    floatButtonInsetBlockEnd: marginXXL,
    floatButtonInsetInlineEnd: marginLG,
    floatButtonBodySize: calc(controlHeightLG).sub(calc(paddingXXS).mul(2)).equal(),
    // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
    floatButtonBodyPadding: paddingXXS,
    badgeOffset: calc(paddingXXS).mul(1.5).equal()
  });
  return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), (0, _fade.initFadeMotion)(token), (0, _keyframes.default)(floatButtonToken)];
}, prepareComponentToken);