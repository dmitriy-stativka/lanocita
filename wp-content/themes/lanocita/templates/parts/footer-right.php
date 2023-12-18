<?php
/**
 * Template for footer bottom
 *
 * @package DS_Theme
 */

$socials = get_field( 'social_icons', 'options' );
$nwsTitle = get_field( 'newsletter_title', 'options' );
$nwsForm = get_field( 'select_newsletter_form', 'options' );
?>

<div class="footer-right">
	<div class="inner_container">
        <div class="__top">
            <?php if ( $nwsTitle ) : ?>
                <h2 class="c-heading__title"><?php echo wp_kses_post( format_field_text( $nwsTitle ) ); ?></h2>
            <?php endif; ?>
            <?php if ( $nwsForm ) : ?>
                <div class="nws-form">
                    <?php gravity_form( $nwsForm, false, false, false, '', true ); ?>
                </div>
            <?php endif; ?>
            <?php if ( $socials ) : ?>
                <div class="footer-col social-list">
                    <?php foreach ( $socials as $social ) : ?>
                    <div class="social-list__item">
                        <?php
                        if ( ! empty( $social['url'] ) && ! empty( $social['icon'] ) ) :
                            // phpcs:ignore
                            echo acf_button(
                                array(
                                    'title' => '',
                                    'url'   => $social['url'],
                                ),
                                array(
                                    'rel'    => 'nofollow',
                                    'target' => '_blank',
                                    'class'  => 'social-list__link',
                                ),
                                get_svg(
                                    array(
                                        'icon'  => 'social-' . $social['icon'],
                                        'class' => '-' . $social['icon'] . ' social-list__icon',
                                    )
                                )
                            );
                        endif;
                        ?>
                    </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="__bottom">
            <?php
            $copyright = get_field( 'copyright', 'options' );
            if ( ! empty( $copyright ) ) :
                ?>
                <div class="footer-col copyright"><?php echo do_shortcode( $copyright ); ?></div>
            <?php endif; ?>

            <?php if ( has_nav_menu( 'footer-menu' ) ) : ?>
                <div class="footer-col">
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'footer-menu',
                            'container'      => 'ul',
                            'menu_class'     => 'footer-nav',
                        )
                    );
                    ?>
                </div>
            <?php endif; ?>
            <div class="footer-col footer-by">Web Design by <a href="https://digitalsilk.com" target="_blank" rel="noopener"><strong>Digital Silk</strong></a></div>
        </div>
	</div>
</div>
