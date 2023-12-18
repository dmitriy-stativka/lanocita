<?php
/**
 * Custom description tab
 *
 * @var array $args
 */

defined( 'ABSPATH' ) || exit;

global $post;

$args = wp_parse_args(
	$args,
	array(
		'description' => get_field( 'description' ),
	)
);

if ( empty( $args['description'] ) ) {
	return;
}

?>

<div class="pdp-list">
	<?php foreach ( $args['description'] as $item ) : ?>
		<div class="pdp-list__item <?php echo ! empty( $item['image'] ) ? 'image_position_' . esc_attr( $item['image_position'] ) : 'no_image'; ?> ">

			<?php if ( ! empty( $item['image'] ) ) : ?>
				<div class="pdp-list__img">
					<img src="<?php echo esc_url( $item['image']['url'] ); ?>" alt="<?php echo esc_attr( $item['image']['name'] ); ?>" loading="lazy">
				</div>
			<?php endif; ?>

			<div class="pdp-list__content">
				<?php if ( ! empty( $item['title'] ) ) : ?>
					<h3 class="pdp-list__title"><?php echo esc_html( $item['title'] ); ?></h3>
				<?php endif; ?>

				<?php if ( ! empty( $item['description'] ) ) : ?>
					<div class="pdp-list__full is_wysiwyg"><?php echo wp_kses_post( apply_filters( 'the_content', $item['description'] ) ); ?></div>
				<?php endif; ?>
			</div>
		</div>
	<?php endforeach; ?>
</div>

