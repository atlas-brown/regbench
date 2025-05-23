"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMElement = DOMElement;
exports.TransitionTimeouts = exports.TransitionStatuses = exports.TransitionPropTypeKeys = exports.PopperPlacements = void 0;
exports.addDefaultProps = addDefaultProps;
exports.addMultipleEventListeners = addMultipleEventListeners;
exports.canUseDOM = void 0;
exports.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
exports.defaultToggleEvents = void 0;
exports.deprecated = deprecated;
exports.findDOMElements = findDOMElements;
exports.focusableElements = void 0;
exports.getOriginalBodyPadding = getOriginalBodyPadding;
exports.getScrollbarWidth = getScrollbarWidth;
exports.getTarget = getTarget;
exports.isArrayOrNodeList = isArrayOrNodeList;
exports.isBodyOverflowing = isBodyOverflowing;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isReactRefObj = isReactRefObj;
exports.keyCodes = void 0;
exports.mapToCssModules = mapToCssModules;
exports.omit = omit;
exports.pick = pick;
exports.setGlobalCssModule = setGlobalCssModule;
exports.setScrollbarWidth = setScrollbarWidth;
exports.targetPropType = exports.tagPropType = void 0;
exports.toNumber = toNumber;
exports.warnOnce = warnOnce;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
  let scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  const style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  const fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  const bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
let globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className = '', cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className.split(' ').map(c => cssModule[c] || c).join(' ');
}

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let {
    length
  } = pickKeys;
  let key;
  const result = {};
  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
let warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce(`"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`);
    }
    return propType(props, propName, componentName, ...rest);
  };
}

// Shim Element if needed (e.g. in Node environment)
const Element = typeof window === 'object' && window.Element || function () {};
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
const targetPropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, DOMElement, _propTypes.default.shape({
  current: _propTypes.default.any
})]);
exports.targetPropType = targetPropType;
const tagPropType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
  $$typeof: _propTypes.default.symbol,
  render: _propTypes.default.func
}), _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
  $$typeof: _propTypes.default.symbol,
  render: _propTypes.default.func
})]))]);

// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
exports.tagPropType = tagPropType;
const TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300 // $offcanvas-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
exports.TransitionTimeouts = TransitionTimeouts;
const TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
exports.TransitionPropTypeKeys = TransitionPropTypeKeys;
const TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
exports.TransitionStatuses = TransitionStatuses;
const keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
exports.keyCodes = keyCodes;
const PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
exports.PopperPlacements = PopperPlacements;
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }
  return false;
}
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function toNumber(value) {
  const type = typeof value;
  const NAN = 0 / 0;
  if (type === 'number') {
    return value;
  }
  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }
  if (type !== 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(/^\s+|\s+$/g, '');
  const isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  const tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }
  if (isFunction(target)) {
    return target();
  }
  if (typeof target === 'string' && canUseDOM) {
    let selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll(`#${target}`);
    }
    if (!selection.length) {
      throw new Error(`The target '${target}' could not be identified in the dom, tip: check spelling`);
    }
    return selection;
  }
  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  const els = findDOMElements(target);
  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }
    if (els === null) {
      return [];
    }
    return [els];
  }
  if (isArrayOrNodeList(els)) {
    return els[0];
  }
  return els;
}
const defaultToggleEvents = ['touchstart', 'click'];
exports.defaultToggleEvents = defaultToggleEvents;
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  let els = _els;
  if (!isArrayOrNodeList(els)) {
    els = [els];
  }
  let events = _events;
  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }
  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error(`
      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.
      The second must be a function.
      The third is a string or an array of strings that represents DOM events
    `);
  }
  Array.prototype.forEach.call(events, event => {
    Array.prototype.forEach.call(els, el => {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, event => {
      Array.prototype.forEach.call(els, el => {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
const focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal):not(.offcanvas)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
exports.focusableElements = focusableElements;
function addDefaultProps(defaultProps, props) {
  if (!defaultProps || !props) return props;
  let result = _objectSpread({}, props);
  Object.keys(defaultProps).forEach(key => {
    if (result[key] === undefined) {
      result[key] = defaultProps[key];
    }
    if (Object.keys(defaultProps[key] || {}).length > 0 && typeof defaultProps[key] === 'object') {
      addDefaultProps(defaultProps[key], result);
    }
  });
  return result;
}