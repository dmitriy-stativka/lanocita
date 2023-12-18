<?php
/**
 * Parent class which extends module creation
 * see /modules/test/example/class.php
 */
// phpcs:ignoreFile
if ( ! class_exists( 'DS_AbstractModule' ) ) {
	abstract class DS_AbstractModule {

		/**
		 * check if module must be disabled depend on theme feature
		 */
		protected $feature;

		/**
		 * acf_register_block "name"
		 */
		public $name;

		/**
		 * acf_register_block "title"
		 */
		public $title;

		/**
		 * acf_register_block "description"
		 */
		protected $description;

		/**
		 * acf_register_block "category"
		 */
		protected $category = 'uncategorized';

		/**
		 * acf_register_block "icon"
		 */
		protected $icon = 'editor-help';

		/**
		 * acf_register_block "keywords"
		 * using for search field in gutenberg editor
		 */
		protected $keywords = array();

		/**
		 * acf_register_block "supports" => "jsx"
		 * used for enabling inner blocks feature for block
		 */
		protected bool $supportInnerBlocks = false;

		/**
		 * Custom module template name
		 */
		protected string $template = '';

		/**
		 * Module variations from json generated with Module Styles post type
		 */
		protected array $variations = array();

		public function init() {
			add_action(
				'acf/init',
				function () {

					// check if module allowed to be registered
					global $allowed_dsmp_modules;
					$allowed_modules = is_array( $allowed_dsmp_modules ) ? $allowed_dsmp_modules : array();
					if ( in_array( $this->name, $allowed_modules ) ) {
						return false;
					}

					// check if module connected to feature option fields, for example post type feature
					if ( $this->feature && get_option( 'options_' . $this->feature ) != 'on' ) {
						return false;
					}

					// get module variations
					if ( class_exists( 'DS_PostTypes_ModuleStyles' ) && file_exists( DS_PostTypes_ModuleStyles::$module_variations_dir . $this->name . '.json' ) ) {
						$this->variations = json_decode( file_get_contents( DS_PostTypes_ModuleStyles::$module_variations_dir . $this->name . '.json' ), true ) ?: array();
					}

					// init module group
					$this->acf_group_init();

					// add ACF field group using ACF Field Composer
					$this->register_composer_fields();

					// add ACF field group using php migration tool
					$this->add_acf_fields();
				},
				10
			);
		}

		/**
		 * register ACF group for gutenberg block
		 * https://www.advancedcustomfields.com/blog/acf-5-8-introducing-acf-blocks-for-gutenberg/
		 */
		private function acf_group_init(): void {
			acf_register_block_type(
				array(
					'name'            => $this->name,
					'title'           => __( $this->title, 'dstheme' ),
					'description'     => __( $this->description, 'dstheme' ),
					'render_callback' => array( $this, 'render_callback' ),
					'category'        => $this->category,
					'icon'            => $this->icon,
					'keywords'        => $this->keywords,
					'mode'            => 'preview',
					'enqueue_assets'  => array( $this, 'enqueue_assets' ),
					'variations'      => $this->variations,
					'supports'        => array(
						'align'           => false,
						'mode'            => false,
						'jsx'             => $this->supportInnerBlocks,
						'customClassName' => false,
						'anchor'          => true,
					),
					'example'         => array(
						'attributes' => array(
							'mode' => 'preview',
							'data' => array( 'is_preview' => true ),
						),
					),
				)
			);
		}

		/**
		 * Callback function for enqueuing assets for specific block only when the block is used on a page
		 */
		public function enqueue_assets(): void {
			// TODO: uncomment when move assets to module folder
			// if ($this->new) {
			// $path = str_replace(trailingslashit(get_stylesheet_directory()), '', dirname(__FILE__ ));
			// wp_enqueue_style( "{$this->name}", get_stylesheet_directory_uri() . '/' . $path . '/assets/_dist/css/style.css', array(), null );
			// wp_enqueue_script( "{$this->name}", get_stylesheet_directory_uri() . '/' . $path . '/assets/_dist/js/module.js', array(), null, true );
			// }
		}

		/**
		 * Register ACF exported fields
		 */
		public function add_acf_fields(): void {
		}

		/**
		 * Register ACF Composer fields
		 *
		 * @return array
		 */
		public function add_composer_fields(): array {
			return array();
		}

		/**
		 * Register ACF Composer group for gutenberg block
		 */
		private function register_composer_fields(): void {
			if ( class_exists( 'ACFComposer\ACFComposer' ) ) {
				$fields = $this->add_composer_fields();

				if ( empty( $fields ) ) {
					return;
				}

				$config = array(
					'name'       => "group_{$this->name}",
					'title'      => $this->name,
					'fields'     => array(
						$fields,
					),
					'location'   => array(
						array(
							array(
								'param'    => 'block',
								'operator' => '==',
								'value'    => "acf/{$this->name}",
							),
						),
					),
					'menu_order' => - 99,
				);

				ACFComposer\ACFComposer::registerFieldGroup( $config );
			}
		}

		/**
		 * @var bool $is_preview True during preview - defined as custom field in example data.
		 */
		public function render_callback( $block, $content = '', $is_preview = false ) {
			global $post;

			$moduleConfig = new DS_ModuleDefaultSettings();

			$block['className'] = $moduleConfig->classNames;

			if ( $this->category == 'ds-sliders' ) {
				$moduleSlider = new DS_ModuleSlider();
			} elseif ( $this->category == 'ds-3d-media' ) {
				$moduleImageSpinner = new DS_ModuleImageSpinnerSettings();
			}

			if ( $is_preview ) {
				echo '<div class="block-label">' . $block['title'] . '</div>';
				echo '<div class="block-name preview-label ds-super-admin"> Module name: ' . ds_get_block_name( $block['name'] ) . '</div>';

				$block_preview = '';
				if ( ! empty( $block['data']['_ds_preview_url'] ) ) {
					$block_preview = get_site_url( null, $block['data']['_ds_preview_url'] );
				} elseif ( file_exists( ds_get_module_img( $this->name, true ) ) ) {
					$block_preview = ds_get_module_img( $this->name );
				}

				if ( ! empty( $block_preview ) ) {
					echo '<img class="preview-hover" src="' . $block_preview . '" width="100%" style="display: none;">';
				} else {
					echo '<div class="preview-hover" style="display:none;">Preview does not exist!</div>';
				}
			}

			echo $is_preview ? '<div class="block-preview-content">' : ''; // temporary usage for preview url because of bug in block variations example data

			$category_name = str_replace( 'ds-', '', $this->category );
			$filepath      = get_theme_file_path( "/modules/{$category_name}/{$this->name}/view.php" );
			if ( file_exists( $filepath ) ) {
				include $filepath;
			} else {
				echo '<div>Template does not exist!</div>';
			}

			echo $is_preview ? '</div>' : ''; // close block-preview-content
		}
	}

}
