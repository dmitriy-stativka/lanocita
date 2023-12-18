/**
 * Simple Image Spinner
 */
import { registerPlaybackControlPlugin } from '../../library/3d-media/spinner-plugins/ctrl-playback-plugin';
import { registerFramesNavControlPlugin } from '../../library/3d-media/spinner-plugins/ctrl-frames-nav-plugin';
import { registerZoomControlPlugin } from '../../library/3d-media/spinner-plugins/ctrl-zoom-plugin';
import { registerFullscrControlPlugin } from '../../library/3d-media/spinner-plugins/ctrl-fullscreen-plugin';
import { registerProgressFractionPlugin } from '../../library/3d-media/spinner-plugins/progress-fraction-plugin';
import { registerHotSpotsPlugin } from '../../library/3d-media/spinner-plugins/hotspots-plugin';
import { isDragOn } from '../../library/3d-media/spinner-plugins/ctrl-drag-plugin';
import { isPlaybackOn } from '../../library/3d-media/spinner-controls/playback';
import { isFramesNavOn } from '../../library/3d-media/spinner-controls/frames-nav';
import { isZoomOn } from '../../library/3d-media/spinner-controls/zoom';
import { isFullScreenOn } from '../../library/3d-media/spinner-controls/fullscreen';
import { isFractionOn } from '../../library/3d-media/spinner-controls/progress-fraction';
import { isAnimateOn } from '../../library/3d-media/spinner-controls/autoanimate';
import { isHotspotsOn } from '../../library/3d-media/spinner-controls/hotspots-nav';

// config selectors
const spinnerElemName = 'js-image-spinner';
const spinnerModuleWrap = '.m-image-spinner';

// get all spinners
const spinnerModuleList = document.querySelectorAll(spinnerModuleWrap);

const callImageSpinners = () => {

    if (!spinnerModuleList.length) {
        return;
    }

    const spinnerOptions = [];

    // loop through spinners and assign them IDs
    spinnerModuleList.forEach((spinnerModule, i) => {
        const imgSpinnerElem = spinnerModule.querySelector('.js-image-spinner');
        const imgPath = spinnerModule.getAttribute('data-spinner-path');
        const imgPrefix = spinnerModule.getAttribute('data-spinner-prefix');
        const imgDigits = spinnerModule.getAttribute('data-spinner-digits');
        const imgCount = spinnerModule.getAttribute('data-spinner-count');
        const imgExt = spinnerModule.getAttribute('data-spinner-ext');

        if (!(imgPath || imgPrefix || imgDigits || imgCount || imgExt)) {
            return;
        }

        const spinnerID = `${spinnerElemName}-${i}`;
        imgSpinnerElem.setAttribute('id', spinnerID);

        spinnerOptions[i] = {
            source: SpriteSpin.sourceArray(imgPath + '/' + imgPrefix + '{frame}.' + imgExt, {
                frame: [1, imgCount],
                digits: imgDigits
            }),
            // use double click to in/out (default is true)
            zoomUseClick: true,
            // prevents changing the frame during zoom (default is true)
            zoomPinFrame: false,
            sense: -1,
            responsive: true,
            animate: false,
            sizeMode: 'fit',
            renderer: 'canvas',
            preloadCount: 2,
            // animation speed
            frameTime: 120,
            playToFrameTime: 10,
            reverse: false,
            // Make sure to use the same value for forceReverse, in case it gets changed by 'nearest' frame hs option
            forceReverse: false,
            plugins: [
                '360', // display plugin
                //    'drag', // interaction plugin - optional per module settings
                // native zoom plugin is triggered via dsZoomControl
                //    'zoom',
            ]
        };

        // plugins
        spinnerOptions[i] = isFractionOn(spinnerModule, spinnerOptions[i]);
        spinnerOptions[i] = isFramesNavOn(spinnerModule, spinnerOptions[i]);
        spinnerOptions[i] = isZoomOn(spinnerModule, spinnerOptions[i]);
        spinnerOptions[i] = isFullScreenOn(spinnerModule, spinnerOptions[i]);
        spinnerOptions[i] = isPlaybackOn(spinnerModule, spinnerOptions[i]);
        spinnerOptions[i] = isHotspotsOn(spinnerModule, spinnerOptions[i]);
        spinnerOptions[i] = isDragOn(spinnerModule, spinnerOptions[i]);

        // other options
        spinnerOptions[i] = isAnimateOn(spinnerModule, spinnerOptions[i]);

        bootImageSpinner(`#${spinnerID}`, spinnerOptions[i]);
    });

    registerPlaybackControlPlugin('dsPlaybackControl');
    registerFramesNavControlPlugin('dsFramesNavControl');
    registerZoomControlPlugin('dsZoomControl');
    registerFullscrControlPlugin('dsFullScreenControl');
    registerProgressFractionPlugin('dsProgressFraction');
    registerHotSpotsPlugin('dsHotSpots');
};

function bootImageSpinner(selector, options) {
    if ("IntersectionObserver" in window) {
        // Browser supports IntersectionObserver so use that to defer the boot
        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);

                    $(entry.target).spritespin(options);
                }
            });
        });
        observer.observe($(selector)[0]);
    } else {
        // Browser does not support IntersectionObserver so boot instantly
        $(selector).spritespin(options);
        //   console.log("spinner booted by default", selector, options);
    }
}

export {
    callImageSpinners,
};
