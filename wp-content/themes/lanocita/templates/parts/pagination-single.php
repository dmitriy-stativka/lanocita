<?php
/**
 * Template responsible for single pagination
 *
 * @package DS_Theme
 */

?>

<div class="container">
	<div class="blog-pagination bottom">

		<?php
		$prev_post = get_adjacent_post( false, '', true );
		if ( $prev_post ) :
			$prev_post_link_url = get_permalink( $prev_post->ID );
			?>

			<a href="<?php echo ( ! empty( $prev_post ) ) ? esc_url( $prev_post_link_url ) : '#'; ?>" class="c-btn -link 
				<?php
				if ( empty( $prev_post ) ) {
					echo 'disabled';}
				?>
			">
				<?php esc_html_e( 'Previous Post', 'dstheme' ); ?>
			</a>
		<?php endif; ?>

		<?php
		$next_post = get_adjacent_post( false, '', false );
		if ( $next_post ) :
			$next_post_link_url = get_permalink( $next_post->ID );
			?>

			<a href="<?php echo ( ! empty( $next_post ) ) ? esc_url( $next_post_link_url ) : '#'; ?>" class="c-btn -link 
				<?php
				if ( empty( $next_post ) ) {
					echo 'disabled';}
				?>
			">
				<?php esc_html_e( 'Next Post', 'dstheme' ); ?>
			</a>
		<?php endif; ?>

	</div>
</div>
