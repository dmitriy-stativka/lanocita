<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'main_image'                        => get_field( 'main_image' ),
		'front_image'                       => get_field( 'front_image' ),
		'secondary_image_position'          => get_field( 'media_component_settings_secondary_image_position' ) ?: 'left',
		'secondary_image_vertical_position' => get_field( 'media_component_settings_secondary_image_vertical_position' ),
		'image_ratio'                       => get_field( 'media_component_settings_image_ratio' ),
		'main_image_position'               => get_field( 'media_component_settings_main_image_position' ),
		'main_image_vertical_position'      => get_field( 'media_component_settings_main_image_vertical_position' ),
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

if ( ! empty( $args['main_image_position'] ) ) {
	$className .= " main-h-{$args['main_image_position']}";
}

if ( ! empty( $args['main_image_vertical_position'] ) ) {
	$className .= " main-v-{$args['main_image_vertical_position']}";
}

if ( ! empty( $args['image_ratio'] ) ) {
	$className .= " r-{$args['image_ratio']}";
}
?>
<?php if ( ! empty( $args['main_image'] ) || ! empty( $args['front_image'] ) ) : ?>
    <div class="c-image<?php echo esc_attr( $className ); ?>">

		<?php if ( ! empty( $args['main_image'] ) ) : ?>
            <div class="c-image__media c-image__primary">
                <img class="c-image__src" src="<?php echo $args['main_image']['url']; ?>" loading="lazy" alt="<?php echo $args['main_image']['alt'] ?: $args['main_image']['title']; ?>">
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['front_image'] ) ) : ?>
            <div class="c-image__media c-image__secondary">
                <img class="c-image__src" src="<?php echo $args['front_image']['url']; ?>" loading="lazy" alt="<?php echo $args['front_image']['alt'] ?: $args['front_image']['title']; ?>">
            </div>
		<?php endif; ?>

    </div>
<?php
endif;
