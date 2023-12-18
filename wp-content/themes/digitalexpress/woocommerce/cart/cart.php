<?php
/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.8.0
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="ds-cart-page">

    <div class="ds-cart-page__header">
		<?php do_action( 'woocommerce_before_cart' ); ?>
    </div>

    <div class="ds-cart-page__main">
        <form class="ds-cart-page__form woocommerce-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
			<?php do_action( 'woocommerce_before_cart_table' ); ?>

            <div class="ds-cart-page__form-table shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                <div class="thead">
                    <div class="tr">
                        <div class="th product-name"><?php esc_html_e( 'Product', 'dstheme' ); ?></div>
                        <div class="th product-name">&nbsp;</div>
                        <div class="th product-price"><?php esc_html_e( 'Price', 'dstheme' ); ?></div>
                        <div class="th product-quantity"><?php esc_html_e( 'Quantity', 'dstheme' ); ?></div>
                        <div class="th product-subtotal"><?php esc_html_e( 'Subtotal', 'dstheme' ); ?></div>
                        <div class="th product-remove"></div>
                    </div>
                </div>
                <div class="tbody">
					<?php do_action( 'woocommerce_before_cart_contents' ); ?>
					<?php
					foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
						$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
						$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

						if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
							$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
							?>
                            <div class="tr woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">

                                <div class="td product-thumbnail">
									<?php
									$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );

									if ( ! $product_permalink ) {
										echo wp_kses_post( $thumbnail ); // PHPCS: XSS ok.
									} else {
										printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), wp_kses_post( $thumbnail ) ); // PHPCS: XSS ok.
									}
									?>
                                </div>

                                <div class="td product-name" data-title="<?php esc_attr_e( 'Product', 'dstheme' ); ?>">
									<?php
									if ( ! $product_permalink ) {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;' );
									} else {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key ) );
									}

									do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );

									// Meta data.
									echo wp_kses_post( wc_get_formatted_cart_item_data( $cart_item ) ); // PHPCS: XSS ok.

									// Backorder notification.
									if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'dstheme' ) . '</p>', $product_id ) );
									}
									?>
                                </div>

                                <div class="td product-price" data-title="<?php esc_attr_e( 'Price', 'dstheme' ); ?>">
									<?php
									echo wp_kses_post( apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key ) ); // PHPCS: XSS ok.
									?>
                                </div>

                                <div class="td product-quantity" data-title="<?php esc_attr_e( 'Quantity', 'dstheme' ); ?>">
									<?php
									if ( $_product->is_sold_individually() ) {
										$product_quantity = sprintf( '1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key );
									} else {
										$product_quantity = woocommerce_quantity_input(
											array(
												'input_name'   => "cart[{$cart_item_key}][qty]",
												'input_value'  => $cart_item['quantity'],
												'max_value'    => $_product->get_max_purchase_quantity(),
												'min_value'    => '0',
												'product_name' => $_product->get_name(),
											),
											$_product,
											false
										);
									}

									echo wp_kses_post( apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item ) ); // PHPCS: XSS ok.
									?>
                                </div>

                                <div class="td product-subtotal" data-title="<?php esc_attr_e( 'Subtotal', 'dstheme' ); ?>">
									<?php
									echo wp_kses_post( apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ) ); // PHPCS: XSS ok.
									?>
                                </div>
                                <div class="td product-remove">
									<?php
									echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
										'woocommerce_cart_item_remove_link',
										sprintf(
											'<a href="%s" class="remove" aria-label="%s" data-product_id="%s" data-product_sku="%s">&times;</a>',
											esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
											esc_html__( 'Remove this item', 'dstheme' ),
											esc_attr( $product_id ),
											esc_attr( $_product->get_sku() )
										),
										$cart_item_key
									);
									?>
                                </div>
                            </div>
							<?php
						}
					}
					?>
                </div>
            </div>

			<?php do_action( 'woocommerce_cart_contents' ); ?>

            <div class="ds-cart-page__form-actions actions">
				<?php if ( wc_coupons_enabled() ) { ?>
                    <div class="coupon">
                        <label for="coupon_code"><?php esc_html_e( 'Coupon:', 'dstheme' ); ?></label>
                        <input type="text" name="coupon_code" class="input-text" id="coupon_code" value=""
                               placeholder="<?php esc_attr_e( 'Coupon code', 'dstheme' ); ?>"/>
                        <button type="submit" class="c-btn -primary button" name="apply_coupon"
                                value="<?php esc_attr_e( 'Apply', 'dstheme' ); ?>">
							<?php esc_attr_e( 'Apply', 'dstheme' ); ?>
                        </button>
						<?php do_action( 'woocommerce_cart_coupon' ); ?>
                    </div>
				<?php } ?>
                <div class="continue-shopping">
					<?php
					echo wp_kses_post(
						acf_button(
							array(
								'url'   => get_permalink( wc_get_page_id( 'shop' ) ),
								'title' => __( 'Continue Shopping', 'dstheme' ),
							)
						)
					);
					?>
                    <button type="submit" class="button" name="update_cart" value="
					<?php esc_attr_e( 'Update cart', 'dstheme' ); ?>" style="display: none">
						<?php esc_html_e( 'Update cart', 'dstheme' ); ?>
                    </button>
                </div>
				<?php do_action( 'woocommerce_cart_actions' ); ?>
				<?php wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); ?>

				<?php do_action( 'woocommerce_after_cart_contents' ); ?>
            </div>
			<?php do_action( 'woocommerce_after_cart_table' ); ?>
        </form>

		<?php do_action( 'woocommerce_before_cart_collaterals' ); ?>

        <div class="ds-cart-page__collaterals">
            <div class="cart-collaterals">
                <div class="cart-collaterals__wrapper">
                    <div class="cart-collaterals__header">
						<?php echo get_svg( array( 'icon' => 'wc-shipping' ) ); ?>

						<?php $cart_content = get_field( 'cart_content', 'options' ); ?>
						<?php if ( ! empty( $cart_content['free_shipping'] ) ) : ?>
                            <div><?php echo wp_kses_post( $cart_content['free_shipping'] ); ?></div>
						<?php endif; ?>
                    </div>
					<?php
					/**
					 * Cart collaterals hook.
					 *
					 * @hooked woocommerce_cross_sell_display
					 * @hooked woocommerce_cart_totals - 10
					 */
					do_action( 'woocommerce_cart_collaterals' );
					?>
                </div>

				<?php $cart_page = get_field( 'cart_page', 'options' ); ?>
				<?php if ( ! empty( $cart_page['payment_methods'] ) && ! empty( $cart_page['payment_methods_image'] ) ) : ?>
                    <div class="cart-collaterals__footer">
                        <div class="cart-collaterals__footer-title">
							<?php echo wp_kses_post( $cart_page['payment_methods'] ); ?>
                        </div>
                        <div class="cart-collaterals__footer-img"
                             style="background-image: url(<?php echo esc_url( $cart_page['payment_methods_image']['url'] ); ?>)"></div>
                    </div>
				<?php endif; ?>
            </div>
        </div>
    </div>
	<?php do_action( 'woocommerce_after_cart' ); ?>
</div>
