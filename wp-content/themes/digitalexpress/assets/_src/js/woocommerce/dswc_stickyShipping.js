/**
 * Sticky shipping bar
 */

import { u_throttled } from '../utils/utils';

/**
 * Add/remove class  on scroll
 */
const shippingBarEl = document.getElementById('shipping-bar');

function _stickyShippingBarInit(offset) {
    const onScroll = () => {
        if (window.pageYOffset > offset) {
            shippingBarEl.classList.add('expandable');
        } else {
            shippingBarEl.classList.remove('expandable');
        }
    };

    const throttleScroll = u_throttled(() => {
        onScroll();
    }, 30);

    window.addEventListener('scroll', () => {
        throttleScroll();
    });
}

const dswc_stickyShippingBar = () => {
    if (
        shippingBarEl
        && shippingBarEl.classList.contains('sticky')
        && !shippingBarEl.classList.contains('expandable')
    ) {
        _stickyShippingBarInit(10);
    }
};

export {
    dswc_stickyShippingBar,
};
