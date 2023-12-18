<?php
// phpcs:ignoreFile

/**
 * @var array $args
 */

if ( empty( $args['newsletter']['form'] ) && empty( $args['newsletter']['iframe'] ) ) {
	return;
}

?>
<div class="c-newsletter__wrap">
	<div class="container c-newsletter__outer">
		<?php if ( ! empty( $args['newsletter']['title'] ) ) : ?>
			<div class="footer-title"><?php echo $args['newsletter']['title']; ?></div>
		<?php endif; ?>

		<?php if ( ! empty( $args['newsletter']['form'] ) ) : ?>
			<div class="c-newsletter">
				<?php echo do_shortcode( '[gravityform id="' . $args['newsletter']['form'] . '" title="false" ajax="true"]' ); ?>
			</div>
		<?php endif; ?>

		<?php if ( ! empty( $args['newsletter']['iframe'] ) ) : ?>
			<?php echo $args['newsletter']['iframe']; ?>
		<?php endif; ?>
	</div>
</div>
