import { u_isTouchDevice } from '../utils/u_is-touch-device';
import { closeMobileMenu } from './utils/u-menu';

/**
 * Mobile menu swipe up menu close
 */

const ds_headerMobileSwipeUp = (el) => {
    const mobileNav = document.querySelector('.navbar-mobile__inner');
    if (!mobileNav) return;

    const btn = document.querySelector(el);
    const body = document.querySelector('body');

    let xDown = null;
    let yDown = null;
    const touch = u_isTouchDevice();

    if (touch) {
        const isScrollableY = (element) => element.scrollHeight > element.offsetHeight;

        const handleTouchMove = (evt) => {
            if (!xDown || !yDown) {
                return;
            }

            const xUp = evt.touches[0].clientX;
            const yUp = evt.touches[0].clientY;

            const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    /* left swipe */
                } else {
                    /* right swipe */
                }
            } else if (yDiff > 0) {
                /* up swipe */
                if (!isScrollableY(mobileNav)) {
                    closeMobileMenu(btn, body);
                }
            } else {
                /* down swipe */
            }
            /* reset values */
            xDown = null;
            yDown = null;
        };

        const handleTouchStart = (evt) => {
            xDown = evt.touches[0].clientX;
            yDown = evt.touches[0].clientY;
        };

        mobileNav.addEventListener('touchmove', (e) => {
            handleTouchMove(e);
            mobileNav.removeEventListener('touchstart', () => {
            }, { once: true });
        }, false);

        mobileNav.addEventListener('touchstart', (e) => {
            handleTouchStart(e);
            mobileNav.removeEventListener('touchmove', () => {
            }, { once: true });
        }, false);
    }
};

export {
    ds_headerMobileSwipeUp,
};
