import React from 'react';
import { IBaseProps } from './Base';
export interface IPolygonProps extends IBaseProps {
    attrs: {
        points?: [number, number][];
        [key: string]: any;
    };
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Omit<IPolygonProps, "ref"> & React.RefAttributes<any>>;
export default _default;
