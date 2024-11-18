"use strict";

var _react = require("@testing-library/react");
var _RegisterForm = _interopRequireDefault(require("./components/RegisterForm"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('RegisterForm component', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2024-01-01'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('should have empty fields and the submit button should be disabled initially', async () => {
    (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_RegisterForm.default, {}));
    const submitButton = await _react.screen.findByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });
  it('should display validation errors for invalid inputs', async () => {
    (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_RegisterForm.default, {}));
    const emailInput = _react.screen.getByTestId('email-input');
    const firstNameInput = _react.screen.getByTestId('first-name-input');
    const lastNameInput = _react.screen.getByTestId('last-name-input');
    const cityInput = _react.screen.getByTestId('city-input');
    const postalCodeInput = _react.screen.getByTestId('postal-code-input');
    const birthDateInput = _react.screen.getByTestId('birth-date-input');
    const submitButton = _react.screen.getByTestId('submit-button');
    _react.fireEvent.change(emailInput, {
      target: {
        value: 'invalid-email'
      }
    });
    _react.fireEvent.change(firstNameInput, {
      target: {
        value: 'John123'
      }
    });
    _react.fireEvent.change(lastNameInput, {
      target: {
        value: 'Doe@'
      }
    });
    _react.fireEvent.change(cityInput, {
      target: {
        value: 'City!'
      }
    });
    _react.fireEvent.change(postalCodeInput, {
      target: {
        value: '123'
      }
    });
    _react.fireEvent.change(birthDateInput, {
      target: {
        value: '2005-01-01'
      }
    });
    _react.fireEvent.click(submitButton);
    await (0, _react.waitFor)(() => {
      expect(_react.screen.getByTestId('email-error')).toHaveTextContent('Email is not valid.');
    });
    await (0, _react.waitFor)(() => {
      expect(_react.screen.getByTestId('first-name-error')).toHaveTextContent('First name must not contain special characters or numbers.');
    });
    await (0, _react.waitFor)(() => {
      expect(_react.screen.getByTestId('last-name-error')).toHaveTextContent('Last name must not contain special characters or numbers.');
    });
    await (0, _react.waitFor)(() => {
      expect(_react.screen.getByTestId('city-error')).toHaveTextContent('City name must not contain special characters or numbers.');
    });
    await (0, _react.waitFor)(() => {
      expect(_react.screen.getByTestId('postal-code-error')).toHaveTextContent('Postal code must be exactly 5 digits.');
    });
  });
  it('should enable the submit button when all fields are valid', async () => {
    (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_RegisterForm.default, {}));
    const emailInput = _react.screen.getByTestId('email-input');
    const firstNameInput = _react.screen.getByTestId('first-name-input');
    const lastNameInput = _react.screen.getByTestId('last-name-input');
    const cityInput = _react.screen.getByTestId('city-input');
    const postalCodeInput = _react.screen.getByTestId('postal-code-input');
    const birthDateInput = _react.screen.getByTestId('birth-date-input');
    const submitButton = _react.screen.getByTestId('submit-button');
    _react.fireEvent.change(emailInput, {
      target: {
        value: 'john.doe@example.com'
      }
    });
    _react.fireEvent.change(firstNameInput, {
      target: {
        value: 'John'
      }
    });
    _react.fireEvent.change(lastNameInput, {
      target: {
        value: 'Doe'
      }
    });
    _react.fireEvent.change(cityInput, {
      target: {
        value: 'City'
      }
    });
    _react.fireEvent.change(postalCodeInput, {
      target: {
        value: '12345'
      }
    });
    _react.fireEvent.change(birthDateInput, {
      target: {
        value: '2000-01-01'
      }
    });
    await (0, _react.waitFor)(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
  it('should submit the form and display success message', async () => {
    (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_RegisterForm.default, {}));
    const emailInput = _react.screen.getByTestId('email-input');
    const firstNameInput = _react.screen.getByTestId('first-name-input');
    const lastNameInput = _react.screen.getByTestId('last-name-input');
    const cityInput = _react.screen.getByTestId('city-input');
    const postalCodeInput = _react.screen.getByTestId('postal-code-input');
    const birthDateInput = _react.screen.getByTestId('birth-date-input');
    const submitButton = _react.screen.getByTestId('submit-button');
    _react.fireEvent.change(emailInput, {
      target: {
        value: 'john.doe@example.com'
      }
    });
    _react.fireEvent.change(firstNameInput, {
      target: {
        value: 'John'
      }
    });
    _react.fireEvent.change(lastNameInput, {
      target: {
        value: 'Doe'
      }
    });
    _react.fireEvent.change(cityInput, {
      target: {
        value: 'City'
      }
    });
    _react.fireEvent.change(postalCodeInput, {
      target: {
        value: '12345'
      }
    });
    _react.fireEvent.change(birthDateInput, {
      target: {
        value: '2000-01-01'
      }
    });
    _react.fireEvent.click(submitButton);
    await (0, _react.waitFor)(() => {
      expect(_react.screen.getByText('Form submitted successfully!')).toBeInTheDocument();
    });
  });
});