<?php
/**
 * Template part for testimonial popup
 *
 * @package DS_Theme
 */

$args = wp_parse_args(
	$args,
	array(
		'story'           => get_field( 'full_story', get_the_ID() ),
		'data-fb-options' => 'colorTheme:white outerBorderRadius:8 padding:15 showControlsText:false minWidth:300 minHeight:80',
		'popup_id'        => uniqid( 'popup_' ),
		'show_link'       => true,
	)
);
?>
<?php if ( ! empty( $args['story'] ) ) : ?>
	<?php if ( $args['show_link'] ) : ?>
		<a href="#<?php echo esc_attr( $args['popup_id'] ); ?>" class="c-tst-popup-open naked floatbox" data-fb-options="<?php echo esc_attr( $args['data-fb-options'] ); ?>">
			<?php esc_attr_e( 'Read Their Story', 'dstheme' ); ?>
		</a>
	<?php endif; ?>

	<div id="<?php echo esc_attr( $args['popup_id'] ); ?>" class="c-tst-popup" style='display: none'>
		<?php echo wp_kses_post( $args['story'] ); ?>
	</div>
	<?php
endif;
