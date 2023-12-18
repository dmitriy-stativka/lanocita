/**
 * Enable by toggling option in module ADVANCED SETTINGS/EFFECT in wp-admin page.
 * Module has the following options:
 *
 * ENABLED (ON/OFF):
 * Triggers IntersectionObserver on module.
 * Link: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 *
 * REPEATABLE (ON/OFF):
 * Check if the animation is repeated each time modules enters viewport.
 *
 * EFFECT (SELECT OPTION):
 * Chooses from one of predefined animation effects.
 * You can also do a custom CSS animation by adding custom class and animation it in CSS.
 *
 * Basic CSS animations:
 * Location: wp-content/themes/digitalexpress/assets/_src/sass/visuals/animate/_a-viewport.scss
 *
 * Custom CSS animations:
 * Location: wp-content/themes/digitalexpress/assets/_src/sass/project-custom/_custom__animations.scss
 *
 * THRESHOLD (STEPS SLIDER):
 * Specifies 'threshold' of the element:
 * Link: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds
 *
 * MARGIN (INPUT FIELD):
 * Specifies 'rootMargin' of the element:
 * Link: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
 *
 * Custom overrides can be added.
 * Callback function can be triggered when elements enters viewport.
 *
 * Example usage on a custom element:
 * new DSMPViewAnim({
 *         selector: '.custom-selector',
 *         class: '.custom-animation-class',
 *         repeat: 'true',
 *         threshold: '0',
 *         margin: '0px 0px -10% 0px',
 *         // Callback function when element is intersecting
 *         callback: () => {
 *             console.log('callback function');
 *       },
 *  });
 */

import { u_throttled } from './utils';
import addObserver from './u_io-anim-observer';

class DSMPViewAnim {

    constructor(options) {
        this.config = {
            selector: '[data-viewport="true"]',
            repeat: 'false',
            class: 'in-view',
            threshold: 0,
            margin: '0px 0px 0px 0px',
            callback() {

            },
        };
        this.configOptions = { ...this.config, ...options || {} };
        this.triggers = document.querySelectorAll(this.configOptions.selector);

        this.inViewport();
        this.ioBindEvents();
    }

    inViewport() {
        this.triggers.forEach((trigger) => {
            const attr = {
                repeat: trigger.dataset.viewportRepeat,
                threshold: trigger.dataset.viewportThreshold,
                margin: trigger.dataset.viewportMargin,
            };

            const {
                class: className,
                repeat,
                threshold,
                margin,
                callback,
            } = this.configOptions;
            
            const {
                repeat: attrRepeat,
                threshold: attrThreshold,
                margin: attrMargin,
            } = attr;

            addObserver(
                trigger,
                {
                    className,
                    repeat: attrRepeat || repeat,
                    threshold: attrThreshold || threshold,
                    margin: attrMargin || margin,
                    cb: callback,
                },
            );
        });
    }

    ioBindEvents() {
        const throttleInView = u_throttled(() => {
            this.inViewport();
        }, 30);

        // document.addEventListener('scroll', throttleInView, { passive: true });
        document.addEventListener('resize', throttleInView, { passive: true });
        document.addEventListener('orientationchange', throttleInView, { passive: true });
    }

}

export default DSMPViewAnim;
