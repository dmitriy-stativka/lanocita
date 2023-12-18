<?php
/**
 * Image Rotation Main Template.
 *
 * @var array $block The block settings. Most used ['className'],['id'],['anchor']
 * @var object $moduleConfig ->get_styles(), ->data_attributes, ->container, ->container_width.
 */
// phpcs:ignoreFile

if ( (int) $moduleConfig->layout_settings_columns_ratio !== 0 ) {
	$moduleConfig->set_style( '--columns-ratio', "{$moduleConfig->layout_settings_columns_ratio}%" );
}

$args             = array(
	'content_type'   => get_field( 'content_type' ),
	'post_type'      => get_field( 'post_type_data_post_type' ),
	'posts_per_page' => get_field( 'post_type_data_posts_per_page' ) ?: 6,
	'has_image'      => get_field( 'post_type_data_has_image' ) ?: 'enable',
	'columns'        => get_field( 'layout_settings_card_columns' ) ?: 3,
	'layout'         => get_field( 'layout_settings_layout_type' ) ?: 'v1',
	'gap_vertical'   => get_field( 'layout_settings_card_gap_vertical' ) ?: 0,
	'gap_horizontal' => get_field( 'layout_settings_card_gap_horizontal' ) ?: 0,
);
$class_obj        = new DS_ComponentSettings( $args );
$component_class  = $class_obj->class;
$component_styles = $class_obj->styles;
?>
<div class="m-block<?php echo esc_attr( $block['className'] ); ?> l-content-1" <?php echo $moduleConfig->data_attributes; ?> <?php echo $moduleConfig->get_styles(); ?>>

	<?php get_template_part( 'templates/components/anchor', null, array( 'anchor_id' => $block['anchor'] ?? '' ) ); ?>

	<?php get_template_part( 'templates/components/decorations/module-decorations' ); ?>

	<div class="m-block__container <?php echo $moduleConfig->container; ?>"
		style="<?php echo $moduleConfig->container_width; ?>">

		<div class="l-rcbl <?php echo "l-rcbl-{$args['layout']}"; ?>"
			style="--l-block-col: <?php echo $args['columns']; ?>;--l-block-gap-vertical: <?php echo $args['gap_vertical']; ?>px;--l-block-gap-horizontal: <?php echo $args['gap_horizontal']; ?>px;<?php // echo $component_styles; ?>">

			<?php if ( $args['content_type'] == 'ajax' ) : ?>

				<?php
				$query = new WP_Query(
					array(
						'post_type'      => $args['post_type'],
						'posts_per_page' => $args['posts_per_page'],
					)
				);
				?>

				<div class="js-ajax-block"
					data-action="ds_content_1_load_more"
					data-post-type="<?php echo $args['post_type']; ?>"
					data-per-page="<?php echo $args['posts_per_page']; ?>"
					data-class="<?php echo $component_class; ?>"
					data-styles="<?php echo $component_styles; ?>"
					data-image="<?php echo $args['has_image']; ?>">

					<div data-container="ajax-result">
						<?php if ( $query->have_posts() ) : ?>
							<?php
							while ( $query->have_posts() ) :
								$query->the_post();
								?>

								<div class="l-rcbl__col">
									<?php
									$img_id = get_post_thumbnail_id( get_the_ID() );
									get_template_part(
										'templates/components-shared/blocks/block-v1',
										null,
										array(
											'image'        => array(
												'ID'    => $img_id,
												'url'   => ds_get_the_post_thumbnail_url(),
												'alt'   => trim( strip_tags( get_post_meta( $img_id, '_wp_attachment_image_alt', true ) ) ),
												'title' => get_the_title( $img_id ),
											),
											'image_size'   => 'ds_medium',
											'pretitle'     => get_field( 'pretitle', get_the_ID() ),
											'title'        => get_the_title(),
											'subtitle'     => get_field( 'subtitle', get_the_ID() ),
											// 'description' => get_field('description', get_the_ID()) ?? get_the_excerpt(),
											'cta_list'     => false,
											'is_clickable' => true,
											'class'        => $component_class,
											'styles'       => $component_styles,
											'has_image'    => $args['has_image'],
											// mostly needed fot ajax posts to disable placeholder images also
											'component_link' => array(
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
						endif;
						wp_reset_postdata();
						?>
					</div>

					<?php if ( $query->max_num_pages > 1 ) : ?>
						<div class="c-loadmore">
							<?php echo acf_ajax_button( get_field( 'post_type_data_load_more_text' ) ); ?>
						</div>
					<?php endif; ?>
				</div>

			<?php elseif ( $args['content_type'] == 'posts' && $posts = get_field( 'posts' ) ) : ?>

				<?php
				foreach ( $posts as $post ) :
					setup_postdata( $post );
					?>
					<div class="l-rcbl__col">
						<?php
						$img_id = get_post_thumbnail_id( get_the_ID() );
						get_template_part(
							'templates/components-shared/blocks/block-v1',
							null,
							array(
								'image'          => array(
									'ID'    => $img_id,
									'url'   => ds_get_the_post_thumbnail_url(),
									'alt'   => trim( strip_tags( get_post_meta( $img_id, '_wp_attachment_image_alt', true ) ) ),
									'title' => get_the_title( $img_id ),
								),
								'image_size'     => 'ds_medium',
								'pretitle'       => '',
								'title'          => get_the_title(),
								'cta_list'       => false,
								'is_clickable'   => true,
								'class'          => $component_class,
								'styles'         => $component_styles,
								'component_link' => array(
									'url'    => get_the_permalink(),
									'title'  => get_the_title(),
									'target' => '',
								),
							)
						);
						?>
					</div>
					<?php
				endforeach;
				wp_reset_postdata();
				?>

				<?php
			elseif ( $args['content_type'] == 'static' && have_rows( 'cards_widget' ) ) :
				$badgeLabel = 1;
				?>

				<?php
				while ( have_rows( 'cards_widget' ) ) :
					the_row();
					?>
					<div class="l-rcbl__col">
						<?php
						get_template_part(
							'templates/components-shared/blocks/block-v1',
							null,
							array(
								'badge_label' => $badgeLabel,
								'class'       => $component_class,
								'styles'      => $component_styles,
							)
						);
						?>
					</div>
					<?php
					++$badgeLabel;
endwhile;
				?>

			<?php endif; ?>
		</div>

	</div>

	<?php get_template_part( 'templates/components/nav/scroll-down' ); ?>

</div>
