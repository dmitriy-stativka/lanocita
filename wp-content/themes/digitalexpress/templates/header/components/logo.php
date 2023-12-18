<?php
/**
 * Header Logo
 *
 * @package DS_Theme
 */

$logo = get_field( 'header_logo', 'options' ); ?>

<div class="site-header__widget">
	<?php if ( $logo ) : ?>
		<a href="<?php echo esc_url( home_url() ); ?>" class="site-header__logo">
			<?php if ( ds_is_svg( $logo['url'] ) ) : ?>

				<?php echo ds_get_embedded_image( $logo['ID'], $logo['url'] ); //phpcs:ignore ?>

			<?php else : ?>
				<?php //phpcs:ignore ?>
				<img width="200" src="<?php echo $logo['url']; ?>" alt="<?php echo get_bloginfo( 'name' ); ?>"/>

			<?php endif; ?>
		</a>
	<?php endif; ?>
</div>
