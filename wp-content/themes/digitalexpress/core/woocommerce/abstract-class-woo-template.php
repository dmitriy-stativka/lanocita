<?php
//phpcs:ignoreFile
abstract class DS_WooTemplate {

	public array $composer_fields = [];

	/**
	 * Composer content tabs location
	 * Woocommerce Product by default
	 */
	protected array $location = [
		[
			[
				'param'    => 'post_type',
				'operator' => '==',
				'value'    => 'product',
			],
		],
	];

	/**
	 * Abstract method to init template rules, filters and actions
	 */
	abstract public function build();

	public function __construct(){
		$this->register_composer_fields();

		$this->build();
	}

	/**
	 * Register ACF Composer group for gutenberg block
	 */
	private function register_composer_fields(): void{
		$fields = $this->composer_fields;

		if ( empty( $fields ) ) {
			return;
		}

		$composer_tabs = [];

		foreach ( $fields as $field ) {
			$composer_tabs[] = [
				DS_Field::tab( "tab_{$field['name']}", [ 'label' => $field['title'] ] ),
				DS_Field::group(
                    "group_{$field['name']}",
                    [
						'label'      => '',
						'sub_fields' => $field['composer_fields'],
                    ]
                ),
			];
		}

		if ( ! empty( $composer_tabs ) ) {
			$config = [
				'name'       => 'group_woocommerce',
				'title'      => 'Template content',
				'fields'     => [
					$composer_tabs,
				],
				'location'   => $this->location,
				'menu_order' => 0,
			];

			if ( class_exists( 'ACFComposer\ACFComposer' ) ) {
				ACFComposer\ACFComposer::registerFieldGroup( $config );
			}
		}
	}
}
