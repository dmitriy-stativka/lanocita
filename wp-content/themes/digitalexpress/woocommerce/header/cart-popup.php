<div class="ds-cart cart-popup js-cart-popup" aria-expanded="false">
	<?php if ( WC()->cart->get_cart_contents_count() > 0 ) : ?>
		<?php
		$cart_content = get_field( 'cart_content', 'options' );
		?>

        <div class="ds-cart__header">
            <div class="ds-cart__header-bubble">
                <h3><?php esc_html_e( 'Your cart', 'dstheme' ); ?></h3>
				<?php

				$cart_icon_link_title = get_sub_field( 'cart_icon_link_title', 'options' );
				if ( $cart_icon_link_title ) {
					echo wp_kses_post( $cart_icon_link_title );
				}
				?>
                <span class="cart-value">
					<?php echo WC()->cart->get_cart_contents_count() >= 100 ? '99' : esc_html( WC()->cart->get_cart_contents_count() ); ?>
				</span>
            </div>
            <a href="#" class="js-toggle-cart ds-cart__header-close">
				<?php echo get_svg( array( 'icon' => 'wc-close' ) ); ?>
            </a>
        </div>

		<?php if ( ! empty( $cart_content['free_shipping'] ) ) : ?>
            <div class="ds-cart__header-shipping">
				<?php echo get_svg( array( 'icon' => 'wc-shipping' ) ); ?>
                <span><?php echo esc_html( $cart_content['free_shipping'] ); ?></span>
            </div>
		<?php endif; ?>
		<?php get_template_part( 'woocommerce/header/cart-popup-items' ); ?>

        <div class="ds-cart__checkout mini-cart-checkout">
            <div class="ds-cart__checkout-proceed">
				<?php do_action( 'woocommerce_proceed_to_checkout' ); ?>
            </div>
            <div class="ds-cart__checkout-notice">
                <a href="<?php echo esc_url( wc_get_cart_url() ); ?>"><?php esc_html_e( 'See Full Cart', 'dstheme' ); ?></a>
            </div>
        </div>

		<?php $products = ( 'manual' == $cart_content['additional_products_type'] ) ? $cart_content['products'] : WC()->cart->get_cross_sells(); ?>
		<?php if ( ! empty( $products ) ) : ?>
            <div class="ds-cart__related">
				<?php if ( ! empty( $cart_content['additional_products_title'] ) ) : ?>
                    <div class="ds-cart__related-title">
						<?php echo esc_html( $cart_content['additional_products_title'] ); ?>
                    </div>
				<?php endif; ?>

                <ul class="ds-cart__related-products">
					<?php
					$flag = 0;
					foreach ( $products as $item ) :
						if ( 3 == $flag ) {
							break;
						}
						?>
						<?php
						$post_item = get_post( $item );
						setup_postdata( $post_item );
						wc_get_template_part( 'content', 'product' );
						?>
						<?php
						++ $flag;
					endforeach;
					wp_reset_postdata();
					?>
                </ul>
            </div>
		<?php endif; ?>

	<?php else : ?>
		<?php
		$empty_cart = get_field( 'empty_cart_content', 'options' );
		?>

        <div class="ds-cart__header">
            <a href="#" class="js-toggle-cart ds-cart__header-close">
				<?php echo get_svg( array( 'icon' => 'wc-close' ) ); ?>
            </a>
        </div>

        <div class="ds-cart__empty">
            <div class="ds-cart__empty-icon">
				<?php echo get_svg( array( 'icon' => 'wc-icon-cart-empty-bag' ) ); ?>
            </div>
			<?php if ( ! empty( $empty_cart['title'] ) ) : ?>
                <div class="ds-cart__empty-title">
					<?php echo esc_html( $empty_cart['title'] ); ?>
                </div>
			<?php endif; ?>
			<?php if ( ! empty( $empty_cart['subtitle'] ) ) : ?>
                <div class="ds-cart__empty-subtitle">
					<?php echo esc_html( $empty_cart['subtitle'] ); ?>
                </div>
			<?php endif; ?>
			<?php if ( ! empty( $empty_cart['link'] ) ) : ?>
                <div class="ds-cart__empty-link">
					<?php echo wp_kses_post( acf_link( $empty_cart['link'] ) ); ?>
					<?php echo get_svg( array( 'icon' => 'lib-icon-arrow1' ) ); ?>
                </div>
			<?php endif; ?>
        </div>

		<?php if ( ! empty( $empty_cart['image'] ) ) : ?>
            <div class="ds-cart__empty-image">
                <img src="<?php echo esc_url( $empty_cart['image']['url'] ); ?>" alt="<?php echo esc_attr( $empty_cart['image']['name'] ); ?>" class="lazy">
            </div>
		<?php endif; ?>
	<?php endif; ?>
</div>
