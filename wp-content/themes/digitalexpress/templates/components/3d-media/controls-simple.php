<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'spinner_settings' => get_field( 'module_image_spinner_settings' ),
		'spinner_ctrls'    => get_field( 'module_image_spinner_controls' ),
	)
);

/**
 * Due to an issue with hotspots with zoom/fullscr,
 * these controls are disabled when hotspots are in use.
 */
?>
<div class="image-spinner__controls">
	<?php if ( ! empty( $args['spinner_ctrls']['data_playback'] ) ) : ?>
        <button class="js-image-spinner-play image-spinner__bttn" title="Toggle Animation">
			<?php
			echo get_svg(
				array(
					'icon'  => 'spinner-play',
					'class' => 'spinner-ctrl-play',
				)
			);
			?>
			<?php
			echo get_svg(
				array(
					'icon'  => 'spinner-pause',
					'class' => 'spinner-ctrl-pause',
				)
			);
			?>
        </button>
	<?php endif; ?>

	<?php if ( ! empty( $args['spinner_ctrls']['data_frames-nav'] ) ) : ?>
        <button class="js-image-spinner-prev image-spinner__bttn" title="Previous Frame">
			<?php
			echo get_svg(
				array(
					'icon' => 'spinner-prev',
				)
			);
			?>
        </button>

        <button class="js-image-spinner-next image-spinner__bttn" title="Next Frame">
			<?php
			echo get_svg(
				array(
					'icon' => 'spinner-next',
				)
			);
			?>
        </button>
	<?php endif; ?>

	<?php if ( empty( $args['spinner_settings']['data_has-hotspots'] ) && ! empty( $args['spinner_ctrls']['data_zoom'] ) ) : ?>
        <button class="js-image-spinner-zoom image-spinner__bttn" title="Toggle Zoom">
			<?php
			echo get_svg(
				array(
					'icon'  => 'spinner-zoomin',
					'class' => 'spinner-ctrl-zoomin',
				)
			);
			?>
			<?php
			echo get_svg(
				array(
					'icon'  => 'spinner-zoomout',
					'class' => 'spinner-ctrl-zoomout',
				)
			);
			?>
        </button>
	<?php endif; ?>

	<?php if ( empty( $args['spinner_settings']['data_has-hotspots'] ) && ! empty( $args['spinner_ctrls']['data_fullscr'] ) ) : ?>
        <button class="js-image-spinner-fullscr image-spinner__bttn" title="Full Screen">
			<?php
			echo get_svg(
				array(
					'icon' => 'spinner-fullscreen',
				)
			);
			?>
        </button>
	<?php endif; ?>
</div>
