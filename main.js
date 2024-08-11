/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.png */ "./src/assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/oceangrid.png */ "./src/assets/oceangrid.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/metalic.png */ "./src/assets/metalic.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/board.png */ "./src/assets/board.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/modal.png */ "./src/assets/modal.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body {
    box-sizing: border-box;

    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(0deg, rgba(115, 111, 111, .5) 20%, rgba(69, 56, 69, .5) 65%), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;

    overflow: hidden;

    font-family: "Handjet", sans-serif;
    font-weight: bold;
}

.game {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 100px;
    color: rgb(66, 184, 131);
    color: rgb(194, 77, 44);
}

.board {
    display: grid;
    grid-template-rows: repeat(11, 60px);
    grid-template-columns: repeat(11, 60px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-position: right bottom;
}

.position-number,
.position-letter,
.position {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 70px;
    font-weight: bold;

    color: #18BAC1;
}

.position-number {
    grid-column: 1 / 2;
}

.position-number:nth-child(1) {
    grid-row: 2 / 3;
}

.position-number:nth-child(2) {
    grid-row: 3 / 4;
}

.position-number:nth-child(3) {
    grid-row: 4 / 5;
}

.position-number:nth-child(4) {
    grid-row: 5 / 6;
}

.position-number:nth-child(5) {
    grid-row: 6 / 7;
}

.position-number:nth-child(6) {
    grid-row: 7 / 8;
}

.position-number:nth-child(7) {
    grid-row: 8 / 9;
}

.position-number:nth-child(8) {
    grid-row: 9 / 10;
}

.position-number:nth-child(9) {
    grid-row: 10 / 11;
}

.position-number:nth-child(10) {
    grid-row: 11 / 12;
}

.position-letter {
    grid-row: 1 / 2;
}

.position-letter:nth-child(11) {
    grid-column: 2 / 3;
}

.position-letter:nth-child(12) {
    grid-column: 3 / 4;
}

.position-letter:nth-child(13) {
    grid-column: 4 / 5;
}

.position-letter:nth-child(14) {
    grid-column: 5 / 6;
}

.position-letter:nth-child(15) {
    grid-column: 6 / 7;
}

.position-letter:nth-child(16) {
    grid-column: 7 / 8;
}

.position-letter:nth-child(17) {
    grid-column: 8 / 9;
}

.position-letter:nth-child(18) {
    grid-column: 9 / 10;
}

.position-letter:nth-child(19) {
    grid-column: 10 / 11;
}

.position-letter:nth-child(20) {
    grid-column: 11 / 12;
}

.selection {
    display: grid;
    grid-template-rows: repeat(12, 60px);
    grid-template-columns: repeat(9, 60px);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
}

.start {
    grid-row: 12 / 13;
    grid-column: 4 / 7;

    height: 100%;
    scale: 1.2;
}

.start:hover {
    scale: 1.24;
    cursor: pointer;
}

.start img {
    width: 100%;
    height: 100%;
}

.notice {
    grid-row: 1 / 2;
    grid-column: 2 / 9;
    scale: 1.1;
}

.notice img {
    width: 100%;
    height: 100%;
}

.ship__img,
.missed-attack__img,
.hitted-attack__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.battleship {
    grid-row: 3 / 8;
    grid-column: 3 / 4;
}

.cruiser {
    grid-row: 3 / 7;
    grid-column: 5 / 6;
}

.destroyer {
    grid-row: 3 / 7;
    grid-column: 7 / 8;
}

.rescue {
    grid-row: 8 / 11;
    grid-column: 7 / 8;
}

.patrol {
    grid-row: 8 / 11;
    grid-column: 5 / 6;
}

.missed-attack,
.hitted-attack {
    position: relative;
    z-index: 100;
}

.square {
    position: relative;
    z-index: 1000;
}

.modal {
    position: absolute;
    z-index: 10000;

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #4F4233;
}

.modal__bar {
    display: grid;
    grid-template-rows: repeat(10, 40px);
    grid-template-columns: repeat(10, 60px);

    width: 600px;
    height: 400px;

    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    box-shadow: 1px 1px 10px 100vh rgba(69, 56, 69, .5),
        1px 1px 10px 10px rgba(69, 56, 69, .5) inset;
}

.modal__notice {
    grid-row: 1 / 3;
    grid-column: 2 / 10;
}

.modal__notice img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.modal__restart {
    grid-row: 10 / 11;
    grid-column: 4 / 8;
}

.modal__restart:hover {
    scale: 1.05;
    cursor: pointer;
}

.modal__restart img {
    width: 100%;
}

.modal__head {
    grid-row: 4 / 5;
    grid-column: 3 / 9;

    text-align: center;
    text-transform: uppercase;
    font-size: 70px;
    font-weight: bolder;
}

.modal__info {
    grid-row: 6 / 9;
    grid-column: 3 / 9;

    text-align: center;

    font-size: 40px;

    margin-top: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    box-sizing: border-box;\n\n    height: 100vh;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background: linear-gradient(0deg, rgba(115, 111, 111, .5) 20%, rgba(69, 56, 69, .5) 65%), url(./assets/background.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    overflow: hidden;\n\n    font-family: \"Handjet\", sans-serif;\n    font-weight: bold;\n}\n\n.game {\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    gap: 100px;\n    color: rgb(66, 184, 131);\n    color: rgb(194, 77, 44);\n}\n\n.board {\n    display: grid;\n    grid-template-rows: repeat(11, 60px);\n    grid-template-columns: repeat(11, 60px);\n    background-image: url(./assets/oceangrid.png);\n    background-position: right bottom;\n}\n\n.position-number,\n.position-letter,\n.position {\n    background-image: url(./assets/metalic.png);\n    background-repeat: no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 70px;\n    font-weight: bold;\n\n    color: #18BAC1;\n}\n\n.position-number {\n    grid-column: 1 / 2;\n}\n\n.position-number:nth-child(1) {\n    grid-row: 2 / 3;\n}\n\n.position-number:nth-child(2) {\n    grid-row: 3 / 4;\n}\n\n.position-number:nth-child(3) {\n    grid-row: 4 / 5;\n}\n\n.position-number:nth-child(4) {\n    grid-row: 5 / 6;\n}\n\n.position-number:nth-child(5) {\n    grid-row: 6 / 7;\n}\n\n.position-number:nth-child(6) {\n    grid-row: 7 / 8;\n}\n\n.position-number:nth-child(7) {\n    grid-row: 8 / 9;\n}\n\n.position-number:nth-child(8) {\n    grid-row: 9 / 10;\n}\n\n.position-number:nth-child(9) {\n    grid-row: 10 / 11;\n}\n\n.position-number:nth-child(10) {\n    grid-row: 11 / 12;\n}\n\n.position-letter {\n    grid-row: 1 / 2;\n}\n\n.position-letter:nth-child(11) {\n    grid-column: 2 / 3;\n}\n\n.position-letter:nth-child(12) {\n    grid-column: 3 / 4;\n}\n\n.position-letter:nth-child(13) {\n    grid-column: 4 / 5;\n}\n\n.position-letter:nth-child(14) {\n    grid-column: 5 / 6;\n}\n\n.position-letter:nth-child(15) {\n    grid-column: 6 / 7;\n}\n\n.position-letter:nth-child(16) {\n    grid-column: 7 / 8;\n}\n\n.position-letter:nth-child(17) {\n    grid-column: 8 / 9;\n}\n\n.position-letter:nth-child(18) {\n    grid-column: 9 / 10;\n}\n\n.position-letter:nth-child(19) {\n    grid-column: 10 / 11;\n}\n\n.position-letter:nth-child(20) {\n    grid-column: 11 / 12;\n}\n\n.selection {\n    display: grid;\n    grid-template-rows: repeat(12, 60px);\n    grid-template-columns: repeat(9, 60px);\n    background-image: url(./assets/board.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: top;\n}\n\n.start {\n    grid-row: 12 / 13;\n    grid-column: 4 / 7;\n\n    height: 100%;\n    scale: 1.2;\n}\n\n.start:hover {\n    scale: 1.24;\n    cursor: pointer;\n}\n\n.start img {\n    width: 100%;\n    height: 100%;\n}\n\n.notice {\n    grid-row: 1 / 2;\n    grid-column: 2 / 9;\n    scale: 1.1;\n}\n\n.notice img {\n    width: 100%;\n    height: 100%;\n}\n\n.ship__img,\n.missed-attack__img,\n.hitted-attack__img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.battleship {\n    grid-row: 3 / 8;\n    grid-column: 3 / 4;\n}\n\n.cruiser {\n    grid-row: 3 / 7;\n    grid-column: 5 / 6;\n}\n\n.destroyer {\n    grid-row: 3 / 7;\n    grid-column: 7 / 8;\n}\n\n.rescue {\n    grid-row: 8 / 11;\n    grid-column: 7 / 8;\n}\n\n.patrol {\n    grid-row: 8 / 11;\n    grid-column: 5 / 6;\n}\n\n.missed-attack,\n.hitted-attack {\n    position: relative;\n    z-index: 100;\n}\n\n.square {\n    position: relative;\n    z-index: 1000;\n}\n\n.modal {\n    position: absolute;\n    z-index: 10000;\n\n    height: 100vh;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: #4F4233;\n}\n\n.modal__bar {\n    display: grid;\n    grid-template-rows: repeat(10, 40px);\n    grid-template-columns: repeat(10, 60px);\n\n    width: 600px;\n    height: 400px;\n\n    background: url(./assets/modal.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n\n    box-shadow: 1px 1px 10px 100vh rgba(69, 56, 69, .5),\n        1px 1px 10px 10px rgba(69, 56, 69, .5) inset;\n}\n\n.modal__notice {\n    grid-row: 1 / 3;\n    grid-column: 2 / 10;\n}\n\n.modal__notice img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.modal__restart {\n    grid-row: 10 / 11;\n    grid-column: 4 / 8;\n}\n\n.modal__restart:hover {\n    scale: 1.05;\n    cursor: pointer;\n}\n\n.modal__restart img {\n    width: 100%;\n}\n\n.modal__head {\n    grid-row: 4 / 5;\n    grid-column: 3 / 9;\n\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 70px;\n    font-weight: bolder;\n}\n\n.modal__info {\n    grid-row: 6 / 9;\n    grid-column: 3 / 9;\n\n    text-align: center;\n\n    font-size: 40px;\n\n    margin-top: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game/gameboard/gameboard.js":
/*!*****************************************!*\
  !*** ./src/game/gameboard/gameboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/game/ship/ship.js");


class Gameboard {
    #board;
    #hitted = 'H';
    #missed = 'M';
    #shipsPosition = [];
    #shipsTypes = [];
    constructor() {
        this.#board = this.createGameBoard();
    }

    createGameBoard() {
        const array = (new Array(10)).fill([]);
        array.forEach((_, i) => {
            array[i] = [...(new Array(10)).fill([])];
        });

        return array;
    }

    getGameBoard() {
        return this.#board;
    }

    getShipPositions() {
        return this.#shipsPosition;
    }

    getShipTypes() {
        return this.#shipsTypes;
    }

    getHitted() {
        return this.#hitted;
    }

    getMissed() {
        return this.#missed;
    }

    placeShip(shipType, coordinates) {
        const ship = shipType;
        let x = coordinates[0];
        const y = coordinates[1];
        const board = this.#board;

        if ((board.length - (x + ship.length)) < 0) {
            return "ERROR";
        }

        const positions = (new Array(ship.length)).fill(ship);

        positions.forEach(position => {
            board[x][y] = position;
            x += 1;
        });

        this.#shipsPosition.push(coordinates);
        this.#shipsTypes.push(shipType.type);

        return board;
    }

    receiveAttack(x, y) {
        const board = this.getGameBoard();

        let attackCoord = board[x][y];

        const isInstanceOf = attackCoord instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"];

        if (!isInstanceOf)
            (this.#board)[x][y] = this.#missed;

        if (!(attackCoord instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])
            || attackCoord === this.#hitted
            || attackCoord === this.#missed) {
            return false;
        }

        this.#board[x][y].hit();
        (this.#board)[x][y] = this.#hitted;

        return true;
    }

    isAllShipSunk() {
        let isHitted = false;
        const board = this.getGameBoard();
        let boardValues = [];

        for (let i = 0; i < 10; i++) {
            const values = Object.values(board[i]);
            boardValues = [...boardValues, ...values]
        }

        if (!boardValues.find(value => value instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])) {
            isHitted = true
        }

        return isHitted;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/game/player/player.js":
/*!***********************************!*\
  !*** ./src/game/player/player.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/game/gameboard/gameboard.js");
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship/ship */ "./src/game/ship/ship.js");



class Player {
    constructor() {
        this.gameboard = new _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    hasGameboard() {
        return this.gameboard instanceof _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];
    }

    makeRandomAttack(gameboard) {
        let randomX, randomY;

        let ship = null;

        randomX = Math.round((Math.random() * 100) % 9);
        randomY = Math.round((Math.random() * 100) % 9)
        const hitted = gameboard.getHitted();
        const missed = gameboard.getMissed();

        const board = gameboard.getGameBoard();

        while (board[randomX][randomY] === hitted
            || board[randomX][randomY] === missed
        ) {
            randomX = Math.round((Math.random() * 100) % 9);
            randomY = Math.round((Math.random() * 100) % 9);
        }

        if (board[randomX][randomY] instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"])
            ship = board[randomX][randomY];

        gameboard.receiveAttack(randomX, randomY);

        return [board[randomX][randomY], randomX, randomY, ship];
    }

    randomGameboard() {
        const gameboard = this.gameboard;

        const shipTypes = [
            {
                name: "battleship",
                length: 5,
            },
            {
                name: "cruiser",
                length: 4,
            },
            {
                name: "destroyer",
                length: 4,
            },
            {
                name: "rescue",
                length: 3,
            },
            {
                name: "patrol",
                length: 3,
            },
        ];

        let randomX = null, randomY = null;

        shipTypes.forEach(type => {
            const ship = new _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"](type.length, type.name);
            let j = 0;

            do {
                randomX = Math.round(Math.random() * 100) % 9;
                randomY = Math.round(Math.random() * 100) % 9;

            } while ((randomX + ship.length - 1) > 9 || this.spaceAvailable(gameboard, [randomX, randomY], ship))

            gameboard.placeShip(ship, [randomX, randomY]);
        })
    }

    spaceAvailable(gameboard, positions, ship) {
        const head = [positions[0], positions[1]];
        const tail = [positions[0] + ship.length - 1, positions[1]];

        const isPosition = (gameboard, x, y) => {
            return (x >= 0 && y >= 0 && x < 10 && y < 10) ? gameboard[x][y] : "none";
        }

        let isThereAnyShip = false;
        let currentPosition = [];

        let x, y;

        gameboard = gameboard.getGameBoard();

        for (let i = 0; i < ship.length && !isThereAnyShip; i++) {
            currentPosition = [positions[0] + i, positions[1]];

            x = currentPosition[0], y = currentPosition[1];

            if (head.toString() === currentPosition.toString()) {
                isThereAnyShip = isPosition(gameboard, x - 1, y - 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x - 1, y) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x - 1, y + 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y - 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y + 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
            } else if (tail.toString() === currentPosition.toString()) {
                isThereAnyShip = isPosition(gameboard, x + 1, y - 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x + 1, y) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x + 1, y + 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y - 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y + 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
            } else {
                isThereAnyShip = isPosition(gameboard, x, y - 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y + 1) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
                    || isPosition(gameboard, x, y) instanceof _ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]
            }
        }
        return isThereAnyShip;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/game/ship/ship.js":
/*!*******************************!*\
  !*** ./src/game/ship/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
    #hitNum;
    constructor(length = 0, type) {
        this.length = length;
        this.type = type;
        this.#hitNum = 0;
    }

    hit() {
        this.#hitNum += 1;
    }

    getHitNumber() {
        return this.#hitNum;
    }

    isSunk() {
        if (this.length === this.#hitNum) {
            return true;
        }

        return false;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/ui/game/attack.js":
/*!*******************************!*\
  !*** ./src/ui/game/attack.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ attackMoves)
/* harmony export */ });
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _game_ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/ship/ship */ "./src/game/ship/ship.js");
/* harmony import */ var _assets_fire_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/fire.png */ "./src/assets/fire.png");
/* harmony import */ var _assets_water_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/water.png */ "./src/assets/water.png");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createElement */ "./src/ui/utils/createElement.js");
/* harmony import */ var _utils_loadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/loadImage */ "./src/ui/utils/loadImage.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ship */ "./src/ui/game/ship.js");
/* harmony import */ var _restart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restart */ "./src/ui/game/restart.js");










function attackMoves(player, ai) {
    const playerBoard = document.querySelector('.board');
    const aiBoard = document.querySelector('.board.ai');

    const playerGameboard = player.gameboard;
    const aiGameboard = ai.gameboard;

    aiBoard.addEventListener('click', function (e) {
        const target = e.target;

        if (target.classList.contains('square')) {
            const position = target.dataset.position.split(' ');

            let X = +position[0], Y = +position[1];

            playerTurn(target, aiGameboard, aiBoard, X, Y);

            aiTurn(playerGameboard, playerBoard, ai);

            if (aiGameboard.isAllShipSunk() || playerGameboard.isAllShipSunk()) {
                const loser = aiGameboard.isAllShipSunk ? "ai" : 'player';
                (0,_restart__WEBPACK_IMPORTED_MODULE_7__["default"])(loser);
            }
        }
    })
}

function playerTurn(target, aiGameboard, aiBoard, X, Y) {
    let ship = null;
    if (aiGameboard.getGameBoard()[X][Y] instanceof _game_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        ship = aiGameboard.getGameBoard()[X][Y];
    }

    aiGameboard.receiveAttack(X, Y);

    const effect = attackEffect(target, aiGameboard.getGameBoard()[X][Y]);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(aiBoard, effect);

    aiBoard.removeChild(target);

    if (ship?.isSunk()) {
        destroyEffect(ship, aiBoard, aiGameboard)
    }
}

function aiTurn(playerGameboard, playerBoard, ai) {
    const [attack, X, Y, ship] = ai.makeRandomAttack(playerGameboard);
    const target = playerBoard.querySelector(`[data-position="${X} ${Y}"]`);

    const effect = attackEffect(target, playerGameboard.getGameBoard()[X][Y]);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(playerBoard, effect);

    playerBoard.removeChild(target);

    if (ship?.isSunk()) {
        const [x, y] = getShipPositionByType(ship, playerGameboard);
        fieldDisclosure(ship.length, [x, y], playerBoard, playerGameboard.getGameBoard());
    }
}

function destroyEffect(ship, board, gameboard) {
    const [x, y] = getShipPositionByType(ship, gameboard);

    const destroyedShip = (0,_ship__WEBPACK_IMPORTED_MODULE_6__.loadSingleShip)(x, y, ship);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(board, destroyedShip);
    fieldDisclosure(ship.length, [x, y], board, gameboard.getGameBoard());
}

function attackEffect(element, typeOfAttack = "M") {
    const div = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', 'missed-attack');
    const image = typeOfAttack === "M" ? _assets_water_png__WEBPACK_IMPORTED_MODULE_3__ : _assets_fire_png__WEBPACK_IMPORTED_MODULE_2__;
    const imageClass = typeOfAttack === "M" ? "missed-attack__img" : "hitted-attack__img";
    const imgEl = (0,_utils_loadImage__WEBPACK_IMPORTED_MODULE_5__.loadImage)(image, imageClass);

    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(div, imgEl);

    const position = element.dataset.position.split(' ');
    const X = +position[0] + 2, Y = +position[1] + 2;

    div.style.gridRow = `${X} / ${X + 1}`;
    div.style.gridColumn = `${Y} / ${Y + 1}`;

    return div;
}

function fieldDisclosure(shipLength, coords, board, gameboard) {
    const fullCoords = (new Array(shipLength)).fill(null).map((_, c) => [coords[0] + c, coords[1]]);
    const disclosurePos = [];
    const surFields = [
        [0, 1],
        [1, 0],
        [1, 1],
        [0, -1],
        [-1, 0],
        [-1, -1],
        [-1, 1],
        [1, -1]
    ];
    let x, y, surX, surY;

    fullCoords.forEach(coord => {
        x = coord[0], y = coord[1];
        surFields.forEach(sur => {
            surX = sur[0] + x, surY = sur[1] + y;
            if ((surX) >= 0 && (surY) >= 0
                && (surX) >= 0 && (surY) >= 0
                && gameboard[surX][surY]
                && gameboard[surX][surY] !== 'M'
                && gameboard[surX][surY] !== 'H') {
                const square = board.querySelector(`[data-position="${surX} ${surY}"]`);
                gameboard[surX][surY] = 'M';
                const effect = attackEffect(square, gameboard[surX][surY]);
                (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(board, effect);
            }
        });
    });
}

function getShipPositionByType(ship, gameboard) {
    let shipPosition = gameboard.getShipPositions();
    let shipTypes = gameboard.getShipTypes();
    const shipType = ship.type;
    const shipTypeIndex = shipTypes.findIndex(type => type === shipType);

    const x = shipPosition[shipTypeIndex][0];
    const y = shipPosition[shipTypeIndex][1];

    return [x, y];
}



/***/ }),

/***/ "./src/ui/game/board.js":
/*!******************************!*\
  !*** ./src/ui/game/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/ui/utils/createElement.js");
/* harmony import */ var _assets_radar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/radar.png */ "./src/assets/radar.png");





function createBoard(boardType = 'player') {
    const board = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'board');

    if (boardType === 'ai') {
        board.style.backgroundImage = `url(${_assets_radar_png__WEBPACK_IMPORTED_MODULE_2__})`;
        board.classList.add('ai');
    }

    for (let i = 1; i <= 10; i++) {
        const div = createPosition('position-number', i)
        ;(0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(board, div);
    }

    const boardLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    boardLetters.forEach(letter => {
        const div = createPosition('position-letter', letter);
        (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(board, div);
    });

    const emptyPosition = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'position');
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(board, emptyPosition);

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            const div = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'square');
            div.dataset.position = `${i} ${j}`;
            div.style.gridRow = `${i + 2} / ${i + 3}`;
            div.style.gridColumn = `${j + 2} / ${j + 3}`;
            (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(board, div);
        }
    }

    return board;
}

function createPosition(className = "empty", textContent) {
    const div = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', className);

    if (className === "empty") {
        return div;
    }

    div.textContent = textContent;
    return div;
}



/***/ }),

/***/ "./src/ui/game/dragndrop.js":
/*!**********************************!*\
  !*** ./src/ui/game/dragndrop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragndrop)
/* harmony export */ });
/* harmony import */ var _game_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game/player/player */ "./src/game/player/player.js");
/* harmony import */ var _game_ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/ship/ship */ "./src/game/ship/ship.js");
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attack */ "./src/ui/game/attack.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board */ "./src/ui/game/board.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship */ "./src/ui/game/ship.js");







function dragndrop(selection, player) {
    const shipTypes = [
        {
            name: "battleship",
            length: 5,
        },
        {
            name: "cruiser",
            length: 4,
        },
        {
            name: "destroyer",
            length: 4,
        },
        {
            name: "rescue",
            length: 3,
        },
        {
            name: "patrol",
            length: 3,
        },
    ];

    let target, shipType, shipSelected = { isSelected: false };

    target = shipType = null;

    let queue = [];

    selection.addEventListener('click', (e) => {
        target = e.target.closest('div');
        shipType = shipTypes.find(type => type.name === target?.className);

        if (shipType && !shipSelected.isSelected) {
            const width = target.offsetWidth;
            const height = target.offsetHeight;

            target.style.position = 'absolute';
            target.style.width = width + 'px';
            target.style.height = height + 'px';
            shipSelected.isSelected = true;
        }
    });
    let prevElement = null;
    document.addEventListener('mouseover', (e) => drag(e, target, shipType, shipSelected, queue, player));
}

function drag(e, ship, shipType, selected, queue, player) {
    if (!selected.isSelected) {
        return;
    }

    ship.style.left = e.pageX + 'px';
    ship.style.top = e.pageY + 'px';

    const target = e.target;
    const shipLength = shipType?.length;
    const gameboard = player.gameboard;
    const battleShip = new _game_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"](shipType.length, shipType.name);

    if (target.classList.contains('square')) {
        queue.forEach(element => {
            element.style.background = '';
        });

        const position = target.dataset.position.split(' ').map(p => +p);
        const color = ((+position[0] + shipLength - 1) <= 9) && !player.spaceAvailable(gameboard, position, battleShip) ? `rgba(66, 184, 131, .5)` : `rgba(194, 77, 44, .5)`

        for (let i = 0; i < shipLength; i++) {
            const square = document.querySelector(`[data-position="${+position[0] + i} ${+position[1]}"]`);
            if (square) {
                square.style.background = color;
                queue.push(square);
            }
        }

        target.onclick = () => {
            if (((+position[0] + shipLength - 1) <= 9)
                && !player.spaceAvailable(gameboard, position, battleShip)) {
                drop(player, shipType, ship, target);
                queue.forEach(element => {
                    element.style.background = '';
                });
                selected.isSelected = false;
            }
        }
    }
}

function drop(player, shipType, ship, target) {
    const selection = document.querySelector('.selection');
    const board = document.querySelector('.board');
    const positions = target.dataset.position.split(' ').map(p => +p);
    const start = document.querySelector('.start');

    const gameboard = player.gameboard;

    selection.removeChild(ship);
    const battleShip = new _game_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"](shipType.length, shipType.name);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_2__.appearElement)(board, (0,_ship__WEBPACK_IMPORTED_MODULE_5__.loadSingleShip)(positions[0], positions[1], battleShip));

    gameboard.placeShip(battleShip, positions);

    start.onclick = () => {
        const allShips = gameboard.getShipPositions();
        if (allShips.length === 5) {
            const game = document.querySelector('.game');
            const allGameElements = game.querySelectorAll('.game > div');
            Array.from(allGameElements).forEach(element => {
                game.removeChild(element);
            })

            const board = (0,_board__WEBPACK_IMPORTED_MODULE_4__["default"])();
            const aiBoard = (0,_board__WEBPACK_IMPORTED_MODULE_4__["default"])('ai');

            const aiPlayer = new _game_player_player__WEBPACK_IMPORTED_MODULE_0__["default"]();
            aiPlayer.randomGameboard();

            (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_2__.appearElement)(game, board);
            (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_2__.appearElement)(game, aiBoard);
            (0,_ship__WEBPACK_IMPORTED_MODULE_5__.loadShips)(gameboard);
            
            (0,_attack__WEBPACK_IMPORTED_MODULE_3__["default"])(player, aiPlayer);
        }
    }
}



/***/ }),

/***/ "./src/ui/game/restart.js":
/*!********************************!*\
  !*** ./src/ui/game/restart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ restartTheGame)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/ui/utils/createElement.js");
/* harmony import */ var _assets_modal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/modal.png */ "./src/assets/modal.png");
/* harmony import */ var _assets_notice_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/notice.png */ "./src/assets/notice.png");
/* harmony import */ var _assets_newstart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/newstart.png */ "./src/assets/newstart.png");
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _utils_loadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/loadImage */ "./src/ui/utils/loadImage.js");









function restartTheGame(loser) {
    const modal = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'modal');
    const modalBar = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'modal__bar')
    const modalNotice = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'modal__notice');
    const modalNoticeImage = (0,_utils_loadImage__WEBPACK_IMPORTED_MODULE_5__.loadImage)(_assets_notice_png__WEBPACK_IMPORTED_MODULE_2__, 'modal__notice--img');
    const modalRestart = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'modal__restart');
    const modalRestartImage = (0,_utils_loadImage__WEBPACK_IMPORTED_MODULE_5__.loadImage)(_assets_newstart_png__WEBPACK_IMPORTED_MODULE_3__, 'modal__restart--img');

    const mainHeadText = `You ${loser === 'player' ? "Lost" : "Win"}!`

    const mainSecondText = 'Click on the "New Game" button to restart the game';

    const modalHead = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'modal__head');
    const modalInfo = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'modal__info');

    modalHead.textContent = mainHeadText;
    modalInfo.textContent = mainSecondText;

    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modal, modalBar);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modalNotice, modalNoticeImage);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modalRestart, modalRestartImage);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modalBar, modalNotice);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modalBar, modalRestart);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modalBar, modalHead)
    ;(0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(modalBar, modalInfo)

    ;(0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_4__.appearElement)(document.body, modal);

    modalRestart.onclick = () => {
        window.location.reload();
    }
}



/***/ }),

/***/ "./src/ui/game/selectionPanel.js":
/*!***************************************!*\
  !*** ./src/ui/game/selectionPanel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSelectionPanel)
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/ui/utils/createElement.js");
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _utils_loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loadImage */ "./src/ui/utils/loadImage.js");
/* harmony import */ var _assets_start_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/start.png */ "./src/assets/start.png");
/* harmony import */ var _assets_notice_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/notice.png */ "./src/assets/notice.png");
/* harmony import */ var _assets_ships_battleship_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/ships/battleship.png */ "./src/assets/ships/battleship.png");
/* harmony import */ var _assets_ships_cruiser_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/ships/cruiser.png */ "./src/assets/ships/cruiser.png");
/* harmony import */ var _assets_ships_destroyer_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/ships/destroyer.png */ "./src/assets/ships/destroyer.png");
/* harmony import */ var _assets_ships_rescue_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/ships/rescue.png */ "./src/assets/ships/rescue.png");
/* harmony import */ var _assets_ships_patrol_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/ships/patrol.png */ "./src/assets/ships/patrol.png");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ship */ "./src/ui/game/ship.js");















function createSelectionPanel() {
    const selection = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'selection');
    
    const start = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'start');
    const startImage = (0,_utils_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(_assets_start_png__WEBPACK_IMPORTED_MODULE_3__, 'start__img');

    const notice = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'notice');
    const noticeImage = (0,_utils_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(_assets_notice_png__WEBPACK_IMPORTED_MODULE_4__, 'notice__img');


    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(start, startImage);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, start);

    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(notice, noticeImage);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, notice);

    const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_10__["default"])('battleship', _assets_ships_battleship_png__WEBPACK_IMPORTED_MODULE_5__);
    const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_10__["default"])('cruiser', _assets_ships_cruiser_png__WEBPACK_IMPORTED_MODULE_6__);
    const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_10__["default"])('destroyer', _assets_ships_destroyer_png__WEBPACK_IMPORTED_MODULE_7__);
    const rescue = (0,_ship__WEBPACK_IMPORTED_MODULE_10__["default"])('rescue', _assets_ships_rescue_png__WEBPACK_IMPORTED_MODULE_8__);
    const patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_10__["default"])('patrol', _assets_ships_patrol_png__WEBPACK_IMPORTED_MODULE_9__);

    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, battleship);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, cruiser);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, destroyer);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, rescue);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_1__.appearElement)(selection, patrol);

    return selection;
}



/***/ }),

/***/ "./src/ui/game/ship.js":
/*!*****************************!*\
  !*** ./src/ui/game/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShip),
/* harmony export */   loadShips: () => (/* binding */ loadShips),
/* harmony export */   loadSingleShip: () => (/* binding */ loadSingleShip)
/* harmony export */ });
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createElement */ "./src/ui/utils/createElement.js");
/* harmony import */ var _utils_loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loadImage */ "./src/ui/utils/loadImage.js");
/* harmony import */ var _assets_ships_battleship_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/ships/battleship.png */ "./src/assets/ships/battleship.png");
/* harmony import */ var _assets_ships_cruiser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/ships/cruiser.png */ "./src/assets/ships/cruiser.png");
/* harmony import */ var _assets_ships_destroyer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/ships/destroyer.png */ "./src/assets/ships/destroyer.png");
/* harmony import */ var _assets_ships_rescue_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/ships/rescue.png */ "./src/assets/ships/rescue.png");
/* harmony import */ var _assets_ships_patrol_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/ships/patrol.png */ "./src/assets/ships/patrol.png");










// Battleship
// Cruiser
// Destroyer
// Rescue
// Patrol

const shipsAssets = {
    'battleship': _assets_ships_battleship_png__WEBPACK_IMPORTED_MODULE_3__,
    'cruiser': _assets_ships_cruiser_png__WEBPACK_IMPORTED_MODULE_4__,
    'destroyer': _assets_ships_destroyer_png__WEBPACK_IMPORTED_MODULE_5__,
    'rescue': _assets_ships_rescue_png__WEBPACK_IMPORTED_MODULE_6__,
    'patrol': _assets_ships_patrol_png__WEBPACK_IMPORTED_MODULE_7__,
};

function createShip(shipName, image) {
    const ship = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', shipName);
    const shipImage = (0,_utils_loadImage__WEBPACK_IMPORTED_MODULE_2__.loadImage)(image, 'ship__img');

    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(ship, shipImage);

    return ship;
}

function loadSingleShip(x, y, ship) {
    const start = 2;
    const shipType = ship.type;
    const buildShip = createShip(shipType, shipsAssets[shipType]);
    buildShip.style.gridRow = `${start + x} / ${start + x + ship.length}`;
    buildShip.style.gridColumn = `${start + y} / ${start + y + 1}`;

    return buildShip;
}

function loadShips(board) {
    const shipPositions = board.getShipPositions();
    const gameboard = board.getGameBoard();

    const boardClass = document.querySelector('.board');

    shipPositions.forEach((position) => {
        const buildShip = loadSingleShip(position[0], position[1], gameboard[position[0]][position[1]]);
        (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_0__.appearElement)(boardClass, buildShip);
    });
}

 

/***/ }),

/***/ "./src/ui/page/selection.js":
/*!**********************************!*\
  !*** ./src/ui/page/selection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSelection)
/* harmony export */ });
/* harmony import */ var _game_selectionPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/selectionPanel */ "./src/ui/game/selectionPanel.js");
/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/board */ "./src/ui/game/board.js");
/* harmony import */ var _utils_appearElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/appearElement */ "./src/ui/utils/appearElement.js");
/* harmony import */ var _game_dragndrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/dragndrop */ "./src/ui/game/dragndrop.js");
/* harmony import */ var _game_player_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../game/player/player */ "./src/game/player/player.js");






function createSelection() {
    const game = document.querySelector('.game');
    const selectionGameboard = (0,_game_board__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const selection = (0,_game_selectionPanel__WEBPACK_IMPORTED_MODULE_0__["default"])();

    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_2__.appearElement)(game, selectionGameboard);
    (0,_utils_appearElement__WEBPACK_IMPORTED_MODULE_2__.appearElement)(game, selection);

    const player = new _game_player_player__WEBPACK_IMPORTED_MODULE_4__["default"]();

    (0,_game_dragndrop__WEBPACK_IMPORTED_MODULE_3__["default"])(selection, player)
}



/***/ }),

/***/ "./src/ui/utils/appearElement.js":
/*!***************************************!*\
  !*** ./src/ui/utils/appearElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appearElement: () => (/* binding */ appearElement)
/* harmony export */ });
function appearElement(where, what) {
    where.appendChild(what);
}



/***/ }),

/***/ "./src/ui/utils/createElement.js":
/*!***************************************!*\
  !*** ./src/ui/utils/createElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function createElement(element, className) {
    const newElement = document.createElement(element);
    newElement.className = className;
    return newElement;
}



/***/ }),

/***/ "./src/ui/utils/loadImage.js":
/*!***********************************!*\
  !*** ./src/ui/utils/loadImage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadImage: () => (/* binding */ loadImage)
/* harmony export */ });
function loadImage(src, className) {
    const image = new Image();
    image.src = src;
    image.className = className;
    return image;
}



/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85f24eb4c78811f09169.png";

/***/ }),

/***/ "./src/assets/board.png":
/*!******************************!*\
  !*** ./src/assets/board.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af585d60010b340701d6.png";

/***/ }),

/***/ "./src/assets/fire.png":
/*!*****************************!*\
  !*** ./src/assets/fire.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9737e71c0e2b78f5350.png";

/***/ }),

/***/ "./src/assets/metalic.png":
/*!********************************!*\
  !*** ./src/assets/metalic.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3d1e4c5085d7ab7550d.png";

/***/ }),

/***/ "./src/assets/modal.png":
/*!******************************!*\
  !*** ./src/assets/modal.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec60aff35fdf0f4302cc.png";

/***/ }),

/***/ "./src/assets/newstart.png":
/*!*********************************!*\
  !*** ./src/assets/newstart.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2194674f33607dc274f.png";

/***/ }),

/***/ "./src/assets/notice.png":
/*!*******************************!*\
  !*** ./src/assets/notice.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a450909a14c1872de373.png";

/***/ }),

/***/ "./src/assets/oceangrid.png":
/*!**********************************!*\
  !*** ./src/assets/oceangrid.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbe8ef01db907484578e.png";

/***/ }),

/***/ "./src/assets/radar.png":
/*!******************************!*\
  !*** ./src/assets/radar.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e850318401fea6d2219b.png";

/***/ }),

/***/ "./src/assets/ships/battleship.png":
/*!*****************************************!*\
  !*** ./src/assets/ships/battleship.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd7c81a7a89a95e632b4.png";

/***/ }),

/***/ "./src/assets/ships/cruiser.png":
/*!**************************************!*\
  !*** ./src/assets/ships/cruiser.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "977f7cb95eba80bdb7da.png";

/***/ }),

/***/ "./src/assets/ships/destroyer.png":
/*!****************************************!*\
  !*** ./src/assets/ships/destroyer.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3602b71cc2d15ccaf357.png";

/***/ }),

/***/ "./src/assets/ships/patrol.png":
/*!*************************************!*\
  !*** ./src/assets/ships/patrol.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7dda39596d6f1863569.png";

/***/ }),

/***/ "./src/assets/ships/rescue.png":
/*!*************************************!*\
  !*** ./src/assets/ships/rescue.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5135cde1c57929876d0f.png";

/***/ }),

/***/ "./src/assets/start.png":
/*!******************************!*\
  !*** ./src/assets/start.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "354f2d2a42be10b3c679.png";

/***/ }),

/***/ "./src/assets/water.png":
/*!******************************!*\
  !*** ./src/assets/water.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3d20645a33c0f2b3f24.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui_game_restart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game/restart */ "./src/ui/game/restart.js");
/* harmony import */ var _ui_page_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/page/selection */ "./src/ui/page/selection.js");




(0,_ui_page_selection__WEBPACK_IMPORTED_MODULE_2__["default"])();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEI7QUFDRzs7QUFFbEQsOERBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL2dhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lL3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUvYXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZ2FtZS9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUvZHJhZ25kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZ2FtZS9yZXN0YXJ0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZ2FtZS9zZWxlY3Rpb25QYW5lbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3BhZ2Uvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvdXRpbHMvYXBwZWFyRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3V0aWxzL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS91dGlscy9sb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL29jZWFuZ3JpZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tZXRhbGljLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JvYXJkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21vZGFsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDExNSwgMTExLCAxMTEsIC41KSAyMCUsIHJnYmEoNjksIDU2LCA2OSwgLjUpIDY1JSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgZm9udC1mYW1pbHk6IFwiSGFuZGpldFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ2FtZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBnYXA6IDEwMHB4O1xuICAgIGNvbG9yOiByZ2IoNjYsIDE4NCwgMTMxKTtcbiAgICBjb2xvcjogcmdiKDE5NCwgNzcsIDQ0KTtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCA2MHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgNjBweCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcbn1cblxuLnBvc2l0aW9uLW51bWJlcixcbi5wb3NpdGlvbi1sZXR0ZXIsXG4ucG9zaXRpb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGNvbG9yOiAjMThCQUMxO1xufVxuXG4ucG9zaXRpb24tbnVtYmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDEpIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDIpIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDMpIHtcbiAgICBncmlkLXJvdzogNCAvIDU7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDQpIHtcbiAgICBncmlkLXJvdzogNSAvIDY7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDUpIHtcbiAgICBncmlkLXJvdzogNiAvIDc7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDYpIHtcbiAgICBncmlkLXJvdzogNyAvIDg7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDcpIHtcbiAgICBncmlkLXJvdzogOCAvIDk7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDgpIHtcbiAgICBncmlkLXJvdzogOSAvIDEwO1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg5KSB7XG4gICAgZ3JpZC1yb3c6IDEwIC8gMTE7XG59XG5cbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDEwKSB7XG4gICAgZ3JpZC1yb3c6IDExIC8gMTI7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXIge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTEpIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDEyKSB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xufVxuXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxMykge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTQpIHtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE1KSB7XG4gICAgZ3JpZC1jb2x1bW46IDYgLyA3O1xufVxuXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxNikge1xuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTcpIHtcbiAgICBncmlkLWNvbHVtbjogOCAvIDk7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE4KSB7XG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMDtcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTkpIHtcbiAgICBncmlkLWNvbHVtbjogMTAgLyAxMTtcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMjApIHtcbiAgICBncmlkLWNvbHVtbjogMTEgLyAxMjtcbn1cblxuLnNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgNjBweCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cblxuLnN0YXJ0IHtcbiAgICBncmlkLXJvdzogMTIgLyAxMztcbiAgICBncmlkLWNvbHVtbjogNCAvIDc7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgc2NhbGU6IDEuMjtcbn1cblxuLnN0YXJ0OmhvdmVyIHtcbiAgICBzY2FsZTogMS4yNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGFydCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm5vdGljZSB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gOTtcbiAgICBzY2FsZTogMS4xO1xufVxuXG4ubm90aWNlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2hpcF9faW1nLFxuLm1pc3NlZC1hdHRhY2tfX2ltZyxcbi5oaXR0ZWQtYXR0YWNrX19pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uYmF0dGxlc2hpcCB7XG4gICAgZ3JpZC1yb3c6IDMgLyA4O1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbn1cblxuLmNydWlzZXIge1xuICAgIGdyaWQtcm93OiAzIC8gNztcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG59XG5cbi5kZXN0cm95ZXIge1xuICAgIGdyaWQtcm93OiAzIC8gNztcbiAgICBncmlkLWNvbHVtbjogNyAvIDg7XG59XG5cbi5yZXNjdWUge1xuICAgIGdyaWQtcm93OiA4IC8gMTE7XG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xufVxuXG4ucGF0cm9sIHtcbiAgICBncmlkLXJvdzogOCAvIDExO1xuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcbn1cblxuLm1pc3NlZC1hdHRhY2ssXG4uaGl0dGVkLWF0dGFjayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLnNxdWFyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjNEY0MjMzO1xufVxuXG4ubW9kYWxfX2JhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDYwcHgpO1xuXG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDEwMHZoIHJnYmEoNjksIDU2LCA2OSwgLjUpLFxuICAgICAgICAxcHggMXB4IDEwcHggMTBweCByZ2JhKDY5LCA1NiwgNjksIC41KSBpbnNldDtcbn1cblxuLm1vZGFsX19ub3RpY2Uge1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDEwO1xufVxuXG4ubW9kYWxfX25vdGljZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubW9kYWxfX3Jlc3RhcnQge1xuICAgIGdyaWQtcm93OiAxMCAvIDExO1xuICAgIGdyaWQtY29sdW1uOiA0IC8gODtcbn1cblxuLm1vZGFsX19yZXN0YXJ0OmhvdmVyIHtcbiAgICBzY2FsZTogMS4wNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbF9fcmVzdGFydCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWxfX2hlYWQge1xuICAgIGdyaWQtcm93OiA0IC8gNTtcbiAgICBncmlkLWNvbHVtbjogMyAvIDk7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLm1vZGFsX19pbmZvIHtcbiAgICBncmlkLXJvdzogNiAvIDk7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA5O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiA0MHB4O1xuXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0s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NUIsd0JBQXdCO0lBQ3hCLDJCQUEyQjs7SUFFM0I7b0RBQ2dEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7SUFFbEIsa0JBQWtCOztJQUVsQixlQUFlOztJQUVmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMTUsIDExMSwgMTExLCAuNSkgMjAlLCByZ2JhKDY5LCA1NiwgNjksIC41KSA2NSUpLCB1cmwoLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIkhhbmRqZXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmdhbWUge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgY29sb3I6IHJnYig2NiwgMTg0LCAxMzEpO1xcbiAgICBjb2xvcjogcmdiKDE5NCwgNzcsIDQ0KTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDYwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgNjBweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9vY2VhbmdyaWQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyLFxcbi5wb3NpdGlvbi1sZXR0ZXIsXFxuLnBvc2l0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL21ldGFsaWMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGNvbG9yOiAjMThCQUMxO1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnBvc2l0aW9uLW51bWJlcjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDMpIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtcm93OiA1IC8gNjtcXG59XFxuXFxuLnBvc2l0aW9uLW51bWJlcjpudGgtY2hpbGQoNSkge1xcbiAgICBncmlkLXJvdzogNiAvIDc7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDYpIHtcXG4gICAgZ3JpZC1yb3c6IDcgLyA4O1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg3KSB7XFxuICAgIGdyaWQtcm93OiA4IC8gOTtcXG59XFxuXFxuLnBvc2l0aW9uLW51bWJlcjpudGgtY2hpbGQoOCkge1xcbiAgICBncmlkLXJvdzogOSAvIDEwO1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg5KSB7XFxuICAgIGdyaWQtcm93OiAxMCAvIDExO1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgxMCkge1xcbiAgICBncmlkLXJvdzogMTEgLyAxMjtcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxMikge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxufVxcblxcbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDEzKSB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTQpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxNSkge1xcbiAgICBncmlkLWNvbHVtbjogNiAvIDc7XFxufVxcblxcbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE2KSB7XFxuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTcpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDggLyA5O1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxOCkge1xcbiAgICBncmlkLWNvbHVtbjogOSAvIDEwO1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxOSkge1xcbiAgICBncmlkLWNvbHVtbjogMTAgLyAxMTtcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMjApIHtcXG4gICAgZ3JpZC1jb2x1bW46IDExIC8gMTI7XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDYwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvYm9hcmQucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxufVxcblxcbi5zdGFydCB7XFxuICAgIGdyaWQtcm93OiAxMiAvIDEzO1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDc7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXFxuLnN0YXJ0OmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0YXJ0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ub3RpY2Uge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gOTtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLm5vdGljZSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcF9faW1nLFxcbi5taXNzZWQtYXR0YWNrX19pbWcsXFxuLmhpdHRlZC1hdHRhY2tfX2ltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5iYXR0bGVzaGlwIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA4O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxufVxcblxcbi5jcnVpc2VyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA3O1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxufVxcblxcbi5kZXN0cm95ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDc7XFxuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcXG59XFxuXFxuLnJlc2N1ZSB7XFxuICAgIGdyaWQtcm93OiA4IC8gMTE7XFxuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcXG59XFxuXFxuLnBhdHJvbCB7XFxuICAgIGdyaWQtcm93OiA4IC8gMTE7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG59XFxuXFxuLm1pc3NlZC1hdHRhY2ssXFxuLmhpdHRlZC1hdHRhY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBjb2xvcjogIzRGNDIzMztcXG59XFxuXFxuLm1vZGFsX19iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA2MHB4KTtcXG5cXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvbW9kYWwucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxMDB2aCByZ2JhKDY5LCA1NiwgNjksIC41KSxcXG4gICAgICAgIDFweCAxcHggMTBweCAxMHB4IHJnYmEoNjksIDU2LCA2OSwgLjUpIGluc2V0O1xcbn1cXG5cXG4ubW9kYWxfX25vdGljZSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAxMDtcXG59XFxuXFxuLm1vZGFsX19ub3RpY2UgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLm1vZGFsX19yZXN0YXJ0IHtcXG4gICAgZ3JpZC1yb3c6IDEwIC8gMTE7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gODtcXG59XFxuXFxuLm1vZGFsX19yZXN0YXJ0OmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMDU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsX19yZXN0YXJ0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWxfX2hlYWQge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gOTtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5tb2RhbF9faW5mbyB7XFxuICAgIGdyaWQtcm93OiA2IC8gOTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA5O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi4vc2hpcC9zaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAjYm9hcmQ7XG4gICAgI2hpdHRlZCA9ICdIJztcbiAgICAjbWlzc2VkID0gJ00nO1xuICAgICNzaGlwc1Bvc2l0aW9uID0gW107XG4gICAgI3NoaXBzVHlwZXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVCb2FyZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSAobmV3IEFycmF5KDEwKSkuZmlsbChbXSk7XG4gICAgICAgIGFycmF5LmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gWy4uLihuZXcgQXJyYXkoMTApKS5maWxsKFtdKV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBnZXRHYW1lQm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgICB9XG5cbiAgICBnZXRTaGlwUG9zaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2hpcHNQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRTaGlwVHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwc1R5cGVzO1xuICAgIH1cblxuICAgIGdldEhpdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdHRlZDtcbiAgICB9XG5cbiAgICBnZXRNaXNzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNtaXNzZWQ7XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXBUeXBlLCBjb29yZGluYXRlcykge1xuICAgICAgICBjb25zdCBzaGlwID0gc2hpcFR5cGU7XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLiNib2FyZDtcblxuICAgICAgICBpZiAoKGJvYXJkLmxlbmd0aCAtICh4ICsgc2hpcC5sZW5ndGgpKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIkVSUk9SXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSAobmV3IEFycmF5KHNoaXAubGVuZ3RoKSkuZmlsbChzaGlwKTtcblxuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgeCArPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNzaGlwc1Bvc2l0aW9uLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICB0aGlzLiNzaGlwc1R5cGVzLnB1c2goc2hpcFR5cGUudHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuZ2V0R2FtZUJvYXJkKCk7XG5cbiAgICAgICAgbGV0IGF0dGFja0Nvb3JkID0gYm9hcmRbeF1beV07XG5cbiAgICAgICAgY29uc3QgaXNJbnN0YW5jZU9mID0gYXR0YWNrQ29vcmQgaW5zdGFuY2VvZiBTaGlwO1xuXG4gICAgICAgIGlmICghaXNJbnN0YW5jZU9mKVxuICAgICAgICAgICAgKHRoaXMuI2JvYXJkKVt4XVt5XSA9IHRoaXMuI21pc3NlZDtcblxuICAgICAgICBpZiAoIShhdHRhY2tDb29yZCBpbnN0YW5jZW9mIFNoaXApXG4gICAgICAgICAgICB8fCBhdHRhY2tDb29yZCA9PT0gdGhpcy4jaGl0dGVkXG4gICAgICAgICAgICB8fCBhdHRhY2tDb29yZCA9PT0gdGhpcy4jbWlzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgICAgKHRoaXMuI2JvYXJkKVt4XVt5XSA9IHRoaXMuI2hpdHRlZDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0FsbFNoaXBTdW5rKCkge1xuICAgICAgICBsZXQgaXNIaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmdldEdhbWVCb2FyZCgpO1xuICAgICAgICBsZXQgYm9hcmRWYWx1ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYm9hcmRbaV0pO1xuICAgICAgICAgICAgYm9hcmRWYWx1ZXMgPSBbLi4uYm9hcmRWYWx1ZXMsIC4uLnZhbHVlc11cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYm9hcmRWYWx1ZXMuZmluZCh2YWx1ZSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFNoaXApKSB7XG4gICAgICAgICAgICBpc0hpdHRlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0hpdHRlZDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL2dhbWVib2FyZC9nYW1lYm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi4vc2hpcC9zaGlwJztcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgfVxuXG4gICAgaGFzR2FtZWJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgbWFrZVJhbmRvbUF0dGFjayhnYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IHJhbmRvbVgsIHJhbmRvbVk7XG5cbiAgICAgICAgbGV0IHNoaXAgPSBudWxsO1xuXG4gICAgICAgIHJhbmRvbVggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTAwKSAlIDkpO1xuICAgICAgICByYW5kb21ZID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSA5KVxuICAgICAgICBjb25zdCBoaXR0ZWQgPSBnYW1lYm9hcmQuZ2V0SGl0dGVkKCk7XG4gICAgICAgIGNvbnN0IG1pc3NlZCA9IGdhbWVib2FyZC5nZXRNaXNzZWQoKTtcblxuICAgICAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5nZXRHYW1lQm9hcmQoKTtcblxuICAgICAgICB3aGlsZSAoYm9hcmRbcmFuZG9tWF1bcmFuZG9tWV0gPT09IGhpdHRlZFxuICAgICAgICAgICAgfHwgYm9hcmRbcmFuZG9tWF1bcmFuZG9tWV0gPT09IG1pc3NlZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTAwKSAlIDkpO1xuICAgICAgICAgICAgcmFuZG9tWSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMDApICUgOSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9hcmRbcmFuZG9tWF1bcmFuZG9tWV0gaW5zdGFuY2VvZiBTaGlwKVxuICAgICAgICAgICAgc2hpcCA9IGJvYXJkW3JhbmRvbVhdW3JhbmRvbVldO1xuXG4gICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVgsIHJhbmRvbVkpO1xuXG4gICAgICAgIHJldHVybiBbYm9hcmRbcmFuZG9tWF1bcmFuZG9tWV0sIHJhbmRvbVgsIHJhbmRvbVksIHNoaXBdO1xuICAgIH1cblxuICAgIHJhbmRvbUdhbWVib2FyZCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5nYW1lYm9hcmQ7XG5cbiAgICAgICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiYmF0dGxlc2hpcFwiLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJjcnVpc2VyXCIsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRlc3Ryb3llclwiLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJyZXNjdWVcIixcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwicGF0cm9sXCIsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgcmFuZG9tWCA9IG51bGwsIHJhbmRvbVkgPSBudWxsO1xuXG4gICAgICAgIHNoaXBUeXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHR5cGUubGVuZ3RoLCB0eXBlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGogPSAwO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSA5O1xuICAgICAgICAgICAgICAgIHJhbmRvbVkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApICUgOTtcblxuICAgICAgICAgICAgfSB3aGlsZSAoKHJhbmRvbVggKyBzaGlwLmxlbmd0aCAtIDEpID4gOSB8fCB0aGlzLnNwYWNlQXZhaWxhYmxlKGdhbWVib2FyZCwgW3JhbmRvbVgsIHJhbmRvbVldLCBzaGlwKSlcblxuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBbcmFuZG9tWCwgcmFuZG9tWV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNwYWNlQXZhaWxhYmxlKGdhbWVib2FyZCwgcG9zaXRpb25zLCBzaGlwKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBbcG9zaXRpb25zWzBdLCBwb3NpdGlvbnNbMV1dO1xuICAgICAgICBjb25zdCB0YWlsID0gW3Bvc2l0aW9uc1swXSArIHNoaXAubGVuZ3RoIC0gMSwgcG9zaXRpb25zWzFdXTtcblxuICAgICAgICBjb25zdCBpc1Bvc2l0aW9uID0gKGdhbWVib2FyZCwgeCwgeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh4ID49IDAgJiYgeSA+PSAwICYmIHggPCAxMCAmJiB5IDwgMTApID8gZ2FtZWJvYXJkW3hdW3ldIDogXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNUaGVyZUFueVNoaXAgPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IFtdO1xuXG4gICAgICAgIGxldCB4LCB5O1xuXG4gICAgICAgIGdhbWVib2FyZCA9IGdhbWVib2FyZC5nZXRHYW1lQm9hcmQoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoICYmICFpc1RoZXJlQW55U2hpcDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBbcG9zaXRpb25zWzBdICsgaSwgcG9zaXRpb25zWzFdXTtcblxuICAgICAgICAgICAgeCA9IGN1cnJlbnRQb3NpdGlvblswXSwgeSA9IGN1cnJlbnRQb3NpdGlvblsxXTtcblxuICAgICAgICAgICAgaWYgKGhlYWQudG9TdHJpbmcoKSA9PT0gY3VycmVudFBvc2l0aW9uLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBpc1RoZXJlQW55U2hpcCA9IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4IC0gMSwgeSAtIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCAtIDEsIHkpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCAtIDEsIHkgKyAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHgsIHkgLSAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHgsIHkgKyAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHgsIHkpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YWlsLnRvU3RyaW5nKCkgPT09IGN1cnJlbnRQb3NpdGlvbi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgaXNUaGVyZUFueVNoaXAgPSBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCArIDEsIHkgLSAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHggKyAxLCB5KSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHggKyAxLCB5ICsgMSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4LCB5IC0gMSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4LCB5ICsgMSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4LCB5KSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNUaGVyZUFueVNoaXAgPSBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCwgeSAtIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCwgeSArIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCwgeSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVGhlcmVBbnlTaGlwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNsYXNzIFNoaXAge1xuICAgICNoaXROdW07XG4gICAgY29uc3RydWN0b3IobGVuZ3RoID0gMCwgdHlwZSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy4jaGl0TnVtID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2hpdE51bSArPSAxO1xuICAgIH1cblxuICAgIGdldEhpdE51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2hpdE51bTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy4jaGl0TnVtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IHsgYXBwZWFyRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9hcHBlYXJFbGVtZW50XCI7XG5cbmltcG9ydCBTaGlwIGZyb20gJy4uLy4uL2dhbWUvc2hpcC9zaGlwJztcbmltcG9ydCBIaXQgZnJvbSAnLi4vLi4vYXNzZXRzL2ZpcmUucG5nJztcbmltcG9ydCBNaXNzIGZyb20gJy4uLy4uL2Fzc2V0cy93YXRlci5wbmcnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tIFwiLi4vdXRpbHMvbG9hZEltYWdlXCI7XG5pbXBvcnQgeyBsb2FkU2luZ2xlU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCByZXN0YXJ0VGhlR2FtZSBmcm9tIFwiLi9yZXN0YXJ0XCI7XG5cbmZ1bmN0aW9uIGF0dGFja01vdmVzKHBsYXllciwgYWkpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnN0IGFpQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQuYWknKTtcblxuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG4gICAgY29uc3QgYWlHYW1lYm9hcmQgPSBhaS5nYW1lYm9hcmQ7XG5cbiAgICBhaUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRhcmdldC5kYXRhc2V0LnBvc2l0aW9uLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGxldCBYID0gK3Bvc2l0aW9uWzBdLCBZID0gK3Bvc2l0aW9uWzFdO1xuXG4gICAgICAgICAgICBwbGF5ZXJUdXJuKHRhcmdldCwgYWlHYW1lYm9hcmQsIGFpQm9hcmQsIFgsIFkpO1xuXG4gICAgICAgICAgICBhaVR1cm4ocGxheWVyR2FtZWJvYXJkLCBwbGF5ZXJCb2FyZCwgYWkpO1xuXG4gICAgICAgICAgICBpZiAoYWlHYW1lYm9hcmQuaXNBbGxTaGlwU3VuaygpIHx8IHBsYXllckdhbWVib2FyZC5pc0FsbFNoaXBTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb3NlciA9IGFpR2FtZWJvYXJkLmlzQWxsU2hpcFN1bmsgPyBcImFpXCIgOiAncGxheWVyJztcbiAgICAgICAgICAgICAgICByZXN0YXJ0VGhlR2FtZShsb3Nlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbGF5ZXJUdXJuKHRhcmdldCwgYWlHYW1lYm9hcmQsIGFpQm9hcmQsIFgsIFkpIHtcbiAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgaWYgKGFpR2FtZWJvYXJkLmdldEdhbWVCb2FyZCgpW1hdW1ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICBzaGlwID0gYWlHYW1lYm9hcmQuZ2V0R2FtZUJvYXJkKClbWF1bWV07XG4gICAgfVxuXG4gICAgYWlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhYLCBZKTtcblxuICAgIGNvbnN0IGVmZmVjdCA9IGF0dGFja0VmZmVjdCh0YXJnZXQsIGFpR2FtZWJvYXJkLmdldEdhbWVCb2FyZCgpW1hdW1ldKTtcbiAgICBhcHBlYXJFbGVtZW50KGFpQm9hcmQsIGVmZmVjdCk7XG5cbiAgICBhaUJvYXJkLnJlbW92ZUNoaWxkKHRhcmdldCk7XG5cbiAgICBpZiAoc2hpcD8uaXNTdW5rKCkpIHtcbiAgICAgICAgZGVzdHJveUVmZmVjdChzaGlwLCBhaUJvYXJkLCBhaUdhbWVib2FyZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFpVHVybihwbGF5ZXJHYW1lYm9hcmQsIHBsYXllckJvYXJkLCBhaSkge1xuICAgIGNvbnN0IFthdHRhY2ssIFgsIFksIHNoaXBdID0gYWkubWFrZVJhbmRvbUF0dGFjayhwbGF5ZXJHYW1lYm9hcmQpO1xuICAgIGNvbnN0IHRhcmdldCA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtYfSAke1l9XCJdYCk7XG5cbiAgICBjb25zdCBlZmZlY3QgPSBhdHRhY2tFZmZlY3QodGFyZ2V0LCBwbGF5ZXJHYW1lYm9hcmQuZ2V0R2FtZUJvYXJkKClbWF1bWV0pO1xuICAgIGFwcGVhckVsZW1lbnQocGxheWVyQm9hcmQsIGVmZmVjdCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuXG4gICAgaWYgKHNoaXA/LmlzU3VuaygpKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGdldFNoaXBQb3NpdGlvbkJ5VHlwZShzaGlwLCBwbGF5ZXJHYW1lYm9hcmQpO1xuICAgICAgICBmaWVsZERpc2Nsb3N1cmUoc2hpcC5sZW5ndGgsIFt4LCB5XSwgcGxheWVyQm9hcmQsIHBsYXllckdhbWVib2FyZC5nZXRHYW1lQm9hcmQoKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXN0cm95RWZmZWN0KHNoaXAsIGJvYXJkLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBnZXRTaGlwUG9zaXRpb25CeVR5cGUoc2hpcCwgZ2FtZWJvYXJkKTtcblxuICAgIGNvbnN0IGRlc3Ryb3llZFNoaXAgPSBsb2FkU2luZ2xlU2hpcCh4LCB5LCBzaGlwKTtcbiAgICBhcHBlYXJFbGVtZW50KGJvYXJkLCBkZXN0cm95ZWRTaGlwKTtcbiAgICBmaWVsZERpc2Nsb3N1cmUoc2hpcC5sZW5ndGgsIFt4LCB5XSwgYm9hcmQsIGdhbWVib2FyZC5nZXRHYW1lQm9hcmQoKSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFja0VmZmVjdChlbGVtZW50LCB0eXBlT2ZBdHRhY2sgPSBcIk1cIikge1xuICAgIGNvbnN0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtaXNzZWQtYXR0YWNrJyk7XG4gICAgY29uc3QgaW1hZ2UgPSB0eXBlT2ZBdHRhY2sgPT09IFwiTVwiID8gTWlzcyA6IEhpdDtcbiAgICBjb25zdCBpbWFnZUNsYXNzID0gdHlwZU9mQXR0YWNrID09PSBcIk1cIiA/IFwibWlzc2VkLWF0dGFja19faW1nXCIgOiBcImhpdHRlZC1hdHRhY2tfX2ltZ1wiO1xuICAgIGNvbnN0IGltZ0VsID0gbG9hZEltYWdlKGltYWdlLCBpbWFnZUNsYXNzKTtcblxuICAgIGFwcGVhckVsZW1lbnQoZGl2LCBpbWdFbCk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbi5zcGxpdCgnICcpO1xuICAgIGNvbnN0IFggPSArcG9zaXRpb25bMF0gKyAyLCBZID0gK3Bvc2l0aW9uWzFdICsgMjtcblxuICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gYCR7WH0gLyAke1ggKyAxfWA7XG4gICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtZfSAvICR7WSArIDF9YDtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGZpZWxkRGlzY2xvc3VyZShzaGlwTGVuZ3RoLCBjb29yZHMsIGJvYXJkLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBmdWxsQ29vcmRzID0gKG5ldyBBcnJheShzaGlwTGVuZ3RoKSkuZmlsbChudWxsKS5tYXAoKF8sIGMpID0+IFtjb29yZHNbMF0gKyBjLCBjb29yZHNbMV1dKTtcbiAgICBjb25zdCBkaXNjbG9zdXJlUG9zID0gW107XG4gICAgY29uc3Qgc3VyRmllbGRzID0gW1xuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbLTEsIDBdLFxuICAgICAgICBbLTEsIC0xXSxcbiAgICAgICAgWy0xLCAxXSxcbiAgICAgICAgWzEsIC0xXVxuICAgIF07XG4gICAgbGV0IHgsIHksIHN1clgsIHN1clk7XG5cbiAgICBmdWxsQ29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICB4ID0gY29vcmRbMF0sIHkgPSBjb29yZFsxXTtcbiAgICAgICAgc3VyRmllbGRzLmZvckVhY2goc3VyID0+IHtcbiAgICAgICAgICAgIHN1clggPSBzdXJbMF0gKyB4LCBzdXJZID0gc3VyWzFdICsgeTtcbiAgICAgICAgICAgIGlmICgoc3VyWCkgPj0gMCAmJiAoc3VyWSkgPj0gMFxuICAgICAgICAgICAgICAgICYmIChzdXJYKSA+PSAwICYmIChzdXJZKSA+PSAwXG4gICAgICAgICAgICAgICAgJiYgZ2FtZWJvYXJkW3N1clhdW3N1clldXG4gICAgICAgICAgICAgICAgJiYgZ2FtZWJvYXJkW3N1clhdW3N1clldICE9PSAnTSdcbiAgICAgICAgICAgICAgICAmJiBnYW1lYm9hcmRbc3VyWF1bc3VyWV0gIT09ICdIJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvc2l0aW9uPVwiJHtzdXJYfSAke3N1cll9XCJdYCk7XG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkW3N1clhdW3N1clldID0gJ00nO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IGF0dGFja0VmZmVjdChzcXVhcmUsIGdhbWVib2FyZFtzdXJYXVtzdXJZXSk7XG4gICAgICAgICAgICAgICAgYXBwZWFyRWxlbWVudChib2FyZCwgZWZmZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNoaXBQb3NpdGlvbkJ5VHlwZShzaGlwLCBnYW1lYm9hcmQpIHtcbiAgICBsZXQgc2hpcFBvc2l0aW9uID0gZ2FtZWJvYXJkLmdldFNoaXBQb3NpdGlvbnMoKTtcbiAgICBsZXQgc2hpcFR5cGVzID0gZ2FtZWJvYXJkLmdldFNoaXBUeXBlcygpO1xuICAgIGNvbnN0IHNoaXBUeXBlID0gc2hpcC50eXBlO1xuICAgIGNvbnN0IHNoaXBUeXBlSW5kZXggPSBzaGlwVHlwZXMuZmluZEluZGV4KHR5cGUgPT4gdHlwZSA9PT0gc2hpcFR5cGUpO1xuXG4gICAgY29uc3QgeCA9IHNoaXBQb3NpdGlvbltzaGlwVHlwZUluZGV4XVswXTtcbiAgICBjb25zdCB5ID0gc2hpcFBvc2l0aW9uW3NoaXBUeXBlSW5kZXhdWzFdO1xuXG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZXhwb3J0IHsgYXR0YWNrTW92ZXMgYXMgZGVmYXVsdCB9IiwiaW1wb3J0IHsgYXBwZWFyRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9hcHBlYXJFbGVtZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZUVsZW1lbnRcIjtcblxuaW1wb3J0IFJhZGFyIGZyb20gJy4uLy4uL2Fzc2V0cy9yYWRhci5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZFR5cGUgPSAncGxheWVyJykge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2JvYXJkJyk7XG5cbiAgICBpZiAoYm9hcmRUeXBlID09PSAnYWknKSB7XG4gICAgICAgIGJvYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtSYWRhcn0pYDtcbiAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYWknKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZVBvc2l0aW9uKCdwb3NpdGlvbi1udW1iZXInLCBpKVxuICAgICAgICBhcHBlYXJFbGVtZW50KGJvYXJkLCBkaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGJvYXJkTGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGJvYXJkTGV0dGVycy5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGNyZWF0ZVBvc2l0aW9uKCdwb3NpdGlvbi1sZXR0ZXInLCBsZXR0ZXIpO1xuICAgICAgICBhcHBlYXJFbGVtZW50KGJvYXJkLCBkaXYpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZW1wdHlQb3NpdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdwb3NpdGlvbicpO1xuICAgIGFwcGVhckVsZW1lbnQoYm9hcmQsIGVtcHR5UG9zaXRpb24pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3NxdWFyZScpO1xuICAgICAgICAgICAgZGl2LmRhdGFzZXQucG9zaXRpb24gPSBgJHtpfSAke2p9YDtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5ncmlkUm93ID0gYCR7aSArIDJ9IC8gJHtpICsgM31gO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtqICsgMn0gLyAke2ogKyAzfWA7XG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KGJvYXJkLCBkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbihjbGFzc05hbWUgPSBcImVtcHR5XCIsIHRleHRDb250ZW50KSB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY2xhc3NOYW1lKTtcblxuICAgIGlmIChjbGFzc05hbWUgPT09IFwiZW1wdHlcIikge1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGRpdi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uLy4uL2dhbWUvcGxheWVyL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi8uLi9nYW1lL3NoaXAvc2hpcCc7XG5pbXBvcnQgeyBhcHBlYXJFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvYXBwZWFyRWxlbWVudCc7XG5pbXBvcnQgYXR0YWNrTW92ZXMgZnJvbSAnLi9hdHRhY2snO1xuaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgbG9hZFNoaXBzLCBsb2FkU2luZ2xlU2hpcCB9IGZyb20gJy4vc2hpcCc7XG5cbmZ1bmN0aW9uIGRyYWduZHJvcChzZWxlY3Rpb24sIHBsYXllcikge1xuICAgIGNvbnN0IHNoaXBUeXBlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY3J1aXNlclwiLFxuICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImRlc3Ryb3llclwiLFxuICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInJlc2N1ZVwiLFxuICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInBhdHJvbFwiLFxuICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBsZXQgdGFyZ2V0LCBzaGlwVHlwZSwgc2hpcFNlbGVjdGVkID0geyBpc1NlbGVjdGVkOiBmYWxzZSB9O1xuXG4gICAgdGFyZ2V0ID0gc2hpcFR5cGUgPSBudWxsO1xuXG4gICAgbGV0IHF1ZXVlID0gW107XG5cbiAgICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKTtcbiAgICAgICAgc2hpcFR5cGUgPSBzaGlwVHlwZXMuZmluZCh0eXBlID0+IHR5cGUubmFtZSA9PT0gdGFyZ2V0Py5jbGFzc05hbWUpO1xuXG4gICAgICAgIGlmIChzaGlwVHlwZSAmJiAhc2hpcFNlbGVjdGVkLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgc2hpcFNlbGVjdGVkLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHByZXZFbGVtZW50ID0gbnVsbDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4gZHJhZyhlLCB0YXJnZXQsIHNoaXBUeXBlLCBzaGlwU2VsZWN0ZWQsIHF1ZXVlLCBwbGF5ZXIpKTtcbn1cblxuZnVuY3Rpb24gZHJhZyhlLCBzaGlwLCBzaGlwVHlwZSwgc2VsZWN0ZWQsIHF1ZXVlLCBwbGF5ZXIpIHtcbiAgICBpZiAoIXNlbGVjdGVkLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNoaXAuc3R5bGUubGVmdCA9IGUucGFnZVggKyAncHgnO1xuICAgIHNoaXAuc3R5bGUudG9wID0gZS5wYWdlWSArICdweCc7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcFR5cGU/Lmxlbmd0aDtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBuZXcgU2hpcChzaGlwVHlwZS5sZW5ndGgsIHNoaXBUeXBlLm5hbWUpO1xuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKSB7XG4gICAgICAgIHF1ZXVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0YXJnZXQuZGF0YXNldC5wb3NpdGlvbi5zcGxpdCgnICcpLm1hcChwID0+ICtwKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSAoKCtwb3NpdGlvblswXSArIHNoaXBMZW5ndGggLSAxKSA8PSA5KSAmJiAhcGxheWVyLnNwYWNlQXZhaWxhYmxlKGdhbWVib2FyZCwgcG9zaXRpb24sIGJhdHRsZVNoaXApID8gYHJnYmEoNjYsIDE4NCwgMTMxLCAuNSlgIDogYHJnYmEoMTk0LCA3NywgNDQsIC41KWBcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIkeytwb3NpdGlvblswXSArIGl9ICR7K3Bvc2l0aW9uWzFdfVwiXWApO1xuICAgICAgICAgICAgaWYgKHNxdWFyZSkge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoKCgrcG9zaXRpb25bMF0gKyBzaGlwTGVuZ3RoIC0gMSkgPD0gOSlcbiAgICAgICAgICAgICAgICAmJiAhcGxheWVyLnNwYWNlQXZhaWxhYmxlKGdhbWVib2FyZCwgcG9zaXRpb24sIGJhdHRsZVNoaXApKSB7XG4gICAgICAgICAgICAgICAgZHJvcChwbGF5ZXIsIHNoaXBUeXBlLCBzaGlwLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJvcChwbGF5ZXIsIHNoaXBUeXBlLCBzaGlwLCB0YXJnZXQpIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0aW9uJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSB0YXJnZXQuZGF0YXNldC5wb3NpdGlvbi5zcGxpdCgnICcpLm1hcChwID0+ICtwKTtcbiAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyLmdhbWVib2FyZDtcblxuICAgIHNlbGVjdGlvbi5yZW1vdmVDaGlsZChzaGlwKTtcbiAgICBjb25zdCBiYXR0bGVTaGlwID0gbmV3IFNoaXAoc2hpcFR5cGUubGVuZ3RoLCBzaGlwVHlwZS5uYW1lKTtcbiAgICBhcHBlYXJFbGVtZW50KGJvYXJkLCBsb2FkU2luZ2xlU2hpcChwb3NpdGlvbnNbMF0sIHBvc2l0aW9uc1sxXSwgYmF0dGxlU2hpcCkpO1xuXG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCBwb3NpdGlvbnMpO1xuXG4gICAgc3RhcnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsU2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xuICAgICAgICBpZiAoYWxsU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbEdhbWVFbGVtZW50cyA9IGdhbWUucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUgPiBkaXYnKTtcbiAgICAgICAgICAgIEFycmF5LmZyb20oYWxsR2FtZUVsZW1lbnRzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgICAgICAgICBjb25zdCBhaUJvYXJkID0gY3JlYXRlQm9hcmQoJ2FpJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFpUGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgICAgICAgICAgYWlQbGF5ZXIucmFuZG9tR2FtZWJvYXJkKCk7XG5cbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoZ2FtZSwgYm9hcmQpO1xuICAgICAgICAgICAgYXBwZWFyRWxlbWVudChnYW1lLCBhaUJvYXJkKTtcbiAgICAgICAgICAgIGxvYWRTaGlwcyhnYW1lYm9hcmQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhdHRhY2tNb3ZlcyhwbGF5ZXIsIGFpUGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgZHJhZ25kcm9wIGFzIGRlZmF1bHQgfSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9hc3NldHMvbW9kYWwucG5nJztcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vLi4vYXNzZXRzL25vdGljZS5wbmcnO1xuaW1wb3J0IE5ld1N0YXJ0IGZyb20gJy4uLy4uL2Fzc2V0cy9uZXdzdGFydC5wbmcnO1xuXG5pbXBvcnQgeyBhcHBlYXJFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2FwcGVhckVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gXCIuLi91dGlscy9sb2FkSW1hZ2VcIlxuXG5mdW5jdGlvbiByZXN0YXJ0VGhlR2FtZShsb3Nlcikge1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vZGFsJyk7XG4gICAgY29uc3QgbW9kYWxCYXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9kYWxfX2JhcicpXG4gICAgY29uc3QgbW9kYWxOb3RpY2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9kYWxfX25vdGljZScpO1xuICAgIGNvbnN0IG1vZGFsTm90aWNlSW1hZ2UgPSBsb2FkSW1hZ2UoTm90aWNlLCAnbW9kYWxfX25vdGljZS0taW1nJyk7XG4gICAgY29uc3QgbW9kYWxSZXN0YXJ0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21vZGFsX19yZXN0YXJ0Jyk7XG4gICAgY29uc3QgbW9kYWxSZXN0YXJ0SW1hZ2UgPSBsb2FkSW1hZ2UoTmV3U3RhcnQsICdtb2RhbF9fcmVzdGFydC0taW1nJyk7XG5cbiAgICBjb25zdCBtYWluSGVhZFRleHQgPSBgWW91ICR7bG9zZXIgPT09ICdwbGF5ZXInID8gXCJMb3N0XCIgOiBcIldpblwifSFgXG5cbiAgICBjb25zdCBtYWluU2Vjb25kVGV4dCA9ICdDbGljayBvbiB0aGUgXCJOZXcgR2FtZVwiIGJ1dHRvbiB0byByZXN0YXJ0IHRoZSBnYW1lJztcblxuICAgIGNvbnN0IG1vZGFsSGVhZCA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgJ21vZGFsX19oZWFkJyk7XG4gICAgY29uc3QgbW9kYWxJbmZvID0gY3JlYXRlRWxlbWVudCgncCcsICdtb2RhbF9faW5mbycpO1xuXG4gICAgbW9kYWxIZWFkLnRleHRDb250ZW50ID0gbWFpbkhlYWRUZXh0O1xuICAgIG1vZGFsSW5mby50ZXh0Q29udGVudCA9IG1haW5TZWNvbmRUZXh0O1xuXG4gICAgYXBwZWFyRWxlbWVudChtb2RhbCwgbW9kYWxCYXIpO1xuICAgIGFwcGVhckVsZW1lbnQobW9kYWxOb3RpY2UsIG1vZGFsTm90aWNlSW1hZ2UpO1xuICAgIGFwcGVhckVsZW1lbnQobW9kYWxSZXN0YXJ0LCBtb2RhbFJlc3RhcnRJbWFnZSk7XG4gICAgYXBwZWFyRWxlbWVudChtb2RhbEJhciwgbW9kYWxOb3RpY2UpO1xuICAgIGFwcGVhckVsZW1lbnQobW9kYWxCYXIsIG1vZGFsUmVzdGFydCk7XG4gICAgYXBwZWFyRWxlbWVudChtb2RhbEJhciwgbW9kYWxIZWFkKVxuICAgIGFwcGVhckVsZW1lbnQobW9kYWxCYXIsIG1vZGFsSW5mbylcblxuICAgIGFwcGVhckVsZW1lbnQoZG9jdW1lbnQuYm9keSwgbW9kYWwpO1xuXG4gICAgbW9kYWxSZXN0YXJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IHJlc3RhcnRUaGVHYW1lIGFzIGRlZmF1bHQgfSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiXG5pbXBvcnQgeyBhcHBlYXJFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2FwcGVhckVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gXCIuLi91dGlscy9sb2FkSW1hZ2VcIjtcblxuaW1wb3J0IFN0YXJ0IGZyb20gJy4uLy4uL2Fzc2V0cy9zdGFydC5wbmcnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uLy4uL2Fzc2V0cy9ub3RpY2UucG5nJ1xuXG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC5wbmcnO1xuaW1wb3J0IENydWlzZXIgZnJvbSAnLi4vLi4vYXNzZXRzL3NoaXBzL2NydWlzZXIucG5nJztcbmltcG9ydCBEZXN0cm95ZXIgZnJvbSAnLi4vLi4vYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IFJlc2N1ZSBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvcmVzY3VlLnBuZyc7XG5pbXBvcnQgUGF0cm9sIGZyb20gJy4uLy4uL2Fzc2V0cy9zaGlwcy9wYXRyb2wucG5nJztcblxuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3Rpb25QYW5lbCgpIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2VsZWN0aW9uJyk7XG4gICAgXG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc3RhcnQnKTtcbiAgICBjb25zdCBzdGFydEltYWdlID0gbG9hZEltYWdlKFN0YXJ0LCAnc3RhcnRfX2ltZycpO1xuXG4gICAgY29uc3Qgbm90aWNlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ25vdGljZScpO1xuICAgIGNvbnN0IG5vdGljZUltYWdlID0gbG9hZEltYWdlKE5vdGljZSwgJ25vdGljZV9faW1nJyk7XG5cblxuICAgIGFwcGVhckVsZW1lbnQoc3RhcnQsIHN0YXJ0SW1hZ2UpO1xuICAgIGFwcGVhckVsZW1lbnQoc2VsZWN0aW9uLCBzdGFydCk7XG5cbiAgICBhcHBlYXJFbGVtZW50KG5vdGljZSwgbm90aWNlSW1hZ2UpO1xuICAgIGFwcGVhckVsZW1lbnQoc2VsZWN0aW9uLCBub3RpY2UpO1xuXG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoJ2JhdHRsZXNoaXAnLCBCYXR0bGVzaGlwKTtcbiAgICBjb25zdCBjcnVpc2VyID0gY3JlYXRlU2hpcCgnY3J1aXNlcicsIENydWlzZXIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoJ2Rlc3Ryb3llcicsIERlc3Ryb3llcik7XG4gICAgY29uc3QgcmVzY3VlID0gY3JlYXRlU2hpcCgncmVzY3VlJywgUmVzY3VlKTtcbiAgICBjb25zdCBwYXRyb2wgPSBjcmVhdGVTaGlwKCdwYXRyb2wnLCBQYXRyb2wpO1xuXG4gICAgYXBwZWFyRWxlbWVudChzZWxlY3Rpb24sIGJhdHRsZXNoaXApO1xuICAgIGFwcGVhckVsZW1lbnQoc2VsZWN0aW9uLCBjcnVpc2VyKTtcbiAgICBhcHBlYXJFbGVtZW50KHNlbGVjdGlvbiwgZGVzdHJveWVyKTtcbiAgICBhcHBlYXJFbGVtZW50KHNlbGVjdGlvbiwgcmVzY3VlKTtcbiAgICBhcHBlYXJFbGVtZW50KHNlbGVjdGlvbiwgcGF0cm9sKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNlbGVjdGlvblBhbmVsIGFzIGRlZmF1bHQgfSIsImltcG9ydCB7IGFwcGVhckVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvYXBwZWFyRWxlbWVudFwiXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZUVsZW1lbnRcIlxuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2xvYWRJbWFnZVwiO1xuXG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvYmF0dGxlc2hpcC5wbmcnO1xuaW1wb3J0IENydWlzZXIgZnJvbSAnLi4vLi4vYXNzZXRzL3NoaXBzL2NydWlzZXIucG5nJztcbmltcG9ydCBEZXN0cm95ZXIgZnJvbSAnLi4vLi4vYXNzZXRzL3NoaXBzL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IFJlc2N1ZSBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvcmVzY3VlLnBuZyc7XG5pbXBvcnQgUGF0cm9sIGZyb20gJy4uLy4uL2Fzc2V0cy9zaGlwcy9wYXRyb2wucG5nJztcblxuLy8gQmF0dGxlc2hpcFxuLy8gQ3J1aXNlclxuLy8gRGVzdHJveWVyXG4vLyBSZXNjdWVcbi8vIFBhdHJvbFxuXG5jb25zdCBzaGlwc0Fzc2V0cyA9IHtcbiAgICAnYmF0dGxlc2hpcCc6IEJhdHRsZXNoaXAsXG4gICAgJ2NydWlzZXInOiBDcnVpc2VyLFxuICAgICdkZXN0cm95ZXInOiBEZXN0cm95ZXIsXG4gICAgJ3Jlc2N1ZSc6IFJlc2N1ZSxcbiAgICAncGF0cm9sJzogUGF0cm9sLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwTmFtZSwgaW1hZ2UpIHtcbiAgICBjb25zdCBzaGlwID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc2hpcE5hbWUpO1xuICAgIGNvbnN0IHNoaXBJbWFnZSA9IGxvYWRJbWFnZShpbWFnZSwgJ3NoaXBfX2ltZycpO1xuXG4gICAgYXBwZWFyRWxlbWVudChzaGlwLCBzaGlwSW1hZ2UpO1xuXG4gICAgcmV0dXJuIHNoaXA7XG59XG5cbmZ1bmN0aW9uIGxvYWRTaW5nbGVTaGlwKHgsIHksIHNoaXApIHtcbiAgICBjb25zdCBzdGFydCA9IDI7XG4gICAgY29uc3Qgc2hpcFR5cGUgPSBzaGlwLnR5cGU7XG4gICAgY29uc3QgYnVpbGRTaGlwID0gY3JlYXRlU2hpcChzaGlwVHlwZSwgc2hpcHNBc3NldHNbc2hpcFR5cGVdKTtcbiAgICBidWlsZFNoaXAuc3R5bGUuZ3JpZFJvdyA9IGAke3N0YXJ0ICsgeH0gLyAke3N0YXJ0ICsgeCArIHNoaXAubGVuZ3RofWA7XG4gICAgYnVpbGRTaGlwLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtzdGFydCArIHl9IC8gJHtzdGFydCArIHkgKyAxfWA7XG5cbiAgICByZXR1cm4gYnVpbGRTaGlwO1xufVxuXG5mdW5jdGlvbiBsb2FkU2hpcHMoYm9hcmQpIHtcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zID0gYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGJvYXJkLmdldEdhbWVCb2FyZCgpO1xuXG4gICAgY29uc3QgYm9hcmRDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuXG4gICAgc2hpcFBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBidWlsZFNoaXAgPSBsb2FkU2luZ2xlU2hpcChwb3NpdGlvblswXSwgcG9zaXRpb25bMV0sIGdhbWVib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dKTtcbiAgICAgICAgYXBwZWFyRWxlbWVudChib2FyZENsYXNzLCBidWlsZFNoaXApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTaGlwIGFzIGRlZmF1bHQsIGxvYWRTaGlwcywgbG9hZFNpbmdsZVNoaXAgfSAiLCJpbXBvcnQgY3JlYXRlU2VsZWN0aW9uUGFuZWwgZnJvbSBcIi4uL2dhbWUvc2VsZWN0aW9uUGFuZWxcIjtcbmltcG9ydCBjcmVhdGVCb2FyZCBmcm9tIFwiLi4vZ2FtZS9ib2FyZFwiO1xuaW1wb3J0IHsgYXBwZWFyRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9hcHBlYXJFbGVtZW50XCI7XG5pbXBvcnQgZHJhZ25kcm9wIGZyb20gXCIuLi9nYW1lL2RyYWduZHJvcFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vLi4vZ2FtZS9wbGF5ZXIvcGxheWVyXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKTtcbiAgICBjb25zdCBzZWxlY3Rpb25HYW1lYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGNyZWF0ZVNlbGVjdGlvblBhbmVsKCk7XG5cbiAgICBhcHBlYXJFbGVtZW50KGdhbWUsIHNlbGVjdGlvbkdhbWVib2FyZCk7XG4gICAgYXBwZWFyRWxlbWVudChnYW1lLCBzZWxlY3Rpb24pO1xuXG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXG4gICAgZHJhZ25kcm9wKHNlbGVjdGlvbiwgcGxheWVyKVxufVxuXG5leHBvcnQgeyBjcmVhdGVTZWxlY3Rpb24gYXMgZGVmYXVsdCB9IiwiZnVuY3Rpb24gYXBwZWFyRWxlbWVudCh3aGVyZSwgd2hhdCkge1xuICAgIHdoZXJlLmFwcGVuZENoaWxkKHdoYXQpO1xufVxuXG5leHBvcnQgeyBhcHBlYXJFbGVtZW50IH07IiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9OyIsImZ1bmN0aW9uIGxvYWRJbWFnZShzcmMsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIGltYWdlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCB7IGxvYWRJbWFnZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHJlc3RhcnRUaGVHYW1lIGZyb20gJy4vdWkvZ2FtZS9yZXN0YXJ0JztcbmltcG9ydCBjcmVhdGVTZWxlY3Rpb24gZnJvbSAnLi91aS9wYWdlL3NlbGVjdGlvbic7XG5cbmNyZWF0ZVNlbGVjdGlvbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==