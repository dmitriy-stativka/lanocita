<?php
/**
 * Setup WordPress Functionality
 *
 * @package DS_Theme
 */

/**
 * Add PHP Libs to theme
 */
foreach ( glob( get_template_directory() . '/core/lib/*.php' ) as $filename ) {
	include_once $filename;
}

/**
 * Include theme helpers.
 * Additional functions for plugins ot update standard WP functionality
 */
require_once 'functions-helpers.php';

/**
 * Setup WordPress Functionality
 */
require_once 'functions-theme-setup.php';

/**
 * Include custom Theme Filters
 */
require_once 'functions-filters.php';

/**
 * Setup Express theme features
 */
require_once 'dsmp/dsmp-setup.php';

/**
 * ACF json auto sync
 */
require_once 'class-acf-json-autosync.php';

/**
 * ACF GravityForms field
 */
require_once 'class-acf-gf-field.php';

/**
 * Adds ACFCompose fields' classes
 */
require_once 'acf-fields-composer/acf-fields-setup.php';

/**
 * Add ACF Fields with php arrays instead off JSON
 */
add_action(
	'acf/init',
	function () {
		foreach ( glob( get_template_directory() . '/core/acf-php/*.php' ) as $filename ) {
			include_once $filename;
		}
		foreach ( glob( get_template_directory() . '/core/acf-php/*/*.php' ) as $filename ) {
			include_once $filename;
		}
	},
	10
);

/**
 * Theme Gutenberg Module
 */
require_once 'gutenberg/gutenberg-setup.php';

/**
 * Include site JS and CSS (frontend and admin panel side)
 */
require_once 'class-assets.php';

/**
 * Add functionality to require plugins in theme
 */
require_once 'class-default-plugins.php';

/**
 * Add functionality to require plugins in theme
 */
require_once 'class-criticallist.php';

/**
 * Generate image class
 */
require_once 'class-generate-image.php';

/**
 * Classes with customizations for Custom Post Types and Custom Taxonomies
 */
foreach ( glob( get_template_directory() . '/core/post_types/*.php' ) as $filename ) {
	include_once $filename;
}

/**
 * Separated ajax functions
 * Each file for single ajax action
 */
foreach ( glob( get_template_directory() . '/core/ajax/*.php' ) as $filename ) {
	include_once $filename;
}

/**
 * Separated Shortcodes functions
 */
foreach ( glob( get_template_directory() . '/core/shortcodes/*.php' ) as $filename ) {
	include_once $filename;
}

/**
 * Add Module Menu Walkers
 */
foreach ( glob( get_template_directory() . '/core/walkers/*.php' ) as $filename ) {
	include_once $filename;
}
