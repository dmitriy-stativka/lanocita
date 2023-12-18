<?php
/**
 * Home Page Hero Section
 *
 * @package DS_Theme
 */

    $bgImage = get_sub_field( 'background_image' );
    $CTA = get_sub_field( 'cta' );
?>

<section class="homepage-hero">
        <div class="bg-image">
            <img src="<?php echo esc_url( $bgImage['url'] ); ?>" alt="<?php echo esc_attr( $bgImage['alt'] ); ?>">
        </div>
        <?php if ( ! empty( $CTA ) ) : ?>
            <div class="homepage-hero-cta">
                <a class="c-btn" href="<?php echo esc_url( $CTA['url'] ); ?>" target="<?php echo esc_html( $CTA['target'] ); ?>">
                    <span class="c-btn__txt"><?php echo esc_html( $CTA['title'] ); ?></span>
                </a>
            </div>
        <?php endif; ?>
    </div>
</section>
