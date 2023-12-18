<?php
/**
 * BE part for Posts load more functionality
 *
 * @package DS_Theme
 */
// phpcs:ignoreFile
if ( ! function_exists( 'ds_archive_load_more' ) ) {

	function ds_archive_load_more() {
		$args['post_status'] = 'publish';

		$is_browser_button_used  = isset( $_POST['browser_button_used'] ) && $_POST['browser_button_used'] === 'true';
		$_POST['query']['paged'] = intval( $_POST['query']['paged'] ) ?: 1;

		foreach ( $_POST['query'] as $key => $value ) {
			$args[ $key ] = $value;
		}

		if ( ! empty( $_POST['form'] ) ) {
			parse_str( $_POST['form'], $form );

			foreach ( $form as $key => $value ) {
				if ( ! empty( $value ) ) {
					$args[ $key ] = $value;
				}
			}
		}

		if ( $is_browser_button_used ) {
			$args['posts_per_page'] = $args['posts_per_page'] * $args['paged'];
			// Reset here to 1 since we are querying multiple pages at once with above line.
			$args['paged'] = 1;
		}

		$wp_query = new WP_Query( $args );

		$posts = '';
		ob_start();
		if ( $wp_query->have_posts() ) : ?>

			<?php
			while ( $wp_query->have_posts() ) :
				$wp_query->the_post();
				?>

				<?php
				get_template_part(
					'templates/content/content',
					'archive',
					array(
						'taxonomy' => $_POST['main_taxonomy'] ?? '',
					)
				);
				?>

			<?php endwhile; ?>

			<?php
			wp_reset_postdata();
		else :
			get_template_part( 'templates/content/content', 'none' );
		endif;
		$posts = ob_get_clean();

		$return = array(
			'max_pages'              => $wp_query->max_num_pages === 0 ? 1 : $wp_query->max_num_pages,
			'page'                   => $args['paged'],
			'posts'                  => $posts,
			'query_posts'            => count( $wp_query->posts ),
			'is_browser_button_used' => $is_browser_button_used,
		);

		wp_send_json( $return );
		die;
	}

	add_action( 'wp_ajax_ds_archive_load_more', 'ds_archive_load_more' );
	add_action( 'wp_ajax_nopriv_ds_archive_load_more', 'ds_archive_load_more' );
}
