/*
 * @title Sliders Scripts
 * @description Application entry point
 */

import { u_addTouchToHtml } from './utils/u_is-touch-device';

import { callSliders } from './function-calls/sliders';

document.addEventListener('DOMContentLoaded', () => {

    u_addTouchToHtml();

    callSliders();

});
