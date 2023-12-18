<?php
/**
 * Register a Custom Post Type
 *
 * @package DS_Theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'DS_PostTypes_ModuleStyles' ) ) {

	/**
	 * Class responsible for registering a CPT
	 */
	class DS_PostTypes_ModuleStyles {

		/**
		 * Declare CPT name
		 *
		 * @var string
		 */
		private string $name = 'module_styles';

		/**
		 * Declare module variations directory
		 *
		 * @var string
		 */
		public static string $module_variations_dir = '';

		/**
		 * Construct
		 */
		public function __construct() {

			self::$module_variations_dir = trailingslashit( wp_get_upload_dir()['basedir'] . '/dsmp-assets/modules-variations/' );

			if ( ! is_dir( self::$module_variations_dir ) ) {
				mkdir( self::$module_variations_dir, 0755, true ); //phpcs:ignore
			}

			if ( ! ds_is_super_admin() || ! class_exists( 'acf' ) ) {
				return;
			}

			add_action( 'init', array( $this, 'register_post_types' ) );
			add_filter( "manage_{$this->name}_posts_columns", array( $this, 'cpt_admin_columns' ) );
			add_action( "manage_{$this->name}_posts_custom_column", array( $this, 'cpt_admin_columns_data' ), 10, 2 );
			add_action( "save_post_{$this->name}", array( $this, 'save_styles' ), 10, 2 );
			add_action( 'restrict_manage_posts', array( $this, 'add_filters' ) );
			add_action( 'manage_posts_extra_tablenav', array( $this, 'add_after_filter_data' ), 999 );
			add_action( 'parse_query', array( $this, 'apply_filters_query' ) );

			add_action( 'admin_enqueue_scripts', array( $this, 'theme_admin_assets' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'theme_admin_editor_assets' ) );

			add_action( 'wp_ajax_ds_generate_module_variations', array( $this, 'ds_generate_module_variations' ) );
		}

		/**
		 * Register post type
		 */
		public function register_post_types() {
			if ( ! is_blog_installed() ) {
				return;
			}

			if ( ! post_type_exists( $this->name ) ) {
				register_post_type(
					$this->name,
					array(
						'labels'              => array(
							'name'                  => __( 'DSMP Templates', 'dstheme' ),
							'singular_name'         => _x( 'DSMP Template', 'Site post type singular name', 'dstheme' ),
							'add_new'               => __( 'Add Template', 'dstheme' ),
							'add_new_item'          => __( 'Add New Template', 'dstheme' ),
							'edit'                  => __( 'Edit', 'dstheme' ),
							'edit_item'             => __( 'Edit Template', 'dstheme' ),
							'new_item'              => __( 'New Template', 'dstheme' ),
							'view'                  => __( 'View Templates', 'dstheme' ),
							'view_item'             => __( 'View Template', 'dstheme' ),
							'search_items'          => __( 'Search Templates', 'dstheme' ),
							'not_found'             => __( 'No Templates found', 'dstheme' ),
							'not_found_in_trash'    => __( 'No Templates found in trash', 'dstheme' ),
							'parent'                => __( 'Parent Templates', 'dstheme' ),
							'menu_name'             => _x( 'DSMP Templates', 'Admin menu name', 'dstheme' ),
							'filter_items_list'     => __( 'Filter Templates', 'dstheme' ),
							'items_list_navigation' => __( 'Templates navigation', 'dstheme' ),
							'items_list'            => __( 'Templates list', 'dstheme' ),
						),
						'menu_position'       => 1,
						'menu_icon'           => 'dashicons-art',
						'public'              => true,
						'exclude_from_search' => true,
						'publicly_queryable'  => false,
						'show_in_rest'        => true,
						'has_archive'         => false,
						'supports'            => array( 'title', 'editor', 'thumbnail' ),
					)
				);
			}
		}

		/**
		 * Add custom admin columns
		 *
		 * @param array $columns contains admin columns.
		 */
		public function cpt_admin_columns( $columns ) {
			unset( $columns['date'] );

			$columns['module_name'] = __( 'Module Name', 'dstheme' );
			$columns['date']        = __( 'Publish Date', 'dstheme' );

			return $columns;
		}

		/**
		 * Populate custom column data
		 *
		 * @param string $column contains the column name.
		 * @param int    $post_id contains  post id.
		 */
		public function cpt_admin_columns_data( $column, $post_id ) {
			switch ( $column ) {
				case 'module_name':
					$module_name = get_post_meta( $post_id, 'ds_chosen_module', true );
					$module_data = acf_get_block_type( $module_name );
					echo '<strong>' . ( $module_data['title'] ?? __( 'Not Assigned', 'dstheme' ) ) . '</strong>'; //phpcs:ignore
					break;
			}
		}

		/**
		 * Generate inner blocks data
		 *
		 * @param array $blocks contains blocks.
		 */
		public function generate_inner_blocks_data( $blocks = array() ): array {

			if ( empty( $blocks ) ) {
				return array();
			}

			$block_variation_data = array();
			foreach ( $blocks as $block ) {
				$block_variation_data[] = array(
					$block['blockName'],
					array(
						'className' => $block['attrs']['className'] ?? '',
						'data'      => $block['attrs']['data'] ?? array(),
					),
					$this->generate_inner_blocks_data( $block['innerBlocks'] ?? array() ),
				);
			}

			return $block_variation_data;
		}

		/**
		 * Save predefined styles used for block variations based on predefined structure.
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
		 *
		 * @param int    $post_id the post_id.
		 * @param object $post the post.
		 */
		public function save_styles( $post_id, $post ) {
			// If this is just a revision, don't save the option.
			if ( wp_is_post_revision( $post_id ) ) {
				return;
			}

			$blocks = parse_blocks( $post->post_content );
			if ( empty( $blocks ) ) {
				update_post_meta( $post_id, 'ds_chosen_module', '' );
				delete_post_meta( $post_id, 'ds_module_styles' );

				return;
			}

			update_post_meta( $post_id, 'ds_chosen_module', $blocks[0]['blockName'] );

			if ( empty( $blocks[0]['attrs']['data'] ) ) {
				delete_post_meta( $post_id, 'ds_module_styles' );

				return;
			}

			$block_variation_data = array(
				'name'        => $post_id,
				'title'       => get_the_title( $post_id ),
				'attributes'  => array(
					'className' => $blocks[0]['attrs']['className'] ?? '',
					'data'      => $blocks[0]['attrs']['data'] ?? array(),
				),
				'innerBlocks' => $this->generate_inner_blocks_data( $blocks[0]['innerBlocks'] ?? array() ),
				'example'     => array(
					'attributes' => array(
						'data' => array(
							'_ds_preview_url' => false,
						),
					),
				),
			);

			// phpcs:ignore
			update_post_meta( $post_id, 'ds_module_styles', base64_encode( serialize( $block_variation_data ) ) );
		}

		/**
		 * Add Filters
		 *
		 * @param string $post_type contains post_type.
		 */
		public function add_filters( $post_type ) {
			if ( $this->name !== $post_type ) {
				return;
			}
			$acf_blocks = acf_get_block_types();
			?>
			<select name="ds_module_name">
				<option value="">All Modules</option>
				<?php
				// phpcs:ignore
				$current_module = $_GET['ds_module_name'] ?? '';
				foreach ( $acf_blocks as $block ) {
					// phpcs:ignore
					printf(
						'<option value="%s"%s>%s</option>',
						$block['name'], // phpcs:ignore
						$block['name'] == $current_module ? ' selected="selected"' : '', // phpcs:ignore
						$block['title'] // phpcs:ignore
					);
				}
				?>
			</select>
			<?php
		}

		/**
		 * Add after filter data
		 *
		 * @param string $position contains position.
		 */
		public function add_after_filter_data( $position ) {

			$current_screen = get_current_screen();
			if ( 'bottom' === $position || ! isset( $current_screen->post_type ) || $this->name !== $current_screen->post_type ) {
				return;
			}

			submit_button( 'Generate Modules Variations', 'primary', 'ds_generate_modules_variations', false );
		}

		/**
		 * Apply filters query
		 *
		 * @param WP_Query $query contains wp_query.
		 */
		public function apply_filters_query( $query ) {
			if ( ! ( is_admin() && $query->is_main_query() ) ) {
				return $query;
			}

			if ( $this->name !== $query->query['post_type'] ) {
				return $query;
			}

			// phpcs:ignore
			if ( isset( $_GET['ds_module_name'] ) && ! empty( $_GET['ds_module_name'] ) ) {
				// phpcs:ignore
				$query->query_vars['meta_query'] = array(
					array(
						'key'   => 'ds_chosen_module',
						'value' => $_GET['ds_module_name'], // phpcs:ignore
					),
				);
			}

			// phpcs:ignore
			if ( ! isset( $_GET['orderby'] ) ) {
				$query->query_vars['meta_key'] = 'ds_chosen_module'; //phpcs:ignore
				$order                         = $_GET['order'] ?? 'ASC'; // phpcs:ignore
				$query->query_vars['orderby']  = array(
					'meta_value' => $order, //phpcs:ignore
					'title'      => $order,
				);
			}

			return $query;
		}

		/**
		 * Theme admin assets
		 */
		public function theme_admin_assets() {
			$current_screen = get_current_screen();
			if ( ! isset( $current_screen->post_type ) || $this->name !== $current_screen->post_type ) {
				return;
			}

			wp_enqueue_script( 'ds-generate-module-variations', get_template_directory_uri() . '/admin/js/generate-module-variations.js', array(), filemtime( get_template_directory() . '/admin/js/generate-module-variations.js' ), true );
			wp_localize_script(
				'ds-generate-module-variations',
				'ModuleVariationsRunner',
				array(
					'ajax_url'        => admin_url( 'admin-ajax.php' ),
					'acf_block_types' => array_keys( acf_get_block_types() ),
				)
			);
		}

		/**
		 * Theme admin esitor assets
		 */
		public function theme_admin_editor_assets() {
			$current_screen = get_current_screen();
			if ( ! isset( $current_screen->post_type ) || $this->name !== $current_screen->post_type ) {
				return;
			}

			wp_enqueue_script( 'ds-module-styles-block-switcher', get_template_directory_uri() . '/admin/js/module-styles-block-switcher.js', array(), filemtime( get_template_directory() . '/admin/js/module-styles-block-switcher.js' ), true );
		}

		/**
		 * Generate module variatios
		 */
		public function ds_generate_module_variations() {
			$block_name = $_POST['block_name'] ?? ''; // phpcs:ignore

			if ( ! $block_name ) {
				wp_send_json_error(
					array(
						'message' => 'Invalid block name.',
					)
				);
			}

			$args = array(
				'post_type'      => $this->name,
				'meta_key'       => 'ds_chosen_module', // phpcs:ignore
				'meta_value'     => $block_name, // phpcs:ignore
				'posts_per_page' => - 1,
			);

			$query = new WP_Query( $args );

			$module_variations = array();
			if ( ! empty( $query->posts ) ) {
				foreach ( $query->posts as $key => $post ) {
					// phpcs:ignore
					$module_variation = unserialize( base64_decode( get_post_meta( $post->ID, 'ds_module_styles', true ) ) );
					if ( empty( $module_variation ) ) {
						continue;
					}

					if ( 0 === $key ) {
						$module_variation['isDefault'] = true;
					}

					$post_thumbnail_url = get_the_post_thumbnail_url( $post, 'full' );
					if ( ! empty( $post_thumbnail_url ) ) {
						$post_thumbnail_url = wp_make_link_relative( $post_thumbnail_url );
						// Temporary add preview url inside data directly due to a bug where example is not fetched for block variations.
						$module_variation['attributes']['data']['_ds_preview_url']            = $post_thumbnail_url;
						$module_variation['example']['attributes']['data']['_ds_preview_url'] = $post_thumbnail_url;
					}

					$module_variations[] = $module_variation;
				}
			}

			$file_name = self::$module_variations_dir . ds_get_block_name( $block_name ) . '.json';
			if ( ! empty( $module_variations ) ) {
				file_put_contents( $file_name, json_encode( $module_variations ) ); //phpcs:ignore
				chmod( $file_name, 0644 ); //phpcs:ignore
			} elseif ( file_exists( $file_name ) ) {
				unlink( $file_name ); //phpcs:ignore
			}

			wp_send_json_success();
		}
	}

	new DS_PostTypes_ModuleStyles();
}
