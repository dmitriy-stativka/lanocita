<?php
/**
 * The template for displaying product inquiry link with form in popup
 */

defined( 'ABSPATH' ) || exit;

global $product;

$request = get_field( 'product_help_widget', 'options' );
if ( is_product() && ( ! empty( $request['product_help'] ) && 'enable' == $request['product_help'][0] && $request['gravity_form'] ) ) : ?>
    <div class="w-need-help__widget">
        <a class="w-need-help__toggle-product js-w-help-open" href="#" id="w-need-help-toggle">
            <div class="w-need-help__icons">
				<?php
				echo get_svg(
					array(
						'icon'  => 'wc-support-product-icon',
						'class' => 'icon-support-product',
					)
				);
				?>
				<?php
				echo get_svg(
					array(
						'icon'  => 'wc-support-product-icon-mobile',
						'class' => 'icon-support-product-mobile',
					)
				);
				?>
            </div>
            <span><?php echo esc_html( $request['button_title'] ); ?></span>
            <span class="small"><?php echo esc_html( $request['button_text'] ); ?></span>
        </a>
        <div class="w-need-help__popup" id="product_inquiry">
            <div class="w-need-help__form">
                <div class="w-need-help__form-close js-w-help-close">
					<?php
					echo get_svg(
						array(
							'icon'  => 'wc-close',
							'class' => 'wc-icon-close',
						)
					);
					?>
                </div>
                <div class="w-need-help__form-overflow">
                    <div class="w-need-help__form-header">
                        <div class="w-need-help__form-title">
							<?php if ( $request['title'] ) : ?>
								<?php echo esc_html( $request['title'] ); ?>
							<?php endif ?>
                        </div>
                        <div class="w-need-help__form-subtitle">
                            <div class="w-need-help__form-subtitle">
                                <div class="w-need-help__form-text">
									<?php if ( $request['subtitle'] ) : ?>
										<?php echo esc_html( $request['subtitle'] ); ?>
									<?php endif ?>
                                </div>
                                <div class="w-need-help__form-phone">
									<?php if ( $request['phone'] ) : ?>
                                        <a href="tel:<?php echo esc_attr( preg_replace( '/[^\p{L}\p{N}\s]/u', '', $request['phone'] ) ); ?>"><?php echo esc_html( $request['phone'] ); ?></a>
									<?php endif ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-need-help__form-row">
                        <p class="w-need-help__form-desc">
							<?php if ( $request['text'] ) : ?>
								<?php echo esc_html( $request['text'] ); ?>
							<?php endif ?>
                        </p>
                    </div>
                    <div class="w-need-help__form-fields">
						<?php echo do_shortcode( "[gravityform id='{$request['gravity_form']}' title='false' description='false' ajax='true']" ); ?>
                    </div>
                </div>
            </div>
            <div class="w-need-help__bg js-w-help-close"></div>
        </div>
    </div>
<?php endif; ?>
