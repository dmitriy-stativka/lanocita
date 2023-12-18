/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./assets/_src/js/woocommerce/dswc_cart.js":
/*!*************************************************!*\
  !*** ./assets/_src/js/woocommerce/dswc_cart.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_updateCart: function() { return /* binding */ dswc_updateCart; }
/* harmony export */ });
/* harmony import */ var _extras_dswc_updateInputQuantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras/dswc_updateInputQuantity */ "./assets/_src/js/woocommerce/extras/dswc_updateInputQuantity.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Cart page: Update cart
 */


var cartFormEl = document.querySelector('.woocommerce-cart-form');
function _updateCartInit() {
  $(document.body).on('click', '.item_qty.plus', function (e) {
    e.preventDefault();
    (0,_extras_dswc_updateInputQuantity__WEBPACK_IMPORTED_MODULE_0__._updateInputQuantity)($(this), 1);
  });
  $(document.body).on('click', '.item_qty.minus', function (e) {
    e.preventDefault();
    (0,_extras_dswc_updateInputQuantity__WEBPACK_IMPORTED_MODULE_0__._updateInputQuantity)($(this), -1);
  });
}
var dswc_updateCart = function dswc_updateCart() {
  if (cartFormEl) {
    _updateCartInit();
  }
};


/***/ }),

/***/ "./assets/_src/js/woocommerce/dswc_sidebarToggle.js":
/*!**********************************************************!*\
  !*** ./assets/_src/js/woocommerce/dswc_sidebarToggle.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_sidebarToggle: function() { return /* binding */ dswc_sidebarToggle; }
/* harmony export */ });
/**
 * Shop page sidebar, toggle on click
 */

var showFilterBtn = document.getElementById('show-filter');
var hideFilterBtn = document.getElementById('close-filter');
var hideFilterMobileBtn = document.getElementById('close-filter-mobile');
var mobileSidebarOverlayEl = document.getElementById('close-filter-mobile-overlay');
var sidebarWrapper = document.querySelector('.woocommerce-archive-content');
var sidebar = document.querySelector('.woocommerce-sidebar');
var dswc_sidebarToggle = function dswc_sidebarToggle() {
  // Show sidebar on button click
  if (showFilterBtn) {
    showFilterBtn.addEventListener('click', function (ev) {
      _onShowSidebarClick();
    });
  }

  // Hide sidebar on button click
  if (hideFilterBtn) {
    hideFilterBtn.addEventListener('click', function (ev) {
      _onHideSidebarClick();
    });
  }

  // Hide mobile sidebar on button click
  if (hideFilterMobileBtn) {
    hideFilterMobileBtn.addEventListener('click', function (ev) {
      _onHideMobileSidebarClick();
    });
  }

  // Hide mobile sidebar on overlay click
  if (mobileSidebarOverlayEl) {
    mobileSidebarOverlayEl.addEventListener('click', function (ev) {
      _onHideMobileSidebarClick();
    });
  }
};

/**
 * Show sidebar, replace visible filter button
 */
function _onShowSidebarClick() {
  sidebarWrapper.classList.add('-has-sidebar');
  sidebar.classList.add('is-visible', 'is-visible-on-mobile');
  showFilterBtn.classList.remove('is-active');
  hideFilterBtn.classList.add('is-active');
}

/**
 * Hide sidebar, replace visible filter button
 */
function _onHideSidebarClick() {
  sidebarWrapper.classList.remove('-has-sidebar');
  sidebar.classList.remove('is-visible');
  hideFilterBtn.classList.remove('is-active');
  showFilterBtn.classList.add('is-active');
}

/**
 * Hide mobile sidebar
 */
function _onHideMobileSidebarClick() {
  sidebar.classList.remove('is-visible-on-mobile');
}


/***/ }),

/***/ "./assets/_src/js/woocommerce/dswc_stickyShipping.js":
/*!***********************************************************!*\
  !*** ./assets/_src/js/woocommerce/dswc_stickyShipping.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_stickyShippingBar: function() { return /* binding */ dswc_stickyShippingBar; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./assets/_src/js/utils/utils.js");
/**
 * Sticky shipping bar
 */



/**
 * Add/remove class  on scroll
 */
var shippingBarEl = document.getElementById('shipping-bar');
function _stickyShippingBarInit(offset) {
  var onScroll = function onScroll() {
    if (window.pageYOffset > offset) {
      shippingBarEl.classList.add('expandable');
    } else {
      shippingBarEl.classList.remove('expandable');
    }
  };
  var throttleScroll = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_throttled)(function () {
    onScroll();
  }, 30);
  window.addEventListener('scroll', function () {
    throttleScroll();
  });
}
var dswc_stickyShippingBar = function dswc_stickyShippingBar() {
  if (shippingBarEl && shippingBarEl.classList.contains('sticky') && !shippingBarEl.classList.contains('expandable')) {
    _stickyShippingBarInit(10);
  }
};


/***/ }),

/***/ "./assets/_src/js/woocommerce/extras/dswc_toggleProductGrid.js":
/*!*********************************************************************!*\
  !*** ./assets/_src/js/woocommerce/extras/dswc_toggleProductGrid.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_toggleProductGrid: function() { return /* binding */ dswc_toggleProductGrid; }
/* harmony export */ });
/**
 * Toggle Product Grid
 */

function dswc_toggleProductGrid() {
  var productGridBtn = document.querySelector('#grid-toggle');
  if (!productGridBtn) return;
  var productListBtn = document.querySelector('#list-toggle');
  var productGrid = document.querySelector('.woocommerce-archive-content .products');
  function toggleProductGrid() {
    productListBtn.classList.remove('is-active');
    productGridBtn.classList.add('is-active');
    productGrid.classList.add('-grid');
    productGrid.classList.remove('-list');
    localStorage.setItem('grid', 'enabled');
    document.dispatchEvent(new CustomEvent('gridChange', {
      bubbles: false,
      detail: {
        elem: 4
      }
    }));
  }
  function toggleProductList() {
    productGridBtn.classList.remove('is-active');
    productListBtn.classList.add('is-active');
    productGrid.classList.add('-list');
    productGrid.classList.remove('-grid');
    localStorage.setItem('grid', 'disabled');
    document.dispatchEvent(new CustomEvent('gridChange', {
      bubbles: false,
      detail: {
        elem: 2
      }
    }));
  }
  productGridBtn.addEventListener('click', function () {
    toggleProductGrid();
  });
  productListBtn.addEventListener('click', function () {
    toggleProductList();
  });

  // const productSortBtn = document.querySelector('.facetwp-facet-sort_by');
  // productSortBtn.addEventListener('click', () => {
  //     productSortBtn.classList.toggle('is-active');
  // });

  var getGrid = localStorage.getItem('grid');
  if (getGrid === 'disabled') {
    toggleProductList();
  } else {
    toggleProductGrid();
  }
}

/***/ }),

/***/ "./assets/_src/js/woocommerce/extras/dswc_updateInputQuantity.js":
/*!***********************************************************************!*\
  !*** ./assets/_src/js/woocommerce/extras/dswc_updateInputQuantity.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _updateInputQuantity: function() { return /* binding */ _updateInputQuantity; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Update quantity input on click
 */
var _updateInputQuantity = function _updateInputQuantity(el, value) {
  var input = el.parent().find('input.qty');
  var quantity = parseInt(input.val(), 10);

  // Check max value
  if (value > 0) {
    var maxAttr = input.attr('max');
    if (_typeof(maxAttr) !== ( true ? "undefined" : 0) && maxAttr !== false && quantity >= parseInt(maxAttr, 10)) {
      return false;
    }
  }

  // Check min value
  if (value < 0) {
    var minAttr = input.attr('min');
    if (_typeof(minAttr) !== ( true ? "undefined" : 0) && minAttr !== false && quantity <= parseInt(minAttr, 10)) {
      return false;
    }
  }

  // Update value
  input.val(quantity + value);

  // Trigger cart update
  var updateCartBtn = $("[name='update_cart']");
  updateCartBtn.removeAttr('disabled');

  // TODO: If you want to trigger cart update when you change product quantity, uncomment the line below
  updateCartBtn.trigger('click');
};


/***/ }),

/***/ "./assets/_src/js/woocommerce/my-account/dswc_sidebarToggle.js":
/*!*********************************************************************!*\
  !*** ./assets/_src/js/woocommerce/my-account/dswc_sidebarToggle.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_myAccSidebar: function() { return /* binding */ dswc_myAccSidebar; }
/* harmony export */ });
/**
 * My account pages sidebar, toggle on click
 */

var showSidebarBtn = document.getElementById('show-my-acc-sidebar');
var hideSidebarBtn = document.getElementById('hide-my-acc-sidebar');
var sidebarEl = document.querySelector('.woocommerce-navigation-wrapper');
var popupAccOverlay = '<div class="ds-acc-overlay js-toggle-acc"></div>';

/**
 * Show sidebar, replace visible filter button
 */
function _onShowSidebarClick() {
  sidebarEl.classList.add('is-visible');
  showSidebarBtn.classList.remove('is-active');
  hideSidebarBtn.classList.add('is-active');
  document.body.classList.add('ds-menu-active');
  sidebarEl.insertAdjacentHTML('afterbegin', popupAccOverlay);
  document.querySelector('.js-toggle-acc').addEventListener('click', function () {
    _onHideSidebarClick();
  });
}

/**
 * Hide sidebar, replace visible filter button
 */
function _onHideSidebarClick() {
  sidebarEl.classList.remove('is-visible');
  hideSidebarBtn.classList.remove('is-active');
  showSidebarBtn.classList.add('is-active');
  document.querySelector('.ds-acc-overlay').remove();
  document.body.classList.remove('ds-menu-active');
}
var dswc_myAccSidebar = function dswc_myAccSidebar() {
  if (showSidebarBtn) {
    showSidebarBtn.addEventListener('click', function () {
      _onShowSidebarClick();
    });
  }
  if (hideSidebarBtn) {
    hideSidebarBtn.addEventListener('click', function () {
      _onHideSidebarClick();
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/woocommerce/single-product/dswc_gallery.js":
/*!*******************************************************************!*\
  !*** ./assets/_src/js/woocommerce/single-product/dswc_gallery.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_singleProdGallery: function() { return /* binding */ dswc_singleProdGallery; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Gallery (slider/carousel) on single product page
 */

var productGalleryEl = document.querySelector(".woocommerce-product-gallery");
var productThumbnailsEl = document.querySelector(".woocommerce-product-gallery__nav");
// NOTE:
// Make sure to update CSS variable --wc-gallery-thumb-items into product-gallery.scss file
// to match JS variables for number of thumbnail items
var numberOfThumbnailImages = 6;
var numberOfTabletThumbnailImages = 4;
var numberOfMobileThumbnailImages = 3;
function dswc_singleProdGallery() {
  if (productThumbnailsEl) {
    _productGalleryInit();
  }
}
function _productGalleryInit() {
  // Get number of product images
  var numberOfImages = _getNumberOfProductImages(".woocommerce-product-gallery__nav");
  // Initialize main img slider
  var mainSlider = _mainProductImgSliderInit(".woocommerce-product-gallery__wrapper");
  // Initialize thumbnail images slider
  var thumbnailSliderDirection = productGalleryEl.getAttribute("data-direction");
  var thumbnailSlider = _productThumbnailImagesSliderInit(".woocommerce-product-gallery__nav", numberOfImages, thumbnailSliderDirection);
  // If number of product images is bigger than default visible thumbnails, connect main slider and thumbnail slider controls
  if (_isSliderNavigationVisible(numberOfImages)) {
    mainSlider.controller.control = thumbnailSlider;
    thumbnailSlider.controller.control = mainSlider;
    // And remove navigation binding (bottom arrows will work only for thumbnail slider, not for main)
    mainSlider.navigation.destroy();
  } else {
    // If not, use thumbnail slider and pagination for main slider
    mainSlider.thumbs.swiper = thumbnailSlider;
    mainSlider.thumbs.init();
  }
  // Open fancybox on img click
  _openImgInFancybox(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image");
}

/**
 * Initialize slider for main product image
 *
 * @param {string} className
 * @param {'horizontal' | 'vertical'} direction
 * @returns {Swiper}
 */
function _mainProductImgSliderInit(className, direction) {
  var sliderDirection = direction !== null && direction !== void 0 ? direction : "horizontal";
  return new Swiper(className, {
    direction: sliderDirection,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        loopedSlides: numberOfMobileThumbnailImages,
        autoHeight: true
      },
      // when window width is >= 768px
      768: {
        loopedSlides: numberOfTabletThumbnailImages
      },
      // when window width is >= 1112px
      1112: {
        loopedSlides: numberOfThumbnailImages,
        autoHeight: false
      }
    }
  });
}

/**
 * Initialize slider for product thumbnail images
 *
 * @param {string} className
 * @param {number} items
 * @param {'horizontal' | 'vertical'} direction
 * @returns {Swiper}
 */
function _productThumbnailImagesSliderInit(className, items, direction) {
  var sliderDirection = direction !== null && direction !== void 0 ? direction : "horizontal";
  // Default slider options
  var options = {
    direction: sliderDirection,
    slidesPerView: items,
    // centeredSlides: true,
    spaceBetween: 10
  };
  // Update options if number of product images is less then default visible thumbnails
  // Show navigation arrows for thumbnail slider
  if (_isSliderNavigationVisible(items, numberOfMobileThumbnailImages)) {
    options.slideToClickedSlide = true;
    options.loop = true;
    options.navigation = {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    };
    options.breakpoints = {
      // when window width is >= 320px
      320: {
        slidesPerView: numberOfMobileThumbnailImages,
        loopedSlides: numberOfMobileThumbnailImages
      },
      // when window width is >= 768px
      768: {
        slidesPerView: numberOfTabletThumbnailImages,
        loopedSlides: numberOfTabletThumbnailImages
      },
      // when window width is >= 1112px
      1112: {
        slidesPerView: numberOfThumbnailImages,
        loopedSlides: numberOfThumbnailImages
      }
    };
  }
  return new Swiper(className, options);
}

/**
 * Return number of product images based on data attribute
 *
 * @param {string} className
 * @returns number
 */
function _getNumberOfProductImages(className) {
  var swiperThumbnailEl = $(className);
  return parseInt(swiperThumbnailEl.data("items"));
}

/**
 * Open image in fancybox on click
 *
 * @param {string} className
 */
function _openImgInFancybox(className) {
  $().fancybox({
    selector: "".concat(className, " a:visible"),
    backFocus: false,
    mobile: {
      clickContent: "close",
      clickSlide: "close"
    }
  });
}

/**
 * Retun true if number of thumbnails is bigger than default visible thumbnails
 *
 * @param {number} numberOfImages
 * @param numberOfSliderPerView
 * @returns boolean
 */
function _isSliderNavigationVisible(numberOfImages) {
  var numberOfSliderPerView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : numberOfThumbnailImages;
  return numberOfImages > numberOfSliderPerView;
}

/***/ }),

/***/ "./assets/_src/js/woocommerce/single-product/dswc_productQuantity.js":
/*!***************************************************************************!*\
  !*** ./assets/_src/js/woocommerce/single-product/dswc_productQuantity.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_singleProdQty: function() { return /* binding */ dswc_singleProdQty; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Update product quantity on single product page
 */

var productQuantityEl = document.querySelectorAll('.product .quantity');
function _singleProductQuantityInit(el) {
  var increaseProductBtn = el.querySelector('.item_qty.plus');
  var decreaseProductBtn = el.querySelector('.item_qty.minus');
  var productQuantityInput = el.querySelector('input.qty');
  increaseProductBtn.addEventListener('click', function (ev) {
    ev.preventDefault;
    _increaseProductQuantity(productQuantityInput);
  });
  decreaseProductBtn.addEventListener('click', function (ev) {
    ev.preventDefault;
    _decreaseProductQuantity(productQuantityInput);
  });
}
function _increaseProductQuantity(input) {
  var quantity = !input.value ? 0 : parseInt(input.value, 10);

  // Check max value
  var maxAttr = input.getAttribute('max');
  if (_typeof(maxAttr) !== ( true ? "undefined" : 0) && maxAttr !== false && quantity >= parseInt(maxAttr, 10)) {
    return false;
  }
  input.value = quantity + 1;
}
function _decreaseProductQuantity(input) {
  var quantity = !input.value ? 0 : parseInt(input.value, 10);

  // Check min value
  var minAttr = input.getAttribute('min');
  if (_typeof(minAttr) !== ( true ? "undefined" : 0) && minAttr !== false && quantity <= parseInt(minAttr, 10)) {
    return false;
  }
  input.value = quantity - 1;
}
var dswc_singleProdQty = function dswc_singleProdQty() {
  if (productQuantityEl) {
    productQuantityEl.forEach(function (el) {
      _singleProductQuantityInit(el);
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/woocommerce/single-product/extras/dswc_reviewsFormValidation.js":
/*!****************************************************************************************!*\
  !*** ./assets/_src/js/woocommerce/single-product/extras/dswc_reviewsFormValidation.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_reviewsFormValidation: function() { return /* binding */ dswc_reviewsFormValidation; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./assets/_src/js/utils/utils.js");
/**
 * Review Form Validation
 */


var dswc_reviewsFormValidation = function dswc_reviewsFormValidation() {
  /**
   * Select elements
   */
  var _wcReviewForm = document.querySelector('#commentform');
  if (!_wcReviewForm) return;
  var _wcTextInput = document.querySelectorAll('#commentform input#author, #commentform input#email, #commentform textarea');
  var _wcReviewSubmit = document.querySelector('#commentform input[type=submit]');
  var _wcReviewEmail = document.querySelector("#commentform [name='email']");
  var _wcReviewName = document.querySelector("#commentform [name='author']");
  var _wcReviewComment = document.querySelector("#commentform [name='comment']");

  /**
   * Set TRUE or FALSE
   * TRUE = for button to be disabled and enabled it after input validation.
   * FALSE = Form will validate on click.
   */
  var blur = true;

  /**
   * Set messages
   */
  var _messageRequired = 'This is a required field.';
  var _messageEmail = 'Your email is invalid.';
  /**
   * Set regex checks for inputs
   */
  var _validateRegexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Append errors
  var errorAppend = function errorAppend(t, m, c) {
    var messageContainer = document.createElement('span');
    messageContainer.textContent = m;
    messageContainer.classList.add('wc-form-error');
    messageContainer.classList.add("wc-form-error-".concat(c));
    t.parentNode.appendChild(messageContainer);
  };

  // Remove errors
  var errorRemove = function errorRemove(t) {
    var error = t.parentNode.querySelectorAll('.wc-form-error');
    if (error) {
      error.forEach(function (err) {
        err.remove();
      });
    }
  };

  // Validate inputs and append messages function
  var validateRequired = function validateRequired(t, message, messageClass, regex, regexMessage) {
    if (!t.checkValidity()) {
      if (!t.parentNode.querySelector(".wc-form-error-".concat(messageClass))) {
        if (regex && !t.value.match(regex)) {
          errorAppend(t, regexMessage, messageClass);
        } else {
          errorAppend(t, message, messageClass);
        }
      }
      return false;
    }
    errorRemove(t, messageClass);
    return true;
  };

  // Validation
  var validateFields = function validateFields() {
    // Validate name
    var _isNameValid = function _isNameValid() {
      if (!_wcReviewName) return;
      var _validateName = function _validateName() {
        return validateRequired(_wcReviewName, _messageRequired, 'required');
      };
      _wcReviewName.addEventListener('input', function () {
        var debounceValidation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_debounced)(function () {
          _validateName();
        }, 150);
        debounceValidation();
      });
      return _validateName();
    };

    // Validate comment
    var _isCommentValid = function _isCommentValid() {
      if (!_wcReviewComment) return;
      var _validateComment = function _validateComment() {
        return validateRequired(_wcReviewComment, _messageRequired, 'required');
      };
      _wcReviewComment.addEventListener('input', function () {
        var debounceValidation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_debounced)(function () {
          _validateComment();
        }, 150);
        debounceValidation();
      });
      return _validateComment();
    };

    // Validate email with regex
    var _isEmailValid = function _isEmailValid() {
      if (!_wcReviewEmail) return;
      var _validateEmail = function _validateEmail() {
        return validateRequired(_wcReviewEmail, _messageRequired, 'required', _validateRegexEmail, _messageEmail);
      };
      _wcReviewEmail.addEventListener('input', function () {
        var debounceValidation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_debounced)(function () {
          _validateEmail();
        }, 150);
        debounceValidation();
      });
      return _validateEmail();
    };

    // Init input validations
    _isNameValid();
    _isCommentValid();
    _isEmailValid();

    // Return TRUE or False
    if (!document.querySelector('body').classList.contains('logged-in')) {
      return _isNameValid() && _isCommentValid() && _isEmailValid();
    }
    return _isCommentValid();
  };

  // Init validation
  if (blur) {
    var validate = function validate() {
      if (!validateFields()) {
        // evt.preventDefault();
        validateFields();
        _wcReviewSubmit.setAttribute('disabled', '');
      } else {
        _wcReviewSubmit.removeAttribute('disabled');
      }
    };
    _wcReviewSubmit.setAttribute('disabled', '');
    _wcTextInput.forEach(function (item) {
      var eventList = ['focusin', 'focusout', 'input'];
      eventList.forEach(function (event) {
        item.addEventListener(event, function (evt) {
          var debounceValidation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_debounced)(function () {
            evt.preventDefault();
            validate();
          }, 150);
          debounceValidation();
        }, true);
      });
    });
  } else {
    _wcReviewForm.addEventListener('submit', function (evt) {
      if (!validateFields()) {
        evt.preventDefault();
        validateFields();
      }
    }, true);
  }
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
  !*** ./assets/_src/js/js-wc.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_dswc_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./woocommerce/dswc_cart */ "./assets/_src/js/woocommerce/dswc_cart.js");
/* harmony import */ var _woocommerce_dswc_sidebarToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./woocommerce/dswc_sidebarToggle */ "./assets/_src/js/woocommerce/dswc_sidebarToggle.js");
/* harmony import */ var _woocommerce_single_product_dswc_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./woocommerce/single-product/dswc_gallery */ "./assets/_src/js/woocommerce/single-product/dswc_gallery.js");
/* harmony import */ var _woocommerce_single_product_dswc_productQuantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./woocommerce/single-product/dswc_productQuantity */ "./assets/_src/js/woocommerce/single-product/dswc_productQuantity.js");
/* harmony import */ var _woocommerce_dswc_stickyShipping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./woocommerce/dswc_stickyShipping */ "./assets/_src/js/woocommerce/dswc_stickyShipping.js");
/* harmony import */ var _woocommerce_my_account_dswc_sidebarToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./woocommerce/my-account/dswc_sidebarToggle */ "./assets/_src/js/woocommerce/my-account/dswc_sidebarToggle.js");
/* harmony import */ var _woocommerce_single_product_extras_dswc_reviewsFormValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./woocommerce/single-product/extras/dswc_reviewsFormValidation */ "./assets/_src/js/woocommerce/single-product/extras/dswc_reviewsFormValidation.js");
/* harmony import */ var _woocommerce_extras_dswc_toggleProductGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./woocommerce/extras/dswc_toggleProductGrid */ "./assets/_src/js/woocommerce/extras/dswc_toggleProductGrid.js");
/**
 * WOOCOMMERCE
 * If the Woocommerce plugin is active, related files are loaded in class assets.
 * 'js-wc.js' (this file) is for the rest of Woocommerce related javascript's.
 * 'js-wc-main.js' is used for non-woocommerce pages.
 */


// import { dswc_ajax } from './woocommerce/dswc_ajax';


// import { dswc_categoryToggle } from './woocommerce/dswc_categoryToggle';





// import { dswc_reviewsAddFormToggle } from './woocommerce/single-product/extras/dswc_reviewsFormAddToggle';


// import { dswc_btnExtendIcon } from './woocommerce/extras/dswc_btnIconExtend';

document.addEventListener('DOMContentLoaded', function () {
  /** AJAX CALLS */
  // dswc_ajax();

  /** CART PAGE */
  (0,_woocommerce_dswc_cart__WEBPACK_IMPORTED_MODULE_0__.dswc_updateCart)();

  /** PRODUCT LISTING PAGE */
  (0,_woocommerce_dswc_sidebarToggle__WEBPACK_IMPORTED_MODULE_1__.dswc_sidebarToggle)();
  // dswc_categoryToggle();
  (0,_woocommerce_extras_dswc_toggleProductGrid__WEBPACK_IMPORTED_MODULE_7__.dswc_toggleProductGrid)();

  /** SINGLE PRODUCT PAGE */
  (0,_woocommerce_single_product_dswc_gallery__WEBPACK_IMPORTED_MODULE_2__.dswc_singleProdGallery)();
  (0,_woocommerce_single_product_dswc_productQuantity__WEBPACK_IMPORTED_MODULE_3__.dswc_singleProdQty)();

  // Enable this if shipping bar should be sticky
  (0,_woocommerce_dswc_stickyShipping__WEBPACK_IMPORTED_MODULE_4__.dswc_stickyShippingBar)();

  /**
   If you are using default reviews, you need to enable
   SCSS $--wc-components__tabs-reviews to ON in __custom__wc-config.scss.
   Validation can be on FORM SUBMIT or WHILE TYPING (LIVE).
   Settings for that are inside reviews_form-validation.js
   */
  (0,_woocommerce_single_product_extras_dswc_reviewsFormValidation__WEBPACK_IMPORTED_MODULE_6__.dswc_reviewsFormValidation)();

  // Enable this if form should be opened by a click of a button
  // dswc_reviewsAddFormToggle();

  /** MY ACCOUNT PAGES */
  (0,_woocommerce_my_account_dswc_sidebarToggle__WEBPACK_IMPORTED_MODULE_5__.dswc_myAccSidebar)();

  /**
   Enable this if you need to extend icons on Woocommerce buttons.
   You need to enable SCSS $--wc-buttons-with-icons to ON in __custom__wc-config.scss.
   */
  // dswc_btnExtendIcon();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOztFQUVqQjtFQUNBUSxtRkFBa0IsQ0FBQyxDQUFDO0VBQ3BCO0VBQ0FrQixrR0FBc0IsQ0FBQyxDQUFDOztFQUV4QjtFQUNBMEMsZ0dBQXNCLENBQUMsQ0FBQztFQUN4Qm1ELG9HQUFrQixDQUFDLENBQUM7O0VBRXBCO0VBQ0EvRix3RkFBc0IsQ0FBQyxDQUFDOztFQUV4QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSWlHLHlIQUEwQixDQUFDLENBQUM7O0VBRTVCO0VBQ0E7O0VBRUE7RUFDQTNELDZGQUFpQixDQUFDLENBQUM7O0VBRW5CO0FBQ0o7QUFDQTtBQUNBO0VBQ0k7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy93b29jb21tZXJjZS9kc3djX2NhcnQuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy93b29jb21tZXJjZS9kc3djX3NpZGViYXJUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy93b29jb21tZXJjZS9kc3djX3N0aWNreVNoaXBwaW5nLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvd29vY29tbWVyY2UvZXh0cmFzL2Rzd2NfdG9nZ2xlUHJvZHVjdEdyaWQuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy93b29jb21tZXJjZS9leHRyYXMvZHN3Y191cGRhdGVJbnB1dFF1YW50aXR5LmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvd29vY29tbWVyY2UvbXktYWNjb3VudC9kc3djX3NpZGViYXJUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy93b29jb21tZXJjZS9zaW5nbGUtcHJvZHVjdC9kc3djX2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy93b29jb21tZXJjZS9zaW5nbGUtcHJvZHVjdC9kc3djX3Byb2R1Y3RRdWFudGl0eS5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3dvb2NvbW1lcmNlL3NpbmdsZS1wcm9kdWN0L2V4dHJhcy9kc3djX3Jldmlld3NGb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvanMtd2MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB1X2RlYm91bmNlZCA9IChmdW5jLCBkZWxheSwgaW1tZWRpYXRlKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kRnVuYyA9IGZ1bmMuYmluZCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lcklkKSB7XG4gICAgICAgICAgICBib3VuZEZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsZWVGdW5jID0gaW1tZWRpYXRlID8gKCkgPT4geyB0aW1lcklkID0gbnVsbCB9IDogYm91bmRGdW5jO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dChjYWxsZWVGdW5jLCBkZWxheSk7XG4gICAgfVxufVxuXG5jb25zdCB1X3Rocm90dGxlZCA9IChmdW5jLCBkZWxheSwgaW1tZWRpYXRlKSA9PiB7XG4gICAgbGV0IHRpbWVySWQ7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kRnVuYyA9IGZ1bmMuYmluZCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKHRpbWVySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1tZWRpYXRlICYmICF0aW1lcklkKSB7XG4gICAgICAgICAgICBib3VuZEZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZighaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lcklkID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICB1X2RlYm91bmNlZCxcbiAgICB1X3Rocm90dGxlZFxufTsiLCIvKipcbiAqIENhcnQgcGFnZTogVXBkYXRlIGNhcnRcbiAqL1xuXG5pbXBvcnQgeyBfdXBkYXRlSW5wdXRRdWFudGl0eSB9IGZyb20gJy4vZXh0cmFzL2Rzd2NfdXBkYXRlSW5wdXRRdWFudGl0eSc7XG5cbmNvbnN0IGNhcnRGb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29vY29tbWVyY2UtY2FydC1mb3JtJyk7XG5cbmZ1bmN0aW9uIF91cGRhdGVDYXJ0SW5pdCgpIHtcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICcuaXRlbV9xdHkucGx1cycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3VwZGF0ZUlucHV0UXVhbnRpdHkoJCh0aGlzKSwgMSk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICcuaXRlbV9xdHkubWludXMnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF91cGRhdGVJbnB1dFF1YW50aXR5KCQodGhpcyksIC0xKTtcbiAgICB9KTtcbn1cblxuY29uc3QgZHN3Y191cGRhdGVDYXJ0ID0gKCkgPT4ge1xuICAgIGlmIChjYXJ0Rm9ybUVsKSB7XG4gICAgICAgIF91cGRhdGVDYXJ0SW5pdCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgZHN3Y191cGRhdGVDYXJ0LFxufTtcbiIsIi8qKlxuICogU2hvcCBwYWdlIHNpZGViYXIsIHRvZ2dsZSBvbiBjbGlja1xuICovXG5cbmNvbnN0IHNob3dGaWx0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1maWx0ZXInKTtcbmNvbnN0IGhpZGVGaWx0ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtZmlsdGVyJyk7XG5jb25zdCBoaWRlRmlsdGVyTW9iaWxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWZpbHRlci1tb2JpbGUnKTtcbmNvbnN0IG1vYmlsZVNpZGViYXJPdmVybGF5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtZmlsdGVyLW1vYmlsZS1vdmVybGF5Jyk7XG5jb25zdCBzaWRlYmFyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b29jb21tZXJjZS1hcmNoaXZlLWNvbnRlbnQnKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29vY29tbWVyY2Utc2lkZWJhcicpO1xuXG5jb25zdCBkc3djX3NpZGViYXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy8gU2hvdyBzaWRlYmFyIG9uIGJ1dHRvbiBjbGlja1xuICAgIGlmIChzaG93RmlsdGVyQnRuKSB7XG4gICAgICAgIHNob3dGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIF9vblNob3dTaWRlYmFyQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBzaWRlYmFyIG9uIGJ1dHRvbiBjbGlja1xuICAgIGlmIChoaWRlRmlsdGVyQnRuKSB7XG4gICAgICAgIGhpZGVGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIF9vbkhpZGVTaWRlYmFyQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBtb2JpbGUgc2lkZWJhciBvbiBidXR0b24gY2xpY2tcbiAgICBpZiAoaGlkZUZpbHRlck1vYmlsZUJ0bikge1xuICAgICAgICBoaWRlRmlsdGVyTW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBfb25IaWRlTW9iaWxlU2lkZWJhckNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhpZGUgbW9iaWxlIHNpZGViYXIgb24gb3ZlcmxheSBjbGlja1xuICAgIGlmIChtb2JpbGVTaWRlYmFyT3ZlcmxheUVsKSB7XG4gICAgICAgIG1vYmlsZVNpZGViYXJPdmVybGF5RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgICAgIF9vbkhpZGVNb2JpbGVTaWRlYmFyQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBTaG93IHNpZGViYXIsIHJlcGxhY2UgdmlzaWJsZSBmaWx0ZXIgYnV0dG9uXG4gKi9cbmZ1bmN0aW9uIF9vblNob3dTaWRlYmFyQ2xpY2soKSB7XG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnLWhhcy1zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJywgJ2lzLXZpc2libGUtb24tbW9iaWxlJyk7XG5cbiAgICBzaG93RmlsdGVyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGhpZGVGaWx0ZXJCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG59XG5cbi8qKlxuICogSGlkZSBzaWRlYmFyLCByZXBsYWNlIHZpc2libGUgZmlsdGVyIGJ1dHRvblxuICovXG5mdW5jdGlvbiBfb25IaWRlU2lkZWJhckNsaWNrKCkge1xuICAgIHNpZGViYXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJy1oYXMtc2lkZWJhcicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuXG4gICAgaGlkZUZpbHRlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBzaG93RmlsdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xufVxuXG4vKipcbiAqIEhpZGUgbW9iaWxlIHNpZGViYXJcbiAqL1xuZnVuY3Rpb24gX29uSGlkZU1vYmlsZVNpZGViYXJDbGljaygpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUtb24tbW9iaWxlJyk7XG59XG5cbmV4cG9ydCB7XG4gICAgZHN3Y19zaWRlYmFyVG9nZ2xlLFxufTtcbiIsIi8qKlxuICogU3RpY2t5IHNoaXBwaW5nIGJhclxuICovXG5cbmltcG9ydCB7IHVfdGhyb3R0bGVkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG4vKipcbiAqIEFkZC9yZW1vdmUgY2xhc3MgIG9uIHNjcm9sbFxuICovXG5jb25zdCBzaGlwcGluZ0JhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBwaW5nLWJhcicpO1xuXG5mdW5jdGlvbiBfc3RpY2t5U2hpcHBpbmdCYXJJbml0KG9mZnNldCkge1xuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICAgICAgICBzaGlwcGluZ0JhckVsLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBwaW5nQmFyRWwuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kYWJsZScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRocm90dGxlU2Nyb2xsID0gdV90aHJvdHRsZWQoKCkgPT4ge1xuICAgICAgICBvblNjcm9sbCgpO1xuICAgIH0sIDMwKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRocm90dGxlU2Nyb2xsKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGRzd2Nfc3RpY2t5U2hpcHBpbmdCYXIgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgICBzaGlwcGluZ0JhckVsXG4gICAgICAgICYmIHNoaXBwaW5nQmFyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGlja3knKVxuICAgICAgICAmJiAhc2hpcHBpbmdCYXJFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGFibGUnKVxuICAgICkge1xuICAgICAgICBfc3RpY2t5U2hpcHBpbmdCYXJJbml0KDEwKTtcbiAgICB9XG59O1xuXG5leHBvcnQge1xuICAgIGRzd2Nfc3RpY2t5U2hpcHBpbmdCYXIsXG59O1xuIiwiLyoqXG4gKiBUb2dnbGUgUHJvZHVjdCBHcmlkXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRzd2NfdG9nZ2xlUHJvZHVjdEdyaWQoKSB7XG4gICAgY29uc3QgcHJvZHVjdEdyaWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZC10b2dnbGUnKTtcbiAgICBpZiAoIXByb2R1Y3RHcmlkQnRuKSByZXR1cm47XG5cbiAgICBjb25zdCBwcm9kdWN0TGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LXRvZ2dsZScpO1xuICAgIGNvbnN0IHByb2R1Y3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvb2NvbW1lcmNlLWFyY2hpdmUtY29udGVudCAucHJvZHVjdHMnKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVByb2R1Y3RHcmlkKCkge1xuICAgICAgICBwcm9kdWN0TGlzdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgcHJvZHVjdEdyaWRCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIHByb2R1Y3RHcmlkLmNsYXNzTGlzdC5hZGQoJy1ncmlkJyk7XG4gICAgICAgIHByb2R1Y3RHcmlkLmNsYXNzTGlzdC5yZW1vdmUoJy1saXN0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdncmlkJywgJ2VuYWJsZWQnKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2dyaWRDaGFuZ2UnLCB7XG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGVsZW06IDQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlUHJvZHVjdExpc3QoKSB7XG4gICAgICAgIHByb2R1Y3RHcmlkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBwcm9kdWN0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgcHJvZHVjdEdyaWQuY2xhc3NMaXN0LmFkZCgnLWxpc3QnKTtcbiAgICAgICAgcHJvZHVjdEdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnLWdyaWQnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dyaWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2dyaWRDaGFuZ2UnLCB7XG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGVsZW06IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdEdyaWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVByb2R1Y3RHcmlkKCk7XG4gICAgfSk7XG5cbiAgICBwcm9kdWN0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlUHJvZHVjdExpc3QoKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IHByb2R1Y3RTb3J0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhY2V0d3AtZmFjZXQtc29ydF9ieScpO1xuICAgIC8vIHByb2R1Y3RTb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBwcm9kdWN0U29ydEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGdldEdyaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JpZCcpO1xuICAgIGlmIChnZXRHcmlkID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgIHRvZ2dsZVByb2R1Y3RMaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlUHJvZHVjdEdyaWQoKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSBxdWFudGl0eSBpbnB1dCBvbiBjbGlja1xuICovXG5jb25zdCBfdXBkYXRlSW5wdXRRdWFudGl0eSA9IChlbCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGVsLnBhcmVudCgpLmZpbmQoJ2lucHV0LnF0eScpO1xuICAgIGNvbnN0IHF1YW50aXR5ID0gcGFyc2VJbnQoaW5wdXQudmFsKCksIDEwKTtcblxuICAgIC8vIENoZWNrIG1heCB2YWx1ZVxuICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgY29uc3QgbWF4QXR0ciA9IGlucHV0LmF0dHIoJ21heCcpO1xuICAgICAgICBpZiAodHlwZW9mIG1heEF0dHIgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgbWF4QXR0ciAhPT0gZmFsc2UgJiYgcXVhbnRpdHkgPj0gcGFyc2VJbnQobWF4QXR0ciwgMTApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBtaW4gdmFsdWVcbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgIGNvbnN0IG1pbkF0dHIgPSBpbnB1dC5hdHRyKCdtaW4nKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtaW5BdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIG1pbkF0dHIgIT09IGZhbHNlICYmIHF1YW50aXR5IDw9IHBhcnNlSW50KG1pbkF0dHIsIDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHZhbHVlXG4gICAgaW5wdXQudmFsKHF1YW50aXR5ICsgdmFsdWUpO1xuXG4gICAgLy8gVHJpZ2dlciBjYXJ0IHVwZGF0ZVxuICAgIGNvbnN0IHVwZGF0ZUNhcnRCdG4gPSAkKFwiW25hbWU9J3VwZGF0ZV9jYXJ0J11cIik7XG4gICAgdXBkYXRlQ2FydEJ0bi5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuXG4gICAgLy8gVE9ETzogSWYgeW91IHdhbnQgdG8gdHJpZ2dlciBjYXJ0IHVwZGF0ZSB3aGVuIHlvdSBjaGFuZ2UgcHJvZHVjdCBxdWFudGl0eSwgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93XG4gICAgdXBkYXRlQ2FydEJ0bi50cmlnZ2VyKCdjbGljaycpO1xufTtcblxuZXhwb3J0IHtcbiAgICBfdXBkYXRlSW5wdXRRdWFudGl0eSxcbn07XG4iLCIvKipcbiAqIE15IGFjY291bnQgcGFnZXMgc2lkZWJhciwgdG9nZ2xlIG9uIGNsaWNrXG4gKi9cblxuY29uc3Qgc2hvd1NpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1teS1hY2Mtc2lkZWJhcicpO1xuY29uc3QgaGlkZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZS1teS1hY2Mtc2lkZWJhcicpO1xuY29uc3Qgc2lkZWJhckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvb2NvbW1lcmNlLW5hdmlnYXRpb24td3JhcHBlcicpO1xuY29uc3QgcG9wdXBBY2NPdmVybGF5ID0gJzxkaXYgY2xhc3M9XCJkcy1hY2Mtb3ZlcmxheSBqcy10b2dnbGUtYWNjXCI+PC9kaXY+JztcblxuLyoqXG4gKiBTaG93IHNpZGViYXIsIHJlcGxhY2UgdmlzaWJsZSBmaWx0ZXIgYnV0dG9uXG4gKi9cbmZ1bmN0aW9uIF9vblNob3dTaWRlYmFyQ2xpY2soKSB7XG4gICAgc2lkZWJhckVsLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICBzaG93U2lkZWJhckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBoaWRlU2lkZWJhckJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RzLW1lbnUtYWN0aXZlJyk7XG5cbiAgICBzaWRlYmFyRWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgcG9wdXBBY2NPdmVybGF5KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9nZ2xlLWFjYycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBfb25IaWRlU2lkZWJhckNsaWNrKCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogSGlkZSBzaWRlYmFyLCByZXBsYWNlIHZpc2libGUgZmlsdGVyIGJ1dHRvblxuICovXG5mdW5jdGlvbiBfb25IaWRlU2lkZWJhckNsaWNrKCkge1xuICAgIHNpZGViYXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgaGlkZVNpZGViYXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgc2hvd1NpZGViYXJCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRzLWFjYy1vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkcy1tZW51LWFjdGl2ZScpO1xufVxuXG5jb25zdCBkc3djX215QWNjU2lkZWJhciA9ICgpID0+IHtcbiAgICBpZiAoc2hvd1NpZGViYXJCdG4pIHtcbiAgICAgICAgc2hvd1NpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfb25TaG93U2lkZWJhckNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChoaWRlU2lkZWJhckJ0bikge1xuICAgICAgICBoaWRlU2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9vbkhpZGVTaWRlYmFyQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBkc3djX215QWNjU2lkZWJhcixcbn07XG4iLCIvKipcbiAqIEdhbGxlcnkgKHNsaWRlci9jYXJvdXNlbCkgb24gc2luZ2xlIHByb2R1Y3QgcGFnZVxuICovXG5cbmNvbnN0IHByb2R1Y3RHYWxsZXJ5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeVwiKTtcbmNvbnN0IHByb2R1Y3RUaHVtYm5haWxzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9fbmF2XCIpO1xuLy8gTk9URTpcbi8vIE1ha2Ugc3VyZSB0byB1cGRhdGUgQ1NTIHZhcmlhYmxlIC0td2MtZ2FsbGVyeS10aHVtYi1pdGVtcyBpbnRvIHByb2R1Y3QtZ2FsbGVyeS5zY3NzIGZpbGVcbi8vIHRvIG1hdGNoIEpTIHZhcmlhYmxlcyBmb3IgbnVtYmVyIG9mIHRodW1ibmFpbCBpdGVtc1xuY29uc3QgbnVtYmVyT2ZUaHVtYm5haWxJbWFnZXMgPSA2O1xuY29uc3QgbnVtYmVyT2ZUYWJsZXRUaHVtYm5haWxJbWFnZXMgPSA0O1xuY29uc3QgbnVtYmVyT2ZNb2JpbGVUaHVtYm5haWxJbWFnZXMgPSAzO1xuXG5leHBvcnQgZnVuY3Rpb24gZHN3Y19zaW5nbGVQcm9kR2FsbGVyeSgpIHtcbiAgaWYgKHByb2R1Y3RUaHVtYm5haWxzRWwpIHtcbiAgICBfcHJvZHVjdEdhbGxlcnlJbml0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Byb2R1Y3RHYWxsZXJ5SW5pdCgpIHtcbiAgLy8gR2V0IG51bWJlciBvZiBwcm9kdWN0IGltYWdlc1xuICBjb25zdCBudW1iZXJPZkltYWdlcyA9IF9nZXROdW1iZXJPZlByb2R1Y3RJbWFnZXMoXCIud29vY29tbWVyY2UtcHJvZHVjdC1nYWxsZXJ5X19uYXZcIik7XG4gIC8vIEluaXRpYWxpemUgbWFpbiBpbWcgc2xpZGVyXG4gIGNvbnN0IG1haW5TbGlkZXIgPSBfbWFpblByb2R1Y3RJbWdTbGlkZXJJbml0KFwiLndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9fd3JhcHBlclwiKTtcbiAgLy8gSW5pdGlhbGl6ZSB0aHVtYm5haWwgaW1hZ2VzIHNsaWRlclxuICBjb25zdCB0aHVtYm5haWxTbGlkZXJEaXJlY3Rpb24gPSBwcm9kdWN0R2FsbGVyeUVsLmdldEF0dHJpYnV0ZShcImRhdGEtZGlyZWN0aW9uXCIpO1xuICBjb25zdCB0aHVtYm5haWxTbGlkZXIgPSBfcHJvZHVjdFRodW1ibmFpbEltYWdlc1NsaWRlckluaXQoXG4gICAgICBcIi53b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX25hdlwiLFxuICAgICAgbnVtYmVyT2ZJbWFnZXMsXG4gICAgICB0aHVtYm5haWxTbGlkZXJEaXJlY3Rpb25cbiAgKTtcbiAgLy8gSWYgbnVtYmVyIG9mIHByb2R1Y3QgaW1hZ2VzIGlzIGJpZ2dlciB0aGFuIGRlZmF1bHQgdmlzaWJsZSB0aHVtYm5haWxzLCBjb25uZWN0IG1haW4gc2xpZGVyIGFuZCB0aHVtYm5haWwgc2xpZGVyIGNvbnRyb2xzXG4gIGlmIChfaXNTbGlkZXJOYXZpZ2F0aW9uVmlzaWJsZShudW1iZXJPZkltYWdlcykpIHtcbiAgICBtYWluU2xpZGVyLmNvbnRyb2xsZXIuY29udHJvbCA9IHRodW1ibmFpbFNsaWRlcjtcbiAgICB0aHVtYm5haWxTbGlkZXIuY29udHJvbGxlci5jb250cm9sID0gbWFpblNsaWRlcjtcbiAgICAvLyBBbmQgcmVtb3ZlIG5hdmlnYXRpb24gYmluZGluZyAoYm90dG9tIGFycm93cyB3aWxsIHdvcmsgb25seSBmb3IgdGh1bWJuYWlsIHNsaWRlciwgbm90IGZvciBtYWluKVxuICAgIG1haW5TbGlkZXIubmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgbm90LCB1c2UgdGh1bWJuYWlsIHNsaWRlciBhbmQgcGFnaW5hdGlvbiBmb3IgbWFpbiBzbGlkZXJcbiAgICBtYWluU2xpZGVyLnRodW1icy5zd2lwZXIgPSB0aHVtYm5haWxTbGlkZXI7XG4gICAgbWFpblNsaWRlci50aHVtYnMuaW5pdCgpO1xuICB9XG4gIC8vIE9wZW4gZmFuY3lib3ggb24gaW1nIGNsaWNrXG4gIF9vcGVuSW1nSW5GYW5jeWJveChcIi53b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX3dyYXBwZXIgLndvb2NvbW1lcmNlLXByb2R1Y3QtZ2FsbGVyeV9faW1hZ2VcIik7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzbGlkZXIgZm9yIG1haW4gcHJvZHVjdCBpbWFnZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqIEBwYXJhbSB7J2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJ30gZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7U3dpcGVyfVxuICovXG5mdW5jdGlvbiBfbWFpblByb2R1Y3RJbWdTbGlkZXJJbml0KGNsYXNzTmFtZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHNsaWRlckRpcmVjdGlvbiA9IGRpcmVjdGlvbiA/PyBcImhvcml6b250YWxcIjtcbiAgcmV0dXJuIG5ldyBTd2lwZXIoY2xhc3NOYW1lLCB7XG4gICAgZGlyZWN0aW9uOiBzbGlkZXJEaXJlY3Rpb24sXG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgICAzMjA6IHtcbiAgICAgICAgbG9vcGVkU2xpZGVzOiBudW1iZXJPZk1vYmlsZVRodW1ibmFpbEltYWdlcyxcbiAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA3NjhweFxuICAgICAgNzY4OiB7XG4gICAgICAgIGxvb3BlZFNsaWRlczogbnVtYmVyT2ZUYWJsZXRUaHVtYm5haWxJbWFnZXMsXG4gICAgICB9LFxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTExMnB4XG4gICAgICAxMTEyOiB7XG4gICAgICAgIGxvb3BlZFNsaWRlczogbnVtYmVyT2ZUaHVtYm5haWxJbWFnZXMsXG4gICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHNsaWRlciBmb3IgcHJvZHVjdCB0aHVtYm5haWwgaW1hZ2VzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1zXG4gKiBAcGFyYW0geydob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCd9IGRpcmVjdGlvblxuICogQHJldHVybnMge1N3aXBlcn1cbiAqL1xuZnVuY3Rpb24gX3Byb2R1Y3RUaHVtYm5haWxJbWFnZXNTbGlkZXJJbml0KGNsYXNzTmFtZSwgaXRlbXMsIGRpcmVjdGlvbikge1xuICBjb25zdCBzbGlkZXJEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPz8gXCJob3Jpem9udGFsXCI7XG4gIC8vIERlZmF1bHQgc2xpZGVyIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBkaXJlY3Rpb246IHNsaWRlckRpcmVjdGlvbixcbiAgICBzbGlkZXNQZXJWaWV3OiBpdGVtcyxcbiAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICB9O1xuICAvLyBVcGRhdGUgb3B0aW9ucyBpZiBudW1iZXIgb2YgcHJvZHVjdCBpbWFnZXMgaXMgbGVzcyB0aGVuIGRlZmF1bHQgdmlzaWJsZSB0aHVtYm5haWxzXG4gIC8vIFNob3cgbmF2aWdhdGlvbiBhcnJvd3MgZm9yIHRodW1ibmFpbCBzbGlkZXJcbiAgaWYgKF9pc1NsaWRlck5hdmlnYXRpb25WaXNpYmxlKGl0ZW1zLCBudW1iZXJPZk1vYmlsZVRodW1ibmFpbEltYWdlcykpIHtcbiAgICBvcHRpb25zLnNsaWRlVG9DbGlja2VkU2xpZGUgPSB0cnVlO1xuICAgIG9wdGlvbnMubG9vcCA9IHRydWU7XG4gICAgb3B0aW9ucy5uYXZpZ2F0aW9uID0ge1xuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgfTtcbiAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0ge1xuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAgIDMyMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiBudW1iZXJPZk1vYmlsZVRodW1ibmFpbEltYWdlcyxcbiAgICAgICAgbG9vcGVkU2xpZGVzOiBudW1iZXJPZk1vYmlsZVRodW1ibmFpbEltYWdlcyxcbiAgICAgIH0sXG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA3NjhweFxuICAgICAgNzY4OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IG51bWJlck9mVGFibGV0VGh1bWJuYWlsSW1hZ2VzLFxuICAgICAgICBsb29wZWRTbGlkZXM6IG51bWJlck9mVGFibGV0VGh1bWJuYWlsSW1hZ2VzLFxuICAgICAgfSxcbiAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDExMTJweFxuICAgICAgMTExMjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiBudW1iZXJPZlRodW1ibmFpbEltYWdlcyxcbiAgICAgICAgbG9vcGVkU2xpZGVzOiBudW1iZXJPZlRodW1ibmFpbEltYWdlcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbmV3IFN3aXBlcihjbGFzc05hbWUsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFJldHVybiBudW1iZXIgb2YgcHJvZHVjdCBpbWFnZXMgYmFzZWQgb24gZGF0YSBhdHRyaWJ1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJucyBudW1iZXJcbiAqL1xuZnVuY3Rpb24gX2dldE51bWJlck9mUHJvZHVjdEltYWdlcyhjbGFzc05hbWUpIHtcbiAgY29uc3Qgc3dpcGVyVGh1bWJuYWlsRWwgPSAkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBwYXJzZUludChzd2lwZXJUaHVtYm5haWxFbC5kYXRhKFwiaXRlbXNcIikpO1xufVxuXG4vKipcbiAqIE9wZW4gaW1hZ2UgaW4gZmFuY3lib3ggb24gY2xpY2tcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cbmZ1bmN0aW9uIF9vcGVuSW1nSW5GYW5jeWJveChjbGFzc05hbWUpIHtcbiAgJCgpLmZhbmN5Ym94KHtcbiAgICBzZWxlY3RvcjogYCR7IGNsYXNzTmFtZSB9IGE6dmlzaWJsZWAsXG4gICAgYmFja0ZvY3VzOiBmYWxzZSxcbiAgICBtb2JpbGU6IHtcbiAgICAgIGNsaWNrQ29udGVudDogXCJjbG9zZVwiLFxuICAgICAgY2xpY2tTbGlkZTogXCJjbG9zZVwiLFxuICAgIH0sXG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVuIHRydWUgaWYgbnVtYmVyIG9mIHRodW1ibmFpbHMgaXMgYmlnZ2VyIHRoYW4gZGVmYXVsdCB2aXNpYmxlIHRodW1ibmFpbHNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZJbWFnZXNcbiAqIEBwYXJhbSBudW1iZXJPZlNsaWRlclBlclZpZXdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gX2lzU2xpZGVyTmF2aWdhdGlvblZpc2libGUobnVtYmVyT2ZJbWFnZXMsIG51bWJlck9mU2xpZGVyUGVyVmlldyA9IG51bWJlck9mVGh1bWJuYWlsSW1hZ2VzKSB7XG4gIHJldHVybiBudW1iZXJPZkltYWdlcyA+IG51bWJlck9mU2xpZGVyUGVyVmlldztcbn1cbiIsIi8qKlxuICogVXBkYXRlIHByb2R1Y3QgcXVhbnRpdHkgb24gc2luZ2xlIHByb2R1Y3QgcGFnZVxuICovXG5cbmNvbnN0IHByb2R1Y3RRdWFudGl0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QgLnF1YW50aXR5Jyk7XG5cbmZ1bmN0aW9uIF9zaW5nbGVQcm9kdWN0UXVhbnRpdHlJbml0KGVsKSB7XG4gICAgY29uc3QgaW5jcmVhc2VQcm9kdWN0QnRuID0gZWwucXVlcnlTZWxlY3RvcignLml0ZW1fcXR5LnBsdXMnKTtcbiAgICBjb25zdCBkZWNyZWFzZVByb2R1Y3RCdG4gPSBlbC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9xdHkubWludXMnKTtcbiAgICBjb25zdCBwcm9kdWN0UXVhbnRpdHlJbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LnF0eScpO1xuXG4gICAgaW5jcmVhc2VQcm9kdWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xuICAgICAgICBfaW5jcmVhc2VQcm9kdWN0UXVhbnRpdHkocHJvZHVjdFF1YW50aXR5SW5wdXQpO1xuICAgIH0pO1xuXG4gICAgZGVjcmVhc2VQcm9kdWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0O1xuICAgICAgICBfZGVjcmVhc2VQcm9kdWN0UXVhbnRpdHkocHJvZHVjdFF1YW50aXR5SW5wdXQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfaW5jcmVhc2VQcm9kdWN0UXVhbnRpdHkoaW5wdXQpIHtcbiAgICBjb25zdCBxdWFudGl0eSA9ICFpbnB1dC52YWx1ZSA/IDAgOiBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApO1xuXG4gICAgLy8gQ2hlY2sgbWF4IHZhbHVlXG4gICAgY29uc3QgbWF4QXR0ciA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbWF4Jyk7XG4gICAgaWYgKHR5cGVvZiBtYXhBdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIG1heEF0dHIgIT09IGZhbHNlICYmIHF1YW50aXR5ID49IHBhcnNlSW50KG1heEF0dHIsIDEwKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5wdXQudmFsdWUgPSBxdWFudGl0eSArIDE7XG59XG5cbmZ1bmN0aW9uIF9kZWNyZWFzZVByb2R1Y3RRdWFudGl0eShpbnB1dCkge1xuICAgIGNvbnN0IHF1YW50aXR5ID0gIWlucHV0LnZhbHVlID8gMCA6IHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMCk7XG5cbiAgICAvLyBDaGVjayBtaW4gdmFsdWVcbiAgICBjb25zdCBtaW5BdHRyID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKTtcbiAgICBpZiAodHlwZW9mIG1pbkF0dHIgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgbWluQXR0ciAhPT0gZmFsc2UgJiYgcXVhbnRpdHkgPD0gcGFyc2VJbnQobWluQXR0ciwgMTApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnB1dC52YWx1ZSA9IHF1YW50aXR5IC0gMTtcbn1cblxuY29uc3QgZHN3Y19zaW5nbGVQcm9kUXR5ID0gKCkgPT4ge1xuICAgIGlmIChwcm9kdWN0UXVhbnRpdHlFbCkge1xuICAgICAgICBwcm9kdWN0UXVhbnRpdHlFbC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgX3NpbmdsZVByb2R1Y3RRdWFudGl0eUluaXQoZWwpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQge1xuICAgIGRzd2Nfc2luZ2xlUHJvZFF0eSxcbn07XG4iLCIvKipcbiAqIFJldmlldyBGb3JtIFZhbGlkYXRpb25cbiAqL1xuXG5pbXBvcnQgeyB1X2RlYm91bmNlZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3QgZHN3Y19yZXZpZXdzRm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgLyoqXG4gICAgICogU2VsZWN0IGVsZW1lbnRzXG4gICAgICovXG4gICAgY29uc3QgX3djUmV2aWV3Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50Zm9ybScpO1xuICAgIGlmICghX3djUmV2aWV3Rm9ybSkgcmV0dXJuO1xuXG4gICAgY29uc3QgX3djVGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbW1lbnRmb3JtIGlucHV0I2F1dGhvciwgI2NvbW1lbnRmb3JtIGlucHV0I2VtYWlsLCAjY29tbWVudGZvcm0gdGV4dGFyZWEnKTtcbiAgICBjb25zdCBfd2NSZXZpZXdTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdJyk7XG4gICAgY29uc3QgX3djUmV2aWV3RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRmb3JtIFtuYW1lPSdlbWFpbCddXCIpO1xuICAgIGNvbnN0IF93Y1Jldmlld05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnRmb3JtIFtuYW1lPSdhdXRob3InXVwiKTtcbiAgICBjb25zdCBfd2NSZXZpZXdDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21tZW50Zm9ybSBbbmFtZT0nY29tbWVudCddXCIpO1xuXG4gICAgLyoqXG4gICAgICogU2V0IFRSVUUgb3IgRkFMU0VcbiAgICAgKiBUUlVFID0gZm9yIGJ1dHRvbiB0byBiZSBkaXNhYmxlZCBhbmQgZW5hYmxlZCBpdCBhZnRlciBpbnB1dCB2YWxpZGF0aW9uLlxuICAgICAqIEZBTFNFID0gRm9ybSB3aWxsIHZhbGlkYXRlIG9uIGNsaWNrLlxuICAgICAqL1xuICAgIGNvbnN0IGJsdXIgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogU2V0IG1lc3NhZ2VzXG4gICAgICovXG4gICAgY29uc3QgX21lc3NhZ2VSZXF1aXJlZCA9ICdUaGlzIGlzIGEgcmVxdWlyZWQgZmllbGQuJztcbiAgICBjb25zdCBfbWVzc2FnZUVtYWlsID0gJ1lvdXIgZW1haWwgaXMgaW52YWxpZC4nO1xuICAgIC8qKlxuICAgICAqIFNldCByZWdleCBjaGVja3MgZm9yIGlucHV0c1xuICAgICAqL1xuICAgIGNvbnN0IF92YWxpZGF0ZVJlZ2V4RW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cbiAgICAvLyBBcHBlbmQgZXJyb3JzXG4gICAgY29uc3QgZXJyb3JBcHBlbmQgPSAodCwgbSwgYykgPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBtO1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3djLWZvcm0tZXJyb3InKTtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGB3Yy1mb3JtLWVycm9yLSR7IGMgfWApO1xuICAgICAgICB0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobWVzc2FnZUNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBlcnJvcnNcbiAgICBjb25zdCBlcnJvclJlbW92ZSA9ICh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy53Yy1mb3JtLWVycm9yJyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRzIGFuZCBhcHBlbmQgbWVzc2FnZXMgZnVuY3Rpb25cbiAgICBjb25zdCB2YWxpZGF0ZVJlcXVpcmVkID0gKHQsIG1lc3NhZ2UsIG1lc3NhZ2VDbGFzcywgcmVnZXgsIHJlZ2V4TWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoIXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBpZiAoIXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAud2MtZm9ybS1lcnJvci0keyBtZXNzYWdlQ2xhc3MgfWApKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2V4ICYmICF0LnZhbHVlLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckFwcGVuZCh0LCByZWdleE1lc3NhZ2UsIG1lc3NhZ2VDbGFzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JBcHBlbmQodCwgbWVzc2FnZSwgbWVzc2FnZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBlcnJvclJlbW92ZSh0LCBtZXNzYWdlQ2xhc3MpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLy8gVmFsaWRhdGlvblxuICAgIGNvbnN0IHZhbGlkYXRlRmllbGRzID0gKCkgPT4ge1xuICAgICAgICAvLyBWYWxpZGF0ZSBuYW1lXG4gICAgICAgIGNvbnN0IF9pc05hbWVWYWxpZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghX3djUmV2aWV3TmFtZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBfdmFsaWRhdGVOYW1lID0gKCkgPT4gdmFsaWRhdGVSZXF1aXJlZChfd2NSZXZpZXdOYW1lLCBfbWVzc2FnZVJlcXVpcmVkLCAncmVxdWlyZWQnKTtcblxuICAgICAgICAgICAgX3djUmV2aWV3TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWJvdW5jZVZhbGlkYXRpb24gPSB1X2RlYm91bmNlZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF92YWxpZGF0ZU5hbWUoKTtcbiAgICAgICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgICAgICAgIGRlYm91bmNlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBfdmFsaWRhdGVOYW1lKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgY29tbWVudFxuICAgICAgICBjb25zdCBfaXNDb21tZW50VmFsaWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIV93Y1Jldmlld0NvbW1lbnQpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgX3ZhbGlkYXRlQ29tbWVudCA9ICgpID0+IHZhbGlkYXRlUmVxdWlyZWQoX3djUmV2aWV3Q29tbWVudCwgX21lc3NhZ2VSZXF1aXJlZCwgJ3JlcXVpcmVkJyk7XG5cbiAgICAgICAgICAgIF93Y1Jldmlld0NvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVib3VuY2VWYWxpZGF0aW9uID0gdV9kZWJvdW5jZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfdmFsaWRhdGVDb21tZW50KCk7XG4gICAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gX3ZhbGlkYXRlQ29tbWVudCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFZhbGlkYXRlIGVtYWlsIHdpdGggcmVnZXhcbiAgICAgICAgY29uc3QgX2lzRW1haWxWYWxpZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghX3djUmV2aWV3RW1haWwpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IF92YWxpZGF0ZUVtYWlsID0gKCkgPT4gdmFsaWRhdGVSZXF1aXJlZChfd2NSZXZpZXdFbWFpbCwgX21lc3NhZ2VSZXF1aXJlZCwgJ3JlcXVpcmVkJywgX3ZhbGlkYXRlUmVnZXhFbWFpbCwgX21lc3NhZ2VFbWFpbCk7XG5cbiAgICAgICAgICAgIF93Y1Jldmlld0VtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlYm91bmNlVmFsaWRhdGlvbiA9IHVfZGVib3VuY2VkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbGlkYXRlRW1haWwoKTtcbiAgICAgICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgICAgICAgIGRlYm91bmNlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBfdmFsaWRhdGVFbWFpbCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgaW5wdXQgdmFsaWRhdGlvbnNcbiAgICAgICAgX2lzTmFtZVZhbGlkKCk7XG4gICAgICAgIF9pc0NvbW1lbnRWYWxpZCgpO1xuICAgICAgICBfaXNFbWFpbFZhbGlkKCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIFRSVUUgb3IgRmFsc2VcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuIF9pc05hbWVWYWxpZCgpICYmIF9pc0NvbW1lbnRWYWxpZCgpICYmIF9pc0VtYWlsVmFsaWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2lzQ29tbWVudFZhbGlkKCk7XG4gICAgfTtcblxuICAgIC8vIEluaXQgdmFsaWRhdGlvblxuICAgIGlmIChibHVyKSB7XG4gICAgICAgIF93Y1Jldmlld1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkcygpKSB7XG4gICAgICAgICAgICAgICAgLy8gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICBfd2NSZXZpZXdTdWJtaXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfd2NSZXZpZXdTdWJtaXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3djVGV4dElucHV0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TGlzdCA9IFsnZm9jdXNpbicsICdmb2N1c291dCcsICdpbnB1dCddO1xuXG4gICAgICAgICAgICBldmVudExpc3QuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVib3VuY2VWYWxpZGF0aW9uID0gdV9kZWJvdW5jZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxNTApO1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBfd2NSZXZpZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVGaWVsZHMoKSkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHtcbiAgICBkc3djX3Jldmlld3NGb3JtVmFsaWRhdGlvbixcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdPT0NPTU1FUkNFXG4gKiBJZiB0aGUgV29vY29tbWVyY2UgcGx1Z2luIGlzIGFjdGl2ZSwgcmVsYXRlZCBmaWxlcyBhcmUgbG9hZGVkIGluIGNsYXNzIGFzc2V0cy5cbiAqICdqcy13Yy5qcycgKHRoaXMgZmlsZSkgaXMgZm9yIHRoZSByZXN0IG9mIFdvb2NvbW1lcmNlIHJlbGF0ZWQgamF2YXNjcmlwdCdzLlxuICogJ2pzLXdjLW1haW4uanMnIGlzIHVzZWQgZm9yIG5vbi13b29jb21tZXJjZSBwYWdlcy5cbiAqL1xuXG5pbXBvcnQgeyBkc3djX3VwZGF0ZUNhcnQgfSBmcm9tICcuL3dvb2NvbW1lcmNlL2Rzd2NfY2FydCc7XG4vLyBpbXBvcnQgeyBkc3djX2FqYXggfSBmcm9tICcuL3dvb2NvbW1lcmNlL2Rzd2NfYWpheCc7XG5cbmltcG9ydCB7IGRzd2Nfc2lkZWJhclRvZ2dsZSB9IGZyb20gJy4vd29vY29tbWVyY2UvZHN3Y19zaWRlYmFyVG9nZ2xlJztcbi8vIGltcG9ydCB7IGRzd2NfY2F0ZWdvcnlUb2dnbGUgfSBmcm9tICcuL3dvb2NvbW1lcmNlL2Rzd2NfY2F0ZWdvcnlUb2dnbGUnO1xuXG5pbXBvcnQgeyBkc3djX3NpbmdsZVByb2RHYWxsZXJ5IH0gZnJvbSAnLi93b29jb21tZXJjZS9zaW5nbGUtcHJvZHVjdC9kc3djX2dhbGxlcnknO1xuaW1wb3J0IHsgZHN3Y19zaW5nbGVQcm9kUXR5IH0gZnJvbSAnLi93b29jb21tZXJjZS9zaW5nbGUtcHJvZHVjdC9kc3djX3Byb2R1Y3RRdWFudGl0eSc7XG5pbXBvcnQgeyBkc3djX3N0aWNreVNoaXBwaW5nQmFyIH0gZnJvbSAnLi93b29jb21tZXJjZS9kc3djX3N0aWNreVNoaXBwaW5nJztcblxuaW1wb3J0IHsgZHN3Y19teUFjY1NpZGViYXIgfSBmcm9tICcuL3dvb2NvbW1lcmNlL215LWFjY291bnQvZHN3Y19zaWRlYmFyVG9nZ2xlJztcbi8vIGltcG9ydCB7IGRzd2NfcmV2aWV3c0FkZEZvcm1Ub2dnbGUgfSBmcm9tICcuL3dvb2NvbW1lcmNlL3NpbmdsZS1wcm9kdWN0L2V4dHJhcy9kc3djX3Jldmlld3NGb3JtQWRkVG9nZ2xlJztcbmltcG9ydCB7IGRzd2NfcmV2aWV3c0Zvcm1WYWxpZGF0aW9uIH0gZnJvbSAnLi93b29jb21tZXJjZS9zaW5nbGUtcHJvZHVjdC9leHRyYXMvZHN3Y19yZXZpZXdzRm9ybVZhbGlkYXRpb24nO1xuaW1wb3J0IHsgZHN3Y190b2dnbGVQcm9kdWN0R3JpZCB9IGZyb20gJy4vd29vY29tbWVyY2UvZXh0cmFzL2Rzd2NfdG9nZ2xlUHJvZHVjdEdyaWQnO1xuLy8gaW1wb3J0IHsgZHN3Y19idG5FeHRlbmRJY29uIH0gZnJvbSAnLi93b29jb21tZXJjZS9leHRyYXMvZHN3Y19idG5JY29uRXh0ZW5kJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIC8qKiBBSkFYIENBTExTICovXG4gICAgLy8gZHN3Y19hamF4KCk7XG5cbiAgICAvKiogQ0FSVCBQQUdFICovXG4gICAgZHN3Y191cGRhdGVDYXJ0KCk7XG5cbiAgICAvKiogUFJPRFVDVCBMSVNUSU5HIFBBR0UgKi9cbiAgICBkc3djX3NpZGViYXJUb2dnbGUoKTtcbiAgICAvLyBkc3djX2NhdGVnb3J5VG9nZ2xlKCk7XG4gICAgZHN3Y190b2dnbGVQcm9kdWN0R3JpZCgpO1xuXG4gICAgLyoqIFNJTkdMRSBQUk9EVUNUIFBBR0UgKi9cbiAgICBkc3djX3NpbmdsZVByb2RHYWxsZXJ5KCk7XG4gICAgZHN3Y19zaW5nbGVQcm9kUXR5KCk7XG5cbiAgICAvLyBFbmFibGUgdGhpcyBpZiBzaGlwcGluZyBiYXIgc2hvdWxkIGJlIHN0aWNreVxuICAgIGRzd2Nfc3RpY2t5U2hpcHBpbmdCYXIoKTtcblxuICAgIC8qKlxuICAgICBJZiB5b3UgYXJlIHVzaW5nIGRlZmF1bHQgcmV2aWV3cywgeW91IG5lZWQgdG8gZW5hYmxlXG4gICAgIFNDU1MgJC0td2MtY29tcG9uZW50c19fdGFicy1yZXZpZXdzIHRvIE9OIGluIF9fY3VzdG9tX193Yy1jb25maWcuc2Nzcy5cbiAgICAgVmFsaWRhdGlvbiBjYW4gYmUgb24gRk9STSBTVUJNSVQgb3IgV0hJTEUgVFlQSU5HIChMSVZFKS5cbiAgICAgU2V0dGluZ3MgZm9yIHRoYXQgYXJlIGluc2lkZSByZXZpZXdzX2Zvcm0tdmFsaWRhdGlvbi5qc1xuICAgICAqL1xuICAgIGRzd2NfcmV2aWV3c0Zvcm1WYWxpZGF0aW9uKCk7XG5cbiAgICAvLyBFbmFibGUgdGhpcyBpZiBmb3JtIHNob3VsZCBiZSBvcGVuZWQgYnkgYSBjbGljayBvZiBhIGJ1dHRvblxuICAgIC8vIGRzd2NfcmV2aWV3c0FkZEZvcm1Ub2dnbGUoKTtcblxuICAgIC8qKiBNWSBBQ0NPVU5UIFBBR0VTICovXG4gICAgZHN3Y19teUFjY1NpZGViYXIoKTtcblxuICAgIC8qKlxuICAgICBFbmFibGUgdGhpcyBpZiB5b3UgbmVlZCB0byBleHRlbmQgaWNvbnMgb24gV29vY29tbWVyY2UgYnV0dG9ucy5cbiAgICAgWW91IG5lZWQgdG8gZW5hYmxlIFNDU1MgJC0td2MtYnV0dG9ucy13aXRoLWljb25zIHRvIE9OIGluIF9fY3VzdG9tX193Yy1jb25maWcuc2Nzcy5cbiAgICAgKi9cbiAgICAvLyBkc3djX2J0bkV4dGVuZEljb24oKTtcbn0pO1xuIl0sIm5hbWVzIjpbInVfZGVib3VuY2VkIiwiZnVuYyIsImRlbGF5IiwiaW1tZWRpYXRlIiwidGltZXJJZCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiYm91bmRGdW5jIiwiYmluZCIsImFwcGx5IiwiX3RoaXMiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJjYWxsZWVGdW5jIiwic2V0VGltZW91dCIsInVfdGhyb3R0bGVkIiwiX2xlbjIiLCJfa2V5MiIsIl91cGRhdGVJbnB1dFF1YW50aXR5IiwiY2FydEZvcm1FbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl91cGRhdGVDYXJ0SW5pdCIsIiQiLCJib2R5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJkc3djX3VwZGF0ZUNhcnQiLCJzaG93RmlsdGVyQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJoaWRlRmlsdGVyQnRuIiwiaGlkZUZpbHRlck1vYmlsZUJ0biIsIm1vYmlsZVNpZGViYXJPdmVybGF5RWwiLCJzaWRlYmFyV3JhcHBlciIsInNpZGViYXIiLCJkc3djX3NpZGViYXJUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJfb25TaG93U2lkZWJhckNsaWNrIiwiX29uSGlkZVNpZGViYXJDbGljayIsIl9vbkhpZGVNb2JpbGVTaWRlYmFyQ2xpY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzaGlwcGluZ0JhckVsIiwiX3N0aWNreVNoaXBwaW5nQmFySW5pdCIsIm9mZnNldCIsIm9uU2Nyb2xsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ0aHJvdHRsZVNjcm9sbCIsImRzd2Nfc3RpY2t5U2hpcHBpbmdCYXIiLCJjb250YWlucyIsImRzd2NfdG9nZ2xlUHJvZHVjdEdyaWQiLCJwcm9kdWN0R3JpZEJ0biIsInByb2R1Y3RMaXN0QnRuIiwicHJvZHVjdEdyaWQiLCJ0b2dnbGVQcm9kdWN0R3JpZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiZWxlbSIsInRvZ2dsZVByb2R1Y3RMaXN0IiwiZ2V0R3JpZCIsImdldEl0ZW0iLCJlbCIsInZhbHVlIiwiaW5wdXQiLCJwYXJlbnQiLCJmaW5kIiwicXVhbnRpdHkiLCJwYXJzZUludCIsInZhbCIsIm1heEF0dHIiLCJhdHRyIiwiX3R5cGVvZiIsInVuZGVmaW5lZCIsIm1pbkF0dHIiLCJ1cGRhdGVDYXJ0QnRuIiwicmVtb3ZlQXR0ciIsInRyaWdnZXIiLCJzaG93U2lkZWJhckJ0biIsImhpZGVTaWRlYmFyQnRuIiwic2lkZWJhckVsIiwicG9wdXBBY2NPdmVybGF5IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiZHN3Y19teUFjY1NpZGViYXIiLCJwcm9kdWN0R2FsbGVyeUVsIiwicHJvZHVjdFRodW1ibmFpbHNFbCIsIm51bWJlck9mVGh1bWJuYWlsSW1hZ2VzIiwibnVtYmVyT2ZUYWJsZXRUaHVtYm5haWxJbWFnZXMiLCJudW1iZXJPZk1vYmlsZVRodW1ibmFpbEltYWdlcyIsImRzd2Nfc2luZ2xlUHJvZEdhbGxlcnkiLCJfcHJvZHVjdEdhbGxlcnlJbml0IiwibnVtYmVyT2ZJbWFnZXMiLCJfZ2V0TnVtYmVyT2ZQcm9kdWN0SW1hZ2VzIiwibWFpblNsaWRlciIsIl9tYWluUHJvZHVjdEltZ1NsaWRlckluaXQiLCJ0aHVtYm5haWxTbGlkZXJEaXJlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJ0aHVtYm5haWxTbGlkZXIiLCJfcHJvZHVjdFRodW1ibmFpbEltYWdlc1NsaWRlckluaXQiLCJfaXNTbGlkZXJOYXZpZ2F0aW9uVmlzaWJsZSIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwibmF2aWdhdGlvbiIsImRlc3Ryb3kiLCJ0aHVtYnMiLCJzd2lwZXIiLCJpbml0IiwiX29wZW5JbWdJbkZhbmN5Ym94IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwic2xpZGVyRGlyZWN0aW9uIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsImxvb3BlZFNsaWRlcyIsImF1dG9IZWlnaHQiLCJpdGVtcyIsIm9wdGlvbnMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZVRvQ2xpY2tlZFNsaWRlIiwic3dpcGVyVGh1bWJuYWlsRWwiLCJkYXRhIiwiZmFuY3lib3giLCJzZWxlY3RvciIsImJhY2tGb2N1cyIsIm1vYmlsZSIsImNsaWNrQ29udGVudCIsImNsaWNrU2xpZGUiLCJudW1iZXJPZlNsaWRlclBlclZpZXciLCJwcm9kdWN0UXVhbnRpdHlFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc2luZ2xlUHJvZHVjdFF1YW50aXR5SW5pdCIsImluY3JlYXNlUHJvZHVjdEJ0biIsImRlY3JlYXNlUHJvZHVjdEJ0biIsInByb2R1Y3RRdWFudGl0eUlucHV0IiwiX2luY3JlYXNlUHJvZHVjdFF1YW50aXR5IiwiX2RlY3JlYXNlUHJvZHVjdFF1YW50aXR5IiwiZHN3Y19zaW5nbGVQcm9kUXR5IiwiZm9yRWFjaCIsImRzd2NfcmV2aWV3c0Zvcm1WYWxpZGF0aW9uIiwiX3djUmV2aWV3Rm9ybSIsIl93Y1RleHRJbnB1dCIsIl93Y1Jldmlld1N1Ym1pdCIsIl93Y1Jldmlld0VtYWlsIiwiX3djUmV2aWV3TmFtZSIsIl93Y1Jldmlld0NvbW1lbnQiLCJibHVyIiwiX21lc3NhZ2VSZXF1aXJlZCIsIl9tZXNzYWdlRW1haWwiLCJfdmFsaWRhdGVSZWdleEVtYWlsIiwiZXJyb3JBcHBlbmQiLCJ0IiwibSIsImMiLCJtZXNzYWdlQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiZXJyb3JSZW1vdmUiLCJlcnJvciIsImVyciIsInZhbGlkYXRlUmVxdWlyZWQiLCJtZXNzYWdlIiwibWVzc2FnZUNsYXNzIiwicmVnZXgiLCJyZWdleE1lc3NhZ2UiLCJjaGVja1ZhbGlkaXR5IiwibWF0Y2giLCJ2YWxpZGF0ZUZpZWxkcyIsIl9pc05hbWVWYWxpZCIsIl92YWxpZGF0ZU5hbWUiLCJkZWJvdW5jZVZhbGlkYXRpb24iLCJfaXNDb21tZW50VmFsaWQiLCJfdmFsaWRhdGVDb21tZW50IiwiX2lzRW1haWxWYWxpZCIsIl92YWxpZGF0ZUVtYWlsIiwidmFsaWRhdGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpdGVtIiwiZXZlbnRMaXN0IiwiZXZlbnQiLCJldnQiXSwic291cmNlUm9vdCI6IiJ9