<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_SliderArrows_ComponentSettings extends DS_Field {
	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = true ): string {
		return self::add_field(
			'group',
			'slider_arrows_component_settings',
			array(
				'label'      => '',
				'layout'     => 'block',
				'sub_fields' => array(
					DS_Field::accordion(
						'settings',
						array(
							'label' => 'Slider Arrows Component Settings',
							'open'  => 1,
						)
					),
					DS_Field::color_picker( 'bg_color', array( 'label' => 'Background Color' ) ),
					DS_Field::button_group(
						'shape',
						array(
							'label'         => 'Shape',
							'choices'       => array(
								''            => 'none',
								'round'       => 'round',
								'square'      => 'square',
								'rectangular' => 'rectangular',
							),
							'default_value' => 'round',
						)
					),
				),
			),
			$is_super_admin
		);
	}
}
