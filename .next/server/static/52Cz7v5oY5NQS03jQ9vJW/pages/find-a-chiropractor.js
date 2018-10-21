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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27)


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/facebook-square");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/ti/social-instagram");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/twitter-square");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/home");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/book");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/comments-o");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/next/node_modules/styled-jsx/style.js
var style = __webpack_require__(16);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(17);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(18);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(5);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(13);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "react-icons/lib/fa/facebook-square"
var facebook_square_ = __webpack_require__(19);
var facebook_square_default = /*#__PURE__*/__webpack_require__.n(facebook_square_);

// EXTERNAL MODULE: external "react-icons/lib/ti/social-instagram"
var social_instagram_ = __webpack_require__(20);
var social_instagram_default = /*#__PURE__*/__webpack_require__.n(social_instagram_);

// EXTERNAL MODULE: external "react-icons/lib/fa/twitter-square"
var twitter_square_ = __webpack_require__(21);
var twitter_square_default = /*#__PURE__*/__webpack_require__.n(twitter_square_);

// CONCATENATED MODULE: ./components/sm_buttons.jsx







var styles = {
  root: {
    flexGrow: 1
  }
};

function SMButtons(props) {
  var classes = props.classes;
  return external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/Chiropractorhunter-2075898506059830/?ref=aymt_homepage_panel",
    target: "_blank"
  }, external_react_default.a.createElement(IconButton_default.a, null, external_react_default.a.createElement(facebook_square_default.a, {
    size: "24",
    color: "#fff"
  }))), external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/chiropractorhunter1/",
    target: "_blank"
  }, external_react_default.a.createElement(IconButton_default.a, null, external_react_default.a.createElement(social_instagram_default.a, {
    size: "24",
    color: "#fff"
  }))), external_react_default.a.createElement("a", {
    href: "https://twitter.com/kapil_shrotriya",
    target: "_blank"
  }, external_react_default.a.createElement(IconButton_default.a, null, external_react_default.a.createElement(twitter_square_default.a, {
    size: "24",
    color: "#fff"
  }))));
}

/* harmony default export */ var sm_buttons = (Object(styles_["withStyles"])(styles)(SMButtons));
// EXTERNAL MODULE: external "@material-ui/core/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__(6);
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(15);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(8);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(9);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(10);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(11);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "react-icons/lib/fa/search"
var search_ = __webpack_require__(32);

// EXTERNAL MODULE: external "react-icons/lib/fa/home"
var home_ = __webpack_require__(22);
var home_default = /*#__PURE__*/__webpack_require__.n(home_);

// EXTERNAL MODULE: external "react-icons/lib/fa/book"
var book_ = __webpack_require__(23);
var book_default = /*#__PURE__*/__webpack_require__.n(book_);

// EXTERNAL MODULE: external "react-icons/lib/fa/comments-o"
var comments_o_ = __webpack_require__(24);
var comments_o_default = /*#__PURE__*/__webpack_require__.n(comments_o_);

// CONCATENATED MODULE: ./components/tileData.jsx









var mailFolderListItems = external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
  href: "/"
}, external_react_default.a.createElement(ListItem_default.a, {
  button: true
}, external_react_default.a.createElement(ListItemIcon_default.a, null, external_react_default.a.createElement(home_default.a, {
  size: "24"
})), external_react_default.a.createElement(ListItemText_default.a, {
  primary: "Home"
}))), external_react_default.a.createElement(ListItem_default.a, {
  button: true
}, external_react_default.a.createElement(ListItemIcon_default.a, null, external_react_default.a.createElement(book_default.a, {
  size: "24"
})), external_react_default.a.createElement(ListItemText_default.a, {
  primary: "Blog"
})), external_react_default.a.createElement(ListItem_default.a, {
  button: true
}, external_react_default.a.createElement(ListItemIcon_default.a, null, external_react_default.a.createElement(comments_o_default.a, {
  size: "24"
})), external_react_default.a.createElement(ListItemText_default.a, {
  primary: "Contact Us"
})));
// CONCATENATED MODULE: ./components/drawer.jsx
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










var drawer_styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

var drawer_AppDrawer =
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
      var sideList = external_react_default.a.createElement("div", {
        className: classes.list
      }, external_react_default.a.createElement(List_default.a, null, mailFolderListItems));
      var fullList = external_react_default.a.createElement("div", {
        className: classes.fullList
      }, external_react_default.a.createElement(List_default.a, null, mailFolderListItems));
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(IconButton_default.a, {
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "Menu",
        onClick: this.toggleDrawer('left', true)
      }, external_react_default.a.createElement(Menu_default.a, {
        style: {
          color: '#fff'
        }
      })), external_react_default.a.createElement(SwipeableDrawer_default.a, {
        open: this.state.left,
        onClose: this.toggleDrawer('left', false),
        onOpen: this.toggleDrawer('left', true)
      }, external_react_default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false)
      }, sideList)), external_react_default.a.createElement(SwipeableDrawer_default.a, {
        anchor: "top",
        open: this.state.top,
        onClose: this.toggleDrawer('top', false),
        onOpen: this.toggleDrawer('top', true)
      }, external_react_default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('top', false),
        onKeyDown: this.toggleDrawer('top', false)
      }, fullList)), external_react_default.a.createElement(SwipeableDrawer_default.a, {
        anchor: "bottom",
        open: this.state.bottom,
        onClose: this.toggleDrawer('bottom', false),
        onOpen: this.toggleDrawer('bottom', true)
      }, external_react_default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('bottom', false),
        onKeyDown: this.toggleDrawer('bottom', false)
      }, fullList)), external_react_default.a.createElement(SwipeableDrawer_default.a, {
        anchor: "right",
        open: this.state.right,
        onClose: this.toggleDrawer('right', false),
        onOpen: this.toggleDrawer('right', true)
      }, external_react_default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('right', false),
        onKeyDown: this.toggleDrawer('right', false)
      }, sideList)));
    }
  }]);

  return AppDrawer;
}(external_react_default.a.Component);

/* harmony default export */ var drawer = (Object(styles_["withStyles"])(drawer_styles)(drawer_AppDrawer));
// CONCATENATED MODULE: ./components/Header.jsx










var Header_styles = {
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
var theme = Object(styles_["createMuiTheme"])({
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
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(styles_["MuiThemeProvider"], {
    theme: theme
  }, external_react_default.a.createElement(AppBar_default.a, {
    position: "fixed"
  }, external_react_default.a.createElement(Toolbar_default.a, null, external_react_default.a.createElement(drawer, null), external_react_default.a.createElement("div", {
    className: classes.flex
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(sm_buttons, null)))))));
}

/* harmony default export */ var Header = (Object(styles_["withStyles"])(Header_styles)(ChiroAppBar));
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(1);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(3);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./components/Footer.jsx







var Footer_theme = Object(styles_["createMuiTheme"])({
  palette: {
    primary: {
      main: "rgb(12,91,173)"
    },
    secondary: {
      main: "rgb(255,255,255)"
    }
  }
});

var Footer_styles = function styles(theme) {
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
  return external_react_default.a.createElement(styles_["MuiThemeProvider"], {
    theme: Footer_theme
  }, external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement(Grid_default.a, null, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement("div", {
    className: classes.footer
  }, external_react_default.a.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    }
  }, external_react_default.a.createElement(Button_default.a, null, "Home")), external_react_default.a.createElement("a", {
    href: "/find-a-chiropractor",
    style: {
      textDecoration: 'none'
    }
  }, external_react_default.a.createElement(Button_default.a, null, "Find a chiropractor")), external_react_default.a.createElement(Button_default.a, null, "Contact Us"))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement("div", {
    className: classes.footercopy
  }, external_react_default.a.createElement("p", {
    className: classes.navtext
  }, "\xA9\xA0Kapil Shrotriya | www.chiropractorhunter.com"))), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement("div", {
    className: classes.footercopy
  }, external_react_default.a.createElement("p", {
    className: classes.navtext
  }, "Icons provided by various authors from ", external_react_default.a.createElement("a", {
    rel: "nofollow",
    href: "https://www.flaticon.com",
    style: {
      textDecoration: 'None'
    }
  }, "www.flaticon.com")))))));
}

/* harmony default export */ var components_Footer = (Object(styles_["withStyles"])(Footer_styles)(Footer));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(14);

// CONCATENATED MODULE: ./components/Layout.jsx









var Layout_styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
};

function Layout(props) {
  var classes = props.classes;
  return external_react_default.a.createElement("div", {
    className: "jsx-1784044730" + " " + (classes.root || "")
  }, external_react_default.a.createElement(style_default.a, {
    styleId: "1784044730",
    css: ["body{margin:0;}"]
  }), external_react_default.a.createElement(Grid_default.a, {
    container: true
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement(Header, null)), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, props.children), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12
  }, external_react_default.a.createElement(components_Footer, null))));
}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Object(styles_["withStyles"])(Layout_styles)(Layout));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.flush = flush;

var _react = __webpack_require__(0);

var _stylesheetRegistry = __webpack_require__(28);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stringHash = __webpack_require__(29);

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__(30);

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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("string-hash");

/***/ }),
/* 30 */
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

var isProd = process.env && "production" === 'production';
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/search");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-455aa31cdb838eb662c2c04f8a4662d6.png";

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.logo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(33),
    alt: "Find the best qualified chiropractors through Chiropractorhunter",
    width: "100%"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.chiroheading
  }, "Find Chiropractics Near You", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.chirop
  }, "If you're looking for the best chiropractors near you, then you're at the right place. We have carefully chosen the best quality chiropractics for you.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/find-a-chiropractor",
    style: {
      textDecoration: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.button,
    variant: "contained"
  }, "Find", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.rightIcon
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.flex2
  }))))));
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(IntroIndex));

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _components_IntroIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_chiroicon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _img_chiroicon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_chiroicon_png__WEBPACK_IMPORTED_MODULE_11__);













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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Find a Chiropractor | Chiropractorhunter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Find a Chiropractor | Chiropractorhunter"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "article"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://chiropractohunter.com/find-a-chiropractor"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Find the best chiropractors! We have accumulated the best list of chiropractors in different locations which can help you deal with pain and other ailments."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "canonical",
    href: "https://chiropractorhunter.com/find-a-chiropractor"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "chiropractors,chiropractic,pain,clinic,chiropractors,find"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: _img_chiroicon_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    type: "image/png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IntroIndex__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.contentwrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.heading
  }, "Find Chiropractors Near You"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/chiropractor-liverpool",
    style: {
      textDecoration: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/chiropractor-liverpool",
    style: {
      textDecoration: 'none',
      color: '#000'
    }
  }, "Liverpool, England"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, null, "London, England"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, null, "Glasgow, Scotland"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Index));

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ })
/******/ ]);