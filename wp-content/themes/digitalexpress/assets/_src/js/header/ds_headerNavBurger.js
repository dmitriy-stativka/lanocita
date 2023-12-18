import { u_isTouchDevice } from '../utils/u_is-touch-device';

/**
 * Toggle mobile nav on click and swipe up menu close
 * @param {string} el - selector for adding an active class
 */

const ds_headerNavBurger = (el) => {
    if (document.querySelector(el)) {
        const btn = document.querySelector(el);
        const body = document.querySelector('body');
        const menu = document.querySelector('.nav-main__wrap-burger');

        const openMobileMenu = () => {
            btn.classList.add('is-active');
            body.classList.add('nav-burger-active');
            menu.classList.add('is-active');
            btn.setAttribute('aria-expanded', 'true');
            document.addEventListener('click', closeMenuOnClickOutside);
        };

        const closeMobileMenu = () => {
            btn.classList.remove('is-active');
            body.classList.remove('nav-burger-active');
            menu.classList.remove('is-active');
            btn.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', closeMenuOnClickOutside);
        };

        const closeMenuOnClickOutside = (event) => {
            if (!menu.contains(event.target) && !btn.contains(event.target)) {
                closeMobileMenu();
            }
        };

        btn.addEventListener('click', (event) => {
            event.preventDefault();
            if (btn.getAttribute('aria-expanded') === 'false') {
                openMobileMenu();
            } else {
                closeMobileMenu();
            }
        });

    }
};

export {
    ds_headerNavBurger,
};
