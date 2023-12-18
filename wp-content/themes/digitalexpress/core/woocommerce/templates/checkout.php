<?php
/**
 * Change Checkout Page
 */
class DS_CoreCheckout {

	/**
	 * Construct
	 */
	public function __construct() {

		/**
		 * Force terms and conditions link to always open in new tab
		 */
		remove_action( 'woocommerce_checkout_terms_and_conditions', 'wc_terms_and_conditions_page_content', 30 );

		add_action( 'woocommerce_before_checkout_form_cart_notices', array( $this, 'open_checkout_page_wrapper' ), 8 );
		add_action( 'woocommerce_after_checkout_form', array( $this, 'close_checkout_page_wrapper' ), 100 );

		add_action(
			'woocommerce_before_checkout_form_cart_notices',
			array(
				$this,
				'open_checkout_header_wrapper',
			),
			9
		);
		add_action( 'woocommerce_before_checkout_form', array( $this, 'close_checkout_header_wrapper' ), 11 );

		add_action( 'woocommerce_before_checkout_form', array( $this, 'open_checkout_form_wrapper' ), 12 );
		add_action( 'woocommerce_after_checkout_form', array( $this, 'close_checkout_form_wrapper' ), 99 );

		add_action(
			'woocommerce_checkout_before_order_review_heading',
			array(
				$this,
				'open_form_order_review_wrapper',
			),
			10
		);
		add_action(
			'woocommerce_checkout_after_order_review',
			array(
				$this,
				'close_form_order_review_wrapper',
			),
			99
		);
	}

	/**
	 * Open Checkout page wrapper
	 */
	public function open_checkout_page_wrapper() {
		echo '<div class="ds-checkout-page">';
	}

	/**
	 * Close Checkout page wrapper
	 */
	public function close_checkout_page_wrapper() {
		echo '</div>';
	}

	/**
	 * Open Checkout page header wrapper
	 */
	public function open_checkout_header_wrapper() {
		echo '<div class="ds-checkout-page__header">';
	}

	/**
	 * Close Checkout page header wrapper
	 */
	public function close_checkout_header_wrapper() {
		echo '</div>';
	}

	/**
	 * Open Checkout page form wrapper
	 */
	public function open_checkout_form_wrapper() {
		echo '<div class="ds-checkout-page__main">';
	}

	/**
	 * Close Checkout page form wrapper
	 */
	public function close_checkout_form_wrapper() {
		echo '</div>';
	}

	/**
	 * Open Checkout order review form wrapper
	 */
	public function open_form_order_review_wrapper() {
		echo '<div class="col1-set ds-checkout-page__order-review">';
	}

	/**
	 * Close Checkout order review form wrapper
	 */
	public function close_form_order_review_wrapper() {
		echo '</div>';
	}
}

new DS_CoreCheckout();
