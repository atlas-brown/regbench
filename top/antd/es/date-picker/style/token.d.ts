import type { SharedComponentToken, SharedInputToken } from '../../input/style/token';
import type { MultipleSelectorToken, SelectorToken } from '../../select/style/token';
import type { ArrowToken } from '../../style/roundedArrow';
import type { FullToken, GetDefaultToken, GlobalToken, TokenWithCommonCls } from '../../theme/internal';
export interface PanelComponentToken extends MultipleSelectorToken {
    /**
     * @desc 单元格悬浮态背景色
     * @descEN Background color of cell hover state
     */
    cellHoverBg: string;
    /**
     * @desc 选取范围内的单元格背景色
     * @descEN Background color of cell in range
     */
    cellActiveWithRangeBg: string;
    /**
     * @desc 选取范围内的单元格悬浮态背景色
     * @descEN Background color of hovered cell in range
     */
    cellHoverWithRangeBg: string;
    /**
     * @desc 单元格禁用态背景色
     * @descEN Background color of disabled cell
     */
    cellBgDisabled: string;
    /**
     * @desc 选取范围时单元格边框色
     * @descEN Border color of cell in range when picking
     */
    cellRangeBorderColor: string;
    /**
     * @desc 时间列宽度
     * @descEN Width of time column
     */
    timeColumnWidth: number;
    /**
     * @desc 时间列高度
     * @descEN Height of time column
     */
    timeColumnHeight: number;
    /**
     * @desc 时间单元格高度
     * @descEN Height of time cell
     */
    timeCellHeight: number;
    /**
     * @desc 单元格高度
     * @descEN Height of cell
     */
    cellHeight: number;
    /**
     * @desc 单元格宽度
     * @descEN Width of cell
     */
    cellWidth: number;
    /**
     * @desc 单元格文本高度
     * @descEN Height of cell text
     */
    textHeight: number;
    /**
     * @desc 十年/年/季/月/周单元格高度
     * @descEN Height of decade/year/quarter/month/week cell
     */
    withoutTimeCellHeight: number;
}
export interface ComponentToken extends Exclude<SharedComponentToken, 'addonBg'>, PanelComponentToken, ArrowToken {
    /**
     * @desc 预设区域宽度
     * @descEN Width of preset area
     */
    presetsWidth: number;
    /**
     * @desc 预设区域最大宽度
     * @descEN Max width of preset area
     */
    presetsMaxWidth: number;
    /**
     * @desc 弹窗 z-index
     * @descEN z-index of popup
     */
    zIndexPopup: number;
}
export type PickerPanelToken = {
    pickerCellCls: string;
    pickerCellInnerCls: string;
    pickerDatePanelPaddingHorizontal: number | string;
    pickerYearMonthCellWidth: number | string;
    pickerCellPaddingVertical: number | string;
    pickerQuarterPanelContentHeight: number | string;
    pickerCellBorderGap: number;
    pickerControlIconSize: number;
    pickerControlIconMargin: number;
    pickerControlIconBorderWidth: number;
};
export interface PickerToken extends FullToken<'DatePicker'>, PickerPanelToken, SharedInputToken, SelectorToken {
    /** @private Used for internal calculation */
    INTERNAL_FIXED_ITEM_MARGIN: number;
}
export type SharedPickerToken = TokenWithCommonCls<GlobalToken> & PickerPanelToken & PanelComponentToken;
export declare const initPickerPanelToken: (token: TokenWithCommonCls<GlobalToken>) => PickerPanelToken;
export declare const initPanelComponentToken: (token: GlobalToken) => PanelComponentToken;
export declare const prepareComponentToken: GetDefaultToken<'DatePicker'>;
