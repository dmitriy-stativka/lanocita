<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'image'      => get_field( 'image' ),
        'image_size' => get_field( 'image_size' ) ?: get_sub_field( 'image_size' ),
		'class'      => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}
?>
<?php if ( ! empty( $args['image'] ) && is_array( $args['image'] ) ) : ?>
    <?php if ( function_exists( 'ds_generate_image' ) && isset( $args['image']['ID'] ) ) : ?>
        <div class="c-image<?php echo esc_attr( $className ); ?>">
            <figure class="c-image__media c-image__primary">
                <?php echo ds_generate_image( $args['image']['ID'], $args['image_size'], 'c-image__src' ); ?>
            </figure>
        </div>
    <?php else : ?>
        <div class="c-image<?php echo esc_attr( $className ); ?>">
            <figure class="c-image__media c-image__primary">
                <img class="c-image__src" loading="lazy" src="<?php echo $args['image']['url']; ?>" alt="<?php echo $args['image']['alt'] ?: $args['image']['title']; ?>">
            </figure>
        </div>
    <?php endif; ?>
<?php
endif;
