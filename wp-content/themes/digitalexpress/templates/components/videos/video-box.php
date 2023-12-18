<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'video'            => get_field( 'main_video_video' ) ?: [],
		'poster_image'     => get_field( 'main_video_poster_image' ) ?: '',
		'class'            => '',
		'show_js_controls' => false,
		'hide_controls'    => get_field( 'main_video_hide_controls' ) ?: false,
		'autoplay'         => get_field( 'main_video_autoplay' ) ?: false,
	)
);

$classNames = ! empty( $args['class'] ) ? " {$args['class']}" : '';
if ( $args['show_js_controls'] && ! $args['hide_controls'] ) {
	$classNames .= ' js-video-init';
}

$dataAttrs = '';
if ( ! empty( $args['poster_image']['url'] ) ) {
	$dataAttrs .= " poster='{$args['poster_image']['url']}'";
}

if ( ! $args['show_js_controls'] && ! $args['hide_controls'] ) {
	$dataAttrs .= ' controls';
}

if ( $args['autoplay'] ) {
	$dataAttrs .= ' autoplay loop';
}

?>
<?php if ( ! empty( $args['video'] ) ) : ?>

	<?php if ( $args['show_js_controls'] && ! $args['hide_controls'] ) : ?>
        <div class="c-video__wrap js-video-wrap<?php echo $args['autoplay'] ? ' is-video-playing' : ''; ?>">
	<?php endif; ?>

    <video muted playsinline disablePictureInPicture <?php echo $dataAttrs; ?> class="c-video<?php echo esc_attr( $classNames ); ?>">
        <source src="<?php echo $args['video']['url']; ?>" type="<?php echo $args['video']['mime_type']; ?>">
    </video>

	<?php if ( $args['show_js_controls'] && ! $args['hide_controls'] ) : ?>
        <div class="c-video__controls">
            <button class="c-video__btn btn-play <?php echo $args['autoplay'] ? ' is-playing' : ''; ?>" title="Play/Pause"></button>
            <button class="c-video__btn btn-mute is-muted" title="Mute"></button>
        </div>
        </div>
	<?php endif; ?>

<?php
endif;
