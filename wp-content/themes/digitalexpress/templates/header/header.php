<?php get_template_part( 'templates/header/header', 'top' ); ?>
<?php get_template_part( 'templates/header/header', 'main' ); ?>
<?php get_template_part( 'templates/header/header', 'mobile' ); ?>
<?php get_template_part( 'templates/header/header', 'bottom' ); ?>

<?php
if ( class_exists( 'woocommerce' ) ) {
	get_template_part( 'woocommerce/header/cart-popup' );
}
