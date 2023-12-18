<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_ImageGallery_V1_ComponentSettings extends DS_Field {
	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = true ): array {
		return array(
			DS_Field::group(
				'media_component_settings',
				array(
					'label'      => '',
					'layout'     => 'block',
					'sub_fields' => array(
						DS_Field::accordion(
							'settings',
							array(
								'label' => 'Media Component Settings',
								'open'  => 1,
							)
						),
						DS_Field::button_group(
							'image_ratio',
							array(
								'label'         => 'Image Ratio',
								'choices'       => array(
									'1x1'  => '1x1',
									'4x3'  => '4x3',
									'3x4'  => '3x4',
									'16x9' => '16x9',
									'none' => 'none',
								),
								'default_value' => 'square',
							)
						),
						DS_Field::button_group(
							'main_image_position',
							array(
								'label'         => 'Main Image Horizontal Position',
								'choices'       => array(
									'full'   => 'full',
									'left'   => 'left',
									'center' => 'center',
									'right'  => 'right',
								),
								'default_value' => 'full',
							)
						),
						DS_Field::button_group(
							'main_image_vertical_position',
							array(
								'label'         => 'Main Image Vertical Position',
								'choices'       => array(
									'top'    => 'top',
									'center' => 'center',
									'bottom' => 'bottom',
								),
								'default_value' => 'center',
							)
						),
						DS_Field::button_group(
							'secondary_image_position',
							array(
								'label'         => 'Secondary Image Horizontal Position',
								'choices'       => array(
									'left'   => 'left',
									'center' => 'center',
									'right'  => 'right',
								),
								'default_value' => 'left',
							)
						),
						DS_Field::button_group(
							'secondary_image_vertical_position',
							array(
								'label'         => 'Secondary Image Vertical Position',
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
		);
	}
}
