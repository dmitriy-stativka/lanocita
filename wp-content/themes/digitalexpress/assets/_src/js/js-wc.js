/**
 * WOOCOMMERCE
 * If the Woocommerce plugin is active, related files are loaded in class assets.
 * 'js-wc.js' (this file) is for the rest of Woocommerce related javascript's.
 * 'js-wc-main.js' is used for non-woocommerce pages.
 */

import { dswc_updateCart } from './woocommerce/dswc_cart';
// import { dswc_ajax } from './woocommerce/dswc_ajax';

import { dswc_sidebarToggle } from './woocommerce/dswc_sidebarToggle';
// import { dswc_categoryToggle } from './woocommerce/dswc_categoryToggle';

import { dswc_singleProdGallery } from './woocommerce/single-product/dswc_gallery';
import { dswc_singleProdQty } from './woocommerce/single-product/dswc_productQuantity';
import { dswc_stickyShippingBar } from './woocommerce/dswc_stickyShipping';

import { dswc_myAccSidebar } from './woocommerce/my-account/dswc_sidebarToggle';
// import { dswc_reviewsAddFormToggle } from './woocommerce/single-product/extras/dswc_reviewsFormAddToggle';
import { dswc_reviewsFormValidation } from './woocommerce/single-product/extras/dswc_reviewsFormValidation';
import { dswc_toggleProductGrid } from './woocommerce/extras/dswc_toggleProductGrid';
// import { dswc_btnExtendIcon } from './woocommerce/extras/dswc_btnIconExtend';

document.addEventListener('DOMContentLoaded', () => {

    /** AJAX CALLS */
    // dswc_ajax();

    /** CART PAGE */
    dswc_updateCart();

    /** PRODUCT LISTING PAGE */
    dswc_sidebarToggle();
    // dswc_categoryToggle();
    dswc_toggleProductGrid();

    /** SINGLE PRODUCT PAGE */
    dswc_singleProdGallery();
    dswc_singleProdQty();

    // Enable this if shipping bar should be sticky
    dswc_stickyShippingBar();

    /**
     If you are using default reviews, you need to enable
     SCSS $--wc-components__tabs-reviews to ON in __custom__wc-config.scss.
     Validation can be on FORM SUBMIT or WHILE TYPING (LIVE).
     Settings for that are inside reviews_form-validation.js
     */
    dswc_reviewsFormValidation();

    // Enable this if form should be opened by a click of a button
    // dswc_reviewsAddFormToggle();

    /** MY ACCOUNT PAGES */
    dswc_myAccSidebar();

    /**
     Enable this if you need to extend icons on Woocommerce buttons.
     You need to enable SCSS $--wc-buttons-with-icons to ON in __custom__wc-config.scss.
     */
    // dswc_btnExtendIcon();
});
