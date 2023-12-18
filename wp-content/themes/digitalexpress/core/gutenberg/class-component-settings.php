<?php
// phpcs:ignoreFile
class DS_ComponentSettings {

	public $class = '';

	public $styles = '';

	public function __construct( $args = array() ) {
		$args = wp_parse_args(
			$args,
			array(
				'component_type'           => get_field( 'component_settings_type' ) ?: 'v1',
				'component_gap_vertical'   => get_field( 'component_settings_inner_gap_vertical' ) ?: 0,
				'component_gap_horizontal' => get_field( 'component_settings_inner_gap_horizontal' ) ?: 0,
				'has_badge'                => get_field( 'component_settings_has_badge' ) ?: false,
				'has_background'           => get_field( 'component_settings_has_background' ) ?: false,
				'has_shadow'               => get_field( 'component_settings_has_shadow' ) ?: false,
				'has_hover'                => get_field( 'component_settings_has_hover' ) ?: false,
				'hover_effect'             => get_field( 'component_settings_hover_effect' ) ?: 'v1',
				'title_styles'             => get_field( 'component_settings_title_styles' ) ?: array( 'tag' => 'h3' ),
				'border_radius'            => intval( get_field( 'component_settings_border_radius' ) ),
				'orientation'              => get_field( 'component_settings_orientation' ) ?: 'vertical',
				'horizontal_alignment'     => get_field( 'component_settings_horizontal_alignment' ) ?: 'center',
				'vertical_alignment'       => get_field( 'component_settings_vertical_alignment' ) ?: 'top',
				'component_background'     => get_field( 'component_settings_component_background' ),
				'title_color'              => get_field( 'component_settings_title_color' ),
				'content_color'            => get_field( 'component_settings_content_color' ),
				'has_border'               => get_field( 'component_settings_has_border' ) ?: false,
				'border_width'             => get_field( 'component_settings_border_width' ),
				'border_color'             => get_field( 'component_settings_border_color' ),
			)
		);

		if ( isset( $args['component_gap_vertical'] ) ) {
			$this->styles .= '--c-block-gap-vertical:' . intval( $args['component_gap_vertical'] ) . 'px;';
		}

		if ( isset( $args['component_gap_horizontal'] ) ) {
			$this->styles .= '--c-block-gap-horizontal:' . intval( $args['component_gap_horizontal'] ) . 'px;';
		}
		if ( ! empty( $args['border_radius'] ) ) {
			$this->styles .= "--c-block-radius:{$args['border_radius']}px;";
		}

		if ( $args['component_type'] ) {
			$this->class .= " c-block-{$args['component_type']}";
		}

		if ( $args['orientation'] ) {
			$this->class .= " is-{$args['orientation']}";
		}

		if ( $args['has_background'] ) {
			$this->class .= ' has-background';
		}

		if ( $args['component_background'] ) {
			$this->styles .= "--c-block-bg:{$args['component_background']};";
		}

		if ( $args['title_color'] ) {
			$args['title_styles']['color'] = $args['title_color'];
		}

		if ( $args['has_shadow'] ) {
			$this->class .= ' has-shadow';
		}

		if ( $args['has_hover'] ) {
			$this->class .= " has-hover hover-{$args['hover_effect']}";
		}

		if ( ! empty( $args['horizontal_alignment'] ) ) {
			$this->class .= " text-{$args['horizontal_alignment']}";
		}

		if ( ! empty( $args['vertical_alignment'] ) ) {
			$this->class .= " align-{$args['vertical_alignment']}";
		}

		if ( $args['has_border'] ) {
			$this->class .= ' has-border';

			if ( ! empty( $args['border_width'] ) ) {
				$this->styles .= "--c-block-border-width:{$args['border_width']}px;";
			}

			if ( ! empty( $args['border_color'] ) ) {
				$this->styles .= "--c-block-border-color:{$args['border_color']};";
			}
		}

		if ( $args['content_color'] ) {
			$this->styles .= "--c-block-color:{$args['content_color']};";
		}
	}
}
