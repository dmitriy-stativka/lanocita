/*
 * @title Main App
 * @description Application entry point
 */

// Utils

// Function Calls

// import { callAccordions } from './function-calls/accordions';


document.addEventListener('DOMContentLoaded', () => {
    // callAccordions();
});

window.addEventListener('load', () => {
    // Enable if using Animate on scroll library effects
    // eslint-disable-next-line no-undef
    AOS.init({
        disable: 'mobile',
        offset: 300,
        once: true,
        duration: 800,
    });

    // eslint-disable-next-line no-undef,no-unused-expressions
    AOS.refresh;

    // Enable if using lazy load on Video (set data-src instead of src)
    /*
    const myLazyLoad = new LazyLoad({
      elements_selector: '.lazy',
    });
    */
});
