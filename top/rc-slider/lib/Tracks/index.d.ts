import * as React from 'react';
import type { OnStartMove } from '../interface';
export interface TrackProps {
    prefixCls: string;
    style?: React.CSSProperties | React.CSSProperties[];
    values: number[];
    onStartMove?: OnStartMove;
    startPoint?: number;
}
declare const Tracks: React.FC<TrackProps>;
export default Tracks;
