<?php
//phpcs:ignoreFile
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'taxonomy_items' => array(),
		'taxonomy_name'  => '',
		'all_link'       => '',
		'attributes'     => '',
		'get_param_name' => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= "{$args['class']}";
}

if ( ! empty( $args['get_param_name'] ) ) {
	$args['attributes'] .= "name='{$args['get_param_name']}'";
}
?>
<?php if ( ! empty( $args['taxonomy_items'] ) ) : ?>
	<?php
	$current_object      = get_queried_object();
	$is_current_taxonomy = isset( $current_object->taxonomy ) && $current_object->taxonomy === $args['taxonomy_name'];
	?>
	<select class="<?php echo esc_attr( $className ); ?>" <?php echo $args['attributes']; ?>>
		<option value="" <?php echo ! empty( $args['all_link'] ) ? 'data-term-url="' . esc_url( $args['all_link'] ) . '"' : ''; ?>><?php _e( 'All', 'dstheme' ); ?></option>
		<?php foreach ( $args['taxonomy_items'] as $term ) : ?>
			<option value="<?php echo $term->slug; ?>" <?php echo ( $is_current_taxonomy && isset( $current_object->slug ) && $current_object->slug === $term->slug ) || ( isset( $_GET[ $args['get_param_name'] ] ) && $_GET[ $args['get_param_name'] ] === $term->slug ) ? 'selected' : ''; ?> data-term-url="<?php echo esc_url( get_term_link( $term ) ); ?>">
				<?php echo $term->name; ?>
			</option>
		<?php endforeach ?>
	</select>
	<?php
endif;
