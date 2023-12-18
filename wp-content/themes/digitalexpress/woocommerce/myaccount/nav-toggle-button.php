<div class="woocommerce-nav-toggle">
    <button id="show-my-acc-sidebar" class="filter-btn is-active">
		<?php echo get_svg(
			array(
				'icon'  => 'icon-filters',
				'class' => '',
			)
		);
		?>
		<?php esc_html_e( 'Show Nav', 'dstheme' ); ?>
    </button>

    <button id="hide-my-acc-sidebar" class="filter-btn">
		<?php
		echo get_svg(
			array(
				'icon'  => 'icon-filters',
				'class' => '',
			)
		);
		?>
		<?php esc_html_e( 'Hide Nav', 'dstheme' ); ?>
    </button>
</div>
