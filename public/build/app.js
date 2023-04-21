"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Index */ "./assets/components/Index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./assets/app.css");





var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./assets/components/Index.js":
/*!************************************!*\
  !*** ./assets/components/Index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// torna l'elenco dei film dall'api e li filtra per rating e recenti
var Index = function Index(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    movies = _useState2[0],
    setMovies = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)('recent'),
    _useState6 = _slicedToArray(_useState5, 2),
    orderBy = _useState6[0],
    setOrderBy = _useState6[1]; // default to 'recent'

  var fetchMovies = function fetchMovies() {
    setLoading(true);
    return fetch('/api/movies').then(function (response) {
      return response.json();
    }).then(function (data) {
      setMovies(data.movies);
      setLoading(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    fetchMovies();
  }, []);

  // funzione di ordinamento
  var sortMovies = function sortMovies(a, b) {
    if (orderBy === 'recent') {
      // ordina per data di uscita più recente
      return new Date(b.release_date) - new Date(a.release_date);
    } else if (orderBy === 'rating') {
      // ordina per valutazione, più alta prima
      return b.rating - a.rating;
    }
  };

  // ordina i film in base all'ordine corrente
  var sortedMovies = _toConsumableArray(movies).sort(sortMovies);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(Heading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "flex justify-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Button, {
    onClick: function onClick() {
      return setOrderBy('recent');
    },
    variant: orderBy === 'recent' ? 'primary' : 'outline-primary',
    className: "mx-2"
  }, "Pi\xF9 recenti"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Button, {
    onClick: function onClick() {
      return setOrderBy('rating');
    },
    variant: orderBy === 'rating' ? 'primary' : 'outline-primary',
    className: "mx-2"
  }, "Per rating")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(MovieList, {
    loading: loading
  }, sortedMovies.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(MovieItem, _extends({
      key: key
    }, item));
  })));
};

// torna alla view il layout per tutta l'applicazione
var Layout = function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  }, props.children));
};

// torna alla view l'header con titolo e paragrafo
var Heading = function Heading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "mx-auto max-w-screen-sm text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("h1", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
  }, "Movie Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("p", {
    className: "font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400"
  }, "Explore the whole collection of movies"));
};

// nel caso in cui la pagina dovesse perdere del tempo a caricare mostra uno spinner
var MovieList = function MovieList(props) {
  if (props.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Spinner, {
      size: "xl"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3"
  }, props.children);
};

// torna alla view le card contenente i dati dinamici
var MovieItem = function MovieItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("img", {
    className: "object-cover w-full h-60 md:h-80",
    src: props.image,
    alt: props.title,
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grow flex flex-col h-full p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grow mb-3 last:mb-0"
  }, props.year || props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "flex justify-between align-middle text-gray-900 text-xs font-medium mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("span", null, props.year), props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Rating, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Rating.Star, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("span", {
    className: "ml-0.5"
  }, props.rating)) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("h3", {
    className: "text-gray-900 text-lg leading-tight font-semibold mb-1"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("p", {
    className: "text-gray-600 text-sm leading-normal mb-4 last:mb-0"
  }, props.plot.substr(0, 80), "...")), props.wikipedia_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Button, {
    color: "light",
    size: "xs",
    className: "w-full",
    onClick: function onClick() {
      return window.open(props.wikipedia_url, '_blank');
    }
  }, "More") : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./assets/app.css":
/*!************************!*\
  !*** ./assets/app.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-46244d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T08sS0FBSyxDQUFDNEQsSUFBSSxDQUFRLEVBRXhCNUQsS0FBSyxDQUFDdUMsTUFBTSxnQkFDVDlDLDJEQUFBLENBQUNvQixtREFBTSxxQkFDTHBCLDJEQUFBLENBQUNvQix3REFBVyxPQUFHLGVBRWZwQiwyREFBQTtJQUFNb0QsU0FBUyxFQUFDO0VBQVEsR0FDckI3QyxLQUFLLENBQUN1QyxNQUFNLENBQ1IsQ0FDQSxHQUNULElBQUksQ0FFSixHQUNOLElBQUksZUFHUjlDLDJEQUFBO0lBQUlvRCxTQUFTLEVBQUM7RUFBd0QsR0FDbkU3QyxLQUFLLENBQUMyRCxLQUFLLENBQ1QsZUFFTGxFLDJEQUFBO0lBQUdvRCxTQUFTLEVBQUM7RUFBcUQsR0FDL0Q3QyxLQUFLLENBQUM4RCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FDNUIsQ0FBSSxDQUNBLEVBRUwvRCxLQUFLLENBQUNnRSxhQUFhLGdCQUNoQnZFLDJEQUFBLENBQUNtQixtREFBTTtJQUNMcUQsS0FBSyxFQUFDLE9BQU87SUFDYlYsSUFBSSxFQUFDLElBQUk7SUFDVFYsU0FBUyxFQUFDLFFBQVE7SUFDbEJDLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTW9CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbkUsS0FBSyxDQUFDZ0UsYUFBYSxFQUFFLFFBQVEsQ0FBQztJQUFBO0VBQUMsR0FDM0QsTUFFRCxDQUFTLEdBQ1QsSUFBSSxDQUVKLENBQ0Y7QUFFZCxDQUFDO0FBRUQsaUVBQWVsRSxLQUFLOzs7Ozs7Ozs7OztBQ2pMcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9JbmRleCc7XG5cbmltcG9ydCAnLi9hcHAuY3NzJztcblxuY29uc3QgQXBwID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEluZGV4IC8+fSAvPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgKTtcbn07XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgUmF0aW5nLCBTcGlubmVyIH0gZnJvbSAnZmxvd2JpdGUtcmVhY3QnO1xuXG5cbi8vIHRvcm5hIGwnZWxlbmNvIGRlaSBmaWxtIGRhbGwnYXBpIGUgbGkgZmlsdHJhIHBlciByYXRpbmcgZSByZWNlbnRpXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IHVzZVN0YXRlKCdyZWNlbnQnKTsgLy8gZGVmYXVsdCB0byAncmVjZW50J1xuXG4gIGNvbnN0IGZldGNoTW92aWVzID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvbW92aWVzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRNb3ZpZXMoZGF0YS5tb3ZpZXMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG5cbiAgLy8gZnVuemlvbmUgZGkgb3JkaW5hbWVudG9cbiAgY29uc3Qgc29ydE1vdmllcyA9IChhLCBiKSA9PiB7XG4gICAgaWYgKG9yZGVyQnkgPT09ICdyZWNlbnQnKSB7XG4gICAgICAvLyBvcmRpbmEgcGVyIGRhdGEgZGkgdXNjaXRhIHBpw7kgcmVjZW50ZVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGIucmVsZWFzZV9kYXRlKSAtIG5ldyBEYXRlKGEucmVsZWFzZV9kYXRlKTtcbiAgICB9IGVsc2UgaWYgKG9yZGVyQnkgPT09ICdyYXRpbmcnKSB7XG4gICAgICAvLyBvcmRpbmEgcGVyIHZhbHV0YXppb25lLCBwacO5IGFsdGEgcHJpbWFcbiAgICAgIHJldHVybiBiLnJhdGluZyAtIGEucmF0aW5nO1xuICAgIH1cbiAgfTtcblxuXG4gIC8vIG9yZGluYSBpIGZpbG0gaW4gYmFzZSBhbGwnb3JkaW5lIGNvcnJlbnRlXG4gIGNvbnN0IHNvcnRlZE1vdmllcyA9IFsuLi5tb3ZpZXNdLnNvcnQoc29ydE1vdmllcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRpbmcgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLThcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9yZGVyQnkoJ3JlY2VudCcpfVxuICAgICAgICAgIHZhcmlhbnQ9e29yZGVyQnkgPT09ICdyZWNlbnQnID8gJ3ByaW1hcnknIDogJ291dGxpbmUtcHJpbWFyeSd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtMlwiXG4gICAgICAgID5cbiAgICAgICAgICBQacO5IHJlY2VudGlcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9yZGVyQnkoJ3JhdGluZycpfVxuICAgICAgICAgIHZhcmlhbnQ9e29yZGVyQnkgPT09ICdyYXRpbmcnID8gJ3ByaW1hcnknIDogJ291dGxpbmUtcHJpbWFyeSd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtMlwiXG4gICAgICAgID5cbiAgICAgICAgICBQZXIgcmF0aW5nXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNb3ZpZUxpc3QgbG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgIHtzb3J0ZWRNb3ZpZXMubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICA8TW92aWVJdGVtIGtleT17a2V5fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L01vdmllTGlzdD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblxuLy8gdG9ybmEgYWxsYSB2aWV3IGlsIGxheW91dCBwZXIgdHV0dGEgbCdhcHBsaWNhemlvbmVcbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTQgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgbGc6cHktMTYgbGc6cHgtNlwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cblxuLy8gdG9ybmEgYWxsYSB2aWV3IGwnaGVhZGVyIGNvbiB0aXRvbG8gZSBwYXJhZ3JhZm9cbmNvbnN0IEhlYWRpbmcgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1zbSB0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgTW92aWUgQ29sbGVjdGlvblxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbGc6bWItOCBzbTp0ZXh0LXhsIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgRXhwbG9yZSB0aGUgd2hvbGUgY29sbGVjdGlvbiBvZiBtb3ZpZXNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5cbi8vIG5lbCBjYXNvIGluIGN1aSBsYSBwYWdpbmEgZG92ZXNzZSBwZXJkZXJlIGRlbCB0ZW1wbyBhIGNhcmljYXJlIG1vc3RyYSB1bm8gc3Bpbm5lclxuY29uc3QgTW92aWVMaXN0ID0gcHJvcHMgPT4ge1xuICAgIGlmIChwcm9wcy5sb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbWQ6Z2FwLXktOCB4bDpncmlkLWNvbHMtNiBsZzpncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuLy8gdG9ybmEgYWxsYSB2aWV3IGxlIGNhcmQgY29udGVuZW50ZSBpIGRhdGkgZGluYW1pY2lcbmNvbnN0IE1vdmllSXRlbSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWxnIHNoYWRvdy1tZCBsZzptYXgtdy1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Jvd1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtNjAgbWQ6aC04MFwiXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgZmxleCBmbGV4LWNvbCBoLWZ1bGwgcC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgbWItMyBsYXN0Om1iLTBcIj5cbiAgICAgICAgICAgICAge3Byb3BzLnllYXIgfHwgcHJvcHMucmF0aW5nXG4gICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLW1pZGRsZSB0ZXh0LWdyYXktOTAwIHRleHQteHMgZm9udC1tZWRpdW0gbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMueWVhcn08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgID8gPFJhdGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZy5TdGFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYXRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGQgbWItMVwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbGVhZGluZy1ub3JtYWwgbWItNCBsYXN0Om1iLTBcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMucGxvdC5zdWJzdHIoMCwgODApfS4uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3Byb3BzLndpa2lwZWRpYV91cmxcbiAgICAgICAgICAgICAgPyA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvcHMud2lraXBlZGlhX3VybCwgJ19ibGFuaycpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1vcmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSW5kZXgiLCJBcHAiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJTdHJpY3RNb2RlIiwicGF0aCIsImVsZW1lbnQiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlJhdGluZyIsIlNwaW5uZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsImZldGNoTW92aWVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNvcnRNb3ZpZXMiLCJhIiwiYiIsIkRhdGUiLCJyZWxlYXNlX2RhdGUiLCJyYXRpbmciLCJzb3J0ZWRNb3ZpZXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzb3J0IiwiTGF5b3V0IiwiSGVhZGluZyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiTW92aWVMaXN0IiwibWFwIiwiaXRlbSIsImtleSIsIk1vdmllSXRlbSIsIl9leHRlbmRzIiwiY2hpbGRyZW4iLCJzaXplIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsInllYXIiLCJTdGFyIiwicGxvdCIsInN1YnN0ciIsIndpa2lwZWRpYV91cmwiLCJjb2xvciIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9