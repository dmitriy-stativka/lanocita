<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'title' => '',
		'icon'  => array(),
		'class' => '',
	)
);

$className = '';
if ( ! empty( $args['class'] ) ) {
	$className = " {$args['class']}";
}
?>
<div class="c-slider-nav__item<?php echo esc_attr( $className ); ?>">
	<?php if ( ! empty( $args['icon'] ) && is_array( $args['icon'] ) ) : ?>
		<span class="c-slider-nav__icon">
			<img class="c-slider-nav__src" loading="lazy" src="<?php echo esc_url( $args['icon']['url'] ); ?>" alt="<?php echo esc_attr( $args['icon']['alt'] ) ?: esc_attr( $args['icon']['title'] ); ?>">
		</span>
	<?php endif; ?>
	<?php if ( ! empty( $args['title'] ) ) : ?>
		<span class="c-slider-nav__label"><?php echo esc_html( $args['title'] ); ?></span>
	<?php endif; ?>
</div>
