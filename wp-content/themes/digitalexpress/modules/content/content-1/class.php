<?php
// phpcs:ignoreFile

class DS_Module_content_1 extends DS_AbstractModule {

	public $name = 'content-1';

	public $title = 'Content 1';

	protected $description = 'Listing of content cards';

	protected $category = 'ds-content';

	protected $icon = 'images-alt';

	protected $keywords = array( 'content', 'image' );

	public function add_composer_fields(): array {
		global $dsmp_settings;
		$post_types = is_array( $dsmp_settings->post_types ) ? $dsmp_settings->post_types : array( $dsmp_settings->post_types );

		return array(
			DS_Field::accordion( 'cards_content_accordion', array( 'label' => 'Cards Content' ) ),
			DS_Field::button_group(
				'content_type',
				array(
					'label'         => 'Content type',
					'choices'       => array(
						'static' => 'static',
						'posts'  => 'posts',
						'ajax'   => 'ajax',
					),
					'default_value' => 'static',
				)
			),
			DS_Field::group(
				'post_type_data',
				array(
					'label'             => 'Post Type Data',
					'sub_fields'        => array(
						DS_Field::select(
							'post_type',
							array(
								'label'   => 'Choose post type',
								'choices' => array_combine( $post_types, $post_types ),
							)
						),
						DS_Field::range(
							'posts_per_page',
							array(
								'label'         => 'Per page',
								'min'           => 1,
								'max'           => 12,
								'default_value' => 6,
							)
						),
						DS_Field::button_group(
							'has_image',
							array(
								'label'         => 'Image',
								'choices'       => array(
									'enable'  => 'enable',
									'disable' => 'disable',
								),
								'default_value' => 'enable',
							)
						),
						DS_Field::text(
							'load_more_text',
							array(
								'label'         => 'Load more text',
								'default_value' => 'Load more',
							)
						),
					),
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'content_type',
								'operator'  => '==',
								'value'     => 'ajax',
							),
						),
					),
				)
			),
			DS_Field::post_object(
				'posts',
				array(
					'label'             => 'Posts',
					'post_type'         => array_merge( array( 'page' ), $post_types ),
					'multiple'          => 1,
					'conditional_logic' => array(
						array(
							array(
								'fieldPath' => 'content_type',
								'operator'  => '==',
								'value'     => 'posts',
							),
						),
					),
				)
			),
			DS_Field_Block_V1_Content::get(
				array(
					array(
						array(
							'fieldPath' => 'content_type',
							'operator'  => '==',
							'value'     => 'static',
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
			DS_Field_ComponentTitle::get(),
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
			DS_Field_Block_V1_ComponentSettings::get(),
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
						DS_Field_ComponentGap::get( 'card_gap_vertical', array( 'label' => 'Card Vertical Gap (px)' ) ),
						DS_Field_ComponentGap::get( 'card_gap_horizontal', array( 'label' => 'Card Horizontal Gap (px)' ) ),
						DS_Field_Columns::get(),
						DS_Field_LayoutType::get(),
						DS_Field_ModuleGap::get(),
					),
				),
				true
			),
		);
	}
}
