require('./../../runtime.js');
require('./../../remix-vendors.js');
module.exports =
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(6);


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix/runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("/__remix_runtime_options__");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


Page(Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(regeneratorRuntime) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_greet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _assets_images_cat_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





 // CASE: cloneElement

var TextElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  id: "text",
  _tid: "5e40a82-1"
}, "clonedElement"));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _obj$a;

  var props = {
    className: 'class-view'
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      obj = _React$useState2[0],
      setObj = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      touched = _React$useState4[0],
      setTouched = _React$useState4[1]; // CASE: regenerator runtime


  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(1);

            case 2:
              setObj({
                a: {
                  b: 'valueIn:obj.a.b'
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleTouchStart() {
    setTouched(true);
  } // CASE: 新语法


  var didTouched = undefined !== null && undefined !== void 0 ? undefined : touched;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["View"], {
    _tid: "5e40a82-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["View"], _extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "dataFooAttribute"
  }, props), "viewInnerText", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", null, obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", null, didTouched ? 'touchedTrigger' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", null, TextElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "cat-image",
    src: _assets_images_cat_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "dog-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_greet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "word"
  })));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7285019d500b66029accbcfd7275e33a.jpg");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[2,0,3]]]);
