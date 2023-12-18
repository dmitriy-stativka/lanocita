<?php
// phpcs:ignoreFile
$styles = get_field( 'footer_content_styles', 'options' );

if ( empty( $styles['video_background'] ) && empty( $styles['background-image'] ) ) {
	return;
}

?>

<div class="l-footer__media <?php echo ( $styles['mobile_video'] == 'hide' ) ? 'hide-mobile-video' : ''; ?>">
	<?php
	if (
		( empty( $styles['video_background'] ) && ! empty( $styles['background-image'] ) )
		||
		( wp_is_mobile() && $styles['mobile_video'] == 'hide' && ! empty( $styles['background-image'] ) )
	) :
		?>

		<picture class="l-footer__picture">
			<source media="(min-width: 767px)" srcset="<?php echo $styles['background-image']; ?>">
			<?php if ( ! empty( $styles['background-image-mobile'] ) ) : ?>
				<source media="(min-width: 300px)" srcset="<?php echo $styles['background-image-mobile']; ?>">
			<?php endif; ?>
			<img src="<?php echo $styles['background-image']; ?>"
				alt="<?php _e( 'footer background', 'dstheme' ); ?>"
				loading="lazy">
		</picture>

	<?php elseif ( ! empty( $styles['video_background'] ) ) : ?>
		<div class="l-footer__video">
			<?php
			get_template_part(
				'templates/components/videos/video-box',
				null,
				array(
					'video'         => $styles['video_background'],
					'poster_image'  => array( 'url' => $styles['background-image'] ),
					'hide_controls' => true,
					'autoplay'      => true,
				)
			);
			?>
		</div>
	<?php endif; ?>
</div>
