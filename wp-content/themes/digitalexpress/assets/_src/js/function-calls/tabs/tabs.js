// call each tab options as single instance

const getTabsTimeline = document.querySelectorAll('.js-tabs-timeline .js-tabs-nav-item');
const getTabsTimelineList = Array.prototype.slice.call(getTabsTimeline);

function getAllBefore(current) {
    const i = getTabsTimelineList.indexOf(current);

    return i > -1 ? getTabsTimelineList.slice(0, i) : [];
}

getTabsTimeline.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.classList.remove('js-timeline-active');
        const getActiveTabs = getAllBefore(e.currentTarget);

        getActiveTabs.forEach((tab) => {
            tab.classList.add('js-timeline-active');
        });
        e.currentTarget.classList.add('js-timeline-active');
    });
});
