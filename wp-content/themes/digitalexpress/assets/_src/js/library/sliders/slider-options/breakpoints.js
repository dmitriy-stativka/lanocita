/**
 * Break Points Options
 */

const isBreakpointsOn = (elem, options) => {
    if (!elem) return options;

    const noColumns = parseInt(elem.getAttribute('data-slider-columns'), 10);
    const columnsGap = parseInt(elem.getAttribute('data-slider-columns-gap'), 10) || 30;

    if (noColumns) {
        options.slidesPerView = noColumns;
        options.breakpoints = {
            320: {
                slidesPerView: noColumns > 3 ? 1 : 1,
                spaceBetween: 20,
            },

            576: {
                slidesPerView: noColumns > 3 ? 2 : 1,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: noColumns,
                spaceBetween: columnsGap,
            },
        };
    }

    return options;
};

export {
    isBreakpointsOn,
};
