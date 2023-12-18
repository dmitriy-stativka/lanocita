<?php
/**
 * E-Commerce Nav Template
 *
 * @package DS_Theme
 */

?>
<div class="site-header__widget site-header__account">
	<?php if ( class_exists( 'WooCommerce' ) ) : ?>
		<?php if ( 'enable' === get_field( 'cart_link', 'options' ) ) : ?>

			<div class="site-header__account-cart">
				<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="ds-cart-open<?php echo ! is_checkout() && ! is_cart() ? ' js-toggle-cart' : ''; ?>">
					<div class="site-header__account__icon">
						<svg class="icon" width="30" height="30">
							<use xlink:href="#wc-shopping-cart"/>
						</svg>
						<span class="cart-value" <?php echo WC()->cart->get_cart_contents_count() === 0 ? 'style="display:none;"' : ''; ?>>
							<?php echo WC()->cart->get_cart_contents_count() >= 100 ? '99' : WC()->cart->get_cart_contents_count(); //phpcs:ignore?>
						</span>
					</div>

					<span class="site-header__account-text">
						<?php
						//phpcs:ignore
						if ( $cart_icon_link_title = get_field( 'cart_icon_link_title', 'options' ) ) {
							echo esc_html( $cart_icon_link_title );
						}
						?>
					</span>

					<div class="ds-cart__notify js-cart-notify">
						<span><?php esc_html_e( 'Item added to the cart', 'dstheme' ); ?></span>
					</div>
				</a>
			</div>
		<?php endif; ?>

		<?php if ( 'enable' === get_field( 'my_account_link', 'options' ) ) : ?>

			<?php if ( is_user_logged_in() ) : ?>
				<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) ); ?>" class="desktop-header">
					<svg class="icon" width="30" height="30">
						<use xlink:href="#wc-user-circle"/>
					</svg>
					<?php //phpcs:ignore
					if ( $account_icon_link_title = get_field( 'account_icon_link_title', 'options' ) ) : ?>
						<p class="site-header__account-text">
							<?php echo esc_html( $account_icon_link_title ); ?>
						</p>
					<?php endif; ?>
				</a>

				<a href="<?php echo esc_url( wc_logout_url() ); ?>" class="desktop-header">
					<svg class="icon" width="30" height="30">
						<use xlink:href="#wc-sign-in-alt"/>
					</svg>
					<?php //phpcs:ignore
					if ( $logout_icon_link_title = get_field( 'logout_icon_link_title', 'options' ) ) : ?>
						<p class="site-header__account-text">
							<?php echo esc_html( $logout_icon_link_title ); ?>
						</p>
					<?php endif; ?>
				</a>
			<?php else : ?>

				<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) ); ?>" class="desktop-header">
					<svg class="icon" width="30" height="30">
						<use xlink:href="#wc-user-circle"/>
					</svg>
					<?php //phpcs:ignore
					if ( $login_icon_link_title = get_field( 'login_icon_link_title', 'options' ) ) : ?>
						<p class="site-header__account-text">
							<?php echo esc_html( $login_icon_link_title ); ?>
						</p>
					<?php endif; ?>
				</a>

				<?php if ( get_option( 'woocommerce_enable_myaccount_registration' ) == 'yes' ) : ?>
					<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) ); ?>"
						class="desktop-header">
						<svg class="icon" width="30" height="30">
							<use xlink:href="#wc-sign-in-alt"/>
						</svg>
						<?php //phpcs:ignore
						if ( $register_icon_link_title = get_field( 'register_icon_link_title', 'options' ) ) : ?>
							<p class="site-header__account-text">
								<?php echo esc_html( $register_icon_link_title ); ?>
							</p>
						<?php endif; ?>
					</a>
				<?php endif; ?>
			<?php endif; ?>
		<?php endif; ?>
	<?php endif; ?>
</div>
