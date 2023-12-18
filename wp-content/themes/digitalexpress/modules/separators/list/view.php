<?php
/**
 * Image Rotation Main Template.
 *
 * @var array $block The block settings. Most used ['className'],['id'],['anchor']
 * @var object $moduleConfig ->get_styles(), ->data_attributes, ->container, ->container_width.
 */
// phpcs:ignoreFile

$args = array(
	'list_header_tag' => get_field( 'list_header_tag' ) ?: 'h2',
	'list_color'      => get_field( 'list_color' ) ?: '',
	'list_font_size'  => get_field( 'list_font_size' ) ?: '',
	'items'           => get_field( 'items' ) ?: array(),
);

$desc_color_style = '';
$desc_font_size   = '';
$desc_el_styles   = '';

if ( ! empty( $args['list_color'] ) ) {
	$desc_color_style = 'color:' . $args['list_color'] . ';';
}
if ( ! empty( $args['list_font_size'] ) ) {
	$desc_font_size = 'font-size:' . $args['list_font_size'] / 10 . 'rem;';
}
if ( ! empty( $desc_color_style ) || ! empty( $desc_font_size ) ) {
	$desc_el_styles = 'style="' . $desc_color_style . $desc_font_size . '"';
}
?>

<div class="separators-custom-box<?php echo esc_attr( $block['className'] ); ?>" <?php echo $moduleConfig->data_attributes; ?> <?php echo $moduleConfig->get_styles(); ?>>

	<?php get_template_part( 'templates/components/anchor', null, array( 'anchor_id' => $block['anchor'] ?? '' ) ); ?>

	<?php if ( ! empty( $args['items'] ) ) : ?>
		<ul class="">
			<?php foreach ( $args['items'] as $item ) : ?>
				<li class="">
					<?php if ( ! empty( $item['title'] ) ) : ?>
						<?php
						echo acf_title(
							$item['title'],
							array(
								'tag'       => $args['list_header_tag'],
								'font-size' => $args['list_font_size'],
								'color'     => $args['list_color'],
							)
						);
						?>
					<?php endif; ?>
					<?php if ( ! empty( $item['description'] ) ) : ?>
						<span class="" <?php echo ! empty( $desc_el_styles ) ? $desc_el_styles : ''; ?>>
						<?php echo $item['description']; ?>
					</span>
					<?php endif; ?>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>
