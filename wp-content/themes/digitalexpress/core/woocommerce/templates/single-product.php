<?php
/**
 * Change Single Product Page
 *
 * @package DS_Theme
 */
class DS_CoreProduct {

	/**
	 * Custom product tab "Description" content.
	 *
	 * @var string $description
	 */
	public $description;

	/**
	 * custom product tab "FAQ accordion" content.
	 *
	 * @var string $faq
	 */
	public $faq;

	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'woocommerce_product_tabs', array( $this, 'product_tabs' ) );
		add_filter( 'woocommerce_reviews_title', array( $this, 'reviews_title' ), 10, 3 );

		add_action( 'woocommerce_single_product_summary', array( $this, 'shipping_sidebar' ), 25 );

		add_action( 'woocommerce_single_product_summary', array( $this, 'request_quote' ), 31 );

		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
		add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 6 );

		add_action( 'ds_after_content', array( $this, 'bottom_banner' ), 15 );
	}

	/**
	 * Manipulate product tabs
	 *
	 * @param array $tabs holds product tabs.
	 */
	public function product_tabs( $tabs ): array {
		global $product;

		unset( $tabs['description'] );

		add_filter(
			'woocommerce_product_additional_information_heading',
			function () {
				return __( 'Features & Specs', 'dstheme' );
			}
		);
		if ( $product->has_attributes() || $product->has_dimensions() || $product->has_weight() ) {
			$tabs['additional_information']['title'] = __( 'Specification', 'dstheme' );
		}

		$this->description = get_field( 'description' );
		if ( ! empty( $this->description ) ) {
			$tabs['custom_description'] = array(
				'title'    => __( 'Description', 'dstheme' ),
				'priority' => 5,
				'callback' => array( $this, 'custom_description' ),
			);
		}

		$this->faq = get_field( 'faq' );
		if ( ! empty( $this->faq ) ) {
			$tabs['faq'] = array(
				'title'    => __( 'FAQ', 'dstheme' ),
				'priority' => 25,
				'callback' => array( $this, 'faq' ),
			);
		}

		return $tabs;
	}

	/**
	 * Change reviews title
	 *
	 * @param html       $reviews_title contains html output.
	 * @param int        $count contains the review count.
	 * @param WC_Product $product contains instance of WC_Product.
	 */
	public function reviews_title( $reviews_title, $count, $product ) {
		$html  = '<span>' . __( 'Customer reviews', 'dstheme' ) . '</span>';
		$html .= '<div>';
		$html .= $product->get_average_rating();
		$html .= wc_get_rating_html( $product->get_average_rating(), $product->get_rating_count() );
		$html .= '</div>';
		$html .= '<span>' . $count . __( ' reviews', 'dstheme' ) . '</span>';

		return $html;
	}

	/**
	 * Add Shipping sidebar
	 */
	public function shipping_sidebar() {
		get_template_part( '/woocommerce/single-product/shipping-bar' );
	}

	/**
	 * Add request a quote
	 */
	public function request_quote() {
		get_template_part( '/woocommerce/single-product/product-inquiry' );
	}

	/**
	 * Add product custom description
	 */
	public function custom_description() {
		get_template_part( '/woocommerce/single-product/tabs/custom-description', '', $this->description );
	}

	/**
	 * Add product FAQ template
	 */
	public function faq() {
		get_template_part( '/woocommerce/single-product/tabs/faq', '', $this->faq );
	}

	/**
	 * Add bottom banner
	 */
	public function bottom_banner() {
		get_template_part( '/woocommerce/single-product/bottom-banner' );
	}
}

new DS_CoreProduct();
