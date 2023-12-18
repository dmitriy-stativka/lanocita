<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */
if ( ! get_field( 'scroll_down_enable', 'option' ) ) {
	return;
}

$scroll_down          = get_field( 'scroll_down' );
$module_args          = [];
$scroll_down_position = get_field( 'scroll_down_position' );

if ( $scroll_down == 'global' ) {
	$module_args = array(
		'scroll_down_position' => $scroll_down_position === 'default' ? get_field( 'scroll_down_position', 'option' ) : $scroll_down_position,
		'scroll_down_icon'     => get_field( 'scroll_down_icon', 'option' ),
		'scroll_down_text'     => get_field( 'scroll_down_text', 'option' ),
	);
}


$args = wp_parse_args( $args, $module_args );

if ( $scroll_down ) : ?>

    <div class="scroll-down <?php echo $args['scroll_down_position']; ?>">
        <span class="scroll-down__txt">
            <?php echo $args['scroll_down_text']; ?>
        </span>
        <?php if ( $args['scroll_down_icon'] ) : ?>
            <img src="<?php echo $args['scroll_down_icon']; ?>" class="scroll-down__ico" alt="<?php echo $args['scroll_down_text']; ?>">
        <?php else : ?>
            <span>&#8659;</span>
        <?php endif; ?>
    </div>

<?php
endif;
