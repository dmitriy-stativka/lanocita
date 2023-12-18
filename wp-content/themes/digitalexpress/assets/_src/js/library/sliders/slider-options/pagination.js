/**
 * Pagination Slider Options
 */
import { u_parseBool } from '../../../utils/u_types';

const isPaginationOn = (elem, options) => {
    if (!elem) return options;

    const isPagination = elem.getAttribute('data-slider-pagination');

    if (isPagination) {
        options.pagination = {};
        options.pagination.el = '.m-slider__pagination';

        let leadingZero = false;

        if (isPagination === 'combo' || isPagination === 'fraction') {
            leadingZero = u_parseBool(elem.getAttribute('data-slider-leading-zero')) || false;
        }

        switch (isPagination) {

            case 'progressbar':
                options.pagination.type = 'progressbar';
                break;
            case 'fraction':
                options.pagination.type = 'fraction';
                options.pagination.formatFractionCurrent = function (number) {
                    if (leadingZero) {
                        return (number < 10) ? `0${number}` : number;
                    }
                    return number;
                };
                options.pagination.formatFractionTotal = function (number) {
                    if (leadingZero) {
                        return (number < 10) ? `0${number}` : number;
                    }
                    return number;
                };
                break;
            case 'combo':
                options.pagination.type = 'custom';
                options.pagination.renderCustom = function (swiper, current, total) {
                    let totalFormated = total;
                    let currentFormated = current;
                    let progress = parseFloat(current / total).toFixed(5);

                    if (leadingZero) {
                        totalFormated = total < 10 ? `0${total}` : total;
                        currentFormated = current < 10 ? `0${current}` : current;
                    }

                    return `<div class="swiper-pagination-progressbar swiper-pagination-horizontal" style="--data-current: ${current} ; --data-total: ${total}; --data-progress: ${progress}">
                                <span class="swiper-pagination-progressbar-fill"></span>
                            </div> 
                            <div class="swiper-pagination-fraction">
                              <span class="swiper-pagination-current">${currentFormated}</span>/
                              <span class="swiper-pagination-total">${totalFormated}</span>
                            </div>`;
                };
                break;
            default:
                options.pagination.clickable = true;

        }

        if (isPagination === 'combo') {
            const pagination = elem.querySelector('.m-slider__pagination');
            if (pagination) {
                pagination.classList.add('has-combo-progress');
            }
        }

    }

    return options;
};

export {
    isPaginationOn,
};
