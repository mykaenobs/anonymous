"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store.ts":
/*!**********************!*\
  !*** ./app/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slice_user_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @slice/user/userSlice */ "./features/user/userSlice.ts");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    user: _slice_user_userSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./features/user/userSlice.ts":
/*!************************************!*\
  !*** ./features/user/userSlice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userSlice": () => (/* binding */ userSlice),
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "setIsLogged": () => (/* binding */ setIsLogged),
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "selectIsLogged": () => (/* binding */ selectIsLogged),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  detail: null,
  isLogged: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.detail = action.payload;
    },
    setIsLogged: (state, action) => {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('isLogged', action.payload, {
        sameSite: 'lax'
      });
      state.isLogged = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('isLogged'));
    }
  }
});
const {
  setUser,
  setIsLogged
} = userSlice.actions;
const selectUser = state => state.user.detail;
const selectIsLogged = state => state.user.isLogged;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/store */ "./app/store.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\pc\\Documents\\PROJECTS\\anonymous\\client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
const theme = {
  main: 'hsl(0, 0%, 13.725490196078432%)',
  accent: 'hsl(328, 100%, 50%)',
  accent2: 'hsl(224, 100%, 50%)',
  bg: 'hsl(0, 0%, 18.823529411764707%)',
  lg: 'hsl(0, 0%, 26.666666666666668%)',
  ltc: 'hsl(0, 0%, 76.86274509803923%)',
  dtc: 'hsl(0, 0%, 50.588235294117645%)',
  trans: 'hsla(0, 0%, 0%, 16%)',
  bd: 'hsl(0, 0%, 25.098039215686274%)'
};
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{margin:0;padding:0;box-sizing:border-box;}body,html{background-color:", ";color:white;font-family:Poppins,'sans-serif';position:relative;z-index:0;}a{font-size:.9rem;text-decoration:none;color:white;}input,textarea,select,button{outline:none;}"], theme.main);

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBwL3N0b3JlLnRzIiwid2VicGFjazovL2NsaWVudC8uL2ZlYXR1cmVzL3VzZXIvdXNlclNsaWNlLnRzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnQHNsaWNlL3VzZXIvdXNlclNsaWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAYXBwL3N0b3JlJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG5pbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuICBkZXRhaWw6IGFueSxcclxuICBpc0xvZ2dlZDogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcclxuICBkZXRhaWw6IG51bGwsXHJcbiAgaXNMb2dnZWQ6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3VzZXInLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXNlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248b2JqZWN0PikgPT4ge1xyXG4gICAgICBzdGF0ZS5kZXRhaWwgPSBhY3Rpb24ucGF5bG9hZDsgIFxyXG4gICAgfSxcclxuICAgIHNldElzTG9nZ2VkOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xyXG4gICAgICBDb29raWVzLnNldCgnaXNMb2dnZWQnLCBhY3Rpb24ucGF5bG9hZCwgeyBzYW1lU2l0ZTogJ2xheCcgfSk7XHJcbiAgICAgIHN0YXRlLmlzTG9nZ2VkID0gSlNPTi5wYXJzZShDb29raWVzLmdldCgnaXNMb2dnZWQnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlciwgc2V0SXNMb2dnZWQgfSA9IHVzZXJTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIuZGV0YWlsO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0SXNMb2dnZWQgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlci5pc0xvZ2dlZDtcclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQGFwcC9zdG9yZSc7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgbWFpbjogJ2hzbCgwLCAwJSwgMTMuNzI1NDkwMTk2MDc4NDMyJSknLFxyXG4gIGFjY2VudDogJ2hzbCgzMjgsIDEwMCUsIDUwJSknLFxyXG4gIGFjY2VudDI6ICdoc2woMjI0LCAxMDAlLCA1MCUpJyxcclxuICBiZzogJ2hzbCgwLCAwJSwgMTguODIzNTI5NDExNzY0NzA3JSknLFxyXG4gIGxnOiAnaHNsKDAsIDAlLCAyNi42NjY2NjY2NjY2NjY2NjglKScsXHJcbiAgbHRjOiAnaHNsKDAsIDAlLCA3Ni44NjI3NDUwOTgwMzkyMyUpJyxcclxuICBkdGM6ICdoc2woMCwgMCUsIDUwLjU4ODIzNTI5NDExNzY0NSUpJyxcclxuICB0cmFuczogJ2hzbGEoMCwgMCUsIDAlLCAxNiUpJyxcclxuICBiZDogJ2hzbCgwLCAwJSwgMjUuMDk4MDM5MjE1Njg2Mjc0JSknXHJcbn1cclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLm1haW59O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgJ3NhbnMtc2VyaWYnO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG5hIHtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlclJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VyIiwiY3JlYXRlU2xpY2UiLCJDb29raWVzIiwiaW5pdGlhbFN0YXRlIiwiZGV0YWlsIiwiaXNMb2dnZWQiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0SXNMb2dnZWQiLCJzZXQiLCJzYW1lU2l0ZSIsIkpTT04iLCJwYXJzZSIsImdldCIsImFjdGlvbnMiLCJzZWxlY3RVc2VyIiwic2VsZWN0SXNMb2dnZWQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlRoZW1lUHJvdmlkZXIiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJtYWluIiwiYWNjZW50IiwiYWNjZW50MiIsImJnIiwibGciLCJsdGMiLCJkdGMiLCJ0cmFucyIsImJkIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9