/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/function-calls/sliders.js":
/*!**************************************************!*\
  !*** ./assets/_src/js/function-calls/sliders.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callSliders: function() { return /* binding */ callSliders; }
/* harmony export */ });
/* harmony import */ var _sliders_slider_dsbls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders/slider-dsbls */ "./assets/_src/js/function-calls/sliders/slider-dsbls.js");
/* harmony import */ var _sliders_slider_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sliders/slider-simple */ "./assets/_src/js/function-calls/sliders/slider-simple.js");
/* harmony import */ var _sliders_slider_advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliders/slider-advanced */ "./assets/_src/js/function-calls/sliders/slider-advanced.js");
/* harmony import */ var _sliders_slider_circular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders/slider-circular */ "./assets/_src/js/function-calls/sliders/slider-circular.js");
/* harmony import */ var _sliders_slider_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliders/slider-extended */ "./assets/_src/js/function-calls/sliders/slider-extended.js");





var callSliders = function callSliders() {
  (0,_sliders_slider_dsbls__WEBPACK_IMPORTED_MODULE_0__.dsblsSlider)();
  (0,_sliders_slider_simple__WEBPACK_IMPORTED_MODULE_1__.simpleSliders)();
  (0,_sliders_slider_advanced__WEBPACK_IMPORTED_MODULE_2__.advancedSliders)();
  (0,_sliders_slider_circular__WEBPACK_IMPORTED_MODULE_3__.circularSliders)();
  (0,_sliders_slider_extended__WEBPACK_IMPORTED_MODULE_4__.extendedSliders)();
};


/***/ }),

/***/ "./assets/_src/js/function-calls/sliders/slider-advanced.js":
/*!******************************************************************!*\
  !*** ./assets/_src/js/function-calls/sliders/slider-advanced.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedSliders: function() { return /* binding */ advancedSliders; }
/* harmony export */ });
/* harmony import */ var _library_sliders_swiper_with_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/sliders/swiper-with-tabs */ "./assets/_src/js/library/sliders/swiper-with-tabs.js");
/* harmony import */ var _library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplay */ "./assets/_src/js/library/sliders/slider-options/autoplay.js");
/* harmony import */ var _library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/sliders/slider-options/lazy */ "./assets/_src/js/library/sliders/slider-options/lazy.js");
/* harmony import */ var _library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/sliders/slider-options/breakpoints */ "./assets/_src/js/library/sliders/slider-options/breakpoints.js");
/* harmony import */ var _library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/sliders/slider-options/navigation */ "./assets/_src/js/library/sliders/slider-options/navigation.js");
/* harmony import */ var _library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/sliders/slider-options/loop */ "./assets/_src/js/library/sliders/slider-options/loop.js");
/* harmony import */ var _library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/sliders/slider-options/pagination */ "./assets/_src/js/library/sliders/slider-options/pagination.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/* harmony import */ var _library_sliders_slider_options_autoplayObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplayObserver */ "./assets/_src/js/library/sliders/slider-options/autoplayObserver.js");
/* harmony import */ var _library_sliders_slider_options_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/sliders/slider-options/effects */ "./assets/_src/js/library/sliders/slider-options/effects.js");
/**
 * Advanced slider type
 */












// config selectors only here
var advancedName = 'js-slider-advanced';
var advSliderSel = '.js-slider-advanced';
var advSliderTabs = '.l-slider-nav';

// find those selectors
var advSliderList = document.querySelectorAll(advSliderSel);
var advancedSliders = function advancedSliders() {
  // loop through sliders and add ID's to it

  var advSliderOptions = [];
  var advSliders = [];
  var sliderTabOptions = [];
  var advSliderNav = [];
  var sliderNav;
  var advSliderThumbs = [];
  var sliderThumbOptions = [];
  var advancedObserver = [];
  advSliderList.forEach(function (slider, i) {
    advSliderOptions[i] = {};
    var triggerType = slider.getAttribute('data-slider-trigger') || 'click';
    sliderTabOptions[i] = {
      item: '.js-nav__item',
      active: 'is-active',
      trigger: triggerType
    };
    sliderThumbOptions[i] = {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      threshold: 10,
      watchSlidesProgress: true,
      wrapperClass: 'c-slider-nav'
    };
    var isThumbs = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_7__.u_parseBool)(slider.getAttribute('data-slider-thumbs'));
    var sliderID = "".concat(advancedName, "-").concat(i);
    slider.setAttribute('id', sliderID);
    var sliderParent = slider.closest('.m-slider');
    if (sliderParent) {
      sliderNav = sliderParent.querySelector(advSliderTabs);
    }
    var sliderThumbsSelector;
    if (sliderNav) {
      if (isThumbs) {
        var sliderThumbsID = "js-slider-advanced-thumbs-".concat(i);
        sliderNav.setAttribute('id', sliderThumbsID);
        sliderThumbsSelector = "#".concat(sliderThumbsID);
      } else {
        var sliderTabID = "js-slider-advanced-nav-".concat(i);
        sliderNav.setAttribute('id', sliderTabID);
        sliderTabOptions[i].element = "#".concat(sliderTabID);
      }
    }
    advSliderOptions[i] = (0,_library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_5__.isLoopOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_1__.isAutoPlayOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_2__.isLazyLoadOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_3__.isBreakpointsOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_6__.isPaginationOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_effects__WEBPACK_IMPORTED_MODULE_9__.isEffectOn)(slider, advSliderOptions[i]);

    // .m-slider parent is hardcoded in isNavigationOn options
    advSliderOptions[i] = (0,_library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__.isNavigationOn)(slider, advSliderOptions[i], advancedName, i);
    if (isThumbs) {
      var isVertical = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_7__.u_parseBool)(slider.getAttribute('data-slider-vertical'));
      if (isVertical) {
        sliderThumbOptions[i].direction = 'vertical';
        // sliderThumbOptions[i].autoHeight = true;
        sliderParent.classList.add('swiper-thumbs-nav-vertical');
      }
      advSliderThumbs[i] = new Swiper(sliderThumbsSelector, sliderThumbOptions[i]);
      advSliderOptions[i].thumbs = {};
      advSliderOptions[i].thumbs.swiper = advSliderThumbs[i];
      advSliderOptions[i].noSwipingSelector = '.l-slider-nav, .m-slider__pagination';
    }
    advSliders[i] = new Swiper(slider, advSliderOptions[i]);
    if (sliderNav) {
      if (advSliders[i].initialized) {
        advSliderNav[i] = new _library_sliders_swiper_with_tabs__WEBPACK_IMPORTED_MODULE_0__["default"](advSliders[i], sliderTabOptions[i]);
      }
    }
    var isAutoplay = slider.getAttribute('data-slider-autoplay');
    var autoplayObserve = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_7__.u_parseBool)(slider.getAttribute('data-slider-autoplay-observer'));
    if (isAutoplay && autoplayObserve) {
      advSliders[i].autoplay.stop();
      advancedObserver.push({
        slider: sliderID
      });
    }
  });
  if (advancedObserver.length > 0) {
    (0,_library_sliders_slider_options_autoplayObserver__WEBPACK_IMPORTED_MODULE_8__.autoplayObserver)(advancedObserver, advancedName, advSliders);
  }
};


/***/ }),

/***/ "./assets/_src/js/function-calls/sliders/slider-circular.js":
/*!******************************************************************!*\
  !*** ./assets/_src/js/function-calls/sliders/slider-circular.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circularSliders: function() { return /* binding */ circularSliders; }
/* harmony export */ });
/* harmony import */ var _library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplay */ "./assets/_src/js/library/sliders/slider-options/autoplay.js");
/* harmony import */ var _library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/sliders/slider-options/lazy */ "./assets/_src/js/library/sliders/slider-options/lazy.js");
/* harmony import */ var _library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/sliders/slider-options/breakpoints */ "./assets/_src/js/library/sliders/slider-options/breakpoints.js");
/* harmony import */ var _library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/sliders/slider-options/navigation */ "./assets/_src/js/library/sliders/slider-options/navigation.js");
/* harmony import */ var _library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/sliders/slider-options/loop */ "./assets/_src/js/library/sliders/slider-options/loop.js");
/* harmony import */ var _library_sliders_slider_options_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/sliders/slider-options/effects */ "./assets/_src/js/library/sliders/slider-options/effects.js");
/* harmony import */ var _library_sliders_swiper_with_circular_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/sliders/swiper-with-circular-tabs */ "./assets/_src/js/library/sliders/swiper-with-circular-tabs.js");
/* harmony import */ var _library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/sliders/slider-options/pagination */ "./assets/_src/js/library/sliders/slider-options/pagination.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/**
 * Advanced slider type
 */











// config selectors only here
var advancedName = 'js-circular-adv';
var advSliderSel = '.js-circular-adv';
var advSliderTabs = '.l-slider-nav';

// find those selectors
var advSliderList = document.querySelectorAll(advSliderSel);
var circularSliders = function circularSliders() {
  // loop through sliders and add ID's to it

  var advSliderOptions = [];
  var advSliders = [];
  var sliderTabOptions = [];
  var advSliderNav = [];
  var sliderNav;
  var sliderThumbOptions = [];
  advSliderList.forEach(function (slider, i) {
    advSliderOptions[i] = {};
    sliderTabOptions[i] = {
      item: '.js-nav__item'
    };
    sliderThumbOptions[i] = {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      threshold: 10,
      watchSlidesProgress: true,
      wrapperClass: 'c-slider-nav'
    };
    var sliderID = "".concat(advancedName, "-").concat(i);
    slider.setAttribute('id', sliderID);
    var sliderParent = slider.closest('.m-slider');
    if (sliderParent) {
      sliderNav = sliderParent.querySelector(advSliderTabs);
    }
    if (sliderNav) {
      var sliderTabID = "js-slider-circular-nav-".concat(i);
      sliderNav.setAttribute('id', sliderTabID);
      sliderTabOptions[i].element = "#".concat(sliderTabID);
    }
    var isCenterSlides = sliderNav.getAttribute('data-slider-circular-arrange');
    var isSymmetric = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_8__.u_parseBool)(sliderNav.getAttribute('data-slider-circular-symmetric')) || false;
    if (isCenterSlides === 'center' && !isSymmetric) {
      var cSliderNav = sliderNav.querySelector('.c-slider-nav');
      if (cSliderNav) {
        var initialIndex = parseInt(cSliderNav.getAttribute('data-initial-index'), 10);
        sliderNav.style.setProperty('--cAItem', initialIndex);
        advSliderOptions[i].initialSlide = initialIndex;
      }
    } else {
      sliderNav.style.setProperty('--cAItem', 0);
    }
    advSliderOptions[i] = (0,_library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_4__.isLoopOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__.isAutoPlayOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__.isLazyLoadOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_2__.isBreakpointsOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_effects__WEBPACK_IMPORTED_MODULE_5__.isEffectOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_7__.isPaginationOn)(slider, advSliderOptions[i]);

    // .m-slider parent is hardcoded in isNavigationOn options
    advSliderOptions[i] = (0,_library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_3__.isNavigationOn)(slider, advSliderOptions[i], advancedName, i);
    advSliders[i] = new Swiper(slider, advSliderOptions[i]);
    if (sliderNav) {
      if (advSliders[i].initialized) {
        advSliderNav[i] = new _library_sliders_swiper_with_circular_tabs__WEBPACK_IMPORTED_MODULE_6__["default"](advSliders[i], sliderTabOptions[i]);
      }
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/function-calls/sliders/slider-dsbls.js":
/*!***************************************************************!*\
  !*** ./assets/_src/js/function-calls/sliders/slider-dsbls.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dsblsSlider: function() { return /* binding */ dsblsSlider; }
/* harmony export */ });
/* harmony import */ var _library_sliders_slider_dsbls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/sliders/slider-dsbls */ "./assets/_src/js/library/sliders/slider-dsbls.js");
/**
 * DSBLS SLIDER type
 */


// config selectors only here
var dsblsSel = '.js-slider-dsbls';
var dsblsSelMob = '.js-slider-dsbls-m';

// find those selectors
var dsblsSliderList = document.querySelectorAll(dsblsSel);
var dsblsSliderMobileList = document.querySelectorAll(dsblsSelMob);
var dsblsSlider = function dsblsSlider() {
  // loop through sliders and add ID's to it, we assume each 
  // dsbls slider has its own mobile slider as its
  // component, so no need to loop, search parent 
  // and query child element

  var dsbls = [];
  dsblsSliderList.forEach(function (slider, i) {
    var sliderID = "js-slider-dsbls-".concat(i);
    var sliderMobileID = "js-slider-dsbls-m-".concat(i);
    slider.setAttribute('id', sliderID);
    dsblsSliderMobileList[i].setAttribute('id', sliderMobileID);
    dsbls[i] = new _library_sliders_slider_dsbls__WEBPACK_IMPORTED_MODULE_0__["default"](sliderID);
  });
};


/***/ }),

/***/ "./assets/_src/js/function-calls/sliders/slider-extended.js":
/*!******************************************************************!*\
  !*** ./assets/_src/js/function-calls/sliders/slider-extended.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendedSliders: function() { return /* binding */ extendedSliders; }
/* harmony export */ });
/* harmony import */ var _library_sliders_swiper_with_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/sliders/swiper-with-tabs */ "./assets/_src/js/library/sliders/swiper-with-tabs.js");
/* harmony import */ var _library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplay */ "./assets/_src/js/library/sliders/slider-options/autoplay.js");
/* harmony import */ var _library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/sliders/slider-options/lazy */ "./assets/_src/js/library/sliders/slider-options/lazy.js");
/* harmony import */ var _library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/sliders/slider-options/breakpoints */ "./assets/_src/js/library/sliders/slider-options/breakpoints.js");
/* harmony import */ var _library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/sliders/slider-options/navigation */ "./assets/_src/js/library/sliders/slider-options/navigation.js");
/* harmony import */ var _library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/sliders/slider-options/loop */ "./assets/_src/js/library/sliders/slider-options/loop.js");
/* harmony import */ var _library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/sliders/slider-options/pagination */ "./assets/_src/js/library/sliders/slider-options/pagination.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/* harmony import */ var _library_sliders_slider_options_autoplayObserver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplayObserver */ "./assets/_src/js/library/sliders/slider-options/autoplayObserver.js");
/* harmony import */ var _library_sliders_slider_options_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/sliders/slider-options/effects */ "./assets/_src/js/library/sliders/slider-options/effects.js");
/**
 * Advanced slider type
 */












// config selectors only here
var advancedName = 'js-slider-extended';
var advSliderSel = '.js-slider-extended';
var advSliderTabs = '.l-slider-nav';
var advSliderContent = '.l-slider-content';

// find those selectors
var advSliderList = document.querySelectorAll(advSliderSel);
var extendedSliders = function extendedSliders() {
  // loop through sliders and add ID's to it

  var advSliderOptions = [];
  var advSliders = [];
  var sliderTabOptions = [];
  var advSliderNav = [];
  var sliderNav;
  var advSliderThumbs = [];
  var sliderThumbOptions = [];
  var advancedObserver = [];
  var advContentOptions = [];
  var advSlidersContent = [];
  var aReq = [];
  advSliderList.forEach(function (slider, i) {
    advSliderOptions[i] = {};
    var triggerType = slider.getAttribute('data-slider-trigger') || 'click';
    sliderTabOptions[i] = {
      item: '.js-nav__item',
      active: 'is-active',
      trigger: triggerType
    };
    sliderThumbOptions[i] = {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      threshold: 10,
      watchSlidesProgress: true,
      wrapperClass: 'c-slider-nav'
    };
    advContentOptions[i] = {
      wrapperClass: 'l-slider-content__wrapper',
      slidesPerView: 1
    };
    var isThumbs = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_7__.u_parseBool)(slider.getAttribute('data-slider-thumbs'));
    var sliderID = "".concat(advancedName, "-").concat(i);
    slider.setAttribute('id', sliderID);
    var sliderParent = slider.closest('.m-slider');
    if (sliderParent) {
      sliderNav = sliderParent.querySelector(advSliderTabs);
    }
    var sliderThumbsSelector;
    if (sliderNav) {
      if (isThumbs) {
        var sliderThumbsID = "js-slider-extended-thumbs-".concat(i);
        sliderNav.setAttribute('id', sliderThumbsID);
        sliderThumbsSelector = "#".concat(sliderThumbsID);
      } else {
        var sliderTabID = "js-slider-extended-nav-".concat(i);
        sliderNav.setAttribute('id', sliderTabID);
        sliderTabOptions[i].element = "#".concat(sliderTabID);
      }
    }
    var sliderContent = sliderParent.querySelector(advSliderContent);
    var sliderContentID = "js-slider-extended-content-".concat(i);
    sliderContent.setAttribute('id', sliderContentID);
    var sliderContentSelector = "#".concat(sliderContentID);
    advSliderOptions[i] = (0,_library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_5__.isLoopOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_1__.isAutoPlayOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_2__.isLazyLoadOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_3__.isBreakpointsOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_6__.isPaginationOn)(slider, advSliderOptions[i]);
    advSliderOptions[i] = (0,_library_sliders_slider_options_effects__WEBPACK_IMPORTED_MODULE_9__.isEffectOn)(slider, advSliderOptions[i]);

    // .m-slider parent is hardcoded in isNavigationOn options
    advSliderOptions[i] = (0,_library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__.isNavigationOn)(slider, advSliderOptions[i], advancedName, i);
    if (isThumbs) {
      var isVertical = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_7__.u_parseBool)(slider.getAttribute('data-slider-vertical'));
      if (isVertical) {
        sliderThumbOptions[i].direction = 'vertical';
        // sliderThumbOptions[i].autoHeight = true;
        sliderParent.classList.add('swiper-thumbs-nav-vertical');
      }
      advSliderThumbs[i] = new Swiper(sliderThumbsSelector, sliderThumbOptions[i]);
      advSliderOptions[i].thumbs = {};
      advSliderOptions[i].thumbs.swiper = advSliderThumbs[i];
      advSliderOptions[i].noSwipingSelector = '.l-slider-nav, .m-slider__pagination';
    }
    advSliderOptions[i].on = {};
    advSliders[i] = new Swiper(slider, advSliderOptions[i]);
    advSlidersContent[i] = new Swiper(sliderContentSelector, advContentOptions[i]);
    advSlidersContent[i].controller.control = advSliders[i];
    advSliders[i].controller.control = advSlidersContent[i];
    if (sliderNav) {
      if (advSliders[i].initialized) {
        advSliderNav[i] = new _library_sliders_swiper_with_tabs__WEBPACK_IMPORTED_MODULE_0__["default"](advSliders[i], sliderTabOptions[i]);
      }
    }
    var isAutoplay = slider.getAttribute('data-slider-autoplay');
    var autoplayObserve = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_7__.u_parseBool)(slider.getAttribute('data-slider-autoplay-observer'));
    if (isAutoplay && autoplayObserve) {
      advSliders[i].autoplay.stop();
      advancedObserver.push({
        slider: sliderID
      });
    }
    var sliderProgress = sliderParent.querySelector('.c-slider-progress-fill');
    if (sliderProgress && isAutoplay) {
      aReq[i] = null;
      advSliders[i].on('realIndexChange', function (s) {
        var duration = s.params.autoplay.delay;
        animateProgress(duration, sliderProgress, i);
      });
      advSliders[i].on('sliderFirstMove', function (s) {
        cancelAnimationFrame(aReq[i]);
        // sliderProgress.style.setProperty('--aa', '0');
      });
      advSliders[i].on('autoplayStop', function (s) {
        cancelAnimationFrame(aReq[i]);
      });
      advSliders[i].on('autoplayStart', function (s) {
        var duration = s.params.autoplay.delay;
        animateProgress(duration, sliderProgress, i);
      });
      advSliders[i].on('slideResetTransitionEnd', function (s) {
        var duration = s.params.autoplay.delay;
        animateProgress(duration, sliderProgress, i);
      });
    }
  });
  if (advancedObserver.length > 0) {
    (0,_library_sliders_slider_options_autoplayObserver__WEBPACK_IMPORTED_MODULE_8__.autoplayObserver)(advancedObserver, advancedName, advSliders);
  }
  var animateProgress = function animateProgress(duration, el, i) {
    var start;
    var previousTimeStamp;
    var done = false;
    el.style.setProperty('--fillProgress', 0);
    var step = function step(timestamp) {
      if (start === undefined) {
        start = timestamp;
      }
      var elapsed = timestamp - start;
      if (previousTimeStamp !== timestamp) {
        var prog = Math.min(elapsed / duration, 1);
        el.style.setProperty('--fillProgress', "".concat(prog));
        if (prog === 1) done = true;
      }
      if (elapsed < duration) {
        previousTimeStamp = timestamp;
        if (!done) {
          aReq[i] = window.requestAnimationFrame(step);
        }
      }
    };
    aReq[i] = window.requestAnimationFrame(step);
  };
};


/***/ }),

/***/ "./assets/_src/js/function-calls/sliders/slider-simple.js":
/*!****************************************************************!*\
  !*** ./assets/_src/js/function-calls/sliders/slider-simple.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simpleSliders: function() { return /* binding */ simpleSliders; }
/* harmony export */ });
/* harmony import */ var _library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplay */ "./assets/_src/js/library/sliders/slider-options/autoplay.js");
/* harmony import */ var _library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/sliders/slider-options/lazy */ "./assets/_src/js/library/sliders/slider-options/lazy.js");
/* harmony import */ var _library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/sliders/slider-options/breakpoints */ "./assets/_src/js/library/sliders/slider-options/breakpoints.js");
/* harmony import */ var _library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/sliders/slider-options/navigation */ "./assets/_src/js/library/sliders/slider-options/navigation.js");
/* harmony import */ var _library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/sliders/slider-options/pagination */ "./assets/_src/js/library/sliders/slider-options/pagination.js");
/* harmony import */ var _library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/sliders/slider-options/loop */ "./assets/_src/js/library/sliders/slider-options/loop.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/* harmony import */ var _library_sliders_slider_options_autoplayObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/sliders/slider-options/autoplayObserver */ "./assets/_src/js/library/sliders/slider-options/autoplayObserver.js");
/**
 * Simple slider type
 */









// config selectors only here
var simpleName = 'js-slider-simple';
var simpleSliderSel = '.js-slider-simple';

// find those selectors
var simpleSliderList = document.querySelectorAll(simpleSliderSel);
var simpleSliders = function simpleSliders() {
  // loop through sliders and add ID's to it

  var simpleSliderOptions = [];
  var simpleSlidersList = [];
  var simpleObserver = [];
  simpleSliderList.forEach(function (slider, i) {
    simpleSliderOptions[i] = {};
    var sliderID = "".concat(simpleName, "-").concat(i);
    slider.setAttribute('id', sliderID);
    simpleSliderOptions[i] = (0,_library_sliders_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__.isAutoPlayOn)(slider, simpleSliderOptions[i]);
    simpleSliderOptions[i] = (0,_library_sliders_slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__.isLazyLoadOn)(slider, simpleSliderOptions[i]);
    simpleSliderOptions[i] = (0,_library_sliders_slider_options_breakpoints__WEBPACK_IMPORTED_MODULE_2__.isBreakpointsOn)(slider, simpleSliderOptions[i]);
    simpleSliderOptions[i] = (0,_library_sliders_slider_options_pagination__WEBPACK_IMPORTED_MODULE_4__.isPaginationOn)(slider, simpleSliderOptions[i]);
    simpleSliderOptions[i] = (0,_library_sliders_slider_options_loop__WEBPACK_IMPORTED_MODULE_5__.isLoopOn)(slider, simpleSliderOptions[i]);

    // .m-slider parent is hardcoded in isNavigationOn options
    simpleSliderOptions[i] = (0,_library_sliders_slider_options_navigation__WEBPACK_IMPORTED_MODULE_3__.isNavigationOn)(slider, simpleSliderOptions[i], simpleName, i);
    simpleSlidersList[i] = new Swiper(slider, simpleSliderOptions[i]);
    if (slider.classList.contains('slider-filter-tabs')) {
      // eslint-disable-next-line no-use-before-define
      filterSliders(slider, simpleSlidersList[i]);
    }
    var isAutoplay = slider.getAttribute('data-slider-autoplay');
    var autoplayObserve = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_6__.u_parseBool)(slider.getAttribute('data-slider-autoplay-observer'));
    if (isAutoplay && autoplayObserve) {
      simpleSlidersList[i].autoplay.stop();
      simpleObserver.push({
        slider: sliderID
      });
    }
  });
  if (simpleObserver.length > 0) {
    (0,_library_sliders_slider_options_autoplayObserver__WEBPACK_IMPORTED_MODULE_7__.autoplayObserver)(simpleObserver, simpleName, simpleSlidersList);
  }
  window.addEventListener('hashchange', function (event) {
    // if (!isHashed) {
    //     //alert("location: " + document.location + ",
    //     state: " + JSON.stringify(event.state));
    // }
  }, false);
};
var filterSliders = function filterSliders(selector, slider) {
  if (!selector) return;
  var sliderContainer = selector.closest('.m-slider');
  var slides = selector.querySelectorAll('.m-slider__slide');
  var filterContainer = sliderContainer.querySelector('.js-slider-fnav');
  if (!filterContainer) return;
  var filterItems = filterContainer.querySelectorAll('.js-filter-fnav-item a');
  var filterDropdown = filterContainer.querySelector('.js-slider-fnav-dropdown');
  var isHashed = false;
  filterItems.forEach(function (item) {
    item.addEventListener('click', function (ev) {
      var clickedItem = ev.currentTarget;
      var clickedItemParent = clickedItem.closest('.js-filter-fnav-item');
      // const href = clickedItem.

      if (clickedItemParent.classList.contains('is-active')) {
        return;
      }
      filterItems.forEach(function (clicked) {
        clicked.closest('.js-filter-fnav-item').classList.remove('is-active');
      });
      clickedItemParent.classList.add('is-active');
      var clickedFilter = ev.currentTarget.getAttribute('data-slider-filter');
      var clickedHref = ev.currentTarget.getAttribute('href');
      ev.preventDefault();
      if (clickedHref.indexOf('#') > -1) {
        var urlSplit = clickedHref.split('#');
        var newHash = urlSplit[1];
        window.location.hash = newHash;
        isHashed = true;
      }

      // console.log(clickedHref, ' 5');
      // console.log(isHashed, '1');
      filterSlides(clickedFilter);
    });
  });
  var filterSlides = function filterSlides(filter) {
    var filterString = filter;
    if (filterString === 'all') filterString = '';
    for (var i = 0; i < slides.length; i += 1) {
      var slidesCategories = slides[i].getAttribute('data-categories').split(',');
      var hasFilter = false;
      for (var j = 0; j < slidesCategories.length; j += 1) {
        if (slidesCategories[j].indexOf(filterString) !== -1) {
          hasFilter = true;
        }
      }
      if (hasFilter) {
        slides[i].style.display = '';
        slides[i].classList.add('swiper-slide');
      } else {
        slides[i].classList.remove('swiper-slide');
        slides[i].style.display = 'none';
      }
      // console.log(slidesCategories);
      // console.log(slides[i].getAttribute('data-categories'));
    }
    slider.updateSize();
    slider.updateSlides();
    slider.updateProgress();
    slider.updateSlidesClasses();
    slider.slideToLoop(0);
    slider.scrollbar.updateSize();
  };
  // window.onpopstate = function(event)
  // {
  //     console.log(isHashed, '0');
  //     if(isHashed) {
  //         event.preventDefault();
  //         isHashed = false;
  //         return;
  //     }
  //     console.log(isHashed, '2');
  //
  //     alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  // };
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-dsbls.js":
/*!********************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-dsbls.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-options/autoplay */ "./assets/_src/js/library/sliders/slider-options/autoplay.js");
/* harmony import */ var _slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-options/lazy */ "./assets/_src/js/library/sliders/slider-options/lazy.js");
/* harmony import */ var _swiper_with_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper-with-tabs */ "./assets/_src/js/library/sliders/swiper-with-tabs.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./assets/_src/js/utils/utils.js");
/* harmony import */ var _slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-options/navigation */ "./assets/_src/js/library/sliders/slider-options/navigation.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/* harmony import */ var _slider_options_loop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-options/loop */ "./assets/_src/js/library/sliders/slider-options/loop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







var DSMPSliderDSBLS = /*#__PURE__*/function () {
  function DSMPSliderDSBLS(sliderID) {
    _classCallCheck(this, DSMPSliderDSBLS);
    this.optionsDesktop = {};
    this.optionsMobile = {
      slideClass: 'js-dsbls-nav-item',
      pagination: {
        el: '.l-slider-nav__pagination',
        clickable: true
      }
    };
    this.optionsNav = {
      item: '.js-dsbls-nav-item',
      active: 'is-active',
      trigger: 'mouseover'
    };
    this.sliderNo = sliderID.replace('js-slider-dsbls-', '');
    this.sliderName = sliderID;
    this.sliderMobileName = sliderID.replace('js-slider-dsbls-', 'js-slider-dsbls-m-');
    this.sliderSel = "#".concat(this.sliderName);
    this.sliderMobileSel = "#".concat(this.sliderMobileName);
    this.optionsNav.element = this.sliderMobileSel;
    this.sliderElem = document.querySelector(this.sliderSel);
    this.sliderMobileElem = document.querySelector(this.sliderMobileSel);
    this.showMobile = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_5__.u_parseBool)(this.sliderElem.getAttribute('data-slider-is-mobile'));
    this.optionsNav.trigger = this.sliderElem.getAttribute('data-slider-trigger') || 'mouseover';
    this.isMobile = false;
    this.isDesktop = false;
    this.desktopInstance;
    this.mobileInstance;
    this.desktopTabs;
    this.init();
  }
  _createClass(DSMPSliderDSBLS, [{
    key: "init",
    value: function init() {
      var self = this;
      var currentWidth = window.innerWidth;
      var breakpoint = 1112;
      currentWidth < breakpoint ? self.isMobile = true : self.isDesktop = true;
      self.parseOptions();
      if (self.isMobile && self.showMobile) self.createMobile();
      if (self.isDesktop) self.createDesktop();
      window.addEventListener('resize', function () {
        self.throttleResize();
      });
      self.throttleResize = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.u_throttled)(function () {
        self.resizeSlider();
      }, 350);
    }
  }, {
    key: "parseOptions",
    value: function parseOptions() {
      var self = this;
      if (self.isMobile && self.showMobile) {
        var basename = self.sliderMobileName;
        self.optionsMobile = (0,_slider_options_loop__WEBPACK_IMPORTED_MODULE_6__.isLoopOn)(self.sliderMobileElem, self.optionsMobile);
        self.optionsMobile = (0,_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__.isAutoPlayOn)(self.sliderMobileElem, self.optionsMobile);
        self.optionsMobile = (0,_slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__.isLazyLoadOn)(self.sliderMobileElem, self.optionsMobile);

        // .m-slider parent is hardcoded in isNavigationOn options
        self.optionsMobile = (0,_slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__.isNavigationOn)(self.sliderMobileElem, self.optionsMobile, basename, self.sliderNo);
      }
      if (self.isDesktop) {
        var _basename = self.sliderName;
        self.optionsDesktop = (0,_slider_options_loop__WEBPACK_IMPORTED_MODULE_6__.isLoopOn)(self.sliderElem, self.optionsDesktop);
        self.optionsDesktop = (0,_slider_options_autoplay__WEBPACK_IMPORTED_MODULE_0__.isAutoPlayOn)(self.sliderElem, self.optionsDesktop);
        self.optionsDesktop = (0,_slider_options_lazy__WEBPACK_IMPORTED_MODULE_1__.isLazyLoadOn)(self.sliderElem, self.optionsDesktop);

        // .m-slider parent is hardcoded in isNavigationOn options
        self.optionsDesktop = (0,_slider_options_navigation__WEBPACK_IMPORTED_MODULE_4__.isNavigationOn)(self.sliderElem, self.optionsDesktop, _basename, self.sliderNo);
      }
    }
  }, {
    key: "createDesktop",
    value: function createDesktop() {
      var self = this;
      self.desktopInstance = new Swiper(self.sliderSel, self.optionsDesktop);
      if (self.desktopInstance.initialized) {
        self.desktopTabs = new _swiper_with_tabs__WEBPACK_IMPORTED_MODULE_2__["default"](self.desktopInstance, self.optionsNav);
      }
    }
  }, {
    key: "createMobile",
    value: function createMobile() {
      var self = this;
      self.mobileInstance = new Swiper(self.sliderMobileSel, self.optionsMobile);
    }
  }, {
    key: "resizeSlider",
    value: function resizeSlider() {
      var self = this;
      var newWidth = window.innerWidth;
      var breakpoint = 1112;
      if (newWidth < breakpoint) {
        if (!self.isMobile) {
          if (typeof self.desktopInstance !== "undefined") {
            self.desktopTabs.unbindTabs();
            self.desktopInstance.destroy();
            self.desktopInstance = undefined;
          }
          if (self.showMobile) {
            self.createMobile();
          }
          self.isDesktop = false;
          self.isMobile = true;
        }
      } else {
        if (!self.isDesktop) {
          if (typeof self.mobileInstance !== "undefined") {
            self.mobileInstance.destroy();
            self.mobileInstance = undefined;
          }
          self.createDesktop();
          self.isMobile = false;
          self.isDesktop = true;
        }
      }
    }
  }]);
  return DSMPSliderDSBLS;
}();
/* harmony default export */ __webpack_exports__["default"] = (DSMPSliderDSBLS);

/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/autoplay.js":
/*!*******************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/autoplay.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAutoPlayOn: function() { return /* binding */ isAutoPlayOn; }
/* harmony export */ });
/**
 * AutoPlay Slider Options
 */

var isAutoPlayOn = function isAutoPlayOn(elem, options) {
  if (!elem) return options;
  var isAutoplay = elem.getAttribute('data-slider-autoplay');
  var isAutoplayDelay = elem.getAttribute('data-slider-autoplay-delay');
  if (isAutoplay === 'true') {
    options.autoplay = {};
    options.autoplay.disableOnInteraction = false;
    options.autoplay.delay = isAutoplayDelay ? parseInt(isAutoplayDelay, 10) : 3000;
  }
  var isSpeedOn = elem.getAttribute('data-slider-autoplay-speed');
  if (isSpeedOn) {
    options.speed = parseInt(isSpeedOn, 10);
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/autoplayObserver.js":
/*!***************************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/autoplayObserver.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoplayObserver: function() { return /* binding */ autoplayObserver; }
/* harmony export */ });
/**
 * Autoplay only when in viewport
 */

var autoplayObserver = function autoplayObserver(items, name, sliders) {
  var observerCallback = function observerCallback(entries) {
    entries.forEach(function (entry) {
      var sIndex = parseInt(entry.target.getAttribute('id').replace("".concat(name, "-"), ''), 10);
      if (entry.intersectionRatio > 0) {
        sliders[sIndex].autoplay.start();
      } else {
        sliders[sIndex].autoplay.stop();
      }
    });
  };
  var observer = new IntersectionObserver(observerCallback);
  items.forEach(function (observe) {
    var target = document.querySelector("#".concat(observe.slider));
    observer.observe(target);
  });
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/breakpoints.js":
/*!**********************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/breakpoints.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBreakpointsOn: function() { return /* binding */ isBreakpointsOn; }
/* harmony export */ });
/**
 * Break Points Options
 */

var isBreakpointsOn = function isBreakpointsOn(elem, options) {
  if (!elem) return options;
  var noColumns = parseInt(elem.getAttribute('data-slider-columns'), 10);
  var columnsGap = parseInt(elem.getAttribute('data-slider-columns-gap'), 10) || 30;
  if (noColumns) {
    options.slidesPerView = noColumns;
    options.breakpoints = {
      320: {
        slidesPerView: noColumns > 3 ? 1 : 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: noColumns > 3 ? 2 : 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: noColumns,
        spaceBetween: columnsGap
      }
    };
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/effects.js":
/*!******************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/effects.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEffectOn: function() { return /* binding */ isEffectOn; }
/* harmony export */ });
var isEffectOn = function isEffectOn(elem, options) {
  if (!elem) return options;
  var isEffect = elem.getAttribute('data-slider-effect-transition');
  options.effect = {};
  switch (isEffect) {
    case 'fade':
      options.effect = 'fade';
      options.fadeEffect = {};
      options.fadeEffect.crossFade = true;
      break;
    case 'cube':
      options.effect = 'cube';
      break;
    case 'coverflow':
      options.effect = 'coverflow';
      break;
    case 'cards':
      options.effect = 'cards';
      break;
    case 'flip':
      options.effect = 'flip';
      break;
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/lazy.js":
/*!***************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/lazy.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLazyLoadOn: function() { return /* binding */ isLazyLoadOn; }
/* harmony export */ });
/**
 * Lazy Load Slider Options
 *
 * TODO: missing option for data option, create preloader div via js, and change image src to data-src, right now all this done manually
 */

var isLazyLoadOn = function isLazyLoadOn(elem, options) {
  if (!elem) return options;

  //let isLazyLoad = elem.getAttribute('data-slider-lazy');

  options.preloadImages = false;
  options.lazy = {};
  options.lazy.loadPrevNext = true;
  options.loadOnTransitionStart = true;
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/loop.js":
/*!***************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/loop.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLoopOn: function() { return /* binding */ isLoopOn; }
/* harmony export */ });
/**
 * Loop Slider Options
 */

var isLoopOn = function isLoopOn(elem, options) {
  if (!elem) return options;
  var isLoop = elem.getAttribute('data-slider-loop');
  if (isLoop === 'true') {
    options.loop = true;
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/navigation.js":
/*!*********************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/navigation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNavigationOn: function() { return /* binding */ isNavigationOn; }
/* harmony export */ });
/**
 * Navigation Slider Options
 */

var isNavigationOn = function isNavigationOn(elem, options, basename, currentID) {
  var nextEl = '.swiper-button-next';
  var prevEl = '.swiper-button-prev';
  var nextID, prevID, sliderNext, sliderPrev;
  if (!elem) return options;
  var isNavigation = elem.getAttribute('data-slider-navigation');
  if (isNavigation) {
    options.navigation = {};
    if (basename && typeof currentID !== "undefined") {
      nextID = "".concat(basename, "-next-").concat(currentID);
      prevID = "".concat(basename, "-prev-").concat(currentID);
    }
    var sliderParent = elem.closest('.m-slider');
    if (sliderParent) {
      sliderNext = sliderParent.querySelector(nextEl);
      sliderPrev = sliderParent.querySelector(prevEl);
    }
    if (sliderNext && nextID) {
      sliderNext.setAttribute('id', nextID);
      options.navigation.nextEl = "#".concat(nextID);
    }
    if (sliderPrev && prevID) {
      sliderPrev.setAttribute('id', prevID);
      options.navigation.prevEl = "#".concat(prevID);
    }
  } else {
    options.navigation = false;
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/slider-options/pagination.js":
/*!*********************************************************************!*\
  !*** ./assets/_src/js/library/sliders/slider-options/pagination.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPaginationOn: function() { return /* binding */ isPaginationOn; }
/* harmony export */ });
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/**
 * Pagination Slider Options
 */

var isPaginationOn = function isPaginationOn(elem, options) {
  if (!elem) return options;
  var isPagination = elem.getAttribute('data-slider-pagination');
  if (isPagination) {
    options.pagination = {};
    options.pagination.el = '.m-slider__pagination';
    var leadingZero = false;
    if (isPagination === 'combo' || isPagination === 'fraction') {
      leadingZero = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_0__.u_parseBool)(elem.getAttribute('data-slider-leading-zero')) || false;
    }
    switch (isPagination) {
      case 'progressbar':
        options.pagination.type = 'progressbar';
        break;
      case 'fraction':
        options.pagination.type = 'fraction';
        options.pagination.formatFractionCurrent = function (number) {
          if (leadingZero) {
            return number < 10 ? "0".concat(number) : number;
          }
          return number;
        };
        options.pagination.formatFractionTotal = function (number) {
          if (leadingZero) {
            return number < 10 ? "0".concat(number) : number;
          }
          return number;
        };
        break;
      case 'combo':
        options.pagination.type = 'custom';
        options.pagination.renderCustom = function (swiper, current, total) {
          var totalFormated = total;
          var currentFormated = current;
          var progress = parseFloat(current / total).toFixed(5);
          if (leadingZero) {
            totalFormated = total < 10 ? "0".concat(total) : total;
            currentFormated = current < 10 ? "0".concat(current) : current;
          }
          return "<div class=\"swiper-pagination-progressbar swiper-pagination-horizontal\" style=\"--data-current: ".concat(current, " ; --data-total: ").concat(total, "; --data-progress: ").concat(progress, "\">\n                                <span class=\"swiper-pagination-progressbar-fill\"></span>\n                            </div> \n                            <div class=\"swiper-pagination-fraction\">\n                              <span class=\"swiper-pagination-current\">").concat(currentFormated, "</span>/\n                              <span class=\"swiper-pagination-total\">").concat(totalFormated, "</span>\n                            </div>");
        };
        break;
      default:
        options.pagination.clickable = true;
    }
    if (isPagination === 'combo') {
      var pagination = elem.querySelector('.m-slider__pagination');
      if (pagination) {
        pagination.classList.add('has-combo-progress');
      }
    }
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/sliders/swiper-with-circular-tabs.js":
/*!*********************************************************************!*\
  !*** ./assets/_src/js/library/sliders/swiper-with-circular-tabs.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
/* harmony import */ var _utils_u_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/u_types */ "./assets/_src/js/utils/u_types.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./assets/_src/js/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var SwiperWithCircularTabs = /*#__PURE__*/function () {
  function SwiperWithCircularTabs(swiper, options) {
    _classCallCheck(this, SwiperWithCircularTabs);
    this.defaults = {
      element: '.l-nav',
      item: '.c-nav__item',
      circle: '.c-slider-nav',
      trigger: 'click',
      classes: {
        active: 'is-active',
        right: 'is-right',
        left: 'is-left',
        top: 'is-top',
        middle: 'is-middle',
        bottom: 'is-bottom'
      },
      direction: false,
      // false: clockwise, true: anticlockwise
      position: 2,
      // position of start item, top: 1, right: 2, bottom: 3, left: 4
      arrange: 0,
      // arrange 0 = full circle, any other number means angle
      arrangeCentered: true,
      // force centered even if uneven no of items
      itemAlign: 'center',
      // center, inside, outside
      itemAngle: 0,
      rotateActive: false,
      offset: 0,
      // max 90, min -90
      symmetric: false,
      symmetricOrder: 'columns',
      // columns or rows
      data: {
        arrange: 'data-slider-circular-arrange',
        arrangeCentered: 'data-slider-circular-centered',
        position: 'data-slider-circular-position',
        itemAngle: 'data-slider-circular-angle',
        itemAlign: 'data-slider-circular-align-items',
        // parsed from backend also
        direction: 'data-slider-circular-item-direction',
        rotateActive: 'data-slider-circular-rotate-to-active',
        offset: 'data-slider-circular-offset',
        trigger: 'data-slider-circular-trigger',
        symmetric: 'data-slider-circular-symmetric',
        symmetricOrder: 'data-slider-circular-order'
      }
    };

    // if swiper is not initialized, end the script
    if (!swiper.initialized) {
      console.log('swiper not initialized');
      return;
    }
    this.swiper = swiper;
    this.config = (0,_utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__.u_extendObject)(this.defaults, options);
    this.selector = "".concat(this.config.element, " ").concat(this.config.item);
    this.container = document.querySelector(this.config.element);
    this.circle = this.container.querySelector(this.config.circle);
    this.items = document.querySelectorAll(this.selector);
    this.shift = 0;
    this.shiftSymmetric = 180;
    this.multiplier = this.items.length;
    this.numberOfItems = this.items.length;
    this.arrangeShift = 0;
    this.full = 360;
    this.arrangeIndex = 0;
    // reference to click function
    this.tabClicked = this.tabClick.bind(this);
    this.parseOptions();
    this.init();
  }
  _createClass(SwiperWithCircularTabs, [{
    key: "init",
    value: function init() {
      var self = this;
      self.getContainerRadius();
      self.getItemDimensions();
      // add event that catches slide changes
      self.swiperSlideChange();
      // bind events that catches tabs changes
      self.bindTabs();
      self.updateItemsPositions();
      self.container.style.setProperty('--navitems', self.numberOfItems);
      window.addEventListener('resize', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.u_throttled)(function () {
        self.updateItemsPositions();
      }), 150);
    }
  }, {
    key: "bindTabs",
    value: function bindTabs() {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.addEventListener(self.config.trigger, self.tabClicked, {
          passive: true
        });
        if (self.isTouch && self.config.trigger === 'mouseover') {
          tab.addEventListener('touchstart', self.tabClicked, {
            passive: true
          });
        }
      });
    }
  }, {
    key: "unbindTabs",
    value: function unbindTabs() {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.removeEventListener(self.config.trigger, self.tabClicked);
        if (self.isTouch && self.config.trigger === 'mouseover') {
          tab.removeEventListener('touchstart', self.tabClicked);
        }
      });
    }
  }, {
    key: "tabClick",
    value: function tabClick(ev) {
      var self = this;
      var currentTab = ev.currentTarget;
      var elem = self.items;
      var clickedTab;
      elem.forEach(function (tab, i) {
        if (currentTab === tab) {
          clickedTab = i;
        }
        tab.classList.remove(self.config.classes.active);
      });
      currentTab.classList.add(self.config.classes.active);
      self.swiper.slideToLoop(clickedTab);
      self.container.style.setProperty('--cAItem', clickedTab);
      if (self.config.rotateActive) {
        self.updateItemsPositions(clickedTab);
      }
    }
  }, {
    key: "tabChange",
    value: function tabChange(index) {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.classList.remove(self.config.classes.active);
      });
      elem.forEach(function (tab, i) {
        if (index === i) {
          tab.classList.add(self.config.classes.active);
        }
      });
      self.container.style.setProperty('--cAItem', index);
    }
  }, {
    key: "swiperSlideChange",
    value: function swiperSlideChange() {
      var self = this;
      self.swiper.on('slideChange', function () {
        var currentSlide = self.swiper.realIndex;
        self.tabChange(currentSlide);
        self.updateItemsPositions(currentSlide);
      });
    }
  }, {
    key: "updateItemsPositions",
    value: function updateItemsPositions(index) {
      var self = this;
      var elems = self.items;
      var ind;
      if (index == null) {
        ind = self.arrangeIndex;
      } else {
        ind = index;
      }
      var angle;
      var rotateShift = 0;
      if (self.config.rotateActive) {
        rotateShift = (ind - self.arrangeIndex) * self.config.itemAngle;
      }
      var arrangeShift = self.arrangeShift,
        multiplier = self.multiplier,
        full = self.full;
      var objClasses = Object.values(self.config.classes);
      elems.forEach(function (elem, i) {
        var currentIndex = i;
        var divider = Math.ceil(self.numberOfItems / 2);
        if (self.config.symmetric) {
          if (self.config.symmetricOrder === 'rows') {
            i % 2 === 0 ? currentIndex = i / 2 : currentIndex = (i - 1) / 2;
          }
          if (self.config.symmetricOrder === 'columns') {
            if (i > divider - 1) currentIndex = i - divider;
          }
        }
        if (self.config.direction) {
          angle = full * (currentIndex / multiplier) + self.shift - arrangeShift - rotateShift - self.config.offset;
        } else {
          angle = -full * (currentIndex / multiplier) + self.shift + arrangeShift + rotateShift + self.config.offset;
        }
        if (self.config.symmetric) {
          if (self.config.symmetricOrder === 'rows') {
            if (i % 2 === 1) angle = self.shiftSymmetric - angle;
          }
          if (self.config.symmetricOrder === 'columns') {
            if (i > divider - 1) angle = self.shiftSymmetric - angle;
          }
        }
        var cosine = parseFloat(Math.cos(angle * (Math.PI / 180)).toFixed(6));
        var sinus = parseFloat(Math.sin(angle * (Math.PI / 180)).toFixed(6));

        // eslint-disable-next-line no-nested-ternary
        var itemSideX = cosine === 0 ? self.config.classes.middle : cosine < 0 ? self.config.classes.left : self.config.classes.right;
        // eslint-disable-next-line no-nested-ternary
        var itemSideY = sinus === 0 ? self.config.classes.middle : sinus < 0 ? self.config.classes.top : self.config.classes.bottom;
        objClasses.forEach(function (classItems) {
          if (!(classItems === 'is-active' || classItems === itemSideY || classItems === itemSideX)) {
            elem.classList.remove(classItems);
          }
        });
        sinus === 0 ? elem.classList.add(itemSideY, itemSideX) : elem.classList.add(itemSideX, itemSideY);

        /* calculate actual height of rotated elements */
        if (self.config.itemAlign !== 'center') {
          var height = elem.offsetHeight;
          var width = elem.offsetWidth;
          var rHeight = parseFloat(Math.abs(cosine) * height + Math.abs(sinus) * width).toFixed(6);
          var rWidth = parseFloat(Math.abs(cosine) * width + Math.abs(sinus) * height).toFixed(6);
          elem.style.setProperty('--itemRH', "".concat(rHeight, "px"));
          elem.style.setProperty('--itemRW', "".concat(rWidth, "px"));
        }
        elem.style.setProperty('--az', "".concat(angle, "deg"));
      });
    }
  }, {
    key: "parseOptions",
    value: function parseOptions() {
      var self = this;
      /* parse arranging of items, center, or none */
      var arrange = self.container.getAttribute(self.config.data.arrange);
      /* parse position, top, left, right, bottom */
      self.config.position = parseInt(self.container.getAttribute(self.config.data.position), 10);

      /* parse angle */
      self.config.itemAngle = parseInt(self.container.getAttribute(self.config.data.itemAngle), 10) || self.config.itemAngle;
      /* parse alignment of items to circle, inside, outside or center */
      self.config.itemAlign = self.container.getAttribute(self.config.data.itemAlign) || self.config.itemAlign;
      self.config.direction = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_1__.u_parseBool)(self.container.getAttribute(self.config.data.direction)) || self.config.direction;
      /* parse direction, clockwise, anticlockwise */
      self.config.rotateActive = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_1__.u_parseBool)(self.container.getAttribute(self.config.data.rotateActive)) || self.config.rotateActive;
      /* parse offset, if you want to have items start
      from different angle from starting position */
      self.config.offset = parseInt(self.container.getAttribute(self.config.data.offset), 10) || self.config.offset;
      /* trigger method, click or mouseover */
      var trigger = self.container.getAttribute(self.config.data.trigger) || self.config.trigger;
      if (trigger === 'mouseover') {
        self.config.trigger = 'mouseover';
        self.config.rotateActive = false;
      }
      switch (self.config.position) {
        case 1:
          self.shift = -90;
          self.shiftSymmetric = 0;
          break;
        case 3:
          self.shift = 90;
          self.shiftSymmetric = 0;
          break;
        case 4:
          self.shift = 180;
          self.shiftSymmetric = 180;
          break;
        default:
          self.shift = 0;
          self.shiftSymmetric = 180;
      }
      var isSemiCircle = false;
      if (self.config.itemAngle && self.config.itemAngle * self.numberOfItems <= self.full && self.config.itemAngle > 15) {
        self.full = self.config.itemAngle;
        self.multiplier = 1;
        isSemiCircle = true;
      } else {
        self.config.itemAngle = self.full / self.numberOfItems;
      }
      if (arrange === 'center' && isSemiCircle) {
        /* parse force centered */
        self.config.arrangeCentered = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_1__.u_parseBool)(self.container.getAttribute(self.config.data.arrangeCentered));
        /* parse symmetric options */
        self.config.symmetric = (0,_utils_u_types__WEBPACK_IMPORTED_MODULE_1__.u_parseBool)(self.container.getAttribute(self.config.data.symmetric)) || self.config.symmetric;
        self.config.symmetricOrder = self.container.getAttribute(self.config.data.symmetricOrder) || self.config.symmetricOrder;
        if (self.config.symmetric) self.config.rotateActive = false;
        var divider = self.config.symmetric ? 4 : 2;
        self.arrangeIndex = (self.numberOfItems - 1) / divider;
        if (self.config.arrangeCentered) self.arrangeIndex = Math.floor(self.arrangeIndex);
        self.arrangeShift = self.arrangeIndex * self.config.itemAngle;
      }
      if (Math.abs(self.config.offset) > 90) {
        self.config.offset = 0;
      }
    }
  }, {
    key: "getContainerRadius",
    value: function getContainerRadius() {
      var self = this;
      var circle = self.circle;
      var observer = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          var pureradius = entry.contentRect.width / 2;
          var radius = entry.borderBoxSize[0].inlineSize / 2;
          entry.target.style.setProperty('--r', "".concat(pureradius.toFixed(), "px"));
          entry.target.style.setProperty('--rclean', "".concat(radius.toFixed(), "px"));
        });
      });
      observer.observe(circle);
    }
  }, {
    key: "getItemDimensions",
    value: function getItemDimensions() {
      var self = this;
      var elems = self.items;
      var observer = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          var _entry$contentRect = entry.contentRect,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;
          entry.target.style.setProperty('--itemH', "".concat(height, "px"));
          entry.target.style.setProperty('--itemW', "".concat(width, "px"));
        });
      });
      elems.forEach(function (elem) {
        observer.observe(elem);
      });
    }
  }]);
  return SwiperWithCircularTabs;
}();
/* harmony default export */ __webpack_exports__["default"] = (SwiperWithCircularTabs);

/***/ }),

/***/ "./assets/_src/js/library/sliders/swiper-with-tabs.js":
/*!************************************************************!*\
  !*** ./assets/_src/js/library/sliders/swiper-with-tabs.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/u_is-touch-device */ "./assets/_src/js/utils/u_is-touch-device.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var SwiperWithTabs = /*#__PURE__*/function () {
  function SwiperWithTabs(swiper, options) {
    _classCallCheck(this, SwiperWithTabs);
    this.defaults = {
      element: '.l-nav',
      item: '.c-nav__item',
      active: 'is-active',
      trigger: 'click'
    };
    this.isTouch = false;
    // util function to check for touch device
    this.isTouchDevice();

    // if swiper is not initialized, end the script
    if (!swiper.initialized) {
      console.log('swiper not initialized');
      return;
    }
    this.swiper = swiper;
    this.config = Object.assign({}, this.defaults, options || {});
    this.selector = "".concat(this.config.element, " ").concat(this.config.item);
    this.items = document.querySelectorAll(this.selector);

    // reference to click function
    this.tabClicked = this.tabClick.bind(this);
    this.init();
  }
  _createClass(SwiperWithTabs, [{
    key: "init",
    value: function init() {
      var self = this;
      // add event that catches slide changes
      self.swiperSlideChange();
      // bind events that catches tabs changes
      self.bindTabs();
    }
  }, {
    key: "bindTabs",
    value: function bindTabs() {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.addEventListener(self.config.trigger, self.tabClicked, {
          passive: true
        });
        if (self.isTouch && self.config.trigger === 'mouseover') {
          tab.addEventListener('touchstart', self.tabClicked, {
            passive: true
          });
        }
      });
    }
  }, {
    key: "unbindTabs",
    value: function unbindTabs() {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.removeEventListener(self.config.trigger, self.tabClicked);
        if (self.isTouch && self.config.trigger === 'mouseover') {
          tab.removeEventListener('touchstart', self.tabClicked);
        }
      });
    }
  }, {
    key: "tabClick",
    value: function tabClick(ev) {
      var self = this;
      var currentTab = ev.currentTarget;
      var elem = self.items;
      var clickedTab;
      elem.forEach(function (tab, i) {
        if (currentTab === tab) {
          clickedTab = i;
        }
        tab.classList.remove(self.config.active);
      });
      currentTab.classList.add(self.config.active);
      self.swiper.slideToLoop(clickedTab);
    }
  }, {
    key: "tabChange",
    value: function tabChange(index) {
      var self = this;
      var elem = self.items;
      elem.forEach(function (tab) {
        tab.classList.remove(self.config.active);
      });
      elem.forEach(function (tab, i) {
        if (index === i) {
          tab.classList.add(self.config.active);
        }
      });
    }
  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      var self = this;
      if ((0,_utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__.u_isTouchDevice)()) {
        self.isTouch = true;
      }
    }
  }, {
    key: "swiperSlideChange",
    value: function swiperSlideChange() {
      var self = this;
      self.swiper.on('slideChange', function () {
        var currentSlide = self.swiper.realIndex;
        self.tabChange(currentSlide);
      });
    }
  }]);
  return SwiperWithTabs;
}();
/* harmony default export */ __webpack_exports__["default"] = (SwiperWithTabs);

/***/ }),

/***/ "./assets/_src/js/utils/u_is-touch-device.js":
/*!***************************************************!*\
  !*** ./assets/_src/js/utils/u_is-touch-device.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_addTouchToHtml: function() { return /* binding */ u_addTouchToHtml; },
/* harmony export */   u_isTouchDevice: function() { return /* binding */ u_isTouchDevice; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./assets/_src/js/utils/utils.js");


/**
 * standalone function that checks whether device is touch or not
 * call it within anything,
 * @returns {boolean}
 */
var u_isTouchDevice = function u_isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
};

/**
 * function that calls isTouchDevice function,
 */
var isTouchHtmlUtil = function isTouchHtmlUtil() {
  var touch = u_isTouchDevice();
  var html = document.getElementsByTagName('html')[0];

  // if true, add touch-device to html, otherwise no-touch-device
  if (touch) {
    html.classList.remove('no-touch-device');
    html.classList.add('touch-device');
  } else {
    html.classList.remove('touch-device');
    html.classList.add('no-touch-device');
  }
};

/**
 * exported function addTouchToHtmlUtil
 * imported into index.js and called when DOMReady,
 * contains 'resize' event listener to check for
 * device orientation, or changes
 * is throttled, to prevent continuously triggering
 * (min 300ms so chrome dev tool can catch it)
 */
var u_addTouchToHtml = function u_addTouchToHtml() {
  isTouchHtmlUtil();

  // throttle the function
  var throttleIsTouch = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.u_throttled)(function () {
    isTouchHtmlUtil();
  }, 300);

  // bind resize event
  window.addEventListener('resize', function () {
    throttleIsTouch();
  });
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
/*!**************************************!*\
  !*** ./assets/_src/js/ds-sliders.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/u_is-touch-device */ "./assets/_src/js/utils/u_is-touch-device.js");
/* harmony import */ var _function_calls_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function-calls/sliders */ "./assets/_src/js/function-calls/sliders.js");
/*
 * @title Sliders Scripts
 * @description Application entry point
 */



document.addEventListener('DOMContentLoaded', function () {
  (0,_utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__.u_addTouchToHtml)();
  (0,_function_calls_sliders__WEBPACK_IMPORTED_MODULE_1__.callSliders)();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQVRSLElBQUksR0FBTVMsS0FBSSxFQUFBclYsTUFBQSxDQUFLaVYsSUFBSSxFQUFDO0lBQzFDLElBQUlILE9BQU8sRUFBRTtNQUNUO0lBQ0o7SUFDQSxJQUFJRCxTQUFTLElBQUksQ0FBQ0MsT0FBTyxFQUFFO01BQ3ZCSyxTQUFTLENBQUMsQ0FBQztJQUNmO0lBQ0FMLE9BQU8sR0FBR1UsVUFBVSxDQUFDLFlBQU07TUFDdkIsSUFBRyxDQUFDWCxTQUFTLEVBQUU7UUFDWE0sU0FBUyxDQUFDLENBQUM7TUFDZjtNQUNBTCxPQUFPLEdBQUcsSUFBSTtJQUNsQixDQUFDLEVBQUV4UixLQUFLLENBQUM7RUFDYixDQUFDO0FBQ0wsQ0FBQzs7Ozs7OztVQy9CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEO0FBRU47QUFFdkRoRixRQUFRLENBQUN3RyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBRWhEK04sMEVBQWdCLENBQUMsQ0FBQztFQUVsQnRWLG9FQUFXLENBQUMsQ0FBQztBQUVqQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZnVuY3Rpb24tY2FsbHMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Z1bmN0aW9uLWNhbGxzL3NsaWRlcnMvc2xpZGVyLWFkdmFuY2VkLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZnVuY3Rpb24tY2FsbHMvc2xpZGVycy9zbGlkZXItY2lyY3VsYXIuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9mdW5jdGlvbi1jYWxscy9zbGlkZXJzL3NsaWRlci1kc2Jscy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Z1bmN0aW9uLWNhbGxzL3NsaWRlcnMvc2xpZGVyLWV4dGVuZGVkLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZnVuY3Rpb24tY2FsbHMvc2xpZGVycy9zbGlkZXItc2ltcGxlLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS9zbGlkZXJzL3NsaWRlci1kc2Jscy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9hdXRvcGxheS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9hdXRvcGxheU9ic2VydmVyLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2JyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2VmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbGF6eS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9sb29wLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvc2xpZGVycy9zd2lwZXItd2l0aC1jaXJjdWxhci10YWJzLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS9zbGlkZXJzL3N3aXBlci13aXRoLXRhYnMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy91dGlscy91X2lzLXRvdWNoLWRldmljZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3Vfb2JqZWN0X2V4dGVuZC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3VfdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZHMtc2xpZGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkc2Jsc1NsaWRlciB9IGZyb20gJy4vc2xpZGVycy9zbGlkZXItZHNibHMnO1xuaW1wb3J0IHsgc2ltcGxlU2xpZGVycyB9IGZyb20gJy4vc2xpZGVycy9zbGlkZXItc2ltcGxlJztcbmltcG9ydCB7IGFkdmFuY2VkU2xpZGVycyB9IGZyb20gJy4vc2xpZGVycy9zbGlkZXItYWR2YW5jZWQnO1xuaW1wb3J0IHsgY2lyY3VsYXJTbGlkZXJzIH0gZnJvbSAnLi9zbGlkZXJzL3NsaWRlci1jaXJjdWxhcic7XG5pbXBvcnQgeyBleHRlbmRlZFNsaWRlcnMgfSBmcm9tICcuL3NsaWRlcnMvc2xpZGVyLWV4dGVuZGVkJztcblxuY29uc3QgY2FsbFNsaWRlcnMgPSAoKSA9PiB7XG4gICAgZHNibHNTbGlkZXIoKTtcbiAgICBzaW1wbGVTbGlkZXJzKCk7XG4gICAgYWR2YW5jZWRTbGlkZXJzKCk7XG4gICAgY2lyY3VsYXJTbGlkZXJzKCk7XG4gICAgZXh0ZW5kZWRTbGlkZXJzKCk7XG59O1xuXG5leHBvcnQge1xuICAgIGNhbGxTbGlkZXJzLFxufTtcbiIsIi8qKlxuICogQWR2YW5jZWQgc2xpZGVyIHR5cGVcbiAqL1xuXG5pbXBvcnQgU3dpcGVyV2l0aFRhYnMgZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3N3aXBlci13aXRoLXRhYnMnO1xuaW1wb3J0IHsgaXNBdXRvUGxheU9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2F1dG9wbGF5JztcbmltcG9ydCB7IGlzTGF6eUxvYWRPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9sYXp5JztcbmltcG9ydCB7IGlzQnJlYWtwb2ludHNPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBpc05hdmlnYXRpb25PbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGlzTG9vcE9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2xvb3AnO1xuaW1wb3J0IHsgaXNQYWdpbmF0aW9uT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyB1X3BhcnNlQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzL3VfdHlwZXMnO1xuaW1wb3J0IHsgYXV0b3BsYXlPYnNlcnZlciB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9hdXRvcGxheU9ic2VydmVyJztcbmltcG9ydCB7aXNFZmZlY3RPbn0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2VmZmVjdHMnO1xuXG4vLyBjb25maWcgc2VsZWN0b3JzIG9ubHkgaGVyZVxuY29uc3QgYWR2YW5jZWROYW1lID0gJ2pzLXNsaWRlci1hZHZhbmNlZCc7XG5jb25zdCBhZHZTbGlkZXJTZWwgPSAnLmpzLXNsaWRlci1hZHZhbmNlZCc7XG5jb25zdCBhZHZTbGlkZXJUYWJzID0gJy5sLXNsaWRlci1uYXYnO1xuXG4vLyBmaW5kIHRob3NlIHNlbGVjdG9yc1xuY29uc3QgYWR2U2xpZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWR2U2xpZGVyU2VsKTtcblxuY29uc3QgYWR2YW5jZWRTbGlkZXJzID0gKCkgPT4ge1xuICAgIC8vIGxvb3AgdGhyb3VnaCBzbGlkZXJzIGFuZCBhZGQgSUQncyB0byBpdFxuXG4gICAgY29uc3QgYWR2U2xpZGVyT3B0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGFkdlNsaWRlcnMgPSBbXTtcbiAgICBjb25zdCBzbGlkZXJUYWJPcHRpb25zID0gW107XG4gICAgY29uc3QgYWR2U2xpZGVyTmF2ID0gW107XG4gICAgbGV0IHNsaWRlck5hdjtcbiAgICBjb25zdCBhZHZTbGlkZXJUaHVtYnMgPSBbXTtcbiAgICBjb25zdCBzbGlkZXJUaHVtYk9wdGlvbnMgPSBbXTtcbiAgICBjb25zdCBhZHZhbmNlZE9ic2VydmVyID0gW107XG5cbiAgICBhZHZTbGlkZXJMaXN0LmZvckVhY2goKHNsaWRlciwgaSkgPT4ge1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0ge307XG5cbiAgICAgICAgY29uc3QgdHJpZ2dlclR5cGUgPSBzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci10cmlnZ2VyJykgfHwgJ2NsaWNrJztcblxuICAgICAgICBzbGlkZXJUYWJPcHRpb25zW2ldID0ge1xuICAgICAgICAgICAgaXRlbTogJy5qcy1uYXZfX2l0ZW0nLFxuICAgICAgICAgICAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXJUeXBlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNsaWRlclRodW1iT3B0aW9uc1tpXSA9IHtcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMTAsXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAnYy1zbGlkZXItbmF2JyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpc1RodW1icyA9IHVfcGFyc2VCb29sKHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXRodW1icycpKTtcblxuICAgICAgICBjb25zdCBzbGlkZXJJRCA9IGAke2FkdmFuY2VkTmFtZX0tJHtpfWA7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgc2xpZGVySUQpO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlclBhcmVudCA9IHNsaWRlci5jbG9zZXN0KCcubS1zbGlkZXInKTtcblxuICAgICAgICBpZiAoc2xpZGVyUGFyZW50KSB7XG4gICAgICAgICAgICBzbGlkZXJOYXYgPSBzbGlkZXJQYXJlbnQucXVlcnlTZWxlY3RvcihhZHZTbGlkZXJUYWJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzbGlkZXJUaHVtYnNTZWxlY3RvcjtcbiAgICAgICAgaWYgKHNsaWRlck5hdikge1xuICAgICAgICAgICAgaWYgKGlzVGh1bWJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVyVGh1bWJzSUQgPSBganMtc2xpZGVyLWFkdmFuY2VkLXRodW1icy0ke2l9YDtcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXYuc2V0QXR0cmlidXRlKCdpZCcsIHNsaWRlclRodW1ic0lEKTtcbiAgICAgICAgICAgICAgICBzbGlkZXJUaHVtYnNTZWxlY3RvciA9IGAjJHtzbGlkZXJUaHVtYnNJRH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXJUYWJJRCA9IGBqcy1zbGlkZXItYWR2YW5jZWQtbmF2LSR7aX1gO1xuICAgICAgICAgICAgICAgIHNsaWRlck5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgc2xpZGVyVGFiSUQpO1xuICAgICAgICAgICAgICAgIHNsaWRlclRhYk9wdGlvbnNbaV0uZWxlbWVudCA9IGAjJHtzbGlkZXJUYWJJRH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IGlzTG9vcE9uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSk7XG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc0F1dG9QbGF5T24oc2xpZGVyLCBhZHZTbGlkZXJPcHRpb25zW2ldKTtcbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IGlzTGF6eUxvYWRPbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNCcmVha3BvaW50c09uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSk7XG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc1BhZ2luYXRpb25PbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNFZmZlY3RPbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuXG4gICAgICAgIC8vIC5tLXNsaWRlciBwYXJlbnQgaXMgaGFyZGNvZGVkIGluIGlzTmF2aWdhdGlvbk9uIG9wdGlvbnNcbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IGlzTmF2aWdhdGlvbk9uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSwgYWR2YW5jZWROYW1lLCBpKTtcblxuICAgICAgICBpZiAoaXNUaHVtYnMpIHtcblxuICAgICAgICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IHVfcGFyc2VCb29sKHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXZlcnRpY2FsJykpO1xuXG4gICAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHNsaWRlclRodW1iT3B0aW9uc1tpXS5kaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlclRodW1iT3B0aW9uc1tpXS5hdXRvSGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzbGlkZXJQYXJlbnQuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLXRodW1icy1uYXYtdmVydGljYWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWR2U2xpZGVyVGh1bWJzW2ldID0gbmV3IFN3aXBlcihzbGlkZXJUaHVtYnNTZWxlY3Rvciwgc2xpZGVyVGh1bWJPcHRpb25zW2ldKTtcblxuICAgICAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXS50aHVtYnMgPSB7fTtcbiAgICAgICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0udGh1bWJzLnN3aXBlciA9IGFkdlNsaWRlclRodW1ic1tpXTtcblxuICAgICAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXS5ub1N3aXBpbmdTZWxlY3RvciA9ICcubC1zbGlkZXItbmF2LCAubS1zbGlkZXJfX3BhZ2luYXRpb24nO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhZHZTbGlkZXJzW2ldID0gbmV3IFN3aXBlcihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuXG4gICAgICAgIGlmIChzbGlkZXJOYXYpIHtcbiAgICAgICAgICAgIGlmIChhZHZTbGlkZXJzW2ldLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgYWR2U2xpZGVyTmF2W2ldID0gbmV3IFN3aXBlcldpdGhUYWJzKGFkdlNsaWRlcnNbaV0sIHNsaWRlclRhYk9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNBdXRvcGxheSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWF1dG9wbGF5Jyk7XG4gICAgICAgIGNvbnN0IGF1dG9wbGF5T2JzZXJ2ZSA9IHVfcGFyc2VCb29sKHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWF1dG9wbGF5LW9ic2VydmVyJykpO1xuXG4gICAgICAgIGlmIChpc0F1dG9wbGF5ICYmIGF1dG9wbGF5T2JzZXJ2ZSkge1xuICAgICAgICAgICAgYWR2U2xpZGVyc1tpXS5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgICAgICBhZHZhbmNlZE9ic2VydmVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHNsaWRlcjogc2xpZGVySUQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGFkdmFuY2VkT2JzZXJ2ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICBhdXRvcGxheU9ic2VydmVyKGFkdmFuY2VkT2JzZXJ2ZXIsIGFkdmFuY2VkTmFtZSwgYWR2U2xpZGVycyk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBhZHZhbmNlZFNsaWRlcnMsXG59O1xuIiwiLyoqXG4gKiBBZHZhbmNlZCBzbGlkZXIgdHlwZVxuICovXG5cbmltcG9ydCB7IGlzQXV0b1BsYXlPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9hdXRvcGxheSc7XG5pbXBvcnQgeyBpc0xhenlMb2FkT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbGF6eSc7XG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRzT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgaXNOYXZpZ2F0aW9uT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbmF2aWdhdGlvbic7XG5cbmltcG9ydCB7IGlzTG9vcE9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2xvb3AnO1xuaW1wb3J0IHsgaXNFZmZlY3RPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9lZmZlY3RzJztcbmltcG9ydCBTd2lwZXJXaXRoQ2lyY3VsYXJUYWJzIGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zd2lwZXItd2l0aC1jaXJjdWxhci10YWJzJztcbmltcG9ydCB7IGlzUGFnaW5hdGlvbk9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tICcuLi8uLi91dGlscy91X3R5cGVzJztcblxuLy8gY29uZmlnIHNlbGVjdG9ycyBvbmx5IGhlcmVcbmNvbnN0IGFkdmFuY2VkTmFtZSA9ICdqcy1jaXJjdWxhci1hZHYnO1xuY29uc3QgYWR2U2xpZGVyU2VsID0gJy5qcy1jaXJjdWxhci1hZHYnO1xuY29uc3QgYWR2U2xpZGVyVGFicyA9ICcubC1zbGlkZXItbmF2JztcblxuLy8gZmluZCB0aG9zZSBzZWxlY3RvcnNcbmNvbnN0IGFkdlNsaWRlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGFkdlNsaWRlclNlbCk7XG5cbmNvbnN0IGNpcmN1bGFyU2xpZGVycyA9ICgpID0+IHtcbiAgICAvLyBsb29wIHRocm91Z2ggc2xpZGVycyBhbmQgYWRkIElEJ3MgdG8gaXRcblxuICAgIGNvbnN0IGFkdlNsaWRlck9wdGlvbnMgPSBbXTtcbiAgICBjb25zdCBhZHZTbGlkZXJzID0gW107XG4gICAgY29uc3Qgc2xpZGVyVGFiT3B0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGFkdlNsaWRlck5hdiA9IFtdO1xuICAgIGxldCBzbGlkZXJOYXY7XG4gICAgY29uc3Qgc2xpZGVyVGh1bWJPcHRpb25zID0gW107XG5cbiAgICBhZHZTbGlkZXJMaXN0LmZvckVhY2goIChzbGlkZXIsIGkpID0+IHtcbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IHt9O1xuICAgICAgICBzbGlkZXJUYWJPcHRpb25zW2ldID0ge1xuICAgICAgICAgICAgaXRlbTogJy5qcy1uYXZfX2l0ZW0nLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNsaWRlclRodW1iT3B0aW9uc1tpXSA9IHtcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMTAsXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAnYy1zbGlkZXItbmF2JyxcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNsaWRlcklEID0gYCR7YWR2YW5jZWROYW1lfS0ke2l9YDtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBzbGlkZXJJRCk7XG5cbiAgICAgICAgY29uc3Qgc2xpZGVyUGFyZW50ID0gc2xpZGVyLmNsb3Nlc3QoJy5tLXNsaWRlcicpO1xuXG4gICAgICAgIGlmIChzbGlkZXJQYXJlbnQpIHtcbiAgICAgICAgICAgIHNsaWRlck5hdiA9IHNsaWRlclBhcmVudC5xdWVyeVNlbGVjdG9yKGFkdlNsaWRlclRhYnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNsaWRlck5hdikge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVyVGFiSUQgPSBganMtc2xpZGVyLWNpcmN1bGFyLW5hdi0ke2l9YDtcbiAgICAgICAgICAgIHNsaWRlck5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgc2xpZGVyVGFiSUQpO1xuICAgICAgICAgICAgc2xpZGVyVGFiT3B0aW9uc1tpXS5lbGVtZW50ID0gYCMke3NsaWRlclRhYklEfWA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0NlbnRlclNsaWRlcyA9IHNsaWRlck5hdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWNpcmN1bGFyLWFycmFuZ2UnKTtcbiAgICAgICAgY29uc3QgaXNTeW1tZXRyaWMgPSB1X3BhcnNlQm9vbChzbGlkZXJOYXYuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1jaXJjdWxhci1zeW1tZXRyaWMnKSkgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzQ2VudGVyU2xpZGVzID09PSAnY2VudGVyJyAmJiAhaXNTeW1tZXRyaWMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNTbGlkZXJOYXYgPSBzbGlkZXJOYXYucXVlcnlTZWxlY3RvcignLmMtc2xpZGVyLW5hdicpO1xuICAgICAgICAgICAgaWYgKGNTbGlkZXJOYXYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsSW5kZXggPSBwYXJzZUludChjU2xpZGVyTmF2LmdldEF0dHJpYnV0ZSgnZGF0YS1pbml0aWFsLWluZGV4JyksIDEwKTtcbiAgICAgICAgICAgICAgICBzbGlkZXJOYXYuc3R5bGUuc2V0UHJvcGVydHkoJy0tY0FJdGVtJywgaW5pdGlhbEluZGV4KTtcbiAgICAgICAgICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldLmluaXRpYWxTbGlkZSA9IGluaXRpYWxJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlck5hdi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jQUl0ZW0nLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc0xvb3BPbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNBdXRvUGxheU9uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSk7XG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc0xhenlMb2FkT24oc2xpZGVyLCBhZHZTbGlkZXJPcHRpb25zW2ldKTtcbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IGlzQnJlYWtwb2ludHNPbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNFZmZlY3RPbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNQYWdpbmF0aW9uT24oc2xpZGVyLCBhZHZTbGlkZXJPcHRpb25zW2ldKTtcblxuICAgICAgICAvLyAubS1zbGlkZXIgcGFyZW50IGlzIGhhcmRjb2RlZCBpbiBpc05hdmlnYXRpb25PbiBvcHRpb25zXG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc05hdmlnYXRpb25PbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0sIGFkdmFuY2VkTmFtZSwgaSk7XG4gICAgICAgIFxuICAgICAgICBhZHZTbGlkZXJzW2ldID0gbmV3IFN3aXBlcihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuXG4gICAgICAgIGlmIChzbGlkZXJOYXYpIHtcbiAgICAgICAgICAgIGlmIChhZHZTbGlkZXJzW2ldLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgYWR2U2xpZGVyTmF2W2ldID0gbmV3IFN3aXBlcldpdGhDaXJjdWxhclRhYnMoYWR2U2xpZGVyc1tpXSwgc2xpZGVyVGFiT3B0aW9uc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgY2lyY3VsYXJTbGlkZXJzLFxufTtcbiIsIi8qKlxuICogRFNCTFMgU0xJREVSIHR5cGVcbiAqL1xuaW1wb3J0IERTTVBTbGlkZXJEU0JMUyBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLWRzYmxzJztcblxuLy8gY29uZmlnIHNlbGVjdG9ycyBvbmx5IGhlcmVcbmNvbnN0IGRzYmxzU2VsID0gJy5qcy1zbGlkZXItZHNibHMnO1xuY29uc3QgZHNibHNTZWxNb2IgPSAnLmpzLXNsaWRlci1kc2Jscy1tJztcblxuLy8gZmluZCB0aG9zZSBzZWxlY3RvcnNcbmNvbnN0IGRzYmxzU2xpZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZHNibHNTZWwpO1xuY29uc3QgZHNibHNTbGlkZXJNb2JpbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkc2Jsc1NlbE1vYik7XG5cbmNvbnN0IGRzYmxzU2xpZGVyID0gKCkgPT4ge1xuICAgIC8vIGxvb3AgdGhyb3VnaCBzbGlkZXJzIGFuZCBhZGQgSUQncyB0byBpdCwgd2UgYXNzdW1lIGVhY2ggXG4gICAgLy8gZHNibHMgc2xpZGVyIGhhcyBpdHMgb3duIG1vYmlsZSBzbGlkZXIgYXMgaXRzXG4gICAgLy8gY29tcG9uZW50LCBzbyBubyBuZWVkIHRvIGxvb3AsIHNlYXJjaCBwYXJlbnQgXG4gICAgLy8gYW5kIHF1ZXJ5IGNoaWxkIGVsZW1lbnRcblxuICAgIGNvbnN0IGRzYmxzID0gW107XG4gICAgZHNibHNTbGlkZXJMaXN0LmZvckVhY2goIChzbGlkZXIsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVySUQgPSBganMtc2xpZGVyLWRzYmxzLSR7aX1gO1xuICAgICAgICBjb25zdCBzbGlkZXJNb2JpbGVJRCA9IGBqcy1zbGlkZXItZHNibHMtbS0ke2l9YDtcblxuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdpZCcsIHNsaWRlcklEKTtcbiAgICAgICAgZHNibHNTbGlkZXJNb2JpbGVMaXN0W2ldLnNldEF0dHJpYnV0ZSgnaWQnLCBzbGlkZXJNb2JpbGVJRCk7XG5cbiAgICAgICAgZHNibHNbaV0gPSBuZXcgRFNNUFNsaWRlckRTQkxTKHNsaWRlcklEKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gICAgZHNibHNTbGlkZXIsXG59XG4iLCIvKipcbiAqIEFkdmFuY2VkIHNsaWRlciB0eXBlXG4gKi9cblxuaW1wb3J0IFN3aXBlcldpdGhUYWJzIGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zd2lwZXItd2l0aC10YWJzJztcbmltcG9ydCB7IGlzQXV0b1BsYXlPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9hdXRvcGxheSc7XG5pbXBvcnQgeyBpc0xhenlMb2FkT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbGF6eSc7XG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRzT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgaXNOYXZpZ2F0aW9uT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBpc0xvb3BPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9sb29wJztcbmltcG9ydCB7IGlzUGFnaW5hdGlvbk9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tICcuLi8uLi91dGlscy91X3R5cGVzJztcbmltcG9ydCB7IGF1dG9wbGF5T2JzZXJ2ZXIgfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvYXV0b3BsYXlPYnNlcnZlcic7XG5pbXBvcnQge2lzRWZmZWN0T259IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9lZmZlY3RzJztcblxuLy8gY29uZmlnIHNlbGVjdG9ycyBvbmx5IGhlcmVcbmNvbnN0IGFkdmFuY2VkTmFtZSA9ICdqcy1zbGlkZXItZXh0ZW5kZWQnO1xuY29uc3QgYWR2U2xpZGVyU2VsID0gJy5qcy1zbGlkZXItZXh0ZW5kZWQnO1xuY29uc3QgYWR2U2xpZGVyVGFicyA9ICcubC1zbGlkZXItbmF2JztcbmNvbnN0IGFkdlNsaWRlckNvbnRlbnQgPSAnLmwtc2xpZGVyLWNvbnRlbnQnO1xuXG4vLyBmaW5kIHRob3NlIHNlbGVjdG9yc1xuY29uc3QgYWR2U2xpZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWR2U2xpZGVyU2VsKTtcblxuY29uc3QgZXh0ZW5kZWRTbGlkZXJzID0gKCkgPT4ge1xuICAgIC8vIGxvb3AgdGhyb3VnaCBzbGlkZXJzIGFuZCBhZGQgSUQncyB0byBpdFxuXG4gICAgY29uc3QgYWR2U2xpZGVyT3B0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGFkdlNsaWRlcnMgPSBbXTtcbiAgICBjb25zdCBzbGlkZXJUYWJPcHRpb25zID0gW107XG4gICAgY29uc3QgYWR2U2xpZGVyTmF2ID0gW107XG4gICAgbGV0IHNsaWRlck5hdjtcbiAgICBjb25zdCBhZHZTbGlkZXJUaHVtYnMgPSBbXTtcbiAgICBjb25zdCBzbGlkZXJUaHVtYk9wdGlvbnMgPSBbXTtcbiAgICBjb25zdCBhZHZhbmNlZE9ic2VydmVyID0gW107XG4gICAgY29uc3QgYWR2Q29udGVudE9wdGlvbnMgPSBbXTtcbiAgICBjb25zdCBhZHZTbGlkZXJzQ29udGVudCA9IFtdO1xuICAgIGNvbnN0IGFSZXEgPSBbXTtcblxuICAgIGFkdlNsaWRlckxpc3QuZm9yRWFjaCgoc2xpZGVyLCBpKSA9PiB7XG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSB7fTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyVHlwZSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXRyaWdnZXInKSB8fCAnY2xpY2snO1xuXG4gICAgICAgIHNsaWRlclRhYk9wdGlvbnNbaV0gPSB7XG4gICAgICAgICAgICBpdGVtOiAnLmpzLW5hdl9faXRlbScsXG4gICAgICAgICAgICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlclR5cGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgc2xpZGVyVGh1bWJPcHRpb25zW2ldID0ge1xuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdjLXNsaWRlci1uYXYnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGFkdkNvbnRlbnRPcHRpb25zW2ldID0ge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAnbC1zbGlkZXItY29udGVudF9fd3JhcHBlcicsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGlzVGh1bWJzID0gdV9wYXJzZUJvb2woc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItdGh1bWJzJykpO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlcklEID0gYCR7YWR2YW5jZWROYW1lfS0ke2l9YDtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBzbGlkZXJJRCk7XG5cbiAgICAgICAgY29uc3Qgc2xpZGVyUGFyZW50ID0gc2xpZGVyLmNsb3Nlc3QoJy5tLXNsaWRlcicpO1xuXG4gICAgICAgIGlmIChzbGlkZXJQYXJlbnQpIHtcbiAgICAgICAgICAgIHNsaWRlck5hdiA9IHNsaWRlclBhcmVudC5xdWVyeVNlbGVjdG9yKGFkdlNsaWRlclRhYnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNsaWRlclRodW1ic1NlbGVjdG9yO1xuICAgICAgICBpZiAoc2xpZGVyTmF2KSB7XG4gICAgICAgICAgICBpZiAoaXNUaHVtYnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXJUaHVtYnNJRCA9IGBqcy1zbGlkZXItZXh0ZW5kZWQtdGh1bWJzLSR7aX1gO1xuICAgICAgICAgICAgICAgIHNsaWRlck5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgc2xpZGVyVGh1bWJzSUQpO1xuICAgICAgICAgICAgICAgIHNsaWRlclRodW1ic1NlbGVjdG9yID0gYCMke3NsaWRlclRodW1ic0lEfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlclRhYklEID0gYGpzLXNsaWRlci1leHRlbmRlZC1uYXYtJHtpfWA7XG4gICAgICAgICAgICAgICAgc2xpZGVyTmF2LnNldEF0dHJpYnV0ZSgnaWQnLCBzbGlkZXJUYWJJRCk7XG4gICAgICAgICAgICAgICAgc2xpZGVyVGFiT3B0aW9uc1tpXS5lbGVtZW50ID0gYCMke3NsaWRlclRhYklEfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2xpZGVyQ29udGVudCA9IHNsaWRlclBhcmVudC5xdWVyeVNlbGVjdG9yKGFkdlNsaWRlckNvbnRlbnQpO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlckNvbnRlbnRJRCA9IGBqcy1zbGlkZXItZXh0ZW5kZWQtY29udGVudC0ke2l9YDtcbiAgICAgICAgc2xpZGVyQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgc2xpZGVyQ29udGVudElEKTtcbiAgICAgICAgbGV0IHNsaWRlckNvbnRlbnRTZWxlY3RvciA9IGAjJHtzbGlkZXJDb250ZW50SUR9YDtcblxuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNMb29wT24oc2xpZGVyLCBhZHZTbGlkZXJPcHRpb25zW2ldKTtcbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IGlzQXV0b1BsYXlPbihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNMYXp5TG9hZE9uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSk7XG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc0JyZWFrcG9pbnRzT24oc2xpZGVyLCBhZHZTbGlkZXJPcHRpb25zW2ldKTtcbiAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXSA9IGlzUGFnaW5hdGlvbk9uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSk7XG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0gPSBpc0VmZmVjdE9uKHNsaWRlciwgYWR2U2xpZGVyT3B0aW9uc1tpXSk7XG5cbiAgICAgICAgLy8gLm0tc2xpZGVyIHBhcmVudCBpcyBoYXJkY29kZWQgaW4gaXNOYXZpZ2F0aW9uT24gb3B0aW9uc1xuICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldID0gaXNOYXZpZ2F0aW9uT24oc2xpZGVyLCBhZHZTbGlkZXJPcHRpb25zW2ldLCBhZHZhbmNlZE5hbWUsIGkpO1xuXG4gICAgICAgIGlmIChpc1RodW1icykge1xuXG4gICAgICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gdV9wYXJzZUJvb2woc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItdmVydGljYWwnKSk7XG5cbiAgICAgICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyVGh1bWJPcHRpb25zW2ldLmRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyVGh1bWJPcHRpb25zW2ldLmF1dG9IZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNsaWRlclBhcmVudC5jbGFzc0xpc3QuYWRkKCdzd2lwZXItdGh1bWJzLW5hdi12ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZHZTbGlkZXJUaHVtYnNbaV0gPSBuZXcgU3dpcGVyKHNsaWRlclRodW1ic1NlbGVjdG9yLCBzbGlkZXJUaHVtYk9wdGlvbnNbaV0pO1xuXG4gICAgICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldLnRodW1icyA9IHt9O1xuICAgICAgICAgICAgYWR2U2xpZGVyT3B0aW9uc1tpXS50aHVtYnMuc3dpcGVyID0gYWR2U2xpZGVyVGh1bWJzW2ldO1xuXG4gICAgICAgICAgICBhZHZTbGlkZXJPcHRpb25zW2ldLm5vU3dpcGluZ1NlbGVjdG9yID0gJy5sLXNsaWRlci1uYXYsIC5tLXNsaWRlcl9fcGFnaW5hdGlvbic7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFkdlNsaWRlck9wdGlvbnNbaV0ub24gPSB7fTtcblxuICAgICAgICBhZHZTbGlkZXJzW2ldID0gbmV3IFN3aXBlcihzbGlkZXIsIGFkdlNsaWRlck9wdGlvbnNbaV0pO1xuXG4gICAgICAgIGFkdlNsaWRlcnNDb250ZW50W2ldID0gbmV3IFN3aXBlcihzbGlkZXJDb250ZW50U2VsZWN0b3IsIGFkdkNvbnRlbnRPcHRpb25zW2ldKTtcblxuICAgICAgICBhZHZTbGlkZXJzQ29udGVudFtpXS5jb250cm9sbGVyLmNvbnRyb2wgPSBhZHZTbGlkZXJzW2ldO1xuICAgICAgICBhZHZTbGlkZXJzW2ldLmNvbnRyb2xsZXIuY29udHJvbCA9IGFkdlNsaWRlcnNDb250ZW50W2ldO1xuXG4gICAgICAgIGlmIChzbGlkZXJOYXYpIHtcbiAgICAgICAgICAgIGlmIChhZHZTbGlkZXJzW2ldLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgYWR2U2xpZGVyTmF2W2ldID0gbmV3IFN3aXBlcldpdGhUYWJzKGFkdlNsaWRlcnNbaV0sIHNsaWRlclRhYk9wdGlvbnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNBdXRvcGxheSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWF1dG9wbGF5Jyk7XG4gICAgICAgIGNvbnN0IGF1dG9wbGF5T2JzZXJ2ZSA9IHVfcGFyc2VCb29sKHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWF1dG9wbGF5LW9ic2VydmVyJykpO1xuXG4gICAgICAgIGlmIChpc0F1dG9wbGF5ICYmIGF1dG9wbGF5T2JzZXJ2ZSkge1xuICAgICAgICAgICAgYWR2U2xpZGVyc1tpXS5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgICAgICBhZHZhbmNlZE9ic2VydmVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHNsaWRlcjogc2xpZGVySUQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNsaWRlclByb2dyZXNzID0gc2xpZGVyUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLXNsaWRlci1wcm9ncmVzcy1maWxsJyk7XG4gICAgICAgIGlmIChzbGlkZXJQcm9ncmVzcyAmJiBpc0F1dG9wbGF5KSB7XG4gICAgICAgICAgICBhUmVxW2ldID0gbnVsbDtcblxuICAgICAgICAgICAgYWR2U2xpZGVyc1tpXS5vbigncmVhbEluZGV4Q2hhbmdlJywgKHMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHMucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgICAgICAgICAgICAgIGFuaW1hdGVQcm9ncmVzcyhkdXJhdGlvbiwgc2xpZGVyUHJvZ3Jlc3MsIGkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkdlNsaWRlcnNbaV0ub24oJ3NsaWRlckZpcnN0TW92ZScsIChzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYVJlcVtpXSk7XG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyUHJvZ3Jlc3Muc3R5bGUuc2V0UHJvcGVydHkoJy0tYWEnLCAnMCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkdlNsaWRlcnNbaV0ub24oJ2F1dG9wbGF5U3RvcCcsIChzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYVJlcVtpXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWR2U2xpZGVyc1tpXS5vbignYXV0b3BsYXlTdGFydCcsIChzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBzLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICAgICAgICAgICAgICBhbmltYXRlUHJvZ3Jlc3MoZHVyYXRpb24sIHNsaWRlclByb2dyZXNzLCBpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZHZTbGlkZXJzW2ldLm9uKCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcsIChzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBzLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICAgICAgICAgICAgICBhbmltYXRlUHJvZ3Jlc3MoZHVyYXRpb24sIHNsaWRlclByb2dyZXNzLCBpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoYWR2YW5jZWRPYnNlcnZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF1dG9wbGF5T2JzZXJ2ZXIoYWR2YW5jZWRPYnNlcnZlciwgYWR2YW5jZWROYW1lLCBhZHZTbGlkZXJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRlUHJvZ3Jlc3MgPSAoZHVyYXRpb24sIGVsLCBpKSA9PiB7XG4gICAgICAgIGxldCBzdGFydDtcbiAgICAgICAgbGV0IHByZXZpb3VzVGltZVN0YW1wO1xuICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1maWxsUHJvZ3Jlc3MnLCAwKTtcblxuICAgICAgICBjb25zdCBzdGVwID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lc3RhbXAgLSBzdGFydDtcblxuICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZVN0YW1wICE9PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9nID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1maWxsUHJvZ3Jlc3MnLCBgJHtwcm9nfWApO1xuICAgICAgICAgICAgICAgIGlmIChwcm9nID09PSAxKSBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsYXBzZWQgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZVN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBhUmVxW2ldID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhUmVxW2ldID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9O1xufTtcblxuXG5cbmV4cG9ydCB7XG4gICAgZXh0ZW5kZWRTbGlkZXJzLFxufTtcbiIsIi8qKlxuICogU2ltcGxlIHNsaWRlciB0eXBlXG4gKi9cbmltcG9ydCB7IGlzQXV0b1BsYXlPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9hdXRvcGxheSc7XG5pbXBvcnQgeyBpc0xhenlMb2FkT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbGF6eSc7XG5pbXBvcnQgeyBpc0JyZWFrcG9pbnRzT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgaXNOYXZpZ2F0aW9uT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBpc1BhZ2luYXRpb25PbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvc2xpZGVycy9zbGlkZXItb3B0aW9ucy9wYWdpbmF0aW9uJztcbmltcG9ydCB7IGlzTG9vcE9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS9zbGlkZXJzL3NsaWRlci1vcHRpb25zL2xvb3AnO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tICcuLi8uLi91dGlscy91X3R5cGVzJztcbmltcG9ydCB7IGF1dG9wbGF5T2JzZXJ2ZXIgfSBmcm9tICcuLi8uLi9saWJyYXJ5L3NsaWRlcnMvc2xpZGVyLW9wdGlvbnMvYXV0b3BsYXlPYnNlcnZlcic7XG5cbi8vIGNvbmZpZyBzZWxlY3RvcnMgb25seSBoZXJlXG5jb25zdCBzaW1wbGVOYW1lID0gJ2pzLXNsaWRlci1zaW1wbGUnO1xuY29uc3Qgc2ltcGxlU2xpZGVyU2VsID0gJy5qcy1zbGlkZXItc2ltcGxlJztcblxuLy8gZmluZCB0aG9zZSBzZWxlY3RvcnNcbmNvbnN0IHNpbXBsZVNsaWRlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNpbXBsZVNsaWRlclNlbCk7XG5cbmNvbnN0IHNpbXBsZVNsaWRlcnMgPSAoKSA9PiB7XG4gICAgLy8gbG9vcCB0aHJvdWdoIHNsaWRlcnMgYW5kIGFkZCBJRCdzIHRvIGl0XG5cbiAgICBjb25zdCBzaW1wbGVTbGlkZXJPcHRpb25zID0gW107XG4gICAgY29uc3Qgc2ltcGxlU2xpZGVyc0xpc3QgPSBbXTtcbiAgICBjb25zdCBzaW1wbGVPYnNlcnZlciA9IFtdO1xuXG4gICAgc2ltcGxlU2xpZGVyTGlzdC5mb3JFYWNoKChzbGlkZXIsIGkpID0+IHtcbiAgICAgICAgc2ltcGxlU2xpZGVyT3B0aW9uc1tpXSA9IHt9O1xuICAgICAgICBjb25zdCBzbGlkZXJJRCA9IGAke3NpbXBsZU5hbWV9LSR7aX1gO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdpZCcsIHNsaWRlcklEKTtcblxuICAgICAgICBzaW1wbGVTbGlkZXJPcHRpb25zW2ldID0gaXNBdXRvUGxheU9uKHNsaWRlciwgc2ltcGxlU2xpZGVyT3B0aW9uc1tpXSk7XG4gICAgICAgIHNpbXBsZVNsaWRlck9wdGlvbnNbaV0gPSBpc0xhenlMb2FkT24oc2xpZGVyLCBzaW1wbGVTbGlkZXJPcHRpb25zW2ldKTtcbiAgICAgICAgc2ltcGxlU2xpZGVyT3B0aW9uc1tpXSA9IGlzQnJlYWtwb2ludHNPbihzbGlkZXIsIHNpbXBsZVNsaWRlck9wdGlvbnNbaV0pO1xuICAgICAgICBzaW1wbGVTbGlkZXJPcHRpb25zW2ldID0gaXNQYWdpbmF0aW9uT24oc2xpZGVyLCBzaW1wbGVTbGlkZXJPcHRpb25zW2ldKTtcbiAgICAgICAgc2ltcGxlU2xpZGVyT3B0aW9uc1tpXSA9IGlzTG9vcE9uKHNsaWRlciwgc2ltcGxlU2xpZGVyT3B0aW9uc1tpXSk7XG5cbiAgICAgICAgLy8gLm0tc2xpZGVyIHBhcmVudCBpcyBoYXJkY29kZWQgaW4gaXNOYXZpZ2F0aW9uT24gb3B0aW9uc1xuICAgICAgICBzaW1wbGVTbGlkZXJPcHRpb25zW2ldID0gaXNOYXZpZ2F0aW9uT24oc2xpZGVyLCBzaW1wbGVTbGlkZXJPcHRpb25zW2ldLCBzaW1wbGVOYW1lLCBpKTtcblxuICAgICAgICBzaW1wbGVTbGlkZXJzTGlzdFtpXSA9IG5ldyBTd2lwZXIoc2xpZGVyLCBzaW1wbGVTbGlkZXJPcHRpb25zW2ldKTtcblxuICAgICAgICBpZiAoc2xpZGVyLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyLWZpbHRlci10YWJzJykpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgICAgZmlsdGVyU2xpZGVycyhzbGlkZXIsIHNpbXBsZVNsaWRlcnNMaXN0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQXV0b3BsYXkgPSBzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1hdXRvcGxheScpO1xuICAgICAgICBjb25zdCBhdXRvcGxheU9ic2VydmUgPSB1X3BhcnNlQm9vbChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1hdXRvcGxheS1vYnNlcnZlcicpKTtcblxuICAgICAgICBpZiAoaXNBdXRvcGxheSAmJiBhdXRvcGxheU9ic2VydmUpIHtcbiAgICAgICAgICAgIHNpbXBsZVNsaWRlcnNMaXN0W2ldLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICAgIHNpbXBsZU9ic2VydmVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHNsaWRlcjogc2xpZGVySUQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNpbXBsZU9ic2VydmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXV0b3BsYXlPYnNlcnZlcihzaW1wbGVPYnNlcnZlciwgc2ltcGxlTmFtZSwgc2ltcGxlU2xpZGVyc0xpc3QpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGlmICghaXNIYXNoZWQpIHtcbiAgICAgICAgLy8gICAgIC8vYWxlcnQoXCJsb2NhdGlvbjogXCIgKyBkb2N1bWVudC5sb2NhdGlvbiArIFwiLFxuICAgICAgICAvLyAgICAgc3RhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXZlbnQuc3RhdGUpKTtcbiAgICAgICAgLy8gfVxuICAgIH0sIGZhbHNlKTtcblxufTtcblxuY29uc3QgZmlsdGVyU2xpZGVycyA9IChzZWxlY3Rvciwgc2xpZGVyKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IHNlbGVjdG9yLmNsb3Nlc3QoJy5tLXNsaWRlcicpO1xuICAgIGNvbnN0IHNsaWRlcyA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tLXNsaWRlcl9fc2xpZGUnKTtcbiAgICBjb25zdCBmaWx0ZXJDb250YWluZXIgPSBzbGlkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLXNsaWRlci1mbmF2Jyk7XG4gICAgaWYgKCFmaWx0ZXJDb250YWluZXIpIHJldHVybjtcbiAgICBjb25zdCBmaWx0ZXJJdGVtcyA9IGZpbHRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZmlsdGVyLWZuYXYtaXRlbSBhJyk7XG4gICAgY29uc3QgZmlsdGVyRHJvcGRvd24gPSBmaWx0ZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLXNsaWRlci1mbmF2LWRyb3Bkb3duJyk7XG4gICAgbGV0IGlzSGFzaGVkID0gZmFsc2U7XG4gICAgZmlsdGVySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkSXRlbSA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkSXRlbVBhcmVudCA9IGNsaWNrZWRJdGVtLmNsb3Nlc3QoJy5qcy1maWx0ZXItZm5hdi1pdGVtJyk7XG4gICAgICAgICAgICAvLyBjb25zdCBocmVmID0gY2xpY2tlZEl0ZW0uXG5cbiAgICAgICAgICAgIGlmIChjbGlja2VkSXRlbVBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWx0ZXJJdGVtcy5mb3JFYWNoKChjbGlja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xpY2tlZC5jbG9zZXN0KCcuanMtZmlsdGVyLWZuYXYtaXRlbScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjbGlja2VkSXRlbVBhcmVudC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEZpbHRlciA9IGV2LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1maWx0ZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRIcmVmID0gZXYuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZEhyZWYuaW5kZXhPZignIycpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxTcGxpdCA9IGNsaWNrZWRIcmVmLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SGFzaCA9IHVybFNwbGl0WzFdO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gbmV3SGFzaDtcbiAgICAgICAgICAgICAgICBpc0hhc2hlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRIcmVmLCAnIDUnKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzSGFzaGVkLCAnMScpO1xuICAgICAgICAgICAgZmlsdGVyU2xpZGVzKGNsaWNrZWRGaWx0ZXIpO1xuXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyU2xpZGVzID0gKGZpbHRlcikgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyU3RyaW5nID0gZmlsdGVyO1xuICAgICAgICBpZiAoZmlsdGVyU3RyaW5nID09PSAnYWxsJykgZmlsdGVyU3RyaW5nID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlc0NhdGVnb3JpZXMgPSBzbGlkZXNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3JpZXMnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGhhc0ZpbHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzbGlkZXNDYXRlZ29yaWVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc0NhdGVnb3JpZXNbal0uaW5kZXhPZihmaWx0ZXJTdHJpbmcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNGaWx0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhhc0ZpbHRlcikge1xuICAgICAgICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1zbGlkZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzbGlkZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbGlkZXNDYXRlZ29yaWVzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNsaWRlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcmllcycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlci51cGRhdGVTaXplKCk7XG4gICAgICAgIHNsaWRlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgICAgc2xpZGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgIHNsaWRlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIHNsaWRlci5zbGlkZVRvTG9vcCgwKTtcbiAgICAgICAgc2xpZGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG5cbiAgICB9O1xuICAgIC8vIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpXG4gICAgLy8ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhpc0hhc2hlZCwgJzAnKTtcbiAgICAvLyAgICAgaWYoaXNIYXNoZWQpIHtcbiAgICAvLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgICBpc0hhc2hlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlzSGFzaGVkLCAnMicpO1xuICAgIC8vXG4gICAgLy8gICAgIGFsZXJ0KFwibG9jYXRpb246IFwiICsgZG9jdW1lbnQubG9jYXRpb24gKyBcIiwgc3RhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXZlbnQuc3RhdGUpKTtcbiAgICAvLyB9O1xufTtcblxuZXhwb3J0IHtcbiAgICBzaW1wbGVTbGlkZXJzLFxufTtcbiIsImltcG9ydCB7IGlzQXV0b1BsYXlPbiB9IGZyb20gXCIuL3NsaWRlci1vcHRpb25zL2F1dG9wbGF5XCI7XG5pbXBvcnQgeyBpc0xhenlMb2FkT24gfSBmcm9tIFwiLi9zbGlkZXItb3B0aW9ucy9sYXp5XCI7XG5pbXBvcnQgU3dpcGVyV2l0aFRhYnMgZnJvbSBcIi4vc3dpcGVyLXdpdGgtdGFic1wiO1xuaW1wb3J0IHsgdV90aHJvdHRsZWQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGlzTmF2aWdhdGlvbk9uIH0gZnJvbSBcIi4vc2xpZGVyLW9wdGlvbnMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdV9wYXJzZUJvb2wgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdV90eXBlc1wiO1xuaW1wb3J0IHsgaXNMb29wT24gfSBmcm9tIFwiLi9zbGlkZXItb3B0aW9ucy9sb29wXCI7XG5cbmNsYXNzIERTTVBTbGlkZXJEU0JMUyB7XG4gICAgY29uc3RydWN0b3Ioc2xpZGVySUQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zRGVza3RvcCA9IHt9O1xuICAgICAgICB0aGlzLm9wdGlvbnNNb2JpbGUgPSB7XG4gICAgICAgICAgICBzbGlkZUNsYXNzOiAnanMtZHNibHMtbmF2LWl0ZW0nLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGVsOiAnLmwtc2xpZGVyLW5hdl9fcGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zTmF2ID0ge1xuICAgICAgICAgICAgaXRlbTogJy5qcy1kc2Jscy1uYXYtaXRlbScsXG4gICAgICAgICAgICBhY3RpdmU6ICdpcy1hY3RpdmUnLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ21vdXNlb3ZlcicsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zbGlkZXJObyA9IHNsaWRlcklELnJlcGxhY2UoJ2pzLXNsaWRlci1kc2Jscy0nLCAnJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyTmFtZSA9IHNsaWRlcklEO1xuICAgICAgICB0aGlzLnNsaWRlck1vYmlsZU5hbWUgPSBzbGlkZXJJRC5yZXBsYWNlKCdqcy1zbGlkZXItZHNibHMtJywgJ2pzLXNsaWRlci1kc2Jscy1tLScpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyU2VsID0gYCMkeyB0aGlzLnNsaWRlck5hbWUgfWA7XG4gICAgICAgIHRoaXMuc2xpZGVyTW9iaWxlU2VsID0gYCMkeyB0aGlzLnNsaWRlck1vYmlsZU5hbWUgfWA7XG4gICAgICAgIHRoaXMub3B0aW9uc05hdi5lbGVtZW50ID0gdGhpcy5zbGlkZXJNb2JpbGVTZWw7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNsaWRlclNlbCk7XG4gICAgICAgIHRoaXMuc2xpZGVyTW9iaWxlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zbGlkZXJNb2JpbGVTZWwpO1xuXG4gICAgICAgIHRoaXMuc2hvd01vYmlsZSA9IHVfcGFyc2VCb29sKHRoaXMuc2xpZGVyRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWlzLW1vYmlsZScpKTtcbiAgICAgICAgdGhpcy5vcHRpb25zTmF2LnRyaWdnZXIgPSB0aGlzLnNsaWRlckVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci10cmlnZ2VyJykgfHwgJ21vdXNlb3Zlcic7XG5cbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRGVza3RvcCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZGVza3RvcEluc3RhbmNlO1xuICAgICAgICB0aGlzLm1vYmlsZUluc3RhbmNlO1xuICAgICAgICB0aGlzLmRlc2t0b3BUYWJzO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGN1cnJlbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBsZXQgYnJlYWtwb2ludCA9IDExMTI7XG5cbiAgICAgICAgY3VycmVudFdpZHRoIDwgYnJlYWtwb2ludCA/IHNlbGYuaXNNb2JpbGUgPSB0cnVlIDogc2VsZi5pc0Rlc2t0b3AgPSB0cnVlO1xuXG4gICAgICAgIHNlbGYucGFyc2VPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUgJiYgc2VsZi5zaG93TW9iaWxlKSBzZWxmLmNyZWF0ZU1vYmlsZSgpO1xuICAgICAgICBpZiAoc2VsZi5pc0Rlc2t0b3ApIHNlbGYuY3JlYXRlRGVza3RvcCgpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnRocm90dGxlUmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYudGhyb3R0bGVSZXNpemUgPSB1X3Rocm90dGxlZCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnJlc2l6ZVNsaWRlcigpO1xuICAgICAgICB9LCAzNTApO1xuICAgIH1cblxuICAgIHBhcnNlT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlICYmIHNlbGYuc2hvd01vYmlsZSkge1xuICAgICAgICAgICAgbGV0IGJhc2VuYW1lID0gc2VsZi5zbGlkZXJNb2JpbGVOYW1lO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zTW9iaWxlID0gaXNMb29wT24oc2VsZi5zbGlkZXJNb2JpbGVFbGVtLCBzZWxmLm9wdGlvbnNNb2JpbGUpO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zTW9iaWxlID0gaXNBdXRvUGxheU9uKHNlbGYuc2xpZGVyTW9iaWxlRWxlbSwgc2VsZi5vcHRpb25zTW9iaWxlKTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9uc01vYmlsZSA9IGlzTGF6eUxvYWRPbihzZWxmLnNsaWRlck1vYmlsZUVsZW0sIHNlbGYub3B0aW9uc01vYmlsZSk7XG5cbiAgICAgICAgICAgIC8vIC5tLXNsaWRlciBwYXJlbnQgaXMgaGFyZGNvZGVkIGluIGlzTmF2aWdhdGlvbk9uIG9wdGlvbnNcbiAgICAgICAgICAgIHNlbGYub3B0aW9uc01vYmlsZSA9IGlzTmF2aWdhdGlvbk9uKHNlbGYuc2xpZGVyTW9iaWxlRWxlbSwgc2VsZi5vcHRpb25zTW9iaWxlLCBiYXNlbmFtZSwgc2VsZi5zbGlkZXJObyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5pc0Rlc2t0b3ApIHtcbiAgICAgICAgICAgIGxldCBiYXNlbmFtZSA9IHNlbGYuc2xpZGVyTmFtZTtcbiAgICAgICAgICAgIHNlbGYub3B0aW9uc0Rlc2t0b3AgPSBpc0xvb3BPbihzZWxmLnNsaWRlckVsZW0sIHNlbGYub3B0aW9uc0Rlc2t0b3ApO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zRGVza3RvcCA9IGlzQXV0b1BsYXlPbihzZWxmLnNsaWRlckVsZW0sIHNlbGYub3B0aW9uc0Rlc2t0b3ApO1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zRGVza3RvcCA9IGlzTGF6eUxvYWRPbihzZWxmLnNsaWRlckVsZW0sIHNlbGYub3B0aW9uc0Rlc2t0b3ApO1xuXG4gICAgICAgICAgICAvLyAubS1zbGlkZXIgcGFyZW50IGlzIGhhcmRjb2RlZCBpbiBpc05hdmlnYXRpb25PbiBvcHRpb25zXG4gICAgICAgICAgICBzZWxmLm9wdGlvbnNEZXNrdG9wID0gaXNOYXZpZ2F0aW9uT24oc2VsZi5zbGlkZXJFbGVtLCBzZWxmLm9wdGlvbnNEZXNrdG9wLCBiYXNlbmFtZSwgc2VsZi5zbGlkZXJObyk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZURlc2t0b3AoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5kZXNrdG9wSW5zdGFuY2UgPSBuZXcgU3dpcGVyKHNlbGYuc2xpZGVyU2VsLCBzZWxmLm9wdGlvbnNEZXNrdG9wKTtcbiAgICAgICAgaWYgKHNlbGYuZGVza3RvcEluc3RhbmNlLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBzZWxmLmRlc2t0b3BUYWJzID0gbmV3IFN3aXBlcldpdGhUYWJzKHNlbGYuZGVza3RvcEluc3RhbmNlLCBzZWxmLm9wdGlvbnNOYXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlTW9iaWxlKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYubW9iaWxlSW5zdGFuY2UgPSBuZXcgU3dpcGVyKHNlbGYuc2xpZGVyTW9iaWxlU2VsLCBzZWxmLm9wdGlvbnNNb2JpbGUpO1xuICAgIH1cblxuICAgIHJlc2l6ZVNsaWRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgbGV0IGJyZWFrcG9pbnQgPSAxMTEyO1xuICAgICAgICBpZiAobmV3V2lkdGggPCBicmVha3BvaW50KSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuZGVza3RvcEluc3RhbmNlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVza3RvcFRhYnMudW5iaW5kVGFicygpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRlc2t0b3BJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVza3RvcEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNob3dNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jcmVhdGVNb2JpbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5pc0Rlc2t0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5pc0Rlc2t0b3ApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYubW9iaWxlSW5zdGFuY2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5jcmVhdGVEZXNrdG9wKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNEZXNrdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRFNNUFNsaWRlckRTQkxTO1xuIiwiLyoqXG4gKiBBdXRvUGxheSBTbGlkZXIgT3B0aW9uc1xuICovXG5cbmNvbnN0IGlzQXV0b1BsYXlPbiA9IChlbGVtLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFlbGVtKSByZXR1cm4gb3B0aW9ucztcblxuICAgIGNvbnN0IGlzQXV0b3BsYXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItYXV0b3BsYXknKTtcbiAgICBjb25zdCBpc0F1dG9wbGF5RGVsYXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItYXV0b3BsYXktZGVsYXknKTtcblxuICAgIGlmIChpc0F1dG9wbGF5ID09PSAndHJ1ZScpIHtcbiAgICAgICAgb3B0aW9ucy5hdXRvcGxheSA9IHt9O1xuICAgICAgICBvcHRpb25zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuYXV0b3BsYXkuZGVsYXkgPSBpc0F1dG9wbGF5RGVsYXkgPyBwYXJzZUludChpc0F1dG9wbGF5RGVsYXksIDEwKSA6IDMwMDA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTcGVlZE9uID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWF1dG9wbGF5LXNwZWVkJyk7XG5cbiAgICBpZiAoaXNTcGVlZE9uKSB7XG4gICAgICAgIG9wdGlvbnMuc3BlZWQgPSBwYXJzZUludChpc1NwZWVkT24sIDEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmV4cG9ydCB7XG4gICAgaXNBdXRvUGxheU9uLFxufTtcbiIsIi8qKlxuICogQXV0b3BsYXkgb25seSB3aGVuIGluIHZpZXdwb3J0XG4gKi9cblxuY29uc3QgYXV0b3BsYXlPYnNlcnZlciA9IChpdGVtcywgbmFtZSwgc2xpZGVycykgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc0luZGV4ID0gcGFyc2VJbnQoZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKS5yZXBsYWNlKGAke25hbWV9LWAsICcnKSwgMTApO1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgICAgICAgIHNsaWRlcnNbc0luZGV4XS5hdXRvcGxheS5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzbGlkZXJzW3NJbmRleF0uYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChvYnNlcnZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke29ic2VydmUuc2xpZGVyfWApO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQge1xuICAgIGF1dG9wbGF5T2JzZXJ2ZXIsXG59O1xuIiwiLyoqXG4gKiBCcmVhayBQb2ludHMgT3B0aW9uc1xuICovXG5cbmNvbnN0IGlzQnJlYWtwb2ludHNPbiA9IChlbGVtLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFlbGVtKSByZXR1cm4gb3B0aW9ucztcblxuICAgIGNvbnN0IG5vQ29sdW1ucyA9IHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1jb2x1bW5zJyksIDEwKTtcbiAgICBjb25zdCBjb2x1bW5zR2FwID0gcGFyc2VJbnQoZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLWNvbHVtbnMtZ2FwJyksIDEwKSB8fCAzMDtcblxuICAgIGlmIChub0NvbHVtbnMpIHtcbiAgICAgICAgb3B0aW9ucy5zbGlkZXNQZXJWaWV3ID0gbm9Db2x1bW5zO1xuICAgICAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0ge1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogbm9Db2x1bW5zID4gMyA/IDEgOiAxLFxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICA1NzY6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBub0NvbHVtbnMgPiAzID8gMiA6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBub0NvbHVtbnMsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiBjb2x1bW5zR2FwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmV4cG9ydCB7XG4gICAgaXNCcmVha3BvaW50c09uLFxufTtcbiIsImNvbnN0IGlzRWZmZWN0T24gPSAoZWxlbSwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghZWxlbSkgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICBjb25zdCBpc0VmZmVjdCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1lZmZlY3QtdHJhbnNpdGlvbicpO1xuXG4gICAgb3B0aW9ucy5lZmZlY3QgPSB7fTtcbiAgICBzd2l0Y2ggKGlzRWZmZWN0KSB7XG5cbiAgICAgICAgY2FzZSAnZmFkZSc6XG4gICAgICAgICAgICBvcHRpb25zLmVmZmVjdCA9ICdmYWRlJztcbiAgICAgICAgICAgIG9wdGlvbnMuZmFkZUVmZmVjdCA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5mYWRlRWZmZWN0LmNyb3NzRmFkZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3ViZSc6XG4gICAgICAgICAgICBvcHRpb25zLmVmZmVjdCA9ICdjdWJlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb3ZlcmZsb3cnOlxuICAgICAgICAgICAgb3B0aW9ucy5lZmZlY3QgPSAnY292ZXJmbG93JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYXJkcyc6XG4gICAgICAgICAgICBvcHRpb25zLmVmZmVjdCA9ICdjYXJkcyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmxpcCc6XG4gICAgICAgICAgICBvcHRpb25zLmVmZmVjdCA9ICdmbGlwJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufTtcblxuZXhwb3J0IHtcbiAgICBpc0VmZmVjdE9uLFxufTtcbiIsIi8qKlxuICogTGF6eSBMb2FkIFNsaWRlciBPcHRpb25zXG4gKlxuICogVE9ETzogbWlzc2luZyBvcHRpb24gZm9yIGRhdGEgb3B0aW9uLCBjcmVhdGUgcHJlbG9hZGVyIGRpdiB2aWEganMsIGFuZCBjaGFuZ2UgaW1hZ2Ugc3JjIHRvIGRhdGEtc3JjLCByaWdodCBub3cgYWxsIHRoaXMgZG9uZSBtYW51YWxseVxuICovXG5cbmNvbnN0IGlzTGF6eUxvYWRPbiA9IChlbGVtLCBvcHRpb25zKSA9PiB7XG4gICAgaWYoIWVsZW0pIHJldHVybiBvcHRpb25zO1xuXG4gICAgLy9sZXQgaXNMYXp5TG9hZCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1sYXp5Jyk7XG5cbiAgICBvcHRpb25zLnByZWxvYWRJbWFnZXMgPSBmYWxzZTtcbiAgICBvcHRpb25zLmxhenkgPSB7fTtcbiAgICBvcHRpb25zLmxhenkubG9hZFByZXZOZXh0ID0gdHJ1ZTtcbiAgICBvcHRpb25zLmxvYWRPblRyYW5zaXRpb25TdGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuZXhwb3J0IHtcbiAgICBpc0xhenlMb2FkT25cbn0iLCIvKipcbiAqIExvb3AgU2xpZGVyIE9wdGlvbnNcbiAqL1xuXG5jb25zdCBpc0xvb3BPbiA9IChlbGVtLCBvcHRpb25zKSA9PiB7XG4gICAgaWYoIWVsZW0pIHJldHVybiBvcHRpb25zO1xuXG4gICAgbGV0IGlzTG9vcCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1sb29wJyk7XG5cbiAgICBpZihpc0xvb3AgPT09ICd0cnVlJyl7XG4gICAgICAgIG9wdGlvbnMubG9vcCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cblxuZXhwb3J0IHtcbiAgICBpc0xvb3BPblxufSIsIi8qKlxuICogTmF2aWdhdGlvbiBTbGlkZXIgT3B0aW9uc1xuICovXG5cbmNvbnN0IGlzTmF2aWdhdGlvbk9uID0gKGVsZW0sIG9wdGlvbnMsIGJhc2VuYW1lLCBjdXJyZW50SUQpID0+IHtcbiAgICBsZXQgbmV4dEVsID0gJy5zd2lwZXItYnV0dG9uLW5leHQnO1xuICAgIGxldCBwcmV2RWwgPSAnLnN3aXBlci1idXR0b24tcHJldic7XG4gICAgbGV0IG5leHRJRCwgcHJldklELCBzbGlkZXJOZXh0LCBzbGlkZXJQcmV2O1xuICAgIGlmKCFlbGVtKSByZXR1cm4gb3B0aW9ucztcblxuICAgIGxldCBpc05hdmlnYXRpb24gPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItbmF2aWdhdGlvbicpO1xuXG4gICAgaWYoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICAgIG9wdGlvbnMubmF2aWdhdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmKGJhc2VuYW1lICYmICh0eXBlb2YgY3VycmVudElEICE9PSBcInVuZGVmaW5lZFwiKSkge1xuICAgICAgICAgICAgbmV4dElEID0gYCR7YmFzZW5hbWV9LW5leHQtJHtjdXJyZW50SUR9YDtcbiAgICAgICAgICAgIHByZXZJRCA9IGAke2Jhc2VuYW1lfS1wcmV2LSR7Y3VycmVudElEfWA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2xpZGVyUGFyZW50ID0gZWxlbS5jbG9zZXN0KCcubS1zbGlkZXInKTtcbiAgICAgICAgaWYoc2xpZGVyUGFyZW50KSB7XG4gICAgICAgICAgICBzbGlkZXJOZXh0ID0gc2xpZGVyUGFyZW50LnF1ZXJ5U2VsZWN0b3IobmV4dEVsKTtcbiAgICAgICAgICAgIHNsaWRlclByZXYgPSBzbGlkZXJQYXJlbnQucXVlcnlTZWxlY3RvcihwcmV2RWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHNsaWRlck5leHQgJiYgbmV4dElEKSB7XG4gICAgICAgICAgICBzbGlkZXJOZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCBuZXh0SUQpO1xuICAgICAgICAgICAgb3B0aW9ucy5uYXZpZ2F0aW9uLm5leHRFbCA9IGAjJHtuZXh0SUR9YDtcbiAgICAgICAgfVxuICAgICAgICBpZihzbGlkZXJQcmV2ICYmIHByZXZJRCkge1xuICAgICAgICAgICAgc2xpZGVyUHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJldklEKTtcbiAgICAgICAgICAgIG9wdGlvbnMubmF2aWdhdGlvbi5wcmV2RWwgPSBgIyR7cHJldklEfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMubmF2aWdhdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG5cblxuZXhwb3J0IHtcbiAgICBpc05hdmlnYXRpb25PblxufSIsIi8qKlxuICogUGFnaW5hdGlvbiBTbGlkZXIgT3B0aW9uc1xuICovXG5pbXBvcnQgeyB1X3BhcnNlQm9vbCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3VfdHlwZXMnO1xuXG5jb25zdCBpc1BhZ2luYXRpb25PbiA9IChlbGVtLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFlbGVtKSByZXR1cm4gb3B0aW9ucztcblxuICAgIGNvbnN0IGlzUGFnaW5hdGlvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wYWdpbmF0aW9uJyk7XG5cbiAgICBpZiAoaXNQYWdpbmF0aW9uKSB7XG4gICAgICAgIG9wdGlvbnMucGFnaW5hdGlvbiA9IHt9O1xuICAgICAgICBvcHRpb25zLnBhZ2luYXRpb24uZWwgPSAnLm0tc2xpZGVyX19wYWdpbmF0aW9uJztcblxuICAgICAgICBsZXQgbGVhZGluZ1plcm8gPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNQYWdpbmF0aW9uID09PSAnY29tYm8nIHx8IGlzUGFnaW5hdGlvbiA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICAgICAgbGVhZGluZ1plcm8gPSB1X3BhcnNlQm9vbChlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItbGVhZGluZy16ZXJvJykpIHx8IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChpc1BhZ2luYXRpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAncHJvZ3Jlc3NiYXInOlxuICAgICAgICAgICAgICAgIG9wdGlvbnMucGFnaW5hdGlvbi50eXBlID0gJ3Byb2dyZXNzYmFyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZyYWN0aW9uJzpcbiAgICAgICAgICAgICAgICBvcHRpb25zLnBhZ2luYXRpb24udHlwZSA9ICdmcmFjdGlvbic7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uLmZvcm1hdEZyYWN0aW9uQ3VycmVudCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlYWRpbmdaZXJvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG51bWJlciA8IDEwKSA/IGAwJHtudW1iZXJ9YCA6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uLmZvcm1hdEZyYWN0aW9uVG90YWwgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWFkaW5nWmVybykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgPCAxMCkgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tYm8nOlxuICAgICAgICAgICAgICAgIG9wdGlvbnMucGFnaW5hdGlvbi50eXBlID0gJ2N1c3RvbSc7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wYWdpbmF0aW9uLnJlbmRlckN1c3RvbSA9IGZ1bmN0aW9uIChzd2lwZXIsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbEZvcm1hdGVkID0gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Rm9ybWF0ZWQgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBwYXJzZUZsb2F0KGN1cnJlbnQgLyB0b3RhbCkudG9GaXhlZCg1KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobGVhZGluZ1plcm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsRm9ybWF0ZWQgPSB0b3RhbCA8IDEwID8gYDAke3RvdGFsfWAgOiB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGb3JtYXRlZCA9IGN1cnJlbnQgPCAxMCA/IGAwJHtjdXJyZW50fWAgOiBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbFwiIHN0eWxlPVwiLS1kYXRhLWN1cnJlbnQ6ICR7Y3VycmVudH0gOyAtLWRhdGEtdG90YWw6ICR7dG90YWx9OyAtLWRhdGEtcHJvZ3Jlc3M6ICR7cHJvZ3Jlc3N9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnRcIj4ke2N1cnJlbnRGb3JtYXRlZH08L3NwYW4+L1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2lwZXItcGFnaW5hdGlvbi10b3RhbFwiPiR7dG90YWxGb3JtYXRlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBvcHRpb25zLnBhZ2luYXRpb24uY2xpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzUGFnaW5hdGlvbiA9PT0gJ2NvbWJvJykge1xuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGVsZW0ucXVlcnlTZWxlY3RvcignLm0tc2xpZGVyX19wYWdpbmF0aW9uJyk7XG4gICAgICAgICAgICBpZiAocGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgnaGFzLWNvbWJvLXByb2dyZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufTtcblxuZXhwb3J0IHtcbiAgICBpc1BhZ2luYXRpb25Pbixcbn07XG4iLCJpbXBvcnQgeyB1X2V4dGVuZE9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3Vfb2JqZWN0X2V4dGVuZCc7XG5pbXBvcnQgeyB1X3BhcnNlQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzL3VfdHlwZXMnO1xuaW1wb3J0IHsgdV90aHJvdHRsZWQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmNsYXNzIFN3aXBlcldpdGhDaXJjdWxhclRhYnMge1xuXG4gICAgY29uc3RydWN0b3Ioc3dpcGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBlbGVtZW50OiAnLmwtbmF2JyxcbiAgICAgICAgICAgIGl0ZW06ICcuYy1uYXZfX2l0ZW0nLFxuICAgICAgICAgICAgY2lyY2xlOiAnLmMtc2xpZGVyLW5hdicsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2lzLWFjdGl2ZScsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdpcy1yaWdodCcsXG4gICAgICAgICAgICAgICAgbGVmdDogJ2lzLWxlZnQnLFxuICAgICAgICAgICAgICAgIHRvcDogJ2lzLXRvcCcsXG4gICAgICAgICAgICAgICAgbWlkZGxlOiAnaXMtbWlkZGxlJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICdpcy1ib3R0b20nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsIC8vIGZhbHNlOiBjbG9ja3dpc2UsIHRydWU6IGFudGljbG9ja3dpc2VcbiAgICAgICAgICAgIHBvc2l0aW9uOiAyLCAvLyBwb3NpdGlvbiBvZiBzdGFydCBpdGVtLCB0b3A6IDEsIHJpZ2h0OiAyLCBib3R0b206IDMsIGxlZnQ6IDRcbiAgICAgICAgICAgIGFycmFuZ2U6IDAsIC8vIGFycmFuZ2UgMCA9IGZ1bGwgY2lyY2xlLCBhbnkgb3RoZXIgbnVtYmVyIG1lYW5zIGFuZ2xlXG4gICAgICAgICAgICBhcnJhbmdlQ2VudGVyZWQ6IHRydWUsIC8vIGZvcmNlIGNlbnRlcmVkIGV2ZW4gaWYgdW5ldmVuIG5vIG9mIGl0ZW1zXG4gICAgICAgICAgICBpdGVtQWxpZ246ICdjZW50ZXInLCAvLyBjZW50ZXIsIGluc2lkZSwgb3V0c2lkZVxuICAgICAgICAgICAgaXRlbUFuZ2xlOiAwLFxuICAgICAgICAgICAgcm90YXRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG9mZnNldDogMCwgLy8gbWF4IDkwLCBtaW4gLTkwXG4gICAgICAgICAgICBzeW1tZXRyaWM6IGZhbHNlLFxuICAgICAgICAgICAgc3ltbWV0cmljT3JkZXI6ICdjb2x1bW5zJywgLy8gY29sdW1ucyBvciByb3dzXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYXJyYW5nZTogJ2RhdGEtc2xpZGVyLWNpcmN1bGFyLWFycmFuZ2UnLFxuICAgICAgICAgICAgICAgIGFycmFuZ2VDZW50ZXJlZDogJ2RhdGEtc2xpZGVyLWNpcmN1bGFyLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2RhdGEtc2xpZGVyLWNpcmN1bGFyLXBvc2l0aW9uJyxcbiAgICAgICAgICAgICAgICBpdGVtQW5nbGU6ICdkYXRhLXNsaWRlci1jaXJjdWxhci1hbmdsZScsXG4gICAgICAgICAgICAgICAgaXRlbUFsaWduOiAnZGF0YS1zbGlkZXItY2lyY3VsYXItYWxpZ24taXRlbXMnLCAvLyBwYXJzZWQgZnJvbSBiYWNrZW5kIGFsc29cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkYXRhLXNsaWRlci1jaXJjdWxhci1pdGVtLWRpcmVjdGlvbicsXG4gICAgICAgICAgICAgICAgcm90YXRlQWN0aXZlOiAnZGF0YS1zbGlkZXItY2lyY3VsYXItcm90YXRlLXRvLWFjdGl2ZScsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnZGF0YS1zbGlkZXItY2lyY3VsYXItb2Zmc2V0JyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnZGF0YS1zbGlkZXItY2lyY3VsYXItdHJpZ2dlcicsXG4gICAgICAgICAgICAgICAgc3ltbWV0cmljOiAnZGF0YS1zbGlkZXItY2lyY3VsYXItc3ltbWV0cmljJyxcbiAgICAgICAgICAgICAgICBzeW1tZXRyaWNPcmRlcjogJ2RhdGEtc2xpZGVyLWNpcmN1bGFyLW9yZGVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaWYgc3dpcGVyIGlzIG5vdCBpbml0aWFsaXplZCwgZW5kIHRoZSBzY3JpcHRcbiAgICAgICAgaWYgKCFzd2lwZXIuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZXIgbm90IGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXBlciA9IHN3aXBlcjtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IHVfZXh0ZW5kT2JqZWN0KHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBgJHt0aGlzLmNvbmZpZy5lbGVtZW50fSAke3RoaXMuY29uZmlnLml0ZW19YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNpcmNsZSA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcuY2lyY2xlKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5zaGlmdCA9IDA7XG4gICAgICAgIHRoaXMuc2hpZnRTeW1tZXRyaWMgPSAxODA7XG4gICAgICAgIHRoaXMubXVsdGlwbGllciA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXMgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5hcnJhbmdlU2hpZnQgPSAwO1xuICAgICAgICB0aGlzLmZ1bGwgPSAzNjA7XG4gICAgICAgIHRoaXMuYXJyYW5nZUluZGV4ID0gMDtcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIGNsaWNrIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCA9IHRoaXMudGFiQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuZ2V0Q29udGFpbmVyUmFkaXVzKCk7XG4gICAgICAgIHNlbGYuZ2V0SXRlbURpbWVuc2lvbnMoKTtcbiAgICAgICAgLy8gYWRkIGV2ZW50IHRoYXQgY2F0Y2hlcyBzbGlkZSBjaGFuZ2VzXG4gICAgICAgIHNlbGYuc3dpcGVyU2xpZGVDaGFuZ2UoKTtcbiAgICAgICAgLy8gYmluZCBldmVudHMgdGhhdCBjYXRjaGVzIHRhYnMgY2hhbmdlc1xuICAgICAgICBzZWxmLmJpbmRUYWJzKCk7XG5cbiAgICAgICAgc2VsZi51cGRhdGVJdGVtc1Bvc2l0aW9ucygpO1xuXG4gICAgICAgIHNlbGYuY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLW5hdml0ZW1zJywgc2VsZi5udW1iZXJPZkl0ZW1zKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdV90aHJvdHRsZWQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi51cGRhdGVJdGVtc1Bvc2l0aW9ucygpO1xuICAgICAgICB9KSwgMTUwKTtcbiAgICB9XG5cbiAgICBiaW5kVGFicygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBzZWxmLml0ZW1zO1xuXG4gICAgICAgIGVsZW0uZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihzZWxmLmNvbmZpZy50cmlnZ2VyLCBzZWxmLnRhYkNsaWNrZWQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuaXNUb3VjaCAmJiBzZWxmLmNvbmZpZy50cmlnZ2VyID09PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2VsZi50YWJDbGlja2VkLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuYmluZFRhYnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcblxuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLnJlbW92ZUV2ZW50TGlzdGVuZXIoc2VsZi5jb25maWcudHJpZ2dlciwgc2VsZi50YWJDbGlja2VkKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuaXNUb3VjaCAmJiBzZWxmLmNvbmZpZy50cmlnZ2VyID09PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgIHRhYi5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2VsZi50YWJDbGlja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFiQ2xpY2soZXYpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcbiAgICAgICAgXG4gICAgICAgIGxldCBjbGlja2VkVGFiO1xuICAgICAgICBlbGVtLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYWIgPT09IHRhYikge1xuICAgICAgICAgICAgICAgIGNsaWNrZWRUYWIgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50VGFiLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICBzZWxmLnN3aXBlci5zbGlkZVRvTG9vcChjbGlja2VkVGFiKTtcbiAgICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY0FJdGVtJywgY2xpY2tlZFRhYik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5yb3RhdGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlSXRlbXNQb3NpdGlvbnMoY2xpY2tlZFRhYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWJDaGFuZ2UoaW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBzZWxmLml0ZW1zO1xuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbGVtLmZvckVhY2goKHRhYiwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5jb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tY0FJdGVtJywgaW5kZXgpO1xuICAgIH1cblxuICAgIHN3aXBlclNsaWRlQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLnN3aXBlci5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBzZWxmLnN3aXBlci5yZWFsSW5kZXg7XG4gICAgICAgICAgICBzZWxmLnRhYkNoYW5nZShjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVJdGVtc1Bvc2l0aW9ucyhjdXJyZW50U2xpZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlSXRlbXNQb3NpdGlvbnMoaW5kZXgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gc2VsZi5pdGVtcztcbiAgICAgICAgbGV0IGluZDtcblxuICAgICAgICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5kID0gc2VsZi5hcnJhbmdlSW5kZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmQgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGFuZ2xlO1xuICAgICAgICBsZXQgcm90YXRlU2hpZnQgPSAwO1xuXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5yb3RhdGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHJvdGF0ZVNoaWZ0ID0gKGluZCAtIHNlbGYuYXJyYW5nZUluZGV4KSAqIHNlbGYuY29uZmlnLml0ZW1BbmdsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYXJyYW5nZVNoaWZ0LCBtdWx0aXBsaWVyLCBmdWxsIH0gPSBzZWxmO1xuXG4gICAgICAgIGNvbnN0IG9iakNsYXNzZXMgPSBPYmplY3QudmFsdWVzKHNlbGYuY29uZmlnLmNsYXNzZXMpO1xuXG4gICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0sIGkpID0+IHtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGk7XG4gICAgICAgICAgICBjb25zdCBkaXZpZGVyID0gTWF0aC5jZWlsKHNlbGYubnVtYmVyT2ZJdGVtcyAvIDIpO1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN5bW1ldHJpYykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zeW1tZXRyaWNPcmRlciA9PT0gJ3Jvd3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgJSAyID09PSAwID8gY3VycmVudEluZGV4ID0gaSAvIDIgOiBjdXJyZW50SW5kZXggPSAoaSAtIDEpIC8gMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3ltbWV0cmljT3JkZXIgPT09ICdjb2x1bW5zJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IGRpdmlkZXIgLSAxKSBjdXJyZW50SW5kZXggPSBpIC0gZGl2aWRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBhbmdsZSA9IGZ1bGwgKiAoY3VycmVudEluZGV4IC8gbXVsdGlwbGllcilcbiAgICAgICAgICAgICAgICAgICAgKyBzZWxmLnNoaWZ0IC0gYXJyYW5nZVNoaWZ0IC0gcm90YXRlU2hpZnQgLSBzZWxmLmNvbmZpZy5vZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlID0gLWZ1bGwgKiAoY3VycmVudEluZGV4IC8gbXVsdGlwbGllcilcbiAgICAgICAgICAgICAgICAgICAgKyBzZWxmLnNoaWZ0ICsgYXJyYW5nZVNoaWZ0ICsgcm90YXRlU2hpZnQgKyBzZWxmLmNvbmZpZy5vZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zeW1tZXRyaWMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3ltbWV0cmljT3JkZXIgPT09ICdyb3dzJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDEpIGFuZ2xlID0gc2VsZi5zaGlmdFN5bW1ldHJpYyAtIGFuZ2xlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3ltbWV0cmljT3JkZXIgPT09ICdjb2x1bW5zJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IGRpdmlkZXIgLSAxKSBhbmdsZSA9IHNlbGYuc2hpZnRTeW1tZXRyaWMgLSBhbmdsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvc2luZSA9IHBhcnNlRmxvYXQoTWF0aC5jb3MoYW5nbGUgKiAoTWF0aC5QSSAvIDE4MCkpLnRvRml4ZWQoNikpO1xuICAgICAgICAgICAgY29uc3Qgc2ludXMgPSBwYXJzZUZsb2F0KE1hdGguc2luKGFuZ2xlICogKE1hdGguUEkgLyAxODApKS50b0ZpeGVkKDYpKTtcblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBjb25zdCBpdGVtU2lkZVggPSBjb3NpbmUgPT09IDBcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmNsYXNzZXMubWlkZGxlXG4gICAgICAgICAgICAgICAgOiAoKGNvc2luZSA8IDApXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuY2xhc3Nlcy5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuY2xhc3Nlcy5yaWdodCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1TaWRlWSA9IHNpbnVzID09PSAwXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5jbGFzc2VzLm1pZGRsZVxuICAgICAgICAgICAgICAgIDogKHNpbnVzIDwgMFxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmNsYXNzZXMudG9wXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuY2xhc3Nlcy5ib3R0b20pO1xuXG4gICAgICAgICAgICBvYmpDbGFzc2VzLmZvckVhY2goKGNsYXNzSXRlbXMpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghKGNsYXNzSXRlbXMgPT09ICdpcy1hY3RpdmUnIHx8IGNsYXNzSXRlbXMgPT09IGl0ZW1TaWRlWSB8fCBjbGFzc0l0ZW1zID09PSBpdGVtU2lkZVgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc0l0ZW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2ludXMgPT09IDBcbiAgICAgICAgICAgICAgICA/IGVsZW0uY2xhc3NMaXN0LmFkZChpdGVtU2lkZVksIGl0ZW1TaWRlWClcbiAgICAgICAgICAgICAgICA6IGVsZW0uY2xhc3NMaXN0LmFkZChpdGVtU2lkZVgsIGl0ZW1TaWRlWSk7XG5cbiAgICAgICAgICAgIC8qIGNhbGN1bGF0ZSBhY3R1YWwgaGVpZ2h0IG9mIHJvdGF0ZWQgZWxlbWVudHMgKi9cbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5pdGVtQWxpZ24gIT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgckhlaWdodCA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhjb3NpbmUpICogaGVpZ2h0KSArIChNYXRoLmFicyhzaW51cykgKiB3aWR0aCksXG4gICAgICAgICAgICAgICAgKS50b0ZpeGVkKDYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJXaWR0aCA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhjb3NpbmUpICogd2lkdGgpICsgKE1hdGguYWJzKHNpbnVzKSAqIGhlaWdodCksXG4gICAgICAgICAgICAgICAgKS50b0ZpeGVkKDYpO1xuXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pdGVtUkgnLCBgJHtySGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pdGVtUlcnLCBgJHtyV2lkdGh9cHhgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1heicsIGAke2FuZ2xlfWRlZ2ApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJzZU9wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvKiBwYXJzZSBhcnJhbmdpbmcgb2YgaXRlbXMsIGNlbnRlciwgb3Igbm9uZSAqL1xuICAgICAgICBjb25zdCBhcnJhbmdlID0gc2VsZi5jb250YWluZXIuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmRhdGEuYXJyYW5nZSk7XG4gICAgICAgIC8qIHBhcnNlIHBvc2l0aW9uLCB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gKi9cbiAgICAgICAgc2VsZi5jb25maWcucG9zaXRpb24gPSBwYXJzZUludChzZWxmLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoc2VsZi5jb25maWcuZGF0YS5wb3NpdGlvbiksIDEwKTtcblxuICAgICAgICAvKiBwYXJzZSBhbmdsZSAqL1xuICAgICAgICBzZWxmLmNvbmZpZy5pdGVtQW5nbGUgPSBwYXJzZUludChcbiAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5kYXRhLml0ZW1BbmdsZSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgKSB8fCBzZWxmLmNvbmZpZy5pdGVtQW5nbGU7XG4gICAgICAgIC8qIHBhcnNlIGFsaWdubWVudCBvZiBpdGVtcyB0byBjaXJjbGUsIGluc2lkZSwgb3V0c2lkZSBvciBjZW50ZXIgKi9cbiAgICAgICAgc2VsZi5jb25maWcuaXRlbUFsaWduID0gc2VsZi5jb250YWluZXIuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmRhdGEuaXRlbUFsaWduKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcuaXRlbUFsaWduO1xuXG4gICAgICAgIHNlbGYuY29uZmlnLmRpcmVjdGlvbiA9IHVfcGFyc2VCb29sKHNlbGYuY29udGFpbmVyLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5kYXRhLmRpcmVjdGlvbikpXG4gICAgICAgICAgICB8fCBzZWxmLmNvbmZpZy5kaXJlY3Rpb247XG4gICAgICAgIC8qIHBhcnNlIGRpcmVjdGlvbiwgY2xvY2t3aXNlLCBhbnRpY2xvY2t3aXNlICovXG4gICAgICAgIHNlbGYuY29uZmlnLnJvdGF0ZUFjdGl2ZSA9IHVfcGFyc2VCb29sKFxuICAgICAgICAgICAgc2VsZi5jb250YWluZXIuZ2V0QXR0cmlidXRlKHNlbGYuY29uZmlnLmRhdGEucm90YXRlQWN0aXZlKSxcbiAgICAgICAgKSB8fCBzZWxmLmNvbmZpZy5yb3RhdGVBY3RpdmU7XG4gICAgICAgIC8qIHBhcnNlIG9mZnNldCwgaWYgeW91IHdhbnQgdG8gaGF2ZSBpdGVtcyBzdGFydFxuICAgICAgICBmcm9tIGRpZmZlcmVudCBhbmdsZSBmcm9tIHN0YXJ0aW5nIHBvc2l0aW9uICovXG4gICAgICAgIHNlbGYuY29uZmlnLm9mZnNldCA9IHBhcnNlSW50KHNlbGYuY29udGFpbmVyLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5kYXRhLm9mZnNldCksIDEwKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcub2Zmc2V0O1xuICAgICAgICAvKiB0cmlnZ2VyIG1ldGhvZCwgY2xpY2sgb3IgbW91c2VvdmVyICovXG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSBzZWxmLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoc2VsZi5jb25maWcuZGF0YS50cmlnZ2VyKVxuICAgICAgICAgICAgfHwgc2VsZi5jb25maWcudHJpZ2dlcjtcblxuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnRyaWdnZXIgPSAnbW91c2VvdmVyJztcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnJvdGF0ZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5wb3NpdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc2VsZi5zaGlmdCA9IC05MDtcbiAgICAgICAgICAgICAgICBzZWxmLnNoaWZ0U3ltbWV0cmljID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzZWxmLnNoaWZ0ID0gOTA7XG4gICAgICAgICAgICAgICAgc2VsZi5zaGlmdFN5bW1ldHJpYyA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgc2VsZi5zaGlmdCA9IDE4MDtcbiAgICAgICAgICAgICAgICBzZWxmLnNoaWZ0U3ltbWV0cmljID0gMTgwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzZWxmLnNoaWZ0ID0gMDtcbiAgICAgICAgICAgICAgICBzZWxmLnNoaWZ0U3ltbWV0cmljID0gMTgwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNTZW1pQ2lyY2xlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLml0ZW1BbmdsZVxuICAgICAgICAgICAgJiYgKHNlbGYuY29uZmlnLml0ZW1BbmdsZSAqIHNlbGYubnVtYmVyT2ZJdGVtcyA8PSBzZWxmLmZ1bGwpXG4gICAgICAgICAgICAmJiAoc2VsZi5jb25maWcuaXRlbUFuZ2xlID4gMTUpKSB7XG4gICAgICAgICAgICBzZWxmLmZ1bGwgPSBzZWxmLmNvbmZpZy5pdGVtQW5nbGU7XG4gICAgICAgICAgICBzZWxmLm11bHRpcGxpZXIgPSAxO1xuICAgICAgICAgICAgaXNTZW1pQ2lyY2xlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLml0ZW1BbmdsZSA9IChzZWxmLmZ1bGwgLyBzZWxmLm51bWJlck9mSXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFycmFuZ2UgPT09ICdjZW50ZXInICYmIGlzU2VtaUNpcmNsZSkge1xuICAgICAgICAgICAgLyogcGFyc2UgZm9yY2UgY2VudGVyZWQgKi9cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmFycmFuZ2VDZW50ZXJlZCA9IHVfcGFyc2VCb29sKFxuICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5kYXRhLmFycmFuZ2VDZW50ZXJlZCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLyogcGFyc2Ugc3ltbWV0cmljIG9wdGlvbnMgKi9cbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnN5bW1ldHJpYyA9IHVfcGFyc2VCb29sKFxuICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLmdldEF0dHJpYnV0ZShzZWxmLmNvbmZpZy5kYXRhLnN5bW1ldHJpYyksXG4gICAgICAgICAgICApIHx8IHNlbGYuY29uZmlnLnN5bW1ldHJpYztcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnN5bW1ldHJpY09yZGVyID0gc2VsZi5jb250YWluZXIuZ2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmRhdGEuc3ltbWV0cmljT3JkZXIsXG4gICAgICAgICAgICApIHx8IHNlbGYuY29uZmlnLnN5bW1ldHJpY09yZGVyO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3ltbWV0cmljKSBzZWxmLmNvbmZpZy5yb3RhdGVBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgZGl2aWRlciA9IHNlbGYuY29uZmlnLnN5bW1ldHJpYyA/IDQgOiAyO1xuICAgICAgICAgICAgc2VsZi5hcnJhbmdlSW5kZXggPSAoKHNlbGYubnVtYmVyT2ZJdGVtcyAtIDEpIC8gZGl2aWRlcik7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYXJyYW5nZUNlbnRlcmVkKSBzZWxmLmFycmFuZ2VJbmRleCA9IE1hdGguZmxvb3Ioc2VsZi5hcnJhbmdlSW5kZXgpO1xuICAgICAgICAgICAgc2VsZi5hcnJhbmdlU2hpZnQgPSBzZWxmLmFycmFuZ2VJbmRleCAqIHNlbGYuY29uZmlnLml0ZW1BbmdsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzZWxmLmNvbmZpZy5vZmZzZXQpID4gOTApIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm9mZnNldCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0Q29udGFpbmVyUmFkaXVzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgeyBjaXJjbGUgfSA9IHNlbGY7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1cmVyYWRpdXMgPSBlbnRyeS5jb250ZW50UmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gZW50cnkuYm9yZGVyQm94U2l6ZVswXS5pbmxpbmVTaXplIC8gMjtcblxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yJywgYCR7cHVyZXJhZGl1cy50b0ZpeGVkKCl9cHhgKTtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcmNsZWFuJywgYCR7cmFkaXVzLnRvRml4ZWQoKX1weGApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNpcmNsZSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbURpbWVuc2lvbnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtcyA9IHNlbGYuaXRlbXM7XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZW50cnkuY29udGVudFJlY3Q7XG5cbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJy0taXRlbUgnLCBgJHtoZWlnaHR9cHhgKTtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJy0taXRlbVcnLCBgJHt3aWR0aH1weGApO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlcldpdGhDaXJjdWxhclRhYnM7XG4iLCJpbXBvcnQgeyB1X2lzVG91Y2hEZXZpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdV9pcy10b3VjaC1kZXZpY2VcIjtcblxuY2xhc3MgU3dpcGVyV2l0aFRhYnMge1xuXG4gICAgY29uc3RydWN0b3Ioc3dpcGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBlbGVtZW50OiAnLmwtbmF2JyxcbiAgICAgICAgICAgIGl0ZW06ICcuYy1uYXZfX2l0ZW0nLFxuICAgICAgICAgICAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdjbGljaydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgLy8gdXRpbCBmdW5jdGlvbiB0byBjaGVjayBmb3IgdG91Y2ggZGV2aWNlXG4gICAgICAgIHRoaXMuaXNUb3VjaERldmljZSgpO1xuXG4gICAgICAgIC8vIGlmIHN3aXBlciBpcyBub3QgaW5pdGlhbGl6ZWQsIGVuZCB0aGUgc2NyaXB0XG4gICAgICAgIGlmKCFzd2lwZXIuaW5pdGlhbGl6ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZXIgbm90IGluaXRpYWxpemVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXBlciA9IHN3aXBlcjtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBgJHt0aGlzLmNvbmZpZy5lbGVtZW50fSAke3RoaXMuY29uZmlnLml0ZW19YDtcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIGNsaWNrIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCA9IHRoaXMudGFiQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gYWRkIGV2ZW50IHRoYXQgY2F0Y2hlcyBzbGlkZSBjaGFuZ2VzXG4gICAgICAgIHNlbGYuc3dpcGVyU2xpZGVDaGFuZ2UoKTtcbiAgICAgICAgLy8gYmluZCBldmVudHMgdGhhdCBjYXRjaGVzIHRhYnMgY2hhbmdlc1xuICAgICAgICBzZWxmLmJpbmRUYWJzKCk7XG4gICAgfVxuXG4gICAgYmluZFRhYnMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcblxuICAgICAgICBlbGVtLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoc2VsZi5jb25maWcudHJpZ2dlciwgc2VsZi50YWJDbGlja2VkLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICAgICAgICAgIGlmKHNlbGYuaXNUb3VjaCAmJiBzZWxmLmNvbmZpZy50cmlnZ2VyID09PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2VsZi50YWJDbGlja2VkLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdW5iaW5kVGFicygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBzZWxmLml0ZW1zO1xuXG4gICAgICAgIGVsZW0uZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICB0YWIucmVtb3ZlRXZlbnRMaXN0ZW5lcihzZWxmLmNvbmZpZy50cmlnZ2VyLCBzZWxmLnRhYkNsaWNrZWQpO1xuXG4gICAgICAgICAgICBpZihzZWxmLmlzVG91Y2ggJiYgc2VsZi5jb25maWcudHJpZ2dlciA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgICAgICB0YWIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNlbGYudGFiQ2xpY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGFiQ2xpY2soZXYpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBlbGVtID0gc2VsZi5pdGVtcztcblxuICAgICAgICBsZXQgY2xpY2tlZFRhYjtcbiAgICAgICAgZWxlbS5mb3JFYWNoKCh0YWIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFiID09PSB0YWIpIHtcbiAgICAgICAgICAgICAgICBjbGlja2VkVGFiID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuY29uZmlnLmFjdGl2ZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmFjdGl2ZSk7XG4gICAgICAgIHNlbGYuc3dpcGVyLnNsaWRlVG9Mb29wKGNsaWNrZWRUYWIpO1xuICAgIH1cblxuICAgIHRhYkNoYW5nZShpbmRleCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgZWxlbSA9IHNlbGYuaXRlbXM7XG4gICAgICAgIGVsZW0uZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5hY3RpdmUpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW0uZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgaXNUb3VjaERldmljZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZih1X2lzVG91Y2hEZXZpY2UoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZi5pc1RvdWNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXBlclNsaWRlQ2hhbmdlKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5zd2lwZXIub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gc2VsZi5zd2lwZXIucmVhbEluZGV4O1xuICAgICAgICAgICAgc2VsZi50YWJDaGFuZ2UoY3VycmVudFNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZXJXaXRoVGFicztcbiIsImltcG9ydCB7IHVfdGhyb3R0bGVkIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuLyoqXG4gKiBzdGFuZGFsb25lIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIHdoZXRoZXIgZGV2aWNlIGlzIHRvdWNoIG9yIG5vdFxuICogY2FsbCBpdCB3aXRoaW4gYW55dGhpbmcsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgdV9pc1RvdWNoRGV2aWNlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8XG4gICAgICAgICAgICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCkpKSB8fFxuICAgICAgICAhISh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cykpXG4gICAgKTtcbn1cblxuLyoqXG4gKiBmdW5jdGlvbiB0aGF0IGNhbGxzIGlzVG91Y2hEZXZpY2UgZnVuY3Rpb24sXG4gKi9cbmNvbnN0IGlzVG91Y2hIdG1sVXRpbCA9ICgpID0+IHtcbiAgICBsZXQgdG91Y2ggPSB1X2lzVG91Y2hEZXZpY2UoKTtcbiAgICBsZXQgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaHRtbCcgKVswXTtcblxuICAgIC8vIGlmIHRydWUsIGFkZCB0b3VjaC1kZXZpY2UgdG8gaHRtbCwgb3RoZXJ3aXNlIG5vLXRvdWNoLWRldmljZVxuICAgIGlmICh0b3VjaCkge1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXRvdWNoLWRldmljZScpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ3RvdWNoLWRldmljZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCd0b3VjaC1kZXZpY2UnKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCduby10b3VjaC1kZXZpY2UnKTtcbiAgICB9XG59XG5cbi8qKlxuICogZXhwb3J0ZWQgZnVuY3Rpb24gYWRkVG91Y2hUb0h0bWxVdGlsXG4gKiBpbXBvcnRlZCBpbnRvIGluZGV4LmpzIGFuZCBjYWxsZWQgd2hlbiBET01SZWFkeSxcbiAqIGNvbnRhaW5zICdyZXNpemUnIGV2ZW50IGxpc3RlbmVyIHRvIGNoZWNrIGZvclxuICogZGV2aWNlIG9yaWVudGF0aW9uLCBvciBjaGFuZ2VzXG4gKiBpcyB0aHJvdHRsZWQsIHRvIHByZXZlbnQgY29udGludW91c2x5IHRyaWdnZXJpbmdcbiAqIChtaW4gMzAwbXMgc28gY2hyb21lIGRldiB0b29sIGNhbiBjYXRjaCBpdClcbiAqL1xuY29uc3QgdV9hZGRUb3VjaFRvSHRtbCA9ICgpID0+IHtcbiAgICBpc1RvdWNoSHRtbFV0aWwoKTtcblxuICAgIC8vIHRocm90dGxlIHRoZSBmdW5jdGlvblxuICAgIGNvbnN0IHRocm90dGxlSXNUb3VjaCA9IHVfdGhyb3R0bGVkKCgpID0+IHtcbiAgICAgICAgaXNUb3VjaEh0bWxVdGlsKCk7XG4gICAgfSwgMzAwKTtcblxuICAgIC8vIGJpbmQgcmVzaXplIGV2ZW50XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgdGhyb3R0bGVJc1RvdWNoKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7XG4gICAgdV9pc1RvdWNoRGV2aWNlLFxuICAgIHVfYWRkVG91Y2hUb0h0bWxcbn07XG5cbiIsImNvbnN0IHVfZXh0ZW5kT2JqZWN0ID0gKGRlc3RpbmF0aW9uLCBzb3VyY2UpID0+IHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICB1X2V4dGVuZE9iamVjdChkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5jb25zdCB1X2V4dGVuZCA9IChkZWZhdWx0cywgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGV4dGVuZGVkT3B0aW9ucyA9IHt9O1xuICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICBleHRlbmRlZE9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSB8fCBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kZWRPcHRpb25zO1xufTtcblxuY29uc3QgdV9tZXJnZURlZXAgPSAodGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgICBjb25zdCBpc09iamVjdCA9IChvYmopID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSB8fCAhaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICAgICAgICBjb25zdCBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldFZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0YXJnZXRWYWx1ZS5jb25jYXQoc291cmNlVmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRhcmdldFZhbHVlKSAmJiBpc09iamVjdChzb3VyY2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdV9tZXJnZURlZXAoT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0VmFsdWUpLCBzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQge1xuICAgIHVfZXh0ZW5kLFxuICAgIHVfZXh0ZW5kT2JqZWN0LFxuICAgIHVfbWVyZ2VEZWVwXG59OyIsImNvbnN0IHVfaXNJbnRlZ2VyID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbiAgICB9XG59O1xuXG5jb25zdCB1X2lzT2JqZWN0ID0gKG8pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgbyAhPT0gbnVsbCAmJlxuICAgICAgICBvLmNvbnN0cnVjdG9yICYmXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnXG4gICAgKTtcbn1cblxuY29uc3QgdV9wYXJzZUJvb2wgPSAoc3RyKSA9PiAge1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBzdHIpO1xuICAgIC8vIHN0cmljdDogSlNPTi5wYXJzZShzdHIpXG5cbiAgICBpZihzdHIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiBzdHIgPT09ICdib29sZWFuJylcbiAgICB7XG4gICAgICAgIHJldHVybiAoc3RyID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBpZih0eXBlb2Ygc3RyID09PSAnc3RyaW5nJylcbiAgICB7XG4gICAgICAgIGlmKHN0ciA9PSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgICAgIGlmKHN0ci50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyB8fCBzdHIudG9Mb3dlckNhc2UoKSA9PSAneWVzJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sL2csICcuJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eXFxzKlxcLVxccyovZywgJy0nKTtcbiAgICB9XG5cbiAgICAvLyB2YXIgaXNOdW0gPSBzdHJpbmcubWF0Y2goL15bMC05XSskLykgIT0gbnVsbDtcbiAgICAvLyB2YXIgaXNOdW0gPSAvXlxcZCskLy50ZXN0KHN0cik7XG4gICAgaWYoIWlzTmFOKHN0cikpXG4gICAgICAgIHJldHVybiAocGFyc2VGbG9hdChzdHIpICE9IDApO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge1xuICAgIHVfaXNJbnRlZ2VyLFxuICAgIHVfaXNPYmplY3QsXG4gICAgdV9wYXJzZUJvb2xcbn0iLCJcbmNvbnN0IHVfZGVib3VuY2VkID0gKGZ1bmMsIGRlbGF5LCBpbW1lZGlhdGUpID0+IHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRGdW5jID0gZnVuYy5iaW5kKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIGlmIChpbW1lZGlhdGUgJiYgIXRpbWVySWQpIHtcbiAgICAgICAgICAgIGJvdW5kRnVuYygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbGxlZUZ1bmMgPSBpbW1lZGlhdGUgPyAoKSA9PiB7IHRpbWVySWQgPSBudWxsIH0gOiBib3VuZEZ1bmM7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGNhbGxlZUZ1bmMsIGRlbGF5KTtcbiAgICB9XG59XG5cbmNvbnN0IHVfdGhyb3R0bGVkID0gKGZ1bmMsIGRlbGF5LCBpbW1lZGlhdGUpID0+IHtcbiAgICBsZXQgdGltZXJJZDtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRGdW5jID0gZnVuYy5iaW5kKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAodGltZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbW1lZGlhdGUgJiYgIXRpbWVySWQpIHtcbiAgICAgICAgICAgIGJvdW5kRnVuYygpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgICAgICBib3VuZEZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVySWQgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHVfZGVib3VuY2VkLFxuICAgIHVfdGhyb3R0bGVkXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gKiBAdGl0bGUgU2xpZGVycyBTY3JpcHRzXG4gKiBAZGVzY3JpcHRpb24gQXBwbGljYXRpb24gZW50cnkgcG9pbnRcbiAqL1xuXG5pbXBvcnQgeyB1X2FkZFRvdWNoVG9IdG1sIH0gZnJvbSAnLi91dGlscy91X2lzLXRvdWNoLWRldmljZSc7XG5cbmltcG9ydCB7IGNhbGxTbGlkZXJzIH0gZnJvbSAnLi9mdW5jdGlvbi1jYWxscy9zbGlkZXJzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIHVfYWRkVG91Y2hUb0h0bWwoKTtcblxuICAgIGNhbGxTbGlkZXJzKCk7XG5cbn0pO1xuIl0sIm5hbWVzIjpbImRzYmxzU2xpZGVyIiwic2ltcGxlU2xpZGVycyIsImFkdmFuY2VkU2xpZGVycyIsImNpcmN1bGFyU2xpZGVycyIsImV4dGVuZGVkU2xpZGVycyIsImNhbGxTbGlkZXJzIiwiU3dpcGVyV2l0aFRhYnMiLCJpc0F1dG9QbGF5T24iLCJpc0xhenlMb2FkT24iLCJpc0JyZWFrcG9pbnRzT24iLCJpc05hdmlnYXRpb25PbiIsImlzTG9vcE9uIiwiaXNQYWdpbmF0aW9uT24iLCJ1X3BhcnNlQm9vbCIsImF1dG9wbGF5T2JzZXJ2ZXIiLCJpc0VmZmVjdE9uIiwiYWR2YW5jZWROYW1lIiwiYWR2U2xpZGVyU2VsIiwiYWR2U2xpZGVyVGFicyIsImFkdlNsaWRlckxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZHZTbGlkZXJPcHRpb25zIiwiYWR2U2xpZGVycyIsInNsaWRlclRhYk9wdGlvbnMiLCJhZHZTbGlkZXJOYXYiLCJzbGlkZXJOYXYiLCJhZHZTbGlkZXJUaHVtYnMiLCJzbGlkZXJUaHVtYk9wdGlvbnMiLCJhZHZhbmNlZE9ic2VydmVyIiwiZm9yRWFjaCIsInNsaWRlciIsImkiLCJ0cmlnZ2VyVHlwZSIsImdldEF0dHJpYnV0ZSIsIml0ZW0iLCJhY3RpdmUiLCJ0cmlnZ2VyIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsImZyZWVNb2RlIiwidGhyZXNob2xkIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIndyYXBwZXJDbGFzcyIsImlzVGh1bWJzIiwic2xpZGVySUQiLCJjb25jYXQiLCJzZXRBdHRyaWJ1dGUiLCJzbGlkZXJQYXJlbnQiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsInNsaWRlclRodW1ic1NlbGVjdG9yIiwic2xpZGVyVGh1bWJzSUQiLCJzbGlkZXJUYWJJRCIsImVsZW1lbnQiLCJpc1ZlcnRpY2FsIiwiZGlyZWN0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiU3dpcGVyIiwidGh1bWJzIiwic3dpcGVyIiwibm9Td2lwaW5nU2VsZWN0b3IiLCJpbml0aWFsaXplZCIsImlzQXV0b3BsYXkiLCJhdXRvcGxheU9ic2VydmUiLCJhdXRvcGxheSIsInN0b3AiLCJwdXNoIiwibGVuZ3RoIiwiU3dpcGVyV2l0aENpcmN1bGFyVGFicyIsImlzQ2VudGVyU2xpZGVzIiwiaXNTeW1tZXRyaWMiLCJjU2xpZGVyTmF2IiwiaW5pdGlhbEluZGV4IiwicGFyc2VJbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiaW5pdGlhbFNsaWRlIiwiRFNNUFNsaWRlckRTQkxTIiwiZHNibHNTZWwiLCJkc2Jsc1NlbE1vYiIsImRzYmxzU2xpZGVyTGlzdCIsImRzYmxzU2xpZGVyTW9iaWxlTGlzdCIsImRzYmxzIiwic2xpZGVyTW9iaWxlSUQiLCJhZHZTbGlkZXJDb250ZW50IiwiYWR2Q29udGVudE9wdGlvbnMiLCJhZHZTbGlkZXJzQ29udGVudCIsImFSZXEiLCJzbGlkZXJDb250ZW50Iiwic2xpZGVyQ29udGVudElEIiwic2xpZGVyQ29udGVudFNlbGVjdG9yIiwib24iLCJjb250cm9sbGVyIiwiY29udHJvbCIsInNsaWRlclByb2dyZXNzIiwicyIsImR1cmF0aW9uIiwicGFyYW1zIiwiZGVsYXkiLCJhbmltYXRlUHJvZ3Jlc3MiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImVsIiwic3RhcnQiLCJwcmV2aW91c1RpbWVTdGFtcCIsImRvbmUiLCJzdGVwIiwidGltZXN0YW1wIiwidW5kZWZpbmVkIiwiZWxhcHNlZCIsInByb2ciLCJNYXRoIiwibWluIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2ltcGxlTmFtZSIsInNpbXBsZVNsaWRlclNlbCIsInNpbXBsZVNsaWRlckxpc3QiLCJzaW1wbGVTbGlkZXJPcHRpb25zIiwic2ltcGxlU2xpZGVyc0xpc3QiLCJzaW1wbGVPYnNlcnZlciIsImNvbnRhaW5zIiwiZmlsdGVyU2xpZGVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNlbGVjdG9yIiwic2xpZGVyQ29udGFpbmVyIiwic2xpZGVzIiwiZmlsdGVyQ29udGFpbmVyIiwiZmlsdGVySXRlbXMiLCJmaWx0ZXJEcm9wZG93biIsImlzSGFzaGVkIiwiZXYiLCJjbGlja2VkSXRlbSIsImN1cnJlbnRUYXJnZXQiLCJjbGlja2VkSXRlbVBhcmVudCIsImNsaWNrZWQiLCJyZW1vdmUiLCJjbGlja2VkRmlsdGVyIiwiY2xpY2tlZEhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ1cmxTcGxpdCIsInNwbGl0IiwibmV3SGFzaCIsImxvY2F0aW9uIiwiaGFzaCIsImZpbHRlclNsaWRlcyIsImZpbHRlciIsImZpbHRlclN0cmluZyIsInNsaWRlc0NhdGVnb3JpZXMiLCJoYXNGaWx0ZXIiLCJqIiwiZGlzcGxheSIsInVwZGF0ZVNpemUiLCJ1cGRhdGVTbGlkZXMiLCJ1cGRhdGVQcm9ncmVzcyIsInVwZGF0ZVNsaWRlc0NsYXNzZXMiLCJzbGlkZVRvTG9vcCIsInNjcm9sbGJhciIsInVfdGhyb3R0bGVkIiwiX2NsYXNzQ2FsbENoZWNrIiwib3B0aW9uc0Rlc2t0b3AiLCJvcHRpb25zTW9iaWxlIiwic2xpZGVDbGFzcyIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJvcHRpb25zTmF2Iiwic2xpZGVyTm8iLCJyZXBsYWNlIiwic2xpZGVyTmFtZSIsInNsaWRlck1vYmlsZU5hbWUiLCJzbGlkZXJTZWwiLCJzbGlkZXJNb2JpbGVTZWwiLCJzbGlkZXJFbGVtIiwic2xpZGVyTW9iaWxlRWxlbSIsInNob3dNb2JpbGUiLCJpc01vYmlsZSIsImlzRGVza3RvcCIsImRlc2t0b3BJbnN0YW5jZSIsIm1vYmlsZUluc3RhbmNlIiwiZGVza3RvcFRhYnMiLCJpbml0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzZWxmIiwiY3VycmVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImJyZWFrcG9pbnQiLCJwYXJzZU9wdGlvbnMiLCJjcmVhdGVNb2JpbGUiLCJjcmVhdGVEZXNrdG9wIiwidGhyb3R0bGVSZXNpemUiLCJyZXNpemVTbGlkZXIiLCJiYXNlbmFtZSIsIm5ld1dpZHRoIiwidW5iaW5kVGFicyIsImRlc3Ryb3kiLCJlbGVtIiwib3B0aW9ucyIsImlzQXV0b3BsYXlEZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiaXNTcGVlZE9uIiwic3BlZWQiLCJpdGVtcyIsIm5hbWUiLCJzbGlkZXJzIiwib2JzZXJ2ZXJDYWxsYmFjayIsImVudHJpZXMiLCJlbnRyeSIsInNJbmRleCIsInRhcmdldCIsImludGVyc2VjdGlvblJhdGlvIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJub0NvbHVtbnMiLCJjb2x1bW5zR2FwIiwiYnJlYWtwb2ludHMiLCJpc0VmZmVjdCIsImVmZmVjdCIsImZhZGVFZmZlY3QiLCJjcm9zc0ZhZGUiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsImxvYWRQcmV2TmV4dCIsImxvYWRPblRyYW5zaXRpb25TdGFydCIsImlzTG9vcCIsImxvb3AiLCJjdXJyZW50SUQiLCJuZXh0RWwiLCJwcmV2RWwiLCJuZXh0SUQiLCJwcmV2SUQiLCJzbGlkZXJOZXh0Iiwic2xpZGVyUHJldiIsImlzTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJpc1BhZ2luYXRpb24iLCJsZWFkaW5nWmVybyIsInR5cGUiLCJmb3JtYXRGcmFjdGlvbkN1cnJlbnQiLCJudW1iZXIiLCJmb3JtYXRGcmFjdGlvblRvdGFsIiwicmVuZGVyQ3VzdG9tIiwiY3VycmVudCIsInRvdGFsIiwidG90YWxGb3JtYXRlZCIsImN1cnJlbnRGb3JtYXRlZCIsInByb2dyZXNzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ1X2V4dGVuZE9iamVjdCIsImRlZmF1bHRzIiwiY2lyY2xlIiwiY2xhc3NlcyIsInJpZ2h0IiwibGVmdCIsInRvcCIsIm1pZGRsZSIsImJvdHRvbSIsInBvc2l0aW9uIiwiYXJyYW5nZSIsImFycmFuZ2VDZW50ZXJlZCIsIml0ZW1BbGlnbiIsIml0ZW1BbmdsZSIsInJvdGF0ZUFjdGl2ZSIsIm9mZnNldCIsInN5bW1ldHJpYyIsInN5bW1ldHJpY09yZGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJjb250YWluZXIiLCJzaGlmdCIsInNoaWZ0U3ltbWV0cmljIiwibXVsdGlwbGllciIsIm51bWJlck9mSXRlbXMiLCJhcnJhbmdlU2hpZnQiLCJmdWxsIiwiYXJyYW5nZUluZGV4IiwidGFiQ2xpY2tlZCIsInRhYkNsaWNrIiwiYmluZCIsImdldENvbnRhaW5lclJhZGl1cyIsImdldEl0ZW1EaW1lbnNpb25zIiwic3dpcGVyU2xpZGVDaGFuZ2UiLCJiaW5kVGFicyIsInVwZGF0ZUl0ZW1zUG9zaXRpb25zIiwidGFiIiwicGFzc2l2ZSIsImlzVG91Y2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudFRhYiIsImNsaWNrZWRUYWIiLCJ0YWJDaGFuZ2UiLCJpbmRleCIsImN1cnJlbnRTbGlkZSIsInJlYWxJbmRleCIsImVsZW1zIiwiaW5kIiwiYW5nbGUiLCJyb3RhdGVTaGlmdCIsIm9iakNsYXNzZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50SW5kZXgiLCJkaXZpZGVyIiwiY2VpbCIsImNvc2luZSIsImNvcyIsIlBJIiwic2ludXMiLCJzaW4iLCJpdGVtU2lkZVgiLCJpdGVtU2lkZVkiLCJjbGFzc0l0ZW1zIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInJIZWlnaHQiLCJhYnMiLCJyV2lkdGgiLCJpc1NlbWlDaXJjbGUiLCJmbG9vciIsIlJlc2l6ZU9ic2VydmVyIiwicHVyZXJhZGl1cyIsImNvbnRlbnRSZWN0IiwicmFkaXVzIiwiYm9yZGVyQm94U2l6ZSIsImlubGluZVNpemUiLCJfZW50cnkkY29udGVudFJlY3QiLCJ1X2lzVG91Y2hEZXZpY2UiLCJpc1RvdWNoRGV2aWNlIiwiYXNzaWduIiwiRG9jdW1lbnRUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsImlzVG91Y2hIdG1sVXRpbCIsInRvdWNoIiwiaHRtbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidV9hZGRUb3VjaFRvSHRtbCIsInRocm90dGxlSXNUb3VjaCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsInVfZXh0ZW5kIiwiZXh0ZW5kZWRPcHRpb25zIiwidV9tZXJnZURlZXAiLCJpc09iamVjdCIsIm9iaiIsIl90eXBlb2YiLCJrZXlzIiwidGFyZ2V0VmFsdWUiLCJzb3VyY2VWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInVfaXNJbnRlZ2VyIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiaXNGaW5pdGUiLCJ1X2lzT2JqZWN0IiwibyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwic3RyIiwidG9Mb3dlckNhc2UiLCJpc05hTiIsInVfZGVib3VuY2VkIiwiZnVuYyIsImltbWVkaWF0ZSIsInRpbWVySWQiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIl9rZXkiLCJib3VuZEZ1bmMiLCJhcHBseSIsIl90aGlzIiwiY2xlYXJUaW1lb3V0IiwiY2FsbGVlRnVuYyIsInNldFRpbWVvdXQiLCJfbGVuMiIsIl9rZXkyIl0sInNvdXJjZVJvb3QiOiIifQ==