/**
 * Submenu toggle for Mobile Menu and Desktop Burger menu
 *
 * @param {string} el - selector for adding an active class
 * @param {string} closeEl - selector for closing all submenu items
 */

import { checkChildSubMenu, closeSubMenu, openSubMenu } from './utils/u-menu';

const ds_headerMenuSubMenuToggle = (el, closeEl) => {
    const ele = document.querySelector(el);
    if (!ele) return;

    const closeEle = document.querySelector(closeEl);
    const toggleButtons = ele.querySelectorAll('.js-sub-menu-toggle');

    toggleButtons.forEach((toggleButton) => {
        const toggleContent = toggleButton.nextElementSibling;
        const toggleButtonMenuItem = toggleButton.parentElement;

        closeSubMenu(toggleButton, toggleButtonMenuItem, toggleContent);

        toggleButton.addEventListener('click', () => {
            const isToggled = toggleButton.className.includes('is-toggled');

            closeSubMenu(toggleButton, toggleButtonMenuItem, toggleContent);
            checkChildSubMenu(toggleButton);

            if (!isToggled) {
                openSubMenu(toggleButton, toggleButtonMenuItem, toggleContent);
            }
        });
    });

    if (closeEle) {
        closeEle.addEventListener('click', () => {
            toggleButtons.forEach((toggleButton) => {
                const toggleContent = toggleButton.nextElementSibling;
                const toggleButtonMenuItem = toggleButton.parentElement;

                closeSubMenu(toggleButton, toggleButtonMenuItem, toggleContent);
            });
        });
    }
};

export {
    ds_headerMenuSubMenuToggle,
};
