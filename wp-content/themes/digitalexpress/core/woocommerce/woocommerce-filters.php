<?php

if ( ! function_exists( 'ds_custom_woocommerce_breadcrumbs' ) ) {
	/**
	 * Change Woocommerce Breadcrumbs display settings
	 */
	function ds_custom_woocommerce_breadcrumbs() {
		return array(
			'delimiter'   => '<span class="delimiter">&#47</span>',
			'wrap_before' => '<nav class="woocommerce-breadcrumb">',
			'wrap_after'  => '</nav>',
			'before'      => '',
			'after'       => '',
			'home'        => _x( 'Home', 'breadcrumb', 'dstheme' ),
		);
	}

	add_filter( 'woocommerce_breadcrumb_defaults', 'ds_custom_woocommerce_breadcrumbs' );
}


if ( ! function_exists( 'ds_remove_any_from_filter_dropdown' ) ) {
	/**
	 * Standard filter view "Any color" or "Any type"
	 * Filter removing "Any" word from Woocommerce filter widget
	 */
	function ds_remove_any_from_filter_dropdown( $sprintf, $taxonomy_label, $taxonomy ) {

		// phpcs:ignore
		$sprintf = sprintf( __( '%s', 'dstheme' ), $taxonomy_label );

		return $sprintf;
	}

	add_filter( 'woocommerce_layered_nav_any_label', 'ds_remove_any_from_filter_dropdown', 10, 3 );
}


if ( ! function_exists( 'ds_cart_type' ) ) {
	/**
	 * Check Cart Type
	 */
	function ds_cart_type( $classes ) {
		$classes[] = 'ds-cart-' . get_field( 'cart_type', 'options' );

		return $classes;
	}

	add_filter( 'body_class', 'ds_cart_type' );
}
