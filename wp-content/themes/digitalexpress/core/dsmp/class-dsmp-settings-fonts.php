<?php
//phpcs:ignoreFile
/**
 * Fetches global font settings and defines primary and secondary fonts with url and weights to use globally
 */

class DS_ExpressFonts extends DS_ExpressSettings {

	/**
	 * List of available fonts
	 *
	 * @var array|int[][]
	 */
	public static array $theme_fonts = [
		'Lato'       => [ 100, 300, 400, 700, 900 ],
		'Montserrat' => [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
		'Open Sans'  => [ 300, 400, 600, 700, 800 ],
		'Raleway'    => [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
		'Roboto'     => [ 100, 300, 400, 500, 700, 900 ],
		'Poppins'    => [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
	];

	public string $primary_font = 'Roboto';
	public string $secondary_font = 'Roboto';

	public function __construct() {
		$this->set_global( 'primary_font', $this->get_primary_font() );
		$this->set_global( 'secondary_font', $this->get_secondary_font() );
		$this->set_global( 'primary_font_url', $this->get_font_url( $this->primary_font, 'primary' ) );
		$this->set_global( 'secondary_font_url', $this->get_font_url( $this->secondary_font, 'secondary' ) );
		$this->set_global( 'primary_font_weight', $this->get_font_weight( $this->primary_font, 'primary' ) );
		$this->set_global( 'secondary_font_weight', $this->get_font_weight( $this->secondary_font, 'secondary' ) );
	}

	/**
	 * Gets primary font family name
	 *
	 * @return false|mixed|string|void
	 */
	public function get_primary_font() {
		$this->primary_font = $this->get_setting( 'font_family_font-family-primary' ) ? : 'Roboto';

		return $this->primary_font;
	}

	/**
	 * Gets secondary font family name
	 *
	 * @return false|mixed|string|void
	 */
	public function get_secondary_font() {
		$this->secondary_font = $this->get_setting( 'font_family_font-family-secondary' ) ? : 'Roboto';

		return $this->secondary_font;
	}

	/**
	 * Gets font family url (from Google Fonts)
	 *
	 * @param $font_family
	 * @param $font_type
	 *
	 * @return string
	 */
	public function get_font_url( $font_family, $font_type ) {
		$url = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';
		if ( ! empty( $font_family ) ) {
			$font_weights = $this->get_font_weight( $font_family, $font_type );

			$regular = '';
			$italic  = '';
			for ( $i = 0, $i_max = count( $font_weights ); $i < $i_max; $i ++ ) {
				$regular .= "0,{$font_weights[$i]};";
				$italic  .= "1,{$font_weights[$i]}";
				if ( ( $i + 1 ) !== $i_max ) {
					$italic .= ';';
				}
			}
			$font_family = str_replace( ' ', '+', $font_family );
			$url         = "https://fonts.googleapis.com/css2?family={$font_family}:ital,wght@{$regular}{$italic}&display=swap";
		}

		return $url;
	}

	/**
	 * Gets selected fonts weights for primary or secondary font family
	 *
	 * @param $font_family
	 * @param $font_type
	 *
	 * @return false|int[]|mixed|void
	 */
	public function get_font_weight( $font_family, $font_type ) {
		$font_weights_field_key = ds_get_field_key_font_weight( $font_family, $font_type );
		$font_weights           = $this->get_setting( 'font_family_' . $font_weights_field_key );

		if ( empty( $font_weights ) ) {
			$font_weights = [ 300, 400, 700 ];
		}

		return $font_weights;
	}
}

add_action(
    'acf/init',
    function () {
	new DS_ExpressFonts();
    },
    0
);
