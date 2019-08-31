webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/search_form/SearchForm.js":
/*!**********************************************!*\
  !*** ./components/search_form/SearchForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_foundation_6_5_1_custom_css_foundation_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/foundation-6.5.1-custom/css/foundation.min.css */ "./static/foundation-6.5.1-custom/css/foundation.min.css");
/* harmony import */ var _static_foundation_6_5_1_custom_css_foundation_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_foundation_6_5_1_custom_css_foundation_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "./node_modules/react-datetime/css/react-datetime.css");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/rovebus/next-rovebus/components/search_form/SearchForm.js";







var arrivalTownList = ["one", "two", "three", "four", "five", "six", "seven"];

var SearchForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchForm, _React$Component);

  function SearchForm(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchForm).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchForm, [{
    key: "render",
    value: function render() {
      // Let's use the static moment reference in the Datetime component
      var yesterday = react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a.moment().subtract(1, "day");

      var valid = function valid(current) {
        return current.isAfter(yesterday);
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "grid-container searchform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "grid-x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "small-12 medium-6 large-3 searchItem padding5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "select",
        bsSize: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, arrivalTownList.map(function (town) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          className: "jsx-1419398121",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, town);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "small-12 medium-6 large-3 searchItem padding5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "select",
        bsSize: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, arrivalTownList.map(function (town) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          className: "jsx-1419398121",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, town);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "small-12 medium-6 large-3 searchItem padding5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, {
        inputProps: {
          placeholder: "Date"
        },
        isValidDate: valid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "small-12 medium-6 large-3 searchItem padding5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "grid-x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
        className: "small-4 searchItem",
        style: {
          paddingRight: "8px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["InputGroupAddon"], {
        addonType: "prepend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "$"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        placeholder: "Amount",
        min: 0,
        max: 100,
        type: "number",
        step: "1",
        bsSize: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1419398121" + " " + "small-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        color: "#484848",
        size: "lg",
        block: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Search"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1419398121",
        __self: this
      }, ".padding5.jsx-1419398121{padding:5px;}.searchItem.jsx-1419398121{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.searchform.jsx-1419398121{background-color:rgba(0,0,0,0.3);padding:10px;}.searchbtn.jsx-1419398121{background-color:orange !important;border:solid white 5px !important;}.mylabel.jsx-1419398121::after{content:\"another word\" !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3VkYXNpbHZhL1Byb2plY3RzL1dlYiBQcm9qZWN0cy9yb3ZlYnVzL25leHQtcm92ZWJ1cy9jb21wb25lbnRzL3NlYXJjaF9mb3JtL1NlYXJjaEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUd5QixBQUdDLEFBS3VCLEFBSUQsQUFJRCxZQWZwQyxxQkFRZSxDQVFmLENBSm9DLFdBSHBDLHVCQUlBLEtBVndCLDhFQUNDLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMveW91ZGFzaWx2YS9Qcm9qZWN0cy9XZWIgUHJvamVjdHMvcm92ZWJ1cy9uZXh0LXJvdmVidXMvY29tcG9uZW50cy9zZWFyY2hfZm9ybS9TZWFyY2hGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dEdyb3VwQWRkb24sXG4gIElucHV0R3JvdXBUZXh0LFxuICBJbnB1dFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IERhdGV0aW1lIGZyb20gXCJyZWFjdC1kYXRldGltZVwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCBcIi4uLy4uL3N0YXRpYy9mb3VuZGF0aW9uLTYuNS4xLWN1c3RvbS9jc3MvZm91bmRhdGlvbi5taW4uY3NzXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXRldGltZS9jc3MvcmVhY3QtZGF0ZXRpbWUuY3NzXCI7XG5cbmNvbnN0IGFycml2YWxUb3duTGlzdCA9IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCIsIFwiZm91clwiLCBcImZpdmVcIiwgXCJzaXhcIiwgXCJzZXZlblwiXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIExldCdzIHVzZSB0aGUgc3RhdGljIG1vbWVudCByZWZlcmVuY2UgaW4gdGhlIERhdGV0aW1lIGNvbXBvbmVudFxuICAgIHZhciB5ZXN0ZXJkYXkgPSBEYXRldGltZS5tb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheVwiKTtcbiAgICB2YXIgdmFsaWQgPSBmdW5jdGlvbihjdXJyZW50KSB7XG4gICAgICByZXR1cm4gY3VycmVudC5pc0FmdGVyKHllc3RlcmRheSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBzZWFyY2hmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC14XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS0zIHNlYXJjaEl0ZW0gcGFkZGluZzVcIj5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgYnNTaXplPVwibGdcIj5cbiAgICAgICAgICAgICAge2Fycml2YWxUb3duTGlzdC5tYXAodG93biA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbj57dG93bn08L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTYgbGFyZ2UtMyBzZWFyY2hJdGVtIHBhZGRpbmc1XCI+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiIGJzU2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgIHthcnJpdmFsVG93bkxpc3QubWFwKHRvd24gPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24+e3Rvd259PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTMgc2VhcmNoSXRlbSBwYWRkaW5nNVwiPlxuICAgICAgICAgICAgPERhdGV0aW1lXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgcGxhY2Vob2xkZXI6IFwiRGF0ZVwiIH19XG4gICAgICAgICAgICAgIGlzVmFsaWREYXRlPXt2YWxpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS0zIHNlYXJjaEl0ZW0gcGFkZGluZzVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC14XCI+XG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGwtNCBzZWFyY2hJdGVtXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiOHB4XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwicHJlcGVuZFwiPiQ8L0lucHV0R3JvdXBBZGRvbj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICBic1NpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLThcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiIzQ4NDg0OFwiIHNpemU9XCJsZ1wiIGJsb2NrPlxuICAgICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBhZGRpbmc1IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaEl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaGZvcm0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaGJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgd2hpdGUgNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5teWxhYmVsOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcImFub3RoZXIgd29yZFwiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/youdasilva/Projects/Web Projects/rovebus/next-rovebus/components/search_form/SearchForm.js */"));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a03466138c1c29469c02.hot-update.js.map