/**
 * Inject Add Review button on single product page
 */

import { scrollToUtil } from '../../../library/animations/scroll-to';
import { easeInOutQuart } from '../../../library/animations/easings-es6';

const reviewsBtnLocation = document.querySelector('#comments');

const dswc_reviewsAddFormToggle = () => {
    if (reviewsBtnLocation) {
        // Set button text
        const reviewsBtnText = 'Ad d new review';

        // Set button structure
        const reviewsToggle = '<div class="woocommerce-Reviews-formToggle">'
            + '<a href="#" class="c-btn -normal -primary has-icon icon-right js-toggle-reviews">'
            + `<span class="c-btn__txt">${reviewsBtnText}</span>`
            + '<span class="c-btn__ico"><svg class="icon" width= "30" height="30">'
            // Set icon name from sprite
            + '<use xlink:href="#lib-icon-arrow3"/>'
            + '</svg></span></a></div>';

        // Append button html
        reviewsBtnLocation.insertAdjacentHTML('afterend', reviewsToggle);

        const reviewsBtn = document.querySelector('.js-toggle-reviews');
        const reviewsForm = document.querySelector('#review_form_wrapper');
        reviewsForm.classList.add('is-toggle');
        const toggleForm = () => {
            reviewsForm.classList.toggle('is-active');
            if (reviewsForm.classList.contains('is-active')) {
                // Scroll to form
                const elRectTop = reviewsForm.getBoundingClientRect().top + window.scrollY - 100;
                scrollToUtil({
                    to: elRectTop,
                    duration: 200,
                    easing: easeInOutQuart,
                });
            }
        };

        // Toggle review form
        reviewsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm();
        });

        reviewsBtn.removeEventListener('click', toggleForm);
    }
};

export {
    dswc_reviewsAddFormToggle,
};
