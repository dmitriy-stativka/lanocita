<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_LayoutGap extends DS_Field {

	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = false ): array {
		return array(
			self::add_field(
				'button_group',
				'top_layout_gap',
				array(
					'label'         => 'Layout Gap Top',
					'choices'       => array(
						'l-gt-d'      => 'default',
						''            => 'none',
						'l-gt-custom' => 'custom',
					),
					'default_value' => 'lt-gt-d',
				),
				$is_super_admin
			),
			self::add_field(
				'group',
				'top_layout_custom',
				array(
					'label'             => 'Custom Layout Gap Top',
					'sub_fields'        => array(
						self::add_field(
							'text',
							'gap',
							array(
								'label' => 'Gap',
							),
							$is_super_admin
						),
					),
					'layout'            => 'block',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'top_layout_gap',
								'operator'  => '==',
								'value'     => 'l-gt-custom',
							),
						),
					),
				),
				$is_super_admin
			),
			self::add_field(
				'button_group',
				'bottom_layout_gap',
				array(
					'label'         => 'Layout Gap Bottom',
					'choices'       => array(
						'l-gb-d'      => 'default',
						''            => 'none',
						'l-gb-custom' => 'custom',
					),
					'default_value' => 'lt-gb-d',
				),
				$is_super_admin
			),
			self::add_field(
				'group',
				'bottom_layout_custom',
				array(
					'label'             => 'Custom Layout Gap Bottom',
					'sub_fields'        => array(
						self::add_field(
							'text',
							'gap',
							array(
								'label' => 'Gap',
							),
							$is_super_admin
						),
					),
					'layout'            => 'block',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'bottom_layout_gap',
								'operator'  => '==',
								'value'     => 'l-gb-custom',
							),
						),
					),
				),
				$is_super_admin
			),
		);
	}
}
