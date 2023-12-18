<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'component_type' => get_field( 'component_settings_navigation_type' ) ?: 'v1',
		'class'          => '',
		'title'          => get_sub_field( 'title_nav' ),
		'icon'           => get_sub_field( 'icon' ),
	)
);
$className = '';
$tabrole   = 'false';
if ( ! empty( $args['class'] ) ) {
	$className = " {$args['class']}";
	$tabrole   = 'true';
}
?>

<?php if ( ! empty( $args['tab_id'] ) && ! empty( $args['title'] ) ) : ?>
    <button class="l-tbnav__item c-tbnav <?php echo esc_attr( $className ); ?> js-tabs-nav-item" data-tab="<?php echo $args['tab_id']; ?>" role="tab" aria-selected="<?php echo $tabrole; ?>" aria-controls="data-tab-<?php echo $args['tab_id']; ?>">

		<?php if ( ! empty( $args['icon'] ) ) : ?>
            <div class="c-tbnav__media">
                <img class="c-tbnav__img" loading="lazy" src="<?php echo $args['icon']['url']; ?>" alt="<?php echo $args['icon']['alt'] ?: $args['icon']['title']; ?>">
            </div>
		<?php endif; ?>

		<div class="c-tbnav__label">
		    <span><?php echo $args['title']; ?></span>
		</div>

        <span class="c-tbnav__deco"></span>
    </button>
<?php
endif;
