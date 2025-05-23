
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
import LineSeries from './LineSeries.js';
import LineView from './LineView.js';
// In case developer forget to include grid component
import layoutPoints from '../../layout/points.js';
import dataSample from '../../processor/dataSample.js';
export function install(registers) {
  registers.registerChartView(LineView);
  registers.registerSeriesModel(LineSeries);
  registers.registerLayout(layoutPoints('line', true));
  registers.registerVisual({
    seriesType: 'line',
    reset: function (seriesModel) {
      var data = seriesModel.getData();
      // Visual coding for legend
      var lineStyle = seriesModel.getModel('lineStyle').getLineStyle();
      if (lineStyle && !lineStyle.stroke) {
        // Fill in visual should be palette color if
        // has color callback
        lineStyle.stroke = data.getVisual('style').fill;
      }
      data.setVisual('legendLineStyle', lineStyle);
    }
  });
  // Down sample after filter
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, dataSample('line'));
}