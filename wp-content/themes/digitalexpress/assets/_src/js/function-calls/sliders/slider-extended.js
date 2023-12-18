/**
 * Advanced slider type
 */

import SwiperWithTabs from '../../library/sliders/swiper-with-tabs';
import { isAutoPlayOn } from '../../library/sliders/slider-options/autoplay';
import { isLazyLoadOn } from '../../library/sliders/slider-options/lazy';
import { isBreakpointsOn } from '../../library/sliders/slider-options/breakpoints';
import { isNavigationOn } from '../../library/sliders/slider-options/navigation';
import { isLoopOn } from '../../library/sliders/slider-options/loop';
import { isPaginationOn } from '../../library/sliders/slider-options/pagination';
import { u_parseBool } from '../../utils/u_types';
import { autoplayObserver } from '../../library/sliders/slider-options/autoplayObserver';
import {isEffectOn} from '../../library/sliders/slider-options/effects';

// config selectors only here
const advancedName = 'js-slider-extended';
const advSliderSel = '.js-slider-extended';
const advSliderTabs = '.l-slider-nav';
const advSliderContent = '.l-slider-content';

// find those selectors
const advSliderList = document.querySelectorAll(advSliderSel);

const extendedSliders = () => {
    // loop through sliders and add ID's to it

    const advSliderOptions = [];
    const advSliders = [];
    const sliderTabOptions = [];
    const advSliderNav = [];
    let sliderNav;
    const advSliderThumbs = [];
    const sliderThumbOptions = [];
    const advancedObserver = [];
    const advContentOptions = [];
    const advSlidersContent = [];
    const aReq = [];

    advSliderList.forEach((slider, i) => {
        advSliderOptions[i] = {};

        const triggerType = slider.getAttribute('data-slider-trigger') || 'click';

        sliderTabOptions[i] = {
            item: '.js-nav__item',
            active: 'is-active',
            trigger: triggerType,
        };

        sliderThumbOptions[i] = {
            spaceBetween: 10,
            slidesPerView: 'auto',
            freeMode: true,
            threshold: 10,
            watchSlidesProgress: true,
            wrapperClass: 'c-slider-nav',
        };

        advContentOptions[i] = {
            wrapperClass: 'l-slider-content__wrapper',
            slidesPerView: 1,
        };

        const isThumbs = u_parseBool(slider.getAttribute('data-slider-thumbs'));

        const sliderID = `${advancedName}-${i}`;
        slider.setAttribute('id', sliderID);

        const sliderParent = slider.closest('.m-slider');

        if (sliderParent) {
            sliderNav = sliderParent.querySelector(advSliderTabs);
        }

        let sliderThumbsSelector;
        if (sliderNav) {
            if (isThumbs) {
                const sliderThumbsID = `js-slider-extended-thumbs-${i}`;
                sliderNav.setAttribute('id', sliderThumbsID);
                sliderThumbsSelector = `#${sliderThumbsID}`;
            } else {
                const sliderTabID = `js-slider-extended-nav-${i}`;
                sliderNav.setAttribute('id', sliderTabID);
                sliderTabOptions[i].element = `#${sliderTabID}`;
            }
        }

        let sliderContent = sliderParent.querySelector(advSliderContent);

        const sliderContentID = `js-slider-extended-content-${i}`;
        sliderContent.setAttribute('id', sliderContentID);
        let sliderContentSelector = `#${sliderContentID}`;

        advSliderOptions[i] = isLoopOn(slider, advSliderOptions[i]);
        advSliderOptions[i] = isAutoPlayOn(slider, advSliderOptions[i]);
        advSliderOptions[i] = isLazyLoadOn(slider, advSliderOptions[i]);
        advSliderOptions[i] = isBreakpointsOn(slider, advSliderOptions[i]);
        advSliderOptions[i] = isPaginationOn(slider, advSliderOptions[i]);
        advSliderOptions[i] = isEffectOn(slider, advSliderOptions[i]);

        // .m-slider parent is hardcoded in isNavigationOn options
        advSliderOptions[i] = isNavigationOn(slider, advSliderOptions[i], advancedName, i);

        if (isThumbs) {

            const isVertical = u_parseBool(slider.getAttribute('data-slider-vertical'));

            if (isVertical) {
                sliderThumbOptions[i].direction = 'vertical';
                // sliderThumbOptions[i].autoHeight = true;
                sliderParent.classList.add('swiper-thumbs-nav-vertical');
            }

            advSliderThumbs[i] = new Swiper(sliderThumbsSelector, sliderThumbOptions[i]);

            advSliderOptions[i].thumbs = {};
            advSliderOptions[i].thumbs.swiper = advSliderThumbs[i];

            advSliderOptions[i].noSwipingSelector = '.l-slider-nav, .m-slider__pagination';

        }

        advSliderOptions[i].on = {};

        advSliders[i] = new Swiper(slider, advSliderOptions[i]);

        advSlidersContent[i] = new Swiper(sliderContentSelector, advContentOptions[i]);

        advSlidersContent[i].controller.control = advSliders[i];
        advSliders[i].controller.control = advSlidersContent[i];

        if (sliderNav) {
            if (advSliders[i].initialized) {
                advSliderNav[i] = new SwiperWithTabs(advSliders[i], sliderTabOptions[i]);
            }
        }

        const isAutoplay = slider.getAttribute('data-slider-autoplay');
        const autoplayObserve = u_parseBool(slider.getAttribute('data-slider-autoplay-observer'));

        if (isAutoplay && autoplayObserve) {
            advSliders[i].autoplay.stop();
            advancedObserver.push({
                slider: sliderID,
            });
        }

        const sliderProgress = sliderParent.querySelector('.c-slider-progress-fill');
        if (sliderProgress && isAutoplay) {
            aReq[i] = null;

            advSliders[i].on('realIndexChange', (s) => {
                const duration = s.params.autoplay.delay;
                animateProgress(duration, sliderProgress, i);
            });

            advSliders[i].on('sliderFirstMove', (s) => {
                cancelAnimationFrame(aReq[i]);
                // sliderProgress.style.setProperty('--aa', '0');
            });

            advSliders[i].on('autoplayStop', (s) => {
                cancelAnimationFrame(aReq[i]);
            });

            advSliders[i].on('autoplayStart', (s) => {
                const duration = s.params.autoplay.delay;
                animateProgress(duration, sliderProgress, i);
            });

            advSliders[i].on('slideResetTransitionEnd', (s) => {
                const duration = s.params.autoplay.delay;
                animateProgress(duration, sliderProgress, i);
            });
        }
    });

    if (advancedObserver.length > 0) {
        autoplayObserver(advancedObserver, advancedName, advSliders);
    }

    const animateProgress = (duration, el, i) => {
        let start;
        let previousTimeStamp;
        let done = false;
        el.style.setProperty('--fillProgress', 0);

        const step = (timestamp) => {
            if (start === undefined) {
                start = timestamp;
            }
            const elapsed = timestamp - start;

            if (previousTimeStamp !== timestamp) {
                const prog = Math.min(elapsed / duration, 1);
                el.style.setProperty('--fillProgress', `${prog}`);
                if (prog === 1) done = true;
            }

            if (elapsed < duration) {
                previousTimeStamp = timestamp;
                if (!done) {
                    aReq[i] = window.requestAnimationFrame(step);

                }
            }
        };

        aReq[i] = window.requestAnimationFrame(step);
    };
};



export {
    extendedSliders,
};
