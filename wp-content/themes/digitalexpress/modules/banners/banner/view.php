<?php
/**
 * Image Rotation Main Template.
 *
 * @var array $block The block settings. Most used ['className'],['id'],['anchor']
 * @var object $moduleConfig ->get_styles(), ->data_attributes, ->container, ->container_width.
 */
// phpcs:ignoreFile

$args = array(
	'layout_gap_top'           => get_field( 'layout_settings_top_layout_gap' ) ?: false,
	'layout_gap_top_custom'    => get_field( 'layout_settings_top_layout_custom_gap' ) ?: false,
	'layout_gap_bottom'        => get_field( 'layout_settings_bottom_layout_gap' ) ?: false,
	'layout_gap_bottom_custom' => get_field( 'layout_settings_bottom_layout_custom_gap' ) ?: false,
);

$additional_class = '';
if ( $moduleConfig->layout_settings_screen_height == 'custom' && ! empty( $moduleConfig->layout_settings_custom_height['height'] ) ) {
	$moduleConfig->set_style( '--bannerHeight', "{$moduleConfig->layout_settings_custom_height['height']}{$moduleConfig->layout_settings_custom_height['unit']}" );
}

if ( (int) $moduleConfig->overlay_opacity !== 0 ) {
	$moduleConfig->set_style( '--overlayOpacity', "{$moduleConfig->overlay_opacity}%" );
	$additional_class .= ' has-overlay';
}

if ( (int) $moduleConfig->layout_settings_columns_ratio !== 0 ) {
	$moduleConfig->set_style( '--columns-ratio', "{$moduleConfig->layout_settings_columns_ratio}%" );
}

$columns_order_class = $moduleConfig->layout_settings_columns_order !== false ? " order-{$moduleConfig->layout_settings_columns_order}" : ' order-default';
$additional_class   .= $columns_order_class;

if ( $moduleConfig->layout_settings_vertical_columns !== false ) {
	$additional_class .= ' is-vertical';
}

$className = '';
$styles    = '';
if ( ! empty( $args['layout_gap_top'] ) ) {
	$className .= " {$args['layout_gap_top']}";

	if ( $args['layout_gap_top'] === 'l-gt-custom' && ! empty( $args['layout_gap_top_custom'] ) ) {
		$styles .= "--l-gt-padding: {$args['layout_gap_top_custom']};";
	}
}

if ( ! empty( $args['layout_gap_bottom'] ) ) {
	$className .= " {$args['layout_gap_bottom']}";

	if ( $args['layout_gap_bottom'] === 'l-gb-custom' && ! empty( $args['layout_gap_bottom_custom'] ) ) {
		$styles .= "--l-gb-padding: {$args['layout_gap_bottom_custom']};";
	}
}

?>
<div class="m-banner <?php echo "m-banner--{$moduleConfig->layout_settings_screen_height}"; ?><?php echo esc_attr( $block['className'] . $additional_class ); ?>" <?php echo $moduleConfig->data_attributes; ?>>

	<?php get_template_part( 'templates/components/anchor', null, array( 'anchor_id' => $block['anchor'] ?? '' ) ); ?>

	<?php get_template_part( 'templates/components/decorations/module-decorations' ); ?>

	<div class="m-banner__container <?php echo $moduleConfig->container; ?>" <?php echo $moduleConfig->get_styles(); ?>>

		<?php echo $moduleConfig->backgroundMediaHTML; ?>

		<div class="m-banner__inner container <?php echo 'flex-' . $moduleConfig->content_position; ?> <?php echo 'style-' . $moduleConfig->content_style; ?>">

			<div class="l-banner <?php echo esc_attr( $className ); ?>" style="<?php echo $styles; ?>">

				<?php get_template_part( 'templates/components-shared/blocks/block-banner-inner' ); ?>

			</div>

			<?php get_template_part( 'templates/components/nav/scroll-down' ); ?>
		</div>
	</div>

</div>
