<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>
        <?php wp_title('|', true, 'right'); ?>
    </title>

    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >



<div class="wrapper">

    <header class="site-header" role="banner" data-sticky="sticky">
        <div class="container">
            <ul>
                <li>
                    <a href="#">МАГАЗИН</a>
                </li>
                <li>
                    <a href="#">ПОШУК</a>
                </li>
            </ul>
            <a href="/">
                <img src="<?php the_field('logo', 'options') ?>" alt="">
            </a>


           



            <ul>

            <?php pll_the_languages();?>
                
                <li>
                    <a href="#">ПОШУК</a>
                </li>
            </ul>
        </div>
    </header>
