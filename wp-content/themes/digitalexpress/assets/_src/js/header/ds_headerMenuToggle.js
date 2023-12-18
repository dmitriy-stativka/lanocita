import { openMobileMenu, closeMobileMenu } from './utils/u-menu';

/**
 * Toggle mobile nav on click.
 * Toggle desktop burger menu on click.
 *
 * @param {string} el - selector for adding an active class
 */

const ds_headerMenuToggle = (el) => {
    if (document.querySelector(el)) {
        const btn = document.querySelector(el);
        const body = document.querySelector('body');

        btn.addEventListener('click', (event) => {
            event.preventDefault();
            if (btn.getAttribute('aria-expanded') === 'false') {
                openMobileMenu(btn, body);
            } else {
                closeMobileMenu(btn, body);
            }
        });
    }
};

export {
    ds_headerMenuToggle,
};
