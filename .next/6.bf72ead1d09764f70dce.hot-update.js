webpackHotUpdate(6,{

/***/ "./components/IntroIndex.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search__ = __webpack_require__("./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Helmet, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "Chiropractor Liverpool, England"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "Find chiropractors near you | Chiropractorhunter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "https://chiropractohunter.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: "Looking for the best chiropractors near you? You're at the right place!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "canonical",
    href: "https://chiropractorhunter.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __webpack_require__("./img/logo.png"),
    alt: "Chiropractorhunter Logo",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    variant: "headline",
    component: "h1",
    className: classes.chiroheading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "Find Chiropractics Near You", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    variant: "body1",
    component: "p",
    className: classes.chirop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "If you're looking for the best chiropractors near you, then you're at the right place. We have carefully chosen the best quality chiropractics for you.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
    href: "/find-a-chiropractor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    className: classes.button,
    variant: "raised",
    color: "rgb(178,54,52)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "Find", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Search___default.a, {
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.flex2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }))))));
}

IntroIndex.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(IntroIndex));

/***/ })

})
//# sourceMappingURL=6.bf72ead1d09764f70dce.hot-update.js.map