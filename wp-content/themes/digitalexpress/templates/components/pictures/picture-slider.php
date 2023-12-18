<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'image'                      => get_sub_field( 'image' ),
		'mobile_image'               => get_sub_field( 'mobile_image' ),
		'class'                      => '',
		'media_srcset'               => [
			'1500px' => 'default',
			'1024px' => '1536x1536',
			'768px'  => 'large',
		],
		'mobile_image_fallback_size' => 'medium_large',
	)
);

$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}
?>
<?php if ( ! empty( $args['image'] ) ) : ?>
    <picture class="m-slide__media<?php echo esc_attr( $className ); ?>">
		<?php if ( ! empty( $args['media_srcset'] ) && is_array( $args['media_srcset'] ) ) : ?>
			<?php foreach ( $args['media_srcset'] as $media_width => $size ) : ?>
				<?php if ( 'default' === $size ) : ?>
                    <source media="(min-width: <?php echo $media_width; ?>)" srcset="<?php echo $args['image']['url']; ?>">
				<?php elseif ( isset( $args['image']['sizes'][ $size ] ) ) : ?>
                    <source media="(min-width: <?php echo $media_width; ?>)" srcset="<?php echo $args['image']['sizes'][ $size ]; ?>">
				<?php endif; ?>
			<?php endforeach; ?>

			<?php if ( ! empty( $args['mobile_image'] ) ) : ?>
                <source media="(min-width: 300px)" srcset="<?php echo $args['mobile_image']['url']; ?>">
			<?php elseif ( isset( $args['image']['sizes'][ $args['mobile_image_fallback_size'] ] ) ) : ?>
                <source media="(min-width: 300px)" srcset="<?php echo $args['image']['sizes'][ $args['mobile_image_fallback_size'] ]; ?>">
			<?php endif; ?>
		<?php endif; ?>
        <img src="<?php echo $args['image']['url']; ?>" alt="<?php echo $args['image']['alt'] ?: $args['image']['title']; ?>">
    </picture>
<?php endif; ?>
