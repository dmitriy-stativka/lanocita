<?php
/**
 * Template Name: Simple Text Page
 */

get_header(
	null,
	array(
		'class_body' => '',
		'class_main' => '',
	)
);
?>

	<div class="inner-frame simple-page">

		<div class="content-single is-wysiwyg">

			<?php
			if ( have_posts() ) :
				while ( have_posts() ) :
					the_post();

					get_template_part( 'templates/content/content', 'page' );
				endwhile;
			endif;
			?>

		</div>


	</div>

<?php get_footer(); ?>
					<?php
