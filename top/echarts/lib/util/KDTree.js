
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
import quickSelect from './quickSelect.js';
var KDTreeNode = /** @class */function () {
  function KDTreeNode(axis, data) {
    this.axis = axis;
    this.data = data;
  }
  return KDTreeNode;
}();
/**
 * @constructor
 * @alias module:echarts/data/KDTree
 * @param {Array} points List of points.
 * each point needs an array property to represent the actual data
 * @param {Number} [dimension]
 *        Point dimension.
 *        Default will use the first point's length as dimension.
 */
var KDTree = /** @class */function () {
  function KDTree(points, dimension) {
    // Use one stack to avoid allocation
    // each time searching the nearest point
    this._stack = [];
    // Again avoid allocating a new array
    // each time searching nearest N points
    this._nearstNList = [];
    if (!points.length) {
      return;
    }
    if (!dimension) {
      dimension = points[0].array.length;
    }
    this.dimension = dimension;
    this.root = this._buildTree(points, 0, points.length - 1, 0);
  }
  /**
   * Recursively build the tree.
   */
  KDTree.prototype._buildTree = function (points, left, right, axis) {
    if (right < left) {
      return null;
    }
    var medianIndex = Math.floor((left + right) / 2);
    medianIndex = quickSelect(points, left, right, medianIndex, function (a, b) {
      return a.array[axis] - b.array[axis];
    });
    var median = points[medianIndex];
    var node = new KDTreeNode(axis, median);
    axis = (axis + 1) % this.dimension;
    if (right > left) {
      node.left = this._buildTree(points, left, medianIndex - 1, axis);
      node.right = this._buildTree(points, medianIndex + 1, right, axis);
    }
    return node;
  };
  ;
  /**
   * Find nearest point
   * @param  target Target point
   * @param  squaredDistance Squared distance function
   * @return Nearest point
   */
  KDTree.prototype.nearest = function (target, squaredDistance) {
    var curr = this.root;
    var stack = this._stack;
    var idx = 0;
    var minDist = Infinity;
    var nearestNode = null;
    if (curr.data !== target) {
      minDist = squaredDistance(curr.data, target);
      nearestNode = curr;
    }
    if (target.array[curr.axis] < curr.data.array[curr.axis]) {
      // Left first
      curr.right && (stack[idx++] = curr.right);
      curr.left && (stack[idx++] = curr.left);
    } else {
      // Right first
      curr.left && (stack[idx++] = curr.left);
      curr.right && (stack[idx++] = curr.right);
    }
    while (idx--) {
      curr = stack[idx];
      var currDist = target.array[curr.axis] - curr.data.array[curr.axis];
      var isLeft = currDist < 0;
      var needsCheckOtherSide = false;
      currDist = currDist * currDist;
      // Intersecting right hyperplane with minDist hypersphere
      if (currDist < minDist) {
        currDist = squaredDistance(curr.data, target);
        if (currDist < minDist && curr.data !== target) {
          minDist = currDist;
          nearestNode = curr;
        }
        needsCheckOtherSide = true;
      }
      if (isLeft) {
        if (needsCheckOtherSide) {
          curr.right && (stack[idx++] = curr.right);
        }
        // Search in the left area
        curr.left && (stack[idx++] = curr.left);
      } else {
        if (needsCheckOtherSide) {
          curr.left && (stack[idx++] = curr.left);
        }
        // Search the right area
        curr.right && (stack[idx++] = curr.right);
      }
    }
    return nearestNode.data;
  };
  ;
  KDTree.prototype._addNearest = function (found, dist, node) {
    var nearestNList = this._nearstNList;
    var i = found - 1;
    // Insert to the right position
    // Sort from small to large
    for (; i > 0; i--) {
      if (dist >= nearestNList[i - 1].dist) {
        break;
      } else {
        nearestNList[i].dist = nearestNList[i - 1].dist;
        nearestNList[i].node = nearestNList[i - 1].node;
      }
    }
    nearestNList[i].dist = dist;
    nearestNList[i].node = node;
  };
  ;
  /**
   * Find nearest N points
   * @param  target Target point
   * @param  N
   * @param  squaredDistance Squared distance function
   * @param  output Output nearest N points
   */
  KDTree.prototype.nearestN = function (target, N, squaredDistance, output) {
    if (N <= 0) {
      output.length = 0;
      return output;
    }
    var curr = this.root;
    var stack = this._stack;
    var idx = 0;
    var nearestNList = this._nearstNList;
    for (var i = 0; i < N; i++) {
      // Allocate
      if (!nearestNList[i]) {
        nearestNList[i] = {
          dist: 0,
          node: null
        };
      }
      nearestNList[i].dist = 0;
      nearestNList[i].node = null;
    }
    var currDist = squaredDistance(curr.data, target);
    var found = 0;
    if (curr.data !== target) {
      found++;
      this._addNearest(found, currDist, curr);
    }
    if (target.array[curr.axis] < curr.data.array[curr.axis]) {
      // Left first
      curr.right && (stack[idx++] = curr.right);
      curr.left && (stack[idx++] = curr.left);
    } else {
      // Right first
      curr.left && (stack[idx++] = curr.left);
      curr.right && (stack[idx++] = curr.right);
    }
    while (idx--) {
      curr = stack[idx];
      var currDist_1 = target.array[curr.axis] - curr.data.array[curr.axis];
      var isLeft = currDist_1 < 0;
      var needsCheckOtherSide = false;
      currDist_1 = currDist_1 * currDist_1;
      // Intersecting right hyperplane with minDist hypersphere
      if (found < N || currDist_1 < nearestNList[found - 1].dist) {
        currDist_1 = squaredDistance(curr.data, target);
        if ((found < N || currDist_1 < nearestNList[found - 1].dist) && curr.data !== target) {
          if (found < N) {
            found++;
          }
          this._addNearest(found, currDist_1, curr);
        }
        needsCheckOtherSide = true;
      }
      if (isLeft) {
        if (needsCheckOtherSide) {
          curr.right && (stack[idx++] = curr.right);
        }
        // Search in the left area
        curr.left && (stack[idx++] = curr.left);
      } else {
        if (needsCheckOtherSide) {
          curr.left && (stack[idx++] = curr.left);
        }
        // Search the right area
        curr.right && (stack[idx++] = curr.right);
      }
    }
    // Copy to output
    for (var i = 0; i < found; i++) {
      output[i] = nearestNList[i].node.data;
    }
    output.length = found;
    return output;
  };
  return KDTree;
}();
export default KDTree;