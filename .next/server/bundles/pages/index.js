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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/find-a-chiropractor",
    style: {
      textDecoration: 'none'
    },
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

/***/ "./components/IntroIndex.jsx":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search__ = __webpack_require__("@material-ui/icons/Search");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/IntroIndex.jsx";









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

function IntroIndex(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __webpack_require__("./img/logo.png"),
    alt: "Chiropractorhunter Logo",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    variant: "headline",
    component: "h1",
    className: classes.chiroheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Find Chiropractics Near You", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    variant: "body1",
    component: "p",
    className: classes.chirop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, "If you're looking for the best chiropractors near you, then you're at the right place. We have carefully chosen the best quality chiropractics for you.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/find-a-chiropractor",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    className: classes.button,
    variant: "raised",
    color: "rgb(178,54,52)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Find", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search___default.a, {
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }))))));
}

IntroIndex.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(IntroIndex));

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

/***/ "./components/featurecard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_medicine_svg__ = __webpack_require__("./img/medicine.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_medicine_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_medicine_svg__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/featurecard.jsx";





{
  /*import '../assets/fontstyles';*/
}

var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
    }),
    imgvector: {
      paddingTop: 24,
      paddingBottom: 24
    },
    heading: {
      marginTop: 20,
      marginBottom: 10,
      color: '#3C4858',
      minHeight: 32,
      fontWeight: 400,
      fontSize: '2rem',
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    bodytext: {
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      fontFamily: 'Helvetica'
    }
  };
};

function FeatureCardMedicine(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_4__img_medicine_svg___default.a,
    height: "128",
    width: "128",
    className: classes.imgvector,
    alt: "Medicine Free",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
    variant: "headline",
    component: "h3",
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Medicine Free"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Most modern healthcare professionals lean toward pills for tackling any kind of problem their patients face which can have severe side effects. If you're currently undergoing some kind of treatment for your pain, then chiropractic care will complement the treatment helping you recover quickly.")));
}

FeatureCardMedicine.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(FeatureCardMedicine));

/***/ }),

/***/ "./components/featurecardbrain.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_brain_svg__ = __webpack_require__("./img/brain.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_brain_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_brain_svg__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/featurecardbrain.jsx";






var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
    }),
    imgvector: {
      paddingTop: 24,
      paddingBottom: 24
    },
    heading: {
      marginTop: 20,
      marginBottom: 10,
      color: '#3C4858',
      minHeight: 32,
      fontWeight: 400,
      fontSize: '2rem',
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    bodytext: {
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      fontFamily: 'Helvetica'
    }
  };
};

function FeatureCardBrain(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_4__img_brain_svg___default.a,
    height: "128",
    width: "128",
    className: classes.imgvector,
    alt: "Neurological Support",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
    variant: "headline",
    component: "h3",
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Neurological Support"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Do you have brain fog? Don't feel like getting up and doing what you're supposed to be doing? You might be suffering from a cognitive decline! Chiropractics provide services for treating brain and nervous system disorders using safe and powerful techniques producing long-term health benefits.")));
}

FeatureCardBrain.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(FeatureCardBrain));

/***/ }),

/***/ "./components/featurecardpain.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_pain_svg__ = __webpack_require__("./img/pain.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_pain_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_pain_svg__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/featurecardpain.jsx";





{
  /*import '../assets/fontstyles';*/
}

var styles = function styles(theme) {
  return {
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
    }),
    imgvector: {
      paddingTop: 24,
      paddingBottom: 24
    },
    heading: {
      marginTop: 20,
      marginBottom: 10,
      color: '#3C4858',
      minHeight: 32,
      fontWeight: 400,
      fontSize: '2rem',
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    bodytext: {
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      fontFamily: 'Helvetica'
    }
  };
};

function FeatureCardPain(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_4__img_pain_svg___default.a,
    height: "128",
    width: "128",
    className: classes.imgvector,
    alt: "Pain Relief",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
    variant: "headline",
    component: "h3",
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Pain Relief"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Suffering from pain? Chiropractic is an alternative medicine practice focused on the spine. Chiropractors manipulate the body's alignment to alleviate pain and enhance function and to help the body heal itself. This manipulation is what brings about the relief in pain.")));
}

FeatureCardPain.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(FeatureCardPain));

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

/***/ "./img/brain.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/brain-3f7bb5027461a4d8ae6837ad79597593.svg";

/***/ }),

/***/ "./img/logo.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-5010189cb95150b04176b629815a2aa7.png";

/***/ }),

/***/ "./img/medicine.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzI1NzFBMDsiIGQ9Ik0yNTUuNzkyLDMxLjA5NmgtMTAuODc0bC0yLjA2Mi0yLjA2Mkg3My41MDZsLTIuMDYyLDIuMDYySDYwLjU2N2MtMTEuMzI3LDAtMjAuNTEsOS4xODItMjAuNTEsMjAuNTENCgl2NDAuNTNjMCwxMS4zMjcsOS4xODIsMjAuNTEsMjAuNTEsMjAuNTFoMTk1LjIyNGMxMS4zMjksMCwyMC41MTItOS4xODMsMjAuNTEyLTIwLjUxdi00MC41Mw0KCUMyNzYuMzAzLDQwLjI3OCwyNjcuMTIxLDMxLjA5NiwyNTUuNzkyLDMxLjA5NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxOTYwODQ7IiBkPSJNNjAuOTY1LDkyLjEzNnYtNDAuNTNjMC0xMS4zMjgsOS4xODItMjAuNTEsMjAuNTEtMjAuNTFoMTAuODc2di0yLjA2Mkg3MS40NDR2Mi4wNjJINjAuNTY3DQoJYy0xMS4zMjcsMC0yMC41MSw5LjE4Mi0yMC41MSwyMC41MXY0MC41M2MwLDExLjMyNyw5LjE4MiwyMC41MSwyMC41MSwyMC41MWgyMC45MDdDNzAuMTQ4LDExMi42NDYsNjAuOTY1LDEwMy40NjMsNjAuOTY1LDkyLjEzNnoiDQoJLz4NCjxyZWN0IHg9IjcxLjQ0NyIgeT0iMTA5LjU1IiBzdHlsZT0iZmlsbDojQkFCQUJBOyIgd2lkdGg9IjE3My40NyIgaGVpZ2h0PSI1MC41NjMiLz4NCjxyZWN0IHg9IjcxLjQ0NyIgeT0iMTM0LjgzIiBzdHlsZT0iZmlsbDojOTg5REEwOyIgd2lkdGg9IjE3My40NyIgaGVpZ2h0PSIyNS4yODEiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFQUU4RTg7IiBkPSJNMzA5LjE1NSw0NDUuNzA4YzAsMzYuNjA3LTI5LjY3Niw2Ni4yODEtNjYuMjgsNjYuMjgxSDczLjQ4NWMtMzYuNjA1LDAtNjYuMjgxLTI5LjY3NC02Ni4yODEtNjYuMjgxDQoJVjIyMS4wODVjMC0zNi42MDcsMjkuNjc2LTY2LjI4MSw2Ni4yODEtNjYuMjgxaDE2OS4zODljMzYuNjA0LDAsNjYuMjgsMjkuNjc1LDY2LjI4LDY2LjI4MXYyMjQuNjIzSDMwOS4xNTV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDZENEQ0OyIgZD0iTTI3LjgyNCw0NDUuNzA4VjIyMS4wODVjMC0zNi42MDcsMjkuNjc2LTY2LjI4MSw2Ni4yODEtNjYuMjgxaC0yMC42Mg0KCWMtMzYuNjA1LDAtNjYuMjgxLDI5LjY3NS02Ni4yODEsNjYuMjgxdjIyNC42MjNjMCwzNi42MDcsMjkuNjc2LDY2LjI4MSw2Ni4yODEsNjYuMjgxaDIwLjYyDQoJQzU3LjUwMSw1MTEuOTg5LDI3LjgyNCw0ODIuMzE1LDI3LjgyNCw0NDUuNzA4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRBOTRDQzsiIGQ9Ik00MC4wNTgsNzEuODcxdjIwLjI2NWMwLDExLjMyNyw5LjE4MiwyMC41MSwyMC41MSwyMC41MWgxOTUuMjI0YzExLjMyOSwwLDIwLjUxMi05LjE4MywyMC41MTItMjAuNTENCglWNzEuODcxSDQwLjA1OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyNTcxQTA7IiBkPSJNNjAuOTY1LDkyLjEzNlY3MS44NzFINDAuMDU4djIwLjI2NWMwLDExLjMyNyw5LjE4MiwyMC41MSwyMC41MSwyMC41MWgyMC45MDcNCglDNzAuMTQ4LDExMi42NDYsNjAuOTY1LDEwMy40NjMsNjAuOTY1LDkyLjEzNnoiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGQTkyQzsiIGN4PSI0NDIuNzA3IiBjeT0iNDQ5LjkiIHI9IjYyLjA5Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQTkyQzsiIGQ9Ik0zODguOTMyLDQ4MC45NDRjMTcuMTQ3LDI5LjY5OCw1NS4xMjMsMzkuODczLDg0LjgyMiwyMi43MjhsLTYyLjA5My0xMDcuNTQ4DQoJCUMzODEuOTYzLDQxMy4yNjksMzcxLjc4NSw0NTEuMjQ1LDM4OC45MzIsNDgwLjk0NHoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQTQ3M0I7IiBkPSJNMzQ0Ljg3OCw1MTEuOTg5Yy0xOS43MjgsMC0zNS43MjMtMTUuOTkzLTM1LjcyMy0zNS43MjN2LTk0LjMxMg0KCQljMC0xOS43MywxNS45OTUtMzUuNzI0LDM1LjcyMy0zNS43MjRjMTkuNzMsMCwzNS43MjUsMTUuOTk0LDM1LjcyNSwzNS43MjR2OTQuMzEyDQoJCUMzODAuNjAzLDQ5NS45OTcsMzY0LjYwOSw1MTEuOTg5LDM0NC44NzgsNTExLjk4OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRUE0NzNCOyIgZD0iTTMwOS4xNTUsNDI5LjExdjQ3LjE1NmMwLDE5LjczLDE1Ljk5NSwzNS43MjMsMzUuNzIzLDM1LjcyM2MxOS43MywwLDM1LjcyNS0xNS45OTMsMzUuNzI1LTM1LjcyMw0KCQlWNDI5LjExSDMwOS4xNTV6Ii8+DQo8L2c+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkE5MkM7IiBjeD0iNDQyLjcwNyIgY3k9IjQ0OS45IiByPSI2Mi4wOSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y0OTUxOTsiIGQ9Ik00MDkuNTUzLDQ4MC45NDRjLTIxLjYyLTM3LjQ0NiwwLjc5LTg1LjA5MSw0My40NC05Mi4yODJjLTUxLjQ1MS04LjY3MS05MC4zNTYsNDYuNzM4LTY0LjA2LDkyLjI4Mg0KCWMxMy4zMzYsMjMuMDk3LDM5LjI3LDM0LjM3OCw2NC4xMTIsMzAuMTlDNDM1LjQxMiw1MDguMTYyLDQxOS4xOTEsNDk3LjYzNyw0MDkuNTUzLDQ4MC45NDR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkY4ODI4OyIgZD0iTTM4OC45MzIsNDgwLjk0NGMxNy4xNDcsMjkuNjk4LDU1LjEyMywzOS44NzMsODQuODIyLDIyLjcyOGwtNjIuMDkzLTEwNy41NDgNCglDMzgxLjk2Myw0MTMuMjY5LDM3MS43ODUsNDUxLjI0NSwzODguOTMyLDQ4MC45NDR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRUE2QzE4OyIgZD0iTTQxMC4zOTQsNTAyLjkyOGMxMi43MzEsNy43MzgsMjcuOTkxLDEwLjY4MSw0Mi42NDgsOC4yMDUNCgljLTQ4LjgxNC04LjIyOC02OC45MjYtNjcuNzM0LTM0LjkxOC0xMDMuODEzbC02LjQ2NC0xMS4xOTdDMzcxLjA4Miw0MTkuNTUxLDM2OS45NzYsNDc4LjI5MSw0MTAuMzk0LDUwMi45Mjh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOEREODNEOyIgZD0iTTM4MC42MDMsNDMxLjE3MnYtNDkuMjE4YzAtMTkuNzMtMTUuOTk1LTM1LjcyNC0zNS43MjUtMzUuNzI0DQoJYy0xOS43MjgsMC0zNS43MjMsMTUuOTk0LTM1LjcyMywzNS43MjR2NDkuMjE4SDM4MC42MDN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNUNDQzJFOyIgZD0iTTM1NS4xODgsMzQ3Ljc0N2MtMy4yNjUtMC45ODMtNi43MjUtMS41MTctMTAuMzEtMS41MTdjLTE5LjcyOCwwLTM1LjcyMywxNS45OTQtMzUuNzIzLDM1LjcyNA0KCXY0OS4yMThoMjAuNjJ2LTQ5LjIxOEMzMjkuNzc1LDM2NS44MSwzNDAuNDg3LDM1Mi4xNzMsMzU1LjE4OCwzNDcuNzQ3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQTkyQzsiIGQ9Ik0yNjMuMzY3LDQwOS4wNDZjMCwxMi4wNTktOS43NzUsMjEuODMzLTIxLjgzNCwyMS44MzNINzQuODI3Yy0xMi4wNTgsMC0yMS44MzMtOS43NzUtMjEuODMzLTIxLjgzMw0KCVYyNTcuNzQ3YzAtMTIuMDU5LDkuNzc1LTIxLjgzMywyMS44MzMtMjEuODMzaDE2Ni43MDdjMTIuMDU5LDAsMjEuODM0LDkuNzc0LDIxLjgzNCwyMS44MzN2MTUxLjI5OUgyNjMuMzY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y0OTUxOTsiIGQ9Ik03My42MTQsNDA5LjA0NlYyNTcuNzQ3YzAtMTIuMDU5LDkuNzc1LTIxLjgzMywyMS44MzMtMjEuODMzaC0yMC42Mg0KCWMtMTIuMDU4LDAtMjEuODMzLDkuNzc0LTIxLjgzMywyMS44MzN2MTUxLjI5OGMwLDEyLjA1OSw5Ljc3NSwyMS44MzMsMjEuODMzLDIxLjgzM2gyMC42Mg0KCUM4My4zODksNDMwLjg3OSw3My42MTQsNDIxLjEwNCw3My42MTQsNDA5LjA0NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFQUU4RTg7IiBkPSJNMTk3Ljk3MSwzMTUuOTM4SDE3NS42NHYtMjIuMzMzYzAtOC4wNzMtNi41NDYtMTQuNjE2LTE0LjYxOS0xNC42MTZoLTUuNjgzDQoJCWMtOC4wNzQsMC0xNC42MTgsNi41NDQtMTQuNjE4LDE0LjYxNnYyMi4zMzNoLTIyLjMzMWMtOC4wNzQsMC0xNC42MTksNi41NDQtMTQuNjE5LDE0LjYxN3Y1LjY4Mw0KCQljMCw4LjA3NSw2LjU0NSwxNC42MTcsMTQuNjE5LDE0LjYxN2gyMi4zMzF2MjIuMzMzYzAsOC4wNzMsNi41NDQsMTQuNjE4LDE0LjYxOCwxNC42MThoNS42ODNjOC4wNzMsMCwxNC42MTktNi41NDUsMTQuNjE5LTE0LjYxOA0KCQl2LTIyLjMzM2gyMi4zMzFjOC4wNzMsMCwxNC42MTctNi41NDMsMTQuNjE3LTE0LjYxN3YtNS42ODNDMjEyLjU4OCwzMjIuNDgyLDIwNi4wNDQsMzE1LjkzOCwxOTcuOTcxLDMxNS45Mzh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0VBRThFODsiIGQ9Ik0yMjQuNDA5LDBIOTEuOTUzYy0xMS4zMjksMC0yMC41MSw5LjE4My0yMC41MSwyMC41MXYxMC41ODZoMTczLjQ3NFYyMC41MQ0KCQlDMjQ0LjkxOCw5LjE4MywyMzUuNzM2LDAsMjI0LjQwOSwweiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q2RDRENDsiIGQ9Ik0xMTIuMjk1LDBIOTEuOTUzYy0xMS4zMjksMC0yMC41MSw5LjE4My0yMC41MSwyMC41MXYxMC41ODZoMjAuMzQyVjIwLjUxDQoJCUM5MS43ODUsOS4xODMsMTAwLjk2NiwwLDExMi4yOTUsMHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDZENEQ0OyIgZD0iTTEzNS45MTcsMzM0Ljg3NGMtOC4wNzQsMC0xNC42MTktNi41NDMtMTQuNjE5LTE0LjYxN3YtNC4zMTloLTIuOTA5DQoJCWMtOC4wNzQsMC0xNC42MTksNi41NDQtMTQuNjE5LDE0LjYxN3Y1LjY4M2MwLDguMDc1LDYuNTQ1LDE0LjYxNywxNC42MTksMTQuNjE3aDIyLjMzMXYyMi4zMzNjMCw4LjA3Myw2LjU0NCwxNC42MTgsMTQuNjE4LDE0LjYxOA0KCQloNS42ODNjOC4wNzMsMCwxNC42MTktNi41NDUsMTQuNjE5LTE0LjYxOHYtMS4zNjNoLTIuNzc0Yy04LjA3NCwwLTE0LjYxOC02LjU0NS0xNC42MTgtMTQuNjE4di05LjE3MnYtMC43ODgNCgkJYzAtNi44MzMtNS41MzktMTIuMzcyLTEyLjM3Mi0xMi4zNzJoLTguNzk3aC0xLjE2MlYzMzQuODc0eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRBOTRDQzsiIGQ9Ik0zMDkuMTU1LDQyOS4xMXY0Ny4xNTZjMCwxOS43MywxNS45OTUsMzUuNzIzLDM1LjcyMywzNS43MjNjMTkuNzMsMCwzNS43MjUtMTUuOTkzLDM1LjcyNS0zNS43MjMNCglWNDI5LjExSDMwOS4xNTV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjU3MUEwOyIgZD0iTTMyOS43NzUsNDc2LjI2NlY0MjkuMTFoLTIwLjYydjQ3LjE1NmMwLDE5LjczLDE1Ljk5NSwzNS43MjMsMzUuNzIzLDM1LjcyMw0KCWMzLjU4NSwwLDcuMDQ1LTAuNTM0LDEwLjMxLTEuNTE3QzM0MC40ODcsNTA2LjA0NywzMjkuNzc1LDQ5Mi40MTEsMzI5Ljc3NSw0NzYuMjY2eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./img/pain.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NENDRkY7IiBkPSJNMzAwLjUyMiw2Ni43ODNjMCwyNS43MTEtMTkuNDc4LDQ2Ljk3LTQ0LjUyMiw0OS43NTNjLTEuNzgsMC4yMjMtMy42NzQsMC4zMzQtNS41NjUsMC4zMzQNCgkJYy0yNy42MDMsMC01MC4wODctMjIuNDgzLTUwLjA4Ny01MC4wODdzMjIuNDgzLTUwLjA4Nyw1MC4wODctNTAuMDg3YzEuODkxLDAsMy43ODUsMC4xMTEsNS41NjUsMC4zMzQNCgkJQzI4MS4wNDMsMTkuODEyLDMwMC41MjIsNDEuMDcxLDMwMC41MjIsNjYuNzgzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NENDRkY7IiBkPSJNNDA2LjI2MSwyODkuMzkxaC02Ni43ODNjMC0yOC4yNzEtMTMuNTc5LTY3LjMzOS0yNi4wNDYtMTAwLjg0MmwtMTcuOTE5LDI5LjE2Mg0KCQljLTMuMzM5LDUuNDU0LTguMDE0LDkuNzk1LTEzLjQ2OCwxMi40NjZMMjU2LDI0My4ybC00MC43MzYsMjAuMzY5Yy0xNi4wMjksOC4xMjUtMzYuMjg1LDIuMDAzLTQ0Ljc0NC0xNC45MTUNCgkJYy04LjM0OC0xNi41ODQtMS40NDgtMzYuNjE5LDE0LjkxMy00NC43NDRsNTYuODc4LTI4LjQ5NGM1LjU2NS0xMS4xMywxMC4wMTYtMjAuMjU3LDEzLjY5LTI3LjYwMw0KCQljMTUuNDcxLTMxLjk0NCwxNS45MTUtMzQuMDU5LDIzLjU5Ny00MC4xODFjMTEuNDY0LTkuMzUsMjguMzgyLTEwLjI0LDQwLjk2MS0wLjc3OQ0KCQlDMzcwLjc1NiwxNDQuNDczLDQwNi4yNjEsMjI2LjcyNyw0MDYuMjYxLDI4OS4zOTF6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzRDQUQ5OyIgZD0iTTUwLjA4Nyw0OTUuMzA0Yy05LjIyMywwLTE2LjY5Ni03LjQ3My0xNi42OTYtMTYuNjk2di03Ny45MTNjMC05LjIyMyw3LjQ3My0xNi42OTYsMTYuNjk2LTE2LjY5Ng0KCXMxNi42OTYsNy40NzMsMTYuNjk2LDE2LjY5NnY3Ny45MTNDNjYuNzgzLDQ4Ny44MzEsNTkuMzEsNDk1LjMwNCw1MC4wODcsNDk1LjMwNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCOEJGQ0M7IiBkPSJNNDYxLjkxMyw0OTUuMzA0Yy05LjIyMywwLTE2LjY5Ni03LjQ3My0xNi42OTYtMTYuNjk2di03Ny45MTNjMC05LjIyMyw3LjQ3My0xNi42OTYsMTYuNjk2LTE2LjY5Ng0KCXMxNi42OTYsNy40NzMsMTYuNjk2LDE2LjY5NnY3Ny45MTNDNDc4LjYwOSw0ODcuODMxLDQ3MS4xMzYsNDk1LjMwNCw0NjEuOTEzLDQ5NS4zMDR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNEJCOEU2OyIgZD0iTTM3OC40MzUsNDk1LjMwNGMtMTguNDEzLDAtMzMuMzkxLTE0Ljk3OC0zMy4zOTEtMzMuMzkxdi03Mi4zNDhoNjYuNzgzdjcyLjM0OA0KCUM0MTEuODI2LDQ4MC4zMjYsMzk2Ljg0OCw0OTUuMzA0LDM3OC40MzUsNDk1LjMwNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGOUJDMzU7IiBkPSJNNjEuMjE3LDM1MC42MDljLTI3LjYxOSwwLTUwLjA4Ny0yMi40NjgtNTAuMDg3LTUwLjA4N3MyMi40NjgtNTAuMDg3LDUwLjA4Ny01MC4wODcNCglzNTAuMDg3LDIyLjQ2OCw1MC4wODcsNTAuMDg3Uzg4LjgzNiwzNTAuNjA5LDYxLjIxNywzNTAuNjA5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVDNUY2NjsiIGQ9Ik01MTIsMzg0YzAsMTguMzY1LTE1LjAyNiwzMy4zOTEtMzMuMzkxLDMzLjM5MUgzMy4zOTFDMTUuMDI2LDQxNy4zOTEsMCw0MDIuMzY1LDAsMzg0DQoJczE1LjAyNi0zMy4zOTEsMzMuMzkxLTMzLjM5MWg0NDUuMjE3QzQ5Ni45NzQsMzUwLjYwOSw1MTIsMzY1LjYzNSw1MTIsMzg0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y5QkMzNTsiIGQ9Ik01MTIsMzE3LjIxN2MwLDE4LjM2NS0xNS4wMjYsMzMuMzkxLTMzLjM5MSwzMy4zOTFIMTc4LjA4N3Y0NC41MjJjMCw1LjEyLTEuMjI0LDEwLjM1MS0zLjU2MywxNC45MTUNCglsLTMzLjM5MSw2Ni43ODNjLTguMzQ4LDE2LjkxOC0yOC42MDQsMjMuMDQtNDQuNzQ0LDE0LjkxNWMtMTYuNDczLTguMjM3LTIzLjE0OS0yOC4yNzEtMTQuOTEzLTQ0Ljc0NGwyOS44MjgtNTkuNzd2LTcwLjIzMw0KCWMwLjExMS0xOC4zNjUsMTUuMDI2LTMzLjE2OSwzMy4zOTEtMzMuMTY5aDMzMy45MTNDNDk2Ljk3NCwyODMuODI2LDUxMiwyOTguODUyLDUxMiwzMTcuMjE3eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzRCQjhFNjsiIGQ9Ik0zMDAuNTIyLDY2Ljc4M2MwLDI1LjcxMS0xOS40NzgsNDYuOTctNDQuNTIyLDQ5Ljc1M1YxNy4wMw0KCQlDMjgxLjA0MywxOS44MTIsMzAwLjUyMiw0MS4wNzEsMzAwLjUyMiw2Ni43ODN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzRCQjhFNjsiIGQ9Ik00MDYuMjYxLDI4OS4zOTFoLTY2Ljc4M2MwLTI4LjI3MS0xMy41NzktNjcuMzM5LTI2LjA0Ni0xMDAuODQybC0xNy45MTksMjkuMTYyDQoJCWMtMy4zMzksNS40NTQtOC4wMTQsOS43OTUtMTMuNDY4LDEyLjQ2NkwyNTYsMjQzLjJ2LTk1LjM4OGMxNS40NzEtMzEuOTQ0LDE1LjkxNS0zNC4wNTksMjMuNTk3LTQwLjE4MQ0KCQljMTEuNDY0LTkuMzUsMjguMzgyLTEwLjI0LDQwLjk2MS0wLjc3OUMzNzAuNzU2LDE0NC40NzMsNDA2LjI2MSwyMjYuNzI3LDQwNi4yNjEsMjg5LjM5MXoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM1MzU2NUM7IiBkPSJNNTEyLDM4NGMwLDE4LjM2NS0xNS4wMjYsMzMuMzkxLTMzLjM5MSwzMy4zOTFIMjU2di02Ni43ODNoMjIyLjYwOQ0KCUM0OTYuOTc0LDM1MC42MDksNTEyLDM2NS42MzUsNTEyLDM4NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMzlFMzE7IiBkPSJNNTEyLDMxNy4yMTdjMCwxOC4zNjUtMTUuMDI2LDMzLjM5MS0zMy4zOTEsMzMuMzkxSDI1NnYtNjYuNzgzaDIyMi42MDkNCglDNDk2Ljk3NCwyODMuODI2LDUxMiwyOTguODUyLDUxMiwzMTcuMjE3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./img/pain1.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pain1-c524ef0a2910bce89ed6b51c95f88d2b.png";

/***/ }),

/***/ "./img/pain2.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pain2-9c31696d52199c2fca04c3436752103a.jpg";

/***/ }),

/***/ "./img/pain3.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pain3-e2369f9c5d641df9a80ffc5b7131292d.png";

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_IntroIndex__ = __webpack_require__("./components/IntroIndex.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_featurecard__ = __webpack_require__("./components/featurecard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_featurecardpain__ = __webpack_require__("./components/featurecardpain.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_featurecardbrain__ = __webpack_require__("./components/featurecardbrain.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_pain1_png__ = __webpack_require__("./img/pain1.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__img_pain1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__img_pain1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_pain2_jpg__ = __webpack_require__("./img/pain2.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__img_pain2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__img_pain2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__img_pain3_png__ = __webpack_require__("./img/pain3.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__img_pain3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__img_pain3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_next_head__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/pages/index.jsx";
















var styles = function styles(theme) {
  return {
    contentwrapper: {
      borderRadius: 12.5,
      marginTop: -160,
      marginLeft: 25,
      marginRight: 25
    },
    title: {
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
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
      marginTop: 20,
      marginBottom: 10,
      color: '#3C4858',
      minHeight: 32,
      fontWeight: 400,
      fontSize: '2rem',
      fontFamily: 'Helvetica',
      textDecoration: 'none',
      paddingLeft: '8%',
      paddingRight: '8%'
    },
    bodytext: {
      fontFamily: 'Helvetica',
      color: '#999999',
      overflow: 'hidden',
      fontSize: 14,
      paddingLeft: '5%',
      paddingRight: '5%'
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

function Index(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "Find Chiropractors Near You | Chiropractorhunter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "Find Chiropractors Near You | Chiropractorhunter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "https://chiropractohunter.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: "Looking for the best chiropractors near you? You're at the right place!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "canonical",
    href: "https://chiropractorhunter.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_IntroIndex__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
    className: classes.contentwrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "Why To Choose a Chiropractor"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "You should go for chiropractic care if you love the idea of achieving health naturally, without the use of drugs and surgery. Most people mock chiropractors saying they are not \"real doctors\". However, chiropractors, like medical doctors, undergo an uncompromising education in the medical sciences. In areas like anatomy, physiology, rehabilitation, nutrition, and public health, they receive a more intensive, hands-on education than their MD counterparts. A typical applicant at a chiropractic college has already acquired around 4 years of pre-medical education including courses in biology, chemistry, physics, and psychology. After joining a chiropractic college, the requirements become even more demanding. 4-5 years of professional study are the standard and due to the hands-on nature of chiropractic, a significant portion of time is spent in clinical training."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.feature,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_featurecard__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.feature,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_featurecardpain__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.feature,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_featurecardbrain__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.feature,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_12__img_pain2_jpg___default.a,
    height: "256",
    width: "256",
    alt: "Backache",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, "What causes back pain?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, "The spine is made up of vertebrae extending from the skull and ending at the sacrum. Cervical discs are present in between to absorb shocks. Inflammation or injury in the spinal joints, muscles, discs or nerves can cause back pain or stiffness. Examples of common conditions causing back pain are herniated or slipped discs, bulging discs, degenerated disc disease, a pinched nerve, or injuries/strain."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "Generally, drugs taken to cure back pain are drugs like Tylenol (acetaminophen) or Advil (Ibuprofen). However, these come with side effects like nausea, stomach pain, itching, rash, dark urine, etc.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.feature,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_11__img_pain1_png___default.a,
    height: "256",
    width: "256",
    alt: "Backache treatment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "Treating back pain"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, "Chiropractic usually focuses on spinal adjustment and manipulation to reduce pain and helps stimulate the body\u2019s self-healing abilities. Realignment of the spine reduces the pressure on the central nervous system.  Along with reducing pain, chiropractic treatment will also help to increase the range of motion of the affected area and make everyday tasks smooth and pain-free."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, "Chiropractic might appear as pseudoscience to many, however, there is sound research-backed support for chiropractic treatment for lower back pain. Many research papers recommend chiropractic adjustments to be included for a pain-free lifestyle.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.feature,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_13__img_pain3_png___default.a,
    height: "256",
    width: "256",
    alt: "Headache treatment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, "Treating headaches"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }, "The general and intuitive approach for dealing with headaches is to either lie down for a while or pop a pill in hope of getting rid of it in a few hours, however, prevention is always better than cure. Spinal manipulation, a technique used by chiropractors is an effective treatment for headaches."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Typography___default.a, {
    component: "p",
    align: "justify",
    className: classes.bodytext2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, "Moreover, your chiropractor can also make an adjustment schedule and suggest changes in your diet combined with the use of hot and cold packs to keep headaches at bay."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }))))));
}

Index.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Index));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


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
//# sourceMappingURL=index.js.map