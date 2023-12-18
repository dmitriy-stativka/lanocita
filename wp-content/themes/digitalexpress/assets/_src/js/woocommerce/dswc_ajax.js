/**
 * Global ajax calls and functions for Woocommerce
 * TODO: Refactor this
 */

const dswc_ajax = () => {
    jQuery(document).ready(($) => {
        const dsAjaxQueue = [];
        let dsUpdateSyncTimeout = null;
        let dsUpdateTimeout = null;
        let isAjaxRunning = false;
        let inputEventTriggered = false;

        // execute AJAX queued list
        const dsRunQueuedAjax = function () {
            if (dsAjaxQueue.length) {
                const ajaxOpts = dsAjaxQueue[0];

                ajaxOpts.complete = function () {
                    dsAjaxQueue.shift(); // remove this ajax from queue
                    dsRunQueuedAjax();
                };

                // eslint-disable-next-line no-unused-vars
                const xhr = $.ajax(ajaxOpts);
            }
        };

        const dsEnqueueAjax = function (ajaxOpts) {
            dsAjaxQueue.push(ajaxOpts);
            dsRunQueuedAjax();
        };


        const dsBlockUI = function (element) {
            element.block({
                message: null,
                overlayCSS: {
                    background: '#fff',
                    opacity: 0.6,
                },
            });
        };

        const dsUnblockUI = function (element) {
            element.unblock();
        };

        const dsBlockProductsUI = function (element) {
            if (element != null) {
                dsBlockUI(element);
                // eslint-disable-next-line no-undef
            } else if ($('.product').length && !ds.isShop) {
                dsBlockUI($('.product'));
            } else {
                dsBlockUI($('.products'));
            }
        };

        const dsUnblockProductsUI = function () {
            dsUnblockUI($('.products'));
            dsUnblockUI($('.product'));
            dsUnblockUI($('.widget_shopping_cart'));
            dsUnblockUI($('.cart-popup'));
        };

        const dsRemoveFromCart = function (link) {
            dsEnqueueAjax({
                data: {
                    action: 'ds_delete_item_checkout',
                    data_remove_link: link.data('remove'),
                },
                type: 'post',

                // eslint-disable-next-line no-undef
                url: ds.ajax_url,
                beforeSend() {
                    dsBlockProductsUI($('.cart-popup'));
                },
                success() {
                    $(document.body).trigger('updated_wc_div');
                    $(document.body).trigger('wc_update_cart');
                    dsUnblockProductsUI();
                },
            });
        };

        const dsQtyButtonClick = function (element, factor) {
            const inputQty = element.parent().find('.qty');
            const newQty = parseInt(inputQty.val(), 10) + factor;

            // check disabled
            if (element.hasClass('disabled')) {
                return false;
            }

            // respect the minimum value
            const minAttr = inputQty.attr('min');
            // eslint-disable-next-line max-len
            if (typeof minAttr !== typeof undefined && minAttr !== false && newQty < parseInt(minAttr, 10)) {
                return false;
            }

            // respect the max stock limit
            const maxAttr = inputQty.attr('max');
            // eslint-disable-next-line max-len
            if (typeof maxAttr !== typeof undefined && maxAttr !== false && newQty > parseInt(maxAttr, 10)) {
                return false;
            }

            // when using Select, check if new quantity exists in options list
            if (inputQty.is('select') && inputQty.find(`option[value="${newQty}"]`).length === 0) {
                return false;
            }

            inputQty.val(newQty);
            inputQty.change();

            return false;
        };

        const CartPopupActions = function () {
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

        const dsHandleAddToCartClick = function () {
            $(document).on('click', '.add_to_cart_button', () => {
                dsBlockProductsUI(null);
            });
        };

        const dsClearTimeoutQtyChange = function () {
            // clear previous timeout, if exists
            if (dsUpdateTimeout !== null) {
                clearTimeout(dsUpdateTimeout);
            }
        };

        // eslint-disable-next-line no-unused-vars
        const dsQtyOnCheckout = function () {
            $('form.checkout').on('change', '.qty', () => {
                // run refresh callback timeout
                dsClearTimeoutQtyChange();
                dsUpdateTimeout = setTimeout(() => {
                    const data = {
                        action: 'ds_update_checkout',
                        // eslint-disable-next-line no-undef
                        security: wc_checkout_params.update_order_review_nonce,
                        post_data: $('form.checkout').serialize(),
                    };

                    // eslint-disable-next-line no-undef
                    jQuery.post(ds.ajax_url, data, () => {
                        $('body').trigger('update_checkout');
                    });
                }, 500);
            });
        };

        /** MiniCart Actions
         *
         */
        const dsReplicateMiniCartQtyWithShop = function () {
            $('.widget_shopping_cart')
                .find('.qty')
                .each(function () {
                    // const input = $(this);
                    const qty = $(this).val();
                    const name = $(this).attr('id');

                    $('.qty').each(function () {
                        if ($(this).attr('id') === name) {
                            $(this).val(qty);
                        }
                    });
                });

            $('.products')
                .find('.qty')
                .each(function () {
                    // const input = $(this);
                    // const qty = $(this).val();
                    const name = $(this).attr('id');

                    if (!$('.widget_shopping_cart').find(`#${name}`).length) {
                        $(this).val(0);
                    }
                });
        };

        const dsMiniCartAjaxQuantityChange = function (cartItemKey, inputId, newQuantity) {
            if (isAjaxRunning) return;
            dsEnqueueAjax({
                data: {
                    action: 'ds_alter_quantity',
                    quantity: newQuantity,
                    cart_item_key: cartItemKey,
                },
                type: 'post',
                dataType: 'json',
                // eslint-disable-next-line no-undef
                url: ds.ajax_url,
                beforeSend() {
                    isAjaxRunning = true;
                    dsBlockProductsUI($('.cart-popup'));
                },
                success(resp) {
                    // tell do WC reload widget contents
                    $(document.body).trigger('updated_wc_div');

                    // trigger for 3rd plugins event listeners
                    $(document.body).trigger('ds_minicart_updated', [resp.product_id]);

                    // trigger update cart
                    $(document.body).trigger('wc_update_cart');

                    // find the <li> for the respective product on shop/category page
                    const productId = resp.product_id;
                    let liProduct = $(`.post-${productId}`);

                    // make it works with shortcodes, eg.: [add_to_cart id="XX"]
                    if (!liProduct.length) {
                        liProduct = $(`[data-product_id="${productId}"]`).parent();
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
                error: () => {
                    isAjaxRunning = false;
                },
            });
        };

        // synchronization from minicart quantity input to shop/single product page
        const dsProClearUpdateSyncTimeout = function () {
            // clear previous timeout, if exists
            if (dsUpdateSyncTimeout !== null) {
                clearTimeout(dsUpdateSyncTimeout);
            }
        };

        const dsChangeCartItemQuantity = function (qtyElement) {
            const matches = qtyElement.attr('name').match(/cart\[(\w+)\]/);
            const cartItemKey = matches[1];
            const inputId = qtyElement.attr('id');

            // run code with timeout
            dsProClearUpdateSyncTimeout();
            dsUpdateSyncTimeout = setTimeout(() => {
                dsMiniCartAjaxQuantityChange(cartItemKey, inputId, qtyElement.val());
            }, 500);
        };

        const dsCheckInputValidity = function (qtyElement) {
            const inputQty = qtyElement;
            const newQty = parseInt(inputQty.val(), 10);
            const minAttr = inputQty.attr('min');
            const maxAttr = inputQty.attr('max');
            const quantityMsg = inputQty.closest('.cart-product-edit-quantity')[0];

            // eslint-disable-next-line max-len
            if (typeof minAttr !== typeof undefined && minAttr !== false && newQty < parseInt(minAttr, 10)) {
                const minMessage = `<div class="ds-qty-msg">Minimum stock quantity is <strong>${minAttr}</strong></div>`;

                inputQty.val(minAttr);
                if (!quantityMsg.querySelector('.ds-qty-msg')) {
                    quantityMsg.insertAdjacentHTML('beforeend', minMessage);
                }
            }
            // eslint-disable-next-line max-len
            if (typeof maxAttr !== typeof undefined && maxAttr !== false && newQty > parseInt(maxAttr, 10)) {
                const maxMessage = `<div class="ds-qty-msg">Maximum stock quantity is <strong>${maxAttr}</strong></div>`;

                inputQty.val(maxAttr);
                if (!quantityMsg.querySelector('.ds-qty-msg')) {
                    quantityMsg.insertAdjacentHTML('beforeend', maxMessage);
                }
            }
        };

        const dsListenMiniCartQtyChange = function () {
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

        const dsHandleCommonCartEvents = function () {
            $(document).on('added_to_cart', () => {
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

export {
    dswc_ajax,
};
