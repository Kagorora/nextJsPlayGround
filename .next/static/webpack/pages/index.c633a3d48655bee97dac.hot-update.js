webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\n\nvar _jsxFileName = \"/home/kagorora/Documents/nextJsPlayGround/pages/header.js\",\n    _this = undefined;\n\n\n\n\nvar header = function header() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"bg-blue-600 py-5 flex align-center flex justify-around\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/\",\n        className: \"text-white\",\n        children: \"karaba\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/register\",\n        className: \"text-white bg-blue-500 rounded py-3 px-8 text-sm hover:bg-blue-500 mr-5\",\n        children: \"Find Applications\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/register\",\n        className: \"text-white bg-blue-700 rounded py-3 px-8 text-sm hover:bg-blue-500 mr-5\",\n        children: \"Sign up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/login\",\n        className: \"text-white bg-blue-700 rounded py-3 px-8 text-sm hover:bg-blue-500\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVhZGVyLmpzP2E1OTAiXSwibmFtZXMiOlsiaGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixzQkFDRTtBQUFLLGFBQVMsRUFBQyx3REFBZjtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFTLEVBQUMsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxpQkFBUyxFQUFDLHlFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsaUJBQVMsRUFBQyx5RUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBZUU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMsb0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQWhDRDs7QUFrQ2VBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlMb2dJbiwgRmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTYwMCBweS01IGZsZXggYWxpZ24tY2VudGVyIGZsZXgganVzdGlmeS1hcm91bmQnPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5cbiAgICAgICAgICBrYXJhYmFcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9Jy9yZWdpc3RlcidcbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZCBweS0zIHB4LTggdGV4dC1zbSBob3ZlcjpiZy1ibHVlLTUwMCBtci01J1xuICAgICAgICA+XG4gICAgICAgICAgRmluZCBBcHBsaWNhdGlvbnNcbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj0nL3JlZ2lzdGVyJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkIHB5LTMgcHgtOCB0ZXh0LXNtIGhvdmVyOmJnLWJsdWUtNTAwIG1yLTUnXG4gICAgICAgID5cbiAgICAgICAgICBTaWduIHVwXG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9Jy9sb2dpbidcbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZCBweS0zIHB4LTggdGV4dC1zbSBob3ZlcjpiZy1ibHVlLTUwMCdcbiAgICAgICAgPlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/header.js\n");

/***/ })

})