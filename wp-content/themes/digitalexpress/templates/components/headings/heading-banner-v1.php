<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */
$args      = wp_parse_args(
	$args,
	array(
		'pretitle'       => get_field( 'pretitle' ),
		'title'          => get_field( 'title' ),
		'title_styles'   => get_field( 'title_styles' ),
		'subtitle'       => get_field( 'subtitle' ),
		'description'    => get_field( 'description' ),
		'text_position'  => get_field( 'text_position' ),
		'is_slider'      => get_field( 'title_seo' ),
		'loop_index_key' => 0,
	)
);
$title_tag = ! empty( $args['title_styles'] ) && ! empty( $args['title_styles']['tag'] ) ? $args['title_styles']['tag'] : 'h2';

if ( $args['is_slider'] ) {
	if ( $args['loop_index_key'] > 0 ) {
		$args['title_styles']['tag'] = 'h2';
	} else {
		$args['title_styles']['tag'] = 'h1';
	}
	$title_tag = 'h1';
}

$className = '';
if ( ! empty( $args['text_position'] ) ) {
	$className .= " text-{$args['text_position']}";
}
if ( ! empty( $args['pretitle'] ) || ! empty( $args['title'] ) || ! empty( $args['subtitle'] ) || ! empty( $args['description'] ) ) : ?>
    <div class="l-banner__inner<?php echo esc_attr( $className ); ?>">

        <div class="c-heading <?php echo "-{$title_tag}"; ?>">
			<?php if ( ! empty( $args['pretitle'] ) ) : ?>
                <div class="c-heading__pre"><?php echo $args['pretitle']; ?></div>
			<?php endif; ?>

			<?php if ( ! empty( $args['title'] ) ) : ?>
				<?php echo acf_title( $args['title'], $args['title_styles'], 'c-heading__title' ); ?>
			<?php endif; ?>

			<?php if ( ! empty( $args['subtitle'] ) ) : ?>
                <div class="c-heading__sub"><?php echo $args['subtitle']; ?></div>
			<?php endif; ?>
        </div>

		<?php if ( ! empty( $args['description'] ) ) : ?>
            <div class="c-heading__description is-wysiwyg">
				<?php echo $args['description']; ?>
            </div>
		<?php endif; ?>
    </div>
<?php
endif;
