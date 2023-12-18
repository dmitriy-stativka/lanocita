<?php
//phpcs:ignoreFile

// exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// check if class already exists
if ( ! class_exists( 'DS_acf_field_Demo_Title_Settings' ) ) :
	#[AllowDynamicProperties]
	class DS_acf_field_Demo_Title_Settings extends acf_field {

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
			$this->name = 'demo_title_settings';

			/*
			*  label (string) Multiple words, can include spaces, visible when selecting a field type
			*/
			$this->label = __( 'Demo Title Settings', 'dstheme' );

			/*
			*  category (string) basic | content | choice | relational | jquery | layout | CUSTOM GROUP NAME
			*/
			$this->category = 'Demo';

			$this->settings = $settings;

			// do not delete!
			parent::__construct();
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
            <div class="c-heading-preview">
                <div class="titles-preview row">
                    <div class="titles-preview__item col" style="background-color: var(--body-color)">
                        <div class="c-heading -h1 text-center">
                            <h1 class="c-heading__title"><?php _e( '<span>H1</span> Title Content', 'dstheme-admin' ); ?></h1>
                        </div>
                        <hr />
                        <div class="c-heading -h2 text-center">
                            <!--<div class="c-heading__preamble" style="position: absolute;opacity: 0.5;">
                                <span><?php /*_e( 'Backtitle Text', 'dstheme-admin' ); */ ?></span>
                            </div>-->
                            <div class="c-heading__pre">
                                <span><?php _e( 'Pretitle Text Content', 'dstheme-admin' ); ?></span>
                            </div>
                            <h2 class="c-heading__title"><?php _e( 'H2 Main Title Text Content', 'dstheme-admin' ); ?></h2>

                            <div class="c-heading__sub">
                                <span><?php _e( 'Subtitle Text Content', 'dstheme-admin' ); ?></span>
                            </div>
                        </div>
                        <hr />
                        <div class="c-heading -h3 text-center">
                            <h3 class="c-heading__title"><?php _e( 'H3 Title Content', 'dstheme-admin' ); ?></h3>
                        </div>
                        <hr />
                        <div class="c-heading -h4 text-center">
                            <h4 class="c-heading__title"><?php _e( 'H4 Title Content', 'dstheme-admin' ); ?></h4>
                        </div>
                        <hr />
                        <div class="c-heading__description is-wysiwyg">
                            <p style="font-size: var(--base-text-size)"><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'dstheme-admin' ); ?></p>
                            <p style="font-size: var(--base-text-size)"><?php _e( 'Lorem ipsum dolor sit amet.', 'dstheme-admin' ); ?></p>
                            <ul>
                                <li><?php _e( 'List item 1', 'dstheme-admin' ); ?></li>
                                <li><?php _e( 'List item 2', 'dstheme-admin' ); ?></li>
                                <li><?php _e( 'List item 3', 'dstheme-admin' ); ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="titles-preview__item col -colors-inverted" style="background-color: #666">
                        <div class="c-heading -h1 text-center">
                            <h1 class="c-heading__title"><?php _e( '<span>H1</span> Title Content', 'dstheme-admin' ); ?></h1>
                        </div>
                        <hr />
                        <div class="c-heading -h2 text-center">
                            <!--<div class="c-heading__preamble" style="position: absolute;opacity: 0.5;">
                                <span><?php /*_e( 'Backtitle Text', 'dstheme-admin' ); */ ?></span>
                            </div>-->
                            <div class="c-heading__pre">
                                <span><?php _e( 'Pretitle Text Content', 'dstheme-admin' ); ?></span>
                            </div>
                            <h2 class="c-heading__title"><?php _e( 'H2 Main Title Text Content', 'dstheme-admin' ); ?></h2>

                            <div class="c-heading__sub">
                                <span><?php _e( 'Subtitle Text Content', 'dstheme-admin' ); ?></span>
                            </div>
                        </div>
                        <hr />
                        <div class="c-heading -h3 text-center">
                            <h3 class="c-heading__title"><?php _e( 'H3 Title Content', 'dstheme-admin' ); ?></h3>
                        </div>
                        <hr />
                        <div class="c-heading -h4 text-center">
                            <h4 class="c-heading__title"><?php _e( 'H4 Title Content', 'dstheme-admin' ); ?></h4>
                        </div>
                        <hr />
                        <div class="c-heading__description is-wysiwyg">
                            <p style="font-size: var(--base-text-size)"><?php _e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'dstheme-admin' ); ?></p>
                            <p style="font-size: var(--base-text-size)"><?php _e( 'Lorem ipsum dolor sit amet.', 'dstheme-admin' ); ?></p>
                            <ul>
                                <li><?php _e( 'List item 1', 'dstheme-admin' ); ?></li>
                                <li><?php _e( 'List item 2', 'dstheme-admin' ); ?></li>
                                <li><?php _e( 'List item 3', 'dstheme-admin' ); ?></li>
                            </ul>
                        </div>
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
			wp_register_script( 'ds-title-settings-js', get_template_directory_uri() . '/admin/js/demo-title-settings.js', array( 'acf-input' ), '1.0', true );
			wp_enqueue_script( 'ds-title-settings-js' );
		}
}

// initialize
	new DS_acf_field_Demo_Title_Settings();

// class_exists check
endif;
