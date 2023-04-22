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
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    movies = _useState2[0],
    setMovies = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)('recent'),
    _useState6 = _slicedToArray(_useState5, 2),
    orderBy = _useState6[0],
    setOrderBy = _useState6[1]; // default 'recent'
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    genres = _useState8[0],
    setGenres = _useState8[1]; // tutti i generi
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedGenre = _useState10[0],
    setSelectedGenre = _useState10[1]; //valore del genere per filtro categoria

  var fetchMovies = function fetchMovies() {
    setLoading(true);
    var handleSubmit = function handleSubmit(event) {
      event.preventDefault();
      return fetch("/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          genre_id: selectedGenre
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setMovies(data.movies);
      });
    };
    return fetch('/api/movies').then(function (response) {
      return response.json();
    }).then(function (data) {
      setMovies(data.movies); // set dei movie
      setLoading(false);
    });
  };
  var fetchGenres = function fetchGenres() {
    setLoading(true);
    return fetch('/api/genres').then(function (response) {
      return response.json();
    }).then(function (data) {
      setGenres(data.genres); // set dei generi
      console.log(data.genres);
      setLoading(false);
    });
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/movies?genre_id=".concat(selectedGenre)).then(function (response) {
      return response.json();
    }).then(function (data) {
      setMovies(data.movies);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    fetchMovies();
    fetchGenres();
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(Heading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex justify-center mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_25__.Button, {
    onClick: function onClick() {
      return setOrderBy('recent');
    },
    variant: orderBy === 'recent' ? 'primary' : 'outline-primary',
    className: "mx-2"
  }, "Pi\xF9 recenti"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_25__.Button, {
    onClick: function onClick() {
      return setOrderBy('rating');
    },
    variant: orderBy === 'rating' ? 'primary' : 'outline-primary',
    className: "mx-2"
  }, "Per rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-wrap justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("select", {
    name: "genre_id",
    value: selectedGenre,
    onChange: function onChange(event) {
      return setSelectedGenre(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
    value: ""
  }, "Tutti i generi"), genres.map(function (genre) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("option", {
      key: genre.id,
      value: genre.id
    }, genre.value);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("button", {
    type: "submit",
    className: "ml-2 px-4 py-2 rounded-md text-white ".concat(selectedGenre ? 'bg-green-500' : 'bg-gray-400'),
    disabled: !selectedGenre
  }, "Filtra per genere")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(MovieList, {
    loading: loading
  }, sortedMovies.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(MovieItem, _extends({
      key: key
    }, item));
  })));
};

// torna alla view il layout per tutta l'applicazione
var Layout = function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  }, props.children));
};

// torna alla view l'header con titolo e paragrafo
var Heading = function Heading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "mx-auto max-w-screen-sm text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h1", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
  }, "Movie Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400"
  }, "Explore the whole collection of movies"));
};

// nel caso in cui la pagina dovesse perdere del tempo a caricare mostra uno spinner
var MovieList = function MovieList(props) {
  if (props.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_25__.Spinner, {
      size: "xl"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3"
  }, props.children);
};

// torna alla view le card contenente i dati dinamici
var MovieItem = function MovieItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("img", {
    className: "object-cover w-full h-60 md:h-80",
    src: props.image,
    alt: props.title,
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "grow flex flex-col h-full p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "grow mb-3 last:mb-0"
  }, props.year || props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "flex justify-between align-middle text-gray-900 text-xs font-medium mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", null, props.year), props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_25__.Rating, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_25__.Rating.Star, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
    className: "ml-0.5"
  }, props.rating)) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h3", {
    className: "text-gray-900 text-lg leading-tight font-semibold mb-1"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "text-gray-600 text-sm leading-normal mb-4 last:mb-0"
  }, props.plot.substr(0, 80), "...")), props.wikipedia_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_25__.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvSW5kZXgnO1xuXG5pbXBvcnQgJy4vYXBwLmNzcyc7XG5cbmNvbnN0IEFwcCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxJbmRleCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59O1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFJhdGluZywgU3Bpbm5lciB9IGZyb20gJ2Zsb3diaXRlLXJlYWN0JztcblxuXG4vLyB0b3JuYSBsJ2VsZW5jbyBkZWkgZmlsbSBkYWxsJ2FwaSBlIGxpIGZpbHRyYSBwZXIgcmF0aW5nIGUgcmVjZW50aVxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgncmVjZW50Jyk7IC8vIGRlZmF1bHQgJ3JlY2VudCdcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gdHV0dGkgaSBnZW5lcmlcbiAgY29uc3QgW3NlbGVjdGVkR2VucmUsIHNldFNlbGVjdGVkR2VucmVdID0gdXNlU3RhdGUoJycpOyAvL3ZhbG9yZSBkZWwgZ2VuZXJlIHBlciBmaWx0cm8gY2F0ZWdvcmlhXG5cblxuICBjb25zdCBmZXRjaE1vdmllcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgcmV0dXJuIGZldGNoKFwiL2FwaS9tb3ZpZXNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZ2VucmVfaWQ6IHNlbGVjdGVkR2VucmUgfSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRNb3ZpZXMoZGF0YS5tb3ZpZXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21vdmllcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0TW92aWVzKGRhdGEubW92aWVzKTsgLy8gc2V0IGRlaSBtb3ZpZVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuXG5cbiAgfTtcblxuICBjb25zdCBmZXRjaEdlbnJlcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2dlbnJlcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0R2VucmVzKGRhdGEuZ2VucmVzKTsgLy8gc2V0IGRlaSBnZW5lcmlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5nZW5yZXMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIGZldGNoKGAvYXBpL21vdmllcz9nZW5yZV9pZD0ke3NlbGVjdGVkR2VucmV9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRNb3ZpZXMoZGF0YS5tb3ZpZXMpO1xuICAgICAgfSk7XG4gIH07XG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaE1vdmllcygpO1xuICAgIGZldGNoR2VucmVzKCk7XG4gIH0sIFtdKTtcblxuXG4gIC8vIGZ1bnppb25lIGRpIG9yZGluYW1lbnRvXG4gIGNvbnN0IHNvcnRNb3ZpZXMgPSAoYSwgYikgPT4ge1xuICAgIGlmIChvcmRlckJ5ID09PSAncmVjZW50Jykge1xuICAgICAgLy8gb3JkaW5hIHBlciBkYXRhIGRpIHVzY2l0YSBwacO5IHJlY2VudGVcbiAgICAgIHJldHVybiBuZXcgRGF0ZShiLnJlbGVhc2VfZGF0ZSkgLSBuZXcgRGF0ZShhLnJlbGVhc2VfZGF0ZSk7XG4gICAgfSBlbHNlIGlmIChvcmRlckJ5ID09PSAncmF0aW5nJykge1xuICAgICAgLy8gb3JkaW5hIHBlciB2YWx1dGF6aW9uZSwgcGnDuSBhbHRhIHByaW1hXG4gICAgICByZXR1cm4gYi5yYXRpbmcgLSBhLnJhdGluZztcbiAgICB9XG4gIH07XG5cblxuICAvLyBvcmRpbmEgaSBmaWxtIGluIGJhc2UgYWxsJ29yZGluZSBjb3JyZW50ZVxuICBjb25zdCBzb3J0ZWRNb3ZpZXMgPSBbLi4ubW92aWVzXS5zb3J0KHNvcnRNb3ZpZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkaW5nIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcmRlckJ5KCdyZWNlbnQnKX1cbiAgICAgICAgICB2YXJpYW50PXtvcmRlckJ5ID09PSAncmVjZW50JyA/ICdwcmltYXJ5JyA6ICdvdXRsaW5lLXByaW1hcnknfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTJcIlxuICAgICAgICA+XG4gICAgICAgICAgUGnDuSByZWNlbnRpXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcmRlckJ5KCdyYXRpbmcnKX1cbiAgICAgICAgICB2YXJpYW50PXtvcmRlckJ5ID09PSAncmF0aW5nJyA/ICdwcmltYXJ5JyA6ICdvdXRsaW5lLXByaW1hcnknfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTJcIlxuICAgICAgICA+XG4gICAgICAgICAgUGVyIHJhdGluZ1xuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXInPlxuXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJnZW5yZV9pZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnJlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWxlY3RlZEdlbnJlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5UdXR0aSBpIGdlbmVyaTwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Z2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z2VucmUuaWR9IHZhbHVlPXtnZW5yZS5pZH0+XG4gICAgICAgICAgICAgICAgICB7Z2VucmUudmFsdWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTIgcHgtNCBweS0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEdlbnJlID8gJ2JnLWdyZWVuLTUwMCcgOiAnYmctZ3JheS00MDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRHZW5yZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGaWx0cmEgcGVyIGdlbmVyZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8TW92aWVMaXN0IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICB7c29ydGVkTW92aWVzLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgPE1vdmllSXRlbSBrZXk9e2tleX0gey4uLml0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Nb3ZpZUxpc3Q+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5cbi8vIHRvcm5hIGFsbGEgdmlldyBpbCBsYXlvdXQgcGVyIHR1dHRhIGwnYXBwbGljYXppb25lXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC00IG14LWF1dG8gbWF4LXctc2NyZWVuLXhsIGxnOnB5LTE2IGxnOnB4LTZcIj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5cbi8vIHRvcm5hIGFsbGEgdmlldyBsJ2hlYWRlciBjb24gdGl0b2xvIGUgcGFyYWdyYWZvXG5jb25zdCBIZWFkaW5nID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tc20gdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIE1vdmllIENvbGxlY3Rpb25cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGxnOm1iLTggc206dGV4dC14bCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIEV4cGxvcmUgdGhlIHdob2xlIGNvbGxlY3Rpb24gb2YgbW92aWVzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuXG4vLyBuZWwgY2FzbyBpbiBjdWkgbGEgcGFnaW5hIGRvdmVzc2UgcGVyZGVyZSBkZWwgdGVtcG8gYSBjYXJpY2FyZSBtb3N0cmEgdW5vIHNwaW5uZXJcbmNvbnN0IE1vdmllTGlzdCA9IHByb3BzID0+IHtcbiAgICBpZiAocHJvcHMubG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdhcC15LTggeGw6Z3JpZC1jb2xzLTYgbGc6Z3JpZC1jb2xzLTQgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5cbi8vIHRvcm5hIGFsbGEgdmlldyBsZSBjYXJkIGNvbnRlbmVudGUgaSBkYXRpIGRpbmFtaWNpXG5jb25zdCBNb3ZpZUl0ZW0gPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1sZyBzaGFkb3ctbWQgbGc6bWF4LXctc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLTYwIG1kOmgtODBcIlxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGZsZXggZmxleC1jb2wgaC1mdWxsIHAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IG1iLTMgbGFzdDptYi0wXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy55ZWFyIHx8IHByb3BzLnJhdGluZ1xuICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGUgdGV4dC1ncmF5LTkwMCB0ZXh0LXhzIGZvbnQtbWVkaXVtIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnllYXJ9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICA/IDxSYXRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmcuU3RhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmF0aW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtbGcgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkIG1iLTFcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG1iLTQgbGFzdDptYi0wXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLnBsb3Quc3Vic3RyKDAsIDgwKX0uLi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtwcm9wcy53aWtpcGVkaWFfdXJsXG4gICAgICAgICAgICAgID8gPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHByb3BzLndpa2lwZWRpYV91cmwsICdfYmxhbmsnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBNb3JlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkluZGV4IiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU3RyaWN0TW9kZSIsInBhdGgiLCJlbGVtZW50Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJSYXRpbmciLCJTcGlubmVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibW92aWVzIiwic2V0TW92aWVzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImdlbnJlcyIsInNldEdlbnJlcyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsInNlbGVjdGVkR2VucmUiLCJzZXRTZWxlY3RlZEdlbnJlIiwiZmV0Y2hNb3ZpZXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZW5yZV9pZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmV0Y2hHZW5yZXMiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0Iiwic29ydE1vdmllcyIsImEiLCJiIiwiRGF0ZSIsInJlbGVhc2VfZGF0ZSIsInJhdGluZyIsInNvcnRlZE1vdmllcyIsIl90b0NvbnN1bWFibGVBcnJheSIsInNvcnQiLCJMYXlvdXQiLCJIZWFkaW5nIiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnQiLCJvblN1Ym1pdCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibWFwIiwiZ2VucmUiLCJrZXkiLCJpZCIsInR5cGUiLCJkaXNhYmxlZCIsIk1vdmllTGlzdCIsIml0ZW0iLCJNb3ZpZUl0ZW0iLCJfZXh0ZW5kcyIsImNoaWxkcmVuIiwic2l6ZSIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJ5ZWFyIiwiU3RhciIsInBsb3QiLCJzdWJzdHIiLCJ3aWtpcGVkaWFfdXJsIiwiY29sb3IiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==