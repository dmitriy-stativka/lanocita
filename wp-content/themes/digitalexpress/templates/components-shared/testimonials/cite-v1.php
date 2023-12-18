<?php
/**
 * @var array $args
 */

$args      = wp_parse_args(
	$args,
	array(
		'name'                => get_the_title(),
		'company_or_position' => get_field( 'company_position', get_the_ID() ),
		'quote'               => get_field( 'quote', get_the_ID() ),
		'class'               => '',
	)
);
$className = '';
if ( ! empty( $args['class'] ) ) {
	$className .= " {$args['class']}";
}
?>
<div class="c-cite__profile<?php echo esc_attr( $className ); ?>">
	<?php
    get_template_part(
        'templates/components/testimonials/photo',
        null,
        array(
			'class' => 'c-cite__photo',
        )
	);
    ?>

	<?php if ( ! empty( $args['quote'] ) ) : ?>
        <p class="c-testimonials__text"><?php echo esc_html( $args['quote'] ); ?></p>
	<?php endif; ?>

	<?php if ( ! empty( $args['name'] ) || ! empty( $args['company_or_position'] ) ) : ?>
        <div class="c-cite__author">
            <div class="c-cite__name">
			    <?php echo esc_html( $args['name'] ); ?>
            </div>
			<?php if ( ! empty( $args['company_or_position'] ) ) : ?>
                <span class="c-cite__company"><?php echo esc_html( $args['company_or_position'] ); ?></span>
			<?php endif; ?>
        </div>
	<?php endif; ?>
</div>
