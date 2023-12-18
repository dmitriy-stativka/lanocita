/*
 * @title Main App
 * @description Application entry point
 */

// Utils
import { u_addTouchToHtml } from './utils/u_is-touch-device';
// import { u_scrollEffect } from './utils/u_scroll-effect';
import DSMPViewAnim from './utils/u_io-anim';

// Header
import { ds_headerSticky } from './header/ds_headerSticky';
import { ds_headerSearch } from './header/ds_headerSearch';
import { ds_headerMenuToggle } from './header/ds_headerMenuToggle';
import { ds_headerMenuSubMenuToggle } from './header/ds_menuSubMenuToggle';
import { ds_headerMobileSwipeUp } from './header/ds_headerMobileSwipeUp';
// import { ds_headerHeight } from "./header/ds_headerHeight";

// Function Calls

import { ds_collapse } from './library/collapsers/ds_collapse';
import { ds_toggleElement } from './library/collapsers/ds_toggleElement';
import { ds_readMore } from './function-calls/tinymce-read-more/ds_readMore';
import { ds_loadMoreBlog } from './blog/ds_blog-filter';

// Libraries
import DSMPMediaControls from './library/media-controls/media-control';

// Components

// import ProgressCircleCounter from './library/counters/progress-counter';

document.addEventListener('DOMContentLoaded', () => {
    // Check whether it is touch device or not
    u_addTouchToHtml();
    // u_scrollEffect()

    /**
     * Header
     */
    // Sticky header
    ds_headerSticky('.site-header', 'is-sticky');
    // ds_headerHeight();

    /**
     * Mobile menu navigation
     */
    // Mobile menu toggle
    ds_headerMenuToggle('.js-m-burger-toggle');
    // Mobile menu submenu toggle
    ds_headerMenuSubMenuToggle('.js-m-burger-wrap', '.js-m-burger-toggle');
    // Mobile menu swipe up close
    ds_headerMobileSwipeUp('.js-m-burger-toggle');

    /**
     * Desktop menu navigation
     */
    // Desktop burger menu toggle
    ds_headerMenuToggle('.js-d-burger-toggle');
    // Desktop burger menu submenu toggle
    ds_headerMenuSubMenuToggle('.js-d-burger-wrap', '.js-d-burger-toggle');
    ds_headerSearch();

    /**
     * Utils
     */
    ds_collapse();
    ds_readMore();
    ds_toggleElement();

    // Move to js-blog.js if not using Content block with load more
    if (document.querySelector('.js-ajax-block')) {
        ds_loadMoreBlog();
    }

    /**
     * Libraries
     */
    new DSMPMediaControls();

    /**
     * Components
     */

/*    new ProgressCircleCounter({
        percentage: 80,
    });*/

    new DSMPViewAnim({});
});

window.addEventListener('load', () => {
    // Enable if using lazy load on Video (set data-src instead of src)
    // let lazyLoadInstance = new LazyLoad();
});




const select = document.querySelectorAll(".select"); // select-box

if (select.length) {
    select.forEach((item) => {
      const selectCurrent = item.querySelector(".select__current");
      item.addEventListener("click", (event) => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;
        if (el === "choosen" && selectCurrent.innerText !== text) {
          selectCurrent.innerText = text;
        }
        item.classList.toggle("is-active");
      });
    });
  }


  document.querySelector('.site-header__btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.dropdown-mobile-menu').classList.toggle('show');
    document.querySelector('body').classList.toggle('shadow');
  })