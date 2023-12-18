<?php
/**
 * BE part for Content 1 module ajax
 *
 * @package DS_Theme
 */
// phpcs:ignoreFile
if ( ! function_exists( 'ds_content_1_load_more' ) ) {

	function ds_content_1_load_more() {
		$args['post_status'] = 'publish';

		++$_POST['query']['paged'];
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

		$wp_query = new WP_Query( $args );

		$posts = '';

		$componentClass  = $_POST['component']['class'] ?? '';
		$componentStyles = $_POST['component']['styles'] ?? '';
		$componentImage  = $_POST['component']['image'] ?? '';

		ob_start();
		if ( $wp_query->have_posts() ) : ?>

			<?php
			while ( $wp_query->have_posts() ) :
				$wp_query->the_post();
				?>
				<div class="l-rcbl__col">
					<?php
					$img_id = get_post_thumbnail_id( get_the_ID() );
					get_template_part(
						'templates/components-shared/blocks/block-v1',
						null,
						array(
							'image'          => array(
								'url'   => ds_get_the_post_thumbnail_url(),
								'alt'   => trim( strip_tags( get_post_meta( $img_id, '_wp_attachment_image_alt', true ) ) ),
								'title' => get_the_title( $img_id ),
							),
							'image_size'     => 'ds_medium',
							'pretitle'       => '',
							'title'          => get_the_title(),
							// 'description'    => get_field( 'description', get_the_ID() ) ?? get_the_excerpt(),
							'cta_list'       => false,
							'is_clickable'   => true,
							'has_image'      => $componentImage,
							'class'          => $componentClass,
							'styles'         => $componentStyles,
							'clickable_link' => array(
								'url'    => get_the_permalink(),
								'title'  => get_the_title(),
								'target' => '',
							),
						)
					);
					?>
				</div>
			<?php endwhile; ?>

			<?php
			wp_reset_postdata();
		else :
			get_template_part( 'templates/content/content', 'none' );
		endif;

		$posts = ob_get_clean();

		$return = array(
			'max_pages' => $wp_query->max_num_pages === 0 ? 1 : $wp_query->max_num_pages,
			'page'      => $args['paged'],
			'posts'     => $posts,
		);

		wp_send_json( $return );
		die;
	}

	add_action( 'wp_ajax_ds_content_1_load_more', 'ds_content_1_load_more' );
	add_action( 'wp_ajax_nopriv_ds_content_1_load_more', 'ds_content_1_load_more' );
}
