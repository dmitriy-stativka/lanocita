/**
 * Autoplay only when in viewport
 */

const autoplayObserver = (items, name, sliders) => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const sIndex = parseInt(entry.target.getAttribute('id').replace(`${name}-`, ''), 10);
            if (entry.intersectionRatio > 0) {
                sliders[sIndex].autoplay.start();
            } else {
                sliders[sIndex].autoplay.stop();
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback);

    items.forEach((observe) => {
        const target = document.querySelector(`#${observe.slider}`);
        observer.observe(target);
    });
};

export {
    autoplayObserver,
};
