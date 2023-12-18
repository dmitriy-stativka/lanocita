<?php
/**
 * Class to customize reviews from woocommerce
 */
class DS_CoreReviews {


	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'woocommerce_get_star_rating_html', array( $this, 'setup_rating_html' ), 10, 3 );
	}

	/**
	 * Setup star rating html
	 *
	 * @param html $html - contains the html output.
	 * @param int  $rating - holds current rating.
	 * @param int  $count - contains ratings count.
	 *
	 * @return $html
	 */
	public function setup_rating_html( $html, $rating, $count ) {
		$fill = ( $rating / 5 ) * 100;
		$html = "<span class='star-rating__wrapper' data-rating='{$rating}'>";

		for ( $i = 1; $i <= 5; $i++ ) {
			$html .= "<span class='star star-{$i}'>{$i}</span>";
		}

		$html .= "<span class='star-rating__overlay' style='width: {$fill}%'></span>";
		$html .= '</span>';

		return $html;
	}
}

new DS_CoreReviews();
