module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/Footer.jsx";







var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/find-a-chiropractor",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Find a chiropractor")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Contact Us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footercopy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.navtext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\xA9\xA0Kapil Shrotriya | www.chiropractorhunter.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footercopy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.navtext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Icons provided by various authors from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    rel: "nofollow",
    href: "https://www.flaticon.com",
    style: {
      textDecoration: 'None'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "www.flaticon.com")))))));
}

Footer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Footer));

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sm_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sm_buttons */ "./components/sm_buttons.jsx");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drawer */ "./components/drawer.jsx");
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
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    position: "fixed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sm_buttons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })))))));
}

ChiroAppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ChiroAppBar));

/***/ }),

/***/ "./components/IntroLiverpool.jsx":
/*!***************************************!*\
  !*** ./components/IntroLiverpool.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_chiroicon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/chiroicon.png */ "./img/chiroicon.png");
/* harmony import */ var _img_chiroicon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_chiroicon_png__WEBPACK_IMPORTED_MODULE_8__);
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Chiropractor Liverpool, England"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    itemscope: true,
    itemtype: "http://schema.org/MedicalBusiness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Chiropractor in Liverpool, England",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://chiropractohunter.com/chiropractor-liverpool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Looking for the best chiropractor in liverpool? We have the best chiropractor you can find in Liverpool, England. Our selected chiropractic practitioners are highly qualified and trained to deal with your ailments and will help you feel better in no time!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "chiropractors,chiropractic,pain,clinic,chiropractors,liverpool,england",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: "https://chiropractorhunter.com/chiropractor-liverpool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: _img_chiroicon_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    type: "image/png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../img/logo.png */ "./img/logo.png"),
    alt: "Looking for the best chiropractors in Liverpool? We have selected our top chiropractor for the job.",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.chiroheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Liverpool Chiropractor", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.chirop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "If you're looking for the best chiropractics in Liverpool, England then you're at the right place. We have carefully chosen the best quality chiropractics for you.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.chirop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "We have carefully handpicked the best quality chiropractic to relieve you from pain."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))))));
}

IntroLiverpool.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(IntroLiverpool));

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1784044730" + " " + (classes.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1784044730",
    css: "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXBpbHNocm90cml5YS9jaGlyb25leHRqcy9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JzQixBQUdjLFNBQ1QiLCJmaWxlIjoiL1VzZXJzL2thcGlsc2hyb3RyaXlhL2NoaXJvbmV4dGpzL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpe1xuXHRjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xuXG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHRcdGJvZHl7IFxuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdCAgXHQ8R3JpZCBjb250YWluZXI+XG5cdFx0ICBcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxuXHRcdCAgXHRcdFx0PEhlYWRlciAvPlxuXHRcdCAgXHRcdDwvR3JpZD5cblx0XHQgIFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XG5cdFx0ICBcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0ICBcdFx0PC9HcmlkPlxuXHRcdCAgXHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cblx0XHQgIFx0XHRcdDxGb290ZXIgLz5cblx0XHQgIFx0XHQ8L0dyaWQ+XG5cdFx0ICBcdDwvR3JpZD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTGF5b3V0KTsiXX0= */\n/*@ sourceURL=/Users/kapilshrotriya/chironextjs/components/Layout.jsx */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
}

Layout.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles)(Layout));

/***/ }),

/***/ "./components/drawer.jsx":
/*!*******************************!*\
  !*** ./components/drawer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "@material-ui/core/SwipeableDrawer");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tileData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tileData */ "./components/tileData.jsx");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/drawer.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      top: false,
      left: false,
      bottom: false,
      right: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleDrawer", function (side, open) {
      return function () {
        _this.setState(_defineProperty({}, side, open));
      };
    });

    return _this;
  }

  _createClass(AppDrawer, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var sideList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, _tileData__WEBPACK_IMPORTED_MODULE_6__["mailFolderListItems"]));
      var fullList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.fullList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, _tileData__WEBPACK_IMPORTED_MODULE_6__["mailFolderListItems"]));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        onClick: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        open: this.state.left,
        onClose: this.toggleDrawer('left', false),
        onOpen: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, sideList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        anchor: "top",
        open: this.state.top,
        onClose: this.toggleDrawer('top', false),
        onOpen: this.toggleDrawer('top', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('top', false),
        onKeyDown: this.toggleDrawer('top', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, fullList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        anchor: "bottom",
        open: this.state.bottom,
        onClose: this.toggleDrawer('bottom', false),
        onOpen: this.toggleDrawer('bottom', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('bottom', false),
        onKeyDown: this.toggleDrawer('bottom', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, fullList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
        anchor: "right",
        open: this.state.right,
        onClose: this.toggleDrawer('right', false),
        onOpen: this.toggleDrawer('right', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('right', false),
        onKeyDown: this.toggleDrawer('right', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, sideList)));
    }
  }]);

  return AppDrawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AppDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(AppDrawer));

/***/ }),

/***/ "./components/sm_buttons.jsx":
/*!***********************************!*\
  !*** ./components/sm_buttons.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_lib_fa_facebook_square__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lib/fa/facebook-square */ "react-icons/lib/fa/facebook-square");
/* harmony import */ var react_icons_lib_fa_facebook_square__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_facebook_square__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_lib_ti_social_instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lib/ti/social-instagram */ "react-icons/lib/ti/social-instagram");
/* harmony import */ var react_icons_lib_ti_social_instagram__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_ti_social_instagram__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_lib_fa_twitter_square__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/lib/fa/twitter-square */ "react-icons/lib/fa/twitter-square");
/* harmony import */ var react_icons_lib_fa_twitter_square__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_twitter_square__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/sm_buttons.jsx";







var styles = {
  root: {
    flexGrow: 1
  }
};

function SMButtons(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/Chiropractorhunter-2075898506059830/?ref=aymt_homepage_panel",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_facebook_square__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "24",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/chiropractorhunter1/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_ti_social_instagram__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: "24",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/kapil_shrotriya",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_twitter_square__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: "24",
    color: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))));
}

SMButtons.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SMButtons));

/***/ }),

/***/ "./components/tileData.jsx":
/*!*********************************!*\
  !*** ./components/tileData.jsx ***!
  \*********************************/
/*! exports provided: mailFolderListItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mailFolderListItems", function() { return mailFolderListItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lib/fa/search */ "react-icons/lib/fa/search");
/* harmony import */ var react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_lib_fa_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/lib/fa/home */ "react-icons/lib/fa/home");
/* harmony import */ var react_icons_lib_fa_home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_home__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_lib_fa_book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/lib/fa/book */ "react-icons/lib/fa/book");
/* harmony import */ var react_icons_lib_fa_book__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_book__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_lib_fa_comments_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/lib/fa/comments-o */ "react-icons/lib/fa/comments-o");
/* harmony import */ var react_icons_lib_fa_comments_o__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa_comments_o__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/kapilshrotriya/chironextjs/components/tileData.jsx";









var mailFolderListItems = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_home__WEBPACK_IMPORTED_MODULE_6___default.a, {
  size: "24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
  primary: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_book__WEBPACK_IMPORTED_MODULE_7___default.a, {
  size: "24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
  primary: "Blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
  button: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_lib_fa_comments_o__WEBPACK_IMPORTED_MODULE_8___default.a, {
  size: "24",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
  primary: "Contact Us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})));

/***/ }),

/***/ "./img/chiroicon.png":
/*!***************************!*\
  !*** ./img/chiroicon.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./img/clipboard.svg":
/*!***************************!*\
  !*** ./img/clipboard.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY4LjI5MyA0NjguMjkzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjguMjkzIDQ2OC4yOTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyRDkzQkE7IiBkPSJNNzkuOTIyLDQ1NS44MDVWNjEuODE1YzAtNi44NjgsNS42Mi0xMi40ODgsMTIuNDg4LTEyLjQ4OGgyODMuNDczDQoJYzYuODY4LDAsMTIuNDg4LDUuNjIsMTIuNDg4LDEyLjQ4OHYzOTMuOTljMCw2Ljg2OC01LjYyLDEyLjQ4OC0xMi40ODgsMTIuNDg4SDkyLjQxQzg1LjU0MSw0NjguMjkzLDc5LjkyMiw0NjIuNjczLDc5LjkyMiw0NTUuODA1eg0KCSIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VCRjBGMzsiIHBvaW50cz0iMzY1Ljg5Myw3MS44MDUgMzY1Ljg5Myw0NDUuODE1IDE1OS44NDQsNDQ1LjgxNSAxMDIuNCwzODcuNzQ2IDEwMi40LDcxLjgwNSAiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFMUU2RTk7IiBwb2ludHM9IjE1OS44NDQsMzg3Ljc0NiAxNTkuODQ0LDQ0NS44MTUgMTAyLjQsMzg3Ljc0NiAiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNTYzNTM7IiBkPSJNMzEyLjE5NSw4OS4yODhIMTYyLjM0MWMtMy43NDYsMC02LjI0NC0zLjc0Ni01LjYyLTYuODY4bDExLjg2My00My4wODMNCgkJYzAuNjI0LTIuNDk4LDMuMTIyLTQuMzcxLDUuNjItNC4zNzFoMTI2Ljc1MWMyLjQ5OCwwLDQuOTk1LDEuODczLDUuNjIsNC4zNzFsMTEuODYzLDQzLjA4Mw0KCQlDMzE4LjQzOSw4Ni4xNjYsMzE1Ljk0MSw4OS4yODgsMzEyLjE5NSw4OS4yODh6Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojRTU2MzUzOyIgY3g9IjIzNi42NDQiIGN5PSIzNC45NjYiIHI9IjM0Ljk2NiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VCRjBGMzsiIGQ9Ik0yMzYuNjQ0LDU2LjE5NWMtMTEuODYzLDAtMjEuMjI5LTkuMzY2LTIxLjIyOS0yMS4yMjlzOS4zNjYtMjEuMjI5LDIxLjIyOS0yMS4yMjkNCgljMTEuODYzLDAsMjEuMjI5LDkuMzY2LDIxLjIyOSwyMS4yMjlTMjQ4LjUwNyw1Ni4xOTUsMjM2LjY0NCw1Ni4xOTV6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiM0NEM0QTE7IiBjeD0iMjM0LjE0NiIgY3k9IjIzOC41MTciIHI9Ijg3LjQxNSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VCRjBGMzsiIGQ9Ik0yMTIuMjkzLDI3OS43MjdjLTIuNDk4LDAtNC45OTUtMC42MjQtNy40OTMtMi40OThsLTIzLjcyNy0yMC42MDUNCgljLTQuMzcxLTQuMzcxLTQuOTk1LTExLjIzOS0xLjI0OS0xNS42MWM0LjM3MS00LjM3MSwxMS4yMzktNC45OTUsMTUuNjEtMS4yNDlsMTUuNjEsMTMuNzM3bDU5LjMxNy01My4wNzMNCgljNC4zNzEtNC4zNzEsMTEuODYzLTMuNzQ2LDE1LjYxLDAuNjI0YzQuMzcxLDQuMzcxLDMuNzQ2LDExLjg2My0wLjYyNCwxNS42MWwtNjYuMTg1LDU5Ljk0MQ0KCUMyMTcuOTEyLDI3OS4xMDIsMjE1LjQxNSwyNzkuNzI3LDIxMi4yOTMsMjc5LjcyN3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./img/diet.svg":
/*!**********************!*\
  !*** ./img/diet.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/diet-0a16744a57802b2990fb8ecac1bbc46a.svg";

/***/ }),

/***/ "./img/doctor.svg":
/*!************************!*\
  !*** ./img/doctor.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDIxLjE0MSA0MjEuMTQxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjEuMTQxIDQyMS4xNDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZEN0EzOyIgZD0iTTEzOC4yNzcsMjc0LjU2NmMxNC43MTYtOS40NzUsMTMuMDctMzcuNjc1LDEzLjA3LTQ0LjI1NWgxMTguNDQ2YzAsNi41OC0xLjgyNSwzNC43OCwxMi44OSw0NC4yNTUNCgkJCWwtNzIuMTEzLDgwLjc3MUwxMzguMjc3LDI3NC41NjZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkRDODhFOyIgZD0iTTI1Ni42MzIsMzAyLjY5NWwyNi4wNTEtMjguMTI5Yy0xNC43MTYtOS40NzQtMTIuODktMzcuNjc1LTEyLjg5LTQ0LjI1NUgxNTEuMzQ3DQoJCQlDMTU5Ljg0NSwyNTQuNzQ0LDIxNi4wNTQsMjk2LjY2MywyNTYuNjMyLDMwMi42OTV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMUIyOyIgZD0iTTMwMi42OTUsMTQ0Ljc2N2MwLDUyLjY5Ni0zMC4zNDMsMTE4LjQ0Ni05Mi4xMjQsMTE4LjQ0NnMtOTIuMTI0LTY1Ljc1LTkyLjEyNC0xMTguNDQ2DQoJCQlzNDEuMjQ2LTcyLjM4NCw5Mi4xMjQtNzIuMzg0UzMwMi42OTUsOTIuMDcxLDMwMi42OTUsMTQ0Ljc2N3oiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkUxQjI7IiBkPSJNMTIxLjUyMSwxNTYuMjgzYy05Ljg2NC0yLjQ2OC0xNi4zMjYsMi44MDUtMTYuMzI2LDEzLjE2MWMwLDEzLjcwOSwxMy4yNjUsNDcuMjk2LDI3LjIxLDI2LjMyMQ0KCQkJQzE0Ni4zNTEsMTc0Ljc5LDEyMS41MjEsMTU2LjI4MywxMjEuNTIxLDE1Ni4yODN6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMUIyOyIgZD0iTTI5Ny45NDQsMTU2LjI4M2MxMC43NjctMi40NjgsMTcuODIxLDIuODA1LDE3LjgyMSwxMy4xNjFjMCwxMy43MDktMTQuNDc5LDQ3LjI5Ni0yOS43MDEsMjYuMzIxDQoJCQlTMjk3Ljk0NCwxNTYuMjgzLDI5Ny45NDQsMTU2LjI4M3oiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiM3RTU0NDk7IiBkPSJNMTM4LjE4NywxMTguNDQ2Yy0yLjc0Miw3Ljg4Ny02LjU4LDUyLjY0My02LjU4LDUyLjY0M2wtMTMuMTYxLTcuMjgxbC0zLjcwMS00OC4yMzQNCgkJCUwxMzguMTg3LDExOC40NDZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojN0U1NDQ5OyIgZD0iTTI4Mi45NTQsMTE4LjQ0NmMyLjc0Miw3Ljg4Nyw2LjU4LDUyLjY0Myw2LjU4LDUyLjY0M2wxMy4xNjEtNy4yODFsMy43MDEtNDguMjM0TDI4Mi45NTQsMTE4LjQ0NnoNCgkJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzUyNzk5MjsiIGQ9Ik0zNjEuOTE4LDQyMS4xNDFjMTAuOTAzLDAsMTkuNzQxLTguODM4LDE5Ljc0MS0xOS43NDF2LTUwLjMwMw0KCQkJYzAtMjguOTU0LTIyLjU2Mi01OS44NjQtNTAuMTM4LTY4LjY4N2wtNDEuMTY4LTEzLjE3M2MtMjIuMTQ5LDE2LjkzNi01My44MDIsNDAuMDM5LTc5Ljc4Miw0MC4wMzlzLTU3LjYzMy0yMy4xMDMtNzkuNzgyLTQwLjAzOQ0KCQkJTDg5LjYyLDI4Mi40MWMtMjcuNTc2LDguODIzLTUwLjEzOCwzOS43MzMtNTAuMTM4LDY4LjY4N1Y0MDEuNGMwLDEwLjkwMyw4LjgzOCwxOS43NDEsMTkuNzQxLDE5Ljc0MUgzNjEuOTE4eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzU0NTQ2NTsiIGQ9Ik0yMjMuNzMxLDMyOS4wMTZjMCwzLjYxOS0yLjk2MSw2LjU4LTYuNTgsNi41OEgyMDMuOTljLTMuNjE5LDAtNi41OC0yLjk2MS02LjU4LTYuNTh2LTEzLjE2MQ0KCQkJYzAtMy42MTksMi45NjEtNi41OCw2LjU4LTYuNThoMTMuMTYxYzMuNjE5LDAsNi41OCwyLjk2MSw2LjU4LDYuNThWMzI5LjAxNnoiLz4NCgk8L2c+DQoJPGc+DQoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0QwRDdEQzsiIGN4PSIyMTAuNTciIGN5PSIzNjguNDk4IiByPSI2LjU4Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDc1RjdGOyIgZD0iTTIxMC41NywzMDkuMjc1bC0yNy40NTYsMjcuNDU2Yy0yLjg1OSwyLjg1OS03LjU5NiwyLjQ4Ny05Ljk3NS0wLjc4M2wtNDguMTEzLTY2LjE1Ng0KCQkJbDE1LjMyNi0xNS4zMjZjMi40NzUtMi40NzUsNi40NTQtMi41NzksOS4wNTUtMC4yMzhMMjEwLjU3LDMwOS4yNzV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDc1RjdGOyIgZD0iTTIxMC41NywzMDkuMjc1bDI3LjQ1NiwyNy40NTZjMi44NTksMi44NTksNy41OTYsMi40ODcsOS45NzUtMC43ODNsNDguMTEzLTY2LjE1NmwtMTUuMzI2LTE1LjMyNg0KCQkJYy0yLjQ3NS0yLjQ3NS02LjQ1NC0yLjU3OS05LjA1NS0wLjIzOEwyMTAuNTcsMzA5LjI3NXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM1NDU0NjU7IiBwb2ludHM9IjIxOS42MTEsMzMxLjg5NSAyMTAuNTcsMzM1LjU5NiAyMDEuNTMsMzMxLjg5NSAxOTcuNDEsNDIxLjE0MSAyMTAuNTcsNDIxLjE0MSANCgkJCTIyMy43MzEsNDIxLjE0MSAJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0U0RUJGMDsiIGQ9Ik0zNjQuMjM1LDQyMC45MDdjOS43OTctMS4xNiwxNy40MjMtOS4zOTksMTcuNDIzLTE5LjUwN3YtNTAuMzAzDQoJCQljMC0yOC45NTQtMjIuNTYyLTU5Ljg2NC01MC4xMzgtNjguNjg3bC0zNS44NzktMTEuNDgxaDBsLTUyLjE2OSwxNDkuOTc4SDM2NC4yMzV6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRTRFQkYwOyIgZD0iTTEyNS40OTksMjcwLjkyOUwxMjUuNDk5LDI3MC45MjlMODkuNjIsMjgyLjQxYy0yNy41NzYsOC44MjMtNTAuMTM4LDM5LjczMy01MC4xMzgsNjguNjg3VjQwMS40DQoJCQljMCwxMC4xMDksNy42MjcsMTguMzQ3LDE3LjQyMywxOS41MDdoMTIwLjc2NEwxMjUuNDk5LDI3MC45Mjl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDBEN0RDOyIgZD0iTTEyNS4wMjYsMjY5Ljc5M2wtMjcuOTg5LDMzLjgzN2MtMi42MDUsMi45OTMtMS45ODgsNy41OTQsMS4zMTQsOS43OTVsMTMuNTE1LDkuMDFsLTE1LjYzMywxNS42MzMNCgkJCWMtMi4zNDcsMi4zNDctMi41NzksNi4wNzMtMC41NDEsOC42OTNsNDIuNDk2LDc0LjM3OWwzOS40ODItMC4yMzRMMTI1LjAyNiwyNjkuNzkzeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0QwRDdEQzsiIGQ9Ik0yOTYuMTE0LDI2OS43OTNsMjcuOTg5LDMzLjgzN2MyLjYwNSwyLjk5MywxLjk4OCw3LjU5NC0xLjMxNCw5Ljc5NWwtMTMuNTE1LDkuMDFsMTUuNjMzLDE1LjYzMw0KCQkJYzIuMzQ3LDIuMzQ3LDIuNTc5LDYuMDczLDAuNTQxLDguNjkzbC00Mi40OTYsNzQuMzc5bC0zOS40ODItMC4yMzRMMjk2LjExNCwyNjkuNzkzeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0U0RUJGMDsiIGQ9Ik0zMDkuMjc1LDExOC40NDZjLTY1LjgwMywwLTEzMS42MDYsMC0xOTcuNDEsMGMwLTM1LjA5NSwwLTU5LjY1NCwwLTk0Ljc0OQ0KCQkJYzYyLjAxLTMxLjU5NiwxMzUuMzk5LTMxLjU5NiwxOTcuNDEsMEMzMDkuMjc1LDU4Ljc5MiwzMDkuMjc1LDgzLjM1MSwzMDkuMjc1LDExOC40NDZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./img/exercise.svg":
/*!**************************!*\
  !*** ./img/exercise.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5NyA1MTEuOTk3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk3IDUxMS45OTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzM0Y7IiBkPSJNMTUzLjQ2Nyw1OS41MDNjLTAuMDU0LDIyLjM4OCwxOC4wNDQsNDAuNTc3LDQwLjQyMyw0MC42NGMxNS40MjUsMC4wMzYsMjkuNTMyLTguNjc5LDM2LjQwNC0yMi40OTYNCgljLTIwLjQxOS0yMC4yOTMtNDguMDM2LTMxLjY4MS03Ni44MjgtMzEuNjlWNTkuNTAzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzM4Mzg1NjsiIGQ9Ik0xOTQuMTA3LDE4Ljg2M2gtNDAuNjR2MjcuMDkzYzI4Ljc5MSwwLjAwOSw1Ni40MDgsMTEuMzk3LDc2LjgyOCwzMS42OQ0KCWMyLjg5LTUuNjE3LDQuNDE2LTExLjgzMSw0LjQ1Mi0xOC4xNDNDMjM0Ljc0NywzNy4wNTEsMjE2LjU1OSwxOC44NjMsMTk0LjEwNywxOC44NjN6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojOTFDRUNFOyIgcG9pbnRzPSIzMDYuOTk2LDE0NS4yOTggNDI3LjE3Myw1My4zOTggMzk3LjU3OCwxNS4zNDEgMjc5LjkwMyw5Mi42ODMgMTg5LjU5MiwxNDMuNzI3IA0KCTU2LjM4MywyMjIuMDYyIDc1LjMzOSwyNTkuOTc1IDE4OS41OTIsMTk5LjQ4NSAyMjUuNzE2LDI4OS43OTYgMzM0LjA4OSwyODAuNzY1ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDMzRjsiIGQ9Ik00NDYuNjE3LDkuMzUzYy03LjQxNS05Ljg4LTIxLjIzMi0xMi4yOTEtMzEuNTU1LTUuNTA5bC0xNy40ODQsMTEuNDk3bDI5LjU5NSwzOC4wNTdsMTQuOTQ2LTExLjQyNA0KCUM0NTIuMzE2LDM0LjE3LDQ1NC4zMiwxOS42MTIsNDQ2LjYxNyw5LjM1M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFQTM4MzY7IiBkPSJNNDQzLjk3MSw0NzQuOTMzbC0yOC42MDEtODUuNzk1bC04MS4yOC0xMDguMzczbC0xMDguMzczLDkuMDMxbC03Mi4yNDksMTA4LjM3M2wtMjYuMzI2LDc4Ljk2OA0KCWMtNC42MjQsMTMuODgxLDIuODksMjguODgxLDE2Ljc3MSwzMy40OTZjMTMuODgxLDQuNjI0LDI4Ljg4MS0yLjg5LDMzLjQ5Ni0xNi43NzFjMC4xNTQtMC40NTIsMC4yODktMC45MTIsMC40MTUtMS4zODINCglsMjAuNzk5LTc2LjI1OWw4MS4yOC04MS4yOGw4MS4yOCw3Mi4yNDlsMzUuNTkyLDg1LjQyNWM1LjMwMSwxMi44NzgsMjAuMDQsMTkuMDEsMzIuOTE4LDEzLjcwOQ0KCUM0NDEuOTkzLDUwMS4yNjgsNDQ4LjIzMyw0ODcuNTIzLDQ0My45NzEsNDc0LjkzM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQzM0Y7IiBkPSJNMzQuNjE4LDIzNC44NjljLTkuODQ0LDUuNzM1LTEzLjE2NywxOC4zNjktNy40MjQsMjguMjEzYzUuNTksOS41ODIsMTcuNzQ2LDEzLjAzMiwyNy41MjcsNy44MDMNCglsMjAuNjE4LTEwLjg5MmwtMTguOTY1LTM3LjkzMUwzNC42MTgsMjM0Ljg2OXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzODM4NTY7IiBkPSJNNDAzLjk4MSwyMzUuNjA5Yy00LjExOCwwLTcuNzEzLTIuNzkxLTguNzQyLTYuNzgyYy03LjA5OC0yNy41NzItMTcuNTM4LTU0LjE4Ny0zMS4wODUtNzkuMjMNCgkJYy0yLjI0OS00LjQ1Mi0wLjQ3LTkuODgsMy45ODMtMTIuMTM4YzQuMjcyLTIuMTU4LDkuNDkyLTAuNjE0LDExLjg5NCwzLjU0YzE0LjI1MSwyNi4zNDQsMjUuMjMzLDU0LjMyMiwzMi43MDIsODMuMzMNCgkJYzEuMjM3LDQuODMyLTEuNjcxLDkuNzQ1LTYuNDkzLDEwLjk5MUM0MDUuNTA3LDIzNS41MSw0MDQuNzQ5LDIzNS42MDksNDAzLjk4MSwyMzUuNjA5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzODM4NTY7IiBkPSJNNDEyLjU2MSwyODAuNzY1Yy00LjU1Mi0wLjAwOS04LjM5LTMuNDA1LTguOTUtNy45MmMtMC4zNjEtMi45NDQtMC43NjgtNS44NzktMS4yMS04LjgwNQ0KCQljLTAuNzUtNC45MzEsMi42NDYtOS41MzcsNy41NzctMTAuMjg2YzQuOTMxLTAuNzUsOS41MzcsMi42NDYsMTAuMjg2LDcuNTc3YzAuNDYxLDMuMDcxLDAuODg1LDYuMTU5LDEuMjczLDkuMjU3DQoJCWMwLjYxNCw0Ljk0OS0yLjkwOCw5LjQ1Ni03Ljg1NywxMC4wN2wwLDBDNDEzLjMxLDI4MC43MTksNDEyLjk0LDI4MC43NTYsNDEyLjU2MSwyODAuNzY1eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzODM4NTY7IiBkPSJNNDc4LjU4NywzMjUuOTJjLTQuOTg1LDAtOS4wMzEtNC4wNDYtOS4wMzEtOS4wMzFjMC4wMDktMjkuNzEyLTMuMTUyLTU5LjM1Mi05LjQxOS04OC4zOTYNCgkJYy0xLjkzMy04Ljg4Ny00LjE3Mi0xNy44MDktNi42NzQtMjYuNTE1Yy04Ljg1LTMwLjc3OC0yMS4yNDEtNjAuNDE4LTM2LjkzNy04OC4zMzNjLTIuNDQ3LTQuMzUzLTAuOTAzLTkuODUzLDMuNDUtMTIuMw0KCQljNC4zNTMtMi40NDcsOS44NTMtMC45MDMsMTIuMywzLjQ1YzE2LjM4MiwyOS4xMzQsMjkuMzE1LDYwLjA3NSwzOC41NDUsOTIuMTk4YzIuNjEsOS4wODUsNC45NDksMTguMzk2LDYuOTYzLDI3LjY3MQ0KCQljNi41NDgsMzAuMzA4LDkuODQ0LDYxLjIyMiw5LjgzNSw5Mi4yMjZDNDg3LjYxOCwzMjEuODc0LDQ4My41ODEsMzI1LjkyLDQ3OC41ODcsMzI1LjkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMzRTsiIGQ9Ik0yOS4yNDUsMjY1LjgxOGM2LjIyMiw3LjUwNSwxNi44NTIsOS42MjcsMjUuNDc3LDUuMDY2bDIwLjYxOC0xMC44OTJsLTcuMjg4LTE0LjU4NUwyOS4yNDUsMjY1LjgxOHoNCgkiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4M0IyQjc7IiBwb2ludHM9IjY4LjA1MSwyNDUuMzkgNzUuMzM5LDI1OS45NzUgMTg5LjU5MiwxOTkuNDg1IDIyNS43MTYsMjg5Ljc5NiAyOTIuNDExLDI4NC4yNDIgDQoJMTg5LjU5MiwxODEuNDIyICIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q2MjEyMTsiIGQ9Ik0yOTIuNDExLDI4NC4yNDJsLTY2LjY5NSw1LjU1NGwtNzIuMjQ5LDEwOC4zNzNsLTI2LjMyNiw3OC45NjgNCgkJYy00LjU4OCwxMy44NDUsMi45MDgsMjguNzgyLDE2Ljc1MywzMy4zNzljMC44MjIsMC4yNzEsMS42NjIsMC41MDYsMi41MTEsMC42OTVsMjUuMTI1LTExMy4wNDJMMjkyLjQxMSwyODQuMjQyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNENjIxMjE7IiBkPSJNMjc5LjkwMywzMzQuOTUxbDgxLjI4LDcyLjI0OWwzNS41OTIsODUuNDI1YzQuOTIyLDExLjc0OSwxNy44NjQsMTcuOTYzLDMwLjExOSwxNC40NQ0KCQlsLTQ3LjY0OC0xMDguOTA2TDI3OS45MDMsMzM0Ljk1MXoiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM4M0IyQjc7IiBwb2ludHM9IjI5Ny45NjUsMTI3LjIzNiAzMDYuOTk2LDE0NS4yOTggNDI3LjE3Myw1My4zOTggNDE2LjYxNiwzOS44MTUgIi8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZBQzNFOyIgZD0iTTQxNi42MTYsMzkuODE1bDEwLjU1NywxMy41NDdsMTQuOTQ2LTExLjQyNGM4LjEwMS02LjIzMSwxMS4xOTktMTcuMDE1LDcuNjQ5LTI2LjU5Nw0KCQlMNDE2LjYxNiwzOS44MTV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMzRTsiIGQ9Ik0xODUuMDc2LDkxLjExMmMtOC41NjEtMC4wMTgtMTYuODg4LTIuNzU0LTIzLjc4OC03LjgyMWMxMi45ODcsMTguMTE2LDM4LjIxMSwyMi4yOCw1Ni4zMjcsOS4yOTMNCgkJYzUuMzkyLTMuODY1LDkuNzQ1LTguOTk1LDEyLjY4LTE0LjkzN2MtMi45OTgtMi45NDQtNi4xNTktNS43MDgtOS40NzQtOC4yODJDMjEzLjg3Niw4Mi42OTUsMjAwLjExMyw5MS4wNjYsMTg1LjA3Niw5MS4xMTJ6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjAyMDMzOyIgZD0iTTIxNy44OTUsMjYuNjg0YzkuMDQsMTIuMTkyLDEwLjM0MSwyOC40NTcsMy4zNjksNDEuOTMxYy0wLjEzNSwwLjI2Mi0wLjMwNywwLjQ5Ny0wLjQ0MywwLjc1DQoJYzMuMzE0LDIuNTc0LDYuNDc1LDUuMzM3LDkuNDc0LDguMjgyQzIzOS40MzQsNTkuOTM2LDIzNC4xNDIsMzguMjA3LDIxNy44OTUsMjYuNjg0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-455aa31cdb838eb662c2c04f8a4662d6.png";

/***/ }),

/***/ "./img/stairs.svg":
/*!************************!*\
  !*** ./img/stairs.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3QjY0QzsiIGQ9Ik05OC4xMzMsNDk3LjA2N2wtMy4yLTUuMzMzTDkyLjgsNDg5LjZjMCwwLTIuMTMzLTQuMjY3LTQuMjY3LTguNTMzDQoJYy0xLjA2Ny01LjMzMy00LjI2Ny05LjYtNC4yNjctOS42bC0yNS42LTkuNlY0ODBDNTcuNiw0NzguOTMzLDgyLjEzMyw1MTMuMDY3LDk4LjEzMyw0OTcuMDY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YwNTU0MDsiIGQ9Ik01NS40NjcsNDU5LjczM2MwLDAtNC4yNjcsMy4yLTYuNCw5LjZjLTEuMDY3LDIuMTMzLDAsNC4yNjcsMS4wNjcsNS4zMzMNCgljMS4wNjcsMi4xMzMsNC4yNjcsNi40LDcuNDY3LDkuNmM2LjQsNS4zMzMsOS42LDEyLjgsMTEuNzMzLDE2czYuNCw2LjQsMTQuOTMzLDcuNDY3czIzLjQ2NywwLDI1LjYtMi4xMzMNCgljMy4yLTIuMTMzLDEuMDY3LTMuMi0xLjA2Ny01LjMzM2MtMi4xMzMtMS4wNjctMTYtMTAuNjY3LTE2LTEwLjY2N3MzLjIsNC4yNjcsMS4wNjcsNS4zMzNjLTEuMDY3LDIuMTMzLTcuNDY3LDMuMi0xMy44NjcsMA0KCUM3Mi41MzMsNDkxLjczMyw1NS40NjcsNDY2LjEzMyw1NS40NjcsNDU5LjczM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzNDRBNUU7IiBkPSJNMTE2LjI2NywyMzcuODY3YzAsMCwyLjEzMywzNS4yLDAsNTAuMTMzcy05LjYsMjcuNzMzLTEwLjY2Nyw0Mi42NjdzLTE3LjA2Nyw3Ni44LTE4LjEzMyw5MC42NjcNCgljLTIuMTMzLDE0LjkzMy0yLjEzMyw0OS4wNjctMi4xMzMsNDkuMDY3cy0xMS43MzMsNS4zMzMtMTkuMi0xLjA2N2MtNi40LTUuMzMzLTYuNC01LjMzMy02LjQtNS4zMzNsMjEuMzMzLTI0MEwxMTYuMjY3LDIzNy44Njd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZEMTVDOyIgZD0iTTkyLjgsNTAxLjMzM0w4OS42LDQ5NmwtMi4xMzMtMi4xMzNjMCwwLTIuMTMzLTQuMjY3LTMuMi04LjUzM0M4My4yLDQ4MCw4MCw0NzUuNzMzLDgwLDQ3NS43MzMNCglsLTI1LjYtMTAuNjY3bC0xLjA2NywxNy4wNjdDNTMuMzMzLDQ4Mi4xMzMsNzYuOCw1MTcuMzMzLDkyLjgsNTAxLjMzM3oiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGMzcwNUE7IiBkPSJNNTEuMiw0NjIuOTMzYzAsMC00LjI2NywzLjItNi40LDkuNmMtMS4wNjcsMi4xMzMtMS4wNjcsNC4yNjcsMCw1LjMzMw0KCQljMS4wNjcsMi4xMzMsNC4yNjcsNi40LDcuNDY3LDkuNmM2LjQsNi40LDkuNiwxMi44LDEwLjY2NywxNmMyLjEzMywzLjIsNi40LDYuNCwxNC45MzMsNy40NjdjOC41MzMsMS4wNjcsMjMuNDY3LDAsMjUuNi0yLjEzMw0KCQljMy4yLTIuMTMzLDEuMDY3LTMuMi0xLjA2Ny01LjMzM2MtMi4xMzMtMi4xMzMtMTYtMTAuNjY3LTE2LTEwLjY2N3MyLjEzMyw0LjI2NywxLjA2Nyw1LjMzM2MtMS4wNjcsMS4wNjctNy40NjcsMy4yLTEzLjg2NywwDQoJCUM2Ny4yLDQ5NC45MzMsNTEuMiw0NjkuMzMzLDUxLjIsNDYyLjkzM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjM3MDVBOyIgZD0iTTQ0LjgsNDc2LjhjMCwwLDQuMjY3LDkuNiw0LjI2NywxOC4xMzNzMCwxMC42NjcsMCwxMC42NjdoNC4yNjdjMCwwLDAtMTIuOCwyLjEzMy0xNg0KCQljMi4xMzMtMy4yLDIuMTMzLTMuMiwyLjEzMy0zLjJsMCwwTDQ0LjgsNDc2Ljh6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojNDE1QTZCOyIgZD0iTTQ0LjgsMjI5LjMzM2MwLDAtOS42LDMzLjA2NywyLjEzMyw1OC42NjdjMCwwLDQuMjY3LDExLjczMywzLjIsMjQuNTMzDQoJQzQ5LjA2NywzMjYuNCw0OCwzODcuMiw0OCw0MDIuMTMzYzAsMTQuOTMzLDEuMDY3LDQxLjYsMi4xMzMsNDYuOTMzYzEuMDY3LDUuMzMzLDAsMTEuNzMzLDAsMTMuODY3czIuMTMzLDExLjczMywxMS43MzMsMTQuOTMzDQoJczE3LjA2Ny0yLjEzMywxNy4wNjctMi4xMzNzLTEuMDY3LTQuMjY3LTEuMDY3LTkuNmMwLTUuMzMzLDEuMDY3LTcuNDY3LDAtMTAuNjY3cy0yLjEzMy01LjMzMy0yLjEzMy0xMC42NjcNCgljMC01LjMzMywxLjA2Ny0zNy4zMzMsMS4wNjctNDMuNzMzYzAtNi40LDE0LjkzMy04OC41MzMsMTQuOTMzLTg4LjUzM1M5MC42NjcsMjc2LjI2Nyw5My44NjcsMjcyczUuMzMzLTMuMiw3LjQ2Ny0xMi44DQoJYzIuMTMzLTguNTMzLDUuMzMzLTIzLjQ2Nyw1LjMzMy0yMy40NjdMNDQuOCwyMjkuMzMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzJCNDA0RjsiIGQ9Ik0xMDAuMjY3LDgyLjEzM2MwLDAsNy40NjcsMy4yLDEwLjY2Nyw3LjQ2N2MzLjIsNC4yNjcsOS42LDE3LjA2NywxMC42NjcsMjIuNA0KCWMxLjA2Nyw1LjMzMywxNy4wNjcsNTAuMTMzLDE2LDU0LjRjLTEuMDY3LDMuMiwxLjA2NywxMS43MzMsMS4wNjcsMTEuNzMzczMuMiw1MC4xMzMtMS4wNjcsNTUuNDY3DQoJYy00LjI2Nyw1LjMzMy0xNC45MzMsMC0xOS4yLTIuMTMzYy00LjI2Ny0yLjEzMy00LjI2Ny05Ni00LjI2Ny05Nmw4LjUzMy0xMi44TDEwMC4yNjcsODIuMTMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDE1QzsiIGQ9Ik0xMTYuMjY3LDEyLjhMMTE1LjIsMjMuNDY3YzAsMC0xLjA2Nyw1LjMzMy0xLjA2Nyw3LjQ2N2MxLjA2NywxLjA2Nyw1LjMzMyw0LjI2Nyw1LjMzMyw2LjQNCglzLTMuMiw0LjI2Ny0zLjIsNC4yNjdzMi4xMzMsMy4yLDMuMiw0LjI2N2MxLjA2NywxLjA2NywwLDIuMTMzLTEuMDY3LDIuMTMzYzAsMCwyLjEzMywxLjA2NywxLjA2NywzLjINCgljLTEuMDY3LDIuMTMzLTIuMTMzLDIuMTMzLTEuMDY3LDUuMzMzYzEuMDY3LDMuMi04LjUzMyw1LjMzMy0xMS43MzMsNi40Yy0zLjIsMS4wNjctOC41MzMsMTguMTMzLTguNTMzLDE5LjINCglzMTkuMiwzNC4xMzMsMTkuMiwzNC4xMzNsNi40LDE2bC0xMy44NjcsMTMuODY3bC0zMC45MzMtNTEuMmMwLDAsNC4yNjctODguNTMzLDUuMzMzLTg4LjUzM0M4NC4yNjcsNS4zMzMsMTA3LjczMyw2LjQsMTE2LjI2NywxMi44DQoJeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzY2QzZCOTsiIGQ9Ik0xMTMuMDY3LDEwNy43MzNjMCwwLDEzLjg2NywzMy4wNjctOC41MzMsMTkuMmwxMi44LDkyLjhjMCwwLDEyLjgtNTIuMjY3LDEyLjgtNzMuNg0KCVMxMTMuMDY3LDEwNy43MzMsMTEzLjA2NywxMDcuNzMzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzM0NEE1RTsiIGQ9Ik02MC44LDc0LjY2N2MwLDAtMTQuOTMzLDguNTMzLTE5LjIsMTZjLTQuMjY3LDcuNDY3LTYuNCwyNC41MzMtNS4zMzMsMjkuODY3DQoJYzAsMCw3LjQ2NywxMi44LDEyLjgsMjAuMjY3YzQuMjY3LDguNTMzLDMuMiw2Ni4xMzMtMTAuNjY3LDg4LjUzM2MwLDAsMzQuMTMzLDEwLjY2Nyw1OS43MzMsMTIuOHMyMi40LTEzLjg2NywyMi40LTIyLjQNCgljMC05LjYsMS4wNjctNDAuNTMzLDEuMDY3LTQwLjUzM3MwLTE0LjkzMy02LjQtMjkuODY3QzEwOC44LDEzNC40LDgxLjA2Nyw3Ni44LDgxLjA2Nyw3Ni44TDYwLjgsNzQuNjY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQxNUE2QjsiIGQ9Ik05MS43MzMsOTMuODY3YzAsMCwxMi44LDIyLjQsMTguMTMzLDMzLjA2N2M1LjMzMywxMC42NjcsMTIuOCwzNS4yLDExLjczMyw1MS4yDQoJYzAsMC0xLjA2Ny0xMy44NjctNy40NjctMjguOGMtNi40LTE0LjkzMy0zNC4xMzMtNDgtMzQuMTMzLTQ4bDguNTMzLTEuMDY3bC0xMi44LTMuMmwtNi40LTIzLjQ2N2wxMS43MzMtMi4xMzNMOTEuNzMzLDkzLjg2N3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNUM7IiBkPSJNMTE1LjIsMzAuOTMzYzEuMDY3LDEuMDY3LDQuMjY3LDQuMjY3LDUuMzMzLDYuNGMwLDMuMi0zLjIsNC4yNjctMy4yLDQuMjY3TDExNS4yLDMwLjkzM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMzcwNUE7IiBkPSJNMTE1LjIsMjMuNDY3YzAsMC0xLjA2NywwLTQuMjY3LTMuMlMxMDUuNiwxMS43MzMsOTkuMiw5LjZzLTEzLjg2NywwLTEzLjg2NywwczYuNCwwLDUuMzMzLDkuNg0KCWMtMi4xMzMsMTAuNjY3LTMuMiwyMC4yNjctNC4yNjcsNDIuNjY3Yy0xLjA2NywyMi40LDYuNCwzMiw2LjQsMzJTODAsODMuMiw3OC45MzMsNzYuOGMwLDAsMy4yLDE3LjA2NywxOC4xMzMsMjYuNjY3DQoJYzAsMC0yNy43MzMtMTMuODY3LTMzLjA2Ny0yMS4zMzNjLTUuMzMzLTcuNDY3LTIxLjMzMyw2LjQtMjIuNCwxMi44YzAsMCwyLjEzMy0xMi44LDQuMjY3LTE4LjEzM0M0OCw3MS40NjcsNDQuOCwxMC42NjcsNjUuMDY3LDkuNg0KCWMwLDAsMS4wNjctOS42LDIxLjMzMy05LjZTMTI0LjgsOC41MzMsMTE1LjIsMjMuNDY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQxNUE2QjsiIGQ9Ik05OC4xMzMsODBjMCwwLTMuMiw4LjUzMywwLDExLjczM2MzLjIsMy4yLDkuNiwxMi44LDEyLjgsMTcuMDY3YzMuMiw0LjI2NywxMi44LDI1LjYsMTkuMiwzOC40DQoJYzYuNCwxMi44LDguNTMzLDMwLjkzMyw4LjUzMywzMC45MzNzMC0xLjA2NywwLTIuMTMzYzAtMTIuOC0zLjItMjUuNi03LjQ2Ny0zOC40Yy00LjI2Ny0xMi44LTExLjczMy0zMi0xNC45MzMtMzYuMjY3DQoJQzExMy4wNjcsOTYsOTguMTMzLDgwLDk4LjEzMyw4MHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNUM7IiBkPSJNNTkuNzMzLDI2OC44bDYuNCwxLjA2N2MwLDAsMi4xMzMsNy40NjcsMy4yLDExLjczM2MxLjA2Nyw0LjI2NywxLjA2NywxMS43MzMsMS4wNjcsMTQuOTMzDQoJczAsNi40LDAsNi40UzY1LjA2NywzMDQsNjUuMDY3LDI5Ny42YzAtNi40LTEuMDY3LTEwLjY2Ny0yLjEzMy0xMy44NjdzLTEuMDY3LTMuMi0xLjA2Ny0zLjJMNTkuNzMzLDI2OC44eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzY2QzZCOTsiIGQ9Ik0xMDIuNCwzMDUuMDY3SDc4LjkzM1YyOTQuNGMwLTMuMi0zLjItNi40LTYuNC02LjRoLTMyYy0zLjIsMC02LjQsMy4yLTYuNCw2LjR2MTAuNjY3aC0yNS42DQoJQzQuMjY3LDMwNS4wNjcsMCwzMDkuMzMzLDAsMzEzLjZ2NjYuMTMzYzAsNC4yNjcsNC4yNjcsOC41MzMsOC41MzMsOC41MzNIMTAyLjRjNC4yNjcsMCw4LjUzMy00LjI2Nyw4LjUzMy04LjUzM1YzMTMuNg0KCUMxMTAuOTMzLDMwOS4zMzMsMTA3LjczMywzMDUuMDY3LDEwMi40LDMwNS4wNjd6IE03MS40NjcsMzA1LjA2N2gtMzJWMjk0LjRoMzJWMzA1LjA2N3oiLz4NCjxnPg0KCTxyZWN0IHg9IjE2IiB5PSIzMDUuMDY3IiBzdHlsZT0iZmlsbDojNEFCQUE1OyIgd2lkdGg9IjguNTMzIiBoZWlnaHQ9IjgzLjIiLz4NCgk8cmVjdCB4PSI4Ni40IiB5PSIzMDUuMDY3IiBzdHlsZT0iZmlsbDojNEFCQUE1OyIgd2lkdGg9IjguNTMzIiBoZWlnaHQ9IjgzLjIiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNUM7IiBkPSJNNDQuOCwyNzYuMjY3YzAsMC0xLjA2Nyw2LjQtMS4wNjcsOS42czAsOS42LDAsOS42YzAsMS4wNjcsNC4yNjcsMi4xMzMsNS4zMzMsMS4wNjcNCgljMCwwLDAsMy4yLDMuMiwzLjJjMy4yLDAsMS4wNjcsMCwxLjA2Ny0xLjA2N2MwLDAsMCwyLjEzMywzLjIsMi4xMzNzMi4xMzMtMS4wNjcsMi4xMzMtMi4xMzNjMCwwLDEuMDY3LDIuMTMzLDMuMiwyLjEzMw0KCUM2NCwzMDAuOCw2NCwyOTguNjY3LDY0LDI5Ny42YzAtMS4wNjctMS4wNjctNi40LTEuMDY3LTcuNDY3YzAtMS4wNjcsMi4xMzMtNi40LDIuMTMzLTcuNDY3YzAtMS4wNjcsMi4xMzMtNy40NjcsMS4wNjctMTEuNzMzDQoJYy0xLjA2Ny0zLjItMi4xMzMtNi40LTMuMi0xMC42NjdjLTEuMDY3LTUuMzMzLTIuMTMzLTI1LjYsMC0zNS4yYzIuMTMzLTkuNiwxLjA2Ny0zNC4xMzMsMS4wNjctMzQuMTMzbC0xOS4yLDkuNmMwLDAsMCwxNiwwLDIzLjQ2Nw0KCXMzLjIsMjQuNTMzLDMuMiwzMkM0Ni45MzMsMjY0LjUzMyw0NC44LDI3Ni4yNjcsNDQuOCwyNzYuMjY3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQxNUE2QjsiIGQ9Ik0zNi4yNjcsMTM2LjUzM2MtMS4wNjctNS4zMzMtMi4xMzMtMTAuNjY3LTIuMTMzLTE2YzEuMDY3LTcuNDY3LDMuMi0xOS4yLDUuMzMzLTI0LjUzMw0KCWM0LjI2Ny05LjYsMTIuOC0xMy44NjcsMjEuMzMzLTguNTMzczE4LjEzMywyNi42NjcsMTEuNzMzLDQzLjczM2MwLDAsMS4wNjcsOS42LTEuMDY3LDE3LjA2N3MtMi4xMzMsMTMuODY3LTIuMTMzLDE3LjA2Nw0KCWMwLDMuMiwxLjA2Nyw5LjYsMS4wNjcsMTEuNzMzYzAsMi4xMzMtMi4xMzMsNC4yNjctMi4xMzMsNi40YzAsMi4xMzMsMCwxMy44NjcsMCwxMy44NjdzLTEzLjg2NywwLTIzLjQ2NywzLjJ2LTEyLjgNCgljMCwwLTUuMzMzLDAtNS4zMzMtNC4yNjdzMC0zLjIsMC02LjRjMC0zLjItMi4xMzMtNy40NjctMy4yLTEyLjhjLTEuMDY3LTUuMzMzLTEuMDY3LTkuNiwyLjEzMy0xNC45MzMNCglDMzkuNDY3LDE0Ni4xMzMsMzguNCwxNDAuOCwzNi4yNjcsMTM2LjUzM3oiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNBREIzQkE7IiBwb2ludHM9IjI1OC4xMzMsNTEyIDUxMiw0MTQuOTMzIDUxMiwyNTYgMzgxLjg2NywyNTYgMzgxLjg2NywzMzYgMjU4LjEzMywzMzYgMjU4LjEzMyw0MTQuOTMzIA0KCTEzNS40NjcsNDE0LjkzMyAxMzUuNDY3LDUxMiAiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./img/trekking.svg":
/*!**************************!*\
  !*** ./img/trekking.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAzOCA1MTIuMDM4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDM4IDUxMi4wMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDRjQ3Mzc7IiBkPSJNNjkuNzQ3LDE4NC42NjNoMTkuMzQ2bDAsMHY3MC4zNDhsMCwwSDY5Ljc0N2MtOC43NDEsMC0xNS44MjgtNy4wODgtMTUuODI4LTE1LjgyOHYtMzguNjkxDQoJQzUzLjkxOCwxOTEuNzUxLDYxLjAwNiwxODQuNjYzLDY5Ljc0NywxODQuNjYzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzNFOENDNzsiIGQ9Ik0yMzguNTgxLDEwNS41MjJoLTM1LjE3NGMtMTkuNDI1LDAtMzUuMTc0LDE1Ljc0OS0zNS4xNzQsMzUuMTc0djE1OC4yODNoMTA1LjUyMlYxNDAuNjk2DQoJQzI3My43NTUsMTIxLjI3MSwyNTguMDA2LDEwNS41MjIsMjM4LjU4MSwxMDUuNTIyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFQzlBMzsiIGQ9Ik0yNjQuOTYyLDE3LjU4N2wtNjkuMjQsOC43OTNjLTAuNzM5LDIuODc1LTEuMTA4LDUuODMtMS4xMDgsOC43OTN2MzUuMTc0DQoJYzAsMTkuNDI1LDE1Ljc0OSwzNS4xNzQsMzUuMTc0LDM1LjE3NHMzNS4xNzQtMTUuNzQ5LDM1LjE3NC0zNS4xNzRWMzUuMTc0QzI2NS4zMjIsMjkuMzE3LDI2NS4zMjIsMjMuNDQzLDI2NC45NjIsMTcuNTg3eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6Izc1NDYyRTsiIGQ9Ik0xOTQuNjE0LDI2LjM4djM1LjE3NGwzNS4xNzQtMzUuMTc0aDI2LjM4YzE0LjU3MSwwLDI2LjM4LTExLjgxLDI2LjM4LTI2LjM4aC02MS41NTQNCgkJQzIwNi40MjQsMCwxOTQuNjE0LDExLjgxLDE5NC42MTQsMjYuMzhMMTk0LjYxNCwyNi4zOCIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM3NTQ2MkU7IiBkPSJNMjczLjc1NSwyOTguOTc4SDE2OC4yMzN2ODcuOTM1bC03OS4xNDEsMzUuMTc0bDE3LjU4NywzNS4xNzRsODMuODcyLTM0Ljk0NQ0KCQljMTMuMTExLTUuNDYxLDIxLjY1LTE4LjI3MywyMS42NS0zMi40NzR2LTM5LjA0M2MwLTkuMTg5LDcuNDQ4LTE2LjY0NiwxNi42NDYtMTYuNjQ2YzYuMDE1LDAsMTEuNTYzLDMuMjQ1LDE0LjUwOSw4LjQ4Ng0KCQlsNzQuMzY2LDEzMi4yMWwzNS4xNzQtMTcuNTg3TDI3My43NTUsMjk4Ljk3OHoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzRThDQzc7IiBkPSJNODQuMjI5LDUwMC4yOTZsLTMwLjMxMS02MC42MjJsMzUuMTc0LTE3LjU4N2wzMS4yNDMsNjIuNDg2YzIuNDcxLDQuOTUxLDIuNDcxLDEwLjc3MiwwLDE1LjcyM2wwLDANCgkJYy0yLjk4MSw1Ljk2Mi05LjA3NSw5LjcyNi0xNS43MzIsOS43MjZoLTQuNjQzQzkzLjI5NSw1MTAuMDIyLDg3LjIwMiw1MDYuMjU4LDg0LjIyOSw1MDAuMjk2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzRThDQzc7IiBkPSJNMzg4LjA3LDQ4My42NDFsLTUyLjc2MSwyNi4zOGwtMTcuNTg3LTM1LjE3NGw1Mi43NjEtMjYuMzhjOS43MTctNC44NTQsMjEuNTI2LTAuOTIzLDI2LjM4LDguNzkzDQoJCWwwLDBsMCwwQzQwMS43MTgsNDY2Ljk3NywzOTcuNzc4LDQ3OC43ODcsMzg4LjA3LDQ4My42NDFMMzg4LjA3LDQ4My42NDF6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkVDOUEzOyIgZD0iTTM5NC4zMzEsMTYwLjc3MWMtNy4yMTEtOS42MTEtMjAuODU4LTExLjU2My0zMC40NjktNC4zNTNjLTAuODI3LDAuNjE2LTEuNiwxLjI5My0yLjMzLDIuMDIyDQoJbC00My44MDksNDMuODA5bC00My45NjctNTIuNzYxdjcwLjM0OGwzLjg0Myw1Ljc2YzE0LjE5MywyMS4yNzEsNDIuOTM5LDI3LjAyMiw2NC4yMTksMTIuODNjMi41NDEtMS42OTcsNC45MDctMy42MzIsNy4wNjEtNS43OTUNCglsNDMuNDMxLTQzLjQzMUMzOTkuOTU5LDE4MS41NDEsNDAwLjgyMSwxNjkuNDMzLDM5NC4zMzEsMTYwLjc3MXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM3NTQ2MkU7IiBkPSJNMTk4LjU4LDk2LjcyOGgtNjUuNTJ2MTcuNTg3aDY1LjUyYzEyLjcxNSwwLjAwOSwyMy4wMTMsMTAuMzI0LDIzLjAwNCwyMy4wMzkNCgkJYzAsMy40NzMtMC43OTEsNi45MDMtMi4zMDQsMTAuMDI1bC01NS4yNjcsMTEzLjc4OGwtMjIuMTYsMi42Mzh2MTcuNTg3bDI1LjA2MS0zLjYxNGM1Ljc3Ny0wLjgzNSwxMC43NTQtNC40NzYsMTMuMzA1LTkuNzI2DQoJCWw1NC44NDUtMTEyLjk3OWM5Ljc5Ni0yMC4xNzIsMS4zODEtNDQuNDY5LTE4Ljc5Mi01NC4yNjVDMjEwLjc1OSw5OC4xMjYsMjA0LjcwOSw5Ni43MzcsMTk4LjU4LDk2LjcyOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNzU0NjJFOyIgZD0iTTg5LjA5MiwyNjMuODA0YzAsMTQuNTcxLDExLjgxLDI2LjM4LDI2LjM4LDI2LjM4aDI2LjM4YzE0LjU3MSwwLDI2LjM4LTExLjgxLDI2LjM4LTI2LjM4di04Ljc5Mw0KCQlIODkuMDkyQzg5LjA5MiwyNTUuMDExLDg5LjA5MiwyNjMuODA0LDg5LjA5MiwyNjMuODA0eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RFNEMzQzsiIGQ9Ik0xNjYuNzM5LDEyMy4xMDljLTMuNzI4LTEwLjU0My0xMy43LTE3LjU5Ni0yNC44ODYtMTcuNTg3aC0yNi4zOGMtMTQuNTcxLDAtMjYuMzgsMTEuODEtMjYuMzgsMjYuMzgNCgl2MTIzLjEwOWg3OS4xNDFWMTMxLjkwMkwxNjYuNzM5LDEyMy4xMDl6Ii8+DQo8cmVjdCB4PSIzOTYuNzk1IiB5PSIxMjYuODY0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC45NzQgMC4yMjY1IC0wLjIyNjUgLTAuOTc0IDg3My4zMzc0IDU0MS43NDY5KSIgc3R5bGU9ImZpbGw6Izc1NDYyRTsiIHdpZHRoPSIxNy41ODciIGhlaWdodD0iMzg4LjIyOCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzNFOENDNzsiIGQ9Ik0xMjguNjYzLDI2LjM4Yy0yMS44NTIsMC0zOS41NzEsMTcuNzE5LTM5LjU3MSwzOS41NzFzMTcuNzE5LDM5LjU3MSwzOS41NzEsMzkuNTcxDQoJczM5LjU3MS0xNy43MTksMzkuNTcxLTM5LjU3MVMxNTAuNTE1LDI2LjM4LDEyOC42NjMsMjYuMzh6IE0xMjguNjYzLDc5LjE0MWMtNy4yODEsMC0xMy4xOS01LjkwOS0xMy4xOS0xMy4xOQ0KCXM1LjkwOS0xMy4xOSwxMy4xOS0xMy4xOWM3LjI4MSwwLDEzLjE5LDUuOTA5LDEzLjE5LDEzLjE5UzEzNS45NDQsNzkuMTQxLDEyOC42NjMsNzkuMTQxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFQzlBMzsiIGQ9Ik0yMjguMDI5LDE0NS43MzRsLTUxLjAwMiwzMS4wOTRsNTkuNzk2LDQzLjAwOWMxMC4wOTUsNi43NTMsMTIuODAzLDIwLjQwMSw2LjA1LDMwLjQ5Ng0KCWMtMC4yMTEsMC4zMTctMC40MzEsMC42MjQtMC42NiwwLjkzMmwwLDBjLTcsOS4zMTItMjAuMDQsMTEuNTQ2LTI5Ljc0LDUuMWwtNzMuNjEtNTIuMTg5Yy05LjEyOC02LjEwMy0xNC42MDYtMTYuMzY1LTE0LjU5Ny0yNy4zNDgNCglsMCwwYzAtMTAuOTgzLDUuNDg3LTIxLjI0NSwxNC42MzItMjcuMzM5bDY0LjgxNy00MC4yODNjOS42OTktNi40NDYsMjIuNzQtNC4yMTIsMjkuNzQsNS4xbDAsMA0KCWM3LjI1NSw5LjczNCw1LjI1LDIzLjUwNS00LjQ4NSwzMC43NjhDMjI4LjY2MiwxNDUuMzAzLDIyOC4zNDYsMTQ1LjUyMywyMjguMDI5LDE0NS43MzR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;

    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/style.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/style.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.flush = flush;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = __webpack_require__(/*! ./stylesheet-registry */ "./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    _classCallCheck(this, JSXStyle);

    var _this = _possibleConstructorReturn(this, (JSXStyle.__proto__ || Object.getPrototypeOf(JSXStyle)).call(this, props));

    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: 'shouldComponentUpdate',


    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.styleId !== otherProps.styleId ||
      // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.styleId) {
          styleSheetRegistry.remove(this.prevProps);
        }
        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stringHash = __webpack_require__(/*! string-hash */ "string-hash");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(/*! ./lib/stylesheet */ "./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      })
      // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/next/node_modules/styled-jsx/style.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/styled-jsx/style.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/next/node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/chiropractor-liverpool.jsx":
/*!******************************************!*\
  !*** ./pages/chiropractor-liverpool.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_doctor_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/doctor.svg */ "./img/doctor.svg");
/* harmony import */ var _img_doctor_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_doctor_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_trekking_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/trekking.svg */ "./img/trekking.svg");
/* harmony import */ var _img_trekking_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_trekking_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_stairs_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/stairs.svg */ "./img/stairs.svg");
/* harmony import */ var _img_stairs_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_stairs_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_exercise_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/exercise.svg */ "./img/exercise.svg");
/* harmony import */ var _img_exercise_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_exercise_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_diet_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/diet.svg */ "./img/diet.svg");
/* harmony import */ var _img_diet_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_diet_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_clipboard_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/clipboard.svg */ "./img/clipboard.svg");
/* harmony import */ var _img_clipboard_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_clipboard_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_IntroLiverpool__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/IntroLiverpool */ "./components/IntroLiverpool.jsx");
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
    },
    infowrapper: {
      height: 250
    },
    details: {
      height: 250,
      marginLeft: '8%',
      marginRight: '8%',
      marginTop: 0,
      marginBottom: 0,
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    infohead: {
      backgroundColor: 'rgb(12,91,173)',
      borderRadius: 4,
      height: 60,
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    infoheading: {
      margin: 0,
      paddingTop: 15,
      color: '#fff',
      minHeight: 16,
      fontWeight: 700,
      fontSize: '1.25rem',
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    infotext: {
      margin: 0,
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Helvetica',
      textDecoration: 'none'
    },
    fullwidth: {
      width: '100%'
    }
  };
};

function Liverpool(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IntroLiverpool__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    itemscope: true,
    itemtype: "http://schema.org/MedicalBusiness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.contentwrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_doctor_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    itemprop: "logo",
    height: "128",
    width: "128",
    alt: "Chiropractor in Liverpool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Chiropractors in Liverpool, England"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    className: classes.infowrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.infohead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.infoheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Qualified Chiropractors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "10 Years of Experience"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "More than 500 Happy Clients"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "NIH Accredited"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    itemprop: "knowsAbout",
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Alternative Medicine"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.infohead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.infoheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Book an Appointment ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    itemprop: "telephone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "+44 3069 990145")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    itemprop: "openingHours",
    content: "Mo-Fr 10:00-18:00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Open Monday to Friday 10AM to 6PM")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    itemprop: "areaServed",
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Liverpool, England"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    itemprop: "email",
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "chiropractorhunter@gmail.com"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.infohead,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.infoheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "\xA3", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    itemprop: "priceRange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "50"), " per visit (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    itemprop: "currenciesAccepted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "GBP"), ")"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "\xA330 for X-RAY"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "\xA330 for follow-up visits"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.fullwidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.infotext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "\xA315 for Custom Diet Chart"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "The ability to carry on with a healthy lifestyle goes past access to quality doctors, optimal healthcare benefits or even high-class hospitals. A city's health, to a large degree, takes into consideration the decisions its occupants make to bring down their individual health risks. In the event that you are a part of the healthy breed, carrying on with a balanced way of life shouldn't be a troublesome task. There are many ways to guarantee that you remain in a healthy state. The following are a couple of tips to enable you to maintain your well-being."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_trekking_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    height: "80",
    width: "80",
    alt: "Walking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Walk When You Can", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  })), "Most individuals incline toward driving rather than walking, especially to their workplaces. Walking is a fantastic low-impact practice that plays an instrumental part in toning up your legs and abs, consuming sugars and making you feel relaxed. Avoid cabs and tubes as much as you can, and instead, walk to any close destination. Guarantee you have comfortable shoes and lightweight garments unless it is winter season. You can also visit better places inside the city as part of the activity. Alternatively, you can take a bike ride to your destination on the off chance that you discover it an additionally appealing choice.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_stairs_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    height: "80",
    width: "80",
    alt: "Stairs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "Utilize The Stairs", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })), "Most individuals want to utilize escalators and elevators when they are late as well as notwithstanding when the time isn't an issue. They think that it's less tedious and probably more enjoyable. In any case, fortunately, most workplaces have many stairs, something you should take advantage of on the off chance that you plan on leading a healthy way of life. Instead of utilizing the elevator or escalator, use the stairs. It is a phenomenal way to do light activities notwithstanding amid your working hours. Additionally, it is great for your legs and back.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_exercise_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    height: "80",
    width: "80",
    alt: "Exercise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Embrace Outdoor Activities", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  })), "If you cannot find time to go to the exercise center, it doesn't mean that your mission to lead a healthy life is damned. You should attempt new wellness hacks, for example, energetic walking and run. Moreover, you can as well invest some energy to loosen up with a couple of open-air yoga acts like this will help relax your muscles and consume a couple of calories.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_diet_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    height: "80",
    width: "80",
    alt: "Diet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Eat and Drink Healthy", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  })), "For one to carry on with a healthy life, he or she should embrace a balanced eating regimen. Guarantee your eating regimen has a broad range of organic products, veggies, lean meat, eggs, angle, nuts, beats, entire grains as well as naturally low dairy fat nourishments. On the off chance that you are the sort of individual who likes attempting new flavors, cocktails, salads or natural products, endeavor to avoid overeating or drinking too much. This may foul up with your healthy eating regimen. On the off chance that you want to snatch a couple of snacks, counterbalance it by drinking more water or doing light physical activities.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_clipboard_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    height: "80",
    width: "80",
    alt: "Conclusion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.bodytext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.subheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "Conclusion", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  })), "Although life, in general, can be exorbitantly occupied; regardless you have a chance to lead a healthy life. As noted above, little advances, for example, walking to close destinations, utilizing stairs instead of elevators, embracing outside activities, embracing local facilities as well as eating and drinking healthy can help you in your mission to maintain a healthy living."))))));
}

Liverpool.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Liverpool));

/***/ }),

/***/ 5:
/*!************************************************!*\
  !*** multi ./pages/chiropractor-liverpool.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/chiropractor-liverpool.jsx */"./pages/chiropractor-liverpool.jsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/SwipeableDrawer":
/*!****************************************************!*\
  !*** external "@material-ui/core/SwipeableDrawer" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/lib/fa/book":
/*!******************************************!*\
  !*** external "react-icons/lib/fa/book" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/book");

/***/ }),

/***/ "react-icons/lib/fa/comments-o":
/*!************************************************!*\
  !*** external "react-icons/lib/fa/comments-o" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/comments-o");

/***/ }),

/***/ "react-icons/lib/fa/facebook-square":
/*!*****************************************************!*\
  !*** external "react-icons/lib/fa/facebook-square" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/facebook-square");

/***/ }),

/***/ "react-icons/lib/fa/home":
/*!******************************************!*\
  !*** external "react-icons/lib/fa/home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/home");

/***/ }),

/***/ "react-icons/lib/fa/search":
/*!********************************************!*\
  !*** external "react-icons/lib/fa/search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/search");

/***/ }),

/***/ "react-icons/lib/fa/twitter-square":
/*!****************************************************!*\
  !*** external "react-icons/lib/fa/twitter-square" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/twitter-square");

/***/ }),

/***/ "react-icons/lib/ti/social-instagram":
/*!******************************************************!*\
  !*** external "react-icons/lib/ti/social-instagram" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/ti/social-instagram");

/***/ }),

/***/ "string-hash":
/*!******************************!*\
  !*** external "string-hash" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string-hash");

/***/ })

/******/ });
//# sourceMappingURL=chiropractor-liverpool.js.map