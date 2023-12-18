/**
 * Cart page: Update cart
 */

import { _updateInputQuantity } from './extras/dswc_updateInputQuantity';

const cartFormEl = document.querySelector('.woocommerce-cart-form');

function _updateCartInit() {
    $(document.body).on('click', '.item_qty.plus', function (e) {
        e.preventDefault();
        _updateInputQuantity($(this), 1);
    });

    $(document.body).on('click', '.item_qty.minus', function (e) {
        e.preventDefault();
        _updateInputQuantity($(this), -1);
    });
}

const dswc_updateCart = () => {
    if (cartFormEl) {
        _updateCartInit();
    }
};

export {
    dswc_updateCart,
};
