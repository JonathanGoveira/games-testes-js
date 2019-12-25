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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Canvas2D_Singleton{\n\n    constructor(){\n        this._canvas = document.getElementById('canvas');\n        this._context = canvas.getContext('2d');\n        this._canvas.width = window.innerWidth;\n        this._canvas.height = window.innerHeight;\n    }\n\n    get context(){\n        return this._context\n    }\n    get canvas(){\n        return this._canvas;\n    }\n    get canvasWidth(){\n        return this._canvas.width;\n    }\n    get canvasHeight(){\n        return this._canvas.height;\n    }\n    rect(){\n        this._context.fillStyle = \"blue\";\n        this._context.fillRect(0,0,50,50)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (canvas = new Canvas2D_Singleton());\n\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/player */ \"./src/objects/player.js\");\n\n\n\n(function Init(){\n    \n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    const player = new _objects_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    player.draw(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context)\n    \n}())\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/objects/player.js":
/*!*******************************!*\
  !*** ./src/objects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _utils_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vector2 */ \"./src/utils/vector2.js\");\n\n\nclass Player{\n    constructor(){\n        this._position = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50,50)\n        console.log(this._position.x)\n    }\n\n    draw(context){\n        context.fillStyle = \"blue\"\n        context.fillRect(0,0,this._position.x, this._position.y)\n    }\n}\n\n//# sourceURL=webpack:///./src/objects/player.js?");

/***/ }),

/***/ "./src/utils/vector2.js":
/*!******************************!*\
  !*** ./src/utils/vector2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector2; });\nclass Vector2{\n    constructor(p_x,p_y){\n        this._x = p_x;\n        this._y = p_y;\n    }\n\n    get x(){\n        return this._x;\n    }\n    get y(){\n        return this._y;\n    }\n\n    set x(p_x){\n        this._x = p_x\n    }\n\n    set y(p_y){\n        this._y = p_y;\n    }\n}\n\n//# sourceURL=webpack:///./src/utils/vector2.js?");

/***/ })

/******/ });