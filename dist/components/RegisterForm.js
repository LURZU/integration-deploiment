"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../App.css");
var _react = require("react");
var _module = require("../module");
var _jsxRuntime = require("react/jsx-runtime");
function RegisterForm() {
  const [formData, setFormData] = (0, _react.useState)({
    firstName: '',
    lastName: '',
    city: '',
    postalCode: '',
    email: '',
    birthDate: ''
  });
  const [errors, setErrors] = (0, _react.useState)({});
  const [isFormReady, setIsFormReady] = (0, _react.useState)(false);
  const [isSubmitted, setIsSubmitted] = (0, _react.useState)(false);
  const validateForm = () => {
    let newErrors = {};
    if (!(0, _module.isValidAge)(formData.birthDate)) {
      newErrors.birthDate = 'You must be at least 18 years old.';
    }
    if (!(0, _module.isValidPostalCode)(formData.postalCode)) {
      newErrors.postalCode = 'Postal code must be exactly 5 digits.';
    }
    if (!(0, _module.isValidName)(formData.firstName)) {
      newErrors.firstName = 'First name must not contain special characters or numbers.';
    }
    if (!(0, _module.isValidName)(formData.lastName)) {
      newErrors.lastName = 'Last name must not contain special characters or numbers.';
    }
    if (!(0, _module.isValidName)(formData.city)) {
      newErrors.city = 'City name must not contain special characters or numbers.';
    }
    if (!(0, _module.isValidEmail)(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  (0, _react.useEffect)(() => {
    if (formData.firstName && formData.lastName && formData.city && formData.postalCode && formData.email && formData.birthDate) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  }, [formData]);
  (0, _react.useEffect)(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        city: '',
        postalCode: '',
        email: '',
        birthDate: ''
      });
      setErrors({});
    }
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex h-screen w-screen font-body",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-3/6 h-full ",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "w-full h-full object-cover",
        src: `${process.env.PUBLIC_URL}/capybara.jpg`,
        alt: "Capybara"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w-3/6 h-full flex justify-center items-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "justify-center align-middle ",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-4xl text-center my-10 font-heading ",
          children: "Capyclub subscription"
        }), isSubmitted && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",
          role: "alert",
          children: "Form submitted successfully!"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          className: "max-w-md mx-auto ",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-0 w-full mb-5 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "email",
              name: "email",
              id: "floating_email",
              "data-testid": "email-input",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: true,
              value: formData.email,
              onChange: handleChange
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "floating_email",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Email address"
            }), errors.email && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              "data-testid": "email-error",
              className: "text-red-500 text-sm",
              children: errors.email
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-0 w-full mb-5 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              name: "firstName",
              id: "floating_first_name",
              "data-testid": "first-name-input",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: true,
              value: formData.firstName,
              onChange: handleChange
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "floating_first_name",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "First Name"
            }), errors.firstName && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              "data-testid": "first-name-error",
              className: "text-red-500 text-sm",
              children: errors.firstName
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-0 w-full mb-5 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              name: "lastName",
              id: "floating_last_name",
              "data-testid": "last-name-input",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: true,
              value: formData.lastName,
              onChange: handleChange
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "floating_last_name",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Last Name"
            }), errors.lastName && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              "data-testid": "last-name-error",
              className: "text-red-500 text-sm",
              children: errors.lastName
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-0 w-full mb-5 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              name: "city",
              id: "floating_city",
              "data-testid": "city-input",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: true,
              value: formData.city,
              onChange: handleChange
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "floating_city",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "City"
            }), errors.city && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              "data-testid": "city-error",
              className: "text-red-500 text-sm",
              children: errors.city
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-0 w-full mb-5 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              name: "postalCode",
              id: "floating_postal_code",
              "data-testid": "postal-code-input",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: true,
              value: formData.postalCode,
              onChange: handleChange
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "floating_postal_code",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Postal Code"
            }), errors.postalCode && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              "data-testid": "postal-code-error",
              className: "text-red-500 text-sm",
              children: errors.postalCode
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "relative z-0 w-full mb-5 group",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "date",
              name: "birthDate",
              id: "floating_birth_date",
              "data-testid": "birth-date-input",
              className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
              placeholder: " ",
              required: true,
              value: formData.birthDate,
              onChange: handleChange
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              htmlFor: "floating_birth_date",
              className: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
              children: "Birth Date"
            }), errors.birthDate && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              "data-testid": "birth-date-error",
              className: "text-red-500 text-sm",
              children: errors.birthDate
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "submit",
            "data-testid": "submit-button",
            className: `text-black bg-[#FCD143] hover:bg-[#ffe696] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                    ${!isFormReady && 'opacity-50 cursor-not-allowed'}`,
            disabled: !isFormReady,
            children: "Submit"
          })]
        })]
      })
    })]
  });
}
var _default = exports.default = RegisterForm;