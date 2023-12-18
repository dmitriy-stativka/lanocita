<?php
/**
 * @var array $args
 */

$args = wp_parse_args(
	$args,
	array(
		'terms_list' => '',
	)
);

$_pid = get_the_ID();
?>
<div class="single-post-style-2">
	<div class="single-post__col single-post__col1">
		<img src="<?php echo esc_url( ds_get_the_post_thumbnail_url( $_pid ) ); ?>" alt="<?php esc_attr( get_the_title( $_pid ) ); ?>">
	</div>
	<div class="single-post__col single-post__col2">
		<?php if ( ! empty( $args['terms_list'] ) ) : ?>
			<div class="single-post__cat-list"><?php echo $args['terms_list']; //phpcs:ignore?></div>
		<?php endif; ?>
		<?php the_title( '<h1 class="-h1">', '</h1>' ); ?>
	</div>
</div>
