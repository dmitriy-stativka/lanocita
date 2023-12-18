<?php
/**
 * E-Commerce Nav Template
 *
 * @package DS_Theme
 */

?>
<div class="site-header__widget site-header__account">
	<?php if ( is_user_logged_in() ) : ?>
		<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) ); ?>" class="mobile-header" aria-label="<?php esc_html_e( 'My Account', 'dstheme' ); ?>">
			<svg class="icon" width="30" height="30">
				<use xlink:href="#wc-user-circle"/>
			</svg>
		</a>
	<?php else : ?>
		<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) ); ?>" class="mobile-header" aria-label="<?php esc_html_e( 'Log In', 'dstheme' ); ?>">
			<svg class="icon" width="30" height="30">
				<use xlink:href="#wc-user-circle"/>
			</svg>
		</a>
	<?php endif; ?>

	<div class="site-header__account-cart">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="ds-cart-open<?php echo ! is_checkout() && ! is_cart() ? ' js-toggle-cart' : ''; ?>" aria-label="<?php esc_html_e( 'Open Cart', 'dstheme' ); ?>">
			<div class="site-header__account__icon">
				<svg class="icon" width="30" height="30">
					<use xlink:href="#wc-shopping-cart"/>
				</svg>
				<span class="cart-value" <?php echo WC()->cart->get_cart_contents_count() === 0 ? 'style="display:none;"' : ''; ?>>
					<?php echo WC()->cart->get_cart_contents_count() >= 100 ? '99' : WC()->cart->get_cart_contents_count(); //phpcs:ignore ?>
				</span>
			</div>
			<div class="ds-cart__notify js-cart-notify">
				<span><?php esc_html_e( 'Item added to the cart', 'dstheme' ); ?></span>
			</div>
		</a>
	</div>
</div>
