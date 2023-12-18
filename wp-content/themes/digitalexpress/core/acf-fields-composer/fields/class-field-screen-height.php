<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_ScreenHeight extends DS_Field {

	/**
	 * Get
	 *
	 * @param string $default_value default value.
	 * @param bool   $is_super_admin super admin check.
	 */
	public static function get( $default_value = 'small', $is_super_admin = false ): array {
		return array(
			self::add_field(
				'button_group',
				'screen_height',
				array(
					'label'         => 'Height',
					'choices'       => array(
						'small'  => 'small',
						'medium' => 'medium',
						'full'   => 'full',
						'custom' => 'custom',
					),
					'default_value' => $default_value,
				),
				$is_super_admin
			),
			self::add_field(
				'group',
				'custom_height',
				array(
					'label'             => 'Custom Height',
					'sub_fields'        => array(
						self::add_field(
							'button_group',
							'unit',
							array(
								'label'         => 'Unit',
								'choices'       => array(
									'px' => 'px',
									'vh' => '%',
								),
								'default_value' => 'px',
							),
							'screen_height_custom_height'
						),
						self::add_field(
							'number',
							'height',
							array(
								'label' => 'Height',
							),
							'screen_height_custom_height'
						),
					),
					'layout'            => 'block',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'screen_height',
								'operator'  => '==',
								'value'     => 'custom',
							),
						),
					),
				),
				$is_super_admin
			),
		);
	}
}
