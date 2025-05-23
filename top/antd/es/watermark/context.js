import * as React from 'react';
import useEvent from "rc-util/es/hooks/useEvent";
function voidFunc() {}
const WatermarkContext = /*#__PURE__*/React.createContext({
  add: voidFunc,
  remove: voidFunc
});
export function usePanelRef(panelSelector) {
  const watermark = React.useContext(WatermarkContext);
  const panelEleRef = React.useRef(null);
  const panelRef = useEvent(ele => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle);
      panelEleRef.current = innerContentEle;
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
export default WatermarkContext;