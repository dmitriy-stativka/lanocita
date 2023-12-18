<?php
/**
 * Image Rotation Main Template.
 *
 * @var array $block The block settings. Most used ['className'],['id'],['anchor']
 * @var object $moduleConfig ->get_styles(), ->data_attributes, ->container, ->container_width.
 */

// phpcs:ignoreFile

if ( (int) $moduleConfig->layout_settings_columns_ratio !== 0 ) {
	$moduleConfig->set_style( '--columns-ratio', "{$moduleConfig->layout_settings_columns_ratio}%" );
}

$args = array(
	'layout'        => get_field( 'layout_settings_layout_type' ) ?: 'v1',
	'text_position' => get_field( 'component_settings_horizontal_alignment' ) ?: 'center',
);
?>
<div class="m-block<?php echo esc_attr( $block['className'] ); ?> l-content-simple-1" <?php echo $moduleConfig->data_attributes; ?> <?php echo $moduleConfig->get_styles(); ?>>

	<?php get_template_part( 'templates/components/anchor', null, array( 'anchor_id' => $block['anchor'] ?? '' ) ); ?>

	<?php get_template_part( 'templates/components/decorations/module-decorations' ); ?>

	<div class="m-block__container <?php echo $moduleConfig->container; ?>" style="<?php echo $moduleConfig->container_width; ?>">

		<div class="l-heading <?php echo "text-{$args['text_position']}"; ?> <?php echo "l-heading-{$args['layout']}"; ?>">

			<?php get_template_part( 'templates/components/headings/heading' ); ?>

			<?php get_template_part( 'templates/components/cta-list', null, array( 'class' => '' ) ); ?>

		</div>

	</div>

	<?php get_template_part( 'templates/components/nav/scroll-down' ); ?>

</div>
