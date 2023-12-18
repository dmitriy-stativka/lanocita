<?php
/**
 * Change Shop Page
 */
class DS_ArchiveProduct_V1 {

	/**
	 * Construct
	 */
	public function __construct() {
		/**
		 * Enable woocommerce archive page widgets
		 */
		add_action( 'widgets_init', array( $this, 'register_woocommerce_sidebar' ) );
		add_action( 'widgets_init', array( $this, 'register_woocommerce_filter' ) );

		/**
		 * Rebuild archive page subheader
		 */
		add_filter( 'woocommerce_show_page_title', '__return_false' );
		remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
		remove_action( 'woocommerce_archive_description', 'woocommerce_product_archive_description', 10 );
		add_action( 'woocommerce_archive_description', array( $this, 'add_archive_subheader' ), 10 );

		/**
		 * Move breadcrumbs after subheader
		 */
		add_action( 'woocommerce_before_main_content', array( $this, 'remove_archive_breadcrumbs' ) );
		// phpcs:ignore
		// add_action( 'woocommerce_before_shop_loop', 'woocommerce_breadcrumb', 5 );

		/**
		 * Archive page wrappers
		 */
		add_action( 'woocommerce_before_shop_loop', array( $this, 'add_shop_filter' ), 5 );

		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'open_ordering_container' ), 11 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'add_shop_sidebar_toggle_button' ), 11 );
		add_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 12 );
		add_action( 'woocommerce_before_shop_loop', 'woocommerce_pagination', 13 );

		// phpcs:ignore
		// add_action( 'woocommerce_before_shop_loop', array( $this, 'perpage_select' ), 13 );
		// phpcs:ignore
		// add_action( 'pre_get_posts', array( $this, 'perpage_products_query' ) );

		add_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 14 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'add_view_toggle' ), 15 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'close_ordering_container' ), 20 );

		add_action( 'woocommerce_no_products_found', array( $this, 'open_archive_container' ), 5 );
		add_action( 'woocommerce_no_products_found', array( $this, 'add_shop_sidebar' ), 5 );
		add_action( 'woocommerce_no_products_found', array( $this, 'open_loop_container' ), 5 );
		add_action( 'woocommerce_no_products_found', array( $this, 'close_loop_container' ), 15 );
		add_action( 'woocommerce_no_products_found', array( $this, 'close_archive_container' ), 15 );

		add_action( 'woocommerce_before_shop_loop', array( $this, 'open_archive_container' ), 21 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'add_shop_sidebar' ), 22 );
		add_action( 'woocommerce_before_shop_loop', array( $this, 'open_loop_container' ), 23 );

		add_action( 'woocommerce_shop_loop_item_title', array( $this, 'product_short_description' ), 15 );

		add_action( 'woocommerce_after_shop_loop', array( $this, 'open_bottom_ordering_container' ), 4 );
		add_action( 'woocommerce_after_shop_loop', 'woocommerce_result_count', 5 );
		add_action( 'woocommerce_after_shop_loop', 'woocommerce_catalog_ordering', 10 );
		add_action( 'woocommerce_after_shop_loop', array( $this, 'close_bottom_ordering_container' ), 14 );

		add_action( 'woocommerce_after_shop_loop', array( $this, 'close_loop_container' ), 15 );
		add_action( 'woocommerce_after_shop_loop', array( $this, 'close_archive_container' ), 20 );
	}

	/**
	 * Helper function to get option
	 *
	 * @param string $key - option name.
	 */
	public function __get( $key ) {
		$this->{$key} = get_option( 'options_' . $key );

		return $this->{$key};
	}

	/**
	 * Remove archive breadcrumbs
	 */
	public function remove_archive_breadcrumbs() {
		if ( is_shop() || is_archive() ) {
			remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
		}
	}

	/**
	 * Get Archive subheader
	 */
	public function add_archive_subheader() {
		if ( ! is_product() ) {
			get_template_part( 'woocommerce/archive/subheader' );
		}
	}

	/**
	 * Add shop sidebar toggle
	 */
	public function add_shop_sidebar_toggle_button() {
		if ( ! is_product() && 'show' === $this->woo_sidebar_module_view ) {
			get_template_part( 'woocommerce/archive/sidebar-toggle-button' );
		}
	}

	/**
	 * Add shop sidebar
	 */
	public function add_shop_sidebar() {
		if ( ! is_product() && 'show' === $this->woo_sidebar_module_view ) {
			get_template_part(
				'woocommerce/archive/sidebar',
				null,
				array( 'sidebar_position' => $this->woo_sidebar_sidebar_position )
			);
		}
	}


	/**
	 * Add Shop Filter
	 */
	public function add_shop_filter() {
		if ( ! is_product() && 'show' === $this->woo_filter_module_view ) {
			get_template_part( 'woocommerce/archive/filter' );
		}
	}

	/**
	 * Register WooCommerce sidebar
	 */
	public function register_woocommerce_sidebar() {
		if ( 'show' !== $this->woo_sidebar_module_view ) {
			return;
		}

		register_sidebar(
			array(
				'name'         => __( 'Woocommerce Sidebar', 'dstheme' ),
				'id'           => 'woocommerce-sidebar',
				'description'  => '',
				'class'        => '',
				'before_title' => '<span>',
				'after_title'  => '</span>',
			)
		);
	}

	/**
	 * Register filter sidebar
	 */
	public function register_woocommerce_filter() {
		if ( 'show' !== $this->woo_filter_module_view ) {
			return;
		}

		register_sidebar(
			array(
				'name'         => __( 'Woocommerce Filter', 'dstheme' ),
				'id'           => 'woocommerce-filter',
				'description'  => 'Area to show woocommerce filters between page subheader and products listing on archive page',
				'class'        => '',
				'before_title' => '<span>',
				'after_title'  => '</span>',
			)
		);
	}

	/**
	 * Add per page selector
	 */
	public function perpage_select() {
		$per_page = filter_input( INPUT_GET, 'perpage', FILTER_SANITIZE_NUMBER_INT );
		echo '<div class="woocommerce-perpage">';
		echo '<span>' . esc_html__( 'View', 'dstheme' ) . '</span>';
		echo '<select onchange="if (this.value) window.location.href=this.value">';
		$orderby_options = array(
			'9'  => '9',
			'12' => '12',
			'24' => '24',
			'-1' => 'All',
		);
		foreach ( $orderby_options as $value => $label ) {
			//phpcs:ignore
			echo '<option ' . selected( $per_page, $value ) . " value='?perpage={$value}'>{$label} " . esc_html__(
				'products',
				'dstheme'
			) . '</option>';
		}
		echo '</select>';
		echo '<span>' . esc_html__( 'per page', 'dstheme' ) . '</span>';
		echo '</div>';
	}

	/**
	 * Per page product query alter
	 *
	 * @param WP_Query $query - holds current WP_Query.
	 */
	public function perpage_products_query( $query ) {
		$per_page = filter_input( INPUT_GET, 'perpage', FILTER_SANITIZE_NUMBER_INT );
		if ( $per_page && $query->is_main_query() && ! is_admin() && ( is_shop() || is_product_category() || is_product_tag() || is_post_type_archive( 'product' ) ) ) {
			$query->set( 'posts_per_page', $per_page );
		}
	}

	/**
	 * Open Archive container
	 */
	public function open_archive_container() {
		$container_class   = ( 'show' === $this->woo_sidebar_module_view ) ? '-has-sidebar' : '';
		$sidebar_postition = ( 'left' === $this->woo_sidebar_sidebar_position ) ? '-sidebar-left' : '-sidebar-right';
		//phpcs:ignore
		echo "<div class='woocommerce-archive-content {$container_class} {$sidebar_postition}'>";
	}

	/**
	 * Handle product short description
	 */
	public function product_short_description() {
		$show_short_description = $this->archive_product_short_description;

		if ( 'show' === $show_short_description ) {
			global $product;

			echo '<div class="archive-short-description">';
			// phpcs:ignore
			echo apply_filters( 'woocommerce_short_description', $product->get_short_description() );
			echo '</div>';
		}
	}

	/**
	 * Close archive container
	 */
	public function close_archive_container() {
		echo '</div>';
	}

	/**
	 * Open loop container
	 */
	public function open_loop_container() {
		echo "<div class='woocommerce-loop'>";
	}

	/**
	 * Close loop container
	 */
	public function close_loop_container() {
		echo '</div>';
	}

	/**
	 * Open ordering container
	 */
	public function open_ordering_container() {
		echo "<div class='woocommerce-sorting -top'>";
	}

	/**
	 * Close ordering container
	 */
	public function close_ordering_container() {
		echo '</div>';
	}

	/**
	 * Open bottom ordering container
	 */
	public function open_bottom_ordering_container() {
		echo "<div class='woocommerce-sorting -bottom'>";
	}

	/**
	 * Close bottom ordering container
	 */
	public function close_bottom_ordering_container() {
		echo '</div>';
	}

	/**
	 * Add View Toggle
	 */
	public function add_view_toggle() {
		if ( ! is_product() ) {
			get_template_part( 'woocommerce/archive/view-toggle', );
		}
	}
}

new DS_ArchiveProduct_V1();
