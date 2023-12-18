/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/components/dswc_validation.js":
/*!******************************************************!*\
  !*** ./assets/_src/js/components/dswc_validation.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_validation: function() { return /* binding */ dswc_validation; }
/* harmony export */ });
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * My Account validation for login
 */

var dswc_validation = function dswc_validation() {
  if (jQuery('.login-wrapper').length) {
    var dissableBtnLogin = function dissableBtnLogin() {
      if (jQuery('input#username').val().length === 0) {
        jQuery(loginBtn).attr('disabled', true);
      } else if (jQuery('.login input[type=password]').val().length === 0) {
        jQuery(loginBtn).attr('disabled', true);
      } else {
        jQuery(loginBtn).attr('disabled', false);
        jQuery(loginBtnWrapper).removeClass('disabled-wrapper');
      }
    };
    var dissableBtnRegister = function dissableBtnRegister() {
      if (jQuery('input[type=email]').val().length === 0 || jQuery('.register input[type=password]').val().length === 0) {
        jQuery(registerBtn).attr('disabled', true);
      }
    }; // Email mask validation
    var emailIsValid = function emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }; // Functions for LOGIN validation
    var createMessages = function createMessages() {
      jQuery('input#username').after("<div class='validation-msg email-log hidden-msg'>Please, enter your login or email to login</div>");
      jQuery('.login input[type=password]').after("<div class='validation-msg password-log hidden-msg'>Please, enter your  password to login</div>");
      jQuery('input[type=email]').after("<div class='validation-msg email-reg hidden-msg'>Please, enter your  your email to register</div>");
      jQuery('.register input[type=password]').after("<div class='validation-msg password-reg hidden-msg'>Please, enter your  password to login</div>");
    }; // Creating placeholders for the error messages
    // function clickOndisabled() {
    //     // jQuery(loginBtn).attr("disabled", true) ? alert("diasbled") : alert("asbled");
    //     console.log(jQuery(loginBtn).attr("disabled") === true);
    // }
    var checkLoginEmail = function checkLoginEmail() {
      if (jQuery('input#username').val().length === 0) {
        jQuery('input#username').addClass('error-input');
        jQuery('.validation-msg.email-log').removeClass('hidden-msg').text('Please, enter login or email to login');
        jQuery(loginBtn).attr('disabled', true);
        jQuery(loginBtnWrapper).addClass('disabled-wrapper');
      } else {
        jQuery('.validation-msg.mobile-log').addClass('hidden-msg');
        jQuery('.validation-msg.email-log').addClass('hidden-msg');
        jQuery('input#username').removeClass('error-input');
        jQuery(loginBtn).attr('disabled', false);
        jQuery(loginBtnWrapper).removeClass('disabled-wrapper');
      }
    };
    var checkLoginPass = function checkLoginPass() {
      if (jQuery('.login input[type=password]').val().length === 0) {
        jQuery('.login input[type=password]').addClass('error-input');
        jQuery('.validation-msg.password-log').removeClass('hidden-msg').text('Please, enter password to login');
        jQuery(loginBtn).attr('disabled', true);
        jQuery(loginBtnWrapper).addClass('disabled-wrapper');
      } else {
        jQuery('.validation-msg.mobile-log').addClass('hidden-msg');
        jQuery('.validation-msg.password-log').addClass('hidden-msg');
        jQuery('.login input[type=password]').removeClass('error-input');
        jQuery(loginBtn).attr('disabled', false);
        jQuery(loginBtnWrapper).removeClass('disabled-wrapper');
      }
    };
    var checkLogin = function checkLogin() {
      checkLoginPass();
      checkLoginEmail();
    }; // LOGIN VALIDATION
    // Register validation functions
    var checkRegisterEmail = function checkRegisterEmail() {
      if (jQuery('input[type=email]').val().length === 0) {
        jQuery('.validation-msg.email-reg').removeClass('hidden-msg').text('Please, enter your email to register');
        jQuery('input[type=email]').addClass('error-input');
        jQuery(registerBtn).attr('disabled', true);
        jQuery(registerBtnWrapper).addClass('disabled-wrapper');
      } else {
        jQuery('.validation-msg.mobile-reg').addClass('hidden-msg');
        jQuery('.validation-msg.email-reg').addClass('hidden-msg');
        jQuery('input[type=email]').removeClass('error-input');
        jQuery(registerBtn).attr('disabled', false);
        jQuery(registerBtnWrapper).removeClass('disabled-wrapper');
      }
    };
    var validateRegisterEmail = function validateRegisterEmail() {
      if (emailIsValid(jQuery('input[type=email]').val()) !== true) {
        jQuery('.validation-msg.email-reg').removeClass('hidden-msg').text('Please, enter correct email to register');
        jQuery('input[type=email]').addClass('error-input');
        jQuery(registerBtn).attr('disabled', true);
        jQuery(registerBtnWrapper).addClass('disabled-wrapper');
      } else {
        jQuery('.validation-msg.mobile-reg').addClass('hidden-msg');
        jQuery('.validation-msg.email-reg').addClass('hidden-msg');
        jQuery('input[type=email]').removeClass('error-input');
        jQuery(registerBtn).attr('disabled', false);
        jQuery(registerBtnWrapper).removeClass('disabled-wrapper');
      }
    };
    var checkRegisterPass = function checkRegisterPass() {
      if (jQuery('.register input[type=password]').val().length === 0) {
        jQuery('.register input[type=password]').addClass('error-input');
        jQuery('.validation-msg.password-reg').removeClass('hidden-msg').text('Please, enter your password to register');
        jQuery(registerBtn).attr('disabled', true);
        jQuery(registerBtnWrapper).addClass('disabled-wrapper');
      } else {
        jQuery('.validation-msg.mobile-reg').addClass('hidden-msg');
        jQuery('.validation-msg.password-reg').addClass('hidden-msg');
        jQuery('.register input[type=password]').removeClass('error-input');
        jQuery(registerBtn).attr('disabled', false);
        jQuery(registerBtnWrapper).removeClass('disabled-wrapper');
      }
    };
    var checkRegister = function checkRegister() {
      checkRegisterEmail();
      validateRegisterEmail();
      checkRegisterPass();
    };
    var loginBtn = document.querySelector('.woocommerce-form-login__submit');
    var registerBtn = document.querySelector('.woocommerce-form-register__submit');
    var loginBtnWrapper = document.querySelector('.login .link-wrapper');
    var registerBtnWrapper = document.querySelector('.register .link-wrapper');
    jQuery(document).ready(function () {
      jQuery(loginBtnWrapper).addClass('disabled-wrapper');
      jQuery(registerBtnWrapper).addClass('disabled-wrapper');
      if ($(window).width() < 1023) {
        jQuery(loginBtnWrapper).before("<div class='validation-msg mobile-log'>Please, enter your login or email and password to login</div></br>");
        jQuery(registerBtnWrapper).before("<div class='validation-msg mobile-reg'>Please, enter your email and password to register</div></br>");
      }
    });
    jQuery(document).ready(function () {
      createMessages();
      if (jQuery('.woocommerce-form-login').length > 0) {
        dissableBtnLogin();
      }
      if (jQuery('.woocommerce-form-register').length > 0) {
        dissableBtnRegister();
      }
    });
    jQuery(loginBtn).click(function (event) {
      checkLogin();
    });
    jQuery(' .login input[type=password]').focusout(function () {
      checkLoginPass();
    });
    jQuery(' .login input[type=password]').keyup(function () {
      checkLoginPass();
    });
    jQuery('input#username').focusout(function () {
      checkLoginEmail();
    });
    jQuery('input#username').keyup(function () {
      checkLoginEmail();
    });
    jQuery(registerBtn).click(function (event) {
      checkRegister();
    });
    jQuery('input[type=email]').focusout(function () {
      checkRegisterEmail();
      validateRegisterEmail();
    });
    jQuery('input[type=email]').keyup(function () {
      checkRegisterEmail();
    });
    jQuery('.register input[type=password]').focusout(function () {
      checkRegisterPass();
    });
    jQuery('.register input[type=password]').keyup(function () {
      checkRegisterPass();
    });
  }
};


/***/ }),

/***/ "./assets/_src/js/components/dswc_wNeedHelp.js":
/*!*****************************************************!*\
  !*** ./assets/_src/js/components/dswc_wNeedHelp.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_askAQuestion: function() { return /* binding */ dswc_askAQuestion; }
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./assets/_src/js/utils/utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Ask a question button
 */


var dswc_askAQuestion = function dswc_askAQuestion() {
  var wNeedHelp = document.querySelector('.w-need-help__widget');
  if (!wNeedHelp) return;
  var wNeedHelpOpen = wNeedHelp.querySelector('.js-w-help-open');
  var wNeedHelpClose = wNeedHelp.querySelectorAll('.js-w-help-close');
  var wNeedHelpWidget = wNeedHelpOpen.closest('.w-need-help__widget');
  wNeedHelpOpen.addEventListener('click', function (e) {
    e.preventDefault();
    wNeedHelpWidget.querySelector('.w-need-help__popup').classList.add('is-active');
    document.body.classList.add('ds-w-help-active');
  });
  wNeedHelpClose.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      wNeedHelpWidget.querySelector('.w-need-help__popup').classList.remove('is-active');
      document.body.classList.remove('ds-w-help-active');
    });
  });
  var throttleScrollAsk = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.u_throttled)(function () {
    var footer = document.querySelector('.site-footer');
    var askQuestionTrigger = document.querySelector('#w-need-help-toggle');
    if (!askQuestionTrigger) return;
    function callback(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Show button
          askQuestionTrigger.style.opacity = '0';
          askQuestionTrigger.style.visibility = 'hidden';
          askQuestionTrigger.style.pointerEvents = 'none';
        } else {
          // Hide button
          askQuestionTrigger.style.opacity = '1';
          askQuestionTrigger.style.visibility = 'visible';
          askQuestionTrigger.style.pointerEvents = 'all';
        }
      });
    }
    var observer = new IntersectionObserver(callback);
    observer.observe(footer);
  }, 30);
  document.addEventListener('scroll', throttleScrollAsk);
  $(document).bind('gform_confirmation_loaded', function (event, formId) {
    var needHelpSubmission = $("#need_help #gform_confirmation_wrapper_".concat(formId));
    var needHelpWrapper = $('#need_help');
    if ((needHelpSubmission === null || needHelpSubmission === void 0 ? void 0 : needHelpSubmission.length) > 0 && (needHelpWrapper === null || needHelpWrapper === void 0 ? void 0 : needHelpWrapper.length) > 0) {
      needHelpWrapper.find('.js-w-help-success-hide').hide();
    }
  });
};


/***/ }),

/***/ "./assets/_src/js/header/ds_headerHeight.js":
/*!**************************************************!*\
  !*** ./assets/_src/js/header/ds_headerHeight.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ds_headerHeight: function() { return /* binding */ ds_headerHeight; }
/* harmony export */ });
/**
 * Calculate Header height and use it as :root variable.
 * Calculate Site notice height and use it as :root variable.
 *
 * Usable for offsetting site items when using WooCommerce variable height site notice.
 */

var ds_headerHeight = function ds_headerHeight() {
  var headerNotice = document.querySelector('.woocommerce-store-notice');
  if (!headerNotice) return;
  var styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.classList.add('ds-custom');

  // const mql = window.matchMedia('(max-width: 1111px)');
  var header = document.querySelector('.site-header');
  var observeHeader = new ResizeObserver(function (entries) {
    entries.forEach(function (item) {
      var height = item.target.offsetHeight;
      styleTag.innerHTML = ":root {--navbar-height: ".concat(height, "px;}");
      document.head.appendChild(styleTag);
      observeHeader.disconnect();
    });
  });
  observeHeader.observe(header);
  if (headerNotice) {
    var observeNotice = new ResizeObserver(function (entries) {
      entries.forEach(function (item) {
        var height = item.target.offsetHeight;
        // console.log(`Notice height: ${height}`);
        styleTag.innerHTML += ":root {--wc-notice-height: ".concat(height, "px;}");
      });
    });
    observeNotice.observe(headerNotice);
  }
};


/***/ }),

/***/ "./assets/_src/js/header/dswc_toggleCart.js":
/*!**************************************************!*\
  !*** ./assets/_src/js/header/dswc_toggleCart.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_toggleCart: function() { return /* binding */ dswc_toggleCart; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Toggle for WooCommerce mini cart
 */

var dswc_toggleCart = function dswc_toggleCart() {
  var dsCartToggle = document.querySelector('.js-toggle-cart');
  if (!dsCartToggle) return;
  var _document = document,
    body = _document.body;
  var dsCartSidebar = document.querySelector('.ds-cart-sidebar');
  var header = body.querySelector('.site-header');
  var popupCartOverlay = '<div class="ds-cart-overlay js-toggle-cart"></div>';
  if (dsCartSidebar) {
    var openCart = function openCart() {
      if (!body.classList.contains('ds-cart-active')) {
        body.classList.add('ds-cart-active');
        document.querySelector('.js-cart-popup').setAttribute('aria-expanded', 'true');
        header.insertAdjacentHTML('beforeend', popupCartOverlay);
      } else {
        body.classList.remove('ds-cart-active');
        document.querySelector('.js-cart-popup').setAttribute('aria-expanded', 'false');
        document.querySelector('.ds-cart-overlay').remove();
      }
    };
    $(document).on('added_to_cart', function () {
      openCart();
    });
    $(document).on('click', '.js-toggle-cart', function (e) {
      e.preventDefault();
      openCart();
    });
  }
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

/***/ "./assets/_src/js/woocommerce/dswc_ajax.js":
/*!*************************************************!*\
  !*** ./assets/_src/js/woocommerce/dswc_ajax.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dswc_ajax: function() { return /* binding */ dswc_ajax; }
/* harmony export */ });
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Global ajax calls and functions for Woocommerce
 * TODO: Refactor this
 */

var dswc_ajax = function dswc_ajax() {
  jQuery(document).ready(function ($) {
    var dsAjaxQueue = [];
    var dsUpdateSyncTimeout = null;
    var dsUpdateTimeout = null;
    var isAjaxRunning = false;
    var inputEventTriggered = false;

    // execute AJAX queued list
    var dsRunQueuedAjax = function dsRunQueuedAjax() {
      if (dsAjaxQueue.length) {
        var ajaxOpts = dsAjaxQueue[0];
        ajaxOpts.complete = function () {
          dsAjaxQueue.shift(); // remove this ajax from queue
          dsRunQueuedAjax();
        };

        // eslint-disable-next-line no-unused-vars
        var xhr = $.ajax(ajaxOpts);
      }
    };
    var dsEnqueueAjax = function dsEnqueueAjax(ajaxOpts) {
      dsAjaxQueue.push(ajaxOpts);
      dsRunQueuedAjax();
    };
    var dsBlockUI = function dsBlockUI(element) {
      element.block({
        message: null,
        overlayCSS: {
          background: '#fff',
          opacity: 0.6
        }
      });
    };
    var dsUnblockUI = function dsUnblockUI(element) {
      element.unblock();
    };
    var dsBlockProductsUI = function dsBlockProductsUI(element) {
      if (element != null) {
        dsBlockUI(element);
        // eslint-disable-next-line no-undef
      } else if ($('.product').length && !ds.isShop) {
        dsBlockUI($('.product'));
      } else {
        dsBlockUI($('.products'));
      }
    };
    var dsUnblockProductsUI = function dsUnblockProductsUI() {
      dsUnblockUI($('.products'));
      dsUnblockUI($('.product'));
      dsUnblockUI($('.widget_shopping_cart'));
      dsUnblockUI($('.cart-popup'));
    };
    var dsRemoveFromCart = function dsRemoveFromCart(link) {
      dsEnqueueAjax({
        data: {
          action: 'ds_delete_item_checkout',
          data_remove_link: link.data('remove')
        },
        type: 'post',
        // eslint-disable-next-line no-undef
        url: ds.ajax_url,
        beforeSend: function beforeSend() {
          dsBlockProductsUI($('.cart-popup'));
        },
        success: function success() {
          $(document.body).trigger('updated_wc_div');
          $(document.body).trigger('wc_update_cart');
          dsUnblockProductsUI();
        }
      });
    };
    var dsQtyButtonClick = function dsQtyButtonClick(element, factor) {
      var inputQty = element.parent().find('.qty');
      var newQty = parseInt(inputQty.val(), 10) + factor;

      // check disabled
      if (element.hasClass('disabled')) {
        return false;
      }

      // respect the minimum value
      var minAttr = inputQty.attr('min');
      // eslint-disable-next-line max-len
      if (_typeof(minAttr) !== ( true ? "undefined" : 0) && minAttr !== false && newQty < parseInt(minAttr, 10)) {
        return false;
      }

      // respect the max stock limit
      var maxAttr = inputQty.attr('max');
      // eslint-disable-next-line max-len
      if (_typeof(maxAttr) !== ( true ? "undefined" : 0) && maxAttr !== false && newQty > parseInt(maxAttr, 10)) {
        return false;
      }

      // when using Select, check if new quantity exists in options list
      if (inputQty.is('select') && inputQty.find("option[value=\"".concat(newQty, "\"]")).length === 0) {
        return false;
      }
      inputQty.val(newQty);
      inputQty.change();
      return false;
    };
    var CartPopupActions = function CartPopupActions() {
      // TODO change trigger
      $(document.body).on('click', '.item_qty.plus', function (e) {
        e.preventDefault();
        return dsQtyButtonClick($(this), 1);
      });
      $(document.body).on('click', '.item_qty.minus', function (e) {
        e.preventDefault();
        return dsQtyButtonClick($(this), -1);
      });
      $(document.body).on('click', 'a.remove-item', function (e) {
        e.preventDefault();
        return dsRemoveFromCart($(this));
      });
    };
    var dsHandleAddToCartClick = function dsHandleAddToCartClick() {
      $(document).on('click', '.add_to_cart_button', function () {
        dsBlockProductsUI(null);
      });
    };
    var dsClearTimeoutQtyChange = function dsClearTimeoutQtyChange() {
      // clear previous timeout, if exists
      if (dsUpdateTimeout !== null) {
        clearTimeout(dsUpdateTimeout);
      }
    };

    // eslint-disable-next-line no-unused-vars
    var dsQtyOnCheckout = function dsQtyOnCheckout() {
      $('form.checkout').on('change', '.qty', function () {
        // run refresh callback timeout
        dsClearTimeoutQtyChange();
        dsUpdateTimeout = setTimeout(function () {
          var data = {
            action: 'ds_update_checkout',
            // eslint-disable-next-line no-undef
            security: wc_checkout_params.update_order_review_nonce,
            post_data: $('form.checkout').serialize()
          };

          // eslint-disable-next-line no-undef
          jQuery.post(ds.ajax_url, data, function () {
            $('body').trigger('update_checkout');
          });
        }, 500);
      });
    };

    /** MiniCart Actions
     *
     */
    var dsReplicateMiniCartQtyWithShop = function dsReplicateMiniCartQtyWithShop() {
      $('.widget_shopping_cart').find('.qty').each(function () {
        // const input = $(this);
        var qty = $(this).val();
        var name = $(this).attr('id');
        $('.qty').each(function () {
          if ($(this).attr('id') === name) {
            $(this).val(qty);
          }
        });
      });
      $('.products').find('.qty').each(function () {
        // const input = $(this);
        // const qty = $(this).val();
        var name = $(this).attr('id');
        if (!$('.widget_shopping_cart').find("#".concat(name)).length) {
          $(this).val(0);
        }
      });
    };
    var dsMiniCartAjaxQuantityChange = function dsMiniCartAjaxQuantityChange(cartItemKey, inputId, newQuantity) {
      if (isAjaxRunning) return;
      dsEnqueueAjax({
        data: {
          action: 'ds_alter_quantity',
          quantity: newQuantity,
          cart_item_key: cartItemKey
        },
        type: 'post',
        dataType: 'json',
        // eslint-disable-next-line no-undef
        url: ds.ajax_url,
        beforeSend: function beforeSend() {
          isAjaxRunning = true;
          dsBlockProductsUI($('.cart-popup'));
        },
        success: function success(resp) {
          // tell do WC reload widget contents
          $(document.body).trigger('updated_wc_div');

          // trigger for 3rd plugins event listeners
          $(document.body).trigger('ds_minicart_updated', [resp.product_id]);

          // trigger update cart
          $(document.body).trigger('wc_update_cart');

          // find the <li> for the respective product on shop/category page
          var productId = resp.product_id;
          var liProduct = $(".post-".concat(productId));

          // make it works with shortcodes, eg.: [add_to_cart id="XX"]
          if (!liProduct.length) {
            liProduct = $("[data-product_id=\"".concat(productId, "\"]")).parent();
          }

          // update the quantity input to keep in sync with minicart
          if (liProduct.length) {
            liProduct.find('.qty').val(newQuantity);
          }

          // eslint-disable-next-line max-len
          // update shop product quantity if exists, for the cases where qty changed to zero in minicart
          if (newQuantity === 0) {
            dsReplicateMiniCartQtyWithShop();
          }
          isAjaxRunning = false;
          notify();
          dsUnblockProductsUI();
        },
        error: function error() {
          isAjaxRunning = false;
        }
      });
    };

    // synchronization from minicart quantity input to shop/single product page
    var dsProClearUpdateSyncTimeout = function dsProClearUpdateSyncTimeout() {
      // clear previous timeout, if exists
      if (dsUpdateSyncTimeout !== null) {
        clearTimeout(dsUpdateSyncTimeout);
      }
    };
    var dsChangeCartItemQuantity = function dsChangeCartItemQuantity(qtyElement) {
      var matches = qtyElement.attr('name').match(/cart\[(\w+)\]/);
      var cartItemKey = matches[1];
      var inputId = qtyElement.attr('id');

      // run code with timeout
      dsProClearUpdateSyncTimeout();
      dsUpdateSyncTimeout = setTimeout(function () {
        dsMiniCartAjaxQuantityChange(cartItemKey, inputId, qtyElement.val());
      }, 500);
    };
    var dsCheckInputValidity = function dsCheckInputValidity(qtyElement) {
      var inputQty = qtyElement;
      var newQty = parseInt(inputQty.val(), 10);
      var minAttr = inputQty.attr('min');
      var maxAttr = inputQty.attr('max');
      var quantityMsg = inputQty.closest('.cart-product-edit-quantity')[0];

      // eslint-disable-next-line max-len
      if (_typeof(minAttr) !== ( true ? "undefined" : 0) && minAttr !== false && newQty < parseInt(minAttr, 10)) {
        var minMessage = "<div class=\"ds-qty-msg\">Minimum stock quantity is <strong>".concat(minAttr, "</strong></div>");
        inputQty.val(minAttr);
        if (!quantityMsg.querySelector('.ds-qty-msg')) {
          quantityMsg.insertAdjacentHTML('beforeend', minMessage);
        }
      }
      // eslint-disable-next-line max-len
      if (_typeof(maxAttr) !== ( true ? "undefined" : 0) && maxAttr !== false && newQty > parseInt(maxAttr, 10)) {
        var maxMessage = "<div class=\"ds-qty-msg\">Maximum stock quantity is <strong>".concat(maxAttr, "</strong></div>");
        inputQty.val(maxAttr);
        if (!quantityMsg.querySelector('.ds-qty-msg')) {
          quantityMsg.insertAdjacentHTML('beforeend', maxMessage);
        }
      }
    };
    var dsListenMiniCartQtyChange = function dsListenMiniCartQtyChange() {
      $(document.body).on('change paste', 'div.cart-popup .qty', function (e) {
        e.preventDefault();
        if (inputEventTriggered) {
          inputEventTriggered = false;
          return;
        }
        dsChangeCartItemQuantity($(this));
      });
      $(document.body).on('input', 'div.cart-popup .qty', function (e) {
        e.preventDefault();
        dsCheckInputValidity($(this));
        inputEventTriggered = true;
        dsChangeCartItemQuantity($(this));
      });
    };
    var dsHandleCommonCartEvents = function dsHandleCommonCartEvents() {
      $(document).on('added_to_cart', function () {
        dsUnblockProductsUI();
        $('.cart-popup').addClass('is-active');
        $('html, body').addClass('ds-cart-popup-open');
        notify();
      });
    };

    // init calls
    CartPopupActions();
    dsHandleAddToCartClick();
    dsListenMiniCartQtyChange();
    dsHandleCommonCartEvents();
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
/*!**************************************!*\
  !*** ./assets/_src/js/js-wc-main.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dswc_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dswc_validation */ "./assets/_src/js/components/dswc_validation.js");
/* harmony import */ var _components_dswc_wNeedHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dswc_wNeedHelp */ "./assets/_src/js/components/dswc_wNeedHelp.js");
/* harmony import */ var _header_dswc_toggleCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/dswc_toggleCart */ "./assets/_src/js/header/dswc_toggleCart.js");
/* harmony import */ var _woocommerce_dswc_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./woocommerce/dswc_ajax */ "./assets/_src/js/woocommerce/dswc_ajax.js");
/* harmony import */ var _header_ds_headerHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/ds_headerHeight */ "./assets/_src/js/header/ds_headerHeight.js");
/**
 * WOOCOMMERCE
 * If the Woocommerce plugin is active, related files are loaded in class assets.
 * 'js-wc-main.js' (this file) is used for non-woocommerce pages.
 * 'js-wc.js' is for the rest of Woocommerce related javascript's.
 */






document.addEventListener('DOMContentLoaded', function () {
  // Woocommerce ajax calls
  (0,_woocommerce_dswc_ajax__WEBPACK_IMPORTED_MODULE_3__.dswc_ajax)();
  // Woocommerce toggle cart
  (0,_header_dswc_toggleCart__WEBPACK_IMPORTED_MODULE_2__.dswc_toggleCart)();
  // Enable if Woocommerce notice is active
  (0,_header_ds_headerHeight__WEBPACK_IMPORTED_MODULE_4__.ds_headerHeight)();
  // Enable if Woocommerce global support is active
  (0,_components_dswc_wNeedHelp__WEBPACK_IMPORTED_MODULE_1__.dswc_askAQuestion)();
});
window.addEventListener('load', function () {
  // Login validation
  (0,_components_dswc_validation__WEBPACK_IMPORTED_MODULE_0__.dswc_validation)();
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ2UsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQU07RUFDbEM7RUFDQTdDLDRFQUFlLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvY29tcG9uZW50cy9kc3djX3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9jb21wb25lbnRzL2Rzd2Nfd05lZWRIZWxwLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvaGVhZGVyL2RzX2hlYWRlckhlaWdodC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL2hlYWRlci9kc3djX3RvZ2dsZUNhcnQuanMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci8uL2Fzc2V0cy9fc3JjL2pzL3dvb2NvbW1lcmNlL2Rzd2NfYWpheC5qcyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvanMtd2MtbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE15IEFjY291bnQgdmFsaWRhdGlvbiBmb3IgbG9naW5cbiAqL1xuXG5jb25zdCBkc3djX3ZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGpRdWVyeSgnLmxvZ2luLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29vY29tbWVyY2UtZm9ybS1sb2dpbl9fc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvb2NvbW1lcmNlLWZvcm0tcmVnaXN0ZXJfX3N1Ym1pdCcpO1xuICAgICAgICBjb25zdCBsb2dpbkJ0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4gLmxpbmstd3JhcHBlcicpO1xuICAgICAgICBjb25zdCByZWdpc3RlckJ0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaXN0ZXIgLmxpbmstd3JhcHBlcicpO1xuXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuV3JhcHBlcikuYWRkQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGpRdWVyeShyZWdpc3RlckJ0bldyYXBwZXIpLmFkZENsYXNzKCdkaXNhYmxlZC13cmFwcGVyJyk7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDIzKSB7XG5cbiAgICAgICAgICAgICAgICBqUXVlcnkobG9naW5CdG5XcmFwcGVyKS5iZWZvcmUoXCI8ZGl2IGNsYXNzPSd2YWxpZGF0aW9uLW1zZyBtb2JpbGUtbG9nJz5QbGVhc2UsIGVudGVyIHlvdXIgbG9naW4gb3IgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGxvZ2luPC9kaXY+PC9icj5cIik7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuV3JhcHBlcikuYmVmb3JlKFwiPGRpdiBjbGFzcz0ndmFsaWRhdGlvbi1tc2cgbW9iaWxlLXJlZyc+UGxlYXNlLCBlbnRlciB5b3VyIGVtYWlsIGFuZCBwYXNzd29yZCB0byByZWdpc3RlcjwvZGl2PjwvYnI+XCIpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzc2FibGVCdG5Mb2dpbigpIHtcbiAgICAgICAgICAgIGlmIChqUXVlcnkoJ2lucHV0I3VzZXJuYW1lJykudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeSgnLmxvZ2luIGlucHV0W3R5cGU9cGFzc3dvcmRdJykudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGpRdWVyeShsb2dpbkJ0bikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuV3JhcHBlcikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkaXNzYWJsZUJ0blJlZ2lzdGVyKCkge1xuXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KCdpbnB1dFt0eXBlPWVtYWlsXScpLnZhbCgpLmxlbmd0aCA9PT0gMCB8fCBqUXVlcnkoJy5yZWdpc3RlciBpbnB1dFt0eXBlPXBhc3N3b3JkXScpLnZhbCgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeShyZWdpc3RlckJ0bikuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1haWwgbWFzayB2YWxpZGF0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRnVuY3Rpb25zIGZvciBMT0dJTiB2YWxpZGF0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VzKCkge1xuICAgICAgICAgICAgalF1ZXJ5KCdpbnB1dCN1c2VybmFtZScpLmFmdGVyKFwiPGRpdiBjbGFzcz0ndmFsaWRhdGlvbi1tc2cgZW1haWwtbG9nIGhpZGRlbi1tc2cnPlBsZWFzZSwgZW50ZXIgeW91ciBsb2dpbiBvciBlbWFpbCB0byBsb2dpbjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGpRdWVyeSgnLmxvZ2luIGlucHV0W3R5cGU9cGFzc3dvcmRdJykuYWZ0ZXIoXCI8ZGl2IGNsYXNzPSd2YWxpZGF0aW9uLW1zZyBwYXNzd29yZC1sb2cgaGlkZGVuLW1zZyc+UGxlYXNlLCBlbnRlciB5b3VyICBwYXNzd29yZCB0byBsb2dpbjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGpRdWVyeSgnaW5wdXRbdHlwZT1lbWFpbF0nKS5hZnRlcihcIjxkaXYgY2xhc3M9J3ZhbGlkYXRpb24tbXNnIGVtYWlsLXJlZyBoaWRkZW4tbXNnJz5QbGVhc2UsIGVudGVyIHlvdXIgIHlvdXIgZW1haWwgdG8gcmVnaXN0ZXI8L2Rpdj5cIik7XG4gICAgICAgICAgICBqUXVlcnkoJy5yZWdpc3RlciBpbnB1dFt0eXBlPXBhc3N3b3JkXScpLmFmdGVyKFwiPGRpdiBjbGFzcz0ndmFsaWRhdGlvbi1tc2cgcGFzc3dvcmQtcmVnIGhpZGRlbi1tc2cnPlBsZWFzZSwgZW50ZXIgeW91ciAgcGFzc3dvcmQgdG8gbG9naW48L2Rpdj5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGluZyBwbGFjZWhvbGRlcnMgZm9yIHRoZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU1lc3NhZ2VzKCk7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5KCcud29vY29tbWVyY2UtZm9ybS1sb2dpbicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBkaXNzYWJsZUJ0bkxvZ2luKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoalF1ZXJ5KCcud29vY29tbWVyY2UtZm9ybS1yZWdpc3RlcicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBkaXNzYWJsZUJ0blJlZ2lzdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZ1bmN0aW9uIGNsaWNrT25kaXNhYmxlZCgpIHtcbiAgICAgICAgLy8gICAgIC8vIGpRdWVyeShsb2dpbkJ0bikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpID8gYWxlcnQoXCJkaWFzYmxlZFwiKSA6IGFsZXJ0KFwiYXNibGVkXCIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coalF1ZXJ5KGxvZ2luQnRuKS5hdHRyKFwiZGlzYWJsZWRcIikgPT09IHRydWUpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tMb2dpbkVtYWlsKCkge1xuICAgICAgICAgICAgaWYgKGpRdWVyeSgnaW5wdXQjdXNlcm5hbWUnKS52YWwoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2lucHV0I3VzZXJuYW1lJykuYWRkQ2xhc3MoJ2Vycm9yLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cuZW1haWwtbG9nJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbi1tc2cnKS50ZXh0KCdQbGVhc2UsIGVudGVyIGxvZ2luIG9yIGVtYWlsIHRvIGxvZ2luJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIGpRdWVyeShsb2dpbkJ0bldyYXBwZXIpLmFkZENsYXNzKCdkaXNhYmxlZC13cmFwcGVyJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnZhbGlkYXRpb24tbXNnLm1vYmlsZS1sb2cnKS5hZGRDbGFzcygnaGlkZGVuLW1zZycpO1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnZhbGlkYXRpb24tbXNnLmVtYWlsLWxvZycpLmFkZENsYXNzKCdoaWRkZW4tbXNnJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdpbnB1dCN1c2VybmFtZScpLnJlbW92ZUNsYXNzKCdlcnJvci1pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGpRdWVyeShsb2dpbkJ0bikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuV3JhcHBlcikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrTG9naW5QYXNzKCkge1xuICAgICAgICAgICAgaWYgKGpRdWVyeSgnLmxvZ2luIGlucHV0W3R5cGU9cGFzc3dvcmRdJykudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF0nKS5hZGRDbGFzcygnZXJyb3ItaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy52YWxpZGF0aW9uLW1zZy5wYXNzd29yZC1sb2cnKS5yZW1vdmVDbGFzcygnaGlkZGVuLW1zZycpLnRleHQoJ1BsZWFzZSwgZW50ZXIgcGFzc3dvcmQgdG8gbG9naW4nKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkobG9naW5CdG4pLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuV3JhcHBlcikuYWRkQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cubW9iaWxlLWxvZycpLmFkZENsYXNzKCdoaWRkZW4tbXNnJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cucGFzc3dvcmQtbG9nJykuYWRkQ2xhc3MoJ2hpZGRlbi1tc2cnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXScpLnJlbW92ZUNsYXNzKCdlcnJvci1pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGpRdWVyeShsb2dpbkJ0bikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGxvZ2luQnRuV3JhcHBlcikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tMb2dpbigpIHtcbiAgICAgICAgICAgIGNoZWNrTG9naW5QYXNzKCk7XG4gICAgICAgICAgICBjaGVja0xvZ2luRW1haWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExPR0lOIFZBTElEQVRJT05cblxuICAgICAgICBqUXVlcnkobG9naW5CdG4pLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tMb2dpbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoJyAubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF0nKS5mb2N1c291dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja0xvZ2luUGFzcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCcgLmxvZ2luIGlucHV0W3R5cGU9cGFzc3dvcmRdJykua2V5dXAoKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tMb2dpblBhc3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgalF1ZXJ5KCdpbnB1dCN1c2VybmFtZScpLmZvY3Vzb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrTG9naW5FbWFpbCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCdpbnB1dCN1c2VybmFtZScpLmtleXVwKCgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrTG9naW5FbWFpbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZWdpc3RlciB2YWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUmVnaXN0ZXJFbWFpbCgpIHtcbiAgICAgICAgICAgIGlmIChqUXVlcnkoJ2lucHV0W3R5cGU9ZW1haWxdJykudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cuZW1haWwtcmVnJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbi1tc2cnKS50ZXh0KCdQbGVhc2UsIGVudGVyIHlvdXIgZW1haWwgdG8gcmVnaXN0ZXInKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2lucHV0W3R5cGU9ZW1haWxdJykuYWRkQ2xhc3MoJ2Vycm9yLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuV3JhcHBlcikuYWRkQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cubW9iaWxlLXJlZycpLmFkZENsYXNzKCdoaWRkZW4tbXNnJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cuZW1haWwtcmVnJykuYWRkQ2xhc3MoJ2hpZGRlbi1tc2cnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2lucHV0W3R5cGU9ZW1haWxdJykucmVtb3ZlQ2xhc3MoJ2Vycm9yLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkocmVnaXN0ZXJCdG5XcmFwcGVyKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZVJlZ2lzdGVyRW1haWwoKSB7XG4gICAgICAgICAgICBpZiAoZW1haWxJc1ZhbGlkKGpRdWVyeSgnaW5wdXRbdHlwZT1lbWFpbF0nKS52YWwoKSkgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy52YWxpZGF0aW9uLW1zZy5lbWFpbC1yZWcnKS5yZW1vdmVDbGFzcygnaGlkZGVuLW1zZycpLnRleHQoJ1BsZWFzZSwgZW50ZXIgY29ycmVjdCBlbWFpbCB0byByZWdpc3RlcicpO1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnaW5wdXRbdHlwZT1lbWFpbF0nKS5hZGRDbGFzcygnZXJyb3ItaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkocmVnaXN0ZXJCdG4pLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuV3JhcHBlcikuYWRkQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cubW9iaWxlLXJlZycpLmFkZENsYXNzKCdoaWRkZW4tbXNnJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cuZW1haWwtcmVnJykuYWRkQ2xhc3MoJ2hpZGRlbi1tc2cnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2lucHV0W3R5cGU9ZW1haWxdJykucmVtb3ZlQ2xhc3MoJ2Vycm9yLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkocmVnaXN0ZXJCdG5XcmFwcGVyKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlZ2lzdGVyUGFzcygpIHtcbiAgICAgICAgICAgIGlmIChqUXVlcnkoJy5yZWdpc3RlciBpbnB1dFt0eXBlPXBhc3N3b3JkXScpLnZhbCgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnJlZ2lzdGVyIGlucHV0W3R5cGU9cGFzc3dvcmRdJykuYWRkQ2xhc3MoJ2Vycm9yLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cucGFzc3dvcmQtcmVnJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbi1tc2cnKS50ZXh0KCdQbGVhc2UsIGVudGVyIHlvdXIgcGFzc3dvcmQgdG8gcmVnaXN0ZXInKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkocmVnaXN0ZXJCdG4pLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuV3JhcHBlcikuYWRkQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cubW9iaWxlLXJlZycpLmFkZENsYXNzKCdoaWRkZW4tbXNnJyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcudmFsaWRhdGlvbi1tc2cucGFzc3dvcmQtcmVnJykuYWRkQ2xhc3MoJ2hpZGRlbi1tc2cnKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5yZWdpc3RlciBpbnB1dFt0eXBlPXBhc3N3b3JkXScpLnJlbW92ZUNsYXNzKCdlcnJvci1pbnB1dCcpO1xuICAgICAgICAgICAgICAgIGpRdWVyeShyZWdpc3RlckJ0bikuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHJlZ2lzdGVyQnRuV3JhcHBlcikucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkLXdyYXBwZXInKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja1JlZ2lzdGVyKCkge1xuXG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyRW1haWwoKTtcbiAgICAgICAgICAgIHZhbGlkYXRlUmVnaXN0ZXJFbWFpbCgpO1xuICAgICAgICAgICAgY2hlY2tSZWdpc3RlclBhc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeShyZWdpc3RlckJ0bikuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeSgnaW5wdXRbdHlwZT1lbWFpbF0nKS5mb2N1c291dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyRW1haWwoKTtcbiAgICAgICAgICAgIHZhbGlkYXRlUmVnaXN0ZXJFbWFpbCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCdpbnB1dFt0eXBlPWVtYWlsXScpLmtleXVwKCgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrUmVnaXN0ZXJFbWFpbCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCcucmVnaXN0ZXIgaW5wdXRbdHlwZT1wYXNzd29yZF0nKS5mb2N1c291dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyUGFzcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCcucmVnaXN0ZXIgaW5wdXRbdHlwZT1wYXNzd29yZF0nKS5rZXl1cCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyUGFzcygpO1xuICAgICAgICB9KTtcblxuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgZHN3Y192YWxpZGF0aW9uLFxufTtcbiIsIi8qKlxuICogQXNrIGEgcXVlc3Rpb24gYnV0dG9uXG4gKi9cblxuaW1wb3J0IHsgdV90aHJvdHRsZWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmNvbnN0IGRzd2NfYXNrQVF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHdOZWVkSGVscCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53LW5lZWQtaGVscF9fd2lkZ2V0Jyk7XG4gICAgaWYgKCF3TmVlZEhlbHApIHJldHVybjtcblxuICAgIGNvbnN0IHdOZWVkSGVscE9wZW4gPSB3TmVlZEhlbHAucXVlcnlTZWxlY3RvcignLmpzLXctaGVscC1vcGVuJyk7XG4gICAgY29uc3Qgd05lZWRIZWxwQ2xvc2UgPSB3TmVlZEhlbHAucXVlcnlTZWxlY3RvckFsbCgnLmpzLXctaGVscC1jbG9zZScpO1xuICAgIGNvbnN0IHdOZWVkSGVscFdpZGdldCA9IHdOZWVkSGVscE9wZW4uY2xvc2VzdCgnLnctbmVlZC1oZWxwX193aWRnZXQnKTtcblxuICAgIHdOZWVkSGVscE9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdOZWVkSGVscFdpZGdldC5xdWVyeVNlbGVjdG9yKCcudy1uZWVkLWhlbHBfX3BvcHVwJykuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZHMtdy1oZWxwLWFjdGl2ZScpO1xuICAgIH0pXG5cbiAgICB3TmVlZEhlbHBDbG9zZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd05lZWRIZWxwV2lkZ2V0LnF1ZXJ5U2VsZWN0b3IoJy53LW5lZWQtaGVscF9fcG9wdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZHMtdy1oZWxwLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCB0aHJvdHRsZVNjcm9sbEFzayA9IHVfdGhyb3R0bGVkKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IGFza1F1ZXN0aW9uVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3LW5lZWQtaGVscC10b2dnbGUnKTtcbiAgICAgICAgaWYgKCFhc2tRdWVzdGlvblRyaWdnZXIpIHJldHVybjtcblxuICAgICAgICBmdW5jdGlvbiBjYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFza1F1ZXN0aW9uVHJpZ2dlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBhc2tRdWVzdGlvblRyaWdnZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICBhc2tRdWVzdGlvblRyaWdnZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhc2tRdWVzdGlvblRyaWdnZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgYXNrUXVlc3Rpb25UcmlnZ2VyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgICAgIGFza1F1ZXN0aW9uVHJpZ2dlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZm9vdGVyKTtcblxuICAgIH0sIDMwKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlU2Nyb2xsQXNrKTtcblxuICAgICQoZG9jdW1lbnQpLmJpbmQoJ2dmb3JtX2NvbmZpcm1hdGlvbl9sb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQsIGZvcm1JZCkge1xuICAgICAgICBjb25zdCBuZWVkSGVscFN1Ym1pc3Npb24gPSAkKGAjbmVlZF9oZWxwICNnZm9ybV9jb25maXJtYXRpb25fd3JhcHBlcl8keyBmb3JtSWQgfWApO1xuICAgICAgICBjb25zdCBuZWVkSGVscFdyYXBwZXIgPSAkKCcjbmVlZF9oZWxwJyk7XG5cbiAgICAgICAgaWYgKG5lZWRIZWxwU3VibWlzc2lvbj8ubGVuZ3RoID4gMCAmJiBuZWVkSGVscFdyYXBwZXI/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG5lZWRIZWxwV3JhcHBlci5maW5kKCcuanMtdy1oZWxwLXN1Y2Nlc3MtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge1xuICAgIGRzd2NfYXNrQVF1ZXN0aW9uLFxufVxuIiwiLyoqXG4gKiBDYWxjdWxhdGUgSGVhZGVyIGhlaWdodCBhbmQgdXNlIGl0IGFzIDpyb290IHZhcmlhYmxlLlxuICogQ2FsY3VsYXRlIFNpdGUgbm90aWNlIGhlaWdodCBhbmQgdXNlIGl0IGFzIDpyb290IHZhcmlhYmxlLlxuICpcbiAqIFVzYWJsZSBmb3Igb2Zmc2V0dGluZyBzaXRlIGl0ZW1zIHdoZW4gdXNpbmcgV29vQ29tbWVyY2UgdmFyaWFibGUgaGVpZ2h0IHNpdGUgbm90aWNlLlxuICovXG5cbmNvbnN0IGRzX2hlYWRlckhlaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJOb3RpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29vY29tbWVyY2Utc3RvcmUtbm90aWNlJyk7XG4gICAgaWYgKCFoZWFkZXJOb3RpY2UpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZVRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZVRhZy5jbGFzc0xpc3QuYWRkKCdkcy1jdXN0b20nKTtcblxuICAgIC8vIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMTExcHgpJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBvYnNlcnZlSGVhZGVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gaXRlbS50YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVUYWcuaW5uZXJIVE1MID0gYDpyb290IHstLW5hdmJhci1oZWlnaHQ6ICR7IGhlaWdodCB9cHg7fWA7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlVGFnKTtcbiAgICAgICAgICAgIG9ic2VydmVIZWFkZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlSGVhZGVyLm9ic2VydmUoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXJOb3RpY2UpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZU5vdGljZSA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gaXRlbS50YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBOb3RpY2UgaGVpZ2h0OiAke2hlaWdodH1gKTtcbiAgICAgICAgICAgICAgICBzdHlsZVRhZy5pbm5lckhUTUwgKz0gYDpyb290IHstLXdjLW5vdGljZS1oZWlnaHQ6ICR7IGhlaWdodCB9cHg7fWA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVOb3RpY2Uub2JzZXJ2ZShoZWFkZXJOb3RpY2UpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgZHNfaGVhZGVySGVpZ2h0LFxufTtcbiIsIi8qKlxuICogVG9nZ2xlIGZvciBXb29Db21tZXJjZSBtaW5pIGNhcnRcbiAqL1xuXG5jb25zdCBkc3djX3RvZ2dsZUNhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZHNDYXJ0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRvZ2dsZS1jYXJ0Jyk7XG4gICAgaWYgKCFkc0NhcnRUb2dnbGUpIHJldHVybjtcblxuICAgIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgZHNDYXJ0U2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcy1jYXJ0LXNpZGViYXInKTtcbiAgICBjb25zdCBoZWFkZXIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAgIGNvbnN0IHBvcHVwQ2FydE92ZXJsYXkgPSAnPGRpdiBjbGFzcz1cImRzLWNhcnQtb3ZlcmxheSBqcy10b2dnbGUtY2FydFwiPjwvZGl2Pic7XG5cbiAgICBpZiAoZHNDYXJ0U2lkZWJhcikge1xuICAgICAgICBjb25zdCBvcGVuQ2FydCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RzLWNhcnQtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RzLWNhcnQtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNhcnQtcG9wdXAnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHBvcHVwQ2FydE92ZXJsYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RzLWNhcnQtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNhcnQtcG9wdXAnKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHMtY2FydC1vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2FkZGVkX3RvX2NhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICBvcGVuQ2FydCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLXRvZ2dsZS1jYXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG9wZW5DYXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgZHN3Y190b2dnbGVDYXJ0LFxufTtcbiIsIlxuY29uc3QgdV9kZWJvdW5jZWQgPSAoZnVuYywgZGVsYXksIGltbWVkaWF0ZSkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBib3VuZEZ1bmMgPSBmdW5jLmJpbmQodGhpcywgLi4uYXJncyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZXJJZCkge1xuICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FsbGVlRnVuYyA9IGltbWVkaWF0ZSA/ICgpID0+IHsgdGltZXJJZCA9IG51bGwgfSA6IGJvdW5kRnVuYztcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoY2FsbGVlRnVuYywgZGVsYXkpO1xuICAgIH1cbn1cblxuY29uc3QgdV90aHJvdHRsZWQgPSAoZnVuYywgZGVsYXksIGltbWVkaWF0ZSkgPT4ge1xuICAgIGxldCB0aW1lcklkO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBib3VuZEZ1bmMgPSBmdW5jLmJpbmQodGhpcywgLi4uYXJncyk7XG4gICAgICAgIGlmICh0aW1lcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZXJJZCkge1xuICAgICAgICAgICAgYm91bmRGdW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYoIWltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgIGJvdW5kRnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgdV9kZWJvdW5jZWQsXG4gICAgdV90aHJvdHRsZWRcbn07IiwiLyoqXG4gKiBHbG9iYWwgYWpheCBjYWxscyBhbmQgZnVuY3Rpb25zIGZvciBXb29jb21tZXJjZVxuICogVE9ETzogUmVmYWN0b3IgdGhpc1xuICovXG5cbmNvbnN0IGRzd2NfYWpheCA9ICgpID0+IHtcbiAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgkKSA9PiB7XG4gICAgICAgIGNvbnN0IGRzQWpheFF1ZXVlID0gW107XG4gICAgICAgIGxldCBkc1VwZGF0ZVN5bmNUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgbGV0IGRzVXBkYXRlVGltZW91dCA9IG51bGw7XG4gICAgICAgIGxldCBpc0FqYXhSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBpbnB1dEV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gZXhlY3V0ZSBBSkFYIHF1ZXVlZCBsaXN0XG4gICAgICAgIGNvbnN0IGRzUnVuUXVldWVkQWpheCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkc0FqYXhRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhamF4T3B0cyA9IGRzQWpheFF1ZXVlWzBdO1xuXG4gICAgICAgICAgICAgICAgYWpheE9wdHMuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzQWpheFF1ZXVlLnNoaWZ0KCk7IC8vIHJlbW92ZSB0aGlzIGFqYXggZnJvbSBxdWV1ZVxuICAgICAgICAgICAgICAgICAgICBkc1J1blF1ZXVlZEFqYXgoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gJC5hamF4KGFqYXhPcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkc0VucXVldWVBamF4ID0gZnVuY3Rpb24gKGFqYXhPcHRzKSB7XG4gICAgICAgICAgICBkc0FqYXhRdWV1ZS5wdXNoKGFqYXhPcHRzKTtcbiAgICAgICAgICAgIGRzUnVuUXVldWVkQWpheCgpO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgY29uc3QgZHNCbG9ja1VJID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYmxvY2soe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgb3ZlcmxheUNTUzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZHNVbmJsb2NrVUkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC51bmJsb2NrKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZHNCbG9ja1Byb2R1Y3RzVUkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRzQmxvY2tVSShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJCgnLnByb2R1Y3QnKS5sZW5ndGggJiYgIWRzLmlzU2hvcCkge1xuICAgICAgICAgICAgICAgIGRzQmxvY2tVSSgkKCcucHJvZHVjdCcpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHNCbG9ja1VJKCQoJy5wcm9kdWN0cycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkc1VuYmxvY2tQcm9kdWN0c1VJID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZHNVbmJsb2NrVUkoJCgnLnByb2R1Y3RzJykpO1xuICAgICAgICAgICAgZHNVbmJsb2NrVUkoJCgnLnByb2R1Y3QnKSk7XG4gICAgICAgICAgICBkc1VuYmxvY2tVSSgkKCcud2lkZ2V0X3Nob3BwaW5nX2NhcnQnKSk7XG4gICAgICAgICAgICBkc1VuYmxvY2tVSSgkKCcuY2FydC1wb3B1cCcpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkc1JlbW92ZUZyb21DYXJ0ID0gZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgIGRzRW5xdWV1ZUFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZHNfZGVsZXRlX2l0ZW1fY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhX3JlbW92ZV9saW5rOiBsaW5rLmRhdGEoJ3JlbW92ZScpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgdXJsOiBkcy5hamF4X3VybCxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kKCkge1xuICAgICAgICAgICAgICAgICAgICBkc0Jsb2NrUHJvZHVjdHNVSSgkKCcuY2FydC1wb3B1cCcpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkudHJpZ2dlcigndXBkYXRlZF93Y19kaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS50cmlnZ2VyKCd3Y191cGRhdGVfY2FydCcpO1xuICAgICAgICAgICAgICAgICAgICBkc1VuYmxvY2tQcm9kdWN0c1VJKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRzUXR5QnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZWxlbWVudCwgZmFjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFF0eSA9IGVsZW1lbnQucGFyZW50KCkuZmluZCgnLnF0eScpO1xuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoaW5wdXRRdHkudmFsKCksIDEwKSArIGZhY3RvcjtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZGlzYWJsZWRcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXNwZWN0IHRoZSBtaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICBjb25zdCBtaW5BdHRyID0gaW5wdXRRdHkuYXR0cignbWluJyk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtaW5BdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIG1pbkF0dHIgIT09IGZhbHNlICYmIG5ld1F0eSA8IHBhcnNlSW50KG1pbkF0dHIsIDEwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVzcGVjdCB0aGUgbWF4IHN0b2NrIGxpbWl0XG4gICAgICAgICAgICBjb25zdCBtYXhBdHRyID0gaW5wdXRRdHkuYXR0cignbWF4Jyk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhBdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIG1heEF0dHIgIT09IGZhbHNlICYmIG5ld1F0eSA+IHBhcnNlSW50KG1heEF0dHIsIDEwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2hlbiB1c2luZyBTZWxlY3QsIGNoZWNrIGlmIG5ldyBxdWFudGl0eSBleGlzdHMgaW4gb3B0aW9ucyBsaXN0XG4gICAgICAgICAgICBpZiAoaW5wdXRRdHkuaXMoJ3NlbGVjdCcpICYmIGlucHV0UXR5LmZpbmQoYG9wdGlvblt2YWx1ZT1cIiR7bmV3UXR5fVwiXWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXRRdHkudmFsKG5ld1F0eSk7XG4gICAgICAgICAgICBpbnB1dFF0eS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IENhcnRQb3B1cEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGNoYW5nZSB0cmlnZ2VyXG4gICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICcuaXRlbV9xdHkucGx1cycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkc1F0eUJ1dHRvbkNsaWNrKCQodGhpcyksIDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgJy5pdGVtX3F0eS5taW51cycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkc1F0eUJ1dHRvbkNsaWNrKCQodGhpcyksIC0xKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjbGljaycsICdhLnJlbW92ZS1pdGVtJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHNSZW1vdmVGcm9tQ2FydCgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRzSGFuZGxlQWRkVG9DYXJ0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZF90b19jYXJ0X2J1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkc0Jsb2NrUHJvZHVjdHNVSShudWxsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRzQ2xlYXJUaW1lb3V0UXR5Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdGltZW91dCwgaWYgZXhpc3RzXG4gICAgICAgICAgICBpZiAoZHNVcGRhdGVUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRzVXBkYXRlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IGRzUXR5T25DaGVja291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ2Zvcm0uY2hlY2tvdXQnKS5vbignY2hhbmdlJywgJy5xdHknLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcnVuIHJlZnJlc2ggY2FsbGJhY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIGRzQ2xlYXJUaW1lb3V0UXR5Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgZHNVcGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdkc191cGRhdGVfY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eTogd2NfY2hlY2tvdXRfcGFyYW1zLnVwZGF0ZV9vcmRlcl9yZXZpZXdfbm9uY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0X2RhdGE6ICQoJ2Zvcm0uY2hlY2tvdXQnKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnBvc3QoZHMuYWpheF91cmwsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCd1cGRhdGVfY2hlY2tvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKiBNaW5pQ2FydCBBY3Rpb25zXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkc1JlcGxpY2F0ZU1pbmlDYXJ0UXR5V2l0aFNob3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcud2lkZ2V0X3Nob3BwaW5nX2NhcnQnKVxuICAgICAgICAgICAgICAgIC5maW5kKCcucXR5JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXR5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICQodGhpcykuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcucXR5JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwocXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5wcm9kdWN0cycpXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5xdHknKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBxdHkgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLndpZGdldF9zaG9wcGluZ19jYXJ0JykuZmluZChgIyR7bmFtZX1gKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZHNNaW5pQ2FydEFqYXhRdWFudGl0eUNoYW5nZSA9IGZ1bmN0aW9uIChjYXJ0SXRlbUtleSwgaW5wdXRJZCwgbmV3UXVhbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChpc0FqYXhSdW5uaW5nKSByZXR1cm47XG4gICAgICAgICAgICBkc0VucXVldWVBamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2RzX2FsdGVyX3F1YW50aXR5JyxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IG5ld1F1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICBjYXJ0X2l0ZW1fa2V5OiBjYXJ0SXRlbUtleSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgICAgICAgIHVybDogZHMuYWpheF91cmwsXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBamF4UnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRzQmxvY2tQcm9kdWN0c1VJKCQoJy5jYXJ0LXBvcHVwJykpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRlbGwgZG8gV0MgcmVsb2FkIHdpZGdldCBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLnRyaWdnZXIoJ3VwZGF0ZWRfd2NfZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpZ2dlciBmb3IgM3JkIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkudHJpZ2dlcignZHNfbWluaWNhcnRfdXBkYXRlZCcsIFtyZXNwLnByb2R1Y3RfaWRdKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHVwZGF0ZSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkudHJpZ2dlcignd2NfdXBkYXRlX2NhcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSA8bGk+IGZvciB0aGUgcmVzcGVjdGl2ZSBwcm9kdWN0IG9uIHNob3AvY2F0ZWdvcnkgcGFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSByZXNwLnByb2R1Y3RfaWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaVByb2R1Y3QgPSAkKGAucG9zdC0ke3Byb2R1Y3RJZH1gKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGl0IHdvcmtzIHdpdGggc2hvcnRjb2RlcywgZWcuOiBbYWRkX3RvX2NhcnQgaWQ9XCJYWFwiXVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpUHJvZHVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpUHJvZHVjdCA9ICQoYFtkYXRhLXByb2R1Y3RfaWQ9XCIke3Byb2R1Y3RJZH1cIl1gKS5wYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcXVhbnRpdHkgaW5wdXQgdG8ga2VlcCBpbiBzeW5jIHdpdGggbWluaWNhcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpUHJvZHVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpUHJvZHVjdC5maW5kKCcucXR5JykudmFsKG5ld1F1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBzaG9wIHByb2R1Y3QgcXVhbnRpdHkgaWYgZXhpc3RzLCBmb3IgdGhlIGNhc2VzIHdoZXJlIHF0eSBjaGFuZ2VkIHRvIHplcm8gaW4gbWluaWNhcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1F1YW50aXR5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkc1JlcGxpY2F0ZU1pbmlDYXJ0UXR5V2l0aFNob3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlzQWpheFJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5KCk7XG4gICAgICAgICAgICAgICAgICAgIGRzVW5ibG9ja1Byb2R1Y3RzVUkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWpheFJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc3luY2hyb25pemF0aW9uIGZyb20gbWluaWNhcnQgcXVhbnRpdHkgaW5wdXQgdG8gc2hvcC9zaW5nbGUgcHJvZHVjdCBwYWdlXG4gICAgICAgIGNvbnN0IGRzUHJvQ2xlYXJVcGRhdGVTeW5jVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHByZXZpb3VzIHRpbWVvdXQsIGlmIGV4aXN0c1xuICAgICAgICAgICAgaWYgKGRzVXBkYXRlU3luY1RpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZHNVcGRhdGVTeW5jVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZHNDaGFuZ2VDYXJ0SXRlbVF1YW50aXR5ID0gZnVuY3Rpb24gKHF0eUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBxdHlFbGVtZW50LmF0dHIoJ25hbWUnKS5tYXRjaCgvY2FydFxcWyhcXHcrKVxcXS8pO1xuICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1LZXkgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRJZCA9IHF0eUVsZW1lbnQuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgLy8gcnVuIGNvZGUgd2l0aCB0aW1lb3V0XG4gICAgICAgICAgICBkc1Byb0NsZWFyVXBkYXRlU3luY1RpbWVvdXQoKTtcbiAgICAgICAgICAgIGRzVXBkYXRlU3luY1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkc01pbmlDYXJ0QWpheFF1YW50aXR5Q2hhbmdlKGNhcnRJdGVtS2V5LCBpbnB1dElkLCBxdHlFbGVtZW50LnZhbCgpKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZHNDaGVja0lucHV0VmFsaWRpdHkgPSBmdW5jdGlvbiAocXR5RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRRdHkgPSBxdHlFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoaW5wdXRRdHkudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbkF0dHIgPSBpbnB1dFF0eS5hdHRyKCdtaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1heEF0dHIgPSBpbnB1dFF0eS5hdHRyKCdtYXgnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TXNnID0gaW5wdXRRdHkuY2xvc2VzdCgnLmNhcnQtcHJvZHVjdC1lZGl0LXF1YW50aXR5JylbMF07XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1pbkF0dHIgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgbWluQXR0ciAhPT0gZmFsc2UgJiYgbmV3UXR5IDwgcGFyc2VJbnQobWluQXR0ciwgMTApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluTWVzc2FnZSA9IGA8ZGl2IGNsYXNzPVwiZHMtcXR5LW1zZ1wiPk1pbmltdW0gc3RvY2sgcXVhbnRpdHkgaXMgPHN0cm9uZz4ke21pbkF0dHJ9PC9zdHJvbmc+PC9kaXY+YDtcblxuICAgICAgICAgICAgICAgIGlucHV0UXR5LnZhbChtaW5BdHRyKTtcbiAgICAgICAgICAgICAgICBpZiAoIXF1YW50aXR5TXNnLnF1ZXJ5U2VsZWN0b3IoJy5kcy1xdHktbXNnJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlNc2cuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtaW5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhBdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIG1heEF0dHIgIT09IGZhbHNlICYmIG5ld1F0eSA+IHBhcnNlSW50KG1heEF0dHIsIDEwKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heE1lc3NhZ2UgPSBgPGRpdiBjbGFzcz1cImRzLXF0eS1tc2dcIj5NYXhpbXVtIHN0b2NrIHF1YW50aXR5IGlzIDxzdHJvbmc+JHttYXhBdHRyfTwvc3Ryb25nPjwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICBpbnB1dFF0eS52YWwobWF4QXR0cik7XG4gICAgICAgICAgICAgICAgaWYgKCFxdWFudGl0eU1zZy5xdWVyeVNlbGVjdG9yKCcuZHMtcXR5LW1zZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5TXNnLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWF4TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRzTGlzdGVuTWluaUNhcnRRdHlDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdjaGFuZ2UgcGFzdGUnLCAnZGl2LmNhcnQtcG9wdXAgLnF0eScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dEV2ZW50VHJpZ2dlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkc0NoYW5nZUNhcnRJdGVtUXVhbnRpdHkoJCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbignaW5wdXQnLCAnZGl2LmNhcnQtcG9wdXAgLnF0eScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRzQ2hlY2tJbnB1dFZhbGlkaXR5KCQodGhpcykpO1xuICAgICAgICAgICAgICAgIGlucHV0RXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRzQ2hhbmdlQ2FydEl0ZW1RdWFudGl0eSgkKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRzSGFuZGxlQ29tbW9uQ2FydEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdhZGRlZF90b19jYXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRzVW5ibG9ja1Byb2R1Y3RzVUkoKTtcbiAgICAgICAgICAgICAgICAkKCcuY2FydC1wb3B1cCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYWRkQ2xhc3MoJ2RzLWNhcnQtcG9wdXAtb3BlbicpO1xuICAgICAgICAgICAgICAgIG5vdGlmeSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0IGNhbGxzXG4gICAgICAgIENhcnRQb3B1cEFjdGlvbnMoKTtcbiAgICAgICAgZHNIYW5kbGVBZGRUb0NhcnRDbGljaygpO1xuICAgICAgICBkc0xpc3Rlbk1pbmlDYXJ0UXR5Q2hhbmdlKCk7XG4gICAgICAgIGRzSGFuZGxlQ29tbW9uQ2FydEV2ZW50cygpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgICBkc3djX2FqYXgsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXT09DT01NRVJDRVxuICogSWYgdGhlIFdvb2NvbW1lcmNlIHBsdWdpbiBpcyBhY3RpdmUsIHJlbGF0ZWQgZmlsZXMgYXJlIGxvYWRlZCBpbiBjbGFzcyBhc3NldHMuXG4gKiAnanMtd2MtbWFpbi5qcycgKHRoaXMgZmlsZSkgaXMgdXNlZCBmb3Igbm9uLXdvb2NvbW1lcmNlIHBhZ2VzLlxuICogJ2pzLXdjLmpzJyBpcyBmb3IgdGhlIHJlc3Qgb2YgV29vY29tbWVyY2UgcmVsYXRlZCBqYXZhc2NyaXB0J3MuXG4gKi9cblxuaW1wb3J0IHsgZHN3Y192YWxpZGF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2Rzd2NfdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBkc3djX2Fza0FRdWVzdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9kc3djX3dOZWVkSGVscCc7XG5pbXBvcnQgeyBkc3djX3RvZ2dsZUNhcnQgfSBmcm9tICcuL2hlYWRlci9kc3djX3RvZ2dsZUNhcnQnO1xuaW1wb3J0IHsgZHN3Y19hamF4IH0gZnJvbSAnLi93b29jb21tZXJjZS9kc3djX2FqYXgnO1xuaW1wb3J0IHsgZHNfaGVhZGVySGVpZ2h0IH0gZnJvbSAnLi9oZWFkZXIvZHNfaGVhZGVySGVpZ2h0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBXb29jb21tZXJjZSBhamF4IGNhbGxzXG4gICAgZHN3Y19hamF4KCk7XG4gICAgLy8gV29vY29tbWVyY2UgdG9nZ2xlIGNhcnRcbiAgICBkc3djX3RvZ2dsZUNhcnQoKTtcbiAgICAvLyBFbmFibGUgaWYgV29vY29tbWVyY2Ugbm90aWNlIGlzIGFjdGl2ZVxuICAgIGRzX2hlYWRlckhlaWdodCgpO1xuICAgIC8vIEVuYWJsZSBpZiBXb29jb21tZXJjZSBnbG9iYWwgc3VwcG9ydCBpcyBhY3RpdmVcbiAgICBkc3djX2Fza0FRdWVzdGlvbigpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIC8vIExvZ2luIHZhbGlkYXRpb25cbiAgICBkc3djX3ZhbGlkYXRpb24oKTtcbn0pO1xuIl0sIm5hbWVzIjpbImRzd2NfdmFsaWRhdGlvbiIsImpRdWVyeSIsImxlbmd0aCIsImRpc3NhYmxlQnRuTG9naW4iLCJ2YWwiLCJsb2dpbkJ0biIsImF0dHIiLCJsb2dpbkJ0bldyYXBwZXIiLCJyZW1vdmVDbGFzcyIsImRpc3NhYmxlQnRuUmVnaXN0ZXIiLCJyZWdpc3RlckJ0biIsImVtYWlsSXNWYWxpZCIsImVtYWlsIiwidGVzdCIsImNyZWF0ZU1lc3NhZ2VzIiwiYWZ0ZXIiLCJjaGVja0xvZ2luRW1haWwiLCJhZGRDbGFzcyIsInRleHQiLCJjaGVja0xvZ2luUGFzcyIsImNoZWNrTG9naW4iLCJjaGVja1JlZ2lzdGVyRW1haWwiLCJyZWdpc3RlckJ0bldyYXBwZXIiLCJ2YWxpZGF0ZVJlZ2lzdGVyRW1haWwiLCJjaGVja1JlZ2lzdGVyUGFzcyIsImNoZWNrUmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZWFkeSIsIiQiLCJ3aW5kb3ciLCJ3aWR0aCIsImJlZm9yZSIsImNsaWNrIiwiZXZlbnQiLCJmb2N1c291dCIsImtleXVwIiwidV90aHJvdHRsZWQiLCJkc3djX2Fza0FRdWVzdGlvbiIsIndOZWVkSGVscCIsIndOZWVkSGVscE9wZW4iLCJ3TmVlZEhlbHBDbG9zZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3TmVlZEhlbHBXaWRnZXQiLCJjbG9zZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJmb3JFYWNoIiwiaXRlbSIsInJlbW92ZSIsInRocm90dGxlU2Nyb2xsQXNrIiwiZm9vdGVyIiwiYXNrUXVlc3Rpb25UcmlnZ2VyIiwiY2FsbGJhY2siLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInN0eWxlIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJwb2ludGVyRXZlbnRzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJiaW5kIiwiZm9ybUlkIiwibmVlZEhlbHBTdWJtaXNzaW9uIiwiY29uY2F0IiwibmVlZEhlbHBXcmFwcGVyIiwiZmluZCIsImhpZGUiLCJkc19oZWFkZXJIZWlnaHQiLCJoZWFkZXJOb3RpY2UiLCJzdHlsZVRhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaGVhZGVyIiwib2JzZXJ2ZUhlYWRlciIsIlJlc2l6ZU9ic2VydmVyIiwiaGVpZ2h0IiwidGFyZ2V0Iiwib2Zmc2V0SGVpZ2h0IiwiaW5uZXJIVE1MIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZGlzY29ubmVjdCIsIm9ic2VydmVOb3RpY2UiLCJkc3djX3RvZ2dsZUNhcnQiLCJkc0NhcnRUb2dnbGUiLCJfZG9jdW1lbnQiLCJkc0NhcnRTaWRlYmFyIiwicG9wdXBDYXJ0T3ZlcmxheSIsIm9wZW5DYXJ0IiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJvbiIsInVfZGVib3VuY2VkIiwiZnVuYyIsImRlbGF5IiwiaW1tZWRpYXRlIiwidGltZXJJZCIsIl9sZW4iLCJhcmd1bWVudHMiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiYm91bmRGdW5jIiwiYXBwbHkiLCJfdGhpcyIsImNsZWFyVGltZW91dCIsImNhbGxlZUZ1bmMiLCJzZXRUaW1lb3V0IiwiX2xlbjIiLCJfa2V5MiIsImRzd2NfYWpheCIsImRzQWpheFF1ZXVlIiwiZHNVcGRhdGVTeW5jVGltZW91dCIsImRzVXBkYXRlVGltZW91dCIsImlzQWpheFJ1bm5pbmciLCJpbnB1dEV2ZW50VHJpZ2dlcmVkIiwiZHNSdW5RdWV1ZWRBamF4IiwiYWpheE9wdHMiLCJjb21wbGV0ZSIsInNoaWZ0IiwieGhyIiwiYWpheCIsImRzRW5xdWV1ZUFqYXgiLCJwdXNoIiwiZHNCbG9ja1VJIiwiZWxlbWVudCIsImJsb2NrIiwibWVzc2FnZSIsIm92ZXJsYXlDU1MiLCJiYWNrZ3JvdW5kIiwiZHNVbmJsb2NrVUkiLCJ1bmJsb2NrIiwiZHNCbG9ja1Byb2R1Y3RzVUkiLCJkcyIsImlzU2hvcCIsImRzVW5ibG9ja1Byb2R1Y3RzVUkiLCJkc1JlbW92ZUZyb21DYXJ0IiwibGluayIsImRhdGEiLCJhY3Rpb24iLCJkYXRhX3JlbW92ZV9saW5rIiwidXJsIiwiYWpheF91cmwiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRyaWdnZXIiLCJkc1F0eUJ1dHRvbkNsaWNrIiwiZmFjdG9yIiwiaW5wdXRRdHkiLCJwYXJlbnQiLCJuZXdRdHkiLCJwYXJzZUludCIsImhhc0NsYXNzIiwibWluQXR0ciIsIl90eXBlb2YiLCJ1bmRlZmluZWQiLCJtYXhBdHRyIiwiaXMiLCJjaGFuZ2UiLCJDYXJ0UG9wdXBBY3Rpb25zIiwiZHNIYW5kbGVBZGRUb0NhcnRDbGljayIsImRzQ2xlYXJUaW1lb3V0UXR5Q2hhbmdlIiwiZHNRdHlPbkNoZWNrb3V0Iiwic2VjdXJpdHkiLCJ3Y19jaGVja291dF9wYXJhbXMiLCJ1cGRhdGVfb3JkZXJfcmV2aWV3X25vbmNlIiwicG9zdF9kYXRhIiwic2VyaWFsaXplIiwicG9zdCIsImRzUmVwbGljYXRlTWluaUNhcnRRdHlXaXRoU2hvcCIsImVhY2giLCJxdHkiLCJuYW1lIiwiZHNNaW5pQ2FydEFqYXhRdWFudGl0eUNoYW5nZSIsImNhcnRJdGVtS2V5IiwiaW5wdXRJZCIsIm5ld1F1YW50aXR5IiwicXVhbnRpdHkiLCJjYXJ0X2l0ZW1fa2V5IiwiZGF0YVR5cGUiLCJyZXNwIiwicHJvZHVjdF9pZCIsInByb2R1Y3RJZCIsImxpUHJvZHVjdCIsIm5vdGlmeSIsImVycm9yIiwiZHNQcm9DbGVhclVwZGF0ZVN5bmNUaW1lb3V0IiwiZHNDaGFuZ2VDYXJ0SXRlbVF1YW50aXR5IiwicXR5RWxlbWVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImRzQ2hlY2tJbnB1dFZhbGlkaXR5IiwicXVhbnRpdHlNc2ciLCJtaW5NZXNzYWdlIiwibWF4TWVzc2FnZSIsImRzTGlzdGVuTWluaUNhcnRRdHlDaGFuZ2UiLCJkc0hhbmRsZUNvbW1vbkNhcnRFdmVudHMiXSwic291cmNlUm9vdCI6IiJ9