/**
 * Blog JS imports and functions
 */

import { ds_blog_toggleDarkMode } from './blog/ds_blog_darkmode';
import { ds_blog_tableOfContents } from './blog/ds_blog_tocHighlight';
import { ds_blog_tocSticky } from './blog/ds_blog_tocSticky';

document.addEventListener('DOMContentLoaded', () => {
    ds_blog_toggleDarkMode('.js-dark-mode');

    if (document.querySelector('.ez-toc-toggle')) {
        ds_blog_tocSticky();
        ds_blog_tableOfContents();
    }
});
