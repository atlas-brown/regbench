"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _colorBlock = require("./color-block");
const genSliderStyle = token => {
  const {
    componentCls,
    colorPickerInsetShadow,
    colorBgElevated,
    colorFillSecondary,
    lineWidthBold,
    colorPickerHandlerSizeSM,
    colorPickerSliderHeight,
    marginSM,
    marginXS
  } = token;
  const handleInnerSize = token.calc(colorPickerHandlerSizeSM).sub(token.calc(lineWidthBold).mul(2).equal()).equal();
  const handleHoverSize = token.calc(colorPickerHandlerSizeSM).add(token.calc(lineWidthBold).mul(2).equal()).equal();
  const activeHandleStyle = {
    '&:after': {
      transform: 'scale(1)',
      boxShadow: `${colorPickerInsetShadow}, 0 0 0 1px ${token.colorPrimaryActive}`
    }
  };
  return {
    // ======================== Slider ========================
    [`${componentCls}-slider`]: [(0, _colorBlock.getTransBg)((0, _cssinjs.unit)(colorPickerSliderHeight), token.colorFillSecondary), {
      margin: 0,
      padding: 0,
      height: colorPickerSliderHeight,
      borderRadius: token.calc(colorPickerSliderHeight).div(2).equal(),
      '&-rail': {
        height: colorPickerSliderHeight,
        borderRadius: token.calc(colorPickerSliderHeight).div(2).equal(),
        boxShadow: colorPickerInsetShadow
      },
      [`& ${componentCls}-slider-handle`]: {
        width: handleInnerSize,
        height: handleInnerSize,
        top: 0,
        borderRadius: '100%',
        '&:before': {
          display: 'block',
          position: 'absolute',
          background: 'transparent',
          left: {
            _skip_check_: true,
            value: '50%'
          },
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: handleHoverSize,
          height: handleHoverSize,
          borderRadius: '100%'
        },
        '&:after': {
          width: colorPickerHandlerSizeSM,
          height: colorPickerHandlerSizeSM,
          border: `${(0, _cssinjs.unit)(lineWidthBold)} solid ${colorBgElevated}`,
          boxShadow: `${colorPickerInsetShadow}, 0 0 0 1px ${colorFillSecondary}`,
          outline: 'none',
          insetInlineStart: token.calc(lineWidthBold).mul(-1).equal(),
          top: token.calc(lineWidthBold).mul(-1).equal(),
          background: 'transparent',
          transition: 'none'
        },
        '&:focus': activeHandleStyle
      }
    }],
    // ======================== Layout ========================
    [`${componentCls}-slider-container`]: {
      display: 'flex',
      gap: marginSM,
      marginBottom: marginSM,
      // Group
      [`${componentCls}-slider-group`]: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        display: 'flex',
        '&-disabled-alpha': {
          justifyContent: 'center'
        }
      }
    },
    [`${componentCls}-gradient-slider`]: {
      marginBottom: marginXS,
      [`& ${componentCls}-slider-handle`]: {
        '&:after': {
          transform: 'scale(0.8)'
        },
        '&-active, &:focus': activeHandleStyle
      }
    }
  };
};
var _default = exports.default = genSliderStyle;