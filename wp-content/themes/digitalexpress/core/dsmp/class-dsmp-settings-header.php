<?php
/**
 * Fetch header template and define necessary items based on chosen header
 */
class DS_ExpressHeader extends DS_ExpressSettings {


	private $menu;

	private $sticky_type;

	public function __construct() {
		if ( $this->set_header() ) {
			ds_register_menu( $this->menu );
		}
	}

	private function set_header(): bool {
		$this->menu[] = array(
			'slug' => 'primary-menu',
			'name' => 'Header Menu',
		);
		$this->menu[] = array(
			'slug' => 'secondary-menu',
			'name' => 'Secondary Header Menu',
		);

		$this->sticky_type = $this->get_setting( 'header_sticky_type' );

		$this->set_global( 'header_sticky_type', $this->sticky_type );

		add_filter(
			'body_class',
			function ( $classes ) {
				return array_merge( $classes, array( $this->sticky_type . '-header' ) );
			}
		);

		return true;
	}
}

add_action(
	'after_setup_theme',
	function () {
		new DS_ExpressHeader();
	}
);
