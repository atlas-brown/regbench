import React from 'react';
export interface IGroupProps {
    [key: string]: any;
    translate?: [number, number];
}
declare const _default: React.ForwardRefExoticComponent<Omit<IGroupProps, "ref"> & React.RefAttributes<any>>;
export default _default;
