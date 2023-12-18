<?php
/**
 * Change Order Pay Account Page
 */
class DS_CoreOrderPay {

	/**
	 * Construct
	 */
	public function __construct() {

		add_action( 'before_woocommerce_pay', array( $this, 'open_orderpay_page_wrapper' ), 5 );
		add_action( 'after_woocommerce_pay', array( $this, 'close_orderpay_page_wrapper' ), 100 );

		add_action( 'before_woocommerce_pay', array( $this, 'open_orderpay_header_wrapper' ), 5 );
		add_action( 'before_woocommerce_pay', array( $this, 'close_orderpay_header_wrapper' ), 11 );

		add_action( 'before_woocommerce_pay', array( $this, 'open_orderpay_page_main_wrapper' ), 15 );
		add_action( 'after_woocommerce_pay', array( $this, 'close_orderpay_page_main_wrapper' ), 99 );
	}

	/**
	 * Open Order Pay Wrapper
	 */
	public function open_orderpay_page_wrapper() {
		echo '<div class="ds-orderpay-page">';
	}

	/**
	 * Close Order Pay Wrapper
	 */
	public function close_orderpay_page_wrapper() {
		echo '</div>';
	}

	/**
	 * Open Order Pay Header Wrapper
	 */
	public function open_orderpay_header_wrapper() {
		echo '<div class="ds-orderpay-page__header">';
	}

	/**
	 * Close Order Pay Header Wrapper
	 */
	public function close_orderpay_header_wrapper() {
		echo '</div>';
	}

	/**
	 * Open Order Pay Main Wrapper
	 */
	public function open_orderpay_page_main_wrapper() {
		echo '<div class="ds-orderpay-page__main">';
	}

	/**
	 * Close Order Pay Main Wrapper
	 */
	public function close_orderpay_page_main_wrapper() {
		echo '</div>';
	}
}

new DS_CoreOrderPay();
