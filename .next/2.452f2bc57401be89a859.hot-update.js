webpackHotUpdate(2,{

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_document__ = __webpack_require__("./node_modules/next/document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__ = __webpack_require__("./node_modules/styled-jsx/server.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/pages/_document.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var pageContext = this.props.pageContext;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: pageContext.theme.palette.primary.main,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_2_next_document___default.a);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  var pageContext;
  var page = ctx.renderPage(function (Component) {
    var WrappedComponent = function WrappedComponent(props) {
      pageContext = props.pageContext;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }));
    };

    WrappedComponent.propTypes = {
      pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
    };
    return WrappedComponent;
  });
  return _objectSpread({}, page, {
    pageContext: pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
      id: "jss-server-side" // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: pageContext.sheetsRegistry.toString()
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      }
    }), __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default()() || null)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=2.452f2bc57401be89a859.hot-update.js.map