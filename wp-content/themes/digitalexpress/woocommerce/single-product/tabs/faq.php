<?php
/**
 * Product tab with FAQ accordion
 *
 * @var array $args
 */

defined( 'ABSPATH' ) || exit;

global $post;

$args = wp_parse_args(
	$args,
	array(
		'faq'     => get_field( 'faq' ),
		'heading' => get_field( 'faq_heading' ),
	)
);

if ( empty( $args['faq'] ) ) {
	return;
}

?>

<?php if ( ! empty( $args['heading']['title'] ) ) : ?>
	<div class="c-heading -h2">
		<h2 class="c-heading__title"><?php echo esc_html( $args['heading']['title'] ); ?></h2>
	</div>
<?php endif; ?>

<?php if ( ! empty( $args['heading']['subtitle'] ) ) : ?>
	<p><?php echo esc_html( $args['heading']['subtitle'] ); ?></p>
<?php endif; ?>

<div class="m-accordion">
	<div class="m-accordion__container container">
		<div class="l-accordion l-accordion-v1 js-acc-wrapper">
			<div class="c-accordion c-accordion-v1">
				<?php
				$count = 0;
				foreach ( $args['faq'] as $i => $item ) :
					?>

					<?php
					get_template_part(
						'templates/components-shared/accordion/accordion',
						'v1',
						array(
							'accordion_id' => "product-faq-$i",
							'title'        => $item->post_title,
							'description'  => apply_filters( 'the_content', $item->post_content ),
							'class'        => 0 === $count ? 'is-active' : '',
						)
					);
					?>

					<?php
					++$count;
				endforeach;
				?>
			</div>
		</div>
	</div>
</div>
