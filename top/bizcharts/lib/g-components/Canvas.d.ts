import React from 'react';
import { Cursor, Renderer } from '@antv/g-canvas';
export interface ICanvasProps {
    container?: string | HTMLElement;
    width?: number;
    height?: number;
    capture?: boolean;
    renderer?: Renderer;
    cursor?: Cursor;
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Omit<ICanvasProps, "ref"> & React.RefAttributes<any>>;
export default _default;
