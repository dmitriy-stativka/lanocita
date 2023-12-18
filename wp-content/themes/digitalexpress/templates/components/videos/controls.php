<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'url'   => '',
		'label' => 'Play Video',
	)
);
?>
<?php if ( ! empty( $args['url'] ) ) : ?>
	<div class="c-controls c-controls-v1">
		<div class="c-controls__option">
			<a href="<?php echo esc_url( $args['url'] ); ?>" class="c-controls__link floatbox modern" data-fb-options="addVideoThumb:false showControlsText:false width:700 height:450 padding:20 innerBorder:0 showClose:false showOuterClose: true">
				<span class="c-controls__play" title="Play/Pause"></span>
				<?php if ( ! empty( $args['label'] ) ) : ?>
					<span class="c-controls__label"><?php echo esc_html( $args['label'] ); ?></span>
				<?php endif; ?>
			</a>
		</div>
	</div>
	<?php
endif;
