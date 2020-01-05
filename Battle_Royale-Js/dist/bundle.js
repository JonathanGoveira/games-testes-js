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
eval("__webpack_require__.r(__webpack_exports__);\nclass Canvas_Singleton{\n    constructor(){\n        this._canvas = document.getElementById('canvas');\n        this._context = this.canvas.getContext('2d');\n        // this._canvas.width = window.innerWidth;\n        // this._canvas.height = window.innerHeight;\n        this._canvas.width = 800;\n        this._canvas.height = 600;\n    }\n\n    clear(){\n        this._context.fillStyle = \"white\";\n        this._context.fillRect(0,0,this.width, this.height)\n    }\n\n    // Getters and Setters\n    get context(){return this._context};\n    get canvas(){return this._canvas};\n    get width(){return this._canvas.width};\n    get height(){return this._canvas.height};\n}\n\nconst canvas = new Canvas_Singleton();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (canvas);\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/player */ \"./src/objects/player.js\");\n/* harmony import */ var _others_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./others/background */ \"./src/others/background.js\");\n/* harmony import */ var _others_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./others/camera */ \"./src/others/camera.js\");\n/* harmony import */ var _inputs_mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs/mouse */ \"./src/inputs/mouse.js\");\n\n\n\n\n\n\nlet cv = document.getElementById('canvas')\nconst player = new _objects_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n(function Init(){\n    _others_camera__WEBPACK_IMPORTED_MODULE_3__[\"default\"].centerCamera(_others_background__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    \n    setInterval(Loop,1000/60)\n}())\n\nfunction Loop(){\n    \n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clear();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.strokeStyle = \"blue\"\n     \n    _others_camera__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update(player)\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.save();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.translate(-_others_camera__WEBPACK_IMPORTED_MODULE_3__[\"default\"].x, -_others_camera__WEBPACK_IMPORTED_MODULE_3__[\"default\"].y)\n    \n    \n    player.update();\n    _inputs_mouse__WEBPACK_IMPORTED_MODULE_4__[\"default\"].update(player)\n    _others_background__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render();\n    player.render();\n    //canvas.context.beginPath();\n    //canvas.context.moveTo(0, 0);\n    //canvas.context.lineTo(mouse_Singleton.x - player.angle(), mouse_Singleton.y - player.angle());\n    //canvas.context.stroke();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].context.restore();\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/inputs/keyboard.js":
/*!********************************!*\
  !*** ./src/inputs/keyboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass KeyBoard_Singleton{\n    constructor(){\n        this._keys=[]\n        for(let i=0;i<255;i++){\n            this._keys[i] = false\n        }\n        document.addEventListener('keydown', (e) => {this.keyDown(e)})\n        document.addEventListener('keyup', (e) => {this.keyUp(e)})\n    }\n\n    keyDown(e){\n        this._keys[e.keyCode] = true\n    }\n    keyUp(e){\n        this._keys[e.keyCode] = false\n    }\n    keyPress(keyCode){\n        return this._keys[keyCode];\n    }\n}\nconst keyboard_Singleton = new KeyBoard_Singleton();\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyboard_Singleton);\n\n\n//# sourceURL=webpack:///./src/inputs/keyboard.js?");

/***/ }),

/***/ "./src/inputs/mouse.js":
/*!*****************************!*\
  !*** ./src/inputs/mouse.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vector2 */ \"./src/utils/vector2.js\");\n/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ \"./src/utils/math.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas */ \"./src/canvas.js\");\n/* harmony import */ var _others_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../others/camera */ \"./src/others/camera.js\");\n\n\n\n\n\nclass Mouse_Singleton{\n    constructor(){\n        this._position = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n        document.addEventListener('mousemove', (e) =>{this.move(e)},false)\n    }\n\n    move(e){\n        const bounds = _canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"].canvas.getBoundingClientRect();\n        this._position.x = e.clientX - bounds.left \n        this._position.y = e.clientY - bounds.top\n        \n    }\n    update(){\n        this._position.x += Math.round(_others_camera__WEBPACK_IMPORTED_MODULE_3__[\"default\"].x) \n        this._position.y += Math.round(_others_camera__WEBPACK_IMPORTED_MODULE_3__[\"default\"].y) \n    }\n    get x(){return this._position.x};\n    get y(){return this._position.y};\n}\nconst mouse_Singleton = new Mouse_Singleton();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mouse_Singleton);\n\n//# sourceURL=webpack:///./src/inputs/mouse.js?");

/***/ }),

/***/ "./src/objects/player.js":
/*!*******************************!*\
  !*** ./src/objects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _utils_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vector2 */ \"./src/utils/vector2.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas */ \"./src/canvas.js\");\n/* harmony import */ var _inputs_mouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs/mouse */ \"./src/inputs/mouse.js\");\n/* harmony import */ var _inputs_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputs/keyboard */ \"./src/inputs/keyboard.js\");\n\n\n\n\n\nclass Player{\n    constructor(){\n        this._position = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width /2 ,_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height /2);\n        this._distance = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n        this._velocity = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n        this._acceleration = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n        this._angle = 0;\n        this._width = 40; this._height = 20;\n        this._pivot = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._width/2, this._height/2)\n        this._color = \"deepskyblue\"\n        this._proporcao = _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height\n        this._friction = 0.01\n        this._shot = []\n    }\n\n    distanceX(){return (this._position.x - _inputs_mouse__WEBPACK_IMPORTED_MODULE_2__[\"default\"].x)}\n    distanceY(){return (this._position.y - _inputs_mouse__WEBPACK_IMPORTED_MODULE_2__[\"default\"].y)}\n\n    updateAngle(){\n        this._angle = Math.atan2(-this.distanceY(), -this.distanceX() * this._proporcao)\n    }\n\n    input(){\n        if(_inputs_keyboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"].keyPress(65)){\n            this._acceleration.x = Math.cos((this.angle()) * 0.05).toPrecision(10)\n            this._acceleration.y = Math.sin((this.angle()) * 0.05).toPrecision(10)\n        }else{this._acceleration.x = this._acceleration.y = 0}\n\n    }\n\n    physicsUpdate(){\n        this._velocity.x += this._acceleration.x;\n        this._velocity.y += this._acceleration.y;\n\n        this.friction();\n        this._position.x += (this._velocity.x);\n        this._position.y += (this._velocity.y);\n    }\n\n    friction(){\n        let speed = Math.sqrt(this._velocity.x * this._velocity.x + this._velocity.y * this._velocity.y);\n        let angle = Math.atan2(this._velocity.y, this._velocity.x);\n        if (speed > this._friction){ speed -= (this._friction * 1.5)}\n        else {speed = 0}\n        this._velocity.x = Math.cos(angle) * speed;\n        this._velocity.y = Math.sin(angle) * speed;\n    }\n\n    render(){\n        \n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.translate(this.x, this.y)\n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.rotate(this.angle())\n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.fillStyle = this._color\n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.fillRect(-this._pivot.x, -this._pivot.y, this.width, this.height)\n        \n    }\n\n    update(){\n        \n        this.updateAngle();\n        this.input();\n        this._position.x += 1\n        this._position.y += 1\n        //this.physicsUpdate();\n    }\n\n    angle(){return this._angle}\n\n    // Getters\n    get x(){return this._position.x};\n    get y(){return this._position.y};\n    get width(){return this._width};\n    get height(){return this._height};\n    get color(){return this._color}\n    // Setters\n    set x(p_x){this._position.x = p_x};\n    set y(p_y){this._position.y = p_y};\n    set width(p_w){this._width = p_w}\n    set height(p_h){this._height = p_h}\n\n\n}\n\n//# sourceURL=webpack:///./src/objects/player.js?");

/***/ }),

/***/ "./src/others/background.js":
/*!**********************************!*\
  !*** ./src/others/background.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vector2 */ \"./src/utils/vector2.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas */ \"./src/canvas.js\");\n\n\n\nclass Background{\n    constructor(){\n        this._size = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3000,3000)\n        this._stars = new Stars();\n        this._stars.random(this);\n        \n    }\n\n    render(){\n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.fillStyle = \"black\";\n        \n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.fillRect(0,0, this._size.x, this._size.y)\n\n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.fillStyle = \"white\"\n        \n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.beginPath();\n        for(let i = 0; i < this._stars.length; i++){\n            _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.moveTo(this._stars.x[i], this._stars.y[i])\n            _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.arc(this._stars.x[i], this._stars.y[i], this._stars.width[i] , 0 ,  Math.PI * 2)\n        }\n        _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].context.fill();\n    }\n    get width(){return this._size.x};\n    get height(){return this._size.y};\n}\n\nclass Stars{\n    constructor(){\n        this._length = 100\n        this._x = new Array(this._length);\n        this._y = new Array(this._length);\n        this._width = new Array(this._length);\n        this._height = new Array(this._length);\n    }\n    random(obj){\n        for(let i = 0; i < this._x.length; i++){\n            this._x[i] = Math.random() * obj.width\n            this._y[i] = Math.random() * obj.height\n            this._width[i] = Math.random() * 2;\n            this._height[i] = Math.random() * 2;\n        }\n    }\n\n    // Gets\n    get x(){return this._x}\n    get y(){return this._y}\n    get width(){return this._width}\n    get height(){return this._height}\n    get length(){return this._length}\n    \n}\n\nconst backGround_Singleton = new Background();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (backGround_Singleton);\n\n//# sourceURL=webpack:///./src/others/background.js?");

/***/ }),

/***/ "./src/others/camera.js":
/*!******************************!*\
  !*** ./src/others/camera.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vector2 */ \"./src/utils/vector2.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas */ \"./src/canvas.js\");\n\n\n\nclass Camera_Singleton{\n    constructor(){\n        this._position = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n        this._size = new _utils_vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width,_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    }\n\n    centerCamera(obj){\n        this._position.x = (obj.width - this._size.x) / 2;\n        this._position.y = (obj.height - this._size.y) / 2;\n    }\n\n    centerObj(obj){\n        obj.x = this._position.x + (this._size.x / 2)\n        obj.y = this._position.y +  (this._size.y / 2)\n        \n    }\n\n    update(obj){\n        this._position.x = obj.x - (this._size.x / 2);\n        this._position.y = obj.y  - (this._size.y / 2);\n    }\n\n    get x(){return this._position.x}\n    get y(){return this._position.y}\n}\n\nconst camera = new Camera_Singleton();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (camera);\n\n//# sourceURL=webpack:///./src/others/camera.js?");

/***/ }),

/***/ "./src/utils/math.js":
/*!***************************!*\
  !*** ./src/utils/math.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2 */ \"./src/utils/vector2.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas */ \"./src/canvas.js\");\n\n\n\nclass Math{\n    constructor(){this._coordinate = new _vector2__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0)}\n\n    toNormalize(p_x, p_y){\n        this._coordinate.x = (((p_x / _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width) * 2) - 1).toPrecision(16);\n        this._coordinate.y = (((p_y / - _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height  + 1) * 2 -1)).toPrecision(16);\n        return this._coordinate\n    }\n    toPixel(){}\n    get x(){\n        return this._coordinate.x\n    }\n}\n\nconst math_Singleton = new Math();\n/* harmony default export */ __webpack_exports__[\"default\"] = (math_Singleton);\n\n//# sourceURL=webpack:///./src/utils/math.js?");

/***/ }),

/***/ "./src/utils/vector2.js":
/*!******************************!*\
  !*** ./src/utils/vector2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector2; });\nclass Vector2{\n    constructor(p_x,p_y){\n        this._x = p_x;\n        this._y = p_y;\n    }\n\n    sum(vec){let _sum = new Vector2(this.x + vec.x, this.y + vec.y); return _sum}\n    scalar(num){let _mult = new Vector2(num * this.x, num * this.y); return _mult}\n    // Getters\n    get x(){return this._x;}\n    get y(){return this._y;}\n    // Setters\n    set x(p_x){this._x = p_x}\n    set y(p_y){this._y = p_y;}\n}\n\n//# sourceURL=webpack:///./src/utils/vector2.js?");

/***/ })

/******/ });