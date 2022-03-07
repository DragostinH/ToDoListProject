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

/***/ "./src/createCheckmark.js":
/*!********************************!*\
  !*** ./src/createCheckmark.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCheckmark)\n/* harmony export */ });\nfunction createCheckmark() {\n    const taskCheckbox = document.createElement('button');\n    taskCheckbox.innerHTML = '&#10003;';\n    taskCheckbox.classList.add('task-checkbox');\n    return taskCheckbox;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createCheckmark.js?");

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

/***/ "./src/createPriorityDropdown.js":
/*!***************************************!*\
  !*** ./src/createPriorityDropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPriorityDropdown)\n/* harmony export */ });\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n\n\n\nfunction createPriorityDropdown() {\n   \n\n    const dropDownDiv = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    dropDownDiv.classList.add('dropdown');\n\n    const dropDownBtn = document.createElement('select');\n    dropDownBtn.classList.add('dropdown-btn');\n    dropDownBtn.innerText = 'PlaceholderText';\n\n    const dropDownContent = (0,_createDiv__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    dropDownContent.classList.add('dropdown-content');\n\n    const noOption = document.createElement('option');\n    noOption.classList.add('dropdown-option');\n    noOption.classList.add('none-option');\n    noOption.innerText = 'Priority';\n    noOption.selected = true;\n    // noOption.disabled = true;\n\n    const priorityA = document.createElement('option');\n    priorityA.classList.add('dropdown-option');\n    priorityA.classList.add('A');\n    priorityA.innerText = 'A';\n    const priorityB = document.createElement('option');\n    priorityB.classList.add('dropdown-option');\n    priorityB.classList.add('B');\n    priorityB.innerText = 'B';\n    const priorityC = document.createElement('option');\n    priorityC.classList.add('dropdown-option');\n    priorityC.classList.add('C');\n    priorityC.innerText = 'C';\n    const priorityD = document.createElement('option');\n    priorityD.classList.add('dropdown-option');\n    priorityD.classList.add('D');\n    priorityD.innerText = 'D';\n    \n\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dropDownBtn,\n        noOption,\n        priorityA,\n        priorityB,\n        priorityC,\n        priorityD);\n\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dropDownDiv,\n        dropDownBtn,\n        dropDownContent);\n\n\n    return dropDownDiv;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createPriorityDropdown.js?");

/***/ }),

/***/ "./src/createStoredElements.js":
/*!*************************************!*\
  !*** ./src/createStoredElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createStoredElements)\n/* harmony export */ });\n/* harmony import */ var _createTodoEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodoEntry */ \"./src/createTodoEntry.js\");\n\n\nfunction createStoredElements(array) {\n    const sectionName = array[0].name;\n    const tasksArray = array[0].tasks;\n    const tasksElementsArray = [];\n\n    tasksArray.forEach(element => {\n        const task = (0,_createTodoEntry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element.taskText, element.taskDescription, element.taskID);\n        console.log(element.taskID);\n        let classType = element.taskPriority;\n        task.taskParentContainer.classList.add(classType);\n        tasksElementsArray.push(task.taskParentContainer);\n\n    });\n\n    return tasksElementsArray;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createStoredElements.js?");

/***/ }),

/***/ "./src/createTaskText.js":
/*!*******************************!*\
  !*** ./src/createTaskText.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskText)\n/* harmony export */ });\nfunction createTaskText(text){\n    const taskText = document.createElement('span');\n    taskText.innerText = text;\n\n    return taskText;\n}\n\n//# sourceURL=webpack://todolistproject/./src/createTaskText.js?");

/***/ }),

/***/ "./src/createTodoEntry.js":
/*!********************************!*\
  !*** ./src/createTodoEntry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoEntry)\n/* harmony export */ });\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createCheckmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCheckmark */ \"./src/createCheckmark.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _createPriorityDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPriorityDropdown */ \"./src/createPriorityDropdown.js\");\n/* harmony import */ var _createTaskText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTaskText */ \"./src/createTaskText.js\");\n/* harmony import */ var _randomNumGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./randomNumGenerator */ \"./src/randomNumGenerator.js\");\n/* harmony import */ var _taskDescription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskDescription */ \"./src/taskDescription.js\");\n\n\n\n\n\n\n\n\nfunction createTodoEntry(text, description, id = 0) {\n    const randomNum = (0,_randomNumGenerator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n    const myStorage = localStorage;\n    const taskParentContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    taskParentContainer.classList.add('task-container');\n    if(id ===0){\n        taskParentContainer.id = randomNum;\n\n    }else{\n        taskParentContainer.id = id;\n    }\n\n    const taskObject = {\n        taskID: taskParentContainer.id,\n        taskText: text,\n        taskDescription: description,\n        taskPriority: \"\"\n\n    }\n\n\n\n\n    const taskTextContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    const taskText = (0,_createTaskText__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(text);\n\n    const taskDescription = (0,_taskDescription__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(description);\n\n    const taskCheckmark = (0,_createCheckmark__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create\n    taskCheckmark.onclick = () => {\n        // let arr = JSON.parse(myStorage.Inbox).tasks;\n        let keys = Object.keys(myStorage);\n        for (const key of keys) {\n           let currItem = JSON.parse(myStorage.getItem(key));\n           currItem.tasks.forEach(element => {\n               if(element.taskID === taskParentContainer.id){\n                   let indexToDelete = currItem.tasks.indexOf(element);\n                //    console.log(indexToDelete);\n                   console.log(element);\n                //    console.log(currItem.tasks);\n                   currItem.tasks.splice(indexToDelete, 1);\n               }\n           });\n        }\n\n        const ulElement = document.querySelector('.task-list.inbox');\n        const todoEntryToRemove = document.getElementById(taskParentContainer.id);\n        ulElement.removeChild(todoEntryToRemove.parentElement)\n        // arr.forEach(element => {\n        //     if(element.taskID === randomNum){\n\n        //     }\n        // });\n    }\n\n    ;(0,_appendMultiple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskTextContainer,\n        taskText,\n        taskDescription);\n\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskParentContainer,\n        taskCheckmark,\n        taskTextContainer);\n\n\n\n    return {\n        taskParentContainer,\n        taskTextContainer,\n        taskObject\n    }\n\n}\n\n\n\n\n//# sourceURL=webpack://todolistproject/./src/createTodoEntry.js?");

/***/ }),

/***/ "./src/createTodoForm.js":
/*!*******************************!*\
  !*** ./src/createTodoForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoForm)\n/* harmony export */ });\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _createPriorityDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPriorityDropdown */ \"./src/createPriorityDropdown.js\");\n/* harmony import */ var _createTodoEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTodoEntry */ \"./src/createTodoEntry.js\");\n/* harmony import */ var _formToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formToggle */ \"./src/formToggle.js\");\n/* harmony import */ var _postTaskFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postTaskFunction */ \"./src/postTaskFunction.js\");\n\n\n\n\n\n\n\n\n\nfunction createTodoForm(array) {\n    // Create a form that appears every time you click on Add Task\n    // The form should have an input field of textarea with a character limit\n    // of no more than 200 characters.\n    // will include a \"Add task\" and Cancel buttons\n    // Will have a class that helps us hide/show it.\n    // Later on will include a due date\n\n\n\n    const myStorage = localStorage;\n\n    let arr = array;\n\n    const priorityDropdown = (0,_createPriorityDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n    const taskBtnContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    taskBtnContainer.classList.add('task-btn-container');\n    taskBtnContainer.appendChild(priorityDropdown);\n\n    const inputAreaContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    inputAreaContainer.classList.add('task-input-container')\n    const taskList = document.querySelector('.task-list.inbox');\n    const addTaskBtn = document.querySelector('.add-task-btn');\n\n    const taskDescription = document.createElement('textarea');\n    taskDescription.id = 'task-description';\n    taskDescription.maxLength = 120;\n    taskDescription.placeholder = 'Description';\n\n    const formContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    formContainer.classList.add('form-container');\n    const taskForm = document.createElement('form');\n    taskForm.classList.add('taskform');\n\n    // Create a container for the Post Task and Cancel buttons\n    const formBtnContainer = (0,_createDiv__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    // Create a button that adds the task;\n    const postTaskBtn = document.createElement('button');\n    postTaskBtn.disabled = true;\n\n    // Create a cancel button that hides the form again\n    const cancelTaskBtn = document.createElement('button');\n\n    // Append both buttons in the container\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formBtnContainer, postTaskBtn, cancelTaskBtn);\n\n    // Save the text area label and text area input in a variable.\n    const textArea = document.createElement('textarea');\n    textArea.id = 'textArea';\n    textArea.placeholder = 'E.g., Family get together on Sunday..'\n    // const textAreaLabel = document.createElement('label');\n\n\n    // Set maximum number of characters inside of the text area\n    textArea.maxLength = 240;\n\n\n\n    // Add text for buttons:\n    postTaskBtn.innerText = 'Post Task';\n    cancelTaskBtn.innerText = 'Cancel';\n\n\n\n    // Adding an event listener to textarea so you don't post empty tasks\n    textArea.addEventListener('keyup', () => {\n\n        if (textArea.value.length > 0) {\n            postTaskBtn.disabled = false;\n        } else {\n            postTaskBtn.disabled = true;\n        }\n    })\n\n\n\n\n\n    // Add an event listener to the 'Post Task' button to push the task into the dom;\n    postTaskBtn.onclick = () => {\n        let itemToStringify;\n        const task = (0,_postTaskFunction__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(textArea, taskDescription, addTaskBtn);\n        // We use the array provided. The array should already be up to date if there are any items from storage.\n\n        if(arr[0].name === 'Inbox'){\n            arr[0].tasks.push(task.todoElement.taskObject)\n            itemToStringify = JSON.stringify(arr[0]);\n            myStorage.setItem('storage', itemToStringify);\n        }\n\n        \n\n    }\n\n\n\n    // Add an event listener to the cancel button so when you press it, it re-adds the 'Add Task' btn and removes the Task Form\n    cancelTaskBtn.onclick = () => {\n        const currentForm = document.querySelector('.form-container');\n        currentForm.parentElement.remove();\n        addTaskBtn.style.display = 'block';\n    }\n\n\n\n    ;(0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(inputAreaContainer,\n        textArea,\n        taskDescription,\n        taskBtnContainer);\n\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskForm,\n        inputAreaContainer,\n        formBtnContainer);\n\n    (0,_appendMultiple__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formContainer,\n        taskForm);\n\n\n\n\n    return { formContainer, postTaskBtn, cancelTaskBtn };\n\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todolistproject/./src/createTodoForm.js?");

/***/ }),

/***/ "./src/formToggle.js":
/*!***************************!*\
  !*** ./src/formToggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formDisplayToggle)\n/* harmony export */ });\nfunction formDisplayToggle(button, form){\n\n    button.onclick = ()=>{\n        form.classList.toggle('hidden');\n    }\n\n}\n\n//# sourceURL=webpack://todolistproject/./src/formToggle.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inboxPage)\n/* harmony export */ });\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _createListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createListElement */ \"./src/createListElement.js\");\n/* harmony import */ var _createStoredElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createStoredElements */ \"./src/createStoredElements.js\");\n/* harmony import */ var _createTodoEntry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTodoEntry */ \"./src/createTodoEntry.js\");\n/* harmony import */ var _createTodoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createTodoForm */ \"./src/createTodoForm.js\");\n\n\n\n\n\n\n\n\n\n\nfunction inboxPage() {\n    const myStorage = window.localStorage;\n    const storageKeys = Object.keys(myStorage);\n    let inboxArray = [];\n    const main = document.querySelector('main');\n    const ulForInbox = document.createElement('ul');\n    (0,_addClassToElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ulForInbox, 'task-list', 'inbox');\n    const ul = document.querySelector('.task-list.inbox')\n    const addTaskBtn = (0,_createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const targetAddTaskBtn = document.querySelector('.add-task-btn');\n\n\n    // The index page always defaults to Inbox \n    // With every page we create the HTML elements.\n    // This includes the \"main\" content element, sidebar and header.\n\n\n    const pageTitle = document.createElement('h2');\n    pageTitle.innerText = 'Inbox';\n\n\n    let todoForm;\n\n\n\n    // Event listeners -------------\n    addTaskBtn.onclick = () => {\n        // Remove the Add Task button\n        addTaskBtn.style.display = 'none';\n        // Create the form for adding new todos\n        todoForm = (0,_createTodoForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(inboxArray).formContainer;\n        // Create a li element to append to the main element\n        const li = (0,_createListElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        // append the form to the new li element\n        li.appendChild(todoForm);\n        ulForInbox.insertBefore(li, addTaskBtn);\n\n        // if (storageKeys.length > 0) {\n        //     inboxArray[0] = JSON.parse(myStorage.storage);\n        //     let storedElements = createStoreElements(inboxArray);\n        //     storedElements.forEach(element => {\n        //         let liElement = createListElement();\n        //         liElement.appendChild(element);\n        //         ulForInbox.insertBefore(liElement, targetAddTaskBtn);\n        //     });\n        // } else {\n        //     inboxArray[0] = {\n        //         name: 'Inbox',\n        //         tasks: []\n        //     }\n\n        // }\n    }\n    // Storage manipulation-------------\n    if (storageKeys.length > 0) {\n        inboxArray[0] = JSON.parse(myStorage.storage);\n        let storedElements = (0,_createStoredElements__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(inboxArray);\n        storedElements.forEach(element => {\n            let liElement = (0,_createListElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n            liElement.appendChild(element);\n            ulForInbox.insertBefore(liElement, targetAddTaskBtn);\n        });\n\n    } else {\n        inboxArray[0] = {\n            name: 'Inbox',\n            tasks: []\n        }\n\n    }\n\n\n    console.log(inboxArray);\n\n\n    // APPENDS ----------------\n    ulForInbox.appendChild(addTaskBtn);\n    main.appendChild(pageTitle);\n    main.appendChild(ulForInbox);\n\n    return { inboxPage };\n}\n\n//# sourceURL=webpack://todolistproject/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addClassToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClassToElement */ \"./src/addClassToElement.js\");\n/* harmony import */ var _appendMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendMultiple */ \"./src/appendMultiple.js\");\n/* harmony import */ var _createAddTaskBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn */ \"./src/createAddTaskBtn.js\");\n/* harmony import */ var _createDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDiv */ \"./src/createDiv.js\");\n/* harmony import */ var _createListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createListElement */ \"./src/createListElement.js\");\n/* harmony import */ var _createTodoEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTodoEntry */ \"./src/createTodoEntry.js\");\n/* harmony import */ var _createTodoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createTodoForm */ \"./src/createTodoForm.js\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n\n\n\n\n\n\n\n\n\n\nconst indexPage = (() => {\n    // Always load the inbox first:\n    (0,_inbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n    // Create the main array that contains all of Inbox task objects into one. It should be seperated by priorities.\n\n    // Website loads -> Check if there is anything in localStorage. \n    // If there is you append them to the DOM. If not we do nothing.\n    // When you click on 'Post task' we will create the localStorage object with each page having its own object ('Inbox', 'Today', 'Upcoming');\n    // if you post a new task, you add it to the localStorage.\n\n    const myStorage = window.localStorage;\n    const storageKeys = Object.keys(myStorage);\n\n    const inboxBtn = document.querySelector('.inbox-btn');\n    const todayBtn = document.querySelector('.today-btn');\n    const upcomingBtn = document.querySelector('.upcoming-btn');\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const main = document.querySelector('main');\n    const ulInbox = document.querySelector('.task-list.inbox');\n\n\n\n\n\n\n\n\n})()\n\n//# sourceURL=webpack://todolistproject/./src/index.js?");

/***/ }),

/***/ "./src/postTaskFunction.js":
/*!*********************************!*\
  !*** ./src/postTaskFunction.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postTaskFunction)\n/* harmony export */ });\n/* harmony import */ var _createTodoEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodoEntry */ \"./src/createTodoEntry.js\");\n\n\nfunction postTaskFunction(textArea, taskDescription, addTaskBtn, array) {\n    const dropDown = document.querySelector('.dropdown-btn');\n    const currentForm = document.querySelector('.form-container');\n    const todoElement = (0,_createTodoEntry__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(textArea.value, taskDescription.value)\n\n\n\n\n    if (dropDown.value === 'A') {\n        todoElement.taskParentContainer.classList.add('priorityA');\n        todoElement.taskObject.taskPriority = \"priorityA\";\n\n    } else if (dropDown.value === 'B') {\n        todoElement.taskParentContainer.classList.add('priorityB');\n        todoElement.taskObject.taskPriority = \"priorityB\";\n\n    } else if (dropDown.value === 'C') {\n        todoElement.taskParentContainer.classList.add('priorityC');\n        todoElement.taskObject.taskPriority = \"priorityC\";\n\n    } else if (dropDown.value === 'D') {\n        todoElement.taskParentContainer.classList.add('priorityD');\n        todoElement.taskObject.taskPriority = \"priorityD\";\n\n    } else {\n        todoElement.taskParentContainer.classList.add('no-priority');\n        todoElement.taskObject.taskPriority = \"no-priority\";\n\n    }\n\n\n    currentForm.parentElement.appendChild(todoElement.taskParentContainer);\n    currentForm.parentElement.removeChild(currentForm);\n    addTaskBtn.style.display = 'block';\n\n    return { todoElement }\n\n}\n\n//# sourceURL=webpack://todolistproject/./src/postTaskFunction.js?");

/***/ }),

/***/ "./src/randomNumGenerator.js":
/*!***********************************!*\
  !*** ./src/randomNumGenerator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateRandomNum)\n/* harmony export */ });\nfunction generateRandomNum() {\n    const randomNum = Math.ceil(Math.random() * 10000);\n    \n    return randomNum;\n}\n\n//# sourceURL=webpack://todolistproject/./src/randomNumGenerator.js?");

/***/ }),

/***/ "./src/taskDescription.js":
/*!********************************!*\
  !*** ./src/taskDescription.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskDescription)\n/* harmony export */ });\nfunction createTaskDescription(description) {\n    const taskDescription = document.createElement('p');\n    taskDescription.innerText = description;\n    taskDescription.classList.add('todo-description');\n    return taskDescription;\n}\n\n//# sourceURL=webpack://todolistproject/./src/taskDescription.js?");

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