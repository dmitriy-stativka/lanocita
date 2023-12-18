<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_ModuleDecorations extends DS_Field {

	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = true ): array {

		return array(
			DS_Field::tab(
				'ds_background_decorations_tab',
				array(
					'label'     => 'Background Decorations',
					'placement' => 'left',
				),
				$is_super_admin
			),
			DS_Field::repeater(
				'decor_settings',
				array(
					'label'        => '',
					'layout'       => 'block',
					'button_label' => 'Add Decor',
					'sub_fields'   => array(
						DS_Field::accordion(
							'decor_acc',
							array(
								'label'        => 'Decoration',
								'open'         => 1,
								'multi_expand' => 1,
							)
						),
						DS_Field::button_group(
							'decor_type',
							array(
								'label'         => 'Decor Type',
								'choices'       => array(
									'none'         => 'none',
									'class'        => 'class',
									'image'        => 'image',
									'global image' => 'global image',
								),
								'default_value' => 'none',
							)
						),
						DS_Field::image(
							'decor_image',
							array(
								'label'             => 'Decor Image',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '==',
											'value'     => 'image',
										),
									),
								),
							)
						),
						DS_Field::radio(
							'decor_global_image',
							array(
								'label'             => 'Global Image',
								'choices'           => array( '' => 'none' ),
								'instructions'      => 'Add predefined images in Global Settings -> Decorations',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '==',
											'value'     => 'global image',
										),
									),
								),
							)
						),
						DS_Field::select(
							'decor_class',
							array(
								'label'             => 'Decor Class',
								'choices'           => array( '' => 'none' ),
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '!=',
											'value'     => 'none',
										),
									),
								),
							)
						),
						DS_Field::true_false(
							'embed_image',
							array(
								'label'             => 'Embed Image?',
								'ui'                => 1,
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '==',
											'value'     => 'image',
										),
									),
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '==',
											'value'     => 'global image',
										),
									),
								),
							)
						),
						DS_Field::button_group(
							'horizontal_pos',
							array(
								'label'             => 'Horizontal Position',
								'choices'           => array(
									'left'   => 'left',
									'center' => 'center',
									'right'  => 'right',
								),
								'default_value'     => 'left',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '!=',
											'value'     => 'none',
										),
									),
								),
							)
						),
						DS_Field::button_group(
							'vertical_pos',
							array(
								'label'             => 'Vertical Position',
								'choices'           => array(
									'top'    => 'top',
									'center' => 'center',
									'bottom' => 'bottom',
								),
								'default_value'     => 'top',
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'decor_type',
											'operator'  => '!=',
											'value'     => 'none',
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

	public static function has_module_decors( $field ): array {
		if ( ! class_exists( 'DS_ModuleExtraFields' ) ) {
			return array( false, array() );
		}

		$block_name     = str_replace( 'group_group_', '', $field['parent'] );
		$module_classes = DS_ModuleExtraFields::$module_decoration_classes;

		if ( ! isset( $module_classes[ $block_name ] ) ) {
			return array( false, array() );
		}

		if ( empty( $module_classes[ $block_name ] ) ) {
			return array( false, array() );
		}

		return array( true, $module_classes[ $block_name ] );
	}

	public static function prepare_fields( $field ) {

		list( $has_module_decors, $module_classes ) = self::has_module_decors( $field );

		if ( ! $has_module_decors ) {
			return false;
		}

		if ( 'accordion' === $field['type'] ) {
			return $field;
		}

		$decorations   = get_field( 'global_decorations', 'options' );
		$image_choices = array( '' => 'none' );
		if ( ! empty( $decorations ) ) {
			foreach ( $decorations as $key => $decoration_image_id ) {
				if ( ! empty( $decoration_image_id ) ) {
					$decoration_image_url                  = wp_get_attachment_url( $decoration_image_id );
					$image_choices[ $decoration_image_id ] = 'Decoration Image ' . ( $key + 1 ) . "<img src='{$decoration_image_url}' class='image-tooltip'>";
				}
			}
		}

		// decor_global_image.
		$field['sub_fields'][3]['choices'] = $image_choices;
		if ( count( $image_choices ) <= 1 ) {
			// decor_type.
			unset( $field['sub_fields'][1]['choices']['global image'] );
		}

		// decor_class acf field.
		$field['sub_fields'][4]['choices'] = $module_classes;

		return $field;
	}

	public static function load_group_value( $value, $post_id, $field ) {

		list( $has_module_decors, $module_classes ) = self::has_module_decors( $field );

		if ( ! $has_module_decors ) {
			return false;
		}

		return $value;
	}

	/**
	 * Print the value for the select as similar but simpler array when image field is fetched from DB
	 *
	 * @param int    $image_id attachment id.
	 * @param int    $post_id post id.
	 * @param string $field field.
	 */
	public static function load_global_decorations_value( $image_id, $post_id, $field ) {
		if ( ! empty( $image_id ) ) {
			$decorations = get_field( 'global_decorations', 'options' );

			if ( ! in_array( $image_id, $decorations ) ) {
				return false;
			}
			$image_url = wp_get_attachment_url( $image_id );

			if ( ! empty( $image_url ) ) {
				return array(
					'ID'  => $image_id,
					'id'  => $image_id,
					'url' => $image_url,
				);
			}
		}

		return $image_id;
	}
}

add_filter(
	'acf/prepare_field/name=decor_settings',
	array(
		DS_Field_ModuleDecorations::class,
		'prepare_fields',
	),
	99,
	1
);
add_filter(
	'acf/load_value/name=decor_settings',
	array(
		DS_Field_ModuleDecorations::class,
		'load_group_value',
	),
	10,
	3
);

add_filter(
	'acf/prepare_field/name=ds_background_decorations_tab',
	array(
		DS_Field_ModuleDecorations::class,
		'prepare_fields',
	)
);

add_filter(
	'acf/format_value/name=decor_global_image',
	array(
		DS_Field_ModuleDecorations::class,
		'load_global_decorations_value',
	),
	10,
	3
);
