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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodobtn\"].addEventListener('click', function (e) {\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"todoContainer\"]);\n}); // hide all forms when the container is clicked\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"allContainer\"].addEventListener('click', function (e) {\n  if (e.target.classList.contains('close-w')) {\n    Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().closeForm();\n  }\n});\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"].addEventListener('click', function () {\n  Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"taskContainer\"]);\n}); //set default task\n\nvar today = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])(\"Today\");\nvar alltask = [today];\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].taskBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  var title = _dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].tasktitle.value;\n  var newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__[\"Task\"](title);\n  alltask.push(newTask);\n  alltask.forEach(function (index, value) {\n    Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().render(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"taskTemplate\"], Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().allTk);\n  });\n  console.log(alltask[0]);\n}); //add initial todos\n\nvar defaultTask = alltask[0];\ndefaultTask.todos.push(Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"])(\"Buy milk\", 'early in the morning', '11/02/1991', '2')); //add task when the button is clicked\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todoBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  var name = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todotitle.value;\n  var description = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].tododesc.value;\n  var dateofbirth = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].dateofbirth.value;\n  var priority = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].priority.value;\n  var note = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].note.value;\n  var setTodo = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"])(name, description, dateofbirth, priority, note);\n  defaultTask.todos.push(setTodo);\n  defaultTask.todos.forEach(function (index, value) {\n    Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().render(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"todoTemplate\"], Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().todoTk);\n  });\n  console.log(defaultTask.todos);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! exports provided: Task, Todo, renderContent, taskTemplate, todoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContent\", function() { return renderContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskTemplate\", function() { return taskTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoTemplate\", function() { return todoTemplate; });\nvar Task = function Task(name) {\n  return {\n    name: name,\n    todos: []\n  };\n};\n\nvar Todo = function Todo(name, description, duedate, priority) {\n  var note = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"\";\n  return {\n    name: name,\n    description: description,\n    duedate: duedate,\n    priority: priority,\n    note: note\n  };\n};\n\nvar taskTemplate = \" \\n\\n                      <div class=\\\"card-bins\\\">\\n                          <h6 class=\\\"card-title py-2 text-uppercase text-ligth\\\">Today</h6>\\n                          <i class=\\\"fas fa-trash text-danger delete\\\"></i>\\n                      </div>\\n\\n                      <div class=\\\"card-body border my-4 round1\\\">\\n                          \\n                      </div>\\n\\n                      <div class=\\\"add-btn text-center\\\">\\n                          <a href=\\\"#\\\" class=\\\"btn addTodobtn btn-outline-primary\\\"><i class=\\\"fas fa-plus\\\"></i> Add To do</a>\\n                      </div>\\n\\n                          \";\nvar todoTemplate = \"\\n                    <div class=\\\"card-bins\\\">\\n                    <p class=\\\"text-success text-uppercase\\\">Low-Priority</p>\\n                    <i class=\\\"fas fa-trash ml-2 text-danger delete\\\"></i>\\n                    </div>\\n\\n                    <p class=\\\"card-text\\\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla distinctio explicabo voluptate laboriosam pariatur quasi veniam neque eius voluptates.</p>\\n                    <a href=\\\"#\\\" class=\\\"btn btn-outline-success\\\"><i class=\\\"fas fa-check\\\" ></i> Done!</a>\\n                    <a href=\\\"#\\\" class=\\\"btn btn-outline-danger\\\"><i class=\\\"fas fa-check\\\" ></i> Not Done!</a>\\n                  \";\n\nfunction renderContent() {\n  return {\n    allTk: document.getElementById('allTk'),\n    todoTk: document.getElementById('todoTk'),\n    render: function render(template, node) {\n      var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.createElement('div');\n\n      if (node === this.allTk) {\n        container.classList = \"card shadow col-sm-6 col-lg-4 p-3 round1 border-0 bg-white\";\n      } else {\n        container.classList = \"card-body border my-4 round1\";\n      }\n\n      container.innerHTML = \"\";\n      container.innerHTML = template;\n      node.appendChild(container);\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ })

/******/ });