import React from 'react';
import '@antv/g2/lib/geometry/shape/line';
import '@antv/g2/lib/geometry/shape/area';
import { ILineGemoProps } from './Line';
import { IPointGemoProps } from './Point';
import { IAreaGemoProps } from './Area';
export interface ILineAdvanceGemoProps extends ILineGemoProps {
    point?: boolean | IPointGemoProps;
    area?: boolean | IAreaGemoProps;
}
declare const LineAdvance: (props: ILineAdvanceGemoProps) => React.JSX.Element;
export default LineAdvance;
