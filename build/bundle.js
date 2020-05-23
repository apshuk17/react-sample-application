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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/actions/actionTypes.js":
/*!*******************************************!*\
  !*** ./src/client/actions/actionTypes.js ***!
  \*******************************************/
/*! exports provided: FETCH_USERS, FETCH_RICKY_MORTY_DATA_SUCCESS, FETCH_RICKY_MORTY_DATA_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RICKY_MORTY_DATA_SUCCESS\", function() { return FETCH_RICKY_MORTY_DATA_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_RICKY_MORTY_DATA_FAIL\", function() { return FETCH_RICKY_MORTY_DATA_FAIL; });\nvar FETCH_USERS = 'FETCH_USERS';\nvar FETCH_RICKY_MORTY_DATA_SUCCESS = 'FETCH_RICKY_MORTY_DATA_SUCCESS';\nvar FETCH_RICKY_MORTY_DATA_FAIL = 'FETCH_RICKY_MORTY_DATA_FAIL';\n\n//# sourceURL=webpack:///./src/client/actions/actionTypes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: fetchUsers, fetchRickMortyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRickMortyData\", function() { return fetchRickMortyData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ \"./src/client/actions/actionTypes.js\");\n/* harmony import */ var _rickMortyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rickMortyActions */ \"./src/client/actions/rickMortyActions.js\");\n\n\n\n\n\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://react-ssr-api.herokuapp.com/users');\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_USERS\"],\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar fetchRickMortyData = function fetchRickMortyData() {\n  return /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://rickandmortyapi.com/api/character');\n\n            case 3:\n              res = _context2.sent;\n              dispatch(Object(_rickMortyActions__WEBPACK_IMPORTED_MODULE_4__[\"rickMortyDataSuccess\"])(res));\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              dispatch(Object(_rickMortyActions__WEBPACK_IMPORTED_MODULE_4__[\"rickMortyDataFail\"])(_context2.t0));\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/actions/rickMortyActions.js":
/*!************************************************!*\
  !*** ./src/client/actions/rickMortyActions.js ***!
  \************************************************/
/*! exports provided: rickMortyDataSuccess, rickMortyDataFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rickMortyDataSuccess\", function() { return rickMortyDataSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rickMortyDataFail\", function() { return rickMortyDataFail; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/client/actions/actionTypes.js\");\n\nvar rickMortyDataSuccess = function rickMortyDataSuccess(resp) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RICKY_MORTY_DATA_SUCCESS\"],\n    payload: resp\n  };\n};\nvar rickMortyDataFail = function rickMortyDataFail(err) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_RICKY_MORTY_DATA_FAIL\"],\n    error: err\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/rickMortyActions.js?");

/***/ }),

/***/ "./src/client/components/Routes/routes.js":
/*!************************************************!*\
  !*** ./src/client/components/Routes/routes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/Home/home */ \"./src/client/pages/Home/home.js\");\n/* harmony import */ var _pages_UsersList_usersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/UsersList/usersList */ \"./src/client/pages/UsersList/usersList.js\");\n/* harmony import */ var _pages_RickMorty_rickMorty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/RickMorty/rickMorty */ \"./src/client/pages/RickMorty/rickMorty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _pages_Home_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}, _objectSpread({\n  path: '/users'\n}, _pages_UsersList_usersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), _objectSpread({\n  path: '/rick-morty'\n}, _pages_RickMorty_rickMorty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])]);\n\n//# sourceURL=webpack:///./src/client/components/Routes/routes.js?");

/***/ }),

/***/ "./src/client/components/containers/RickMortyContainer/rickMortyContainer.js":
/*!***********************************************************************************!*\
  !*** ./src/client/components/containers/RickMortyContainer/rickMortyContainer.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _presentational_RickMortyPresentational_RickMortyPresentational__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../presentational/RickMortyPresentational/RickMortyPresentational */ \"./src/client/components/presentational/RickMortyPresentational/RickMortyPresentational.js\");\n/* harmony import */ var _templates_twocolumntemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../templates/twocolumntemplate */ \"./src/client/components/templates/twocolumntemplate.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils */ \"./src/utils.js\");\n\n\n\n\n\n\n\nvar RickMortyContainer = function RickMortyContainer(_ref) {\n  var rickMortyDataResultSet = _ref.rickMortyDataResultSet,\n      fetchRickMortyData = _ref.fetchRickMortyData,\n      species = _ref.species,\n      gender = _ref.gender,\n      origin = _ref.origin;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchRickMortyData();\n  }, []);\n  console.log(\"##data\", rickMortyDataResultSet, species, gender, origin);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_twocolumntemplate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rickMortyData: rickMortyDataResultSet,\n    species: species,\n    gender: gender,\n    origin: origin\n  });\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchRickMortyData\"])());\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var _rickMorty$showData, _rickMorty$showData2, _rickMorty$showData3, _rickMorty$showData4;\n\n  var rickMorty = _ref2.rickMorty;\n  return {\n    rickMortyDataResultSet: rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData = rickMorty.showData) === null || _rickMorty$showData === void 0 ? void 0 : _rickMorty$showData.results,\n    species: Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getAllFilterValues\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData2 = rickMorty.showData) === null || _rickMorty$showData2 === void 0 ? void 0 : _rickMorty$showData2.results, \"species\"),\n    gender: Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getAllFilterValues\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData3 = rickMorty.showData) === null || _rickMorty$showData3 === void 0 ? void 0 : _rickMorty$showData3.results, \"gender\"),\n    origin: Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"getAllFilterValues\"])(rickMorty === null || rickMorty === void 0 ? void 0 : (_rickMorty$showData4 = rickMorty.showData) === null || _rickMorty$showData4 === void 0 ? void 0 : _rickMorty$showData4.results, \"origin\", \"name\")\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n    fetchRickMortyData: _actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchRickMortyData\"]\n  })(RickMortyContainer),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/client/components/containers/RickMortyContainer/rickMortyContainer.js?");

/***/ }),

/***/ "./src/client/components/presentational/FilterComponent/filterComponent.js":
/*!*********************************************************************************!*\
  !*** ./src/client/components/presentational/FilterComponent/filterComponent.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _filterComponent_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterComponent.style */ \"./src/client/components/presentational/FilterComponent/filterComponent.style.js\");\n\n\n\n\n\nvar FilterComponent = function FilterComponent(_ref) {\n  var filterComp = _ref.filterComp;\n  var name = filterComp.name,\n      values = filterComp.values;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filterComponent_style__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    variant: \"h4\",\n    gutterBottom: true\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"checkbox-wrapper\"\n  }, values && values.length > 0 && values.map(function (_ref2) {\n    var label = _ref2.label,\n        checked = _ref2.checked;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: label,\n      className: \"checkbox-with-label\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      color: \"primary\",\n      checked: checked\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, label));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponent);\n\n//# sourceURL=webpack:///./src/client/components/presentational/FilterComponent/filterComponent.js?");

/***/ }),

/***/ "./src/client/components/presentational/FilterComponent/filterComponent.style.js":
/*!***************************************************************************************!*\
  !*** ./src/client/components/presentational/FilterComponent/filterComponent.style.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar FilterComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"filterComponentstyle__FilterComponentWrapper\",\n  componentId: \"sc-1gekodo-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"background-color:#f5f5f5;.checkbox-with-label{display:\\\"flex\\\";align-items:center;}@media (min-width:1280px){margin:0 1rem 1rem 0;}\"]);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterComponentWrapper);\n\n//# sourceURL=webpack:///./src/client/components/presentational/FilterComponent/filterComponent.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/Header/header.js":
/*!***************************************************************!*\
  !*** ./src/client/components/presentational/Header/header.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.style */ \"./src/client/components/presentational/Header/header.style.js\");\n\n\n\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_style__WEBPACK_IMPORTED_MODULE_2__[\"HeaderWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/users\"\n  }, \"Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/rick-morty\"\n  }, \"Rick Morty\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/components/presentational/Header/header.js?");

/***/ }),

/***/ "./src/client/components/presentational/Header/header.style.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/presentational/Header/header.style.js ***!
  \*********************************************************************/
/*! exports provided: HeaderWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderWrapper\", function() { return HeaderWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"headerstyle__HeaderWrapper\",\n  componentId: \"nc2mp2-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;max-width:1280px;margin:0 auto;a{margin-right:20px;text-decoration:none;}\"]);\n});\n\n//# sourceURL=webpack:///./src/client/components/presentational/Header/header.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCard/imageCard.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/presentational/ImageCard/imageCard.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _imageCard_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCard.style */ \"./src/client/components/presentational/ImageCard/imageCard.style.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar ImageCard = function ImageCard(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imageCard_style__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    item: true,\n    xs: 12,\n    lg: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    image: data.image,\n    title: data.name,\n    className: \"card-image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"STATUS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"SPECIES\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data.species)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"ORIGIN\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data.origin.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-status\"\n  }, \"LAST LOCATION\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-text-label\"\n  }, data.location.name))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCard);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCard/imageCard.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCard/imageCard.style.js":
/*!***************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCard/imageCard.style.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ImageCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"imageCardstyle__ImageCardWrapper\",\n  componentId: \"mbe01d-0\"\n})([\".card-image{height:0;padding-top:56.25%;}.MuiCardContent-root{background-color:rgba(0,0,0,0.65);}&.MuiGrid-item{margin-bottom:24px;}.MuiTypography-colorTextSecondary{display:flex;justify-content:space-between;align-items:center;color:#ffae42;font-size:18px;padding-bottom:8px;border-bottom:solid 1px rgba(191,191,191,0.35);margin-bottom:8px;.image-text-label{word-break:normal;text-align:end;}.image-text-status{color:#fff;}@media (min-width:1280px){font-size:12px;.image-text-status{max-width:95px;}}}@media (min-width:1280px){&.MuiGrid-item{margin-bottom:0;}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCardWrapper);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCard/imageCard.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js":
/*!*****************************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageCard_imageCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageCard/imageCard */ \"./src/client/components/presentational/ImageCard/imageCard.js\");\n/* harmony import */ var _ImageCardsContainer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCardsContainer.style */ \"./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js\");\n\n\n\n\nvar ImageCardsContainer = function ImageCardsContainer(_ref) {\n  var rickMortyData = _ref.rickMortyData;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageCardsContainer_style__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    spacing: 2\n  }, rickMortyData.map(function (data) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageCard_imageCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: data.id,\n      data: data\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCardsContainer);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js?");

/***/ }),

/***/ "./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js":
/*!***********************************************************************************************!*\
  !*** ./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar ImageCardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"ImageCardsContainerstyle__ImageCardsWrapper\",\n  componentId: \"rlaefd-0\"\n})([\"\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCardsWrapper);\n\n//# sourceURL=webpack:///./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.style.js?");

/***/ }),

/***/ "./src/client/components/presentational/RickMortyPresentational/RickMortyPresentational.js":
/*!*************************************************************************************************!*\
  !*** ./src/client/components/presentational/RickMortyPresentational/RickMortyPresentational.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar RickMortyPresentational = function RickMortyPresentational(_ref) {\n  var name = _ref.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, name);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RickMortyPresentational);\n\n//# sourceURL=webpack:///./src/client/components/presentational/RickMortyPresentational/RickMortyPresentational.js?");

/***/ }),

/***/ "./src/client/components/presentational/User/user.js":
/*!***********************************************************!*\
  !*** ./src/client/components/presentational/User/user.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.style */ \"./src/client/components/presentational/User/user.style.js\");\n\n\n\nvar User = function User(_ref) {\n  var name = _ref.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_style__WEBPACK_IMPORTED_MODULE_1__[\"UserWrapper\"], null, name);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/client/components/presentational/User/user.js?");

/***/ }),

/***/ "./src/client/components/presentational/User/user.style.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/presentational/User/user.style.js ***!
  \*****************************************************************/
/*! exports provided: UserWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserWrapper\", function() { return UserWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar UserWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"userstyle__UserWrapper\",\n  componentId: \"sc-12ll0gg-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:18px;font-weight:bold;\"]);\n});\n\n//# sourceURL=webpack:///./src/client/components/presentational/User/user.style.js?");

/***/ }),

/***/ "./src/client/components/templates/twocolumntemplate.js":
/*!**************************************************************!*\
  !*** ./src/client/components/templates/twocolumntemplate.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/presentational/FilterComponent/filterComponent */ \"./src/client/components/presentational/FilterComponent/filterComponent.js\");\n/* harmony import */ var _presentational_ImageCardsContainer_ImageCardsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presentational/ImageCardsContainer/ImageCardsContainer */ \"./src/client/components/presentational/ImageCardsContainer/ImageCardsContainer.js\");\n/* harmony import */ var _twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./twocolumntemplate.style */ \"./src/client/components/templates/twocolumntemplate.style.js\");\n\n\n\n\n\n\nvar TwoColumnTemplateLayout = function TwoColumnTemplateLayout(_ref) {\n  var rickMortyData = _ref.rickMortyData,\n      species = _ref.species,\n      gender = _ref.gender,\n      origin = _ref.origin;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__[\"LayoutContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__[\"LeftSection\"], {\n    item: true,\n    xs: 12,\n    lg: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterComp: species\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterComp: gender\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_presentational_FilterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    filterComp: origin\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_twocolumntemplate_style__WEBPACK_IMPORTED_MODULE_4__[\"RightSection\"], {\n    item: true,\n    xs: 12,\n    lg: 9\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_ImageCardsContainer_ImageCardsContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    rickMortyData: rickMortyData\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TwoColumnTemplateLayout);\n\n//# sourceURL=webpack:///./src/client/components/templates/twocolumntemplate.js?");

/***/ }),

/***/ "./src/client/components/templates/twocolumntemplate.style.js":
/*!********************************************************************!*\
  !*** ./src/client/components/templates/twocolumntemplate.style.js ***!
  \********************************************************************/
/*! exports provided: LayoutContainer, LeftSection, RightSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LayoutContainer\", function() { return LayoutContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftSection\", function() { return LeftSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightSection\", function() { return RightSection; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"twocolumntemplatestyle__LayoutContainer\",\n  componentId: \"tudenz-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"max-width:1280px;margin:0 auto;\"]);\n});\nvar LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"twocolumntemplatestyle__LeftSection\",\n  componentId: \"tudenz-1\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"\"]);\n});\nvar RightSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"twocolumntemplatestyle__RightSection\",\n  componentId: \"tudenz-2\"\n})([\"\"]);\n\n//# sourceURL=webpack:///./src/client/components/templates/twocolumntemplate.style.js?");

/***/ }),

/***/ "./src/client/pages/Home/home.js":
/*!***************************************!*\
  !*** ./src/client/pages/Home/home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.style */ \"./src/client/pages/Home/home.style.js\");\n\n\n\n\nvar Home = function Home() {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"##homeComp\");\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home_style__WEBPACK_IMPORTED_MODULE_2__[\"HomeComponentWrapper\"], {\n    className: \"home-warpper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is a very good Home Component\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: function onClick() {\n      return console.log(\"Click me\");\n    }\n  }, \"Click me\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/pages/Home/home.js?");

/***/ }),

/***/ "./src/client/pages/Home/home.style.js":
/*!*********************************************!*\
  !*** ./src/client/pages/Home/home.style.js ***!
  \*********************************************/
/*! exports provided: HomeComponentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeComponentWrapper\", function() { return HomeComponentWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar HomeComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"homestyle__HomeComponentWrapper\",\n  componentId: \"sc-1um2wi-0\"\n})([\"\", \";\"], function () {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"h1{color:red;}\"]);\n});\n\n//# sourceURL=webpack:///./src/client/pages/Home/home.style.js?");

/***/ }),

/***/ "./src/client/pages/RickMorty/rickMorty.js":
/*!*************************************************!*\
  !*** ./src/client/pages/RickMorty/rickMorty.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_containers_RickMortyContainer_rickMortyContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/containers/RickMortyContainer/rickMortyContainer */ \"./src/client/components/containers/RickMortyContainer/rickMortyContainer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _components_containers_RickMortyContainer_rickMortyContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/client/pages/RickMorty/rickMorty.js?");

/***/ }),

/***/ "./src/client/pages/UsersList/usersList.js":
/*!*************************************************!*\
  !*** ./src/client/pages/UsersList/usersList.js ***!
  \*************************************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_presentational_User_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/presentational/User/user */ \"./src/client/components/presentational/User/user.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\n\n\n\n\n\nvar UsersList = function UsersList(_ref) {\n  var users = _ref.users,\n      fetchUsers = _ref.fetchUsers;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetchUsers();\n  }, []);\n\n  var _users = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(users, 1),\n      usersData = _users[0];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Here's a list of users.\"), usersData === null || usersData === void 0 ? void 0 : usersData.map(function (_ref2) {\n    var id = _ref2.id,\n        name = _ref2.name;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_User_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      name: name\n    });\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(_ref3) {\n  var users = _ref3.users;\n  return {\n    users: users\n  };\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"])());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n    fetchUsers: _actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"]\n  })(UsersList),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/client/pages/UsersList/usersList.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n/* harmony import */ var _rickMortyReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rickMortyReducer */ \"./src/client/reducers/rickMortyReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  rickMorty: _rickMortyReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/rickMortyReducer.js":
/*!*************************************************!*\
  !*** ./src/client/reducers/rickMortyReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/client/actions/actionTypes.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    showData: null,\n    showDataError: null\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_RICKY_MORTY_DATA_SUCCESS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showData: action.payload.data,\n        showDataError: null\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_RICKY_MORTY_DATA_FAIL\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showData: null,\n        showDataError: payload.error\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/rickMortyReducer.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/client/actions/actionTypes.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_USERS\"]:\n      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [action.payload.data]);\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var middlwares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/components/Routes/routes */ \"./src/client/components/Routes/routes.js\");\n/* harmony import */ var _client_components_presentational_Header_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/components/presentational/Header/header */ \"./src/client/components/presentational/Header/header.js\");\n\n\n\n\n\n\n\n\n\n\nvar renderer = function renderer(req, store) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_4__[\"ServerStyleSheet\"]();\n  var MUISheet = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"ServerStyleSheets\"](); // Styled component server style sheet collection\n\n  var styledCollect = sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_components_presentational_Header_header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])))); // Injecting Material UI styles to server\n\n  var MUISheetCollect = MUISheet.collect(styledCollect); // Render the content on server\n\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(MUISheetCollect);\n  var MUISTYLES = MUISheet.toString(); // Styled component styles\n\n  var styles = sheet.getStyleTags();\n  return \"<html>\\n            <head>\\n                <title>React Server Side Application</title>\\n                <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\\\" />\\n                <style>\\n                body {\\n                  font-family: 'Roboto', sans-serif;\\n                }\\n                </style>\\n                <style id=\\\"jss-server-side\\\">\".concat(MUISTYLES, \"</style>\\n                \").concat(styles, \"\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\">\").concat(content, \"</div>\\n                <script>\\n                  window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()), \"\\n                </script>\\n                <script src=\\\"bundle.js\\\"></script>\\n            </body>\\n            </html>\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n/* harmony import */ var _client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/components/Routes/routes */ \"./src/client/components/Routes/routes.js\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = 8000; // Declare public directory\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"public\")); // Home route\n\napp.get(\"*\", function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"matchRoutes\"])(_client_components_Routes_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function (state) {\n    res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, store));\n  });\n});\napp.listen(PORT, function () {\n  return console.log(\"Server is running on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getAllFilterValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllFilterValues\", function() { return getAllFilterValues; });\nvar getAllFilterValues = function getAllFilterValues(input, fieldToFilter, subField) {\n  var output = input.reduce(function (acc, item) {\n    var itemToBeFiltered = subField ? item[fieldToFilter][subField] : item[fieldToFilter];\n\n    if (!acc.some(function (item) {\n      return (item === null || item === void 0 ? void 0 : item.label) === itemToBeFiltered;\n    })) {\n      acc.push({\n        label: itemToBeFiltered,\n        checked: true\n      });\n    }\n\n    return acc;\n  }, []);\n  return {\n    name: fieldToFilter,\n    values: output\n  };\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Checkbox\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Checkbox%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });