var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import forIn from '@antv/util/lib/for-in';
import isFunction from '@antv/util/lib/is-function';
import debounce from '@antv/util/lib/debounce';
import isArray from '@antv/util/lib/is-array';
import uniqId from '@antv/util/lib/unique-id';
import GroupContext, { withGroupContext } from '../context/group';
import { EVENTS } from './Base/events';
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isReady: false,
        };
        _this.handleRender = debounce(function () {
            if (!_this.instance) {
                var _a = _this.props, group = _a.group, zIndex = _a.zIndex, name_1 = _a.name;
                // children.push 中push 找不到
                _this.instance = group.chart.canvas.addGroup({ zIndex: zIndex, name: name_1 });
                group.chart.canvas.sort();
                _this.setState({ isReady: true });
            }
            else {
                _this.forceUpdate();
            }
        }, 300);
        _this.configGroup = function (props) {
            var _a;
            var rotate = props.rotate, animate = props.animate, rotateAtPoint = props.rotateAtPoint, scale = props.scale, translate = props.translate, move = props.move;
            if (rotate) {
                _this.instance.rotate(rotate);
            }
            if (isArray(rotateAtPoint)) {
                // @ts-ignore
                (_a = _this.instance).rotateAtPoint.apply(_a, rotateAtPoint);
            }
            if (scale) {
                _this.instance.rotate(scale);
            }
            if (translate) {
                _this.instance.translate(translate[0], translate[1]);
            }
            if (move) {
                _this.instance.move(move.x, move.y);
            }
            if (animate) {
                var toAttrs = animate.toAttrs, animateCfg = __rest(animate, ["toAttrs"]);
                _this.instance.animate(toAttrs, animateCfg);
            }
        };
        _this.bindEvents = function () {
            _this.instance.off();
            forIn(EVENTS, function (v, k) {
                if (isFunction(_this.props[k])) {
                    _this.instance.on(v, _this.props[k]);
                }
            });
        };
        var group = props.group, zIndex = props.zIndex, name = props.name;
        _this.id = uniqId('group');
        if (group.isChartCanvas) {
            group.chart.on('afterrender', _this.handleRender);
        }
        else {
            _this.instance = group.addGroup({ zIndex: zIndex, name: name });
            _this.configGroup(props);
        }
        return _this;
    }
    Group.prototype.componentWillUnmount = function () {
        var group = this.props.group;
        if (group.isChartCanvas) {
            group.chart.off('afterrender', this.handleRender);
        }
        if (this.instance) {
            this.instance.remove(true);
        }
    };
    Group.prototype.getInstance = function () {
        return this.instance;
    };
    Group.prototype.render = function () {
        var group = this.props.group;
        if (this.instance) {
            this.instance.clear();
            this.bindEvents();
        }
        return (group.isChartCanvas && this.state.isReady) || !group.isChartCanvas ? (React.createElement(GroupContext.Provider, { value: this.instance },
            React.createElement(React.Fragment, { key: uniqId(this.id) }, this.props.children))) : (React.createElement(React.Fragment, null));
    };
    Group.defaultProps = {
        zIndex: 3,
    };
    return Group;
}(React.Component));
export default withGroupContext(Group);
//# sourceMappingURL=Group.js.map