"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// App.jsx
// IT5007 Assignment-1: TicketMaster
//
// Starter Skeleton (Entry-Level)
//
// IMPORTANT:
// - This template is LLM generated and may have mistakes.
// - It is the students responsiblity to fix mistakes in  template, if any.
// - Students must fill in state, CRUD operations, and UI behavior.
// - Search for "TODO" markers.
/* =========================================
   MAIN APP COMPONENT
========================================= */
var App = /*#__PURE__*/function (_React$Component) {
  function App() {
    _classCallCheck(this, App);
    return _callSuper(this, App, arguments);
  }
  _inherits(App, _React$Component);
  return _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "TicketMaster Reservation System"), /*#__PURE__*/React.createElement(NavBar, null));
    }
  }]);
}(React.Component);
/* =========================================
   NAVIGATION BAR COMPONENT (Q2)
========================================= */
var NavBar = /*#__PURE__*/function (_React$Component2) {
  function NavBar() {
    _classCallCheck(this, NavBar);
    return _callSuper(this, NavBar, arguments);
  }
  _inherits(NavBar, _React$Component2);
  return _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Navigation"));
    }
  }]);
}(React.Component);
/* =========================================
   DISPLAY ATTENDEES COMPONENT (Q3)
========================================= */
var DisplayAttendees = /*#__PURE__*/function (_React$Component3) {
  function DisplayAttendees() {
    _classCallCheck(this, DisplayAttendees);
    return _callSuper(this, DisplayAttendees, arguments);
  }
  _inherits(DisplayAttendees, _React$Component3);
  return _createClass(DisplayAttendees, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Attendee List"));
    }
  }]);
}(React.Component);
/* =========================================
   ADD ATTENDEE COMPONENT (Q4)
========================================= */
var AddAttendee = /*#__PURE__*/function (_React$Component4) {
  function AddAttendee() {
    _classCallCheck(this, AddAttendee);
    return _callSuper(this, AddAttendee, arguments);
  }
  _inherits(AddAttendee, _React$Component4);
  return _createClass(AddAttendee, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Add Attendee Reservation"));
    }
  }]);
}(React.Component);
/* =========================================
   DELETE ATTENDEE COMPONENT (Q5)
========================================= */
var DeleteAttendee = /*#__PURE__*/function (_React$Component5) {
  function DeleteAttendee() {
    _classCallCheck(this, DeleteAttendee);
    return _callSuper(this, DeleteAttendee, arguments);
  }
  _inherits(DeleteAttendee, _React$Component5);
  return _createClass(DeleteAttendee, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Cancel Reservation"));
    }
  }]);
}(React.Component);
/* =========================================
   SEAT MAP VISUALIZATION (Q6)
========================================= */
var SeatMap = /*#__PURE__*/function (_React$Component6) {
  function SeatMap() {
    _classCallCheck(this, SeatMap);
    return _callSuper(this, SeatMap, arguments);
  }
  _inherits(SeatMap, _React$Component6);
  return _createClass(SeatMap, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Seat Map"));
    }
  }]);
}(React.Component);
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById("contents"));