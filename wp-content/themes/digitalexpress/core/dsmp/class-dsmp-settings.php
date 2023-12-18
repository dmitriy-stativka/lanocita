<?php
/**
 * $dsmp_settings - global variable
 * contain theme settings as header|footer template etc.
 */

global $dsmp_settings;

#[AllowDynamicProperties]
class DS_ExpressSettings {

	public function __get( $key ) {
		return empty( $this->{$key} ) ? '' : $this->{$key};
	}

	public function __set( $key, $value ) {
		$this->set_global( $key, $value );
	}

	public function get_setting( $get ) {
		return get_option( "options_{$get}" );
	}

	/**
	 * Use when advanced fields are being from ACF like groups
	 * that have subfields and regular get_settings does not work well.
	 */
	public function get_setting_acf( $get ) {
		return get_field( $get, 'options' );
	}

	public function set_global( $key, $value ) {
		global $dsmp_settings;
		if ( isset( $dsmp_settings->{$key} ) ) {
			if ( ! is_array( $dsmp_settings->{$key} ) ) {
				$dsmp_settings->{$key} = array( $dsmp_settings->{$key} );
			}

			$dsmp_settings->{$key}[] = $value;
		} else {
			$dsmp_settings->test = $value;
			$dsmp_settings->{$key} = $value;
		}

		return true;
	}
}

$dsmp_settings = new DS_ExpressSettings();
