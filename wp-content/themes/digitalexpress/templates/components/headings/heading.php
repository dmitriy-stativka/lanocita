<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'pretitle'       => get_field( 'pretitle' ),
		'backtitle'      => get_field( 'backtitle' ),
		'title'          => get_field( 'title' ),
		'title_styles'   => get_field( 'title_styles' ) ?: [ 'tag' => 'h4' ],
		'subtitle'       => get_field( 'subtitle' ),
		'description'    => get_field( 'description' ),
		'pretitle_color' => get_field( 'content_styles_pretitle_color' ),
		'subtitle_color' => get_field( 'content_styles_subtitle_color' ),
	)
);

$title_tag = ! empty( $args['title_styles'] ) && ! empty( $args['title_styles']['tag'] ) ? $args['title_styles']['tag'] : 'h2';

if ( ! empty( $args['pretitle'] ) || ! empty( $args['backtitle'] ) || ! empty( $args['title'] ) || ! empty( $args['subtitle'] ) ) : ?>
    <div class="c-heading <?php echo "-{$title_tag}"; ?> ">
		<?php if ( ! empty( $args['backtitle'] ) ) : ?>
            <div class="c-heading__preamble">
                <span><?php echo $args['backtitle']; ?></span>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['pretitle'] ) ) : ?>
            <div class="c-heading__pre" <?php echo ( $args['pretitle_color'] ) ? "style='color:{$args['pretitle_color']};'" : ''; ?>>
				<?php echo $args['pretitle']; ?>
            </div>
		<?php endif; ?>

		<?php if ( ! empty( $args['title'] ) ) : ?>
			<?php echo acf_title( $args['title'], $args['title_styles'], 'c-heading__title' ); ?>
		<?php endif; ?>

		<?php if ( ! empty( $args['subtitle'] ) ) : ?>
            <div class="c-heading__sub" <?php echo ( $args['subtitle_color'] ) ? "style='color:{$args['subtitle_color']};'" : ''; ?>>
				<?php echo $args['subtitle']; ?>
            </div>
		<?php endif; ?>
    </div>
<?php endif; ?>
<?php if ( ! empty( $args['description'] ) ) : ?>
    <div class="c-heading__description is-wysiwyg">
        <?php echo $args['description']; ?>
    </div>
<?php endif; ?>
