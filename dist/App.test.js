"use strict";

var _react = require("@testing-library/react");
var _App = _interopRequireDefault(require("./App"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('App integration tests', () => {
  it('RegisterForm', () => {
    (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {}));
  });
});