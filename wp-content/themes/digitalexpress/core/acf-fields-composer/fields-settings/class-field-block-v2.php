<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_Block_V2_ComponentSettings extends DS_Field {
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
						DS_Field_ColumnsOrder::get(),
						DS_Field::true_false(
							'is_vertical',
							array(
								'label' => 'Vertical Columns?',
								'ui'    => 1,
							)
						),
						DS_Field::range(
							'columns_ratio',
							array(
								'label'         => 'Columns Ratio',
								'append'        => '%',
								'default_value' => 50,
							)
						),
						DS_Field::range(
							'inner_gap_top',
							array(
								'label'  => 'Inner Gap Top',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::range(
							'inner_gap_left',
							array(
								'label'  => 'Inner Gap Left',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::range(
							'inner_gap_right',
							array(
								'label'  => 'Inner Gap Right',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::range(
							'inner_gap_bottom',
							array(
								'label'  => 'Inner Gap Bottom',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::color_picker( 'bg_color', array( 'label' => 'Background Color' ) ),
						DS_Field::true_false(
							'has_shadow',
							array(
								'label' => 'Has Shadow?',
								'ui'    => 1,
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
						DS_Field::range(
							'inner_gap_top',
							array(
								'label'  => 'Inner Gap Top',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::range(
							'inner_gap_left',
							array(
								'label'  => 'Inner Gap Left',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::range(
							'inner_gap_right',
							array(
								'label'  => 'Inner Gap Right',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::range(
							'inner_gap_bottom',
							array(
								'label'  => 'Inner Gap Bottom',
								'max'    => 100,
								'append' => '%',
							)
						),
						DS_Field::button_group(
							'horizontal_alignment',
							array(
								'label'         => 'Horizontal Alignment',
								'choices'       => array(
									'left'   => 'left',
									'center' => 'center',
									'right'  => 'right',
								),
								'default_value' => 'left',
							)
						),
						DS_Field::button_group(
							'vertical_alignment',
							array(
								'label'         => 'Vertical Alignment',
								'choices'       => array(
									'top'    => 'top',
									'center' => 'center',
									'bottom' => 'bottom',
								),
								'default_value' => 'center',
							)
						),
					),
				),
				$is_super_admin
			),
			DS_Field_MixedGallery_V1_ComponentSettings::get( $is_super_admin ),
		);
	}
}
