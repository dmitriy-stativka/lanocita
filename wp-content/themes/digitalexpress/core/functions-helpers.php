<?php
/**
 * Theme Helper Functions
 *
 * @package DS_Theme
 */

if ( ! function_exists( 'ds_the_excerpt' ) ) {
	/**
	 * Display post excerpt with custom characters amount
	 *
	 * @param int      $length excerpt length.
	 * @param null|int $post_id post_id.
	 * @returns string
	 */
	function ds_the_excerpt( $length = 90, $post_id = null ) {
		if ( ! $post_id ) {
			$post_id = get_the_ID();
		}
		if ( ! $post_id ) {
			return false;
		}

		$page_object = get_post( $post_id );
		// phpcs:ignore
		echo substr( strip_tags( $page_object->post_content ), 0, $length ) . '...';
	}
}


if ( ! function_exists( 'ds_get_excerpt' ) ) {
	/**
	 * Return post excerpt with custom characters amount
	 *
	 * @param int      $length excerpt length.
	 * @param null|int $post_id post_id.
	 * @returns string
	 */
	function ds_get_excerpt( $length = 90, $post_id = null ) {
		if ( ! $post_id ) {
			$post_id = get_the_ID();
		}
		if ( ! $post_id ) {
			return false;
		}

		$page_object = get_post( $post_id );
		// phpcs:ignore
		return substr( strip_tags( $page_object->post_content ), 0, $length ) . '...';
	}
}


if ( ! function_exists( 'ds_pagination' ) ) {
	/**
	 * Pagination for archive.php templates
	 *
	 * @returns string
	 */
	function ds_pagination() {
		if ( is_singular() ) {
			return;
		}

		global $wp_query;

		// Stop execution if there's only 1 page.
		if ( $wp_query->max_num_pages <= 1 ) {
			return;
		}

		$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
		$max   = intval( $wp_query->max_num_pages );

		// Add current page to the array.
		if ( $paged >= 1 ) {
			$links[] = $paged;
		}

		// Add the pages around the current page to the array.
		if ( $paged >= 3 ) {
			$links[] = $paged - 1;
			$links[] = $paged - 2;
		}

		if ( ( $paged + 2 ) <= $max ) {
			$links[] = $paged + 2;
			$links[] = $paged + 1;
		}

		echo '<div class="navigation"><ul>' . "\n";

		// Previous Post Link.
		if ( get_previous_posts_link() ) {
			// phpcs:ignore
			printf( '<li class="prev">%s</li>' . "\n", get_previous_posts_link() );
		}

		// Link to first page, plus ellipses if necessary.
		// phpcs:ignore
		if ( ! in_array( 1, $links ) ) {
			$class = 1 == $paged ? ' class="active"' : '';

			// phpcs:ignore
			printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( 1 ) ), '1' );

			// phpcs:ignore
			if ( ! in_array( 2, $links ) ) {
				echo '<li>…</li>';
			}
		}

		// Link to current page, plus 2 pages in either direction if necessary.
		sort( $links );
		foreach ( (array) $links as $link ) {
			$class = $paged == $link ? ' class="active"' : '';
			// phpcs:ignore
			printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
		}

		// Link to last page, plus ellipses if necessary.
		// phpcs:ignore
		if ( ! in_array( $max, $links ) ) {
			if ( ! in_array( $max - 1, $links ) ) {
				echo '<li>…</li>' . "\n";
			}

			$class = $paged == $max ? ' class="active"' : '';
			// phpcs:ignore
			printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $max ) ), $max );
		}

		// Next Post Link.
		if ( get_next_posts_link() ) {
			// phpcs:ignore
			printf( '<li class="next">%s</li>' . "\n", get_next_posts_link() );
		}

		echo '</ul></div>' . "\n";
	}
}


if ( ! function_exists( 'ds_pagination_ajax' ) ) {
	/**
	 * AJAX pagination for archive.php templates - load-more button
	 *
	 * @returns string
	 */
	function ds_pagination_ajax() {
		global $wp_query;

		$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;

		$max      = intval( $wp_query->max_num_pages );
		$link_num = 1;

		$category_id = 'all';
		if ( isset( $wp_query->query_vars['cat'] ) ) {
			$cat_id = $wp_query->query_vars['cat'];
			if ( '' !== $cat_id ) {
				$category_id = $cat_id;
			}
		}

		if ( $paged < $max ) {
			$link_num = $paged + 1;
		}

		$link = array(
			'url'   => esc_url( get_pagenum_link( $link_num ) ),
			'title' => get_option( 'options_more_posts_link_text' ),
		);

		$link_attrs = array(
			'class'     => 'c-btn -primary ajax-load-more',
			'data-page' => 1,
		);

		if ( $wp_query->max_num_pages <= $paged ) {
			$link_attrs['style'] = 'display:none;';
		}

		// phpcs:ignore
		echo acf_button( $link, $link_attrs );
	}
}

if ( ! function_exists( 'acf_button' ) ) {
	/**
	 * Simple functions to display ACF field type "link" as DSMP button
	 *
	 * @param array  $button acf link field.
	 * @param array  $args tag attributes.
	 * @param string $icon icon html icon tag.
	 * @param array  $icon_args icon args.
	 * @param array  $popup popup data.
	 *
	 * @returns string
	 */
	function acf_button( $button, $args = array(), $icon = '', $icon_args = array(), $popup = array() ) {
		global $dsmp_settings;

		if ( ! isset( $button['url'] ) ) {
			return;
		}

		if ( false !== $icon ) {
			if ( empty( $icon ) ) {
				$icon = $dsmp_settings->buttons_icon;
			}
			if ( ! empty( $args['class'] ) && false !== strpos( $args['class'], ' -link' ) ) {
				$custom_icon = $dsmp_settings->buttons_link_icon;
				if ( ! empty( $custom_icon ) && empty( $icon_args['is_custom_icon'] ) ) {
					$icon = $dsmp_settings->buttons_link_icon;
				}
			}

			if ( ! empty( $icon ) ) {
				$icon_reverse        = $icon_args['reverse'] ?? $dsmp_settings->buttons_icon_reverse;
				$reversed_icon_class = ! empty( $icon_reverse ) ? ' icon-reversed' : '';

				$icon          = '<span class="c-btn__ico' . $reversed_icon_class . '">' . $icon . '</span>';
				$icon_position = $icon_args['position'] ?? $dsmp_settings->buttons_icon_position;
				$icon_class    = "has-icon icon-{$icon_position}";
			}
		}

		$popup_content = '';
		if ( ! empty( $popup['open_popup'] ) ) {
			switch ( $popup['open_popup'] ) {
				case 'content':
					if ( ! empty( $popup['popup_content'] ) ) {
						$popup_id                = uniqid( 'popup_' );
						$button['url']           = '#' . $popup_id;
						$args['class']          .= ' naked floatbox';
						$args['data-fb-options'] = 'colorTheme:white outerBorderRadius:8 padding:15 showControlsText:false minWidth:300 minHeight:80';
						$popup_content          .= "<div style='display: none'><div id='{$popup_id}'>{$popup['popup_content']}</div></div>";
					}
					break;
				case 'video':
					$popup_class      = ' naked floatbox';
					$popup_fb_options = 'addVideoThumb:false width:640 height:360 colorTheme:white outerBorderRadius:8 padding:15';
					if ( 'url' === $popup['popup_video_type'] && ! empty( $popup['popup_video_url'] ) ) {
						$args['class']          .= $popup_class;
						$args['data-fb-options'] = $popup_fb_options;

						$iframe = wp_oembed_get( $popup['popup_video_url'] );
						// Use preg_match to find iframe src.
						preg_match( '/src="(.+?)"/', $iframe, $matches );
						$button['url'] = ! empty( $matches ) ? $matches[1] : $popup['popup_video_url'];
					} elseif ( 'file' === $popup['popup_video_type'] && ! empty( $popup['popup_video_file'] ) ) {
						$args['class']          .= $popup_class;
						$args['data-fb-options'] = $popup_fb_options;

						$button['url'] = $popup['popup_video_file']['url'];
					}
					break;
				default:
					break;
			}
		}

		$attrs          = '';
		$btn_style_type = $dsmp_settings->buttons_style_type;
		if ( ! empty( $args ) ) {
			foreach ( $args as $attr => $value ) {
				if ( 'class' === $attr ) {
					if ( isset( $icon_class ) ) {
						$value .= ' ' . $icon_class;
					}

					$value .= ' ' . $btn_style_type;

					$attrs .= $attr . '="' . $value . '"';
				} else {
					$attrs .= $attr . '="' . $value . '"';
				}
			}
		} else {
			$attrs = 'class="c-btn -primary ' . ( ! empty( $icon_class ) ? $icon_class : '' ) . ' ' . $btn_style_type . '"';
		}
		$target = ! empty( $button['target'] ) ? 'target="' . $button['target'] . '"' : false;

		return sprintf( '<a href="%2$s" %3$s %4$s><span class="c-btn__txt">%1$s</span>%5$s</a>%6$s', $button['title'], $button['url'], $target, $attrs, $icon, $popup_content );
	}
}


if ( ! function_exists( 'acf_link' ) ) {
	/**
	 * Simple functions to display ACF field type "link"
	 *
	 * @param array  $link - acf link field.
	 * @param array  $args - tag attributes.
	 * @param string $icon - icon <img> or svg string.
	 *
	 * @returns string
	 */
	function acf_link( $link, $args = array(), $icon = '' ) {
		if ( ! isset( $link['title'] ) && ! isset( $link['url'] ) ) {
			return;
		}

		$attrs = '';
		foreach ( $args as $attr => $value ) {
			$attrs .= $attr . '="' . $value . '"';
		}
		$target = ! empty( $link['target'] ) ? 'target="' . $link['target'] . '"' : false;

		return sprintf( '<a href="%2$s" %3$s %4$s>%1$s %5$s</a>', $link['title'], $link['url'], $target, $attrs, $icon );
	}
}


if ( ! function_exists( 'acf_ajax_button' ) ) {
	/**
	 * Create Load More link for Gutenberg ajax modules
	 *
	 * @param string $text contains text.
	 *
	 * @returns string
	 */
	function acf_ajax_button( $text ) {
		$link = array(
			'url'   => '#',
			'title' => $text,
		);

		$link_attrs = array(
			'class'     => 'c-btn -primary ajax-load-more',
			'data-page' => 1,
		);

		return acf_button( $link, $link_attrs );
	}
}


if ( ! function_exists( 'acf_title' ) ) {
	/**
	 * Simple functions to display ACF field type text
	 *
	 * @param string $title "acf text field".
	 * @param array  $args "acf fields group".
	 * @param string $css_class css class.
	 *
	 * @returns string
	 */
	function acf_title( $title, $args = array(), $css_class = '' ) {
		if ( ! empty( $args['title_styles'] ) ) {
			$args = $args['title_styles'];
		} // get internal content for field type "clone".

		if ( ! empty( $args['tag'] ) ) {
			$tag = $args['tag'];
			unset( $args['tag'] );
		} else {
			$tag = 'h2';
		}

		$styles = '';
		if ( $args ) {
			foreach ( $args as $style => $value ) {
				if ( empty( $value ) ) {
					continue;
				}

				switch ( $style ) {
					case 'font-size':
						$styles .= $style . ':' . $value / 10 . 'rem;';
						break;
					default:
						$styles .= $style . ':' . $value . ';';
				}
			}
		}

		if ( ! empty( $styles ) ) {
			$styles = 'style="' . $styles . '"';
		}

		if ( ! empty( $css_class ) ) {
			$css_class = 'class="' . $css_class . '"';
		}

		return sprintf( '<%2$s %3$s %4$s>%1$s</%2$s>', $title, $tag, $styles, $css_class );
	}
}


if ( ! function_exists( 'theme_feature' ) ) {
	/**
	 * Helper to check is theme features enabled
	 *
	 * @param string $feature ACF field slug.
	 */
	function theme_feature( $feature ) {
		$value = get_option( 'options_' . $feature );

		if ( 'on' === $value || 'enable' === $value ) {
			return true;
		}

		return false;
	}
}


if ( ! function_exists( 'ds_register_menu' ) ) {
	/**
	 * Function to register menus
	 *
	 * @param array $menus = ['slug'=>'menu','name'=>'Menu'].
	 */
	function ds_register_menu( $menus ) {
		if ( $menus ) {
			foreach ( $menus as $menu ) {
				register_nav_menus( array( $menu['slug'] => $menu['name'] ) );
			}
		}
	}
}


if ( ! function_exists( 'ds_placeholder' ) ) {
	/**
	 * Placeholder Image URL
	 *
	 * @return string jpg image URL
	 */
	function ds_placeholder() {
		return get_template_directory_uri() . '/assets/img/placeholder.jpg';
	}
}


if ( ! function_exists( 'ds_get_the_post_thumbnail_url' ) ) {
	/**
	 * DS function to take thumbnail_url or placeholder URL (if thumbnail_url is empty)
	 *
	 * @param mixed $post_id contains post id.
	 *
	 * @return string jpg image URL
	 */
	function ds_get_the_post_thumbnail_url( $post_id = '' ) {
		if ( ! $post_id ) {
			$post_id = get_the_ID();
		}

		return ( ! get_the_post_thumbnail_url( $post_id ) ) ? ds_placeholder() : get_the_post_thumbnail_url( $post_id );
	}
}


if ( ! function_exists( 'ds_get_module_css' ) ) {
	/**
	 * Gutenberg module css
	 *
	 * @param string $module contains module name.
	 *
	 * @return string css URL
	 */
	function ds_get_module_css( $module ) {
		return get_template_directory_uri() . '/assets/_dist/css/admin/' . $module . '.css';
	}
}


if ( ! function_exists( 'ds_get_module_js' ) ) {
	/**
	 * Gutenberg module js
	 *
	 * @param string $module contains module name.
	 *
	 * @return string js URL
	 */
	function ds_get_module_js( $module ) {
		return get_template_directory_uri() . '/assets/_src/js/admin/' . $module . '.js';
	}
}


if ( ! function_exists( 'ds_get_block_name' ) ) {

	/**
	 * Gutenberg module name
	 *
	 * @param string $name contains module name.
	 *
	 * @return string module slug name
	 */
	function ds_get_block_name( $name ) {
		return str_replace( 'acf/', '', $name );
	}
}


if ( ! function_exists( 'ds_get_module_img' ) ) {
	/**
	 * Gutenberg module preview image
	 *
	 * @param string $module contains module name.
	 * @param string $path contains path.
	 *
	 * @string jpg image URL
	 */
	function ds_get_module_img( $module, $path = false ) {
		return ( $path ? get_stylesheet_directory() : get_stylesheet_directory_uri() ) . "/assets/img/$module.jpg";
	}
}


if ( ! function_exists( 'ds_strposa' ) ) {
	/**
	 * Using an array as needles in strpos
	 *
	 * @param array $haystack array haystack.
	 * @param array $needle array needle.
	 * @param int   $offset offset number.
	 *
	 * @return bool
	 */
	function ds_strposa( $haystack, $needle, $offset = 0 ) {

		if ( ! is_array( $needle ) ) {
			$needle = array( $needle );
		}

		foreach ( $needle as $query ) {
			// phpcs:ignore
			if ( ( $pos = strpos( $haystack, $query, $offset ) ) !== false ) {
				return $pos;
			} // stop on first true result.
		}

		return false;
	}
}


if ( ! function_exists( 'ds_hex_to_rgba' ) ) {
	/**
	 * Converts hex color to rgba
	 *
	 * @param string $hex contains color hex.
	 *
	 * @return mixed|string
	 */
	function ds_hex_to_rgba( $hex ) {
		if ( preg_match( '/^rgb[a]?.+$/ui', $hex ) ) {
			return $hex;
		}

		$hex     = str_replace( '#', '', $hex );
		$hex_len = strlen( $hex );
		if ( 3 === $hex_len ) {
			list( $r, $g, $b ) = sscanf( $hex, '%1x%1x%1x' );
		} elseif ( 4 === $hex_len ) {
			list( $r, $g, $b, $a ) = sscanf( $hex, '%1x%1x%1x%1x' );
		} elseif ( 6 === $hex_len ) {
			list( $r, $g, $b ) = sscanf( $hex, '%2x%2x%2x' );
		} elseif ( 8 === $hex_len ) {
			list( $r, $g, $b, $a ) = sscanf( $hex, '%2x%2x%2x%2x' );
		}

		$a = ! empty( $a ) ? round( (float) $a / 255, 2 ) : 1;

		return "rgba($r,$g,$b,$a)";
	}
}


if ( ! function_exists( 'is_assoc' ) ) {

	/**
	 * Checks if array is associative
	 *
	 * @param array $var contains variable.
	 *
	 * @return bool
	 */
	function is_assoc( $var ): bool {
		return is_array( $var ) && array_diff_key( $var, array_keys( array_keys( $var ) ) );
	}
}


if ( ! function_exists( 'get_button_icon_settings' ) ) {

	/**
	 * Gets icon settings for separate button
	 *
	 * @param array $link link array.
	 *
	 * @return array
	 */
	function get_button_icon_settings( $link ): array {
		$icon_settings = array(
			'icon'      => '',
			'icon_args' => array(),
		);

		if ( ! empty( $link ) && ! empty( $link['is_custom_icon'] ) ) {
			if ( 'yes' === $link['is_custom_icon'] ) {
				$icon_settings['icon']                        = DS_ExpressButtons::get_icon( $link );
				$icon_settings['icon_args']['reverse']        = ! empty( $link['icon_reversed'] );
				$icon_settings['icon_args']['position']       = ! empty( $link['icon_direction'] ) ? DS_ExpressButtons::get_icon_position( $link['icon_direction'] ) : null;
				$icon_settings['icon_args']['is_custom_icon'] = true;
			} elseif ( 'no' === $link['is_custom_icon'] ) {
				$icon_settings['icon']                        = false;
				$icon_settings['icon_args']['is_custom_icon'] = false;
			}
		}

		return $icon_settings;
	}
}


if ( ! function_exists( 'ds_is_super_admin' ) ) {
	/**
	 * Check if loged in user is super admin as DigitalSilk user
	 *
	 * @return bool
	 */
	function ds_is_super_admin(): bool {
		$user = wp_get_current_user();
		if ( ! $user || ! $user->exists() ) {
			return false;
		}

		return strpos( $user->user_email, '@digitalsilk.com' ) !== false;
	}
}


if ( ! function_exists( 'ds_get_uploads_dir_baseurl' ) ) {
	/**
	 * Gets baseurl of uploads dir with right protocol
	 *
	 * @return string
	 */
	function ds_get_uploads_dir_baseurl(): string {
		$uploads_dir = wp_get_upload_dir();
		$base_url    = $uploads_dir['baseurl'];

		if ( is_ssl() ) {
			$base_url = str_replace( 'http://', 'https://', $base_url );
		}

		return $base_url;
	}
}


if ( ! function_exists( 'ds_get_field_key_font_weight' ) ) {
	/**
	 * Gets acf field key for font weight
	 *
	 * @param string $font_family font family.
	 * @param string $field_prefix field prefix.
	 *
	 * @return string
	 */
	function ds_get_field_key_font_weight( string $font_family, string $field_prefix ) {
		return ( ! empty( $field_prefix ) ? $field_prefix . '_' : '' ) . 'font_weight_' . str_replace( ' ', '_', strtolower( $font_family ) );
	}
}


if ( ! function_exists( 'ds_is_svg' ) ) {
	/**
	 * Returns whether the image provided is of type svg
	 *
	 * @param string $url utl to check.
	 */
	function ds_is_svg( $url = '' ): bool {
		return pathinfo( $url, PATHINFO_EXTENSION ) === 'svg';
	}
}


if ( ! function_exists( 'ds_get_embedded_image' ) ) {
	/**
	 * Gets icon embedded svg icon or img with url
	 *
	 * @param int    $image_id attachment id.
	 * @param string $image_url image url.
	 * @param bool   $return_url If true it will return the image url instead of <img> tag with src.
	 * @param bool   $embed_img If true it will return the svg image as inlined instead of <img> tag with src.
	 *
	 * @return string
	 */
	function ds_get_embedded_image( $image_id, $image_url = '', bool $return_url = false, bool $embed_img = true ): string {
		$image = '';
		if ( $embed_img && ds_is_svg( $image_url ) ) {
			$auth    = base64_encode( 'digital:silk' ); //phpcs:ignore
			$context = stream_context_create(
				array(
					'http' => array(
						'header' => "Authorization: Basic $auth",
					),
				)
			);
			if ( ! empty( $image_id ) && file_exists( get_attached_file( $image_id ) ) ) {
				//phpcs:ignore
				$image = file_get_contents( get_attached_file( $image_id ), false, $context );
			}
		} elseif ( ! empty( $image_url ) ) {
			//phpcs:ignore
			$image_alt = trim( strip_tags( get_post_meta( $image_id, '_wp_attachment_image_alt', true ) ) );
			$image     = $return_url ? $image_url : "<img loading='lazy' src='{$image_url}' alt='{$image_alt}'>";
		}

		return $image;
	}
}


if ( ! function_exists( 'ds_get_styleguide_colors' ) ) {
	/**
	 * Fetch styleguide colors from 'Global Settings' page
	 */
	function ds_get_styleguide_colors(): array {

		if ( ! class_exists( 'acf' ) ) {
			return array();
		}

		$acf_names = array(
			'primary-color1',
			'primary-color2',
			'primary-color3',
			'secondary-color1',
			'secondary-color2',
			'secondary-color3',
		);

		$colors = array( '#000000', '#ffffff' );

		foreach ( $acf_names as $name ) {
			$color = get_field( "theme_colors_{$name}", 'option' );
			if ( ! empty( $color ) && ! in_array( $color, $colors ) ) {
				$colors[] = $color;
			}
		}

		return $colors;
	}
}


if ( ! function_exists( 'ds_get_src_from_iframe' ) ) {
	/**
	 * Get the src attr from iframe.
	 *
	 * @param html $iframe contains iframe element.
	 */
	function ds_get_src_from_iframe( $iframe = '' ): string {
		preg_match( '/src="(.+?)"/', $iframe, $matches );

		return ! empty( $matches ) ? $matches[1] : '';
	}
}


if ( ! function_exists( 'ds_get_embed_url' ) ) {
	/**
	 * Fetch url for embedding.
	 *
	 * @param string $url contains url.
	 *
	 * @return string
	 */
	function ds_get_embed_url( $url = '' ): string {
		$iframe = wp_oembed_get( $url );

		return ds_get_src_from_iframe( ! empty( $iframe ) ? $iframe : '' );
	}
}



if ( ! function_exists( 'ds_line_to_break' ) ) {
	/**
	 * Helper function to convert pipe \ to break
	 * Example Line 1\line 2
	 *
	 * @param string $title contains title.
	 *
	 * @return string
	 */
	function ds_line_to_break( $title = '' ) {
		return ! empty( $title ) ? str_replace( '\\', '<br>', $title ) : '';
	}
}


if ( ! function_exists( 'ds_line_to_span' ) ) {
	/**
	 * Helper function to wrap string encapsulated into pipes to span
	 * Example: hello I'm a |span|
	 *
	 * @param string $title contains title.
	 *
	 * @return string
	 */
	function ds_line_to_span( $title = '' ) {
		return ! empty( $title ) ? preg_replace( '/\|(.+?)\|/', '<span>$1</span>', $title ) : '';
	}
}


if ( ! function_exists( 'ds_line_to_span_and_break' ) ) {
	/**
	 * Helper function to wrap string encapsulated into pipes to span and convert pipe \ to break
	 * Example: hello I'm a Line 1\|span|
	 *
	 * @param string $title contains title.
	 *
	 * @return string
	 */
	function ds_line_to_span_and_break( $title = '' ) {
		return ds_line_to_break( ds_line_to_span( $title ) );
	}
}


if ( ! function_exists( 'ds_generate_image' ) ) {
	/**
	 * Helper function to generate image based on attachment ID
	 *
	 * @param int    $image_id attachment id.
	 * @param string $size desired image size (register new if needed), 'full by default'.
	 * @param string $class add class or multiple classes to <img>, class1 class2 class3.
	 * @param string $fallback_size placeholder fallback if $image_id is null, empty, false. example '300x300'.
	 * @param bool   $lazy should the image be lazy loaded.
	 * @param bool   $html_output output <img> (true) or just the image URL (false), use false for background images.
	 *
	 * @return string
	 */
	function ds_generate_image( $image_id, $size = 'full', $class = '', $fallback_size = '', $lazy = true, $html_output = true ) {
		$image = new DS_GenerateImage();

		return $image->get_image( $image_id, $size, $class, $fallback_size, $lazy, $html_output );
	}
}


if ( ! function_exists( 'ds_generate_image_url' ) ) {
	/**
	 * Helper function to generate image url based on attachment ID
	 *
	 * @param int    $image_id attachment id.
	 * @param string $size desired image size (register new if needed), 'full by default'.
	 *
	 * @return string
	 */
	function ds_generate_image_url( $image_id, $size = 'full' ) {
		$image = new DS_GenerateImage();

		return $image->get_image_url( $image_id, $size );
	}
}
