<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args              = wp_parse_args(
	$args,
	array(
		'image'          => get_sub_field( 'image' ),
        'image_size'     => get_sub_field( 'image_size' ),
		'pretitle'       => get_sub_field( 'pretitle' ),
		'title'          => get_sub_field( 'title' ),
		'title_styles'   => get_field( 'component_title_styles' ) ?: [ 'tag' => 'h3' ],
		'description'    => get_sub_field( 'description' ),
		'cta_list'       => get_sub_field( 'cta_list' ),
		'is_clickable'   => get_sub_field( 'is_clickable' ) ?: false,
		'component_link' => get_sub_field( 'component_link' ),
		'content_color'  => '',
		'class'          => '',
		'styles'         => '',
		'has_image'      => 'enable',
	)
);
$componentSettings = new DS_ComponentSettings( $args );
$componentClass    = $args['class'];
$componentStyles   = $args['styles'];

if ( empty( $args['class'] ) || empty( $args['styles'] ) ) {
	$componentClass  = ( ! empty( $args['class'] ) ) ? $args['class'] : $componentSettings->class;
	$componentStyles = ( ! empty( $args['styles'] ) ) ? $args['styles'] : $componentSettings->styles;
}
?>

<article class="c-block <?php echo $componentClass; ?>" style="<?php echo $componentStyles; ?>">

	<?php if ( $args['is_clickable'] && ! empty( $args['component_link'] ) ) : ?>
        <a class="c-block__link-full" href="<?php echo esc_url( $args['component_link']['url'] ); ?>" title="<?php echo esc_attr( $args['component_link']['title'] ); ?>" <?php echo $args['component_link']['target'] ? 'target="' . esc_attr( $args['component_link']['target'] ) . '"' : ''; ?>></a>
	<?php endif; ?>

	<?php if ( ! empty( $args['image'] ) && ! empty( $args['image']['url'] ) && 'disable' != $args['has_image'] ) : ?>
        <div class="c-block__media">
			<?php if ( ! empty( $args['has_badge'] ) && ! empty( $args['badge_label'] ) ) : ?>
				<?php get_template_part( 'templates/components/badges/badge-v1', null, array( 'label' => $args['badge_label'] ) ); ?>
			<?php endif; ?>

			<?php
            get_template_part(
                'templates/components/images/image-v1',
                null,
                array(
					'image'      => $args['image'],
					'image_size' => $args['image_size'],
                )
            );
?>
        </div>
	<?php endif; ?>

    <div class="c-block__body" <?php echo ( $args['content_color'] ) ? "style='color:{$args['content_color']};'" : ''; ?>>

		<?php if ( ! empty( $args['pretitle'] ) ) : ?>
            <div class="c-block__pretitle">
                <span><?php echo $args['pretitle']; ?></span>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['title'] ) ) : ?>
			<?php echo acf_title( $args['title'], $args['title_styles'], 'c-block__title' ); ?>
		<?php endif; ?>

		<?php if ( ! empty( $args['description'] ) ) : ?>
            <div class="c-block__description">
				<?php echo $args['description']; ?>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['cta_list'] ) ) : ?>
			<?php
            get_template_part(
                'templates/components/cta-list',
                null,
                array(
					'buttons' => $args['cta_list'],
                )
			);
            ?>
		<?php endif; ?>

    </div>

</article>
