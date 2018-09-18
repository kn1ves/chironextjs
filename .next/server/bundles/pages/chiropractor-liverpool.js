module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/Footer.jsx";








var theme = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      main: "rgb(12,91,173)"
    },
    secondary: {
      main: "rgb(255,255,255)"
    }
  }
});

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%'
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '5%',
      paddingBottom: 0
    },
    footercopy: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '0.5%'
    },
    navtext: {
      fontFamily: 'Helvetica',
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      paddingLeft: '1%',
      paddingRight: '1%',
      marginBottom: 10,
      width: '100%'
    }
  };
};

function Footer(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    href: "/find-a-chiropractor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Find a chiropractor")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "Contact Us"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.footercopy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    component: "p",
    className: classes.navtext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "\xA9\xA0Kapil Shrotriya | www.chiropractorhunter.com"))))));
}

Footer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Footer));

/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sm_buttons__ = __webpack_require__("./components/sm_buttons.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drawer__ = __webpack_require__("./components/drawer.jsx");
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/Header.jsx";










var styles = {
  flex: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row-reverse'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
var theme = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      main: "rgb(12,91,173)"
    },
    secondary: {
      main: "rgb(255,255,255)"
    }
  }
});

function ChiroAppBar(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default.a, {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__drawer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__sm_buttons__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })))))));
}

ChiroAppBar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(ChiroAppBar));

/***/ }),

/***/ "./components/IntroLiverpool.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search__ = __webpack_require__("@material-ui/icons/Search");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/IntroLiverpool.jsx";









var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: 'rgb(12,91,173)'
    },
    logo: {
      height: 650,
      paddingLeft: 72,
      paddingRight: 72,
      display: 'flex',
      backgroundColor: 'rgb(12,91,173)',
      paddingTop: 64
    },
    flex1: {
      flex: 50,
      alignContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'center'
    },
    flex2: {
      flex: 50
    },
    chiroheading: {
      color: "#fff",
      fontWeight: 700,
      fontSize: "2.5rem",
      display: "inline-block",
      fontFamily: 'Helvetica',
      paddingLeft: 10
    },
    chirop: {
      color: "#fff",
      align: "left",
      marginTop: 10,
      marginBottom: 10,
      fontSize: "1.125rem",
      fontWeight: 400,
      fontFamily: 'Helvetica',
      paddingLeft: 10
    },
    button: {
      margin: theme.spacing.unit + 4
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    }
  };
};

function IntroLiverpool(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_helmet__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Chiropractor Liverpool, England"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "Chiropractor in Liverpool, England",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "http://www.chiropractohunter.com/chiropractor-liverpool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: "Looking for the best chiropractor in liverpool? You're at the right place!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "canonical",
    href: "http://www.chiropractorhunter.com/chiropractor-liverpool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __webpack_require__("./img/logo.png"),
    alt: "Chiropractorhunter Logo",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: classes.chiroheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "Liverpool Chiropractor", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.chirop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "If you're looking for the best chiropractics in Liverpool, England then you're at the right place. We have carefully chosen the best quality chiropractics for you.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.chirop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "We have carefully handpicked the best quality chiropractic to relieve you from pain."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }))))));
}

IntroLiverpool.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(IntroLiverpool));

/***/ }),

/***/ "./components/Layout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__("./components/Footer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/Layout.jsx";









var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
};

function Layout(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-1784044730" + " " + (classes.root || "")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1784044730",
    css: "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnNCLEFBR2MsU0FDVCIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2thcGlsc2hyb3RyaXlhL2NoaXJvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIExheW91dChwcm9wcyl7XG5cdGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG5cblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuXHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdFx0Ym9keXsgXG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0ICBcdDxHcmlkIGNvbnRhaW5lcj5cblx0XHQgIFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XG5cdFx0ICBcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0ICBcdFx0PC9HcmlkPlxuXHRcdCAgXHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cblx0XHQgIFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQgIFx0XHQ8L0dyaWQ+XG5cdFx0ICBcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxuXHRcdCAgXHRcdFx0PEZvb3RlciAvPlxuXHRcdCAgXHRcdDwvR3JpZD5cblx0XHQgIFx0PC9HcmlkPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMYXlvdXQpOyJdfQ== */\n/*@ sourceURL=components/Layout.jsx */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }))));
}

Layout.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__["withStyles"])(styles)(Layout));

/***/ }),

/***/ "./components/drawer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer__ = __webpack_require__("@material-ui/core/SwipeableDrawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tileData__ = __webpack_require__("./components/tileData.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_IconButton__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/drawer.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

var AppDrawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppDrawer, _React$Component);

  function AppDrawer() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AppDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        top: false,
        left: false,
        bottom: false,
        right: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleDrawer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(side, open) {
        return function () {
          _this.setState(_defineProperty({}, side, open));
        };
      }
    }), _temp));
  }

  _createClass(AppDrawer, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var sideList = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_6__tileData__["a" /* mailFolderListItems */]));
      var fullList = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.fullList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_6__tileData__["a" /* mailFolderListItems */]));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_IconButton___default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        onClick: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default.a, {
        style: {
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer___default.a, {
        open: this.state.left,
        onClose: this.toggleDrawer('left', false),
        onOpen: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, sideList)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer___default.a, {
        anchor: "top",
        open: this.state.top,
        onClose: this.toggleDrawer('top', false),
        onOpen: this.toggleDrawer('top', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('top', false),
        onKeyDown: this.toggleDrawer('top', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, fullList)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer___default.a, {
        anchor: "bottom",
        open: this.state.bottom,
        onClose: this.toggleDrawer('bottom', false),
        onOpen: this.toggleDrawer('bottom', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('bottom', false),
        onKeyDown: this.toggleDrawer('bottom', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, fullList)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_SwipeableDrawer___default.a, {
        anchor: "right",
        open: this.state.right,
        onClose: this.toggleDrawer('right', false),
        onOpen: this.toggleDrawer('right', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('right', false),
        onKeyDown: this.toggleDrawer('right', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, sideList)));
    }
  }]);

  return AppDrawer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

AppDrawer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(AppDrawer));

/***/ }),

/***/ "./components/sm_buttons.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square__ = __webpack_require__("react-icons/lib/fa/facebook-square");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_ti_social_instagram__ = __webpack_require__("react-icons/lib/ti/social-instagram");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_ti_social_instagram___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_ti_social_instagram__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_twitter_square__ = __webpack_require__("react-icons/lib/fa/twitter-square");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_twitter_square___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_twitter_square__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/sm_buttons.jsx";







var styles = {
  root: {
    flexGrow: 1
  }
};

function SMButtons(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.facebook.com/Chiropractorhunter-2075898506059830/?ref=aymt_homepage_panel",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_IconButton___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_icons_lib_fa_facebook_square___default.a, {
    size: "24",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.instagram.com/chiropractorhunter1/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_IconButton___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_ti_social_instagram___default.a, {
    size: "24",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://twitter.com/kapil_shrotriya",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_IconButton___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_twitter_square___default.a, {
    size: "24",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))));
}

SMButtons.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(SMButtons));

/***/ }),

/***/ "./components/tileData.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mailFolderListItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemIcon__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_search__ = __webpack_require__("react-icons/lib/fa/search");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_icons_lib_fa_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_home__ = __webpack_require__("react-icons/lib/fa/home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_book__ = __webpack_require__("react-icons/lib/fa/book");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_book__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_comments_o__ = __webpack_require__("react-icons/lib/fa/comments-o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_comments_o___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_comments_o__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/tileData.jsx";









var mailFolderListItems = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default.a, {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemIcon___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_fa_home___default.a, {
  size: "24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemText___default.a, {
  primary: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default.a, {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemIcon___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_fa_book___default.a, {
  size: "24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemText___default.a, {
  primary: "Blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_ListItem___default.a, {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItemIcon___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_icons_lib_fa_comments_o___default.a, {
  size: "24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  }
})), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_ListItemText___default.a, {
  primary: "Contact Us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  }
})));

/***/ }),

/***/ "./img/clipboard.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY4LjI5MyA0NjguMjkzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjguMjkzIDQ2OC4yOTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyRDkzQkE7IiBkPSJNNzkuOTIyLDQ1NS44MDVWNjEuODE1YzAtNi44NjgsNS42Mi0xMi40ODgsMTIuNDg4LTEyLjQ4OGgyODMuNDczDQoJYzYuODY4LDAsMTIuNDg4LDUuNjIsMTIuNDg4LDEyLjQ4OHYzOTMuOTljMCw2Ljg2OC01LjYyLDEyLjQ4OC0xMi40ODgsMTIuNDg4SDkyLjQxQzg1LjU0MSw0NjguMjkzLDc5LjkyMiw0NjIuNjczLDc5LjkyMiw0NTUuODA1eg0KCSIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VCRjBGMzsiIHBvaW50cz0iMzY1Ljg5Myw3MS44MDUgMzY1Ljg5Myw0NDUuODE1IDE1OS44NDQsNDQ1LjgxNSAxMDIuNCwzODcuNzQ2IDEwMi40LDcxLjgwNSAiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFMUU2RTk7IiBwb2ludHM9IjE1OS44NDQsMzg3Ljc0NiAxNTkuODQ0LDQ0NS44MTUgMTAyLjQsMzg3Ljc0NiAiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNTYzNTM7IiBkPSJNMzEyLjE5NSw4OS4yODhIMTYyLjM0MWMtMy43NDYsMC02LjI0NC0zLjc0Ni01LjYyLTYuODY4bDExLjg2My00My4wODMNCgkJYzAuNjI0LTIuNDk4LDMuMTIyLTQuMzcxLDUuNjItNC4zNzFoMTI2Ljc1MWMyLjQ5OCwwLDQuOTk1LDEuODczLDUuNjIsNC4zNzFsMTEuODYzLDQzLjA4Mw0KCQlDMzE4LjQzOSw4Ni4xNjYsMzE1Ljk0MSw4OS4yODgsMzEyLjE5NSw4OS4yODh6Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTU2MzUzOyIgY3g9IjIzNi42NDQiIGN5PSIzNC45NjYiIHI9IjM0Ljk2NiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VCRjBGMzsiIGQ9Ik0yMzYuNjQ0LDU2LjE5NWMtMTEuODYzLDAtMjEuMjI5LTkuMzY2LTIxLjIyOS0yMS4yMjlzOS4zNjYtMjEuMjI5LDIxLjIyOS0yMS4yMjkNCgljMTEuODYzLDAsMjEuMjI5LDkuMzY2LDIxLjIyOSwyMS4yMjlTMjQ4LjUwNyw1Ni4xOTUsMjM2LjY0NCw1Ni4xOTV6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NEM0QTE7IiBjeD0iMjM0LjE0NiIgY3k9IjIzOC41MTciIHI9Ijg3LjQxNSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VCRjBGMzsiIGQ9Ik0yMTIuMjkzLDI3OS43MjdjLTIuNDk4LDAtNC45OTUtMC42MjQtNy40OTMtMi40OThsLTIzLjcyNy0yMC42MDUNCgljLTQuMzcxLTQuMzcxLTQuOTk1LTExLjIzOS0xLjI0OS0xNS42MWM0LjM3MS00LjM3MSwxMS4yMzktNC45OTUsMTUuNjEtMS4yNDlsMTUuNjEsMTMuNzM3bDU5LjMxNy01My4wNzMNCgljNC4zNzEtNC4zNzEsMTEuODYzLTMuNzQ2LDE1LjYxLDAuNjI0YzQuMzcxLDQuMzcxLDMuNzQ2LDExLjg2My0wLjYyNCwxNS42MWwtNjYuMTg1LDU5Ljk0MQ0KCUMyMTcuOTEyLDI3OS4xMDIsMjE1LjQxNSwyNzkuNzI3LDIxMi4yOTMsMjc5LjcyN3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./img/diet.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/diet-0a16744a57802b2990fb8ecac1bbc46a.svg";

/***/ }),

/***/ "./img/doctor.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDIxLjE0MSA0MjEuMTQxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjEuMTQxIDQyMS4xNDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZEN0EzOyIgZD0iTTEzOC4yNzcsMjc0LjU2NmMxNC43MTYtOS40NzUsMTMuMDctMzcuNjc1LDEzLjA3LTQ0LjI1NWgxMTguNDQ2YzAsNi41OC0xLjgyNSwzNC43OCwxMi44OSw0NC4yNTUNCgkJCWwtNzIuMTEzLDgwLjc3MUwxMzguMjc3LDI3NC41NjZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkRDODhFOyIgZD0iTTI1Ni42MzIsMzAyLjY5NWwyNi4wNTEtMjguMTI5Yy0xNC43MTYtOS40NzQtMTIuODktMzcuNjc1LTEyLjg5LTQ0LjI1NUgxNTEuMzQ3DQoJCQlDMTU5Ljg0NSwyNTQuNzQ0LDIxNi4wNTQsMjk2LjY2MywyNTYuNjMyLDMwMi42OTV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMUIyOyIgZD0iTTMwMi42OTUsMTQ0Ljc2N2MwLDUyLjY5Ni0zMC4zNDMsMTE4LjQ0Ni05Mi4xMjQsMTE4LjQ0NnMtOTIuMTI0LTY1Ljc1LTkyLjEyNC0xMTguNDQ2DQoJCQlzNDEuMjQ2LTcyLjM4NCw5Mi4xMjQtNzIuMzg0UzMwMi42OTUsOTIuMDcxLDMwMi42OTUsMTQ0Ljc2N3oiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkUxQjI7IiBkPSJNMTIxLjUyMSwxNTYuMjgzYy05Ljg2NC0yLjQ2OC0xNi4zMjYsMi44MDUtMTYuMzI2LDEzLjE2MWMwLDEzLjcwOSwxMy4yNjUsNDcuMjk2LDI3LjIxLDI2LjMyMQ0KCQkJQzE0Ni4zNTEsMTc0Ljc5LDEyMS41MjEsMTU2LjI4MywxMjEuNTIxLDE1Ni4yODN6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMUIyOyIgZD0iTTI5Ny45NDQsMTU2LjI4M2MxMC43NjctMi40NjgsMTcuODIxLDIuODA1LDE3LjgyMSwxMy4xNjFjMCwxMy43MDktMTQuNDc5LDQ3LjI5Ni0yOS43MDEsMjYuMzIxDQoJCQlTMjk3Ljk0NCwxNTYuMjgzLDI5Ny45NDQsMTU2LjI4M3oiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiM3RTU0NDk7IiBkPSJNMTM4LjE4NywxMTguNDQ2Yy0yLjc0Miw3Ljg4Ny02LjU4LDUyLjY0My02LjU4LDUyLjY0M2wtMTMuMTYxLTcuMjgxbC0zLjcwMS00OC4yMzQNCgkJCUwxMzguMTg3LDExOC40NDZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojN0U1NDQ5OyIgZD0iTTI4Mi45NTQsMTE4LjQ0NmMyLjc0Miw3Ljg4Nyw2LjU4LDUyLjY0Myw2LjU4LDUyLjY0M2wxMy4xNjEtNy4yODFsMy43MDEtNDguMjM0TDI4Mi45NTQsMTE4LjQ0NnoNCgkJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzUyNzk5MjsiIGQ9Ik0zNjEuOTE4LDQyMS4xNDFjMTAuOTAzLDAsMTkuNzQxLTguODM4LDE5Ljc0MS0xOS43NDF2LTUwLjMwMw0KCQkJYzAtMjguOTU0LTIyLjU2Mi01OS44NjQtNTAuMTM4LTY4LjY4N2wtNDEuMTY4LTEzLjE3M2MtMjIuMTQ5LDE2LjkzNi01My44MDIsNDAuMDM5LTc5Ljc4Miw0MC4wMzlzLTU3LjYzMy0yMy4xMDMtNzkuNzgyLTQwLjAzOQ0KCQkJTDg5LjYyLDI4Mi40MWMtMjcuNTc2LDguODIzLTUwLjEzOCwzOS43MzMtNTAuMTM4LDY4LjY4N1Y0MDEuNGMwLDEwLjkwMyw4LjgzOCwxOS43NDEsMTkuNzQxLDE5Ljc0MUgzNjEuOTE4eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzU0NTQ2NTsiIGQ9Ik0yMjMuNzMxLDMyOS4wMTZjMCwzLjYxOS0yLjk2MSw2LjU4LTYuNTgsNi41OEgyMDMuOTljLTMuNjE5LDAtNi41OC0yLjk2MS02LjU4LTYuNTh2LTEzLjE2MQ0KCQkJYzAtMy42MTksMi45NjEtNi41OCw2LjU4LTYuNThoMTMuMTYxYzMuNjE5LDAsNi41OCwyLjk2MSw2LjU4LDYuNThWMzI5LjAxNnoiLz4NCgk8L2c+DQoJPGc+DQoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0QwRDdEQzsiIGN4PSIyMTAuNTciIGN5PSIzNjguNDk4IiByPSI2LjU4Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDc1RjdGOyIgZD0iTTIxMC41NywzMDkuMjc1bC0yNy40NTYsMjcuNDU2Yy0yLjg1OSwyLjg1OS03LjU5NiwyLjQ4Ny05Ljk3NS0wLjc4M2wtNDguMTEzLTY2LjE1Ng0KCQkJbDE1LjMyNi0xNS4zMjZjMi40NzUtMi40NzUsNi40NTQtMi41NzksOS4wNTUtMC4yMzhMMjEwLjU3LDMwOS4yNzV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDc1RjdGOyIgZD0iTTIxMC41NywzMDkuMjc1bDI3LjQ1NiwyNy40NTZjMi44NTksMi44NTksNy41OTYsMi40ODcsOS45NzUtMC43ODNsNDguMTEzLTY2LjE1NmwtMTUuMzI2LTE1LjMyNg0KCQkJYy0yLjQ3NS0yLjQ3NS02LjQ1NC0yLjU3OS05LjA1NS0wLjIzOEwyMTAuNTcsMzA5LjI3NXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM1NDU0NjU7IiBwb2ludHM9IjIxOS42MTEsMzMxLjg5NSAyMTAuNTcsMzM1LjU5NiAyMDEuNTMsMzMxLjg5NSAxOTcuNDEsNDIxLjE0MSAyMTAuNTcsNDIxLjE0MSANCgkJCTIyMy43MzEsNDIxLjE0MSAJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0U0RUJGMDsiIGQ9Ik0zNjQuMjM1LDQyMC45MDdjOS43OTctMS4xNiwxNy40MjMtOS4zOTksMTcuNDIzLTE5LjUwN3YtNTAuMzAzDQoJCQljMC0yOC45NTQtMjIuNTYyLTU5Ljg2NC01MC4xMzgtNjguNjg3bC0zNS44NzktMTEuNDgxaDBsLTUyLjE2OSwxNDkuOTc4SDM2NC4yMzV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTRFQkYwOyIgZD0iTTEyNS40OTksMjcwLjkyOUwxMjUuNDk5LDI3MC45MjlMODkuNjIsMjgyLjQxYy0yNy41NzYsOC44MjMtNTAuMTM4LDM5LjczMy01MC4xMzgsNjguNjg3VjQwMS40DQoJCQljMCwxMC4xMDksNy42MjcsMTguMzQ3LDE3LjQyMywxOS41MDdoMTIwLjc2NEwxMjUuNDk5LDI3MC45Mjl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDBEN0RDOyIgZD0iTTEyNS4wMjYsMjY5Ljc5M2wtMjcuOTg5LDMzLjgzN2MtMi42MDUsMi45OTMtMS45ODgsNy41OTQsMS4zMTQsOS43OTVsMTMuNTE1LDkuMDFsLTE1LjYzMywxNS42MzMNCgkJCWMtMi4zNDcsMi4zNDctMi41NzksNi4wNzMtMC41NDEsOC42OTNsNDIuNDk2LDc0LjM3OWwzOS40ODItMC4yMzRMMTI1LjAyNiwyNjkuNzkzeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0QwRDdEQzsiIGQ9Ik0yOTYuMTE0LDI2OS43OTNsMjcuOTg5LDMzLjgzN2MyLjYwNSwyLjk5MywxLjk4OCw3LjU5NC0xLjMxNCw5Ljc5NWwtMTMuNTE1LDkuMDFsMTUuNjMzLDE1LjYzMw0KCQkJYzIuMzQ3LDIuMzQ3LDIuNTc5LDYuMDczLDAuNTQxLDguNjkzbC00Mi40OTYsNzQuMzc5bC0zOS40ODItMC4yMzRMMjk2LjExNCwyNjkuNzkzeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0U0RUJGMDsiIGQ9Ik0zMDkuMjc1LDExOC40NDZjLTY1LjgwMywwLTEzMS42MDYsMC0xOTcuNDEsMGMwLTM1LjA5NSwwLTU5LjY1NCwwLTk0Ljc0OQ0KCQkJYzYyLjAxLTMxLjU5NiwxMzUuMzk5LTMxLjU5NiwxOTcuNDEsMEMzMDkuMjc1LDU4Ljc5MiwzMDkuMjc1LDgzLjM1MSwzMDkuMjc1LDExOC40NDZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./img/exercise.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5NyA1MTEuOTk3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk3IDUxMS45OTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzM0Y7IiBkPSJNMTUzLjQ2Nyw1OS41MDNjLTAuMDU0LDIyLjM4OCwxOC4wNDQsNDAuNTc3LDQwLjQyMyw0MC42NGMxNS40MjUsMC4wMzYsMjkuNTMyLTguNjc5LDM2LjQwNC0yMi40OTYNCgljLTIwLjQxOS0yMC4yOTMtNDguMDM2LTMxLjY4MS03Ni44MjgtMzEuNjlWNTkuNTAzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzM4Mzg1NjsiIGQ9Ik0xOTQuMTA3LDE4Ljg2M2gtNDAuNjR2MjcuMDkzYzI4Ljc5MSwwLjAwOSw1Ni40MDgsMTEuMzk3LDc2LjgyOCwzMS42OQ0KCWMyLjg5LTUuNjE3LDQuNDE2LTExLjgzMSw0LjQ1Mi0xOC4xNDNDMjM0Ljc0NywzNy4wNTEsMjE2LjU1OSwxOC44NjMsMTk0LjEwNywxOC44NjN6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojOTFDRUNFOyIgcG9pbnRzPSIzMDYuOTk2LDE0NS4yOTggNDI3LjE3Myw1My4zOTggMzk3LjU3OCwxNS4zNDEgMjc5LjkwMyw5Mi42ODMgMTg5LjU5MiwxNDMuNzI3IA0KCTU2LjM4MywyMjIuMDYyIDc1LjMzOSwyNTkuOTc1IDE4OS41OTIsMTk5LjQ4NSAyMjUuNzE2LDI4OS43OTYgMzM0LjA4OSwyODAuNzY1ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDMzRjsiIGQ9Ik00NDYuNjE3LDkuMzUzYy03LjQxNS05Ljg4LTIxLjIzMi0xMi4yOTEtMzEuNTU1LTUuNTA5bC0xNy40ODQsMTEuNDk3bDI5LjU5NSwzOC4wNTdsMTQuOTQ2LTExLjQyNA0KCUM0NTIuMzE2LDM0LjE3LDQ1NC4zMiwxOS42MTIsNDQ2LjYxNyw5LjM1M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFQTM4MzY7IiBkPSJNNDQzLjk3MSw0NzQuOTMzbC0yOC42MDEtODUuNzk1bC04MS4yOC0xMDguMzczbC0xMDguMzczLDkuMDMxbC03Mi4yNDksMTA4LjM3M2wtMjYuMzI2LDc4Ljk2OA0KCWMtNC42MjQsMTMuODgxLDIuODksMjguODgxLDE2Ljc3MSwzMy40OTZjMTMuODgxLDQuNjI0LDI4Ljg4MS0yLjg5LDMzLjQ5Ni0xNi43NzFjMC4xNTQtMC40NTIsMC4yODktMC45MTIsMC40MTUtMS4zODINCglsMjAuNzk5LTc2LjI1OWw4MS4yOC04MS4yOGw4MS4yOCw3Mi4yNDlsMzUuNTkyLDg1LjQyNWM1LjMwMSwxMi44NzgsMjAuMDQsMTkuMDEsMzIuOTE4LDEzLjcwOQ0KCUM0NDEuOTkzLDUwMS4yNjgsNDQ4LjIzMyw0ODcuNTIzLDQ0My45NzEsNDc0LjkzM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzM0Y7IiBkPSJNMzQuNjE4LDIzNC44NjljLTkuODQ0LDUuNzM1LTEzLjE2NywxOC4zNjktNy40MjQsMjguMjEzYzUuNTksOS41ODIsMTcuNzQ2LDEzLjAzMiwyNy41MjcsNy44MDMNCglsMjAuNjE4LTEwLjg5MmwtMTguOTY1LTM3LjkzMUwzNC42MTgsMjM0Ljg2OXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzODM4NTY7IiBkPSJNNDAzLjk4MSwyMzUuNjA5Yy00LjExOCwwLTcuNzEzLTIuNzkxLTguNzQyLTYuNzgyYy03LjA5OC0yNy41NzItMTcuNTM4LTU0LjE4Ny0zMS4wODUtNzkuMjMNCgkJYy0yLjI0OS00LjQ1Mi0wLjQ3LTkuODgsMy45ODMtMTIuMTM4YzQuMjcyLTIuMTU4LDkuNDkyLTAuNjE0LDExLjg5NCwzLjU0YzE0LjI1MSwyNi4zNDQsMjUuMjMzLDU0LjMyMiwzMi43MDIsODMuMzMNCgkJYzEuMjM3LDQuODMyLTEuNjcxLDkuNzQ1LTYuNDkzLDEwLjk5MUM0MDUuNTA3LDIzNS41MSw0MDQuNzQ5LDIzNS42MDksNDAzLjk4MSwyMzUuNjA5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzODM4NTY7IiBkPSJNNDEyLjU2MSwyODAuNzY1Yy00LjU1Mi0wLjAwOS04LjM5LTMuNDA1LTguOTUtNy45MmMtMC4zNjEtMi45NDQtMC43NjgtNS44NzktMS4yMS04LjgwNQ0KCQljLTAuNzUtNC45MzEsMi42NDYtOS41MzcsNy41NzctMTAuMjg2YzQuOTMxLTAuNzUsOS41MzcsMi42NDYsMTAuMjg2LDcuNTc3YzAuNDYxLDMuMDcxLDAuODg1LDYuMTU5LDEuMjczLDkuMjU3DQoJCWMwLjYxNCw0Ljk0OS0yLjkwOCw5LjQ1Ni03Ljg1NywxMC4wN2wwLDBDNDEzLjMxLDI4MC43MTksNDEyLjk0LDI4MC43NTYsNDEyLjU2MSwyODAuNzY1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzODM4NTY7IiBkPSJNNDc4LjU4NywzMjUuOTJjLTQuOTg1LDAtOS4wMzEtNC4wNDYtOS4wMzEtOS4wMzFjMC4wMDktMjkuNzEyLTMuMTUyLTU5LjM1Mi05LjQxOS04OC4zOTYNCgkJYy0xLjkzMy04Ljg4Ny00LjE3Mi0xNy44MDktNi42NzQtMjYuNTE1Yy04Ljg1LTMwLjc3OC0yMS4yNDEtNjAuNDE4LTM2LjkzNy04OC4zMzNjLTIuNDQ3LTQuMzUzLTAuOTAzLTkuODUzLDMuNDUtMTIuMw0KCQljNC4zNTMtMi40NDcsOS44NTMtMC45MDMsMTIuMywzLjQ1YzE2LjM4MiwyOS4xMzQsMjkuMzE1LDYwLjA3NSwzOC41NDUsOTIuMTk4YzIuNjEsOS4wODUsNC45NDksMTguMzk2LDYuOTYzLDI3LjY3MQ0KCQljNi41NDgsMzAuMzA4LDkuODQ0LDYxLjIyMiw5LjgzNSw5Mi4yMjZDNDg3LjYxOCwzMjEuODc0LDQ4My41ODEsMzI1LjkyLDQ3OC41ODcsMzI1LjkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMzRTsiIGQ9Ik0yOS4yNDUsMjY1LjgxOGM2LjIyMiw3LjUwNSwxNi44NTIsOS42MjcsMjUuNDc3LDUuMDY2bDIwLjYxOC0xMC44OTJsLTcuMjg4LTE0LjU4NUwyOS4yNDUsMjY1LjgxOHoNCgkiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4M0IyQjc7IiBwb2ludHM9IjY4LjA1MSwyNDUuMzkgNzUuMzM5LDI1OS45NzUgMTg5LjU5MiwxOTkuNDg1IDIyNS43MTYsMjg5Ljc5NiAyOTIuNDExLDI4NC4yNDIgDQoJMTg5LjU5MiwxODEuNDIyICIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q2MjEyMTsiIGQ9Ik0yOTIuNDExLDI4NC4yNDJsLTY2LjY5NSw1LjU1NGwtNzIuMjQ5LDEwOC4zNzNsLTI2LjMyNiw3OC45NjgNCgkJYy00LjU4OCwxMy44NDUsMi45MDgsMjguNzgyLDE2Ljc1MywzMy4zNzljMC44MjIsMC4yNzEsMS42NjIsMC41MDYsMi41MTEsMC42OTVsMjUuMTI1LTExMy4wNDJMMjkyLjQxMSwyODQuMjQyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNENjIxMjE7IiBkPSJNMjc5LjkwMywzMzQuOTUxbDgxLjI4LDcyLjI0OWwzNS41OTIsODUuNDI1YzQuOTIyLDExLjc0OSwxNy44NjQsMTcuOTYzLDMwLjExOSwxNC40NQ0KCQlsLTQ3LjY0OC0xMDguOTA2TDI3OS45MDMsMzM0Ljk1MXoiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4M0IyQjc7IiBwb2ludHM9IjI5Ny45NjUsMTI3LjIzNiAzMDYuOTk2LDE0NS4yOTggNDI3LjE3Myw1My4zOTggNDE2LjYxNiwzOS44MTUgIi8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZBQzNFOyIgZD0iTTQxNi42MTYsMzkuODE1bDEwLjU1NywxMy41NDdsMTQuOTQ2LTExLjQyNGM4LjEwMS02LjIzMSwxMS4xOTktMTcuMDE1LDcuNjQ5LTI2LjU5Nw0KCQlMNDE2LjYxNiwzOS44MTV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMzRTsiIGQ9Ik0xODUuMDc2LDkxLjExMmMtOC41NjEtMC4wMTgtMTYuODg4LTIuNzU0LTIzLjc4OC03LjgyMWMxMi45ODcsMTguMTE2LDM4LjIxMSwyMi4yOCw1Ni4zMjcsOS4yOTMNCgkJYzUuMzkyLTMuODY1LDkuNzQ1LTguOTk1LDEyLjY4LTE0LjkzN2MtMi45OTgtMi45NDQtNi4xNTktNS43MDgtOS40NzQtOC4yODJDMjEzLjg3Niw4Mi42OTUsMjAwLjExMyw5MS4wNjYsMTg1LjA3Niw5MS4xMTJ6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjAyMDMzOyIgZD0iTTIxNy44OTUsMjYuNjg0YzkuMDQsMTIuMTkyLDEwLjM0MSwyOC40NTcsMy4zNjksNDEuOTMxYy0wLjEzNSwwLjI2Mi0wLjMwNywwLjQ5Ny0wLjQ0MywwLjc1DQoJYzMuMzE0LDIuNTc0LDYuNDc1LDUuMzM3LDkuNDc0LDguMjgyQzIzOS40MzQsNTkuOTM2LDIzNC4xNDIsMzguMjA3LDIxNy44OTUsMjYuNjg0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./img/logo.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-5010189cb95150b04176b629815a2aa7.png";

/***/ }),

/***/ "./img/stairs.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3QjY0QzsiIGQ9Ik05OC4xMzMsNDk3LjA2N2wtMy4yLTUuMzMzTDkyLjgsNDg5LjZjMCwwLTIuMTMzLTQuMjY3LTQuMjY3LTguNTMzDQoJYy0xLjA2Ny01LjMzMy00LjI2Ny05LjYtNC4yNjctOS42bC0yNS42LTkuNlY0ODBDNTcuNiw0NzguOTMzLDgyLjEzMyw1MTMuMDY3LDk4LjEzMyw0OTcuMDY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YwNTU0MDsiIGQ9Ik01NS40NjcsNDU5LjczM2MwLDAtNC4yNjcsMy4yLTYuNCw5LjZjLTEuMDY3LDIuMTMzLDAsNC4yNjcsMS4wNjcsNS4zMzMNCgljMS4wNjcsMi4xMzMsNC4yNjcsNi40LDcuNDY3LDkuNmM2LjQsNS4zMzMsOS42LDEyLjgsMTEuNzMzLDE2czYuNCw2LjQsMTQuOTMzLDcuNDY3czIzLjQ2NywwLDI1LjYtMi4xMzMNCgljMy4yLTIuMTMzLDEuMDY3LTMuMi0xLjA2Ny01LjMzM2MtMi4xMzMtMS4wNjctMTYtMTAuNjY3LTE2LTEwLjY2N3MzLjIsNC4yNjcsMS4wNjcsNS4zMzNjLTEuMDY3LDIuMTMzLTcuNDY3LDMuMi0xMy44NjcsMA0KCUM3Mi41MzMsNDkxLjczMyw1NS40NjcsNDY2LjEzMyw1NS40NjcsNDU5LjczM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzNDRBNUU7IiBkPSJNMTE2LjI2NywyMzcuODY3YzAsMCwyLjEzMywzNS4yLDAsNTAuMTMzcy05LjYsMjcuNzMzLTEwLjY2Nyw0Mi42NjdzLTE3LjA2Nyw3Ni44LTE4LjEzMyw5MC42NjcNCgljLTIuMTMzLDE0LjkzMy0yLjEzMyw0OS4wNjctMi4xMzMsNDkuMDY3cy0xMS43MzMsNS4zMzMtMTkuMi0xLjA2N2MtNi40LTUuMzMzLTYuNC01LjMzMy02LjQtNS4zMzNsMjEuMzMzLTI0MEwxMTYuMjY3LDIzNy44Njd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZEMTVDOyIgZD0iTTkyLjgsNTAxLjMzM0w4OS42LDQ5NmwtMi4xMzMtMi4xMzNjMCwwLTIuMTMzLTQuMjY3LTMuMi04LjUzM0M4My4yLDQ4MCw4MCw0NzUuNzMzLDgwLDQ3NS43MzMNCglsLTI1LjYtMTAuNjY3bC0xLjA2NywxNy4wNjdDNTMuMzMzLDQ4Mi4xMzMsNzYuOCw1MTcuMzMzLDkyLjgsNTAxLjMzM3oiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMzcwNUE7IiBkPSJNNTEuMiw0NjIuOTMzYzAsMC00LjI2NywzLjItNi40LDkuNmMtMS4wNjcsMi4xMzMtMS4wNjcsNC4yNjcsMCw1LjMzMw0KCQljMS4wNjcsMi4xMzMsNC4yNjcsNi40LDcuNDY3LDkuNmM2LjQsNi40LDkuNiwxMi44LDEwLjY2NywxNmMyLjEzMywzLjIsNi40LDYuNCwxNC45MzMsNy40NjdjOC41MzMsMS4wNjcsMjMuNDY3LDAsMjUuNi0yLjEzMw0KCQljMy4yLTIuMTMzLDEuMDY3LTMuMi0xLjA2Ny01LjMzM2MtMi4xMzMtMi4xMzMtMTYtMTAuNjY3LTE2LTEwLjY2N3MyLjEzMyw0LjI2NywxLjA2Nyw1LjMzM2MtMS4wNjcsMS4wNjctNy40NjcsMy4yLTEzLjg2NywwDQoJCUM2Ny4yLDQ5NC45MzMsNTEuMiw0NjkuMzMzLDUxLjIsNDYyLjkzM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjM3MDVBOyIgZD0iTTQ0LjgsNDc2LjhjMCwwLDQuMjY3LDkuNiw0LjI2NywxOC4xMzNzMCwxMC42NjcsMCwxMC42NjdoNC4yNjdjMCwwLDAtMTIuOCwyLjEzMy0xNg0KCQljMi4xMzMtMy4yLDIuMTMzLTMuMiwyLjEzMy0zLjJsMCwwTDQ0LjgsNDc2Ljh6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojNDE1QTZCOyIgZD0iTTQ0LjgsMjI5LjMzM2MwLDAtOS42LDMzLjA2NywyLjEzMyw1OC42NjdjMCwwLDQuMjY3LDExLjczMywzLjIsMjQuNTMzDQoJQzQ5LjA2NywzMjYuNCw0OCwzODcuMiw0OCw0MDIuMTMzYzAsMTQuOTMzLDEuMDY3LDQxLjYsMi4xMzMsNDYuOTMzYzEuMDY3LDUuMzMzLDAsMTEuNzMzLDAsMTMuODY3czIuMTMzLDExLjczMywxMS43MzMsMTQuOTMzDQoJczE3LjA2Ny0yLjEzMywxNy4wNjctMi4xMzNzLTEuMDY3LTQuMjY3LTEuMDY3LTkuNmMwLTUuMzMzLDEuMDY3LTcuNDY3LDAtMTAuNjY3cy0yLjEzMy01LjMzMy0yLjEzMy0xMC42NjcNCgljMC01LjMzMywxLjA2Ny0zNy4zMzMsMS4wNjctNDMuNzMzYzAtNi40LDE0LjkzMy04OC41MzMsMTQuOTMzLTg4LjUzM1M5MC42NjcsMjc2LjI2Nyw5My44NjcsMjcyczUuMzMzLTMuMiw3LjQ2Ny0xMi44DQoJYzIuMTMzLTguNTMzLDUuMzMzLTIzLjQ2Nyw1LjMzMy0yMy40NjdMNDQuOCwyMjkuMzMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzJCNDA0RjsiIGQ9Ik0xMDAuMjY3LDgyLjEzM2MwLDAsNy40NjcsMy4yLDEwLjY2Nyw3LjQ2N2MzLjIsNC4yNjcsOS42LDE3LjA2NywxMC42NjcsMjIuNA0KCWMxLjA2Nyw1LjMzMywxNy4wNjcsNTAuMTMzLDE2LDU0LjRjLTEuMDY3LDMuMiwxLjA2NywxMS43MzMsMS4wNjcsMTEuNzMzczMuMiw1MC4xMzMtMS4wNjcsNTUuNDY3DQoJYy00LjI2Nyw1LjMzMy0xNC45MzMsMC0xOS4yLTIuMTMzYy00LjI2Ny0yLjEzMy00LjI2Ny05Ni00LjI2Ny05Nmw4LjUzMy0xMi44TDEwMC4yNjcsODIuMTMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDE1QzsiIGQ9Ik0xMTYuMjY3LDEyLjhMMTE1LjIsMjMuNDY3YzAsMC0xLjA2Nyw1LjMzMy0xLjA2Nyw3LjQ2N2MxLjA2NywxLjA2Nyw1LjMzMyw0LjI2Nyw1LjMzMyw2LjQNCglzLTMuMiw0LjI2Ny0zLjIsNC4yNjdzMi4xMzMsMy4yLDMuMiw0LjI2N2MxLjA2NywxLjA2NywwLDIuMTMzLTEuMDY3LDIuMTMzYzAsMCwyLjEzMywxLjA2NywxLjA2NywzLjINCgljLTEuMDY3LDIuMTMzLTIuMTMzLDIuMTMzLTEuMDY3LDUuMzMzYzEuMDY3LDMuMi04LjUzMyw1LjMzMy0xMS43MzMsNi40Yy0zLjIsMS4wNjctOC41MzMsMTguMTMzLTguNTMzLDE5LjINCglzMTkuMiwzNC4xMzMsMTkuMiwzNC4xMzNsNi40LDE2bC0xMy44NjcsMTMuODY3bC0zMC45MzMtNTEuMmMwLDAsNC4yNjctODguNTMzLDUuMzMzLTg4LjUzM0M4NC4yNjcsNS4zMzMsMTA3LjczMyw2LjQsMTE2LjI2NywxMi44DQoJeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzY2QzZCOTsiIGQ9Ik0xMTMuMDY3LDEwNy43MzNjMCwwLDEzLjg2NywzMy4wNjctOC41MzMsMTkuMmwxMi44LDkyLjhjMCwwLDEyLjgtNTIuMjY3LDEyLjgtNzMuNg0KCVMxMTMuMDY3LDEwNy43MzMsMTEzLjA2NywxMDcuNzMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzM0NEE1RTsiIGQ9Ik02MC44LDc0LjY2N2MwLDAtMTQuOTMzLDguNTMzLTE5LjIsMTZjLTQuMjY3LDcuNDY3LTYuNCwyNC41MzMtNS4zMzMsMjkuODY3DQoJYzAsMCw3LjQ2NywxMi44LDEyLjgsMjAuMjY3YzQuMjY3LDguNTMzLDMuMiw2Ni4xMzMtMTAuNjY3LDg4LjUzM2MwLDAsMzQuMTMzLDEwLjY2Nyw1OS43MzMsMTIuOHMyMi40LTEzLjg2NywyMi40LTIyLjQNCgljMC05LjYsMS4wNjctNDAuNTMzLDEuMDY3LTQwLjUzM3MwLTE0LjkzMy02LjQtMjkuODY3QzEwOC44LDEzNC40LDgxLjA2Nyw3Ni44LDgxLjA2Nyw3Ni44TDYwLjgsNzQuNjY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQxNUE2QjsiIGQ9Ik05MS43MzMsOTMuODY3YzAsMCwxMi44LDIyLjQsMTguMTMzLDMzLjA2N2M1LjMzMywxMC42NjcsMTIuOCwzNS4yLDExLjczMyw1MS4yDQoJYzAsMC0xLjA2Ny0xMy44NjctNy40NjctMjguOGMtNi40LTE0LjkzMy0zNC4xMzMtNDgtMzQuMTMzLTQ4bDguNTMzLTEuMDY3bC0xMi44LTMuMmwtNi40LTIzLjQ2N2wxMS43MzMtMi4xMzNMOTEuNzMzLDkzLjg2N3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNUM7IiBkPSJNMTE1LjIsMzAuOTMzYzEuMDY3LDEuMDY3LDQuMjY3LDQuMjY3LDUuMzMzLDYuNGMwLDMuMi0zLjIsNC4yNjctMy4yLDQuMjY3TDExNS4yLDMwLjkzM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMzcwNUE7IiBkPSJNMTE1LjIsMjMuNDY3YzAsMC0xLjA2NywwLTQuMjY3LTMuMlMxMDUuNiwxMS43MzMsOTkuMiw5LjZzLTEzLjg2NywwLTEzLjg2NywwczYuNCwwLDUuMzMzLDkuNg0KCWMtMi4xMzMsMTAuNjY3LTMuMiwyMC4yNjctNC4yNjcsNDIuNjY3Yy0xLjA2NywyMi40LDYuNCwzMiw2LjQsMzJTODAsODMuMiw3OC45MzMsNzYuOGMwLDAsMy4yLDE3LjA2NywxOC4xMzMsMjYuNjY3DQoJYzAsMC0yNy43MzMtMTMuODY3LTMzLjA2Ny0yMS4zMzNjLTUuMzMzLTcuNDY3LTIxLjMzMyw2LjQtMjIuNCwxMi44YzAsMCwyLjEzMy0xMi44LDQuMjY3LTE4LjEzM0M0OCw3MS40NjcsNDQuOCwxMC42NjcsNjUuMDY3LDkuNg0KCWMwLDAsMS4wNjctOS42LDIxLjMzMy05LjZTMTI0LjgsOC41MzMsMTE1LjIsMjMuNDY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQxNUE2QjsiIGQ9Ik05OC4xMzMsODBjMCwwLTMuMiw4LjUzMywwLDExLjczM2MzLjIsMy4yLDkuNiwxMi44LDEyLjgsMTcuMDY3YzMuMiw0LjI2NywxMi44LDI1LjYsMTkuMiwzOC40DQoJYzYuNCwxMi44LDguNTMzLDMwLjkzMyw4LjUzMywzMC45MzNzMC0xLjA2NywwLTIuMTMzYzAtMTIuOC0zLjItMjUuNi03LjQ2Ny0zOC40Yy00LjI2Ny0xMi44LTExLjczMy0zMi0xNC45MzMtMzYuMjY3DQoJQzExMy4wNjcsOTYsOTguMTMzLDgwLDk4LjEzMyw4MHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNUM7IiBkPSJNNTkuNzMzLDI2OC44bDYuNCwxLjA2N2MwLDAsMi4xMzMsNy40NjcsMy4yLDExLjczM2MxLjA2Nyw0LjI2NywxLjA2NywxMS43MzMsMS4wNjcsMTQuOTMzDQoJczAsNi40LDAsNi40UzY1LjA2NywzMDQsNjUuMDY3LDI5Ny42YzAtNi40LTEuMDY3LTEwLjY2Ny0yLjEzMy0xMy44NjdzLTEuMDY3LTMuMi0xLjA2Ny0zLjJMNTkuNzMzLDI2OC44eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzY2QzZCOTsiIGQ9Ik0xMDIuNCwzMDUuMDY3SDc4LjkzM1YyOTQuNGMwLTMuMi0zLjItNi40LTYuNC02LjRoLTMyYy0zLjIsMC02LjQsMy4yLTYuNCw2LjR2MTAuNjY3aC0yNS42DQoJQzQuMjY3LDMwNS4wNjcsMCwzMDkuMzMzLDAsMzEzLjZ2NjYuMTMzYzAsNC4yNjcsNC4yNjcsOC41MzMsOC41MzMsOC41MzNIMTAyLjRjNC4yNjcsMCw4LjUzMy00LjI2Nyw4LjUzMy04LjUzM1YzMTMuNg0KCUMxMTAuOTMzLDMwOS4zMzMsMTA3LjczMywzMDUuMDY3LDEwMi40LDMwNS4wNjd6IE03MS40NjcsMzA1LjA2N2gtMzJWMjk0LjRoMzJWMzA1LjA2N3oiLz4NCjxnPg0KCTxyZWN0IHg9IjE2IiB5PSIzMDUuMDY3IiBzdHlsZT0iZmlsbDojNEFCQUE1OyIgd2lkdGg9IjguNTMzIiBoZWlnaHQ9IjgzLjIiLz4NCgk8cmVjdCB4PSI4Ni40IiB5PSIzMDUuMDY3IiBzdHlsZT0iZmlsbDojNEFCQUE1OyIgd2lkdGg9IjguNTMzIiBoZWlnaHQ9IjgzLjIiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNUM7IiBkPSJNNDQuOCwyNzYuMjY3YzAsMC0xLjA2Nyw2LjQtMS4wNjcsOS42czAsOS42LDAsOS42YzAsMS4wNjcsNC4yNjcsMi4xMzMsNS4zMzMsMS4wNjcNCgljMCwwLDAsMy4yLDMuMiwzLjJjMy4yLDAsMS4wNjcsMCwxLjA2Ny0xLjA2N2MwLDAsMCwyLjEzMywzLjIsMi4xMzNzMi4xMzMtMS4wNjcsMi4xMzMtMi4xMzNjMCwwLDEuMDY3LDIuMTMzLDMuMiwyLjEzMw0KCUM2NCwzMDAuOCw2NCwyOTguNjY3LDY0LDI5Ny42YzAtMS4wNjctMS4wNjctNi40LTEuMDY3LTcuNDY3YzAtMS4wNjcsMi4xMzMtNi40LDIuMTMzLTcuNDY3YzAtMS4wNjcsMi4xMzMtNy40NjcsMS4wNjctMTEuNzMzDQoJYy0xLjA2Ny0zLjItMi4xMzMtNi40LTMuMi0xMC42NjdjLTEuMDY3LTUuMzMzLTIuMTMzLTI1LjYsMC0zNS4yYzIuMTMzLTkuNiwxLjA2Ny0zNC4xMzMsMS4wNjctMzQuMTMzbC0xOS4yLDkuNmMwLDAsMCwxNiwwLDIzLjQ2Nw0KCXMzLjIsMjQuNTMzLDMuMiwzMkM0Ni45MzMsMjY0LjUzMyw0NC44LDI3Ni4yNjcsNDQuOCwyNzYuMjY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQxNUE2QjsiIGQ9Ik0zNi4yNjcsMTM2LjUzM2MtMS4wNjctNS4zMzMtMi4xMzMtMTAuNjY3LTIuMTMzLTE2YzEuMDY3LTcuNDY3LDMuMi0xOS4yLDUuMzMzLTI0LjUzMw0KCWM0LjI2Ny05LjYsMTIuOC0xMy44NjcsMjEuMzMzLTguNTMzczE4LjEzMywyNi42NjcsMTEuNzMzLDQzLjczM2MwLDAsMS4wNjcsOS42LTEuMDY3LDE3LjA2N3MtMi4xMzMsMTMuODY3LTIuMTMzLDE3LjA2Nw0KCWMwLDMuMiwxLjA2Nyw5LjYsMS4wNjcsMTEuNzMzYzAsMi4xMzMtMi4xMzMsNC4yNjctMi4xMzMsNi40YzAsMi4xMzMsMCwxMy44NjcsMCwxMy44NjdzLTEzLjg2NywwLTIzLjQ2NywzLjJ2LTEyLjgNCgljMCwwLTUuMzMzLDAtNS4zMzMtNC4yNjdzMC0zLjIsMC02LjRjMC0zLjItMi4xMzMtNy40NjctMy4yLTEyLjhjLTEuMDY3LTUuMzMzLTEuMDY3LTkuNiwyLjEzMy0xNC45MzMNCglDMzkuNDY3LDE0Ni4xMzMsMzguNCwxNDAuOCwzNi4yNjcsMTM2LjUzM3oiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNBREIzQkE7IiBwb2ludHM9IjI1OC4xMzMsNTEyIDUxMiw0MTQuOTMzIDUxMiwyNTYgMzgxLjg2NywyNTYgMzgxLjg2NywzMzYgMjU4LjEzMywzMzYgMjU4LjEzMyw0MTQuOTMzIA0KCTEzNS40NjcsNDE0LjkzMyAxMzUuNDY3LDUxMiAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./img/trekking.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAzOCA1MTIuMDM4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDM4IDUxMi4wMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDRjQ3Mzc7IiBkPSJNNjkuNzQ3LDE4NC42NjNoMTkuMzQ2bDAsMHY3MC4zNDhsMCwwSDY5Ljc0N2MtOC43NDEsMC0xNS44MjgtNy4wODgtMTUuODI4LTE1LjgyOHYtMzguNjkxDQoJQzUzLjkxOCwxOTEuNzUxLDYxLjAwNiwxODQuNjYzLDY5Ljc0NywxODQuNjYzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzNFOENDNzsiIGQ9Ik0yMzguNTgxLDEwNS41MjJoLTM1LjE3NGMtMTkuNDI1LDAtMzUuMTc0LDE1Ljc0OS0zNS4xNzQsMzUuMTc0djE1OC4yODNoMTA1LjUyMlYxNDAuNjk2DQoJQzI3My43NTUsMTIxLjI3MSwyNTguMDA2LDEwNS41MjIsMjM4LjU4MSwxMDUuNTIyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFQzlBMzsiIGQ9Ik0yNjQuOTYyLDE3LjU4N2wtNjkuMjQsOC43OTNjLTAuNzM5LDIuODc1LTEuMTA4LDUuODMtMS4xMDgsOC43OTN2MzUuMTc0DQoJYzAsMTkuNDI1LDE1Ljc0OSwzNS4xNzQsMzUuMTc0LDM1LjE3NHMzNS4xNzQtMTUuNzQ5LDM1LjE3NC0zNS4xNzRWMzUuMTc0QzI2NS4zMjIsMjkuMzE3LDI2NS4zMjIsMjMuNDQzLDI2NC45NjIsMTcuNTg3eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6Izc1NDYyRTsiIGQ9Ik0xOTQuNjE0LDI2LjM4djM1LjE3NGwzNS4xNzQtMzUuMTc0aDI2LjM4YzE0LjU3MSwwLDI2LjM4LTExLjgxLDI2LjM4LTI2LjM4aC02MS41NTQNCgkJQzIwNi40MjQsMCwxOTQuNjE0LDExLjgxLDE5NC42MTQsMjYuMzhMMTk0LjYxNCwyNi4zOCIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM3NTQ2MkU7IiBkPSJNMjczLjc1NSwyOTguOTc4SDE2OC4yMzN2ODcuOTM1bC03OS4xNDEsMzUuMTc0bDE3LjU4NywzNS4xNzRsODMuODcyLTM0Ljk0NQ0KCQljMTMuMTExLTUuNDYxLDIxLjY1LTE4LjI3MywyMS42NS0zMi40NzR2LTM5LjA0M2MwLTkuMTg5LDcuNDQ4LTE2LjY0NiwxNi42NDYtMTYuNjQ2YzYuMDE1LDAsMTEuNTYzLDMuMjQ1LDE0LjUwOSw4LjQ4Ng0KCQlsNzQuMzY2LDEzMi4yMWwzNS4xNzQtMTcuNTg3TDI3My43NTUsMjk4Ljk3OHoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzRThDQzc7IiBkPSJNODQuMjI5LDUwMC4yOTZsLTMwLjMxMS02MC42MjJsMzUuMTc0LTE3LjU4N2wzMS4yNDMsNjIuNDg2YzIuNDcxLDQuOTUxLDIuNDcxLDEwLjc3MiwwLDE1LjcyM2wwLDANCgkJYy0yLjk4MSw1Ljk2Mi05LjA3NSw5LjcyNi0xNS43MzIsOS43MjZoLTQuNjQzQzkzLjI5NSw1MTAuMDIyLDg3LjIwMiw1MDYuMjU4LDg0LjIyOSw1MDAuMjk2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzRThDQzc7IiBkPSJNMzg4LjA3LDQ4My42NDFsLTUyLjc2MSwyNi4zOGwtMTcuNTg3LTM1LjE3NGw1Mi43NjEtMjYuMzhjOS43MTctNC44NTQsMjEuNTI2LTAuOTIzLDI2LjM4LDguNzkzDQoJCWwwLDBsMCwwQzQwMS43MTgsNDY2Ljk3NywzOTcuNzc4LDQ3OC43ODcsMzg4LjA3LDQ4My42NDFMMzg4LjA3LDQ4My42NDF6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkVDOUEzOyIgZD0iTTM5NC4zMzEsMTYwLjc3MWMtNy4yMTEtOS42MTEtMjAuODU4LTExLjU2My0zMC40NjktNC4zNTNjLTAuODI3LDAuNjE2LTEuNiwxLjI5My0yLjMzLDIuMDIyDQoJbC00My44MDksNDMuODA5bC00My45NjctNTIuNzYxdjcwLjM0OGwzLjg0Myw1Ljc2YzE0LjE5MywyMS4yNzEsNDIuOTM5LDI3LjAyMiw2NC4yMTksMTIuODNjMi41NDEtMS42OTcsNC45MDctMy42MzIsNy4wNjEtNS43OTUNCglsNDMuNDMxLTQzLjQzMUMzOTkuOTU5LDE4MS41NDEsNDAwLjgyMSwxNjkuNDMzLDM5NC4zMzEsMTYwLjc3MXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM3NTQ2MkU7IiBkPSJNMTk4LjU4LDk2LjcyOGgtNjUuNTJ2MTcuNTg3aDY1LjUyYzEyLjcxNSwwLjAwOSwyMy4wMTMsMTAuMzI0LDIzLjAwNCwyMy4wMzkNCgkJYzAsMy40NzMtMC43OTEsNi45MDMtMi4zMDQsMTAuMDI1bC01NS4yNjcsMTEzLjc4OGwtMjIuMTYsMi42Mzh2MTcuNTg3bDI1LjA2MS0zLjYxNGM1Ljc3Ny0wLjgzNSwxMC43NTQtNC40NzYsMTMuMzA1LTkuNzI2DQoJCWw1NC44NDUtMTEyLjk3OWM5Ljc5Ni0yMC4xNzIsMS4zODEtNDQuNDY5LTE4Ljc5Mi01NC4yNjVDMjEwLjc1OSw5OC4xMjYsMjA0LjcwOSw5Ni43MzcsMTk4LjU4LDk2LjcyOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNzU0NjJFOyIgZD0iTTg5LjA5MiwyNjMuODA0YzAsMTQuNTcxLDExLjgxLDI2LjM4LDI2LjM4LDI2LjM4aDI2LjM4YzE0LjU3MSwwLDI2LjM4LTExLjgxLDI2LjM4LTI2LjM4di04Ljc5Mw0KCQlIODkuMDkyQzg5LjA5MiwyNTUuMDExLDg5LjA5MiwyNjMuODA0LDg5LjA5MiwyNjMuODA0eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RFNEMzQzsiIGQ9Ik0xNjYuNzM5LDEyMy4xMDljLTMuNzI4LTEwLjU0My0xMy43LTE3LjU5Ni0yNC44ODYtMTcuNTg3aC0yNi4zOGMtMTQuNTcxLDAtMjYuMzgsMTEuODEtMjYuMzgsMjYuMzgNCgl2MTIzLjEwOWg3OS4xNDFWMTMxLjkwMkwxNjYuNzM5LDEyMy4xMDl6Ii8+DQo8cmVjdCB4PSIzOTYuNzk1IiB5PSIxMjYuODY0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC45NzQgMC4yMjY1IC0wLjIyNjUgLTAuOTc0IDg3My4zMzc0IDU0MS43NDY5KSIgc3R5bGU9ImZpbGw6Izc1NDYyRTsiIHdpZHRoPSIxNy41ODciIGhlaWdodD0iMzg4LjIyOCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzNFOENDNzsiIGQ9Ik0xMjguNjYzLDI2LjM4Yy0yMS44NTIsMC0zOS41NzEsMTcuNzE5LTM5LjU3MSwzOS41NzFzMTcuNzE5LDM5LjU3MSwzOS41NzEsMzkuNTcxDQoJczM5LjU3MS0xNy43MTksMzkuNTcxLTM5LjU3MVMxNTAuNTE1LDI2LjM4LDEyOC42NjMsMjYuMzh6IE0xMjguNjYzLDc5LjE0MWMtNy4yODEsMC0xMy4xOS01LjkwOS0xMy4xOS0xMy4xOQ0KCXM1LjkwOS0xMy4xOSwxMy4xOS0xMy4xOWM3LjI4MSwwLDEzLjE5LDUuOTA5LDEzLjE5LDEzLjE5UzEzNS45NDQsNzkuMTQxLDEyOC42NjMsNzkuMTQxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFQzlBMzsiIGQ9Ik0yMjguMDI5LDE0NS43MzRsLTUxLjAwMiwzMS4wOTRsNTkuNzk2LDQzLjAwOWMxMC4wOTUsNi43NTMsMTIuODAzLDIwLjQwMSw2LjA1LDMwLjQ5Ng0KCWMtMC4yMTEsMC4zMTctMC40MzEsMC42MjQtMC42NiwwLjkzMmwwLDBjLTcsOS4zMTItMjAuMDQsMTEuNTQ2LTI5Ljc0LDUuMWwtNzMuNjEtNTIuMTg5Yy05LjEyOC02LjEwMy0xNC42MDYtMTYuMzY1LTE0LjU5Ny0yNy4zNDgNCglsMCwwYzAtMTAuOTgzLDUuNDg3LTIxLjI0NSwxNC42MzItMjcuMzM5bDY0LjgxNy00MC4yODNjOS42OTktNi40NDYsMjIuNzQtNC4yMTIsMjkuNzQsNS4xbDAsMA0KCWM3LjI1NSw5LjczNCw1LjI1LDIzLjUwNS00LjQ4NSwzMC43NjhDMjI4LjY2MiwxNDUuMzAzLDIyOC4zNDYsMTQ1LjUyMywyMjguMDI5LDE0NS43MzR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./pages/chiropractor-liverpool.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_doctor_svg__ = __webpack_require__("./img/doctor.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_doctor_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_doctor_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_trekking_svg__ = __webpack_require__("./img/trekking.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__img_trekking_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__img_trekking_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_stairs_svg__ = __webpack_require__("./img/stairs.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__img_stairs_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__img_stairs_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_exercise_svg__ = __webpack_require__("./img/exercise.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__img_exercise_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__img_exercise_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_diet_svg__ = __webpack_require__("./img/diet.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__img_diet_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__img_diet_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_clipboard_svg__ = __webpack_require__("./img/clipboard.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_clipboard_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__img_clipboard_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_IntroLiverpool__ = __webpack_require__("./components/IntroLiverpool.jsx");
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/pages/chiropractor-liverpool.jsx";














var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    contentwrapper: {
      borderRadius: 12.5,
      marginTop: -160,
      marginLeft: 25,
      marginRight: 25,
      paddingBottom: 45
    },
    title: {
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 15
    },
    feature: {
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      display: 'flex'
    },
    heading: {
      marginTop: 20,
      marginBottom: 10,
      color: '#3C4858',
      minHeight: 32,
      fontWeight: 700,
      fontSize: '2.25rem',
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    subheading: {
      color: '#3C4858',
      minHeight: 32,
      fontWeight: 400,
      fontSize: '32',
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    bodytext: {
      fontFamily: 'Helvetica',
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      fontWeight: 220,
      paddingLeft: 25,
      paddingRight: 25,
      textAlign: 'justify'
    },
    bodytext2: {
      fontFamily: 'Helvetica',
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      paddingRight: '8%',
      paddingLeft: '8%'
    }
  };
};

function Liverpool(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_IntroLiverpool__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Paper___default.a, {
    className: classes.contentwrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_6__img_doctor_svg___default.a,
    height: "128",
    width: "128",
    alt: "Chiropractor in Liverpool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Chiropractors in Liverpool, England"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, "The ability to carry on with a healthy lifestyle goes past access to quality doctors, optimal healthcare benefits or even high-class hospitals. A city's health, to a large degree, takes into consideration the decisions its occupants make to bring down their individual health risks. In the event that you are a part of the healthy breed, carrying on with a balanced way of life shouldn't be a troublesome task. There are many ways to guarantee that you remain in a healthy state. The following are a couple of tips to enable you to maintain your well-being."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_7__img_trekking_svg___default.a,
    height: "80",
    width: "80",
    alt: "Walking 80x80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, "Walk When You Can", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  })), "Most individuals incline toward driving rather than walking, especially to their workplaces. Walking is a fantastic low-impact practice that plays an instrumental part in toning up your legs and abs, consuming sugars and making you feel relaxed. Avoid cabs and tubes as much as you can, and instead, walk to any close destination. Guarantee you have comfortable shoes and lightweight garments unless it is winter season. You can also visit better places inside the city as part of the activity. Alternatively, you can take a bike ride to your destination on the off chance that you discover it an additionally appealing choice.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_8__img_stairs_svg___default.a,
    height: "80",
    width: "80",
    alt: "Stairs 80x80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, "Utilize The Stairs", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  })), "Most individuals want to utilize escalators and elevators when they are late as well as notwithstanding when the time isn't an issue. They think that it's less tedious and probably more enjoyable. In any case, fortunately, most workplaces have many stairs, something you should take advantage of on the off chance that you plan on leading a healthy way of life. Instead of utilizing the elevator or escalator, use the stairs. It is a phenomenal way to do light activities notwithstanding amid your working hours. Additionally, it is great for your legs and back.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_9__img_exercise_svg___default.a,
    height: "80",
    width: "80",
    alt: "Exercise 80x80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "Embrace Outdoor Activities", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  })), "If you cannot find time to go to the exercise center, it doesn't mean that your mission to lead a healthy life is damned. You should attempt new wellness hacks, for example, energetic walking and run. Moreover, you can as well invest some energy to loosen up with a couple of open-air yoga acts like this will help relax your muscles and consume a couple of calories.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_10__img_diet_svg___default.a,
    height: "80",
    width: "80",
    alt: "Diet 80x80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, "Eat and Drink Healthy", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  })), "For one to carry on with a healthy life, he or she should embrace a balanced eating regimen. Guarantee your eating regimen has a broad range of organic products, veggies, lean meat, eggs, angle, nuts, beats, entire grains as well as naturally low dairy fat nourishments. On the off chance that you are the sort of individual who likes attempting new flavors, cocktails, salads or natural products, endeavor to avoid overeating or drinking too much. This may foul up with your healthy eating regimen. On the off chance that you want to snatch a couple of snacks, counterbalance it by drinking more water or doing light physical activities.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_11__img_clipboard_svg___default.a,
    height: "80",
    width: "80",
    alt: "Conclusion 80x80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, "Conclusion", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  })), "Although life, in general, can be exorbitantly occupied; regardless you have a chance to lead a healthy life. As noted above, little advances, for example, walking to close destinations, utilizing stairs instead of elevators, embracing outside activities, embracing local facilities as well as eating and drinking healthy can help you in your mission to maintain a healthy living."))))));
}

Liverpool.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Liverpool));

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/chiropractor-liverpool.jsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/SwipeableDrawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Search":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-icons/lib/fa/book":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/book");

/***/ }),

/***/ "react-icons/lib/fa/comments-o":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/comments-o");

/***/ }),

/***/ "react-icons/lib/fa/facebook-square":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/facebook-square");

/***/ }),

/***/ "react-icons/lib/fa/home":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/home");

/***/ }),

/***/ "react-icons/lib/fa/search":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/search");

/***/ }),

/***/ "react-icons/lib/fa/twitter-square":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/twitter-square");

/***/ }),

/***/ "react-icons/lib/ti/social-instagram":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/ti/social-instagram");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=chiropractor-liverpool.js.map