/**
 * Search Overlay
 */
import { u_hideElem, u_showElem } from '../utils/u_show-hide-display';

const ds_headerSearch = () => {
    const target = document.querySelector('[data-js="search-target"]');

    // When Search Overlay exists
    if (target) {
        const input = target.querySelector('.search-field');
        const showOverlay = function () {
            u_showElem(target);
            input.focus();
            document.body.classList.add('ds-overlay-search');
        };

        const closeOverlay = function () {
            u_hideElem(target);
            document.body.classList.add('ds-overlay-search');
        };

        document.addEventListener('click', (e) => {
            // Trigger submit when opened
            if (e.target.matches('[data-js="search-trigger"]') && target.classList.contains('is-shown')) {
                input.click();
            }

            // Open an overlay
            if (e.target.matches('[data-js="search-trigger"]')) {
                e.preventDefault();
                showOverlay();
            }

            // Close an overlay
            if (e.target.matches('[data-js="search-close"]')) {
                e.preventDefault();
                closeOverlay();
            }
        }, false);

        document.addEventListener('keydown', (e) => {
            // Check if the search overlay is opened
            if (document.body.classList.contains('ds-overlay-search')) {
                // Close an overlay on Escape key click
                if (e.key === 'Escape' || e.keyCode === 27) {
                    closeOverlay();
                }
            }
        });
    }
};

export {
    ds_headerSearch,
};
