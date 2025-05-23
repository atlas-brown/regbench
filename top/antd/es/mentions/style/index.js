import { unit } from '@ant-design/cssinjs';
import { genBasicInputStyle, genPlaceholderStyle, initComponentToken, initInputToken } from '../../input/style';
import { genBorderlessStyle, genDisabledStyle, genFilledStyle, genOutlinedStyle, genUnderlinedStyle } from '../../input/style/variants';
import { resetComponent, textEllipsis } from '../../style';
import { genStyleHooks, mergeToken } from '../../theme/internal';
const genMentionsStyle = token => {
  const {
    componentCls,
    colorTextDisabled,
    controlItemBgHover,
    controlPaddingHorizontal,
    colorText,
    motionDurationSlow,
    lineHeight,
    controlHeight,
    paddingInline,
    paddingBlock,
    fontSize,
    fontSizeIcon,
    colorIcon,
    colorTextQuaternary,
    colorBgElevated,
    paddingXXS,
    paddingLG,
    borderRadius,
    borderRadiusLG,
    boxShadowSecondary,
    itemPaddingVertical,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genBasicInputStyle(token)), {
      position: 'relative',
      display: 'inline-block',
      height: 'auto',
      padding: 0,
      overflow: 'hidden',
      lineHeight,
      whiteSpace: 'pre-wrap',
      verticalAlign: 'bottom'
    }), genOutlinedStyle(token)), genFilledStyle(token)), genBorderlessStyle(token)), {
      '&-affix-wrapper': Object.assign(Object.assign({}, genBasicInputStyle(token)), {
        display: 'inline-flex',
        padding: 0,
        '&::before': {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"'
        },
        [`${componentCls}-suffix`]: {
          position: 'absolute',
          top: 0,
          insetInlineEnd: paddingInline,
          bottom: 0,
          zIndex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          margin: 'auto'
        },
        [`&:has(${componentCls}-suffix) > ${componentCls} > textarea`]: {
          paddingInlineEnd: paddingLG
        },
        [`${componentCls}-clear-icon`]: {
          position: 'absolute',
          insetInlineEnd: 0,
          insetBlockStart: calc(fontSize).mul(lineHeight).mul(0.5).add(paddingBlock).equal(),
          transform: `translateY(-50%)`,
          margin: 0,
          padding: 0,
          color: colorTextQuaternary,
          fontSize: fontSizeIcon,
          verticalAlign: -1,
          // https://github.com/ant-design/ant-design/pull/18151
          // https://codesandbox.io/s/wizardly-sun-u10br
          cursor: 'pointer',
          transition: `color ${motionDurationSlow}`,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            color: colorIcon
          },
          '&:active': {
            color: colorText
          },
          '&-hidden': {
            visibility: 'hidden'
          }
        }
      })
    }), genUnderlinedStyle(token)), {
      '&-disabled': {
        '> textarea': Object.assign({}, genDisabledStyle(token))
      },
      // ================= Input Area =================
      [`&, &-affix-wrapper > ${componentCls}`]: {
        [`> textarea, ${componentCls}-measure`]: {
          color: colorText,
          boxSizing: 'border-box',
          minHeight: token.calc(controlHeight).sub(2).equal(),
          margin: 0,
          padding: `${unit(paddingBlock)} ${unit(paddingInline)}`,
          overflow: 'inherit',
          overflowX: 'hidden',
          overflowY: 'auto',
          fontWeight: 'inherit',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          fontStyle: 'inherit',
          fontVariant: 'inherit',
          fontSizeAdjust: 'inherit',
          fontStretch: 'inherit',
          lineHeight: 'inherit',
          direction: 'inherit',
          letterSpacing: 'inherit',
          whiteSpace: 'inherit',
          textAlign: 'inherit',
          verticalAlign: 'top',
          wordWrap: 'break-word',
          wordBreak: 'inherit',
          tabSize: 'inherit'
        },
        '> textarea': Object.assign({
          width: '100%',
          border: 'none',
          outline: 'none',
          resize: 'none',
          backgroundColor: 'transparent'
        }, genPlaceholderStyle(token.colorTextPlaceholder)),
        [`${componentCls}-measure`]: {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: -1,
          color: 'transparent',
          pointerEvents: 'none',
          '> span': {
            display: 'inline-block',
            minHeight: '1em'
          }
        }
      },
      // ================== Dropdown ==================
      '&-dropdown': Object.assign(Object.assign({}, resetComponent(token)), {
        position: 'absolute',
        top: -9999,
        insetInlineStart: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: 'border-box',
        fontSize,
        fontVariant: 'initial',
        padding: paddingXXS,
        backgroundColor: colorBgElevated,
        borderRadius: borderRadiusLG,
        outline: 'none',
        boxShadow: boxShadowSecondary,
        '&-hidden': {
          display: 'none'
        },
        [`${componentCls}-dropdown-menu`]: {
          maxHeight: token.dropdownHeight,
          margin: 0,
          paddingInlineStart: 0,
          // Override default ul/ol
          overflow: 'auto',
          listStyle: 'none',
          outline: 'none',
          '&-item': Object.assign(Object.assign({}, textEllipsis), {
            position: 'relative',
            display: 'block',
            minWidth: token.controlItemWidth,
            padding: `${unit(itemPaddingVertical)} ${unit(controlPaddingHorizontal)}`,
            color: colorText,
            borderRadius,
            fontWeight: 'normal',
            lineHeight,
            cursor: 'pointer',
            transition: `background ${motionDurationSlow} ease`,
            '&:hover': {
              backgroundColor: controlItemBgHover
            },
            '&-disabled': {
              color: colorTextDisabled,
              cursor: 'not-allowed',
              '&:hover': {
                color: colorTextDisabled,
                backgroundColor: controlItemBgHover,
                cursor: 'not-allowed'
              }
            },
            '&-selected': {
              color: colorText,
              fontWeight: token.fontWeightStrong,
              backgroundColor: controlItemBgHover
            },
            '&-active': {
              backgroundColor: controlItemBgHover
            }
          })
        }
      })
    })
  };
};
export const prepareComponentToken = token => Object.assign(Object.assign({}, initComponentToken(token)), {
  dropdownHeight: 250,
  controlItemWidth: 100,
  zIndexPopup: token.zIndexPopupBase + 50,
  itemPaddingVertical: (token.controlHeight - token.fontHeight) / 2
});
// ============================== Export ==============================
export default genStyleHooks('Mentions', token => {
  const mentionsToken = mergeToken(token, initInputToken(token));
  return [genMentionsStyle(mentionsToken)];
}, prepareComponentToken);