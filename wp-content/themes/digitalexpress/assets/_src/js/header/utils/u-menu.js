// Open mobile menu
const openMobileMenu = (btn, body) => {
    btn.classList.add('is-active');
    body.classList.add('nav-active');
    btn.setAttribute('aria-expanded', 'true');
};

// Close mobile menu
const closeMobileMenu = (btn, body) => {
    btn.classList.remove('is-active');
    body.classList.remove('nav-active');
    btn.setAttribute('aria-expanded', 'false');
};

// Show submenu items
const showHideSubItem = (subItem, type, ariaAttr) => {
    if (subItem) {
        subItem.classList[type]('is-visible');
        // eslint-disable-next-line no-param-reassign
        subItem.ariaExpanded = [ariaAttr];
        // subItem.style.height = `${ height }px`;
    }
};

// Open submenu
const openSubMenu = (item, itemParent, itemMenu) => {
    item.classList.add('is-toggled');
    itemParent.classList.add('is-opened');
    showHideSubItem(itemMenu, 'add', 'true');
};

// Close submenu
const closeSubMenu = (item, itemParent, itemMenu) => {
    item.classList.remove('is-toggled');
    itemParent.classList.remove('is-opened');
    showHideSubItem(itemMenu, 'remove', 'false');
};

// Check for submenu items
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

export {
    openMobileMenu, closeMobileMenu, closeSubMenu, openSubMenu, checkChildSubMenu,
};
