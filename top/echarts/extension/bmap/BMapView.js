
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
// @ts-nocheck
import * as echarts from 'echarts';
function isEmptyObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
export default echarts.extendComponentView({
  type: 'bmap',
  render: function (bMapModel, ecModel, api) {
    var rendering = true;
    var bmap = bMapModel.getBMap();
    var viewportRoot = api.getZr().painter.getViewportRoot();
    var coordSys = bMapModel.coordinateSystem;
    var moveHandler = function (type, target) {
      if (rendering) {
        return;
      }
      var offsetEl = viewportRoot.parentNode.parentNode.parentNode;
      var mapOffset = [-parseInt(offsetEl.style.left, 10) || 0, -parseInt(offsetEl.style.top, 10) || 0];
      // only update style when map offset changed
      var viewportRootStyle = viewportRoot.style;
      var offsetLeft = mapOffset[0] + 'px';
      var offsetTop = mapOffset[1] + 'px';
      if (viewportRootStyle.left !== offsetLeft) {
        viewportRootStyle.left = offsetLeft;
      }
      if (viewportRootStyle.top !== offsetTop) {
        viewportRootStyle.top = offsetTop;
      }
      coordSys.setMapOffset(mapOffset);
      bMapModel.__mapOffset = mapOffset;
      api.dispatchAction({
        type: 'bmapRoam',
        animation: {
          duration: 0
        }
      });
    };
    function zoomEndHandler() {
      if (rendering) {
        return;
      }
      api.dispatchAction({
        type: 'bmapRoam',
        animation: {
          duration: 0
        }
      });
    }
    bmap.removeEventListener('moving', this._oldMoveHandler);
    bmap.removeEventListener('moveend', this._oldMoveHandler);
    bmap.removeEventListener('zoomend', this._oldZoomEndHandler);
    bmap.addEventListener('moving', moveHandler);
    bmap.addEventListener('moveend', moveHandler);
    bmap.addEventListener('zoomend', zoomEndHandler);
    this._oldMoveHandler = moveHandler;
    this._oldZoomEndHandler = zoomEndHandler;
    var roam = bMapModel.get('roam');
    if (roam && roam !== 'scale') {
      bmap.enableDragging();
    } else {
      bmap.disableDragging();
    }
    if (roam && roam !== 'move') {
      bmap.enableScrollWheelZoom();
      bmap.enableDoubleClickZoom();
      bmap.enablePinchToZoom();
    } else {
      bmap.disableScrollWheelZoom();
      bmap.disableDoubleClickZoom();
      bmap.disablePinchToZoom();
    }
    /* map 2.0 */
    var originalStyle = bMapModel.__mapStyle;
    var newMapStyle = bMapModel.get('mapStyle') || {};
    // FIXME, Not use JSON methods
    var mapStyleStr = JSON.stringify(newMapStyle);
    if (JSON.stringify(originalStyle) !== mapStyleStr) {
      // FIXME May have blank tile when dragging if setMapStyle
      if (!isEmptyObject(newMapStyle)) {
        bmap.setMapStyle(echarts.util.clone(newMapStyle));
      }
      bMapModel.__mapStyle = JSON.parse(mapStyleStr);
    }
    /* map 3.0 */
    var originalStyle2 = bMapModel.__mapStyle2;
    var newMapStyle2 = bMapModel.get('mapStyleV2') || {};
    // FIXME, Not use JSON methods
    var mapStyleStr2 = JSON.stringify(newMapStyle2);
    if (JSON.stringify(originalStyle2) !== mapStyleStr2) {
      // FIXME May have blank tile when dragging if setMapStyle
      if (!isEmptyObject(newMapStyle2)) {
        bmap.setMapStyleV2(echarts.util.clone(newMapStyle2));
      }
      bMapModel.__mapStyle2 = JSON.parse(mapStyleStr2);
    }
    rendering = false;
  }
});