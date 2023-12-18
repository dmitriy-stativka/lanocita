<?php
/**
 * Socials Template
 *
 * @var array $args
 *
 * @package DS_Theme
 */

if ( $args['socials'] ) : ?>
	<ul class="social-list">
		<?php foreach ( $args['socials'] as $social ) : ?>
			<li class="social-list__item">
				<?php if ( ! empty( $social['link'] ) && ! empty( $social['social_network'] ) ) : ?>
					<a class="social-list__link" href="<?php echo esc_url( $social['link'] ); ?>" target="_blank">
						<?php
						echo wp_kses_post(
							get_svg(
								array(
									'icon'  => 'social-' . $social['social_network'] . '',
									'class' => 'social-list__icon social-icon',
								)
							)
						);
						?>
					</a>
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ul>
<?php endif; ?>
