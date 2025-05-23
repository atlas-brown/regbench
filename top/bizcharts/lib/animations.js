"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 注册需要的动画执行函数
var fade_1 = require("@antv/g2/lib/animate/animation/fade");
var grow_in_1 = require("@antv/g2/lib/animate/animation/grow-in");
var path_in_1 = require("@antv/g2/lib/animate/animation/path-in");
var position_update_1 = require("@antv/g2/lib/animate/animation/position-update");
var scale_in_1 = require("@antv/g2/lib/animate/animation/scale-in");
var sector_path_update_1 = require("@antv/g2/lib/animate/animation/sector-path-update");
var wave_in_1 = require("@antv/g2/lib/animate/animation/wave-in");
var zoom_1 = require("@antv/g2/lib/animate/animation/zoom");
var core_1 = require("@antv/g2/lib/core");
(0, core_1.registerAnimation)('fade-in', fade_1.fadeIn);
(0, core_1.registerAnimation)('fade-out', fade_1.fadeOut);
(0, core_1.registerAnimation)('grow-in-x', grow_in_1.growInX);
(0, core_1.registerAnimation)('grow-in-xy', grow_in_1.growInXY);
(0, core_1.registerAnimation)('grow-in-y', grow_in_1.growInY);
(0, core_1.registerAnimation)('scale-in-x', scale_in_1.scaleInX);
(0, core_1.registerAnimation)('scale-in-y', scale_in_1.scaleInY);
(0, core_1.registerAnimation)('wave-in', wave_in_1.waveIn);
(0, core_1.registerAnimation)('zoom-in', zoom_1.zoomIn);
(0, core_1.registerAnimation)('zoom-out', zoom_1.zoomOut);
(0, core_1.registerAnimation)('position-update', position_update_1.positionUpdate);
(0, core_1.registerAnimation)('sector-path-update', sector_path_update_1.sectorPathUpdate);
(0, core_1.registerAnimation)('path-in', path_in_1.pathIn);
//# sourceMappingURL=animations.js.map