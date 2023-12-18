<?php
/**
 * Prepare Woocommerce to use in theme
 */

if ( ! class_exists( 'DS_ThemeWoocommerceInstall' ) ) {

	class DS_ThemeWoocommerceInstall {

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'after_setup_theme', array( $this, 'woo_add_support' ) );

			add_action( 'init', array( $this, 'disable_woocommerce_sidebar' ) );

			//phpcs:ignore
			// add_filter( 'woocommerce_enqueue_styles', array( $this, 'woo_dequeue_styles' ) ); 

			add_filter( 'woocommerce_enqueue_styles', '__return_false' );

			add_action( 'acf/init', array( $this, 'options_page' ) );
		}

		public function woo_add_support() {
			add_theme_support( 'woocommerce' );
			//phpcs:ignore
			// add_theme_support( 'wc-product-gallery-zoom' );
			//phpcs:ignore
			// add_theme_support( 'wc-product-gallery-lightbox' );
			//phpcs:ignore
			// add_theme_support( 'wc-product-gallery-slider' );
		}

		public function woo_dequeue_styles( $enqueue_styles ) {
			unset( $enqueue_styles['woocommerce-layout'] );
			return $enqueue_styles;
		}

		public function disable_woocommerce_sidebar() {
			remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
		}

		public function options_page() {
			if ( function_exists( 'acf_add_options_sub_page' ) ) {
				$current_user = wp_get_current_user();
				if ( strpos( $current_user->user_email, '@digitalsilk.com' ) ) {
					acf_add_options_sub_page(
						array(
							'page_title'  => __( 'DS Settings', 'dstheme' ),
							'menu_title'  => __( 'DS Settings', 'dstheme' ),
							'menu_slug'   => 'ds-woo-settings',
							'parent_slug' => 'woocommerce',
						)
					);
				}

				acf_add_options_sub_page(
					array(
						'page_title'  => __( 'DS Content', 'dstheme' ),
						'menu_title'  => __( 'DS Content', 'dstheme' ),
						'menu_slug'   => 'ds-woo-content',
						'parent_slug' => 'woocommerce',
					)
				);
			}
		}
	}

	new DS_ThemeWoocommerceInstall();
}
