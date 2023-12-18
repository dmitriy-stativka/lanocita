const addObserver = (el, params) => {
    if (!('IntersectionObserver' in window)) {
        el.classList.add(params.className);
        if (params.cb) {
            params.cb(el);
        }
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(params.className);
                // console.log(`${ Math.round(entry.intersectionRatio * 100) }%`);
                if (params.cb) {
                    params.cb(entry);
                }

                if (params.repeat !== 'true') {
                    observer.unobserve(entry.target);
                }
            } else if (params.repeat === 'true') {
                entry.target.classList.remove(params.className);
            }
        });
    }, {
        root: null,
        rootMargin: params.margin,
        threshold: params.threshold,
    });
    observer.observe(el);
};

export default addObserver;
