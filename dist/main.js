/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/classes/ClassA.ts":
/*!**************************************!*\
  !*** ./src/common/classes/ClassA.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassA = void 0;
var ClassA = /** @class */ (function () {
    function ClassA(name) {
        this.name = name || this.constructor.name;
        console.log("You are in %o Instance", this.name);
    }
    /**
     * getName
     */
    ClassA.prototype.getName = function () {
        return this.name;
    };
    return ClassA;
}());
exports.ClassA = ClassA;


/***/ }),

/***/ "./src/common/classes/ClassB.ts":
/*!**************************************!*\
  !*** ./src/common/classes/ClassB.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassB = void 0;
var ClassB = /** @class */ (function () {
    function ClassB() {
        console.log("You are in ClassB Instance");
    }
    ClassB.prototype.getName = function () {
        return "--ClassB--";
    };
    return ClassB;
}());
exports.ClassB = ClassB;


/***/ }),

/***/ "./src/creational/Factory/Creator.ts":
/*!*******************************************!*\
  !*** ./src/creational/Factory/Creator.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Creater = void 0;
var ClassA_1 = __webpack_require__(/*! ../../common/classes/ClassA */ "./src/common/classes/ClassA.ts");
var ClassB_1 = __webpack_require__(/*! ../../common/classes/ClassB */ "./src/common/classes/ClassB.ts");
var Creater = /** @class */ (function () {
    function Creater() {
    }
    Creater.create = function (type) {
        var reference;
        if (type === "A") {
            reference = new ClassA_1.ClassA();
        }
        else if (type === "B") {
            reference = new ClassB_1.ClassB();
        }
        else {
            reference = new ClassA_1.ClassA(type);
        }
        return reference;
    };
    return Creater;
}());
exports.Creater = Creater;


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Creator_1 = __webpack_require__(/*! ./creational/Factory/Creator */ "./src/creational/Factory/Creator.ts");
// Factory Pattern
console.log(Creator_1.Creater.create("A"));

})();

/******/ })()
;
//# sourceMappingURL=main.js.map