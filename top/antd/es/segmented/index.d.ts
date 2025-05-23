import * as React from 'react';
import type { SegmentedLabeledOption as RcSegmentedLabeledOption, SegmentedProps as RCSegmentedProps, SegmentedValue as RcSegmentedValue, SegmentedRawOption } from 'rc-segmented';
import type { SizeType } from '../config-provider/SizeContext';
export type { SegmentedValue } from 'rc-segmented';
interface SegmentedLabeledOptionWithoutIcon<ValueType = RcSegmentedValue> extends RcSegmentedLabeledOption<ValueType> {
    label: RcSegmentedLabeledOption['label'];
}
interface SegmentedLabeledOptionWithIcon<ValueType = RcSegmentedValue> extends Omit<RcSegmentedLabeledOption<ValueType>, 'label'> {
    label?: RcSegmentedLabeledOption['label'];
    /** Set icon for Segmented item */
    icon: React.ReactNode;
}
export type SegmentedLabeledOption<ValueType = RcSegmentedValue> = SegmentedLabeledOptionWithIcon<ValueType> | SegmentedLabeledOptionWithoutIcon<ValueType>;
export type SegmentedOptions<T = SegmentedRawOption> = (T | SegmentedLabeledOption<T>)[];
export interface SegmentedProps<ValueType = RcSegmentedValue> extends Omit<RCSegmentedProps<ValueType>, 'size' | 'options'> {
    rootClassName?: string;
    options: SegmentedOptions<ValueType>;
    /** Option to fit width to its parent's width */
    block?: boolean;
    /** Option to control the display size */
    size?: SizeType;
    vertical?: boolean;
    shape?: 'default' | 'round';
}
declare const InternalSegmented: React.ForwardRefExoticComponent<Omit<SegmentedProps<RcSegmentedValue>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Segmented: (<ValueType>(props: SegmentedProps<ValueType> & React.RefAttributes<HTMLDivElement>) => ReturnType<typeof InternalSegmented>) & Pick<React.FC, "displayName">;
export default Segmented;
