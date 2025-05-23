import type { CSSProperties } from 'react';
import type { FullToken, GetDefaultToken } from 'antd/es/theme/internal';
export interface MultipleSelectorToken {
    /**
     * @desc 多选标签背景色
     * @descEN Background color of multiple tag
     */
    multipleItemBg: string;
    /**
     * @desc 多选标签边框色
     * @descEN Border color of multiple tag
     */
    multipleItemBorderColor: string;
    /**
     * @desc 多选标签高度
     * @descEN Height of multiple tag
     */
    multipleItemHeight: number;
    /**
     * @desc 小号多选标签高度
     * @descEN Height of multiple tag with small size
     */
    multipleItemHeightSM: number;
    /**
     * @desc 大号多选标签高度
     * @descEN Height of multiple tag with large size
     */
    multipleItemHeightLG: number;
    /**
     * @desc 多选框禁用背景
     * @descEN Background color of multiple selector when disabled
     */
    multipleSelectorBgDisabled: string;
    /**
     * @desc 多选标签禁用文本颜色
     * @descEN Text color of multiple tag when disabled
     */
    multipleItemColorDisabled: string;
    /**
     * @desc 多选标签禁用边框色
     * @descEN Border color of multiple tag when disabled
     */
    multipleItemBorderColorDisabled: string;
}
export interface ComponentToken extends MultipleSelectorToken {
    /**
     * @desc 下拉菜单 z-index
     * @descEN z-index of dropdown
     */
    zIndexPopup: number;
    /**
     * @desc 选项选中时文本颜色
     * @descEN Text color when option is selected
     */
    optionSelectedColor: string;
    /**
     * @desc 选项选中时文本字重
     * @descEN Font weight when option is selected
     */
    optionSelectedFontWeight: CSSProperties['fontWeight'];
    /**
     * @desc 选项选中时背景色
     * @descEN Background color when option is selected
     */
    optionSelectedBg: string;
    /**
     * @desc 选项激活态时背景色
     * @descEN Background color when option is active
     */
    optionActiveBg: string;
    /**
     * @desc 选项内间距
     * @descEN Padding of option
     */
    optionPadding: CSSProperties['padding'];
    /**
     * @desc 选项字体大小
     * @descEN Font size of option
     */
    optionFontSize: number;
    /**
     * @desc 选项行高
     * @descEN Line height of option
     */
    optionLineHeight: CSSProperties['lineHeight'];
    /**
     * @desc 选项高度
     * @descEN Height of option
     */
    optionHeight: number;
    /**
     * @desc 选框背景色
     * @descEN Background color of selector
     */
    selectorBg: string;
    /**
     * @desc 清空按钮背景色
     * @descEN Background color of clear button
     */
    clearBg: string;
    /**
     * @desc 单选大号回填项高度
     * @descEN Height of single selected item with large size
     */
    singleItemHeightLG: number;
    /**
     * @desc 箭头的行末内边距
     * @descEN Inline end padding of arrow
     */
    showArrowPaddingInlineEnd: number;
    /**
     * @desc 悬浮态边框色
     * @descEN Hover border color
     */
    hoverBorderColor: string;
    /**
     * @desc 激活态边框色
     * @descEN Active border color
     */
    activeBorderColor: string;
    /**
     * @desc 激活态 outline 颜色
     * @descEN Active outline color
     */
    activeOutlineColor: string;
}
export interface SelectorToken {
    selectAffixPadding: number | string;
    inputPaddingHorizontalBase: number | string;
    multipleSelectItemHeight: number;
    selectHeight: number;
}
export interface SelectToken extends FullToken<'Select'>, SelectorToken {
    rootPrefixCls: string;
    /** @private Used for internal calculation */
    INTERNAL_FIXED_ITEM_MARGIN: number;
}
export declare const prepareComponentToken: GetDefaultToken<'Select'>;
