<?php
/**
 * Change User Account Layout
 */
class DS_UserAccount {

	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'woocommerce_account_menu_items', array( $this, 'user_menu_items' ), 10, 1 );

		add_action( 'woocommerce_before_account_navigation', array( $this, 'open_navigation_wrapper' ), 10 );
		add_action( 'woocommerce_before_account_navigation', array( $this, 'add_navigation_toggle_button' ), 15 );
		add_action( 'woocommerce_after_account_navigation', array( $this, 'close_navigation_wrapper' ), 99 );
	}

	/**
	 * Remove menu items
	 *
	 * @param array $items - holds account menu items.
	 */
	public function user_menu_items( $items ) {
		unset( $items['downloads'] );

		return $items;
	}

	/**
	 * Open navigation wrapper - woocommerce_before_account_navigation
	 */
	public function open_navigation_wrapper() {
		echo '<div class="woocommerce-navigation-wrapper">';
	}

	/**
	 * Close navigation wrapper - woocommerce_after_account_navigation
	 */
	public function close_navigation_wrapper() {
		echo '</div>';
	}

	/**
	 * Add nav toggle button
	 */
	public function add_navigation_toggle_button() {
		get_template_part( 'woocommerce/myaccount/nav-toggle-button' );
	}
}

new DS_UserAccount();
