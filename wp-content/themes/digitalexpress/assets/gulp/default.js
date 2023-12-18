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
const css = require('./tasks/css');
const cssWoocommerce = require('./tasks/woocommerce/css-woocommerce');
const js = require('./tasks/js');
const images = require('./tasks/images');
const sprite = require('./tasks/sprite');
const spriteWoocommerce = require('./tasks/woocommerce/sprite-woocommerce');
const { watchFiles } = require('./watch');

/**
 * define default task, that will be dependant on environment
 * this config.production is set when running yarn build
 *
 * if config production, clean, and then run other tasks
 * otherwise run watchfiles and browsersync
 */

let defaultTask;
if (config.production) {
    defaultTask = series(
        clean,
        parallel(cssWoocommerce, js, images, sprite, spriteWoocommerce),
    );
} else {
    defaultTask = series(css, js, images, sprite, spriteWoocommerce, parallel(browserSync, watchFiles));
}

module.exports = defaultTask;
