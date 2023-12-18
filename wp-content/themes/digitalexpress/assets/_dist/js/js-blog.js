/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/blog/ds_blog_darkmode.js":
/*!*************************************************!*\
  !*** ./assets/_src/js/blog/ds_blog_darkmode.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_blog_toggleDarkMode: function() { return /* binding */ ds_blog_toggleDarkMode; }
/* harmony export */ });
// toggle dark mode

var ds_blog_toggleDarkMode = function ds_blog_toggleDarkMode(el) {
  if (document.querySelector(el)) {
    var mode = localStorage.getItem('dark-mode');
    var btnSwitch = document.querySelector(el);
    if (mode === 'on') {
      btnSwitch.setAttribute('aria-pressed', true);
      document.documentElement.setAttribute('color-mode', 'dark');
    }
    btnSwitch.addEventListener('click', function (event) {
      if (document.documentElement.hasAttribute('color-mode')) {
        localStorage.setItem('dark-mode', 'off');
        btnSwitch.setAttribute('aria-pressed', false);
        document.documentElement.removeAttribute('color-mode');
      } else {
        localStorage.setItem('dark-mode', 'on');
        btnSwitch.setAttribute('aria-pressed', true);
        document.documentElement.setAttribute('color-mode', 'dark');
      }
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/blog/ds_blog_tocHighlight.js":
/*!*****************************************************!*\
  !*** ./assets/_src/js/blog/ds_blog_tocHighlight.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_blog_tableOfContents: function() { return /* binding */ ds_blog_tableOfContents; }
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return rect.top + window.scrollY;
}
function handleClassForViewedElements(elements, pageYOffset, links) {
  elements.forEach(function (el, index) {
    var link = links[index];
    if (el.top - 300 < pageYOffset) {
      link.classList.add('ez-toc-viewed');
      var siblingUL = link.parentNode.querySelector('ul');
      if (siblingUL) {
        siblingUL.classList.add('ez-list-open');
      }
    } else {
      link.classList.remove('ez-toc-viewed');
      var _siblingUL = link.parentNode.querySelector('ul');
      if (_siblingUL) {
        _siblingUL.classList.remove('ez-list-open');
      }
    }
  });
}
var ds_blog_tableOfContents = function ds_blog_tableOfContents() {
  var toc = document.getElementById('ez-toc-container');
  var tocHeaders = toc.querySelectorAll('li[class*=ez-toc-heading]');
  var tocLinks = toc.querySelectorAll('.ez-toc-list a');
  /**
   * Add height for each UL element inside Table of contents
   */
  tocHeaders.forEach(function (e) {
    var subList = e.querySelector('.ez-toc-list-level-3');
    if (subList) {
      subList.style.height = "".concat(subList.scrollHeight, "px");
    }
  });

  /**
   * @type {{top: number, seen: boolean, item: Node & ParentNode}[]}
   * Map trough all the links and find belonging header element
   */
  var headers = _toConsumableArray(tocLinks).map(function (e) {
    var element = document.getElementById(e.getAttribute('href').substring(1));
    return {
      item: element,
      top: getOffset(element) - 100,
      seen: false
    };
  });
  handleClassForViewedElements(headers, window.pageYOffset, tocLinks);
  window.onscroll = function () {
    var offset = this.pageYOffset;
    handleClassForViewedElements(headers, offset, tocLinks);
  };
};


/***/ }),

/***/ "./assets/_src/js/blog/ds_blog_tocSticky.js":
/*!**************************************************!*\
  !*** ./assets/_src/js/blog/ds_blog_tocSticky.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_blog_tocSticky: function() { return /* binding */ ds_blog_tocSticky; }
/* harmony export */ });
/* harmony import */ var _utils_u_el_in_viewport_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/u_el-in-viewport-detect */ "./assets/_src/js/utils/u_el-in-viewport-detect.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
// eslint-disable-next-line camelcase

var ds_blog_tocSticky = function ds_blog_tocSticky() {
  window.addEventListener('scroll', function () {
    (0,_utils_u_el_in_viewport_detect__WEBPACK_IMPORTED_MODULE_0__.u_elementFromTop)(document.querySelectorAll('#ez-toc-container + *'), '#ez-toc-container', 'is-float', 10, 'pixels'); // as top of element hits top of viewport
  }, false);
  window.addEventListener('resize', function () {
    (0,_utils_u_el_in_viewport_detect__WEBPACK_IMPORTED_MODULE_0__.u_elementFromTop)(document.querySelectorAll('#ez-toc-container + *'), '#ez-toc-container', 'is-float', 10, 'pixels'); // as top of element hits top of viewport
  }, false);
  function tocToggleClasses() {
    var tocCollapser = document.querySelector('.ez-toc-toggle');
    var tocContainer = document.querySelector('.ez-toc-title-toggle');
    var target = document.querySelector('.ez-toc-list');
    if (window.getComputedStyle(target).display === 'block') {
      tocCollapser.classList.add('active');
    }
    tocCollapser.addEventListener('click', function (event) {
      function mesure() {
        if (window.getComputedStyle(target).display === 'none') {
          tocCollapser.classList.remove('active');
          tocContainer.classList.remove('is-shown');
          tocContainer.classList.add('is-hide');
        } else {
          tocCollapser.classList.add('active');
          tocContainer.classList.add('is-shown');
          tocContainer.classList.remove('is-hide');
        }
      }
      setTimeout(mesure, 300);
    });
    if ($('#ez-toc-container').hasClass('is-shown')) {
      $('.ez-toc-toggle').addClass('active');
    }
  }
  tocToggleClasses();
};


/***/ }),

/***/ "./assets/_src/js/utils/u_classlist-add-remove.js":
/*!********************************************************!*\
  !*** ./assets/_src/js/utils/u_classlist-add-remove.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_addClass: function() { return /* binding */ u_addClass; },
/* harmony export */   u_delClass: function() { return /* binding */ u_delClass; },
/* harmony export */   u_hasClass: function() { return /* binding */ u_hasClass; }
/* harmony export */ });
var u_hasClass = function u_hasClass(el, cls) {
  if (el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
    return true;
  }
};
var u_addClass = function u_addClass(el, cls) {
  if (!el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
    el.className += ' ' + cls;
  }
};
var u_delClass = function u_delClass(el, cls) {
  el.className = el.className.replace(new RegExp('(?:^|\\s)' + cls + '(?!\\S)'), '');
};


/***/ }),

/***/ "./assets/_src/js/utils/u_el-in-viewport-detect.js":
/*!*********************************************************!*\
  !*** ./assets/_src/js/utils/u_el-in-viewport-detect.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_elementFromTop: function() { return /* binding */ u_elementFromTop; },
/* harmony export */   u_isElementIsInView: function() { return /* binding */ u_isElementIsInView; }
/* harmony export */ });
/* harmony import */ var _u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u_classlist-add-remove */ "./assets/_src/js/utils/u_classlist-add-remove.js");
/**
 * params:  trigger element, target element class, classes to add to target element, trigger element distance from top, unit ('percent' or 'pixels')
 * usage:   elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit);
 *
 * http://blog.fofwebdesign.co.uk/41-add-classes-to-an-element-when-scrolled-into-viewport
 */

var u_elementFromTop = function u_elementFromTop(elemTrigger, elemTarget, classToAdd, distanceFromTop, unit) {
  var winY = window.innerHeight || document.documentElement.clientHeight,
    elTriggerLength = elemTrigger.length,
    elTargetLength,
    distTop,
    distPercent,
    distPixels,
    distUnit,
    elTarget,
    i,
    j;
  for (i = 0; i < elTriggerLength; ++i) {
    elTarget = document.querySelectorAll(elemTarget);
    elTargetLength = elTarget.length;
    distTop = elemTrigger[i].getBoundingClientRect().top;
    distPercent = Math.round(distTop / winY * 100);
    distPixels = Math.round(distTop);
    distUnit = unit == 'percent' ? distPercent : distPixels;
    if (distUnit <= distanceFromTop) {
      if (!(0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_hasClass)(elemTrigger[i], elemTarget)) {
        for (j = 0; j < elTargetLength; ++j) {
          if (!(0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_hasClass)(elTarget[j], classToAdd)) {
            (0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_addClass)(elTarget[j], classToAdd);
          }
        }
      } else {
        if (!(0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_hasClass)(elemTrigger[i], classToAdd)) {
          (0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_addClass)(elemTrigger[i], classToAdd);
        }
      }
    } else {
      (0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_delClass)(elemTrigger[i], classToAdd);
      if (!(0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_hasClass)(elemTrigger[i], elemTarget)) {
        for (j = 0; j < elTargetLength; ++j) {
          (0,_u_classlist_add_remove__WEBPACK_IMPORTED_MODULE_0__.u_delClass)(elTarget[j], classToAdd);
        }
      }
    }
  }
};
var u_isElementIsInView = function u_isElementIsInView(el) {
  var scroll = window.scrollY || window.pageYOffset;
  var boundsTop = el.getBoundingClientRect().top + scroll;
  var viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight
  };
  var bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight
  };
  return bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom || bounds.top <= viewport.bottom && bounds.top >= viewport.top;
};


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = jQuery;

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./assets/_src/js/js-blog.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_ds_blog_darkmode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/ds_blog_darkmode */ "./assets/_src/js/blog/ds_blog_darkmode.js");
/* harmony import */ var _blog_ds_blog_tocHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog/ds_blog_tocHighlight */ "./assets/_src/js/blog/ds_blog_tocHighlight.js");
/* harmony import */ var _blog_ds_blog_tocSticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/ds_blog_tocSticky */ "./assets/_src/js/blog/ds_blog_tocSticky.js");
/**
 * Blog JS imports and functions
 */




document.addEventListener('DOMContentLoaded', function () {
  (0,_blog_ds_blog_darkmode__WEBPACK_IMPORTED_MODULE_0__.ds_blog_toggleDarkMode)('.js-dark-mode');
  if (document.querySelector('.ez-toc-toggle')) {
    (0,_blog_ds_blog_tocSticky__WEBPACK_IMPORTED_MODULE_2__.ds_blog_tocSticky)();
    (0,_blog_ds_blog_tocHighlight__WEBPACK_IMPORTED_MODULE_1__.ds_blog_tableOfContents)();
  }
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtYmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUlDLEVBQUUsRUFBSztFQUVuQyxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRSxDQUFDLEVBQUU7SUFFNUIsSUFBTUcsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDOUMsSUFBTUMsU0FBUyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRSxDQUFDO0lBRTVDLElBQUlHLElBQUksS0FBSyxJQUFJLEVBQUU7TUFDZkcsU0FBUyxDQUFDQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztNQUM1Q04sUUFBUSxDQUFDTyxlQUFlLENBQUNELFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO0lBQy9EO0lBQ0FELFNBQVMsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUMzQyxJQUFJVCxRQUFRLENBQUNPLGVBQWUsQ0FBQ0csWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBRXJEUCxZQUFZLENBQUNRLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDO1FBQ3hDTixTQUFTLENBQUNDLFlBQVksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO1FBQzdDTixRQUFRLENBQUNPLGVBQWUsQ0FBQ0ssZUFBZSxDQUFDLFlBQVksQ0FBQztNQUUxRCxDQUFDLE1BQU07UUFDSFQsWUFBWSxDQUFDUSxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUN2Q04sU0FBUyxDQUFDQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQztRQUM1Q04sUUFBUSxDQUFDTyxlQUFlLENBQUNELFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO01BQy9EO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsU0FBU08sU0FBU0EsQ0FBQ2QsRUFBRSxFQUFFO0VBQ25CLElBQU1lLElBQUksR0FBR2YsRUFBRSxDQUFDZ0IscUJBQXFCLENBQUMsQ0FBQztFQUN2QyxPQUFPRCxJQUFJLENBQUNFLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxPQUFPO0FBQ3BDO0FBRUEsU0FBU0MsNEJBQTRCQSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFO0VBQ2hFRixRQUFRLENBQUNHLE9BQU8sQ0FBQyxVQUFDeEIsRUFBRSxFQUFFeUIsS0FBSyxFQUFLO0lBQzVCLElBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDRSxLQUFLLENBQUM7SUFDekIsSUFBSXpCLEVBQUUsQ0FBQ2lCLEdBQUcsR0FBRyxHQUFHLEdBQUdLLFdBQVcsRUFBRTtNQUM1QkksSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFDbkMsSUFBTUMsU0FBUyxHQUFHSCxJQUFJLENBQUNJLFVBQVUsQ0FBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDckQsSUFBSTJCLFNBQVMsRUFBRTtRQUNYQSxTQUFTLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUMzQztJQUNKLENBQUMsTUFBTTtNQUNIRixJQUFJLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUN0QyxJQUFNRixVQUFTLEdBQUdILElBQUksQ0FBQ0ksVUFBVSxDQUFDNUIsYUFBYSxDQUFDLElBQUksQ0FBQztNQUNyRCxJQUFJMkIsVUFBUyxFQUFFO1FBQ1hBLFVBQVMsQ0FBQ0YsU0FBUyxDQUFDSSxNQUFNLENBQUMsY0FBYyxDQUFDO01BQzlDO0lBQ0o7RUFDSixDQUFDLENBQUM7QUFDTjtBQUVBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBdUJBLENBQUEsRUFBUztFQUNsQyxJQUFNQyxHQUFHLEdBQUdoQyxRQUFRLENBQUNpQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7RUFDdkQsSUFBTUMsVUFBVSxHQUFHRixHQUFHLENBQUNHLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDO0VBQ3BFLElBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN2RDtBQUNKO0FBQ0E7RUFDSUQsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ2MsQ0FBQyxFQUFLO0lBQ3RCLElBQU1DLE9BQU8sR0FBR0QsQ0FBQyxDQUFDcEMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZELElBQUlxQyxPQUFPLEVBQUU7TUFDVEEsT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sTUFBQUMsTUFBQSxDQUFPSCxPQUFPLENBQUNJLFlBQVksT0FBSztJQUN4RDtFQUNKLENBQUMsQ0FBQzs7RUFFRjtBQUNKO0FBQ0E7QUFDQTtFQUNJLElBQU1DLE9BQU8sR0FBR0Msa0JBQUEsQ0FBSVIsUUFBUSxFQUFFUyxHQUFHLENBQUMsVUFBQ1IsQ0FBQyxFQUFLO0lBQ3JDLElBQU1TLE9BQU8sR0FBRzlDLFFBQVEsQ0FBQ2lDLGNBQWMsQ0FBQ0ksQ0FBQyxDQUFDVSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxPQUFPO01BQUVDLElBQUksRUFBRUgsT0FBTztNQUFFOUIsR0FBRyxFQUFFSCxTQUFTLENBQUNpQyxPQUFPLENBQUMsR0FBRyxHQUFHO01BQUVJLElBQUksRUFBRTtJQUFNLENBQUM7RUFDeEUsQ0FBQyxDQUFDO0VBRUYvQiw0QkFBNEIsQ0FBQ3dCLE9BQU8sRUFBRTFCLE1BQU0sQ0FBQ0ksV0FBVyxFQUFFZSxRQUFRLENBQUM7RUFFbkVuQixNQUFNLENBQUNrQyxRQUFRLEdBQUcsWUFBWTtJQUMxQixJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDL0IsV0FBVztJQUMvQkYsNEJBQTRCLENBQUN3QixPQUFPLEVBQUVTLE1BQU0sRUFBRWhCLFFBQVEsQ0FBQztFQUMzRCxDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7QUFDb0U7QUFFcEUsSUFBTWtCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztFQUM1QnJDLE1BQU0sQ0FBQ1QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07SUFDcEM2QyxnRkFBZ0IsQ0FBQ3JELFFBQVEsQ0FBQ21DLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ3pILENBQUMsRUFBRSxLQUFLLENBQUM7RUFFVGxCLE1BQU0sQ0FBQ1QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07SUFDcEM2QyxnRkFBZ0IsQ0FBQ3JELFFBQVEsQ0FBQ21DLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ3pILENBQUMsRUFBRSxLQUFLLENBQUM7RUFFVCxTQUFTb0IsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDeEIsSUFBTUMsWUFBWSxHQUFHeEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDN0QsSUFBTXdELFlBQVksR0FBR3pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBRW5FLElBQU15RCxNQUFNLEdBQUcxRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFFckQsSUFBSWdCLE1BQU0sQ0FBQzBDLGdCQUFnQixDQUFDRCxNQUFNLENBQUMsQ0FBQ0UsT0FBTyxLQUFLLE9BQU8sRUFBRTtNQUNyREosWUFBWSxDQUFDOUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3hDO0lBRUE2QixZQUFZLENBQUNoRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BRTlDLFNBQVNvRCxNQUFNQSxDQUFBLEVBQUc7UUFDZCxJQUFJNUMsTUFBTSxDQUFDMEMsZ0JBQWdCLENBQUNELE1BQU0sQ0FBQyxDQUFDRSxPQUFPLEtBQUssTUFBTSxFQUFFO1VBQ3BESixZQUFZLENBQUM5QixTQUFTLENBQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUM7VUFDdkMyQixZQUFZLENBQUMvQixTQUFTLENBQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUM7VUFDekMyQixZQUFZLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDekMsQ0FBQyxNQUFNO1VBQ0g2QixZQUFZLENBQUM5QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7VUFDcEM4QixZQUFZLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7VUFDdEM4QixZQUFZLENBQUMvQixTQUFTLENBQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDNUM7TUFDSjtNQUVBZ0MsVUFBVSxDQUFDRCxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUVGLElBQUlFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDN0NELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRSxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzFDO0VBQ0o7RUFFQVYsZ0JBQWdCLENBQUMsQ0FBQztBQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRCxJQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSW5FLEVBQUUsRUFBRW9FLEdBQUcsRUFBSztFQUM1QixJQUFJcEUsRUFBRSxDQUFDcUUsU0FBUyxDQUFDQyxLQUFLLENBQUMsV0FBVyxHQUFHRixHQUFHLEdBQUcsU0FBUyxDQUFDLEVBQUU7SUFDbkQsT0FBTyxJQUFJO0VBQ2Y7QUFDSixDQUFDO0FBRUQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUl2RSxFQUFFLEVBQUVvRSxHQUFHLEVBQUs7RUFDNUIsSUFBSSxDQUFDcEUsRUFBRSxDQUFDcUUsU0FBUyxDQUFDQyxLQUFLLENBQUMsV0FBVyxHQUFHRixHQUFHLEdBQUcsU0FBUyxDQUFDLEVBQUU7SUFDcERwRSxFQUFFLENBQUNxRSxTQUFTLElBQUksR0FBRyxHQUFHRCxHQUFHO0VBQzdCO0FBQ0osQ0FBQztBQUVELElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJeEUsRUFBRSxFQUFFb0UsR0FBRyxFQUFLO0VBQzVCcEUsRUFBRSxDQUFDcUUsU0FBUyxHQUFHckUsRUFBRSxDQUFDcUUsU0FBUyxDQUFDSSxPQUFPLENBQUMsSUFBSUMsTUFBTSxDQUFDLFdBQVcsR0FBR04sR0FBRyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUN0RixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtrQztBQUVsQyxJQUFNZCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJcUIsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxFQUFFQyxJQUFJLEVBQUs7RUFDckYsSUFBSUMsSUFBSSxHQUFHOUQsTUFBTSxDQUFDK0QsV0FBVyxJQUFJaEYsUUFBUSxDQUFDTyxlQUFlLENBQUMwRSxZQUFZO0lBQ2xFQyxlQUFlLEdBQUdSLFdBQVcsQ0FBQ1MsTUFBTTtJQUNwQ0MsY0FBYztJQUFFQyxPQUFPO0lBQUVDLFdBQVc7SUFBRUMsVUFBVTtJQUFFQyxRQUFRO0lBQUVDLFFBQVE7SUFBRUMsQ0FBQztJQUFFQyxDQUFDO0VBQzlFLEtBQUtELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1IsZUFBZSxFQUFFLEVBQUVRLENBQUMsRUFBRTtJQUNsQ0QsUUFBUSxHQUFHekYsUUFBUSxDQUFDbUMsZ0JBQWdCLENBQUN3QyxVQUFVLENBQUM7SUFDaERTLGNBQWMsR0FBR0ssUUFBUSxDQUFDTixNQUFNO0lBQ2hDRSxPQUFPLEdBQUdYLFdBQVcsQ0FBQ2dCLENBQUMsQ0FBQyxDQUFDM0UscUJBQXFCLENBQUMsQ0FBQyxDQUFDQyxHQUFHO0lBQ3BEc0UsV0FBVyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBRVIsT0FBTyxHQUFHTixJQUFJLEdBQUksR0FBRyxDQUFDO0lBQ2hEUSxVQUFVLEdBQUdLLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixPQUFPLENBQUM7SUFDaENHLFFBQVEsR0FBR1YsSUFBSSxJQUFJLFNBQVMsR0FBR1EsV0FBVyxHQUFHQyxVQUFVO0lBQ3ZELElBQUlDLFFBQVEsSUFBSVgsZUFBZSxFQUFFO01BQzdCLElBQUksQ0FBQ1gsbUVBQVUsQ0FBQ1EsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDLEVBQUVmLFVBQVUsQ0FBQyxFQUFFO1FBQ3pDLEtBQUtnQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLGNBQWMsRUFBRSxFQUFFTyxDQUFDLEVBQUU7VUFDakMsSUFBSSxDQUFDekIsbUVBQVUsQ0FBQ3VCLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUVmLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDTixtRUFBVSxDQUFDbUIsUUFBUSxDQUFDRSxDQUFDLENBQUMsRUFBRWYsVUFBVSxDQUFDO1VBQ3ZDO1FBQ0o7TUFDSixDQUFDLE1BQU07UUFDSCxJQUFJLENBQUNWLG1FQUFVLENBQUNRLFdBQVcsQ0FBQ2dCLENBQUMsQ0FBQyxFQUFFZCxVQUFVLENBQUMsRUFBRTtVQUN6Q04sbUVBQVUsQ0FBQ0ksV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDLEVBQUVkLFVBQVUsQ0FBQztRQUMxQztNQUNKO0lBQ0osQ0FBQyxNQUFNO01BQ0hMLG1FQUFVLENBQUNHLFdBQVcsQ0FBQ2dCLENBQUMsQ0FBQyxFQUFFZCxVQUFVLENBQUM7TUFDdEMsSUFBSSxDQUFDVixtRUFBVSxDQUFDUSxXQUFXLENBQUNnQixDQUFDLENBQUMsRUFBRWYsVUFBVSxDQUFDLEVBQUU7UUFDekMsS0FBS2dCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1AsY0FBYyxFQUFFLEVBQUVPLENBQUMsRUFBRTtVQUNqQ3BCLG1FQUFVLENBQUNrQixRQUFRLENBQUNFLENBQUMsQ0FBQyxFQUFFZixVQUFVLENBQUM7UUFDdkM7TUFDSjtJQUNKO0VBQ0o7QUFDSixDQUFDO0FBRUQsSUFBTWtCLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUkvRixFQUFFLEVBQUs7RUFDaEMsSUFBTWdHLE1BQU0sR0FBRzlFLE1BQU0sQ0FBQ0MsT0FBTyxJQUFJRCxNQUFNLENBQUNJLFdBQVc7RUFDbkQsSUFBTTJFLFNBQVMsR0FBR2pHLEVBQUUsQ0FBQ2dCLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0MsR0FBRyxHQUFHK0UsTUFBTTtFQUV6RCxJQUFNRSxRQUFRLEdBQUc7SUFDYmpGLEdBQUcsRUFBRStFLE1BQU07SUFDWEcsTUFBTSxFQUFFSCxNQUFNLEdBQUc5RSxNQUFNLENBQUMrRDtFQUM1QixDQUFDO0VBRUQsSUFBTW1CLE1BQU0sR0FBRztJQUNYbkYsR0FBRyxFQUFFZ0YsU0FBUztJQUNkRSxNQUFNLEVBQUVGLFNBQVMsR0FBR2pHLEVBQUUsQ0FBQ2tGO0VBQzNCLENBQUM7RUFFRCxPQUFTa0IsTUFBTSxDQUFDRCxNQUFNLElBQUlELFFBQVEsQ0FBQ2pGLEdBQUcsSUFBSW1GLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJRCxRQUFRLENBQUNDLE1BQU0sSUFDakVDLE1BQU0sQ0FBQ25GLEdBQUcsSUFBSWlGLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLENBQUNuRixHQUFHLElBQUlpRixRQUFRLENBQUNqRixHQUFLO0FBQzFFLENBQUM7Ozs7Ozs7Ozs7O0FDOUREOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFaUU7QUFDSztBQUNUO0FBRTdEaEIsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hEViw4RUFBc0IsQ0FBQyxlQUFlLENBQUM7RUFFdkMsSUFBSUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUMxQ3FELDBFQUFpQixDQUFDLENBQUM7SUFDbkJ2QixtRkFBdUIsQ0FBQyxDQUFDO0VBQzdCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Jsb2cvZHNfYmxvZ19kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Jsb2cvZHNfYmxvZ190b2NIaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9ibG9nL2RzX2Jsb2dfdG9jU3RpY2t5LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV9jbGFzc2xpc3QtYWRkLXJlbW92ZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3VfZWwtaW4tdmlld3BvcnQtZGV0ZWN0LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9qcy1ibG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZ2dsZSBkYXJrIG1vZGVcblxuY29uc3QgZHNfYmxvZ190b2dnbGVEYXJrTW9kZSA9IChlbCkgPT4ge1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpKSB7XG5cbiAgICAgICAgY29uc3QgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgY29uc3QgYnRuU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG5cbiAgICAgICAgaWYgKG1vZGUgPT09ICdvbicpIHtcbiAgICAgICAgICAgIGJ0blN3aXRjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRydWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29sb3ItbW9kZScsICdkYXJrJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnRuU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29sb3ItbW9kZScpKSB7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFyay1tb2RlJywgJ29mZicpO1xuICAgICAgICAgICAgICAgIGJ0blN3aXRjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjb2xvci1tb2RlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmstbW9kZScsICdvbicpO1xuICAgICAgICAgICAgICAgIGJ0blN3aXRjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbG9yLW1vZGUnLCAnZGFyaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQge1xuICAgIGRzX2Jsb2dfdG9nZ2xlRGFya01vZGUsXG59O1xuIiwiZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGFzc0ZvclZpZXdlZEVsZW1lbnRzKGVsZW1lbnRzLCBwYWdlWU9mZnNldCwgbGlua3MpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsLnRvcCAtIDMwMCA8IHBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2V6LXRvYy12aWV3ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdVTCA9IGxpbmsucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgICAgICAgICAgaWYgKHNpYmxpbmdVTCkge1xuICAgICAgICAgICAgICAgIHNpYmxpbmdVTC5jbGFzc0xpc3QuYWRkKCdlei1saXN0LW9wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnZXotdG9jLXZpZXdlZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ1VMID0gbGluay5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgICAgICBpZiAoc2libGluZ1VMKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ1VMLmNsYXNzTGlzdC5yZW1vdmUoJ2V6LWxpc3Qtb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IGRzX2Jsb2dfdGFibGVPZkNvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlei10b2MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdG9jSGVhZGVycyA9IHRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaVtjbGFzcyo9ZXotdG9jLWhlYWRpbmddJyk7XG4gICAgY29uc3QgdG9jTGlua3MgPSB0b2MucXVlcnlTZWxlY3RvckFsbCgnLmV6LXRvYy1saXN0IGEnKTtcbiAgICAvKipcbiAgICAgKiBBZGQgaGVpZ2h0IGZvciBlYWNoIFVMIGVsZW1lbnQgaW5zaWRlIFRhYmxlIG9mIGNvbnRlbnRzXG4gICAgICovXG4gICAgdG9jSGVhZGVycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Ykxpc3QgPSBlLnF1ZXJ5U2VsZWN0b3IoJy5lei10b2MtbGlzdC1sZXZlbC0zJyk7XG4gICAgICAgIGlmIChzdWJMaXN0KSB7XG4gICAgICAgICAgICBzdWJMaXN0LnN0eWxlLmhlaWdodCA9IGAkeyBzdWJMaXN0LnNjcm9sbEhlaWdodCB9cHhgO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7e3RvcDogbnVtYmVyLCBzZWVuOiBib29sZWFuLCBpdGVtOiBOb2RlICYgUGFyZW50Tm9kZX1bXX1cbiAgICAgKiBNYXAgdHJvdWdoIGFsbCB0aGUgbGlua3MgYW5kIGZpbmQgYmVsb25naW5nIGhlYWRlciBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3QgaGVhZGVycyA9IFsuLi50b2NMaW5rc10ubWFwKChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cmluZygxKSk7XG4gICAgICAgIHJldHVybiB7IGl0ZW06IGVsZW1lbnQsIHRvcDogZ2V0T2Zmc2V0KGVsZW1lbnQpIC0gMTAwLCBzZWVuOiBmYWxzZSB9O1xuICAgIH0pO1xuXG4gICAgaGFuZGxlQ2xhc3NGb3JWaWV3ZWRFbGVtZW50cyhoZWFkZXJzLCB3aW5kb3cucGFnZVlPZmZzZXQsIHRvY0xpbmtzKTtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5wYWdlWU9mZnNldDtcbiAgICAgICAgaGFuZGxlQ2xhc3NGb3JWaWV3ZWRFbGVtZW50cyhoZWFkZXJzLCBvZmZzZXQsIHRvY0xpbmtzKTtcbiAgICB9O1xufVxuZXhwb3J0IHtcbiAgICBkc19ibG9nX3RhYmxlT2ZDb250ZW50cyxcbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5pbXBvcnQgeyB1X2VsZW1lbnRGcm9tVG9wIH0gZnJvbSAnLi4vdXRpbHMvdV9lbC1pbi12aWV3cG9ydC1kZXRlY3QnO1xuXG5jb25zdCBkc19ibG9nX3RvY1N0aWNreSA9ICgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB1X2VsZW1lbnRGcm9tVG9wKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlei10b2MtY29udGFpbmVyICsgKicpLCAnI2V6LXRvYy1jb250YWluZXInLCAnaXMtZmxvYXQnLCAxMCwgJ3BpeGVscycpOyAvLyBhcyB0b3Agb2YgZWxlbWVudCBoaXRzIHRvcCBvZiB2aWV3cG9ydFxuICAgIH0sIGZhbHNlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIHVfZWxlbWVudEZyb21Ub3AoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2V6LXRvYy1jb250YWluZXIgKyAqJyksICcjZXotdG9jLWNvbnRhaW5lcicsICdpcy1mbG9hdCcsIDEwLCAncGl4ZWxzJyk7IC8vIGFzIHRvcCBvZiBlbGVtZW50IGhpdHMgdG9wIG9mIHZpZXdwb3J0XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gdG9jVG9nZ2xlQ2xhc3NlcygpIHtcbiAgICAgICAgY29uc3QgdG9jQ29sbGFwc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV6LXRvYy10b2dnbGUnKTtcbiAgICAgICAgY29uc3QgdG9jQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV6LXRvYy10aXRsZS10b2dnbGUnKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXotdG9jLWxpc3QnKTtcblxuICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICB0b2NDb2xsYXBzZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2NDb2xsYXBzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbWVzdXJlKCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICB0b2NDb2xsYXBzZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvY0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zaG93bicpO1xuICAgICAgICAgICAgICAgICAgICB0b2NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvY0NvbGxhcHNlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9jQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lzLXNob3duJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvY0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1lc3VyZSwgMzAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCQoJyNlei10b2MtY29udGFpbmVyJykuaGFzQ2xhc3MoJ2lzLXNob3duJykpIHtcbiAgICAgICAgICAgICQoJy5lei10b2MtdG9nZ2xlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9jVG9nZ2xlQ2xhc3NlcygpO1xufTtcblxuZXhwb3J0IHtcbiAgICBkc19ibG9nX3RvY1N0aWNreSxcbn07XG4iLCJcbmNvbnN0IHVfaGFzQ2xhc3MgPSAoZWwsIGNscykgPT4ge1xuICAgIGlmIChlbC5jbGFzc05hbWUubWF0Y2goJyg/Ol58XFxcXHMpJyArIGNscyArICcoPyFcXFxcUyknKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmNvbnN0IHVfYWRkQ2xhc3MgPSAoZWwsIGNscykgPT4ge1xuICAgIGlmICghZWwuY2xhc3NOYW1lLm1hdGNoKCcoPzpefFxcXFxzKScgKyBjbHMgKyAnKD8hXFxcXFMpJykpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNscztcbiAgICB9XG59XG5cbmNvbnN0IHVfZGVsQ2xhc3MgPSAoZWwsIGNscykgPT4ge1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpJyArIGNscyArICcoPyFcXFxcUyknKSwgJycpO1xufVxuXG5leHBvcnQge1xuICAgIHVfaGFzQ2xhc3MsXG4gICAgdV9hZGRDbGFzcyxcbiAgICB1X2RlbENsYXNzXG59IiwiLyoqXG4gKiBwYXJhbXM6ICB0cmlnZ2VyIGVsZW1lbnQsIHRhcmdldCBlbGVtZW50IGNsYXNzLCBjbGFzc2VzIHRvIGFkZCB0byB0YXJnZXQgZWxlbWVudCwgdHJpZ2dlciBlbGVtZW50IGRpc3RhbmNlIGZyb20gdG9wLCB1bml0ICgncGVyY2VudCcgb3IgJ3BpeGVscycpXG4gKiB1c2FnZTogICBlbGVtZW50RnJvbVRvcChlbGVtVHJpZ2dlciwgZWxlbVRhcmdldCwgY2xhc3NUb0FkZCwgZGlzdGFuY2VGcm9tVG9wLCB1bml0KTtcbiAqXG4gKiBodHRwOi8vYmxvZy5mb2Z3ZWJkZXNpZ24uY28udWsvNDEtYWRkLWNsYXNzZXMtdG8tYW4tZWxlbWVudC13aGVuLXNjcm9sbGVkLWludG8tdmlld3BvcnRcbiAqL1xuaW1wb3J0IHtcbiAgICB1X2FkZENsYXNzLFxuICAgIHVfaGFzQ2xhc3MsXG4gICAgdV9kZWxDbGFzc1xufSBmcm9tIFwiLi91X2NsYXNzbGlzdC1hZGQtcmVtb3ZlXCI7XG5cbmNvbnN0IHVfZWxlbWVudEZyb21Ub3AgPSAoZWxlbVRyaWdnZXIsIGVsZW1UYXJnZXQsIGNsYXNzVG9BZGQsIGRpc3RhbmNlRnJvbVRvcCwgdW5pdCkgPT4ge1xuICAgIGxldCB3aW5ZID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIGVsVHJpZ2dlckxlbmd0aCA9IGVsZW1UcmlnZ2VyLmxlbmd0aCxcbiAgICAgICAgZWxUYXJnZXRMZW5ndGgsIGRpc3RUb3AsIGRpc3RQZXJjZW50LCBkaXN0UGl4ZWxzLCBkaXN0VW5pdCwgZWxUYXJnZXQsIGksIGo7XG4gICAgZm9yIChpID0gMDsgaSA8IGVsVHJpZ2dlckxlbmd0aDsgKytpKSB7XG4gICAgICAgIGVsVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtVGFyZ2V0KTtcbiAgICAgICAgZWxUYXJnZXRMZW5ndGggPSBlbFRhcmdldC5sZW5ndGg7XG4gICAgICAgIGRpc3RUb3AgPSBlbGVtVHJpZ2dlcltpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGRpc3RQZXJjZW50ID0gTWF0aC5yb3VuZCgoZGlzdFRvcCAvIHdpblkpICogMTAwKTtcbiAgICAgICAgZGlzdFBpeGVscyA9IE1hdGgucm91bmQoZGlzdFRvcCk7XG4gICAgICAgIGRpc3RVbml0ID0gdW5pdCA9PSAncGVyY2VudCcgPyBkaXN0UGVyY2VudCA6IGRpc3RQaXhlbHM7XG4gICAgICAgIGlmIChkaXN0VW5pdCA8PSBkaXN0YW5jZUZyb21Ub3ApIHtcbiAgICAgICAgICAgIGlmICghdV9oYXNDbGFzcyhlbGVtVHJpZ2dlcltpXSwgZWxlbVRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZWxUYXJnZXRMZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVfaGFzQ2xhc3MoZWxUYXJnZXRbal0sIGNsYXNzVG9BZGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1X2FkZENsYXNzKGVsVGFyZ2V0W2pdLCBjbGFzc1RvQWRkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1X2hhc0NsYXNzKGVsZW1UcmlnZ2VyW2ldLCBjbGFzc1RvQWRkKSkge1xuICAgICAgICAgICAgICAgICAgICB1X2FkZENsYXNzKGVsZW1UcmlnZ2VyW2ldLCBjbGFzc1RvQWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1X2RlbENsYXNzKGVsZW1UcmlnZ2VyW2ldLCBjbGFzc1RvQWRkKTtcbiAgICAgICAgICAgIGlmICghdV9oYXNDbGFzcyhlbGVtVHJpZ2dlcltpXSwgZWxlbVRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZWxUYXJnZXRMZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICB1X2RlbENsYXNzKGVsVGFyZ2V0W2pdLCBjbGFzc1RvQWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHVfaXNFbGVtZW50SXNJblZpZXcgPSAoZWwpID0+IHtcbiAgICBjb25zdCBzY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICBjb25zdCBib3VuZHNUb3AgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxcblxuICAgIGNvbnN0IHZpZXdwb3J0ID0ge1xuICAgICAgICB0b3A6IHNjcm9sbCxcbiAgICAgICAgYm90dG9tOiBzY3JvbGwgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgICB0b3A6IGJvdW5kc1RvcCxcbiAgICAgICAgYm90dG9tOiBib3VuZHNUb3AgKyBlbC5jbGllbnRIZWlnaHQsXG4gICAgfVxuXG4gICAgcmV0dXJuICggYm91bmRzLmJvdHRvbSA+PSB2aWV3cG9ydC50b3AgJiYgYm91bmRzLmJvdHRvbSA8PSB2aWV3cG9ydC5ib3R0b20gKVxuICAgICAgICB8fCAoIGJvdW5kcy50b3AgPD0gdmlld3BvcnQuYm90dG9tICYmIGJvdW5kcy50b3AgPj0gdmlld3BvcnQudG9wICk7XG59XG5cbmV4cG9ydCB7XG4gICAgdV9lbGVtZW50RnJvbVRvcCxcbiAgICB1X2lzRWxlbWVudElzSW5WaWV3XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEJsb2cgSlMgaW1wb3J0cyBhbmQgZnVuY3Rpb25zXG4gKi9cblxuaW1wb3J0IHsgZHNfYmxvZ190b2dnbGVEYXJrTW9kZSB9IGZyb20gJy4vYmxvZy9kc19ibG9nX2Rhcmttb2RlJztcbmltcG9ydCB7IGRzX2Jsb2dfdGFibGVPZkNvbnRlbnRzIH0gZnJvbSAnLi9ibG9nL2RzX2Jsb2dfdG9jSGlnaGxpZ2h0JztcbmltcG9ydCB7IGRzX2Jsb2dfdG9jU3RpY2t5IH0gZnJvbSAnLi9ibG9nL2RzX2Jsb2dfdG9jU3RpY2t5JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkc19ibG9nX3RvZ2dsZURhcmtNb2RlKCcuanMtZGFyay1tb2RlJyk7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV6LXRvYy10b2dnbGUnKSkge1xuICAgICAgICBkc19ibG9nX3RvY1N0aWNreSgpO1xuICAgICAgICBkc19ibG9nX3RhYmxlT2ZDb250ZW50cygpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRzX2Jsb2dfdG9nZ2xlRGFya01vZGUiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYnRuU3dpdGNoIiwic2V0QXR0cmlidXRlIiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaGFzQXR0cmlidXRlIiwic2V0SXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldE9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGFuZGxlQ2xhc3NGb3JWaWV3ZWRFbGVtZW50cyIsImVsZW1lbnRzIiwicGFnZVlPZmZzZXQiLCJsaW5rcyIsImZvckVhY2giLCJpbmRleCIsImxpbmsiLCJjbGFzc0xpc3QiLCJhZGQiLCJzaWJsaW5nVUwiLCJwYXJlbnROb2RlIiwicmVtb3ZlIiwiZHNfYmxvZ190YWJsZU9mQ29udGVudHMiLCJ0b2MiLCJnZXRFbGVtZW50QnlJZCIsInRvY0hlYWRlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9jTGlua3MiLCJlIiwic3ViTGlzdCIsInN0eWxlIiwiaGVpZ2h0IiwiY29uY2F0Iiwic2Nyb2xsSGVpZ2h0IiwiaGVhZGVycyIsIl90b0NvbnN1bWFibGVBcnJheSIsIm1hcCIsImVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdWJzdHJpbmciLCJpdGVtIiwic2VlbiIsIm9uc2Nyb2xsIiwib2Zmc2V0IiwidV9lbGVtZW50RnJvbVRvcCIsImRzX2Jsb2dfdG9jU3RpY2t5IiwidG9jVG9nZ2xlQ2xhc3NlcyIsInRvY0NvbGxhcHNlciIsInRvY0NvbnRhaW5lciIsInRhcmdldCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwibWVzdXJlIiwic2V0VGltZW91dCIsIiQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwidV9oYXNDbGFzcyIsImNscyIsImNsYXNzTmFtZSIsIm1hdGNoIiwidV9hZGRDbGFzcyIsInVfZGVsQ2xhc3MiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZWxlbVRyaWdnZXIiLCJlbGVtVGFyZ2V0IiwiY2xhc3NUb0FkZCIsImRpc3RhbmNlRnJvbVRvcCIsInVuaXQiLCJ3aW5ZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlbFRyaWdnZXJMZW5ndGgiLCJsZW5ndGgiLCJlbFRhcmdldExlbmd0aCIsImRpc3RUb3AiLCJkaXN0UGVyY2VudCIsImRpc3RQaXhlbHMiLCJkaXN0VW5pdCIsImVsVGFyZ2V0IiwiaSIsImoiLCJNYXRoIiwicm91bmQiLCJ1X2lzRWxlbWVudElzSW5WaWV3Iiwic2Nyb2xsIiwiYm91bmRzVG9wIiwidmlld3BvcnQiLCJib3R0b20iLCJib3VuZHMiXSwic291cmNlUm9vdCI6IiJ9