<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_MediaBackground extends DS_Field {

	/**
	 * Get
	 */
	public static function get(): array {
		return array(
			self::add_field(
				'button_group',
				'media_background_type',
				array(
					'label'   => 'Background Type',
					'choices' => array(
						'image' => 'image',
						'video' => 'video',
					),
				)
			),
			self::add_field(
				'image',
				'media_image',
				array(
					'label'             => 'Image',
					'preview_size'      => 'medium',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'media_background_type',
								'operator'  => '==',
								'value'     => 'image',
							),
						),
					),
				)
			),
			self::add_field(
				'image',
				'media_mobile_image',
				array(
					'label'             => 'Mobile Image',
					'preview_size'      => 'medium',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'media_background_type',
								'operator'  => '==',
								'value'     => 'image',
							),
						),
					),
				)
			),
			self::add_field(
				'select',
				'media_image_position',
				array(
					'label'             => 'Image Position',
					'choices'           => array(
						''        => 'none',
						'bg-full' => 'Full',
						'bg-l-50' => 'Left 50%',
						'bg-r-50' => 'Right 50%',
					),
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'media_background_type',
								'operator'  => '==',
								'value'     => 'image',
							),
						),
					),
				)
			),
			self::add_field(
				'group',
				'media_video',
				array(
					'label'             => 'Video',
					'sub_fields'        => array(
						...DS_Field_Video::get(),
					),
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'media_background_type',
								'operator'  => '==',
								'value'     => 'video',
							),
						),
					),
				)
			),
		);
	}
}
