/*
 * @title Counter Plugin Init
 * @description Application entry point
 */

import PureCounter from './library/counters/purecounter';

document.addEventListener('DOMContentLoaded', () => {

    new PureCounter({
        selector: '.c-counter__number',
    });

});
