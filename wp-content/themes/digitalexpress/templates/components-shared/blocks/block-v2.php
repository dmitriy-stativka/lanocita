<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'class'                     => '',
		'main_icon'                 => get_field( 'main_icon' ),
		'pretitle'                  => get_field( 'pretitle' ),
		'title'                     => get_field( 'title' ),
		'subtitle'                  => get_field( 'subtitle' ),
		'description'               => get_field( 'description' ),
		'list'                      => get_field( 'list' ),
		'cta_list'                  => get_field( 'cta_list' ),
		'mixed_gallery'             => get_field( 'mixed_gallery' ) ?? [],
		'has_image_description'     => get_field( 'has_image_description' ) ?: false,
		'image_description'         => get_field( 'image_description' ),
		// Main Wrapper Settings
		'columns_order'             => get_field( 'component_settings_columns_order' ) ?: 'default',
		'is_vertical'               => get_field( 'component_settings_is_vertical' ) ?: false,
		'columns_ratio'             => get_field( 'component_settings_columns_ratio' ),
		'component_gap_left'        => get_field( 'component_settings_inner_gap_left' ) ?: 0,
		'component_gap_right'       => get_field( 'component_settings_inner_gap_right' ) ?: 0,
		'component_gap_top'         => get_field( 'component_settings_inner_gap_top' ) ?: 0,
		'component_gap_bottom'      => get_field( 'component_settings_inner_gap_bottom' ) ?: 0,
		'bg_color'                  => get_field( 'component_settings_bg_color' ),
		'has_shadow'                => get_field( 'component_settings_has_shadow' ) ?: false,
		'border_radius'             => intval( get_field( 'component_settings_border_radius' ) ),
		// Text Component Settings
		'text_component_gap_left'   => get_field( 'text_component_settings_inner_gap_left' ) ?: 0,
		'text_component_gap_right'  => get_field( 'text_component_settings_inner_gap_right' ) ?: 0,
		'text_component_gap_top'    => get_field( 'text_component_settings_inner_gap_top' ) ?: 0,
		'text_component_gap_bottom' => get_field( 'text_component_settings_inner_gap_bottom' ) ?: 0,
		'horizontal_alignment'      => get_field( 'text_component_settings_horizontal_alignment' ),
		'vertical_alignment'        => get_field( 'text_component_settings_vertical_alignment' ),
	)
);

$className = " order-{$args['columns_order']}";
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}

if ( $args['has_shadow'] ) {
	$className .= ' has-shadow';
}

if ( $args['is_vertical'] ) {
	$className .= ' is-vertical';
}

$classNameTextComponent = '';
if ( ! empty( $args['horizontal_alignment'] ) ) {
	$classNameTextComponent .= " text-{$args['horizontal_alignment']}";
}

if ( ! empty( $args['vertical_alignment'] ) ) {
	$classNameTextComponent .= " align-{$args['vertical_alignment']}";
}
$styles = "--c-block-radius:{$args['border_radius']}px; --c-block-gl: {$args['component_gap_left']}%;--c-block-gr: {$args['component_gap_right']}%;--c-block-gt: {$args['component_gap_top']}%;--c-block-gb: {$args['component_gap_bottom']}%;";
if ( intval( $args['columns_ratio'] ) !== 0 ) {
	$styles .= "--columns-ratio: {$args['columns_ratio']}%;";
}

if ( $args['bg_color'] ) {
	$styles .= "--c-txt-bg: {$args['bg_color']};";
}

$stylesTextComponent = "--c-txt-gl: {$args['text_component_gap_left']}%; --c-txt-gr: {$args['text_component_gap_right']}%; --c-txt-gt: {$args['text_component_gap_top']}%; --c-txt-gb: {$args['text_component_gap_bottom']}%;";
?>

<div class="c-block<?php echo esc_attr( $className ); ?>" style="<?php echo $styles; ?>">
    <div class="c-block__col c-block__text<?php echo esc_attr( $classNameTextComponent ); ?>" style="<?php echo esc_attr( $stylesTextComponent ); ?>">
        <div class="c-block__inner">

			<?php if ( ! empty( $args['main_icon'] ) ) : ?>
                <img class="c-block__icon" loading="lazy" src="<?php echo esc_url( $args['main_icon']['url'] ); ?>" alt="<?php echo $args['main_icon']['alt'] ?: $args['main_icon']['title']; ?>">
			<?php endif; ?>

			<?php
            get_template_part(
                'templates/components/headings/heading',
                null,
                array(
					'pretitle'    => $args['pretitle'],
					'title'       => $args['title'],
					'subtitle'    => $args['subtitle'],
					'description' => $args['description'],

                )
			);
            ?>
			<?php
            get_template_part(
                'templates/components/list/list-v1',
                null,
                array(
					'list' => $args['list'],
                )
			);
            ?>
			<?php
            get_template_part(
                'templates/components/cta-list',
                null,
                array(
					'buttons' => $args['cta_list'],
                )
			);
            ?>
        </div>
    </div>

    <div class="c-block__col c-block__media">
		<?php
        get_template_part(
            'templates/components-shared/media-mixed/mixed-gallery-v1',
            null,
            array(
				'main_content_type'    => $args['mixed_gallery']['main_content_type'] ?? false,
				'main_image'           => $args['mixed_gallery']['main_image'] ?? false,
				'main_image_size'      => $args['mixed_gallery']['main_image_size'] ?? 'medium_large',
				'secondary_image'      => $args['mixed_gallery']['secondary_image'] ?? false,
				'secondary_image_size' => $args['mixed_gallery']['secondary_image_size'] ?? 'medium_large',
				'video_source'         => $args['mixed_gallery']['main_video']['video_source'] ?? false,
				'video'                => $args['mixed_gallery']['main_video']['video'] ?? false,
				'video_embed'          => $args['mixed_gallery']['main_video']['video_embed'] ?? false,
				'poster_image'         => $args['mixed_gallery']['main_video']['poster_image'] ?? false,
				'hide_controls'        => $args['mixed_gallery']['main_video']['hide_controls'] ?? false,
				'autoplay'             => $args['mixed_gallery']['main_video']['autoplay'] ?? false,
            )
		);
        ?>

		<?php if ( $args['has_image_description'] ) : ?>

			<?php get_template_part( 'templates/components/content/info-v1', null, array( 'description' => $args['image_description'] ) ); ?>

		<?php endif; ?>
    </div>
</div>
