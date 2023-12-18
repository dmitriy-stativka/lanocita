<?php
//phpcs:ignoreFile
// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


// check if class already exists
if ( ! class_exists( 'DS_acf_field_Demo_Form_Settings' ) ) :
	#[AllowDynamicProperties]
	class DS_acf_field_Demo_Form_Settings extends acf_field {

		/*
		*  __construct
		*
		*  This function will setup the field type data
		*
		*  @type	function
		*  @date	5/03/2014
		*  @since	5.0.0
		*
		*  @param	n/a
		*  @return	n/a
		*/

		function __construct( $settings = [] ) {

			/*
			*  name (string) Single word, no spaces. Underscores allowed
			*/

			$this->name = 'demo_form_settings';

			/*
			*  label (string) Multiple words, can include spaces, visible when selecting a field type
			*/

			$this->label = __( 'Demo Form Settings', 'dstheme' );

			/*
			*  category (string) basic | content | choice | relational | jquery | layout | CUSTOM GROUP NAME
			*/

			$this->category = 'Demo';

			/*
			*  defaults (array) Array of default settings which are merged into the field object. These are used later in settings
			*/

			$this->defaults = array(
				'label_text'        => 'Label',
				'input_text'        => 'Input with Text',
				'input_placeholder' => 'Placeholder',
				'success_text'      => 'Thank you for your message. It has been sent.',
				'error_text'        => 'The field is required.',

			);

			$this->settings = $settings;

			// do not delete!
			parent::__construct();
		}


		/*
		*  render_field_settings()
		*
		*  Create extra settings for your field. These are visible when editing a field
		*
		*  @type	action
		*  @since	3.6
		*  @date	23/01/13
		*
		*  @param	$field (array) the $field being edited
		*  @return	n/a
		*/

		function render_field_settings( $field ) {

			/*
			*  acf_render_field_setting
			*
			*  This function will create a setting for your field. Simply pass the $field parameter and an array of field settings.
			*  The array of settings does not require a `value` or `prefix`; These settings are found from the $field array.
			*
			*  More than one setting can be added by copy/paste the above code.
			*  Please note that you must also have a matching $defaults value for the field name (font_size)
			*/
			acf_render_field_setting(
                $field,
                array(
					'label'        => __( 'Label Text', 'dstheme' ),
					'instructions' => __( 'Customise the label', 'dstheme' ),
					'type'         => 'text',
					'name'         => 'label_text',
                )
            );

			acf_render_field_setting(
                $field,
                array(
					'label'        => __( 'Input Text', 'dstheme' ),
					'instructions' => __( 'Customise the input text', 'dstheme' ),
					'type'         => 'text',
					'name'         => 'input_text',
                )
            );

			acf_render_field_setting(
                $field,
                array(
					'label'        => __( 'Input Placeholder', 'dstheme' ),
					'instructions' => __( 'Customise the input placeholder', 'dstheme' ),
					'type'         => 'text',
					'name'         => 'input_placeholder',
                )
            );

			acf_render_field_setting(
                $field,
                array(
					'label'        => __( 'Success Message', 'dstheme' ),
					'instructions' => __( 'Customise the success message', 'dstheme' ),
					'type'         => 'text',
					'name'         => 'success_text',
                )
            );

			acf_render_field_setting(
                $field,
                array(
					'label'        => __( 'Error Message', 'dstheme' ),
					'instructions' => __( 'Customise the error message', 'dstheme' ),
					'type'         => 'text',
					'name'         => 'error_text',
                )
            );
		}


		/*
		*  render_field()
		*
		*  Create the HTML interface for your field
		*
		*  @param	$field (array) the $field being rendered
		*
		*  @type	action
		*  @since	3.6
		*  @date	23/01/13
		*
		*  @param	$field (array) the $field being edited
		*  @return	n/a
		*/

		function render_field( $field ) {
			?>
            <div class="c-form">
                <div class="c-form__cf7">
                    <div role="form" class="wpcf7">
                        <form><?php // wp removes first form ?></form>

                        <form class="wpcf7-form sent">

                            <div class="c-form__row">
                                <label class="c-form__item"><?php echo esc_html( $field['label_text'] ); ?>
                                    <span class="wpcf7-form-control-wrap">
                                        <input type="email" class="wpcf7-form-control wpcf7-text wpcf7-email" name="<?php echo esc_attr( $field['name'] ) . '_error_input'; ?>" placeholder="<?php echo esc_attr( $field['input_placeholder'] ); ?>" value=""/>
                                        <span class="wpcf7-not-valid-tip" aria-hidden="true"><?php echo esc_html( $field['error_text'] ); ?></span>
                                    </span>
                                </label>
                            </div>

                            <div class="form-row">
                                <label class="c-form__item"><?php echo esc_html( $field['label_text'] ); ?>
                                    <span class="wpcf7-form-control-wrap">
                                        <input type="text" class="wpcf7-form-control wpcf7-text wpcf7-email" name="<?php echo esc_attr( $field['name'] ) . '_success_input'; ?>" placeholder="<?php echo esc_attr( $field['input_placeholder'] ); ?>" value="<?php echo esc_attr( $field['input_text'] ); ?>"/>
                                    </span>
                                </label>
                            </div>

                            <div class="wpcf7-response-output" aria-hidden="true"><?php echo esc_html( $field['success_text'] ); ?></div>

                        </form>
                    </div>
                </div>
            </div>
			<?php
		}

		/*
        *  input_admin_enqueue_scripts()
        *
        *  This action is called in the admin_enqueue_scripts action on the edit screen where your field is created.
        *  Use this action to add CSS + JavaScript to assist your render_field() action.
        *
        *  @type	action (admin_enqueue_scripts)
        *  @since	3.6
        *  @date	23/01/13
        *
        *  @param	n/a
        *  @return	n/a
        */

		function input_admin_enqueue_scripts() {
			// register & include JS
			wp_register_script( 'ds-form-settings-js', get_template_directory_uri() . '/admin/js/demo-form-settings.js', array( 'acf-input' ), '1.0', true );
			wp_enqueue_script( 'ds-form-settings-js' );
		}
}


// initialize
	new DS_acf_field_Demo_Form_Settings();


// class_exists check
endif;
