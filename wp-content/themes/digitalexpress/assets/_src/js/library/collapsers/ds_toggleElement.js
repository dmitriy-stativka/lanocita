/**
 * Toggle element on click
 *
 * https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/
 */
import { u_toggleElem } from '../../utils/u_show-hide-display';

const ds_toggleElement = () => {
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-js="toggle-element"]')) {
            e.preventDefault();

            // Get the content
            const content = document.querySelector(e.target.hash);
            if (!content) return;

            // Toggle the content
            u_toggleElem(content);

        }

    }, false);
};

export {
    ds_toggleElement,
};
