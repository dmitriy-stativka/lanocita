<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_SliderCircularAngle extends DS_Field {

	/**
	 * Get
	 *
	 * @param array $args arguments.
	 * @param bool  $is_super_admin super admin check.
	 */
	public static function get( array $args = array(), $is_super_admin = false ): string {
		$default_args = array(
			'label'         => 'Angle',
			'min'           => 0,
			'max'           => 360,
			'append'        => 'degrees',
			'default_value' => 0,
		);
		$args         = wp_parse_args( $args, $default_args );

		return self::add_field( 'range', 'data_circular-angle', $args, $is_super_admin );
	}
}
