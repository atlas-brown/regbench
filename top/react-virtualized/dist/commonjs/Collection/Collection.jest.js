"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _scrollbarSize = _interopRequireDefault(require("dom-helpers/scrollbarSize"));
var React = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _testUtils = require("react-dom/test-utils");
var _TestUtils = require("../TestUtils");
var _Collection = _interopRequireDefault(require("./Collection"));
var _TestData = require("./TestData");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * Tests Collection and CollectionView.
 * 
 */
describe('Collection', function () {
  function defaultCellRenderer(_ref) {
    var index = _ref.index,
      key = _ref.key,
      style = _ref.style;
    return /*#__PURE__*/React.createElement("div", {
      className: "cell",
      key: key,
      style: style
    }, "cell:", index);
  }
  function getMarkup() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _props$cellCount = props.cellCount,
      cellCount = _props$cellCount === void 0 ? _TestData.CELLS.length : _props$cellCount;
    function defaultCellSizeAndPositionGetter(_ref2) {
      var index = _ref2.index;
      index %= cellCount;
      return _TestData.CELLS[index];
    }
    return /*#__PURE__*/React.createElement(_Collection["default"], (0, _extends2["default"])({
      cellCount: cellCount,
      cellRenderer: defaultCellRenderer,
      cellSizeAndPositionGetter: defaultCellSizeAndPositionGetter,
      height: _TestData.SECTION_SIZE,
      sectionSize: _TestData.SECTION_SIZE,
      width: _TestData.SECTION_SIZE * 2
    }, props));
  }
  function simulateScroll(_ref3) {
    var collection = _ref3.collection,
      _ref3$scrollLeft = _ref3.scrollLeft,
      scrollLeft = _ref3$scrollLeft === void 0 ? 0 : _ref3$scrollLeft,
      _ref3$scrollTop = _ref3.scrollTop,
      scrollTop = _ref3$scrollTop === void 0 ? 0 : _ref3$scrollTop;
    var target = {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
    collection._collectionView._scrollingContainer = target; // HACK to work around _onScroll target check
    _testUtils.Simulate.scroll((0, _reactDom.findDOMNode)(collection), {
      target: target
    });
  }
  function compareArrays(array1, array2) {
    expect(array1.length).toEqual(array2.length);
    array2.forEach(function (value) {
      expect(array1).toContain(value);
    });
  }
  describe('number of rendered children', function () {
    it('should render enough children to fill the available area', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup()));
      expect(rendered.querySelectorAll('.cell').length).toEqual(4);
    });
    it('should not render more cells than available if the area is not filled', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        cellCount: 2
      })));
      expect(rendered.querySelectorAll('.cell').length).toEqual(2);
    });

    // Small performance tweak added in 5.5.6
    it('should not render/parent cells that are null or false', function () {
      function cellRenderer(_ref4) {
        var index = _ref4.index,
          key = _ref4.key,
          style = _ref4.style;
        if (index > 2) {
          return null;
        } else {
          return /*#__PURE__*/React.createElement("div", {
            className: "cell",
            key: key,
            style: style
          }, index);
        }
      }
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        cellRenderer: cellRenderer
      })));
      expect(rendered.querySelectorAll('.cell').length).toEqual(3);
    });
  });
  describe('shows and hides scrollbars based on rendered content', function () {
    var scrollbarSize;
    beforeAll(function () {
      scrollbarSize = (0, _scrollbarSize["default"])();
    });
    it('should set overflowX:hidden if columns fit within the available width and y-axis has no scrollbar', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 4,
        width: 6
      })));
      expect(rendered.style.overflowX).toEqual('hidden');
    });
    it('should set overflowX:hidden if columns and y-axis scrollbar fit within the available width', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 1,
        width: 6 + scrollbarSize
      })));
      expect(rendered.style.overflowX).toEqual('hidden');
    });
    it('should leave overflowX:auto if columns require more than the available width', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        width: 1
      })));
      expect(rendered.style.overflowX).not.toEqual('hidden');
    });
    it('should leave overflowX:auto if columns and y-axis scrollbar require more than the available width', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 1,
        width: 6 + scrollbarSize - 1
      })));
      expect(rendered.style.overflowX).not.toEqual('hidden');
    });
    it('should set overflowY:hidden if rows fit within the available width and xaxis has no scrollbar', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 4,
        width: 6
      })));
      expect(rendered.style.overflowY).toEqual('hidden');
    });
    it('should set overflowY:hidden if rows and x-axis scrollbar fit within the available width', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 4 + scrollbarSize,
        width: 1
      })));
      expect(rendered.style.overflowY).toEqual('hidden');
    });
    it('should leave overflowY:auto if rows require more than the available height', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 1
      })));
      expect(rendered.style.overflowY).not.toEqual('hidden');
    });
    it('should leave overflowY:auto if rows and y-axis scrollbar require more than the available height', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 4 + scrollbarSize - 1,
        width: 1
      })));
      expect(rendered.style.overflowY).not.toEqual('hidden');
    });
    it('should accept styles that overwrite calculated ones', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        height: 1,
        style: {
          overflowX: 'auto',
          overflowY: 'auto'
        },
        width: 1
      })));
      expect(rendered.style.overflowX).toEqual('auto');
      expect(rendered.style.overflowY).toEqual('auto');
    });
  });
  describe('autoHeight', function () {
    it('should set the container height to auto to adjust to innerScrollContainer height', function () {
      var props = {
        autoHeight: true
      };
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup(props)));
      expect(rendered.style.height).toEqual('auto');
    });
    it('should have container height still affecting number of rows rendered', function () {
      var indices;
      var props = {
        autoHeight: true,
        height: 500,
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        }
      };
      (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup(props)));
      compareArrays(indices, [0, 1, 2, 3, 4, 5]);
    });
    it('should have innerScrollContainer height to be equal number of rows * rowHeight', function () {
      var props = {
        autoHeight: true
      };
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup(props)));
      expect(rendered.querySelector('.ReactVirtualized__Collection__innerScrollContainer').style.height).toEqual('4px');
    });
  });
  describe(':scrollToCell', function () {
    it('should scroll to the top/left', function () {
      var collection = (0, _TestUtils.render)(getMarkup({
        scrollToCell: 0
      }));
      expect(collection._collectionView.state.scrollLeft).toEqual(0);
      expect(collection._collectionView.state.scrollTop).toEqual(0);
    });
    it('should scroll over to the middle', function () {
      var collection = (0, _TestUtils.render)(getMarkup({
        scrollToCell: 7
      }));
      expect(collection._collectionView.state.scrollLeft).toEqual(1);
      expect(collection._collectionView.state.scrollTop).toEqual(1);
    });
    it('should scroll to the bottom/right', function () {
      var collection = (0, _TestUtils.render)(getMarkup({
        scrollToCell: 9
      }));
      expect(collection._collectionView.state.scrollLeft).toEqual(2);
      expect(collection._collectionView.state.scrollTop).toEqual(2);
    });
    it('should honor the specified :scrollToAlignment', function () {
      var collection = (0, _TestUtils.render)(getMarkup({
        scrollToAlignment: 'start',
        scrollToCell: 2,
        width: _TestData.SECTION_SIZE
      }));
      // Minimum amount of scrolling ("auto") would be 0,0
      expect(collection._collectionView.state.scrollLeft).toEqual(2);
      expect(collection._collectionView.state.scrollTop).toEqual(1);
      collection = (0, _TestUtils.render)(getMarkup({
        scrollToAlignment: 'end',
        scrollToCell: 2,
        width: _TestData.SECTION_SIZE
      }));
      // This cell would already by visible by "auto" rules
      expect(collection._collectionView.state.scrollLeft).toEqual(1);
      expect(collection._collectionView.state.scrollTop).toEqual(0);
      collection = (0, _TestUtils.render)(getMarkup({
        scrollToAlignment: 'center',
        scrollToCell: 4,
        width: _TestData.SECTION_SIZE
      }));
      // This cell doesn't fit entirely in the viewport but we center it anyway.
      expect(collection._collectionView.state.scrollLeft).toEqual(0.5);
      expect(collection._collectionView.state.scrollTop).toEqual(2);
    });
    it('should scroll to a cell just added', function () {
      var collection = (0, _TestUtils.render)(getMarkup({
        cellCount: 4
      }));
      expect(collection._collectionView.state.scrollLeft).toEqual(0);
      expect(collection._collectionView.state.scrollTop).toEqual(0);
      collection = (0, _TestUtils.render)(getMarkup({
        cellCount: 8,
        scrollToCell: 7
      }));
      expect(collection._collectionView.state.scrollLeft).toEqual(1);
      expect(collection._collectionView.state.scrollTop).toEqual(1);
    });
  });
  describe('property updates', function () {
    it('should update :scrollToCell position when :width changes', function () {
      var collection = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        scrollToCell: 3
      })));
      expect(collection.textContent).toContain('cell:3');
      // Making the collection narrower leaves only room for 1 item
      collection = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        scrollToCell: 3,
        width: 1
      })));
      expect(collection.textContent).toContain('cell:3');
    });
    it('should update :scrollToCell position when :height changes', function () {
      var collection = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        scrollToCell: 4
      })));
      expect(collection.textContent).toContain('cell:4');
      // Making the collection shorter leaves only room for 1 item
      collection = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        scrollToCell: 4,
        height: 1
      })));
      expect(collection.textContent).toContain('cell:4');
    });
    it('should update scroll position when :scrollToCell changes', function () {
      var collection = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup()));
      expect(collection.textContent).not.toContain('cell:9');
      collection = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        scrollToCell: 9
      })));
      expect(collection.textContent).toContain('cell:9');
    });
  });
  describe('noContentRenderer', function () {
    it('should call :noContentRenderer if :cellCount is 0', function () {
      var list = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        noContentRenderer: function noContentRenderer() {
          return /*#__PURE__*/React.createElement("div", null, "No data");
        },
        cellCount: 0
      })));
      expect(list.textContent).toEqual('No data');
    });
    it('should render an empty body if :cellCount is 0 and there is no :noContentRenderer', function () {
      var list = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        cellCount: 0
      })));
      expect(list.textContent).toEqual('');
    });
    it('should not show the :noContentRenderer when there are children, even if no children are currently visible (sparse)', function () {
      var offscreenSizeAndPosition = {
        x: _TestData.SECTION_SIZE * 3,
        y: _TestData.SECTION_SIZE * 3,
        width: 1,
        height: 1
      };
      function cellSizeAndPositionGetter() {
        return offscreenSizeAndPosition;
      }
      var list = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        cellCount: 1,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        noContentRenderer: function noContentRenderer() {
          return /*#__PURE__*/React.createElement("div", null, "No data");
        }
      })));
      expect(list.textContent).not.toEqual('No data');
    });
  });
  describe('onSectionRendered', function () {
    it('should call :onSectionRendered if at least one cell is rendered', function () {
      var indices;
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        }
      }));
      compareArrays(indices, [0, 1, 2, 3]);
    });
    it('should not call :onSectionRendered unless the rendered indices have changed', function () {
      var numCalls = 0;
      var indices;
      var onSectionRendered = function onSectionRendered(params) {
        indices = params.indices;
        numCalls++;
      };
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: onSectionRendered
      }));
      expect(numCalls).toEqual(1);
      compareArrays(indices, [0, 1, 2, 3]);
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: onSectionRendered
      }));
      expect(numCalls).toEqual(1);
      compareArrays(indices, [0, 1, 2, 3]);
    });
    it('should call :onSectionRendered if the rendered indices have changed', function () {
      var numCalls = 0;
      var indices;
      var onSectionRendered = function onSectionRendered(params) {
        indices = params.indices;
        numCalls++;
      };
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: onSectionRendered
      }));
      expect(numCalls).toEqual(1);
      compareArrays(indices, [0, 1, 2, 3]);
      (0, _TestUtils.render)(getMarkup({
        height: _TestData.SECTION_SIZE * 2,
        onSectionRendered: onSectionRendered
      }));
      expect(numCalls).toEqual(2);
      compareArrays(indices, [0, 1, 2, 3, 4, 5]);
      (0, _TestUtils.render)(getMarkup({
        height: _TestData.SECTION_SIZE * 2,
        onSectionRendered: onSectionRendered,
        width: _TestData.SECTION_SIZE
      }));
      expect(numCalls).toEqual(3);
      expect(indices).toEqual([0, 4]);
    });
    it('should not call :onSectionRendered if no cells are rendered', function () {
      var numCalls = 0;
      (0, _TestUtils.render)(getMarkup({
        height: 0,
        onSectionRendered: function onSectionRendered() {
          return numCalls++;
        }
      }));
      expect(numCalls).toEqual(0);
    });
  });
  describe(':scrollLeft and :scrollTop properties', function () {
    it('should render correctly when an initial :scrollLeft and :scrollTop properties are specified', function () {
      var indices;
      var collection = (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        },
        scrollLeft: 2,
        scrollTop: 2
      }));
      compareArrays(indices, [3, 4, 5, 7, 8, 9]);
      expect(collection._collectionView.state.scrollPositionChangeReason).toEqual('requested');
    });
    it('should render correctly when :scrollLeft and :scrollTop properties are updated', function () {
      var indices;
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        }
      }));
      compareArrays(indices, [0, 1, 2, 3]);
      var collection = (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        },
        scrollLeft: 2,
        scrollTop: 2
      }));
      compareArrays(indices, [3, 4, 5, 7, 8, 9]);
      expect(collection._collectionView.state.scrollPositionChangeReason).toEqual('requested');
    });
  });
  describe('styles, classNames, and ids', function () {
    it('should use the expected global CSS classNames', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup()));
      expect(rendered.className).toEqual('ReactVirtualized__Collection');
    });
    it('should use a custom :className if specified', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        className: 'foo'
      })));
      expect(rendered.className).toContain('foo');
    });
    it('should use a custom :id if specified', function () {
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        id: 'bar'
      })));
      expect(rendered.getAttribute('id')).toEqual('bar');
    });
    it('should use a custom :style if specified', function () {
      var style = {
        backgroundColor: 'red'
      };
      var rendered = (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        style: style
      })));
      expect(rendered.style.backgroundColor).toEqual('red');
    });
  });
  describe('onScroll', function () {
    it('should trigger callback when component is mounted', function () {
      var onScrollCalls = [];
      (0, _TestUtils.render)(getMarkup({
        onScroll: function onScroll(params) {
          return onScrollCalls.push(params);
        },
        scrollLeft: 2,
        scrollTop: 1
      }));
      expect(onScrollCalls).toEqual([{
        clientHeight: _TestData.SECTION_SIZE,
        clientWidth: _TestData.SECTION_SIZE * 2,
        scrollHeight: 4,
        scrollLeft: 2,
        scrollTop: 1,
        scrollWidth: 6
      }]);
    });
    it('should trigger callback when component scrolls horizontally', function () {
      var onScrollCalls = [];
      var collection = (0, _TestUtils.render)(getMarkup({
        onScroll: function onScroll(params) {
          return onScrollCalls.push(params);
        }
      }));
      simulateScroll({
        collection: collection,
        scrollLeft: 1,
        scrollTop: 0
      });
      expect(onScrollCalls.length).toEqual(2);
      expect(onScrollCalls[1]).toEqual({
        clientHeight: _TestData.SECTION_SIZE,
        clientWidth: _TestData.SECTION_SIZE * 2,
        scrollHeight: 4,
        scrollLeft: 1,
        scrollTop: 0,
        scrollWidth: 6
      });
    });
    it('should trigger callback when component scrolls vertically', function () {
      var onScrollCalls = [];
      var collection = (0, _TestUtils.render)(getMarkup({
        onScroll: function onScroll(params) {
          return onScrollCalls.push(params);
        }
      }));
      simulateScroll({
        collection: collection,
        scrollLeft: 0,
        scrollTop: 2
      });
      expect(onScrollCalls.length).toEqual(2);
      expect(onScrollCalls[1]).toEqual({
        clientHeight: _TestData.SECTION_SIZE,
        clientWidth: _TestData.SECTION_SIZE * 2,
        scrollHeight: 4,
        scrollLeft: 0,
        scrollTop: 2,
        scrollWidth: 6
      });
    });
    it('should not allow negative scroll values', function () {
      var onScrollCalls = [];
      var collection = (0, _TestUtils.render)(getMarkup({
        onScroll: function onScroll(params) {
          return onScrollCalls.push(params);
        }
      }));
      simulateScroll({
        collection: collection,
        scrollLeft: -1,
        scrollTop: -1
      });
      expect(onScrollCalls.length).toEqual(1);
      expect(onScrollCalls[0].scrollLeft).toEqual(0);
      expect(onScrollCalls[0].scrollTop).toEqual(0);
    });
  });
  describe('cellGroupRenderer', function () {
    it('should use a custom :cellGroupRenderer if specified', function () {
      var cellGroupRendererCalled = 0;
      var cellGroupRendererParams;
      var cellRenderer = function cellRenderer(_ref5) {
        var index = _ref5.index,
          key = _ref5.key,
          style = _ref5.style;
        return /*#__PURE__*/React.createElement("div", {
          key: key,
          style: style
        }, index);
      };
      (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup({
        cellRenderer: cellRenderer,
        cellGroupRenderer: function cellGroupRenderer(params) {
          cellGroupRendererParams = params;
          cellGroupRendererCalled++;
          return [/*#__PURE__*/React.createElement("div", {
            key: "0"
          }, "Fake content")];
        }
      })));
      expect(cellGroupRendererCalled).toEqual(1);
      expect(cellGroupRendererParams.cellRenderer).toEqual(cellRenderer);
      expect((0, _typeof2["default"])(cellGroupRendererParams.cellSizeAndPositionGetter)).toEqual('function');
      compareArrays(cellGroupRendererParams.indices, [0, 1, 2, 3]);
    });
  });
  it('should pass the cellRenderer an :isScrolling flag when scrolling is in progress', /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(done) {
      var cellRendererCalls, cellRenderer, collection;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cellRenderer = function _cellRenderer(_ref7) {
              var index = _ref7.index,
                isScrolling = _ref7.isScrolling,
                key = _ref7.key,
                style = _ref7.style;
              cellRendererCalls.push(isScrolling);
              return defaultCellRenderer({
                index: index,
                key: key,
                style: style
              });
            };
            cellRendererCalls = [];
            collection = (0, _TestUtils.render)(getMarkup({
              cellRenderer: cellRenderer
            }));
            expect(cellRendererCalls[0]).toEqual(false);
            cellRendererCalls.splice(0);
            simulateScroll({
              collection: collection,
              scrollTop: 1
            });

            // Give React time to process the queued setState()
            _context.next = 8;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 1);
            });
          case 8:
            expect(cellRendererCalls[0]).toEqual(true);
            done();
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  describe('horizontalOverscanSize and verticalOverscanSize', function () {
    it('should include the horizontal and vertical overscan size when rendering cells', function () {
      var indices;
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        },
        height: 1,
        horizontalOverscanSize: 2,
        sectionSize: 1,
        scrollLeft: 2,
        scrollTop: 2,
        width: 1,
        verticalOverscanSize: 1
      }));
      compareArrays(indices, [0, 2, 3, 4, 5, 6, 7, 9]);
    });
    it('should not exceed the top/left borders regardless of overscan size', function () {
      var indices;
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        },
        height: 2,
        horizontalOverscanSize: 1,
        sectionSize: 1,
        scrollLeft: 0,
        scrollTop: 0,
        width: 1,
        verticalOverscanSize: 2
      }));
      compareArrays(indices, [0, 4]);
    });
    it('should not exceed the bottom/right borders regardless of overscan size', function () {
      var indices;
      (0, _TestUtils.render)(getMarkup({
        onSectionRendered: function onSectionRendered(params) {
          indices = params.indices;
        },
        height: 2,
        horizontalOverscanSize: 1,
        sectionSize: 1,
        scrollLeft: 5,
        scrollTop: 2,
        width: 1,
        verticalOverscanSize: 2
      }));
      compareArrays(indices, [6, 7, 8, 9]);
    });
  });
  describe('cell caching', function () {
    it('should not cache cells if the Grid is not scrolling', function () {
      var cellRendererCalls = [];
      function cellRenderer(_ref8) {
        var isScrolling = _ref8.isScrolling,
          index = _ref8.index,
          key = _ref8.key,
          style = _ref8.style;
        cellRendererCalls.push({
          isScrolling: isScrolling,
          index: index
        });
        return defaultCellRenderer({
          index: index,
          key: key,
          style: style
        });
      }
      var props = {
        cellRenderer: cellRenderer,
        scrollLeft: 0,
        scrollTop: 0
      };
      (0, _reactDom.findDOMNode)((0, _TestUtils.render)(getMarkup(props)));
      expect(cellRendererCalls.length).toEqual(4);
      cellRendererCalls.forEach(function (call) {
        return expect(call.isScrolling).toEqual(false);
      });
      cellRendererCalls.splice(0);
      (0, _TestUtils.render)(getMarkup(_objectSpread(_objectSpread({}, props), {}, {
        foo: 'bar' // Force re-render
      })));
      expect(cellRendererCalls.length).toEqual(4);
      cellRendererCalls.forEach(function (call) {
        return expect(call.isScrolling).toEqual(false);
      });
    });
    it.skip('should cache a cell once it has been rendered while scrolling', function () {
      var cellRendererCalls = [];
      function cellRenderer(_ref9) {
        var isScrolling = _ref9.isScrolling,
          index = _ref9.index,
          key = _ref9.key,
          style = _ref9.style;
        cellRendererCalls.push({
          isScrolling: isScrolling,
          index: index
        });
        return defaultCellRenderer({
          index: index,
          key: key,
          style: style
        });
      }
      var props = {
        cellRenderer: cellRenderer,
        scrollLeft: 0,
        scrollTop: 0
      };
      var collection = (0, _TestUtils.render)(getMarkup(props));
      expect(cellRendererCalls.length).toEqual(4);
      cellRendererCalls.forEach(function (call) {
        return expect(call.isScrolling).toEqual(false);
      });

      // FIXME: simulate scroll is not triggering cells to render in cache
      // Scroll a little bit; newly-rendered cells will be cached.
      simulateScroll({
        collection: collection,
        scrollTop: 2
      });
      cellRendererCalls.splice(0);

      // At this point cells 4 and 5 have been rendered,
      // But cells 7, 8, and 9 have not.
      (0, _TestUtils.render)(getMarkup(_objectSpread(_objectSpread({}, props), {}, {
        scrollLeft: 1,
        scrollTop: 3
      })));
      expect(cellRendererCalls.length).toEqual(3);
      cellRendererCalls.forEach(function (call) {
        return expect(call.isScrolling).toEqual(true);
      });
    });
    it('should clear cache once :isScrolling is false', /*#__PURE__*/function () {
      var _ref10 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(done) {
        var cellRendererCalls, cellRenderer, props, collection;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              cellRenderer = function _cellRenderer2(_ref11) {
                var isScrolling = _ref11.isScrolling,
                  index = _ref11.index,
                  key = _ref11.key,
                  style = _ref11.style;
                cellRendererCalls.push({
                  isScrolling: isScrolling,
                  index: index
                });
                return defaultCellRenderer({
                  isScrolling: isScrolling,
                  index: index,
                  key: key,
                  style: style
                });
              };
              cellRendererCalls = [];
              props = {
                cellRenderer: cellRenderer,
                scrollLeft: 0,
                scrollTop: 0
              };
              collection = (0, _TestUtils.render)(getMarkup(props));
              simulateScroll({
                collection: collection,
                scrollTop: 1
              });

              // Allow scrolling timeout to complete so that cell cache is reset
              _context2.next = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 7:
              cellRendererCalls.splice(0);
              (0, _TestUtils.render)(getMarkup(_objectSpread(_objectSpread({}, props), {}, {
                scrollTop: 1
              })));
              expect(cellRendererCalls.length).not.toEqual(0);
              done();
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref10.apply(this, arguments);
      };
    }());
  });

  // See issue #568 for more
  it('forceUpdate will also forceUpdate the inner CollectionView', function () {
    var cellRenderer = jest.fn();
    cellRenderer.mockImplementation(function (_ref12) {
      var key = _ref12.key;
      return /*#__PURE__*/React.createElement("div", {
        key: key
      });
    });
    var rendered = (0, _TestUtils.render)(getMarkup({
      cellRenderer: cellRenderer
    }));
    expect(cellRenderer).toHaveBeenCalled();
    cellRenderer.mockReset();
    rendered.forceUpdate();
    expect(cellRenderer).toHaveBeenCalled();
  });
});