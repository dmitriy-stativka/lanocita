<?php
/**
 * The header template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 * @package DS_Theme
 */

/**
 * CSS classes args
 *
 * @var array $args
 */
$args = wp_parse_args(
	$args,
	array(
		'class_body' => '',
		'class_main' => '',
	)
);

global $dsmp_settings;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title><?php wp_title( '|', true, 'right' ); ?></title>

		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

		<link rel="preconnect" href="https://fonts.gstatic.com">
		<?php // phpcs:ignore;?>
		<link rel="stylesheet" href="<?php echo esc_url( ds_get_uploads_dir_baseurl() ); ?>/dsmp-assets/theme.css" media="all" type="text/css">

		<?php wp_head(); ?>
	</head>
<body <?php body_class( $args['class_body'] ); ?>>

<?php do_action( 'wp_body_open' ); ?>

	<a class="skip-link" href="#main-content"><?php esc_html_e( 'Skip to content', 'dstheme' ); ?></a>

<div class="wrapper">

<?php do_action( 'ds_wrapper_open' ); ?>

<header class="site-header" role="banner" data-sticky="sticky">
        <div class="container">

			<button class="site-header__btn">
				<span></span>
			</button>

            <ul class="header-nav-first">
                <li>
                    <a href="/shop/"><?php pll_e('store');?></a>
                </li>
                <li>
                    <a href="#"><?php pll_e('search');?></a>
                </li>
            </ul>

            <a href="/" class="site-header_logo-link">
                <img class="site-header_logo" src="<?php the_field('logo', 'options') ?>" alt="">
            </a>

			<div class="header-nav"> 
				<ul>
					<li class="header-nav_lang">
						<?php $translations = pll_the_languages(array("raw" => 1,));?>  
						<div class='select'>
							<div class='select__header'>
								<?php foreach ($translations as $item) :
										if($item['current_lang']){ ?>
											<span class='select__current'><?= $item['name'] ?></span>
										<?php }
									endforeach; 
								?>
								<div class='select__icon'>
									<svg width="8" height="5" >
										<use href='<?php echo get_template_directory_uri();?>/img/sprite/sprite.svg#arrow-bottom'></use>
									</svg>
								</div>
							</div>
							<div class='select__body'>
								<ul class='select__wrapp'>
									<?php foreach ($translations as $item) :
										if($item['current_lang']){
											echo '';
										}else{ ?>
											<li class='select__item' data-choice='choosen'>
												<a class="dropdown-item <?= ($item['current_lang']) ? 'disabled' : '' ?>" href="<?= $item['url'] ?>">
													<?= $item['name'] ?>
												</a>    
											</li>
										<?php }
									endforeach; ?>
								</ul>
							</div>
						</div> 
					</li>
					<li class="woocommerce_name">
						<?php if ( is_user_logged_in() ) : 
							$current_user = wp_get_current_user(); ?>
							<a href="/my-account"><?php echo esc_html( $current_user->display_name ); ?></a>
						<?php else : ?>
							<a href="/my-account"><?php pll_e('account');?></a>
						<?php endif; ?>
					</li>

					<li>
						<?php
							if ( function_exists( 'WC' ) ) {
								$items_count = WC()->cart->get_cart_contents_count();
								$cart_url = wc_get_cart_url();
								echo 
								'<a href="' . esc_url( $cart_url ) . '" title="Корзина" class="site-header_basket">
									<span>' . $items_count . '</span><svg width="30" height="30" class="icon icon-basket" aria-hidden="true" role="img">
										<use xlink:href="#basket"></use>
									</svg>' .
								'</a>';
							}
						?>
					</li>
					<li>
						<a href="/wishlists">
							<svg width="30" height="30" class="icon icon-wishlist" aria-hidden="true" role="img">
								<use xlink:href="#wishlist"></use>
							</svg>
						</a>
					</li>
				</ul>

				
				
            </div>
        </div>


    </header>


	<div class="dropdown-mobile-menu">
		<?php
			if ( function_exists('pll_current_language') ) {
				$current_lang = pll_current_language();
				wp_nav_menu( array( 
					'theme_location' => 'header-mobile-' . $current_lang, 
					'container_class' => 'header-mobile-nav' ) );
			}
		?>




		<?php $translations = pll_the_languages(array("raw" => 1,));?>  
		<div class='select'>
			<div class='select__header'>
				<?php foreach ($translations as $item) :
						if($item['current_lang']){ ?>
							<span class='select__current'><?= $item['name'] ?></span>
						<?php }
					endforeach; 
				?>
				<div class='select__icon'>
					<svg width="8" height="5" >
						<use href='<?php echo get_template_directory_uri();?>/img/sprite/sprite.svg#arrow-bottom'></use>
					</svg>
				</div>
			</div>
			<div class='select__body'>
				<ul class='select__wrapp'>
					<?php foreach ($translations as $item) :
						if($item['current_lang']){
							echo '';
						}else{ ?>
							<li class='select__item' data-choice='choosen'>
								<a class="dropdown-item <?= ($item['current_lang']) ? 'disabled' : '' ?>" href="<?= $item['url'] ?>">
									<?= $item['name'] ?>
								</a>    
							</li>
						<?php }
					endforeach; ?>
				</ul>
			</div>
		</div> 


		<div class="dropdown-mobile-menu_name">
			<?php if ( is_user_logged_in() ) : 
				$current_user = wp_get_current_user(); ?>
				<a href="/my-account"><?php echo esc_html( $current_user->display_name ); ?></a>
			<?php else : ?>
				<a href="/my-account"><?php pll_e('account');?></a>
			<?php endif; ?>
		</div>
	</div>


	<?php do_action( 'ds_before_content', $args['class_main'] ); ?>
