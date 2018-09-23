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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n// import particlesJS from './particles.min';\n // particlesJS.load('particles-js', './assets/particles.json');\n// ------------------------ Main menu toggle and visiblity ------------------------ //\n\nvar wrapperMenu = document.querySelector('.wrapper-menu');\nwrapperMenu.addEventListener('click', function () {\n  wrapperMenu.classList.toggle('open');\n  document.querySelector('.menu__background').classList.remove('menuBgEaseIn', 'menuBgEaseOut');\n  document.querySelector('.menu__content').classList.remove('menuFadeIn', 'menuFadeOut');\n\n  if (wrapperMenu.classList[1]) {\n    document.querySelector('.menu__content').classList.add('menuFadeIn');\n    document.querySelector('.menu__background').classList.add('menuBgEaseIn');\n  } else {\n    document.querySelector('.menu__content').classList.add('menuFadeOut');\n    document.querySelector('.menu__background').classList.add('menuBgEaseOut');\n  }\n}); // ------------------------ Foundation modals visibilites ------------------------ //\n// Foundation Modal Open //\n\ndocument.querySelector('.foundation__codeModal--explore-btn').addEventListener('click', function () {\n  document.querySelector('.foundation__codeModal--container').style.display = 'block';\n});\ndocument.querySelector('.foundation__optimizationModal--explore-btn').addEventListener('click', function () {\n  document.querySelector('.foundation__optimizationModal--container').style.display = 'block';\n});\ndocument.querySelector('.foundation__designModal--explore-btn').addEventListener('click', function () {\n  document.querySelector('.foundation__designModal--container').style.display = 'block';\n});\ndocument.querySelector('.foundation__experienceModal--explore-btn').addEventListener('click', function () {\n  document.querySelector('.foundation__experienceModal--container').style.display = 'block';\n}); // Foundation Modal Close //\n\ndocument.querySelector('.foundation__codeModal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.foundation__codeModal--container').style.display = 'none';\n});\ndocument.querySelector('.foundation__optimizationModal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.foundation__optimizationModal--container').style.display = 'none';\n});\ndocument.querySelector('.foundation__designModal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.foundation__designModal--container').style.display = 'none';\n});\ndocument.querySelector('.foundation__experienceModal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.foundation__experienceModal--container').style.display = 'none';\n}); // ------------------------ Projects Section visibility ------------------------ //\n// Project filter function //\n\nvar filterSelection = function filterSelection(text) {\n  var projects = document.getElementsByClassName('projects__items');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = projects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var project = _step.value;\n      var projectName = project.classList[1];\n      project.classList.remove('show', 'hide', 'selected', 'selectedAll');\n\n      if (text === 'all') {\n        project.classList.add('selectedAll', 'show');\n        project.classList.remove('show');\n        document.getElementById('projects__block--inner').classList.add('threeColumns');\n        document.getElementById('projects__block--inner').classList.remove('twoColumns');\n      } else if (text === projectName) {\n        document.getElementById('projects__block--inner').classList.remove('threeColumns', 'twoColumns');\n        project.classList.remove('show');\n        project.classList.add('selected', 'show');\n        document.getElementById('projects__block--inner').classList.add('twoColumns');\n      } else {\n        project.classList.add('hide');\n        project.classList.remove('show', 'selected');\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\nvar btnContainer = document.getElementById('projects__button');\nvar btns = document.getElementsByClassName('btn');\nvar _iteratorNormalCompletion2 = true;\nvar _didIteratorError2 = false;\nvar _iteratorError2 = undefined;\n\ntry {\n  var _loop = function _loop() {\n    var btn = _step2.value;\n    btn.addEventListener('click', function () {\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = btnContainer.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var child = _step3.value;\n          child.classList.remove('active');\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n            _iterator3.return();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      btn.classList.add('active');\n    });\n  };\n\n  for (var _iterator2 = btns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n    _loop();\n  } // Projects display function //\n\n} catch (err) {\n  _didIteratorError2 = true;\n  _iteratorError2 = err;\n} finally {\n  try {\n    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n      _iterator2.return();\n    }\n  } finally {\n    if (_didIteratorError2) {\n      throw _iteratorError2;\n    }\n  }\n}\n\ndocument.getElementById('projectOne__modalBtn').addEventListener('click', function () {\n  document.querySelector('.projectOne__modal--container').style.display = 'block';\n});\ndocument.getElementById('projectTwo__modalBtn').addEventListener('click', function () {\n  document.querySelector('.projectTwo__modal--container').style.display = 'block';\n});\ndocument.getElementById('projectThree__modalBtn').addEventListener('click', function () {\n  document.querySelector('.projectThree__modal--container').style.display = 'block';\n});\ndocument.getElementById('projectFour__modalBtn').addEventListener('click', function () {\n  document.querySelector('.projectFour__modal--container').style.display = 'block';\n});\ndocument.getElementById('projectFive__modalBtn').addEventListener('click', function () {\n  document.querySelector('.projectFive__modal--container').style.display = 'block';\n});\ndocument.getElementById('projectSix__modalBtn').addEventListener('click', function () {\n  document.querySelector('.projectSix__modal--container').style.display = 'block';\n}); // Projects display close //\n\ndocument.querySelector('.projectOne__modal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.projectOne__modal--container').style.display = 'none';\n});\ndocument.querySelector('.projectTwo__modal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.projectTwo__modal--container').style.display = 'none';\n});\ndocument.querySelector('.projectThree__modal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.projectThree__modal--container').style.display = 'none';\n});\ndocument.querySelector('.projectFour__modal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.projectFour__modal--container').style.display = 'none';\n});\ndocument.querySelector('.projectFive__modal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.projectFive__modal--container').style.display = 'none';\n});\ndocument.querySelector('.projectSix__modal--closeBtn').addEventListener('click', function () {\n  document.querySelector('.projectSix__modal--container').style.display = 'none';\n});\n\nwindow.onclick = function (event) {\n  if (event.target === document.querySelector('.foundation__codeModal--container') || event.target === document.querySelector('.foundation__optimizationModal--container') || event.target === document.querySelector('.foundation__designModal--container') || event.target === document.querySelector('.foundation__experienceModal--container')) {\n    document.querySelector('.foundation__codeModal--container').style.display = 'none';\n    document.querySelector('.foundation__optimizationModal--container').style.display = 'none';\n    document.querySelector('.foundation__designModal--container').style.display = 'none';\n    document.querySelector('.foundation__experienceModal--container').style.display = 'none';\n  }\n\n  if (event.target === document.querySelector('.projectOne__modal--container') || event.target === document.querySelector('.projectTwo__modal--container') || event.target === document.querySelector('.projectThree__modal--container') || event.target === document.querySelector('.projectFour__modal--container') || event.target === document.querySelector('.projectFive__modal--container') || event.target === document.querySelector('.projectSix__modal--container')) {\n    document.querySelector('.projectOne__modal--container').style.display = 'none';\n    document.querySelector('.projectTwo__modal--container').style.display = 'none';\n    document.querySelector('.projectThree__modal--container').style.display = 'none';\n    document.querySelector('.projectFour__modal--container').style.display = 'none';\n    document.querySelector('.projectFive__modal--container').style.display = 'none';\n    document.querySelector('.projectSix__modal--container').style.display = 'none';\n  }\n}; // ------------------------ Smooth scroll setup ------------------------ //\n\n\nvar last_known_scroll_position = 0;\nvar ticking = false;\n\nfunction doSomething(scrollPosition) {\n  if (scrollPosition > 350) {\n    document.getElementsByClassName('foundation__block--iconAndTitle')[0].classList.add('slideInUp');\n    document.getElementsByClassName('foundation__block--iconAndTitle')[1].classList.add('slideInUp');\n    document.getElementsByClassName('foundation__block--iconAndTitle')[2].classList.add('slideInUp');\n    document.getElementsByClassName('foundation__block--iconAndTitle')[3].classList.add('slideInUp');\n  }\n\n  if (scrollPosition > 480) {\n    document.getElementsByClassName('foundation__block--textAndButton')[0].classList.add('fadeAndPopIn');\n    document.getElementsByClassName('foundation__block--textAndButton')[1].classList.add('fadeAndPopIn');\n    document.getElementsByClassName('foundation__block--textAndButton')[2].classList.add('fadeAndPopIn');\n    document.getElementsByClassName('foundation__block--textAndButton')[3].classList.add('fadeAndPopIn');\n  }\n\n  if (scrollPosition > 740) {\n    document.getElementsByClassName('process__bar')[0].classList.add('moveInFromLeftAni');\n  }\n\n  if (scrollPosition > 1200) {\n    document.getElementsByClassName('projects__block--inner')[0].classList.add('slideInUp');\n  }\n\n  if (scrollPosition > 2000) {\n    document.getElementsByClassName('heart__SVG')[0].classList.add('beat');\n  }\n}\n\nwindow.addEventListener('scroll', function () {\n  last_known_scroll_position = window.scrollY;\n\n  if (!ticking) {\n    window.requestAnimationFrame(function () {\n      doSomething(last_known_scroll_position);\n      ticking = false;\n    });\n    ticking = true;\n  }\n}); // Smooth scroll effect function //\n\nvar getElementY = function getElementY(query) {\n  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;\n};\n\nvar doScrolling = function doScrolling(element, duration) {\n  document.querySelector('.menu__content').classList.add('menuFadeOut');\n  document.querySelector('.menu__background').classList.add('menuBgEaseOut');\n  wrapperMenu.classList.toggle('open');\n  var startingY = window.pageYOffset;\n  var elementY = getElementY(element);\n  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;\n  var diff = targetY - startingY;\n\n  var easing = function easing(t) {\n    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  };\n\n  var start;\n  if (!diff) return;\n  window.requestAnimationFrame(function step(timestamp) {\n    if (!start) start = timestamp;\n    var time = timestamp - start;\n    var percent = Math.min(time / duration, 1);\n    percent = easing(percent);\n    window.scrollTo(0, startingY + diff * percent);\n\n    if (time < duration) {\n      window.requestAnimationFrame(step);\n    }\n  });\n};\n\ndocument.querySelector('.hero__button').addEventListener('click', doScrolling.bind(null, '#projects', 1500));\ndocument.querySelector('.home__link').addEventListener('click', doScrolling.bind(null, '#particles-js', 1500));\ndocument.querySelector('.foundation__link').addEventListener('click', doScrolling.bind(null, '#foundation', 1500));\ndocument.querySelector('.projects__link').addEventListener('click', doScrolling.bind(null, '#projects', 1500));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });