
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
import * as zrUtil from 'zrender/lib/core/util.js';
import SeriesModel from '../../model/Series.js';
import Tree from '../../data/Tree.js';
import { wrapTreePathInfo } from '../helper/treeHelper.js';
import Model from '../../model/Model.js';
import enableAriaDecalForTree from '../helper/enableAriaDecalForTree.js';
var SunburstSeriesModel = /** @class */function (_super) {
  __extends(SunburstSeriesModel, _super);
  function SunburstSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SunburstSeriesModel.type;
    _this.ignoreStyleOnData = true;
    return _this;
  }
  SunburstSeriesModel.prototype.getInitialData = function (option, ecModel) {
    // Create a virtual root.
    var root = {
      name: option.name,
      children: option.data
    };
    completeTreeValue(root);
    var levelModels = this._levelModels = zrUtil.map(option.levels || [], function (levelDefine) {
      return new Model(levelDefine, this, ecModel);
    }, this);
    // Make sure always a new tree is created when setOption,
    // in TreemapView, we check whether oldTree === newTree
    // to choose mappings approach among old shapes and new shapes.
    var tree = Tree.createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod('getItemModel', function (model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        var levelModel = levelModels[node.depth];
        levelModel && (model.parentModel = levelModel);
        return model;
      });
    }
    return tree.data;
  };
  SunburstSeriesModel.prototype.optionUpdated = function () {
    this.resetViewRoot();
  };
  /*
   * @override
   */
  SunburstSeriesModel.prototype.getDataParams = function (dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treePathInfo = wrapTreePathInfo(node, this);
    return params;
  };
  SunburstSeriesModel.prototype.getLevelModel = function (node) {
    return this._levelModels && this._levelModels[node.depth];
  };
  SunburstSeriesModel.prototype.getViewRoot = function () {
    return this._viewRoot;
  };
  SunburstSeriesModel.prototype.resetViewRoot = function (viewRoot) {
    viewRoot ? this._viewRoot = viewRoot : viewRoot = this._viewRoot;
    var root = this.getRawData().tree.root;
    if (!viewRoot || viewRoot !== root && !root.contains(viewRoot)) {
      this._viewRoot = root;
    }
  };
  SunburstSeriesModel.prototype.enableAriaDecal = function () {
    enableAriaDecalForTree(this);
  };
  SunburstSeriesModel.type = 'series.sunburst';
  SunburstSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    // 默认全局居中
    center: ['50%', '50%'],
    radius: [0, '75%'],
    // 默认顺时针
    clockwise: true,
    startAngle: 90,
    // 最小角度改为0
    minAngle: 0,
    // If still show when all data zero.
    stillShowZeroSum: true,
    // 'rootToNode', 'link', or false
    nodeClick: 'rootToNode',
    renderLabelForZeroData: false,
    label: {
      // could be: 'radial', 'tangential', or 'none'
      rotate: 'radial',
      show: true,
      opacity: 1,
      // 'left' is for inner side of inside, and 'right' is for outer
      // side for inside
      align: 'center',
      position: 'inside',
      distance: 5,
      silent: true
    },
    itemStyle: {
      borderWidth: 1,
      borderColor: 'white',
      borderType: 'solid',
      shadowBlur: 0,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1
    },
    emphasis: {
      focus: 'descendant'
    },
    blur: {
      itemStyle: {
        opacity: 0.2
      },
      label: {
        opacity: 0.1
      }
    },
    // Animation type can be expansion, scale.
    animationType: 'expansion',
    animationDuration: 1000,
    animationDurationUpdate: 500,
    data: [],
    /**
     * Sort order.
     *
     * Valid values: 'desc', 'asc', null, or callback function.
     * 'desc' and 'asc' for descend and ascendant order;
     * null for not sorting;
     * example of callback function:
     * function(nodeA, nodeB) {
     *     return nodeA.getValue() - nodeB.getValue();
     * }
     */
    sort: 'desc'
  };
  return SunburstSeriesModel;
}(SeriesModel);
function completeTreeValue(dataNode) {
  // Postorder travel tree.
  // If value of none-leaf node is not set,
  // calculate it by suming up the value of all children.
  var sum = 0;
  zrUtil.each(dataNode.children, function (child) {
    completeTreeValue(child);
    var childValue = child.value;
    // TODO First value of array must be a number
    zrUtil.isArray(childValue) && (childValue = childValue[0]);
    sum += childValue;
  });
  var thisValue = dataNode.value;
  if (zrUtil.isArray(thisValue)) {
    thisValue = thisValue[0];
  }
  if (thisValue == null || isNaN(thisValue)) {
    thisValue = sum;
  }
  // Value should not less than 0.
  if (thisValue < 0) {
    thisValue = 0;
  }
  zrUtil.isArray(dataNode.value) ? dataNode.value[0] = thisValue : dataNode.value = thisValue;
}
export default SunburstSeriesModel;