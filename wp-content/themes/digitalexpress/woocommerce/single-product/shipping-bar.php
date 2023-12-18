<?php
/**
 * The template for displaying banner with product shipping information
 */

defined( 'ABSPATH' ) || exit;

global $product;

$shipping_bar = get_field( 'shipping_bar', 'options' );
if ( empty( $shipping_bar['shipping_bar'] ) || 'enable' != $shipping_bar['shipping_bar'][0] ) {
	return;
}

$className = '';

if ( isset( $shipping_bar['shipping_is_sticky'][0] ) && 'enable' == $shipping_bar['shipping_is_sticky'][0] ) {
	$className .= ' sticky';

	if ( isset( $shipping_bar['shipping_expendable'][0] ) && 'enable' == $shipping_bar['shipping_expendable'][0] ) {
		$className .= ' expandable';
	}
}

$dataPosition = $shipping_bar['shipping_position'] ?? 'right';

$content = get_field( 'shipping_bar_content' ) ?? ( $shipping_bar['content'] ?? '' );

if ( empty( $content ) ) {
	return;
}

?>

<div id="shipping-bar" class="shipping-bar <?php echo esc_attr( $className ); ?>" data-position="<?php echo esc_attr( $dataPosition ); ?>">
	<div class="shipping-bar__wrapper">

		<?php foreach ( $content as $item ) : ?>
			<div class="shipping-bar__item">
				<?php if ( ! empty( $item['icon'] ) ) : ?>
					<img src="<?php echo esc_url( $item['icon']['url'] ); ?>" alt="<?php echo esc_attr( $item['icon']['alt'] ) ?: esc_attr( $item['icon']['title'] ); ?>">
				<?php endif; ?>
				<div class="shipping-bar__body">
					<p class="shipping-bar__body_title"><?php echo esc_html( $item['title'] ); ?></p>

					<?php if ( ! empty( $item['text'] ) ) : ?>
						<p class="shipping-bar__body_text"><?php echo esc_html( $item['text'] ); ?></p>
					<?php endif; ?>

					<?php if ( ! empty( $item['link'] ) ) : ?>
						<p class="shipping-bar__body_text"><?php echo wp_kses_post( acf_link( $item['link'] ) ); ?></p>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>

	</div>
</div>
