/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./assets/_src/js/library/tabs-accordions/DSMPTabs-dropdown.js":
/*!*********************************************************************!*\
  !*** ./assets/_src/js/library/tabs-accordions/DSMPTabs-dropdown.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DSMPTabsClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSMPTabsClass */ "./assets/_src/js/library/tabs-accordions/DSMPTabsClass.js");
/* harmony import */ var _utils_u_object_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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


var DSMPTabsDropdown = /*#__PURE__*/function (_DSMPTabsClass) {
  _inherits(DSMPTabsDropdown, _DSMPTabsClass);
  var _super = _createSuper(DSMPTabsDropdown);
  function DSMPTabsDropdown(options) {
    var _this;
    _classCallCheck(this, DSMPTabsDropdown);
    _this = _super.call(this);
    _this.defaults = {
      wrapper: '.js-tabsDrop-wrapper',
      selectors: {
        dropdown: '.js-tabs-dropdown',
        panel: '.js-tabs-panel'
      },
      classes: {
        active: 'is-active'
      },
      data: 'data-tab',
      breakpoints: 'tablet' // tablet, desktop, desktop-l, all,  leave empty for disabled
    };
    _this.config = (0,_utils_u_object_extend__WEBPACK_IMPORTED_MODULE_1__.u_extendObject)(_this.defaults, options);
    _this.selectorDropdown = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.dropdown);
    _this.selectorPanels = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.panel);
    _this.itemsDropdown = document.querySelectorAll(_this.selectorDropdown);
    _this.panels = document.querySelectorAll(_this.selectorPanels);
    if (_this.config.breakpoints !== 'all') {
      _this.mql = window.matchMedia("(max-width: ".concat(_this.breakpoints[_this.config.breakpoints], "px)"));
      _this.mediaMatch = _this.mql.matches;
    } else {
      _this.mediaMatch = true;
    }
    if (!_this.itemsDropdown.length) return _possibleConstructorReturn(_this);
    _this.init();
    return _this;
  }
  _createClass(DSMPTabsDropdown, [{
    key: "init",
    value: function init() {
      this.bindFunctions();
      this.bindTabsDropdownEvent();
      _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "bindTabPanelEvent", this).call(this);
    }
  }, {
    key: "bindFunctions",
    value: function bindFunctions() {
      this.tabDropdownChange = this.tabDropdownChange.bind(this);
      _set(_getPrototypeOf(DSMPTabsDropdown.prototype), "tabNavClick", _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "tabNavClick", this).bind(this), this, true);
      _set(_getPrototypeOf(DSMPTabsDropdown.prototype), "mediaMatches", _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "mediaMatches", this).bind(this), this, true);
      _set(_getPrototypeOf(DSMPTabsDropdown.prototype), "onSwipeStart", _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "onSwipeStart", this).bind(this), this, true);
      _set(_getPrototypeOf(DSMPTabsDropdown.prototype), "onSwipeEnd", _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "onSwipeEnd", this).bind(this), this, true);
      if (this.config.breakpoints !== 'all') {
        this.mql.addEventListener('change', _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "mediaMatches", this));
      }
    }
  }, {
    key: "bindTabsDropdownEvent",
    value: function bindTabsDropdownEvent() {
      var self = this;
      var dropdowns = self.itemsDropdown;
      dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('change', self.tabDropdownChange);
      });
    }
  }, {
    key: "tabDropdownChange",
    value: function tabDropdownChange(ev) {
      var currDropdown = ev.currentTarget;
      var currentTabID = currDropdown.value;
      var currentIndex = currDropdown.options.selectedIndex;
      for (var i = 0; i < currDropdown.options.length; i += 1) {
        currDropdown.options[i].removeAttribute('selected');
      }
      currDropdown.options[currentIndex].setAttribute('selected', 'selected');
      _get(_getPrototypeOf(DSMPTabsDropdown.prototype), "tabPanelChange", this).call(this, currentTabID);
    }
  }, {
    key: "unbindTabsDropdownEvent",
    value: function unbindTabsDropdownEvent() {
      var self = this;
      var dropdowns = self.itemsDropdown;
      dropdowns.forEach(function (dropdown) {
        dropdown.removeEventListener('change', self.tabDropdownChange);
      });
    }
  }]);
  return DSMPTabsDropdown;
}(_DSMPTabsClass__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (DSMPTabsDropdown);

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

/***/ "./assets/_src/js/library/tabs-accordions/DSMPTabs-tabdropdown.js":
/*!************************************************************************!*\
  !*** ./assets/_src/js/library/tabs-accordions/DSMPTabs-tabdropdown.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
/* harmony import */ var _DSMPTabsClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DSMPTabsClass */ "./assets/_src/js/library/tabs-accordions/DSMPTabsClass.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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


var DSMPTabsTabDropdown = /*#__PURE__*/function (_DSMPTabsClass) {
  _inherits(DSMPTabsTabDropdown, _DSMPTabsClass);
  var _super = _createSuper(DSMPTabsTabDropdown);
  function DSMPTabsTabDropdown(options) {
    var _this;
    _classCallCheck(this, DSMPTabsTabDropdown);
    _this = _super.call(this);
    _this.defaults = {
      wrapper: '.js-tabsTabDrop-wrapper',
      selectors: {
        nav: '.js-tabs-nav-item',
        dropdown: '.js-tabs-dropdown',
        panel: '.js-tabs-panel'
      },
      classes: {
        active: 'is-active'
      },
      data: 'data-tab',
      breakpoints: 'tablet' // tablet, desktop, desktop-l, all,  leave empty for disabled
    };
    _this.config = (0,_utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__.u_extendObject)(_this.defaults, options);
    _this.selectorTabs = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.nav);
    _this.selectorDropdown = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.dropdown);
    _this.selectorPanels = "".concat(_this.config.wrapper, " ").concat(_this.config.selectors.panel);
    _this.items = document.querySelectorAll(_this.selectorTabs);
    _this.itemsDropdown = document.querySelectorAll(_this.selectorDropdown);
    _this.panels = document.querySelectorAll(_this.selectorPanels);
    if (_this.config.breakpoints !== 'all') {
      _this.mql = window.matchMedia("(max-width: ".concat(_this.breakpoints[_this.config.breakpoints], "px)"));
      _this.mediaMatch = _this.mql.matches;
    } else {
      _this.mediaMatch = true;
    }
    if (!_this.items.length) return _possibleConstructorReturn(_this);
    _this.initTabsDropdown();
    return _this;
  }
  _createClass(DSMPTabsTabDropdown, [{
    key: "initTabsDropdown",
    value: function initTabsDropdown() {
      if (this.items.length > 0) {
        this.currentIndex = _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "getNavTabID", this).call(this, this.items[0]);
        this.activeNav = this.items[0];
        this.activePanel = this.panels[0];
      }
      this.bindFunctions();
      this.bindTabNavEv();
      this.bindTabsDropdownEvent();
      _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "bindTabPanelEvent", this).call(this);
    }
  }, {
    key: "bindFunctions",
    value: function bindFunctions() {
      this.tabDropdownChange = this.tabDropdownChange.bind(this);
      this.tabNavClick = this.tabNavClick.bind(this);
      this.mediaMatches = this.mediaMatches.bind(this);
      _set(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "onSwipeStart", _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "onSwipeStart", this).bind(this), this, true);
      _set(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "onSwipeEnd", _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "onSwipeEnd", this).bind(this), this, true);
      if (this.config.breakpoints !== 'all') {
        this.mql.addEventListener('change', this.mediaMatches);
      }
    }
  }, {
    key: "bindTabsDropdownEvent",
    value: function bindTabsDropdownEvent() {
      var self = this;
      var dropdowns = self.itemsDropdown;
      dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('change', self.tabDropdownChange);
      });
    }
  }, {
    key: "mediaMatches",
    value: function mediaMatches(e) {
      this.mediaMatch = e.matches;
      if (this.mediaMatch) {
        _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "bindTabPanelEvent", this).call(this);
      } else {
        _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "unbindTabPanelEvent", this).call(this);
      }
    }
  }, {
    key: "bindTabNavEv",
    value: function bindTabNavEv() {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.addEventListener('click', self.tabNavClick, {
          passive: true
        });
      });
    }
  }, {
    key: "tabNavClick",
    value: function tabNavClick(ev) {
      var self = this;
      var currentTab = ev.currentTarget;
      var currentTabID = _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "getNavTabID", this).call(this, currentTab);
      var currentSelector = currentTab.closest(self.config.wrapper);
      var currentDropdown = currentSelector.querySelector(self.config.selectors.dropdown);
      var newIndex;
      for (var i = 0; i < currentDropdown.options.length; i += 1) {
        if (currentDropdown.options[i].value === currentTabID) {
          newIndex = i;
        }
      }
      self.updateTabNav(currentTab);
      self.updateDropdown(currentDropdown, newIndex);
      _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "tabPanelChange", this).call(this, currentTabID);
    }
  }, {
    key: "tabDropdownChange",
    value: function tabDropdownChange(ev) {
      var self = this;
      var currDropdown = ev.currentTarget;
      var currentIndex = currDropdown.options.selectedIndex;
      var currentTabID = currDropdown.value;
      var currentNavItem = document.querySelector("[".concat(self.config.data, "='").concat(currentTabID, "']"));
      self.updateDropdown(currDropdown, currentIndex);
      self.updateTabNav(currentNavItem);
      _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "tabPanelChange", this).call(this, currentTabID);
    }
  }, {
    key: "updateDropdown",
    value: function updateDropdown(currentDrop, newDropIndex) {
      var self = this;
      var currDropdown = currentDrop;
      var currentIndex = newDropIndex;
      for (var i = 0; i < currDropdown.options.length; i += 1) {
        currDropdown.options[i].removeAttribute('selected');
      }
      currDropdown.options[currentIndex].setAttribute('selected', 'selected');
      currDropdown.options.selectedIndex = currentIndex;
    }
  }, {
    key: "updateTabNav",
    value: function updateTabNav(currTab) {
      var self = this;
      var currentTab = currTab;
      self.activeNav = currTab;
      var currentSelector = currentTab.closest(self.config.wrapper);
      var elem = currentSelector.querySelectorAll(self.config.selectors.nav);
      _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "clearActiveClass", this).call(this, elem, 'nav');
      _get(_getPrototypeOf(DSMPTabsTabDropdown.prototype), "setActiveClass", this).call(this, currentTab, 'nav');
    }
  }, {
    key: "unbindTabsDropEvents",
    value: function unbindTabsDropEvents() {
      var self = this;
      var dropdowns = self.itemsDropdown;
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
      dropdowns.forEach(function (dropdown) {
        dropdown.removeEventListener('change', self.tabDropdownChange);
      });
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
      var currentTab = document.querySelector("[".concat(self.config.data, "='").concat(currentItem, "']"));
      var currentSelector = currentTab.closest(self.config.wrapper);
      var currentDropdown = currentSelector.querySelector(self.config.selectors.dropdown);
      items.forEach(function (item, i) {
        var itemID = self.getNavTabID(item);
        if (itemID === currentItem) {
          foundIndex = i;
        }
      });
      if (foundIndex < numberOfElem - 1) {
        self.changeActiveTab(foundIndex + 1);
        self.updateDropdown(currentDropdown, foundIndex + 1);
      }
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
      var currentTab = document.querySelector("[".concat(self.config.data, "='").concat(currentItem, "']"));
      var currentSelector = currentTab.closest(self.config.wrapper);
      var currentDropdown = currentSelector.querySelector(self.config.selectors.dropdown);
      items.forEach(function (item, i) {
        var itemID = self.getNavTabID(item);
        if (itemID === currentItem) {
          foundIndex = i;
        }
      });
      if (foundIndex > 0) {
        self.changeActiveTab(foundIndex - 1);
        self.updateDropdown(currentDropdown, foundIndex - 1);
      }
    }
  }]);
  return DSMPTabsTabDropdown;
}(_DSMPTabsClass__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (DSMPTabsTabDropdown);

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
/*!***********************************!*\
  !*** ./assets/_src/js/ds-tabs.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_tabs_accordions_DSMPTabs_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/tabs-accordions/DSMPTabs-tab */ "./assets/_src/js/library/tabs-accordions/DSMPTabs-tab.js");
/* harmony import */ var _library_tabs_accordions_DSMPTabs_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/tabs-accordions/DSMPTabs-dropdown */ "./assets/_src/js/library/tabs-accordions/DSMPTabs-dropdown.js");
/* harmony import */ var _library_tabs_accordions_DSMPTabs_tabdropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/tabs-accordions/DSMPTabs-tabdropdown */ "./assets/_src/js/library/tabs-accordions/DSMPTabs-tabdropdown.js");
/* harmony import */ var _function_calls_tabs_to_accordion_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function-calls/tabs-to-accordion-mobile */ "./assets/_src/js/function-calls/tabs-to-accordion-mobile.js");
/*
 * @title DS Tabs
 * @description Application entry point
 */





document.addEventListener('DOMContentLoaded', function () {
  new _library_tabs_accordions_DSMPTabs_tab__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _library_tabs_accordions_DSMPTabs_dropdown__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _library_tabs_accordions_DSMPTabs_tabdropdown__WEBPACK_IMPORTED_MODULE_2__["default"]();
  (0,_function_calls_tabs_to_accordion_mobile__WEBPACK_IMPORTED_MODULE_3__.callTabAccordionsMobile)();
});
window.addEventListener('load', function () {});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMvX3NyYy9qcy9mdW5jdGlvbi1jYWxscy90YWJzLXRvLWFjY29yZGlvbi1tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L2FuaW1hdGlvbnMvZWFzaW5ncy1lczYuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L2FuaW1hdGlvbnMvc2Nyb2xsLXRvLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS90YWJzLWFjY29yZGlvbnMvRFNNUEFjY29yZGlvbnMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L3RhYnMtYWNjb3JkaW9ucy9EU01QVGFicy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvdGFicy1hY2NvcmRpb25zL0RTTVBUYWJzLXRhYi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvdGFicy1hY2NvcmRpb25zL0RTTVBUYWJzLXRhYmRyb3Bkb3duLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS90YWJzLWFjY29yZGlvbnMvRFNNUFRhYnNDbGFzcy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvdGFicy1hY2NvcmRpb25zL0RTTVBUYWJzVG9BY2NvcmRpb25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy91dGlscy91X2ZhZGUtaW4tb3V0LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV9vYmplY3RfZXh0ZW5kLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV9zbGlkZS11cC1kb3duLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV90eXBlcy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9kcy10YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEU01QVGFiVG9BY2NvcmRpb25Nb2JpbGUgZnJvbSAnLi4vbGlicmFyeS90YWJzLWFjY29yZGlvbnMvRFNNUFRhYnNUb0FjY29yZGlvbk1vYmlsZSc7XG5cbmNvbnN0IHRhYmFjY0lEID0gJ2pzLXRhYi1hY2MnO1xuY29uc3QgdGFiYWNjU2VsZWN0b3IgPSAnLmpzLXRhYnMtdG8tYWNjLXdyYXBwZXInO1xuY29uc3QgdGFiYWNjSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhYmFjY1NlbGVjdG9yKTtcblxuY29uc3QgY2FsbFRhYkFjY29yZGlvbnNNb2JpbGUgPSAoKSA9PiB7XG5cbiAgICB0YWJhY2NJdGVtcy5mb3JFYWNoKCAoYWNjLCBpKSA9PiB7XG4gICAgICAgIGxldCB0YUlEID0gYCR7dGFiYWNjSUR9LSR7aX1gO1xuICAgICAgICBsZXQgY2FsbElEID0gYCMke3RhSUR9YDtcbiAgICAgICAgYWNjLnNldEF0dHJpYnV0ZSgnaWQnLCB0YUlEKTtcblxuICAgICAgICBuZXcgRFNNUFRhYlRvQWNjb3JkaW9uTW9iaWxlKGNhbGxJRCk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IHtcbiAgICBjYWxsVGFiQWNjb3JkaW9uc01vYmlsZVxufSIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2phbnJlbWJvbGQvZXM2LWVhc2luZ3NcbiAqXG4gKiB1c2FnZSA6IGltcG9ydCB7ZWFzZUluT3V0UXVhZH0gZnJvbSAnZWFzaW5ncyc7XG4gKi9cblxuZXhwb3J0IGNvbnN0IGVhc2VPdXRRdWFkID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5RdWFkID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dFF1YWQgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIC1jIC8gMiAqICgoLS10KSAqICh0IC0gMikgLSAxKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbkN1YmljID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlT3V0Q3ViaWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXRDdWJpYyA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpXG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJblF1YXJ0ID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dFF1YXJ0ID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXRRdWFydCA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpXG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xuICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJblF1aW50ID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VPdXRRdWludCA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0ICogdCArIDEpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluT3V0UXVpbnQgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluU2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIC1jICogTWF0aC5jb3ModCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGMgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlT3V0U2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluT3V0U2luZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5FeHBvID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gKHQgPT0gMCkgPyBiIDogYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEV4cG8gPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHJldHVybiAodCA9PSBkKSA/IGIgKyBjIDogYyAqICgtTWF0aC5wb3coMiwgLTEwICogdCAvIGQpICsgMSkgKyBiO1xufTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXRFeHBvID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICBpZiAodCA9PSAwKVxuICAgICAgICByZXR1cm4gYjtcbiAgICBpZiAodCA9PSBkKVxuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpXG4gICAgICAgIHJldHVybiBjIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xuICAgIHJldHVybiBjIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluQ2lyYyA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgcmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dENpcmMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHJldHVybiBjICogTWF0aC5zcXJ0KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dENpcmMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxuICAgICAgICByZXR1cm4gLWMgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgIHJldHVybiBjIC8gMiAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbkVsYXN0aWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApXG4gICAgICAgIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkKSA9PSAxKVxuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKVxuICAgICAgICBwID0gZCAqIC4zO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgYSA9IGM7XG4gICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEVsYXN0aWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApXG4gICAgICAgIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkKSA9PSAxKVxuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgaWYgKCFwKVxuICAgICAgICBwID0gZCAqIC4zO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgYSA9IGM7XG4gICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgYyArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dEVsYXN0aWMgPSAodCwgYiwgYywgZCkgPT4ge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSBjO1xuICAgIGlmICh0ID09IDApXG4gICAgICAgIHJldHVybiBiO1xuICAgIGlmICgodCAvPSBkIC8gMikgPT0gMilcbiAgICAgICAgcmV0dXJuIGIgKyBjO1xuICAgIGlmICghcClcbiAgICAgICAgcCA9IGQgKiAoLjMgKiAxLjUpO1xuICAgIGlmIChhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgICAgYSA9IGM7XG4gICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgaWYgKHQgPCAxKVxuICAgICAgICByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG4gICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIC41ICsgYyArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbkJhY2sgPSAodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpID0+IHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEJhY2sgPSAodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpID0+IHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XG59O1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dEJhY2sgPSAodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpID0+IHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIGMgLyAyICogKHQgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCAtIHMpKSArIGI7XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgKyBzKSArIDIpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZUluQm91bmNlID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICByZXR1cm4gYyAtIGVhc2VPdXRCb3VuY2UoZCAtIHQsIDAsIGMsIGQpICsgYjtcbn07XG5leHBvcnQgY29uc3QgZWFzZU91dEJvdW5jZSA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgaWYgKCh0IC89IGQpIDwgKDEgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiB0ICogdCkgKyBiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMS41IC8gMi43NSkpICogdCArIC43NSkgKyBiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgyLjI1IC8gMi43NSkpICogdCArIC45Mzc1KSArIGI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMi42MjUgLyAyLjc1KSkgKiB0ICsgLjk4NDM3NSkgKyBiO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZWFzZUluT3V0Qm91bmNlID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICBpZiAodCA8IGQgLyAyKVxuICAgICAgICByZXR1cm4gZWFzZUluQm91bmNlKHQgKiAyLCAwLCBjLCBkKSAqIC41ICsgYjtcbiAgICByZXR1cm4gZWFzZU91dEJvdW5jZSh0ICogMiAtIGQsIDAsIGMsIGQpICogLjUgKyBjICogLjUgKyBiO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogVE9ETzogcmV3b3JrIGl0IHRvIHVzZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjE0NzQ2Nzgvc2Nyb2xsdG9wLWFuaW1hdGlvbi13aXRob3V0LWpxdWVyeVxuICpcbiAqIHRha2VuIGZyb21cbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2FuZGpvc2gvNjc2NDkzOVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL3Nrcm9sbFRvcC5qcy9ibG9iL21hc3Rlci9za3JvbGxUb3AuanNcbiAqXG4gKi9cbk1hdGguZWFzZUluT3V0Q3ViaWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xuICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQgKyBiO3JldHVybiBjLzIqKCh0LT0yKSp0KnQgKyAyKSArIGI7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9VdGlsID0gKHBhcmFtcykgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gdHlwZW9mIHBhcmFtcy5lbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5lbGVtZW50IDogd2luZG93O1xuICAgIGxldCB0byA9IHBhcmFtcy50bztcbiAgICBsZXQgZHVyYXRpb24gPSB0eXBlb2YgcGFyYW1zLmR1cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5kdXJhdGlvbiA6IDI1MDtcbiAgICBsZXQgY2FsbGJhY2sgPSB0eXBlb2YgcGFyYW1zLmNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5jYWxsYmFjayA6IG51bGw7XG4gICAgbGV0IGVhc2luZyA9IHR5cGVvZiBwYXJhbXMuZWFzaW5nICE9PSAndW5kZWZpbmVkJyA/IHBhcmFtcy5lYXNpbmcgOiBNYXRoLmVhc2VJbk91dEN1YmljO1xuXG4gICAgbGV0IHN0YXJ0ID0gZWxlbWVudCE9PXdpbmRvdyA/IGVsZW1lbnQuc2Nyb2xsVG9wIDogKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcbiAgICBsZXQgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgICBsZXQgY3VycmVudFRpbWUgPSAwO1xuICAgIGxldCBpbmNyZW1lbnQgPSAxNjsgLy9zYW1lIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgYXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cbiAgICBjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuXG4gICAgICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICAgICAgdmFyIGVhc2luZ1ZhbHVlID0gZHVyYXRpb24gPyBlYXNpbmcoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKSA6IHRvO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvKDAsIGVhc2luZ1ZhbHVlKTtcblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dChhbmltYXRlU2Nyb2xsLCBpbmNyZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYW5pbWF0ZVNjcm9sbCgpO1xufTtcbiIsImltcG9ydCB7IHVfZXh0ZW5kT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdV9vYmplY3RfZXh0ZW5kJztcbmltcG9ydCB7IHVfc2xpZGVEb3duLCB1X3NsaWRlVXAgfSBmcm9tICcuLi8uLi91dGlscy91X3NsaWRlLXVwLWRvd24nO1xuaW1wb3J0IHsgdV9mYWRlSW4sIHVfZmFkZU91dCB9IGZyb20gJy4uLy4uL3V0aWxzL3VfZmFkZS1pbi1vdXQnO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tICcuLi8uLi91dGlscy91X3R5cGVzJztcbmltcG9ydCB7IHNjcm9sbFRvVXRpbCB9IGZyb20gJy4uL2FuaW1hdGlvbnMvc2Nyb2xsLXRvJztcbmltcG9ydCB7IGVhc2VJblF1YWQgfSBmcm9tICcuLi9hbmltYXRpb25zL2Vhc2luZ3MtZXM2JztcblxuY2xhc3MgRFNNUEFjY29yZGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIGRlZmF1bHQgd3JhcHBlciB2YWx1ZVxuICAgICAgICB0aGlzLndyYXBwZXIgPSAnLmpzLWFjYy13cmFwcGVyJztcblxuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgaXRlbTogJy5qcy1hY2MtaXRlbScsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy5qcy1hY2MtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnLmpzLWFjYy1jb250ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiAnLmpzLWFjYy1nYWxsZXJ5JyxcbiAgICAgICAgICAgICAgICBpdGVtOiAnLmpzLWFjYy1tZWRpYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgICAgZm9jdXM6ICdmb2N1cycsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0cnVlLCAvLyB0cnVlOiB1c2UganMgLCBmYWxzZTogdXNlIGNzc1xuICAgICAgICAgICAgICAgIGdhbGxlcnk6IGZhbHNlLCAvLyB0cnVlOiB1c2UganMgLCBmYWxzZTogdXNlIGNzc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2RhdGEtY2xvc2UnLFxuICAgICAgICAgICAgICAgIG9wZW46ICdkYXRhLWV4cGFuZCcsXG4gICAgICAgICAgICAgICAgZ2FsbGVyeTogJ2RhdGEtZ2FsbGVyeScsXG4gICAgICAgICAgICAgICAgc3RhcnRDbG9zZWQ6ICdkYXRhLXN0YXJ0LWNsb3NlZCcsXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udGVudDogJ2RhdGEtYW5pbWF0aW9uJyxcbiAgICAgICAgICAgICAgICBhbmltYXRpb25HYWxsZXJ5OiAnZGF0YS1nYWxsZXJ5LWFuaW1hdGlvbicsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2RhdGEtYWNjLWRpc3BsYXknLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvVmlldzogJ2RhdGEtc2Nyb2xsLXRvLXZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdDoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBleHBhbmQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhc0dhbGxlcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2xvc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1ZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFyaWE6IHtcbiAgICAgICAgICAgICAgICBidXR0b246ICdoZWFkZXInLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjb250ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYnJlYWtwb2ludHM6IHtcbiAgICAgICAgLy8gICAgIHRhYmxldDogMTExMyxcbiAgICAgICAgLy8gICAgICAgICBtb2JpbGU6IDc2OSxcbiAgICAgICAgLy8gfSxcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHVfZXh0ZW5kT2JqZWN0KHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgY2hhbmdlZCBzZWxlY3RvclxuICAgICAgICBpZih0eXBlb2Ygc2VsZWN0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IG5hbWUgdG8gdXNlIGZvciBhcmlhIGlkJ3MgYW5kIGNvbnRyb2xzXG4gICAgICAgIHRoaXMuZ2V0QXJpYU5hbWUoKTtcblxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLndyYXBwZXIpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRzTGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zaG91bGRTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMTEzcHgpJyk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vcHQuc2Nyb2xsVG9WaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNob3VsZFNjcm9sbCA9IHRoaXMubXFsLm1hdGNoZXM7XG5cbiAgICAgICAgICAgIHRoaXMubXFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRTY3JvbGwgPSBlLm1hdGNoZXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlciA9IHRoaXMuc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5zZWxlY3RvcnMudHJpZ2dlcik7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuc2VsZWN0b3JzLml0ZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5vcHQuaGFzR2FsbGVyeSkge1xuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5SXRlbXMgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuZ2FsbGVyeS5pdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFycmF5IGZvciBzdGFzaGluZyByZWZlcmVuY2UgdG8gYmluZGVkIGV2ZW50c1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWRkQXJpYSgpO1xuICAgICAgICB0aGlzLnByZXBhcmVGb3JBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25CaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVJbml0KCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvblVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSB0aGlzLnNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuc2VsZWN0b3JzLnRyaWdnZXIpO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5zZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnNlbGVjdG9ycy5pdGVtKTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFkZEFyaWEoKTtcbiAgICAgICAgdGhpcy5yZUluaXRBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25CaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goKGV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybjtcbiAgICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgICAgICBsZXQgZXZlbnRzO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgICAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICAgICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50cywgZGF0YSwgY29udGV4dCk7XG4gICAgICAgIGRhdGEudW5zaGlmdChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcblxuICAgICAgICBldmVudHNBcnJheS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChldmVudEhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhY2NvcmRpb25CaW5kRXZlbnRzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBlbGVtID0gc2VsZi50cmlnZ2VyO1xuXG4gICAgICAgIHNlbGYuYWRkTGlzdGVuZXJGb2N1cyA9IHNlbGYuYWRkTGlzdGVuZXJGb2N1cy5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLmFkZExpc3RlbmVyQmx1ciA9IHNlbGYuYWRkTGlzdGVuZXJCbHVyLmJpbmQoc2VsZik7XG4gICAgICAgIHNlbGYuYWRkS2V5TGlzdGVuZXIgPSBzZWxmLmFkZEtleUxpc3RlbmVyLmJpbmQoc2VsZik7XG5cbiAgICAgICAgc2VsZi5vbiA9IHNlbGYub24uYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5vZmYgPSBzZWxmLm9mZi5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLmVtaXQgPSBzZWxmLmVtaXQuYmluZChzZWxmKTtcblxuICAgICAgICBlbGVtLmZvckVhY2goKGFjYywgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJGdW5jID0gc2VsZi5hY2NvcmRpb25OYXZDbGljay5iaW5kKHNlbGYsIGkpO1xuICAgICAgICAgICAgc2VsZi5oYW5kbGVycy5wdXNoKGhhbmRsZXJGdW5jKTtcbiAgICAgICAgICAgIGFjYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXJGdW5jLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICBhY2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBzZWxmLmFkZExpc3RlbmVyRm9jdXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGFjYy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgc2VsZi5hZGRMaXN0ZW5lckJsdXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgYWNjb3JkaW9uID0gc2VsZi5zZWxlY3RvcjtcbiAgICAgICAgYWNjb3JkaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWxmLmFkZEtleUxpc3RlbmVyLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgYWNjb3JkaW9uVW5iaW5kRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbSA9IHNlbGYudHJpZ2dlcjtcblxuICAgICAgICBlbGVtLmZvckVhY2goKGFjYywgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1QYXJlbnQgPSBhY2MuY2xvc2VzdChzZWxmLmNvbmZpZy5zZWxlY3RvcnMuaXRlbSk7XG4gICAgICAgICAgICBsZXQgZWxlbUNvbnRlbnQgPSBlbGVtUGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY29udHJvbCwgaGVhZGVyO1xuICAgICAgICAgICAgaWYoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbCA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmNvbnRlbnR9LSR7aX1gO1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmJ1dHRvbn0tJHtpfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjYy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnJyk7XG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWNjLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsICcnKTtcbiAgICAgICAgICAgICAgICBhY2MucmVtb3ZlQXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYuaGFuZGxlcnNbaV0pO1xuICAgICAgICAgICAgYWNjLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgc2VsZi5hZGRMaXN0ZW5lckZvY3VzKTtcbiAgICAgICAgICAgIGFjYy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgc2VsZi5hZGRMaXN0ZW5lckJsdXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWNjb3JkaW9uID0gc2VsZi5zZWxlY3RvcjtcbiAgICAgICAgYWNjb3JkaW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWxmLmFkZEtleUxpc3RlbmVyKTtcbiAgICAgICAgc2VsZi5yZW1vdmVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBhY2NvcmRpb25OYXZDbGljayhpLCBldikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtQ2xpY2tlZCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgc2VsZi5hY2NvcmRpb25Db250ZW50Y2hhbmdlKGksIGN1cnJlbnRJdGVtQ2xpY2tlZCwgZXYpO1xuXG4gICAgfVxuXG4gICAgYWNjb3JkaW9uQ29udGVudGNoYW5nZShpLCBlbGVtLCBldikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjdXJyZW50SXRlbUNsaWNrZWQgPSBlbGVtO1xuICAgICAgICBjb25zdCBlbGVtcyA9IHNlbGYuaXRlbXM7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBjdXJyZW50SXRlbUNsaWNrZWQuY2xvc2VzdChzZWxmLmNvbmZpZy5zZWxlY3RvcnMuaXRlbSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtQ29udGVudCA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IGN1cnJlbnRJdGVtQ2xpY2tlZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcub3B0LmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHVfc2xpZGVVcChjdXJyZW50SXRlbUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtQ2xpY2tlZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAhZXhwYW5kZWQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZXhwYW5kZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5vcHQuZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1UcmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9ycy50cmlnZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVfc2xpZGVVcChpdGVtQ29udGVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB1X3NsaWRlRG93bihjdXJyZW50SXRlbUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1DbGlja2VkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1Db250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBleHBhbmRlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB1X3NsaWRlRG93bihjdXJyZW50SXRlbUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1DbGlja2VkLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFleHBhbmRlZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1Db250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBleHBhbmRlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5vcHQuaGFzR2FsbGVyeSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWNjb3JkaW9uQ2hhbmdlR2FsbGVyeShpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuc2hvdWxkU2Nyb2xsICYmIHNlbGYuY3VycmVudEluZGV4IDwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2Nyb2xsVG9BY2NvcmRpb24oaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2aW91c0luZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaTtcblxuICAgICAgICBzZWxmLmVtaXQoJ2FjY29yZGlvbkNoYW5nZScsIGV2KTtcbiAgICB9XG5cbiAgICBuZXh0QWNjb3JkaW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG5leHRFbGVtID0gc2VsZi5jdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRWxlbSA9IHNlbGYuaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIG5leHRFbGVtID09PSBudW1iZXJPZkVsZW0gLSAxID8gbmV4dEVsZW0gPSAwIDogbmV4dEVsZW0gKz0gMTtcbiAgICAgICAgY29uc3QgbmV4dEVsZW1JdGVtID0gc2VsZi5pdGVtc1tuZXh0RWxlbV07XG5cbiAgICAgICAgc2VsZi5hY2NvcmRpb25Db250ZW50Y2hhbmdlKG5leHRFbGVtLCBuZXh0RWxlbUl0ZW0sIG51bGwpO1xuICAgIH1cblxuICAgIHByZXZBY2NvcmRpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcHJldkVsZW0gPSBzZWxmLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZFbGVtID0gc2VsZi5pdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgcHJldkVsZW0gPT09IDAgPyBwcmV2RWxlbSA9IG51bWJlck9mRWxlbSAtIDEgOiBwcmV2RWxlbSAtPSAxO1xuICAgICAgICBjb25zdCBwcmV2RWxlbUl0ZW0gPSBzZWxmLml0ZW1zW3ByZXZFbGVtXTtcblxuICAgICAgICBzZWxmLmFjY29yZGlvbkNvbnRlbnRjaGFuZ2UocHJldkVsZW0sIHByZXZFbGVtSXRlbSwgbnVsbCk7XG4gICAgfVxuXG4gICAgYWNjb3JkaW9uQ2hhbmdlR2FsbGVyeShpKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGdhbGxlcnlJdGVtcyA9IFsuLi5zZWxmLmdhbGxlcnlJdGVtc107XG5cbiAgICAgICAgZ2FsbGVyeUl0ZW1zLmZvckVhY2goKGdhbGxlcnkpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5nYWxsZXJ5KSB7XG4gICAgICAgICAgICAgICAgdV9mYWRlT3V0KGdhbGxlcnksIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGdhbGxlcnlJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVfZmFkZUluKG5ld0l0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbGxlcnkuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZighc2VsZi5jb25maWcuYW5pbWF0aW9uLmdhbGxlcnkpIHtcbiAgICAgICAgICAgIGdhbGxlcnlJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJlcGFyZUZvckFuaW1hdGlvbigpIHtcbiAgICAgICAgLyogY2hlY2sgd2hldGhlciBpdGVtcyBjb250YWlucyBpcy1hY3RpdmUgY2xhc3MsIGlmIGl0cyBub3Qgc3RhcnQgY2xvc2VkIGFsbCxcbiAgICAgICAgZmlyc3QgaXRlbSBzaG91bGQgaGF2ZSBpcy1hY3RpdmUgY2xhc3MgYW5kIGl0cyBjb250ZW50IHNob3VsZCBiZSBzZXQgdG9cbiAgICAgICAgZGlzcGxheSBibG9jayAvIGZsZXgsIG90aGVyd2lzZSwgaGlkZSBpdFxuICAgICAgICAqL1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpdGVtcyA9IHNlbGYuaXRlbXM7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGFjdGl2ZUZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50KSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChsaXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBsaXN0LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLm9wdC5zdGFydENsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Db250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFhY3RpdmVGb3VuZCAmJiAhc2VsZi5jb25maWcub3B0LnN0YXJ0Q2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTBDb250ZW50ID0gaXRlbXNbMF0ucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbMF0uY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgaXRlbTBDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLmNvbmZpZy5jbGFzc2VzLmRpc3BsYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZUluaXRBbmltYXRpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGl0ZW1zID0gc2VsZi5pdGVtcztcblxuICAgICAgICBpZihzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgobGlzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtQ29udGVudCA9IGxpc3QucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVTdHlsZXMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGl0ZW1zID0gc2VsZi5pdGVtcztcblxuICAgICAgICBpZihzZWxmLmNvbmZpZy5hbmltYXRpb24uY29udGVudCkge1xuXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChsaXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1Db250ZW50ID0gbGlzdC5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9ycy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBpdGVtQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBpc1NlbGZDbG9zZSA9IHVfcGFyc2VCb29sKHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuY2xvc2UpKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub3B0LmNsb3NlO1xuICAgICAgICBpZiAoaXNTZWxmQ2xvc2UpIHtcbiAgICAgICAgICAgIGlzU2VsZkNsb3NlID8gc2VsZi5jb25maWcub3B0LmNsb3NlID0gdHJ1ZSA6IHNlbGYuY29uZmlnLm9wdC5jbG9zZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIGxlYXZlIG9wZW4gaXMgdHJ1ZSwgc2VsZiBjbG9zZSBzaG91bGQgYXV0b21hdGljYWxseSBiZSB0cnVlLFxuICAgICAgICAgKiBvdGhlcndpc2Ugd2Ugd29udCBiZSBhYmxlIHRvIGNsb3NlIG9uIHNlbGYgY2xpY2tcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uc3QgaXNMZWF2ZU9wZW4gPSB1X3BhcnNlQm9vbChzZWxmLnNlbGVjdG9yLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5hdHRyLm9wZW4pKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub3B0LmV4cGFuZDtcblxuICAgICAgICBpZiAoaXNMZWF2ZU9wZW4pIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5leHBhbmQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LmNsb3NlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5leHBhbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhcnRDbG9zZWQgPSB1X3BhcnNlQm9vbChzZWxmLnNlbGVjdG9yLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5hdHRyLnN0YXJ0Q2xvc2VkKSlcbiAgICAgICAgICAgIHx8IHNlbGYuY29uZmlnLm9wdC5zdGFydENsb3NlZDtcblxuICAgICAgICBpZiAoaXNTdGFydENsb3NlZCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LnN0YXJ0Q2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5jbG9zZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0dhbGxlcnkgPSB1X3BhcnNlQm9vbChzZWxmLnNlbGVjdG9yLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5hdHRyLmdhbGxlcnkpKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub3B0Lmhhc0dhbGxlcnk7XG4gICAgICAgIGlmIChpc0dhbGxlcnkpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5oYXNHYWxsZXJ5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBnYWxsZXJ5LCBzZWxmIGNsb3NlIGFuZCBleHBhbmQgaXMgYnkgZGVmYXVsdCBvZmZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5leHBhbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9wdC5jbG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LnN0YXJ0Q2xvc2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltYXRlQ29udGVudCA9IHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuYW5pbWF0aW9uQ29udGVudCk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGVDb250ZW50KSB7XG4gICAgICAgICAgICBhbmltYXRlQ29udGVudCA9PT0gJ2pzJyA/IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50ID0gdHJ1ZSA6IHNlbGYuY29uZmlnLmFuaW1hdGlvbi5jb250ZW50ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbmltYXRlR2FsbGVyeSA9IHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuYW5pbWF0aW9uR2FsbGVyeSk7XG4gICAgICAgIGlmIChhbmltYXRlR2FsbGVyeSkge1xuICAgICAgICAgICAgYW5pbWF0ZUdhbGxlcnkgPT09ICdqcycgPyBzZWxmLmNvbmZpZy5hbmltYXRpb24uZ2FsbGVyeSA9IHRydWUgOiBzZWxmLmNvbmZpZy5hbmltYXRpb24uZ2FsbGVyeSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHNlbGYuc2VsZWN0b3IuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmF0dHIuZGlzcGxheSlcbiAgICAgICAgICAgIHx8IHNlbGYuY29uZmlnLmNsYXNzZXMuZGlzcGxheTtcbiAgICAgICAgc2VsZi5jb25maWcuY2xhc3Nlcy5kaXNwbGF5ID0gZGlzcGxheSA9PT0gJ2ZsZXgnID8gJ2ZsZXgnIDogJ2Jsb2NrJztcblxuICAgICAgICBjb25zdCBpc1Njcm9sbFRvVmlldyA9IHVfcGFyc2VCb29sKFxuICAgICAgICAgICAgc2VsZi5zZWxlY3Rvci5nZXRBdHRyaWJ1dGUoc2VsZi5jb25maWcuYXR0ci5zY3JvbGxUb1ZpZXcpLFxuICAgICAgICApIHx8IHNlbGYuY29uZmlnLm9wdC5zY3JvbGxUb1ZpZXc7XG4gICAgICAgIGlmIChpc1Njcm9sbFRvVmlldykge1xuICAgICAgICAgICAgc2VsZi5jb25maWcub3B0LnNjcm9sbFRvVmlldyA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5vcHQuZXhwYW5kID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmVtaXQoJ29wdGlvbnNQYXJzZWQnKTtcbiAgICB9XG5cbiAgICAvLyBzbWFsbCBmdW5jdGlvbiB0byBjaGVjayBmb3IgdmFsaWQgSUQgb2Ygd3JhcHBlclxuICAgIGlzVmFsaWRJZChzKSB7XG4gICAgICAgIHJldHVybiAvXlteXFxzXSskLy50ZXN0KHMpO1xuICAgIH1cblxuICAgIGdldEFyaWFOYW1lKCkge1xuICAgICAgICBsZXQgYXJpYU5hbWUgPSB0aGlzLndyYXBwZXIuc2xpY2UoMSk7XG4gICAgICAgIGlmKHRoaXMuaXNWYWxpZElkKGFyaWFOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuYXJpYS5uYW1lID0gYXJpYU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hcmlhLm5hbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEFyaWEoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi50cmlnZ2VyO1xuXG4gICAgICAgIGVsZW0uZm9yRWFjaCgoYWNjLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtUGFyZW50ID0gYWNjLmNsb3Nlc3Qoc2VsZi5jb25maWcuc2VsZWN0b3JzLml0ZW0pO1xuICAgICAgICAgICAgY29uc3QgZWxlbUNvbnRlbnQgPSBlbGVtUGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuc2VsZWN0b3JzLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICBsZXQgY29udHJvbCxcbiAgICAgICAgICAgICAgICBoZWFkZXI7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbCA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmNvbnRlbnR9LSR7aX1gO1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IGAke3NlbGYuY29uZmlnLmFyaWEubmFtZX0tJHtzZWxmLmNvbmZpZy5hcmlhLmJ1dHRvbn0tJHtpfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtUGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhzZWxmLmNvbmZpZy5jbGFzc2VzLmFjdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1Db250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1Db250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJpYS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgIGFjYy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsIGNvbnRyb2wpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGhlYWRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncmVnaW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVyRm9jdXMoZXYpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZWxlbSA9IGV2LnRhcmdldDtcblxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5mb2N1cyk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJCbHVyKGV2KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGVsZW0gPSBldi50YXJnZXQ7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLmZvY3VzKTtcbiAgICB9XG5cbiAgICBhZGRLZXlMaXN0ZW5lcihldikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBlbGVtID0gZXYudGFyZ2V0O1xuICAgICAgICBsZXQga2V5ID0gZXYud2hpY2gudG9TdHJpbmcoKTtcblxuICAgICAgICBsZXQgdHJpZ2dlcnMgPSBbLi4uc2VsZi50cmlnZ2VyXTtcblxuICAgICAgICBsZXQgdHJpZ2dlckNsYXNzID0gc2VsZi5jb25maWcuc2VsZWN0b3JzLnRyaWdnZXIuc2xpY2UoMSk7XG5cbiAgICAgICAgLy8gMzMgPSBQYWdlIFVwLCAzNCA9IFBhZ2UgRG93blxuICAgICAgICBsZXQgY3RybE1vZGlmaWVyID0gKGV2LmN0cmxLZXkgJiYga2V5Lm1hdGNoKC8zM3wzNC8pKTtcblxuICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnModHJpZ2dlckNsYXNzKSkge1xuICAgICAgICAgICAgLy8gVXAvIERvd24gYXJyb3cgYW5kIENvbnRyb2wgKyBQYWdlIFVwLyBQYWdlIERvd24ga2V5Ym9hcmQgb3BlcmF0aW9uc1xuICAgICAgICAgICAgLy8gMzggPSBVcCwgNDAgPSBEb3duXG4gICAgICAgICAgICBpZiAoa2V5Lm1hdGNoKC8zOHw0MC8pIHx8IGN0cmxNb2RpZmllcikge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyaWdnZXJzLmluZGV4T2YoZWxlbSk7XG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IChrZXkubWF0Y2goLzM0fDQwLykpID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSB0cmlnZ2Vycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gKGluZGV4ICsgbGVuZ3RoICsgZGlyZWN0aW9uKSAlIGxlbmd0aDtcbiAgICAgICAgICAgICAgICB0cmlnZ2Vyc1tuZXdJbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5tYXRjaCgvMzV8MzYvKSkge1xuICAgICAgICAgICAgICAgIC8vIDM1ID0gRW5kLCAzNiA9IEhvbWUga2V5Ym9hcmQgb3BlcmF0aW9uc1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRvIGZpcnN0IGFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICBjYXNlICczNic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vyc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRvIGxhc3QgYWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzM1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzW3RyaWdnZXJzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb0FjY29yZGlvbihjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBzZWxmLnRyaWdnZXJbMF07XG4gICAgICAgIGNvbnN0IHNjcm9sbEN1cnJlbnRDb250ZW50ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZWxlbUhlaWdodCA9IHNjcm9sbEN1cnJlbnRDb250ZW50LmhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbUhlaWdodCAqIGN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvID0gc2Nyb2xsQ3VycmVudENvbnRlbnQudG9wICsgY3VycmVudFNjcm9sbFBvcyArIG9mZnNldCAtIDgwO1xuXG4gICAgICAgIHNjcm9sbFRvVXRpbCh7XG4gICAgICAgICAgICB0bzogc2Nyb2xsVG8sXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlSW5RdWFkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRFNNUEFjY29yZGlvbnM7IiwiaW1wb3J0IERTTVBUYWJzQ2xhc3MgZnJvbSAnLi9EU01QVGFic0NsYXNzJztcbmltcG9ydCB7IHVfZXh0ZW5kT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdV9vYmplY3RfZXh0ZW5kJztcblxuY2xhc3MgRFNNUFRhYnNEcm9wZG93biBleHRlbmRzIERTTVBUYWJzQ2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd3JhcHBlcjogJy5qcy10YWJzRHJvcC13cmFwcGVyJyxcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiAnLmpzLXRhYnMtZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIHBhbmVsOiAnLmpzLXRhYnMtcGFuZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6ICdkYXRhLXRhYicsXG4gICAgICAgICAgICBicmVha3BvaW50czogJ3RhYmxldCcsIC8vIHRhYmxldCwgZGVza3RvcCwgZGVza3RvcC1sLCBhbGwsICBsZWF2ZSBlbXB0eSBmb3IgZGlzYWJsZWRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHVfZXh0ZW5kT2JqZWN0KHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3JEcm9wZG93biA9IGAke3RoaXMuY29uZmlnLndyYXBwZXJ9ICR7dGhpcy5jb25maWcuc2VsZWN0b3JzLmRyb3Bkb3dufWA7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JQYW5lbHMgPSBgJHt0aGlzLmNvbmZpZy53cmFwcGVyfSAke3RoaXMuY29uZmlnLnNlbGVjdG9ycy5wYW5lbH1gO1xuXG4gICAgICAgIHRoaXMuaXRlbXNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvckRyb3Bkb3duKTtcbiAgICAgICAgdGhpcy5wYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3JQYW5lbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5icmVha3BvaW50cyAhPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7dGhpcy5icmVha3BvaW50c1t0aGlzLmNvbmZpZy5icmVha3BvaW50c119cHgpYCk7XG4gICAgICAgICAgICB0aGlzLm1lZGlhTWF0Y2ggPSB0aGlzLm1xbC5tYXRjaGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZWRpYU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pdGVtc0Ryb3Bkb3duLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEZ1bmN0aW9ucygpO1xuICAgICAgICB0aGlzLmJpbmRUYWJzRHJvcGRvd25FdmVudCgpO1xuICAgICAgICBzdXBlci5iaW5kVGFiUGFuZWxFdmVudCgpO1xuICAgIH1cblxuICAgIGJpbmRGdW5jdGlvbnMoKSB7XG4gICAgICAgIHRoaXMudGFiRHJvcGRvd25DaGFuZ2UgPSB0aGlzLnRhYkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgc3VwZXIudGFiTmF2Q2xpY2sgPSBzdXBlci50YWJOYXZDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICBzdXBlci5tZWRpYU1hdGNoZXMgPSBzdXBlci5tZWRpYU1hdGNoZXMuYmluZCh0aGlzKTtcbiAgICAgICAgc3VwZXIub25Td2lwZVN0YXJ0ID0gc3VwZXIub25Td2lwZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHN1cGVyLm9uU3dpcGVFbmQgPSBzdXBlci5vblN3aXBlRW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5tcWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc3VwZXIubWVkaWFNYXRjaGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRUYWJzRHJvcGRvd25FdmVudCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3ducyA9IHNlbGYuaXRlbXNEcm9wZG93bjtcblxuICAgICAgICBkcm9wZG93bnMuZm9yRWFjaCgoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNlbGYudGFiRHJvcGRvd25DaGFuZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0YWJEcm9wZG93bkNoYW5nZShldikge1xuICAgICAgICBjb25zdCBjdXJyRHJvcGRvd24gPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiSUQgPSBjdXJyRHJvcGRvd24udmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGN1cnJEcm9wZG93bi5vcHRpb25zLnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyRHJvcGRvd24ub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY3VyckRyb3Bkb3duLm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJEcm9wZG93bi5vcHRpb25zW2N1cnJlbnRJbmRleF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXG4gICAgICAgIHN1cGVyLnRhYlBhbmVsQ2hhbmdlKGN1cnJlbnRUYWJJRCk7XG4gICAgfVxuXG4gICAgdW5iaW5kVGFic0Ryb3Bkb3duRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBzZWxmLml0ZW1zRHJvcGRvd247XG5cbiAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZWxmLnRhYkRyb3Bkb3duQ2hhbmdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERTTVBUYWJzRHJvcGRvd247XG4iLCJpbXBvcnQgRFNNUFRhYnNDbGFzcyBmcm9tICcuL0RTTVBUYWJzQ2xhc3MnO1xuaW1wb3J0IHsgdV9leHRlbmRPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy91X29iamVjdF9leHRlbmQnO1xuXG5jbGFzcyBEU01QVGFic1RhYiBleHRlbmRzIERTTVBUYWJzQ2xhc3Mge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgd3JhcHBlcjogJy5qcy10YWJzLXdyYXBwZXInLFxuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgbmF2OiAnLmpzLXRhYnMtbmF2LWl0ZW0nLFxuICAgICAgICAgICAgICAgIHBhbmVsOiAnLmpzLXRhYnMtcGFuZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6ICdkYXRhLXRhYicsXG4gICAgICAgICAgICBicmVha3BvaW50czogJ3RhYmxldCcsIC8vIHRhYmxldCwgZGVza3RvcCwgZGVza3RvcC1sLCBhbGwsICBsZWF2ZSBlbXB0eSBmb3IgZGlzYWJsZWRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHVfZXh0ZW5kT2JqZWN0KHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBgJHt0aGlzLmNvbmZpZy53cmFwcGVyfSAke3RoaXMuY29uZmlnLnNlbGVjdG9ycy5uYXZ9YDtcbiAgICAgICAgdGhpcy5zZWxlY3RvclBhbmVscyA9IGAke3RoaXMuY29uZmlnLndyYXBwZXJ9ICR7dGhpcy5jb25maWcuc2VsZWN0b3JzLnBhbmVsfWA7XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yUGFuZWxzKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYnJlYWtwb2ludHMgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLm1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuYnJlYWtwb2ludHNbdGhpcy5jb25maWcuYnJlYWtwb2ludHNdfXB4KWApO1xuICAgICAgICAgICAgdGhpcy5tZWRpYU1hdGNoID0gdGhpcy5tcWwubWF0Y2hlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVkaWFNYXRjaCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBzdXBlci5nZXROYXZUYWJJRCh0aGlzLml0ZW1zWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5iaW5kRnVuY3Rpb25zKCk7XG4gICAgICAgIHN1cGVyLmJpbmRUYWJOYXZFdmVudCgpO1xuICAgICAgICBzdXBlci5iaW5kVGFiUGFuZWxFdmVudCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEU01QVGFic1RhYjtcbiIsImltcG9ydCB7dV9leHRlbmRPYmplY3R9IGZyb20gJy4uLy4uL3V0aWxzL3Vfb2JqZWN0X2V4dGVuZCc7XG5pbXBvcnQgRFNNUFRhYnNDbGFzcyBmcm9tICcuL0RTTVBUYWJzQ2xhc3MnO1xuXG5jbGFzcyBEU01QVGFic1RhYkRyb3Bkb3duIGV4dGVuZHMgRFNNUFRhYnNDbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB3cmFwcGVyOiAnLmpzLXRhYnNUYWJEcm9wLXdyYXBwZXInLFxuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgbmF2OiAnLmpzLXRhYnMtbmF2LWl0ZW0nLFxuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiAnLmpzLXRhYnMtZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIHBhbmVsOiAnLmpzLXRhYnMtcGFuZWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6ICdkYXRhLXRhYicsXG4gICAgICAgICAgICBicmVha3BvaW50czogJ3RhYmxldCcsIC8vIHRhYmxldCwgZGVza3RvcCwgZGVza3RvcC1sLCBhbGwsICBsZWF2ZSBlbXB0eSBmb3IgZGlzYWJsZWRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHVfZXh0ZW5kT2JqZWN0KHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3JUYWJzID0gYCR7dGhpcy5jb25maWcud3JhcHBlcn0gJHt0aGlzLmNvbmZpZy5zZWxlY3RvcnMubmF2fWA7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JEcm9wZG93biA9IGAke3RoaXMuY29uZmlnLndyYXBwZXJ9ICR7dGhpcy5jb25maWcuc2VsZWN0b3JzLmRyb3Bkb3dufWA7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JQYW5lbHMgPSBgJHt0aGlzLmNvbmZpZy53cmFwcGVyfSAke3RoaXMuY29uZmlnLnNlbGVjdG9ycy5wYW5lbH1gO1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3JUYWJzKTtcbiAgICAgICAgdGhpcy5pdGVtc0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yRHJvcGRvd24pO1xuICAgICAgICB0aGlzLnBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvclBhbmVscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmJyZWFrcG9pbnRzW3RoaXMuY29uZmlnLmJyZWFrcG9pbnRzXX1weClgKTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFNYXRjaCA9IHRoaXMubXFsLm1hdGNoZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhTWF0Y2ggPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLml0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuaW5pdFRhYnNEcm9wZG93bigpO1xuICAgIH1cblxuICAgIGluaXRUYWJzRHJvcGRvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gc3VwZXIuZ2V0TmF2VGFiSUQodGhpcy5pdGVtc1swXSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU5hdiA9IHRoaXMuaXRlbXNbMF07XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gdGhpcy5wYW5lbHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kRnVuY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYmluZFRhYk5hdkV2KCk7XG4gICAgICAgIHRoaXMuYmluZFRhYnNEcm9wZG93bkV2ZW50KCk7XG4gICAgICAgIHN1cGVyLmJpbmRUYWJQYW5lbEV2ZW50KCk7XG4gICAgfVxuXG4gICAgYmluZEZ1bmN0aW9ucygpIHtcbiAgICAgICAgdGhpcy50YWJEcm9wZG93bkNoYW5nZSA9IHRoaXMudGFiRHJvcGRvd25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50YWJOYXZDbGljayA9IHRoaXMudGFiTmF2Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZWRpYU1hdGNoZXMgPSB0aGlzLm1lZGlhTWF0Y2hlcy5iaW5kKHRoaXMpO1xuICAgICAgICBzdXBlci5vblN3aXBlU3RhcnQgPSBzdXBlci5vblN3aXBlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgc3VwZXIub25Td2lwZUVuZCA9IHN1cGVyLm9uU3dpcGVFbmQuYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYnJlYWtwb2ludHMgIT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLm1xbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1lZGlhTWF0Y2hlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kVGFic0Ryb3Bkb3duRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBzZWxmLml0ZW1zRHJvcGRvd247XG5cbiAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZWxmLnRhYkRyb3Bkb3duQ2hhbmdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWVkaWFNYXRjaGVzKGUpIHtcbiAgICAgICAgdGhpcy5tZWRpYU1hdGNoID0gZS5tYXRjaGVzO1xuXG4gICAgICAgIGlmICh0aGlzLm1lZGlhTWF0Y2gpIHtcbiAgICAgICAgICAgIHN1cGVyLmJpbmRUYWJQYW5lbEV2ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51bmJpbmRUYWJQYW5lbEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kVGFiTmF2RXYoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcblxuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi50YWJOYXZDbGljaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0YWJOYXZDbGljayhldikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJRCA9IHN1cGVyLmdldE5hdlRhYklEKGN1cnJlbnRUYWIpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0b3IgPSBjdXJyZW50VGFiLmNsb3Nlc3Qoc2VsZi5jb25maWcud3JhcHBlcik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREcm9wZG93biA9IGN1cnJlbnRTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9ycy5kcm9wZG93bik7XG5cbiAgICAgICAgbGV0IG5ld0luZGV4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnREcm9wZG93bi5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERyb3Bkb3duLm9wdGlvbnNbaV0udmFsdWUgPT09IGN1cnJlbnRUYWJJRCkge1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudXBkYXRlVGFiTmF2KGN1cnJlbnRUYWIpO1xuICAgICAgICBzZWxmLnVwZGF0ZURyb3Bkb3duKGN1cnJlbnREcm9wZG93biwgbmV3SW5kZXgpO1xuICAgICAgICBzdXBlci50YWJQYW5lbENoYW5nZShjdXJyZW50VGFiSUQpO1xuICAgIH1cblxuICAgIHRhYkRyb3Bkb3duQ2hhbmdlKGV2KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBjdXJyRHJvcGRvd24gPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjdXJyRHJvcGRvd24ub3B0aW9ucy5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWJJRCA9IGN1cnJEcm9wZG93bi52YWx1ZTtcbiAgICAgICAgY29uc3QgY3VycmVudE5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHtzZWxmLmNvbmZpZy5kYXRhfT0nJHtjdXJyZW50VGFiSUR9J11gKTtcblxuICAgICAgICBzZWxmLnVwZGF0ZURyb3Bkb3duKGN1cnJEcm9wZG93biwgY3VycmVudEluZGV4KTtcbiAgICAgICAgc2VsZi51cGRhdGVUYWJOYXYoY3VycmVudE5hdkl0ZW0pO1xuICAgICAgICBzdXBlci50YWJQYW5lbENoYW5nZShjdXJyZW50VGFiSUQpO1xuICAgIH1cblxuICAgIHVwZGF0ZURyb3Bkb3duKGN1cnJlbnREcm9wLCBuZXdEcm9wSW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGN1cnJEcm9wZG93biA9IGN1cnJlbnREcm9wO1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBuZXdEcm9wSW5kZXg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyRHJvcGRvd24ub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY3VyckRyb3Bkb3duLm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJEcm9wZG93bi5vcHRpb25zW2N1cnJlbnRJbmRleF0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICBjdXJyRHJvcGRvd24ub3B0aW9ucy5zZWxlY3RlZEluZGV4ID0gY3VycmVudEluZGV4O1xuICAgIH1cblxuICAgIHVwZGF0ZVRhYk5hdihjdXJyVGFiKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gY3VyclRhYjtcbiAgICAgICAgc2VsZi5hY3RpdmVOYXYgPSBjdXJyVGFiO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0b3IgPSBjdXJyZW50VGFiLmNsb3Nlc3Qoc2VsZi5jb25maWcud3JhcHBlcik7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBjdXJyZW50U2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbChzZWxmLmNvbmZpZy5zZWxlY3RvcnMubmF2KTtcblxuICAgICAgICBzdXBlci5jbGVhckFjdGl2ZUNsYXNzKGVsZW0sICduYXYnKTtcbiAgICAgICAgc3VwZXIuc2V0QWN0aXZlQ2xhc3MoY3VycmVudFRhYiwgJ25hdicpO1xuICAgIH1cblxuICAgIHVuYmluZFRhYnNEcm9wRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZHJvcGRvd25zID0gc2VsZi5pdGVtc0Ryb3Bkb3duO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcbiAgICAgICAgY29uc3QgeyBwYW5lbHMgfSA9IHNlbGY7XG5cbiAgICAgICAgZWxlbS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHRhYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYudGFiTmF2Q2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzZWxmLm9uU3dpcGVTdGFydCk7XG4gICAgICAgICAgICBwYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZWxmLnRhYkRyb3Bkb3duQ2hhbmdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dFRhYigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHNlbGY7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gc2VsZi5jdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRWxlbSA9IHNlbGYuaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgZm91bmRJbmRleCA9IDA7XG4gICAgICAgIGxldCBuZXh0RWxlbTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgWyR7c2VsZi5jb25maWcuZGF0YX09JyR7Y3VycmVudEl0ZW19J11gKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdG9yID0gY3VycmVudFRhYi5jbG9zZXN0KHNlbGYuY29uZmlnLndyYXBwZXIpO1xuICAgICAgICBjb25zdCBjdXJyZW50RHJvcGRvd24gPSBjdXJyZW50U2VsZWN0b3IucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3RvcnMuZHJvcGRvd24pO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JRCA9IHNlbGYuZ2V0TmF2VGFiSUQoaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXRlbUlEID09PSBjdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIGZvdW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZm91bmRJbmRleCA8IG51bWJlck9mRWxlbSAtIDEpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlQWN0aXZlVGFiKGZvdW5kSW5kZXggKyAxKTtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlRHJvcGRvd24oY3VycmVudERyb3Bkb3duLCBmb3VuZEluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2VGFiKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gc2VsZjtcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBzZWxmLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZFbGVtID0gc2VsZi5pdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBmb3VuZEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHByZXZFbGVtO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbJHtzZWxmLmNvbmZpZy5kYXRhfT0nJHtjdXJyZW50SXRlbX0nXWApO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0b3IgPSBjdXJyZW50VGFiLmNsb3Nlc3Qoc2VsZi5jb25maWcud3JhcHBlcik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREcm9wZG93biA9IGN1cnJlbnRTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9ycy5kcm9wZG93bik7XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlEID0gc2VsZi5nZXROYXZUYWJJRChpdGVtKTtcbiAgICAgICAgICAgIGlmIChpdGVtSUQgPT09IGN1cnJlbnRJdGVtKSB7XG4gICAgICAgICAgICAgICAgZm91bmRJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmb3VuZEluZGV4ID4gMCkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2VBY3RpdmVUYWIoZm91bmRJbmRleCAtIDEpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVEcm9wZG93bihjdXJyZW50RHJvcGRvd24sIGZvdW5kSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEU01QVGFic1RhYkRyb3Bkb3duO1xuIiwiY2xhc3MgRFNNUFRhYnNDbGFzcyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmFjdGl2ZU5hdiA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuYnJlYWtwb2ludHMgPSB7XG4gICAgICAgICAgICB0YWJsZXQ6IDc2OCxcbiAgICAgICAgICAgIGRlc2t0b3A6IDExMTIsXG4gICAgICAgICAgICAnZGVza3RvcC1sJzogMTQ0MCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kRnVuY3Rpb25zKCkge1xuICAgICAgICB0aGlzLnRhYk5hdkNsaWNrID0gdGhpcy50YWJOYXZDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1lZGlhTWF0Y2hlcyA9IHRoaXMubWVkaWFNYXRjaGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Td2lwZVN0YXJ0ID0gdGhpcy5vblN3aXBlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblN3aXBlRW5kID0gdGhpcy5vblN3aXBlRW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzICE9PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5tcWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tZWRpYU1hdGNoZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVkaWFNYXRjaGVzKGUpIHtcbiAgICAgICAgdGhpcy5tZWRpYU1hdGNoID0gZS5tYXRjaGVzO1xuXG4gICAgICAgIGlmICh0aGlzLm1lZGlhTWF0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZFRhYlBhbmVsRXZlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kVGFiUGFuZWxFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFRhYk5hdkV2ZW50KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbSA9IHNlbGYuaXRlbXM7XG5cbiAgICAgICAgZWxlbS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYudGFiTmF2Q2xpY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFRhYlBhbmVsRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCB7IHBhbmVscyB9ID0gc2VsZjtcblxuICAgICAgICBpZiAoc2VsZi5tZWRpYU1hdGNoKSB7XG4gICAgICAgICAgICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICAgICAgICAgICAgICBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZWxmLm9uU3dpcGVTdGFydCk7XG4gICAgICAgICAgICAgICAgcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgICAgICBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgICAgICAgICBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNlbGYub25Td2lwZUVuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZFRhYlBhbmVsRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCB7IHBhbmVscyB9ID0gc2VsZjtcblxuICAgICAgICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzZWxmLm9uU3dpcGVTdGFydCk7XG4gICAgICAgICAgICBwYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5iaW5kVGFiTmF2RXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcbiAgICAgICAgY29uc3QgeyBwYW5lbHMgfSA9IHNlbGY7XG5cbiAgICAgICAgZWxlbS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHRhYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGYudGFiTmF2Q2xpY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNlbGYub25Td2lwZVN0YXJ0KTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzZWxmLm9uU3dpcGVTdGFydCk7XG4gICAgICAgICAgICBwYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgICAgIHBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc2VsZi5vblN3aXBlRW5kKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmJyZWFrcG9pbnRzICE9PSAnYWxsJykge1xuICAgICAgICAgICAgc2VsZi5tcWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2VsZi5tZWRpYU1hdGNoZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFiTmF2Q2xpY2soZXYpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBzZWxmLmFjdGl2ZU5hdiA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RvciA9IGN1cnJlbnRUYWIuY2xvc2VzdChzZWxmLmNvbmZpZy53cmFwcGVyKTtcbiAgICAgICAgY29uc3QgZWxlbSA9IGN1cnJlbnRTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHNlbGYuY29uZmlnLnNlbGVjdG9ycy5uYXYpO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFiSUQgPSBzZWxmLmdldE5hdlRhYklEKGN1cnJlbnRUYWIpO1xuXG4gICAgICAgIHNlbGYuY2xlYXJBY3RpdmVDbGFzcyhlbGVtLCAnbmF2Jyk7XG4gICAgICAgIHNlbGYuc2V0QWN0aXZlQ2xhc3MoY3VycmVudFRhYiwgJ25hdicpO1xuICAgICAgICBzZWxmLnRhYlBhbmVsQ2hhbmdlKGN1cnJlbnRUYWJJRCk7XG4gICAgfVxuXG4gICAgdGFiUGFuZWxDaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50UGFuZWxJRCA9IGAke3NlbGYuY29uZmlnLmRhdGF9LSR7aW5kZXh9YDtcbiAgICAgICAgY29uc3QgY3VycmVudFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVudFBhbmVsSUR9YCk7XG4gICAgICAgIHNlbGYuYWN0aXZlUGFuZWwgPSBjdXJyZW50UGFuZWw7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYW5lbEhvbGRlciA9IGN1cnJlbnRQYW5lbC5jbG9zZXN0KHNlbGYuY29uZmlnLndyYXBwZXIpO1xuICAgICAgICBjb25zdCBlbGVtID0gY3VycmVudFBhbmVsSG9sZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZi5jb25maWcuc2VsZWN0b3JzLnBhbmVsKTtcblxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRQYW5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuY2xlYXJBY3RpdmVDbGFzcyhlbGVtLCAncGFuZWwnKTtcbiAgICAgICAgc2VsZi5zZXRBY3RpdmVDbGFzcyhjdXJyZW50UGFuZWwsICdwYW5lbCcpO1xuICAgICAgICBzZWxmLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICBzZWxmLmVtaXQoJ3RhYnNDaGFuZ2UnKTtcbiAgICB9XG5cbiAgICBnZXROYXZUYWJJRChpbmRleCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZGF0YUlEID0gaW5kZXguZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YUlEO1xuICAgIH1cblxuICAgIGNsZWFyQWN0aXZlQ2xhc3MoZWxlbSwgc2VjdGlvbikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZWxlbS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKTtcblxuICAgICAgICAgICAgaWYgKHNlY3Rpb24gPT09ICdwYW5lbCcpIHtcbiAgICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlY3Rpb24gPT09ICduYXYnKSB7XG4gICAgICAgICAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlQ2xhc3MoZWxlbSwgc2VjdGlvbikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgaWYgKHNlY3Rpb24gPT09ICdwYW5lbCcpIHtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VjdGlvbiA9PT0gJ25hdicpIHtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VBY3RpdmVUYWIoaSA9IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gc2VsZi5pdGVtcztcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IGVsZW1zW2ldO1xuICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0b3IgPSBjdXJyZW50VGFiLmNsb3Nlc3Qoc2VsZi5jb25maWcud3JhcHBlcik7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBjdXJyZW50U2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbChzZWxmLmNvbmZpZy5zZWxlY3RvcnMubmF2KTtcbiAgICAgICAgY29uc3QgY3VycmVudFRhYklEID0gc2VsZi5nZXROYXZUYWJJRChjdXJyZW50VGFiKTtcblxuICAgICAgICBzZWxmLmFjdGl2ZU5hdiA9IGN1cnJlbnRUYWI7XG4gICAgICAgIHNlbGYuY2xlYXJBY3RpdmVDbGFzcyhlbGVtLCAnbmF2Jyk7XG4gICAgICAgIHNlbGYuc2V0QWN0aXZlQ2xhc3MoY3VycmVudFRhYiwgJ25hdicpO1xuICAgICAgICBzZWxmLnRhYlBhbmVsQ2hhbmdlKGN1cnJlbnRUYWJJRCk7XG4gICAgfVxuXG4gICAgb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gICAgICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goKGV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybjtcbiAgICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW1pdCguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgICAgICBsZXQgZXZlbnRzO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgICAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICAgICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50cywgZGF0YSwgY29udGV4dCk7XG4gICAgICAgIGRhdGEudW5zaGlmdChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcblxuICAgICAgICBldmVudHNBcnJheS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChldmVudEhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN3aXBlU3RhcnQoZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc2VsZi5zd2lwZVN0YXJ0ID0gZS5wYWdlWCB8fCBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgfVxuXG4gICAgb25Td2lwZUVuZChlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBwYWdlWCA9IGUucGFnZVggfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgbGV0IG9mZnNldDtcblxuICAgICAgICBpZiAoc2VsZi5zd2lwZVN0YXJ0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBzZWxmLnN3aXBlU3RhcnQgLSBwYWdlWDtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldCkgPiAzMCkge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5leHRUYWIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgLTMwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJldlRhYigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnN3aXBlU3RhcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFRhYigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHNlbGY7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gc2VsZi5jdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRWxlbSA9IHNlbGYuaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgZm91bmRJbmRleCA9IDA7XG4gICAgICAgIGxldCBuZXh0RWxlbTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JRCA9IHNlbGYuZ2V0TmF2VGFiSUQoaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXRlbUlEID09PSBjdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgICAgIGZvdW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZm91bmRJbmRleCA8IG51bWJlck9mRWxlbSAtIDEpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlQWN0aXZlVGFiKGZvdW5kSW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvdW5kSW5kZXggPT09IG51bWJlck9mRWxlbSAtIDEgPyBuZXh0RWxlbSA9IDAgOiBuZXh0RWxlbSA9IGZvdW5kSW5kZXggKyAxO1xuICAgICAgICAvLyBzZWxmLmNoYW5nZUFjdGl2ZVRhYihuZXh0RWxlbSk7XG4gICAgfVxuXG4gICAgcHJldlRhYigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHNlbGY7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gc2VsZi5jdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IG51bWJlck9mRWxlbSA9IHNlbGYuaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgZm91bmRJbmRleCA9IDA7XG4gICAgICAgIGxldCBwcmV2RWxlbTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSUQgPSBzZWxmLmdldE5hdlRhYklEKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGl0ZW1JRCA9PT0gY3VycmVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb3VuZEluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmNoYW5nZUFjdGl2ZVRhYihmb3VuZEluZGV4IC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3VuZEluZGV4ID09PSAwID8gcHJldkVsZW0gPSBudW1iZXJPZkVsZW0gLSAxIDogcHJldkVsZW0gPSBmb3VuZEluZGV4IC0gMTtcbiAgICAgICAgLy8gc2VsZi5jaGFuZ2VBY3RpdmVUYWIocHJldkVsZW0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEU01QVGFic0NsYXNzOyIsImltcG9ydCBEU01QQWNjb3JkaW9ucyBmcm9tICcuL0RTTVBBY2NvcmRpb25zJztcbmltcG9ydCBEU01QVGFic1RhYiBmcm9tICcuL0RTTVBUYWJzLXRhYic7XG5pbXBvcnQgeyB1X3Rocm90dGxlZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IHVfcGFyc2VCb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMvdV90eXBlcyc7XG5cbmNsYXNzIERTTVBUYWJUb0FjY29yZGlvbk1vYmlsZSB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy50YWJhY2NJRCA9ICcjanMtdGFiLWFjYyc7XG4gICAgICAgIHRoaXMudGFiYWNjU2VsZWN0b3IgPSAnLmpzLXRhYnMtdG8tYWNjLXdyYXBwZXInO1xuICAgICAgICB0aGlzLnRhYmFjY0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnRhYmFjY1NlbGVjdG9yKTtcblxuICAgICAgICB0aGlzLnRhYk9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3cmFwcGVyOiAnLmpzLXRhYnMtd3JhcHBlcicsXG4gICAgICAgICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICAgICAgICBuYXY6ICcuanMtdGFicy1uYXYtaXRlbScsXG4gICAgICAgICAgICAgICAgcGFuZWw6ICcuanMtdGFicy1wYW5lbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgICAgICAgIGl0ZW06ICcuanMtdGFicy1wYW5lbCcsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJy5qcy10YWJzLWxhYmVsJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnLmpzLXRhLWNvbnRlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdDoge1xuICAgICAgICAgICAgICAgIGNsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4cGFuZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9WaWV3OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmFjY29yZGlvbkluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWJJbnN0YW5jZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMudGFiYWNjSUQgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBsZXQgYnJlYWtwb2ludCA9IDExMTI7XG4gICAgICAgIGN1cnJlbnRXaWR0aCA8IGJyZWFrcG9pbnQgPyB0aGlzLmlzTW9iaWxlID0gdHJ1ZSA6IHRoaXMuaXNEZXNrdG9wID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSkgc2VsZi5idWlsZEFjY29yZGlvbigpO1xuICAgICAgICBpZiAoc2VsZi5pc0Rlc2t0b3ApIHNlbGYuYnVpbGRUYWIoKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi50aHJvdHRsZVNjcm9sbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRocm90dGxlU2Nyb2xsID0gdV90aHJvdHRsZWQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5idWlsZFRhYkFjY29yZGlvbigpO1xuICAgICAgICB9LCAxNTApO1xuXG4gICAgICAgIHNlbGYuYnVpbGRUYWJBY2NvcmRpb24oKTtcbiAgICB9XG5cbiAgICBidWlsZFRhYkFjY29yZGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgbGV0IGJyZWFrcG9pbnQgPSAxMTEyO1xuICAgICAgICBpZiAobmV3V2lkdGggPCBicmVha3BvaW50KSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYudGFiSW5zdGFuY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFiSW5zdGFuY2UudW5iaW5kVGFiTmF2RXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50YWJJbnN0YW5jZS51bmJpbmRUYWJQYW5lbEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGFiSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuYnVpbGRBY2NvcmRpb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzRGVza3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzZWxmLmlzRGVza3RvcCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5hY2NvcmRpb25JbnN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NvcmRpb25JbnN0YW5jZS5hY2NvcmRpb25VbmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hY2NvcmRpb25JbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLmJ1aWxkVGFiKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNEZXNrdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkQWNjb3JkaW9uKCkge1xuICAgICAgICB0aGlzLnBhcnNlT3B0aW9ucyh0aGlzLnRhYmFjY0lEKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JbnN0YW5jZSA9IG5ldyBEU01QQWNjb3JkaW9ucyh0aGlzLnRhYmFjY0lELCB0aGlzLmFjY29yZGlvbk9wdGlvbnMpO1xuICAgIH1cblxuICAgIGJ1aWxkVGFiKCkge1xuICAgICAgICB0aGlzLnRhYk9wdGlvbnMud3JhcHBlciA9IHRoaXMudGFiYWNjSUQ7XG4gICAgICAgIHRoaXMudGFiSW5zdGFuY2UgPSBuZXcgRFNNUFRhYnNUYWIodGhpcy50YWJPcHRpb25zKTtcbiAgICAgICAgdGhpcy50YWJJbnN0YW5jZS5jaGFuZ2VBY3RpdmVUYWIoKTtcbiAgICB9XG5cbiAgICBwYXJzZU9wdGlvbnMoc2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgc2VsZi5hY2NvcmRpb25PcHRpb25zLm9wdC5zY3JvbGxUb1ZpZXcgPSB1X3BhcnNlQm9vbCh3cmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtdG8tdmlldycpKVxuICAgICAgICAgICAgfHwgc2VsZi5hY2NvcmRpb25PcHRpb25zLm9wdC5zY3JvbGxUb1ZpZXc7XG4gICAgICAgIHNlbGYuYWNjb3JkaW9uT3B0aW9ucy5jbGFzc2VzLmRpc3BsYXkgPSB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1hY2MtZGlzcGxheScpXG4gICAgICAgICAgICB8fCBzZWxmLmFjY29yZGlvbk9wdGlvbnMuY2xhc3Nlcy5kaXNwbGF5O1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEU01QVGFiVG9BY2NvcmRpb25Nb2JpbGU7XG4iLCIvKipcbiAqIGh0dHBzOi8vd3d3LmlsZWFybmphdmFzY3JpcHQuY29tL3BsYWluanMtZmFkZWluLWZhZGVvdXQvXG4gKlxuICogVE9ETzogdGhlcmUgYXJlIGJldHRlciBmYWRlSW4gZmFkZU91dCBzY3JpcHRzIHdpdGggYW5pbWF0aW9uIGVhc2luZ3NcbiAqL1xuXG4vLyBleHBvcnQgY29uc3QgZmFkZUluID0gKGVsLCBkaXNwbGF5U3R5bGUgPSAnYmxvY2snLCBzbW9vdGggPSB0cnVlKSA9PiB7XG4vLyAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4vLyAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTtcbi8vICAgICBpZiAoc21vb3RoKSB7XG4vLyAgICAgICAgIGxldCBvcGFjaXR5ID0gMDtcbi8vICAgICAgICAgbGV0IHJlcXVlc3Q7XG4vL1xuLy8gICAgICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eSArPSAwLjA0O1xuLy8gICAgICAgICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuLy8gICAgICAgICAgICAgICAgIG9wYWNpdHkgPSAxO1xuLy8gICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3QpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9O1xuLy9cbi8vICAgICAgICAgY29uc3QgckFmID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyQWYpO1xuLy8gICAgICAgICAgICAgYW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIHJBZigpO1xuLy9cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMTtcbi8vICAgICB9XG4vLyB9O1xuLy9cbi8vIGV4cG9ydCBjb25zdCBmYWRlT3V0ID0gKGVsLCBkaXNwbGF5U3R5bGUgPSAnbm9uZScsIHNtb290aCA9IHRydWUgKSA9PiB7XG4vLyAgICAgaWYgKHNtb290aCkge1xuLy8gICAgICAgICBsZXQgb3BhY2l0eSA9IGVsLnN0eWxlLm9wYWNpdHk7XG4vLyAgICAgICAgIGxldCByZXF1ZXN0O1xuLy9cbi8vICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHkgLT0gMC4wNDtcbi8vICAgICAgICAgICAgIGlmIChvcGFjaXR5IDw9IDApIHtcbi8vICAgICAgICAgICAgICAgICBvcGFjaXR5ID0gMDtcbi8vICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVN0eWxlO1xuLy8gICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3QpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9O1xuLy9cbi8vICAgICAgICAgY29uc3QgckFmID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyQWYpO1xuLy8gICAgICAgICAgICAgYW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIHJBZigpO1xuLy9cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMDtcbi8vICAgICB9XG4vLyB9O1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgZHVyYXRpb246IDEwMCxcbiAgICBjb21wbGV0ZSgpIHtcblxuICAgIH1cbn07XG5cbmNvbnN0IGFuaW1hdGVGYWRlID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZTtcbiAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBuZXcgRGF0ZSAtIHN0YXJ0O1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgaWYgKHByb2dyZXNzID4gMSkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgbGV0IGRlbHRhID0gb3B0aW9ucy5kZWx0YShwcm9ncmVzcyk7XG4gICAgICAgIG9wdGlvbnMuc3RlcChkZWx0YSk7XG4gICAgICAgIGlmIChwcm9ncmVzcyA9PSAxKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBvcHRpb25zLmNvbXBsZXRlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgb3B0aW9ucy5kZWxheSB8fCAxMCk7XG59XG5cbmV4cG9ydCBjb25zdCB1X2ZhZGVJbiA9IChlbGVtZW50LCBvcHRpb25zPSB7fSkgPT4ge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmR1cmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9wdGlvbnMuZHVyYXRpb24gPSBkZWZhdWx0cy5kdXJhdGlvbjtcbiAgICB9XG4gICAgbGV0IHRvID0gMDtcbiAgICBhbmltYXRlRmFkZSh7XG4gICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICBkZWx0YShwcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ3Muc3dpbmcocHJvZ3Jlc3MpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogb3B0aW9ucy5jb21wbGV0ZSxcbiAgICAgICAgc3RlcChkZWx0YSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gdG8gKyBkZWx0YTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgdV9mYWRlT3V0ID0gKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGlmKHR5cGVvZiBvcHRpb25zLmR1cmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9wdGlvbnMuZHVyYXRpb24gPSBkZWZhdWx0cy5kdXJhdGlvbjtcbiAgICB9XG4gICAgbGV0IHRvID0gMTtcbiAgICBhbmltYXRlRmFkZSh7XG4gICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICBkZWx0YShwcm9ncmVzcykge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzO1xuICAgICAgICAgICAgcmV0dXJuIGVhc2luZ3Muc3dpbmcocHJvZ3Jlc3MpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogb3B0aW9ucy5jb21wbGV0ZSxcbiAgICAgICAgc3RlcChkZWx0YSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gdG8gLSBkZWx0YTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBlYXNpbmdzID0ge1xuICAgIGxpbmVhcjogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH0sXG4gICAgcXVhZHJhdGljOiBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpO1xuICAgIH0sXG4gICAgc3dpbmc6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICB9LFxuICAgIGNpcmM6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbihwcm9ncmVzcywgeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpICogKCh4ICsgMSkgKiBwcm9ncmVzcyAtIHgpO1xuICAgIH0sXG4gICAgYm91bmNlOiBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICBmb3IgKHZhciBhID0gMCwgYiA9IDEsIHJlc3VsdDsgMTsgYSArPSBiLCBiIC89IDIpIHtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSAoNyAtIDQgKiBhKSAvIDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC1NYXRoLnBvdygoMTEgLSA2ICogYSAtIDExICogcHJvZ3Jlc3MpIC8gNCwgMikgKyBNYXRoLnBvdyhiLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZWxhc3RpYzogZnVuY3Rpb24ocHJvZ3Jlc3MsIHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHByb2dyZXNzIC0gMSkpICogTWF0aC5jb3MoMjAgKiBNYXRoLlBJICogeCAvIDMgKiBwcm9ncmVzcyk7XG4gICAgfVxufSIsImNvbnN0IHVfZXh0ZW5kT2JqZWN0ID0gKGRlc3RpbmF0aW9uLCBzb3VyY2UpID0+IHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICB1X2V4dGVuZE9iamVjdChkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5jb25zdCB1X2V4dGVuZCA9IChkZWZhdWx0cywgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGV4dGVuZGVkT3B0aW9ucyA9IHt9O1xuICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICBleHRlbmRlZE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSB8fCBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kZWRPcHRpb25zO1xufTtcblxuY29uc3QgdV9tZXJnZURlZXAgPSAodGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgICBjb25zdCBpc09iamVjdCA9IChvYmopID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSB8fCAhaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgICAgICBjb25zdCBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldFZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0YXJnZXRWYWx1ZS5jb25jYXQoc291cmNlVmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRhcmdldFZhbHVlKSAmJiBpc09iamVjdChzb3VyY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdV9tZXJnZURlZXAoT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0VmFsdWUpLCBzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQge1xuICAgIHVfZXh0ZW5kLFxuICAgIHVfZXh0ZW5kT2JqZWN0LFxuICAgIHVfbWVyZ2VEZWVwXG59OyIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2phbnJlbWJvbGQvZXM2LXNsaWRlLXVwLWRvd25cbiAqXG4gKiB1c2FnZSB3aXRoIGVhc2luZ3NcbiAqXG4gKi9cblxuaW1wb3J0IHsgdV9leHRlbmQgfSBmcm9tIFwiLi91X29iamVjdF9leHRlbmRcIjtcbmltcG9ydCB7IHVfaXNJbnRlZ2VyIH0gZnJvbSBcIi4vdV90eXBlc1wiO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBkdXJhdGlvbjogMjUwLFxuICAgIGVhc2luZzogKGN1cnJlbnRUaW1lLCBzdGFydFZhbHVlLCBkaWZmVmFsdWUsIGR1cmVhdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gLWRpZmZWYWx1ZSAqIChjdXJyZW50VGltZSAvPSBkdXJlYXRpb24pICogKGN1cnJlbnRUaW1lIC0gMikgKyBzdGFydFZhbHVlO1xuICAgIH0sXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcbmNvbnN0IGRpcmVjdGlvbnMgPSB7XG4gICAgT1BFTjogMSxcbiAgICBDTE9TRTogMlxufTtcbmV4cG9ydCBjb25zdCB1X3NsaWRlVXAgPSAoZWxlbWVudCwgYXJncyA9IHt9KSA9PiB7XG4gICAgaWYgKHVfaXNJbnRlZ2VyKGFyZ3MpKSB7XG4gICAgICAgIGFyZ3MgPSB7IGR1cmF0aW9uOiBhcmdzIH07XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB1X2V4dGVuZChkZWZhdWx0cywgYXJncyk7XG4gICAgbGV0IGRpc3BsYXlUeXBlID0gb3B0aW9ucy5kaXNwbGF5O1xuICAgIG9wdGlvbnMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5DTE9TRTtcbiAgICBvcHRpb25zLnRvID0gMDtcbiAgICBvcHRpb25zLnN0YXJ0aW5nSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgb3B0aW9ucy5kaXN0YW5jZUhlaWdodCA9IC1vcHRpb25zLnN0YXJ0aW5nSGVpZ2h0O1xuICAgIHNldEVsZW1lbnRBbmltYXRpb25TdHlsZXMoZWxlbWVudCwgZGlzcGxheVR5cGUpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4gYW5pbWF0ZShlbGVtZW50LCBvcHRpb25zLCB0aW1lc3RhbXApKTtcbn07XG5leHBvcnQgY29uc3QgdV9zbGlkZURvd24gPSAoZWxlbWVudCwgYXJncyA9IHt9KSA9PiB7XG4gICAgaWYgKHVfaXNJbnRlZ2VyKGFyZ3MpKSB7XG4gICAgICAgIGFyZ3MgPSB7IGR1cmF0aW9uOiBhcmdzIH07XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHVfZXh0ZW5kKGRlZmF1bHRzLCBhcmdzKTtcbiAgICBsZXQgZGlzcGxheVR5cGUgPSBvcHRpb25zLmRpc3BsYXk7XG4gICAgc2V0RWxlbWVudEFuaW1hdGlvblN0eWxlcyhlbGVtZW50LCBkaXNwbGF5VHlwZSk7XG4gICAgb3B0aW9ucy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLk9QRU47XG4gICAgb3B0aW9ucy50byA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIG9wdGlvbnMuc3RhcnRpbmdIZWlnaHQgPSAwO1xuICAgIG9wdGlvbnMuZGlzdGFuY2VIZWlnaHQgPSBvcHRpb25zLnRvO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWVzdGFtcCkgPT4gYW5pbWF0ZShlbGVtZW50LCBvcHRpb25zLCB0aW1lc3RhbXApKTtcbn07XG5jb25zdCBhbmltYXRlID0gKGVsZW1lbnQsIG9wdGlvbnMsIG5vdykgPT4ge1xuICAgIGlmICghb3B0aW9ucy5zdGFydFRpbWUpIHtcbiAgICAgICAgb3B0aW9ucy5zdGFydFRpbWUgPSBub3c7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbm93IC0gb3B0aW9ucy5zdGFydFRpbWU7XG4gICAgbGV0IGFuaW1hdGlvbkNvbnRpbnVlID0gY3VycmVudFRpbWUgPCBvcHRpb25zLmR1cmF0aW9uO1xuICAgIGxldCBuZXdIZWlnaHQgPSBvcHRpb25zLmVhc2luZyhjdXJyZW50VGltZSwgb3B0aW9ucy5zdGFydGluZ0hlaWdodCwgb3B0aW9ucy5kaXN0YW5jZUhlaWdodCwgb3B0aW9ucy5kdXJhdGlvbik7XG4gICAgaWYgKGFuaW1hdGlvbkNvbnRpbnVlKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7bmV3SGVpZ2h0LnRvRml4ZWQoMil9cHhgO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lc3RhbXApID0+IGFuaW1hdGUoZWxlbWVudCwgb3B0aW9ucywgdGltZXN0YW1wKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbnMuQ0xPU0UpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbnMuT1BFTikge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5ID09PSAnZmxleCcgPyAnZmxleCcgOiAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUVsZW1lbnRBbmltYXRpb25TdHlsZXMoZWxlbWVudCk7XG4gICAgfVxufTtcbmNvbnN0IHNldEVsZW1lbnRBbmltYXRpb25TdHlsZXMgPSAoZWxlbWVudCwgZGlzcGxheVR5cGUgPSAnYmxvY2snKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVR5cGUgPT09ICdmbGV4JyA/ICdmbGV4JyA6ICdibG9jayc7XG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9ICcwJztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnMCc7XG59O1xuY29uc3QgcmVtb3ZlRWxlbWVudEFuaW1hdGlvblN0eWxlcyA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gbnVsbDtcbiAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IG51bGw7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gbnVsbDtcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVfc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgYXJncyA9IHt9KSA9PiB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gdV9zbGlkZURvd24oZWxlbWVudCwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVfc2xpZGVVcChlbGVtZW50LCBhcmdzKTtcbiAgICB9XG59IiwiY29uc3QgdV9pc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcikge1xuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xuICAgIH1cbn07XG5cbmNvbnN0IHVfaXNPYmplY3QgPSAobykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBvICE9PSBudWxsICYmXG4gICAgICAgIG8uY29uc3RydWN0b3IgJiZcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCdcbiAgICApO1xufVxuXG5jb25zdCB1X3BhcnNlQm9vbCA9IChzdHIpID0+ICB7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHN0cik7XG4gICAgLy8gc3RyaWN0OiBKU09OLnBhcnNlKHN0cilcblxuICAgIGlmKHN0ciA9PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ2Jvb2xlYW4nKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIChzdHIgPT09IHRydWUpO1xuICAgIH1cblxuICAgIGlmKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKVxuICAgIHtcbiAgICAgICAgaWYoc3RyID09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICAgICAgaWYoc3RyLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnIHx8IHN0ci50b0xvd2VyQ2FzZSgpID09ICd5ZXMnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLywvZywgJy4nKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL15cXHMqXFwtXFxzKi9nLCAnLScpO1xuICAgIH1cblxuICAgIC8vIHZhciBpc051bSA9IHN0cmluZy5tYXRjaCgvXlswLTldKyQvKSAhPSBudWxsO1xuICAgIC8vIHZhciBpc051bSA9IC9eXFxkKyQvLnRlc3Qoc3RyKTtcbiAgICBpZighaXNOYU4oc3RyKSlcbiAgICAgICAgcmV0dXJuIChwYXJzZUZsb2F0KHN0cikgIT0gMCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7XG4gICAgdV9pc0ludGVnZXIsXG4gICAgdV9pc09iamVjdCxcbiAgICB1X3BhcnNlQm9vbFxufSIsIlxuY29uc3QgdV9kZWJvdW5jZWQgPSAoZnVuYywgZGVsYXksIGltbWVkaWF0ZSkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBib3VuZEZ1bmMgPSBmdW5jLmJpbmQodGhpcywgLi4uYXJncyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZXJJZCkge1xuICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FsbGVlRnVuYyA9IGltbWVkaWF0ZSA/ICgpID0+IHsgdGltZXJJZCA9IG51bGwgfSA6IGJvdW5kRnVuYztcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoY2FsbGVlRnVuYywgZGVsYXkpO1xuICAgIH1cbn1cblxuY29uc3QgdV90aHJvdHRsZWQgPSAoZnVuYywgZGVsYXksIGltbWVkaWF0ZSkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBib3VuZEZ1bmMgPSBmdW5jLmJpbmQodGhpcywgLi4uYXJncyk7XG4gICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZXJJZCkge1xuICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIGJvdW5kRnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgdV9kZWJvdW5jZWQsXG4gICAgdV90aHJvdHRsZWRcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAqIEB0aXRsZSBEUyBUYWJzXG4gKiBAZGVzY3JpcHRpb24gQXBwbGljYXRpb24gZW50cnkgcG9pbnRcbiAqL1xuXG5pbXBvcnQgRFNNUFRhYnNUYWIgZnJvbSAnLi9saWJyYXJ5L3RhYnMtYWNjb3JkaW9ucy9EU01QVGFicy10YWInO1xuaW1wb3J0IERTTVBUYWJzRHJvcGRvd24gZnJvbSAnLi9saWJyYXJ5L3RhYnMtYWNjb3JkaW9ucy9EU01QVGFicy1kcm9wZG93bic7XG5pbXBvcnQgRFNNUFRhYnNUYWJEcm9wZG93biBmcm9tICcuL2xpYnJhcnkvdGFicy1hY2NvcmRpb25zL0RTTVBUYWJzLXRhYmRyb3Bkb3duJztcbmltcG9ydCB7IGNhbGxUYWJBY2NvcmRpb25zTW9iaWxlIH0gZnJvbSAnLi9mdW5jdGlvbi1jYWxscy90YWJzLXRvLWFjY29yZGlvbi1tb2JpbGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgbmV3IERTTVBUYWJzVGFiKCk7XG4gICAgbmV3IERTTVBUYWJzRHJvcGRvd24oKTtcbiAgICBuZXcgRFNNUFRhYnNUYWJEcm9wZG93bigpO1xuXG4gICAgY2FsbFRhYkFjY29yZGlvbnNNb2JpbGUoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblxufSk7XG4iXSwibmFtZXMiOlsiRFNNUFRhYlRvQWNjb3JkaW9uTW9iaWxlIiwidGFiYWNjSUQiLCJ0YWJhY2NTZWxlY3RvciIsInRhYmFjY0l0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbFRhYkFjY29yZGlvbnNNb2JpbGUiLCJmb3JFYWNoIiwiYWNjIiwiaSIsInRhSUQiLCJjb25jYXQiLCJjYWxsSUQiLCJzZXRBdHRyaWJ1dGUiLCJlYXNlT3V0UXVhZCIsInQiLCJiIiwiYyIsImQiLCJlYXNlSW5RdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluUXVpbnQiLCJlYXNlT3V0UXVpbnQiLCJlYXNlSW5PdXRRdWludCIsImVhc2VJblNpbmUiLCJNYXRoIiwiY29zIiwiUEkiLCJlYXNlT3V0U2luZSIsInNpbiIsImVhc2VJbk91dFNpbmUiLCJlYXNlSW5FeHBvIiwicG93IiwiZWFzZU91dEV4cG8iLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluQ2lyYyIsInNxcnQiLCJlYXNlT3V0Q2lyYyIsImVhc2VJbk91dENpcmMiLCJlYXNlSW5FbGFzdGljIiwicyIsInAiLCJhIiwiYWJzIiwiYXNpbiIsImVhc2VPdXRFbGFzdGljIiwiZWFzZUluT3V0RWxhc3RpYyIsImVhc2VJbkJhY2siLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlYXNlT3V0QmFjayIsImVhc2VJbk91dEJhY2siLCJlYXNlSW5Cb3VuY2UiLCJlYXNlT3V0Qm91bmNlIiwiZWFzZUluT3V0Qm91bmNlIiwic2Nyb2xsVG9VdGlsIiwicGFyYW1zIiwiZWxlbWVudCIsIndpbmRvdyIsInRvIiwiZHVyYXRpb24iLCJjYWxsYmFjayIsImVhc2luZyIsInN0YXJ0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRUb3AiLCJjaGFuZ2UiLCJjdXJyZW50VGltZSIsImluY3JlbWVudCIsImFuaW1hdGVTY3JvbGwiLCJlYXNpbmdWYWx1ZSIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsInVfZXh0ZW5kT2JqZWN0IiwidV9zbGlkZURvd24iLCJ1X3NsaWRlVXAiLCJ1X2ZhZGVJbiIsInVfZmFkZU91dCIsInVfcGFyc2VCb29sIiwiRFNNUEFjY29yZGlvbnMiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIndyYXBwZXIiLCJkZWZhdWx0cyIsInNlbGVjdG9ycyIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29udGVudCIsImdhbGxlcnkiLCJjb250YWluZXIiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZm9jdXMiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiYXR0ciIsImNsb3NlIiwib3BlbiIsInN0YXJ0Q2xvc2VkIiwiYW5pbWF0aW9uQ29udGVudCIsImFuaW1hdGlvbkdhbGxlcnkiLCJzY3JvbGxUb1ZpZXciLCJvcHQiLCJleHBhbmQiLCJoYXNHYWxsZXJ5IiwiYXJpYSIsImJ1dHRvbiIsImNvbmZpZyIsImdldEFyaWFOYW1lIiwicXVlcnlTZWxlY3RvciIsImV2ZW50c0xpc3RlbmVycyIsInBhcnNlT3B0aW9ucyIsInNob3VsZFNjcm9sbCIsIm1xbCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpdGVtcyIsImdhbGxlcnlJdGVtcyIsImhhbmRsZXJzIiwicHJldmlvdXNJbmRleCIsImN1cnJlbnRJbmRleCIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImFkZEFyaWEiLCJwcmVwYXJlRm9yQW5pbWF0aW9uIiwiYWNjb3JkaW9uQmluZEV2ZW50cyIsInJlSW5pdCIsImFjY29yZGlvblVuYmluZEV2ZW50cyIsInJlSW5pdEFuaW1hdGlvbiIsIm9uIiwiZXZlbnRzIiwic2VsZiIsInNwbGl0IiwiZXZlbnQiLCJwdXNoIiwib2ZmIiwiaGFuZGxlciIsImV2ZW50SGFuZGxlciIsImluZGV4Iiwic3BsaWNlIiwiZW1pdCIsImRhdGEiLCJjb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpc0FycmF5Iiwic2xpY2UiLCJ1bnNoaWZ0IiwiZXZlbnRzQXJyYXkiLCJhcHBseSIsImVsZW0iLCJhZGRMaXN0ZW5lckZvY3VzIiwiYmluZCIsImFkZExpc3RlbmVyQmx1ciIsImFkZEtleUxpc3RlbmVyIiwiaGFuZGxlckZ1bmMiLCJhY2NvcmRpb25OYXZDbGljayIsInBhc3NpdmUiLCJhY2NvcmRpb24iLCJlbGVtUGFyZW50IiwiY2xvc2VzdCIsImVsZW1Db250ZW50IiwiY29udHJvbCIsImhlYWRlciIsIm5hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlU3R5bGVzIiwiZXYiLCJjdXJyZW50SXRlbUNsaWNrZWQiLCJjdXJyZW50VGFyZ2V0IiwiYWNjb3JkaW9uQ29udGVudGNoYW5nZSIsImVsZW1zIiwiY3VycmVudEl0ZW0iLCJjdXJyZW50SXRlbUNvbnRlbnQiLCJleHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiaXRlbUNvbnRlbnQiLCJpdGVtVHJpZ2dlciIsImFkZCIsImFjY29yZGlvbkNoYW5nZUdhbGxlcnkiLCJzY3JvbGxUb0FjY29yZGlvbiIsIm5leHRBY2NvcmRpb24iLCJuZXh0RWxlbSIsIm51bWJlck9mRWxlbSIsIm5leHRFbGVtSXRlbSIsInByZXZBY2NvcmRpb24iLCJwcmV2RWxlbSIsInByZXZFbGVtSXRlbSIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvbXBsZXRlIiwibmV3SXRlbSIsImFjdGl2ZUZvdW5kIiwibGlzdCIsInN0eWxlIiwiaXRlbTBDb250ZW50IiwiaXNTZWxmQ2xvc2UiLCJpc0xlYXZlT3BlbiIsImlzU3RhcnRDbG9zZWQiLCJpc0dhbGxlcnkiLCJhbmltYXRlQ29udGVudCIsImFuaW1hdGVHYWxsZXJ5IiwiaXNTY3JvbGxUb1ZpZXciLCJpc1ZhbGlkSWQiLCJ0ZXN0IiwiYXJpYU5hbWUiLCJ0YXJnZXQiLCJ3aGljaCIsInRvU3RyaW5nIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyQ2xhc3MiLCJjdHJsTW9kaWZpZXIiLCJjdHJsS2V5IiwibWF0Y2giLCJpbmRleE9mIiwiZGlyZWN0aW9uIiwibmV3SW5kZXgiLCJzY3JvbGxDdXJyZW50Q29udGVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1IZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXQiLCJjdXJyZW50U2Nyb2xsUG9zIiwic2Nyb2xsWSIsInRvcCIsIkRTTVBUYWJzQ2xhc3MiLCJEU01QVGFic0Ryb3Bkb3duIiwiX0RTTVBUYWJzQ2xhc3MiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjYWxsIiwiZHJvcGRvd24iLCJwYW5lbCIsImJyZWFrcG9pbnRzIiwic2VsZWN0b3JEcm9wZG93biIsInNlbGVjdG9yUGFuZWxzIiwiaXRlbXNEcm9wZG93biIsInBhbmVscyIsIm1lZGlhTWF0Y2giLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsImJpbmRGdW5jdGlvbnMiLCJiaW5kVGFic0Ryb3Bkb3duRXZlbnQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwidGFiRHJvcGRvd25DaGFuZ2UiLCJfc2V0IiwiZHJvcGRvd25zIiwiY3VyckRyb3Bkb3duIiwiY3VycmVudFRhYklEIiwic2VsZWN0ZWRJbmRleCIsInVuYmluZFRhYnNEcm9wZG93bkV2ZW50IiwiRFNNUFRhYnNUYWIiLCJuYXYiLCJEU01QVGFic1RhYkRyb3Bkb3duIiwic2VsZWN0b3JUYWJzIiwiaW5pdFRhYnNEcm9wZG93biIsImFjdGl2ZU5hdiIsImFjdGl2ZVBhbmVsIiwiYmluZFRhYk5hdkV2IiwidGFiTmF2Q2xpY2siLCJtZWRpYU1hdGNoZXMiLCJ0YWIiLCJjdXJyZW50VGFiIiwiY3VycmVudFNlbGVjdG9yIiwiY3VycmVudERyb3Bkb3duIiwidXBkYXRlVGFiTmF2IiwidXBkYXRlRHJvcGRvd24iLCJjdXJyZW50TmF2SXRlbSIsImN1cnJlbnREcm9wIiwibmV3RHJvcEluZGV4IiwiY3VyclRhYiIsInVuYmluZFRhYnNEcm9wRXZlbnRzIiwib25Td2lwZVN0YXJ0Iiwib25Td2lwZUVuZCIsIm5leHRUYWIiLCJmb3VuZEluZGV4IiwiaXRlbUlEIiwiZ2V0TmF2VGFiSUQiLCJjaGFuZ2VBY3RpdmVUYWIiLCJwcmV2VGFiIiwidGFibGV0IiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJiaW5kVGFiUGFuZWxFdmVudCIsInVuYmluZFRhYlBhbmVsRXZlbnQiLCJiaW5kVGFiTmF2RXZlbnQiLCJ1bmJpbmRUYWJOYXZFdmVudCIsImNsZWFyQWN0aXZlQ2xhc3MiLCJzZXRBY3RpdmVDbGFzcyIsInRhYlBhbmVsQ2hhbmdlIiwiY3VycmVudFBhbmVsSUQiLCJjdXJyZW50UGFuZWwiLCJjdXJyZW50UGFuZWxIb2xkZXIiLCJkYXRhSUQiLCJzZWN0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwic3dpcGVTdGFydCIsInBhZ2VYIiwidGFyZ2V0VG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwidV90aHJvdHRsZWQiLCJ0YWJPcHRpb25zIiwiYWNjb3JkaW9uT3B0aW9ucyIsImlzTW9iaWxlIiwiaXNEZXNrdG9wIiwiYWNjb3JkaW9uSW5zdGFuY2UiLCJ0YWJJbnN0YW5jZSIsImN1cnJlbnRXaWR0aCIsImlubmVyV2lkdGgiLCJidWlsZEFjY29yZGlvbiIsImJ1aWxkVGFiIiwidGhyb3R0bGVTY3JvbGwiLCJidWlsZFRhYkFjY29yZGlvbiIsIm5ld1dpZHRoIiwiYW5pbWF0ZUZhZGUiLCJEYXRlIiwiaWQiLCJzZXRJbnRlcnZhbCIsInRpbWVQYXNzZWQiLCJwcm9ncmVzcyIsImRlbHRhIiwic3RlcCIsImNsZWFySW50ZXJ2YWwiLCJkZWxheSIsImVhc2luZ3MiLCJzd2luZyIsIm9wYWNpdHkiLCJsaW5lYXIiLCJxdWFkcmF0aWMiLCJjaXJjIiwiYWNvcyIsImJhY2siLCJ4IiwiYm91bmNlIiwicmVzdWx0IiwiZWxhc3RpYyIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInVfZXh0ZW5kIiwiZXh0ZW5kZWRPcHRpb25zIiwidV9tZXJnZURlZXAiLCJpc09iamVjdCIsIm9iaiIsIl90eXBlb2YiLCJrZXlzIiwidGFyZ2V0VmFsdWUiLCJzb3VyY2VWYWx1ZSIsImFzc2lnbiIsInVfaXNJbnRlZ2VyIiwic3RhcnRWYWx1ZSIsImRpZmZWYWx1ZSIsImR1cmVhdGlvbiIsImRpcmVjdGlvbnMiLCJPUEVOIiwiQ0xPU0UiLCJkaXNwbGF5VHlwZSIsInN0YXJ0aW5nSGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZGlzdGFuY2VIZWlnaHQiLCJzZXRFbGVtZW50QW5pbWF0aW9uU3R5bGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZXN0YW1wIiwiYW5pbWF0ZSIsIm5vdyIsInN0YXJ0VGltZSIsImFuaW1hdGlvbkNvbnRpbnVlIiwibmV3SGVpZ2h0IiwidG9GaXhlZCIsInJlbW92ZUVsZW1lbnRBbmltYXRpb25TdHlsZXMiLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidV9zbGlkZVRvZ2dsZSIsImdldENvbXB1dGVkU3R5bGUiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJpc0Zpbml0ZSIsImZsb29yIiwidV9pc09iamVjdCIsIm8iLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJ1X2RlYm91bmNlZCIsImZ1bmMiLCJpbW1lZGlhdGUiLCJ0aW1lcklkIiwiYm91bmRGdW5jIiwiY2xlYXJUaW1lb3V0IiwiY2FsbGVlRnVuYyIsIl9sZW4yIiwiX2tleTIiXSwic291cmNlUm9vdCI6IiJ9