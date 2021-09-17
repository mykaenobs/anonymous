"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Shared/Circle.tsx":
/*!**************************************!*\
  !*** ./components/Shared/Circle.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\pc\\Documents\\PROJECTS\\anonymous\\client\\components\\Shared\\Circle.tsx",
    _this = undefined;




var Circle = function Circle(_ref) {
  var dimension = _ref.dimension,
      top = _ref.top,
      left = _ref.left,
      right = _ref.right,
      bottom = _ref.bottom;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Shape, {
    dimension: dimension,
    top: top,
    left: left,
    right: right,
    bottom: bottom
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, _this);
};

_c = Circle;
/* harmony default export */ __webpack_exports__["default"] = (Circle);
var Shape = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "Circle__Shape",
  componentId: "sc-56n843-0"
})(["height:", ";width:", ";position:absolute;inset:", " ", " ", " ", ";z-index:-1;background-color:hsl(0,0%,16.862745098039216%);border-radius:50%;"], function (_ref2) {
  var dimension = _ref2.dimension;
  return dimension;
}, function (_ref3) {
  var dimension = _ref3.dimension;
  return dimension;
}, function (_ref4) {
  var top = _ref4.top;
  return top;
}, function (_ref5) {
  var right = _ref5.right;
  return right;
}, function (_ref6) {
  var bottom = _ref6.bottom;
  return bottom;
}, function (_ref7) {
  var left = _ref7.left;
  return left;
});
_c2 = Shape;

var _c, _c2;

$RefreshReg$(_c, "Circle");
$RefreshReg$(_c2, "Shape");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/App/Header/Header */ "./components/App/Header/Header.tsx");
/* harmony import */ var _components_App_Header_NoUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/App/Header/NoUser */ "./components/App/Header/NoUser.tsx");
/* harmony import */ var _components_Account_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Account/Account */ "./components/Account/Account.tsx");
/* harmony import */ var _components_Account_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Account/Login */ "./components/Account/Login.tsx");
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/App/Footer */ "./components/App/Footer.tsx");
/* harmony import */ var _components_Shared_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Shared/Circle */ "./components/Shared/Circle.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _slice_user_userSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @slice/user/userSlice */ "./features/user/userSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\pc\\Documents\\PROJECTS\\anonymous\\client\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();















var LoginPage = function LoginPage() {
  _s();

  var isLogged = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_slice_user_userSlice__WEBPACK_IMPORTED_MODULE_9__.selectIsLogged);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (isLogged) router.push('/dashboard');
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("title", {
        children: "Login - User Account | Anomity"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_App_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_App_Header_NoUser__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Account_Account__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Account_Login__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shared_Circle__WEBPACK_IMPORTED_MODULE_6__.default, {
      dimension: '357px',
      left: '-95px',
      top: '-102px',
      right: '0',
      bottom: '0'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shared_Circle__WEBPACK_IMPORTED_MODULE_6__.default, {
      dimension: '259px',
      left: '-129px',
      top: '200px',
      right: '0',
      bottom: '0'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(LoginPage, "82AnMvafjwq7ZOdwY9sBtMGZyyI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];
});

_c = LoginPage;
/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

var _c;

$RefreshReg$(_c, "LoginPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDE3N2RiYTczM2M1YjYxMWRjZGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyQztBQUFBLE1BQXpDQyxTQUF5QyxRQUF6Q0EsU0FBeUM7QUFBQSxNQUE5QkMsR0FBOEIsUUFBOUJBLEdBQThCO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDeEQsc0JBQU8sOERBQUMsS0FBRDtBQUFPLGFBQVMsRUFBRUosU0FBbEI7QUFBNkIsT0FBRyxFQUFFQyxHQUFsQztBQUF1QyxRQUFJLEVBQUVDLElBQTdDO0FBQW1ELFNBQUssRUFBRUMsS0FBMUQ7QUFBaUUsVUFBTSxFQUFFQztBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNTDtBQUlOLCtEQUFlQSxNQUFmO0FBVUEsSUFBTU0sS0FBSyxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3SkFDRDtBQUFBLE1BQUVFLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWlCQSxTQUFqQjtBQUFBLENBREMsRUFFRjtBQUFBLE1BQUVBLFNBQUYsU0FBRUEsU0FBRjtBQUFBLFNBQWlCQSxTQUFqQjtBQUFBLENBRkUsRUFLRjtBQUFBLE1BQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQWI7QUFBQSxDQUxFLEVBS2tCO0FBQUEsTUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBTGxCLEVBSzBDO0FBQUEsTUFBR0MsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FMMUMsRUFLb0U7QUFBQSxNQUFHRixJQUFILFNBQUdBLElBQUg7QUFBQSxTQUFjQSxJQUFkO0FBQUEsQ0FMcEUsQ0FBWDtNQUFNRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLFFBQVEsR0FBR0YseURBQVcsQ0FBQ0QsaUVBQUQsQ0FBNUI7QUFDQSxNQUFNSSxNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBRUFELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUFFLFFBQUlLLFFBQUosRUFBY0MsTUFBTSxDQUFDQyxJQUFQLENBQVksWUFBWjtBQUEyQixHQUFsRCxFQUFvRCxFQUFwRCxDQUFUO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsK0RBQUMsa0VBQUQ7QUFBQSw2QkFDRSwrREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBT0UsK0RBQUMsZ0VBQUQ7QUFBQSw2QkFDRSwrREFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBVUUsK0RBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBV0UsK0RBQUMsOERBQUQ7QUFBUSxlQUFTLEVBQUUsT0FBbkI7QUFBNEIsVUFBSSxFQUFFLE9BQWxDO0FBQTJDLFNBQUcsRUFBRSxRQUFoRDtBQUEwRCxXQUFLLEVBQUUsR0FBakU7QUFBc0UsWUFBTSxFQUFFO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQVlFLCtEQUFDLDhEQUFEO0FBQVEsZUFBUyxFQUFFLE9BQW5CO0FBQTRCLFVBQUksRUFBRSxRQUFsQztBQUE0QyxTQUFHLEVBQUUsT0FBakQ7QUFBMEQsV0FBSyxFQUFFLEdBQWpFO0FBQXNFLFlBQU0sRUFBRTtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQSxrQkFERjtBQWdCRCxDQXRCRDs7R0FBTUg7VUFDYUQsdURBQ0ZGOzs7S0FGWEc7QUF3Qk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFyZWQvQ2lyY2xlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDaXJjbGUgPSAoe2RpbWVuc2lvbiwgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tfSkgPT4ge1xyXG4gIHJldHVybiA8U2hhcGUgZGltZW5zaW9uPXtkaW1lbnNpb259IHRvcD17dG9wfSBsZWZ0PXtsZWZ0fSByaWdodD17cmlnaHR9IGJvdHRvbT17Ym90dG9tfT48L1NoYXBlPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcclxuXHJcbmludGVyZmFjZSBQb3NpdGlvbiB7XHJcbiAgdG9wOiBzdHJpbmcsXHJcbiAgcmlnaHQ6IHN0cmluZyxcclxuICBib3R0b206IHN0cmluZyxcclxuICBsZWZ0OiBzdHJpbmcsXHJcbiAgZGltZW5zaW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNoYXBlID0gc3R5bGVkLmRpdjxQb3NpdGlvbj5gXHJcbmhlaWdodDogJHsoe2RpbWVuc2lvbn0pID0+IGRpbWVuc2lvbn07XHJcbndpZHRoOiAkeyh7ZGltZW5zaW9ufSkgPT4gZGltZW5zaW9ufTtcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuaW5zZXQ6ICR7KHsgdG9wIH0pID0+IHRvcH0gJHsoeyByaWdodCB9KSA9PiByaWdodH0gJHsoeyBib3R0b20gfSkgPT4gYm90dG9tfSAkeyh7IGxlZnQgfSkgPT4gbGVmdH07XHJcbnotaW5kZXg6IC0xO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDE2Ljg2Mjc0NTA5ODAzOTIxNiUpO1xyXG5cclxuXHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbmA7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL0FwcC9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IE5vVXNlciBmcm9tICdAY29tcG9uZW50cy9BcHAvSGVhZGVyL05vVXNlcic7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gJ0Bjb21wb25lbnRzL0FjY291bnQvQWNjb3VudCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICdAY29tcG9uZW50cy9BY2NvdW50L0xvZ2luJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9BcHAvRm9vdGVyJztcclxuaW1wb3J0IENpcmNsZSBmcm9tICdAY29tcG9uZW50cy9TaGFyZWQvQ2lyY2xlJztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZWxlY3RJc0xvZ2dlZCB9IGZyb20gJ0BzbGljZS91c2VyL3VzZXJTbGljZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNMb2dnZWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJc0xvZ2dlZCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChpc0xvZ2dlZCkgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKSB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Mb2dpbiAtIFVzZXIgQWNjb3VudCB8IEFub21pdHk8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPE5vVXNlciAvPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPEFjY291bnQ+XHJcbiAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgIDwvQWNjb3VudD5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Q2lyY2xlIGRpbWVuc2lvbj17JzM1N3B4J30gbGVmdD17Jy05NXB4J30gdG9wPXsnLTEwMnB4J30gcmlnaHQ9eycwJ30gYm90dG9tPXsnMCd9ICAvPlxyXG4gICAgICA8Q2lyY2xlIGRpbWVuc2lvbj17JzI1OXB4J30gbGVmdD17Jy0xMjlweCd9IHRvcD17JzIwMHB4J30gcmlnaHQ9eycwJ30gYm90dG9tPXsnMCd9ICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNpcmNsZSIsImRpbWVuc2lvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIlNoYXBlIiwiZGl2IiwiSGVhZCIsIkhlYWRlciIsIk5vVXNlciIsIkFjY291bnQiLCJMb2dpbiIsIkZvb3RlciIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInNlbGVjdElzTG9nZ2VkIiwidXNlU2VsZWN0b3IiLCJMb2dpblBhZ2UiLCJpc0xvZ2dlZCIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9