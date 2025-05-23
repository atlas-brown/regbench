"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csTdfs = csTdfs;
// Copyright (c) 2006-2024, Timothy A. Davis, All Rights Reserved.
// SPDX-License-Identifier: LGPL-2.1+
// https://github.com/DrTimothyAldenDavis/SuiteSparse/tree/dev/CSparse/Source

/**
 * Depth-first search and postorder of a tree rooted at node j
 *
 * @param {Number}  j               The tree node
 * @param {Number}  k
 * @param {Array}   w               The workspace array
 * @param {Number}  head            The index offset within the workspace for the head array
 * @param {Number}  next            The index offset within the workspace for the next array
 * @param {Array}   post            The post ordering array
 * @param {Number}  stack           The index offset within the workspace for the stack array
 */
function csTdfs(j, k, w, head, next, post, stack) {
  // variables
  let top = 0;
  // place j on the stack
  w[stack] = j;
  // while (stack is not empty)
  while (top >= 0) {
    // p = top of stack
    const p = w[stack + top];
    // i = youngest child of p
    const i = w[head + p];
    if (i === -1) {
      // p has no unordered children left
      top--;
      // node p is the kth postordered node
      post[k++] = p;
    } else {
      // remove i from children of p
      w[head + p] = w[next + i];
      // increment top
      ++top;
      // start dfs on child node i
      w[stack + top] = i;
    }
  }
  return k;
}