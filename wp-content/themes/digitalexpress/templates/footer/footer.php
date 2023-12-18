<?php
// phpcs:ignoreFile
$footer    = get_field( 'footer', 'options' );
$copyright = get_field( 'copyright', 'options' );
$design_by = get_field( 'design_by', 'options' );
?>

<?php get_template_part( 'templates/footer/components/background' ); ?>

<div class="l-footer">

	<?php get_template_part( 'templates/footer/components/newsletter', null, array( 'newsletter' => $footer['newsletter'] ) ); ?>

	<div class="footer-top">
		<div class="footer-top__inner inner-frame">

			<div class="footer-top__col">
				<?php if ( ! empty( $footer['footer_logo'] ) ) : ?>
					<div class="footer-block">
						<img class="footer-logo" src="<?php echo $footer['footer_logo']['url']; ?>"
							alt="<?php echo ( ! empty( $footer['footer_logo']['alt'] ) ) ? $footer['footer_logo']['alt'] : $footer['footer_logo']['name']; ?>">
					</div>
				<?php endif; ?>

				<?php if ( ! empty( $footer['additional_content']['text'] ) ) : ?>
					<div class="footer-block">
						<div class="footer-title"><?php echo $footer['additional_content']['title']; ?></div>
						<p><?php echo $footer['additional_content']['text']; ?></p>
					</div>
				<?php endif; ?>

				<?php get_template_part( 'templates/components/socials' ); ?>
			</div>

			<div class="footer-top__col">
				<?php get_template_part( 'templates/footer/components/contact-info', null, array( 'contact_info' => $footer['contact_info'] ) ); ?>
			</div>

			<?php if ( has_nav_menu( 'footer-menu' ) ) : ?>
				<div class="footer-top__col">
					<div class="footer-block">
						<div class="footer-title"><?php echo wp_get_nav_menu_name( 'footer-menu' ); ?></div>

						<?php
						wp_nav_menu(
							array(
								'theme_location' => 'footer-menu',
								'container'      => 'ul',
								'menu_class'     => 'footer-nav v-direction',
							)
						);
						?>
					</div>
				</div>
			<?php endif; ?>

			<div class="footer-top__col">
				<?php get_template_part( 'templates/footer/components/contact-form', null, array( 'contact' => $footer['contact'] ) ); ?>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="footer-bottom__inner inner-frame">
			<?php if ( ! empty( $copyright ) ) : ?>
				<div class="copyright"><?php echo do_shortcode( $copyright ); ?></div>
			<?php endif; ?>

			<?php if ( has_nav_menu( 'privacy-menu' ) ) : ?>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'privacy-menu',
						'container'      => 'ul',
						'menu_class'     => 'footer-nav h-direction',
					)
				);
				?>
			<?php endif; ?>

			<?php if ( ! empty( $design_by ) ) : ?>
				<div class="design-by"><?php echo $design_by; ?></div>
			<?php endif; ?>
		</div>
	</div>

</div>
