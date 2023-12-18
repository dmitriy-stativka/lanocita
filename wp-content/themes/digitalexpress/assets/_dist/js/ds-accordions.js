/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/function-calls/accordions.js":
/*!*****************************************************!*\
  !*** ./assets/_src/js/function-calls/accordions.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callAccordions: function() { return /* binding */ callAccordions; }
/* harmony export */ });
/* harmony import */ var _accordions_accordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordions/accordions */ "./assets/_src/js/function-calls/accordions/accordions.js");

var callAccordions = function callAccordions() {
  (0,_accordions_accordions__WEBPACK_IMPORTED_MODULE_0__.createAccordions)();
};


/***/ }),

/***/ "./assets/_src/js/function-calls/accordions/accordions.js":
/*!****************************************************************!*\
  !*** ./assets/_src/js/function-calls/accordions/accordions.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAccordions: function() { return /* binding */ createAccordions; }
/* harmony export */ });
/* harmony import */ var _library_tabs_accordions_DSMPAccordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/tabs-accordions/DSMPAccordions */ "./assets/_src/js/library/tabs-accordions/DSMPAccordions.js");

var accordionID = 'js-acc';
var accordionSelector = '.js-acc-wrapper';
var accordionItems = document.querySelectorAll(accordionSelector);
var createAccordions = function createAccordions() {
  var accordions = [];
  accordionItems.forEach(function (acc, i) {
    var accID = "".concat(accordionID, "-").concat(i);
    var callID = "#".concat(accID);
    acc.setAttribute('id', accID);
    accordions[i] = new _library_tabs_accordions_DSMPAccordions__WEBPACK_IMPORTED_MODULE_0__["default"](callID);

    //Uncomment if an event is needed to re init accordions, ex: when using load more for faqs
    // acc.addEventListener('re-init', event => {
    //     accordions[i].reInit();
    // })
  });
};


/***/ }),

/***/ "./assets/_src/js/function-calls/tabs-to-accordion-mobile.js":
/*!*******************************************************************!*\
  !*** ./assets/_src/js/function-calls/tabs-to-accordion-mobile.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callTabAccordionsMobile: function() { return /* binding */ callTabAccordionsMobile; }
/* harmony export */ });
/* harmony import */ var _library_tabs_accordions_DSMPTabsToAccordionMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/tabs-accordions/DSMPTabsToAccordionMobile */ "./assets/_src/js/library/tabs-accordions/DSMPTabsToAccordionMobile.js");

var tabaccID = 'js-tab-acc';
var tabaccSelector = '.js-tabs-to-acc-wrapper';
var tabaccItems = document.querySelectorAll(tabaccSelector);
var callTabAccordionsMobile = function callTabAccordionsMobile() {
  tabaccItems.forEach(function (acc, i) {
    var taID = "".concat(tabaccID, "-").concat(i);
    var callID = "#".concat(taID);
    acc.setAttribute('id', taID);
    new _library_tabs_accordions_DSMPTabsToAccordionMobile__WEBPACK_IMPORTED_MODULE_0__["default"](callID);
  });
};


/***/ }),

/***/ "./assets/_src/js/library/animations/easings-es6.js":
/*!**********************************************************!*\
  !*** ./assets/_src/js/library/animations/easings-es6.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easeInBack: function() { return /* binding */ easeInBack; },
/* harmony export */   easeInBounce: function() { return /* binding */ easeInBounce; },
/* harmony export */   easeInCirc: function() { return /* binding */ easeInCirc; },
/* harmony export */   easeInCubic: function() { return /* binding */ easeInCubic; },
/* harmony export */   easeInElastic: function() { return /* binding */ easeInElastic; },
/* harmony export */   easeInExpo: function() { return /* binding */ easeInExpo; },
/* harmony export */   easeInOutBack: function() { return /* binding */ easeInOutBack; },
/* harmony export */   easeInOutBounce: function() { return /* binding */ easeInOutBounce; },
/* harmony export */   easeInOutCirc: function() { return /* binding */ easeInOutCirc; },
/* harmony export */   easeInOutCubic: function() { return /* binding */ easeInOutCubic; },
/* harmony export */   easeInOutElastic: function() { return /* binding */ easeInOutElastic; },
/* harmony export */   easeInOutExpo: function() { return /* binding */ easeInOutExpo; },
/* harmony export */   easeInOutQuad: function() { return /* binding */ easeInOutQuad; },
/* harmony export */   easeInOutQuart: function() { return /* binding */ easeInOutQuart; },
/* harmony export */   easeInOutQuint: function() { return /* binding */ easeInOutQuint; },
/* harmony export */   easeInOutSine: function() { return /* binding */ easeInOutSine; },
/* harmony export */   easeInQuad: function() { return /* binding */ easeInQuad; },
/* harmony export */   easeInQuart: function() { return /* binding */ easeInQuart; },
/* harmony export */   easeInQuint: function() { return /* binding */ easeInQuint; },
/* harmony export */   easeInSine: function() { return /* binding */ easeInSine; },
/* harmony export */   easeOutBack: function() { return /* binding */ easeOutBack; },
/* harmony export */   easeOutBounce: function() { return /* binding */ easeOutBounce; },
/* harmony export */   easeOutCirc: function() { return /* binding */ easeOutCirc; },
/* harmony export */   easeOutCubic: function() { return /* binding */ easeOutCubic; },
/* harmony export */   easeOutElastic: function() { return /* binding */ easeOutElastic; },
/* harmony export */   easeOutExpo: function() { return /* binding */ easeOutExpo; },
/* harmony export */   easeOutQuad: function() { return /* binding */ easeOutQuad; },
/* harmony export */   easeOutQuart: function() { return /* binding */ easeOutQuart; },
/* harmony export */   easeOutQuint: function() { return /* binding */ easeOutQuint; },
/* harmony export */   easeOutSine: function() { return /* binding */ easeOutSine; }
/* harmony export */ });
/**
 * https://github.com/janrembold/es6-easings
 *
 * usage : import {easeInOutQuad} from 'easings';
 */

var easeOutQuad = function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
};
var easeInQuad = function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
};
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
};
var easeInCubic = function easeInCubic(t, b, c, d) {
  return c * (t /= d) * t * t + b;
};
var easeOutCubic = function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};
var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};
var easeInQuart = function easeInQuart(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
};
var easeOutQuart = function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
var easeInOutQuart = function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};
var easeInQuint = function easeInQuint(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
};
var easeOutQuint = function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
var easeInOutQuint = function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};
var easeInSine = function easeInSine(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
var easeOutSine = function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
var easeInOutSine = function easeInOutSine(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
var easeInExpo = function easeInExpo(t, b, c, d) {
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};
var easeOutExpo = function easeOutExpo(t, b, c, d) {
  return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
var easeInOutExpo = function easeInOutExpo(t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
};
var easeInCirc = function easeInCirc(t, b, c, d) {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
var easeOutCirc = function easeOutCirc(t, b, c, d) {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};
var easeInOutCirc = function easeInOutCirc(t, b, c, d) {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};
var easeInElastic = function easeInElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};
var easeOutElastic = function easeOutElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * .3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
var easeInOutElastic = function easeInOutElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d / 2) == 2) return b + c;
  if (!p) p = d * (.3 * 1.5);
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = p / (2 * Math.PI) * Math.asin(c / a);
  if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
};
var easeInBack = function easeInBack(t, b, c, d) {
  var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
var easeOutBack = function easeOutBack(t, b, c, d) {
  var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
var easeInOutBack = function easeInOutBack(t, b, c, d) {
  var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};
var easeInBounce = function easeInBounce(t, b, c, d) {
  return c - easeOutBounce(d - t, 0, c, d) + b;
};
var easeOutBounce = function easeOutBounce(t, b, c, d) {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
  } else {
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
  }
};
var easeInOutBounce = function easeInOutBounce(t, b, c, d) {
  if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * .5 + b;
  return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};

/***/ }),

/***/ "./assets/_src/js/library/animations/scroll-to.js":
/*!********************************************************!*\
  !*** ./assets/_src/js/library/animations/scroll-to.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollToUtil: function() { return /* binding */ scrollToUtil; }
/* harmony export */ });
/**
 * TODO: rework it to use request animation frame
 * https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
 *
 * taken from
 * https://gist.github.com/andjosh/6764939
 * https://github.com/alvarotrigo/skrollTop.js/blob/master/skrollTop.js
 *
 */
Math.easeInOutCubic = function (t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};
var scrollToUtil = function scrollToUtil(params) {
  var element = typeof params.element !== 'undefined' ? params.element : window;
  var to = params.to;
  var duration = typeof params.duration !== 'undefined' ? params.duration : 250;
  var callback = typeof params.callback !== 'undefined' ? params.callback : null;
  var easing = typeof params.easing !== 'undefined' ? params.easing : Math.easeInOutCubic;
  var start = element !== window ? element.scrollTop : (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  var change = to - start;
  var currentTime = 0;
  var increment = 16; //same amount of milliseconds as requestAnimationFrame

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var easingValue = duration ? easing(currentTime, start, change, duration) : to;
    element.scrollTo(0, easingValue);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    } else if (callback) {
      callback();
    }
  };
  animateScroll();
};

/***/ }),

/***/ "./assets/_src/js/library/tabs-accordions/DSMPAccordions.js":
/*!******************************************************************!*\
  !*** ./assets/_src/js/library/tabs-accordions/DSMPAccordions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
/* harmony import */ var _utils_u_slide_up_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/u_slide-up-down */ "./assets/_src/js/utils/u_slide-up-down.js");
/* harmony import */ var _utils_u_fade_in_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/u_fade-in-out */ "./assets/_src/js/utils/u_fade-in-out.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/* harmony import */ var _animations_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/scroll-to */ "./assets/_src/js/library/animations/scroll-to.js");
/* harmony import */ var _animations_easings_es6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/easings-es6 */ "./assets/_src/js/library/animations/easings-es6.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var DSMPAccordions = /*#__PURE__*/function () {
  function DSMPAccordions(selector, options) {
    var _this = this;
    _classCallCheck(this, DSMPAccordions);
    // default wrapper value
    this.wrapper = '.js-acc-wrapper';
    this.defaults = {
      selectors: {
        item: '.js-acc-item',
        trigger: '.js-acc-button',
        content: '.js-acc-content'
      },
      gallery: {
        container: '.js-acc-gallery',
        item: '.js-acc-media'
      },
      classes: {
        active: 'is-active',
        focus: 'focus',
        display: 'block'
      },
      animation: {
        content: true,
        // true: use js , false: use css
        gallery: false // true: use js , false: use css
      },
      attr: {
        close: 'data-close',
        open: 'data-expand',
        gallery: 'data-gallery',
        startClosed: 'data-start-closed',
        animationContent: 'data-animation',
        animationGallery: 'data-gallery-animation',
        display: 'data-acc-display',
        scrollToView: 'data-scroll-to-view'
      },
      opt: {
        close: false,
        expand: false,
        hasGallery: false,
        startClosed: false,
        scrollToView: false
      },
      aria: {
        button: 'header',
        content: 'content'
      }
    };

    // breakpoints: {
    //     tablet: 1113,
    //         mobile: 769,
    // },

    this.config = (0,_utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__.u_extendObject)(this.defaults, options);
    // check if we changed selector
    if (typeof selector !== "undefined") {
      this.wrapper = selector;
    }

    // get name to use for aria id's and controls
    this.getAriaName();
    this.selector = document.querySelector(this.wrapper);
    this.eventsListeners = {};
    this.parseOptions();
    this.shouldScroll = false;
    this.mql = window.matchMedia('(max-width: 1113px)');
    if (this.config.opt.scrollToView) {
      this.shouldScroll = this.mql.matches;
      this.mql.addEventListener('change', function (e) {
        _this.shouldScroll = e.matches;
      });
    }
    this.trigger = this.selector.querySelectorAll(this.config.selectors.trigger);
    this.items = this.selector.querySelectorAll(this.config.selectors.item);
    if (this.config.opt.hasGallery) {
      this.galleryItems = this.selector.querySelectorAll(this.config.gallery.item);
    }

    // array for stashing reference to binded events
    this.handlers = [];
    this.previousIndex = 0;
    this.currentIndex = 0;
    this.init();
  }
  _createClass(DSMPAccordions, [{
    key: "init",
    value: function init() {
      this.addAria();
      this.prepareForAnimation();
      this.accordionBindEvents();
    }
  }, {
    key: "reInit",
    value: function reInit() {
      this.accordionUnbindEvents();
      this.trigger = this.selector.querySelectorAll(this.config.selectors.trigger);
      this.items = this.selector.querySelectorAll(this.config.selectors.item);
      this.handlers = [];
      this.addAria();
      this.reInitAnimation();
      this.accordionBindEvents();
    }
  }, {
    key: "on",
    value: function on(events, callback) {
      var self = this;
      if (typeof callback !== 'function') return;
      events.split(' ').forEach(function (event, i) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event].push(callback);
      });
    }
  }, {
    key: "off",
    value: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
    }
  }, {
    key: "emit",
    value: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      //console.log(events, data, context);
      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
    }
  }, {
    key: "accordionBindEvents",
    value: function accordionBindEvents() {
      var self = this;
      var elem = self.trigger;
      self.addListenerFocus = self.addListenerFocus.bind(self);
      self.addListenerBlur = self.addListenerBlur.bind(self);
      self.addKeyListener = self.addKeyListener.bind(self);
      self.on = self.on.bind(self);
      self.off = self.off.bind(self);
      self.emit = self.emit.bind(self);
      elem.forEach(function (acc, i) {
        var handlerFunc = self.accordionNavClick.bind(self, i);
        self.handlers.push(handlerFunc);
        acc.addEventListener('click', handlerFunc, {
          passive: true
        });
        acc.addEventListener('focus', self.addListenerFocus, {
          passive: true
        });
        acc.addEventListener('blur', self.addListenerBlur, {
          passive: true
        });
      });
      var accordion = self.selector;
      accordion.addEventListener('keydown', self.addKeyListener, {
        passive: true
      });
    }
  }, {
    key: "accordionUnbindEvents",
    value: function accordionUnbindEvents() {
      var self = this;
      var elem = self.trigger;
      elem.forEach(function (acc, i) {
        var elemParent = acc.closest(self.config.selectors.item);
        var elemContent = elemParent.querySelector(self.config.selectors.content);
        var control, header;
        if (self.config.aria.name) {
          control = "".concat(self.config.aria.name, "-").concat(self.config.aria.content, "-").concat(i);
          header = "".concat(self.config.aria.name, "-").concat(self.config.aria.button, "-").concat(i);
        }
        acc.removeAttribute('aria-expanded', '');
        if (elemContent) {
          elemContent.removeAttribute('aria-hidden', '');
        }
        if (self.config.aria.name) {
          acc.removeAttribute('aria-controls', '');
          acc.removeAttribute('id', '');
          if (elemContent) {
            elemContent.removeAttribute('id', '');
            elemContent.removeAttribute('aria-labelledby', '');
          }
        }
        if (elemContent) {
          elemContent.removeAttribute('role', '');
        }
        acc.removeEventListener('click', self.handlers[i]);
        acc.removeEventListener('focus', self.addListenerFocus);
        acc.removeEventListener('blur', self.addListenerBlur);
      });
      var accordion = self.selector;
      accordion.removeEventListener('keydown', self.addKeyListener);
      self.removeStyles();
    }
  }, {
    key: "accordionNavClick",
    value: function accordionNavClick(i, ev) {
      var self = this;
      var currentItemClicked = ev.currentTarget;
      self.accordionContentchange(i, currentItemClicked, ev);
    }
  }, {
    key: "accordionContentchange",
    value: function accordionContentchange(i, elem, ev) {
      var self = this;
      var currentItemClicked = elem;
      var elems = self.items;
      var currentItem = currentItemClicked.closest(self.config.selectors.item);
      var currentItemContent = currentItem.querySelector(self.config.selectors.content);
      var expanded = currentItemClicked.getAttribute('aria-expanded') === 'true' || false;
      if (currentItem.classList.contains(self.config.classes.active)) {
        if (self.config.opt.close) {
          if (self.config.animation.content) {
            (0,_utils_u_slide_up_down__WEBPACK_IMPORTED_MODULE_1__.u_slideUp)(currentItemContent, {
              display: self.config.classes.display
            });
          }
          currentItem.classList.remove(self.config.classes.active);
          currentItemClicked.setAttribute('aria-expanded', !expanded);
          currentItemContent.setAttribute('aria-hidden', expanded);
        }
      } else {
        if (!self.config.opt.expand) {
          elems.forEach(function (item) {
            var itemContent = item.querySelector(self.config.selectors.content);
            var itemTrigger = item.querySelector(self.config.selectors.trigger);
            if (self.config.animation.content) {
              (0,_utils_u_slide_up_down__WEBPACK_IMPORTED_MODULE_1__.u_slideUp)(itemContent, {
                display: self.config.classes.display
              });
            }
            item.classList.remove(self.config.classes.active);
            if (itemTrigger) {
              itemTrigger.setAttribute('aria-expanded', expanded);
            }
            if (itemContent) {
              itemContent.setAttribute('aria-hidden', !expanded);
            }
          });
          if (self.config.animation.content) {
            (0,_utils_u_slide_up_down__WEBPACK_IMPORTED_MODULE_1__.u_slideDown)(currentItemContent, {
              display: self.config.classes.display
            });
          }
          currentItem.classList.add(self.config.classes.active);
          currentItemClicked.setAttribute('aria-expanded', !expanded);
          currentItemContent.setAttribute('aria-hidden', expanded);
        } else {
          if (self.config.animation.content) {
            (0,_utils_u_slide_up_down__WEBPACK_IMPORTED_MODULE_1__.u_slideDown)(currentItemContent, {
              display: self.config.classes.display
            });
          }
          currentItem.classList.add(self.config.classes.active);
          currentItemClicked.setAttribute('aria-expanded', !expanded);
          currentItemContent.setAttribute('aria-hidden', expanded);
        }
        if (self.config.opt.hasGallery) {
          self.accordionChangeGallery(i);
        }
        if (self.shouldScroll && self.currentIndex < i) {
          self.scrollToAccordion(i);
        }
      }
      this.previousIndex = this.currentIndex;
      this.currentIndex = i;
      self.emit('accordionChange', ev);
    }
  }, {
    key: "nextAccordion",
    value: function nextAccordion() {
      var self = this;
      var nextElem = self.currentIndex;
      var numberOfElem = self.items.length;
      nextElem === numberOfElem - 1 ? nextElem = 0 : nextElem += 1;
      var nextElemItem = self.items[nextElem];
      self.accordionContentchange(nextElem, nextElemItem, null);
    }
  }, {
    key: "prevAccordion",
    value: function prevAccordion() {
      var self = this;
      var prevElem = self.currentIndex;
      var numberOfElem = self.items.length;
      prevElem === 0 ? prevElem = numberOfElem - 1 : prevElem -= 1;
      var prevElemItem = self.items[prevElem];
      self.accordionContentchange(prevElem, prevElemItem, null);
    }
  }, {
    key: "accordionChangeGallery",
    value: function accordionChangeGallery(i) {
      var self = this;
      var galleryItems = _toConsumableArray(self.galleryItems);
      galleryItems.forEach(function (gallery) {
        if (self.config.animation.gallery) {
          (0,_utils_u_fade_in_out__WEBPACK_IMPORTED_MODULE_2__.u_fadeOut)(gallery, {
            complete: function complete() {
              gallery.classList.remove(self.config.classes.active);
              var newItem = galleryItems[i];
              (0,_utils_u_fade_in_out__WEBPACK_IMPORTED_MODULE_2__.u_fadeIn)(newItem, {
                duration: 50
              });
              newItem.classList.add(self.config.classes.active);
            }
          });
        } else {
          gallery.classList.remove(self.config.classes.active);
        }
      });
      if (!self.config.animation.gallery) {
        galleryItems[i].classList.add(self.config.classes.active);
      }
    }
  }, {
    key: "prepareForAnimation",
    value: function prepareForAnimation() {
      /* check whether items contains is-active class, if its not start closed all,
      first item should have is-active class and its content should be set to
      display block / flex, otherwise, hide it
      */
      var self = this;
      var items = self.items;
      var index = 0;
      var activeFound = false;
      if (self.config.animation.content) {
        items.forEach(function (list, i) {
          var itemContent = list.querySelector(self.config.selectors.content);
          if (list.classList.contains(self.config.classes.active)) {
            if (!self.config.opt.startClosed) {
              if (itemContent) {
                itemContent.style.display = self.config.classes.display;
              }
            }
            index = i;
            activeFound = true;
          } else {
            if (itemContent) {
              itemContent.style.display = 'none';
            }
          }
        });
        if (!activeFound && !self.config.opt.startClosed) {
          var item0Content = items[0].querySelector(self.config.selectors.content);
          items[0].classList.add(self.config.classes.active);
          item0Content.style.display = self.config.classes.display;
        }
      }
    }
  }, {
    key: "reInitAnimation",
    value: function reInitAnimation() {
      var self = this;
      var items = self.items;
      if (self.config.animation.content) {
        items.forEach(function (list, i) {
          var itemContent = list.querySelector(self.config.selectors.content);
          if (!list.classList.contains(self.config.classes.active)) {
            itemContent.style.display = 'none';
          }
        });
      }
    }
  }, {
    key: "removeStyles",
    value: function removeStyles() {
      var self = this;
      var items = self.items;
      if (self.config.animation.content) {
        items.forEach(function (list, i) {
          var itemContent = list.querySelector(self.config.selectors.content);
          itemContent.style.display = '';
        });
      }
    }
  }, {
    key: "parseOptions",
    value: function parseOptions() {
      var self = this;
      var isSelfClose = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_3__.u_parseBool)(self.selector.getAttribute(self.config.attr.close)) || self.config.opt.close;
      if (isSelfClose) {
        isSelfClose ? self.config.opt.close = true : self.config.opt.close = false;
      }

      /**
       * if leave open is true, self close should automatically be true,
       * otherwise we wont be able to close on self click
       */

      var isLeaveOpen = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_3__.u_parseBool)(self.selector.getAttribute(self.config.attr.open)) || self.config.opt.expand;
      if (isLeaveOpen) {
        self.config.opt.expand = true;
        self.config.opt.close = true;
      } else {
        self.config.opt.expand = false;
      }
      var isStartClosed = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_3__.u_parseBool)(self.selector.getAttribute(self.config.attr.startClosed)) || self.config.opt.startClosed;
      if (isStartClosed) {
        self.config.opt.startClosed = true;
        self.config.opt.close = true;
      }
      var isGallery = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_3__.u_parseBool)(self.selector.getAttribute(self.config.attr.gallery)) || self.config.opt.hasGallery;
      if (isGallery) {
        self.config.opt.hasGallery = true;

        // if we have gallery, self close and expand is by default off
        self.config.opt.expand = false;
        self.config.opt.close = false;
        self.config.opt.startClosed = false;
      }
      var animateContent = self.selector.getAttribute(self.config.attr.animationContent);
      if (animateContent) {
        animateContent === 'js' ? self.config.animation.content = true : self.config.animation.content = false;
      }
      var animateGallery = self.selector.getAttribute(self.config.attr.animationGallery);
      if (animateGallery) {
        animateGallery === 'js' ? self.config.animation.gallery = true : self.config.animation.gallery = false;
      }
      var display = self.selector.getAttribute(self.config.attr.display) || self.config.classes.display;
      self.config.classes.display = display === 'flex' ? 'flex' : 'block';
      var isScrollToView = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_3__.u_parseBool)(self.selector.getAttribute(self.config.attr.scrollToView)) || self.config.opt.scrollToView;
      if (isScrollToView) {
        self.config.opt.scrollToView = true;
        self.config.opt.expand = false;
      }
      self.emit('optionsParsed');
    }

    // small function to check for valid ID of wrapper
  }, {
    key: "isValidId",
    value: function isValidId(s) {
      return /^[^\s]+$/.test(s);
    }
  }, {
    key: "getAriaName",
    value: function getAriaName() {
      var ariaName = this.wrapper.slice(1);
      if (this.isValidId(ariaName)) {
        this.config.aria.name = ariaName;
      } else {
        this.config.aria.name = false;
      }
    }
  }, {
    key: "addAria",
    value: function addAria() {
      var self = this;
      var elem = self.trigger;
      elem.forEach(function (acc, i) {
        var elemParent = acc.closest(self.config.selectors.item);
        var elemContent = elemParent.querySelector(self.config.selectors.content);
        var control, header;
        if (self.config.aria.name) {
          control = "".concat(self.config.aria.name, "-").concat(self.config.aria.content, "-").concat(i);
          header = "".concat(self.config.aria.name, "-").concat(self.config.aria.button, "-").concat(i);
        }
        if (elemParent.classList.contains(self.config.classes.active)) {
          acc.setAttribute('aria-expanded', true);
          if (elemContent) {
            elemContent.setAttribute('aria-hidden', false);
          }
        } else {
          acc.setAttribute('aria-expanded', false);
          if (elemContent) {
            elemContent.setAttribute('aria-hidden', true);
          }
        }
        if (self.config.aria.name) {
          acc.setAttribute('aria-controls', control);
          acc.setAttribute('id', header);
          if (elemContent) {
            elemContent.setAttribute('id', control);
            elemContent.setAttribute('aria-labelledby', header);
          }
        }
        if (elemContent) {
          elemContent.setAttribute('role', 'region');
        }
      });
    }
  }, {
    key: "addListenerFocus",
    value: function addListenerFocus(ev) {
      var self = this;
      var elem = ev.target;
      elem.classList.add(self.config.classes.focus);
    }
  }, {
    key: "addListenerBlur",
    value: function addListenerBlur(ev) {
      var self = this;
      var elem = ev.target;
      elem.classList.remove(self.config.classes.focus);
    }
  }, {
    key: "addKeyListener",
    value: function addKeyListener(ev) {
      var self = this;
      var elem = ev.target;
      var key = ev.which.toString();
      var triggers = _toConsumableArray(self.trigger);
      var triggerClass = self.config.selectors.trigger.slice(1);

      // 33 = Page Up, 34 = Page Down
      var ctrlModifier = ev.ctrlKey && key.match(/33|34/);
      if (elem.classList.contains(triggerClass)) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          var index = triggers.indexOf(elem);
          var direction = key.match(/34|40/) ? 1 : -1;
          var length = triggers.length;
          var newIndex = (index + length + direction) % length;
          triggers[newIndex].focus();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
            // Go to last accordion
            case '35':
              triggers[triggers.length - 1].focus();
              break;
          }
        }
      }
    }
  }, {
    key: "scrollToAccordion",
    value: function scrollToAccordion(currentIndex) {
      var self = this;
      var elem = self.trigger[0];
      var scrollCurrentContent = elem.getBoundingClientRect();
      var elemHeight = scrollCurrentContent.height;
      var offset = elemHeight * currentIndex;
      var currentScrollPos = window.scrollY || document.documentElement.scrollTop;
      var scrollTo = scrollCurrentContent.top + currentScrollPos + offset - 80;
      (0,_animations_scroll_to__WEBPACK_IMPORTED_MODULE_4__.scrollToUtil)({
        to: scrollTo,
        duration: 400,
        easing: _animations_easings_es6__WEBPACK_IMPORTED_MODULE_5__.easeInQuad
      });
    }
  }]);
  return DSMPAccordions;
}();
/* harmony default export */ __webpack_exports__["default"] = (DSMPAccordions);

/***/ }),

/***/ "./assets/_src/js/library/tabs-accordions/DSMPTabs-tab.js":
/*!****************************************************************!*\
  !*** ./assets/_src/js/library/tabs-accordions/DSMPTabs-tab.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DSMPTabsClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSMPTabsClass */ "./assets/_src/js/library/tabs-accordions/DSMPTabsClass.js");
/* harmony import */ var _utils_u_object_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var DSMPTabsTab = /*#__PURE__*/function (_DSMPTabsClass) {
  _inherits(DSMPTabsTab, _DSMPTabsClass);
  var _super = _createSuper(DSMPTabsTab);
  function DSMPTabsTab(options) {
    var _this;
    _classCallCheck(this, DSMPTabsTab);
    _this = _super.call(this);
    _this.defaults = {
      wrapper: '.js-tabs-wrapper',
      selectors: {
        nav: '.js-tabs-nav-item',
        panel: '.js-tabs-panel'
      },
      classes: {
        active: 'is-active'
      },
      data: 'data-tab',
      breakpoints: 'tablet' // tablet, desktop, desktop-l, all,  leave empty for disabled
    };
    _this.config = (0,_utils_u_object_extend__WEBPACK_IMPORTED_MODULE_1__.u_extendObject)(_this.defaults, options);
    _this.selector = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.nav);
    _this.selectorPanels = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.panel);
    _this.items = document.querySelectorAll(_this.selector);
    _this.panels = document.querySelectorAll(_this.selectorPanels);
    if (_this.config.breakpoints !== 'all') {
      _this.mql = window.matchMedia("(max-width: ".concat(_this.breakpoints[_this.config.breakpoints], "px)"));
      _this.mediaMatch = _this.mql.matches;
    } else {
      _this.mediaMatch = true;
    }
    if (!_this.items.length) return _possibleConstructorReturn(_this);
    _this.init();
    return _this;
  }
  _createClass(DSMPTabsTab, [{
    key: "init",
    value: function init() {
      if (this.items.length > 0) {
        this.currentIndex = _get(_getPrototypeOf(DSMPTabsTab.prototype), "getNavTabID", this).call(this, this.items[0]);
      }
      _get(_getPrototypeOf(DSMPTabsTab.prototype), "bindFunctions", this).call(this);
      _get(_getPrototypeOf(DSMPTabsTab.prototype), "bindTabNavEvent", this).call(this);
      _get(_getPrototypeOf(DSMPTabsTab.prototype), "bindTabPanelEvent", this).call(this);
    }
  }]);
  return DSMPTabsTab;
}(_DSMPTabsClass__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (DSMPTabsTab);

/***/ }),

/***/ "./assets/_src/js/library/tabs-accordions/DSMPTabsClass.js":
/*!*****************************************************************!*\
  !*** ./assets/_src/js/library/tabs-accordions/DSMPTabsClass.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DSMPTabsClass = /*#__PURE__*/function () {
  function DSMPTabsClass() {
    _classCallCheck(this, DSMPTabsClass);
    this.eventsListeners = {};
    this.currentIndex = 0;
    this.activeNav = null;
    this.activePanel = null;
    this.breakpoints = {
      tablet: 768,
      desktop: 1112,
      'desktop-l': 1440
    };
    this.breakpoint = false;
  }
  _createClass(DSMPTabsClass, [{
    key: "bindFunctions",
    value: function bindFunctions() {
      this.tabNavClick = this.tabNavClick.bind(this);
      this.mediaMatches = this.mediaMatches.bind(this);
      this.onSwipeStart = this.onSwipeStart.bind(this);
      this.onSwipeEnd = this.onSwipeEnd.bind(this);
      if (this.config.breakpoints !== 'all') {
        this.mql.addEventListener('change', this.mediaMatches);
      }
    }
  }, {
    key: "mediaMatches",
    value: function mediaMatches(e) {
      this.mediaMatch = e.matches;
      if (this.mediaMatch) {
        this.bindTabPanelEvent();
      } else {
        this.unbindTabPanelEvent();
      }
    }
  }, {
    key: "bindTabNavEvent",
    value: function bindTabNavEvent() {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.addEventListener('click', self.tabNavClick, {
          passive: true
        });
      });
    }
  }, {
    key: "bindTabPanelEvent",
    value: function bindTabPanelEvent() {
      var self = this;
      var panels = self.panels;
      if (self.mediaMatch) {
        panels.forEach(function (panel) {
          panel.addEventListener('mousedown', self.onSwipeStart);
          panel.addEventListener('touchstart', self.onSwipeStart);
          panel.addEventListener('mouseup', self.onSwipeEnd);
          panel.addEventListener('touchend', self.onSwipeEnd);
        });
      }
    }
  }, {
    key: "unbindTabPanelEvent",
    value: function unbindTabPanelEvent() {
      var self = this;
      var panels = self.panels;
      panels.forEach(function (panel) {
        panel.removeEventListener('mousedown', self.onSwipeStart);
        panel.removeEventListener('touchstart', self.onSwipeStart);
        panel.removeEventListener('mouseup', self.onSwipeEnd);
        panel.removeEventListener('touchend', self.onSwipeEnd);
      });
    }
  }, {
    key: "unbindTabNavEvent",
    value: function unbindTabNavEvent() {
      var self = this;
      var elem = self.items;
      var panels = self.panels;
      elem.forEach(function (tab) {
        tab.removeEventListener('click', self.tabNavClick);
      });
      panels.forEach(function (panel) {
        panel.removeEventListener('mousedown', self.onSwipeStart);
        panel.removeEventListener('touchstart', self.onSwipeStart);
        panel.removeEventListener('mouseup', self.onSwipeEnd);
        panel.removeEventListener('touchend', self.onSwipeEnd);
      });
      if (this.config.breakpoints !== 'all') {
        self.mql.removeEventListener('change', self.mediaMatches);
      }
    }
  }, {
    key: "tabNavClick",
    value: function tabNavClick(ev) {
      var self = this;
      var currentTab = ev.currentTarget;
      self.activeNav = ev.currentTarget;
      var currentSelector = currentTab.closest(self.config.wrapper);
      var elem = currentSelector.querySelectorAll(self.config.selectors.nav);
      var currentTabID = self.getNavTabID(currentTab);
      self.clearActiveClass(elem, 'nav');
      self.setActiveClass(currentTab, 'nav');
      self.tabPanelChange(currentTabID);
    }
  }, {
    key: "tabPanelChange",
    value: function tabPanelChange(index) {
      var self = this;
      if (typeof index === 'undefined') {
        return;
      }
      var currentPanelID = "".concat(self.config.data, "-").concat(index);
      var currentPanel = document.querySelector("#".concat(currentPanelID));
      self.activePanel = currentPanel;
      var currentPanelHolder = currentPanel.closest(self.config.wrapper);
      var elem = currentPanelHolder.querySelectorAll(self.config.selectors.panel);
      if (typeof currentPanel === 'undefined') {
        return;
      }
      self.clearActiveClass(elem, 'panel');
      self.setActiveClass(currentPanel, 'panel');
      self.currentIndex = index;
      self.emit('tabsChange');
    }
  }, {
    key: "getNavTabID",
    value: function getNavTabID(index) {
      var self = this;
      var dataID = index.getAttribute(self.config.data);
      return dataID;
    }
  }, {
    key: "clearActiveClass",
    value: function clearActiveClass(elem, section) {
      var self = this;
      elem.forEach(function (tab) {
        tab.classList.remove(self.config.classes.active);
        if (section === 'panel') {
          tab.setAttribute('aria-hidden', true);
        }
        if (section === 'nav') {
          tab.setAttribute('aria-selected', false);
        }
      });
    }
  }, {
    key: "setActiveClass",
    value: function setActiveClass(elem, section) {
      var self = this;
      elem.classList.add(self.config.classes.active);
      if (section === 'panel') {
        elem.setAttribute('aria-hidden', false);
      }
      if (section === 'nav') {
        elem.setAttribute('aria-selected', true);
      }
    }
  }, {
    key: "changeActiveTab",
    value: function changeActiveTab() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var self = this;
      var elems = self.items;
      var currentTab = elems[i];
      var currentSelector = currentTab.closest(self.config.wrapper);
      var elem = currentSelector.querySelectorAll(self.config.selectors.nav);
      var currentTabID = self.getNavTabID(currentTab);
      self.activeNav = currentTab;
      self.clearActiveClass(elem, 'nav');
      self.setActiveClass(currentTab, 'nav');
      self.tabPanelChange(currentTabID);
    }
  }, {
    key: "on",
    value: function on(events, callback) {
      var self = this;
      if (typeof callback !== 'function') return;
      events.split(' ').forEach(function (event, i) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event].push(callback);
      });
    }
  }, {
    key: "off",
    value: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
    }
  }, {
    key: "emit",
    value: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      //console.log(events, data, context);
      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
    }
  }, {
    key: "onSwipeStart",
    value: function onSwipeStart(e) {
      var self = this;
      e.stopPropagation();
      self.swipeStart = e.pageX || e.targetTouches[0].pageX;
    }
  }, {
    key: "onSwipeEnd",
    value: function onSwipeEnd(e) {
      var self = this;
      e.stopPropagation();
      var pageX = e.pageX || e.changedTouches[0].pageX;
      var offset;
      if (self.swipeStart) {
        offset = self.swipeStart - pageX;
        if (Math.abs(offset) > 30) {
          if (offset > 30) {
            self.nextTab();
          }
          if (offset < -30) {
            self.prevTab();
          }
        }
        self.swipeStart = null;
      }
    }
  }, {
    key: "nextTab",
    value: function nextTab() {
      var self = this;
      var items = self.items;
      var currentItem = self.currentIndex;
      var numberOfElem = self.items.length;
      var foundIndex = 0;
      var nextElem;
      items.forEach(function (item, i) {
        var itemID = self.getNavTabID(item);
        if (itemID === currentItem) {
          foundIndex = i;
        }
      });
      if (foundIndex < numberOfElem - 1) {
        self.changeActiveTab(foundIndex + 1);
      }

      // foundIndex === numberOfElem - 1 ? nextElem = 0 : nextElem = foundIndex + 1;
      // self.changeActiveTab(nextElem);
    }
  }, {
    key: "prevTab",
    value: function prevTab() {
      var self = this;
      var items = self.items;
      var currentItem = self.currentIndex;
      var numberOfElem = self.items.length;
      var foundIndex = 0;
      var prevElem;
      items.forEach(function (item, i) {
        var itemID = self.getNavTabID(item);
        if (itemID === currentItem) {
          foundIndex = i;
        }
      });
      if (foundIndex > 0) {
        self.changeActiveTab(foundIndex - 1);
      }

      // foundIndex === 0 ? prevElem = numberOfElem - 1 : prevElem = foundIndex - 1;
      // self.changeActiveTab(prevElem);
    }
  }]);
  return DSMPTabsClass;
}();
/* harmony default export */ __webpack_exports__["default"] = (DSMPTabsClass);

/***/ }),

/***/ "./assets/_src/js/library/tabs-accordions/DSMPTabsToAccordionMobile.js":
/*!*****************************************************************************!*\
  !*** ./assets/_src/js/library/tabs-accordions/DSMPTabsToAccordionMobile.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DSMPAccordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSMPAccordions */ "./assets/_src/js/library/tabs-accordions/DSMPAccordions.js");
/* harmony import */ var _DSMPTabs_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DSMPTabs-tab */ "./assets/_src/js/library/tabs-accordions/DSMPTabs-tab.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./assets/_src/js/utils/utils.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var DSMPTabToAccordionMobile = /*#__PURE__*/function () {
  function DSMPTabToAccordionMobile(selector) {
    _classCallCheck(this, DSMPTabToAccordionMobile);
    this.tabaccID = '#js-tab-acc';
    this.tabaccSelector = '.js-tabs-to-acc-wrapper';
    this.tabaccItems = document.querySelectorAll(this.tabaccSelector);
    this.tabOptions = {
      wrapper: '.js-tabs-wrapper',
      selectors: {
        nav: '.js-tabs-nav-item',
        panel: '.js-tabs-panel'
      }
    };
    this.accordionOptions = {
      selectors: {
        item: '.js-tabs-panel',
        trigger: '.js-tabs-label',
        content: '.js-ta-content'
      },
      opt: {
        close: true,
        expand: false,
        scrollToView: false
      },
      classes: {
        display: 'flex'
      },
      animation: {
        content: true
      }
    };
    this.isMobile = false;
    this.isDesktop = false;
    this.accordionInstance = null;
    this.tabInstance = null;
    if (typeof selector !== 'undefined') {
      this.tabaccID = selector;
    }
    this.init();
  }
  _createClass(DSMPTabToAccordionMobile, [{
    key: "init",
    value: function init() {
      var self = this;
      var currentWidth = window.innerWidth;
      var breakpoint = 1112;
      currentWidth < breakpoint ? this.isMobile = true : this.isDesktop = true;
      if (self.isMobile) self.buildAccordion();
      if (self.isDesktop) self.buildTab();
      window.addEventListener('resize', function () {
        self.throttleScroll();
      });
      this.throttleScroll = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.u_throttled)(function () {
        self.buildTabAccordion();
      }, 150);
      self.buildTabAccordion();
    }
  }, {
    key: "buildTabAccordion",
    value: function buildTabAccordion() {
      var self = this;
      var newWidth = window.innerWidth;
      var breakpoint = 1112;
      if (newWidth < breakpoint) {
        if (!self.isMobile) {
          if (typeof self.tabInstance !== 'undefined') {
            self.tabInstance.unbindTabNavEvent();
            self.tabInstance.unbindTabPanelEvent();
            self.tabInstance = undefined;
          }
          self.buildAccordion();
          self.isDesktop = false;
          self.isMobile = true;
        }
      } else {
        if (!self.isDesktop) {
          if (typeof self.accordionInstance !== 'undefined') {
            self.accordionInstance.accordionUnbindEvents();
            self.accordionInstance = undefined;
          }
          self.buildTab();
          self.isMobile = false;
          self.isDesktop = true;
        }
      }
    }
  }, {
    key: "buildAccordion",
    value: function buildAccordion() {
      this.parseOptions(this.tabaccID);
      this.accordionInstance = new _DSMPAccordions__WEBPACK_IMPORTED_MODULE_0__["default"](this.tabaccID, this.accordionOptions);
    }
  }, {
    key: "buildTab",
    value: function buildTab() {
      this.tabOptions.wrapper = this.tabaccID;
      this.tabInstance = new _DSMPTabs_tab__WEBPACK_IMPORTED_MODULE_1__["default"](this.tabOptions);
      this.tabInstance.changeActiveTab();
    }
  }, {
    key: "parseOptions",
    value: function parseOptions(selector) {
      var self = this;
      var wrapper = document.querySelector(selector);
      self.accordionOptions.opt.scrollToView = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_3__.u_parseBool)(wrapper.getAttribute('data-scroll-to-view')) || self.accordionOptions.opt.scrollToView;
      self.accordionOptions.classes.display = wrapper.getAttribute('data-acc-display') || self.accordionOptions.classes.display;
    }
  }]);
  return DSMPTabToAccordionMobile;
}();
/* harmony default export */ __webpack_exports__["default"] = (DSMPTabToAccordionMobile);

/***/ }),

/***/ "./assets/_src/js/utils/u_fade-in-out.js":
/*!***********************************************!*\
  !*** ./assets/_src/js/utils/u_fade-in-out.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_fadeIn: function() { return /* binding */ u_fadeIn; },
/* harmony export */   u_fadeOut: function() { return /* binding */ u_fadeOut; }
/* harmony export */ });
/**
 * https://www.ilearnjavascript.com/plainjs-fadein-fadeout/
 *
 * TODO: there are better fadeIn fadeOut scripts with animation easings
 */

// export const fadeIn = (el, displayStyle = 'block', smooth = true) => {
//     el.style.opacity = 0;
//     el.style.display = displayStyle;
//     if (smooth) {
//         let opacity = 0;
//         let request;
//
//         const animation = () => {
//             el.style.opacity = opacity += 0.04;
//             if (opacity >= 1) {
//                 opacity = 1;
//                 cancelAnimationFrame(request);
//             }
//         };
//
//         const rAf = () => {
//             request = requestAnimationFrame(rAf);
//             animation();
//         };
//         rAf();
//
//     } else {
//         el.style.opacity = 1;
//     }
// };
//
// export const fadeOut = (el, displayStyle = 'none', smooth = true ) => {
//     if (smooth) {
//         let opacity = el.style.opacity;
//         let request;
//
//         const animation = () => {
//             el.style.opacity = opacity -= 0.04;
//             if (opacity <= 0) {
//                 opacity = 0;
//                 el.style.display = displayStyle;
//                 cancelAnimationFrame(request);
//             }
//         };
//
//         const rAf = () => {
//             request = requestAnimationFrame(rAf);
//             animation();
//         };
//         rAf();
//
//     } else {
//         el.style.opacity = 0;
//     }
// };
var defaults = {
  duration: 100,
  complete: function complete() {}
};
var animateFade = function animateFade(options) {
  var start = new Date();
  var id = setInterval(function () {
    var timePassed = new Date() - start;
    var progress = timePassed / options.duration;
    if (progress > 1) {
      progress = 1;
    }
    options.progress = progress;
    var delta = options.delta(progress);
    options.step(delta);
    if (progress == 1) {
      clearInterval(id);
      if (typeof options.complete === "function") {
        options.complete();
      }
    }
  }, options.delay || 10);
};
var u_fadeIn = function u_fadeIn(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof options.duration === "undefined") {
    options.duration = defaults.duration;
  }
  var to = 0;
  animateFade({
    duration: options.duration,
    delta: function delta(progress) {
      progress = this.progress;
      return easings.swing(progress);
    },
    complete: options.complete,
    step: function step(delta) {
      element.style.opacity = to + delta;
    }
  });
};
var u_fadeOut = function u_fadeOut(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (typeof options.duration === "undefined") {
    options.duration = defaults.duration;
  }
  var to = 1;
  animateFade({
    duration: options.duration,
    delta: function delta(progress) {
      progress = this.progress;
      return easings.swing(progress);
    },
    complete: options.complete,
    step: function step(delta) {
      element.style.opacity = to - delta;
    }
  });
};
var easings = {
  linear: function linear(progress) {
    return progress;
  },
  quadratic: function quadratic(progress) {
    return Math.pow(progress, 2);
  },
  swing: function swing(progress) {
    return 0.5 - Math.cos(progress * Math.PI) / 2;
  },
  circ: function circ(progress) {
    return 1 - Math.sin(Math.acos(progress));
  },
  back: function back(progress, x) {
    return Math.pow(progress, 2) * ((x + 1) * progress - x);
  },
  bounce: function bounce(progress) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (progress >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
      }
    }
  },
  elastic: function elastic(progress, x) {
    return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
  }
};

/***/ }),

/***/ "./assets/_src/js/utils/u_object_extend.js":
/*!*************************************************!*\
  !*** ./assets/_src/js/utils/u_object_extend.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_extend: function() { return /* binding */ u_extend; },
/* harmony export */   u_extendObject: function() { return /* binding */ u_extendObject; },
/* harmony export */   u_mergeDeep: function() { return /* binding */ u_mergeDeep; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var u_extendObject = function u_extendObject(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      u_extendObject(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};
var u_extend = function u_extend(defaults, options) {
  var extendedOptions = {};
  for (var key in defaults) {
    extendedOptions[key] = options[key] || defaults[key];
  }
  return extendedOptions;
};
var u_mergeDeep = function u_mergeDeep(target, source) {
  var isObject = function isObject(obj) {
    return obj && _typeof(obj) === 'object';
  };
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(function (key) {
    var targetValue = target[key];
    var sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = u_mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
};


/***/ }),

/***/ "./assets/_src/js/utils/u_slide-up-down.js":
/*!*************************************************!*\
  !*** ./assets/_src/js/utils/u_slide-up-down.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_slideDown: function() { return /* binding */ u_slideDown; },
/* harmony export */   u_slideToggle: function() { return /* binding */ u_slideToggle; },
/* harmony export */   u_slideUp: function() { return /* binding */ u_slideUp; }
/* harmony export */ });
/* harmony import */ var _u_object_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
/* harmony import */ var _u_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u_types */ "./assets/_src/js/utils/u_types.js");
/**
 * https://github.com/janrembold/es6-slide-up-down
 *
 * usage with easings
 *
 */



var defaults = {
  duration: 250,
  easing: function easing(currentTime, startValue, diffValue, dureation) {
    return -diffValue * (currentTime /= dureation) * (currentTime - 2) + startValue;
  },
  display: 'block'
};
var directions = {
  OPEN: 1,
  CLOSE: 2
};
var u_slideUp = function u_slideUp(element) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if ((0,_u_types__WEBPACK_IMPORTED_MODULE_1__.u_isInteger)(args)) {
    args = {
      duration: args
    };
  }
  var options = (0,_u_object_extend__WEBPACK_IMPORTED_MODULE_0__.u_extend)(defaults, args);
  var displayType = options.display;
  options.direction = directions.CLOSE;
  options.to = 0;
  options.startingHeight = element.scrollHeight;
  options.distanceHeight = -options.startingHeight;
  setElementAnimationStyles(element, displayType);
  window.requestAnimationFrame(function (timestamp) {
    return animate(element, options, timestamp);
  });
};
var u_slideDown = function u_slideDown(element) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if ((0,_u_types__WEBPACK_IMPORTED_MODULE_1__.u_isInteger)(args)) {
    args = {
      duration: args
    };
  }
  element.style.height = '0px';
  var options = (0,_u_object_extend__WEBPACK_IMPORTED_MODULE_0__.u_extend)(defaults, args);
  var displayType = options.display;
  setElementAnimationStyles(element, displayType);
  options.direction = directions.OPEN;
  options.to = element.scrollHeight;
  options.startingHeight = 0;
  options.distanceHeight = options.to;
  window.requestAnimationFrame(function (timestamp) {
    return animate(element, options, timestamp);
  });
};
var animate = function animate(element, options, now) {
  if (!options.startTime) {
    options.startTime = now;
  }
  var currentTime = now - options.startTime;
  var animationContinue = currentTime < options.duration;
  var newHeight = options.easing(currentTime, options.startingHeight, options.distanceHeight, options.duration);
  if (animationContinue) {
    element.style.height = "".concat(newHeight.toFixed(2), "px");
    window.requestAnimationFrame(function (timestamp) {
      return animate(element, options, timestamp);
    });
  } else {
    if (options.direction === directions.CLOSE) {
      element.style.display = 'none';
    }
    if (options.direction === directions.OPEN) {
      element.style.display = options.display === 'flex' ? 'flex' : 'block';
    }
    removeElementAnimationStyles(element);
  }
};
var setElementAnimationStyles = function setElementAnimationStyles(element) {
  var displayType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
  element.style.display = displayType === 'flex' ? 'flex' : 'block';
  element.style.overflow = 'hidden';
  element.style.marginTop = '0';
  element.style.marginBottom = '0';
  element.style.paddingTop = '0';
  element.style.paddingBottom = '0';
};
var removeElementAnimationStyles = function removeElementAnimationStyles(element) {
  element.style.height = null;
  element.style.overflow = null;
  element.style.marginTop = null;
  element.style.marginBottom = null;
  element.style.paddingTop = null;
  element.style.paddingBottom = null;
};
var u_slideToggle = function u_slideToggle(element) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (window.getComputedStyle(element).display === 'none') {
    return u_slideDown(element, args);
  } else {
    return u_slideUp(element, args);
  }
};

/***/ }),

/***/ "./assets/_src/js/utils/u_types.js":
/*!*****************************************!*\
  !*** ./assets/_src/js/utils/u_types.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_isInteger: function() { return /* binding */ u_isInteger; },
/* harmony export */   u_isObject: function() { return /* binding */ u_isObject; },
/* harmony export */   u_parseBool: function() { return /* binding */ u_parseBool; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var u_isInteger = function u_isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }
};
var u_isObject = function u_isObject(o) {
  return _typeof(o) === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};
var u_parseBool = function u_parseBool(str) {
  // console.log(typeof str);
  // strict: JSON.parse(str)

  if (str == null) return false;
  if (typeof str === 'boolean') {
    return str === true;
  }
  if (typeof str === 'string') {
    if (str == "") return false;
    str = str.replace(/^\s+|\s+$/g, '');
    if (str.toLowerCase() == 'true' || str.toLowerCase() == 'yes') return true;
    str = str.replace(/,/g, '.');
    str = str.replace(/^\s*\-\s*/g, '-');
  }

  // var isNum = string.match(/^[0-9]+$/) != null;
  // var isNum = /^\d+$/.test(str);
  if (!isNaN(str)) return parseFloat(str) != 0;
  return false;
};


/***/ }),

/***/ "./assets/_src/js/utils/utils.js":
/*!***************************************!*\
  !*** ./assets/_src/js/utils/utils.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_debounced: function() { return /* binding */ u_debounced; },
/* harmony export */   u_throttled: function() { return /* binding */ u_throttled; }
/* harmony export */ });
var _this = undefined;
var u_debounced = function u_debounced(func, delay, immediate) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var boundFunc = func.bind.apply(func, [_this].concat(args));
    clearTimeout(timerId);
    if (immediate && !timerId) {
      boundFunc();
    }
    var calleeFunc = immediate ? function () {
      timerId = null;
    } : boundFunc;
    timerId = setTimeout(calleeFunc, delay);
  };
};
var u_throttled = function u_throttled(func, delay, immediate) {
  var timerId;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var boundFunc = func.bind.apply(func, [_this].concat(args));
    if (timerId) {
      return;
    }
    if (immediate && !timerId) {
      boundFunc();
    }
    timerId = setTimeout(function () {
      if (!immediate) {
        boundFunc();
      }
      timerId = null;
    }, delay);
  };
};


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
/*!*****************************************!*\
  !*** ./assets/_src/js/ds-accordions.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_calls_accordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function-calls/accordions */ "./assets/_src/js/function-calls/accordions.js");
/* harmony import */ var _function_calls_tabs_to_accordion_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function-calls/tabs-to-accordion-mobile */ "./assets/_src/js/function-calls/tabs-to-accordion-mobile.js");
/*
 * @title DS Accordions
 * @description Application entry point
 */



document.addEventListener('DOMContentLoaded', function () {
  (0,_function_calls_accordions__WEBPACK_IMPORTED_MODULE_0__.callAccordions)();
  (0,_function_calls_tabs_to_accordion_mobile__WEBPACK_IMPORTED_MODULE_1__.callTabAccordionsMobile)();
});
window.addEventListener('load', function () {});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZnVuY3Rpb24tY2FsbHMvYWNjb3JkaW9ucy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Z1bmN0aW9uLWNhbGxzL2FjY29yZGlvbnMvYWNjb3JkaW9ucy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Z1bmN0aW9uLWNhbGxzL3RhYnMtdG8tYWNjb3JkaW9uLW1vYmlsZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvYW5pbWF0aW9ucy9lYXNpbmdzLWVzNi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvYW5pbWF0aW9ucy9zY3JvbGwtdG8uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L3RhYnMtYWNjb3JkaW9ucy9EU01QQWNjb3JkaW9ucy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvdGFicy1hY2NvcmRpb25zL0RTTVBUYWJzLXRhYi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvdGFicy1hY2NvcmRpb25zL0RTTVBUYWJzQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L3RhYnMtYWNjb3JkaW9ucy9EU01QVGFic1RvQWNjb3JkaW9uTW9iaWxlLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV9mYWRlLWluLW91dC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3Vfb2JqZWN0X2V4dGVuZC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3Vfc2xpZGUtdXAtZG93bi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3VfdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZHMtYWNjb3JkaW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY2NvcmRpb25zIH0gZnJvbSAnLi9hY2NvcmRpb25zL2FjY29yZGlvbnMnO1xuXG5jb25zdCBjYWxsQWNjb3JkaW9ucyA9ICgpID0+IHtcbiAgICBjcmVhdGVBY2NvcmRpb25zKCk7XG59O1xuXG5leHBvcnQge1xuICAgIGNhbGxBY2NvcmRpb25zLFxufTtcbiIsImltcG9ydCBEU01QQWNjb3JkaW9ucyBmcm9tICcuLi8uLi9saWJyYXJ5L3RhYnMtYWNjb3JkaW9ucy9EU01QQWNjb3JkaW9ucyc7XG5cbmNvbnN0IGFjY29yZGlvbklEID0gJ2pzLWFjYyc7XG5jb25zdCBhY2NvcmRpb25TZWxlY3RvciA9ICcuanMtYWNjLXdyYXBwZXInO1xuY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFjY29yZGlvblNlbGVjdG9yKTtcblxuY29uc3QgY3JlYXRlQWNjb3JkaW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBhY2NvcmRpb25zID0gW107XG5cbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKChhY2MsIGkpID0+IHtcbiAgICAgICAgbGV0IGFjY0lEID0gYCR7YWNjb3JkaW9uSUR9LSR7aX1gO1xuICAgICAgICBsZXQgY2FsbElEID0gYCMke2FjY0lEfWA7XG4gICAgICAgIGFjYy5zZXRBdHRyaWJ1dGUoJ2lkJywgYWNjSUQpO1xuXG4gICAgICAgIGFjY29yZGlvbnNbaV0gPSBuZXcgRFNNUEFjY29yZGlvbnMoY2FsbElEKTtcblxuICAgICAgICAvL1VuY29tbWVudCBpZiBhbiBldmVudCBpcyBuZWVkZWQgdG8gcmUgaW5pdCBhY2NvcmRpb25zLCBleDogd2hlbiB1c2luZyBsb2FkIG1vcmUgZm9yIGZhcXNcbiAgICAgICAgLy8gYWNjLmFkZEV2ZW50TGlzdGVuZXIoJ3JlLWluaXQnLCBldmVudCA9PiB7XG4gICAgICAgIC8vICAgICBhY2NvcmRpb25zW2ldLnJlSW5pdCgpO1xuICAgICAgICAvLyB9KVxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVBY2NvcmRpb25zLFxufTtcbiIsImltcG9ydCBEU01QVGFiVG9BY2NvcmRpb25Nb2JpbGUgZnJvbSAnLi4vbGlicmFyeS90YWJzLWFjY29yZGlvbnMvRFNNUFRhYnNUb0FjY29yZGlvbk1vYmlsZSc7XG5cbmNvbnN0IHRhYmFjY0lEID0gJ2pzLXRhYi1hY2MnO1xuY29uc3QgdGFiYWNjU2VsZWN0b3IgPSAnLmpzLXRhYnMtdG8tYWNjLXdyYXBwZXInO1xuY29uc3QgdGFiYWNjSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhYmFjY1NlbGVjdG9yKTtcblxuY29uc3QgY2FsbFRhYkFjY29yZGlvbnNNb2JpbGUgPSAoKSA9PiB7XG5cbiAgICB0YWJhY2NJdGVtcy5mb3JFYWNoKCAoYWNjLCBpKSA9PiB7XG4gICAgICAgIGxldCB0YUlEID0gYCR7dGFiYWNjSUR9LSR7aX1gO1xuICAgICAgICBsZXQgY2FsbElEID0gYCMke3RhSUR9YDtcbiAgICAgICAgYWNjLnNldEF0dHJpYnV0ZSgnaWQnLCB0YUlEKTtcblxuICAgICAgICBuZXcgRFNNUFRhYlRvQWNjb3JkaW9uTW9iaWxlKGNhbGxJRCk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IHtcbiAgICBjYWxsVGFiQWNjb3JkaW9uc01vYmlsZVxufSIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2phbnJlbWJvbGQvZXM2LWVhc2luZ3NcbiAqXG4gKiB1c2FnZSA6IGltcG9ydCB7ZWFzZUluT3V0UXVhZH0gZnJvbSAnZWFzaW5ncyc7XG4gKi9cblxuZXhwb3J0IGNvbnN0IGVhc2VPdXRRdWFkID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5RdWFkID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dFF1YWQgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIC1jIC8gMiAqICgoLS10KSAqICh0IC0gMikgLSAxKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbkN1YmljID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlT3V0Q3ViaWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXRDdWJpYyA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpXG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJblF1YXJ0ID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dFF1YXJ0ID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXRRdWFydCA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpXG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJblF1aW50ID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VPdXRRdWludCA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0ICogdCArIDEpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluT3V0UXVpbnQgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluU2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGMgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlT3V0U2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluT3V0U2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5FeHBvID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gKHQgPT0gMCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEV4cG8gPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHJldHVybiAodCA9PSBkKSA/IGIgKyBjIDogYyAqICgtTWF0aC5wb3coMiwgLTEwICogdCAvIGQpICsgMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXRFeHBvID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICBpZiAodCA9PSAwKVxuICAgICAgICByZXR1cm4gYjtcbiAgICBpZiAodCA9PSBkKVxuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpXG4gICAgICAgIHJldHVybiBjIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xuICAgIHJldHVybiBjIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluQ2lyYyA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dENpcmMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dENpcmMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgIHJldHVybiBjIC8gMiAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbkVsYXN0aWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApXG4gICAgICAgIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkKSA9PSAxKVxuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKVxuICAgICAgICBwID0gZCAqIC4zO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgYSA9IGM7XG4gICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEVsYXN0aWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApXG4gICAgICAgIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkKSA9PSAxKVxuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKVxuICAgICAgICBwID0gZCAqIC4zO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgYSA9IGM7XG4gICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgYyArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dEVsYXN0aWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApXG4gICAgICAgIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkIC8gMikgPT0gMilcbiAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgIGlmICghcClcbiAgICAgICAgcCA9IGQgKiAoLjMgKiAxLjUpO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgYSA9IGM7XG4gICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgaWYgKHQgPCAxKVxuICAgICAgICByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbkJhY2sgPSAodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEJhY2sgPSAodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpID0+IHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dEJhY2sgPSAodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpID0+IHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCAtIHMpKSArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluQm91bmNlID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAtIGVhc2VPdXRCb3VuY2UoZCAtIHQsIDAsIGMsIGQpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEJvdW5jZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgaWYgKCh0IC89IGQpIDwgKDEgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMS41IC8gMi43NSkpICogdCArIC43NSkgKyBiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgyLjI1IC8gMi43NSkpICogdCArIC45Mzc1KSArIGI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMi42MjUgLyAyLjc1KSkgKiB0ICsgLjk4NDM3NSkgKyBiO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZWFzZUluT3V0Qm91bmNlID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICBpZiAodCA8IGQgLyAyKVxuICAgICAgICByZXR1cm4gZWFzZUluQm91bmNlKHQgKiAyLCAwLCBjLCBkKSAqIC41ICsgYjtcbiAgICByZXR1cm4gZWFzZU91dEJvdW5jZSh0ICogMiAtIGQsIDAsIGMsIGQpICogLjUgKyBjICogLjUgKyBiO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogVE9ETzogcmV3b3JrIGl0IHRvIHVzZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjE0NzQ2Nzgvc2Nyb2xsdG9wLWFuaW1hdGlvbi13aXRob3V0LWpxdWVyeVxuICpcbiAqIHRha2VuIGZyb21cbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2FuZGpvc2gvNjc2NDkzOVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL3Nrcm9sbFRvcC5qcy9ibG9iL21hc3Rlci9za3JvbGxUb3AuanNcbiAqXG4gKi9cbk1hdGguZWFzZUluT3V0Q3ViaWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xuICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQgKyBiO3JldHVybiBjLzIqKCh0LT0yKSp0KnQgKyAyKSArIGI7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9VdGlsID0gKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gdHlwZW9mIHBhcmFtcy5lbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5lbGVtZW50IDogd2luZG93O1xuICAgIGxldCB0byA9IHBhcmFtcy50bztcbiAgICBsZXQgZHVyYXRpb24gPSB0eXBlb2YgcGFyYW1zLmR1cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5kdXJhdGlvbiA6IDI1MDtcbiAgICBsZXQgY2FsbGJhY2sgPSB0eXBlb2YgcGFyYW1zLmNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5jYWxsYmFjayA6IG51bGw7XG4gICAgbGV0IGVhc2luZyA9IHR5cGVvZiBwYXJhbXMuZWFzaW5nICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5lYXNpbmcgOiBNYXRoLmVhc2VJbk91dEN1YmljO1xuXG4gICAgbGV0IHN0YXJ0ID0gZWxlbWVudCE9PXdpbmRvdyA/IGVsZW1lbnQuc2Nyb2xsVG9wIDogKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcbiAgICBsZXQgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgICBsZXQgY3VycmVudFRpbWUgPSAwO1xuICAgIGxldCBpbmNyZW1lbnQgPSAxNjsgLy9zYW1lIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgYXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cbiAgICBjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuXG4gICAgICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICAgICAgdmFyIGVhc2luZ1ZhbHVlID0gZHVyYXRpb24gPyBlYXNpbmcoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKSA6IHRvO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvKDAsIGVhc2luZ1ZhbHVlKTtcblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dChhbmltYXRlU2Nyb2xsLCBpbmNyZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYW5pbWF0ZVNjcm9sbCgpO1xufTtcbiIsImltcG9ydCB7IHVfZXh0ZW5kT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdV9vYmplY3RfZXh0ZW5kJztcbmltcG9ydCB7IHVfc2xpZGVEb3duLCB1X3NsaWRlVXAgfSBmcm9tICcuLi8uLi91dGlscy91X3NsaWRlLXVwLWRvd24nO1xuaW1wb3J0IHsgdV9mYWRlSW4sIHVfZmFkZU91dCB9IGZyb20gJy4uLy4uL3V0aWxzL3VfZmFkZS1pbi1vdXQnO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tICcuLi8uLi91dGlscy91X3R5cGVzJztcbmltcG9ydCB7IHNjcm9sbFRvVXRpbCB9IGZyb20gJy4uL2FuaW1hdGlvbnMvc2Nyb2xsLXRvJztcbmltcG9ydCB7IGVhc2VJblF1YWQgfSBmcm9tICcuLi9hbmltYXRpb25zL2Vhc2luZ3MtZXM2JztcblxuY2xhc3MgRFNNUEFjY29yZGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIGRlZmF1bHQgd3JhcHBlciB2YWx1ZVxuICAgICAgICB0aGlzLndyYXBwZXIgPSAnLmpzLWFjYy13cmFwcGVyJztcblxuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgaXRlbTogJy5qcy1hY2MtaXRlbScsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy5qcy1hY2MtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnLmpzLWFjYy1jb250ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnLmpzLWFjYy1nYWxsZXJ5JyxcbiAgICAgICAgICAgICAgICBpdGVtOiAnLmpzLWFjYy1tZWRpYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgICAgZm9jdXM6ICdmb2N1cycsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0cnVlLCAvLyB0cnVlOiB1c2UganMgLCBmYWxzZTogdXNlIGNzc1xuICAgICAgICAgICAgICAgIGdhbGxlcnk6IGZhbHNlLCAvLyB0cnVlOiB1c2UganMgLCBmYWxzZTogdXNlIGNzc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2RhdGEtY2xvc2UnLFxuICAgICAgICAgICAgICAgIG9wZW46ICdkYXRhLWV4cGFuZCcsXG4gICAgICAgICAgICAgICAgZ2FsbGVyeTogJ2RhdGEtZ2FsbGVyeScsXG4gICAgICAgICAgICAgICAgc3RhcnRDbG9zZWQ6ICdkYXRhLXN0YXJ0LWNsb3NlZCcsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udGVudDogJ2RhdGEtYW5pbWF0aW9uJyxcbiAgICAgICAgICAgICAgICBhbmltYXRpb25HYWxsZXJ5OiAnZGF0YS1nYWxsZXJ5LWFuaW1hdGlvbicsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2RhdGEtYWNjLWRpc3BsYXknLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvVmlldzogJ2RhdGEtc2Nyb2xsLXRvLXZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdDoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBleHBhbmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhc0dhbGxlcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2xvc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1ZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFyaWE6IHtcbiAgICAgICAgICAgICAgICBidXR0b246ICdoZWFkZXInLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjb250ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYnJlYWtwb2ludHM6IHtcbiAgICAgICAgLy8gICAgIHRhYmxldDogMTExMyxcbiAgICAgICAgLy8gICAgICAgICBtb2JpbGU6IDc2OSxcbiAgICAgICAgLy8gfSxcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHVfZXh0ZW5kT2JqZWN0KHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgY2hhbmdlZCBzZWxlY3RvclxuICAgICAgICBpZih0eXBlb2Ygc2VsZWN0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IG5hbWUgdG8gdXNlIGZvciBhcmlhIGlkJ3MgYW5kIGNvbnRyb2xzXG4gICAgICAgIHRoaXMuZ2V0QXJpYU5hbWUoKTtcblxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLndyYXBwZXIpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRzTGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zaG91bGRTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMTEzcHgpJyk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vcHQuc2Nyb2xsVG9WaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNob3VsZFNjcm9sbCA9IHRoaXMubXFsLm1hdGNoZXM7XG5cbiAgICAgICAgICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRTY3JvbGwgPSBlLm1hdGNoZXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IHRoaXMuc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5zZWxlY3RvcnMudHJpZ2dlcik7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuc2VsZWN0b3JzLml0ZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vcHQuaGFzR2FsbGVyeSkge1xuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5SXRlbXMgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuZ2FsbGVyeS5pdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFycmF5IGZvciBzdGFzaGluZyByZWZlcmVuY2UgdG8gYmluZGVkIGV2ZW50c1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkQXJpYSgpO1xuICAgICAgICB0aGlzLnByZXBhcmVGb3JBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25CaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVJbml0KCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvblVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuc2VsZWN0b3JzLnRyaWdnZXIpO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5zZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnNlbGVjdG9ycy5pdGVtKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFkZEFyaWEoKTtcbiAgICAgICAgdGhpcy5yZUluaXRBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25CaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goKGV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybjtcbiAgICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgICAgICBsZXQgZXZlbnRzO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgICAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICAgICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50cywgZGF0YSwgY29udGV4dCk7XG4gICAgICAgIGRhdGEudW5zaGlmdChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcblxuICAgICAgICBldmVudHNBcnJheS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChldmVudEhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhY2NvcmRpb25CaW5kRXZlbnRzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBlbGVtID0gc2VsZi50cmlnZ2VyO1xuXG4gICAgICAgIHNlbGYuYWRkTGlzdGVuZXJGb2N1cyA9IHNlbGYuYWRkTGlzdGVuZXJGb2N1cy5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLmFkZExpc3RlbmVyQmx1ciA9IHNlbGYuYWRkTGlzdGVuZXJCbHVyLmJpbmQoc2VsZik7XG4gICAgICAgIHNlbGYuYWRkS2V5TGlzdGVuZXIgPSBzZWxmLmFkZEtleUxpc3RlbmVyLmJpbmQoc2VsZik7XG5cbiAgICAgICAgc2VsZi5vbiA9IHNlbGYub24uYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5vZmYgPSBzZWxmLm9mZi5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLmVtaXQgPSBzZWxmLmVtaXQuYmluZChzZWxmKTtcblxuICAgICAgICBlbGVtLmZvckVhY2goKGFjYywgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJGdW5jID0gc2VsZi5hY2NvcmRpb25OYXZDbGljay5iaW5kKHNlbGYsIGkpO1xuICAgICAgICAgICAgc2VsZi5oYW5kbGVycy5wdXNoKGhhbmRsZXJGdW5jKTtcbiAgICAgICAgICAgIGFjYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXJGdW5jLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBhY2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBzZWxmLmFkZExpc3RlbmVyRm9jdXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGFjYy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgc2VsZi5hZGRMaXN0ZW5lckJsdXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgYWNjb3JkaW9uID0gc2VsZi5zZWxlY3RvcjtcbiAgICAgICAgYWNjb3JkaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWxmLmFkZEtleUxpc3RlbmVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgYWNjb3JkaW9uVW5iaW5kRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbSA9IHNlbGYudHJpZ2dlcjtcblxuICAgICAgICBlbGVtLmZvckVhY2goKGFjYywgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1QYXJlbnQgPSBhY2MuY2xvc2VzdChzZWxmLmNvbmZpZy5zZWxlY3RvcnMuaXRlbSk7XG4gICAgICAgICAgICBsZXQgZWxlbUNvbnRlbnQgPSBlbGVtUGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY29udHJvbCwgaGVhZGVyO1xuICAgICAgICAgICAgaWYoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbCA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmNvbnRlbnR9LSR7aX1gO1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmJ1dHRvbn0tJHtpfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjYy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnJyk7XG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWNjLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsICcnKTtcbiAgICAgICAgICAgICAgICBhY2MucmVtb3ZlQXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYuaGFuZGxlcnNbaV0pO1xuICAgICAgICAgICAgYWNjLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgc2VsZi5hZGRMaXN0ZW5lckZvY3VzKTtcbiAgICAgICAgICAgIGFjYy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgc2VsZi5hZGRMaXN0ZW5lckJsdXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWNjb3JkaW9uID0gc2VsZi5zZWxlY3RvcjtcbiAgICAgICAgYWNjb3JkaW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWxmLmFkZEtleUxpc3RlbmVyKTtcbiAgICAgICAgc2VsZi5yZW1vdmVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBhY2NvcmRpb25OYXZDbGljayhpLCBldikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtQ2xpY2tlZCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgc2VsZi5hY2NvcmRpb25Db250ZW50Y2hhbmdlKGksIGN1cnJlbnRJdGVtQ2xpY2tlZCwgZXYpO1xuXG4gICAgfVxuXG4gICAgYWNjb3JkaW9uQ29udGVudGNoYW5nZShpLCBlbGVtLCBldikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjdXJyZW50SXRlbUNsaWNrZWQgPSBlbGVtO1xuICAgICAgICBjb25zdCBlbGVtcyA9IHNlbGYuaXRlbXM7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBjdXJyZW50SXRlbUNsaWNrZWQuY2xvc2VzdChzZWxmLmNvbmZpZy5zZWxlY3RvcnMuaXRlbSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtQ29udGVudCA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IGN1cnJlbnRJdGVtQ2xpY2tlZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcub3B0LmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHVfc2xpZGVVcChjdXJyZW50SXRlbUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtQ2xpY2tlZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAhZXhwYW5kZWQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZXhwYW5kZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5vcHQuZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1UcmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9ycy50cmlnZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVfc2xpZGVVcChpdGVtQ29udGVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB1X3NsaWRlRG93bihjdXJyZW50SXRlbUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1DbGlja2VkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1Db250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBleHBhbmRlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB1X3NsaWRlRG93bihjdXJyZW50SXRlbUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1DbGlja2VkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1Db250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBleHBhbmRlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5vcHQuaGFzR2FsbGVyeSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWNjb3JkaW9uQ2hhbmdlR2FsbGVyeShpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuc2hvdWxkU2Nyb2xsICYmIHNlbGYuY3VycmVudEluZGV4IDwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2Nyb2xsVG9BY2NvcmRpb24oaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2aW91c0luZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaTtcblxuICAgICAgICBzZWxmLmVtaXQoJ2FjY29yZGlvbkNoYW5nZScsIGV2KTtcbiAgICB9XG5cbiAgICBuZXh0QWNjb3JkaW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG5leHRFbGVtID0gc2VsZi5jdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRWxlbSA9IHNlbGYuaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIG5leHRFbGVtID09PSBudW1iZXJPZkVsZW0gLSAxID8gbmV4dEVsZW0gPSAwIDogbmV4dEVsZW0gKz0gMTtcbiAgICAgICAgY29uc3QgbmV4dEVsZW1JdGVtID0gc2VsZi5pdGVtc1tuZXh0RWxlbV07XG5cbiAgICAgICAgc2VsZi5hY2NvcmRpb25Db250ZW50Y2hhbmdlKG5leHRFbGVtLCBuZXh0RWxlbUl0ZW0sIG51bGwpO1xuICAgIH1cblxuICAgIHByZXZBY2NvcmRpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcHJldkVsZW0gPSBzZWxmLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZFbGVtID0gc2VsZi5pdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgcHJldkVsZW0gPT09IDAgPyBwcmV2RWxlbSA9IG51bWJlck9mRWxlbSAtIDEgOiBwcmV2RWxlbSAtPSAxO1xuICAgICAgICBjb25zdCBwcmV2RWxlbUl0ZW0gPSBzZWxmLml0ZW1zW3ByZXZFbGVtXTtcblxuICAgICAgICBzZWxmLmFjY29yZGlvbkNvbnRlbnRjaGFuZ2UocHJldkVsZW0sIHByZXZFbGVtSXRlbSwgbnVsbCk7XG4gICAgfVxuXG4gICAgYWNjb3JkaW9uQ2hhbmdlR2FsbGVyeShpKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGdhbGxlcnlJdGVtcyA9IFsuLi5zZWxmLmdhbGxlcnlJdGVtc107XG5cbiAgICAgICAgZ2FsbGVyeUl0ZW1zLmZvckVhY2goKGdhbGxlcnkpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5nYWxsZXJ5KSB7XG4gICAgICAgICAgICAgICAgdV9mYWRlT3V0KGdhbGxlcnksIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGdhbGxlcnlJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVfZmFkZUluKG5ld0l0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZighc2VsZi5jb25maWcuYW5pbWF0aW9uLmdhbGxlcnkpIHtcbiAgICAgICAgICAgIGdhbGxlcnlJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJlcGFyZUZvckFuaW1hdGlvbigpIHtcbiAgICAgICAgLyogY2hlY2sgd2hldGhlciBpdGVtcyBjb250YWlucyBpcy1hY3RpdmUgY2xhc3MsIGlmIGl0cyBub3Qgc3RhcnQgY2xvc2VkIGFsbCxcbiAgICAgICAgZmlyc3QgaXRlbSBzaG91bGQgaGF2ZSBpcy1hY3RpdmUgY2xhc3MgYW5kIGl0cyBjb250ZW50IHNob3VsZCBiZSBzZXQgdG9cbiAgICAgICAgZGlzcGxheSBibG9jayAvIGZsZXgsIG90aGVyd2lzZSwgaGlkZSBpdFxuICAgICAgICAqL1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpdGVtcyA9IHNlbGYuaXRlbXM7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGFjdGl2ZUZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50KSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChsaXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBsaXN0LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLm9wdC5zdGFydENsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Db250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVGb3VuZCAmJiAhc2VsZi5jb25maWcub3B0LnN0YXJ0Q2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTBDb250ZW50ID0gaXRlbXNbMF0ucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbMF0uY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgaXRlbTBDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLmNvbmZpZy5jbGFzc2VzLmRpc3BsYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZUluaXRBbmltYXRpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGl0ZW1zID0gc2VsZi5pdGVtcztcblxuICAgICAgICBpZihzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgobGlzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtQ29udGVudCA9IGxpc3QucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVTdHlsZXMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGl0ZW1zID0gc2VsZi5pdGVtcztcblxuICAgICAgICBpZihzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChsaXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Db250ZW50ID0gbGlzdC5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9ycy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBpdGVtQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBpc1NlbGZDbG9zZSA9IHVfcGFyc2VCb29sKHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuY2xvc2UpKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub3B0LmNsb3NlO1xuICAgICAgICBpZiAoaXNTZWxmQ2xvc2UpIHtcbiAgICAgICAgICAgIGlzU2VsZkNsb3NlID8gc2VsZi5jb25maWcub3B0LmNsb3NlID0gdHJ1ZSA6IHNlbGYuY29uZmlnLm9wdC5jbG9zZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIGxlYXZlIG9wZW4gaXMgdHJ1ZSwgc2VsZiBjbG9zZSBzaG91bGQgYXV0b21hdGljYWxseSBiZSB0cnVlLFxuICAgICAgICAgKiBvdGhlcndpc2Ugd2Ugd29udCBiZSBhYmxlIHRvIGNsb3NlIG9uIHNlbGYgY2xpY2tcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uc3QgaXNMZWF2ZU9wZW4gPSB1X3BhcnNlQm9vbChzZWxmLnNlbGVjdG9yLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5hdHRyLm9wZW4pKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub3B0LmV4cGFuZDtcblxuICAgICAgICBpZiAoaXNMZWF2ZU9wZW4pIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5leHBhbmQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LmNsb3NlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5leHBhbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhcnRDbG9zZWQgPSB1X3BhcnNlQm9vbChzZWxmLnNlbGVjdG9yLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5hdHRyLnN0YXJ0Q2xvc2VkKSlcbiAgICAgICAgICAgIHx8IHNlbGYuY29uZmlnLm9wdC5zdGFydENsb3NlZDtcblxuICAgICAgICBpZiAoaXNTdGFydENsb3NlZCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LnN0YXJ0Q2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5jbG9zZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0dhbGxlcnkgPSB1X3BhcnNlQm9vbChzZWxmLnNlbGVjdG9yLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5hdHRyLmdhbGxlcnkpKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub3B0Lmhhc0dhbGxlcnk7XG4gICAgICAgIGlmIChpc0dhbGxlcnkpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5oYXNHYWxsZXJ5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBnYWxsZXJ5LCBzZWxmIGNsb3NlIGFuZCBleHBhbmQgaXMgYnkgZGVmYXVsdCBvZmZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5leHBhbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5jbG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LnN0YXJ0Q2xvc2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltYXRlQ29udGVudCA9IHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuYW5pbWF0aW9uQ29udGVudCk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGVDb250ZW50KSB7XG4gICAgICAgICAgICBhbmltYXRlQ29udGVudCA9PT0gJ2pzJyA/IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50ID0gdHJ1ZSA6IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltYXRlR2FsbGVyeSA9IHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuYW5pbWF0aW9uR2FsbGVyeSk7XG4gICAgICAgIGlmIChhbmltYXRlR2FsbGVyeSkge1xuICAgICAgICAgICAgYW5pbWF0ZUdhbGxlcnkgPT09ICdqcycgPyBzZWxmLmNvbmZpZy5hbmltYXRpb24uZ2FsbGVyeSA9IHRydWUgOiBzZWxmLmNvbmZpZy5hbmltYXRpb24uZ2FsbGVyeSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuZGlzcGxheSlcbiAgICAgICAgICAgIHx8IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheTtcbiAgICAgICAgc2VsZi5jb25maWcuY2xhc3Nlcy5kaXNwbGF5ID0gZGlzcGxheSA9PT0gJ2ZsZXgnID8gJ2ZsZXgnIDogJ2Jsb2NrJztcblxuICAgICAgICBjb25zdCBpc1Njcm9sbFRvVmlldyA9IHVfcGFyc2VCb29sKFxuICAgICAgICAgICAgc2VsZi5zZWxlY3Rvci5nZXRBdHRyaWJ1dGUoc2VsZi5jb25maWcuYXR0ci5zY3JvbGxUb1ZpZXcpLFxuICAgICAgICApIHx8IHNlbGYuY29uZmlnLm9wdC5zY3JvbGxUb1ZpZXc7XG4gICAgICAgIGlmIChpc1Njcm9sbFRvVmlldykge1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LnNjcm9sbFRvVmlldyA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5vcHQuZXhwYW5kID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmVtaXQoJ29wdGlvbnNQYXJzZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzbWFsbCBmdW5jdGlvbiB0byBjaGVjayBmb3IgdmFsaWQgSUQgb2Ygd3JhcHBlclxuICAgIGlzVmFsaWRJZChzKSB7XG4gICAgICAgIHJldHVybiAvXlteXFxzXSskLy50ZXN0KHMpO1xuICAgIH1cblxuICAgIGdldEFyaWFOYW1lKCkge1xuICAgICAgICBsZXQgYXJpYU5hbWUgPSB0aGlzLndyYXBwZXIuc2xpY2UoMSk7XG4gICAgICAgIGlmKHRoaXMuaXNWYWxpZElkKGFyaWFOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuYXJpYS5uYW1lID0gYXJpYU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hcmlhLm5hbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEFyaWEoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi50cmlnZ2VyO1xuXG4gICAgICAgIGVsZW0uZm9yRWFjaCgoYWNjLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtUGFyZW50ID0gYWNjLmNsb3Nlc3Qoc2VsZi5jb25maWcuc2VsZWN0b3JzLml0ZW0pO1xuICAgICAgICAgICAgY29uc3QgZWxlbUNvbnRlbnQgPSBlbGVtUGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY29udHJvbCxcbiAgICAgICAgICAgICAgICBoZWFkZXI7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbCA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmNvbnRlbnR9LSR7aX1gO1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmJ1dHRvbn0tJHtpfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtUGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1Db250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1Db250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgIGFjYy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGhlYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncmVnaW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVyRm9jdXMoZXYpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZWxlbSA9IGV2LnRhcmdldDtcblxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5mb2N1cyk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJCbHVyKGV2KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGVsZW0gPSBldi50YXJnZXQ7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmZvY3VzKTtcbiAgICB9XG5cbiAgICBhZGRLZXlMaXN0ZW5lcihldikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBlbGVtID0gZXYudGFyZ2V0O1xuICAgICAgICBsZXQga2V5ID0gZXYud2hpY2gudG9TdHJpbmcoKTtcblxuICAgICAgICBsZXQgdHJpZ2dlcnMgPSBbLi4uc2VsZi50cmlnZ2VyXTtcblxuICAgICAgICBsZXQgdHJpZ2dlckNsYXNzID0gc2VsZi5jb25maWcuc2VsZWN0b3JzLnRyaWdnZXIuc2xpY2UoMSk7XG5cbiAgICAgICAgLy8gMzMgPSBQYWdlIFVwLCAzNCA9IFBhZ2UgRG93blxuICAgICAgICBsZXQgY3RybE1vZGlmaWVyID0gKGV2LmN0cmxLZXkgJiYga2V5Lm1hdGNoKC8zM3wzNC8pKTtcblxuICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnModHJpZ2dlckNsYXNzKSkge1xuICAgICAgICAgICAgLy8gVXAvIERvd24gYXJyb3cgYW5kIENvbnRyb2wgKyBQYWdlIFVwLyBQYWdlIERvd24ga2V5Ym9hcmQgb3BlcmF0aW9uc1xuICAgICAgICAgICAgLy8gMzggPSBVcCwgNDAgPSBEb3duXG4gICAgICAgICAgICBpZiAoa2V5Lm1hdGNoKC8zOHw0MC8pIHx8IGN0cmxNb2RpZmllcikge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyaWdnZXJzLmluZGV4T2YoZWxlbSk7XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IChrZXkubWF0Y2goLzM0fDQwLykpID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSB0cmlnZ2Vycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gKGluZGV4ICsgbGVuZ3RoICsgZGlyZWN0aW9uKSAlIGxlbmd0aDtcbiAgICAgICAgICAgICAgICB0cmlnZ2Vyc1tuZXdJbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5tYXRjaCgvMzV8MzYvKSkge1xuICAgICAgICAgICAgICAgIC8vIDM1ID0gRW5kLCAzNiA9IEhvbWUga2V5Ym9hcmQgb3BlcmF0aW9uc1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRvIGZpcnN0IGFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICBjYXNlICczNic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vyc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRvIGxhc3QgYWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzM1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzW3RyaWdnZXJzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb0FjY29yZGlvbihjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBzZWxmLnRyaWdnZXJbMF07XG4gICAgICAgIGNvbnN0IHNjcm9sbEN1cnJlbnRDb250ZW50ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZWxlbUhlaWdodCA9IHNjcm9sbEN1cnJlbnRDb250ZW50LmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbUhlaWdodCAqIGN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvID0gc2Nyb2xsQ3VycmVudENvbnRlbnQudG9wICsgY3VycmVudFNjcm9sbFBvcyArIG9mZnNldCAtIDgwO1xuXG4gICAgICAgIHNjcm9sbFRvVXRpbCh7XG4gICAgICAgICAgICB0bzogc2Nyb2xsVG8sXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlSW5RdWFkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRFNNUEFjY29yZGlvbnM7IiwiaW1wb3J0IERTTVBUYWJzQ2xhc3MgZnJvbSAnLi9EU01QVGFic0NsYXNzJztcbmltcG9ydCB7IHVfZXh0ZW5kT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdV9vYmplY3RfZXh0ZW5kJztcblxuY2xhc3MgRFNNUFRhYnNUYWIgZXh0ZW5kcyBEU01QVGFic0NsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHdyYXBwZXI6ICcuanMtdGFicy13cmFwcGVyJyxcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgICAgICAgIG5hdjogJy5qcy10YWJzLW5hdi1pdGVtJyxcbiAgICAgICAgICAgICAgICBwYW5lbDogJy5qcy10YWJzLXBhbmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiAnZGF0YS10YWInLFxuICAgICAgICAgICAgYnJlYWtwb2ludHM6ICd0YWJsZXQnLCAvLyB0YWJsZXQsIGRlc2t0b3AsIGRlc2t0b3AtbCwgYWxsLCAgbGVhdmUgZW1wdHkgZm9yIGRpc2FibGVkXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSB1X2V4dGVuZE9iamVjdCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gYCR7dGhpcy5jb25maWcud3JhcHBlcn0gJHt0aGlzLmNvbmZpZy5zZWxlY3RvcnMubmF2fWA7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JQYW5lbHMgPSBgJHt0aGlzLmNvbmZpZy53cmFwcGVyfSAke3RoaXMuY29uZmlnLnNlbGVjdG9ycy5wYW5lbH1gO1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvclBhbmVscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmJyZWFrcG9pbnRzW3RoaXMuY29uZmlnLmJyZWFrcG9pbnRzXX1weClgKTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFNYXRjaCA9IHRoaXMubXFsLm1hdGNoZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhTWF0Y2ggPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gc3VwZXIuZ2V0TmF2VGFiSUQodGhpcy5pdGVtc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuYmluZEZ1bmN0aW9ucygpO1xuICAgICAgICBzdXBlci5iaW5kVGFiTmF2RXZlbnQoKTtcbiAgICAgICAgc3VwZXIuYmluZFRhYlBhbmVsRXZlbnQoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRFNNUFRhYnNUYWI7XG4iLCJjbGFzcyBEU01QVGFic0NsYXNzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50c0xpc3RlbmVycyA9IHt9O1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuYWN0aXZlTmF2ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVQYW5lbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5icmVha3BvaW50cyA9IHtcbiAgICAgICAgICAgIHRhYmxldDogNzY4LFxuICAgICAgICAgICAgZGVza3RvcDogMTExMixcbiAgICAgICAgICAgICdkZXNrdG9wLWwnOiAxNDQwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGJpbmRGdW5jdGlvbnMoKSB7XG4gICAgICAgIHRoaXMudGFiTmF2Q2xpY2sgPSB0aGlzLnRhYk5hdkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubWVkaWFNYXRjaGVzID0gdGhpcy5tZWRpYU1hdGNoZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblN3aXBlU3RhcnQgPSB0aGlzLm9uU3dpcGVTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU3dpcGVFbmQgPSB0aGlzLm9uU3dpcGVFbmQuYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYnJlYWtwb2ludHMgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1lZGlhTWF0Y2hlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYU1hdGNoZXMoZSkge1xuICAgICAgICB0aGlzLm1lZGlhTWF0Y2ggPSBlLm1hdGNoZXM7XG5cbiAgICAgICAgaWYgKHRoaXMubWVkaWFNYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kVGFiUGFuZWxFdmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRUYWJQYW5lbEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kVGFiTmF2RXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcblxuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi50YWJOYXZDbGljaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kVGFiUGFuZWxFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgcGFuZWxzIH0gPSBzZWxmO1xuXG4gICAgICAgIGlmIChzZWxmLm1lZGlhTWF0Y2gpIHtcbiAgICAgICAgICAgIHBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgICAgICBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2VsZi5vblN3aXBlU3RhcnQpO1xuICAgICAgICAgICAgICAgIHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzZWxmLm9uU3dpcGVFbmQpO1xuICAgICAgICAgICAgICAgIHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kVGFiUGFuZWxFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgcGFuZWxzIH0gPSBzZWxmO1xuXG4gICAgICAgIHBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgICAgICAgICAgcGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZi5vblN3aXBlU3RhcnQpO1xuICAgICAgICAgICAgcGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzZWxmLm9uU3dpcGVFbmQpO1xuICAgICAgICAgICAgcGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzZWxmLm9uU3dpcGVFbmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmJpbmRUYWJOYXZFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBzZWxmLml0ZW1zO1xuICAgICAgICBjb25zdCB7IHBhbmVscyB9ID0gc2VsZjtcblxuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi50YWJOYXZDbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgICAgICAgICAgcGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2VsZi5vblN3aXBlU3RhcnQpO1xuICAgICAgICAgICAgcGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzZWxmLm9uU3dpcGVFbmQpO1xuICAgICAgICAgICAgcGFuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzZWxmLm9uU3dpcGVFbmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYnJlYWtwb2ludHMgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICBzZWxmLm1xbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZWxmLm1lZGlhTWF0Y2hlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWJOYXZDbGljayhldikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIHNlbGYuYWN0aXZlTmF2ID0gZXYuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdG9yID0gY3VycmVudFRhYi5jbG9zZXN0KHNlbGYuY29uZmlnLndyYXBwZXIpO1xuICAgICAgICBjb25zdCBlbGVtID0gY3VycmVudFNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZi5jb25maWcuc2VsZWN0b3JzLm5hdik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJRCA9IHNlbGYuZ2V0TmF2VGFiSUQoY3VycmVudFRhYik7XG5cbiAgICAgICAgc2VsZi5jbGVhckFjdGl2ZUNsYXNzKGVsZW0sICduYXYnKTtcbiAgICAgICAgc2VsZi5zZXRBY3RpdmVDbGFzcyhjdXJyZW50VGFiLCAnbmF2Jyk7XG4gICAgICAgIHNlbGYudGFiUGFuZWxDaGFuZ2UoY3VycmVudFRhYklEKTtcbiAgICB9XG5cbiAgICB0YWJQYW5lbENoYW5nZShpbmRleCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYW5lbElEID0gYCR7c2VsZi5jb25maWcuZGF0YX0tJHtpbmRleH1gO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50UGFuZWxJRH1gKTtcbiAgICAgICAgc2VsZi5hY3RpdmVQYW5lbCA9IGN1cnJlbnRQYW5lbDtcbiAgICAgICAgY29uc3QgY3VycmVudFBhbmVsSG9sZGVyID0gY3VycmVudFBhbmVsLmNsb3Nlc3Qoc2VsZi5jb25maWcud3JhcHBlcik7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBjdXJyZW50UGFuZWxIb2xkZXIucXVlcnlTZWxlY3RvckFsbChzZWxmLmNvbmZpZy5zZWxlY3RvcnMucGFuZWwpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudFBhbmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5jbGVhckFjdGl2ZUNsYXNzKGVsZW0sICdwYW5lbCcpO1xuICAgICAgICBzZWxmLnNldEFjdGl2ZUNsYXNzKGN1cnJlbnRQYW5lbCwgJ3BhbmVsJyk7XG4gICAgICAgIHNlbGYuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHNlbGYuZW1pdCgndGFic0NoYW5nZScpO1xuICAgIH1cblxuICAgIGdldE5hdlRhYklEKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBkYXRhSUQgPSBpbmRleC5nZXRBdHRyaWJ1dGUoc2VsZi5jb25maWcuZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhSUQ7XG4gICAgfVxuXG4gICAgY2xlYXJBY3RpdmVDbGFzcyhlbGVtLCBzZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuXG4gICAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gJ3BhbmVsJykge1xuICAgICAgICAgICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gJ25hdicpIHtcbiAgICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVDbGFzcyhlbGVtLCBzZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICBpZiAoc2VjdGlvbiA9PT0gJ3BhbmVsJykge1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWN0aW9uID09PSAnbmF2Jykge1xuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZVRhYihpID0gMCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbXMgPSBzZWxmLml0ZW1zO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gZWxlbXNbaV07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RvciA9IGN1cnJlbnRUYWIuY2xvc2VzdChzZWxmLmNvbmZpZy53cmFwcGVyKTtcbiAgICAgICAgY29uc3QgZWxlbSA9IGN1cnJlbnRTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHNlbGYuY29uZmlnLnNlbGVjdG9ycy5uYXYpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiSUQgPSBzZWxmLmdldE5hdlRhYklEKGN1cnJlbnRUYWIpO1xuXG4gICAgICAgIHNlbGYuYWN0aXZlTmF2ID0gY3VycmVudFRhYjtcbiAgICAgICAgc2VsZi5jbGVhckFjdGl2ZUNsYXNzKGVsZW0sICduYXYnKTtcbiAgICAgICAgc2VsZi5zZXRBY3RpdmVDbGFzcyhjdXJyZW50VGFiLCAnbmF2Jyk7XG4gICAgICAgIHNlbGYudGFiUGFuZWxDaGFuZ2UoY3VycmVudFRhYklEKTtcbiAgICB9XG5cbiAgICBvbihldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaCgoZXZlbnQsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuO1xuICAgICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZXZlbnRIYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbWl0KC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgICAgIGxldCBldmVudHM7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IGFyZ3NbMF07XG4gICAgICAgICAgICBkYXRhID0gYXJncy5zbGljZSgxLCBhcmdzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb250ZXh0ID0gc2VsZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRzLCBkYXRhLCBjb250ZXh0KTtcbiAgICAgICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgICAgICBjb25zdCBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuXG4gICAgICAgIGV2ZW50c0FycmF5LmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3dpcGVTdGFydChlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBzZWxmLnN3aXBlU3RhcnQgPSBlLnBhZ2VYIHx8IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICB9XG5cbiAgICBvblN3aXBlRW5kKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBhZ2VYID0gZS5wYWdlWCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICBsZXQgb2Zmc2V0O1xuXG4gICAgICAgIGlmIChzZWxmLnN3aXBlU3RhcnQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHNlbGYuc3dpcGVTdGFydCAtIHBhZ2VYO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0KSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubmV4dFRhYigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPCAtMzApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmV2VGFiKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc3dpcGVTdGFydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0VGFiKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gc2VsZjtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBzZWxmLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZFbGVtID0gc2VsZi5pdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBmb3VuZEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG5leHRFbGVtO1xuICAgICAgICBcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlEID0gc2VsZi5nZXROYXZUYWJJRChpdGVtKTtcbiAgICAgICAgICAgIGlmIChpdGVtSUQgPT09IGN1cnJlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgZm91bmRJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmb3VuZEluZGV4IDwgbnVtYmVyT2ZFbGVtIC0gMSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2VBY3RpdmVUYWIoZm91bmRJbmRleCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm91bmRJbmRleCA9PT0gbnVtYmVyT2ZFbGVtIC0gMSA/IG5leHRFbGVtID0gMCA6IG5leHRFbGVtID0gZm91bmRJbmRleCArIDE7XG4gICAgICAgIC8vIHNlbGYuY2hhbmdlQWN0aXZlVGFiKG5leHRFbGVtKTtcbiAgICB9XG5cbiAgICBwcmV2VGFiKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gc2VsZjtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBzZWxmLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZFbGVtID0gc2VsZi5pdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBmb3VuZEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHByZXZFbGVtO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JRCA9IHNlbGYuZ2V0TmF2VGFiSUQoaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXRlbUlEID09PSBjdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIGZvdW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZm91bmRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlQWN0aXZlVGFiKGZvdW5kSW5kZXggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvdW5kSW5kZXggPT09IDAgPyBwcmV2RWxlbSA9IG51bWJlck9mRWxlbSAtIDEgOiBwcmV2RWxlbSA9IGZvdW5kSW5kZXggLSAxO1xuICAgICAgICAvLyBzZWxmLmNoYW5nZUFjdGl2ZVRhYihwcmV2RWxlbSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERTTVBUYWJzQ2xhc3M7IiwiaW1wb3J0IERTTVBBY2NvcmRpb25zIGZyb20gJy4vRFNNUEFjY29yZGlvbnMnO1xuaW1wb3J0IERTTVBUYWJzVGFiIGZyb20gJy4vRFNNUFRhYnMtdGFiJztcbmltcG9ydCB7IHVfdGhyb3R0bGVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tICcuLi8uLi91dGlscy91X3R5cGVzJztcblxuY2xhc3MgRFNNUFRhYlRvQWNjb3JkaW9uTW9iaWxlIHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnRhYmFjY0lEID0gJyNqcy10YWItYWNjJztcbiAgICAgICAgdGhpcy50YWJhY2NTZWxlY3RvciA9ICcuanMtdGFicy10by1hY2Mtd3JhcHBlcic7XG4gICAgICAgIHRoaXMudGFiYWNjSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFiYWNjU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMudGFiT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdyYXBwZXI6ICcuanMtdGFicy13cmFwcGVyJyxcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgICAgICAgIG5hdjogJy5qcy10YWJzLW5hdi1pdGVtJyxcbiAgICAgICAgICAgICAgICBwYW5lbDogJy5qcy10YWJzLXBhbmVsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hY2NvcmRpb25PcHRpb25zID0ge1xuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgaXRlbTogJy5qcy10YWJzLXBhbmVsJyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnLmpzLXRhYnMtbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcuanMtdGEtY29udGVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0OiB7XG4gICAgICAgICAgICAgICAgY2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhwYW5kOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1ZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGVza3RvcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB0aGlzLnRhYkluc3RhbmNlID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy50YWJhY2NJRCA9IHNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgY3VycmVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGxldCBicmVha3BvaW50ID0gMTExMjtcbiAgICAgICAgY3VycmVudFdpZHRoIDwgYnJlYWtwb2ludCA/IHRoaXMuaXNNb2JpbGUgPSB0cnVlIDogdGhpcy5pc0Rlc2t0b3AgPSB0cnVlO1xuXG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSBzZWxmLmJ1aWxkQWNjb3JkaW9uKCk7XG4gICAgICAgIGlmIChzZWxmLmlzRGVza3RvcCkgc2VsZi5idWlsZFRhYigpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnRocm90dGxlU2Nyb2xsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGhyb3R0bGVTY3JvbGwgPSB1X3Rocm90dGxlZCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmJ1aWxkVGFiQWNjb3JkaW9uKCk7XG4gICAgICAgIH0sIDE1MCk7XG5cbiAgICAgICAgc2VsZi5idWlsZFRhYkFjY29yZGlvbigpO1xuICAgIH1cblxuICAgIGJ1aWxkVGFiQWNjb3JkaW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBsZXQgYnJlYWtwb2ludCA9IDExMTI7XG4gICAgICAgIGlmIChuZXdXaWR0aCA8IGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi50YWJJbnN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWJJbnN0YW5jZS51bmJpbmRUYWJOYXZFdmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRhYkluc3RhbmNlLnVuYmluZFRhYlBhbmVsRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWJJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5idWlsZEFjY29yZGlvbigpO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNEZXNrdG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5pc01vYmlsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNEZXNrdG9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmFjY29yZGlvbkluc3RhbmNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY29yZGlvbkluc3RhbmNlLmFjY29yZGlvblVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFjY29yZGlvbkluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuYnVpbGRUYWIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0Rlc2t0b3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRBY2NvcmRpb24oKSB7XG4gICAgICAgIHRoaXMucGFyc2VPcHRpb25zKHRoaXMudGFiYWNjSUQpO1xuICAgICAgICB0aGlzLmFjY29yZGlvbkluc3RhbmNlID0gbmV3IERTTVBBY2NvcmRpb25zKHRoaXMudGFiYWNjSUQsIHRoaXMuYWNjb3JkaW9uT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYnVpbGRUYWIoKSB7XG4gICAgICAgIHRoaXMudGFiT3B0aW9ucy53cmFwcGVyID0gdGhpcy50YWJhY2NJRDtcbiAgICAgICAgdGhpcy50YWJJbnN0YW5jZSA9IG5ldyBEU01QVGFic1RhYih0aGlzLnRhYk9wdGlvbnMpO1xuICAgICAgICB0aGlzLnRhYkluc3RhbmNlLmNoYW5nZUFjdGl2ZVRhYigpO1xuICAgIH1cblxuICAgIHBhcnNlT3B0aW9ucyhzZWxlY3Rvcikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBzZWxmLmFjY29yZGlvbk9wdGlvbnMub3B0LnNjcm9sbFRvVmlldyA9IHVfcGFyc2VCb29sKHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC10by12aWV3JykpXG4gICAgICAgICAgICB8fCBzZWxmLmFjY29yZGlvbk9wdGlvbnMub3B0LnNjcm9sbFRvVmlldztcbiAgICAgICAgc2VsZi5hY2NvcmRpb25PcHRpb25zLmNsYXNzZXMuZGlzcGxheSA9IHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFjYy1kaXNwbGF5JylcbiAgICAgICAgICAgIHx8IHNlbGYuYWNjb3JkaW9uT3B0aW9ucy5jbGFzc2VzLmRpc3BsYXk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERTTVBUYWJUb0FjY29yZGlvbk1vYmlsZTtcbiIsIi8qKlxuICogaHR0cHM6Ly93d3cuaWxlYXJuamF2YXNjcmlwdC5jb20vcGxhaW5qcy1mYWRlaW4tZmFkZW91dC9cbiAqXG4gKiBUT0RPOiB0aGVyZSBhcmUgYmV0dGVyIGZhZGVJbiBmYWRlT3V0IHNjcmlwdHMgd2l0aCBhbmltYXRpb24gZWFzaW5nc1xuICovXG5cbi8vIGV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWwsIGRpc3BsYXlTdHlsZSA9ICdibG9jaycsIHNtb290aCA9IHRydWUpID0+IHtcbi8vICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcbi8vICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVN0eWxlO1xuLy8gICAgIGlmIChzbW9vdGgpIHtcbi8vICAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xuLy8gICAgICAgICBsZXQgcmVxdWVzdDtcbi8vXG4vLyAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5ICs9IDAuMDQ7XG4vLyAgICAgICAgICAgICBpZiAob3BhY2l0eSA+PSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgb3BhY2l0eSA9IDE7XG4vLyAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH07XG4vL1xuLy8gICAgICAgICBjb25zdCByQWYgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJBZik7XG4vLyAgICAgICAgICAgICBhbmltYXRpb24oKTtcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgckFmKCk7XG4vL1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAxO1xuLy8gICAgIH1cbi8vIH07XG4vL1xuLy8gZXhwb3J0IGNvbnN0IGZhZGVPdXQgPSAoZWwsIGRpc3BsYXlTdHlsZSA9ICdub25lJywgc21vb3RoID0gdHJ1ZSApID0+IHtcbi8vICAgICBpZiAoc21vb3RoKSB7XG4vLyAgICAgICAgIGxldCBvcGFjaXR5ID0gZWwuc3R5bGUub3BhY2l0eTtcbi8vICAgICAgICAgbGV0IHJlcXVlc3Q7XG4vL1xuLy8gICAgICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eSAtPSAwLjA0O1xuLy8gICAgICAgICAgICAgaWYgKG9wYWNpdHkgPD0gMCkge1xuLy8gICAgICAgICAgICAgICAgIG9wYWNpdHkgPSAwO1xuLy8gICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7XG4vLyAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH07XG4vL1xuLy8gICAgICAgICBjb25zdCByQWYgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJBZik7XG4vLyAgICAgICAgICAgICBhbmltYXRpb24oKTtcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgckFmKCk7XG4vL1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuLy8gICAgIH1cbi8vIH07XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBkdXJhdGlvbjogMTAwLFxuICAgIGNvbXBsZXRlKCkge1xuXG4gICAgfVxufTtcblxuY29uc3QgYW5pbWF0ZUZhZGUgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCBzdGFydCA9IG5ldyBEYXRlO1xuICAgIGxldCBpZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdGltZVBhc3NlZCA9IG5ldyBEYXRlIC0gc3RhcnQ7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVQYXNzZWQgLyBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICBwcm9ncmVzcyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICBsZXQgZGVsdGEgPSBvcHRpb25zLmRlbHRhKHByb2dyZXNzKTtcbiAgICAgICAgb3B0aW9ucy5zdGVwKGRlbHRhKTtcbiAgICAgICAgaWYgKHByb2dyZXNzID09IDEpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICAgICAgaWYodHlwZW9mIG9wdGlvbnMuY29tcGxldGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBvcHRpb25zLmRlbGF5IHx8IDEwKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVfZmFkZUluID0gKGVsZW1lbnQsIG9wdGlvbnM9IHt9KSA9PiB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuZHVyYXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgb3B0aW9ucy5kdXJhdGlvbiA9IGRlZmF1bHRzLmR1cmF0aW9uO1xuICAgIH1cbiAgICBsZXQgdG8gPSAwO1xuICAgIGFuaW1hdGVGYWRlKHtcbiAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGRlbHRhKHByb2dyZXNzKSB7XG4gICAgICAgICAgICBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5ncy5zd2luZyhwcm9ncmVzcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBvcHRpb25zLmNvbXBsZXRlLFxuICAgICAgICBzdGVwKGRlbHRhKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0byArIGRlbHRhO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB1X2ZhZGVPdXQgPSAoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMuZHVyYXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgb3B0aW9ucy5kdXJhdGlvbiA9IGRlZmF1bHRzLmR1cmF0aW9uO1xuICAgIH1cbiAgICBsZXQgdG8gPSAxO1xuICAgIGFuaW1hdGVGYWRlKHtcbiAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGRlbHRhKHByb2dyZXNzKSB7XG4gICAgICAgICAgICBwcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG4gICAgICAgICAgICByZXR1cm4gZWFzaW5ncy5zd2luZyhwcm9ncmVzcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBvcHRpb25zLmNvbXBsZXRlLFxuICAgICAgICBzdGVwKGRlbHRhKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0byAtIGRlbHRhO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IGVhc2luZ3MgPSB7XG4gICAgbGluZWFyOiBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBxdWFkcmF0aWM6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMik7XG4gICAgfSxcbiAgICBzd2luZzogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uKHByb2dyZXNzLCB4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMikgKiAoKHggKyAxKSAqIHByb2dyZXNzIC0geCk7XG4gICAgfSxcbiAgICBib3VuY2U6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIGZvciAodmFyIGEgPSAwLCBiID0gMSwgcmVzdWx0OyAxOyBhICs9IGIsIGIgLz0gMikge1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49ICg3IC0gNCAqIGEpIC8gMTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLU1hdGgucG93KCgxMSAtIDYgKiBhIC0gMTEgKiBwcm9ncmVzcykgLyA0LCAyKSArIE1hdGgucG93KGIsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBlbGFzdGljOiBmdW5jdGlvbihwcm9ncmVzcywgeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAocHJvZ3Jlc3MgLSAxKSkgKiBNYXRoLmNvcygyMCAqIE1hdGguUEkgKiB4IC8gMyAqIHByb2dyZXNzKTtcbiAgICB9XG59IiwiY29uc3QgdV9leHRlbmRPYmplY3QgPSAoZGVzdGluYXRpb24sIHNvdXJjZSkgPT4ge1xuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIHVfZXh0ZW5kT2JqZWN0KGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmNvbnN0IHVfZXh0ZW5kID0gKGRlZmF1bHRzLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgZXh0ZW5kZWRPcHRpb25zID0ge307XG4gICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgIGV4dGVuZGVkT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldIHx8IGRlZmF1bHRzW2tleV07XG4gICAgfVxuICAgIHJldHVybiBleHRlbmRlZE9wdGlvbnM7XG59O1xuXG5jb25zdCB1X21lcmdlRGVlcCA9ICh0YXJnZXQsIHNvdXJjZSkgPT4ge1xuICAgIGNvbnN0IGlzT2JqZWN0ID0gKG9iaikgPT4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4gICAgaWYgKCFpc09iamVjdCh0YXJnZXQpIHx8ICFpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpICYmIEFycmF5LmlzQXJyYXkoc291cmNlVmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFZhbHVlLmNvbmNhdChzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodGFyZ2V0VmFsdWUpICYmIGlzT2JqZWN0KHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1X21lcmdlRGVlcChPYmplY3QuYXNzaWduKHt9LCB0YXJnZXRWYWx1ZSksIHNvdXJjZVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCB7XG4gICAgdV9leHRlbmQsXG4gICAgdV9leHRlbmRPYmplY3QsXG4gICAgdV9tZXJnZURlZXBcbn07IiwiLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFucmVtYm9sZC9lczYtc2xpZGUtdXAtZG93blxuICpcbiAqIHVzYWdlIHdpdGggZWFzaW5nc1xuICpcbiAqL1xuXG5pbXBvcnQgeyB1X2V4dGVuZCB9IGZyb20gXCIuL3Vfb2JqZWN0X2V4dGVuZFwiO1xuaW1wb3J0IHsgdV9pc0ludGVnZXIgfSBmcm9tIFwiLi91X3R5cGVzXCI7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgZWFzaW5nOiAoY3VycmVudFRpbWUsIHN0YXJ0VmFsdWUsIGRpZmZWYWx1ZSwgZHVyZWF0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAtZGlmZlZhbHVlICogKGN1cnJlbnRUaW1lIC89IGR1cmVhdGlvbikgKiAoY3VycmVudFRpbWUgLSAyKSArIHN0YXJ0VmFsdWU7XG4gICAgfSxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG59O1xuY29uc3QgZGlyZWN0aW9ucyA9IHtcbiAgICBPUEVOOiAxLFxuICAgIENMT1NFOiAyXG59O1xuZXhwb3J0IGNvbnN0IHVfc2xpZGVVcCA9IChlbGVtZW50LCBhcmdzID0ge30pID0+IHtcbiAgICBpZiAodV9pc0ludGVnZXIoYXJncykpIHtcbiAgICAgICAgYXJncyA9IHsgZHVyYXRpb246IGFyZ3MgfTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHVfZXh0ZW5kKGRlZmF1bHRzLCBhcmdzKTtcbiAgICBsZXQgZGlzcGxheVR5cGUgPSBvcHRpb25zLmRpc3BsYXk7XG4gICAgb3B0aW9ucy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLkNMT1NFO1xuICAgIG9wdGlvbnMudG8gPSAwO1xuICAgIG9wdGlvbnMuc3RhcnRpbmdIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICBvcHRpb25zLmRpc3RhbmNlSGVpZ2h0ID0gLW9wdGlvbnMuc3RhcnRpbmdIZWlnaHQ7XG4gICAgc2V0RWxlbWVudEFuaW1hdGlvblN0eWxlcyhlbGVtZW50LCBkaXNwbGF5VHlwZSk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZXN0YW1wKSA9PiBhbmltYXRlKGVsZW1lbnQsIG9wdGlvbnMsIHRpbWVzdGFtcCkpO1xufTtcbmV4cG9ydCBjb25zdCB1X3NsaWRlRG93biA9IChlbGVtZW50LCBhcmdzID0ge30pID0+IHtcbiAgICBpZiAodV9pc0ludGVnZXIoYXJncykpIHtcbiAgICAgICAgYXJncyA9IHsgZHVyYXRpb246IGFyZ3MgfTtcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICBjb25zdCBvcHRpb25zID0gdV9leHRlbmQoZGVmYXVsdHMsIGFyZ3MpO1xuICAgIGxldCBkaXNwbGF5VHlwZSA9IG9wdGlvbnMuZGlzcGxheTtcbiAgICBzZXRFbGVtZW50QW5pbWF0aW9uU3R5bGVzKGVsZW1lbnQsIGRpc3BsYXlUeXBlKTtcbiAgICBvcHRpb25zLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuT1BFTjtcbiAgICBvcHRpb25zLnRvID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgb3B0aW9ucy5zdGFydGluZ0hlaWdodCA9IDA7XG4gICAgb3B0aW9ucy5kaXN0YW5jZUhlaWdodCA9IG9wdGlvbnMudG87XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZXN0YW1wKSA9PiBhbmltYXRlKGVsZW1lbnQsIG9wdGlvbnMsIHRpbWVzdGFtcCkpO1xufTtcbmNvbnN0IGFuaW1hdGUgPSAoZWxlbWVudCwgb3B0aW9ucywgbm93KSA9PiB7XG4gICAgaWYgKCFvcHRpb25zLnN0YXJ0VGltZSkge1xuICAgICAgICBvcHRpb25zLnN0YXJ0VGltZSA9IG5vdztcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBub3cgLSBvcHRpb25zLnN0YXJ0VGltZTtcbiAgICBsZXQgYW5pbWF0aW9uQ29udGludWUgPSBjdXJyZW50VGltZSA8IG9wdGlvbnMuZHVyYXRpb247XG4gICAgbGV0IG5ld0hlaWdodCA9IG9wdGlvbnMuZWFzaW5nKGN1cnJlbnRUaW1lLCBvcHRpb25zLnN0YXJ0aW5nSGVpZ2h0LCBvcHRpb25zLmRpc3RhbmNlSGVpZ2h0LCBvcHRpb25zLmR1cmF0aW9uKTtcbiAgICBpZiAoYW5pbWF0aW9uQ29udGludWUpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtuZXdIZWlnaHQudG9GaXhlZCgyKX1weGA7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4gYW5pbWF0ZShlbGVtZW50LCBvcHRpb25zLCB0aW1lc3RhbXApKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gZGlyZWN0aW9ucy5DTE9TRSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gZGlyZWN0aW9ucy5PUEVOKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBvcHRpb25zLmRpc3BsYXkgPT09ICdmbGV4JyA/ICdmbGV4JyA6ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRWxlbWVudEFuaW1hdGlvblN0eWxlcyhlbGVtZW50KTtcbiAgICB9XG59O1xuY29uc3Qgc2V0RWxlbWVudEFuaW1hdGlvblN0eWxlcyA9IChlbGVtZW50LCBkaXNwbGF5VHlwZSA9ICdibG9jaycpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5VHlwZSA9PT0gJ2ZsZXgnID8gJ2ZsZXgnIDogJ2Jsb2NrJztcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcwJztcbn07XG5jb25zdCByZW1vdmVFbGVtZW50QW5pbWF0aW9uU3R5bGVzID0gKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gbnVsbDtcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBudWxsO1xuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdV9zbGlkZVRvZ2dsZSA9IChlbGVtZW50LCBhcmdzID0ge30pID0+IHtcbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiB1X3NsaWRlRG93bihlbGVtZW50LCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdV9zbGlkZVVwKGVsZW1lbnQsIGFyZ3MpO1xuICAgIH1cbn0iLCJjb25zdCB1X2lzSW50ZWdlciA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG4gICAgfVxufTtcblxuY29uc3QgdV9pc09iamVjdCA9IChvKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmXG4gICAgICAgIG8gIT09IG51bGwgJiZcbiAgICAgICAgby5jb25zdHJ1Y3RvciAmJlxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0J1xuICAgICk7XG59XG5cbmNvbnN0IHVfcGFyc2VCb29sID0gKHN0cikgPT4gIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2Ygc3RyKTtcbiAgICAvLyBzdHJpY3Q6IEpTT04ucGFyc2Uoc3RyKVxuXG4gICAgaWYoc3RyID09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnYm9vbGVhbicpXG4gICAge1xuICAgICAgICByZXR1cm4gKHN0ciA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpXG4gICAge1xuICAgICAgICBpZihzdHIgPT0gXCJcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICAgICAgICBpZihzdHIudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScgfHwgc3RyLnRvTG93ZXJDYXNlKCkgPT0gJ3llcycpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9nLCAnLicpO1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXlxccypcXC1cXHMqL2csICctJyk7XG4gICAgfVxuXG4gICAgLy8gdmFyIGlzTnVtID0gc3RyaW5nLm1hdGNoKC9eWzAtOV0rJC8pICE9IG51bGw7XG4gICAgLy8gdmFyIGlzTnVtID0gL15cXGQrJC8udGVzdChzdHIpO1xuICAgIGlmKCFpc05hTihzdHIpKVxuICAgICAgICByZXR1cm4gKHBhcnNlRmxvYXQoc3RyKSAhPSAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHtcbiAgICB1X2lzSW50ZWdlcixcbiAgICB1X2lzT2JqZWN0LFxuICAgIHVfcGFyc2VCb29sXG59IiwiXG5jb25zdCB1X2RlYm91bmNlZCA9IChmdW5jLCBkZWxheSwgaW1tZWRpYXRlKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kRnVuYyA9IGZ1bmMuYmluZCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lcklkKSB7XG4gICAgICAgICAgICBib3VuZEZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsZWVGdW5jID0gaW1tZWRpYXRlID8gKCkgPT4geyB0aW1lcklkID0gbnVsbCB9IDogYm91bmRGdW5jO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dChjYWxsZWVGdW5jLCBkZWxheSk7XG4gICAgfVxufVxuXG5jb25zdCB1X3Rocm90dGxlZCA9IChmdW5jLCBkZWxheSwgaW1tZWRpYXRlKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kRnVuYyA9IGZ1bmMuYmluZCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lcklkKSB7XG4gICAgICAgICAgICBib3VuZEZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZighaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lcklkID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICB1X2RlYm91bmNlZCxcbiAgICB1X3Rocm90dGxlZFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlxuICogQHRpdGxlIERTIEFjY29yZGlvbnNcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWNhdGlvbiBlbnRyeSBwb2ludFxuICovXG5cbmltcG9ydCB7IGNhbGxBY2NvcmRpb25zIH0gZnJvbSAnLi9mdW5jdGlvbi1jYWxscy9hY2NvcmRpb25zJztcbmltcG9ydCB7IGNhbGxUYWJBY2NvcmRpb25zTW9iaWxlIH0gZnJvbSAnLi9mdW5jdGlvbi1jYWxscy90YWJzLXRvLWFjY29yZGlvbi1tb2JpbGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY2FsbEFjY29yZGlvbnMoKTtcbiAgICBjYWxsVGFiQWNjb3JkaW9uc01vYmlsZSgpO1xuXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFjY29yZGlvbnMiLCJjYWxsQWNjb3JkaW9ucyIsIkRTTVBBY2NvcmRpb25zIiwiYWNjb3JkaW9uSUQiLCJhY2NvcmRpb25TZWxlY3RvciIsImFjY29yZGlvbkl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWNjb3JkaW9ucyIsImZvckVhY2giLCJhY2MiLCJpIiwiYWNjSUQiLCJjb25jYXQiLCJjYWxsSUQiLCJzZXRBdHRyaWJ1dGUiLCJEU01QVGFiVG9BY2NvcmRpb25Nb2JpbGUiLCJ0YWJhY2NJRCIsInRhYmFjY1NlbGVjdG9yIiwidGFiYWNjSXRlbXMiLCJjYWxsVGFiQWNjb3JkaW9uc01vYmlsZSIsInRhSUQiLCJlYXNlT3V0UXVhZCIsInQiLCJiIiwiYyIsImQiLCJlYXNlSW5RdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluUXVpbnQiLCJlYXNlT3V0UXVpbnQiLCJlYXNlSW5PdXRRdWludCIsImVhc2VJblNpbmUiLCJNYXRoIiwiY29zIiwiUEkiLCJlYXNlT3V0U2luZSIsInNpbiIsImVhc2VJbk91dFNpbmUiLCJlYXNlSW5FeHBvIiwicG93IiwiZWFzZU91dEV4cG8iLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluQ2lyYyIsInNxcnQiLCJlYXNlT3V0Q2lyYyIsImVhc2VJbk91dENpcmMiLCJlYXNlSW5FbGFzdGljIiwicyIsInAiLCJhIiwiYWJzIiwiYXNpbiIsImVhc2VPdXRFbGFzdGljIiwiZWFzZUluT3V0RWxhc3RpYyIsImVhc2VJbkJhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlYXNlT3V0QmFjayIsImVhc2VJbk91dEJhY2siLCJlYXNlSW5Cb3VuY2UiLCJlYXNlT3V0Qm91bmNlIiwiZWFzZUluT3V0Qm91bmNlIiwic2Nyb2xsVG9VdGlsIiwicGFyYW1zIiwiZWxlbWVudCIsIndpbmRvdyIsInRvIiwiZHVyYXRpb24iLCJjYWxsYmFjayIsImVhc2luZyIsInN0YXJ0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRUb3AiLCJjaGFuZ2UiLCJjdXJyZW50VGltZSIsImluY3JlbWVudCIsImFuaW1hdGVTY3JvbGwiLCJlYXNpbmdWYWx1ZSIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsInVfZXh0ZW5kT2JqZWN0IiwidV9zbGlkZURvd24iLCJ1X3NsaWRlVXAiLCJ1X2ZhZGVJbiIsInVfZmFkZU91dCIsInVfcGFyc2VCb29sIiwic2VsZWN0b3IiLCJvcHRpb25zIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ3cmFwcGVyIiwiZGVmYXVsdHMiLCJzZWxlY3RvcnMiLCJpdGVtIiwidHJpZ2dlciIsImNvbnRlbnQiLCJnYWxsZXJ5IiwiY29udGFpbmVyIiwiY2xhc3NlcyIsImFjdGl2ZSIsImZvY3VzIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImF0dHIiLCJjbG9zZSIsIm9wZW4iLCJzdGFydENsb3NlZCIsImFuaW1hdGlvbkNvbnRlbnQiLCJhbmltYXRpb25HYWxsZXJ5Iiwic2Nyb2xsVG9WaWV3Iiwib3B0IiwiZXhwYW5kIiwiaGFzR2FsbGVyeSIsImFyaWEiLCJidXR0b24iLCJjb25maWciLCJnZXRBcmlhTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudHNMaXN0ZW5lcnMiLCJwYXJzZU9wdGlvbnMiLCJzaG91bGRTY3JvbGwiLCJtcWwiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXRlbXMiLCJnYWxsZXJ5SXRlbXMiLCJoYW5kbGVycyIsInByZXZpb3VzSW5kZXgiLCJjdXJyZW50SW5kZXgiLCJpbml0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRBcmlhIiwicHJlcGFyZUZvckFuaW1hdGlvbiIsImFjY29yZGlvbkJpbmRFdmVudHMiLCJyZUluaXQiLCJhY2NvcmRpb25VbmJpbmRFdmVudHMiLCJyZUluaXRBbmltYXRpb24iLCJvbiIsImV2ZW50cyIsInNlbGYiLCJzcGxpdCIsImV2ZW50IiwicHVzaCIsIm9mZiIsImhhbmRsZXIiLCJldmVudEhhbmRsZXIiLCJpbmRleCIsInNwbGljZSIsImVtaXQiLCJkYXRhIiwiY29udGV4dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaXNBcnJheSIsInNsaWNlIiwidW5zaGlmdCIsImV2ZW50c0FycmF5IiwiYXBwbHkiLCJlbGVtIiwiYWRkTGlzdGVuZXJGb2N1cyIsImJpbmQiLCJhZGRMaXN0ZW5lckJsdXIiLCJhZGRLZXlMaXN0ZW5lciIsImhhbmRsZXJGdW5jIiwiYWNjb3JkaW9uTmF2Q2xpY2siLCJwYXNzaXZlIiwiYWNjb3JkaW9uIiwiZWxlbVBhcmVudCIsImNsb3Nlc3QiLCJlbGVtQ29udGVudCIsImNvbnRyb2wiLCJoZWFkZXIiLCJuYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZVN0eWxlcyIsImV2IiwiY3VycmVudEl0ZW1DbGlja2VkIiwiY3VycmVudFRhcmdldCIsImFjY29yZGlvbkNvbnRlbnRjaGFuZ2UiLCJlbGVtcyIsImN1cnJlbnRJdGVtIiwiY3VycmVudEl0ZW1Db250ZW50IiwiZXhwYW5kZWQiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsIml0ZW1Db250ZW50IiwiaXRlbVRyaWdnZXIiLCJhZGQiLCJhY2NvcmRpb25DaGFuZ2VHYWxsZXJ5Iiwic2Nyb2xsVG9BY2NvcmRpb24iLCJuZXh0QWNjb3JkaW9uIiwibmV4dEVsZW0iLCJudW1iZXJPZkVsZW0iLCJuZXh0RWxlbUl0ZW0iLCJwcmV2QWNjb3JkaW9uIiwicHJldkVsZW0iLCJwcmV2RWxlbUl0ZW0iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjb21wbGV0ZSIsIm5ld0l0ZW0iLCJhY3RpdmVGb3VuZCIsImxpc3QiLCJzdHlsZSIsIml0ZW0wQ29udGVudCIsImlzU2VsZkNsb3NlIiwiaXNMZWF2ZU9wZW4iLCJpc1N0YXJ0Q2xvc2VkIiwiaXNHYWxsZXJ5IiwiYW5pbWF0ZUNvbnRlbnQiLCJhbmltYXRlR2FsbGVyeSIsImlzU2Nyb2xsVG9WaWV3IiwiaXNWYWxpZElkIiwidGVzdCIsImFyaWFOYW1lIiwidGFyZ2V0Iiwid2hpY2giLCJ0b1N0cmluZyIsInRyaWdnZXJzIiwidHJpZ2dlckNsYXNzIiwiY3RybE1vZGlmaWVyIiwiY3RybEtleSIsIm1hdGNoIiwiaW5kZXhPZiIsImRpcmVjdGlvbiIsIm5ld0luZGV4Iiwic2Nyb2xsQ3VycmVudENvbnRlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbGVtSGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0IiwiY3VycmVudFNjcm9sbFBvcyIsInNjcm9sbFkiLCJ0b3AiLCJEU01QVGFic0NsYXNzIiwiRFNNUFRhYnNUYWIiLCJfRFNNUFRhYnNDbGFzcyIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImNhbGwiLCJuYXYiLCJwYW5lbCIsImJyZWFrcG9pbnRzIiwic2VsZWN0b3JQYW5lbHMiLCJwYW5lbHMiLCJtZWRpYU1hdGNoIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiYWN0aXZlTmF2IiwiYWN0aXZlUGFuZWwiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsImJpbmRGdW5jdGlvbnMiLCJ0YWJOYXZDbGljayIsIm1lZGlhTWF0Y2hlcyIsIm9uU3dpcGVTdGFydCIsIm9uU3dpcGVFbmQiLCJiaW5kVGFiUGFuZWxFdmVudCIsInVuYmluZFRhYlBhbmVsRXZlbnQiLCJiaW5kVGFiTmF2RXZlbnQiLCJ0YWIiLCJ1bmJpbmRUYWJOYXZFdmVudCIsImN1cnJlbnRUYWIiLCJjdXJyZW50U2VsZWN0b3IiLCJjdXJyZW50VGFiSUQiLCJnZXROYXZUYWJJRCIsImNsZWFyQWN0aXZlQ2xhc3MiLCJzZXRBY3RpdmVDbGFzcyIsInRhYlBhbmVsQ2hhbmdlIiwiY3VycmVudFBhbmVsSUQiLCJjdXJyZW50UGFuZWwiLCJjdXJyZW50UGFuZWxIb2xkZXIiLCJkYXRhSUQiLCJzZWN0aW9uIiwiY2hhbmdlQWN0aXZlVGFiIiwic3RvcFByb3BhZ2F0aW9uIiwic3dpcGVTdGFydCIsInBhZ2VYIiwidGFyZ2V0VG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwibmV4dFRhYiIsInByZXZUYWIiLCJmb3VuZEluZGV4IiwiaXRlbUlEIiwidV90aHJvdHRsZWQiLCJ0YWJPcHRpb25zIiwiYWNjb3JkaW9uT3B0aW9ucyIsImlzTW9iaWxlIiwiaXNEZXNrdG9wIiwiYWNjb3JkaW9uSW5zdGFuY2UiLCJ0YWJJbnN0YW5jZSIsImN1cnJlbnRXaWR0aCIsImlubmVyV2lkdGgiLCJidWlsZEFjY29yZGlvbiIsImJ1aWxkVGFiIiwidGhyb3R0bGVTY3JvbGwiLCJidWlsZFRhYkFjY29yZGlvbiIsIm5ld1dpZHRoIiwiYW5pbWF0ZUZhZGUiLCJEYXRlIiwiaWQiLCJzZXRJbnRlcnZhbCIsInRpbWVQYXNzZWQiLCJwcm9ncmVzcyIsImRlbHRhIiwic3RlcCIsImNsZWFySW50ZXJ2YWwiLCJkZWxheSIsImVhc2luZ3MiLCJzd2luZyIsIm9wYWNpdHkiLCJsaW5lYXIiLCJxdWFkcmF0aWMiLCJjaXJjIiwiYWNvcyIsImJhY2siLCJ4IiwiYm91bmNlIiwicmVzdWx0IiwiZWxhc3RpYyIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInVfZXh0ZW5kIiwiZXh0ZW5kZWRPcHRpb25zIiwidV9tZXJnZURlZXAiLCJpc09iamVjdCIsIm9iaiIsIl90eXBlb2YiLCJrZXlzIiwidGFyZ2V0VmFsdWUiLCJzb3VyY2VWYWx1ZSIsImFzc2lnbiIsInVfaXNJbnRlZ2VyIiwic3RhcnRWYWx1ZSIsImRpZmZWYWx1ZSIsImR1cmVhdGlvbiIsImRpcmVjdGlvbnMiLCJPUEVOIiwiQ0xPU0UiLCJkaXNwbGF5VHlwZSIsInN0YXJ0aW5nSGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZGlzdGFuY2VIZWlnaHQiLCJzZXRFbGVtZW50QW5pbWF0aW9uU3R5bGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXN0YW1wIiwiYW5pbWF0ZSIsIm5vdyIsInN0YXJ0VGltZSIsImFuaW1hdGlvbkNvbnRpbnVlIiwibmV3SGVpZ2h0IiwidG9GaXhlZCIsInJlbW92ZUVsZW1lbnRBbmltYXRpb25TdHlsZXMiLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidV9zbGlkZVRvZ2dsZSIsImdldENvbXB1dGVkU3R5bGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJpc0Zpbml0ZSIsImZsb29yIiwidV9pc09iamVjdCIsIm8iLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJ1X2RlYm91bmNlZCIsImZ1bmMiLCJpbW1lZGlhdGUiLCJ0aW1lcklkIiwiYm91bmRGdW5jIiwiY2xlYXJUaW1lb3V0IiwiY2FsbGVlRnVuYyIsIl9sZW4yIiwiX2tleTIiXSwic291cmNlUm9vdCI6IiJ9