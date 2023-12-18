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
?>
<div class="single-post-style-1">
	<?php if ( ! empty( $args['terms_list'] ) ) : ?>
		<div class="single-post__cat-list"><?php echo $args['terms_list']; //phpcs:ignore?></div>
	<?php endif; ?>
	<?php the_title( '<h1 class="-h1">', '</h1>' ); ?>
</div>
