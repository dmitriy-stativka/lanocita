<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'background_image' => get_field( 'image', get_option( 'page_for_posts' ) ),
		'pretitle'         => get_field( 'pretitle', get_option( 'page_for_posts' ) ),
		'title'            => get_field( 'title', get_option( 'page_for_posts' ) ),
		'subtitle'         => get_field( 'subtitle', get_option( 'page_for_posts' ) ),
		'search_form'      => '',
		'subheader_show'   => false,
	)
);
?>

<?php if ( 'show' === $args['subheader_show'] ) : ?>
	<div class="m-banner m-banner--custom order-default m-banner__blog">
		<div class="m-banner__container container-fluid" style="--bannerHeight: 500px;--columns-ratio: 65%;">
			<?php if ( ! empty( $args['background_image']['url'] ) ) : ?>
				<div class="m-banner__media">
					<img class="m-banner__picture" src="<?php echo esc_url( $args['background_image']['url'] ); ?>" alt="<?php echo esc_attr( $args['background_image']['alt'] ); ?>">
				</div>
			<?php endif; ?>
			<div class="m-banner__inner flex-center style-dark">
				<div class="l-banner l-gt-custom l-gb-custom" style="--l-gt-padding: 15vmin;--l-gb-padding: 5vmin;">
					<div class="l-banner__text">
						<div class="c-block__body">
							<div class="c-banner__content text-center">
								<?php if ( ! empty( $args['pretitle'] ) ) : ?>
									<div class="c-heading__pre"><?php echo $args['pretitle']; ?></div>
								<?php endif; ?>
								<?php if ( ! empty( $args['title'] ) ) : ?>
									<div class="c-heading -h1">
										<h1 class="c-heading__title"><?php echo esc_html( $args['title'] ); ?></h1>
									</div>
								<?php endif; ?>
								<?php if ( ! empty( $args['subtitle'] ) ) : ?>
									<div class="c-banner__description">
										<p><?php echo $args['subtitle']; ?></p>
									</div>
								<?php endif; ?>
								<?php if ( ! empty( $args['search_form'] ) ) : ?>
									<div class="c-banner__search">
										<?php echo $args['search_form']; ?>
									</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php
endif;
