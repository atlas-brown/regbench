import * as React from 'react';
import type { DataDrivenOptionProps as MentionsOptionProps, MentionsProps as RcMentionsProps, MentionsRef as RcMentionsRef } from 'rc-mentions/lib/Mentions';
import type { InputStatus } from '../_util/statusUtils';
import type { Variant } from '../config-provider';
export declare const Option: React.FC<import("rc-mentions/lib/Option").OptionProps>;
export type MentionPlacement = 'top' | 'bottom';
export type { DataDrivenOptionProps as MentionsOptionProps } from 'rc-mentions/lib/Mentions';
export interface OptionProps {
    value: string;
    children: React.ReactNode;
    [key: string]: any;
}
export interface MentionProps extends Omit<RcMentionsProps, 'suffix'> {
    rootClassName?: string;
    loading?: boolean;
    status?: InputStatus;
    options?: MentionsOptionProps[];
    popupClassName?: string;
    /**
     * @since 5.13.0
     * @default "outlined"
     */
    variant?: Variant;
}
export interface MentionsProps extends MentionProps {
}
export interface MentionsRef extends RcMentionsRef {
}
interface MentionsConfig {
    prefix?: string | string[];
    split?: string;
}
interface MentionsEntity {
    prefix: string;
    value: string;
}
declare const InternalMentions: React.ForwardRefExoticComponent<MentionProps & React.RefAttributes<MentionsRef>>;
type CompoundedComponent = typeof InternalMentions & {
    Option: typeof Option;
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
    getMentions: (value: string, config?: MentionsConfig) => MentionsEntity[];
};
declare const Mentions: CompoundedComponent;
declare const PurePanel: (props: import("../_util/type").AnyObject) => React.JSX.Element;
export default Mentions;
