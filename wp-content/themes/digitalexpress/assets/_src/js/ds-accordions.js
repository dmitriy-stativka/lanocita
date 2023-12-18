/*
 * @title DS Accordions
 * @description Application entry point
 */

import { callAccordions } from './function-calls/accordions';
import { callTabAccordionsMobile } from './function-calls/tabs-to-accordion-mobile';

document.addEventListener('DOMContentLoaded', () => {

    callAccordions();
    callTabAccordionsMobile();

});

window.addEventListener('load', () => {

});
