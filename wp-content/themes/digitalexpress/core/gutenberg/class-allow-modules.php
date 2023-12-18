<?php
/**
 * Add functionality to enable-disable DSMP Gutenberg modules in adminpanel
 * Using list of registered classes from modules folder and put to acf checkbox field
 * registered for acf option page /wp-admin/admin.php?page=allowed-modules
 *
 * Allowed modules are stored in global variable
 *
 * @global $allowed_dsmp_modules;
 */

 // phpcs:ignoreFile
if ( ! class_exists( 'DS_AllowModules' ) ) {

	class DS_AllowModules {

		/**
		 * List of all ACF DSMP moduels
		 */
		private array $dsmp_modules = array();

		public function __construct() {
			add_action(
				'acf/init',
				function () {
					$this->add_option_page_fields();
					$this->get_allowed_modules();
				}
			);

			$this->init_modules();
		}

		/**
		 * Get allowed fields from DB and set to a global variable
		 */
		private function get_allowed_modules() {
			global $allowed_dsmp_modules;
			$allowed_dsmp_modules = get_field( 'theme_allowed_modules', 'options' );
		}

		/**
		 * Glob and init all DSMP ACF modules
		 */
		private function init_modules() {
			// loop for new folder structure
			foreach ( glob( get_template_directory() . '/modules/**/*', GLOB_ONLYDIR ) as $file ) {
				if ( $file ) {
					require_once $file . '/class.php';

					$module_controller = 'DS_Module_' . str_replace( '-', '_', basename( $file ) );
					if ( class_exists( $module_controller ) ) {
						$module                              = new $module_controller();
						$this->dsmp_modules[ $module->name ] = $module->title . ' - ' . $module->name;
						$module->init();
					}
				}
			}

			// foreach ( glob( get_template_directory() . '/core/gutenberg/modules/**/*.php' ) as $filename ) {
			// require_once $filename;
			//
			// $module_controller = "DS_Module_" . basename($filename, ".php");
			// if( class_exists( $module_controller ) ){
			// $module = new $module_controller();
			// $this->dsmp_modules[ $module->name ] = $module->title." - ".$module->name;
			// $module->init();
			// }
			// }
		}

		/**
		 * ACF group for options page with all DSMP ACF modules
		 */
		private function add_option_page_fields() {
			if ( function_exists( 'acf_add_local_field_group' ) ) :
				acf_add_local_field_group(
					array(
						'key'                   => 'group_6346b3f8725ae',
						'title'                 => 'DSMP Moduels',
						'fields'                => array(
							array(
								'key'               => 'field_6346b46a937d8',
								'label'             => 'DSMP Modules',
								'name'              => 'theme_allowed_modules',
								'type'              => 'checkbox',
								'instructions'      => 'List of DSMP modules to disable from the gutenberg',
								'required'          => 0,
								'conditional_logic' => 0,
								'wrapper'           => array(
									'width' => '',
									'class' => '',
									'id'    => '',
								),
								'ds_asset_type'     => '',
								'choices'           => $this->dsmp_modules,
								'allow_custom'      => 0,
								'default_value'     => array(),
								'layout'            => 'vertical',
								'toggle'            => 1,
								'return_format'     => 'value',
								'save_custom'       => 0,
							),
						),
						'location'              => array(
							array(
								array(
									'param'    => 'options_page',
									'operator' => '==',
									'value'    => 'allowed-modules',
								),
							),
						),
						'menu_order'            => 0,
						'position'              => 'normal',
						'style'                 => 'seamless',
						'label_placement'       => 'top',
						'instruction_placement' => 'label',
						'hide_on_screen'        => '',
						'active'                => true,
						'description'           => '',
						'show_in_rest'          => 0,
					)
				);
			endif;
		}
	}

	new DS_AllowModules();
}
