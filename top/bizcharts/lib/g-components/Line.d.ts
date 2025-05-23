import React from 'react';
import { IBaseProps } from './Base';
export interface ILineProps extends IBaseProps {
    attrs: {
        x1?: number;
        y1?: number;
        x2?: number;
        y2?: number;
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Omit<ILineProps, "ref"> & React.RefAttributes<any>>;
export default _default;
