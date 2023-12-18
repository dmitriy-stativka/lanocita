/**
 * AutoPlay Slider Options
 */

const isAutoPlayOn = (elem, options) => {
    if (!elem) return options;

    const isAutoplay = elem.getAttribute('data-slider-autoplay');
    const isAutoplayDelay = elem.getAttribute('data-slider-autoplay-delay');

    if (isAutoplay === 'true') {
        options.autoplay = {};
        options.autoplay.disableOnInteraction = false;
        options.autoplay.delay = isAutoplayDelay ? parseInt(isAutoplayDelay, 10) : 3000;
    }

    const isSpeedOn = elem.getAttribute('data-slider-autoplay-speed');

    if (isSpeedOn) {
        options.speed = parseInt(isSpeedOn, 10);
    }

    return options;
};

export {
    isAutoPlayOn,
};
