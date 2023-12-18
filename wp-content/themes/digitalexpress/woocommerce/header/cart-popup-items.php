<div class="ds-cart__product-list">
	<?php foreach ( WC()->cart->cart_contents as $cart_item_key => $cart_item ) :
		$_product   = wc_get_product( ! empty( $cart_item['variation_id'] ) ? $cart_item['variation_id'] : $cart_item['product_id'] );
		$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

		if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) :
			$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
			?>
			<div class="ds-cart__product">
				<div class="ds-cart__product-image">
					<?php
					$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );

					if ( ! $product_permalink ) {
						echo wp_kses_post( $thumbnail ); // PHPCS: XSS ok.
					} else {
						printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), wp_kses_post( $thumbnail ) ); // PHPCS: XSS ok.
					}
					?>
				</div>
				<div class="ds-cart__product-content">
					<div class="ds-cart__product-info">
						<a href="<?php echo esc_url( get_permalink( $cart_item['product_id'] ) ); ?>"><b><?php echo esc_html( get_the_title( $cart_item['product_id'] ) ); ?></b></a>
						<?php if ( $_product->is_type( 'variation' ) ) : ?>
							<p class="ds-cart__product-info-attr"><?php echo wp_kses_post( $_product->get_attribute_summary() ); ?></p>
						<?php endif; ?>
					</div>

					<div class="ds-cart__product-total">
						<?php
						echo wp_kses_post( apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key ) ); // PHPCS: XSS ok.
						?>
					</div>

					<div class="ds-cart__product-edit">
						<div class="ds-cart__product-edit-quantity quantity">
<!--                            <a href="" class="ds-qty-btn ds-btn-sub">-</a>-->

							<?php
							echo wp_kses_post(
								woocommerce_quantity_input(
									array(
										'min_value'   => 0,
										'max_value'   => $_product->get_max_purchase_quantity(),
										'input_value' => $cart_item['quantity'],
										'input_name'  => "cart[{$cart_item['key']}][qty]",
									),
									$_product,
									false
								)
							);
							?>

<!--                            <a href="" class="ds-qty-btn ds-btn-inc">+</a>-->
						</div>
					</div>
					<div class="ds-cart__product-edit-delete">
						<a title="<?php esc_attr_e( 'Remove', 'dstheme' ); ?>" href="javascript:;"
							data-remove="<?php echo esc_attr( wc_get_cart_remove_url( $cart_item['key'] ) ); ?>"
							class="remove-item remove_from_cart_button"><?php esc_html_e( 'Remove', 'dstheme' ); ?></a>
					</div>
				</div>
			</div>
		<?php endif; ?>
	<?php endforeach; ?>
</div>

<div class="ds-cart__product-subtotal">
	<div class="ds-cart__product-subtotal-text"><?php esc_html_e( 'Total:', 'dstheme' ); ?></div>
	<div class="ds-cart__product-subtotal-sum"><?php echo esc_html( get_woocommerce_currency_symbol() ); ?><?php echo esc_html( WC()->cart->cart_contents_total ); ?></div>
</div>
