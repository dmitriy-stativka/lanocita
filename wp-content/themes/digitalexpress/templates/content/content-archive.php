<?php
/**
 * Template for content archive
 *
 * @package DS_Theme
 */

$args = wp_parse_args(
	$args,
	array(
		'taxonomy' => '',
	)
);
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'blog-grid__item' ); ?>>
	<div class="c-block">
		<div class="c-block__media">
			<a href="<?php the_permalink(); ?>" class="c-block__media-link">
				<img src="<?php echo esc_url( ds_get_the_post_thumbnail_url() ); ?>" alt="<?php esc_attr( the_title() ); ?>">
			</a>
		</div>
		<div class="c-block__body">
			<?php if ( taxonomy_exists( $args['taxonomy'] ) ) : ?>
				<?php
				$terms = wp_get_object_terms( get_the_ID(), $args['taxonomy'], array( 'fields' => 'all' ) );
				if ( ! empty( $terms ) ) :
					?>
					<div class="c-block__cats">
						<?php
						$terms_size = count( $terms );
						foreach ( $terms as $key => $_term ) :
							?>
							<a class="c-block__tag" href="<?php echo esc_url( get_term_link( $_term->term_id, $args['taxonomy'] ) ); ?>">
								<?php echo $_term->name; ?><?php echo ( $key + 1 ) < $terms_size ? ', ' : ''; //phpcs:ignore?>
							</a>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			<?php endif; ?>

			<?php if ( get_the_title() ) : ?>
				<h4 class="c-block__title">
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				</h4>
			<?php endif; ?>
		</div>
	</div>
</article>
