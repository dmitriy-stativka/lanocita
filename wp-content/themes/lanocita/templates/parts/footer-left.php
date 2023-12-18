<div class="footer-left">
		<?php $footerImage = get_field( 'footer_image', 'options' ) ?: THEME_URL . '/assets/_src/images/logo.svg'; //phpcs:ignore
        if ( ! empty( $footerImage ) ) : ?>
            <img src="<?php echo esc_url( $footerImage ); ?>" class="footer-img" alt="<?php bloginfo( 'name' ); ?>" />
		<?php endif; ?>
</div>
