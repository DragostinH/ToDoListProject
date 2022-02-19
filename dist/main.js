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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAddTaskBtn)\n/* harmony export */ });\nfunction createAddTaskBtn() {\n    const btn = document.createElement('button');\n    btn.innerText = 'Add Task';\n    btn.classList.add('add-task-btn');\n\n\n    return btn;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createAddTaskBtn.js?");

/***/ }),

/***/ "./src/createDiv.js":
/*!**************************!*\
  !*** ./src/createDiv.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDiv)\n/* harmony export */ });\nfunction createDiv() {\n    // A function for creating div elements. \n    const div = document.createElement('div');\n\n    return div;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createDiv.js?");

/***/ }),

/***/ "./src/createListElement.js":
/*!**********************************!*\
  !*** ./src/createListElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createListElement)\n/* harmony export */ });\nfunction createListElement() {\n    const li = document.createElement('li');\n    li.classList.add('task-list-entry')\n\n\n    return li;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createListElement.js?");

/***/ }),

/***/ "./src/createTodoEntry.js":
/*!********************************!*\
  !*** ./src/createTodoEntry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoEntry)\n/* harmony export */ });\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _randomNumGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomNumGenerator */ \"./src/randomNumGenerator.js\");\n\n\n\n\nfunction createTodoEntry(text, description) {\n    const randomNum = (0,_randomNumGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    const taskText = document.createElement('span');\n    taskText.innerText = text;\n\n    const taskDescription = document.createElement('p');\n    taskDescription.innerText = description;\n    taskDescription.classList.add('todo-description')\n\n    const ulElement = document.querySelector('.task-list.inbox');\n\n    const taskContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    const taskTextContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    taskContainer.classList.add('task-container');\n\n    taskContainer.id = randomNum;\n\n    const taskCheckbox = document.createElement('button');\n    taskCheckbox.innerText = '?';\n    taskCheckbox.classList.add('task-checkbox');\n\n\n    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create\n    taskCheckbox.onclick = () => {\n\n        const todoEntryToRemove = document.getElementById(taskContainer.id);\n        ulElement.removeChild(todoEntryToRemove.parentElement);\n    }\n\n\n\n\n    ;(0,_appendMultiple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskTextContainer, taskText, taskDescription)\n    ;(0,_appendMultiple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskContainer, taskCheckbox, taskTextContainer);\n\n    return { taskContainer };\n\n}\n\n//# sourceURL=webpack://todolistproject/./src/createTodoEntry.js?");

/***/ }),

/***/ "./src/createTodoForm.js":
/*!*******************************!*\
  !*** ./src/createTodoForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoForm)\n/* harmony export */ });\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _createTodoEntry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTodoEntry */ \"./src/createTodoEntry.js\");\n/* harmony import */ var _formToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formToggle */ \"./src/formToggle.js\");\n\n\n\n\n\n\n\nfunction createTodoForm() {\n    // Create a form that appears every time you click on Add Task\n    // The form should have an input field of textarea with a character limit\n    // of no more than 200 characters.\n    // will include a \"Add task\" and Cancel buttons\n    // Will have a class that helps us hide/show it.\n    // Later on will include a title, description, due date and priority\n    const inputAreaContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    inputAreaContainer.classList.add('task-input-container')\n    const taskList = document.querySelector('.task-list.inbox');\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const taskDescription = document.createElement('textarea');\n    taskDescription.id = 'task-description';\n    taskDescription.maxLength = 120;\n    taskDescription.placeholder = 'Description';\n    let listArray;\n    const formContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    formContainer.classList.add('form-container');\n    const taskForm = document.createElement('form');\n    (0,_addClassToElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskForm, 'taskform');\n    // Create a button that shows the form\n\n\n    // Create a container for the Post Task and Cancel buttons\n    const formBtnContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    // Create a button that adds the task;\n    const postTaskBtn = document.createElement('button');\n\n    // Create a cancel button that hides the form again\n    const cancelTaskBtn = document.createElement('button');\n\n    // Append both buttons in the container\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formBtnContainer, postTaskBtn, cancelTaskBtn);\n\n    // Save the text area label and text area input in a variable.\n    const textArea = document.createElement('textarea');\n    textArea.id = 'textArea';\n    textArea.placeholder = 'E.g., Family get together on Sunday..'\n    // const textAreaLabel = document.createElement('label');\n\n\n    // Set maximum number of characters inside of the text area\n    textArea.maxLength = 240;\n\n    // Wrap the input(textarea) in a label\n    // textAreaLabel.appendChild(textArea);\n\n\n    // Add text for buttons:\n    postTaskBtn.innerText = 'Post Task';\n    cancelTaskBtn.innerText = 'Cancel';\n\n\n\n\n\n    // Add an event listener to the 'Post Task' button to push the task into the dom;\n    postTaskBtn.onclick = () => {\n        const currentForm = document.querySelector('.form-container');\n        const todoElement = (0,_createTodoEntry__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(textArea.value, taskDescription.value).taskContainer;\n\n        currentForm.parentElement.appendChild(todoElement);\n\n\n\n\n\n\n        currentForm.parentElement.removeChild(currentForm);\n        addTaskBtn.style.display = 'block';\n\n    }\n\n\n\n    // Add an event listener to the cancel button so when you press it, it re-adds the 'Add Task' btn and removes the Task Form\n    cancelTaskBtn.onclick = () => {\n        const currentForm = document.querySelector('.form-container');\n        currentForm.parentElement.remove();\n        addTaskBtn.style.display = 'block';\n\n    }\n\n\n\n    ;(0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(inputAreaContainer, textArea, taskDescription);\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskForm, inputAreaContainer, formBtnContainer);\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formContainer, taskForm);\n\n\n\n\n    return { formContainer, postTaskBtn, cancelTaskBtn };\n\n\n}\n\n\n\n\n//# sourceURL=webpack://todolistproject/./src/createTodoForm.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _createListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createListElement */ \"./src/createListElement.js\");\n/* harmony import */ var _createTodoForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTodoForm */ \"./src/createTodoForm.js\");\n\n\n\n\n\n\n\n\n\nconst indexPage = (() => {\n    // In the main index.js function we save every dom element we will be working with in a variable.\n    // This includes the \"main\" content element, sidebar and header.\n\n    const taskListInbox = document.querySelector('.task-list.inbox');\n    let todoForm;\n    const arrayOfTaskObjects = [];\n    const addTaskBtn = (0,_createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\n\n\n\n\n\n    // Event listeners -------------\n    addTaskBtn.onclick = () => {\n        addTaskBtn.style.display = 'none';\n        todoForm = (0,_createTodoForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().formContainer;\n        const li = (0,_createListElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        li.appendChild(todoForm);\n\n\n\n\n\n        taskListInbox.insertBefore(li, addTaskBtn);\n\n\n    }\n\n\n    // APPENDS ----------------\n    taskListInbox.appendChild(addTaskBtn);\n\n\n\n})()\n\n//# sourceURL=webpack://todolistproject/./src/index.js?");

/***/ }),

/***/ "./src/randomNumGenerator.js":
/*!***********************************!*\
  !*** ./src/randomNumGenerator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateRandomNum)\n/* harmony export */ });\nfunction generateRandomNum() {\n    const randomNum = Math.ceil(Math.random() * 10000);\n    \n    return randomNum;\n}\n\n//# sourceURL=webpack://todolistproject/./src/randomNumGenerator.js?");

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