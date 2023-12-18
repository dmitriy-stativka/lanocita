<?php
// phpcs:ignoreFile

class DS_Module_testimonials_slider_1 extends DS_AbstractModule {

	protected $feature = 'testimonials_feature';

	public $name = 'testimonials-slider-1';

	public $title = 'Testimonials Slider 1';

	protected $description = 'Testimonials slider';

	protected $category = 'ds-sliders';

	protected $icon = 'id';

	protected $keywords = array( 'testimonials', 'slider' );

	public function enqueue_assets(): void {
		wp_enqueue_script( 'swiper-js', get_template_directory_uri() . '/assets/vendors/swiper/swiper-bundle.min.js', true, true, true );
		wp_enqueue_style( 'swiper-css', get_template_directory_uri() . '/assets/vendors/swiper/swiper-bundle.min.css', array(), '1.8' );

		wp_enqueue_style( 'sliders-css', get_template_directory_uri() . '/assets/_dist/css/_modules/ds-sliders.css' );
		wp_enqueue_script( 'sliders-js', get_template_directory_uri() . '/assets/_dist/js/ds-sliders.js', true, true );
	}

	/* Video/Image popups */

	public function add_composer_fields(): array {
		return array(
			DS_Field::accordion( 'testimonials_content_ac', array( 'label' => 'Testimonials Content' ) ),
			DS_Field::relationship(
				'testimonials',
				array(
					'label'         => 'Testimonials',
					'post_type'     => 'testimonials',
					'filters'       => array( 'search' ),
					'elements'      => array( 'featured_image' ),
					'return_format' => 'id',
				)
			),
			DS_Field::text(
				'video_play_text',
				array(
					'label' => 'Video play text',
				)
			),
			DS_Field::true_false(
				'play_video_in_popup',
				array(
					'label' => 'Play video in popup?',
					'ui'    => 1,
				)
			),
			DS_Field::accordion( 'advanced_settings', array( 'label' => 'Advanced Settings' ) ),
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
				'slider_settings_tab',
				array(
					'label'     => 'Slider Settings',
					'placement' => 'left',
				)
			),
			DS_Field::group(
				'module_slider_settings',
				array(
					'label'      => 'Slider Settings',
					'layout'     => 'block',
					'sub_fields' => array(
						DS_Field_SliderColumns::get(),
						DS_Field_SliderColumnsGap::get(),
						DS_Field_SliderArrowsNavigation::get(),
						DS_Field_SliderPagination::get(),
						DS_Field::true_false(
							'data_leading-zero',
							array(
								'label'             => 'Leading Zero',
								'ui'                => 1,
								'default_value'     => 1,
								'conditional_logic' => array(
									array(
										array(
											'fieldPath' => 'data_pagination',
											'operator'  => '==',
											'value'     => 'combo',
										),
									),
									array(
										array(
											'fieldPath' => 'data_pagination',
											'operator'  => '==',
											'value'     => 'fraction',
										),
									),
								),
							)
						),
						DS_Field_SliderAutoplay::get(),
						DS_Field_SliderEffect::get(),
					),
				)
			),
			DS_Field_SliderArrows_ComponentSettings::get(),
			DS_Field::tab(
				'effects_tab',
				array(
					'label'     => 'Effects',
					'placement' => 'left',
				)
			),
			DS_Field_ModuleEffects::get(),
			DS_Field::tab(
				'content_settings_tab',
				array(
					'label'     => 'Content Settings',
					'placement' => 'left',
				)
			),
			DS_Field_TextPosition::get(),
			DS_Field_ContentPosition::get(),
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
						DS_Field_LayoutType::get(),
						DS_Field_ScreenHeight::get(),
						DS_Field_ModuleGap::get(),
					),
				),
				true
			),
		);
	}
}
