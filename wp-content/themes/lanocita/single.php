<?php
/**
 * The template for displaying default page template for gutenberg show_in_rest posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DS_Theme
 */

 get_header(); ?>
<?php
// Проверяем, является ли это страницей продукта WooCommerce
if ( is_singular('product') ) {
    while ( have_posts() ) : 
        the_post(); 

        // Здесь вы вызываете шаблон содержимого продукта WooCommerce
        wc_get_template_part( 'content', 'single-product' );

    endwhile;
} else {
    // Здесь ваш обычный цикл WordPress для других постов
    while ( have_posts() ) : 
        the_post(); 

        // Ваш шаблон для отображения обычных постов
        get_template_part( 'content', get_post_format() );

    endwhile;
}
?>


<?php get_footer(); ?>