import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import { forwardRef } from 'react';
import { S as Select } from '../../dist/Select-aab027f3.esm.js';
import { u as useStateManager } from '../../dist/useStateManager-7e1e8489.esm.js';
import { u as useCreatable } from '../../dist/useCreatable-84008237.esm.js';
export { u as useCreatable } from '../../dist/useCreatable-84008237.esm.js';
import '@babel/runtime/helpers/objectSpread2';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/inherits';
import '@babel/runtime/helpers/createSuper';
import '@babel/runtime/helpers/toConsumableArray';
import '../../dist/index-641ee5b8.esm.js';
import '@emotion/react';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import '@babel/runtime/helpers/defineProperty';
import 'react-dom';
import '@floating-ui/dom';
import 'use-isomorphic-layout-effect';
import 'memoize-one';

var CreatableSelect = /*#__PURE__*/forwardRef(function (props, ref) {
  var creatableProps = useStateManager(props);
  var selectProps = useCreatable(creatableProps);
  return /*#__PURE__*/React.createElement(Select, _extends({
    ref: ref
  }, selectProps));
});
var CreatableSelect$1 = CreatableSelect;

export { CreatableSelect$1 as default };
