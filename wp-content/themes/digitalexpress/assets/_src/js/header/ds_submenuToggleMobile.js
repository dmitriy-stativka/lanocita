/**
 * Menu submenu toggle for mobile
 */

const showHideSubItem = (subItem, type, ariaAttr) => {
    if (subItem) {
        subItem.classList[type]('is-visible');
        // eslint-disable-next-line no-param-reassign
        subItem.ariaExpanded = [ariaAttr];
        // subItem.style.height = `${ height }px`;
    }
};

const closeSubMenu = (item, itemParent, itemMenu) => {
    item.classList.remove('is-toggled');
    itemParent.classList.remove('is-opened');
    showHideSubItem(itemMenu, 'remove', 'false');
};

const openSubMenu = (item, itemParent, itemMenu) => {
    item.classList.add('is-toggled');
    itemParent.classList.add('is-opened');
    showHideSubItem(itemMenu, 'add', 'true');
};

const checkChildSubMenu = (item) => {
    const toggleInnerButton = Array.from(item.nextElementSibling.getElementsByClassName('js-sub-menu-toggle'));
    if (toggleInnerButton) {
        toggleInnerButton.forEach((innerItem) => {
            const childSubMenu = innerItem.nextElementSibling;
            if (childSubMenu.ariaExpanded === 'true') {
                childSubMenu.ariaExpanded = 'false';
            } else if (childSubMenu.classList.contains('is-visible')) {
                childSubMenu.ariaExpanded = 'true';
            }
        });
    }
};

const ds_subMenuToggleMobile = () => {
    const navBarMobile = document.getElementsByClassName('navbar-mobile')[0];
    const toggleButtons = Array.from(navBarMobile.getElementsByClassName('js-sub-menu-toggle'));
    const toggleMenu = document.querySelector('.js-mobileNav');

    if (toggleMenu) {

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

        toggleMenu.addEventListener('click', () => {
            toggleButtons.forEach((toggleButton) => {
                const toggleContent = toggleButton.nextElementSibling;
                const toggleButtonMenuItem = toggleButton.parentElement;

                closeSubMenu(toggleButton, toggleButtonMenuItem, toggleContent);
            });
        });
    }
};

export {
    ds_subMenuToggleMobile,
};
