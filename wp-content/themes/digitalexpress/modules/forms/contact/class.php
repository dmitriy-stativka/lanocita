<?php
// phpcs:ignoreFile

class DS_Module_contact extends DS_AbstractModule {

	public $name = 'contact';

	public $title = 'Contact';

	protected $description = 'Contact Us form with contact info';

	protected $category = 'ds-forms';

	protected $icon = 'email';

	protected $keywords = array( 'contact', 'form', 'cf7', 'shortcode' );

	public function add_composer_fields(): array {
		return array(
			DS_Field::accordion( 'content_ac', array( 'label' => 'Main Content' ) ),
			DS_Field::text( 'pretitle', array( 'label' => 'Pretitle' ) ),
			DS_Field::text( 'title', array( 'label' => 'Title' ) ),
			DS_Field::text( 'subtitle', array( 'label' => 'Subtitle' ) ),
			DS_Field::wysiwyg( 'description', array( 'label' => 'Description' ) ),
			DS_Field_CTAList::get(),
			DS_Field::button_group(
				'content_type',
				array(
					'label'         => 'Additional Content',
					'choices'       => array(
						'none'       => 'None',
						'info_box'   => 'Info Box',
						'map_iframe' => 'Map Iframe',
						'image'      => 'Image',
					),
					'default_value' => 'none',
				)
			),
			DS_Field::text(
				'info_box_title',
				array(
					'label'             => 'Info Box Title',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'content_type',
								'operator'  => '==',
								'value'     => 'info_box',
							),
						),
					),
				)
			),
			DS_Field::image(
				'main_image',
				array(
					'label'             => 'Main Image',
					'preview_size'      => 'medium',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'content_type',
								'operator'  => '==',
								'value'     => 'image',
							),
						),
					),
				)
			),
			DS_Field::image(
				'front_image',
				array(
					'label'             => 'Front Image',
					'preview_size'      => 'medium',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'content_type',
								'operator'  => '==',
								'value'     => 'image',
							),
						),
					),
				)
			),
			DS_Field::textarea(
				'map_iframe',
				array(
					'label'             => 'Map Iframe',
					'rows'              => 3,
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'content_type',
								'operator'  => '==',
								'value'     => 'map_iframe',
							),
						),
					),
				)
			),
			DS_Field::repeater(
				'contact_info',
				array(
					'label'        => 'Contact Info',
					'layout'       => 'block',
					'button_label' => 'Add Item',
					'sub_fields'   => array(
						DS_Field::radio(
							'type',
							array(
								'label'         => '',
								'choices'       => array(
									'contact_info'  => 'Contact Info',
									'address'       => 'Address',
									'working_hours' => 'Working Hours',
								),
								'default_value' => 'label',
								'layout'        => 'horizontal',
							)
						),
						DS_Field::text( 'section_title', array( 'label' => 'Title' ) ),
						DS_Field::repeater(
							'info',
							array(
								'label'             => '',
								'button_label'      => 'Add Info',
								'layout'            => 'table',
								'sub_fields'        => array(
									DS_Field::radio(
										'type',
										array(
											'label'   => 'Type',
											'choices' => array(
												'tel'    => 'Phone',
												'mailto' => 'Email',
											),
											'default_value' => 'tel',
											'layout'  => 'horizontal',
										)
									),
									DS_Field::text(
										'label',
										array(
											'label' => 'Label',
										)
									),
									DS_Field::text(
										'value',
										array(
											'label' => 'Value',
										)
									),
								),
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'type',
											'operator'  => '==',
											'value'     => 'contact_info',
										),
									),
								),
							)
						),
						DS_Field::group(
							'address',
							array(
								'label'             => '',
								'sub_fields'        => array(
									DS_Field::text(
										'location',
										array(
											'label' => 'Location',
										)
									),
									DS_Field::url(
										'location_link',
										array(
											'label' => 'Location Link',
										)
									),
								),
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'type',
											'operator'  => '==',
											'value'     => 'address',
										),
									),
								),
							)
						),
						DS_Field::repeater(
							'working_hours',
							array(
								'label'             => 'Working Hours',
								'sub_fields'        => array(
									DS_Field::text(
										'day',
										array(
											'label' => 'Day(s)',
										)
									),
									DS_Field::text(
										'status',
										array(
											'label' => 'Status',
										)
									),
								),
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'type',
											'operator'  => '==',
											'value'     => 'working_hours',
										),
									),
								),
							)
						),
					),
				)
			),
			DS_Field::accordion( 'form_content_ac', array( 'label' => 'Form Content' ) ),
			DS_Field::text( 'form_pretitle', array( 'label' => 'Pretitle' ) ),
			DS_Field::text( 'form_title', array( 'label' => 'Title' ) ),
			DS_Field::text( 'form_subtitle', array( 'label' => 'Subtitle' ) ),
			DS_Field::textarea(
				'form_description',
				array(
					'label' => 'Description',
					'rows'  => 3,
				)
			),
			DS_Field::button_group(
				'form_type',
				array(
					'label'         => 'Form Type',
					'choices'       => array(
						'shortcode' => 'shortcode',
						'embed'     => 'embed',
					),
					'default_value' => 'shortcode',
				)
			),
			DS_Field::text(
				'form_shortcode',
				array(
					'label'             => 'Form Shortcode',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'form_type',
								'operator'  => '==',
								'value'     => 'shortcode',
							),
						),
					),
				)
			),
			DS_Field::text(
				'form_embed',
				array(
					'label'             => 'Embed Form Code',
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'form_type',
								'operator'  => '==',
								'value'     => 'embed',
							),
						),
					),
				)
			),

			DS_Field::accordion( 'advanced_settings', array( 'label' => 'Advanced Settings' ) ),
			DS_Field::tab(
				'title_tab',
				array(
					'label'     => 'Title Styles',
					'placement' => 'left',
				)
			),
			DS_Field_TitleStyles::get(),
			DS_Field::tab(
				'background_styles_tab',
				array(
					'label'     => 'Background Styles',
					'placement' => 'left',
				)
			),
			DS_Field_Background::get(),
			DS_Field_ModuleDecorations::get(),
			DS_Field::tab(
				'effects_tab',
				array(
					'label'     => 'Effects',
					'placement' => 'left',
				)
			),
			DS_Field_ModuleEffects::get(),
			DS_Field::tab(
				'component_settings_tab',
				array(
					'label'     => 'Component Settings',
					'placement' => 'left',
				),
				true
			),
			DS_Field_ImageGallery_V1_ComponentSettings::get(),
			DS_Field::tab(
				'layout_settings_tab',
				array(
					'label'     => 'Layout Settings',
					'placement' => 'left',
				),
				true
			),
			DS_Field::group(
				'layout_settings',
				array(
					'label'      => 'Layout Settings',
					'layout'     => 'block',
					'sub_fields' => array(
						DS_Field_Container::get(),
						DS_Field_ColumnsOrder::get(),
						DS_Field::true_false(
							'vertical_columns',
							array(
								'label'         => 'Vertical Columns',
								'default_value' => 0,
								'ui'            => 1,
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
						DS_Field_LayoutType::get( 3 ),
						DS_Field_ModuleGap::get(),
					),
				),
				true
			),
		);
	}
}
