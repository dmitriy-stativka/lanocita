/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/blog/ds_blog-filter.js":
/*!***********************************************!*\
  !*** ./assets/_src/js/blog/ds_blog-filter.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_loadMoreBlog: function() { return /* binding */ ds_loadMoreBlog; }
/* harmony export */ });
/* harmony import */ var _utils_u_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/u_params */ "./assets/_src/js/utils/u_params.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");

var ds_loadMoreBlog = function ds_loadMoreBlog() {
  (function ($) {
    var DSInitFilter = function DSInitFilter(module) {
      var filter = {
        module: null,
        action: null,
        form: '',
        moreBtn: $(),
        results: null,
        doing_ajax: null,
        timeout: null,
        query: {
          post_type: null,
          per_page: 9,
          page: 1,
          main_taxonomy: null
        },
        component_styles: {},
        page_num: 1,
        ajax_url: ds.ajax_url,
        page_get_parameter_enable: false,
        preloader: '<div class="filter-loader loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><div class="loader-bg"></div></div>',
        init: function init(module) {
          var ajaxModule = $(module);
          var initialPageNumber = (0,_utils_u_params__WEBPACK_IMPORTED_MODULE_0__.u_getParameterByName)('page_num');
          if (ajaxModule) {
            filter.module = ajaxModule;
            filter.action = ajaxModule.data('action');
            filter.query.page = initialPageNumber !== '' ? parseInt(initialPageNumber) : 1;
            filter.query.post_type = ajaxModule.data('post-type');
            filter.query.posts_per_page = ajaxModule.data('per-page');
            filter.query.main_taxonomy = ajaxModule.data('main-taxonomy');
            filter.page_get_parameter_enable = ajaxModule.data('page-parameter') === true;
            filter.initElementsActions();
          }
        },
        initElementsActions: function initElementsActions() {
          var results = filter.module.find('div[data-container="ajax-result"]');
          if (results) {
            filter.results = results;
            var moreBtn = filter.module.find('.ajax-load-more');
            if (moreBtn) {
              filter.moreBtn = moreBtn;
              filter.morePosts();
            }
            var form = filter.module.find('form[data-form="ajax"]');
            if (form) {
              filter.form = form;
              filter.changeForm();
            }
          }
          var compClass = filter.module.data('class');
          if (compClass) {
            filter.component_styles.class = compClass;
          }
          var compStyles = filter.module.data('styles');
          if (compStyles) {
            filter.component_styles.styles = compStyles;
          }
          var compImage = filter.module.data('image');
          if (compImage) {
            filter.component_styles.image = compImage;
          }
        },
        morePosts: function morePosts() {
          filter.moreBtn.on('click', function (e) {
            e.preventDefault();
            filter.sendAjax(filter.query.page, true, true);
          });
        },
        changeForm: function changeForm() {
          var $input_text = filter.form.find('input[type="text"], textarea');
          $input_text.unbind('keyup');
          $input_text.not('[data-ajax="false"]').keyup(function (e) {
            if (e.keyCode === 13) {
              return;
            }
            if (filter.timeout != null) {
              clearTimeout(filter.timeout);
            }
            filter.timeout = setTimeout(function () {
              filter.timeout = null;
              filter.sendAjax();
              $input_submit.parent().addClass('is-filter-active');
            }, 500);
          });
          var $input_submit = filter.form.find('button[type="submit"]');
          $input_submit.unbind('click');
          $input_submit.not('[data-ajax="false"]').click(function (e) {
            e.preventDefault();
            filter.sendAjax();
            $input_submit.parent().addClass('is-filter-active');
          });
          var $select = filter.form.find('select');
          $select.unbind('change');
          $select.not('[data-ajax="false"]').change(function () {
            filter.sendAjax();
          });
          $select.filter('[data-target="input"]').change(function (e) {
            var $currentItem = $(e.target);
            var $inputTarget = filter.form.find("input.".concat($currentItem.data('target-name')));
            if ($inputTarget) {
              var $selectedOption = $currentItem.find('option:selected');
              $inputTarget.val($selectedOption.val());
              $inputTarget.data('push-url', $selectedOption.data('term-url'));
              filter.sendAjax();
            }
          });
          $select.filter('[data-target="ul"]').change(function (e) {
            var $currentItem = $(e.target);
            filter.form.find("ul.".concat($currentItem.data('target-name'))).find("li a[data-term-slug=\"".concat($currentItem.find('option:selected').val(), "\"]")).trigger('click');
            filter.sendAjax();
          });
          var $list = filter.form.find('ul[data-ajax-push-url="true"]').first();
          $list.unbind('change');
          $list.find('li a').click(function (e) {
            e.preventDefault();
            $list.find('li a').removeClass('active_term');
            var $activeTerm = $(e.target);
            $activeTerm.addClass('active_term');
            var $inputTarget = filter.form.find("input.".concat($list.data('target-name')));
            if ($inputTarget) {
              var _filter$form$find;
              $inputTarget.val($activeTerm.data('term-slug'));
              $inputTarget.data('push-url', $activeTerm.attr('href'));
              (_filter$form$find = filter.form.find("select.".concat($list.data('target-name'), " option[value=\"").concat($activeTerm.data('term-slug'), "\"]"))) === null || _filter$form$find === void 0 || _filter$form$find.prop('selected', true);
              filter.sendAjax();
            }
          });
          filter.form.unbind('keydown');
          filter.form.on('ds_trigger_browser_button_used', function (event) {
            event.preventDefault();
            filter.sendAjax(0, false, false, true);
          });
        },
        sendAjax: function sendAjax() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var push_state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var load_more_used = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var browser_button_used = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          if (filter.doing_ajax != null) {
            filter.doing_ajax.abort();
            filter.doing_ajax = null;
            filter.module.find('.loader').remove();
          }
          var data = {
            action: filter.action,
            query: {
              post_type: filter.query.post_type,
              posts_per_page: filter.query.posts_per_page,
              paged: page
            },
            main_taxonomy: filter.query.main_taxonomy,
            component: filter.component_styles,
            device: $(window).width() <= 768 ? 'mobile' : 'desktop',
            browser_button_used: browser_button_used
          };
          if (filter.form.length > 0) {
            data.form = filter.form.serialize();
          }
          if (push_state) {
            filter.build_url(data.query.paged, load_more_used);
          }
          if (filter.page_get_parameter_enable) {
            var _u_getParameterByName;
            page = (_u_getParameterByName = (0,_utils_u_params__WEBPACK_IMPORTED_MODULE_0__.u_getParameterByName)('page_num')) !== null && _u_getParameterByName !== void 0 ? _u_getParameterByName : data.query.paged;
            data.query.paged = page;
          }
          filter.doing_ajax = $.ajax({
            url: filter.ajax_url,
            type: 'POST',
            data: data,
            beforeSend: function beforeSend(xhr) {
              filter.module.append(filter.preloader);
            },
            success: function success(data) {
              if (data) {
                var _u_getParameterByName2;
                if (data.page == 1 || data.page == 0) filter.results.html('');
                filter.results.append(data.posts);
                if (data.max_pages === data.page) {
                  filter.moreBtn.hide();
                } else {
                  filter.moreBtn.show();
                }
                if (data.total_posts_showing === 0) {
                  filter.module.find('.js-blog-counter-wrapper').hide();
                } else {
                  filter.module.find('.js-blog-counter-wrapper').show();
                }
                if (data.total_posts_showing) {
                  filter.module.find('.js-blog-counter-showing').text(data.total_posts_showing);
                  filter.module.find('.js-total-items-shown').val(data.total_posts_showing);
                }
                if (data.total_posts) {
                  filter.module.find('.js-blog-counter-total').text(data.total_posts);
                }
                page = (_u_getParameterByName2 = (0,_utils_u_params__WEBPACK_IMPORTED_MODULE_0__.u_getParameterByName)('page_num')) !== null && _u_getParameterByName2 !== void 0 ? _u_getParameterByName2 : data.query.paged;
                page = filter.page_get_parameter_enable ? page : parseInt(data.page);
                filter.query.page = page;
                filter.module.find('.js-page-num').val(page);
                filter.moreBtn.attr('data-page', data.page);
                filter.module.find('.loader').remove();
              } else {
                filter.moreBtn.hide();
              }
              filter.doing_ajax = null;
            }
          });
        },
        build_url: function build_url() {
          var _filter$form$find$fir;
          var paged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var push_page_num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var url_parse_side = window.location.href.split("?");
          var url = new URL(url_parse_side[0]);
          var oldUrl = new URL(window.history.state && window.history.state.path ? window.history.state.path : window.location.href);
          var push_state = false;
          var inputPushUrl = (_filter$form$find$fir = filter.form.find('input[data-push-url]').first().data('push-url')) !== null && _filter$form$find$fir !== void 0 ? _filter$form$find$fir : '';
          if (inputPushUrl !== '') {
            push_state = true;
            url.href = inputPushUrl;
          }
          if (push_page_num) {
            url.searchParams.set('page_num', (isNaN(parseInt(filter.query.page)) ? 1 : parseInt(filter.query.page)) + 1);
            push_state = true;
          } else {
            url.searchParams.delete('page_num');
          }
          filter.form.find('input[type=text]:not([data-ajax="false"])').each(function () {
            push_state = true;
            if (jQuery(this).val().length > 0) {
              url.searchParams.set(jQuery(this).attr('name'), jQuery(this).val());
            }
          });
          filter.form.find('select:not([data-ajax="false"])').each(function () {
            push_state = true;
            if (jQuery(this).find('option:selected').val().length > 0) {
              url.searchParams.set(jQuery(this).attr('name'), jQuery(this).find('option:selected').val());
            }
          });
          var decoded_url = decodeURIComponent(url);
          if (push_state && (oldUrl.searchParams.toString() !== url.searchParams.toString() || oldUrl.href !== url.href)) {
            window.history.pushState({
              'path': decoded_url,
              'ds_trigger_filter': true,
              paged: paged
            }, null, decoded_url);
          }
        }
      };
      filter.init(module);
    };
    var doInit = function doInit() {
      $('.js-ajax-block').each(function (i) {
        DSInitFilter($('.js-ajax-block')[i]);
      });
    };
    doInit();
    addEventListener('popstate', function (event) {
      $('.js-ajax-block').each(function (i, item) {
        reInitFilter(item);
      });
    });
  })(jQuery);
};
var reInitFilter = function reInitFilter(filter) {
  var parsedUrl = window.location.href.split("?");
  var currentUrl = new URL(window.location.href.toString());
  var cleanedUrl = new URL(parsedUrl[0]);
  var params = currentUrl.searchParams;
  var triggerChange = false;
  var form = $(filter).find('form[data-form="ajax"]');
  var $pageNum = form.find('.js-page-num');
  if ($pageNum.length > 0) {
    var _params$get;
    $pageNum.val((_params$get = params.get('page_num')) !== null && _params$get !== void 0 ? _params$get : 1);
    triggerChange = true;
  }
  form.find('input[type=text]:not([data-ajax="false"])').each(function (index, elem) {
    var _params$get2;
    var $this = $(elem);
    $this.val((_params$get2 = params.get($this.attr('name'))) !== null && _params$get2 !== void 0 ? _params$get2 : '');
    triggerChange = true;
  });
  form.find('select:not([data-ajax="false"])').each(function (index, elem) {
    var _params$get3;
    var $this = $(elem);
    var value = (_params$get3 = params.get($this.attr('name'))) !== null && _params$get3 !== void 0 ? _params$get3 : '';
    if (value !== '') {
      $this.find("option[value=".concat(value, "]")).prop('selected', true);
    } else {
      $this.find('option:eq(0)').prop('selected', true);
    }
    triggerChange = true;
  });
  form.find('ul[data-ajax-push-url="true"]:first li a').each(function (index, elem) {
    var $this = $(elem);
    if ($this.attr('href') === cleanedUrl.href && !$this.hasClass('active_term')) {
      $this.trigger('click');
      triggerChange = true;
    }
  });
  form.find('select[data-target="input"]').each(function (index, elem) {
    var $this = $(elem);
    var selectedOption = $this.find('option:selected');
    var $inputTarget = form.find("input.".concat($this.data('target-name')));
    if (selectedOption.data('term-url') !== cleanedUrl.href) {
      $this.find("option[data-term-url=\"".concat(cleanedUrl.href, "\"]")).prop('selected', true);
      var $newSelectedOption = $this.find('option:selected');
      $inputTarget.val($newSelectedOption.val());
      $inputTarget.data('push-url', $newSelectedOption.data('term-url'));
      triggerChange = true;
    }
  });
  if (triggerChange) {
    form.trigger('ds_trigger_browser_button_used');
  }
};


/***/ }),

/***/ "./assets/_src/js/function-calls/tinymce-read-more/ds_readMore.js":
/*!************************************************************************!*\
  !*** ./assets/_src/js/function-calls/tinymce-read-more/ds_readMore.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_readMore: function() { return /* binding */ ds_readMore; }
/* harmony export */ });
var ds_readMore = function ds_readMore() {
  var readMoreWrappers = document.querySelectorAll('.read-more-wrapper');
  readMoreWrappers.forEach(function (readMoreWrapper) {
    var readMoreBtn = readMoreWrapper.querySelector('.js-read-more-toggle');
    var btnTextNoActive = readMoreBtn.getAttribute('data-show-less-text');
    var btnTextActive = readMoreBtn.children[0].textContent;
    var readMoreText = readMoreWrapper.querySelector('.read-more-text');
    readMoreBtn.addEventListener('click', function () {
      var isActive = readMoreWrapper.classList.contains('is-active');
      var readMoreTextHeight = readMoreText.scrollHeight;
      if (isActive) {
        readMoreWrapper.classList.remove('is-active');
        readMoreBtn.children[0].textContent = btnTextActive;
        readMoreText.style.maxHeight = 0;
      } else {
        readMoreWrapper.classList.add('is-active');
        readMoreBtn.children[0].textContent = btnTextNoActive;
        readMoreText.style.maxHeight = "".concat(readMoreTextHeight, "px");
      }
    });
  });
};


/***/ }),

/***/ "./assets/_src/js/header/ds_headerMenuToggle.js":
/*!******************************************************!*\
  !*** ./assets/_src/js/header/ds_headerMenuToggle.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_headerMenuToggle: function() { return /* binding */ ds_headerMenuToggle; }
/* harmony export */ });
/* harmony import */ var _utils_u_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/u-menu */ "./assets/_src/js/header/utils/u-menu.js");


/**
 * Toggle mobile nav on click.
 * Toggle desktop burger menu on click.
 *
 * @param {string} el - selector for adding an active class
 */

var ds_headerMenuToggle = function ds_headerMenuToggle(el) {
  if (document.querySelector(el)) {
    var btn = document.querySelector(el);
    var body = document.querySelector('body');
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      if (btn.getAttribute('aria-expanded') === 'false') {
        (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.openMobileMenu)(btn, body);
      } else {
        (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.closeMobileMenu)(btn, body);
      }
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/header/ds_headerMobileSwipeUp.js":
/*!*********************************************************!*\
  !*** ./assets/_src/js/header/ds_headerMobileSwipeUp.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_headerMobileSwipeUp: function() { return /* binding */ ds_headerMobileSwipeUp; }
/* harmony export */ });
/* harmony import */ var _utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/u_is-touch-device */ "./assets/_src/js/utils/u_is-touch-device.js");
/* harmony import */ var _utils_u_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/u-menu */ "./assets/_src/js/header/utils/u-menu.js");



/**
 * Mobile menu swipe up menu close
 */

var ds_headerMobileSwipeUp = function ds_headerMobileSwipeUp(el) {
  var mobileNav = document.querySelector('.navbar-mobile__inner');
  if (!mobileNav) return;
  var btn = document.querySelector(el);
  var body = document.querySelector('body');
  var xDown = null;
  var yDown = null;
  var touch = (0,_utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__.u_isTouchDevice)();
  if (touch) {
    var isScrollableY = function isScrollableY(element) {
      return element.scrollHeight > element.offsetHeight;
    };
    var handleTouchMove = function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          /* left swipe */
        } else {
          /* right swipe */
        }
      } else if (yDiff > 0) {
        /* up swipe */
        if (!isScrollableY(mobileNav)) {
          (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_1__.closeMobileMenu)(btn, body);
        }
      } else {
        /* down swipe */
      }
      /* reset values */
      xDown = null;
      yDown = null;
    };
    var handleTouchStart = function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    };
    mobileNav.addEventListener('touchmove', function (e) {
      handleTouchMove(e);
      mobileNav.removeEventListener('touchstart', function () {}, {
        once: true
      });
    }, false);
    mobileNav.addEventListener('touchstart', function (e) {
      handleTouchStart(e);
      mobileNav.removeEventListener('touchmove', function () {}, {
        once: true
      });
    }, false);
  }
};


/***/ }),

/***/ "./assets/_src/js/header/ds_headerSearch.js":
/*!**************************************************!*\
  !*** ./assets/_src/js/header/ds_headerSearch.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_headerSearch: function() { return /* binding */ ds_headerSearch; }
/* harmony export */ });
/* harmony import */ var _utils_u_show_hide_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/u_show-hide-display */ "./assets/_src/js/utils/u_show-hide-display.js");
/**
 * Search Overlay
 */

var ds_headerSearch = function ds_headerSearch() {
  var target = document.querySelector('[data-js="search-target"]');

  // When Search Overlay exists
  if (target) {
    var input = target.querySelector('.search-field');
    var showOverlay = function showOverlay() {
      (0,_utils_u_show_hide_display__WEBPACK_IMPORTED_MODULE_0__.u_showElem)(target);
      input.focus();
      document.body.classList.add('ds-overlay-search');
    };
    var closeOverlay = function closeOverlay() {
      (0,_utils_u_show_hide_display__WEBPACK_IMPORTED_MODULE_0__.u_hideElem)(target);
      document.body.classList.add('ds-overlay-search');
    };
    document.addEventListener('click', function (e) {
      // Trigger submit when opened
      if (e.target.matches('[data-js="search-trigger"]') && target.classList.contains('is-shown')) {
        input.click();
      }

      // Open an overlay
      if (e.target.matches('[data-js="search-trigger"]')) {
        e.preventDefault();
        showOverlay();
      }

      // Close an overlay
      if (e.target.matches('[data-js="search-close"]')) {
        e.preventDefault();
        closeOverlay();
      }
    }, false);
    document.addEventListener('keydown', function (e) {
      // Check if the search overlay is opened
      if (document.body.classList.contains('ds-overlay-search')) {
        // Close an overlay on Escape key click
        if (e.key === 'Escape' || e.keyCode === 27) {
          closeOverlay();
        }
      }
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/header/ds_headerSticky.js":
/*!**************************************************!*\
  !*** ./assets/_src/js/header/ds_headerSticky.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_headerSticky: function() { return /* binding */ ds_headerSticky; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./assets/_src/js/utils/utils.js");
/**
 * Add class on scroll for sticky header
 * @param {string} el - selector for adding an active class
 * @param {string} elClass - active class
 */


var ds_headerSticky = function ds_headerSticky(el, elClass) {
  var $$header = document.querySelector(el);
  var elHeight = parseInt($$header.offsetHeight / 2, 10);
  var offset = parseInt(elHeight / 5, 10);
  var onScroll = function onScroll() {
    if (window.pageYOffset > elHeight + offset) {
      $$header.classList.add(elClass);
    } else if (window.pageYOffset < elHeight - offset) {
      $$header.classList.remove(elClass);
    }
  };
  var throttleScroll = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_throttled)(function () {
    onScroll();
  }, 30);
  window.addEventListener('scroll', function () {
    throttleScroll();
  });
  if (window.pageYOffset > elHeight + offset) {
    $$header.classList.add(elClass);
  }
};


/***/ }),

/***/ "./assets/_src/js/header/ds_menuSubMenuToggle.js":
/*!*******************************************************!*\
  !*** ./assets/_src/js/header/ds_menuSubMenuToggle.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_headerMenuSubMenuToggle: function() { return /* binding */ ds_headerMenuSubMenuToggle; }
/* harmony export */ });
/* harmony import */ var _utils_u_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/u-menu */ "./assets/_src/js/header/utils/u-menu.js");
/**
 * Submenu toggle for Mobile Menu and Desktop Burger menu
 *
 * @param {string} el - selector for adding an active class
 * @param {string} closeEl - selector for closing all submenu items
 */


var ds_headerMenuSubMenuToggle = function ds_headerMenuSubMenuToggle(el, closeEl) {
  var ele = document.querySelector(el);
  if (!ele) return;
  var closeEle = document.querySelector(closeEl);
  var toggleButtons = ele.querySelectorAll('.js-sub-menu-toggle');
  toggleButtons.forEach(function (toggleButton) {
    var toggleContent = toggleButton.nextElementSibling;
    var toggleButtonMenuItem = toggleButton.parentElement;
    (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.closeSubMenu)(toggleButton, toggleButtonMenuItem, toggleContent);
    toggleButton.addEventListener('click', function () {
      var isToggled = toggleButton.className.includes('is-toggled');
      (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.closeSubMenu)(toggleButton, toggleButtonMenuItem, toggleContent);
      (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.checkChildSubMenu)(toggleButton);
      if (!isToggled) {
        (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.openSubMenu)(toggleButton, toggleButtonMenuItem, toggleContent);
      }
    });
  });
  if (closeEle) {
    closeEle.addEventListener('click', function () {
      toggleButtons.forEach(function (toggleButton) {
        var toggleContent = toggleButton.nextElementSibling;
        var toggleButtonMenuItem = toggleButton.parentElement;
        (0,_utils_u_menu__WEBPACK_IMPORTED_MODULE_0__.closeSubMenu)(toggleButton, toggleButtonMenuItem, toggleContent);
      });
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/header/utils/u-menu.js":
/*!***********************************************!*\
  !*** ./assets/_src/js/header/utils/u-menu.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkChildSubMenu: function() { return /* binding */ checkChildSubMenu; },
/* harmony export */   closeMobileMenu: function() { return /* binding */ closeMobileMenu; },
/* harmony export */   closeSubMenu: function() { return /* binding */ closeSubMenu; },
/* harmony export */   openMobileMenu: function() { return /* binding */ openMobileMenu; },
/* harmony export */   openSubMenu: function() { return /* binding */ openSubMenu; }
/* harmony export */ });
// Open mobile menu
var openMobileMenu = function openMobileMenu(btn, body) {
  btn.classList.add('is-active');
  body.classList.add('nav-active');
  btn.setAttribute('aria-expanded', 'true');
};

// Close mobile menu
var closeMobileMenu = function closeMobileMenu(btn, body) {
  btn.classList.remove('is-active');
  body.classList.remove('nav-active');
  btn.setAttribute('aria-expanded', 'false');
};

// Show submenu items
var showHideSubItem = function showHideSubItem(subItem, type, ariaAttr) {
  if (subItem) {
    subItem.classList[type]('is-visible');
    // eslint-disable-next-line no-param-reassign
    subItem.ariaExpanded = [ariaAttr];
    // subItem.style.height = `${ height }px`;
  }
};

// Open submenu
var openSubMenu = function openSubMenu(item, itemParent, itemMenu) {
  item.classList.add('is-toggled');
  itemParent.classList.add('is-opened');
  showHideSubItem(itemMenu, 'add', 'true');
};

// Close submenu
var closeSubMenu = function closeSubMenu(item, itemParent, itemMenu) {
  item.classList.remove('is-toggled');
  itemParent.classList.remove('is-opened');
  showHideSubItem(itemMenu, 'remove', 'false');
};

// Check for submenu items
var checkChildSubMenu = function checkChildSubMenu(item) {
  var toggleInnerButton = Array.from(item.nextElementSibling.getElementsByClassName('js-sub-menu-toggle'));
  if (toggleInnerButton) {
    toggleInnerButton.forEach(function (innerItem) {
      var childSubMenu = innerItem.nextElementSibling;
      if (childSubMenu.ariaExpanded === 'true') {
        childSubMenu.ariaExpanded = 'false';
      } else if (childSubMenu.classList.contains('is-visible')) {
        childSubMenu.ariaExpanded = 'true';
      }
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/library/collapsers/ds_collapse.js":
/*!**********************************************************!*\
  !*** ./assets/_src/js/library/collapsers/ds_collapse.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_collapse: function() { return /* binding */ ds_collapse; }
/* harmony export */ });
/**
 * Collapse
 *
 * https://medium.com/dailyjs/mimicking-bootstraps-collapse-with-vanilla-javascript-b3bb389040e7
 */

var ds_collapse = function ds_collapse() {
  // Handler that uses various data-* attributes to trigger
  // specific actions, mimicing bootstraps attributes
  var triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
  window.addEventListener('click', function (event) {
    var element = event.target;
    if (triggers.includes(element)) {
      event.preventDefault();
      var selector = element.getAttribute('data-target');
      var selectorTextClosed = element.getAttribute('data-text-closed');
      var selectorTextOpened = element.getAttribute('data-text-opened');
      collapse(selector, 'toggle');
      if (event.target.classList.contains('collapse-trigger--opened')) {
        event.target.classList.remove('collapse-trigger--opened');
        event.target.innerHTML = selectorTextClosed;
      } else {
        event.target.classList.add('collapse-trigger--opened');
        event.target.innerHTML = selectorTextOpened;
      }
    }
  }, false);
  var fnmap = {
    toggle: 'toggle',
    show: 'add',
    hide: 'remove'
  };
  var collapse = function collapse(selector, cmd) {
    var targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(function (target) {
      target.classList[fnmap[cmd]]('is-show');
    });
  };
};


/***/ }),

/***/ "./assets/_src/js/library/collapsers/ds_toggleElement.js":
/*!***************************************************************!*\
  !*** ./assets/_src/js/library/collapsers/ds_toggleElement.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_toggleElement: function() { return /* binding */ ds_toggleElement; }
/* harmony export */ });
/* harmony import */ var _utils_u_show_hide_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/u_show-hide-display */ "./assets/_src/js/utils/u_show-hide-display.js");
/**
 * Toggle element on click
 *
 * https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/
 */

var ds_toggleElement = function ds_toggleElement() {
  document.addEventListener('click', function (e) {
    if (e.target.matches('[data-js="toggle-element"]')) {
      e.preventDefault();

      // Get the content
      var content = document.querySelector(e.target.hash);
      if (!content) return;

      // Toggle the content
      (0,_utils_u_show_hide_display__WEBPACK_IMPORTED_MODULE_0__.u_toggleElem)(content);
    }
  }, false);
};


/***/ }),

/***/ "./assets/_src/js/library/media-controls/media-control.js":
/*!****************************************************************!*\
  !*** ./assets/_src/js/library/media-controls/media-control.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/u_object_extend */ "./assets/_src/js/utils/u_object_extend.js");
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

var DSMPMediaControls = /*#__PURE__*/function () {
  function DSMPMediaControls(options) {
    _classCallCheck(this, DSMPMediaControls);
    this.defaults = {
      selector: '.js-video-init',
      wrapper: 'js-video-wrap',
      buttons: {
        play: '.btn-play',
        mute: '.btn-mute',
        close: '.btn-close'
      },
      classes: {
        pause: 'is-pause',
        playing: 'is-playing',
        sound: 'is-sound',
        mute: 'is-muted',
        parentPlay: 'is-video-playing',
        parentPause: 'is-video-paused',
        triggerAutoplay: 'js-trigger-autoplay'
      },
      controls: false
    };
    this.config = (0,_utils_u_object_extend__WEBPACK_IMPORTED_MODULE_0__.u_extendObject)(this.defaults, options);
    this.items = document.querySelectorAll(this.config.selector);
    this.init();
  }
  _createClass(DSMPMediaControls, [{
    key: "init",
    value: function init() {
      var self = this;
      self.bindTogglePlay = this.togglePlay.bind(this);
      self.bindToggleMute = this.toggleMute.bind(this);
      self.bindEndedVideo = this.endedVideo.bind(this);
      _toConsumableArray(self.items).forEach(function (video) {
        if (!self.config.controls) {
          video.controls = false;
        }
        var videoContainer = video.parentElement;
        videoContainer.classList.add(self.config.wrapper);
        var btnPlay = videoContainer.querySelector(self.config.buttons.play);
        var btnMute = videoContainer.querySelector(self.config.buttons.mute);

        // bind events to buttons

        if (btnPlay) {
          btnPlay.addEventListener('click', self.bindTogglePlay);
        }
        if (btnMute) {
          btnMute.addEventListener('click', self.bindToggleMute);
        }

        // bind event to video itself
        video.addEventListener('ended', self.bindEndedVideo, false);
        if (video.classList.contains(self.config.classes.triggerAutoplay)) {
          self.startPlay(video);
        }
      });
    }
  }, {
    key: "endedVideo",
    value: function endedVideo(ev) {
      var self = this;
      var video = ev.currentTarget;
      var parentWrap = video.closest('.' + self.config.wrapper);
      var btnPlay = parentWrap.querySelector(self.config.buttons.play);
      video.pause();
      video.currentTime = 0;
      btnPlay.classList.add(self.config.classes.pause);
      btnPlay.classList.remove(self.config.classes.playing);
      parentWrap.classList.remove(self.config.classes.parentPlay);
    }
  }, {
    key: "togglePlay",
    value: function togglePlay(ev) {
      var self = this;
      var elem = ev.currentTarget;
      var parentWrap = elem.closest('.' + self.config.wrapper);
      var video = parentWrap.querySelector(self.config.selector);
      if (video.paused || video.ended) {
        elem.classList.add(self.config.classes.playing);
        parentWrap.classList.add(self.config.classes.parentPlay);
        parentWrap.classList.remove(self.config.classes.parentPause);
        elem.classList.remove(self.config.classes.pause);
        video.play();
      } else {
        elem.classList.add(self.config.classes.pause);
        parentWrap.classList.add(self.config.classes.parentPause);
        parentWrap.classList.remove(self.config.classes.parentPlay);
        elem.classList.remove(self.config.classes.playing);
        video.pause();
      }
    }
  }, {
    key: "toggleMute",
    value: function toggleMute(ev) {
      var self = this;
      var elem = ev.currentTarget;
      var parentWrap = elem.closest('.' + self.config.wrapper);
      var video = parentWrap.querySelector(self.config.selector);
      video.muted = !video.muted;
      if (video.muted) {
        elem.classList.add(self.config.classes.mute);
        elem.classList.remove(self.config.classes.sound);
      } else {
        elem.classList.add(self.config.classes.sound);
        elem.classList.remove(self.config.classes.mute);
      }
    }
  }, {
    key: "stopPlay",
    value: function stopPlay(elem) {
      var self = this;
      var video = elem;
      var videoContainer = video.parentElement;
      var btnPlay = videoContainer.querySelector(self.config.buttons.play);
      if (!video.paused || !video.ended) {
        btnPlay.classList.add(self.config.classes.pause);
        // vTag.parentElement.classList.add('is-video-paused');
        btnPlay.classList.remove(self.config.classes.playing);
        video.pause();
      }
    }
  }, {
    key: "startPlay",
    value: function startPlay(elem) {
      var self = this;
      var video = elem;
      var videoContainer = video.parentElement;
      var btnPlay = videoContainer.querySelector(self.config.buttons.play);
      if (video.paused || video.ended) {
        btnPlay.classList.add(self.config.classes.playing);
        /*vTag.parentElement.classList.add('is-video-playing');
        vTag.parentElement.classList.remove('is-video-paused');*/
        btnPlay.classList.remove(self.config.classes.pause);
        video.play();
      }
    }
  }]);
  return DSMPMediaControls;
}();
/* harmony default export */ __webpack_exports__["default"] = (DSMPMediaControls);

/***/ }),

/***/ "./assets/_src/js/utils/u_io-anim-observer.js":
/*!****************************************************!*\
  !*** ./assets/_src/js/utils/u_io-anim-observer.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var addObserver = function addObserver(el, params) {
  if (!('IntersectionObserver' in window)) {
    el.classList.add(params.className);
    if (params.cb) {
      params.cb(el);
    }
    return;
  }
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add(params.className);
        // console.log(`${ Math.round(entry.intersectionRatio * 100) }%`);
        if (params.cb) {
          params.cb(entry);
        }
        if (params.repeat !== 'true') {
          observer.unobserve(entry.target);
        }
      } else if (params.repeat === 'true') {
        entry.target.classList.remove(params.className);
      }
    });
  }, {
    root: null,
    rootMargin: params.margin,
    threshold: params.threshold
  });
  observer.observe(el);
};
/* harmony default export */ __webpack_exports__["default"] = (addObserver);

/***/ }),

/***/ "./assets/_src/js/utils/u_io-anim.js":
/*!*******************************************!*\
  !*** ./assets/_src/js/utils/u_io-anim.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./assets/_src/js/utils/utils.js");
/* harmony import */ var _u_io_anim_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u_io-anim-observer */ "./assets/_src/js/utils/u_io-anim-observer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Enable by toggling option in module ADVANCED SETTINGS/EFFECT in wp-admin page.
 * Module has the following options:
 *
 * ENABLED (ON/OFF):
 * Triggers IntersectionObserver on module.
 * Link: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 *
 * REPEATABLE (ON/OFF):
 * Check if the animation is repeated each time modules enters viewport.
 *
 * EFFECT (SELECT OPTION):
 * Chooses from one of predefined animation effects.
 * You can also do a custom CSS animation by adding custom class and animation it in CSS.
 *
 * Basic CSS animations:
 * Location: wp-content/themes/digitalexpress/assets/_src/sass/visuals/animate/_a-viewport.scss
 *
 * Custom CSS animations:
 * Location: wp-content/themes/digitalexpress/assets/_src/sass/project-custom/_custom__animations.scss
 *
 * THRESHOLD (STEPS SLIDER):
 * Specifies 'threshold' of the element:
 * Link: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds
 *
 * MARGIN (INPUT FIELD):
 * Specifies 'rootMargin' of the element:
 * Link: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
 *
 * Custom overrides can be added.
 * Callback function can be triggered when elements enters viewport.
 *
 * Example usage on a custom element:
 * new DSMPViewAnim({
 *         selector: '.custom-selector',
 *         class: '.custom-animation-class',
 *         repeat: 'true',
 *         threshold: '0',
 *         margin: '0px 0px -10% 0px',
 *         // Callback function when element is intersecting
 *         callback: () => {
 *             console.log('callback function');
 *       },
 *  });
 */



var DSMPViewAnim = /*#__PURE__*/function () {
  function DSMPViewAnim(options) {
    _classCallCheck(this, DSMPViewAnim);
    this.config = {
      selector: '[data-viewport="true"]',
      repeat: 'false',
      class: 'in-view',
      threshold: 0,
      margin: '0px 0px 0px 0px',
      callback: function callback() {}
    };
    this.configOptions = _objectSpread(_objectSpread({}, this.config), options || {});
    this.triggers = document.querySelectorAll(this.configOptions.selector);
    this.inViewport();
    this.ioBindEvents();
  }
  _createClass(DSMPViewAnim, [{
    key: "inViewport",
    value: function inViewport() {
      var _this = this;
      this.triggers.forEach(function (trigger) {
        var attr = {
          repeat: trigger.dataset.viewportRepeat,
          threshold: trigger.dataset.viewportThreshold,
          margin: trigger.dataset.viewportMargin
        };
        var _this$configOptions = _this.configOptions,
          className = _this$configOptions.class,
          repeat = _this$configOptions.repeat,
          threshold = _this$configOptions.threshold,
          margin = _this$configOptions.margin,
          callback = _this$configOptions.callback;
        var attrRepeat = attr.repeat,
          attrThreshold = attr.threshold,
          attrMargin = attr.margin;
        (0,_u_io_anim_observer__WEBPACK_IMPORTED_MODULE_1__["default"])(trigger, {
          className: className,
          repeat: attrRepeat || repeat,
          threshold: attrThreshold || threshold,
          margin: attrMargin || margin,
          cb: callback
        });
      });
    }
  }, {
    key: "ioBindEvents",
    value: function ioBindEvents() {
      var _this2 = this;
      var throttleInView = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.u_throttled)(function () {
        _this2.inViewport();
      }, 30);

      // document.addEventListener('scroll', throttleInView, { passive: true });
      document.addEventListener('resize', throttleInView, {
        passive: true
      });
      document.addEventListener('orientationchange', throttleInView, {
        passive: true
      });
    }
  }]);
  return DSMPViewAnim;
}();
/* harmony default export */ __webpack_exports__["default"] = (DSMPViewAnim);

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

/***/ "./assets/_src/js/utils/u_params.js":
/*!******************************************!*\
  !*** ./assets/_src/js/utils/u_params.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_getParameterByName: function() { return /* binding */ u_getParameterByName; }
/* harmony export */ });
// Parse the URL
var u_getParameterByName = function u_getParameterByName(name) {
  var queryString = window.location.search || window.location.hash.split('?')[1];
  if (queryString) {
    var urlParams = new URLSearchParams(queryString);
    var value = urlParams.get(name);
    return value !== null ? value : '';
  }
  return '';
};


/***/ }),

/***/ "./assets/_src/js/utils/u_show-hide-display.js":
/*!*****************************************************!*\
  !*** ./assets/_src/js/utils/u_show-hide-display.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u_hideDisplay: function() { return /* binding */ u_hideDisplay; },
/* harmony export */   u_hideElem: function() { return /* binding */ u_hideElem; },
/* harmony export */   u_showDisplay: function() { return /* binding */ u_showDisplay; },
/* harmony export */   u_showElem: function() { return /* binding */ u_showElem; },
/* harmony export */   u_toggleElem: function() { return /* binding */ u_toggleElem; }
/* harmony export */ });
/**
 * Visibility functions
 */

var u_showDisplay = function u_showDisplay(elem) {
  elem.style.display = "block";
};
var u_hideDisplay = function u_hideDisplay(elem) {
  elem.style.display = "none";
};
var u_showElem = function u_showElem(elem) {
  var hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is-hidden';
  var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is-shown';
  elem.classList.remove(hidden);
  elem.classList.add(visible);
};
var u_hideElem = function u_hideElem(elem) {
  var hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is-hidden';
  var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is-shown';
  elem.classList.add(hidden);
  elem.classList.remove(visible);
};
var u_toggleElem = function u_toggleElem(elem) {
  var hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'is-hidden';
  elem.classList.toggle(hidden);
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
/*!*********************************!*\
  !*** ./assets/_src/js/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/u_is-touch-device */ "./assets/_src/js/utils/u_is-touch-device.js");
/* harmony import */ var _utils_u_io_anim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/u_io-anim */ "./assets/_src/js/utils/u_io-anim.js");
/* harmony import */ var _header_ds_headerSticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/ds_headerSticky */ "./assets/_src/js/header/ds_headerSticky.js");
/* harmony import */ var _header_ds_headerSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/ds_headerSearch */ "./assets/_src/js/header/ds_headerSearch.js");
/* harmony import */ var _header_ds_headerMenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/ds_headerMenuToggle */ "./assets/_src/js/header/ds_headerMenuToggle.js");
/* harmony import */ var _header_ds_menuSubMenuToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/ds_menuSubMenuToggle */ "./assets/_src/js/header/ds_menuSubMenuToggle.js");
/* harmony import */ var _header_ds_headerMobileSwipeUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/ds_headerMobileSwipeUp */ "./assets/_src/js/header/ds_headerMobileSwipeUp.js");
/* harmony import */ var _library_collapsers_ds_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library/collapsers/ds_collapse */ "./assets/_src/js/library/collapsers/ds_collapse.js");
/* harmony import */ var _library_collapsers_ds_toggleElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library/collapsers/ds_toggleElement */ "./assets/_src/js/library/collapsers/ds_toggleElement.js");
/* harmony import */ var _function_calls_tinymce_read_more_ds_readMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./function-calls/tinymce-read-more/ds_readMore */ "./assets/_src/js/function-calls/tinymce-read-more/ds_readMore.js");
/* harmony import */ var _blog_ds_blog_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/ds_blog-filter */ "./assets/_src/js/blog/ds_blog-filter.js");
/* harmony import */ var _library_media_controls_media_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/media-controls/media-control */ "./assets/_src/js/library/media-controls/media-control.js");
/*
 * @title Main App
 * @description Application entry point
 */

// Utils

// import { u_scrollEffect } from './utils/u_scroll-effect';


// Header





// import { ds_headerHeight } from "./header/ds_headerHeight";

// Function Calls






// Libraries


// Components

// import ProgressCircleCounter from './library/counters/progress-counter';

document.addEventListener('DOMContentLoaded', function () {
  // Check whether it is touch device or not
  (0,_utils_u_is_touch_device__WEBPACK_IMPORTED_MODULE_0__.u_addTouchToHtml)();
  // u_scrollEffect()

  /**
   * Header
   */
  // Sticky header
  (0,_header_ds_headerSticky__WEBPACK_IMPORTED_MODULE_2__.ds_headerSticky)('.site-header', 'is-sticky');
  // ds_headerHeight();

  /**
   * Mobile menu navigation
   */
  // Mobile menu toggle
  (0,_header_ds_headerMenuToggle__WEBPACK_IMPORTED_MODULE_4__.ds_headerMenuToggle)('.js-m-burger-toggle');
  // Mobile menu submenu toggle
  (0,_header_ds_menuSubMenuToggle__WEBPACK_IMPORTED_MODULE_5__.ds_headerMenuSubMenuToggle)('.js-m-burger-wrap', '.js-m-burger-toggle');
  // Mobile menu swipe up close
  (0,_header_ds_headerMobileSwipeUp__WEBPACK_IMPORTED_MODULE_6__.ds_headerMobileSwipeUp)('.js-m-burger-toggle');

  /**
   * Desktop menu navigation
   */
  // Desktop burger menu toggle
  (0,_header_ds_headerMenuToggle__WEBPACK_IMPORTED_MODULE_4__.ds_headerMenuToggle)('.js-d-burger-toggle');
  // Desktop burger menu submenu toggle
  (0,_header_ds_menuSubMenuToggle__WEBPACK_IMPORTED_MODULE_5__.ds_headerMenuSubMenuToggle)('.js-d-burger-wrap', '.js-d-burger-toggle');
  (0,_header_ds_headerSearch__WEBPACK_IMPORTED_MODULE_3__.ds_headerSearch)();

  /**
   * Utils
   */
  (0,_library_collapsers_ds_collapse__WEBPACK_IMPORTED_MODULE_7__.ds_collapse)();
  (0,_function_calls_tinymce_read_more_ds_readMore__WEBPACK_IMPORTED_MODULE_9__.ds_readMore)();
  (0,_library_collapsers_ds_toggleElement__WEBPACK_IMPORTED_MODULE_8__.ds_toggleElement)();

  // Move to js-blog.js if not using Content block with load more
  if (document.querySelector('.js-ajax-block')) {
    (0,_blog_ds_blog_filter__WEBPACK_IMPORTED_MODULE_10__.ds_loadMoreBlog)();
  }

  /**
   * Libraries
   */
  new _library_media_controls_media_control__WEBPACK_IMPORTED_MODULE_11__["default"]();

  /**
   * Components
   */

  /*    new ProgressCircleCounter({
          percentage: 80,
      });*/

  new _utils_u_io_anim__WEBPACK_IMPORTED_MODULE_1__["default"]({});
});
window.addEventListener('load', function () {
  // Enable if using lazy load on Video (set data-src instead of src)
  // let lazyLoadInstance = new LazyLoad();
});
var select = document.querySelectorAll(".select"); // select-box

if (select.length) {
  select.forEach(function (item) {
    var selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", function (event) {
      var el = event.target.dataset.choice;
      var text = event.target.innerText;
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }
      item.classList.toggle("is-active");
    });
  });
}
document.querySelector('.site-header__btn').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.dropdown-mobile-menu').classList.toggle('show');
  document.querySelector('body').classList.toggle('shadow');
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDLE9BQU8sRUFBRSxZQUFVO0VBQzlFLElBQUksQ0FBQ21DLFNBQVMsQ0FBQzJGLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDL0J4RyxRQUFRLENBQUNLLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDUSxTQUFTLENBQUMyRixNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3hFeEcsUUFBUSxDQUFDSyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNRLFNBQVMsQ0FBQzJGLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDM0QsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2Jsb2cvZHNfYmxvZy1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9mdW5jdGlvbi1jYWxscy90aW55bWNlLXJlYWQtbW9yZS9kc19yZWFkTW9yZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2hlYWRlci9kc19oZWFkZXJNZW51VG9nZ2xlLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvaGVhZGVyL2RzX2hlYWRlck1vYmlsZVN3aXBlVXAuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9oZWFkZXIvZHNfaGVhZGVyU2VhcmNoLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvaGVhZGVyL2RzX2hlYWRlclN0aWNreS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2hlYWRlci9kc19tZW51U3ViTWVudVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2hlYWRlci91dGlscy91LW1lbnUuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L2NvbGxhcHNlcnMvZHNfY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9saWJyYXJ5L2NvbGxhcHNlcnMvZHNfdG9nZ2xlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2xpYnJhcnkvbWVkaWEtY29udHJvbHMvbWVkaWEtY29udHJvbC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3VfaW8tYW5pbS1vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3VfaW8tYW5pbS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3V0aWxzL3VfaXMtdG91Y2gtZGV2aWNlLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV9vYmplY3RfZXh0ZW5kLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdV9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy91dGlscy91X3Nob3ctaGlkZS1kaXNwbGF5LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dV9nZXRQYXJhbWV0ZXJCeU5hbWV9IGZyb20gXCIuLi91dGlscy91X3BhcmFtc1wiO1xuXG5jb25zdCBkc19sb2FkTW9yZUJsb2cgPSAoKSA9PiB7XG4gICAgKGZ1bmN0aW9uICgkKSB7XG4gICAgICAgIGxldCBEU0luaXRGaWx0ZXIgPSBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICBmb3JtOiAnJyxcbiAgICAgICAgICAgICAgICBtb3JlQnRuOiAkKCksXG4gICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcbiAgICAgICAgICAgICAgICBkb2luZ19hamF4OiBudWxsLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdF90eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogOSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogIDEsXG4gICAgICAgICAgICAgICAgICAgIG1haW5fdGF4b25vbXk6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRfc3R5bGVzOiB7fSxcbiAgICAgICAgICAgICAgICBwYWdlX251bTogMSxcbiAgICAgICAgICAgICAgICBhamF4X3VybDogZHMuYWpheF91cmwsXG4gICAgICAgICAgICAgICAgcGFnZV9nZXRfcGFyYW1ldGVyX2VuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJlbG9hZGVyOiAnPGRpdiBjbGFzcz1cImZpbHRlci1sb2FkZXIgbG9hZGVyXCI+PGRpdiBjbGFzcz1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTJcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwibG9hZGVyLWJnXCI+PC9kaXY+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICBpbml0KG1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhamF4TW9kdWxlID0gJChtb2R1bGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsUGFnZU51bWJlciA9IHVfZ2V0UGFyYW1ldGVyQnlOYW1lKCdwYWdlX251bScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhamF4TW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9kdWxlID0gYWpheE1vZHVsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmFjdGlvbiA9IGFqYXhNb2R1bGUuZGF0YSgnYWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucXVlcnkucGFnZSA9IGluaXRpYWxQYWdlTnVtYmVyICE9PSAnJyA/IHBhcnNlSW50KGluaXRpYWxQYWdlTnVtYmVyKSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucXVlcnkucG9zdF90eXBlID0gYWpheE1vZHVsZS5kYXRhKCdwb3N0LXR5cGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5xdWVyeS5wb3N0c19wZXJfcGFnZSA9IGFqYXhNb2R1bGUuZGF0YSgncGVyLXBhZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5xdWVyeS5tYWluX3RheG9ub215ID0gYWpheE1vZHVsZS5kYXRhKCdtYWluLXRheG9ub215Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5wYWdlX2dldF9wYXJhbWV0ZXJfZW5hYmxlID0gYWpheE1vZHVsZS5kYXRhKCdwYWdlLXBhcmFtZXRlcicpID09PSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuaW5pdEVsZW1lbnRzQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluaXRFbGVtZW50c0FjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBmaWx0ZXIubW9kdWxlLmZpbmQoJ2RpdltkYXRhLWNvbnRhaW5lcj1cImFqYXgtcmVzdWx0XCJdJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5yZXN1bHRzID0gcmVzdWx0cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9yZUJ0biA9IGZpbHRlci5tb2R1bGUuZmluZCgnLmFqYXgtbG9hZC1tb3JlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9yZUJ0bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb3JlQnRuID0gbW9yZUJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9yZVBvc3RzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBmaWx0ZXIubW9kdWxlLmZpbmQoJ2Zvcm1bZGF0YS1mb3JtPVwiYWpheFwiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZm9ybSA9IGZvcm07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmNoYW5nZUZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBDbGFzcyA9IGZpbHRlci5tb2R1bGUuZGF0YSgnY2xhc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmNvbXBvbmVudF9zdHlsZXMuY2xhc3MgPSBjb21wQ2xhc3M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wU3R5bGVzID0gZmlsdGVyLm1vZHVsZS5kYXRhKCdzdHlsZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5jb21wb25lbnRfc3R5bGVzLnN0eWxlcyA9IGNvbXBTdHlsZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wSW1hZ2UgPSBmaWx0ZXIubW9kdWxlLmRhdGEoJ2ltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5jb21wb25lbnRfc3R5bGVzLmltYWdlID0gY29tcEltYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb3JlUG9zdHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb3JlQnRuLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5zZW5kQWpheChmaWx0ZXIucXVlcnkucGFnZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbmdlRm9ybSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0X3RleHQgPSBmaWx0ZXIuZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0X3RleHQudW5iaW5kKCdrZXl1cCcpO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXRfdGV4dC5ub3QoJ1tkYXRhLWFqYXg9XCJmYWxzZVwiXScpLmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci50aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVyLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIudGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnNlbmRBamF4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0X3N1Ym1pdC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtZmlsdGVyLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0ICRpbnB1dF9zdWJtaXQgPSBmaWx0ZXIuZm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXRfc3VibWl0LnVuYmluZCgnY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0X3N1Ym1pdC5ub3QoJ1tkYXRhLWFqYXg9XCJmYWxzZVwiXScpLmNsaWNrKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuc2VuZEFqYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dF9zdWJtaXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWZpbHRlci1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9IGZpbHRlci5mb3JtLmZpbmQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LnVuYmluZCgnY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3Qubm90KCdbZGF0YS1hamF4PVwiZmFsc2VcIl0nKS5jaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnNlbmRBamF4KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3QuZmlsdGVyKCdbZGF0YS10YXJnZXQ9XCJpbnB1dFwiXScpLmNoYW5nZSgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICRjdXJyZW50SXRlbSA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICRpbnB1dFRhcmdldCA9IGZpbHRlci5mb3JtLmZpbmQoYGlucHV0LiR7ICRjdXJyZW50SXRlbS5kYXRhKCd0YXJnZXQtbmFtZScpIH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaW5wdXRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgJHNlbGVjdGVkT3B0aW9uID0gJGN1cnJlbnRJdGVtLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dFRhcmdldC52YWwoJHNlbGVjdGVkT3B0aW9uLnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXRUYXJnZXQuZGF0YSgncHVzaC11cmwnLCAkc2VsZWN0ZWRPcHRpb24uZGF0YSgndGVybS11cmwnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuc2VuZEFqYXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNlbGVjdC5maWx0ZXIoJ1tkYXRhLXRhcmdldD1cInVsXCJdJykuY2hhbmdlKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgJGN1cnJlbnRJdGVtID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZm9ybS5maW5kKGB1bC4keyAkY3VycmVudEl0ZW0uZGF0YSgndGFyZ2V0LW5hbWUnKSB9YCkuZmluZChgbGkgYVtkYXRhLXRlcm0tc2x1Zz1cIiR7ICRjdXJyZW50SXRlbS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKSB9XCJdYCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5zZW5kQWpheCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbGlzdCA9IGZpbHRlci5mb3JtLmZpbmQoJ3VsW2RhdGEtYWpheC1wdXNoLXVybD1cInRydWVcIl0nKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgICAgICAkbGlzdC51bmJpbmQoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAkbGlzdC5maW5kKCdsaSBhJykuY2xpY2soKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsaXN0LmZpbmQoJ2xpIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlX3Rlcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkYWN0aXZlVGVybSA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZVRlcm0uYWRkQ2xhc3MoJ2FjdGl2ZV90ZXJtJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkaW5wdXRUYXJnZXQgPSBmaWx0ZXIuZm9ybS5maW5kKGBpbnB1dC4keyAkbGlzdC5kYXRhKCd0YXJnZXQtbmFtZScpIH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaW5wdXRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXRUYXJnZXQudmFsKCRhY3RpdmVUZXJtLmRhdGEoJ3Rlcm0tc2x1ZycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXRUYXJnZXQuZGF0YSgncHVzaC11cmwnLCAkYWN0aXZlVGVybS5hdHRyKCdocmVmJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5mb3JtLmZpbmQoYHNlbGVjdC4keyAkbGlzdC5kYXRhKCd0YXJnZXQtbmFtZScpIH0gb3B0aW9uW3ZhbHVlPVwiJHsgJGFjdGl2ZVRlcm0uZGF0YSgndGVybS1zbHVnJykgfVwiXWApPy5wcm9wKCdzZWxlY3RlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnNlbmRBamF4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5mb3JtLnVuYmluZCgna2V5ZG93bicpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZm9ybS5vbignZHNfdHJpZ2dlcl9icm93c2VyX2J1dHRvbl91c2VkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnNlbmRBamF4KDAsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VuZEFqYXgocGFnZSA9IDAsIHB1c2hfc3RhdGUgPSB0cnVlLCBsb2FkX21vcmVfdXNlZCA9IGZhbHNlLCBicm93c2VyX2J1dHRvbl91c2VkID0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5kb2luZ19hamF4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5kb2luZ19hamF4LmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZG9pbmdfYWpheCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9kdWxlLmZpbmQoJy5sb2FkZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGZpbHRlci5hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RfdHlwZTogZmlsdGVyLnF1ZXJ5LnBvc3RfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0c19wZXJfcGFnZTogZmlsdGVyLnF1ZXJ5LnBvc3RzX3Blcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VkOiBwYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5fdGF4b25vbXk6IGZpbHRlci5xdWVyeS5tYWluX3RheG9ub215LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBmaWx0ZXIuY29tcG9uZW50X3N0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZTogJCh3aW5kb3cpLndpZHRoKCkgPD0gNzY4ID8gJ21vYmlsZScgOiAnZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBicm93c2VyX2J1dHRvbl91c2VkOiBicm93c2VyX2J1dHRvbl91c2VkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuZm9ybS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvcm0gPSBmaWx0ZXIuZm9ybS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwdXNoX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuYnVpbGRfdXJsKGRhdGEucXVlcnkucGFnZWQsIGxvYWRfbW9yZV91c2VkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIucGFnZV9nZXRfcGFyYW1ldGVyX2VuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHVfZ2V0UGFyYW1ldGVyQnlOYW1lKCdwYWdlX251bScpID8/IGRhdGEucXVlcnkucGFnZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnF1ZXJ5LnBhZ2VkID0gcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5kb2luZ19hamF4ID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZmlsdGVyLmFqYXhfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQoeGhyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZHVsZS5hcHBlbmQoZmlsdGVyLnByZWxvYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYWdlID09IDEgfHwgZGF0YS5wYWdlID09IDApIGZpbHRlci5yZXN1bHRzLmh0bWwoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5yZXN1bHRzLmFwcGVuZChkYXRhLnBvc3RzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5tYXhfcGFnZXMgPT09IGRhdGEucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vcmVCdG4uaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vcmVCdG4uc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudG90YWxfcG9zdHNfc2hvd2luZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZHVsZS5maW5kKCcuanMtYmxvZy1jb3VudGVyLXdyYXBwZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubW9kdWxlLmZpbmQoJy5qcy1ibG9nLWNvdW50ZXItd3JhcHBlcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvdGFsX3Bvc3RzX3Nob3dpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb2R1bGUuZmluZCgnLmpzLWJsb2ctY291bnRlci1zaG93aW5nJykudGV4dChkYXRhLnRvdGFsX3Bvc3RzX3Nob3dpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZHVsZS5maW5kKCcuanMtdG90YWwtaXRlbXMtc2hvd24nKS52YWwoZGF0YS50b3RhbF9wb3N0c19zaG93aW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudG90YWxfcG9zdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tb2R1bGUuZmluZCgnLmpzLWJsb2ctY291bnRlci10b3RhbCcpLnRleHQoZGF0YS50b3RhbF9wb3N0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlID0gdV9nZXRQYXJhbWV0ZXJCeU5hbWUoJ3BhZ2VfbnVtJykgPz8gZGF0YS5xdWVyeS5wYWdlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IGZpbHRlci5wYWdlX2dldF9wYXJhbWV0ZXJfZW5hYmxlID8gcGFnZSA6IHBhcnNlSW50KGRhdGEucGFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5xdWVyeS5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZHVsZS5maW5kKCcuanMtcGFnZS1udW0nKS52YWwocGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vcmVCdG4uYXR0cignZGF0YS1wYWdlJywgZGF0YS5wYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vZHVsZS5maW5kKCcubG9hZGVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1vcmVCdG4uaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5kb2luZ19hamF4ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnVpbGRfdXJsKHBhZ2VkID0gMSwgcHVzaF9wYWdlX251bSA9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmxfcGFyc2Vfc2lkZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3BhcnNlX3NpZGVbMF0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkVXJsID0gbmV3IFVSTCh3aW5kb3cuaGlzdG9yeS5zdGF0ZSAmJiB3aW5kb3cuaGlzdG9yeS5zdGF0ZS5wYXRoID8gd2luZG93Lmhpc3Rvcnkuc3RhdGUucGF0aCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHB1c2hfc3RhdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRQdXNoVXJsID0gZmlsdGVyLmZvcm0uZmluZCgnaW5wdXRbZGF0YS1wdXNoLXVybF0nKS5maXJzdCgpLmRhdGEoJ3B1c2gtdXJsJykgPz8gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFB1c2hVcmwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoX3N0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybC5ocmVmID0gaW5wdXRQdXNoVXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1c2hfcGFnZV9udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdwYWdlX251bScsKCBpc05hTihwYXJzZUludChmaWx0ZXIucXVlcnkucGFnZSkpID8gMSA6IHBhcnNlSW50KGZpbHRlci5xdWVyeS5wYWdlKSApICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoX3N0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCdwYWdlX251bScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmZvcm0uZmluZCgnaW5wdXRbdHlwZT10ZXh0XTpub3QoW2RhdGEtYWpheD1cImZhbHNlXCJdKScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaF9zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChqUXVlcnkodGhpcykuYXR0cignbmFtZScpLCBqUXVlcnkodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZm9ybS5maW5kKCdzZWxlY3Q6bm90KFtkYXRhLWFqYXg9XCJmYWxzZVwiXSknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hfc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoalF1ZXJ5KHRoaXMpLmF0dHIoJ25hbWUnKSwgalF1ZXJ5KHRoaXMpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZF91cmwgPSBkZWNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1c2hfc3RhdGUgJiYgKG9sZFVybC5zZWFyY2hQYXJhbXMudG9TdHJpbmcoKSAhPT0gdXJsLnNlYXJjaFBhcmFtcy50b1N0cmluZygpIHx8IG9sZFVybC5ocmVmICE9PSB1cmwuaHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7ICdwYXRoJzogZGVjb2RlZF91cmwsICdkc190cmlnZ2VyX2ZpbHRlcic6IHRydWUsIHBhZ2VkOiBwYWdlZCB9LCBudWxsLCBkZWNvZGVkX3VybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmlsdGVyLmluaXQobW9kdWxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkb0luaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICQoJy5qcy1hamF4LWJsb2NrJykuZWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIERTSW5pdEZpbHRlcigkKCcuanMtYWpheC1ibG9jaycpW2ldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZG9Jbml0KCk7XG5cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAkKCcuanMtYWpheC1ibG9jaycpLmVhY2goKGksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZUluaXRGaWx0ZXIoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgIH0oalF1ZXJ5KSk7XG5cbn1cblxuY29uc3QgcmVJbml0RmlsdGVyID0gKGZpbHRlcikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKTtcbiAgICBjb25zdCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZi50b1N0cmluZygpKTtcbiAgICBjb25zdCBjbGVhbmVkVXJsID0gbmV3IFVSTChwYXJzZWRVcmxbMF0pO1xuXG4gICAgbGV0IHBhcmFtcyA9IGN1cnJlbnRVcmwuc2VhcmNoUGFyYW1zO1xuICAgIGxldCB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7XG4gICAgY29uc3QgZm9ybSA9ICQoZmlsdGVyKS5maW5kKCdmb3JtW2RhdGEtZm9ybT1cImFqYXhcIl0nKTtcblxuICAgIGxldCAkcGFnZU51bSA9IGZvcm0uZmluZCgnLmpzLXBhZ2UtbnVtJyk7XG4gICAgaWYgKCRwYWdlTnVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJHBhZ2VOdW0udmFsKHBhcmFtcy5nZXQoJ3BhZ2VfbnVtJykgPz8gMSk7XG4gICAgICAgIHRyaWdnZXJDaGFuZ2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvcm0uZmluZCgnaW5wdXRbdHlwZT10ZXh0XTpub3QoW2RhdGEtYWpheD1cImZhbHNlXCJdKScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgICAgIGxldCAkdGhpcyA9ICQoZWxlbSk7XG4gICAgICAgICR0aGlzLnZhbChwYXJhbXMuZ2V0KCR0aGlzLmF0dHIoJ25hbWUnKSkgPz8gJycpO1xuICAgICAgICB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZVxuICAgIH0pO1xuXG4gICAgZm9ybS5maW5kKCdzZWxlY3Q6bm90KFtkYXRhLWFqYXg9XCJmYWxzZVwiXSknKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbSkge1xuICAgICAgICBsZXQgJHRoaXMgPSAkKGVsZW0pO1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJhbXMuZ2V0KCR0aGlzLmF0dHIoJ25hbWUnKSkgPz8gJyc7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICR0aGlzLmZpbmQoYG9wdGlvblt2YWx1ZT0keyB2YWx1ZSB9XWApLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy5maW5kKCdvcHRpb246ZXEoMCknKS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJDaGFuZ2UgPSB0cnVlXG4gICAgfSk7XG5cbiAgICBmb3JtLmZpbmQoJ3VsW2RhdGEtYWpheC1wdXNoLXVybD1cInRydWVcIl06Zmlyc3QgbGkgYScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgICAgIGxldCAkdGhpcyA9ICQoZWxlbSk7XG4gICAgICAgIGlmICgkdGhpcy5hdHRyKCdocmVmJykgPT09IGNsZWFuZWRVcmwuaHJlZiAmJiAhJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZV90ZXJtJykpIHtcbiAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9ybS5maW5kKCdzZWxlY3RbZGF0YS10YXJnZXQ9XCJpbnB1dFwiXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtKSB7XG4gICAgICAgIGxldCAkdGhpcyA9ICQoZWxlbSk7XG4gICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9ICR0aGlzLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpO1xuICAgICAgICBsZXQgJGlucHV0VGFyZ2V0ID0gZm9ybS5maW5kKGBpbnB1dC4keyAkdGhpcy5kYXRhKCd0YXJnZXQtbmFtZScpIH1gKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24uZGF0YSgndGVybS11cmwnKSAhPT0gY2xlYW5lZFVybC5ocmVmKSB7XG4gICAgICAgICAgICAkdGhpcy5maW5kKGBvcHRpb25bZGF0YS10ZXJtLXVybD1cIiR7IGNsZWFuZWRVcmwuaHJlZiB9XCJdYCkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgbGV0ICRuZXdTZWxlY3RlZE9wdGlvbiA9ICR0aGlzLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpO1xuICAgICAgICAgICAgJGlucHV0VGFyZ2V0LnZhbCgkbmV3U2VsZWN0ZWRPcHRpb24udmFsKCkpO1xuICAgICAgICAgICAgJGlucHV0VGFyZ2V0LmRhdGEoJ3B1c2gtdXJsJywgJG5ld1NlbGVjdGVkT3B0aW9uLmRhdGEoJ3Rlcm0tdXJsJykpO1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0cmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgIGZvcm0udHJpZ2dlcignZHNfdHJpZ2dlcl9icm93c2VyX2J1dHRvbl91c2VkJyk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGRzX2xvYWRNb3JlQmxvZyxcbn1cbiIsImNvbnN0IGRzX3JlYWRNb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlYWRNb3JlV3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhZC1tb3JlLXdyYXBwZXInKTtcbiAgICByZWFkTW9yZVdyYXBwZXJzLmZvckVhY2goKHJlYWRNb3JlV3JhcHBlcikgPT4ge1xuICAgICAgICBjb25zdCByZWFkTW9yZUJ0biA9IHJlYWRNb3JlV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuanMtcmVhZC1tb3JlLXRvZ2dsZScpO1xuICAgICAgICBjb25zdCBidG5UZXh0Tm9BY3RpdmUgPSByZWFkTW9yZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1sZXNzLXRleHQnKTtcbiAgICAgICAgY29uc3QgYnRuVGV4dEFjdGl2ZSA9IHJlYWRNb3JlQnRuLmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCByZWFkTW9yZVRleHQgPSByZWFkTW9yZVdyYXBwZXIucXVlcnlTZWxlY3RvcignLnJlYWQtbW9yZS10ZXh0Jyk7XG4gICAgICAgIHJlYWRNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSByZWFkTW9yZVdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRNb3JlVGV4dEhlaWdodCA9IHJlYWRNb3JlVGV4dC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZWFkTW9yZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVhZE1vcmVCdG4uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBidG5UZXh0QWN0aXZlO1xuICAgICAgICAgICAgICAgIHJlYWRNb3JlVGV4dC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWFkTW9yZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVhZE1vcmVCdG4uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBidG5UZXh0Tm9BY3RpdmU7XG4gICAgICAgICAgICAgICAgcmVhZE1vcmVUZXh0LnN0eWxlLm1heEhlaWdodCA9IGAke3JlYWRNb3JlVGV4dEhlaWdodH1weGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgICBkc19yZWFkTW9yZSxcbn07XG4iLCJpbXBvcnQgeyBvcGVuTW9iaWxlTWVudSwgY2xvc2VNb2JpbGVNZW51IH0gZnJvbSAnLi91dGlscy91LW1lbnUnO1xuXG4vKipcbiAqIFRvZ2dsZSBtb2JpbGUgbmF2IG9uIGNsaWNrLlxuICogVG9nZ2xlIGRlc2t0b3AgYnVyZ2VyIG1lbnUgb24gY2xpY2suXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsIC0gc2VsZWN0b3IgZm9yIGFkZGluZyBhbiBhY3RpdmUgY2xhc3NcbiAqL1xuXG5jb25zdCBkc19oZWFkZXJNZW51VG9nZ2xlID0gKGVsKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChidG4uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBvcGVuTW9iaWxlTWVudShidG4sIGJvZHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoYnRuLCBib2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBkc19oZWFkZXJNZW51VG9nZ2xlLFxufTtcbiIsImltcG9ydCB7IHVfaXNUb3VjaERldmljZSB9IGZyb20gJy4uL3V0aWxzL3VfaXMtdG91Y2gtZGV2aWNlJztcbmltcG9ydCB7IGNsb3NlTW9iaWxlTWVudSB9IGZyb20gJy4vdXRpbHMvdS1tZW51JztcblxuLyoqXG4gKiBNb2JpbGUgbWVudSBzd2lwZSB1cCBtZW51IGNsb3NlXG4gKi9cblxuY29uc3QgZHNfaGVhZGVyTW9iaWxlU3dpcGVVcCA9IChlbCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbW9iaWxlX19pbm5lcicpO1xuICAgIGlmICghbW9iaWxlTmF2KSByZXR1cm47XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbGV0IHhEb3duID0gbnVsbDtcbiAgICBsZXQgeURvd24gPSBudWxsO1xuICAgIGNvbnN0IHRvdWNoID0gdV9pc1RvdWNoRGV2aWNlKCk7XG5cbiAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgY29uc3QgaXNTY3JvbGxhYmxlWSA9IChlbGVtZW50KSA9PiBlbGVtZW50LnNjcm9sbEhlaWdodCA+IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChldnQpID0+IHtcbiAgICAgICAgICAgIGlmICgheERvd24gfHwgIXlEb3duKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB4VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgY29uc3QgeVVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgICAgICAgICAgY29uc3QgeERpZmYgPSB4RG93biAtIHhVcDtcbiAgICAgICAgICAgIGNvbnN0IHlEaWZmID0geURvd24gLSB5VXA7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHtcbiAgICAgICAgICAgICAgICBpZiAoeERpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGxlZnQgc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvKiByaWdodCBzd2lwZSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgLyogdXAgc3dpcGUgKi9cbiAgICAgICAgICAgICAgICBpZiAoIWlzU2Nyb2xsYWJsZVkobW9iaWxlTmF2KSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoYnRuLCBib2R5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qIGRvd24gc3dpcGUgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIHJlc2V0IHZhbHVlcyAqL1xuICAgICAgICAgICAgeERvd24gPSBudWxsO1xuICAgICAgICAgICAgeURvd24gPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICB4RG93biA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB5RG93biA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbW9iaWxlTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVUb3VjaE1vdmUoZSk7XG4gICAgICAgICAgICBtb2JpbGVOYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIG1vYmlsZU5hdi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVRvdWNoU3RhcnQoZSk7XG4gICAgICAgICAgICBtb2JpbGVOYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBkc19oZWFkZXJNb2JpbGVTd2lwZVVwLFxufTtcbiIsIi8qKlxuICogU2VhcmNoIE92ZXJsYXlcbiAqL1xuaW1wb3J0IHsgdV9oaWRlRWxlbSwgdV9zaG93RWxlbSB9IGZyb20gJy4uL3V0aWxzL3Vfc2hvdy1oaWRlLWRpc3BsYXknO1xuXG5jb25zdCBkc19oZWFkZXJTZWFyY2ggPSAoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJzZWFyY2gtdGFyZ2V0XCJdJyk7XG5cbiAgICAvLyBXaGVuIFNlYXJjaCBPdmVybGF5IGV4aXN0c1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1maWVsZCcpO1xuICAgICAgICBjb25zdCBzaG93T3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVfc2hvd0VsZW0odGFyZ2V0KTtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RzLW92ZXJsYXktc2VhcmNoJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2xvc2VPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdV9oaWRlRWxlbSh0YXJnZXQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkcy1vdmVybGF5LXNlYXJjaCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgc3VibWl0IHdoZW4gb3BlbmVkXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnW2RhdGEtanM9XCJzZWFyY2gtdHJpZ2dlclwiXScpICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXNob3duJykpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcGVuIGFuIG92ZXJsYXlcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCdbZGF0YS1qcz1cInNlYXJjaC10cmlnZ2VyXCJdJykpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2hvd092ZXJsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2UgYW4gb3ZlcmxheVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ1tkYXRhLWpzPVwic2VhcmNoLWNsb3NlXCJdJykpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBzZWFyY2ggb3ZlcmxheSBpcyBvcGVuZWRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZHMtb3ZlcmxheS1zZWFyY2gnKSkge1xuICAgICAgICAgICAgICAgIC8vIENsb3NlIGFuIG92ZXJsYXkgb24gRXNjYXBlIGtleSBjbGlja1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgZHNfaGVhZGVyU2VhcmNoLFxufTtcbiIsIi8qKlxuICogQWRkIGNsYXNzIG9uIHNjcm9sbCBmb3Igc3RpY2t5IGhlYWRlclxuICogQHBhcmFtIHtzdHJpbmd9IGVsIC0gc2VsZWN0b3IgZm9yIGFkZGluZyBhbiBhY3RpdmUgY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbENsYXNzIC0gYWN0aXZlIGNsYXNzXG4gKi9cblxuaW1wb3J0IHsgdV90aHJvdHRsZWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmNvbnN0IGRzX2hlYWRlclN0aWNreSA9IChlbCwgZWxDbGFzcykgPT4ge1xuICAgIGNvbnN0ICQkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgY29uc3QgZWxIZWlnaHQgPSBwYXJzZUludCgkJGhlYWRlci5vZmZzZXRIZWlnaHQgLyAyLCAxMCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQoZWxIZWlnaHQgLyA1LCAxMCk7XG5cbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IChlbEhlaWdodCArIG9mZnNldCkpIHtcbiAgICAgICAgICAgICQkaGVhZGVyLmNsYXNzTGlzdC5hZGQoZWxDbGFzcyk7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgKGVsSGVpZ2h0IC0gb2Zmc2V0KSkge1xuICAgICAgICAgICAgJCRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShlbENsYXNzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0aHJvdHRsZVNjcm9sbCA9IHVfdGhyb3R0bGVkKCgpID0+IHtcbiAgICAgICAgb25TY3JvbGwoKTtcbiAgICB9LCAzMCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aHJvdHRsZVNjcm9sbCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IChlbEhlaWdodCArIG9mZnNldCkpIHtcbiAgICAgICAgJCRoZWFkZXIuY2xhc3NMaXN0LmFkZChlbENsYXNzKTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCB7XG4gICAgZHNfaGVhZGVyU3RpY2t5LFxufTtcbiIsIi8qKlxuICogU3VibWVudSB0b2dnbGUgZm9yIE1vYmlsZSBNZW51IGFuZCBEZXNrdG9wIEJ1cmdlciBtZW51XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsIC0gc2VsZWN0b3IgZm9yIGFkZGluZyBhbiBhY3RpdmUgY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbG9zZUVsIC0gc2VsZWN0b3IgZm9yIGNsb3NpbmcgYWxsIHN1Ym1lbnUgaXRlbXNcbiAqL1xuXG5pbXBvcnQgeyBjaGVja0NoaWxkU3ViTWVudSwgY2xvc2VTdWJNZW51LCBvcGVuU3ViTWVudSB9IGZyb20gJy4vdXRpbHMvdS1tZW51JztcblxuY29uc3QgZHNfaGVhZGVyTWVudVN1Yk1lbnVUb2dnbGUgPSAoZWwsIGNsb3NlRWwpID0+IHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICBpZiAoIWVsZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2xvc2VFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsb3NlRWwpO1xuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBlbGUucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN1Yi1tZW51LXRvZ2dsZScpO1xuXG4gICAgdG9nZ2xlQnV0dG9ucy5mb3JFYWNoKCh0b2dnbGVCdXR0b24pID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlQ29udGVudCA9IHRvZ2dsZUJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbk1lbnVJdGVtID0gdG9nZ2xlQnV0dG9uLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgY2xvc2VTdWJNZW51KHRvZ2dsZUJ1dHRvbiwgdG9nZ2xlQnV0dG9uTWVudUl0ZW0sIHRvZ2dsZUNvbnRlbnQpO1xuXG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzVG9nZ2xlZCA9IHRvZ2dsZUJ1dHRvbi5jbGFzc05hbWUuaW5jbHVkZXMoJ2lzLXRvZ2dsZWQnKTtcblxuICAgICAgICAgICAgY2xvc2VTdWJNZW51KHRvZ2dsZUJ1dHRvbiwgdG9nZ2xlQnV0dG9uTWVudUl0ZW0sIHRvZ2dsZUNvbnRlbnQpO1xuICAgICAgICAgICAgY2hlY2tDaGlsZFN1Yk1lbnUodG9nZ2xlQnV0dG9uKTtcblxuICAgICAgICAgICAgaWYgKCFpc1RvZ2dsZWQpIHtcbiAgICAgICAgICAgICAgICBvcGVuU3ViTWVudSh0b2dnbGVCdXR0b24sIHRvZ2dsZUJ1dHRvbk1lbnVJdGVtLCB0b2dnbGVDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY2xvc2VFbGUpIHtcbiAgICAgICAgY2xvc2VFbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b25zLmZvckVhY2goKHRvZ2dsZUJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUNvbnRlbnQgPSB0b2dnbGVCdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbk1lbnVJdGVtID0gdG9nZ2xlQnV0dG9uLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBjbG9zZVN1Yk1lbnUodG9nZ2xlQnV0dG9uLCB0b2dnbGVCdXR0b25NZW51SXRlbSwgdG9nZ2xlQ29udGVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBkc19oZWFkZXJNZW51U3ViTWVudVRvZ2dsZSxcbn07XG4iLCIvLyBPcGVuIG1vYmlsZSBtZW51XG5jb25zdCBvcGVuTW9iaWxlTWVudSA9IChidG4sIGJvZHkpID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCduYXYtYWN0aXZlJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG59O1xuXG4vLyBDbG9zZSBtb2JpbGUgbWVudVxuY29uc3QgY2xvc2VNb2JpbGVNZW51ID0gKGJ0biwgYm9keSkgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1hY3RpdmUnKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG59O1xuXG4vLyBTaG93IHN1Ym1lbnUgaXRlbXNcbmNvbnN0IHNob3dIaWRlU3ViSXRlbSA9IChzdWJJdGVtLCB0eXBlLCBhcmlhQXR0cikgPT4ge1xuICAgIGlmIChzdWJJdGVtKSB7XG4gICAgICAgIHN1Ykl0ZW0uY2xhc3NMaXN0W3R5cGVdKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdWJJdGVtLmFyaWFFeHBhbmRlZCA9IFthcmlhQXR0cl07XG4gICAgICAgIC8vIHN1Ykl0ZW0uc3R5bGUuaGVpZ2h0ID0gYCR7IGhlaWdodCB9cHhgO1xuICAgIH1cbn07XG5cbi8vIE9wZW4gc3VibWVudVxuY29uc3Qgb3BlblN1Yk1lbnUgPSAoaXRlbSwgaXRlbVBhcmVudCwgaXRlbU1lbnUpID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXRvZ2dsZWQnKTtcbiAgICBpdGVtUGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW5lZCcpO1xuICAgIHNob3dIaWRlU3ViSXRlbShpdGVtTWVudSwgJ2FkZCcsICd0cnVlJyk7XG59O1xuXG4vLyBDbG9zZSBzdWJtZW51XG5jb25zdCBjbG9zZVN1Yk1lbnUgPSAoaXRlbSwgaXRlbVBhcmVudCwgaXRlbU1lbnUpID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXRvZ2dsZWQnKTtcbiAgICBpdGVtUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW5lZCcpO1xuICAgIHNob3dIaWRlU3ViSXRlbShpdGVtTWVudSwgJ3JlbW92ZScsICdmYWxzZScpO1xufTtcblxuLy8gQ2hlY2sgZm9yIHN1Ym1lbnUgaXRlbXNcbmNvbnN0IGNoZWNrQ2hpbGRTdWJNZW51ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCB0b2dnbGVJbm5lckJ1dHRvbiA9IEFycmF5LmZyb20oaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtc3ViLW1lbnUtdG9nZ2xlJykpO1xuICAgIGlmICh0b2dnbGVJbm5lckJ1dHRvbikge1xuICAgICAgICB0b2dnbGVJbm5lckJ1dHRvbi5mb3JFYWNoKChpbm5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkU3ViTWVudSA9IGlubmVySXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoY2hpbGRTdWJNZW51LmFyaWFFeHBhbmRlZCA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRTdWJNZW51LmFyaWFFeHBhbmRlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkU3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkU3ViTWVudS5hcmlhRXhwYW5kZWQgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgb3Blbk1vYmlsZU1lbnUsIGNsb3NlTW9iaWxlTWVudSwgY2xvc2VTdWJNZW51LCBvcGVuU3ViTWVudSwgY2hlY2tDaGlsZFN1Yk1lbnUsXG59O1xuIiwiLyoqXG4gKiBDb2xsYXBzZVxuICpcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9kYWlseWpzL21pbWlja2luZy1ib290c3RyYXBzLWNvbGxhcHNlLXdpdGgtdmFuaWxsYS1qYXZhc2NyaXB0LWIzYmIzODkwNDBlN1xuICovXG5cbmNvbnN0IGRzX2NvbGxhcHNlID0gKCkgPT4ge1xuICAgIC8vIEhhbmRsZXIgdGhhdCB1c2VzIHZhcmlvdXMgZGF0YS0qIGF0dHJpYnV0ZXMgdG8gdHJpZ2dlclxuICAgIC8vIHNwZWNpZmljIGFjdGlvbnMsIG1pbWljaW5nIGJvb3RzdHJhcHMgYXR0cmlidXRlc1xuICAgIGNvbnN0IHRyaWdnZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodHJpZ2dlcnMuaW5jbHVkZXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JUZXh0Q2xvc2VkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dC1jbG9zZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yVGV4dE9wZW5lZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHQtb3BlbmVkJyk7XG4gICAgICAgICAgICBjb2xsYXBzZShzZWxlY3RvciwgJ3RvZ2dsZScpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlLXRyaWdnZXItLW9wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlLXRyaWdnZXItLW9wZW5lZCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSBzZWxlY3RvclRleHRDbG9zZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZS10cmlnZ2VyLS1vcGVuZWQnKTtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuaW5uZXJIVE1MID0gc2VsZWN0b3JUZXh0T3BlbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgY29uc3QgZm5tYXAgPSB7XG4gICAgICAgIHRvZ2dsZTogJ3RvZ2dsZScsXG4gICAgICAgIHNob3c6ICdhZGQnLFxuICAgICAgICBoaWRlOiAncmVtb3ZlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgY29sbGFwc2UgPSAoc2VsZWN0b3IsIGNtZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0W2ZubWFwW2NtZF1dKCdpcy1zaG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbn07XG5cbmV4cG9ydCB7XG4gICAgZHNfY29sbGFwc2UsXG59O1xuIiwiLyoqXG4gKiBUb2dnbGUgZWxlbWVudCBvbiBjbGlja1xuICpcbiAqIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tc2hvdy1hbmQtaGlkZS1lbGVtZW50cy13aXRoLXZhbmlsbGEtamF2YXNjcmlwdC9cbiAqL1xuaW1wb3J0IHsgdV90b2dnbGVFbGVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvdV9zaG93LWhpZGUtZGlzcGxheSc7XG5cbmNvbnN0IGRzX3RvZ2dsZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnW2RhdGEtanM9XCJ0b2dnbGUtZWxlbWVudFwiXScpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29udGVudFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS50YXJnZXQuaGFzaCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBjb250ZW50XG4gICAgICAgICAgICB1X3RvZ2dsZUVsZW0oY29udGVudCk7XG5cbiAgICAgICAgfVxuXG4gICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IHtcbiAgICBkc190b2dnbGVFbGVtZW50LFxufTtcbiIsImltcG9ydCB7IHVfZXh0ZW5kT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Vfb2JqZWN0X2V4dGVuZFwiO1xuXG5jbGFzcyBEU01QTWVkaWFDb250cm9scyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICAgJy5qcy12aWRlby1pbml0JyxcbiAgICAgICAgICAgIHdyYXBwZXI6ICAgICdqcy12aWRlby13cmFwJyxcbiAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICBwbGF5OiAgICcuYnRuLXBsYXknLFxuICAgICAgICAgICAgICAgIG11dGU6ICAgJy5idG4tbXV0ZScsXG4gICAgICAgICAgICAgICAgY2xvc2U6ICAnLmJ0bi1jbG9zZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgcGF1c2U6ICAgICAgICAgICAnaXMtcGF1c2UnLFxuICAgICAgICAgICAgICAgIHBsYXlpbmc6ICAgICAgICAgJ2lzLXBsYXlpbmcnLFxuICAgICAgICAgICAgICAgIHNvdW5kOiAgICAgICAgICAgJ2lzLXNvdW5kJyxcbiAgICAgICAgICAgICAgICBtdXRlOiAgICAgICAgICAgICdpcy1tdXRlZCcsXG4gICAgICAgICAgICAgICAgcGFyZW50UGxheTogICAgICAnaXMtdmlkZW8tcGxheWluZycsXG4gICAgICAgICAgICAgICAgcGFyZW50UGF1c2U6ICAgICAnaXMtdmlkZW8tcGF1c2VkJyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyQXV0b3BsYXk6ICdqcy10cmlnZ2VyLWF1dG9wbGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRyb2xzOiAgICAgICBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSB1X2V4dGVuZE9iamVjdCh0aGlzLmRlZmF1bHRzLCBvcHRpb25zICk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5zZWxlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuYmluZFRvZ2dsZVBsYXkgPSB0aGlzLnRvZ2dsZVBsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgc2VsZi5iaW5kVG9nZ2xlTXV0ZSA9IHRoaXMudG9nZ2xlTXV0ZS5iaW5kKHRoaXMpO1xuICAgICAgICBzZWxmLmJpbmRFbmRlZFZpZGVvID0gdGhpcy5lbmRlZFZpZGVvLmJpbmQodGhpcyk7XG5cbiAgICAgICAgWy4uLnNlbGYuaXRlbXNdLmZvckVhY2goKHZpZGVvKSA9PiB7XG5cbiAgICAgICAgICAgIGlmKCFzZWxmLmNvbmZpZy5jb250cm9scylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2aWRlby5jb250cm9scyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmlkZW9Db250YWluZXIgPSB2aWRlby5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgdmlkZW9Db250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy53cmFwcGVyKTtcbiAgICAgICAgICAgIGxldCBidG5QbGF5ID0gdmlkZW9Db250YWluZXIucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5idXR0b25zLnBsYXkpO1xuICAgICAgICAgICAgbGV0IGJ0bk11dGUgPSB2aWRlb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLmJ1dHRvbnMubXV0ZSk7XG5cbiAgICAgICAgICAgIC8vIGJpbmQgZXZlbnRzIHRvIGJ1dHRvbnNcblxuICAgICAgICAgICAgaWYoYnRuUGxheSkge1xuICAgICAgICAgICAgICAgIGJ0blBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLmJpbmRUb2dnbGVQbGF5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYnRuTXV0ZSkge1xuICAgICAgICAgICAgICAgIGJ0bk11dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLmJpbmRUb2dnbGVNdXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYmluZCBldmVudCB0byB2aWRlbyBpdHNlbGZcbiAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5iaW5kRW5kZWRWaWRlbywgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAodmlkZW8uY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGYuY29uZmlnLmNsYXNzZXMudHJpZ2dlckF1dG9wbGF5KSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRQbGF5KHZpZGVvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlbmRlZFZpZGVvKGV2KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHZpZGVvID0gZXYuY3VycmVudFRhcmdldDtcbiAgICAgICAgbGV0IHBhcmVudFdyYXAgPSB2aWRlby5jbG9zZXN0KCcuJytzZWxmLmNvbmZpZy53cmFwcGVyKTtcbiAgICAgICAgbGV0IGJ0blBsYXkgPSBwYXJlbnRXcmFwLnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuYnV0dG9ucy5wbGF5KTtcblxuICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGJ0blBsYXkuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLnBhdXNlKTtcbiAgICAgICAgYnRuUGxheS5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuY29uZmlnLmNsYXNzZXMucGxheWluZyk7XG4gICAgICAgIHBhcmVudFdyYXAuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLnBhcmVudFBsYXkpO1xuICAgIH1cblxuICAgIHRvZ2dsZVBsYXkoZXYpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZWxlbSA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGxldCBwYXJlbnRXcmFwID0gZWxlbS5jbG9zZXN0KCcuJytzZWxmLmNvbmZpZy53cmFwcGVyKTtcbiAgICAgICAgbGV0IHZpZGVvID0gcGFyZW50V3JhcC5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLnNlbGVjdG9yKTtcblxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkIHx8IHZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5wbGF5aW5nKTtcbiAgICAgICAgICAgIHBhcmVudFdyYXAuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLnBhcmVudFBsYXkpO1xuICAgICAgICAgICAgcGFyZW50V3JhcC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuY29uZmlnLmNsYXNzZXMucGFyZW50UGF1c2UpO1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuY29uZmlnLmNsYXNzZXMucGF1c2UpO1xuICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMucGF1c2UpO1xuICAgICAgICAgICAgcGFyZW50V3JhcC5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMucGFyZW50UGF1c2UpO1xuICAgICAgICAgICAgcGFyZW50V3JhcC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuY29uZmlnLmNsYXNzZXMucGFyZW50UGxheSk7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5wbGF5aW5nKTtcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNdXRlKGV2KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGVsZW0gPSBldi5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBsZXQgcGFyZW50V3JhcCA9IGVsZW0uY2xvc2VzdCgnLicrc2VsZi5jb25maWcud3JhcHBlcik7XG4gICAgICAgIGxldCB2aWRlbyA9IHBhcmVudFdyYXAucXVlcnlTZWxlY3RvcihzZWxmLmNvbmZpZy5zZWxlY3Rvcik7XG5cbiAgICAgICAgdmlkZW8ubXV0ZWQgPSAhdmlkZW8ubXV0ZWQ7XG4gICAgICAgIGlmICh2aWRlby5tdXRlZCkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMubXV0ZSk7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5zb3VuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuY2xhc3Nlcy5zb3VuZCk7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi5jb25maWcuY2xhc3Nlcy5tdXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3BQbGF5KGVsZW0pIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdmlkZW8gPSBlbGVtO1xuICAgICAgICBsZXQgdmlkZW9Db250YWluZXIgPSB2aWRlby5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgYnRuUGxheSA9IHZpZGVvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZi5jb25maWcuYnV0dG9ucy5wbGF5KTtcblxuICAgICAgICBpZiAoIXZpZGVvLnBhdXNlZCB8fCAhdmlkZW8uZW5kZWQpIHtcbiAgICAgICAgICAgIGJ0blBsYXkuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5jbGFzc2VzLnBhdXNlKTtcbiAgICAgICAgICAgIC8vIHZUYWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy12aWRlby1wYXVzZWQnKTtcbiAgICAgICAgICAgIGJ0blBsYXkuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLnBsYXlpbmcpO1xuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0UGxheShlbGVtKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHZpZGVvID0gZWxlbTtcbiAgICAgICAgbGV0IHZpZGVvQ29udGFpbmVyID0gdmlkZW8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGJ0blBsYXkgPSB2aWRlb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGYuY29uZmlnLmJ1dHRvbnMucGxheSk7XG5cbiAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCB8fCB2aWRlby5lbmRlZCkge1xuICAgICAgICAgICAgYnRuUGxheS5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmNsYXNzZXMucGxheWluZyk7XG4gICAgICAgICAgICAvKnZUYWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy12aWRlby1wbGF5aW5nJyk7XG4gICAgICAgICAgICB2VGFnLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlkZW8tcGF1c2VkJyk7Ki9cbiAgICAgICAgICAgIGJ0blBsYXkuY2xhc3NMaXN0LnJlbW92ZShzZWxmLmNvbmZpZy5jbGFzc2VzLnBhdXNlKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRFNNUE1lZGlhQ29udHJvbHM7IiwiY29uc3QgYWRkT2JzZXJ2ZXIgPSAoZWwsIHBhcmFtcykgPT4ge1xuICAgIGlmICghKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5jbGFzc05hbWUpO1xuICAgICAgICBpZiAocGFyYW1zLmNiKSB7XG4gICAgICAgICAgICBwYXJhbXMuY2IoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQocGFyYW1zLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7IE1hdGgucm91bmQoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gKiAxMDApIH0lYCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5jYikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2IoZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucmVwZWF0ICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMucmVwZWF0ID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiBwYXJhbXMubWFyZ2luLFxuICAgICAgICB0aHJlc2hvbGQ6IHBhcmFtcy50aHJlc2hvbGQsXG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRPYnNlcnZlcjtcbiIsIi8qKlxuICogRW5hYmxlIGJ5IHRvZ2dsaW5nIG9wdGlvbiBpbiBtb2R1bGUgQURWQU5DRUQgU0VUVElOR1MvRUZGRUNUIGluIHdwLWFkbWluIHBhZ2UuXG4gKiBNb2R1bGUgaGFzIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAqXG4gKiBFTkFCTEVEIChPTi9PRkYpOlxuICogVHJpZ2dlcnMgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb24gbW9kdWxlLlxuICogTGluazogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbk9ic2VydmVyXG4gKlxuICogUkVQRUFUQUJMRSAoT04vT0ZGKTpcbiAqIENoZWNrIGlmIHRoZSBhbmltYXRpb24gaXMgcmVwZWF0ZWQgZWFjaCB0aW1lIG1vZHVsZXMgZW50ZXJzIHZpZXdwb3J0LlxuICpcbiAqIEVGRkVDVCAoU0VMRUNUIE9QVElPTik6XG4gKiBDaG9vc2VzIGZyb20gb25lIG9mIHByZWRlZmluZWQgYW5pbWF0aW9uIGVmZmVjdHMuXG4gKiBZb3UgY2FuIGFsc28gZG8gYSBjdXN0b20gQ1NTIGFuaW1hdGlvbiBieSBhZGRpbmcgY3VzdG9tIGNsYXNzIGFuZCBhbmltYXRpb24gaXQgaW4gQ1NTLlxuICpcbiAqIEJhc2ljIENTUyBhbmltYXRpb25zOlxuICogTG9jYXRpb246IHdwLWNvbnRlbnQvdGhlbWVzL2RpZ2l0YWxleHByZXNzL2Fzc2V0cy9fc3JjL3Nhc3MvdmlzdWFscy9hbmltYXRlL19hLXZpZXdwb3J0LnNjc3NcbiAqXG4gKiBDdXN0b20gQ1NTIGFuaW1hdGlvbnM6XG4gKiBMb2NhdGlvbjogd3AtY29udGVudC90aGVtZXMvZGlnaXRhbGV4cHJlc3MvYXNzZXRzL19zcmMvc2Fzcy9wcm9qZWN0LWN1c3RvbS9fY3VzdG9tX19hbmltYXRpb25zLnNjc3NcbiAqXG4gKiBUSFJFU0hPTEQgKFNURVBTIFNMSURFUik6XG4gKiBTcGVjaWZpZXMgJ3RocmVzaG9sZCcgb2YgdGhlIGVsZW1lbnQ6XG4gKiBMaW5rOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvdGhyZXNob2xkc1xuICpcbiAqIE1BUkdJTiAoSU5QVVQgRklFTEQpOlxuICogU3BlY2lmaWVzICdyb290TWFyZ2luJyBvZiB0aGUgZWxlbWVudDpcbiAqIExpbms6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25PYnNlcnZlci9yb290TWFyZ2luXG4gKlxuICogQ3VzdG9tIG92ZXJyaWRlcyBjYW4gYmUgYWRkZWQuXG4gKiBDYWxsYmFjayBmdW5jdGlvbiBjYW4gYmUgdHJpZ2dlcmVkIHdoZW4gZWxlbWVudHMgZW50ZXJzIHZpZXdwb3J0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2Ugb24gYSBjdXN0b20gZWxlbWVudDpcbiAqIG5ldyBEU01QVmlld0FuaW0oe1xuICogICAgICAgICBzZWxlY3RvcjogJy5jdXN0b20tc2VsZWN0b3InLFxuICogICAgICAgICBjbGFzczogJy5jdXN0b20tYW5pbWF0aW9uLWNsYXNzJyxcbiAqICAgICAgICAgcmVwZWF0OiAndHJ1ZScsXG4gKiAgICAgICAgIHRocmVzaG9sZDogJzAnLFxuICogICAgICAgICBtYXJnaW46ICcwcHggMHB4IC0xMCUgMHB4JyxcbiAqICAgICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiBlbGVtZW50IGlzIGludGVyc2VjdGluZ1xuICogICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICogICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gKiAgICAgICB9LFxuICogIH0pO1xuICovXG5cbmltcG9ydCB7IHVfdGhyb3R0bGVkIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgYWRkT2JzZXJ2ZXIgZnJvbSAnLi91X2lvLWFuaW0tb2JzZXJ2ZXInO1xuXG5jbGFzcyBEU01QVmlld0FuaW0ge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtdmlld3BvcnQ9XCJ0cnVlXCJdJyxcbiAgICAgICAgICAgIHJlcGVhdDogJ2ZhbHNlJyxcbiAgICAgICAgICAgIGNsYXNzOiAnaW4tdmlldycsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICBtYXJnaW46ICcwcHggMHB4IDBweCAwcHgnLFxuICAgICAgICAgICAgY2FsbGJhY2soKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uZmlnT3B0aW9ucyA9IHsgLi4udGhpcy5jb25maWcsIC4uLm9wdGlvbnMgfHwge30gfTtcbiAgICAgICAgdGhpcy50cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWdPcHRpb25zLnNlbGVjdG9yKTtcblxuICAgICAgICB0aGlzLmluVmlld3BvcnQoKTtcbiAgICAgICAgdGhpcy5pb0JpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpblZpZXdwb3J0KCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0OiB0cmlnZ2VyLmRhdGFzZXQudmlld3BvcnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiB0cmlnZ2VyLmRhdGFzZXQudmlld3BvcnRUaHJlc2hvbGQsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB0cmlnZ2VyLmRhdGFzZXQudmlld3BvcnRNYXJnaW4sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICByZXBlYXQsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICAgICAgICAgIG1hcmdpbixcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbmZpZ09wdGlvbnM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICByZXBlYXQ6IGF0dHJSZXBlYXQsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiBhdHRyVGhyZXNob2xkLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXR0ck1hcmdpbixcbiAgICAgICAgICAgIH0gPSBhdHRyO1xuXG4gICAgICAgICAgICBhZGRPYnNlcnZlcihcbiAgICAgICAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IGF0dHJSZXBlYXQgfHwgcmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IGF0dHJUaHJlc2hvbGQgfHwgdGhyZXNob2xkLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF0dHJNYXJnaW4gfHwgbWFyZ2luLFxuICAgICAgICAgICAgICAgICAgICBjYjogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlvQmluZEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgdGhyb3R0bGVJblZpZXcgPSB1X3Rocm90dGxlZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluVmlld3BvcnQoKTtcbiAgICAgICAgfSwgMzApO1xuXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlSW5WaWV3LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlSW5WaWV3LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhyb3R0bGVJblZpZXcsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRFNNUFZpZXdBbmltO1xuIiwiaW1wb3J0IHsgdV90aHJvdHRsZWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKipcbiAqIHN0YW5kYWxvbmUgZnVuY3Rpb24gdGhhdCBjaGVja3Mgd2hldGhlciBkZXZpY2UgaXMgdG91Y2ggb3Igbm90XG4gKiBjYWxsIGl0IHdpdGhpbiBhbnl0aGluZyxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCB1X2lzVG91Y2hEZXZpY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgICAgICAgICAgICAgICAod2luZG93LkRvY3VtZW50VG91Y2ggJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSkpIHx8XG4gICAgICAgICEhKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzKSlcbiAgICApO1xufVxuXG4vKipcbiAqIGZ1bmN0aW9uIHRoYXQgY2FsbHMgaXNUb3VjaERldmljZSBmdW5jdGlvbixcbiAqL1xuY29uc3QgaXNUb3VjaEh0bWxVdGlsID0gKCkgPT4ge1xuICAgIGxldCB0b3VjaCA9IHVfaXNUb3VjaERldmljZSgpO1xuICAgIGxldCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdodG1sJyApWzBdO1xuXG4gICAgLy8gaWYgdHJ1ZSwgYWRkIHRvdWNoLWRldmljZSB0byBodG1sLCBvdGhlcndpc2Ugbm8tdG91Y2gtZGV2aWNlXG4gICAgaWYgKHRvdWNoKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnbm8tdG91Y2gtZGV2aWNlJyk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgndG91Y2gtZGV2aWNlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3RvdWNoLWRldmljZScpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ25vLXRvdWNoLWRldmljZScpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBleHBvcnRlZCBmdW5jdGlvbiBhZGRUb3VjaFRvSHRtbFV0aWxcbiAqIGltcG9ydGVkIGludG8gaW5kZXguanMgYW5kIGNhbGxlZCB3aGVuIERPTVJlYWR5LFxuICogY29udGFpbnMgJ3Jlc2l6ZScgZXZlbnQgbGlzdGVuZXIgdG8gY2hlY2sgZm9yXG4gKiBkZXZpY2Ugb3JpZW50YXRpb24sIG9yIGNoYW5nZXNcbiAqIGlzIHRocm90dGxlZCwgdG8gcHJldmVudCBjb250aW51b3VzbHkgdHJpZ2dlcmluZ1xuICogKG1pbiAzMDBtcyBzbyBjaHJvbWUgZGV2IHRvb2wgY2FuIGNhdGNoIGl0KVxuICovXG5jb25zdCB1X2FkZFRvdWNoVG9IdG1sID0gKCkgPT4ge1xuICAgIGlzVG91Y2hIdG1sVXRpbCgpO1xuXG4gICAgLy8gdGhyb3R0bGUgdGhlIGZ1bmN0aW9uXG4gICAgY29uc3QgdGhyb3R0bGVJc1RvdWNoID0gdV90aHJvdHRsZWQoKCkgPT4ge1xuICAgICAgICBpc1RvdWNoSHRtbFV0aWwoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgLy8gYmluZCByZXNpemUgZXZlbnRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICB0aHJvdHRsZUlzVG91Y2goKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgICB1X2lzVG91Y2hEZXZpY2UsXG4gICAgdV9hZGRUb3VjaFRvSHRtbFxufTtcblxuIiwiY29uc3QgdV9leHRlbmRPYmplY3QgPSAoZGVzdGluYXRpb24sIHNvdXJjZSkgPT4ge1xuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIHVfZXh0ZW5kT2JqZWN0KGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmNvbnN0IHVfZXh0ZW5kID0gKGRlZmF1bHRzLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgZXh0ZW5kZWRPcHRpb25zID0ge307XG4gICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgIGV4dGVuZGVkT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldIHx8IGRlZmF1bHRzW2tleV07XG4gICAgfVxuICAgIHJldHVybiBleHRlbmRlZE9wdGlvbnM7XG59O1xuXG5jb25zdCB1X21lcmdlRGVlcCA9ICh0YXJnZXQsIHNvdXJjZSkgPT4ge1xuICAgIGNvbnN0IGlzT2JqZWN0ID0gKG9iaikgPT4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4gICAgaWYgKCFpc09iamVjdCh0YXJnZXQpIHx8ICFpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpICYmIEFycmF5LmlzQXJyYXkoc291cmNlVmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFZhbHVlLmNvbmNhdChzb3VyY2VWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodGFyZ2V0VmFsdWUpICYmIGlzT2JqZWN0KHNvdXJjZVZhbHVlKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1X21lcmdlRGVlcChPYmplY3QuYXNzaWduKHt9LCB0YXJnZXRWYWx1ZSksIHNvdXJjZVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCB7XG4gICAgdV9leHRlbmQsXG4gICAgdV9leHRlbmRPYmplY3QsXG4gICAgdV9tZXJnZURlZXBcbn07IiwiLy8gUGFyc2UgdGhlIFVSTFxuY29uc3QgdV9nZXRQYXJhbWV0ZXJCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1cmxQYXJhbXMuZ2V0KG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnXG59O1xuXG5leHBvcnQge1xuICAgIHVfZ2V0UGFyYW1ldGVyQnlOYW1lXG59XG4iLCIvKipcbiAqIFZpc2liaWxpdHkgZnVuY3Rpb25zXG4gKi9cblxuY29uc3QgdV9zaG93RGlzcGxheSA9IChlbGVtKSA9PiB7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5jb25zdCB1X2hpZGVEaXNwbGF5ID0gKGVsZW0pID0+IHtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuY29uc3QgdV9zaG93RWxlbSA9IChlbGVtLCBoaWRkZW4gPSAnaXMtaGlkZGVuJywgdmlzaWJsZSA9ICdpcy1zaG93bicpID0+IHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQodmlzaWJsZSk7XG59XG5cbmNvbnN0IHVfaGlkZUVsZW0gPSAoZWxlbSwgaGlkZGVuID0gJ2lzLWhpZGRlbicsIHZpc2libGUgPSAnaXMtc2hvd24nKSA9PiB7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGhpZGRlbik7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHZpc2libGUpO1xufVxuXG5jb25zdCB1X3RvZ2dsZUVsZW0gPSAoZWxlbSwgaGlkZGVuID0gJ2lzLWhpZGRlbicpID0+IHtcbiAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoaGlkZGVuKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1X3Nob3dFbGVtLFxuICAgIHVfaGlkZUVsZW0sXG4gICAgdV90b2dnbGVFbGVtLFxuICAgIHVfc2hvd0Rpc3BsYXksXG4gICAgdV9oaWRlRGlzcGxheVxufSIsIlxuY29uc3QgdV9kZWJvdW5jZWQgPSAoZnVuYywgZGVsYXksIGltbWVkaWF0ZSkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBib3VuZEZ1bmMgPSBmdW5jLmJpbmQodGhpcywgLi4uYXJncyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZXJJZCkge1xuICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FsbGVlRnVuYyA9IGltbWVkaWF0ZSA/ICgpID0+IHsgdGltZXJJZCA9IG51bGwgfSA6IGJvdW5kRnVuYztcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoY2FsbGVlRnVuYywgZGVsYXkpO1xuICAgIH1cbn1cblxuY29uc3QgdV90aHJvdHRsZWQgPSAoZnVuYywgZGVsYXksIGltbWVkaWF0ZSkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBib3VuZEZ1bmMgPSBmdW5jLmJpbmQodGhpcywgLi4uYXJncyk7XG4gICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZXJJZCkge1xuICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIGJvdW5kRnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgdV9kZWJvdW5jZWQsXG4gICAgdV90aHJvdHRsZWRcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAqIEB0aXRsZSBNYWluIEFwcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpY2F0aW9uIGVudHJ5IHBvaW50XG4gKi9cblxuLy8gVXRpbHNcbmltcG9ydCB7IHVfYWRkVG91Y2hUb0h0bWwgfSBmcm9tICcuL3V0aWxzL3VfaXMtdG91Y2gtZGV2aWNlJztcbi8vIGltcG9ydCB7IHVfc2Nyb2xsRWZmZWN0IH0gZnJvbSAnLi91dGlscy91X3Njcm9sbC1lZmZlY3QnO1xuaW1wb3J0IERTTVBWaWV3QW5pbSBmcm9tICcuL3V0aWxzL3VfaW8tYW5pbSc7XG5cbi8vIEhlYWRlclxuaW1wb3J0IHsgZHNfaGVhZGVyU3RpY2t5IH0gZnJvbSAnLi9oZWFkZXIvZHNfaGVhZGVyU3RpY2t5JztcbmltcG9ydCB7IGRzX2hlYWRlclNlYXJjaCB9IGZyb20gJy4vaGVhZGVyL2RzX2hlYWRlclNlYXJjaCc7XG5pbXBvcnQgeyBkc19oZWFkZXJNZW51VG9nZ2xlIH0gZnJvbSAnLi9oZWFkZXIvZHNfaGVhZGVyTWVudVRvZ2dsZSc7XG5pbXBvcnQgeyBkc19oZWFkZXJNZW51U3ViTWVudVRvZ2dsZSB9IGZyb20gJy4vaGVhZGVyL2RzX21lbnVTdWJNZW51VG9nZ2xlJztcbmltcG9ydCB7IGRzX2hlYWRlck1vYmlsZVN3aXBlVXAgfSBmcm9tICcuL2hlYWRlci9kc19oZWFkZXJNb2JpbGVTd2lwZVVwJztcbi8vIGltcG9ydCB7IGRzX2hlYWRlckhlaWdodCB9IGZyb20gXCIuL2hlYWRlci9kc19oZWFkZXJIZWlnaHRcIjtcblxuLy8gRnVuY3Rpb24gQ2FsbHNcblxuaW1wb3J0IHsgZHNfY29sbGFwc2UgfSBmcm9tICcuL2xpYnJhcnkvY29sbGFwc2Vycy9kc19jb2xsYXBzZSc7XG5pbXBvcnQgeyBkc190b2dnbGVFbGVtZW50IH0gZnJvbSAnLi9saWJyYXJ5L2NvbGxhcHNlcnMvZHNfdG9nZ2xlRWxlbWVudCc7XG5pbXBvcnQgeyBkc19yZWFkTW9yZSB9IGZyb20gJy4vZnVuY3Rpb24tY2FsbHMvdGlueW1jZS1yZWFkLW1vcmUvZHNfcmVhZE1vcmUnO1xuaW1wb3J0IHsgZHNfbG9hZE1vcmVCbG9nIH0gZnJvbSAnLi9ibG9nL2RzX2Jsb2ctZmlsdGVyJztcblxuLy8gTGlicmFyaWVzXG5pbXBvcnQgRFNNUE1lZGlhQ29udHJvbHMgZnJvbSAnLi9saWJyYXJ5L21lZGlhLWNvbnRyb2xzL21lZGlhLWNvbnRyb2wnO1xuXG4vLyBDb21wb25lbnRzXG5cbi8vIGltcG9ydCBQcm9ncmVzc0NpcmNsZUNvdW50ZXIgZnJvbSAnLi9saWJyYXJ5L2NvdW50ZXJzL3Byb2dyZXNzLWNvdW50ZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIENoZWNrIHdoZXRoZXIgaXQgaXMgdG91Y2ggZGV2aWNlIG9yIG5vdFxuICAgIHVfYWRkVG91Y2hUb0h0bWwoKTtcbiAgICAvLyB1X3Njcm9sbEVmZmVjdCgpXG5cbiAgICAvKipcbiAgICAgKiBIZWFkZXJcbiAgICAgKi9cbiAgICAvLyBTdGlja3kgaGVhZGVyXG4gICAgZHNfaGVhZGVyU3RpY2t5KCcuc2l0ZS1oZWFkZXInLCAnaXMtc3RpY2t5Jyk7XG4gICAgLy8gZHNfaGVhZGVySGVpZ2h0KCk7XG5cbiAgICAvKipcbiAgICAgKiBNb2JpbGUgbWVudSBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgLy8gTW9iaWxlIG1lbnUgdG9nZ2xlXG4gICAgZHNfaGVhZGVyTWVudVRvZ2dsZSgnLmpzLW0tYnVyZ2VyLXRvZ2dsZScpO1xuICAgIC8vIE1vYmlsZSBtZW51IHN1Ym1lbnUgdG9nZ2xlXG4gICAgZHNfaGVhZGVyTWVudVN1Yk1lbnVUb2dnbGUoJy5qcy1tLWJ1cmdlci13cmFwJywgJy5qcy1tLWJ1cmdlci10b2dnbGUnKTtcbiAgICAvLyBNb2JpbGUgbWVudSBzd2lwZSB1cCBjbG9zZVxuICAgIGRzX2hlYWRlck1vYmlsZVN3aXBlVXAoJy5qcy1tLWJ1cmdlci10b2dnbGUnKTtcblxuICAgIC8qKlxuICAgICAqIERlc2t0b3AgbWVudSBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgLy8gRGVza3RvcCBidXJnZXIgbWVudSB0b2dnbGVcbiAgICBkc19oZWFkZXJNZW51VG9nZ2xlKCcuanMtZC1idXJnZXItdG9nZ2xlJyk7XG4gICAgLy8gRGVza3RvcCBidXJnZXIgbWVudSBzdWJtZW51IHRvZ2dsZVxuICAgIGRzX2hlYWRlck1lbnVTdWJNZW51VG9nZ2xlKCcuanMtZC1idXJnZXItd3JhcCcsICcuanMtZC1idXJnZXItdG9nZ2xlJyk7XG4gICAgZHNfaGVhZGVyU2VhcmNoKCk7XG5cbiAgICAvKipcbiAgICAgKiBVdGlsc1xuICAgICAqL1xuICAgIGRzX2NvbGxhcHNlKCk7XG4gICAgZHNfcmVhZE1vcmUoKTtcbiAgICBkc190b2dnbGVFbGVtZW50KCk7XG5cbiAgICAvLyBNb3ZlIHRvIGpzLWJsb2cuanMgaWYgbm90IHVzaW5nIENvbnRlbnQgYmxvY2sgd2l0aCBsb2FkIG1vcmVcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFqYXgtYmxvY2snKSkge1xuICAgICAgICBkc19sb2FkTW9yZUJsb2coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaWJyYXJpZXNcbiAgICAgKi9cbiAgICBuZXcgRFNNUE1lZGlhQ29udHJvbHMoKTtcblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudHNcbiAgICAgKi9cblxuLyogICAgbmV3IFByb2dyZXNzQ2lyY2xlQ291bnRlcih7XG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxuICAgIH0pOyovXG5cbiAgICBuZXcgRFNNUFZpZXdBbmltKHt9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAvLyBFbmFibGUgaWYgdXNpbmcgbGF6eSBsb2FkIG9uIFZpZGVvIChzZXQgZGF0YS1zcmMgaW5zdGVhZCBvZiBzcmMpXG4gICAgLy8gbGV0IGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoKTtcbn0pO1xuXG5cblxuXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKTsgLy8gc2VsZWN0LWJveFxuXG5pZiAoc2VsZWN0Lmxlbmd0aCkge1xuICAgIHNlbGVjdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RDdXJyZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fY3VycmVudFwiKTtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNob2ljZTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gICAgICAgIGlmIChlbCA9PT0gXCJjaG9vc2VuXCIgJiYgc2VsZWN0Q3VycmVudC5pbm5lclRleHQgIT09IHRleHQpIHtcbiAgICAgICAgICBzZWxlY3RDdXJyZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcl9fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1vYmlsZS1tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdzaGFkb3cnKTtcbiAgfSkiXSwibmFtZXMiOlsidV9nZXRQYXJhbWV0ZXJCeU5hbWUiLCJkc19sb2FkTW9yZUJsb2ciLCIkIiwiRFNJbml0RmlsdGVyIiwibW9kdWxlIiwiZmlsdGVyIiwiYWN0aW9uIiwiZm9ybSIsIm1vcmVCdG4iLCJyZXN1bHRzIiwiZG9pbmdfYWpheCIsInRpbWVvdXQiLCJxdWVyeSIsInBvc3RfdHlwZSIsInBlcl9wYWdlIiwicGFnZSIsIm1haW5fdGF4b25vbXkiLCJjb21wb25lbnRfc3R5bGVzIiwicGFnZV9udW0iLCJhamF4X3VybCIsImRzIiwicGFnZV9nZXRfcGFyYW1ldGVyX2VuYWJsZSIsInByZWxvYWRlciIsImluaXQiLCJhamF4TW9kdWxlIiwiaW5pdGlhbFBhZ2VOdW1iZXIiLCJkYXRhIiwicGFyc2VJbnQiLCJwb3N0c19wZXJfcGFnZSIsImluaXRFbGVtZW50c0FjdGlvbnMiLCJmaW5kIiwibW9yZVBvc3RzIiwiY2hhbmdlRm9ybSIsImNvbXBDbGFzcyIsImNsYXNzIiwiY29tcFN0eWxlcyIsInN0eWxlcyIsImNvbXBJbWFnZSIsImltYWdlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kQWpheCIsIiRpbnB1dF90ZXh0IiwidW5iaW5kIiwibm90Iiwia2V5dXAiLCJrZXlDb2RlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIiRpbnB1dF9zdWJtaXQiLCJwYXJlbnQiLCJhZGRDbGFzcyIsImNsaWNrIiwiJHNlbGVjdCIsImNoYW5nZSIsIiRjdXJyZW50SXRlbSIsInRhcmdldCIsIiRpbnB1dFRhcmdldCIsImNvbmNhdCIsIiRzZWxlY3RlZE9wdGlvbiIsInZhbCIsInRyaWdnZXIiLCIkbGlzdCIsImZpcnN0IiwicmVtb3ZlQ2xhc3MiLCIkYWN0aXZlVGVybSIsIl9maWx0ZXIkZm9ybSRmaW5kIiwiYXR0ciIsInByb3AiLCJldmVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInB1c2hfc3RhdGUiLCJsb2FkX21vcmVfdXNlZCIsImJyb3dzZXJfYnV0dG9uX3VzZWQiLCJhYm9ydCIsInJlbW92ZSIsInBhZ2VkIiwiY29tcG9uZW50IiwiZGV2aWNlIiwid2luZG93Iiwid2lkdGgiLCJzZXJpYWxpemUiLCJidWlsZF91cmwiLCJfdV9nZXRQYXJhbWV0ZXJCeU5hbWUiLCJhamF4IiwidXJsIiwidHlwZSIsImJlZm9yZVNlbmQiLCJ4aHIiLCJhcHBlbmQiLCJzdWNjZXNzIiwiX3VfZ2V0UGFyYW1ldGVyQnlOYW1lMiIsImh0bWwiLCJwb3N0cyIsIm1heF9wYWdlcyIsImhpZGUiLCJzaG93IiwidG90YWxfcG9zdHNfc2hvd2luZyIsInRleHQiLCJ0b3RhbF9wb3N0cyIsIl9maWx0ZXIkZm9ybSRmaW5kJGZpciIsInB1c2hfcGFnZV9udW0iLCJ1cmxfcGFyc2Vfc2lkZSIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwiVVJMIiwib2xkVXJsIiwiaGlzdG9yeSIsInN0YXRlIiwicGF0aCIsImlucHV0UHVzaFVybCIsInNlYXJjaFBhcmFtcyIsInNldCIsImlzTmFOIiwiZGVsZXRlIiwiZWFjaCIsImpRdWVyeSIsImRlY29kZWRfdXJsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidG9TdHJpbmciLCJwdXNoU3RhdGUiLCJkb0luaXQiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJyZUluaXRGaWx0ZXIiLCJwYXJzZWRVcmwiLCJjdXJyZW50VXJsIiwiY2xlYW5lZFVybCIsInBhcmFtcyIsInRyaWdnZXJDaGFuZ2UiLCIkcGFnZU51bSIsIl9wYXJhbXMkZ2V0IiwiZ2V0IiwiaW5kZXgiLCJlbGVtIiwiX3BhcmFtcyRnZXQyIiwiJHRoaXMiLCJfcGFyYW1zJGdldDMiLCJ2YWx1ZSIsImhhc0NsYXNzIiwic2VsZWN0ZWRPcHRpb24iLCIkbmV3U2VsZWN0ZWRPcHRpb24iLCJkc19yZWFkTW9yZSIsInJlYWRNb3JlV3JhcHBlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVhZE1vcmVXcmFwcGVyIiwicmVhZE1vcmVCdG4iLCJxdWVyeVNlbGVjdG9yIiwiYnRuVGV4dE5vQWN0aXZlIiwiZ2V0QXR0cmlidXRlIiwiYnRuVGV4dEFjdGl2ZSIsImNoaWxkcmVuIiwidGV4dENvbnRlbnQiLCJyZWFkTW9yZVRleHQiLCJpc0FjdGl2ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVhZE1vcmVUZXh0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJhZGQiLCJvcGVuTW9iaWxlTWVudSIsImNsb3NlTW9iaWxlTWVudSIsImRzX2hlYWRlck1lbnVUb2dnbGUiLCJlbCIsImJ0biIsImJvZHkiLCJ1X2lzVG91Y2hEZXZpY2UiLCJkc19oZWFkZXJNb2JpbGVTd2lwZVVwIiwibW9iaWxlTmF2IiwieERvd24iLCJ5RG93biIsInRvdWNoIiwiaXNTY3JvbGxhYmxlWSIsImVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJoYW5kbGVUb3VjaE1vdmUiLCJldnQiLCJ4VXAiLCJ0b3VjaGVzIiwiY2xpZW50WCIsInlVcCIsImNsaWVudFkiLCJ4RGlmZiIsInlEaWZmIiwiTWF0aCIsImFicyIsImhhbmRsZVRvdWNoU3RhcnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25jZSIsInVfaGlkZUVsZW0iLCJ1X3Nob3dFbGVtIiwiZHNfaGVhZGVyU2VhcmNoIiwiaW5wdXQiLCJzaG93T3ZlcmxheSIsImZvY3VzIiwiY2xvc2VPdmVybGF5IiwibWF0Y2hlcyIsImtleSIsInVfdGhyb3R0bGVkIiwiZHNfaGVhZGVyU3RpY2t5IiwiZWxDbGFzcyIsIiQkaGVhZGVyIiwiZWxIZWlnaHQiLCJvZmZzZXQiLCJvblNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwidGhyb3R0bGVTY3JvbGwiLCJjaGVja0NoaWxkU3ViTWVudSIsImNsb3NlU3ViTWVudSIsIm9wZW5TdWJNZW51IiwiZHNfaGVhZGVyTWVudVN1Yk1lbnVUb2dnbGUiLCJjbG9zZUVsIiwiZWxlIiwiY2xvc2VFbGUiLCJ0b2dnbGVCdXR0b25zIiwidG9nZ2xlQnV0dG9uIiwidG9nZ2xlQ29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsInRvZ2dsZUJ1dHRvbk1lbnVJdGVtIiwicGFyZW50RWxlbWVudCIsImlzVG9nZ2xlZCIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwic2V0QXR0cmlidXRlIiwic2hvd0hpZGVTdWJJdGVtIiwic3ViSXRlbSIsImFyaWFBdHRyIiwiYXJpYUV4cGFuZGVkIiwiaXRlbVBhcmVudCIsIml0ZW1NZW51IiwidG9nZ2xlSW5uZXJCdXR0b24iLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJJdGVtIiwiY2hpbGRTdWJNZW51IiwiZHNfY29sbGFwc2UiLCJ0cmlnZ2VycyIsInNlbGVjdG9yIiwic2VsZWN0b3JUZXh0Q2xvc2VkIiwic2VsZWN0b3JUZXh0T3BlbmVkIiwiY29sbGFwc2UiLCJpbm5lckhUTUwiLCJmbm1hcCIsInRvZ2dsZSIsImNtZCIsInRhcmdldHMiLCJ1X3RvZ2dsZUVsZW0iLCJkc190b2dnbGVFbGVtZW50IiwiY29udGVudCIsImhhc2giLCJ1X2V4dGVuZE9iamVjdCIsIkRTTVBNZWRpYUNvbnRyb2xzIiwib3B0aW9ucyIsIl9jbGFzc0NhbGxDaGVjayIsImRlZmF1bHRzIiwid3JhcHBlciIsImJ1dHRvbnMiLCJwbGF5IiwibXV0ZSIsImNsb3NlIiwiY2xhc3NlcyIsInBhdXNlIiwicGxheWluZyIsInNvdW5kIiwicGFyZW50UGxheSIsInBhcmVudFBhdXNlIiwidHJpZ2dlckF1dG9wbGF5IiwiY29udHJvbHMiLCJjb25maWciLCJpdGVtcyIsIl9jcmVhdGVDbGFzcyIsInNlbGYiLCJiaW5kVG9nZ2xlUGxheSIsInRvZ2dsZVBsYXkiLCJiaW5kIiwiYmluZFRvZ2dsZU11dGUiLCJ0b2dnbGVNdXRlIiwiYmluZEVuZGVkVmlkZW8iLCJlbmRlZFZpZGVvIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidmlkZW8iLCJ2aWRlb0NvbnRhaW5lciIsImJ0blBsYXkiLCJidG5NdXRlIiwic3RhcnRQbGF5IiwiZXYiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50V3JhcCIsImNsb3Nlc3QiLCJjdXJyZW50VGltZSIsInBhdXNlZCIsImVuZGVkIiwibXV0ZWQiLCJzdG9wUGxheSIsImFkZE9ic2VydmVyIiwiY2IiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyZXBlYXQiLCJ1bm9ic2VydmUiLCJyb290Iiwicm9vdE1hcmdpbiIsIm1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJEU01QVmlld0FuaW0iLCJjYWxsYmFjayIsImNvbmZpZ09wdGlvbnMiLCJfb2JqZWN0U3ByZWFkIiwiaW5WaWV3cG9ydCIsImlvQmluZEV2ZW50cyIsIl90aGlzIiwiZGF0YXNldCIsInZpZXdwb3J0UmVwZWF0Iiwidmlld3BvcnRUaHJlc2hvbGQiLCJ2aWV3cG9ydE1hcmdpbiIsIl90aGlzJGNvbmZpZ09wdGlvbnMiLCJhdHRyUmVwZWF0IiwiYXR0clRocmVzaG9sZCIsImF0dHJNYXJnaW4iLCJfdGhpczIiLCJ0aHJvdHRsZUluVmlldyIsInBhc3NpdmUiLCJEb2N1bWVudFRvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtc01heFRvdWNoUG9pbnRzIiwiaXNUb3VjaEh0bWxVdGlsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1X2FkZFRvdWNoVG9IdG1sIiwidGhyb3R0bGVJc1RvdWNoIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJwcm9wZXJ0eSIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwidV9leHRlbmQiLCJleHRlbmRlZE9wdGlvbnMiLCJ1X21lcmdlRGVlcCIsImlzT2JqZWN0Iiwib2JqIiwiX3R5cGVvZiIsImtleXMiLCJ0YXJnZXRWYWx1ZSIsInNvdXJjZVZhbHVlIiwiaXNBcnJheSIsImFzc2lnbiIsIm5hbWUiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInVfc2hvd0Rpc3BsYXkiLCJkaXNwbGF5IiwidV9oaWRlRGlzcGxheSIsImhpZGRlbiIsInZpc2libGUiLCJ1X2RlYm91bmNlZCIsImZ1bmMiLCJkZWxheSIsImltbWVkaWF0ZSIsInRpbWVySWQiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJib3VuZEZ1bmMiLCJhcHBseSIsImNhbGxlZUZ1bmMiLCJfbGVuMiIsIl9rZXkyIiwic2VsZWN0Iiwic2VsZWN0Q3VycmVudCIsImNob2ljZSIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=