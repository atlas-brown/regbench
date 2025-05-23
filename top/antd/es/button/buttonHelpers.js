"use client";

import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import { cloneElement, isFragment } from '../_util/reactNode';
import { PresetColors } from '../theme/interface';
const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
export function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
export function isString(str) {
  return typeof str === 'string';
}
export function isUnBorderedButtonVariant(type) {
  return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === undefined) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? /*#__PURE__*/React.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/React.createElement("span", null, child);
  }
  if (isFragment(child)) {
    return /*#__PURE__*/React.createElement("span", null, child);
  }
  return child;
}
export function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  React.Children.forEach(children, child => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childList, child => splitCNCharsBySpace(child, needInserted));
}
const _ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'];
const _ButtonShapes = ['default', 'circle', 'round'];
const _ButtonHTMLTypes = ['submit', 'button', 'reset'];
export const _ButtonVariantTypes = ['outlined', 'dashed', 'solid', 'filled', 'text', 'link'];
export const _ButtonColorTypes = ['default', 'primary', 'danger'].concat(_toConsumableArray(PresetColors));