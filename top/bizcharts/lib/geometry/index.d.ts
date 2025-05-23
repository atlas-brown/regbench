import React from 'react';
import { IBaseGemoProps } from './Base';
export interface IGemo extends IBaseGemoProps {
    /** 几何标记类型 */
    type: 'area' | 'edge' | 'heatmap' | 'interval' | 'line' | 'point' | 'polygon' | 'line-advance';
    [key: string]: any;
}
export default function (props: IGemo): React.JSX.Element;
