<?php
/**
 * Main Theme Functions
 *
 * @package DS_Theme
 */

if ( ! defined( 'THEME_URL' ) ) {
	define( 'THEME_URL', get_stylesheet_directory_uri() );
}

/**
 * Main theme functionality
 */
require_once 'core/theme-setup.php';

/**
 * Project Customizations
 */
require_once 'extend/custom-setup.php';

/**
 * Woocommerce Files and Classes
 * Enable for Woocommerce projects
 */
if ( class_exists( 'woocommerce' ) ) {
	include_once 'core/woocommerce/woocommerce-setup.php';
}

// Polylang strings

pll_register_string('account', 'account');
pll_register_string('search', 'search');
pll_register_string('store', 'store');




if ( ! function_exists( 'ds_register_theme_option_pagee' ) ) {
	/**
	 * Register Options page for ACF groups
	 */
	function ds_register_theme_option_pagee() {
		if ( function_exists( 'acf_add_options_page' ) ) {
			// Register options page.
			$option_page = acf_add_options_page(
				array(
					'page_title' => __( 'Theme Options', 'dstheme' ),
					'menu_title' => __( 'Theme Options', 'dstheme' ),
					'menu_slug'  => 'theme-optionss',
					'position'   => '59',
				)
			);
		}
	}
	add_action( 'acf/init', 'ds_register_theme_option_pagee' );
}


// Menu

function register_footer_menus() {
    register_nav_menu('footer-menu-uk', __( 'Custom Footer Menu - UA' ));
    register_nav_menu('footer-menu-en', __( 'Custom Footer Menu - EN' ));
}
add_action('init', 'register_footer_menus');



function register_mobile_menus() {
    register_nav_menu('header-mobile-uk', __( 'Custom Mobile Menu - UA' ));
    register_nav_menu('header-mobile-en', __( 'Custom Mobile Menu - EN' ));
}
add_action('init', 'register_mobile_menus');


if (!function_exists('display_shop_categories')) {
    function display_shop_categories() {
        // Проверяем, находится ли пользователь на главной странице магазина или на странице категории товара
        if (!is_shop() && !is_product_category()) {
            return; // Если нет, то не выполняем остальную часть функции
        }

        // Аргументы для получения категорий продуктов
        $args = array(
            'taxonomy'     => 'product_cat',
            'orderby'      => 'name',
            'show_count'   => 0,
            'pad_counts'   => 0,
            'hierarchical' => 1,
            'title_li'     => '',
            'hide_empty'   => 0
        );

        // Начало списка категорий
        echo '<div class="shop-categories_body"><ul class="shop-categories">';

        // Получаем и выводим категории
        $all_categories = get_categories($args);
        foreach ($all_categories as $cat) {
            if ($cat->category_parent == 0) {
                $category_id = $cat->term_id;
                echo '<li><a href="'. get_term_link($cat) .'">'. $cat->name .'</a></li>';
            }
        }

        // Конец списка категорий
        echo '</ul></div>';
    }
}

// Добавляем функцию в хук woocommerce_before_main_content
add_action('woocommerce_before_main_content', 'display_shop_categories', 50);




// Функция изменения размера изображения товара на полный размер
function change_woocommerce_image_size() {
    return 'full';
}

// Применение фильтра для архивных страниц товаров
add_filter('woocommerce_gallery_image_size', 'change_woocommerce_image_size');
// Применение фильтра для главной страницы товаров (одиночных страниц)
add_filter('single_product_archive_thumbnail_size', 'change_woocommerce_image_size');
