<div class="navbar-mobile js-m-burger-wrap">
	<?php get_template_part( 'templates/header/components/logo' ); ?>
	<?php if ( ! empty( get_field( 'mobile_burger_content', 'options' )['header_main_content'] ) ) : ?>
		<button type="button" class="nav-main__btn js-m-burger-toggle -mobile" aria-expanded="false" aria-label="Menu" aria-controls="mainnav">
			<span class="burger-icon"><span></span></span>
		</button>
		<div class="navbar-mobile__inner">
			<?php
			while ( have_rows( 'mobile_burger_content', 'options' ) ) :
				the_row();
				?>
				<?php
				while ( have_rows( 'header_main_content', 'options' ) ) :
					the_row();
					?>
					<?php
					if ( get_row_layout() ) {
						get_template_part( 'templates/header/components/' . get_row_layout() );
					}
					?>
				<?php endwhile; ?>
			<?php endwhile; ?>
		</div>
	<?php endif; ?>
	<?php
	if ( class_exists( 'woocommerce' ) ) {
		get_template_part( 'templates/header/components/ecommerce-nav-mobile' );
	}
	?>
</div>
