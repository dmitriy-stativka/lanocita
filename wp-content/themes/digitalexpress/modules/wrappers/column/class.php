<?php
// phpcs:ignoreFile
class DS_Module_column extends DS_AbstractModule {

	public $name = 'column';

	public $title = 'Column container';

	protected $description = 'Simple wrapper, can be used as column inside wrapper module';

	protected $category = 'ds-wrappers';

	protected $icon = 'columns';

	protected $keywords = array( 'content', 'column', 'wrapper' );

	protected string $template = 'column';

	protected bool $supportInnerBlocks = true;
}
