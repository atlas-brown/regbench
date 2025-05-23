/// <reference types="react" />
import * as antUtils from '@antv/util';
import * as Annotation from './components/Annotation';
import * as G2 from './g2-all';
import * as GComponents from './g-components';
import * as bxUtil from './utils';
export declare const Util: {
    getLegendItems: typeof import("@antv/g2/lib/util/legend").getLegendItems;
    translate: typeof import("@antv/g2/lib/util/transform").translate;
    rotate: typeof import("@antv/g2/lib/util/transform").rotate;
    zoom: typeof import("@antv/g2/lib/util/transform").zoom;
    transform: (m: number[], actions: any[][]) => number[];
    getAngle: typeof import("@antv/g2/lib/util/graphics").getAngle;
    getSectorPath: typeof import("@antv/g2/lib/util/graphics").getSectorPath;
    polarToCartesian: typeof import("@antv/g2/lib/util/graphics").polarToCartesian;
    getDelegationObject: typeof import("@antv/g2/lib/interaction/action/util").getDelegationObject;
    getTooltipItems: typeof import("@antv/g2/lib/util/tooltip").getTooltipItems;
    getMappingValue: typeof import("@antv/g2/lib/util/attr").getMappingValue;
    fold: (data: any[], fields: string[], foldCate: string, foldValue: string) => any[];
    percentage: (data: object[], field: string, as: string, groupBy?: string | string[]) => any[];
    minifyNum: (num: any, decimal?: number) => any;
    splitBySeparator: (num: any, separator?: string) => any;
    visibleHelper: (cfg: any, defaultVisible?: boolean) => {
        visible: boolean;
        text: string | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>;
    } | {
        visible: boolean;
        text?: undefined;
    };
    cloneDeep: (deepObject: any) => any;
    shallowEqual: typeof bxUtil.shallowEqual;
    contains: (arr: any[], value: any) => boolean;
    includes: (arr: any[], value: any) => boolean;
    difference: <T>(arr: T[], values?: T[]) => T[];
    find: typeof antUtils.find;
    findIndex: typeof antUtils.findIndex;
    firstValue: (data: object[], name: string) => any;
    flatten: <T_1>(arr: T_1[]) => T_1[];
    flattenDeep: (arr: any[], result?: any[]) => any[];
    getRange: (values: number[]) => import("@antv/util/lib/get-range").RangeType;
    pull: <T_2>(arr: T_2[], ...values: any[]) => T_2[];
    pullAt: <T_3>(arr: T_3[], indexes: number[]) => T_3[];
    reduce: <T_4, G>(arr: import("@antv/util/lib/types").ObjectType<T_4> | G[], fn: (result: T_4, data: G, idx: string | number) => T_4, init: T_4) => T_4;
    remove: <T_5>(arr: T_5[], predicate: (value: T_5, idx: number, arr?: T_5[]) => boolean) => T_5[];
    sortBy: typeof antUtils.sortBy;
    union: (...sources: any[]) => any[];
    uniq: typeof antUtils.uniq;
    valuesOfKey: (data: any[], name: string) => any[];
    head: typeof antUtils.head;
    last: typeof antUtils.last;
    startsWith: typeof antUtils.startsWith;
    endsWith: typeof antUtils.endsWith;
    filter: <T_6>(arr: T_6[], func: (v: T_6, idx: number) => boolean) => T_6[];
    every: <T_7>(arr: T_7[], func: (v: T_7, idx?: number) => any) => boolean;
    some: <T_8>(arr: T_8[], func: (v: T_8, idx?: number) => any) => boolean;
    group: <T_9>(data: T_9[], condition: string | string[] | ((v: T_9) => string)) => T_9[][];
    groupBy: typeof antUtils.groupBy;
    groupToMap: typeof antUtils.groupToMap;
    getWrapBehavior: typeof antUtils.getWrapBehavior;
    wrapBehavior: typeof antUtils.wrapBehavior;
    number2color: typeof antUtils.number2color;
    parseRadius: typeof antUtils.parseRadius;
    clamp: (a: number, min: number, max: number) => number;
    fixedBase: (v: number, base: string | number) => number;
    isDecimal: (num: any) => boolean;
    isEven: (num: any) => boolean;
    isInteger: (number: unknown) => boolean;
    isNegative: (num: any) => boolean;
    isNumberEqual: typeof antUtils.isNumberEqual;
    isOdd: (num: any) => boolean;
    isPositive: (num: any) => boolean;
    max: (arr: number[]) => number;
    maxBy: <T_10>(arr: T_10[], fn: string | ((v: T_10) => number)) => T_10;
    min: (arr: number[]) => number;
    minBy: <T_11>(arr: T_11[], fn: string | ((v: T_11) => number)) => T_11;
    mod: (n: number, m: number) => number;
    toDegree: (radian: number) => number;
    toInteger: typeof antUtils.toInteger;
    toRadian: (degree: number) => number;
    forIn: typeof antUtils.forIn;
    has: (obj: object, key: any) => boolean;
    hasKey: (obj: object, key: any) => boolean;
    hasValue: (obj: object, value: any) => boolean;
    keys: (obj: any) => any[];
    isMatch: typeof antUtils.isMatch;
    values: (obj: any) => any;
    lowerCase: (str: string) => string;
    lowerFirst: (value: string) => string;
    substitute: typeof antUtils.substitute;
    upperCase: (str: string) => string;
    upperFirst: (value: string) => string;
    getType: (value: any) => string;
    isArguments: (value: any) => boolean;
    isArray: (value: any) => value is any[];
    isArrayLike: (value: any) => boolean;
    isBoolean: (value: any) => value is boolean;
    isDate: (value: any) => value is Date;
    isError: (value: any) => value is Error;
    isFunction: (value: any) => value is Function;
    isFinite: typeof antUtils.isFinite;
    isNil: (value: any) => value is null;
    isNull: (value: any) => value is null;
    isNumber: (value: any) => value is number;
    isObject: <T_12 = object>(value: any) => value is T_12;
    isObjectLike: (value: any) => value is object;
    isPlainObject: (value: any) => value is object;
    isPrototype: (value: any) => boolean;
    isRegExp: (str: any) => str is RegExp;
    isString: (str: any) => str is string;
    isType: (value: any, type: string) => boolean;
    isUndefined: (value: any) => value is undefined;
    isElement: (o: any) => boolean;
    requestAnimationFrame: typeof antUtils.requestAnimationFrame;
    clearAnimationFrame: typeof antUtils.clearAnimationFrame;
    augment: (...args: any[]) => void;
    clone: (obj: any) => any;
    debounce: typeof antUtils.debounce;
    memoize: (f: Function, resolver?: (...args: any[]) => string) => {
        (...args: any[]): any;
        cache: Map<any, any>;
    };
    deepMix: (rst: any, ...args: any[]) => any;
    each: typeof antUtils.forIn;
    extend: (subclass: any, superclass: any, overrides?: any, staticOverrides?: any) => any;
    indexOf: <T_13>(arr: T_13[], obj: T_13) => number;
    isEmpty: typeof antUtils.isEmpty;
    isEqual: (value: any, other: any) => boolean;
    isEqualWith: <T_14>(value: T_14, other: T_14, fn: (v1: T_14, v2: T_14) => boolean) => boolean;
    map: <T_15, G_1>(arr: T_15[], func: (v: T_15, idx: number) => G_1) => G_1[];
    mapValues: <T_16>(object: {
        [key: string]: T_16;
    }, func?: (value: T_16, key: string) => any) => {
        [key: string]: any;
    };
    mix: typeof antUtils.mix;
    assign: typeof antUtils.mix;
    get: (obj: any, key: string | any[], defaultValue?: any) => any;
    set: (obj: any, path: string | any[], value: any) => any;
    pick: <T_17>(object: import("@antv/util/lib/pick").ObjectType<T_17>, keys: string[]) => import("@antv/util/lib/pick").ObjectType<T_17>;
    omit: <T_18>(obj: import("@antv/util/lib/types").ObjectType<T_18>, keys: string[]) => import("@antv/util/lib/types").ObjectType<T_18>;
    throttle: (func: Function, wait: number, options: import("@antv/util/lib/throttle").OptionsType) => Function;
    toArray: (value: any) => any[];
    toString: (value: any) => string;
    uniqueId: (prefix?: string) => string;
    noop: () => void;
    identity: <T_19>(v: T_19) => T_19;
    size: typeof antUtils.size;
    measureTextWidth: {
        (...args: any[]): any;
        cache: Map<any, any>;
    };
    getEllipsisText: (text: string | number, maxWidth: number, font?: import("@antv/util/lib/measure-text-width").Font, str?: string) => string | number;
    Cache: typeof antUtils.Cache;
};
export { Annotation, G2, GComponents };
export { default as Chart } from './components/Chart';
export { default as View } from './components/View';
export { default as Tooltip } from './components/Tooltip';
export { default as Legend } from './components/Legend';
export { default as Coordinate } from './components/Coordinate';
export { default as Axis } from './components/Axis';
export { default as Facet } from './components/Facet';
export { default as Slider } from './components/Slider';
export { default as Area } from './geometry/Area';
export { default as Edge } from './geometry/Edge';
export { default as Heatmap } from './geometry/Heatmap';
export { default as Interval } from './geometry/Interval';
export { default as Line } from './geometry/Line';
export { default as Point } from './geometry/Point';
export { default as Polygon } from './geometry/Polygon';
export { default as Schema } from './geometry/Schema';
export { default as BaseGeom } from './geometry/Base';
export { default as Label } from './geometry/Label';
export { default as Path } from './geometry/Path';
export { default as LineAdvance } from './geometry/LineAdvance';
export { default as Geom } from './geometry';
export { default as Coord } from './components/Coordinate/coord';
export { default as Guide } from './adapter/Guide';
export { default as Effects } from './components/Effects';
export { default as Interaction } from './components/Interaction';
export { default as createPlot } from './createPlot';
export { default as createTooltipConnector } from './connector/createTooltipConnector';
export { default as useView } from './hooks/useChartView';
export { default as useRootChart } from './hooks/useChartInstance';
export { default as useChartInstance } from './hooks/useChartInstance';
export { default as useTheme } from './hooks/useTheme';
export { withView } from './context/view';
export { withChartInstance } from './context/root';
export * from './core';
export * from './plots';
