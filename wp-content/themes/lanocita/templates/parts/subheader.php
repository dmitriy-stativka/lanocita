<?php
/**
 * Subheader Template
 *
 * @package DS_Theme
 */

if ( is_category() ) {
	$queried_term = get_queried_object();
	$block_title  = get_field( 'title', $queried_term );
	$subtitle     = get_field( 'subtitle', $queried_term );
	$background   = get_field( 'background', $queried_term );
} else {
	$page_id     = ( is_home() ) ? get_option( 'page_for_posts' ) : get_the_ID();
	$block_title = get_field( 'title', $page_id );
	$subtitle    = get_field( 'subtitle', $page_id );
	$background  = get_field( 'background', $page_id );
}

if ( $background ) {
	$background = "style='background-image: url({$background});'";
}

if ( $block_title || $subtitle ) : ?>

	<div class="m-banner m-banner--small header-lap has-overlay colors-inverted">
		<div class="m-banner__media" <?php echo $background; // phpcs:ignore ?>>
		<?php
			/*
				<picture class="m-banner__picture">
				<source media="(min-width: 1500px)" srcset="https://placehold.co/1920x450">
				<source media="(min-width: 1024px)" srcset="https://placehold.co/1200x350">
				<source media="(min-width: 768px)" srcset="https://placehold.co/1024x400">
				<source media="(min-width: 300px)" srcset="https://placehold.co/560x200">
				<img src="https://placehold.co/1920x450" alt="" />
				</picture>
			*/
		?>
		</div>
		<div class="m-banner__container container">
			<div class="l-banner text-center">
				<div class="c-heading -h1">
					<?php if ( $block_title ) : ?>
						<h1 class="c-heading__title"><?php echo esc_html( $block_title ); ?></h1>
					<?php endif; ?>

					<?php if ( $subtitle ) : ?>
						<div class="c-heading__sub"><?php echo esc_html( $subtitle ); ?></div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	<?php
endif;
