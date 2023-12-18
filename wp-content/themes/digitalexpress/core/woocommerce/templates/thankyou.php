<?php
/**
 * Change Single Product Page
 */
class DS_WooThankyou {
	/**
	 * Construct
	 */
	public function __construct() {

		add_action( 'woocommerce_before_thankyou', array( $this, 'open_thankyou_page_wrapper' ), 8 );
		add_action( 'woocommerce_after_thankyou', array( $this, 'close_thankyou_page_wrapper' ), 100 );

		add_filter( 'woocommerce_thankyou_order_received_text', '__return_empty_string', 10 );
		add_action( 'woocommerce_before_thankyou', array( $this, 'order_received_section' ), 10, 1 );

		add_action( 'woocommerce_before_thankyou', array( $this, 'open_order_received_content_wrapper' ), 15 );
		add_action( 'woocommerce_after_thankyou', array( $this, 'close_order_received_content_wrapper' ), 99 );
	}

	/**
	 * Open thank you page wrapper
	 */
	public function open_thankyou_page_wrapper() {
		echo '<div class="ds-thankyou-page">';
	}

	/**
	 * Close thank you page wrapper
	 */
	public function close_thankyou_page_wrapper() {
		echo '</div>';
	}

	/**
	 * Generate order received section
	 *
	 * @param int $order_id woocommerce order id.
	 */
	public function order_received_section( $order_id ) {

		$order = wc_get_order( $order_id );
		if ( $order && $order->has_status( 'failed' ) ) {
			return '';
		}

		ob_start();
		?>
		<div class="ds-thankyou-page__header">
			<h1><?php esc_html_e( 'Order received.', 'dstheme' ); ?></h1>

			<div class="ds-thankyou-page__message">
				<p><?php esc_html_e( 'Thank you. Your order has been received.', 'dstheme' ); ?></p>
				<a class="c-btn -primary" href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>">
					<span class="c-btn__txt"><?php esc_html_e( 'Back to shop', 'dstheme' ); ?></span>
				</a>
			</div>
		</div>
		<?php

		echo ob_get_clean(); // phpcs:ignore

		return '';
	}

	/**
	 * Open Order received content wrapper
	 */
	public function open_order_received_content_wrapper() {
		echo '<div class="ds-thankyou-page__main">';
	}

	/**
	 * Close Order received content wrapper
	 */
	public function close_order_received_content_wrapper() {
		echo '</div>';
	}
}

new DS_WooThankyou();
