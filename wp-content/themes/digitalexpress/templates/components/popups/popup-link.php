<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'popup_link'      => '',
		'content'         => '',
		'data-fb-options' => 'colorTheme:white outerBorderRadius:8 padding:15 showControlsText:false minWidth:300 minHeight:80',
		'popup_type'      => 'modern',
		'class'           => '',
	)
);
$className = '';
if ( ! empty( $args['className'] ) ) {
	$className .= " {$args['class']}";
}

if ( ! empty( $args['popup_type'] ) ) {
	$className .= " {$args['popup_type']}";
}
?>
<?php if ( ! empty( $args['popup_link'] ) ) : ?>
	<a href="<?php echo esc_attr( $args['popup_link'] ); ?>" class="c-popup-link floatbox<?php echo esc_attr( $className ); ?>" data-fb-options="<?php echo esc_attr( $args['data-fb-options'] ); ?>">
		<?php if ( ! empty( $args['content'] ) ) : ?>
			<?php echo wp_kses_post( $args['content'] ); ?>
		<?php endif; ?>
	</a>
	<?php
endif;
