"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _InfiniteLoader = _interopRequireWildcard(require("./InfiniteLoader"));
var React = _interopRequireWildcard(require("react"));
var _List = _interopRequireDefault(require("../List"));
var _TestUtils = require("../TestUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
describe('InfiniteLoader', function () {
  var innerOnRowsRendered;
  var isRowLoadedCalls = [];
  var isRowLoadedMap = {};
  var loadMoreRowsCalls = [];
  var rowRendererCalls = [];
  beforeEach(function () {
    isRowLoadedCalls = [];
    isRowLoadedMap = {};
    loadMoreRowsCalls = [];
    rowRendererCalls = [];
  });
  function defaultIsRowLoaded(_ref) {
    var index = _ref.index;
    isRowLoadedCalls.push(index);
    return !!isRowLoadedMap[index];
  }
  function defaultLoadMoreRows(_ref2) {
    var startIndex = _ref2.startIndex,
      stopIndex = _ref2.stopIndex;
    loadMoreRowsCalls.push({
      startIndex: startIndex,
      stopIndex: stopIndex
    });
  }
  function rowRenderer(_ref3) {
    var index = _ref3.index,
      key = _ref3.key,
      style = _ref3.style;
    rowRendererCalls.push(index);
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: style
    });
  }
  function getMarkup() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? 100 : _ref4$height,
      _ref4$isRowLoaded = _ref4.isRowLoaded,
      isRowLoaded = _ref4$isRowLoaded === void 0 ? defaultIsRowLoaded : _ref4$isRowLoaded,
      _ref4$loadMoreRows = _ref4.loadMoreRows,
      loadMoreRows = _ref4$loadMoreRows === void 0 ? defaultLoadMoreRows : _ref4$loadMoreRows,
      _ref4$minimumBatchSiz = _ref4.minimumBatchSize,
      minimumBatchSize = _ref4$minimumBatchSiz === void 0 ? 1 : _ref4$minimumBatchSiz,
      _ref4$rowHeight = _ref4.rowHeight,
      rowHeight = _ref4$rowHeight === void 0 ? 20 : _ref4$rowHeight,
      _ref4$rowCount = _ref4.rowCount,
      rowCount = _ref4$rowCount === void 0 ? 100 : _ref4$rowCount,
      scrollToIndex = _ref4.scrollToIndex,
      _ref4$threshold = _ref4.threshold,
      threshold = _ref4$threshold === void 0 ? 10 : _ref4$threshold,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? 200 : _ref4$width;
    return /*#__PURE__*/React.createElement(_InfiniteLoader["default"], {
      isRowLoaded: isRowLoaded,
      loadMoreRows: loadMoreRows,
      minimumBatchSize: minimumBatchSize,
      rowCount: rowCount,
      threshold: threshold
    }, function (_ref5) {
      var onRowsRendered = _ref5.onRowsRendered,
        registerChild = _ref5.registerChild;
      innerOnRowsRendered = onRowsRendered;
      return /*#__PURE__*/React.createElement(_List["default"], {
        ref: registerChild,
        height: height,
        onRowsRendered: onRowsRendered,
        rowHeight: rowHeight,
        rowRenderer: rowRenderer,
        rowCount: rowCount,
        scrollToIndex: scrollToIndex,
        width: width
      });
    });
  }
  it('should call :isRowLoaded for all rows within the threshold each time a range of rows are rendered', function () {
    (0, _TestUtils.render)(getMarkup());
    expect(isRowLoadedCalls).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  });
  it('should call :isRowLoaded for all rows within the rowCount each time a range of rows are rendered', function () {
    (0, _TestUtils.render)(getMarkup({
      rowCount: 10
    }));
    expect(isRowLoadedCalls).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('should call :loadMoreRows for unloaded rows within the threshold', function () {
    (0, _TestUtils.render)(getMarkup());
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 14
    }]);
  });
  it('should call :loadMoreRows for unloaded rows within the rowCount', function () {
    (0, _TestUtils.render)(getMarkup({
      rowCount: 10
    }));
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 9
    }]);
  });
  it('should :forceUpdate once rows have loaded if :loadMoreRows returns a Promise', /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(done) {
      var savedResolve, loadMoreRows;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            loadMoreRows = function _loadMoreRows() {
              return new Promise(function (resolve) {
                savedResolve = resolve;
              });
            };
            (0, _TestUtils.render)(getMarkup({
              loadMoreRows: loadMoreRows
            }));
            rowRendererCalls.splice(0);
            _context.next = 5;
            return savedResolve();
          case 5:
            expect(rowRendererCalls.length > 0).toEqual(true);
            done();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  it('should not :forceUpdate once rows have loaded rows are no longer visible', /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(done) {
      var resolves, loadMoreRows;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            loadMoreRows = function _loadMoreRows2() {
              return new Promise(function (resolve) {
                resolves.push(resolve);
              });
            };
            resolves = [];
            (0, _TestUtils.render)(getMarkup({
              loadMoreRows: loadMoreRows
            }));
            // Simulate a new range of rows being loaded
            innerOnRowsRendered({
              startIndex: 100,
              stopIndex: 101
            });
            rowRendererCalls.splice(0);
            _context2.next = 7;
            return resolves[0]();
          case 7:
            // Resolve the first request only, not the simulated row-change
            expect(rowRendererCalls.length).toEqual(0);
            done();
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }());
  describe('minimumBatchSize', function () {
    it('should respect the specified :minimumBatchSize when scrolling down', function () {
      (0, _TestUtils.render)(getMarkup({
        minimumBatchSize: 10,
        threshold: 0
      }));
      expect(loadMoreRowsCalls.length).toEqual(1);
      expect(loadMoreRowsCalls).toEqual([{
        startIndex: 0,
        stopIndex: 9
      }]);
    });
    it('should respect the specified :minimumBatchSize when scrolling up', function () {
      (0, _TestUtils.render)(getMarkup({
        minimumBatchSize: 10,
        scrollToIndex: 20,
        threshold: 0
      }));
      loadMoreRowsCalls.splice(0);
      (0, _TestUtils.render)(getMarkup({
        isRowLoaded: function isRowLoaded(_ref8) {
          var index = _ref8.index;
          return index >= 20;
        },
        minimumBatchSize: 10,
        scrollToIndex: 15,
        threshold: 0
      }));
      expect(loadMoreRowsCalls.length).toEqual(1);
      expect(loadMoreRowsCalls).toEqual([{
        startIndex: 10,
        stopIndex: 19
      }]);
    });
    it('should not interfere with :threshold', function () {
      (0, _TestUtils.render)(getMarkup({
        minimumBatchSize: 10,
        threshold: 10
      }));
      expect(loadMoreRowsCalls.length).toEqual(1);
      expect(loadMoreRowsCalls).toEqual([{
        startIndex: 0,
        stopIndex: 14
      }]);
    });
    it('should respect the specified :minimumBatchSize if a user scrolls past the previous range', function () {
      var isRowLoadedIndices = {};
      function isRowLoaded(_ref9) {
        var index = _ref9.index;
        if (!isRowLoadedIndices[index]) {
          isRowLoadedIndices[index] = true;
          return false;
        } else {
          return true;
        }
      }
      (0, _TestUtils.render)(getMarkup({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: 10,
        threshold: 0
      }));
      // Simulate a new range of rows being loaded
      innerOnRowsRendered({
        startIndex: 5,
        stopIndex: 10
      });
      expect(loadMoreRowsCalls).toEqual([{
        startIndex: 0,
        stopIndex: 9
      }, {
        startIndex: 10,
        stopIndex: 19
      }]);
    });
    it('should not exceed ending boundaries if :minimumBatchSize is larger than needed', function () {
      (0, _TestUtils.render)(getMarkup({
        minimumBatchSize: 10,
        rowCount: 25,
        threshold: 0
      }));
      // Simulate a new range of rows being loaded
      innerOnRowsRendered({
        startIndex: 18,
        stopIndex: 22
      });
      expect(loadMoreRowsCalls).toEqual([{
        startIndex: 0,
        stopIndex: 9
      }, {
        startIndex: 15,
        stopIndex: 24
      }]);
    });
    it('should not exceed beginning boundaries if :minimumBatchSize is larger than needed', function () {
      (0, _TestUtils.render)(getMarkup({
        minimumBatchSize: 10,
        scrollToIndex: 15,
        threshold: 0
      }));
      loadMoreRowsCalls.splice(0);
      (0, _TestUtils.render)(getMarkup({
        isRowLoaded: function isRowLoaded(_ref10) {
          var index = _ref10.index;
          return index >= 6;
        },
        minimumBatchSize: 10,
        scrollToIndex: 2,
        threshold: 0
      }));
      expect(loadMoreRowsCalls.length).toEqual(1);
      expect(loadMoreRowsCalls).toEqual([{
        startIndex: 0,
        stopIndex: 5
      }]);
    });
  });

  // Verifies improved memoization; see bvaughn/react-virtualized/issues/345
  it('should memoize calls to :loadMoreRows (not calling unless unloaded ranges have changed)', function () {
    (0, _TestUtils.render)(getMarkup({
      isRowLoaded: function isRowLoaded() {
        return false;
      },
      minimumBatchSize: 20,
      threshold: 0
    }));
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 19
    }]);
    innerOnRowsRendered({
      startIndex: 0,
      stopIndex: 15
    });
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 19
    }]);
    loadMoreRowsCalls.splice(0);
    innerOnRowsRendered({
      startIndex: 0,
      stopIndex: 20
    });
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 20
    }]);
  });
  it('resetLoadMoreRowsCache should reset memoized state', function () {
    var component = (0, _TestUtils.render)(getMarkup({
      isRowLoaded: function isRowLoaded() {
        return false;
      },
      minimumBatchSize: 20,
      threshold: 0
    }));
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 19
    }]);
    innerOnRowsRendered({
      startIndex: 0,
      stopIndex: 15
    });
    loadMoreRowsCalls.splice(0);
    expect(loadMoreRowsCalls).toEqual([]);
    component.resetLoadMoreRowsCache();
    innerOnRowsRendered({
      startIndex: 0,
      stopIndex: 15
    });
    expect(loadMoreRowsCalls).toEqual([{
      startIndex: 0,
      stopIndex: 19
    }]);
  });
  it('resetLoadMoreRowsCache should call :loadMoreRows if :autoReload parameter is true', function () {
    var component = (0, _TestUtils.render)(getMarkup({
      isRowLoaded: function isRowLoaded() {
        return false;
      },
      minimumBatchSize: 1,
      threshold: 0
    }));

    // Simulate a new range of rows being loaded
    loadMoreRowsCalls.splice(0);
    innerOnRowsRendered({
      startIndex: 0,
      stopIndex: 10
    });
    component.resetLoadMoreRowsCache(true);
    expect(loadMoreRowsCalls[loadMoreRowsCalls.length - 1]).toEqual({
      startIndex: 0,
      stopIndex: 10
    });

    // Simulate a new range of rows being loaded
    loadMoreRowsCalls.splice(0);
    innerOnRowsRendered({
      startIndex: 20,
      stopIndex: 30
    });
    expect(loadMoreRowsCalls[loadMoreRowsCalls.length - 1]).toEqual({
      startIndex: 20,
      stopIndex: 30
    });
    loadMoreRowsCalls.splice(0);
    component.resetLoadMoreRowsCache(true);
    expect(loadMoreRowsCalls[loadMoreRowsCalls.length - 1]).toEqual({
      startIndex: 20,
      stopIndex: 30
    });
  });
});
describe('scanForUnloadedRanges', function () {
  function createIsRowLoaded(rows) {
    return function (_ref11) {
      var index = _ref11.index;
      return rows[index];
    };
  }
  it('should return an empty array for a range of rows that have all been loaded', function () {
    expect((0, _InfiniteLoader.scanForUnloadedRanges)({
      isRowLoaded: createIsRowLoaded([true, true, true]),
      startIndex: 0,
      stopIndex: 2
    })).toEqual([]);
  });
  it('return a range of only 1 unloaded row', function () {
    expect((0, _InfiniteLoader.scanForUnloadedRanges)({
      isRowLoaded: createIsRowLoaded([true, false, true]),
      startIndex: 0,
      stopIndex: 2
    })).toEqual([{
      startIndex: 1,
      stopIndex: 1
    }]);
  });
  it('return a range of multiple unloaded rows', function () {
    expect((0, _InfiniteLoader.scanForUnloadedRanges)({
      isRowLoaded: createIsRowLoaded([false, false, true]),
      startIndex: 0,
      stopIndex: 2
    })).toEqual([{
      startIndex: 0,
      stopIndex: 1
    }]);
  });
  it('return multiple ranges of unloaded rows', function () {
    expect((0, _InfiniteLoader.scanForUnloadedRanges)({
      isRowLoaded: createIsRowLoaded([true, false, false, true, false, true, false]),
      startIndex: 0,
      stopIndex: 6
    })).toEqual([{
      startIndex: 1,
      stopIndex: 2
    }, {
      startIndex: 4,
      stopIndex: 4
    }, {
      startIndex: 6,
      stopIndex: 6
    }]);
  });
});
describe('isRangeVisible', function () {
  it('first row(s) are visible', function () {
    expect((0, _InfiniteLoader.isRangeVisible)({
      lastRenderedStartIndex: 10,
      lastRenderedStopIndex: 20,
      startIndex: 20,
      stopIndex: 30
    })).toEqual(true);
  });
  it('last row(s) are visible', function () {
    expect((0, _InfiniteLoader.isRangeVisible)({
      lastRenderedStartIndex: 10,
      lastRenderedStopIndex: 20,
      startIndex: 0,
      stopIndex: 10
    })).toEqual(true);
  });
  it('all row(s) are visible', function () {
    expect((0, _InfiniteLoader.isRangeVisible)({
      lastRenderedStartIndex: 10,
      lastRenderedStopIndex: 20,
      startIndex: 12,
      stopIndex: 14
    })).toEqual(true);
  });
  it('no row(s) are visible', function () {
    expect((0, _InfiniteLoader.isRangeVisible)({
      lastRenderedStartIndex: 10,
      lastRenderedStopIndex: 20,
      startIndex: 0,
      stopIndex: 9
    })).toEqual(false);
    expect((0, _InfiniteLoader.isRangeVisible)({
      lastRenderedStartIndex: 10,
      lastRenderedStopIndex: 20,
      startIndex: 21,
      stopIndex: 30
    })).toEqual(false);
  });
});
describe('forceUpdateReactVirtualizedComponent', function () {
  it('should call :recomputeGridSize if defined', function () {
    var recomputeGridSize = jest.fn();
    var TestComponent = /*#__PURE__*/function (_React$Component) {
      function TestComponent() {
        var _this;
        (0, _classCallCheck2["default"])(this, TestComponent);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, TestComponent, [].concat(args));
        (0, _defineProperty2["default"])(_this, "recomputeGridSize", recomputeGridSize);
        return _this;
      }
      (0, _inherits2["default"])(TestComponent, _React$Component);
      return (0, _createClass2["default"])(TestComponent, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement("div", null);
        }
      }]);
    }(React.Component);
    (0, _InfiniteLoader.forceUpdateReactVirtualizedComponent)((0, _TestUtils.render)(/*#__PURE__*/React.createElement(TestComponent, null)), 10);
    expect(recomputeGridSize).toHaveBeenCalledTimes(1);
    expect(recomputeGridSize).toHaveBeenCalledWith(10);
  });
  it('should called :recomputeRowHeights if defined', function () {
    var recomputeRowHeights = jest.fn();
    var TestComponent = /*#__PURE__*/function (_React$Component2) {
      function TestComponent() {
        var _this2;
        (0, _classCallCheck2["default"])(this, TestComponent);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        _this2 = _callSuper(this, TestComponent, [].concat(args));
        (0, _defineProperty2["default"])(_this2, "recomputeRowHeights", recomputeRowHeights);
        return _this2;
      }
      (0, _inherits2["default"])(TestComponent, _React$Component2);
      return (0, _createClass2["default"])(TestComponent, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement("div", null);
        }
      }]);
    }(React.Component);
    (0, _InfiniteLoader.forceUpdateReactVirtualizedComponent)((0, _TestUtils.render)(/*#__PURE__*/React.createElement(TestComponent, null)), 10);
    expect(recomputeRowHeights).toHaveBeenCalledTimes(1);
    expect(recomputeRowHeights).toHaveBeenCalledWith(10);
  });
  it('should call :forceUpdate otherwise', function () {
    var forceUpdate = jest.fn();
    var TestComponent = /*#__PURE__*/function (_React$Component3) {
      function TestComponent() {
        var _this3;
        (0, _classCallCheck2["default"])(this, TestComponent);
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        _this3 = _callSuper(this, TestComponent, [].concat(args));
        (0, _defineProperty2["default"])(_this3, "forceUpdate", forceUpdate);
        return _this3;
      }
      (0, _inherits2["default"])(TestComponent, _React$Component3);
      return (0, _createClass2["default"])(TestComponent, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement("div", null);
        }
      }]);
    }(React.Component);
    (0, _InfiniteLoader.forceUpdateReactVirtualizedComponent)((0, _TestUtils.render)(/*#__PURE__*/React.createElement(TestComponent, null)), 10);
    expect(forceUpdate).toHaveBeenCalledTimes(1);
  });
});