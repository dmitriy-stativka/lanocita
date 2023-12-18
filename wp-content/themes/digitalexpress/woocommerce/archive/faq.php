<?php
//phpcs:ignoreFile
/**
 * Description
 */

defined( 'ABSPATH' ) || exit;

$faq = get_field( 'shop_content_tabs', 'options' );

if ( empty( $faq ) ) {
	return;
}

$args['transform_on_mobile'] = 'accordion';

$content = get_field( 'shop_faq_description', 'options' );
?>

<div class="woocommerce-Tabs-panel--faq">
	<div class="ds-wc-tab-tabs">
		<div class="ds-wc-tab-tabs__faq-title">
			<?php if ( ! empty( $content['title'] ) ) : ?>
				<div class="c-heading -h2">
					<h2 class="c-heading__title"><?php echo esc_html( $content['title'] ); ?></h2>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $content['subtitle'] ) ) : ?>
				<p><?php echo esc_html( $content['subtitle'] ); ?></p>
			<?php endif; ?>
		</div>
		<div class="ds-wc-tab-tabs__wrapper">
			<div class="l-tabs-wrapper is-block js-tabsTabDrop-wrapper" data-acc-display="block">
				<div class="l-tbnav " role="tablist">
					<?php
					$selectOptions = array();
					foreach ( $faq as $key => $item ) :
						$tab_id = "prodcut_faq-{$key}";
						if ( 'category' == $item['add_content'] && ! empty( $item['faq_category'] ) ) {
							$cat_item          = get_term( $item['faq_category'], 'faq_category' );
							$item['title_nav'] = $cat_item->name;
						}
						?>
						<?php
						get_template_part(
							'templates/components/tabs-nav/nav-v1',
							null,
							array(
								'class'  => ( 0 === $key ? 'is-active' : '' ),
								'icon'   => $item['icon'],
								'title'  => $item['title_nav'],
								'tab_id' => $tab_id,
							)
						);
						?>
						<?php
						$selectOptions[] = '<option value="' . $tab_id . '" ' . ( 0 === $key ? 'selected' : '' ) . '>' . ( ! empty( $item['title_nav'] ) ? $item['title_nav'] : __( 'Option - ', 'dstheme' ) ) . $key . '</option>';
					endforeach;
					?>


					<select class="js-tabs-dropdown l-tbnav__select">
						<?php echo implode( '', $selectOptions ); ?>
					</select>

					<?php if ( 'dropdown' === $args['transform_on_mobile'] ) : ?>
						<select class="js-tabs-dropdown l-tbnav__select">
							<?php echo implode( '', $selectOptions ); ?>
						</select>
					<?php endif; ?>
				</div>

				<div class="l-tbpanel">
					<?php
					foreach ( $faq as $key => $item ) :
						$tab_id    = "prodcut_faq-{$key}";
						$itemClass = 'accordion' === $args['transform_on_mobile'] ? ' js-ta-content' : '';
						?>
						<div class="l-tbpanel__item js-tabs-panel<?php echo 0 === $key ? ' is-active' : ''; ?>"
							aria-hidden="<?php echo 0 === $key ? 'false' : 'true'; ?>" aria-labelledby="data-tab-<?php echo esc_attr( $tab_id ); ?>"
							id="data-tab-<?php echo esc_attr( $tab_id ); ?>" role="tabpanel">
							<?php if ( 'accordion' === $args['transform_on_mobile'] ) : ?>
								<div class="l-tbpanel__label js-tabs-label">
									<?php echo esc_html( $item['title_nav'] ); ?>
									<span class="l-tbpanel__label-icon"></span>
								</div>
							<?php endif; ?>

							<?php
							if ( 'category' == $item['add_content'] && ! empty( $item['faq_category'] ) ) {
								$query_args = array(
									'post_type'      => 'faq',
									'posts_per_page' => -1,
									'tax_query'      => array(
										array(
											'taxonomy' => 'faq_category',
											'field'    => 'id',
											'terms'    => $item['faq_category'],
										),
									),
								);

								$item['faq_list'] = get_posts( $query_args );
							}

							if ( ! empty( $item['faq_list'] ) ) :
								?>
								<div class="l-accordion l-accordion-v1<?php echo esc_attr( $itemClass ); ?>">
									<div class="c-accordion c-accordion- js-acc-wrapper icons-plus-minus">
										<?php foreach ( $item['faq_list'] as $i => $faq ) : ?>

											<?php
											get_template_part(
												'templates/components-shared/accordion/accordion',
												'v1',
												array(
													'accordion_id' => "{$tab_id}-$i",
													'title' => $faq->post_title,
													'description' => apply_filters( 'the_content', $faq->post_content ),
													'class' => ( 0 === $i ? ' is-active' : '' ),
												)
											);
											?>

										<?php endforeach; ?>
									</div>
								</div>
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</div>
