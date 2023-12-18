<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'image'        => get_field( 'image' ),
		'class'        => '',
		'media_srcset' => [
			'1500px' => 'default',
			'1024px' => '1536x1536',
			'768px'  => 'large',
			'300px'  => 'medium_large',
		],
	)
);
?>
<?php if ( ! empty( $args['image'] ) ) : ?>
    <picture class="c-picture <?php echo esc_attr( $args['class'] ); ?>">
		<?php if ( ! empty( $args['media_srcset'] ) && is_array( $args['media_srcset'] ) ) : ?>
			<?php foreach ( $args['media_srcset'] as $media_width => $size ) : ?>
				<?php if ( 'default' === $size ) : ?>
                    <source media="(min-width: <?php echo esc_attr( $media_width ); ?>)" srcset="<?php echo esc_url( $args['image']['url'] ); ?>">
				<?php elseif ( isset( $args['image']['sizes'][ $size ] ) ) : ?>
                    <source media="(min-width: <?php echo esc_attr( $media_width ); ?>)" srcset="<?php echo esc_url( $args['image']['sizes'][ $size ] ); ?>">
				<?php endif; ?>
			<?php endforeach; ?>
		<?php endif; ?>
        <img src="<?php echo esc_url( $args['image']['url'] ); ?>" loading="lazy" alt="<?php echo esc_attr( $args['image']['alt'] ) ?: esc_attr( $args['image']['title'] ); ?>">
    </picture>
<?php endif; ?>
