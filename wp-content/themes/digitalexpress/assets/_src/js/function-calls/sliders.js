import { dsblsSlider } from './sliders/slider-dsbls';
import { simpleSliders } from './sliders/slider-simple';
import { advancedSliders } from './sliders/slider-advanced';
import { circularSliders } from './sliders/slider-circular';
import { extendedSliders } from './sliders/slider-extended';

const callSliders = () => {
    dsblsSlider();
    simpleSliders();
    advancedSliders();
    circularSliders();
    extendedSliders();
};

export {
    callSliders,
};
