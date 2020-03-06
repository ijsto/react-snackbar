"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1240px;\n  padding: 0 92px;\n  z-index: 4;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background: ", ";\n  color: white;\n  display: flex;\n  justify-content: center;\n  height: 64px;\n  position: absolute;\n  top: 64px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSnackbar = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      error = _ref.error;
  return error ? theme.alertCol : theme.blueCol;
});

var StyledSnackbarContent = _styledComponents["default"].div(_templateObject2());

var Snackbar = function Snackbar(_ref2) {
  var message = _ref2.message,
      error = _ref2.error,
      onClear = _ref2.onClear,
      onClearAll = _ref2.onClearAll;
  (0, _react.useEffect)(function () {
    var timeOut = setTimeout(function () {
      onClear();
    }, 3000);
    return function () {
      return clearTimeout(timeOut);
    };
  });
  return _react["default"].createElement(StyledSnackbar, {
    error: error
  }, _react["default"].createElement(StyledSnackbarContent, null, _react["default"].createElement("div", null, error || message), _react["default"].createElement("div", null, onClearAll && _react["default"].createElement("button", {
    type: "button",
    onClick: onClearAll
  }, "Clear ALL"), _react["default"].createElement("button", {
    type: "button",
    onClick: onClear
  }, "Dismiss"))));
};

var _default = Snackbar;
exports["default"] = _default;
