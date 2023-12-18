<?php
/**
 * Fetch effects global settings (enabled/disabled and available effects).
 * Used in DS_ModuleDefaultSettings for printing data attrs for effects
 */
class DS_ExpressEffects extends DS_ExpressSettings {

	public function __construct() {
		$this->set_global( 'effects_settings', $this->get_setting_acf( 'effects_settings' ) );
	}
}

add_action(
	'acf/init',
	function () {
		new DS_ExpressEffects();
	}
);
