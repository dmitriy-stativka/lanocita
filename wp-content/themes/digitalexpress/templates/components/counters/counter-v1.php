<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */
$args           = wp_parse_args(
	$args,
	array(
		'image'                    => get_sub_field( 'image' ),
		'pre_number_symbol'        => get_sub_field( 'pre_number_symbol' ),
		'number'                   => get_sub_field( 'number' ),
		'after_number_symbol'      => get_sub_field( 'after_number_symbol' ),
		'title'                    => get_sub_field( 'title' ),
		'description'              => get_sub_field( 'description' ),
		'class'                    => '',
		'component_type'           => get_field( 'component_settings_type' ) ?: 'v1',
		'num_font_size'            => get_field( 'component_settings_number_font_size' ),
		'orientation'              => get_field( 'component_settings_orientation' ) ?: 'horizontal',
		'component_gap_vertical'   => get_field( 'component_settings_inner_gap_vertical' ) ?: 0,
		'component_gap_horizontal' => get_field( 'component_settings_inner_gap_horizontal' ) ?: 0,
		'horizontal_alignment'     => get_field( 'component_settings_horizontal_alignment' ) ?: 'center',
		'vertical_alignment'       => get_field( 'component_settings_vertical_alignment' ) ?: 'top',
		'border_radius'            => intval( get_field( 'component_settings_border_radius' ) ),
        'has_border'               => get_field( 'component_settings_has_border' ) ?: false,
		'border_width'             => get_field( 'component_settings_border_width' ),
		'border_color'             => get_field( 'component_settings_border_color' ),

	)
);
$args['number'] = ! empty( $args['number'] ) || $args['number'] === '0' ? $args['number'] + 0 : '';
$className      = " c-counter-{$args['component_type']} is-{$args['orientation']}";
if ( ! empty( $args['class'] ) ) {
	$className = " {$args['class']}";
}

$styles = '';
if ( ! empty( $args['num_font_size'] ) ) {
	$args['num_font_size'] /= 10;
	$styles                .= "--num-font-size: {$args['num_font_size']}rem;";
}
if ( ! empty( $args['component_gap_vertical'] ) ) {
	$styles .= "--c-block-gap-vertical:{$args['component_gap_vertical']}px;";
}

if ( ! empty( $args['component_gap_horizontal'] ) ) {
	$styles .= "--c-block-gap-horizontal:{$args['component_gap_horizontal']}px;";
}
if ( ! empty( $args['horizontal_alignment'] ) ) {
	$className .= " text-{$args['horizontal_alignment']}";
}

if ( ! empty( $args['vertical_alignment'] ) ) {
	$className .= " align-{$args['vertical_alignment']}";
}
if ( $args['has_border'] ) {
	$className .= ' has-border';

	if ( ! empty( $args['border_width'] ) ) {
		$styles .= "--c-block-border-width:{$args['border_width']}px;";
	}

	if ( ! empty( $args['border_color'] ) ) {
		$styles .= "--c-block-border-color:{$args['border_color']};";
	}
}
if ( ! empty( $args['border_radius'] ) ) {
	$styles .= "--c-block-radius:{$args['border_radius']}px;";
}
?>
<div class="l-counter__item c-counter<?php echo esc_attr( $className ); ?>" style="<?php echo $styles; ?>">

	<?php if ( ! empty( $args['image'] ) ) : ?>
        <div class="c-counter__media">
            <img class="c-counter__img" src="<?php echo $args['image']['url']; ?>" alt="<?php echo $args['image']['alt'] ?: $args['image']['title']; ?>">
        </div>
	<?php endif; ?>

    <div class="c-counter__body">

	    <?php if ( ! empty( $args['number'] ) || $args['number'] === 0 ) : ?>
            <div class="c-counter__num">
				<?php if ( ! empty( $args['pre_number_symbol'] ) ) : ?>
                    <span class="c-counter__symbol"><?php echo $args['pre_number_symbol']; ?></span><?php endif; ?>
                <span class="c-counter__number" data-purecounter-start="0" data-purecounter-end="<?php echo $args['number']; ?>" <?php echo is_float( $args['number'] ) ? 'data-purecounter-decimals="1"' : ''; ?>><?php echo $args['number']; ?></span>
				<?php if ( ! empty( $args['after_number_symbol'] ) ) : ?>
                    <span class="c-counter__symbol"><?php echo $args['after_number_symbol']; ?></span><?php endif; ?>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['title'] ) ) : ?>
            <div class="c-counter__title">
                <h4 class="c-heading__title"><?php echo $args['title']; ?></h4>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['description'] ) ) : ?>
            <div class="c-counter__description"><?php echo $args['description']; ?></div>
		<?php endif; ?>

    </div>

</div>
