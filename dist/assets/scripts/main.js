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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: handleForm, addTask, taskForm, allContainer, addTodo, todoContainer, taskContainer, addTodobtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleForm\", function() { return handleForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskForm\", function() { return taskForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allContainer\", function() { return allContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoContainer\", function() { return todoContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskContainer\", function() { return taskContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodobtn\", function() { return addTodobtn; });\nvar allContainer = document.querySelector('.all-container');\nvar addTask = document.querySelector('.addnewTask');\nvar addTodo = document.querySelector('.addTodo');\nvar taskForm = document.querySelector('.addTask');\nvar todoContainer = document.querySelector('.todo-container');\nvar addTodobtn = document.querySelector('.addTodobtn');\nvar taskContainer = document.querySelector('.taskContainer'); // display addTask form when it is clicked\n\nfunction handleForm() {\n  return {\n    showForm: function showForm(container) {\n      allContainer.classList.remove('d-none');\n      container.classList.remove('d-none');\n    },\n    closeForm: function closeForm() {\n      allContainer.classList.add('d-none');\n      todoContainer.classList.add('d-none');\n      taskContainer.classList.add('d-none');\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodobtn\"].addEventListener('click', function (e) {\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"todoContainer\"]);\n}); // hide all forms when the container is clicked\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"allContainer\"].addEventListener('click', function (e) {\n  if (e.target.classList.contains('close-w')) {\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().closeForm();\n  }\n});\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"].addEventListener('click', function () {\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"taskContainer\"]);\n});\nvar alltask = [];\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].taskBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  var title = _dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].tasktitle.value;\n  var newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__[\"Task\"](title);\n  alltask.push(newTask);\n  console.log(alltask[0]);\n});\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todoBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todotitle.value, _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].tododesc.value, _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].dateofbirth.value, _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].priority.value, _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].note.value);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! exports provided: Task, Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\nvar Task = function Task(name) {\n  return {\n    name: name,\n    todos: []\n  };\n};\n\nvar Todo = function Todo(name, description, duedate, priority) {\n  var note = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"\";\n  return {\n    name: name,\n    description: description,\n    duedate: duedate,\n    priority: priority\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ })

/******/ });