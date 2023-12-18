/**
 * WOOCOMMERCE
 * If the Woocommerce plugin is active, related files are loaded in class assets.
 * 'js-wc-main.js' (this file) is used for non-woocommerce pages.
 * 'js-wc.js' is for the rest of Woocommerce related javascript's.
 */

import { dswc_validation } from './components/dswc_validation';
import { dswc_askAQuestion } from './components/dswc_wNeedHelp';
import { dswc_toggleCart } from './header/dswc_toggleCart';
import { dswc_ajax } from './woocommerce/dswc_ajax';
import { ds_headerHeight } from './header/ds_headerHeight';

document.addEventListener('DOMContentLoaded', () => {
    // Woocommerce ajax calls
    dswc_ajax();
    // Woocommerce toggle cart
    dswc_toggleCart();
    // Enable if Woocommerce notice is active
    ds_headerHeight();
    // Enable if Woocommerce global support is active
    dswc_askAQuestion();
});

window.addEventListener('load', () => {
    // Login validation
    dswc_validation();
});
