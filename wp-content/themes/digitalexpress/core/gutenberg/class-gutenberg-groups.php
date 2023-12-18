<?php
/**
 * Register ACF block_categories for Gutenberg editor
 *
 * Category slug will be used as:
 * 1) variable value to register module $category
 * 2) separator between module controllers and templates
 * /core/gutenberg/modules/%category%/
 * /templates/gutenberg/%category%/
 */
// phpcs:ignoreFile
class DS_ACFGutenbergBlocks {

	public function __construct() {
		add_filter( 'block_categories_all', array( $this, 'acf_categories_init' ), 10, 2 );
	}

	public function acf_categories_init( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'ds-accordions',
					'title' => __( 'DigitalSilk Accordions', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-banners',
					'title' => __( 'DigitalSilk Banners', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-content',
					'title' => __( 'DigitalSilk Content', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-counters',
					'title' => __( 'DigitalSilk Counters', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-forms',
					'title' => __( 'DigitalSilk Forms', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-functional',
					'title' => __( 'DigitalSilk Functional', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-3d-media',
					'title' => __( 'DigitalSilk 3D Media', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-gallery',
					'title' => __( 'DigitalSilk Galleries', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-newsletter-signups',
					'title' => __( 'DigitalSilk Newsletter Signup', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-posts',
					'title' => __( 'DigitalSilk Blog Posts', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-sliders',
					'title' => __( 'DigitalSilk Sliders', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-separators',
					'title' => __( 'DigitalSilk Separators', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-tabs',
					'title' => __( 'DigitalSilk Tabs', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-team',
					'title' => __( 'DigitalSilk Team', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-test',
					'title' => __( 'DigitalSilk Test', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-widgets',
					'title' => __( 'DigitalSilk Widgets', 'dstheme-admin' ),
				),
				array(
					'slug'  => 'ds-wrappers',
					'title' => __( 'DigitalSilk Wrappers', 'dstheme-admin' ),
				),
			)
		);
	}
}

new DS_ACFGutenbergBlocks();
