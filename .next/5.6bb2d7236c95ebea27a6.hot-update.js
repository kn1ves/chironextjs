webpackHotUpdate(5,{

/***/ "./components/featurecardbrain.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
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

/***/ })

})
//# sourceMappingURL=5.6bb2d7236c95ebea27a6.hot-update.js.map