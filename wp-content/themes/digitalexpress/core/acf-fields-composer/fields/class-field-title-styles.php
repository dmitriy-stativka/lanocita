<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_TitleStyles extends DS_Field {

	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = false ): string {
		return self::add_field(
			'group',
			'title_styles',
			array(
				'label'      => 'Title styles',
				'sub_fields' => array(
					self::add_field(
						'select',
						'tag',
						array(
							'label'         => 'Tag',
							'choices'       => array(
								'h1' => 'h1',
								'h2' => 'h2',
								'h3' => 'h3',
								'h4' => 'h4',
							),
							'default_value' => 'h2',
							'wrapper'       => array(
								'width' => '33',
							),
						)
					),
					self::add_field(
						'number',
						'font-size',
						array(
							'label'   => 'Font size',
							'min'     => 10,
							'max'     => 100,
							'step'    => 1,
							'wrapper' => array(
								'width' => '33',
							),
						)
					),
					self::add_field(
						'color_picker',
						'color',
						array(
							'label'   => 'Color',
							'wrapper' => array(
								'width' => '33',
							),
						)
					),
				),
				'layout'     => 'block',
			),
			$is_super_admin
		);
	}
}
