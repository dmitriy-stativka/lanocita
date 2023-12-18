<div class="woocommerce-sidebar is-visible">
    <div id="close-filter-mobile-overlay"></div>

    <ul class="woocommerce-sidebar-widgets">
        <button id="close-filter-mobile" class="filter-btn is-active">
			<?php echo get_svg(
				array(
					'icon'  => 'icon-filters',
					'class' => '',
				)
			);
			?>
			<?php esc_html_e( 'Hide Filters', 'dstheme' ); ?>
        </button>

		<?php dynamic_sidebar( 'woocommerce-sidebar' ); ?>
    </ul>
</div>
