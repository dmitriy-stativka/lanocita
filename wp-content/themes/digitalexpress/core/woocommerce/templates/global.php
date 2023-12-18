<?php
/**
 * Change Single Product Page
 */
class DS_WooGlobalItems extends DS_WooTemplate {

	/**
	 * Build
	 */
	public function build() {
		add_action( 'woocommerce_before_quantity_input_field', array( $this, 'qty_before' ), 99 );
		add_action( 'woocommerce_after_quantity_input_field', array( $this, 'qty_after' ), 0 );

		remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
		remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
		add_action( 'woocommerce_before_main_content', array( $this, 'woocommerce_output_content_wrapper' ), 10 );
		add_action( 'woocommerce_after_main_content', array( $this, 'woocommerce_output_content_wrapper_end' ), 10 );
	}

	/**
	 * Add minus before QTY
	 */
	public function qty_before() {
		?><span class="item_qty minus" value="-">-</span>
		<?php
	}

	/**
	 * Add plus after QTY
	 */
	public function qty_after() {
		?>
		<span class="item_qty plus" value="+">+</span>
		<?php
	}

	/**
	 * Open Woo Content Wrapper
	 */
	public function woocommerce_output_content_wrapper() {
		echo "<div class='ds-woocommerce' id='ds-woocommerce'>";
	}

	/**
	 * Close Woo Content Wrapper
	 */
	public function woocommerce_output_content_wrapper_end() {
		echo '</div>';
	}
}

new DS_WooGlobalItems();

remove_action( 'wp_footer', 'woocommerce_demo_store' );
add_action( 'ds_wrapper_open', 'woocommerce_demo_store' );
