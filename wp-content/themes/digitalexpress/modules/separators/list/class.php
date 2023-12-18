<?php
// phpcs:ignoreFile

class DS_Module_list extends DS_AbstractModule {

	public $name = 'list';

	public $title = 'List';

	protected $description = 'List';

	protected $category = 'ds-separators';

	protected $icon = 'editor-ul';

	protected $keywords = array( 'list', 'separator' );

	public function add_composer_fields(): array {
		return array(
			DS_Field::accordion( 'title_ac', array( 'label' => 'Title' ) ),
			DS_Field::text( 'title', array( 'label' => 'Title' ) ),
			DS_Field::accordion( 'list_ac', array( 'label' => 'List' ) ),
			DS_Field::repeater(
				'items',
				array(
					'label'        => 'Items',
					'layout'       => 'block',
					'button_label' => 'Add Item',
					'sub_fields'   => array(
						DS_Field::text( 'title', array( 'label' => 'Title' ) ),
						DS_Field::text( 'description', array( 'label' => 'Description' ) ),
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
			DS_Field::tab(
				'effects_tab',
				array(
					'label'     => 'Effects',
					'placement' => 'left',
				)
			),
			DS_Field_ModuleEffects::get(),
			DS_Field::tab(
				'list_tab',
				array(
					'label'     => 'List Styles',
					'placement' => 'left',
				)
			),
			DS_Field::select(
				'list_header_tag',
				array(
					'label'         => 'Item header tag',
					'choices'       => array(
						'h1' => 'h1',
						'h2' => 'h2',
						'h3' => 'h3',
						'h4' => 'h4',
					),
					'default_value' => 'h2',
					'ui'            => 1,
				)
			),
			DS_Field::color_picker( 'list_color', array( 'label' => 'Color' ) ),
			DS_Field::number(
				'list_font_size',
				array(
					'label' => 'Font size',
					'min'   => 10,
					'max'   => 100,
					'step'  => 1,
				)
			),
		);
	}
}
