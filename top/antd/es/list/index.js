"use client";

import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import classNames from 'classnames';
import extendsObject from '../_util/extendsObject';
import { responsiveArray } from '../_util/responsiveObserver';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import useSize from '../config-provider/hooks/useSize';
import { Row } from '../grid';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import Pagination from '../pagination';
import Spin from '../spin';
import { ListContext } from './context';
import Item from './Item';
import useStyle from './style';
function InternalList(props, ref) {
  const {
      pagination = false,
      prefixCls: customizePrefixCls,
      bordered = false,
      split = true,
      className,
      rootClassName,
      style,
      children,
      itemLayout,
      loadMore,
      grid,
      dataSource = [],
      size: customizeSize,
      header,
      footer,
      loading = false,
      rowKey,
      renderItem,
      locale
    } = props,
    rest = __rest(props, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  const paginationObj = pagination && typeof pagination === 'object' ? pagination : {};
  const [paginationCurrent, setPaginationCurrent] = React.useState(paginationObj.defaultCurrent || 1);
  const [paginationSize, setPaginationSize] = React.useState(paginationObj.defaultPageSize || 10);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig('list');
  const {
    renderEmpty
  } = React.useContext(ConfigContext);
  const defaultPaginationProps = {
    current: 1,
    total: 0,
    position: 'bottom'
  };
  const triggerPaginationEvent = eventName => (page, pageSize) => {
    var _a;
    setPaginationCurrent(page);
    setPaginationSize(pageSize);
    if (pagination) {
      (_a = pagination === null || pagination === void 0 ? void 0 : pagination[eventName]) === null || _a === void 0 ? void 0 : _a.call(pagination, page, pageSize);
    }
  };
  const onPaginationChange = triggerPaginationEvent('onChange');
  const onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');
  const renderInternalItem = (item, index) => {
    if (!renderItem) {
      return null;
    }
    let key;
    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = `list-item-${index}`;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: key
    }, renderItem(item, index));
  };
  const isSomethingAfterLastItem = !!(loadMore || pagination || footer);
  const prefixCls = getPrefixCls('list', customizePrefixCls);
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  let loadingProp = loading;
  if (typeof loadingProp === 'boolean') {
    loadingProp = {
      spinning: loadingProp
    };
  }
  const isLoading = !!(loadingProp === null || loadingProp === void 0 ? void 0 : loadingProp.spinning);
  const mergedSize = useSize(customizeSize);
  // large => lg
  // small => sm
  let sizeCls = '';
  switch (mergedSize) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  const classString = classNames(prefixCls, {
    [`${prefixCls}-vertical`]: itemLayout === 'vertical',
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-split`]: split,
    [`${prefixCls}-bordered`]: bordered,
    [`${prefixCls}-loading`]: isLoading,
    [`${prefixCls}-grid`]: !!grid,
    [`${prefixCls}-something-after-last-item`]: isSomethingAfterLastItem,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, contextClassName, className, rootClassName, hashId, cssVarCls);
  const paginationProps = extendsObject(defaultPaginationProps, {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }, pagination || {});
  const largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  paginationProps.current = Math.min(paginationProps.current, largestPage);
  const paginationContent = pagination && (/*#__PURE__*/React.createElement("div", {
    className: classNames(`${prefixCls}-pagination`)
  }, /*#__PURE__*/React.createElement(Pagination, Object.assign({
    align: "end"
  }, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))));
  let splitDataSource = _toConsumableArray(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  const needResponsive = Object.keys(grid || {}).some(key => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key));
  const screens = useBreakpoint(needResponsive);
  const currentBreakpoint = React.useMemo(() => {
    for (let i = 0; i < responsiveArray.length; i += 1) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return undefined;
  }, [screens]);
  const colStyle = React.useMemo(() => {
    if (!grid) {
      return undefined;
    }
    const columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: `${100 / columnCount}%`,
        maxWidth: `${100 / columnCount}%`
      };
    }
  }, [JSON.stringify(grid), currentBreakpoint]);
  let childrenContent = isLoading && /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    const items = splitDataSource.map(renderInternalItem);
    childrenContent = grid ? (/*#__PURE__*/React.createElement(Row, {
      gutter: grid.gutter
    }, React.Children.map(items, child => (/*#__PURE__*/React.createElement("div", {
      key: child === null || child === void 0 ? void 0 : child.key,
      style: colStyle
    }, child))))) : (/*#__PURE__*/React.createElement("ul", {
      className: `${prefixCls}-items`
    }, items));
  } else if (!children && !isLoading) {
    childrenContent = /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-empty-text`
    }, (locale === null || locale === void 0 ? void 0 : locale.emptyText) || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('List')) || /*#__PURE__*/React.createElement(DefaultRenderEmpty, {
      componentName: "List"
    }));
  }
  const paginationPosition = paginationProps.position;
  const contextValue = React.useMemo(() => ({
    grid,
    itemLayout
  }), [JSON.stringify(grid), itemLayout]);
  return wrapCSSVar(/*#__PURE__*/React.createElement(ListContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement("div", Object.assign({
    ref: ref,
    style: Object.assign(Object.assign({}, contextStyle), style),
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-header`
  }, header), /*#__PURE__*/React.createElement(Spin, Object.assign({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-footer`
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent)));
}
const ListWithForwardRef = /*#__PURE__*/React.forwardRef(InternalList);
if (process.env.NODE_ENV !== 'production') {
  ListWithForwardRef.displayName = 'List';
}
const List = ListWithForwardRef;
List.Item = Item;
export default List;