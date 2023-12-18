<?php
/**
 * Fetch footer template and define necessary items based on chosen footer
 */
class DS_ExpressFooter extends DS_ExpressSettings {


	private $menu;

	public function __construct() {
		if ( $this->set_footer() ) {
			ds_register_menu( $this->menu );
		}
	}

	private function set_footer(): bool {
		$this->menu[] = array(
			'slug' => 'footer-menu',
			'name' => 'Footer Menu',
		);
		$this->menu[] = array(
			'slug' => 'privacy-menu',
			'name' => 'Footer Privacy Menu',
		);

		return true;
	}
}

add_action(
	'after_setup_theme',
	function () {
		new DS_ExpressFooter();
	}
);
