<?php
/**
 * Change Cart Page
 */
class DS_Cart {
	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'woocommerce_cross_sells_total', array( $this, 'cart_cross_sell_total' ) );
		remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );

		add_action( 'woocommerce_after_cart', array( $this, 'woocommerce_cross_sell_display' ) );
	}

	/**
	 * Change the number of cross-sells
	 *
	 * @param int $total contains the total cross sells to display.
	 */
	public function cart_cross_sell_total( $total ): int {
		return 4;
	}

	/**
	 * Change the display of cross-sells
	 */
	public function woocommerce_cross_sell_display() {
		$cart_content = get_field( 'cart_content', 'options' );
		if ( 'manual' === $cart_content['additional_products_type'] ) {
			?>
			<div class="ds-cart-page__cross-sells">
				<div class="cross-sells">
					<?php if ( ! empty( $cart_content['additional_products_title'] ) ) : ?>
						<h2>
							<?php echo $cart_content['additional_products_title']; //phpcs:ignore ?>
						</h2>
					<?php endif; ?>

					<ul class="products columns-4">
						<?php
						$flag = 0;
						foreach ( $cart_content['products'] as $item ) :
							if ( 4 === $flag ) {
								break;
							}
							?>
							<?php
							$post_object = get_post( $item );
							//phpcs:ignore
							setup_postdata( $GLOBALS['post'] =& $post_object );
							wc_get_template_part( 'content', 'product' );
							?>
							<?php
							++$flag;
						endforeach;
						?>
					</ul>
				</div>
			</div>
			<?php
		} else {
			woocommerce_cross_sell_display();
		}
	}
}

new DS_Cart();
