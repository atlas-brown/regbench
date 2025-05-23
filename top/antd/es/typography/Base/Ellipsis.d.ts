import * as React from 'react';
export interface EllipsisProps {
    enableMeasure?: boolean;
    text?: React.ReactNode;
    width: number;
    rows: number;
    children: (cutChildren: React.ReactNode[], 
    /** Tell current `text` is exceed the `rows` which can be ellipsis */
    canEllipsis: boolean) => React.ReactNode;
    onEllipsis: (isEllipsis: boolean) => void;
    expanded: boolean;
    /**
     * Mark for misc update. Which will not affect ellipsis content length.
     * e.g. tooltip content update.
     */
    miscDeps: any[];
}
export default function EllipsisMeasure(props: EllipsisProps): React.JSX.Element;
