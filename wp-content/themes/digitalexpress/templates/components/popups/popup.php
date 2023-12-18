<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'content'         => '',
		'data-fb-options' => 'colorTheme:white outerBorderRadius:8 padding:15 showControlsText:false minWidth:300 minHeight:80',
		'popup_id'        => uniqid( 'popup_' ),
		'class'           => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}
?>
<?php if ( ! empty( $args['content'] ) ) : ?>
	<div id="<?php echo esc_attr( $args['popup_id'] ); ?>" class="c-popup<?php echo esc_attr( $className ); ?>" style='display: none'>
		<?php echo wp_kses_post( $args['content'] ); ?>
	</div>
	<?php
endif;
