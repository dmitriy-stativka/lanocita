<?php
/**
 * Field for font family and font weights
 */
// phpcs:ignoreFile
$font_weight_fields = array(
	array(
		'name'        => 'backtitle-font-weight',
		'logic_field' => 'field_61a0ac9b5c730',
		'default'     => 900,
		'width'       => 10,
	),
	array(
		'name'        => 'pretitle-font-weight',
		'logic_field' => 'field_61a0ae565c738',
		'default'     => 400,
		'width'       => 10,
	),
	array(
		'name'        => 'h1-font-weight',
		'logic_field' => 'field_6048fd2cf30fd',
		'default'     => 700,
		'width'       => 10,
	),
	array(
		'name'        => 'subtitle-font-weight',
		'logic_field' => 'field_61a0afd35c744',
		'default'     => 400,
		'width'       => 10,
	),
	array(
		'name'        => 'h2-font-weight',
		'logic_field' => 'field_60a22851d43fb',
		'default'     => 700,
		'width'       => 10,
	),
	array(
		'name'        => 'h3-font-weight',
		'logic_field' => 'field_60a2294f20362',
		'default'     => 700,
		'width'       => 10,
	),
	array(
		'name'        => 'h4-font-weight',
		'logic_field' => 'field_60a22a57096ee',
		'default'     => 700,
		'width'       => 10,
	),
	array(
		'name'        => 'base-text-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 25,
	),
	array(
		'name'        => 'larger-text-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 33,
	),
	array(
		'name'        => 'smaller-text-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 33,
	),
	array(
		'name'        => 'blog-text-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 33,
	),
	array(
		'name'        => 'button-font-weight',
		'logic_field' => 'field_6048fc473d089',
		'default'     => 400,
		'width'       => 15,
	),
	array(
		'name'        => 'label-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 25,
	),
	array(
		'name'        => 'input-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 25,
	),
	array(
		'name'        => 'message-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 33.33,
	),
	array(
		'name'        => 'main-header-font-weight',
		'logic_field' => 'field_60a22bda81a76',
		'default'     => 400,
		'width'       => 25,
	),
);

if ( ! function_exists( 'ds_get_acf_font_weight_field' ) ) {
	function ds_get_acf_font_weight_field( $args ) {
		return array(
			'key'               => 'field_' . $args['name'],
			'label'             => $args['label'] . ': ' . $args['font_name'],
			'name'              => $args['name'],
			'type'              => 'checkbox',
			'instructions'      => '',
			'required'          => 0,
			'conditional_logic' => array(
				array(
					array(
						'field'    => $args['logic_field'],
						'operator' => '==',
						'value'    => $args['font_name'],
					),
				),
			),
			'wrapper'           => array(
				'width' => '50',
				'class' => '',
				'id'    => '',
			),
			'ds_asset_type'     => '',
			'ds_default_value'  => 0,
			'choices'           => $args['choices'],
			'allow_custom'      => 0,
			'default_value'     => array( 300, 400, 700 ),
			'layout'            => 'horizontal',
			'toggle'            => 0,
			'return_format'     => 'value',
			'save_custom'       => 0,
		);
	}
}

if ( ! function_exists( 'ds_add_acf_font_weight_fields' ) ) {
	function ds_add_acf_font_weight_fields( $font_type, $field_label, $logic_key ) {

		$sub_fields = array();

		if ( ! empty( DS_ExpressFonts::$theme_fonts ) ) {
			foreach ( DS_ExpressFonts::$theme_fonts as $font => $weights ) {
				$weight_field_args = array(
					'name'        => ds_get_field_key_font_weight( $font, $font_type ),
					'label'       => $field_label,
					'logic_field' => $logic_key,
					'font_name'   => $font,
					'choices'     => array_combine( $weights, $weights ),
				);
				$sub_fields[]      = ds_get_acf_font_weight_field( $weight_field_args );
			}
		}

		if ( ! empty( $sub_fields ) ) {
			acf_add_local_field_group(
				array(
					'key'    => 'group_fw_' . $font_type,
					'title'  => $field_label,
					'fields' => $sub_fields,
				)
			);
		}
	}
}

if ( ! function_exists( 'ds_add_acf_option_font_weight' ) ) {
	function ds_add_acf_option_font_weight( $args ) {
		global $dsmp_settings;
		$primary_weight_choices   = array_combine( $dsmp_settings->primary_font_weight, $dsmp_settings->primary_font_weight );
		$secondary_weight_choices = array_combine( $dsmp_settings->secondary_font_weight, $dsmp_settings->secondary_font_weight );

		$field_options = array(
			array(
				'prefix'      => 'field_fw_p_',
				'choices'     => $primary_weight_choices,
				'logic_value' => '--font-family-primary',
			),
			array(
				'prefix'      => 'field_fw_s_',
				'choices'     => $secondary_weight_choices,
				'logic_value' => '--font-family-secondary',
			),
		);

		foreach ( $field_options as $options ) {
			acf_add_local_field(
				array(
					'key'               => $options['prefix'] . $args['name'],
					'label'             => 'Weight',
					'name'              => $args['name'],
					'type'              => 'select',
					'instructions'      => '--' . $args['name'],
					'required'          => 0,
					'conditional_logic' => array(
						array(
							array(
								'field'    => $args['logic_field'],
								'operator' => '==',
								'value'    => $options['logic_value'],
							),
						),
					),
					'wrapper'           => array(
						'width' => $args['width'],
						'class' => '',
						'id'    => '',
					),
					'ds_asset_type'     => 'font_weight',
					'ds_css_key_name'   => $args['name'],
					'choices'           => $options['choices'],
					'default_value'     => $args['default'],
					'allow_null'        => 0,
					'multiple'          => 0,
					'ui'                => 0,
					'return_format'     => 'value',
					'ajax'              => 0,
					'placeholder'       => '',
				)
			);
		}
	}
}

if ( function_exists( 'acf_add_local_field' ) ) :
	$fonts   = array_keys( DS_ExpressFonts::$theme_fonts );
	$choices = array_combine( $fonts, $fonts );

	/**
	 * Primary Font Family
	 */
	acf_add_local_field(
		array(
			'key'             => 'field_font_family_primary',
			'label'           => 'Primary Font Family',
			'name'            => 'font-family-primary',
			'type'            => 'select',
			'instructions'    => '',
			'required'        => 0,
			'wrapper'         => array(
				'width' => '50',
				'class' => '',
				'id'    => '',
			),
			'ds_asset_type'   => 'font_family',
			'ds_css_key_name' => 'font-family-primary',
			'choices'         => $choices,
			'default_value'   => 'Roboto',
			'allow_null'      => 0,
			'multiple'        => 0,
			'ui'              => 0,
			'return_format'   => 'value',
			'ajax'            => 0,
			'placeholder'     => '',
		)
	);

	/**
	 * Secondary Font Family
	 */
	acf_add_local_field(
		array(
			'key'             => 'field_font_family_secondary',
			'label'           => 'Secondary Font Family',
			'name'            => 'font-family-secondary',
			'type'            => 'select',
			'instructions'    => '',
			'required'        => 0,
			'wrapper'         => array(
				'width' => '50',
				'class' => '',
				'id'    => '',
			),
			'ds_asset_type'   => 'font_family',
			'ds_css_key_name' => 'font-family-secondary',
			'choices'         => $choices,
			'default_value'   => 'Roboto',
			'allow_null'      => 0,
			'multiple'        => 0,
			'ui'              => 0,
			'return_format'   => 'value',
			'ajax'            => 0,
			'placeholder'     => '',
		)
	);

	ds_add_acf_font_weight_fields( 'primary', 'Primary Font Weight', 'field_font_family_primary' );
	ds_add_acf_font_weight_fields( 'secondary', 'Secondary Font Weight', 'field_font_family_secondary' );

	if ( ! empty( $font_weight_fields ) ) {
		foreach ( $font_weight_fields as $args ) {
			ds_add_acf_option_font_weight( $args );
		}
	}
endif;
