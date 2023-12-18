/**
 * Toggle for WooCommerce mini cart
 */

const dswc_toggleCart = () => {
    const dsCartToggle = document.querySelector('.js-toggle-cart');
    if (!dsCartToggle) return;

    const { body } = document;
    const dsCartSidebar = document.querySelector('.ds-cart-sidebar');
    const header = body.querySelector('.site-header');
    const popupCartOverlay = '<div class="ds-cart-overlay js-toggle-cart"></div>';

    if (dsCartSidebar) {
        const openCart = () => {
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

        $(document).on('added_to_cart', () => {
            openCart();
        });

        $(document).on('click', '.js-toggle-cart', (e) => {
            e.preventDefault();
            openCart();
        });
    }
};

export {
    dswc_toggleCart,
};
