
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
import { createLegacyDataSelectAction } from '../../legacy/dataSelectAction.js';
import pieLayout from '../pie/pieLayout.js';
import dataFilter from '../../processor/dataFilter.js';
import { curry } from 'zrender/lib/core/util.js';
import PieView from './PieView.js';
import PieSeriesModel from './PieSeries.js';
import negativeDataFilter from '../../processor/negativeDataFilter.js';
export function install(registers) {
  registers.registerChartView(PieView);
  registers.registerSeriesModel(PieSeriesModel);
  createLegacyDataSelectAction('pie', registers.registerAction);
  registers.registerLayout(curry(pieLayout, 'pie'));
  registers.registerProcessor(dataFilter('pie'));
  registers.registerProcessor(negativeDataFilter('pie'));
}