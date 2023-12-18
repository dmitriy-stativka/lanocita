<?php
/**
 * Template responsible for content single
 *
 * @package DS_Theme
 */

?>
<div class="container">
	<div class="content-single">
		<article id="post-<?php the_ID(); ?>" <?php post_class( '' ); ?> >

			<?php the_title( '<h1 class="c-heading -h1">', '</h1>' ); ?>

			<div class="post-info">
				<?php if ( ! empty( get_field( 'show_or_hide_post_author' ) ) && 'Show' === get_field( 'show_or_hide_post_author' ) ) : ?>
					<div class="post-info__author"><?php esc_html_e( 'Posted By:', 'dstheme' ); ?> <span class="detail-name"><?php the_author(); ?></span></div>
				<?php endif; ?>

				<div class="post-info__cat"><?php esc_html_e( 'Category:', 'dstheme' ); ?> <span class="detail-name"><?php echo get_the_category_list( ', ' ); // phpcs:ignore?></span></div>

				<div class="post-info__data"><?php esc_html_e( 'Last Updated:', 'dstheme' ); ?> <span class="detail-name"><?php esc_html_e( 'On ', 'dstheme' ); ?><?php echo date( 'F d, Y', strtotime( get_the_date() ) ); // phpcs:ignore  ?></span></div>
			</div>

			<div class="is-wysiwyg">
				<?php the_content(); ?>
			</div>

		</article>
	</div>
</div>
