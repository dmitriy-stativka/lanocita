<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'light_accordion' => false,
		'component_class' => 'c-accordion',
		'title'           => get_sub_field( 'title' ),
		'title_styles'    => get_field( 'component_title_styles' ) ?: [ 'tag' => 'h3' ],
		'description'     => get_sub_field( 'description' ),
		'cta_list'        => get_sub_field( 'cta_list' ),
		'icon'            => get_sub_field( 'icon' ),
		'image'           => [],
		'class'           => '',
	)
);

$accordionJsHandler = $args['light_accordion'] ? 'js-a' : 'js-acc';

$className = '';
if ( ! empty( $args['class'] ) ) {
	$className = " {$args['class']}";
}

?>

<div class="<?php echo esc_attr( $args['component_class'] ); ?>__item <?php echo "{$accordionJsHandler}-item"; ?><?php echo esc_attr( $className ); ?>">
	<?php if ( ! empty( $args['title'] ) ) : ?>
		<?php
		$tag   = $args['title_styles']['tag'] ?? 'h4';
		$title = '';
		ob_start();
        ?>
        <button class="<?php echo esc_attr( $accordionJsHandler ) . '-button'; ?> <?php echo esc_attr( $args['component_class'] ); ?>__title">
			<?php if ( ! empty( $args['icon'] ) ) : ?>
                <img class="<?php echo $args['component_class']; ?>__icon" loading="lazy" src="<?php echo esc_url( $args['icon']['url'] ); ?>" alt="<?php echo esc_attr( $args['icon']['alt'] ) ?: esc_attr( $args['icon']['title'] ); ?>">
			<?php endif; ?>
			<?php echo $args['title']; ?>
        </button>
		<?php $title .= ob_get_clean(); ?>

		<?php echo acf_title( $title, $args['title_styles'], "{$args['component_class']}__title-wrap -{$tag}" ); ?>
	<?php endif; ?>

    <div class="<?php echo "{$accordionJsHandler}-content"; ?>">
		<?php if ( ! empty( $args['image'] ) ) : ?>
            <div class="<?php echo $args['component_class']; ?>__media">
                <img class="<?php echo esc_attr( $args['component_class'] ); ?>__image" loading="lazy" src="<?php echo esc_url( $args['image']['url'] ); ?>" alt="<?php echo esc_attr( $args['image']['alt'] ) ?: esc_attr( $args['image']['title'] ); ?>">
            </div>
		<?php endif; ?>
		<?php if ( ! empty( $args['description'] ) ) : ?>
            <div class="<?php echo esc_attr( $args['component_class'] ); ?>__content">
                <div class="is-wysiwyg">
					<?php echo apply_filters( 'acf_the_content', $args['description'] ); ?>
                </div>
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
		<?php endif; ?>
    </div>

</div>
