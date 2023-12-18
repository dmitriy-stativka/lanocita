<div class="woocommerce-sidebar-toggle">
    <button id="show-filter" class="filter-btn">
		<?php echo get_svg(
			array(
				'icon'  => 'icon-filters',
				'class' => '',
			)
		);
		?>
		<?php esc_html_e( 'Show Filters', 'dstheme' ); ?>
    </button>

    <button id="close-filter" class="filter-btn is-active">
		<?php
		echo get_svg(
			array(
				'icon'  => 'icon-filters',
				'class' => '',
			)
		);
		?>
		<?php esc_html_e( 'Hide Filters', 'dstheme' ); ?>
    </button>
</div>
