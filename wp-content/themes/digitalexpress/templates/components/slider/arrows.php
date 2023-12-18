<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args            = wp_parse_args(
	$args,
	array(
		'class'           => '',
		'class_arrows'    => 'm-slider__arrows',
		'arrow_type'      => get_field( 'module_slider_settings_arrow_type' ),
		'arrows_bg_color' => get_field( 'slider_arrows_component_settings_bg_color' ),
		'arrows_shape'    => get_field( 'slider_arrows_component_settings_shape' ),
	)
);
$classNameArrows = '';
if ( ! empty( $args['class_arrows'] ) ) {
	$classNameArrows .= "{$args['class_arrows']} ";
}

$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}

if ( ! empty( $args['arrows_shape'] ) ) {
	$className .= " is-{$args['arrows_shape']}";
}

$styles = '';
if ( ! empty( $args['arrows_bg_color'] ) ) {
	$styles .= " --arrows-bg: {$args['arrows_bg_color']};";
}
?>
<div class="m-slider__nav<?php echo esc_attr( $className ); ?>" style="<?php echo $styles; ?>">
    <div class="<?php echo esc_attr( $classNameArrows ); ?>-prev swiper-button-prev">
        <svg class="arrow-icon" height="30px" width="30px">
            <use xlink:href="#<?php echo $args['arrow_type']; ?>"></use>
        </svg>
    </div>
    <div class="<?php echo esc_attr( $classNameArrows ); ?>-next swiper-button-next">
        <svg class="arrow-icon" height="30px" width="30px">
            <use xlink:href="#<?php echo $args['arrow_type']; ?>"></use>
        </svg>
    </div>
</div>
