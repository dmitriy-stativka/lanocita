<?php
/**
 * Configure Gutenberg Theme functionality
 */

// phpcs:ignoreFile
class DS_GutenbergSetup {

	public function __construct() {
		/**
		 * disable gutenberg patterns
		 */
		add_action( 'after_setup_theme', array( $this, 'remove_patterns' ), 99 );
		add_action( 'init', array( $this, 'remove_patterns_category' ), 99 );

		/**
		 * allows to use different modules for different templates
		 */
		add_filter( 'allowed_block_types_all', array( $this, 'ds_allowed_block_types' ), 99, 2 );

		/**
		 * list of post types to use custom ACF Gutenberg Modules
		 */
		add_filter( 'acf/register_block_type_args', array( $this, 'acf_register_block_type_args' ) );
	}

	public function remove_patterns() {
		remove_theme_support( 'core-block-patterns' );
	}

	public function remove_patterns_category() {
		unregister_block_pattern_category( 'buttons' );
		unregister_block_pattern_category( 'columns' );
		unregister_block_pattern_category( 'gallery' );
		unregister_block_pattern_category( 'header' );
		unregister_block_pattern_category( 'text' );
	}

	public function acf_register_block_type_args( $args ) {
		$args['post_types'] = array( 'page', 'post', 'module_styles', 'case_studies' );

		return $args;
	}

	public function ds_allowed_block_types( $allowed_block_types, $block_editor_context ) {

		$post = $block_editor_context->post;
		if ( empty( $post ) ) {
			return $allowed_block_types;
		}

		$allowed_blocks      = WP_Block_Type_Registry::get_instance()->get_all_registered();
		$allowed_blocks      = array_keys( $allowed_blocks );
		$allowed_blocks_list = array();

		if (
			( $post->post_type === 'page' && $post->page_template !== 'templates/template-simple-text.php' )
			|| in_array( $post->post_type, array( 'wp_block', 'module_styles', 'case_studies' ) )
		) {
			foreach ( $allowed_blocks as $key => $value ) {
				if ( strpos( $value, 'acf' ) === 0 || strpos( $value, 'core/block' ) === 0 ) {
					$allowed_blocks_list[] = $value;
				}
			}
		} else {
			foreach ( $allowed_blocks as $key => $value ) {
				if ( ds_strposa( $value, array( 'list', 'cta' ) ) !== false ) {
					$allowed_blocks_list[] = $value;
				} elseif ( strpos( $value, 'acf' ) !== 0 ) {
					$allowed_blocks_list[] = $value;
				}
			}
		}

		return $allowed_blocks_list;
	}
}

new DS_GutenbergSetup();
