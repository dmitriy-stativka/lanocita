<?php
/**
 * The footer template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package DS_Theme
 */

global $dsmp_settings;
?>

<?php do_action( 'ds_after_content' ); ?>

<footer class="site-footer" role="contentinfo">

	<?php
		if ( function_exists('pll_current_language') ) {
			$current_lang = pll_current_language();
			wp_nav_menu( array( 
				'theme_location' => 'footer-menu-' . $current_lang, 
				'container_class' => 'footer-menu-nav' ) );
		}
	?>

	<?php if ( $copywhite = get_field( 'copywhite', 'options' ) ) : ?>
		<span class="copywhite"><?php echo esc_html( $copywhite ); ?></span>
	<?php endif; ?>

</footer>

</div><!-- wrapper -->

<!-- <?php get_template_part( 'templates/global/need-help-form' ); ?> -->

<?php wp_footer(); ?>

</body>
</html>

