
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
import * as vec2 from 'zrender/lib/core/vector.js';
import { getSymbolSize, getNodeGlobalScale } from './graphHelper.js';
import * as zrUtil from 'zrender/lib/core/util.js';
import { getCurvenessForEdge } from '../helper/multipleGraphEdgeHelper.js';
var PI = Math.PI;
var _symbolRadiansHalf = [];
/**
 * `basedOn` can be:
 * 'value':
 *     This layout is not accurate and have same bad case. For example,
 *     if the min value is very smaller than the max value, the nodes
 *     with the min value probably overlap even though there is enough
 *     space to layout them. So we only use this approach in the as the
 *     init layout of the force layout.
 *     FIXME
 *     Probably we do not need this method any more but use
 *     `basedOn: 'symbolSize'` in force layout if
 *     delay its init operations to GraphView.
 * 'symbolSize':
 *     This approach work only if all of the symbol size calculated.
 *     That is, the progressive rendering is not applied to graph.
 *     FIXME
 *     If progressive rendering is applied to graph some day,
 *     probably we have to use `basedOn: 'value'`.
 */
export function circularLayout(seriesModel, basedOn, draggingNode, pointer) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys && coordSys.type !== 'view') {
    return;
  }
  var rect = coordSys.getBoundingRect();
  var nodeData = seriesModel.getData();
  var graph = nodeData.graph;
  var cx = rect.width / 2 + rect.x;
  var cy = rect.height / 2 + rect.y;
  var r = Math.min(rect.width, rect.height) / 2;
  var count = nodeData.count();
  nodeData.setLayout({
    cx: cx,
    cy: cy
  });
  if (!count) {
    return;
  }
  if (draggingNode) {
    var _a = coordSys.pointToData(pointer),
      tempX = _a[0],
      tempY = _a[1];
    var v = [tempX - cx, tempY - cy];
    vec2.normalize(v, v);
    vec2.scale(v, v, r);
    draggingNode.setLayout([cx + v[0], cy + v[1]], true);
    var circularRotateLabel = seriesModel.get(['circular', 'rotateLabel']);
    rotateNodeLabel(draggingNode, circularRotateLabel, cx, cy);
  }
  _layoutNodesBasedOn[basedOn](seriesModel, graph, nodeData, r, cx, cy, count);
  graph.eachEdge(function (edge, index) {
    var curveness = zrUtil.retrieve3(edge.getModel().get(['lineStyle', 'curveness']), getCurvenessForEdge(edge, seriesModel, index), 0);
    var p1 = vec2.clone(edge.node1.getLayout());
    var p2 = vec2.clone(edge.node2.getLayout());
    var cp1;
    var x12 = (p1[0] + p2[0]) / 2;
    var y12 = (p1[1] + p2[1]) / 2;
    if (+curveness) {
      curveness *= 3;
      cp1 = [cx * curveness + x12 * (1 - curveness), cy * curveness + y12 * (1 - curveness)];
    }
    edge.setLayout([p1, p2, cp1]);
  });
}
var _layoutNodesBasedOn = {
  value: function (seriesModel, graph, nodeData, r, cx, cy, count) {
    var angle = 0;
    var sum = nodeData.getSum('value');
    var unitAngle = Math.PI * 2 / (sum || count);
    graph.eachNode(function (node) {
      var value = node.getValue('value');
      var radianHalf = unitAngle * (sum ? value : 1) / 2;
      angle += radianHalf;
      node.setLayout([r * Math.cos(angle) + cx, r * Math.sin(angle) + cy]);
      angle += radianHalf;
    });
  },
  symbolSize: function (seriesModel, graph, nodeData, r, cx, cy, count) {
    var sumRadian = 0;
    _symbolRadiansHalf.length = count;
    var nodeScale = getNodeGlobalScale(seriesModel);
    graph.eachNode(function (node) {
      var symbolSize = getSymbolSize(node);
      // Normally this case will not happen, but we still add
      // some the defensive code (2px is an arbitrary value).
      isNaN(symbolSize) && (symbolSize = 2);
      symbolSize < 0 && (symbolSize = 0);
      symbolSize *= nodeScale;
      var symbolRadianHalf = Math.asin(symbolSize / 2 / r);
      // when `symbolSize / 2` is bigger than `r`.
      isNaN(symbolRadianHalf) && (symbolRadianHalf = PI / 2);
      _symbolRadiansHalf[node.dataIndex] = symbolRadianHalf;
      sumRadian += symbolRadianHalf * 2;
    });
    var halfRemainRadian = (2 * PI - sumRadian) / count / 2;
    var angle = 0;
    graph.eachNode(function (node) {
      var radianHalf = halfRemainRadian + _symbolRadiansHalf[node.dataIndex];
      angle += radianHalf;
      // init circular layout for
      // 1. layout undefined node
      // 2. not fixed node
      (!node.getLayout() || !node.getLayout().fixed) && node.setLayout([r * Math.cos(angle) + cx, r * Math.sin(angle) + cy]);
      angle += radianHalf;
    });
  }
};
export function rotateNodeLabel(node, circularRotateLabel, cx, cy) {
  var el = node.getGraphicEl();
  // need to check if el exists. '-' value may not create node element.
  if (!el) {
    return;
  }
  var nodeModel = node.getModel();
  var labelRotate = nodeModel.get(['label', 'rotate']) || 0;
  var symbolPath = el.getSymbolPath();
  if (circularRotateLabel) {
    var pos = node.getLayout();
    var rad = Math.atan2(pos[1] - cy, pos[0] - cx);
    if (rad < 0) {
      rad = Math.PI * 2 + rad;
    }
    var isLeft = pos[0] < cx;
    if (isLeft) {
      rad = rad - Math.PI;
    }
    var textPosition = isLeft ? 'left' : 'right';
    symbolPath.setTextConfig({
      rotation: -rad,
      position: textPosition,
      origin: 'center'
    });
    var emphasisState = symbolPath.ensureState('emphasis');
    zrUtil.extend(emphasisState.textConfig || (emphasisState.textConfig = {}), {
      position: textPosition
    });
  } else {
    symbolPath.setTextConfig({
      rotation: labelRotate *= Math.PI / 180
    });
  }
}