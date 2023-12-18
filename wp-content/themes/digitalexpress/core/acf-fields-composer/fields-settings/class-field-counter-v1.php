<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_Counter_V1_ComponentSettings extends DS_Field {
	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = true ): array {
		return array(
			DS_Field::group(
				'component_settings',
				array(
					'label'      => '',
					'layout'     => 'block',
					'sub_fields' => array(
						DS_Field::number(
							'number_font_size',
							array(
								'label' => 'Number Font Size',
								'min'   => 10,
								'max'   => 100,
								'step'  => 1,
							)
						),
						DS_Field_ComponentGap::get(
							'inner_gap_vertical',
							array(
								'label'         => 'Inner Vertical Gap (px)',
								'default_value' => 0,
							)
						),
						DS_Field_ComponentGap::get(
							'inner_gap_horizontal',
							array(
								'label'         => 'Inner Horizontal Gap (px)',
								'default_value' => 0,
							)
						),
						DS_Field_ComponentType::get(),
						DS_Field::button_group(
							'orientation',
							array(
								'label'         => 'Orientation',
								'choices'       => array(
									'vertical'   => 'vertical',
									'horizontal' => 'horizontal',
								),
								'default_value' => 'horizontal',
							)
						),
						DS_Field::button_group(
							'horizontal_alignment',
							array(
								'label'         => 'Horizontal Alignment',
								'choices'       => array(
									'left'   => 'Left',
									'center' => 'Center',
									'right'  => 'Right',
								),
								'default_value' => 'center',
							)
						),
						DS_Field::button_group(
							'vertical_alignment',
							array(
								'label'         => 'Vertical Alignment',
								'choices'       => array(
									'top'    => 'Top',
									'center' => 'Center',
									'bottom' => 'Bottom',
								),
								'default_value' => 'top',
							)
						),
						DS_Field::range(
							'border_radius',
							array(
								'label'  => 'Border Radius',
								'max'    => 50,
								'append' => 'px',
							)
						),
						DS_Field::true_false(
							'has_border',
							array(
								'label' => 'Has Border?',
								'ui'    => 1,
							)
						),
						DS_Field::number(
							'border_width',
							array(
								'label'             => 'Component Border Width',
								'max'               => 50,
								'default_value'     => 0,
								'append'            => 'px',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'has_border',
											'operator'  => '==',
											'value'     => 1,
										),
									),
								),
							)
						),
						DS_Field::color_picker(
							'border_color',
							array(
								'label'             => 'Component Border Color',
								'default_value'     => '#ffffff',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'has_border',
											'operator'  => '==',
											'value'     => 1,
										),
									),
								),
							)
						),
					),
				),
				$is_super_admin
			),
		);
	}
}
