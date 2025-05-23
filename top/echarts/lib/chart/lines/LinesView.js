
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
import { __extends } from "tslib";
import LineDraw from '../helper/LineDraw.js';
import EffectLine from '../helper/EffectLine.js';
import Line from '../helper/Line.js';
import Polyline from '../helper/Polyline.js';
import EffectPolyline from '../helper/EffectPolyline.js';
import LargeLineDraw from '../helper/LargeLineDraw.js';
import linesLayout from './linesLayout.js';
import { createClipPath } from '../helper/createClipPathFromCoordSys.js';
import ChartView from '../../view/Chart.js';
var LinesView = /** @class */function (_super) {
  __extends(LinesView, _super);
  function LinesView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LinesView.type;
    return _this;
  }
  LinesView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var lineDraw = this._updateLineDraw(data, seriesModel);
    var zlevel = seriesModel.get('zlevel');
    var trailLength = seriesModel.get(['effect', 'trailLength']);
    var zr = api.getZr();
    // Avoid the drag cause ghost shadow
    // FIXME Better way ?
    // SVG doesn't support
    var isSvg = zr.painter.getType() === 'svg';
    if (!isSvg) {
      zr.painter.getLayer(zlevel).clear(true);
    }
    // Config layer with motion blur
    if (this._lastZlevel != null && !isSvg) {
      zr.configLayer(this._lastZlevel, {
        motionBlur: false
      });
    }
    if (this._showEffect(seriesModel) && trailLength > 0) {
      if (!isSvg) {
        zr.configLayer(zlevel, {
          motionBlur: true,
          lastFrameAlpha: Math.max(Math.min(trailLength / 10 + 0.9, 1), 0)
        });
      } else if (process.env.NODE_ENV !== 'production') {
        console.warn('SVG render mode doesn\'t support lines with trail effect');
      }
    }
    lineDraw.updateData(data);
    var clipPath = seriesModel.get('clip', true) && createClipPath(seriesModel.coordinateSystem, false, seriesModel);
    if (clipPath) {
      this.group.setClipPath(clipPath);
    } else {
      this.group.removeClipPath();
    }
    this._lastZlevel = zlevel;
    this._finished = true;
  };
  LinesView.prototype.incrementalPrepareRender = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var lineDraw = this._updateLineDraw(data, seriesModel);
    lineDraw.incrementalPrepareUpdate(data);
    this._clearLayer(api);
    this._finished = false;
  };
  LinesView.prototype.incrementalRender = function (taskParams, seriesModel, ecModel) {
    this._lineDraw.incrementalUpdate(taskParams, seriesModel.getData());
    this._finished = taskParams.end === seriesModel.getData().count();
  };
  LinesView.prototype.eachRendered = function (cb) {
    this._lineDraw && this._lineDraw.eachRendered(cb);
  };
  LinesView.prototype.updateTransform = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var pipelineContext = seriesModel.pipelineContext;
    if (!this._finished || pipelineContext.large || pipelineContext.progressiveRender) {
      // TODO Don't have to do update in large mode. Only do it when there are millions of data.
      return {
        update: true
      };
    } else {
      // TODO Use same logic with ScatterView.
      // Manually update layout
      var res = linesLayout.reset(seriesModel, ecModel, api);
      if (res.progress) {
        res.progress({
          start: 0,
          end: data.count(),
          count: data.count()
        }, data);
      }
      // Not in large mode
      this._lineDraw.updateLayout();
      this._clearLayer(api);
    }
  };
  LinesView.prototype._updateLineDraw = function (data, seriesModel) {
    var lineDraw = this._lineDraw;
    var hasEffect = this._showEffect(seriesModel);
    var isPolyline = !!seriesModel.get('polyline');
    var pipelineContext = seriesModel.pipelineContext;
    var isLargeDraw = pipelineContext.large;
    if (process.env.NODE_ENV !== 'production') {
      if (hasEffect && isLargeDraw) {
        console.warn('Large lines not support effect');
      }
    }
    if (!lineDraw || hasEffect !== this._hasEffet || isPolyline !== this._isPolyline || isLargeDraw !== this._isLargeDraw) {
      if (lineDraw) {
        lineDraw.remove();
      }
      lineDraw = this._lineDraw = isLargeDraw ? new LargeLineDraw() : new LineDraw(isPolyline ? hasEffect ? EffectPolyline : Polyline : hasEffect ? EffectLine : Line);
      this._hasEffet = hasEffect;
      this._isPolyline = isPolyline;
      this._isLargeDraw = isLargeDraw;
    }
    this.group.add(lineDraw.group);
    return lineDraw;
  };
  LinesView.prototype._showEffect = function (seriesModel) {
    return !!seriesModel.get(['effect', 'show']);
  };
  LinesView.prototype._clearLayer = function (api) {
    // Not use motion when dragging or zooming
    var zr = api.getZr();
    var isSvg = zr.painter.getType() === 'svg';
    if (!isSvg && this._lastZlevel != null) {
      zr.painter.getLayer(this._lastZlevel).clear(true);
    }
  };
  LinesView.prototype.remove = function (ecModel, api) {
    this._lineDraw && this._lineDraw.remove();
    this._lineDraw = null;
    // Clear motion when lineDraw is removed
    this._clearLayer(api);
  };
  LinesView.prototype.dispose = function (ecModel, api) {
    this.remove(ecModel, api);
  };
  LinesView.type = 'lines';
  return LinesView;
}(ChartView);
export default LinesView;