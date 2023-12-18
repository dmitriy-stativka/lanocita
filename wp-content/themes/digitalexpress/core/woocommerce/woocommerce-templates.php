<?php
//phpcs:ignoreFile

/**
 * Rebuild Woocommerce templates with standard actions
 */
foreach ( glob( get_template_directory() . '/core/woocommerce/templates/*.php' ) as $filename ) {
	include_once $filename;
}

// include_once "templates/archive-product.php";
// include_once "templates/single-product.php";
// include_once "templates/cart-popup.php";
// include_once "templates/user-account.php";
// include_once "templates/wishlist.php";
// include_once "templates/reviews.php";
// include_once "templates/checkout.php";
// include_once "templates/global.php";
