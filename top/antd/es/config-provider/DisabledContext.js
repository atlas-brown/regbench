"use client";

import * as React from 'react';
const DisabledContext = /*#__PURE__*/React.createContext(false);
export const DisabledContextProvider = ({
  children,
  disabled
}) => {
  const originDisabled = React.useContext(DisabledContext);
  return /*#__PURE__*/React.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
export default DisabledContext;