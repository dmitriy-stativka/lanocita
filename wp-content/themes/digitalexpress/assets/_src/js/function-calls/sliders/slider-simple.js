/**
 * Simple slider type
 */
import { isAutoPlayOn } from '../../library/sliders/slider-options/autoplay';
import { isLazyLoadOn } from '../../library/sliders/slider-options/lazy';
import { isBreakpointsOn } from '../../library/sliders/slider-options/breakpoints';
import { isNavigationOn } from '../../library/sliders/slider-options/navigation';
import { isPaginationOn } from '../../library/sliders/slider-options/pagination';
import { isLoopOn } from '../../library/sliders/slider-options/loop';
import { u_parseBool } from '../../utils/u_types';
import { autoplayObserver } from '../../library/sliders/slider-options/autoplayObserver';

// config selectors only here
const simpleName = 'js-slider-simple';
const simpleSliderSel = '.js-slider-simple';

// find those selectors
const simpleSliderList = document.querySelectorAll(simpleSliderSel);

const simpleSliders = () => {
    // loop through sliders and add ID's to it

    const simpleSliderOptions = [];
    const simpleSlidersList = [];
    const simpleObserver = [];

    simpleSliderList.forEach((slider, i) => {
        simpleSliderOptions[i] = {};
        const sliderID = `${simpleName}-${i}`;
        slider.setAttribute('id', sliderID);

        simpleSliderOptions[i] = isAutoPlayOn(slider, simpleSliderOptions[i]);
        simpleSliderOptions[i] = isLazyLoadOn(slider, simpleSliderOptions[i]);
        simpleSliderOptions[i] = isBreakpointsOn(slider, simpleSliderOptions[i]);
        simpleSliderOptions[i] = isPaginationOn(slider, simpleSliderOptions[i]);
        simpleSliderOptions[i] = isLoopOn(slider, simpleSliderOptions[i]);

        // .m-slider parent is hardcoded in isNavigationOn options
        simpleSliderOptions[i] = isNavigationOn(slider, simpleSliderOptions[i], simpleName, i);

        simpleSlidersList[i] = new Swiper(slider, simpleSliderOptions[i]);

        if (slider.classList.contains('slider-filter-tabs')) {
            // eslint-disable-next-line no-use-before-define
            filterSliders(slider, simpleSlidersList[i]);
        }

        const isAutoplay = slider.getAttribute('data-slider-autoplay');
        const autoplayObserve = u_parseBool(slider.getAttribute('data-slider-autoplay-observer'));

        if (isAutoplay && autoplayObserve) {
            simpleSlidersList[i].autoplay.stop();
            simpleObserver.push({
                slider: sliderID,
            });
        }
    });

    if (simpleObserver.length > 0) {
        autoplayObserver(simpleObserver, simpleName, simpleSlidersList);
    }

    window.addEventListener('hashchange', (event) => {
        // if (!isHashed) {
        //     //alert("location: " + document.location + ",
        //     state: " + JSON.stringify(event.state));
        // }
    }, false);

};

const filterSliders = (selector, slider) => {
    if (!selector) return;
    const sliderContainer = selector.closest('.m-slider');
    const slides = selector.querySelectorAll('.m-slider__slide');
    const filterContainer = sliderContainer.querySelector('.js-slider-fnav');
    if (!filterContainer) return;
    const filterItems = filterContainer.querySelectorAll('.js-filter-fnav-item a');
    const filterDropdown = filterContainer.querySelector('.js-slider-fnav-dropdown');
    let isHashed = false;
    filterItems.forEach((item) => {
        item.addEventListener('click', (ev) => {
            const clickedItem = ev.currentTarget;
            const clickedItemParent = clickedItem.closest('.js-filter-fnav-item');
            // const href = clickedItem.

            if (clickedItemParent.classList.contains('is-active')) {
                return;
            }

            filterItems.forEach((clicked) => {
                clicked.closest('.js-filter-fnav-item').classList.remove('is-active');
            });
            clickedItemParent.classList.add('is-active');

            const clickedFilter = ev.currentTarget.getAttribute('data-slider-filter');
            const clickedHref = ev.currentTarget.getAttribute('href');
            ev.preventDefault();
            if (clickedHref.indexOf('#') > -1) {
                const urlSplit = clickedHref.split('#');
                const newHash = urlSplit[1];
                window.location.hash = newHash;
                isHashed = true;
            }

            // console.log(clickedHref, ' 5');
            // console.log(isHashed, '1');
            filterSlides(clickedFilter);

        });
    });

    const filterSlides = (filter) => {
        let filterString = filter;
        if (filterString === 'all') filterString = '';

        for (let i = 0; i < slides.length; i += 1) {
            const slidesCategories = slides[i].getAttribute('data-categories').split(',');
            let hasFilter = false;
            for (let j = 0; j < slidesCategories.length; j += 1) {
                if (slidesCategories[j].indexOf(filterString) !== -1) {
                    hasFilter = true;
                }
            }

            if (hasFilter) {
                slides[i].style.display = '';
                slides[i].classList.add('swiper-slide');
            } else {
                slides[i].classList.remove('swiper-slide');
                slides[i].style.display = 'none';
            }
            // console.log(slidesCategories);
            // console.log(slides[i].getAttribute('data-categories'));
        }

        slider.updateSize();
        slider.updateSlides();
        slider.updateProgress();
        slider.updateSlidesClasses();
        slider.slideToLoop(0);
        slider.scrollbar.updateSize();

    };
    // window.onpopstate = function(event)
    // {
    //     console.log(isHashed, '0');
    //     if(isHashed) {
    //         event.preventDefault();
    //         isHashed = false;
    //         return;
    //     }
    //     console.log(isHashed, '2');
    //
    //     alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
    // };
};

export {
    simpleSliders,
};
