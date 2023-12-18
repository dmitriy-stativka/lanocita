<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'name'                     => get_the_title(),
		'role'                     => get_field( 'position', get_the_ID() ),
		'bio'                      => get_field( 'bio', get_the_ID() ),
		'image'                    => get_the_post_thumbnail( get_the_ID(), 'full' ),
		'socials'                  => get_field( 'socials', get_the_ID() ),
		'class'                    => '',
		// Settings.
		'component_type'           => get_field( 'component_settings_type' ) ?: 'v1',
		'component_gap_vertical'   => get_field( 'component_settings_inner_gap_vertical' ) ?: 0,
		'component_gap_horizontal' => get_field( 'component_settings_inner_gap_horizontal' ) ?: 0,
		'has_background'           => get_field( 'component_settings_has_background' ) ?: false,
		'has_shadow'               => get_field( 'component_settings_has_shadow' ) ?: false,
		'has_hover'                => get_field( 'component_settings_has_hover' ) ?: false,
		'hover_effect'             => get_field( 'component_settings_hover_effect' ) ?: 'v1',
		'border_radius'            => intval( get_field( 'component_settings_border_radius' ) ),
		'has_horizontal_align'     => false,
		'component_background'     => get_field( 'component_settings_component_background' ),
		'has_border'               => get_field( 'component_settings_has_border' ) ?: false,
		'border_width'             => get_field( 'component_settings_border_width' ),
		'border_color'             => get_field( 'component_settings_border_color' ),
		// Text Component Settings.
		'show_role'                => get_field( 'text_component_settings_show_role' ) ?: false,
		'show_bio'                 => get_field( 'text_component_settings_show_bio' ) ?: false,
		'show_social_networks'     => get_field( 'text_component_settings_show_social_networks' ) ?: false,
		'cta_button'               => get_field( 'cta_button' ) ?? array(),
		'horizontal_alignment'     => get_field( 'text_component_settings_horizontal_alignment' ) ?: 'center',
		'has_vertical_align'       => false,
		'vertical_alignment'       => get_field( 'text_component_settings_vertical_alignment' ) ?: 'top',
		'title_styles'             => get_field( 'component_title_styles' ) ?: array( 'tag' => 'h4' ),
		'title_color'              => get_field( 'text_component_settings_title_color' ),
		'content_color'            => get_field( 'text_component_settings_content_color' ),
	)
);
$className = ' c-block';
$styles    = "--c-block-gap-vertical:{$args['component_gap_vertical']}px;--c-block-gap-horizontal:{$args['component_gap_horizontal']}px;--c-block-radius:{$args['border_radius']}px;";

if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}

if ( $args['has_background'] ) {
	$className .= ' has-background';
}

if ( $args['component_background'] ) {
	$styles .= "--c-block-bg:{$args['component_background']};";
}

if ( $args['title_color'] ) {
	$args['title_styles']['color'] = $args['title_color'];
}

if ( $args['has_shadow'] ) {
	$className .= ' has-shadow';
}

if ( $args['has_hover'] ) {
	$className .= " has-hover hover-{$args['hover_effect']}";
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
?>
<?php if ( ! empty( $args['name'] ) || ! empty( $args['role'] ) || ! empty( $args['image'] ) ) : ?>
	<div class="c-team c-team__preview <?php echo esc_attr( $className ); ?>" style="<?php echo esc_attr( $styles ); ?>">

		<?php if ( ! empty( $args['image'] ) ) : ?>
			<div class="c-block__media">
				<div class="c-image">
					<?php echo wp_kses_post( $args['image'] ); ?>
				</div>
			</div>
		<?php endif; ?>

		<div class="c-block__body">
			<?php if ( $args['show_social_networks'] && ! empty( $args['socials'] ) ) : ?>
				<div class="c-team__preview-socials">
					<?php get_template_part( 'templates/components/socials', null, array( 'socials' => $args['socials'] ) ); ?>
				</div>
			<?php endif; ?>

			<div class="c-team__preview-brief">
				<?php if ( ! empty( $args['name'] ) ) : ?>
                    <?php echo acf_title( $args['name'], $args['title_styles'], 'c-team__preview-name' ); //phpcs:ignore?>
				<?php endif; ?>

				<?php if ( $args['show_role'] && ! empty( $args['role'] ) ) : ?>
					<div class="c-team__preview-role"><?php echo esc_html( $args['role'] ); ?></div>
				<?php endif; ?>

				<?php if ( $args['show_bio'] && ! empty( $args['bio'] ) ) : ?>
					<?php
					$popupContent = '';
					ob_start();
					get_template_part( 'templates/components-shared/team/team-v1' );
					$popupContent = ob_get_clean();
					?>
					<div class="c-team__preview-bio">
						<?php
						get_template_part(
							'templates/components/cta-popup',
							null,
							array(
								'button'        => $args['cta_button'],
								'popup_content' => $popupContent,
							)
						);
						?>
					</div>
				<?php endif; ?>
			</div>
		</div>

	</div>
	<?php
endif;
