<?php
/**
 * Custom DS Field
 *
 * @package DS_Theme
 */
class DS_Field_ModuleEffects extends DS_Field {

	/**
	 * Get
	 *
	 * @param bool $is_super_admin super admin check.
	 */
	public static function get( $is_super_admin = false ): string {
		return self::add_field(
			'group',
			'module_effects',
			array(
				'label'        => 'Effects',
				'sub_fields'   => array(
					self::add_field(
						'true_false',
						'enabled',
						array(
							'label'         => 'Enabled',
							'instructions'  => '<a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver" target="_blank">Read More</a>',
							'default_value' => 0,
							'ui'            => 1,
						)
					),
					self::add_field(
						'true_false',
						'viewport-repeat',
						array(
							'label'             => 'Repeatable',
							'ui'                => 1,
							'instructions'      => 'Check if animation is repeatable.',
							'conditional_logic' => array(
								array(
									array(
										'fieldPath' => 'enabled',
										'operator'  => '==',
										'value'     => '1',
									),
								),
							),
						)
					),
					self::add_field(
						'select',
						'viewport-effect',
						array(
							'label'             => 'Effect',
							'instructions'      => 'Choose predefined effect or<br>you can create custom CSS effect<br>by adding custom class.',
							'choices'           => array(
								'none'         => '--',
								'custom'       => 'Custom',
								'fade'         => 'Fade',
								'fade-up'      => 'Fade Up',
								'fade-down'    => 'Fade Down',
								'fade-right'   => 'Fade Right',
								'fade-left'    => 'Fade Left',
								// 'fade-up-right' => 'Fade Up Right',
								// 'fade-up-left' => 'Fade Up Left',
								// 'fade-down-right' => 'Fade Up Right',
								// 'fade-down-left' => 'Fade Up Left',
									'zoom-in'  => 'Zoom In',
								// 'zoom-in-up' => 'Zoom In Up',
								// 'zoom-in-down' => 'Zoom In Down',
								// 'zoom-in-left' => 'Zoom In Left',
								// 'zoom-in-right' => 'Zoom In Right',
								// 'zoom-out' => 'Zoom Out',
								// 'zoom-out-up' => 'Zoom Out Up',
								// 'zoom-out-down' => 'Zoom Out Down',
								// 'zoom-out-right' => 'Zoom Out Right',
								// 'zoom-out-left' => 'Zoom Out Left',
									'slide-up' => 'Slide Up',
								'slide-down'   => 'Slide Down',
						// 'slide-right' => 'Slide Right',
						// 'slide-left' => 'Slide Left',
						// 'flip-left' => 'Flip Right',
						// 'flip-left' => 'Flip Left',
						// 'flip-right' => 'Flip Right',
						// 'flip-left' => 'Flip Left',
							),
							'default_value'     => 'none',
							'conditional_logic' => array(
								array(
									array(
										'fieldPath' => 'enabled',
										'operator'  => '==',
										'value'     => '1',
									),
								),
							),
						)
					),
					self::add_field(
						'text',
						'viewport-effect-custom',
						array(
							'label'             => 'Custom Effect',
							'conditional_logic' => array(
								array(
									array(
										'fieldPath' => 'viewport-effect',
										'operator'  => '==',
										'value'     => 'custom',
									),
								),
							),
						)
					),
					self::add_field(
						'range',
						'viewport-threshold',
						array(
							'label'             => 'Threshold',
							'max'               => 1,
							'min'               => 0,
							'default_value'     => 0,
							'instructions'      => '<a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds" target="_blank">Read More</a>',
							'step'              => 0.1,
							'conditional_logic' => array(
								array(
									array(
										'fieldPath' => 'enabled',
										'operator'  => '==',
										'value'     => '1',
									),
								),
							),
						)
					),
					self::add_field(
						'text',
						'viewport-margin',
						array(
							'label'             => 'Root Margin',
							'default_value'     => '',
							'placeholder'       => '0px 0px 0px 0px',
							'instructions'      => '<a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin" target="_blank">Read More</a>',
							'conditional_logic' => array(
								array(
									array(
										'fieldPath' => 'enabled',
										'operator'  => '==',
										'value'     => '1',
									),
								),
							),
						)
					),
				),
				'layout'       => 'block',
				'instructions' => '',
			),
			$is_super_admin
		);
	}
}
