<?php
/**
 * Template for the subheader
 *
 * @package DS_Theme
 */

$main_title = get_field( 'title' );
$subtitle   = get_field( 'subtitle' );
$button     = get_field( 'button' );
$image      = get_field( 'image' );
?>

<section class="" style="background-image: url(<?php echo esc_url( $image ); ?>)">

	<?php if ( $main_title ) : ?>
		<h1>
			<?php echo esc_html( $main_title ); ?>
		</h1>
	<?php endif; ?>

	<?php if ( $subtitle ) : ?>
		<div class="">
			<?php echo esc_html( $subtitle ); ?>
		</div>
	<?php endif; ?>

	<?php if ( $button ) : ?>
		<?php echo acf_button( $button, array( 'class' => 'btn btn-filled' ) ); // phpcs:ignore?>
	<?php endif; ?>

</section>
