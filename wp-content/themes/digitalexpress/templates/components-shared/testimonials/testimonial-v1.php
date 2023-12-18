<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'quote' => get_field( 'quote', get_the_ID() ),
	)
);
?>
<blockquote class="c-testimonials">
	<div class="c-testimonials__quote">
		<?php if ( ! empty( $args['quote'] ) ) : ?>
			<p class="c-testimonials__text"><?php echo esc_html( $args['quote'] ); ?></p>
		<?php endif; ?>

		<?php
		get_template_part(
			'templates/components-shared/testimonials/cite-v1',
			null,
			array(
				'quote' => false, // Don't show because it is called above.
				'class' => 'c-cite-v1',
			)
		);
		?>
	</div>
</blockquote>
