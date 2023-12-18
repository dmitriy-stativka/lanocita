<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'url'          => '',
		'poster_image' => [],
		'class'        => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}
?>
<?php if ( ! empty( $args['url'] ) ) : ?>
    <div class="c-video-popup<?php echo esc_attr( $className ); ?>">
		<?php if ( ! empty( $args['poster_image'] ) && is_array( $args['poster_image'] ) ) : ?>
            <img class="c-video-popup__poster" src="<?php echo esc_url( $args['poster_image']['url'] ); ?>" loading="lazy" alt="<?php echo esc_attr( $args['poster_image']['alt'] ) ?: $args['poster_image']['title']; ?>">
		<?php endif; ?>
		<?php
		get_template_part(
            'templates/components/videos/controls',
            null,
            array(
				'label' => '',
				'url'   => $args['url'],
            )
		);
		?>
    </div>
<?php
endif;