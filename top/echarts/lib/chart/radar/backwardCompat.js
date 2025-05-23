
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
// Backward compat for radar chart in 2
import * as zrUtil from 'zrender/lib/core/util.js';
export default function radarBackwardCompat(option) {
  var polarOptArr = option.polar;
  if (polarOptArr) {
    if (!zrUtil.isArray(polarOptArr)) {
      polarOptArr = [polarOptArr];
    }
    var polarNotRadar_1 = [];
    zrUtil.each(polarOptArr, function (polarOpt, idx) {
      if (polarOpt.indicator) {
        if (polarOpt.type && !polarOpt.shape) {
          polarOpt.shape = polarOpt.type;
        }
        option.radar = option.radar || [];
        if (!zrUtil.isArray(option.radar)) {
          option.radar = [option.radar];
        }
        option.radar.push(polarOpt);
      } else {
        polarNotRadar_1.push(polarOpt);
      }
    });
    option.polar = polarNotRadar_1;
  }
  zrUtil.each(option.series, function (seriesOpt) {
    if (seriesOpt && seriesOpt.type === 'radar' && seriesOpt.polarIndex) {
      seriesOpt.radarIndex = seriesOpt.polarIndex;
    }
  });
}