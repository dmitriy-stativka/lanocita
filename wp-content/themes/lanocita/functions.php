<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */


 /**
 * Main theme functions: assets including, post types, walkers etc.
 */
require_once( 'inc/theme-setup.php' );

if ( ! function_exists( 'pandorah_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function pandorah_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'pandorah_support' );

if ( ! function_exists( 'pandorah_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function pandorah_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'pandorah-style',
			get_template_directory_uri() . '/assets/_dist/css/main.css',
			array(),
			$version_string
		);

		// Add styles inline.

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'pandorah-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'pandorah_styles' );


if ( ! function_exists( 'ds_register_theme_option_page' ) ) {
	/**
	 * Register Options page for ACF groups
	 */
	function ds_register_theme_option_page() {
		if ( function_exists( 'acf_add_options_page' ) ) {
			// Register options page.
			$option_page = acf_add_options_page(
				array(
					'page_title' => __( 'Theme Options', 'dstheme' ),
					'menu_title' => __( 'Theme Options', 'dstheme' ),
					'menu_slug'  => 'theme-options',
					'position'   => '59',
				)
			);
		}
	}
	add_action( 'acf/init', 'ds_register_theme_option_page' );
}

// какой используется файл шаблона
add_action('wp_head', 'show_template'); // перед шапкой
// add_action('wp_footer', 'show_template'); // в подвале
function show_template(){
  global $template;
  echo $template;
}