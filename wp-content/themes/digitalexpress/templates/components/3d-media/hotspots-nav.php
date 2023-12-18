<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'spinner_settings' => get_field( 'module_image_spinner_settings' ),
		'spinner_hotspots' => get_field( 'module_image_spinner_hotspots' ) ?: array(),
		'spinner_ctrls'    => get_field( 'module_image_spinner_controls' ),
	)
);

if ( empty( $args['spinner_settings']['data_has-hotspots'] ) || empty( $args['spinner_hotspots'] ) ) {
	return;
}

if ( empty( $args['spinner_ctrls']['data_hotspots-nav'] ) ) {
	return;
}
?>
<div class="hotspots-nav">
    <button class="js-image-spinner-hotspot-prev image-spinner__bttn" title="Previous Hotspot">
		<?php
		echo get_svg(
			array(
				'icon' => 'spinner-prev',
			)
		);
		?>
    </button>

    <button class="js-image-spinner-hotspot-next image-spinner__bttn" title="Next Hotspot">
		<?php
		echo get_svg(
			array(
				'icon' => 'spinner-next',
			)
		);
		?>
    </button>
</div>
