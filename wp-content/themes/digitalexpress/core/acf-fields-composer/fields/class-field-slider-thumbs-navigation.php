<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_SliderThumbsNavigation extends DS_Field {

	/**
	 * Get
	 *
	 * @param array $args arguments.
	 * @param bool  $is_super_admin super admin check.
	 */
	public static function get( $args = array(), $is_super_admin = false ): string {
		$default_args = array(
			'label'         => 'Thumbs Navigation',
			'default_value' => 1,
			'ui'            => 1,
		);
		$args         = wp_parse_args( $args, $default_args );

		return self::add_field( 'true_false', 'data_thumbs', $args, $is_super_admin );
	}
}
