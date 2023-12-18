<?php
/**
 * Init Express Theme Settings
 */
require_once 'class-dsmp-settings.php';

if ( class_exists( 'acf' ) ) {
	/**
	 * Theme.css file generator
	 */
	require_once 'class-css-acf-field-type.php';
	require_once 'class-css-generate-assets.php';

	/**
	 * Generate express header data
	 */
	require_once 'class-dsmp-settings-header.php';

	/**
	 * Generate express footer data
	 */
	require_once 'class-dsmp-settings-footer.php';

	/**
	 * Load effects settings global data
	 */
	require_once 'class-dsmp-settings-effects.php';

	/**
	 * Load icon settings global data
	 */
	require_once 'class-dsmp-settings-buttons.php';

	/**
	 * Loads font settings global data
	 */
	require_once 'class-dsmp-settings-fonts.php';

	/**
	 * Adds custom ACF fields
	 */
	require_once 'acf-custom-fields/custom-fields-settings.php';

    /**
     * Theme Settings Import Functionality
     */
    // require_once 'import/import-setup.php';
}
