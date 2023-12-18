<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'image'                    => get_sub_field( 'image' ),
		'description'              => get_sub_field( 'description' ),

		'component_gap_vertical'   => get_field( 'component_settings_inner_gap_vertical' ) ?: 0,
		'component_gap_horizontal' => get_field( 'component_settings_inner_gap_horizontal' ) ?: 0,

		'has_background'           => get_field( 'component_settings_has_background' ) ?: false,
		'component_background'     => get_field( 'component_settings_component_background' ),

		'has_shadow'               => get_field( 'component_settings_has_shadow' ) ?: false,

		'has_hover'                => get_field( 'component_settings_has_hover' ) ?: false,
		'hover_effect'             => get_field( 'component_settings_hover_effect' ) ?: 'v1',

		'border_radius'            => (int) get_field( 'component_settings_border_radius' ),

		'has_border'               => get_field( 'component_settings_has_border' ) ?: false,
		'border_width'             => get_field( 'component_settings_border_width' ),
		'border_color'             => get_field( 'component_settings_border_color' ),

		'class'                    => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= $args['class'];
}

$componentStyles = "--c-block-gap-vertical:{$args['component_gap_vertical']}px;--c-block-gap-horizontal:{$args['component_gap_horizontal']}px;--c-block-radius:{$args['border_radius']}px;";

if ( $args['has_background'] ) {
	$className .= ' has-background';

	if ( $args['component_background'] ) {
		$componentStyles .= "--c-block-bg:{$args['component_background']};";
	}
}

if ( $args['has_shadow'] ) {
	$className .= ' has-shadow';
}

if ( $args['has_hover'] ) {
	$className .= " has-hover hover-{$args['hover_effect']}";
}

if ( $args['has_border'] ) {
	$className .= ' has-border';

	if ( ! empty( $args['border_width'] ) ) {
		$componentStyles .= "--c-block-border-width:{$args['border_width']}px;";
	}

	if ( ! empty( $args['border_color'] ) ) {
		$componentStyles .= "--c-block-border-color:{$args['border_color']};";
	}
}
?>

<?php if ( ! empty( $args['image'] ) && is_array( $args['image'] ) ) : ?>

    <div class="c-gallery-card <?php echo esc_attr( $className ); ?>" style="<?php echo esc_attr( $componentStyles ); ?>">

        <a href="<?php echo esc_url( $args['image']['url'] ); ?>" title="<?php echo esc_attr( $args['description'] ); ?>">

			<?php get_template_part( 'templates/components/images/image-v1', null, array( 'image' => $args['image'] ) ); ?>
        </a>

    </div>

<?php
endif;
