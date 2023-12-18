/**
 * Add class on scroll for sticky header
 * @param {string} el - selector for adding an active class
 * @param {string} elClass - active class
 */

import { u_throttled } from '../utils/utils';

const ds_headerSticky = (el, elClass) => {
    const $$header = document.querySelector(el);
    const elHeight = parseInt($$header.offsetHeight / 2, 10);
    const offset = parseInt(elHeight / 5, 10);

    const onScroll = () => {
        if (window.pageYOffset > (elHeight + offset)) {
            $$header.classList.add(elClass);
        } else if (window.pageYOffset < (elHeight - offset)) {
            $$header.classList.remove(elClass);
        }
    };

    const throttleScroll = u_throttled(() => {
        onScroll();
    }, 30);

    window.addEventListener('scroll', () => {
        throttleScroll();
    });

    if (window.pageYOffset > (elHeight + offset)) {
        $$header.classList.add(elClass);
    }

};

export {
    ds_headerSticky,
};
