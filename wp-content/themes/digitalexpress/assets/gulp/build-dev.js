const {
    series,
    parallel,
} = require('gulp');

const config = require('../config');

/**
 * import each task as function
 */
const { clean } = require('./tasks/clean');
const css = require('./tasks/css');
const cssWoocommerce = require('./tasks/woocommerce/css-woocommerce');
const jsDev = require('./tasks/js-dev');
const images = require('./tasks/images');
const sprite = require('./tasks/sprite');
const spriteWoocommerce = require('./tasks/woocommerce/sprite-woocommerce');


/**
 * define default task, that will be dependant on environment
 * this config.production is set when running yarn build
 *
 * if config production, clean, and then run other tasks
 * otherwise run watchfiles and browsersync
 */

const buildDev = series(
    clean,
    parallel(cssWoocommerce, jsDev, images, sprite, spriteWoocommerce),
    // parallel(cssWoocommerce, js, images, sprite, spriteWoocommerce),
);

module.exports = buildDev;
