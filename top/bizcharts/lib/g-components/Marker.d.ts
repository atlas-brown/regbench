import React from 'react';
import { IBaseProps } from './Base';
export interface IMarkerProps extends IBaseProps {
    attrs: {
        x?: number;
        y?: number;
        r?: number;
        symbol?: number;
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Omit<IMarkerProps, "ref"> & React.RefAttributes<any>>;
export default _default;
