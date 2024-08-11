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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;;IAEtB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,iIAAsH;IACtH,4BAA4B;IAC5B,sBAAsB;;IAEtB,gBAAgB;;IAEhB,kCAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,UAAU;IACV,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;IACvC,yDAA6C;IAC7C,iCAAiC;AACrC;;AAEA;;;IAGI,yDAA2C;IAC3C,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,eAAe;IACf,iBAAiB;;IAEjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,sCAAsC;IACtC,yDAAyC;IACzC,wBAAwB;IACxB,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;;IAElB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;;IAGI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;;IAEd,aAAa;IACb,WAAW;;IAEX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;;IAEvC,YAAY;IACZ,aAAa;;IAEb,mDAAmC;IACnC,4BAA4B;IAC5B,wBAAwB;IACxB,2BAA2B;;IAE3B;oDACgD;AACpD;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB,kBAAkB;;IAElB,eAAe;;IAEf,gBAAgB;AACpB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    box-sizing: border-box;\n\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background: linear-gradient(0deg, rgba(115, 111, 111, .5) 20%, rgba(69, 56, 69, .5) 65%), url(./assets/background.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    overflow: hidden;\n\n    font-family: \"Handjet\", sans-serif;\n    font-weight: bold;\n}\n\n.game {\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    gap: 100px;\n    color: rgb(66, 184, 131);\n    color: rgb(194, 77, 44);\n}\n\n.board {\n    display: grid;\n    grid-template-rows: repeat(11, 60px);\n    grid-template-columns: repeat(11, 60px);\n    background-image: url(./assets/oceangrid.png);\n    background-position: right bottom;\n}\n\n.position-number,\n.position-letter,\n.position {\n    background-image: url(./assets/metalic.png);\n    background-repeat: no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 70px;\n    font-weight: bold;\n\n    color: #18BAC1;\n}\n\n.position-number {\n    grid-column: 1 / 2;\n}\n\n.position-number:nth-child(1) {\n    grid-row: 2 / 3;\n}\n\n.position-number:nth-child(2) {\n    grid-row: 3 / 4;\n}\n\n.position-number:nth-child(3) {\n    grid-row: 4 / 5;\n}\n\n.position-number:nth-child(4) {\n    grid-row: 5 / 6;\n}\n\n.position-number:nth-child(5) {\n    grid-row: 6 / 7;\n}\n\n.position-number:nth-child(6) {\n    grid-row: 7 / 8;\n}\n\n.position-number:nth-child(7) {\n    grid-row: 8 / 9;\n}\n\n.position-number:nth-child(8) {\n    grid-row: 9 / 10;\n}\n\n.position-number:nth-child(9) {\n    grid-row: 10 / 11;\n}\n\n.position-number:nth-child(10) {\n    grid-row: 11 / 12;\n}\n\n.position-letter {\n    grid-row: 1 / 2;\n}\n\n.position-letter:nth-child(11) {\n    grid-column: 2 / 3;\n}\n\n.position-letter:nth-child(12) {\n    grid-column: 3 / 4;\n}\n\n.position-letter:nth-child(13) {\n    grid-column: 4 / 5;\n}\n\n.position-letter:nth-child(14) {\n    grid-column: 5 / 6;\n}\n\n.position-letter:nth-child(15) {\n    grid-column: 6 / 7;\n}\n\n.position-letter:nth-child(16) {\n    grid-column: 7 / 8;\n}\n\n.position-letter:nth-child(17) {\n    grid-column: 8 / 9;\n}\n\n.position-letter:nth-child(18) {\n    grid-column: 9 / 10;\n}\n\n.position-letter:nth-child(19) {\n    grid-column: 10 / 11;\n}\n\n.position-letter:nth-child(20) {\n    grid-column: 11 / 12;\n}\n\n.selection {\n    display: grid;\n    grid-template-rows: repeat(12, 60px);\n    grid-template-columns: repeat(9, 60px);\n    background-image: url(./assets/board.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: top;\n}\n\n.start {\n    grid-row: 12 / 13;\n    grid-column: 4 / 7;\n\n    height: 100%;\n    scale: 1.2;\n}\n\n.start:hover {\n    scale: 1.24;\n    cursor: pointer;\n}\n\n.start img {\n    width: 100%;\n    height: 100%;\n}\n\n.notice {\n    grid-row: 1 / 2;\n    grid-column: 2 / 9;\n    scale: 1.1;\n}\n\n.notice img {\n    width: 100%;\n    height: 100%;\n}\n\n.ship__img,\n.missed-attack__img,\n.hitted-attack__img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.battleship {\n    grid-row: 3 / 8;\n    grid-column: 3 / 4;\n}\n\n.cruiser {\n    grid-row: 3 / 7;\n    grid-column: 5 / 6;\n}\n\n.destroyer {\n    grid-row: 3 / 7;\n    grid-column: 7 / 8;\n}\n\n.rescue {\n    grid-row: 8 / 11;\n    grid-column: 7 / 8;\n}\n\n.patrol {\n    grid-row: 8 / 11;\n    grid-column: 5 / 6;\n}\n\n.missed-attack,\n.hitted-attack {\n    position: relative;\n    z-index: 100;\n}\n\n.square {\n    position: relative;\n    z-index: 1000;\n}\n\n.modal {\n    position: absolute;\n    z-index: 10000;\n\n    height: 100vh;\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: #4F4233;\n}\n\n.modal__bar {\n    display: grid;\n    grid-template-rows: repeat(10, 40px);\n    grid-template-columns: repeat(10, 60px);\n\n    width: 600px;\n    height: 400px;\n\n    background: url(./assets/modal.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n\n    box-shadow: 1px 1px 10px 100vh rgba(69, 56, 69, .5),\n        1px 1px 10px 10px rgba(69, 56, 69, .5) inset;\n}\n\n.modal__notice {\n    grid-row: 1 / 3;\n    grid-column: 2 / 10;\n}\n\n.modal__notice img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.modal__restart {\n    grid-row: 10 / 11;\n    grid-column: 4 / 8;\n}\n\n.modal__restart:hover {\n    scale: 1.05;\n    cursor: pointer;\n}\n\n.modal__restart img {\n    width: 100%;\n}\n\n.modal__head {\n    grid-row: 4 / 5;\n    grid-column: 3 / 9;\n\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 70px;\n    font-weight: bolder;\n}\n\n.modal__info {\n    grid-row: 6 / 9;\n    grid-column: 3 / 9;\n\n    text-align: center;\n\n    font-size: 40px;\n\n    margin-top: 10px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFP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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBCO0FBQ0c7O0FBRWxELDhEQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9nYW1lL2F0dGFjay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9nYW1lL2RyYWduZHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUvcmVzdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWUvc2VsZWN0aW9uUGFuZWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9nYW1lL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9wYWdlL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3V0aWxzL2FwcGVhckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS91dGlscy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvdXRpbHMvbG9hZEltYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9vY2VhbmdyaWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWV0YWxpYy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9ib2FyZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9tb2RhbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMTUsIDExMSwgMTExLCAuNSkgMjAlLCByZ2JhKDY5LCA1NiwgNjksIC41KSA2NSUpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGZvbnQtZmFtaWx5OiBcIkhhbmRqZXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdhbWUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZ2FwOiAxMDBweDtcbiAgICBjb2xvcjogcmdiKDY2LCAxODQsIDEzMSk7XG4gICAgY29sb3I6IHJnYigxOTQsIDc3LCA0NCk7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgNjBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDYwcHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XG59XG5cbi5wb3NpdGlvbi1udW1iZXIsXG4ucG9zaXRpb24tbGV0dGVyLFxuLnBvc2l0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBjb2xvcjogIzE4QkFDMTtcbn1cblxuLnBvc2l0aW9uLW51bWJlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgxKSB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgyKSB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgzKSB7XG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg0KSB7XG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg1KSB7XG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg2KSB7XG4gICAgZ3JpZC1yb3c6IDcgLyA4O1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg3KSB7XG4gICAgZ3JpZC1yb3c6IDggLyA5O1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg4KSB7XG4gICAgZ3JpZC1yb3c6IDkgLyAxMDtcbn1cblxuLnBvc2l0aW9uLW51bWJlcjpudGgtY2hpbGQoOSkge1xuICAgIGdyaWQtcm93OiAxMCAvIDExO1xufVxuXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgxMCkge1xuICAgIGdyaWQtcm93OiAxMSAvIDEyO1xufVxuXG4ucG9zaXRpb24tbGV0dGVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDExKSB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxMikge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTMpIHtcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE0KSB7XG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xufVxuXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxNSkge1xuICAgIGdyaWQtY29sdW1uOiA2IC8gNztcbn1cblxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTYpIHtcbiAgICBncmlkLWNvbHVtbjogNyAvIDg7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE3KSB7XG4gICAgZ3JpZC1jb2x1bW46IDggLyA5O1xufVxuXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxOCkge1xuICAgIGdyaWQtY29sdW1uOiA5IC8gMTA7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE5KSB7XG4gICAgZ3JpZC1jb2x1bW46IDEwIC8gMTE7XG59XG5cbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDIwKSB7XG4gICAgZ3JpZC1jb2x1bW46IDExIC8gMTI7XG59XG5cbi5zZWxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDYwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDYwcHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG59XG5cbi5zdGFydCB7XG4gICAgZ3JpZC1yb3c6IDEyIC8gMTM7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA3O1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHNjYWxlOiAxLjI7XG59XG5cbi5zdGFydDpob3ZlciB7XG4gICAgc2NhbGU6IDEuMjQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3RhcnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3RpY2Uge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMiAvIDk7XG4gICAgc2NhbGU6IDEuMTtcbn1cblxuLm5vdGljZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNoaXBfX2ltZyxcbi5taXNzZWQtYXR0YWNrX19pbWcsXG4uaGl0dGVkLWF0dGFja19faW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmJhdHRsZXNoaXAge1xuICAgIGdyaWQtcm93OiAzIC8gODtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG59XG5cbi5jcnVpc2VyIHtcbiAgICBncmlkLXJvdzogMyAvIDc7XG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xufVxuXG4uZGVzdHJveWVyIHtcbiAgICBncmlkLXJvdzogMyAvIDc7XG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xufVxuXG4ucmVzY3VlIHtcbiAgICBncmlkLXJvdzogOCAvIDExO1xuICAgIGdyaWQtY29sdW1uOiA3IC8gODtcbn1cblxuLnBhdHJvbCB7XG4gICAgZ3JpZC1yb3c6IDggLyAxMTtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG59XG5cbi5taXNzZWQtYXR0YWNrLFxuLmhpdHRlZC1hdHRhY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5zcXVhcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBjb2xvcjogIzRGNDIzMztcbn1cblxuLm1vZGFsX19iYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA2MHB4KTtcblxuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxMDB2aCByZ2JhKDY5LCA1NiwgNjksIC41KSxcbiAgICAgICAgMXB4IDFweCAxMHB4IDEwcHggcmdiYSg2OSwgNTYsIDY5LCAuNSkgaW5zZXQ7XG59XG5cbi5tb2RhbF9fbm90aWNlIHtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAxMDtcbn1cblxuLm1vZGFsX19ub3RpY2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLm1vZGFsX19yZXN0YXJ0IHtcbiAgICBncmlkLXJvdzogMTAgLyAxMTtcbiAgICBncmlkLWNvbHVtbjogNCAvIDg7XG59XG5cbi5tb2RhbF9fcmVzdGFydDpob3ZlciB7XG4gICAgc2NhbGU6IDEuMDU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWxfX3Jlc3RhcnQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsX19oZWFkIHtcbiAgICBncmlkLXJvdzogNCAvIDU7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA5O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tb2RhbF9faW5mbyB7XG4gICAgZ3JpZC1yb3c6IDYgLyA5O1xuICAgIGdyaWQtY29sdW1uOiAzIC8gOTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZTogNDBweDtcblxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpb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Q3hCLDJCQUEyQjs7SUFFM0I7b0RBQ2dEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjs7SUFFbEIsa0JBQWtCOztJQUVsQixlQUFlOztJQUVmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDExNSwgMTExLCAxMTEsIC41KSAyMCUsIHJnYmEoNjksIDU2LCA2OSwgLjUpIDY1JSksIHVybCguL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGFuZGpldFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBjb2xvcjogcmdiKDY2LCAxODQsIDEzMSk7XFxuICAgIGNvbG9yOiByZ2IoMTk0LCA3NywgNDQpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgNjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCA2MHB4KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL29jZWFuZ3JpZC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXIsXFxuLnBvc2l0aW9uLWxldHRlcixcXG4ucG9zaXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvbWV0YWxpYy5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgY29sb3I6ICMxOEJBQzE7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnBvc2l0aW9uLW51bWJlcjpudGgtY2hpbGQoMykge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDQpIHtcXG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg1KSB7XFxuICAgIGdyaWQtcm93OiA2IC8gNztcXG59XFxuXFxuLnBvc2l0aW9uLW51bWJlcjpudGgtY2hpbGQoNikge1xcbiAgICBncmlkLXJvdzogNyAvIDg7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDcpIHtcXG4gICAgZ3JpZC1yb3c6IDggLyA5O1xcbn1cXG5cXG4ucG9zaXRpb24tbnVtYmVyOm50aC1jaGlsZCg4KSB7XFxuICAgIGdyaWQtcm93OiA5IC8gMTA7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDkpIHtcXG4gICAgZ3JpZC1yb3c6IDEwIC8gMTE7XFxufVxcblxcbi5wb3NpdGlvbi1udW1iZXI6bnRoLWNoaWxkKDEwKSB7XFxuICAgIGdyaWQtcm93OiAxMSAvIDEyO1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxMSkge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDEyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTMpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxNCkge1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxufVxcblxcbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE1KSB7XFxuICAgIGdyaWQtY29sdW1uOiA2IC8gNztcXG59XFxuXFxuLnBvc2l0aW9uLWxldHRlcjpudGgtY2hpbGQoMTYpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgxNykge1xcbiAgICBncmlkLWNvbHVtbjogOCAvIDk7XFxufVxcblxcbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE4KSB7XFxuICAgIGdyaWQtY29sdW1uOiA5IC8gMTA7XFxufVxcblxcbi5wb3NpdGlvbi1sZXR0ZXI6bnRoLWNoaWxkKDE5KSB7XFxuICAgIGdyaWQtY29sdW1uOiAxMCAvIDExO1xcbn1cXG5cXG4ucG9zaXRpb24tbGV0dGVyOm50aC1jaGlsZCgyMCkge1xcbiAgICBncmlkLWNvbHVtbjogMTEgLyAxMjtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCA2MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgNjBweCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9ib2FyZC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG59XFxuXFxuLnN0YXJ0IHtcXG4gICAgZ3JpZC1yb3c6IDEyIC8gMTM7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNztcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBzY2FsZTogMS4yO1xcbn1cXG5cXG4uc3RhcnQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS4yNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnQgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5vdGljZSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA5O1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4ubm90aWNlIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwX19pbWcsXFxuLm1pc3NlZC1hdHRhY2tfX2ltZyxcXG4uaGl0dGVkLWF0dGFja19faW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmJhdHRsZXNoaXAge1xcbiAgICBncmlkLXJvdzogMyAvIDg7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuLmNydWlzZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDc7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG59XFxuXFxuLmRlc3Ryb3llciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNztcXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xcbn1cXG5cXG4ucmVzY3VlIHtcXG4gICAgZ3JpZC1yb3c6IDggLyAxMTtcXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA4O1xcbn1cXG5cXG4ucGF0cm9sIHtcXG4gICAgZ3JpZC1yb3c6IDggLyAxMTtcXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFjayxcXG4uaGl0dGVkLWF0dGFjayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDAwO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGNvbG9yOiAjNEY0MjMzO1xcbn1cXG5cXG4ubW9kYWxfX2JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDYwcHgpO1xcblxcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9tb2RhbC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDEwMHZoIHJnYmEoNjksIDU2LCA2OSwgLjUpLFxcbiAgICAgICAgMXB4IDFweCAxMHB4IDEwcHggcmdiYSg2OSwgNTYsIDY5LCAuNSkgaW5zZXQ7XFxufVxcblxcbi5tb2RhbF9fbm90aWNlIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDEwO1xcbn1cXG5cXG4ubW9kYWxfX25vdGljZSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ubW9kYWxfX3Jlc3RhcnQge1xcbiAgICBncmlkLXJvdzogMTAgLyAxMTtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA4O1xcbn1cXG5cXG4ubW9kYWxfX3Jlc3RhcnQ6aG92ZXIge1xcbiAgICBzY2FsZTogMS4wNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWxfX3Jlc3RhcnQgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RhbF9faGVhZCB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA5O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm1vZGFsX19pbmZvIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA5O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDk7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiA0MHB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgICNib2FyZDtcbiAgICAjaGl0dGVkID0gJ0gnO1xuICAgICNtaXNzZWQgPSAnTSc7XG4gICAgI3NoaXBzUG9zaXRpb24gPSBbXTtcbiAgICAjc2hpcHNUeXBlcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNib2FyZCA9IHRoaXMuY3JlYXRlR2FtZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgICAgICBjb25zdCBhcnJheSA9IChuZXcgQXJyYXkoMTApKS5maWxsKFtdKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBbLi4uKG5ldyBBcnJheSgxMCkpLmZpbGwoW10pXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGdldEdhbWVCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkO1xuICAgIH1cblxuICAgIGdldFNoaXBQb3NpdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzaGlwc1Bvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldFNoaXBUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NoaXBzVHlwZXM7XG4gICAgfVxuXG4gICAgZ2V0SGl0dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0dGVkO1xuICAgIH1cblxuICAgIGdldE1pc3NlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI21pc3NlZDtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcFR5cGUsIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwVHlwZTtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuI2JvYXJkO1xuXG4gICAgICAgIGlmICgoYm9hcmQubGVuZ3RoIC0gKHggKyBzaGlwLmxlbmd0aCkpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRVJST1JcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IChuZXcgQXJyYXkoc2hpcC5sZW5ndGgpKS5maWxsKHNoaXApO1xuXG4gICAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gcG9zaXRpb247XG4gICAgICAgICAgICB4ICs9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuI3NoaXBzUG9zaXRpb24ucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgIHRoaXMuI3NoaXBzVHlwZXMucHVzaChzaGlwVHlwZS50eXBlKTtcblxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5nZXRHYW1lQm9hcmQoKTtcblxuICAgICAgICBsZXQgYXR0YWNrQ29vcmQgPSBib2FyZFt4XVt5XTtcblxuICAgICAgICBjb25zdCBpc0luc3RhbmNlT2YgPSBhdHRhY2tDb29yZCBpbnN0YW5jZW9mIFNoaXA7XG5cbiAgICAgICAgaWYgKCFpc0luc3RhbmNlT2YpXG4gICAgICAgICAgICAodGhpcy4jYm9hcmQpW3hdW3ldID0gdGhpcy4jbWlzc2VkO1xuXG4gICAgICAgIGlmICghKGF0dGFja0Nvb3JkIGluc3RhbmNlb2YgU2hpcClcbiAgICAgICAgICAgIHx8IGF0dGFja0Nvb3JkID09PSB0aGlzLiNoaXR0ZWRcbiAgICAgICAgICAgIHx8IGF0dGFja0Nvb3JkID09PSB0aGlzLiNtaXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2JvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgICAodGhpcy4jYm9hcmQpW3hdW3ldID0gdGhpcy4jaGl0dGVkO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzQWxsU2hpcFN1bmsoKSB7XG4gICAgICAgIGxldCBpc0hpdHRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuZ2V0R2FtZUJvYXJkKCk7XG4gICAgICAgIGxldCBib2FyZFZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhib2FyZFtpXSk7XG4gICAgICAgICAgICBib2FyZFZhbHVlcyA9IFsuLi5ib2FyZFZhbHVlcywgLi4udmFsdWVzXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFib2FyZFZhbHVlcy5maW5kKHZhbHVlID0+IHZhbHVlIGluc3RhbmNlb2YgU2hpcCkpIHtcbiAgICAgICAgICAgIGlzSGl0dGVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzSGl0dGVkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vZ2FtZWJvYXJkL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwL3NoaXAnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB9XG5cbiAgICBoYXNHYW1lYm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVib2FyZCBpbnN0YW5jZW9mIEdhbWVib2FyZDtcbiAgICB9XG5cbiAgICBtYWtlUmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgICAgICBsZXQgcmFuZG9tWCwgcmFuZG9tWTtcblxuICAgICAgICBsZXQgc2hpcCA9IG51bGw7XG5cbiAgICAgICAgcmFuZG9tWCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMDApICUgOSk7XG4gICAgICAgIHJhbmRvbVkgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMTAwKSAlIDkpXG4gICAgICAgIGNvbnN0IGhpdHRlZCA9IGdhbWVib2FyZC5nZXRIaXR0ZWQoKTtcbiAgICAgICAgY29uc3QgbWlzc2VkID0gZ2FtZWJvYXJkLmdldE1pc3NlZCgpO1xuXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkLmdldEdhbWVCb2FyZCgpO1xuXG4gICAgICAgIHdoaWxlIChib2FyZFtyYW5kb21YXVtyYW5kb21ZXSA9PT0gaGl0dGVkXG4gICAgICAgICAgICB8fCBib2FyZFtyYW5kb21YXVtyYW5kb21ZXSA9PT0gbWlzc2VkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxMDApICUgOSk7XG4gICAgICAgICAgICByYW5kb21ZID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSA5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2FyZFtyYW5kb21YXVtyYW5kb21ZXSBpbnN0YW5jZW9mIFNoaXApXG4gICAgICAgICAgICBzaGlwID0gYm9hcmRbcmFuZG9tWF1bcmFuZG9tWV07XG5cbiAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tWCwgcmFuZG9tWSk7XG5cbiAgICAgICAgcmV0dXJuIFtib2FyZFtyYW5kb21YXVtyYW5kb21ZXSwgcmFuZG9tWCwgcmFuZG9tWSwgc2hpcF07XG4gICAgfVxuXG4gICAgcmFuZG9tR2FtZWJvYXJkKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSB0aGlzLmdhbWVib2FyZDtcblxuICAgICAgICBjb25zdCBzaGlwVHlwZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNydWlzZXJcIixcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVzdHJveWVyXCIsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInJlc2N1ZVwiLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJwYXRyb2xcIixcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGxldCByYW5kb21YID0gbnVsbCwgcmFuZG9tWSA9IG51bGw7XG5cbiAgICAgICAgc2hpcFR5cGVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAodHlwZS5sZW5ndGgsIHR5cGUubmFtZSk7XG4gICAgICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICByYW5kb21YID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKSAlIDk7XG4gICAgICAgICAgICAgICAgcmFuZG9tWSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSA5O1xuXG4gICAgICAgICAgICB9IHdoaWxlICgocmFuZG9tWCArIHNoaXAubGVuZ3RoIC0gMSkgPiA5IHx8IHRoaXMuc3BhY2VBdmFpbGFibGUoZ2FtZWJvYXJkLCBbcmFuZG9tWCwgcmFuZG9tWV0sIHNoaXApKVxuXG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIFtyYW5kb21YLCByYW5kb21ZXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3BhY2VBdmFpbGFibGUoZ2FtZWJvYXJkLCBwb3NpdGlvbnMsIHNoaXApIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IFtwb3NpdGlvbnNbMF0sIHBvc2l0aW9uc1sxXV07XG4gICAgICAgIGNvbnN0IHRhaWwgPSBbcG9zaXRpb25zWzBdICsgc2hpcC5sZW5ndGggLSAxLCBwb3NpdGlvbnNbMV1dO1xuXG4gICAgICAgIGNvbnN0IGlzUG9zaXRpb24gPSAoZ2FtZWJvYXJkLCB4LCB5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHggPj0gMCAmJiB5ID49IDAgJiYgeCA8IDEwICYmIHkgPCAxMCkgPyBnYW1lYm9hcmRbeF1beV0gOiBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1RoZXJlQW55U2hpcCA9IGZhbHNlO1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gW107XG5cbiAgICAgICAgbGV0IHgsIHk7XG5cbiAgICAgICAgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkLmdldEdhbWVCb2FyZCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGggJiYgIWlzVGhlcmVBbnlTaGlwOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IFtwb3NpdGlvbnNbMF0gKyBpLCBwb3NpdGlvbnNbMV1dO1xuXG4gICAgICAgICAgICB4ID0gY3VycmVudFBvc2l0aW9uWzBdLCB5ID0gY3VycmVudFBvc2l0aW9uWzFdO1xuXG4gICAgICAgICAgICBpZiAoaGVhZC50b1N0cmluZygpID09PSBjdXJyZW50UG9zaXRpb24udG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGlzVGhlcmVBbnlTaGlwID0gaXNQb3NpdGlvbihnYW1lYm9hcmQsIHggLSAxLCB5IC0gMSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4IC0gMSwgeSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4IC0gMSwgeSArIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCwgeSAtIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCwgeSArIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCwgeSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhaWwudG9TdHJpbmcoKSA9PT0gY3VycmVudFBvc2l0aW9uLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBpc1RoZXJlQW55U2hpcCA9IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4ICsgMSwgeSAtIDEpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCArIDEsIHkpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgICAgICAgICB8fCBpc1Bvc2l0aW9uKGdhbWVib2FyZCwgeCArIDEsIHkgKyAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHgsIHkgLSAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHgsIHkgKyAxKSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNQb3NpdGlvbihnYW1lYm9hcmQsIHgsIHkpIGluc3RhbmNlb2YgU2hpcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1RoZXJlQW55U2hpcCA9IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4LCB5IC0gMSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4LCB5ICsgMSkgaW5zdGFuY2VvZiBTaGlwXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzUG9zaXRpb24oZ2FtZWJvYXJkLCB4LCB5KSBpbnN0YW5jZW9mIFNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNUaGVyZUFueVNoaXA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgU2hpcCB7XG4gICAgI2hpdE51bTtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSAwLCB0eXBlKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLiNoaXROdW0gPSAwO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy4jaGl0TnVtICs9IDE7XG4gICAgfVxuXG4gICAgZ2V0SGl0TnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jaGl0TnVtO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLiNoaXROdW0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgeyBhcHBlYXJFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2FwcGVhckVsZW1lbnRcIjtcblxuaW1wb3J0IFNoaXAgZnJvbSAnLi4vLi4vZ2FtZS9zaGlwL3NoaXAnO1xuaW1wb3J0IEhpdCBmcm9tICcuLi8uLi9hc3NldHMvZmlyZS5wbmcnO1xuaW1wb3J0IE1pc3MgZnJvbSAnLi4vLi4vYXNzZXRzL3dhdGVyLnBuZyc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRJbWFnZSB9IGZyb20gXCIuLi91dGlscy9sb2FkSW1hZ2VcIjtcbmltcG9ydCB7IGxvYWRTaW5nbGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHJlc3RhcnRUaGVHYW1lIGZyb20gXCIuL3Jlc3RhcnRcIjtcblxuZnVuY3Rpb24gYXR0YWNrTW92ZXMocGxheWVyLCBhaSkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgY29uc3QgYWlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC5haScpO1xuXG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gcGxheWVyLmdhbWVib2FyZDtcbiAgICBjb25zdCBhaUdhbWVib2FyZCA9IGFpLmdhbWVib2FyZDtcblxuICAgIGFpQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGFyZ2V0LmRhdGFzZXQucG9zaXRpb24uc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgbGV0IFggPSArcG9zaXRpb25bMF0sIFkgPSArcG9zaXRpb25bMV07XG5cbiAgICAgICAgICAgIHBsYXllclR1cm4odGFyZ2V0LCBhaUdhbWVib2FyZCwgYWlCb2FyZCwgWCwgWSk7XG5cbiAgICAgICAgICAgIGFpVHVybihwbGF5ZXJHYW1lYm9hcmQsIHBsYXllckJvYXJkLCBhaSk7XG5cbiAgICAgICAgICAgIGlmIChhaUdhbWVib2FyZC5pc0FsbFNoaXBTdW5rKCkgfHwgcGxheWVyR2FtZWJvYXJkLmlzQWxsU2hpcFN1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvc2VyID0gYWlHYW1lYm9hcmQuaXNBbGxTaGlwU3VuayA/IFwiYWlcIiA6ICdwbGF5ZXInO1xuICAgICAgICAgICAgICAgIHJlc3RhcnRUaGVHYW1lKGxvc2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHBsYXllclR1cm4odGFyZ2V0LCBhaUdhbWVib2FyZCwgYWlCb2FyZCwgWCwgWSkge1xuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBpZiAoYWlHYW1lYm9hcmQuZ2V0R2FtZUJvYXJkKClbWF1bWV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgIHNoaXAgPSBhaUdhbWVib2FyZC5nZXRHYW1lQm9hcmQoKVtYXVtZXTtcbiAgICB9XG5cbiAgICBhaUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFgsIFkpO1xuXG4gICAgY29uc3QgZWZmZWN0ID0gYXR0YWNrRWZmZWN0KHRhcmdldCwgYWlHYW1lYm9hcmQuZ2V0R2FtZUJvYXJkKClbWF1bWV0pO1xuICAgIGFwcGVhckVsZW1lbnQoYWlCb2FyZCwgZWZmZWN0KTtcblxuICAgIGFpQm9hcmQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcblxuICAgIGlmIChzaGlwPy5pc1N1bmsoKSkge1xuICAgICAgICBkZXN0cm95RWZmZWN0KHNoaXAsIGFpQm9hcmQsIGFpR2FtZWJvYXJkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWlUdXJuKHBsYXllckdhbWVib2FyZCwgcGxheWVyQm9hcmQsIGFpKSB7XG4gICAgY29uc3QgW2F0dGFjaywgWCwgWSwgc2hpcF0gPSBhaS5tYWtlUmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke1h9ICR7WX1cIl1gKTtcblxuICAgIGNvbnN0IGVmZmVjdCA9IGF0dGFja0VmZmVjdCh0YXJnZXQsIHBsYXllckdhbWVib2FyZC5nZXRHYW1lQm9hcmQoKVtYXVtZXSk7XG4gICAgYXBwZWFyRWxlbWVudChwbGF5ZXJCb2FyZCwgZWZmZWN0KTtcblxuICAgIHBsYXllckJvYXJkLnJlbW92ZUNoaWxkKHRhcmdldCk7XG5cbiAgICBpZiAoc2hpcD8uaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZ2V0U2hpcFBvc2l0aW9uQnlUeXBlKHNoaXAsIHBsYXllckdhbWVib2FyZCk7XG4gICAgICAgIGZpZWxkRGlzY2xvc3VyZShzaGlwLmxlbmd0aCwgW3gsIHldLCBwbGF5ZXJCb2FyZCwgcGxheWVyR2FtZWJvYXJkLmdldEdhbWVCb2FyZCgpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFZmZlY3Qoc2hpcCwgYm9hcmQsIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IFt4LCB5XSA9IGdldFNoaXBQb3NpdGlvbkJ5VHlwZShzaGlwLCBnYW1lYm9hcmQpO1xuXG4gICAgY29uc3QgZGVzdHJveWVkU2hpcCA9IGxvYWRTaW5nbGVTaGlwKHgsIHksIHNoaXApO1xuICAgIGFwcGVhckVsZW1lbnQoYm9hcmQsIGRlc3Ryb3llZFNoaXApO1xuICAgIGZpZWxkRGlzY2xvc3VyZShzaGlwLmxlbmd0aCwgW3gsIHldLCBib2FyZCwgZ2FtZWJvYXJkLmdldEdhbWVCb2FyZCgpKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNrRWZmZWN0KGVsZW1lbnQsIHR5cGVPZkF0dGFjayA9IFwiTVwiKSB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ21pc3NlZC1hdHRhY2snKTtcbiAgICBjb25zdCBpbWFnZSA9IHR5cGVPZkF0dGFjayA9PT0gXCJNXCIgPyBNaXNzIDogSGl0O1xuICAgIGNvbnN0IGltYWdlQ2xhc3MgPSB0eXBlT2ZBdHRhY2sgPT09IFwiTVwiID8gXCJtaXNzZWQtYXR0YWNrX19pbWdcIiA6IFwiaGl0dGVkLWF0dGFja19faW1nXCI7XG4gICAgY29uc3QgaW1nRWwgPSBsb2FkSW1hZ2UoaW1hZ2UsIGltYWdlQ2xhc3MpO1xuXG4gICAgYXBwZWFyRWxlbWVudChkaXYsIGltZ0VsKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gZWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uLnNwbGl0KCcgJyk7XG4gICAgY29uc3QgWCA9ICtwb3NpdGlvblswXSArIDIsIFkgPSArcG9zaXRpb25bMV0gKyAyO1xuXG4gICAgZGl2LnN0eWxlLmdyaWRSb3cgPSBgJHtYfSAvICR7WCArIDF9YDtcbiAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IGAke1l9IC8gJHtZICsgMX1gO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gZmllbGREaXNjbG9zdXJlKHNoaXBMZW5ndGgsIGNvb3JkcywgYm9hcmQsIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGZ1bGxDb29yZHMgPSAobmV3IEFycmF5KHNoaXBMZW5ndGgpKS5maWxsKG51bGwpLm1hcCgoXywgYykgPT4gW2Nvb3Jkc1swXSArIGMsIGNvb3Jkc1sxXV0pO1xuICAgIGNvbnN0IGRpc2Nsb3N1cmVQb3MgPSBbXTtcbiAgICBjb25zdCBzdXJGaWVsZHMgPSBbXG4gICAgICAgIFswLCAxXSxcbiAgICAgICAgWzEsIDBdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFswLCAtMV0sXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgLTFdLFxuICAgICAgICBbLTEsIDFdLFxuICAgICAgICBbMSwgLTFdXG4gICAgXTtcbiAgICBsZXQgeCwgeSwgc3VyWCwgc3VyWTtcblxuICAgIGZ1bGxDb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgIHggPSBjb29yZFswXSwgeSA9IGNvb3JkWzFdO1xuICAgICAgICBzdXJGaWVsZHMuZm9yRWFjaChzdXIgPT4ge1xuICAgICAgICAgICAgc3VyWCA9IHN1clswXSArIHgsIHN1clkgPSBzdXJbMV0gKyB5O1xuICAgICAgICAgICAgaWYgKChzdXJYKSA+PSAwICYmIChzdXJZKSA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKHN1clgpID49IDAgJiYgKHN1clkpID49IDBcbiAgICAgICAgICAgICAgICAmJiBnYW1lYm9hcmRbc3VyWF1bc3VyWV1cbiAgICAgICAgICAgICAgICAmJiBnYW1lYm9hcmRbc3VyWF1bc3VyWV0gIT09ICdNJ1xuICAgICAgICAgICAgICAgICYmIGdhbWVib2FyZFtzdXJYXVtzdXJZXSAhPT0gJ0gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zaXRpb249XCIke3N1clh9ICR7c3VyWX1cIl1gKTtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRbc3VyWF1bc3VyWV0gPSAnTSc7XG4gICAgICAgICAgICAgICAgY29uc3QgZWZmZWN0ID0gYXR0YWNrRWZmZWN0KHNxdWFyZSwgZ2FtZWJvYXJkW3N1clhdW3N1clldKTtcbiAgICAgICAgICAgICAgICBhcHBlYXJFbGVtZW50KGJvYXJkLCBlZmZlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hpcFBvc2l0aW9uQnlUeXBlKHNoaXAsIGdhbWVib2FyZCkge1xuICAgIGxldCBzaGlwUG9zaXRpb24gPSBnYW1lYm9hcmQuZ2V0U2hpcFBvc2l0aW9ucygpO1xuICAgIGxldCBzaGlwVHlwZXMgPSBnYW1lYm9hcmQuZ2V0U2hpcFR5cGVzKCk7XG4gICAgY29uc3Qgc2hpcFR5cGUgPSBzaGlwLnR5cGU7XG4gICAgY29uc3Qgc2hpcFR5cGVJbmRleCA9IHNoaXBUeXBlcy5maW5kSW5kZXgodHlwZSA9PiB0eXBlID09PSBzaGlwVHlwZSk7XG5cbiAgICBjb25zdCB4ID0gc2hpcFBvc2l0aW9uW3NoaXBUeXBlSW5kZXhdWzBdO1xuICAgIGNvbnN0IHkgPSBzaGlwUG9zaXRpb25bc2hpcFR5cGVJbmRleF1bMV07XG5cbiAgICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgeyBhdHRhY2tNb3ZlcyBhcyBkZWZhdWx0IH0iLCJpbXBvcnQgeyBhcHBlYXJFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2FwcGVhckVsZW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuXG5pbXBvcnQgUmFkYXIgZnJvbSAnLi4vLi4vYXNzZXRzL3JhZGFyLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGJvYXJkVHlwZSA9ICdwbGF5ZXInKSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnYm9hcmQnKTtcblxuICAgIGlmIChib2FyZFR5cGUgPT09ICdhaScpIHtcbiAgICAgICAgYm9hcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1JhZGFyfSlgO1xuICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdhaScpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlUG9zaXRpb24oJ3Bvc2l0aW9uLW51bWJlcicsIGkpXG4gICAgICAgIGFwcGVhckVsZW1lbnQoYm9hcmQsIGRpdik7XG4gICAgfVxuXG4gICAgY29uc3QgYm9hcmRMZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgYm9hcmRMZXR0ZXJzLmZvckVhY2gobGV0dGVyID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlUG9zaXRpb24oJ3Bvc2l0aW9uLWxldHRlcicsIGxldHRlcik7XG4gICAgICAgIGFwcGVhckVsZW1lbnQoYm9hcmQsIGRpdik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbXB0eVBvc2l0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Bvc2l0aW9uJyk7XG4gICAgYXBwZWFyRWxlbWVudChib2FyZCwgZW1wdHlQb3NpdGlvbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc3F1YXJlJyk7XG4gICAgICAgICAgICBkaXYuZGF0YXNldC5wb3NpdGlvbiA9IGAke2l9ICR7an1gO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmdyaWRSb3cgPSBgJHtpICsgMn0gLyAke2kgKyAzfWA7XG4gICAgICAgICAgICBkaXYuc3R5bGUuZ3JpZENvbHVtbiA9IGAke2ogKyAyfSAvICR7aiArIDN9YDtcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoYm9hcmQsIGRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uKGNsYXNzTmFtZSA9IFwiZW1wdHlcIiwgdGV4dENvbnRlbnQpIHtcbiAgICBjb25zdCBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjbGFzc05hbWUpO1xuXG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgZGl2LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vLi4vZ2FtZS9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4uLy4uL2dhbWUvc2hpcC9zaGlwJztcbmltcG9ydCB7IGFwcGVhckVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9hcHBlYXJFbGVtZW50JztcbmltcG9ydCBhdHRhY2tNb3ZlcyBmcm9tICcuL2F0dGFjayc7XG5pbXBvcnQgY3JlYXRlQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgeyBsb2FkU2hpcHMsIGxvYWRTaW5nbGVTaGlwIH0gZnJvbSAnLi9zaGlwJztcblxuZnVuY3Rpb24gZHJhZ25kcm9wKHNlbGVjdGlvbiwgcGxheWVyKSB7XG4gICAgY29uc3Qgc2hpcFR5cGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImJhdHRsZXNoaXBcIixcbiAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJjcnVpc2VyXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZGVzdHJveWVyXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicmVzY3VlXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicGF0cm9sXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGxldCB0YXJnZXQsIHNoaXBUeXBlLCBzaGlwU2VsZWN0ZWQgPSB7IGlzU2VsZWN0ZWQ6IGZhbHNlIH07XG5cbiAgICB0YXJnZXQgPSBzaGlwVHlwZSA9IG51bGw7XG5cbiAgICBsZXQgcXVldWUgPSBbXTtcblxuICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpO1xuICAgICAgICBzaGlwVHlwZSA9IHNoaXBUeXBlcy5maW5kKHR5cGUgPT4gdHlwZS5uYW1lID09PSB0YXJnZXQ/LmNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHNoaXBUeXBlICYmICFzaGlwU2VsZWN0ZWQuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICBzaGlwU2VsZWN0ZWQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgcHJldkVsZW1lbnQgPSBudWxsO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiBkcmFnKGUsIHRhcmdldCwgc2hpcFR5cGUsIHNoaXBTZWxlY3RlZCwgcXVldWUsIHBsYXllcikpO1xufVxuXG5mdW5jdGlvbiBkcmFnKGUsIHNoaXAsIHNoaXBUeXBlLCBzZWxlY3RlZCwgcXVldWUsIHBsYXllcikge1xuICAgIGlmICghc2VsZWN0ZWQuaXNTZWxlY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hpcC5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArICdweCc7XG4gICAgc2hpcC5zdHlsZS50b3AgPSBlLnBhZ2VZICsgJ3B4JztcblxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwVHlwZT8ubGVuZ3RoO1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG4gICAgY29uc3QgYmF0dGxlU2hpcCA9IG5ldyBTaGlwKHNoaXBUeXBlLmxlbmd0aCwgc2hpcFR5cGUubmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAgICAgcXVldWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRhcmdldC5kYXRhc2V0LnBvc2l0aW9uLnNwbGl0KCcgJykubWFwKHAgPT4gK3ApO1xuICAgICAgICBjb25zdCBjb2xvciA9ICgoK3Bvc2l0aW9uWzBdICsgc2hpcExlbmd0aCAtIDEpIDw9IDkpICYmICFwbGF5ZXIuc3BhY2VBdmFpbGFibGUoZ2FtZWJvYXJkLCBwb3NpdGlvbiwgYmF0dGxlU2hpcCkgPyBgcmdiYSg2NiwgMTg0LCAxMzEsIC41KWAgOiBgcmdiYSgxOTQsIDc3LCA0NCwgLjUpYFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3NpdGlvbj1cIiR7K3Bvc2l0aW9uWzBdICsgaX0gJHsrcG9zaXRpb25bMV19XCJdYCk7XG4gICAgICAgICAgICBpZiAoc3F1YXJlKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICgoKCtwb3NpdGlvblswXSArIHNoaXBMZW5ndGggLSAxKSA8PSA5KVxuICAgICAgICAgICAgICAgICYmICFwbGF5ZXIuc3BhY2VBdmFpbGFibGUoZ2FtZWJvYXJkLCBwb3NpdGlvbiwgYmF0dGxlU2hpcCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wKHBsYXllciwgc2hpcFR5cGUsIHNoaXAsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgcXVldWUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcm9wKHBsYXllciwgc2hpcFR5cGUsIHNoaXAsIHRhcmdldCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKTtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRhcmdldC5kYXRhc2V0LnBvc2l0aW9uLnNwbGl0KCcgJykubWFwKHAgPT4gK3ApO1xuICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XG5cbiAgICBjb25zdCBnYW1lYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gICAgc2VsZWN0aW9uLnJlbW92ZUNoaWxkKHNoaXApO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBuZXcgU2hpcChzaGlwVHlwZS5sZW5ndGgsIHNoaXBUeXBlLm5hbWUpO1xuICAgIGFwcGVhckVsZW1lbnQoYm9hcmQsIGxvYWRTaW5nbGVTaGlwKHBvc2l0aW9uc1swXSwgcG9zaXRpb25zWzFdLCBiYXR0bGVTaGlwKSk7XG5cbiAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIHBvc2l0aW9ucyk7XG5cbiAgICBzdGFydC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxTaGlwcyA9IGdhbWVib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XG4gICAgICAgIGlmIChhbGxTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICAgICAgICAgICAgY29uc3QgYWxsR2FtZUVsZW1lbnRzID0gZ2FtZS5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZSA+IGRpdicpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShhbGxHYW1lRWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFpQm9hcmQgPSBjcmVhdGVCb2FyZCgnYWknKTtcblxuICAgICAgICAgICAgY29uc3QgYWlQbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgICAgICBhaVBsYXllci5yYW5kb21HYW1lYm9hcmQoKTtcblxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudChnYW1lLCBib2FyZCk7XG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KGdhbWUsIGFpQm9hcmQpO1xuICAgICAgICAgICAgbG9hZFNoaXBzKGdhbWVib2FyZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF0dGFja01vdmVzKHBsYXllciwgYWlQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBkcmFnbmRyb3AgYXMgZGVmYXVsdCB9IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVFbGVtZW50XCJcblxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RhbC5wbmcnO1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi8uLi9hc3NldHMvbm90aWNlLnBuZyc7XG5pbXBvcnQgTmV3U3RhcnQgZnJvbSAnLi4vLi4vYXNzZXRzL25ld3N0YXJ0LnBuZyc7XG5cbmltcG9ydCB7IGFwcGVhckVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvYXBwZWFyRWxlbWVudFwiO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2xvYWRJbWFnZVwiXG5cbmZ1bmN0aW9uIHJlc3RhcnRUaGVHYW1lKGxvc2VyKSB7XG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9kYWwnKTtcbiAgICBjb25zdCBtb2RhbEJhciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtb2RhbF9fYmFyJylcbiAgICBjb25zdCBtb2RhbE5vdGljZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtb2RhbF9fbm90aWNlJyk7XG4gICAgY29uc3QgbW9kYWxOb3RpY2VJbWFnZSA9IGxvYWRJbWFnZShOb3RpY2UsICdtb2RhbF9fbm90aWNlLS1pbWcnKTtcbiAgICBjb25zdCBtb2RhbFJlc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbW9kYWxfX3Jlc3RhcnQnKTtcbiAgICBjb25zdCBtb2RhbFJlc3RhcnRJbWFnZSA9IGxvYWRJbWFnZShOZXdTdGFydCwgJ21vZGFsX19yZXN0YXJ0LS1pbWcnKTtcblxuICAgIGNvbnN0IG1haW5IZWFkVGV4dCA9IGBZb3UgJHtsb3NlciA9PT0gJ3BsYXllcicgPyBcIkxvc3RcIiA6IFwiV2luXCJ9IWBcblxuICAgIGNvbnN0IG1haW5TZWNvbmRUZXh0ID0gJ0NsaWNrIG9uIHRoZSBcIk5ldyBHYW1lXCIgYnV0dG9uIHRvIHJlc3RhcnQgdGhlIGdhbWUnO1xuXG4gICAgY29uc3QgbW9kYWxIZWFkID0gY3JlYXRlRWxlbWVudCgnaDEnLCAnbW9kYWxfX2hlYWQnKTtcbiAgICBjb25zdCBtb2RhbEluZm8gPSBjcmVhdGVFbGVtZW50KCdwJywgJ21vZGFsX19pbmZvJyk7XG5cbiAgICBtb2RhbEhlYWQudGV4dENvbnRlbnQgPSBtYWluSGVhZFRleHQ7XG4gICAgbW9kYWxJbmZvLnRleHRDb250ZW50ID0gbWFpblNlY29uZFRleHQ7XG5cbiAgICBhcHBlYXJFbGVtZW50KG1vZGFsLCBtb2RhbEJhcik7XG4gICAgYXBwZWFyRWxlbWVudChtb2RhbE5vdGljZSwgbW9kYWxOb3RpY2VJbWFnZSk7XG4gICAgYXBwZWFyRWxlbWVudChtb2RhbFJlc3RhcnQsIG1vZGFsUmVzdGFydEltYWdlKTtcbiAgICBhcHBlYXJFbGVtZW50KG1vZGFsQmFyLCBtb2RhbE5vdGljZSk7XG4gICAgYXBwZWFyRWxlbWVudChtb2RhbEJhciwgbW9kYWxSZXN0YXJ0KTtcbiAgICBhcHBlYXJFbGVtZW50KG1vZGFsQmFyLCBtb2RhbEhlYWQpXG4gICAgYXBwZWFyRWxlbWVudChtb2RhbEJhciwgbW9kYWxJbmZvKVxuXG4gICAgYXBwZWFyRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RhbCk7XG5cbiAgICBtb2RhbFJlc3RhcnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVzdGFydFRoZUdhbWUgYXMgZGVmYXVsdCB9IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVFbGVtZW50XCJcbmltcG9ydCB7IGFwcGVhckVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvYXBwZWFyRWxlbWVudFwiO1xuaW1wb3J0IHsgbG9hZEltYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2xvYWRJbWFnZVwiO1xuXG5pbXBvcnQgU3RhcnQgZnJvbSAnLi4vLi4vYXNzZXRzL3N0YXJ0LnBuZydcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vLi4vYXNzZXRzL25vdGljZS5wbmcnXG5cbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4uLy4uL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgQ3J1aXNlciBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvZGVzdHJveWVyLnBuZyc7XG5pbXBvcnQgUmVzY3VlIGZyb20gJy4uLy4uL2Fzc2V0cy9zaGlwcy9yZXNjdWUucG5nJztcbmltcG9ydCBQYXRyb2wgZnJvbSAnLi4vLi4vYXNzZXRzL3NoaXBzL3BhdHJvbC5wbmcnO1xuXG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdGlvblBhbmVsKCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzZWxlY3Rpb24nKTtcbiAgICBcbiAgICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzdGFydCcpO1xuICAgIGNvbnN0IHN0YXJ0SW1hZ2UgPSBsb2FkSW1hZ2UoU3RhcnQsICdzdGFydF9faW1nJyk7XG5cbiAgICBjb25zdCBub3RpY2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbm90aWNlJyk7XG4gICAgY29uc3Qgbm90aWNlSW1hZ2UgPSBsb2FkSW1hZ2UoTm90aWNlLCAnbm90aWNlX19pbWcnKTtcblxuXG4gICAgYXBwZWFyRWxlbWVudChzdGFydCwgc3RhcnRJbWFnZSk7XG4gICAgYXBwZWFyRWxlbWVudChzZWxlY3Rpb24sIHN0YXJ0KTtcblxuICAgIGFwcGVhckVsZW1lbnQobm90aWNlLCBub3RpY2VJbWFnZSk7XG4gICAgYXBwZWFyRWxlbWVudChzZWxlY3Rpb24sIG5vdGljZSk7XG5cbiAgICBjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlU2hpcCgnYmF0dGxlc2hpcCcsIEJhdHRsZXNoaXApO1xuICAgIGNvbnN0IGNydWlzZXIgPSBjcmVhdGVTaGlwKCdjcnVpc2VyJywgQ3J1aXNlcik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gY3JlYXRlU2hpcCgnZGVzdHJveWVyJywgRGVzdHJveWVyKTtcbiAgICBjb25zdCByZXNjdWUgPSBjcmVhdGVTaGlwKCdyZXNjdWUnLCBSZXNjdWUpO1xuICAgIGNvbnN0IHBhdHJvbCA9IGNyZWF0ZVNoaXAoJ3BhdHJvbCcsIFBhdHJvbCk7XG5cbiAgICBhcHBlYXJFbGVtZW50KHNlbGVjdGlvbiwgYmF0dGxlc2hpcCk7XG4gICAgYXBwZWFyRWxlbWVudChzZWxlY3Rpb24sIGNydWlzZXIpO1xuICAgIGFwcGVhckVsZW1lbnQoc2VsZWN0aW9uLCBkZXN0cm95ZXIpO1xuICAgIGFwcGVhckVsZW1lbnQoc2VsZWN0aW9uLCByZXNjdWUpO1xuICAgIGFwcGVhckVsZW1lbnQoc2VsZWN0aW9uLCBwYXRyb2wpO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2VsZWN0aW9uUGFuZWwgYXMgZGVmYXVsdCB9IiwiaW1wb3J0IHsgYXBwZWFyRWxlbWVudCB9IGZyb20gXCIuLi91dGlscy9hcHBlYXJFbGVtZW50XCJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiXG5pbXBvcnQgeyBsb2FkSW1hZ2UgfSBmcm9tIFwiLi4vdXRpbHMvbG9hZEltYWdlXCI7XG5cbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4uLy4uL2Fzc2V0cy9zaGlwcy9iYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgQ3J1aXNlciBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuLi8uLi9hc3NldHMvc2hpcHMvZGVzdHJveWVyLnBuZyc7XG5pbXBvcnQgUmVzY3VlIGZyb20gJy4uLy4uL2Fzc2V0cy9zaGlwcy9yZXNjdWUucG5nJztcbmltcG9ydCBQYXRyb2wgZnJvbSAnLi4vLi4vYXNzZXRzL3NoaXBzL3BhdHJvbC5wbmcnO1xuXG4vLyBCYXR0bGVzaGlwXG4vLyBDcnVpc2VyXG4vLyBEZXN0cm95ZXJcbi8vIFJlc2N1ZVxuLy8gUGF0cm9sXG5cbmNvbnN0IHNoaXBzQXNzZXRzID0ge1xuICAgICdiYXR0bGVzaGlwJzogQmF0dGxlc2hpcCxcbiAgICAnY3J1aXNlcic6IENydWlzZXIsXG4gICAgJ2Rlc3Ryb3llcic6IERlc3Ryb3llcixcbiAgICAncmVzY3VlJzogUmVzY3VlLFxuICAgICdwYXRyb2wnOiBQYXRyb2wsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwKHNoaXBOYW1lLCBpbWFnZSkge1xuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzaGlwTmFtZSk7XG4gICAgY29uc3Qgc2hpcEltYWdlID0gbG9hZEltYWdlKGltYWdlLCAnc2hpcF9faW1nJyk7XG5cbiAgICBhcHBlYXJFbGVtZW50KHNoaXAsIHNoaXBJbWFnZSk7XG5cbiAgICByZXR1cm4gc2hpcDtcbn1cblxuZnVuY3Rpb24gbG9hZFNpbmdsZVNoaXAoeCwgeSwgc2hpcCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gMjtcbiAgICBjb25zdCBzaGlwVHlwZSA9IHNoaXAudHlwZTtcbiAgICBjb25zdCBidWlsZFNoaXAgPSBjcmVhdGVTaGlwKHNoaXBUeXBlLCBzaGlwc0Fzc2V0c1tzaGlwVHlwZV0pO1xuICAgIGJ1aWxkU2hpcC5zdHlsZS5ncmlkUm93ID0gYCR7c3RhcnQgKyB4fSAvICR7c3RhcnQgKyB4ICsgc2hpcC5sZW5ndGh9YDtcbiAgICBidWlsZFNoaXAuc3R5bGUuZ3JpZENvbHVtbiA9IGAke3N0YXJ0ICsgeX0gLyAke3N0YXJ0ICsgeSArIDF9YDtcblxuICAgIHJldHVybiBidWlsZFNoaXA7XG59XG5cbmZ1bmN0aW9uIGxvYWRTaGlwcyhib2FyZCkge1xuICAgIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSBib2FyZC5nZXRTaGlwUG9zaXRpb25zKCk7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gYm9hcmQuZ2V0R2FtZUJvYXJkKCk7XG5cbiAgICBjb25zdCBib2FyZENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG5cbiAgICBzaGlwUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1aWxkU2hpcCA9IGxvYWRTaW5nbGVTaGlwKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSwgZ2FtZWJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0pO1xuICAgICAgICBhcHBlYXJFbGVtZW50KGJvYXJkQ2xhc3MsIGJ1aWxkU2hpcCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNoaXAgYXMgZGVmYXVsdCwgbG9hZFNoaXBzLCBsb2FkU2luZ2xlU2hpcCB9ICIsImltcG9ydCBjcmVhdGVTZWxlY3Rpb25QYW5lbCBmcm9tIFwiLi4vZ2FtZS9zZWxlY3Rpb25QYW5lbFwiO1xuaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gXCIuLi9nYW1lL2JvYXJkXCI7XG5pbXBvcnQgeyBhcHBlYXJFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2FwcGVhckVsZW1lbnRcIjtcbmltcG9ydCBkcmFnbmRyb3AgZnJvbSBcIi4uL2dhbWUvZHJhZ25kcm9wXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi8uLi9nYW1lL3BsYXllci9wbGF5ZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuICAgIGNvbnN0IHNlbGVjdGlvbkdhbWVib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gY3JlYXRlU2VsZWN0aW9uUGFuZWwoKTtcblxuICAgIGFwcGVhckVsZW1lbnQoZ2FtZSwgc2VsZWN0aW9uR2FtZWJvYXJkKTtcbiAgICBhcHBlYXJFbGVtZW50KGdhbWUsIHNlbGVjdGlvbik7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbiAgICBkcmFnbmRyb3Aoc2VsZWN0aW9uLCBwbGF5ZXIpXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNlbGVjdGlvbiBhcyBkZWZhdWx0IH0iLCJmdW5jdGlvbiBhcHBlYXJFbGVtZW50KHdoZXJlLCB3aGF0KSB7XG4gICAgd2hlcmUuYXBwZW5kQ2hpbGQod2hhdCk7XG59XG5cbmV4cG9ydCB7IGFwcGVhckVsZW1lbnQgfTsiLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50IH07IiwiZnVuY3Rpb24gbG9hZEltYWdlKHNyYywgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IHsgbG9hZEltYWdlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcmVzdGFydFRoZUdhbWUgZnJvbSAnLi91aS9nYW1lL3Jlc3RhcnQnO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdGlvbiBmcm9tICcuL3VpL3BhZ2Uvc2VsZWN0aW9uJztcblxuY3JlYXRlU2VsZWN0aW9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9