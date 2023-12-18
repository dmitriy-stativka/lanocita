/**
 * My account pages sidebar, toggle on click
 */

const showSidebarBtn = document.getElementById('show-my-acc-sidebar');
const hideSidebarBtn = document.getElementById('hide-my-acc-sidebar');
const sidebarEl = document.querySelector('.woocommerce-navigation-wrapper');
const popupAccOverlay = '<div class="ds-acc-overlay js-toggle-acc"></div>';

/**
 * Show sidebar, replace visible filter button
 */
function _onShowSidebarClick() {
    sidebarEl.classList.add('is-visible');
    showSidebarBtn.classList.remove('is-active');
    hideSidebarBtn.classList.add('is-active');
    document.body.classList.add('ds-menu-active');

    sidebarEl.insertAdjacentHTML('afterbegin', popupAccOverlay);
    document.querySelector('.js-toggle-acc').addEventListener('click', () => {
        _onHideSidebarClick();
    });
}

/**
 * Hide sidebar, replace visible filter button
 */
function _onHideSidebarClick() {
    sidebarEl.classList.remove('is-visible');
    hideSidebarBtn.classList.remove('is-active');
    showSidebarBtn.classList.add('is-active');
    document.querySelector('.ds-acc-overlay').remove();
    document.body.classList.remove('ds-menu-active');
}

const dswc_myAccSidebar = () => {
    if (showSidebarBtn) {
        showSidebarBtn.addEventListener('click', () => {
            _onShowSidebarClick();
        });
    }

    if (hideSidebarBtn) {
        hideSidebarBtn.addEventListener('click', () => {
            _onHideSidebarClick();
        });
    }
};

export {
    dswc_myAccSidebar,
};
