<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_SliderArrowsNavigation extends DS_Field {

	/**
	 * Get
	 *
	 * @param string $field_name field name.
	 * @param array  $args arguments.
	 * @param bool   $is_super_admin super admin check.
	 */
	public static function get( $field_name = 'data_navigation', array $args = array(), $is_super_admin = false ): array {
		$default_args = array(
			'label'         => 'Arrows Navigation',
			'choices'       => array(
				''              => 'none',
				'inner-arrows'  => 'inner-arrows',
				'outer-arrows'  => 'outer-arrows',
				'bottom-arrows' => 'bottom-arrows',
			),
			'default_value' => '',
			'layout'        => 'vertical',
		);
		$args         = wp_parse_args( $args, $default_args );

		$icon_library       = DS_ExpressButtons::$icon_library['arrows'] ?? array();
		$icon_library_field = array();
		if ( ! empty( $icon_library ) ) {
			$icon_library_field[] = self::add_field(
				'radio',
				'arrow_type',
				array(
					'label'             => 'Arrow Type',
					'choices'           => array_combine( $icon_library, $icon_library ),
					'layout'            => 'horizontal',
					'wrapper'           => array(
						'class' => 'button-icon-library',
					),
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => $field_name,
								'operator'  => '==',
								'value'     => 'inner-arrows',
							),
						),
						array(
							array(
								'fieldPath' => $field_name,
								'operator'  => '==',
								'value'     => 'outer-arrows',
							),
						),
						array(
							array(
								'fieldPath' => $field_name,
								'operator'  => '==',
								'value'     => 'bottom-arrows',
							),
						),
					),
				)
			);
		}

		return array(
			self::add_field( 'button_group', $field_name, $args, $is_super_admin ),
			...$icon_library_field,
		);
	}
}
