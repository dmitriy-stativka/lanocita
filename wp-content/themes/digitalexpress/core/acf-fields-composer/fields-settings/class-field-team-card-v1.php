<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_TeamCard_V1_ComponentSettings extends DS_Field {
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
						DS_Field::accordion(
							'settings',
							array(
								'label' => 'Main Component Settings',
								'open'  => 1,
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
						DS_Field::true_false(
							'has_background',
							array(
								'label' => 'Has Background?',
								'ui'    => 1,
							)
						),
						DS_Field::color_picker(
							'component_background',
							array(
								'label'             => 'Component Background',
								'default_value'     => '#ffffff',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'has_background',
											'operator'  => '==',
											'value'     => 1,
										),
									),
								),
							)
						),
						DS_Field::true_false(
							'has_shadow',
							array(
								'label' => 'Has Shadow?',
								'ui'    => 1,
							)
						),
						DS_Field::true_false(
							'has_hover',
							array(
								'label' => 'Has Hover?',
								'ui'    => 1,
							)
						),
						DS_Field::button_group(
							'hover_effect',
							array(
								'label'             => 'Hover Effect',
								'choices'           => DS_Field::get_choices( 3, 'v' ),
								'default_value'     => 'v1',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'has_hover',
											'operator'  => '==',
											'value'     => 1,
										),
									),
								),
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
			DS_Field::group(
				'text_component_settings',
				array(
					'label'      => '',
					'layout'     => 'block',
					'sub_fields' => array(
						DS_Field::accordion(
							'settings',
							array(
								'label' => 'Text Component Settings',
								'open'  => 1,
							)
						),
						DS_Field::true_false(
							'show_role',
							array(
								'label' => 'Show Role?',
								'ui'    => 1,
							)
						),
						DS_Field::true_false(
							'show_bio',
							array(
								'label' => 'Show Bio?',
								'ui'    => 1,
							)
						),
						DS_Field::true_false(
							'show_social_networks',
							array(
								'label' => 'Show Social Networks?',
								'ui'    => 1,
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
						DS_Field::color_picker( 'title_color', array( 'label' => 'Title Color' ) ),
						DS_Field::color_picker( 'content_color', array( 'label' => 'Content Color' ) ),
					),
				),
				$is_super_admin
			),
		);
	}
}
