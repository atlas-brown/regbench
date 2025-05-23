// 注册 G 渲染引擎
import * as CanvasEngine from '@antv/g-canvas/lib';
import * as SVGEngine from '@antv/g-svg/lib';
import { registerEngine } from '@antv/g2/lib/core';
// 导出自定义比例尺的能力
export { registerScale, getScale, registerTickMethod } from '@antv/scale';
export { setGlobal, GLOBAL } from '@antv/g2plot/lib/core/global';
import './extend/scale/scale';
// 动画
import './animations';
// 主题
export * from './theme';
registerEngine('canvas', CanvasEngine);
registerEngine('svg', SVGEngine);
// @ts-ignore
export * from '@antv/g2/lib/core';
export var VERSION = '4.1.22';
// fixme: supportCSSTransform 在g2@4.1.0 后支持
// 原始的计算坐标方法
var rawGetPointByClient = CanvasEngine.Canvas.prototype.getPointByClient;
CanvasEngine.Canvas.prototype.getPointByClient = function (clientX, clientY) {
    // 获取原函数返回的坐标值
    var raw = rawGetPointByClient.call(this, clientX, clientY);
    // 获取设定高宽和真实高宽。
    // 当设定的高宽不等于getBoundingClientRect获取的高宽时，说明存在缩放。
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    var setWidth = this.get('width');
    var setHeight = this.get('height');
    var realWidth = bbox.width, realHeight = bbox.height;
    // 除以缩放比（真实高宽 / 设定高宽）获得真实的坐标。
    return {
        x: raw.x / (realWidth / setWidth),
        y: raw.y / (realHeight / setHeight),
    };
};
// 设置全局默认的error fallback
export { setDefaultErrorFallback } from './boundary/ErrorBoundary';
//# sourceMappingURL=core.js.map