/*
 * @title DS Tabs
 * @description Application entry point
 */

import DSMPTabsTab from './library/tabs-accordions/DSMPTabs-tab';
import DSMPTabsDropdown from './library/tabs-accordions/DSMPTabs-dropdown';
import DSMPTabsTabDropdown from './library/tabs-accordions/DSMPTabs-tabdropdown';
import { callTabAccordionsMobile } from './function-calls/tabs-to-accordion-mobile';

document.addEventListener('DOMContentLoaded', () => {

    new DSMPTabsTab();
    new DSMPTabsDropdown();
    new DSMPTabsTabDropdown();

    callTabAccordionsMobile();
});

window.addEventListener('load', () => {

});
