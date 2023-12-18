/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/function-calls/3d-media/image-spinner.js":
/*!*****************************************************************!*\
  !*** ./assets/_src/js/function-calls/3d-media/image-spinner.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callImageSpinners: function() { return /* binding */ callImageSpinners; }
/* harmony export */ });
/* harmony import */ var _library_3d_media_spinner_plugins_ctrl_playback_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/ctrl-playback-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-playback-plugin.js");
/* harmony import */ var _library_3d_media_spinner_plugins_ctrl_frames_nav_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/ctrl-frames-nav-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-frames-nav-plugin.js");
/* harmony import */ var _library_3d_media_spinner_plugins_ctrl_zoom_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/ctrl-zoom-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-zoom-plugin.js");
/* harmony import */ var _library_3d_media_spinner_plugins_ctrl_fullscreen_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/ctrl-fullscreen-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-fullscreen-plugin.js");
/* harmony import */ var _library_3d_media_spinner_plugins_progress_fraction_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/progress-fraction-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/progress-fraction-plugin.js");
/* harmony import */ var _library_3d_media_spinner_plugins_hotspots_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/hotspots-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/hotspots-plugin.js");
/* harmony import */ var _library_3d_media_spinner_plugins_ctrl_drag_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/3d-media/spinner-plugins/ctrl-drag-plugin */ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-drag-plugin.js");
/* harmony import */ var _library_3d_media_spinner_controls_playback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/playback */ "./assets/_src/js/library/3d-media/spinner-controls/playback.js");
/* harmony import */ var _library_3d_media_spinner_controls_frames_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/frames-nav */ "./assets/_src/js/library/3d-media/spinner-controls/frames-nav.js");
/* harmony import */ var _library_3d_media_spinner_controls_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/zoom */ "./assets/_src/js/library/3d-media/spinner-controls/zoom.js");
/* harmony import */ var _library_3d_media_spinner_controls_fullscreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/fullscreen */ "./assets/_src/js/library/3d-media/spinner-controls/fullscreen.js");
/* harmony import */ var _library_3d_media_spinner_controls_progress_fraction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/progress-fraction */ "./assets/_src/js/library/3d-media/spinner-controls/progress-fraction.js");
/* harmony import */ var _library_3d_media_spinner_controls_autoanimate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/autoanimate */ "./assets/_src/js/library/3d-media/spinner-controls/autoanimate.js");
/* harmony import */ var _library_3d_media_spinner_controls_hotspots_nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../library/3d-media/spinner-controls/hotspots-nav */ "./assets/_src/js/library/3d-media/spinner-controls/hotspots-nav.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Simple Image Spinner
 */















// config selectors
var spinnerElemName = 'js-image-spinner';
var spinnerModuleWrap = '.m-image-spinner';

// get all spinners
var spinnerModuleList = document.querySelectorAll(spinnerModuleWrap);
var callImageSpinners = function callImageSpinners() {
  if (!spinnerModuleList.length) {
    return;
  }
  var spinnerOptions = [];

  // loop through spinners and assign them IDs
  spinnerModuleList.forEach(function (spinnerModule, i) {
    var imgSpinnerElem = spinnerModule.querySelector('.js-image-spinner');
    var imgPath = spinnerModule.getAttribute('data-spinner-path');
    var imgPrefix = spinnerModule.getAttribute('data-spinner-prefix');
    var imgDigits = spinnerModule.getAttribute('data-spinner-digits');
    var imgCount = spinnerModule.getAttribute('data-spinner-count');
    var imgExt = spinnerModule.getAttribute('data-spinner-ext');
    if (!(imgPath || imgPrefix || imgDigits || imgCount || imgExt)) {
      return;
    }
    var spinnerID = "".concat(spinnerElemName, "-").concat(i);
    imgSpinnerElem.setAttribute('id', spinnerID);
    spinnerOptions[i] = {
      source: SpriteSpin.sourceArray(imgPath + '/' + imgPrefix + '{frame}.' + imgExt, {
        frame: [1, imgCount],
        digits: imgDigits
      }),
      // use double click to in/out (default is true)
      zoomUseClick: true,
      // prevents changing the frame during zoom (default is true)
      zoomPinFrame: false,
      sense: -1,
      responsive: true,
      animate: false,
      sizeMode: 'fit',
      renderer: 'canvas',
      preloadCount: 2,
      // animation speed
      frameTime: 120,
      playToFrameTime: 10,
      reverse: false,
      // Make sure to use the same value for forceReverse, in case it gets changed by 'nearest' frame hs option
      forceReverse: false,
      plugins: ['360' // display plugin
      //    'drag', // interaction plugin - optional per module settings
      // native zoom plugin is triggered via dsZoomControl
      //    'zoom',
      ]
    };

    // plugins
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_progress_fraction__WEBPACK_IMPORTED_MODULE_11__.isFractionOn)(spinnerModule, spinnerOptions[i]);
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_frames_nav__WEBPACK_IMPORTED_MODULE_8__.isFramesNavOn)(spinnerModule, spinnerOptions[i]);
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_zoom__WEBPACK_IMPORTED_MODULE_9__.isZoomOn)(spinnerModule, spinnerOptions[i]);
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_fullscreen__WEBPACK_IMPORTED_MODULE_10__.isFullScreenOn)(spinnerModule, spinnerOptions[i]);
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_playback__WEBPACK_IMPORTED_MODULE_7__.isPlaybackOn)(spinnerModule, spinnerOptions[i]);
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_hotspots_nav__WEBPACK_IMPORTED_MODULE_13__.isHotspotsOn)(spinnerModule, spinnerOptions[i]);
    spinnerOptions[i] = (0,_library_3d_media_spinner_plugins_ctrl_drag_plugin__WEBPACK_IMPORTED_MODULE_6__.isDragOn)(spinnerModule, spinnerOptions[i]);

    // other options
    spinnerOptions[i] = (0,_library_3d_media_spinner_controls_autoanimate__WEBPACK_IMPORTED_MODULE_12__.isAnimateOn)(spinnerModule, spinnerOptions[i]);
    bootImageSpinner("#".concat(spinnerID), spinnerOptions[i]);
  });
  (0,_library_3d_media_spinner_plugins_ctrl_playback_plugin__WEBPACK_IMPORTED_MODULE_0__.registerPlaybackControlPlugin)('dsPlaybackControl');
  (0,_library_3d_media_spinner_plugins_ctrl_frames_nav_plugin__WEBPACK_IMPORTED_MODULE_1__.registerFramesNavControlPlugin)('dsFramesNavControl');
  (0,_library_3d_media_spinner_plugins_ctrl_zoom_plugin__WEBPACK_IMPORTED_MODULE_2__.registerZoomControlPlugin)('dsZoomControl');
  (0,_library_3d_media_spinner_plugins_ctrl_fullscreen_plugin__WEBPACK_IMPORTED_MODULE_3__.registerFullscrControlPlugin)('dsFullScreenControl');
  (0,_library_3d_media_spinner_plugins_progress_fraction_plugin__WEBPACK_IMPORTED_MODULE_4__.registerProgressFractionPlugin)('dsProgressFraction');
  (0,_library_3d_media_spinner_plugins_hotspots_plugin__WEBPACK_IMPORTED_MODULE_5__.registerHotSpotsPlugin)('dsHotSpots');
};
function bootImageSpinner(selector, options) {
  if ("IntersectionObserver" in window) {
    // Browser supports IntersectionObserver so use that to defer the boot
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          $(entry.target).spritespin(options);
        }
      });
    });
    observer.observe($(selector)[0]);
  } else {
    // Browser does not support IntersectionObserver so boot instantly
    $(selector).spritespin(options);
    //   console.log("spinner booted by default", selector, options);
  }
}


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/autoanimate.js":
/*!*************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/autoanimate.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimateOn: function() { return /* binding */ isAnimateOn; }
/* harmony export */ });
/**
 * Image Spinner Options - auto animation
 */

var isAnimateOn = function isAnimateOn(elem, options) {
  if (!elem) return options;
  var isAnimate = elem.getAttribute('data-spinner-autoanimate');
  if (isAnimate === 'true') {
    options.animate = true;
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/frames-nav.js":
/*!************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/frames-nav.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFramesNavOn: function() { return /* binding */ isFramesNavOn; }
/* harmony export */ });
/**
 * Image Spinner Controls - Frame by frame navigation
 */

var isFramesNavOn = function isFramesNavOn(elem, options) {
  if (!elem) return options;
  var isFramesNav = elem.getAttribute('data-ctrl-frames-nav');
  if (isFramesNav === 'true') {
    options.plugins.push('dsFramesNavControl');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/fullscreen.js":
/*!************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/fullscreen.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFullScreenOn: function() { return /* binding */ isFullScreenOn; }
/* harmony export */ });
/**
 * Image Spinner Controls - Full Screen
 */

var isFullScreenOn = function isFullScreenOn(elem, options) {
  if (!elem) return options;
  var isFullScreen = elem.getAttribute('data-ctrl-fullscr');
  if (isFullScreen === 'true') {
    options.plugins.push('dsFullScreenControl');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/hotspots-nav.js":
/*!**************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/hotspots-nav.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHotspotsOn: function() { return /* binding */ isHotspotsOn; }
/* harmony export */ });
/**
 * Image Spinner Controls - Hotspots navigation
 */

var isHotspotsOn = function isHotspotsOn(elem, options) {
  if (!elem) return options;
  var isHotspots = elem.getAttribute('data-spinner-has-hotspots');
  if (isHotspots === 'true') {
    options.plugins.push('dsHotSpots');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/playback.js":
/*!**********************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/playback.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPlaybackOn: function() { return /* binding */ isPlaybackOn; }
/* harmony export */ });
/**
 * Image Spinner Controls - Playback
 */

var isPlaybackOn = function isPlaybackOn(elem, options) {
  if (!elem) return options;
  var isPlayback = elem.getAttribute('data-ctrl-playback');
  if (isPlayback === 'true') {
    options.plugins.push('dsPlaybackControl');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/progress-fraction.js":
/*!*******************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/progress-fraction.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFractionOn: function() { return /* binding */ isFractionOn; }
/* harmony export */ });
/**
 * Image Spinner Options - Progress - Fraction
 */

var isFractionOn = function isFractionOn(elem, options) {
  if (!elem) return options;
  var isFraction = elem.getAttribute('data-ctrl-progress-fraction');
  if (isFraction === 'true') {
    options.plugins.push('dsProgressFraction');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-controls/zoom.js":
/*!******************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-controls/zoom.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isZoomOn: function() { return /* binding */ isZoomOn; }
/* harmony export */ });
/**
 * Image Spinner Controls - Zoom
 */

var isZoomOn = function isZoomOn(elem, options) {
  if (!elem) return options;
  var isZoom = elem.getAttribute('data-ctrl-zoom');
  if (isZoom === 'true') {
    options.plugins.push('dsZoomControl', 'zoom');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-drag-plugin.js":
/*!*****************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/ctrl-drag-plugin.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDragOn: function() { return /* binding */ isDragOn; }
/* harmony export */ });
/**
 * Image Spinner Options - 'drag' plugin
 */

var isDragOn = function isDragOn(elem, options) {
  if (!elem) return options;
  var isDrag = elem.getAttribute('data-spinner-drag');
  if (isDrag === 'true') {
    options.plugins.push('drag');
  }
  return options;
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-frames-nav-plugin.js":
/*!***********************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/ctrl-frames-nav-plugin.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFramesNavControlPlugin: function() { return /* binding */ registerFramesNavControlPlugin; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Image Spinner Plugin - dsFramesNavControl
 */

function framesNavControl(spinnerElem) {
  var api = spinnerElem.spritespin('api');
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  var hotspotEl = spinnerModule.find('.hotspot');
  var hsContentListItem = spinnerModule.find('.js-hotspots-list-item');
  var ctrlBttnPrev = spinnerModule.find('.js-image-spinner-prev');
  var ctrlBttnNext = spinnerModule.find('.js-image-spinner-next');
  if (0 < ctrlBttnPrev.length) {
    ctrlBttnPrev.on('click', function (e) {
      // Get original 'reverse' setting
      api.data.reverse = api.data.forceReverse;
      api.prevFrame();

      // hide all hotspots
      hotspotEl.removeClass('is-active');
      hotspotEl.hide();
      // deactivate all labels
      hsContentListItem.removeClass('is-active');
      // show current hotspots for this frame
      api.data.stage.find(".hotspot.hotspot-frame-" + api.data.frame).stop(false).fadeIn();
    });
  }
  if (0 < ctrlBttnNext.length) {
    ctrlBttnNext.on('click', function (e) {
      // Get original 'reverse' setting
      api.data.reverse = api.data.forceReverse;
      api.nextFrame();

      // hide all hotspots
      hotspotEl.removeClass('is-active');
      hotspotEl.hide();
      // deactivate all labels
      hsContentListItem.removeClass('is-active');
      // show current hotspots for this frame
      api.data.stage.find(".hotspot.hotspot-frame-" + api.data.frame).stop(false).fadeIn();
    });
  }
}
var registerFramesNavControlPlugin = function registerFramesNavControlPlugin(label) {
  SpriteSpin.registerPlugin(label, {
    onLoad: function onLoad(ev) {
      framesNavControl($(ev.target));
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-fullscreen-plugin.js":
/*!***********************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/ctrl-fullscreen-plugin.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFullscrControlPlugin: function() { return /* binding */ registerFullscrControlPlugin; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Image Spinner Plugin - dsFullScreenControl
 */

function fullscrControl(spinnerElem) {
  var api = spinnerElem.spritespin('api');
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  var ctrlBttnFullScr = spinnerModule.find('.js-image-spinner-fullscr');
  if (0 < ctrlBttnFullScr.length) {
    ctrlBttnFullScr.on('click', function (e) {
      api.requestFullscreen();
    });
  }
}
var registerFullscrControlPlugin = function registerFullscrControlPlugin(label) {
  SpriteSpin.registerPlugin(label, {
    onLoad: function onLoad(ev) {
      fullscrControl($(ev.target));
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-playback-plugin.js":
/*!*********************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/ctrl-playback-plugin.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerPlaybackControlPlugin: function() { return /* binding */ registerPlaybackControlPlugin; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Image Spinner Plugin - dsPlaybackControl
 */

function playbackControl(spinnerElem) {
  var api = spinnerElem.spritespin('api');
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  var hotspotEl = spinnerModule.find('.hotspot');
  var hsContentListItem = spinnerModule.find('.js-hotspots-list-item');
  var ctrlBttnPlay = spinnerModule.find('.js-image-spinner-play');
  if (0 < ctrlBttnPlay.length) {
    ctrlBttnPlay.on('click', function (e) {
      // Get original 'reverse' setting
      api.data.reverse = api.data.forceReverse;
      api.toggleAnimation();
      if (true === api.isPlaying()) {
        hsContentListItem.removeClass('is-active');
        hotspotEl.removeClass('is-active');
        hotspotEl.hide();
        spinnerModule.addClass('is-playing');
      } else {
        spinnerModule.removeClass('is-playing');
      }
    });
  }
}
var registerPlaybackControlPlugin = function registerPlaybackControlPlugin(label) {
  SpriteSpin.registerPlugin(label, {
    onLoad: function onLoad(ev) {
      playbackControl($(ev.target));
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/ctrl-zoom-plugin.js":
/*!*****************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/ctrl-zoom-plugin.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerZoomControlPlugin: function() { return /* binding */ registerZoomControlPlugin; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Image Spinner Plugin - dsZoomControl
 */

function zoomControl(spinnerElem) {
  var api = spinnerElem.spritespin('api');
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  var ctrlBttnZoom = spinnerModule.find('.js-image-spinner-zoom');
  if (0 < ctrlBttnZoom.length) {
    ctrlBttnZoom.on('click', function (e) {
      api.toggleZoom();
      spinnerModule.toggleClass('is-zoom');
    });
  }
}
var registerZoomControlPlugin = function registerZoomControlPlugin(label) {
  SpriteSpin.registerPlugin(label, {
    onLoad: function onLoad(ev) {
      zoomControl($(ev.target));
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/hotspots-plugin.js":
/*!****************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/hotspots-plugin.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerHotSpotsPlugin: function() { return /* binding */ registerHotSpotsPlugin; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Image Spinner Plugin - dsHotSpots
 */

function normalizeItemIndex(index, arr) {
  var itemIndex = index;
  if (itemIndex < 0) {
    itemIndex = arr.length - 1;
  }
  if (itemIndex >= arr.length) {
    itemIndex = 0;
  }
  return itemIndex;
}

/**
 * Append hotspots to spinner stage
 */
function assignHotspots(spinnerElem) {
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  if (!spinnerModule.attr('data-spinner-has-hotspots')) {
    return;
  }
  if (!spinnerModule.attr('data-hotspots-frames')) {
    return;
  }
  var hotspotEl = spinnerModule.find('.hotspot');
  var api = spinnerElem.spritespin('api');
  var data = api.data;
  var hotspotsHTML = spinnerModule.find(".hotspot");
  spinnerElem.bind("onComplete.spritespin", function () {
    //   data = api.data;

    // prepend all hotspots on spinner init
    data.stage.prepend(hotspotsHTML);

    // initially show only those hotspots that exist on first frame
    data.stage.find(".hotspot").hide();
    data.stage.find(".hotspot-frame-0").fadeIn();
  }).bind("onAnimationStop.spritespin", function () {
    // get data for current state
    data = api.data;

    // show hotspots on current frame
    hotspotEl.hide();
    data.stage.find(".hotspot.hotspot-frame-" + data.frame).stop(false).fadeIn();
  });

  // Hide tooltip on close bttn
  hotspotEl.on('click', '.hotspot__tooltip-close', function (e) {
    hotspotEl.removeClass('is-active');
    spinnerModule.find('.js-hotspots-list-item').removeClass('is-active');
  });

  // Hide tooltip on hitting the Esc key
  $(document).keyup(function (e) {
    if (27 === e.keyCode) {
      hotspotEl.removeClass('is-active');
      spinnerModule.find('.js-hotspots-list-item').removeClass('is-active');
    }
  });

  // Hide tooltip on clicking outside of it
  $(document).on('click', function (e) {
    if (0 === $(e.target).closest($('.hotspot')).length && 0 === $(e.target).closest($('.hotspots-content')).length) {
      hotspotEl.removeClass('is-active');
      spinnerModule.find('.js-hotspots-list-item').removeClass('is-active');
    }
  });
}

/**
 * Add hotspots navigation
 */
function hotspotsNav(spinnerElem) {
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  if (!spinnerModule.attr('data-spinner-has-hotspots')) {
    return;
  }
  if (!spinnerModule.attr('data-hotspots-frames')) {
    return;
  }
  var hs_frames_list = spinnerModule.attr('data-hotspots-frames');
  var hs_frames = hs_frames_list.split(',');
  var hsContentList = spinnerModule.find('.js-hotspots-list');
  var hsContentListItem = hsContentList.find('.js-hotspots-list-item');
  var hotspotEl = spinnerModule.find('.hotspot');
  var api = spinnerElem.spritespin('api');
  var hotspots = [];
  var activeFrameIndex = api.data.frame;
  var activeHotspot, activeHotspotIndex;
  hs_frames.forEach(function (hs) {
    hotspots.push(parseInt(hs));
  });

  /**
   * Set active hotspot
   */
  function setActiveHotspot(activeHotspotIndex, deactivateHotspot) {
    // deactivate all hotspots
    hotspotEl.removeClass('is-active');
    hsContentListItem.removeClass('is-active');

    // if the hotspot is already active, close it
    if (deactivateHotspot) {
      return;
    }

    // get the new hotspot and its frame
    activeHotspot = api.data.stage.find(".hotspot.hotspot-index-" + activeHotspotIndex);
    activeFrameIndex = hotspots[activeHotspotIndex];

    // if the new hotspot is not the same frame,
    // hide all hotspots,
    // and navigate spinner to the according one
    if (activeFrameIndex - 1 !== api.data.frame) {
      hotspotEl.hide();
      api.playTo(activeFrameIndex - 1, {
        nearest: true
      });
    }

    // activate current hotspot and its content
    activeHotspot.addClass('is-active');
    hsContentList.find('.hs-index-' + activeHotspotIndex).addClass('is-active');
  }

  /**
   * Navigate through hotspots' pins
   */
  Array.from(hotspotEl).forEach(function (hs) {
    $(hs).on('click', '.js-hotspot-pin', function (e) {
      activeHotspotIndex = $(hs).attr('data-hotspot-index');
      activeHotspotIndex = parseInt(activeHotspotIndex);
      var deactivateHotspot = $(hs).hasClass('is-active');
      setActiveHotspot(activeHotspotIndex, deactivateHotspot);
    });
  });

  /**
   * Navigate through hotspots' content
   */
  Array.from(hsContentListItem).forEach(function (det) {
    $(det).on('click', function (e) {
      activeHotspotIndex = $(this).attr('data-hs-index');
      activeHotspotIndex = parseInt(activeHotspotIndex);
      var deactivateHotspot = $(this).hasClass('is-active');
      setActiveHotspot(activeHotspotIndex, deactivateHotspot);
    });
  });

  /**
   * Prev/Next navigation
   */
  if (spinnerModule.attr('data-ctrl-hotspots-nav')) {
    var ctrlBttnPrevHotspot = spinnerModule.find('.js-image-spinner-hotspot-prev');
    var ctrlBttnNextHotspot = spinnerModule.find('.js-image-spinner-hotspot-next');
    activeFrameIndex = api.data.frame;
    ctrlBttnPrevHotspot.on('click', function (e) {
      activeHotspot = api.data.stage.find(".hotspot.is-active");
      if (0 < activeHotspot.length) {
        activeHotspotIndex = activeHotspot.attr('data-hotspot-index');
      } else {
        activeHotspotIndex = 0;
      }
      activeHotspotIndex = parseInt(activeHotspotIndex);
      activeHotspotIndex--;
      activeHotspotIndex = normalizeItemIndex(activeHotspotIndex, hotspots);
      setActiveHotspot(activeHotspotIndex);
    });
    ctrlBttnNextHotspot.on('click', function (e) {
      activeHotspot = api.data.stage.find(".hotspot.is-active");
      if (0 < activeHotspot.length) {
        activeHotspotIndex = activeHotspot.attr('data-hotspot-index');
      } else {
        activeHotspotIndex = hotspots.length;
      }
      activeHotspotIndex = parseInt(activeHotspotIndex);
      activeHotspotIndex++;
      activeHotspotIndex = normalizeItemIndex(activeHotspotIndex, hotspots);
      setActiveHotspot(activeHotspotIndex);
    });
  }
}

/*
function getObjKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}
*/

var registerHotSpotsPlugin = function registerHotSpotsPlugin(label) {
  SpriteSpin.registerPlugin(label, {
    onLoad: function onLoad(ev) {
      assignHotspots($(ev.target));
      hotspotsNav($(ev.target));
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/library/3d-media/spinner-plugins/progress-fraction-plugin.js":
/*!*************************************************************************************!*\
  !*** ./assets/_src/js/library/3d-media/spinner-plugins/progress-fraction-plugin.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerProgressFractionPlugin: function() { return /* binding */ registerProgressFractionPlugin; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Image Spinner Plugin - dsProgressFraction
 */

function progressFraction(spinnerElem) {
  var api = spinnerElem.spritespin('api');
  var spinnerModule = spinnerElem.closest('.m-image-spinner');
  var spinnerFraction = spinnerModule.find('.image-spinner__fraction-current');
  var data = api.data;
  spinnerElem.bind("onFrame.spritespin", function () {
    data = api.data;
    spinnerFraction.text(data.frame + 1);
  });
}
var registerProgressFractionPlugin = function registerProgressFractionPlugin(label) {
  SpriteSpin.registerPlugin(label, {
    onLoad: function onLoad(ev) {
      progressFraction($(ev.target));
    }
  });
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
/*!*****************************************!*\
  !*** ./assets/_src/js/ds-3d_spinner.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_calls_3d_media_image_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function-calls/3d-media/image-spinner */ "./assets/_src/js/function-calls/3d-media/image-spinner.js");
/*
 * @title 3d Image Spinner
 * @description Application entry point
 */


document.addEventListener('DOMContentLoaded', function () {
  (0,_function_calls_3d_media_image_spinner__WEBPACK_IMPORTED_MODULE_0__.callImageSpinners)();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEU7QUFFNUUvQyxRQUFRLENBQUNtSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBRWhEakkseUZBQWlCLENBQUMsQ0FBQztBQUV2QixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvZnVuY3Rpb24tY2FsbHMvM2QtbWVkaWEvaW1hZ2Utc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1jb250cm9scy9hdXRvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1jb250cm9scy9mcmFtZXMtbmF2LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLWNvbnRyb2xzL2Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItY29udHJvbHMvaG90c3BvdHMtbmF2LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLWNvbnRyb2xzL3BsYXliYWNrLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLWNvbnRyb2xzL3Byb2dyZXNzLWZyYWN0aW9uLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLWNvbnRyb2xzL3pvb20uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItcGx1Z2lucy9jdHJsLWRyYWctcGx1Z2luLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLXBsdWdpbnMvY3RybC1mcmFtZXMtbmF2LXBsdWdpbi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1wbHVnaW5zL2N0cmwtZnVsbHNjcmVlbi1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItcGx1Z2lucy9jdHJsLXBsYXliYWNrLXBsdWdpbi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1wbHVnaW5zL2N0cmwtem9vbS1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItcGx1Z2lucy9ob3RzcG90cy1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItcGx1Z2lucy9wcm9ncmVzcy1mcmFjdGlvbi1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2RzLTNkX3NwaW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgSW1hZ2UgU3Bpbm5lclxuICovXG5pbXBvcnQgeyByZWdpc3RlclBsYXliYWNrQ29udHJvbFBsdWdpbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1wbHVnaW5zL2N0cmwtcGxheWJhY2stcGx1Z2luJztcbmltcG9ydCB7IHJlZ2lzdGVyRnJhbWVzTmF2Q29udHJvbFBsdWdpbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1wbHVnaW5zL2N0cmwtZnJhbWVzLW5hdi1wbHVnaW4nO1xuaW1wb3J0IHsgcmVnaXN0ZXJab29tQ29udHJvbFBsdWdpbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1wbHVnaW5zL2N0cmwtem9vbS1wbHVnaW4nO1xuaW1wb3J0IHsgcmVnaXN0ZXJGdWxsc2NyQ29udHJvbFBsdWdpbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1wbHVnaW5zL2N0cmwtZnVsbHNjcmVlbi1wbHVnaW4nO1xuaW1wb3J0IHsgcmVnaXN0ZXJQcm9ncmVzc0ZyYWN0aW9uUGx1Z2luIH0gZnJvbSAnLi4vLi4vbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLXBsdWdpbnMvcHJvZ3Jlc3MtZnJhY3Rpb24tcGx1Z2luJztcbmltcG9ydCB7IHJlZ2lzdGVySG90U3BvdHNQbHVnaW4gfSBmcm9tICcuLi8uLi9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItcGx1Z2lucy9ob3RzcG90cy1wbHVnaW4nO1xuaW1wb3J0IHsgaXNEcmFnT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItcGx1Z2lucy9jdHJsLWRyYWctcGx1Z2luJztcbmltcG9ydCB7IGlzUGxheWJhY2tPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1jb250cm9scy9wbGF5YmFjayc7XG5pbXBvcnQgeyBpc0ZyYW1lc05hdk9uIH0gZnJvbSAnLi4vLi4vbGlicmFyeS8zZC1tZWRpYS9zcGlubmVyLWNvbnRyb2xzL2ZyYW1lcy1uYXYnO1xuaW1wb3J0IHsgaXNab29tT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItY29udHJvbHMvem9vbSc7XG5pbXBvcnQgeyBpc0Z1bGxTY3JlZW5PbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1jb250cm9scy9mdWxsc2NyZWVuJztcbmltcG9ydCB7IGlzRnJhY3Rpb25PbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1jb250cm9scy9wcm9ncmVzcy1mcmFjdGlvbic7XG5pbXBvcnQgeyBpc0FuaW1hdGVPbiB9IGZyb20gJy4uLy4uL2xpYnJhcnkvM2QtbWVkaWEvc3Bpbm5lci1jb250cm9scy9hdXRvYW5pbWF0ZSc7XG5pbXBvcnQgeyBpc0hvdHNwb3RzT24gfSBmcm9tICcuLi8uLi9saWJyYXJ5LzNkLW1lZGlhL3NwaW5uZXItY29udHJvbHMvaG90c3BvdHMtbmF2JztcblxuLy8gY29uZmlnIHNlbGVjdG9yc1xuY29uc3Qgc3Bpbm5lckVsZW1OYW1lID0gJ2pzLWltYWdlLXNwaW5uZXInO1xuY29uc3Qgc3Bpbm5lck1vZHVsZVdyYXAgPSAnLm0taW1hZ2Utc3Bpbm5lcic7XG5cbi8vIGdldCBhbGwgc3Bpbm5lcnNcbmNvbnN0IHNwaW5uZXJNb2R1bGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzcGlubmVyTW9kdWxlV3JhcCk7XG5cbmNvbnN0IGNhbGxJbWFnZVNwaW5uZXJzID0gKCkgPT4ge1xuXG4gICAgaWYgKCFzcGlubmVyTW9kdWxlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNwaW5uZXJPcHRpb25zID0gW107XG5cbiAgICAvLyBsb29wIHRocm91Z2ggc3Bpbm5lcnMgYW5kIGFzc2lnbiB0aGVtIElEc1xuICAgIHNwaW5uZXJNb2R1bGVMaXN0LmZvckVhY2goKHNwaW5uZXJNb2R1bGUsIGkpID0+IHtcbiAgICAgICAgY29uc3QgaW1nU3Bpbm5lckVsZW0gPSBzcGlubmVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbWFnZS1zcGlubmVyJyk7XG4gICAgICAgIGNvbnN0IGltZ1BhdGggPSBzcGlubmVyTW9kdWxlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLXBhdGgnKTtcbiAgICAgICAgY29uc3QgaW1nUHJlZml4ID0gc3Bpbm5lck1vZHVsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1wcmVmaXgnKTtcbiAgICAgICAgY29uc3QgaW1nRGlnaXRzID0gc3Bpbm5lck1vZHVsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1kaWdpdHMnKTtcbiAgICAgICAgY29uc3QgaW1nQ291bnQgPSBzcGlubmVyTW9kdWxlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLWNvdW50Jyk7XG4gICAgICAgIGNvbnN0IGltZ0V4dCA9IHNwaW5uZXJNb2R1bGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNwaW5uZXItZXh0Jyk7XG5cbiAgICAgICAgaWYgKCEoaW1nUGF0aCB8fCBpbWdQcmVmaXggfHwgaW1nRGlnaXRzIHx8IGltZ0NvdW50IHx8IGltZ0V4dCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwaW5uZXJJRCA9IGAke3NwaW5uZXJFbGVtTmFtZX0tJHtpfWA7XG4gICAgICAgIGltZ1NwaW5uZXJFbGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBzcGlubmVySUQpO1xuXG4gICAgICAgIHNwaW5uZXJPcHRpb25zW2ldID0ge1xuICAgICAgICAgICAgc291cmNlOiBTcHJpdGVTcGluLnNvdXJjZUFycmF5KGltZ1BhdGggKyAnLycgKyBpbWdQcmVmaXggKyAne2ZyYW1lfS4nICsgaW1nRXh0LCB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IFsxLCBpbWdDb3VudF0sXG4gICAgICAgICAgICAgICAgZGlnaXRzOiBpbWdEaWdpdHNcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgLy8gdXNlIGRvdWJsZSBjbGljayB0byBpbi9vdXQgKGRlZmF1bHQgaXMgdHJ1ZSlcbiAgICAgICAgICAgIHpvb21Vc2VDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGNoYW5naW5nIHRoZSBmcmFtZSBkdXJpbmcgem9vbSAoZGVmYXVsdCBpcyB0cnVlKVxuICAgICAgICAgICAgem9vbVBpbkZyYW1lOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbnNlOiAtMSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNpemVNb2RlOiAnZml0JyxcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnY2FudmFzJyxcbiAgICAgICAgICAgIHByZWxvYWRDb3VudDogMixcbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbiBzcGVlZFxuICAgICAgICAgICAgZnJhbWVUaW1lOiAxMjAsXG4gICAgICAgICAgICBwbGF5VG9GcmFtZVRpbWU6IDEwLFxuICAgICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHRoZSBzYW1lIHZhbHVlIGZvciBmb3JjZVJldmVyc2UsIGluIGNhc2UgaXQgZ2V0cyBjaGFuZ2VkIGJ5ICduZWFyZXN0JyBmcmFtZSBocyBvcHRpb25cbiAgICAgICAgICAgIGZvcmNlUmV2ZXJzZTogZmFsc2UsXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJzM2MCcsIC8vIGRpc3BsYXkgcGx1Z2luXG4gICAgICAgICAgICAgICAgLy8gICAgJ2RyYWcnLCAvLyBpbnRlcmFjdGlvbiBwbHVnaW4gLSBvcHRpb25hbCBwZXIgbW9kdWxlIHNldHRpbmdzXG4gICAgICAgICAgICAgICAgLy8gbmF0aXZlIHpvb20gcGx1Z2luIGlzIHRyaWdnZXJlZCB2aWEgZHNab29tQ29udHJvbFxuICAgICAgICAgICAgICAgIC8vICAgICd6b29tJyxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwbHVnaW5zXG4gICAgICAgIHNwaW5uZXJPcHRpb25zW2ldID0gaXNGcmFjdGlvbk9uKHNwaW5uZXJNb2R1bGUsIHNwaW5uZXJPcHRpb25zW2ldKTtcbiAgICAgICAgc3Bpbm5lck9wdGlvbnNbaV0gPSBpc0ZyYW1lc05hdk9uKHNwaW5uZXJNb2R1bGUsIHNwaW5uZXJPcHRpb25zW2ldKTtcbiAgICAgICAgc3Bpbm5lck9wdGlvbnNbaV0gPSBpc1pvb21PbihzcGlubmVyTW9kdWxlLCBzcGlubmVyT3B0aW9uc1tpXSk7XG4gICAgICAgIHNwaW5uZXJPcHRpb25zW2ldID0gaXNGdWxsU2NyZWVuT24oc3Bpbm5lck1vZHVsZSwgc3Bpbm5lck9wdGlvbnNbaV0pO1xuICAgICAgICBzcGlubmVyT3B0aW9uc1tpXSA9IGlzUGxheWJhY2tPbihzcGlubmVyTW9kdWxlLCBzcGlubmVyT3B0aW9uc1tpXSk7XG4gICAgICAgIHNwaW5uZXJPcHRpb25zW2ldID0gaXNIb3RzcG90c09uKHNwaW5uZXJNb2R1bGUsIHNwaW5uZXJPcHRpb25zW2ldKTtcbiAgICAgICAgc3Bpbm5lck9wdGlvbnNbaV0gPSBpc0RyYWdPbihzcGlubmVyTW9kdWxlLCBzcGlubmVyT3B0aW9uc1tpXSk7XG5cbiAgICAgICAgLy8gb3RoZXIgb3B0aW9uc1xuICAgICAgICBzcGlubmVyT3B0aW9uc1tpXSA9IGlzQW5pbWF0ZU9uKHNwaW5uZXJNb2R1bGUsIHNwaW5uZXJPcHRpb25zW2ldKTtcblxuICAgICAgICBib290SW1hZ2VTcGlubmVyKGAjJHtzcGlubmVySUR9YCwgc3Bpbm5lck9wdGlvbnNbaV0pO1xuICAgIH0pO1xuXG4gICAgcmVnaXN0ZXJQbGF5YmFja0NvbnRyb2xQbHVnaW4oJ2RzUGxheWJhY2tDb250cm9sJyk7XG4gICAgcmVnaXN0ZXJGcmFtZXNOYXZDb250cm9sUGx1Z2luKCdkc0ZyYW1lc05hdkNvbnRyb2wnKTtcbiAgICByZWdpc3Rlclpvb21Db250cm9sUGx1Z2luKCdkc1pvb21Db250cm9sJyk7XG4gICAgcmVnaXN0ZXJGdWxsc2NyQ29udHJvbFBsdWdpbignZHNGdWxsU2NyZWVuQ29udHJvbCcpO1xuICAgIHJlZ2lzdGVyUHJvZ3Jlc3NGcmFjdGlvblBsdWdpbignZHNQcm9ncmVzc0ZyYWN0aW9uJyk7XG4gICAgcmVnaXN0ZXJIb3RTcG90c1BsdWdpbignZHNIb3RTcG90cycpO1xufTtcblxuZnVuY3Rpb24gYm9vdEltYWdlU3Bpbm5lcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICAgIC8vIEJyb3dzZXIgc3VwcG9ydHMgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgc28gdXNlIHRoYXQgdG8gZGVmZXIgdGhlIGJvb3RcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLnNwcml0ZXNwaW4ob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKCQoc2VsZWN0b3IpWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgc28gYm9vdCBpbnN0YW50bHlcbiAgICAgICAgJChzZWxlY3Rvcikuc3ByaXRlc3BpbihvcHRpb25zKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInNwaW5uZXIgYm9vdGVkIGJ5IGRlZmF1bHRcIiwgc2VsZWN0b3IsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjYWxsSW1hZ2VTcGlubmVycyxcbn07XG4iLCIvKipcbiAqIEltYWdlIFNwaW5uZXIgT3B0aW9ucyAtIGF1dG8gYW5pbWF0aW9uXG4gKi9cblxuY29uc3QgaXNBbmltYXRlT24gPSAoZWxlbSwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghZWxlbSkgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICBsZXQgaXNBbmltYXRlID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1hdXRvYW5pbWF0ZScpO1xuXG4gICAgaWYgKGlzQW5pbWF0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIG9wdGlvbnMuYW5pbWF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cblxuZXhwb3J0IHtcbiAgICBpc0FuaW1hdGVPblxufSIsIi8qKlxuICogSW1hZ2UgU3Bpbm5lciBDb250cm9scyAtIEZyYW1lIGJ5IGZyYW1lIG5hdmlnYXRpb25cbiAqL1xuXG5jb25zdCBpc0ZyYW1lc05hdk9uID0gKGVsZW0sIG9wdGlvbnMpID0+IHtcbiAgICBpZiAoIWVsZW0pIHJldHVybiBvcHRpb25zO1xuXG4gICAgbGV0IGlzRnJhbWVzTmF2ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3RybC1mcmFtZXMtbmF2Jyk7XG5cbiAgICBpZiAoaXNGcmFtZXNOYXYgPT09ICd0cnVlJykge1xuICAgICAgICBvcHRpb25zLnBsdWdpbnMucHVzaCgnZHNGcmFtZXNOYXZDb250cm9sJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cblxuZXhwb3J0IHtcbiAgICBpc0ZyYW1lc05hdk9uXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIENvbnRyb2xzIC0gRnVsbCBTY3JlZW5cbiAqL1xuXG5jb25zdCBpc0Z1bGxTY3JlZW5PbiA9IChlbGVtLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFlbGVtKSByZXR1cm4gb3B0aW9ucztcblxuICAgIGxldCBpc0Z1bGxTY3JlZW4gPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jdHJsLWZ1bGxzY3InKTtcblxuICAgIGlmIChpc0Z1bGxTY3JlZW4gPT09ICd0cnVlJykge1xuICAgICAgICBvcHRpb25zLnBsdWdpbnMucHVzaCgnZHNGdWxsU2NyZWVuQ29udHJvbCcpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgaXNGdWxsU2NyZWVuT25cbn0iLCIvKipcbiAqIEltYWdlIFNwaW5uZXIgQ29udHJvbHMgLSBIb3RzcG90cyBuYXZpZ2F0aW9uXG4gKi9cblxuY29uc3QgaXNIb3RzcG90c09uID0gKGVsZW0sIG9wdGlvbnMpID0+IHtcbiAgICBpZiAoIWVsZW0pIHJldHVybiBvcHRpb25zO1xuXG4gICAgbGV0IGlzSG90c3BvdHMgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLWhhcy1ob3RzcG90cycpO1xuXG4gICAgaWYgKGlzSG90c3BvdHMgPT09ICd0cnVlJykge1xuICAgICAgICBvcHRpb25zLnBsdWdpbnMucHVzaCgnZHNIb3RTcG90cycpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgaXNIb3RzcG90c09uXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIENvbnRyb2xzIC0gUGxheWJhY2tcbiAqL1xuXG5jb25zdCBpc1BsYXliYWNrT24gPSAoZWxlbSwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghZWxlbSkgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICBsZXQgaXNQbGF5YmFjayA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWN0cmwtcGxheWJhY2snKTtcblxuICAgIGlmIChpc1BsYXliYWNrID09PSAndHJ1ZScpIHtcbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2goJ2RzUGxheWJhY2tDb250cm9sJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cblxuZXhwb3J0IHtcbiAgICBpc1BsYXliYWNrT25cbn0iLCIvKipcbiAqIEltYWdlIFNwaW5uZXIgT3B0aW9ucyAtIFByb2dyZXNzIC0gRnJhY3Rpb25cbiAqL1xuXG5jb25zdCBpc0ZyYWN0aW9uT24gPSAoZWxlbSwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghZWxlbSkgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICBsZXQgaXNGcmFjdGlvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWN0cmwtcHJvZ3Jlc3MtZnJhY3Rpb24nKTtcblxuICAgIGlmIChpc0ZyYWN0aW9uID09PSAndHJ1ZScpIHtcbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2goJ2RzUHJvZ3Jlc3NGcmFjdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgaXNGcmFjdGlvbk9uXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIENvbnRyb2xzIC0gWm9vbVxuICovXG5cbmNvbnN0IGlzWm9vbU9uID0gKGVsZW0sIG9wdGlvbnMpID0+IHtcbiAgICBpZiAoIWVsZW0pIHJldHVybiBvcHRpb25zO1xuXG4gICAgbGV0IGlzWm9vbSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWN0cmwtem9vbScpO1xuXG4gICAgaWYgKGlzWm9vbSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIG9wdGlvbnMucGx1Z2lucy5wdXNoKCdkc1pvb21Db250cm9sJywgJ3pvb20nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuXG5leHBvcnQge1xuICAgIGlzWm9vbU9uXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIE9wdGlvbnMgLSAnZHJhZycgcGx1Z2luXG4gKi9cblxuY29uc3QgaXNEcmFnT24gPSAoZWxlbSwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghZWxlbSkgcmV0dXJuIG9wdGlvbnM7XG5cbiAgICBsZXQgaXNEcmFnID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1kcmFnJyk7XG5cbiAgICBpZiAoaXNEcmFnID09PSAndHJ1ZScpIHtcbiAgICAgICAgb3B0aW9ucy5wbHVnaW5zLnB1c2goJ2RyYWcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuXG5leHBvcnQge1xuICAgIGlzRHJhZ09uXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIFBsdWdpbiAtIGRzRnJhbWVzTmF2Q29udHJvbFxuICovXG5cbmZ1bmN0aW9uIGZyYW1lc05hdkNvbnRyb2woc3Bpbm5lckVsZW0pIHtcbiAgICBsZXQgYXBpID0gc3Bpbm5lckVsZW0uc3ByaXRlc3BpbignYXBpJyk7XG4gICAgY29uc3Qgc3Bpbm5lck1vZHVsZSA9IHNwaW5uZXJFbGVtLmNsb3Nlc3QoJy5tLWltYWdlLXNwaW5uZXInKTtcbiAgICBjb25zdCBob3RzcG90RWwgPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5ob3RzcG90Jyk7XG4gICAgY29uc3QgaHNDb250ZW50TGlzdEl0ZW0gPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5qcy1ob3RzcG90cy1saXN0LWl0ZW0nKTtcbiAgICBjb25zdCBjdHJsQnR0blByZXYgPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5qcy1pbWFnZS1zcGlubmVyLXByZXYnKTtcbiAgICBjb25zdCBjdHJsQnR0bk5leHQgPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5qcy1pbWFnZS1zcGlubmVyLW5leHQnKTtcblxuICAgIGlmICgwIDwgY3RybEJ0dG5QcmV2Lmxlbmd0aCkge1xuICAgICAgICBjdHJsQnR0blByZXYub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gR2V0IG9yaWdpbmFsICdyZXZlcnNlJyBzZXR0aW5nXG4gICAgICAgICAgICBhcGkuZGF0YS5yZXZlcnNlID0gYXBpLmRhdGEuZm9yY2VSZXZlcnNlO1xuICAgICAgICAgICAgYXBpLnByZXZGcmFtZSgpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIGFsbCBob3RzcG90c1xuICAgICAgICAgICAgaG90c3BvdEVsLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIGhvdHNwb3RFbC5oaWRlKCk7XG4gICAgICAgICAgICAvLyBkZWFjdGl2YXRlIGFsbCBsYWJlbHNcbiAgICAgICAgICAgIGhzQ29udGVudExpc3RJdGVtLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIC8vIHNob3cgY3VycmVudCBob3RzcG90cyBmb3IgdGhpcyBmcmFtZVxuICAgICAgICAgICAgYXBpLmRhdGEuc3RhZ2UuZmluZChcIi5ob3RzcG90LmhvdHNwb3QtZnJhbWUtXCIgKyBhcGkuZGF0YS5mcmFtZSkuc3RvcChmYWxzZSkuZmFkZUluKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgwIDwgY3RybEJ0dG5OZXh0Lmxlbmd0aCkge1xuICAgICAgICBjdHJsQnR0bk5leHQub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gR2V0IG9yaWdpbmFsICdyZXZlcnNlJyBzZXR0aW5nXG4gICAgICAgICAgICBhcGkuZGF0YS5yZXZlcnNlID0gYXBpLmRhdGEuZm9yY2VSZXZlcnNlO1xuICAgICAgICAgICAgYXBpLm5leHRGcmFtZSgpO1xuXG4gICAgICAgICAgICAvLyBoaWRlIGFsbCBob3RzcG90c1xuICAgICAgICAgICAgaG90c3BvdEVsLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIGhvdHNwb3RFbC5oaWRlKCk7XG4gICAgICAgICAgICAvLyBkZWFjdGl2YXRlIGFsbCBsYWJlbHNcbiAgICAgICAgICAgIGhzQ29udGVudExpc3RJdGVtLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIC8vIHNob3cgY3VycmVudCBob3RzcG90cyBmb3IgdGhpcyBmcmFtZVxuICAgICAgICAgICAgYXBpLmRhdGEuc3RhZ2UuZmluZChcIi5ob3RzcG90LmhvdHNwb3QtZnJhbWUtXCIgKyBhcGkuZGF0YS5mcmFtZSkuc3RvcChmYWxzZSkuZmFkZUluKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgcmVnaXN0ZXJGcmFtZXNOYXZDb250cm9sUGx1Z2luID0gKGxhYmVsKSA9PiB7XG4gICAgU3ByaXRlU3Bpbi5yZWdpc3RlclBsdWdpbihsYWJlbCwge1xuICAgICAgICBvbkxvYWQ6IChldikgPT4ge1xuICAgICAgICAgICAgZnJhbWVzTmF2Q29udHJvbCgkKGV2LnRhcmdldCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IHtcbiAgICByZWdpc3RlckZyYW1lc05hdkNvbnRyb2xQbHVnaW5cbn1cbiIsIi8qKlxuICogSW1hZ2UgU3Bpbm5lciBQbHVnaW4gLSBkc0Z1bGxTY3JlZW5Db250cm9sXG4gKi9cblxuZnVuY3Rpb24gZnVsbHNjckNvbnRyb2woc3Bpbm5lckVsZW0pIHtcbiAgICBsZXQgYXBpID0gc3Bpbm5lckVsZW0uc3ByaXRlc3BpbignYXBpJyk7XG4gICAgY29uc3Qgc3Bpbm5lck1vZHVsZSA9IHNwaW5uZXJFbGVtLmNsb3Nlc3QoJy5tLWltYWdlLXNwaW5uZXInKTtcblxuICAgIGNvbnN0IGN0cmxCdHRuRnVsbFNjciA9IHNwaW5uZXJNb2R1bGUuZmluZCgnLmpzLWltYWdlLXNwaW5uZXItZnVsbHNjcicpO1xuXG4gICAgaWYgKDAgPCBjdHJsQnR0bkZ1bGxTY3IubGVuZ3RoKSB7XG4gICAgICAgIGN0cmxCdHRuRnVsbFNjci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBhcGkucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCByZWdpc3RlckZ1bGxzY3JDb250cm9sUGx1Z2luID0gKGxhYmVsKSA9PiB7XG4gICAgU3ByaXRlU3Bpbi5yZWdpc3RlclBsdWdpbihsYWJlbCwge1xuICAgICAgICBvbkxvYWQ6IChldikgPT4ge1xuICAgICAgICAgICAgZnVsbHNjckNvbnRyb2woJChldi50YXJnZXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgcmVnaXN0ZXJGdWxsc2NyQ29udHJvbFBsdWdpblxufSIsIi8qKlxuICogSW1hZ2UgU3Bpbm5lciBQbHVnaW4gLSBkc1BsYXliYWNrQ29udHJvbFxuICovXG5cbmZ1bmN0aW9uIHBsYXliYWNrQ29udHJvbChzcGlubmVyRWxlbSkge1xuICAgIGxldCBhcGkgPSBzcGlubmVyRWxlbS5zcHJpdGVzcGluKCdhcGknKTtcbiAgICBjb25zdCBzcGlubmVyTW9kdWxlID0gc3Bpbm5lckVsZW0uY2xvc2VzdCgnLm0taW1hZ2Utc3Bpbm5lcicpO1xuICAgIGNvbnN0IGhvdHNwb3RFbCA9IHNwaW5uZXJNb2R1bGUuZmluZCgnLmhvdHNwb3QnKTtcbiAgICBjb25zdCBoc0NvbnRlbnRMaXN0SXRlbSA9IHNwaW5uZXJNb2R1bGUuZmluZCgnLmpzLWhvdHNwb3RzLWxpc3QtaXRlbScpO1xuICAgIGNvbnN0IGN0cmxCdHRuUGxheSA9IHNwaW5uZXJNb2R1bGUuZmluZCgnLmpzLWltYWdlLXNwaW5uZXItcGxheScpO1xuXG4gICAgaWYgKDAgPCBjdHJsQnR0blBsYXkubGVuZ3RoKSB7XG4gICAgICAgIGN0cmxCdHRuUGxheS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCBvcmlnaW5hbCAncmV2ZXJzZScgc2V0dGluZ1xuICAgICAgICAgICAgYXBpLmRhdGEucmV2ZXJzZSA9IGFwaS5kYXRhLmZvcmNlUmV2ZXJzZTtcblxuICAgICAgICAgICAgYXBpLnRvZ2dsZUFuaW1hdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAodHJ1ZSA9PT0gYXBpLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICAgICAgaHNDb250ZW50TGlzdEl0ZW0ucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGhvdHNwb3RFbC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaG90c3BvdEVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzcGlubmVyTW9kdWxlLmFkZENsYXNzKCdpcy1wbGF5aW5nJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Bpbm5lck1vZHVsZS5yZW1vdmVDbGFzcygnaXMtcGxheWluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IHJlZ2lzdGVyUGxheWJhY2tDb250cm9sUGx1Z2luID0gKGxhYmVsKSA9PiB7XG4gICAgU3ByaXRlU3Bpbi5yZWdpc3RlclBsdWdpbihsYWJlbCwge1xuICAgICAgICBvbkxvYWQ6IChldikgPT4ge1xuICAgICAgICAgICAgcGxheWJhY2tDb250cm9sKCQoZXYudGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQge1xuICAgIHJlZ2lzdGVyUGxheWJhY2tDb250cm9sUGx1Z2luXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIFBsdWdpbiAtIGRzWm9vbUNvbnRyb2xcbiAqL1xuXG5mdW5jdGlvbiB6b29tQ29udHJvbChzcGlubmVyRWxlbSkge1xuICAgIGxldCBhcGkgPSBzcGlubmVyRWxlbS5zcHJpdGVzcGluKCdhcGknKTtcbiAgICBjb25zdCBzcGlubmVyTW9kdWxlID0gc3Bpbm5lckVsZW0uY2xvc2VzdCgnLm0taW1hZ2Utc3Bpbm5lcicpO1xuXG4gICAgY29uc3QgY3RybEJ0dG5ab29tID0gc3Bpbm5lck1vZHVsZS5maW5kKCcuanMtaW1hZ2Utc3Bpbm5lci16b29tJyk7XG5cbiAgICBpZiAoMCA8IGN0cmxCdHRuWm9vbS5sZW5ndGgpIHtcbiAgICAgICAgY3RybEJ0dG5ab29tLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGFwaS50b2dnbGVab29tKCk7XG4gICAgICAgICAgICBzcGlubmVyTW9kdWxlLnRvZ2dsZUNsYXNzKCdpcy16b29tJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgcmVnaXN0ZXJab29tQ29udHJvbFBsdWdpbiA9IChsYWJlbCkgPT4ge1xuICAgIFNwcml0ZVNwaW4ucmVnaXN0ZXJQbHVnaW4obGFiZWwsIHtcbiAgICAgICAgb25Mb2FkOiAoZXYpID0+IHtcbiAgICAgICAgICAgIHpvb21Db250cm9sKCQoZXYudGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQge1xuICAgIHJlZ2lzdGVyWm9vbUNvbnRyb2xQbHVnaW5cbn0iLCIvKipcbiAqIEltYWdlIFNwaW5uZXIgUGx1Z2luIC0gZHNIb3RTcG90c1xuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUl0ZW1JbmRleChpbmRleCwgYXJyKSB7XG4gICAgbGV0IGl0ZW1JbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKGl0ZW1JbmRleCA8IDApIHtcbiAgICAgICAgaXRlbUluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGlmIChpdGVtSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICBpdGVtSW5kZXggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtSW5kZXg7XG59XG5cbi8qKlxuICogQXBwZW5kIGhvdHNwb3RzIHRvIHNwaW5uZXIgc3RhZ2VcbiAqL1xuZnVuY3Rpb24gYXNzaWduSG90c3BvdHMoc3Bpbm5lckVsZW0pIHtcbiAgICBjb25zdCBzcGlubmVyTW9kdWxlID0gc3Bpbm5lckVsZW0uY2xvc2VzdCgnLm0taW1hZ2Utc3Bpbm5lcicpO1xuXG4gICAgaWYgKCFzcGlubmVyTW9kdWxlLmF0dHIoJ2RhdGEtc3Bpbm5lci1oYXMtaG90c3BvdHMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzcGlubmVyTW9kdWxlLmF0dHIoJ2RhdGEtaG90c3BvdHMtZnJhbWVzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhvdHNwb3RFbCA9IHNwaW5uZXJNb2R1bGUuZmluZCgnLmhvdHNwb3QnKTtcblxuICAgIGxldCBhcGkgPSBzcGlubmVyRWxlbS5zcHJpdGVzcGluKCdhcGknKTtcbiAgICBsZXQgZGF0YSA9IGFwaS5kYXRhO1xuXG4gICAgbGV0IGhvdHNwb3RzSFRNTCA9IHNwaW5uZXJNb2R1bGUuZmluZChcIi5ob3RzcG90XCIpO1xuXG4gICAgc3Bpbm5lckVsZW0uYmluZChcIm9uQ29tcGxldGUuc3ByaXRlc3BpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICBkYXRhID0gYXBpLmRhdGE7XG5cbiAgICAgICAgLy8gcHJlcGVuZCBhbGwgaG90c3BvdHMgb24gc3Bpbm5lciBpbml0XG4gICAgICAgIGRhdGEuc3RhZ2UucHJlcGVuZChob3RzcG90c0hUTUwpO1xuXG4gICAgICAgIC8vIGluaXRpYWxseSBzaG93IG9ubHkgdGhvc2UgaG90c3BvdHMgdGhhdCBleGlzdCBvbiBmaXJzdCBmcmFtZVxuICAgICAgICBkYXRhLnN0YWdlLmZpbmQoXCIuaG90c3BvdFwiKS5oaWRlKCk7XG4gICAgICAgIGRhdGEuc3RhZ2UuZmluZChcIi5ob3RzcG90LWZyYW1lLTBcIikuZmFkZUluKCk7XG5cbiAgICB9KS5iaW5kKFwib25BbmltYXRpb25TdG9wLnNwcml0ZXNwaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGdldCBkYXRhIGZvciBjdXJyZW50IHN0YXRlXG4gICAgICAgIGRhdGEgPSBhcGkuZGF0YTtcblxuICAgICAgICAvLyBzaG93IGhvdHNwb3RzIG9uIGN1cnJlbnQgZnJhbWVcbiAgICAgICAgaG90c3BvdEVsLmhpZGUoKTtcbiAgICAgICAgZGF0YS5zdGFnZS5maW5kKFwiLmhvdHNwb3QuaG90c3BvdC1mcmFtZS1cIiArIGRhdGEuZnJhbWUpLnN0b3AoZmFsc2UpLmZhZGVJbigpO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0b29sdGlwIG9uIGNsb3NlIGJ0dG5cbiAgICBob3RzcG90RWwub24oJ2NsaWNrJywgJy5ob3RzcG90X190b29sdGlwLWNsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBob3RzcG90RWwucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBzcGlubmVyTW9kdWxlLmZpbmQoJy5qcy1ob3RzcG90cy1saXN0LWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHRvb2x0aXAgb24gaGl0dGluZyB0aGUgRXNjIGtleVxuICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKDI3ID09PSBlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGhvdHNwb3RFbC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICBzcGlubmVyTW9kdWxlLmZpbmQoJy5qcy1ob3RzcG90cy1saXN0LWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEhpZGUgdG9vbHRpcCBvbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoKDAgPT09ICQoZS50YXJnZXQpLmNsb3Nlc3QoJCgnLmhvdHNwb3QnKSkubGVuZ3RoKSAmJiAoMCA9PT0gJChlLnRhcmdldCkuY2xvc2VzdCgkKCcuaG90c3BvdHMtY29udGVudCcpKS5sZW5ndGgpKSB7XG4gICAgICAgICAgICBob3RzcG90RWwucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgc3Bpbm5lck1vZHVsZS5maW5kKCcuanMtaG90c3BvdHMtbGlzdC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLyoqXG4gKiBBZGQgaG90c3BvdHMgbmF2aWdhdGlvblxuICovXG5mdW5jdGlvbiBob3RzcG90c05hdihzcGlubmVyRWxlbSkge1xuICAgIGNvbnN0IHNwaW5uZXJNb2R1bGUgPSBzcGlubmVyRWxlbS5jbG9zZXN0KCcubS1pbWFnZS1zcGlubmVyJyk7XG4gICAgaWYgKCFzcGlubmVyTW9kdWxlLmF0dHIoJ2RhdGEtc3Bpbm5lci1oYXMtaG90c3BvdHMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghc3Bpbm5lck1vZHVsZS5hdHRyKCdkYXRhLWhvdHNwb3RzLWZyYW1lcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoc19mcmFtZXNfbGlzdCA9IHNwaW5uZXJNb2R1bGUuYXR0cignZGF0YS1ob3RzcG90cy1mcmFtZXMnKTtcbiAgICBjb25zdCBoc19mcmFtZXMgPSBoc19mcmFtZXNfbGlzdC5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IGhzQ29udGVudExpc3QgPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5qcy1ob3RzcG90cy1saXN0Jyk7XG4gICAgY29uc3QgaHNDb250ZW50TGlzdEl0ZW0gPSBoc0NvbnRlbnRMaXN0LmZpbmQoJy5qcy1ob3RzcG90cy1saXN0LWl0ZW0nKTtcbiAgICBjb25zdCBob3RzcG90RWwgPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5ob3RzcG90Jyk7XG5cbiAgICBsZXQgYXBpID0gc3Bpbm5lckVsZW0uc3ByaXRlc3BpbignYXBpJyk7XG4gICAgbGV0IGhvdHNwb3RzID0gW107XG4gICAgbGV0IGFjdGl2ZUZyYW1lSW5kZXggPSBhcGkuZGF0YS5mcmFtZTtcbiAgICBsZXQgYWN0aXZlSG90c3BvdCxcbiAgICAgICAgYWN0aXZlSG90c3BvdEluZGV4O1xuXG4gICAgaHNfZnJhbWVzLmZvckVhY2goZnVuY3Rpb24oaHMpIHtcbiAgICAgICAgaG90c3BvdHMucHVzaChwYXJzZUludChocykpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogU2V0IGFjdGl2ZSBob3RzcG90XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlSG90c3BvdChhY3RpdmVIb3RzcG90SW5kZXgsIGRlYWN0aXZhdGVIb3RzcG90KSB7XG4gICAgICAgIC8vIGRlYWN0aXZhdGUgYWxsIGhvdHNwb3RzXG4gICAgICAgIGhvdHNwb3RFbC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGhzQ29udGVudExpc3RJdGVtLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAvLyBpZiB0aGUgaG90c3BvdCBpcyBhbHJlYWR5IGFjdGl2ZSwgY2xvc2UgaXRcbiAgICAgICAgaWYgKGRlYWN0aXZhdGVIb3RzcG90KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIG5ldyBob3RzcG90IGFuZCBpdHMgZnJhbWVcbiAgICAgICAgYWN0aXZlSG90c3BvdCA9IGFwaS5kYXRhLnN0YWdlLmZpbmQoXCIuaG90c3BvdC5ob3RzcG90LWluZGV4LVwiICsgYWN0aXZlSG90c3BvdEluZGV4KTtcblxuICAgICAgICBhY3RpdmVGcmFtZUluZGV4ID0gaG90c3BvdHNbYWN0aXZlSG90c3BvdEluZGV4XTtcblxuICAgICAgICAvLyBpZiB0aGUgbmV3IGhvdHNwb3QgaXMgbm90IHRoZSBzYW1lIGZyYW1lLFxuICAgICAgICAvLyBoaWRlIGFsbCBob3RzcG90cyxcbiAgICAgICAgLy8gYW5kIG5hdmlnYXRlIHNwaW5uZXIgdG8gdGhlIGFjY29yZGluZyBvbmVcbiAgICAgICAgaWYgKGFjdGl2ZUZyYW1lSW5kZXggLSAxICE9PSBhcGkuZGF0YS5mcmFtZSkge1xuICAgICAgICAgICAgaG90c3BvdEVsLmhpZGUoKTtcbiAgICAgICAgICAgIGFwaS5wbGF5VG8oYWN0aXZlRnJhbWVJbmRleCAtIDEsIHsgbmVhcmVzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGl2YXRlIGN1cnJlbnQgaG90c3BvdCBhbmQgaXRzIGNvbnRlbnRcbiAgICAgICAgYWN0aXZlSG90c3BvdC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGhzQ29udGVudExpc3QuZmluZCgnLmhzLWluZGV4LScgKyBhY3RpdmVIb3RzcG90SW5kZXgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHRocm91Z2ggaG90c3BvdHMnIHBpbnNcbiAgICAgKi9cbiAgICBBcnJheS5mcm9tKGhvdHNwb3RFbCkuZm9yRWFjaChocyA9PiB7XG4gICAgICAgICQoaHMpLm9uKCdjbGljaycsICcuanMtaG90c3BvdC1waW4nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSAkKGhzKS5hdHRyKCdkYXRhLWhvdHNwb3QtaW5kZXgnKTtcbiAgICAgICAgICAgIGFjdGl2ZUhvdHNwb3RJbmRleCA9IHBhcnNlSW50KGFjdGl2ZUhvdHNwb3RJbmRleCk7XG5cbiAgICAgICAgICAgIGxldCBkZWFjdGl2YXRlSG90c3BvdCA9ICQoaHMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZUhvdHNwb3QoYWN0aXZlSG90c3BvdEluZGV4LCBkZWFjdGl2YXRlSG90c3BvdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0ZSB0aHJvdWdoIGhvdHNwb3RzJyBjb250ZW50XG4gICAgICovXG4gICAgQXJyYXkuZnJvbShoc0NvbnRlbnRMaXN0SXRlbSkuZm9yRWFjaChkZXQgPT4ge1xuICAgICAgICAkKGRldCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgYWN0aXZlSG90c3BvdEluZGV4ID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhzLWluZGV4Jyk7XG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSBwYXJzZUludChhY3RpdmVIb3RzcG90SW5kZXgpO1xuXG4gICAgICAgICAgICBsZXQgZGVhY3RpdmF0ZUhvdHNwb3QgPSAkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZUhvdHNwb3QoYWN0aXZlSG90c3BvdEluZGV4LCBkZWFjdGl2YXRlSG90c3BvdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAvKipcbiAgICAgKiBQcmV2L05leHQgbmF2aWdhdGlvblxuICAgICAqL1xuICAgIGlmIChzcGlubmVyTW9kdWxlLmF0dHIoJ2RhdGEtY3RybC1ob3RzcG90cy1uYXYnKSkge1xuICAgICAgICBjb25zdCBjdHJsQnR0blByZXZIb3RzcG90ID0gc3Bpbm5lck1vZHVsZS5maW5kKCcuanMtaW1hZ2Utc3Bpbm5lci1ob3RzcG90LXByZXYnKTtcbiAgICAgICAgY29uc3QgY3RybEJ0dG5OZXh0SG90c3BvdCA9IHNwaW5uZXJNb2R1bGUuZmluZCgnLmpzLWltYWdlLXNwaW5uZXItaG90c3BvdC1uZXh0Jyk7XG5cbiAgICAgICAgYWN0aXZlRnJhbWVJbmRleCA9IGFwaS5kYXRhLmZyYW1lO1xuXG4gICAgICAgIGN0cmxCdHRuUHJldkhvdHNwb3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgYWN0aXZlSG90c3BvdCA9IGFwaS5kYXRhLnN0YWdlLmZpbmQoXCIuaG90c3BvdC5pcy1hY3RpdmVcIik7XG5cbiAgICAgICAgICAgIGlmICgwIDwgYWN0aXZlSG90c3BvdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSBhY3RpdmVIb3RzcG90LmF0dHIoJ2RhdGEtaG90c3BvdC1pbmRleCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSBwYXJzZUludChhY3RpdmVIb3RzcG90SW5kZXgpO1xuICAgICAgICAgICAgYWN0aXZlSG90c3BvdEluZGV4LS07XG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSBub3JtYWxpemVJdGVtSW5kZXgoYWN0aXZlSG90c3BvdEluZGV4LCBob3RzcG90cyk7XG5cbiAgICAgICAgICAgIHNldEFjdGl2ZUhvdHNwb3QoYWN0aXZlSG90c3BvdEluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3RybEJ0dG5OZXh0SG90c3BvdC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90ID0gYXBpLmRhdGEuc3RhZ2UuZmluZChcIi5ob3RzcG90LmlzLWFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgaWYgKDAgPCBhY3RpdmVIb3RzcG90Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUhvdHNwb3RJbmRleCA9IGFjdGl2ZUhvdHNwb3QuYXR0cignZGF0YS1ob3RzcG90LWluZGV4Jyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSG90c3BvdEluZGV4ID0gaG90c3BvdHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSBwYXJzZUludChhY3RpdmVIb3RzcG90SW5kZXgpO1xuICAgICAgICAgICAgYWN0aXZlSG90c3BvdEluZGV4Kys7XG4gICAgICAgICAgICBhY3RpdmVIb3RzcG90SW5kZXggPSBub3JtYWxpemVJdGVtSW5kZXgoYWN0aXZlSG90c3BvdEluZGV4LCBob3RzcG90cyk7XG5cbiAgICAgICAgICAgIHNldEFjdGl2ZUhvdHNwb3QoYWN0aXZlSG90c3BvdEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKlxuZnVuY3Rpb24gZ2V0T2JqS2V5KG9iaiwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5maW5kKGtleSA9PiBvYmpba2V5XSA9PT0gdmFsdWUpO1xufVxuKi9cblxuY29uc3QgcmVnaXN0ZXJIb3RTcG90c1BsdWdpbiA9IChsYWJlbCkgPT4ge1xuICAgIFNwcml0ZVNwaW4ucmVnaXN0ZXJQbHVnaW4obGFiZWwsIHtcbiAgICAgICAgb25Mb2FkOiAoZXYpID0+IHtcbiAgICAgICAgICAgIGFzc2lnbkhvdHNwb3RzKCQoZXYudGFyZ2V0KSk7XG4gICAgICAgICAgICBob3RzcG90c05hdigkKGV2LnRhcmdldCkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IHtcbiAgICByZWdpc3RlckhvdFNwb3RzUGx1Z2luXG59IiwiLyoqXG4gKiBJbWFnZSBTcGlubmVyIFBsdWdpbiAtIGRzUHJvZ3Jlc3NGcmFjdGlvblxuICovXG5cbmZ1bmN0aW9uIHByb2dyZXNzRnJhY3Rpb24oc3Bpbm5lckVsZW0pIHtcbiAgICBsZXQgYXBpID0gc3Bpbm5lckVsZW0uc3ByaXRlc3BpbignYXBpJyk7XG4gICAgY29uc3Qgc3Bpbm5lck1vZHVsZSA9IHNwaW5uZXJFbGVtLmNsb3Nlc3QoJy5tLWltYWdlLXNwaW5uZXInKTtcbiAgICBjb25zdCBzcGlubmVyRnJhY3Rpb24gPSBzcGlubmVyTW9kdWxlLmZpbmQoJy5pbWFnZS1zcGlubmVyX19mcmFjdGlvbi1jdXJyZW50Jyk7XG4gICAgbGV0IGRhdGEgPSBhcGkuZGF0YTtcblxuICAgIHNwaW5uZXJFbGVtLmJpbmQoXCJvbkZyYW1lLnNwcml0ZXNwaW5cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRhdGEgPSBhcGkuZGF0YTtcbiAgICAgICAgc3Bpbm5lckZyYWN0aW9uLnRleHQoZGF0YS5mcmFtZSArIDEpO1xuICAgIH0pO1xufVxuXG5jb25zdCByZWdpc3RlclByb2dyZXNzRnJhY3Rpb25QbHVnaW4gPSAobGFiZWwpID0+IHtcbiAgICBTcHJpdGVTcGluLnJlZ2lzdGVyUGx1Z2luKGxhYmVsLCB7XG4gICAgICAgIG9uTG9hZDogKGV2KSA9PiB7XG4gICAgICAgICAgICBwcm9ncmVzc0ZyYWN0aW9uKCQoZXYudGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQge1xuICAgIHJlZ2lzdGVyUHJvZ3Jlc3NGcmFjdGlvblBsdWdpblxufSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gKiBAdGl0bGUgM2QgSW1hZ2UgU3Bpbm5lclxuICogQGRlc2NyaXB0aW9uIEFwcGxpY2F0aW9uIGVudHJ5IHBvaW50XG4gKi9cblxuaW1wb3J0IHsgY2FsbEltYWdlU3Bpbm5lcnMgfSBmcm9tICcuL2Z1bmN0aW9uLWNhbGxzLzNkLW1lZGlhL2ltYWdlLXNwaW5uZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY2FsbEltYWdlU3Bpbm5lcnMoKTtcblxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0ZXJQbGF5YmFja0NvbnRyb2xQbHVnaW4iLCJyZWdpc3RlckZyYW1lc05hdkNvbnRyb2xQbHVnaW4iLCJyZWdpc3Rlclpvb21Db250cm9sUGx1Z2luIiwicmVnaXN0ZXJGdWxsc2NyQ29udHJvbFBsdWdpbiIsInJlZ2lzdGVyUHJvZ3Jlc3NGcmFjdGlvblBsdWdpbiIsInJlZ2lzdGVySG90U3BvdHNQbHVnaW4iLCJpc0RyYWdPbiIsImlzUGxheWJhY2tPbiIsImlzRnJhbWVzTmF2T24iLCJpc1pvb21PbiIsImlzRnVsbFNjcmVlbk9uIiwiaXNGcmFjdGlvbk9uIiwiaXNBbmltYXRlT24iLCJpc0hvdHNwb3RzT24iLCJzcGlubmVyRWxlbU5hbWUiLCJzcGlubmVyTW9kdWxlV3JhcCIsInNwaW5uZXJNb2R1bGVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbEltYWdlU3Bpbm5lcnMiLCJsZW5ndGgiLCJzcGlubmVyT3B0aW9ucyIsImZvckVhY2giLCJzcGlubmVyTW9kdWxlIiwiaSIsImltZ1NwaW5uZXJFbGVtIiwicXVlcnlTZWxlY3RvciIsImltZ1BhdGgiLCJnZXRBdHRyaWJ1dGUiLCJpbWdQcmVmaXgiLCJpbWdEaWdpdHMiLCJpbWdDb3VudCIsImltZ0V4dCIsInNwaW5uZXJJRCIsImNvbmNhdCIsInNldEF0dHJpYnV0ZSIsInNvdXJjZSIsIlNwcml0ZVNwaW4iLCJzb3VyY2VBcnJheSIsImZyYW1lIiwiZGlnaXRzIiwiem9vbVVzZUNsaWNrIiwiem9vbVBpbkZyYW1lIiwic2Vuc2UiLCJyZXNwb25zaXZlIiwiYW5pbWF0ZSIsInNpemVNb2RlIiwicmVuZGVyZXIiLCJwcmVsb2FkQ291bnQiLCJmcmFtZVRpbWUiLCJwbGF5VG9GcmFtZVRpbWUiLCJyZXZlcnNlIiwiZm9yY2VSZXZlcnNlIiwicGx1Z2lucyIsImJvb3RJbWFnZVNwaW5uZXIiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCIkIiwic3ByaXRlc3BpbiIsIm9ic2VydmUiLCJlbGVtIiwiaXNBbmltYXRlIiwiaXNGcmFtZXNOYXYiLCJwdXNoIiwiaXNGdWxsU2NyZWVuIiwiaXNIb3RzcG90cyIsImlzUGxheWJhY2siLCJpc0ZyYWN0aW9uIiwiaXNab29tIiwiaXNEcmFnIiwiZnJhbWVzTmF2Q29udHJvbCIsInNwaW5uZXJFbGVtIiwiYXBpIiwiY2xvc2VzdCIsImhvdHNwb3RFbCIsImZpbmQiLCJoc0NvbnRlbnRMaXN0SXRlbSIsImN0cmxCdHRuUHJldiIsImN0cmxCdHRuTmV4dCIsIm9uIiwiZSIsImRhdGEiLCJwcmV2RnJhbWUiLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJzdGFnZSIsInN0b3AiLCJmYWRlSW4iLCJuZXh0RnJhbWUiLCJsYWJlbCIsInJlZ2lzdGVyUGx1Z2luIiwib25Mb2FkIiwiZXYiLCJmdWxsc2NyQ29udHJvbCIsImN0cmxCdHRuRnVsbFNjciIsInJlcXVlc3RGdWxsc2NyZWVuIiwicGxheWJhY2tDb250cm9sIiwiY3RybEJ0dG5QbGF5IiwidG9nZ2xlQW5pbWF0aW9uIiwiaXNQbGF5aW5nIiwiYWRkQ2xhc3MiLCJ6b29tQ29udHJvbCIsImN0cmxCdHRuWm9vbSIsInRvZ2dsZVpvb20iLCJ0b2dnbGVDbGFzcyIsIm5vcm1hbGl6ZUl0ZW1JbmRleCIsImluZGV4IiwiYXJyIiwiaXRlbUluZGV4IiwiYXNzaWduSG90c3BvdHMiLCJhdHRyIiwiaG90c3BvdHNIVE1MIiwiYmluZCIsInByZXBlbmQiLCJrZXl1cCIsImtleUNvZGUiLCJob3RzcG90c05hdiIsImhzX2ZyYW1lc19saXN0IiwiaHNfZnJhbWVzIiwic3BsaXQiLCJoc0NvbnRlbnRMaXN0IiwiaG90c3BvdHMiLCJhY3RpdmVGcmFtZUluZGV4IiwiYWN0aXZlSG90c3BvdCIsImFjdGl2ZUhvdHNwb3RJbmRleCIsImhzIiwicGFyc2VJbnQiLCJzZXRBY3RpdmVIb3RzcG90IiwiZGVhY3RpdmF0ZUhvdHNwb3QiLCJwbGF5VG8iLCJuZWFyZXN0IiwiQXJyYXkiLCJmcm9tIiwiaGFzQ2xhc3MiLCJkZXQiLCJjdHJsQnR0blByZXZIb3RzcG90IiwiY3RybEJ0dG5OZXh0SG90c3BvdCIsInByb2dyZXNzRnJhY3Rpb24iLCJzcGlubmVyRnJhY3Rpb24iLCJ0ZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=