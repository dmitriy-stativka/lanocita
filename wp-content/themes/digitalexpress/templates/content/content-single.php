<?php
/**
 * Template responsible for content single
 *
 * @package DS_Theme
 */

$args = wp_parse_args(
	$args,
	array(
		'taxonomy' => '',
	)
);

$single_post_header_style = get_field( 'single_post_header_style', 'options' );
$header_style             = $single_post_header_style ? $single_post_header_style : 'style-1';

$terms_list = '';
if ( taxonomy_exists( $args['taxonomy'] ) ) {
	$terms_list = get_the_term_list( get_the_ID(), $args['taxonomy'], '', ', ' );
}
?>

<?php get_template_part( 'templates/parts/breadcrumbs' ); ?>

<div class="inner-frame">

	<div class="content-single dark-mode__wrap <?php echo esc_attr( $header_style ); ?>">

		<?php if ( shortcode_exists( 'addtoany' ) ) : ?>
			<div class="addtoany_share_save_container addtoany_content">
				<?php echo do_shortcode( '[addtoany]' ); ?>
			</div>
		<?php endif; ?>

		<div class="dark-mode">
			<span class="dark-mode__label"><?php esc_html_e( 'Dark Mode', 'dstheme' ); ?></span>
			<button type="button" class="dark-mode__toggler js-dark-mode" data-toggle="button" aria-pressed="false" autocomplete="off">
				<span class="dark-mode__handler"></span>
			</button>
		</div>

		<article id="post-<?php the_ID(); ?>" <?php post_class( 'is-wysiwyg' ); ?> >

			<?php get_template_part( 'templates/parts/single-post-header', $header_style, array( 'terms_list' => $terms_list ) ); ?>

			<?php the_content(); ?>

			<div class="content-single__info">
				<?php if ( ! empty( $terms_list ) ) : ?>
					<div class="content-single__tags">
						<label><?php esc_html_e( 'Category:', 'dstheme' ); ?></label>
						<span class="content-single__tag"><?php echo $terms_list; // phpcs:ignore?></span>
					</div>
				<?php endif; ?>

				<div class="content-single__date">
					<label><?php esc_html_e( 'Published On:', 'dstheme' ); ?></label>
					<span class="content-single__num"><?php echo date( 'F d, Y', strtotime( get_the_date() ) ); // phpcs:ignore?></span>
				</div>
			</div>

		</article>

	</div>
</div>
