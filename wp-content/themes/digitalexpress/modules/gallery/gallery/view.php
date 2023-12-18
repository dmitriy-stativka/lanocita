<?php
/**
 * Image Rotation Main Template.
 *
 * @var array $block The block settings. Most used ['className'],['id'],['anchor']
 * @var object $moduleConfig ->get_styles(), ->data_attributes, ->container, ->container_width.
 */
// phpcs:ignoreFile

$args = array(
	'columns'         => get_field( 'layout_settings_card_columns' ) ?: 3,
	'layout'          => get_field( 'layout_settings_layout_type' ) ?: 'v1',
	'gap_vertical'    => get_field( 'layout_settings_card_gap_vertical' ) ?: 0,
	'gap_horizontal'  => get_field( 'layout_settings_card_gap_horizontal' ) ?: 0,
	'gallery'         => get_field( 'gallery' ),
	'overlay_opacity' => get_field( 'gallery_settings_overlay_opacity' ) ?: 55,
	'overlay_color'   => get_field( 'gallery_settings_overlay_color' ) ?: '#000000',
);

$fb_options = 'showControlsText:false showOuterClose:true showClose:false group:gallery ';

if ( ! empty( $args['overlay_opacity'] ) ) {
	$fb_options .= "overlayOpacity:0.{$args['overlay_opacity']} ";
}

if ( ! empty( $args['overlay_color'] ) ) {
	$fb_options .= "overlayColor:{$args['overlay_color']} ";
}
?>
<div class="m-gallery<?php echo esc_attr( $block['className'] ); ?>" <?php echo $moduleConfig->data_attributes; ?> <?php echo $moduleConfig->get_styles(); ?>>

	<?php get_template_part( 'templates/components/anchor', null, array( 'anchor_id' => $block['anchor'] ?? '' ) ); ?>

	<?php get_template_part( 'templates/components/decorations/module-decorations' ); ?>

	<div class="m-gallery__container <?php echo $moduleConfig->container; ?>" style="<?php echo $moduleConfig->container_width; ?>">
		<div class="m-gallery__inner">

			<div class="l-gallery <?php echo "l-gallery-{$args['layout']}"; ?> floatbox" data-fb-options="<?php echo $fb_options; ?>" style="--l-block-col: <?php echo $args['columns']; ?>;--l-block-gap-vertical: <?php echo $args['gap_vertical']; ?>px;--l-block-gap-horizontal: <?php echo $args['gap_horizontal']; ?>px">

				<?php if ( ! empty( $args['gallery'] ) ) : ?>

					<?php foreach ( $args['gallery'] as $image ) : ?>

						<?php
						get_template_part(
							'templates/components-shared/images/gallery-card-v1',
							null,
							array(
								'image'       => $image,
								'description' => $image['caption'],
							)
						);
						?>

					<?php endforeach; ?>

				<?php endif; ?>

			</div>

		</div>
	</div>
</div>
