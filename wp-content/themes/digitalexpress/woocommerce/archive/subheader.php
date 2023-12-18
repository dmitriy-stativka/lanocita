<?php

if ( is_shop() ) {
	$obj_title = get_the_title( get_option( 'woocommerce_shop_page_id' ) );
} else {
	$obj        = get_queried_object();
	// $title       = $obj->name;
	$description = $obj->description;
}

$background = get_field( 'shop_background', 'options' );

if ( $obj_title || ! empty( $description ) ) : ?>

	<div class="shop_subheader" 
	<?php
	if ( ! empty( $background ) ) :
		?>
style="background-image: url(<?php echo esc_url( $background ); ?>)"<?php endif; ?>>
		<?php if ( $obj_title ) : ?>
			<div class="c-heading -h1">
				<h1 class="c-heading__title"><?php echo esc_html( $obj_title ); ?></h1>
			</div>
		<?php endif; ?>

		<?php if ( ! empty( $description ) ) : ?>
			<div><?php echo wp_kses_post( $description ); ?></div>
		<?php endif; ?>
	</div>

<?php endif; ?>
