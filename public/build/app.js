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
        setLoading(false);
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
    className: "ml-2 px-4 py-2 rounded-md text-white ".concat(selectedGenre ? 'bg-green-500' : 'bg-gray-400')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFDd0I7QUFFekI7QUFFcEI7QUFFbkIsSUFBTU0sR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUdDLEtBQUssRUFBSTtFQUNqQixvQkFDSVAsMERBQUEsQ0FBQ0EseURBQWdCLHFCQUNmQSwwREFBQSxDQUFDRSwyREFBYSxxQkFDWkYsMERBQUEsQ0FBQ0csb0RBQU0scUJBQ0xILDBEQUFBLENBQUNJLG1EQUFLO0lBQUNNLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRVgsMERBQUEsQ0FBQ0sseURBQUs7RUFBSSxFQUFHLENBQy9CLENBQ0ssQ0FDQztBQUUzQixDQUFDO0FBRUQsSUFBTU8sSUFBSSxHQUFHWCx3REFBbUIsQ0FBQ2EsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakVILElBQUksQ0FBQ0ksTUFBTSxlQUFDaEIsMERBQUEsQ0FBQ00sR0FBRyxPQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQitCO0FBQ007O0FBR3pEO0FBQ0EsSUFBTUQsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUdFLEtBQUssRUFBSTtFQUNyQixJQUFBZSxTQUFBLEdBQTRCSixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFqQ0csTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUN4QixJQUFBSSxVQUFBLEdBQThCVCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFyQ0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQThCYixnREFBUSxDQUFDLFFBQVEsQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF6Q0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQSxJQUF1QixDQUFDO0VBQ2xELElBQUFHLFVBQUEsR0FBNEJqQixnREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBa0IsVUFBQSxHQUFBWixjQUFBLENBQUFXLFVBQUE7SUFBakNFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUEsSUFBaUIsQ0FBQztFQUMxQyxJQUFBRyxVQUFBLEdBQTBDckIsZ0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXNCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUEvQ0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBLElBQWlCLENBQUM7O0VBR3hELElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDeEJiLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEIsSUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLEtBQUssRUFBSztNQUM5QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7TUFFdEIsT0FBT0MsS0FBSyxDQUFDLGFBQWEsRUFBRTtRQUMxQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQ1AsY0FBYyxFQUFFO1FBQ2xCLENBQUM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUFFQyxRQUFRLEVBQUVaO1FBQWMsQ0FBQztNQUNsRCxDQUFDLENBQUMsQ0FDQ2EsSUFBSSxDQUFDLFVBQUNDLFFBQVE7UUFBQSxPQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFDRyxJQUFJLEVBQUs7UUFDZC9CLFNBQVMsQ0FBQytCLElBQUksQ0FBQ2hDLE1BQU0sQ0FBQztRQUN0QkssVUFBVSxDQUFDLEtBQUssQ0FBQztNQUNuQixDQUFDLENBQUM7SUFDTixDQUFDO0lBR0QsT0FBT2lCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FDeEJPLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQUcsSUFBSSxFQUFJO01BQ1ovQixTQUFTLENBQUMrQixJQUFJLENBQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ3hCSyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsQ0FBQztFQUdOLENBQUM7RUFFRCxJQUFNNEIsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN4QjVCLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFFaEIsT0FBT2lCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FDeEJPLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQUcsSUFBSSxFQUFJO01BQ1puQixTQUFTLENBQUNtQixJQUFJLENBQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ3hCc0IsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQ3BCLE1BQU0sQ0FBQztNQUN4QlAsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLEtBQUssRUFBSztJQUM5QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFFdEJDLEtBQUsseUJBQUFjLE1BQUEsQ0FBeUJwQixhQUFhLEVBQUcsQ0FDM0NhLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQUcsSUFBSSxFQUFJO01BQ1ovQixTQUFTLENBQUMrQixJQUFJLENBQUNoQyxNQUFNLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUdEUixpREFBUyxDQUFDLFlBQU07SUFDZDBCLFdBQVcsRUFBRTtJQUNiZSxXQUFXLEVBQUU7RUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUdOO0VBQ0EsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO0lBQzNCLElBQUkvQixPQUFPLEtBQUssUUFBUSxFQUFFO01BQ3hCO01BQ0EsT0FBTyxJQUFJZ0MsSUFBSSxDQUFDRCxDQUFDLENBQUNFLFlBQVksQ0FBQyxHQUFHLElBQUlELElBQUksQ0FBQ0YsQ0FBQyxDQUFDRyxZQUFZLENBQUM7SUFDNUQsQ0FBQyxNQUFNLElBQUlqQyxPQUFPLEtBQUssUUFBUSxFQUFFO01BQy9CO01BQ0EsT0FBTytCLENBQUMsQ0FBQ0csTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQU07SUFDNUI7RUFDRixDQUFDOztFQUdEO0VBQ0EsSUFBTUMsWUFBWSxHQUFHQyxrQkFBQSxDQUFJNUMsTUFBTSxFQUFFNkMsSUFBSSxDQUFDUixVQUFVLENBQUM7RUFFakQsb0JBQ0U5RCwyREFBQSxDQUFDdUUsTUFBTSxxQkFDTHZFLDJEQUFBLENBQUN3RSxPQUFPLE9BQUcsZUFFWHhFLDJEQUFBO0lBQUt5RSxTQUFTLEVBQUM7RUFBMEIsZ0JBQ3ZDekUsMkRBQUEsQ0FBQ21CLG1EQUFNO0lBQ0x1RCxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU14QyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQUEsQ0FBQztJQUNwQ3lDLE9BQU8sRUFBRTFDLE9BQU8sS0FBSyxRQUFRLEdBQUcsU0FBUyxHQUFHLGlCQUFrQjtJQUM5RHdDLFNBQVMsRUFBQztFQUFNLEdBQ2pCLGdCQUVELENBQVMsZUFFVHpFLDJEQUFBLENBQUNtQixtREFBTTtJQUNMdUQsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNeEMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUFBLENBQUM7SUFDcEN5QyxPQUFPLEVBQUUxQyxPQUFPLEtBQUssUUFBUSxHQUFHLFNBQVMsR0FBRyxpQkFBa0I7SUFDOUR3QyxTQUFTLEVBQUM7RUFBTSxHQUNqQixZQUVELENBQVMsZUFFVHpFLDJEQUFBO0lBQUt5RSxTQUFTLEVBQUM7RUFBK0IsZ0JBRTVDekUsMkRBQUE7SUFBTTRFLFFBQVEsRUFBRWhDO0VBQWEsZ0JBQzNCNUMsMkRBQUE7SUFDRTZFLElBQUksRUFBQyxVQUFVO0lBQ2ZDLEtBQUssRUFBRXJDLGFBQWM7SUFDckJzQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ2xDLEtBQUs7TUFBQSxPQUFLSCxnQkFBZ0IsQ0FBQ0csS0FBSyxDQUFDbUMsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLGdCQUUxRDlFLDJEQUFBO0lBQVE4RSxLQUFLLEVBQUM7RUFBRSxHQUFDLGdCQUFjLENBQVMsRUFDdkN6QyxNQUFNLENBQUM0QyxHQUFHLENBQUMsVUFBQ0MsS0FBSztJQUFBLG9CQUNoQmxGLDJEQUFBO01BQVFtRixHQUFHLEVBQUVELEtBQUssQ0FBQ0UsRUFBRztNQUFDTixLQUFLLEVBQUVJLEtBQUssQ0FBQ0U7SUFBRyxHQUNwQ0YsS0FBSyxDQUFDSixLQUFLLENBQ0w7RUFBQSxDQUNWLENBQUMsQ0FDSyxlQUNUOUUsMkRBQUE7SUFDQXFGLElBQUksRUFBQyxRQUFRO0lBQ2JaLFNBQVMsMENBQUFaLE1BQUEsQ0FDUHBCLGFBQWEsR0FBRyxjQUFjLEdBQUcsYUFBYTtFQUM3QyxHQUVKLG1CQUVELENBQVMsQ0FDRixDQUVILENBRUYsZUFFTnpDLDJEQUFBLENBQUNzRixTQUFTO0lBQUN6RCxPQUFPLEVBQUVBO0VBQVEsR0FDekJ1QyxZQUFZLENBQUNhLEdBQUcsQ0FBQyxVQUFDTSxJQUFJLEVBQUVKLEdBQUc7SUFBQSxvQkFDMUJuRiwyREFBQSxDQUFDd0YsU0FBUyxFQUFBQyxRQUFBO01BQUNOLEdBQUcsRUFBRUE7SUFBSSxHQUFLSSxJQUFJLEVBQUk7RUFBQSxDQUNsQyxDQUFDLENBQ1EsQ0FDTDtBQUViLENBQUM7O0FBR0Q7QUFDQSxJQUFNaEIsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUdoRSxLQUFLLEVBQUk7RUFDcEIsb0JBQ0lQLDJEQUFBO0lBQVN5RSxTQUFTLEVBQUM7RUFBMkIsZ0JBQzVDekUsMkRBQUE7SUFBS3lFLFNBQVMsRUFBQztFQUFvRCxHQUNoRWxFLEtBQUssQ0FBQ21GLFFBQVEsQ0FDWCxDQUNFO0FBRWxCLENBQUM7O0FBR0Q7QUFDQSxJQUFNbEIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUdqRSxLQUFLLEVBQUk7RUFDckIsb0JBQ0lQLDJEQUFBO0lBQUt5RSxTQUFTLEVBQUM7RUFBc0MsZ0JBQ25EekUsMkRBQUE7SUFBSXlFLFNBQVMsRUFBQztFQUEyRSxHQUFDLGtCQUUxRixDQUFLLGVBRUx6RSwyREFBQTtJQUFHeUUsU0FBUyxFQUFDO0VBQWdFLEdBQUMsd0NBRTlFLENBQUksQ0FDQTtBQUVkLENBQUM7O0FBR0Q7QUFDQSxJQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBRy9FLEtBQUssRUFBSTtFQUN2QixJQUFJQSxLQUFLLENBQUNzQixPQUFPLEVBQUU7SUFDZixvQkFDSTdCLDJEQUFBO01BQUt5RSxTQUFTLEVBQUM7SUFBYSxnQkFDMUJ6RSwyREFBQSxDQUFDcUIsb0RBQU87TUFBQ3NFLElBQUksRUFBQztJQUFJLEVBQUcsQ0FDakI7RUFFZDtFQUVBLG9CQUNJM0YsMkRBQUE7SUFBS3lFLFNBQVMsRUFBQztFQUFvRSxHQUNoRmxFLEtBQUssQ0FBQ21GLFFBQVEsQ0FDWDtBQUVkLENBQUM7O0FBR0Q7QUFDQSxJQUFNRixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBR2pGLEtBQUssRUFBSTtFQUN2QixvQkFDSVAsMkRBQUE7SUFBS3lFLFNBQVMsRUFBQztFQUE4RCxnQkFDM0V6RSwyREFBQTtJQUFLeUUsU0FBUyxFQUFDO0VBQU0sZ0JBQ25CekUsMkRBQUE7SUFDRXlFLFNBQVMsRUFBQyxrQ0FBa0M7SUFDNUNtQixHQUFHLEVBQUVyRixLQUFLLENBQUNzRixLQUFNO0lBQ2pCQyxHQUFHLEVBQUV2RixLQUFLLENBQUN3RixLQUFNO0lBQ2pCbEUsT0FBTyxFQUFDO0VBQU0sRUFDZCxDQUNFLGVBRU43QiwyREFBQTtJQUFLeUUsU0FBUyxFQUFDO0VBQStCLGdCQUM1Q3pFLDJEQUFBO0lBQUt5RSxTQUFTLEVBQUM7RUFBcUIsR0FDakNsRSxLQUFLLENBQUN5RixJQUFJLElBQUl6RixLQUFLLENBQUM0RCxNQUFNLGdCQUN2Qm5FLDJEQUFBO0lBQUt5RSxTQUFTLEVBQUM7RUFBMEUsZ0JBQ3ZGekUsMkRBQUEsZUFBT08sS0FBSyxDQUFDeUYsSUFBSSxDQUFRLEVBRXhCekYsS0FBSyxDQUFDNEQsTUFBTSxnQkFDVG5FLDJEQUFBLENBQUNvQixtREFBTSxxQkFDTHBCLDJEQUFBLENBQUNvQix3REFBVyxPQUFHLGVBRWZwQiwyREFBQTtJQUFNeUUsU0FBUyxFQUFDO0VBQVEsR0FDckJsRSxLQUFLLENBQUM0RCxNQUFNLENBQ1IsQ0FDQSxHQUNULElBQUksQ0FFSixHQUNOLElBQUksZUFHUm5FLDJEQUFBO0lBQUl5RSxTQUFTLEVBQUM7RUFBd0QsR0FDbkVsRSxLQUFLLENBQUN3RixLQUFLLENBQ1QsZUFFTC9GLDJEQUFBO0lBQUd5RSxTQUFTLEVBQUM7RUFBcUQsR0FDL0RsRSxLQUFLLENBQUMyRixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FDNUIsQ0FBSSxDQUNBLEVBRUw1RixLQUFLLENBQUM2RixhQUFhLGdCQUNoQnBHLDJEQUFBLENBQUNtQixtREFBTTtJQUNMa0YsS0FBSyxFQUFDLE9BQU87SUFDYlYsSUFBSSxFQUFDLElBQUk7SUFDVGxCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU00QixNQUFNLENBQUNDLElBQUksQ0FBQ2hHLEtBQUssQ0FBQzZGLGFBQWEsRUFBRSxRQUFRLENBQUM7SUFBQTtFQUFDLEdBQzNELE1BRUQsQ0FBUyxHQUNULElBQUksQ0FFSixDQUNGO0FBRWQsQ0FBQztBQUVELGlFQUFlL0YsS0FBSzs7Ozs7Ozs7Ozs7QUM3UHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvSW5kZXgnO1xuXG5pbXBvcnQgJy4vYXBwLmNzcyc7XG5cbmNvbnN0IEFwcCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxJbmRleCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgICk7XG59O1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIFJhdGluZywgU3Bpbm5lciB9IGZyb20gJ2Zsb3diaXRlLXJlYWN0JztcblxuXG4vLyB0b3JuYSBsJ2VsZW5jbyBkZWkgZmlsbSBkYWxsJ2FwaSBlIGxpIGZpbHRyYSBwZXIgcmF0aW5nIGUgcmVjZW50aVxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZSgncmVjZW50Jyk7IC8vIGRlZmF1bHQgJ3JlY2VudCdcbiAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKTsgLy8gdHV0dGkgaSBnZW5lcmlcbiAgY29uc3QgW3NlbGVjdGVkR2VucmUsIHNldFNlbGVjdGVkR2VucmVdID0gdXNlU3RhdGUoJycpOyAvL3ZhbG9yZSBkZWwgZ2VuZXJlIHBlciBmaWx0cm8gY2F0ZWdvcmlhXG5cblxuICBjb25zdCBmZXRjaE1vdmllcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAgcmV0dXJuIGZldGNoKFwiL2FwaS9tb3ZpZXNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZ2VucmVfaWQ6IHNlbGVjdGVkR2VucmUgfSksXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRNb3ZpZXMoZGF0YS5tb3ZpZXMpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21vdmllcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0TW92aWVzKGRhdGEubW92aWVzKTsgLy8gc2V0IGRlaSBtb3ZpZVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuXG5cbiAgfTtcblxuICBjb25zdCBmZXRjaEdlbnJlcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2dlbnJlcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0R2VucmVzKGRhdGEuZ2VucmVzKTsgLy8gc2V0IGRlaSBnZW5lcmlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5nZW5yZXMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIGZldGNoKGAvYXBpL21vdmllcz9nZW5yZV9pZD0ke3NlbGVjdGVkR2VucmV9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRNb3ZpZXMoZGF0YS5tb3ZpZXMpO1xuICAgICAgfSk7XG4gIH07XG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaE1vdmllcygpO1xuICAgIGZldGNoR2VucmVzKCk7XG4gIH0sIFtdKTtcblxuXG4gIC8vIGZ1bnppb25lIGRpIG9yZGluYW1lbnRvXG4gIGNvbnN0IHNvcnRNb3ZpZXMgPSAoYSwgYikgPT4ge1xuICAgIGlmIChvcmRlckJ5ID09PSAncmVjZW50Jykge1xuICAgICAgLy8gb3JkaW5hIHBlciBkYXRhIGRpIHVzY2l0YSBwacO5IHJlY2VudGVcbiAgICAgIHJldHVybiBuZXcgRGF0ZShiLnJlbGVhc2VfZGF0ZSkgLSBuZXcgRGF0ZShhLnJlbGVhc2VfZGF0ZSk7XG4gICAgfSBlbHNlIGlmIChvcmRlckJ5ID09PSAncmF0aW5nJykge1xuICAgICAgLy8gb3JkaW5hIHBlciB2YWx1dGF6aW9uZSwgcGnDuSBhbHRhIHByaW1hXG4gICAgICByZXR1cm4gYi5yYXRpbmcgLSBhLnJhdGluZztcbiAgICB9XG4gIH07XG5cblxuICAvLyBvcmRpbmEgaSBmaWxtIGluIGJhc2UgYWxsJ29yZGluZSBjb3JyZW50ZVxuICBjb25zdCBzb3J0ZWRNb3ZpZXMgPSBbLi4ubW92aWVzXS5zb3J0KHNvcnRNb3ZpZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkaW5nIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcmRlckJ5KCdyZWNlbnQnKX1cbiAgICAgICAgICB2YXJpYW50PXtvcmRlckJ5ID09PSAncmVjZW50JyA/ICdwcmltYXJ5JyA6ICdvdXRsaW5lLXByaW1hcnknfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTJcIlxuICAgICAgICA+XG4gICAgICAgICAgUGnDuSByZWNlbnRpXG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcmRlckJ5KCdyYXRpbmcnKX1cbiAgICAgICAgICB2YXJpYW50PXtvcmRlckJ5ID09PSAncmF0aW5nJyA/ICdwcmltYXJ5JyA6ICdvdXRsaW5lLXByaW1hcnknfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTJcIlxuICAgICAgICA+XG4gICAgICAgICAgUGVyIHJhdGluZ1xuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXInPlxuXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJnZW5yZV9pZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnJlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWxlY3RlZEdlbnJlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5UdXR0aSBpIGdlbmVyaTwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Z2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Z2VucmUuaWR9IHZhbHVlPXtnZW5yZS5pZH0+XG4gICAgICAgICAgICAgICAgICB7Z2VucmUudmFsdWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1sLTIgcHgtNCBweS0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEdlbnJlID8gJ2JnLWdyZWVuLTUwMCcgOiAnYmctZ3JheS00MDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRmlsdHJhIHBlciBnZW5lcmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPE1vdmllTGlzdCBsb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAge3NvcnRlZE1vdmllcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgIDxNb3ZpZUl0ZW0ga2V5PXtrZXl9IHsuLi5pdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTW92aWVMaXN0PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuXG4vLyB0b3JuYSBhbGxhIHZpZXcgaWwgbGF5b3V0IHBlciB0dXR0YSBsJ2FwcGxpY2F6aW9uZVxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtNCBteC1hdXRvIG1heC13LXNjcmVlbi14bCBsZzpweS0xNiBsZzpweC02XCI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuXG4vLyB0b3JuYSBhbGxhIHZpZXcgbCdoZWFkZXIgY29uIHRpdG9sbyBlIHBhcmFncmFmb1xuY29uc3QgSGVhZGluZyA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc2NyZWVuLXNtIHRleHQtY2VudGVyIFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBNb3ZpZSBDb2xsZWN0aW9uXG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBsZzptYi04IHNtOnRleHQteGwgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICBFeHBsb3JlIHRoZSB3aG9sZSBjb2xsZWN0aW9uIG9mIG1vdmllc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuLy8gbmVsIGNhc28gaW4gY3VpIGxhIHBhZ2luYSBkb3Zlc3NlIHBlcmRlcmUgZGVsIHRlbXBvIGEgY2FyaWNhcmUgbW9zdHJhIHVubyBzcGlubmVyXG5jb25zdCBNb3ZpZUxpc3QgPSBwcm9wcyA9PiB7XG4gICAgaWYgKHByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpnYXAteS04IHhsOmdyaWQtY29scy02IGxnOmdyaWQtY29scy00IG1kOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuXG4vLyB0b3JuYSBhbGxhIHZpZXcgbGUgY2FyZCBjb250ZW5lbnRlIGkgZGF0aSBkaW5hbWljaVxuY29uc3QgTW92aWVJdGVtID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtbGcgc2hhZG93LW1kIGxnOm1heC13LXNtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC02MCBtZDpoLTgwXCJcbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBmbGV4IGZsZXgtY29sIGgtZnVsbCBwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBtYi0zIGxhc3Q6bWItMFwiPlxuICAgICAgICAgICAgICB7cHJvcHMueWVhciB8fCBwcm9wcy5yYXRpbmdcbiAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tbWlkZGxlIHRleHQtZ3JheS05MDAgdGV4dC14cyBmb250LW1lZGl1bSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy55ZWFyfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgPyA8UmF0aW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nLlN0YXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhdGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZCBtYi0xXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBtYi00IGxhc3Q6bWItMFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5wbG90LnN1YnN0cigwLCA4MCl9Li4uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cHJvcHMud2lraXBlZGlhX3VybFxuICAgICAgICAgICAgICA/IDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbihwcm9wcy53aWtpcGVkaWFfdXJsLCAnX2JsYW5rJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTW9yZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJJbmRleCIsIkFwcCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIlN0cmljdE1vZGUiLCJwYXRoIiwiZWxlbWVudCIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiUmF0aW5nIiwiU3Bpbm5lciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm1vdmllcyIsInNldE1vdmllcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm9yZGVyQnkiLCJzZXRPcmRlckJ5IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJnZW5yZXMiLCJzZXRHZW5yZXMiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJzZWxlY3RlZEdlbnJlIiwic2V0U2VsZWN0ZWRHZW5yZSIsImZldGNoTW92aWVzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2VucmVfaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZldGNoR2VucmVzIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsInNvcnRNb3ZpZXMiLCJhIiwiYiIsIkRhdGUiLCJyZWxlYXNlX2RhdGUiLCJyYXRpbmciLCJzb3J0ZWRNb3ZpZXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzb3J0IiwiTGF5b3V0IiwiSGVhZGluZyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ2YXJpYW50Iiwib25TdWJtaXQiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcCIsImdlbnJlIiwia2V5IiwiaWQiLCJ0eXBlIiwiTW92aWVMaXN0IiwiaXRlbSIsIk1vdmllSXRlbSIsIl9leHRlbmRzIiwiY2hpbGRyZW4iLCJzaXplIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsInllYXIiLCJTdGFyIiwicGxvdCIsInN1YnN0ciIsIndpa2lwZWRpYV91cmwiLCJjb2xvciIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9