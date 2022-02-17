/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addClassToElement.js":
/*!**********************************!*\
  !*** ./src/addClassToElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addClassToElement)\n/* harmony export */ });\nfunction addClassToElement(element, ...classNames) {\n    if (Array.isArray(classNames)) {\n        const arrayOfNames = classNames;\n        classNames.forEach(className => {\n            element.classList.add(className);\n        })\n\n    } else {\n\n        element.classList.add(classNames);\n    }\n\n}\n\n//# sourceURL=webpack://todolistproject/./src/addClassToElement.js?");

/***/ }),

/***/ "./src/appendMultiple.js":
/*!*******************************!*\
  !*** ./src/appendMultiple.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendMultiple)\n/* harmony export */ });\nfunction appendMultiple(parent, ...elements) {\n    if (Array.isArray(elements)) {\n        elements.forEach(element => {\n            parent.appendChild(element);\n        })\n    } else {\n        parent.appendChild(elements);\n    }\n\n}\n\n//# sourceURL=webpack://todolistproject/./src/appendMultiple.js?");

/***/ }),

/***/ "./src/createAddTaskBtn.js":
/*!*********************************!*\
  !*** ./src/createAddTaskBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAddTaskBtn)\n/* harmony export */ });\nfunction createAddTaskBtn() {\n    const btn = document.createElement('button');\n    btn.classList.add('add-task-btn');\n\n\n    return btn;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createAddTaskBtn.js?");

/***/ }),

/***/ "./src/createDiv.js":
/*!**************************!*\
  !*** ./src/createDiv.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDiv)\n/* harmony export */ });\nfunction createDiv() {\n    // A function for creating div elements. \n    const div = document.createElement('div');\n\n    return div;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createDiv.js?");

/***/ }),

/***/ "./src/createTodoForm.js":
/*!*******************************!*\
  !*** ./src/createTodoForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoForm)\n/* harmony export */ });\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _formToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formToggle */ \"./src/formToggle.js\");\n\n\n\n\n\n\nfunction createTodoForm() {\n    // Create a form that appears every time you click on Add Task\n    // The form should have an input field of textarea with a character limit\n    // of no more than 200 characters.\n    // will include a \"Add task\" and Cancel buttons\n    // Will have a class that helps us hide/show it.\n    // Later on will include a title, description, due date and priority\n    const formContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    formContainer.classList.add('form-container');\n    const taskForm = document.createElement('form');\n    (0,_addClassToElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskForm, 'taskform', 'hidden');\n    // Create a button that shows the form\n    const addTaskBtn = (0,_createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n    // Create a container for the Post Task and Cancel buttons\n    const formBtnContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    // Create a button that adds the task;\n    const postTaskBtn = document.createElement('button');\n\n    // Create a cancel button that hides the form again\n    const cancelTaskBtn = document.createElement('button');\n\n    // Append both buttons in the container\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formBtnContainer, postTaskBtn, cancelTaskBtn);\n\n    // Save the text area label and text area input in a variable.\n    const textArea = document.createElement('textarea');\n    const textAreaLabel = document.createElement('label');\n\n\n    // Set maximum number of characters inside of the text area\n    textArea.maxLength = 240;\n\n    // Wrap the input(textarea) in a label\n    textAreaLabel.appendChild(textArea);\n\n    addTaskBtn.innerText = 'Add Task';\n    postTaskBtn.innerText = 'Post Task';\n    cancelTaskBtn.innerText = 'Cancel';\n\n\n\n\n\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskForm, textAreaLabel, formBtnContainer);\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formContainer, taskForm, addTaskBtn);\n\n\n\n\n    return formContainer;\n\n\n}\n\n\n\n\n//# sourceURL=webpack://todolistproject/./src/createTodoForm.js?");

/***/ }),

/***/ "./src/formToggle.js":
/*!***************************!*\
  !*** ./src/formToggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formDisplayToggle)\n/* harmony export */ });\nfunction formDisplayToggle(button, form){\n\n    button.onclick = ()=>{\n        form.classList.toggle('hidden');\n    }\n\n}\n\n//# sourceURL=webpack://todolistproject/./src/formToggle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createTodoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodoForm */ \"./src/createTodoForm.js\");\n\n\n\n\n\n\nconst indexPage = (() => {\n    // In the main index.js function we save every dom element we will be working with in a variable.\n    // This includes the \"main\" content element, sidebar and header.\n\n    const arrayOfObjects = [];\n    const main = document.querySelector('main');\n    const header = document.querySelector('header');\n    const sidebar = document.querySelector('.sidebar');\n    const taskForm = (0,_createTodoForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    main.appendChild(taskForm);\n\n\n\n    // Need to create an algorithm that stores created Tasks as objects into an array\n\n})()\n\n//# sourceURL=webpack://todolistproject/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;