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
/*! exports provided: handleForm, addTask, taskForm, allContainer, addTodo, todoContainer, searchIcon, taskContainer, addTodobtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleForm\", function() { return handleForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskForm\", function() { return taskForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allContainer\", function() { return allContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoContainer\", function() { return todoContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchIcon\", function() { return searchIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskContainer\", function() { return taskContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodobtn\", function() { return addTodobtn; });\nvar allContainer = document.querySelector('.all-container');\nvar addTask = document.querySelector('.addnewTask');\nvar addTodo = document.querySelector('.addTodo');\nvar taskForm = document.querySelector('.addTask');\nvar todoContainer = document.querySelector('.todo-container');\nvar addTodobtn = document.getElementById('allTk');\nvar taskContainer = document.querySelector('.taskContainer');\nvar searchIcon = document.querySelector('.searchIcon');\n\nfunction handleForm() {\n  return {\n    showForm: function showForm(container) {\n      allContainer.classList.remove('d-none');\n      container.classList.remove('d-none');\n    },\n    closeForm: function closeForm() {\n      allContainer.classList.add('d-none');\n      todoContainer.classList.add('d-none');\n      taskContainer.classList.add('d-none');\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\nObject(_script__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().contents();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* eslint-disable   array-callback-return */\n\n\n\nfunction loadContents() {\n  return {\n    contents: function contents() {\n      var alltask = [];\n      var defaultTask; // search search input when icon is clicked\n\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"searchIcon\"].addEventListener('click', function (e) {\n        e.target.nextElementSibling.classList.remove('d-none');\n      });\n\n      if (localStorage.length < 1) {\n        var today = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"Task\"])('Today');\n        alltask.push(today);\n        var _alltask = alltask;\n\n        var _alltask2 = _slicedToArray(_alltask, 1);\n\n        defaultTask = _alltask2[0];\n        // add initial todos\n        defaultTask.todos.push(Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"])('Buy milk', 'early in the morning', '11/02/1991', 'Low Priority'));\n      } else {\n        var storedlist = localStorage.getItem('alltask');\n        alltask = JSON.parse(storedlist);\n      }\n\n      var todoNode = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().todoTk; // load the initial elements to the dom\n\n      document.addEventListener('DOMContentLoaded', function () {\n        alltask.forEach(function (value, index) {\n          Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().render(Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().allTk, value, index);\n          value.todos.forEach(function (newvalue, newindex) {\n            Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().render(document.getElementById(\"todoTk\".concat(index)), newvalue, newindex);\n          });\n        });\n      }); // handle form events\n\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"allContainer\"].addEventListener('click', function (e) {\n        if (e.target.classList.contains('close-w')) {\n          Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().closeForm();\n        }\n      });\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTask\"].addEventListener('click', function () {\n        Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"taskContainer\"]);\n      }); // handle task creation\n      // set default task\n\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].taskBtn.addEventListener('click', function (e) {\n        e.preventDefault();\n        var title = _dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].tasktitle.value;\n        var newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__[\"Task\"](title);\n        alltask.push(newTask);\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"taskForm\"].tasktitle.value = '';\n        Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().closeForm();\n        localStorage.setItem('alltask', JSON.stringify(alltask));\n        alltask.find(function (value, index) {\n          if (value === newTask) {\n            Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().render(Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().allTk, value, index);\n          }\n        });\n      });\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodobtn\"].addEventListener('click', function (e) {\n        // let's change the default task to the one the user selected.\n        var taskId = e.target.offsetParent.id;\n        defaultTask = alltask[parseInt(taskId[4], 10)];\n\n        var _e$target$offsetParen = _slicedToArray(e.target.offsetParent.childNodes, 4);\n\n        todoNode = _e$target$offsetParen[3];\n\n        // select item to delete and remove it from the dom\n        if (e.target.classList.contains('delete')) {\n          if (e.target.classList.contains('taskDelete')) {\n            // filter out task if delete button is pressed\n            alltask = alltask.filter(function (value, index) {\n              return index !== parseInt(e.path[2].id[4], 10);\n            });\n            localStorage.setItem('alltask', JSON.stringify(alltask));\n          } else if (e.target.classList.contains('todoDelete')) {\n            var iid = parseInt(e.path[2].id[4], 10);\n            defaultTask.todos = defaultTask.todos.filter(function (value, index) {\n              return index !== iid;\n            });\n          }\n\n          localStorage.setItem('alltask', JSON.stringify(alltask));\n          e.path[2].remove();\n        } //add select option when the pen button is clicked\n\n\n        if (e.target.classList.contains('edit')) {\n          var currentTodo = defaultTask.todos[parseInt(e.path[1].id[4], 10)];\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todotitle.value = currentTodo.name;\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].tododesc.value = currentTodo.description;\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].dateofbirth.value = currentTodo.duedate;\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].priority.value = currentTodo.priority;\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].note.value = currentTodo.value;\n          Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"todoContainer\"]);\n          console.log(currentTodo);\n        }\n\n        if (e.target.classList.contains('addTodobtn')) {\n          Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().showForm(_dom__WEBPACK_IMPORTED_MODULE_0__[\"todoContainer\"]);\n        }\n      }); // add task when the button is clicked\n\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todoBtn.addEventListener('click', function (e) {\n        e.preventDefault();\n        var name = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todotitle.value;\n        var description = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].tododesc.value;\n        var dateofbirth = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].dateofbirth.value;\n        var priority = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].priority.value;\n        var note = _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].note.value;\n        var setTodo = Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"])(name, description, dateofbirth, priority, note);\n        defaultTask.todos.push(setTodo);\n        localStorage.setItem('alltask', JSON.stringify(alltask));\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].todotitle.value = '';\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].tododesc.value = '';\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].dateofbirth.value = '';\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].priority.value = '';\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"addTodo\"].note.value = '';\n        Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"handleForm\"])().closeForm();\n        defaultTask.todos.find(function (value, index) {\n          if (value === setTodo) {\n            Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"renderContent\"])().render(todoNode, value, index);\n          }\n        });\n      });\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadContents);\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! exports provided: Task, Todo, renderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContent\", function() { return renderContent; });\nvar Task = function Task(name) {\n  return {\n    name: name,\n    todos: []\n  };\n};\n\nvar Todo = function Todo(name, description, duedate, priority) {\n  var note = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';\n  return {\n    name: name,\n    description: description,\n    duedate: duedate,\n    priority: priority,\n    note: note\n  };\n}; // set task template\n\n\nfunction Templates(val, ind) {\n  return {\n    taskTemplate: \" \\n\\n                  <div  class=\\\"card-bins\\\">\\n                    <h6 class=\\\"card-title py-2 text-uppercase text-ligth\\\">\".concat(val.name, \"</h6>\\n                    <i class=\\\"fas fa-trash text-danger taskDelete delete\\\"></i>\\n                  </div>\\n\\n                  <div id=\\\"todoTk\").concat(ind, \"\\\">\\n                  \\n                  </div>\\n\\n                  <div class=\\\"add-btn text-center\\\">\\n                    <a href=\\\"#\\\" class=\\\"btn addTodobtn btn-outline-primary\\\"><i class=\\\"fas fa-plus\\\"></i> Add To do</a>\\n                  </div>\\n\\n                          \"),\n    todoTemplate: \"\\n                  <div class=\\\"card-bins\\\">\\n                  <h6 class=\\\"card-title py-2 text-uppercase text-ligth\\\">\".concat(val.name, \"</h6>\\n                \\n                  <i class=\\\"fas fa-trash ml-2 text-danger todoDelete delete\\\"></i>\\n                  </div>\\n                    <p class=\\\"\").concat(val.priority, \" text-uppercase\\\">\").concat(val.priority, \"</p>\\n                    <p class=\\\"text-success text-uppercase\\\">\").concat(val.duedate, \"</p>\\n                  <p class=\\\"card-text\\\">\").concat(val.description, \"</p>\\n                  <i class=\\\"fas fa-pen p-2 edit text-success\\\"></i>\\n                \")\n  };\n} // set a function to render all content on the page task or todo\n\n\nfunction renderContent() {\n  return {\n    allTk: document.getElementById('allTk'),\n    todoTk: document.getElementById('todoTk'),\n    render: function render(node, val, ind) {\n      var container = document.createElement('div');\n\n      if (node === this.allTk) {\n        container.id = \"task\".concat(ind);\n        container.classList = \"card shadow col-sm-6 col-md-3 dlit  p-3 round1 m-2 border-0 bg-white \".concat(ind);\n        container.innerHTML = '';\n        container.innerHTML = Templates(val, ind).taskTemplate;\n      } else {\n        container.id = \"todo\".concat(ind);\n        container.classList = 'card-body border my-4 round1';\n        container.innerText = '';\n        container.innerHTML = Templates(val, ind).todoTemplate;\n      } // clear the container before filling it up\n\n\n      node.appendChild(container);\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ })

/******/ });