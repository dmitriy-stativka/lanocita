const {
    series,
    parallel,
} = require('gulp');

const {
    browserSync,
} = require('./tasks/browser-sync');

const config = require('../config');

/**
 * import each task as function
 */
const { clean } = require('./tasks/clean');
const cssWoocommerce = require('./tasks/woocommerce/css-woocommerce');
const js = require('./tasks/js');
const images = require('./tasks/images');
const spriteWoocommerce = require('./tasks/woocommerce/sprite-woocommerce');
const { watchFiles } = require('./watch-woocommerce');

/**
 * define default task, that will be dependant on environment
 * this config.production is set when running yarn build
 *
 * if config production, clean, and then run other tasks
 * otherwise run watchfiles and browsersync
 */

let woocommerceTask;
if (config.production) {
    woocommerceTask = series(
        clean,
        parallel(cssWoocommerce, js, images, spriteWoocommerce),
    );
} else {
    woocommerceTask = series(cssWoocommerce, images, js, spriteWoocommerce, parallel(browserSync, watchFiles));
}

module.exports = woocommerceTask;
