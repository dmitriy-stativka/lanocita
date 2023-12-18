<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'main_image'                        => get_field( 'mixed_gallery_main_image' ),
		'main_image_size'                   => get_field( 'mixed_gallery_main_image_size' ),
		'secondary_image'                   => get_field( 'mixed_gallery_secondary_image' ),
		'secondary_image_size'              => get_field( 'mixed_gallery_secondary_image_size' ),
		'main_content_type'                 => get_field( 'mixed_gallery_main_content_type' ) ?: 'image',
		'video_source'                      => get_field( 'mixed_gallery_main_video_video_source' ),
		'video'                             => get_field( 'mixed_gallery_main_video_video' ),
		'video_embed'                       => get_field( 'mixed_gallery_main_video_video_embed' ),
		'poster_image'                      => get_field( 'mixed_gallery_main_video_poster_image' ),
		'hide_controls'                     => get_field( 'mixed_gallery_main_video_hide_controls' ) ?: false,
		'autoplay'                          => get_field( 'mixed_gallery_main_video_autoplay' ) ?: false,
		'secondary_image_position'          => get_field( 'media_component_settings_secondary_image_position' ) ?: 'left',
		'secondary_image_vertical_position' => get_field( 'media_component_settings_secondary_image_vertical_position' ),
		'media_ratio'                       => get_field( 'media_component_settings_media_ratio' ),
		'main_media_position'               => get_field( 'media_component_settings_main_media_position' ),
		'main_media_vertical_position'      => get_field( 'media_component_settings_main_media_vertical_position' ),
		'class'                             => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}

if ( ! empty( $args['secondary_image_position'] ) ) {
	$className .= " front-h-{$args['secondary_image_position']}";
}

if ( ! empty( $args['secondary_image_vertical_position'] ) ) {
	$className .= " front-v-{$args['secondary_image_vertical_position']}";
}

if ( ! empty( $args['main_media_position'] ) ) {
	$className .= " main-h-{$args['main_media_position']}";
}

if ( ! empty( $args['main_media_vertical_position'] ) ) {
	$className .= " main-v-{$args['main_media_vertical_position']}";
}

if ( ! empty( $args['media_ratio'] ) ) {
	$className .= " r-{$args['media_ratio']}";
}

if ( ! empty( $args['main_content_type'] ) ) {
	$className .= " is-{$args['main_content_type']}";
}
?>
<?php if ( ! empty( $args['main_image'] ) || ! empty( $args['secondary_image'] ) || ! empty( $args['video'] ) || ! empty( $args['video_embed'] ) ) : ?>
	<div class="c-image<?php echo esc_attr( $className ); ?>">

		<?php if ( 'image' === $args['main_content_type'] && ! empty( $args['main_image'] ) ) : ?>
			<div class="c-image__media c-image__primary">
                <?php echo ds_generate_image( $args['main_image']['ID'], $args['main_image_size'], 'c-image__src' ); //phpcs:ignore?>
			</div>
		<?php elseif ( 'video' === $args['main_content_type'] ) : ?>
			<div class="c-video__media c-video__primary">
				<?php if ( 'internal' === $args['video_source'] ) : ?>
					<?php
					get_template_part(
						'templates/components/videos/video-box',
						null,
						array(
							'video'            => $args['video'],
							'poster_image'     => $args['poster_image'],
							'show_js_controls' => true,
							'hide_controls'    => $args['hide_controls'],
							'autoplay'         => $args['autoplay'],
						)
					);
					?>
				<?php else : ?>
					<?php
					get_template_part(
						'templates/components/videos/video-embed',
						null,
						array(
							'iframe' => $args['video_embed'],
						)
					);
					?>
				<?php endif; ?>
			</div>
		<?php endif; ?>

		<?php if ( ! empty( $args['secondary_image'] ) ) : ?>
			<div class="c-image__media c-image__secondary">
				<?php echo wp_kses_post( ds_generate_image( $args['main_image']['ID'], $args['main_image_size'], 'c-image__src c-image__secondary' ) ); ?>
			</div>
		<?php endif; ?>

	</div>
	<?php
endif;
