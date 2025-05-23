
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
import { createHashMap, each } from 'zrender/lib/core/util.js';
import { addSafe } from '../util/number.js';
// (1) [Caution]: the logic is correct based on the premises:
//     data processing stage is blocked in stream.
//     See <module:echarts/stream/Scheduler#performDataProcessorTasks>
// (2) Only register once when import repeatedly.
//     Should be executed after series is filtered and before stack calculation.
export default function dataStack(ecModel) {
  var stackInfoMap = createHashMap();
  ecModel.eachSeries(function (seriesModel) {
    var stack = seriesModel.get('stack');
    // Compatible: when `stack` is set as '', do not stack.
    if (stack) {
      var stackInfoList = stackInfoMap.get(stack) || stackInfoMap.set(stack, []);
      var data = seriesModel.getData();
      var stackInfo = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: data.getCalculationInfo('stackResultDimension'),
        stackedOverDimension: data.getCalculationInfo('stackedOverDimension'),
        stackedDimension: data.getCalculationInfo('stackedDimension'),
        stackedByDimension: data.getCalculationInfo('stackedByDimension'),
        isStackedByIndex: data.getCalculationInfo('isStackedByIndex'),
        data: data,
        seriesModel: seriesModel
      };
      // If stacked on axis that do not support data stack.
      if (!stackInfo.stackedDimension || !(stackInfo.isStackedByIndex || stackInfo.stackedByDimension)) {
        return;
      }
      stackInfoList.length && data.setCalculationInfo('stackedOnSeries', stackInfoList[stackInfoList.length - 1].seriesModel);
      stackInfoList.push(stackInfo);
    }
  });
  stackInfoMap.each(calculateStack);
}
function calculateStack(stackInfoList) {
  each(stackInfoList, function (targetStackInfo, idxInStack) {
    var resultVal = [];
    var resultNaN = [NaN, NaN];
    var dims = [targetStackInfo.stackResultDimension, targetStackInfo.stackedOverDimension];
    var targetData = targetStackInfo.data;
    var isStackedByIndex = targetStackInfo.isStackedByIndex;
    var stackStrategy = targetStackInfo.seriesModel.get('stackStrategy') || 'samesign';
    // Should not write on raw data, because stack series model list changes
    // depending on legend selection.
    targetData.modify(dims, function (v0, v1, dataIndex) {
      var sum = targetData.get(targetStackInfo.stackedDimension, dataIndex);
      // Consider `connectNulls` of line area, if value is NaN, stackedOver
      // should also be NaN, to draw a appropriate belt area.
      if (isNaN(sum)) {
        return resultNaN;
      }
      var byValue;
      var stackedDataRawIndex;
      if (isStackedByIndex) {
        stackedDataRawIndex = targetData.getRawIndex(dataIndex);
      } else {
        byValue = targetData.get(targetStackInfo.stackedByDimension, dataIndex);
      }
      // If stackOver is NaN, chart view will render point on value start.
      var stackedOver = NaN;
      for (var j = idxInStack - 1; j >= 0; j--) {
        var stackInfo = stackInfoList[j];
        // Has been optimized by inverted indices on `stackedByDimension`.
        if (!isStackedByIndex) {
          stackedDataRawIndex = stackInfo.data.rawIndexOf(stackInfo.stackedByDimension, byValue);
        }
        if (stackedDataRawIndex >= 0) {
          var val = stackInfo.data.getByRawIndex(stackInfo.stackResultDimension, stackedDataRawIndex);
          // Considering positive stack, negative stack and empty data
          if (stackStrategy === 'all' // single stack group
          || stackStrategy === 'positive' && val > 0 || stackStrategy === 'negative' && val < 0 || stackStrategy === 'samesign' && sum >= 0 && val > 0 // All positive stack
          || stackStrategy === 'samesign' && sum <= 0 && val < 0 // All negative stack
          ) {
            // The sum has to be very small to be affected by the
            // floating arithmetic problem. An incorrect result will probably
            // cause axis min/max to be filtered incorrectly.
            sum = addSafe(sum, val);
            stackedOver = val;
            break;
          }
        }
      }
      resultVal[0] = sum;
      resultVal[1] = stackedOver;
      return resultVal;
    });
  });
}