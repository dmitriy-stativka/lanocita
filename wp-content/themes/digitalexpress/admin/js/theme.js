function show_icons_library(field = null) {
    let separator = field == null ? 'div.button-icon-library .acf-input label' : field.$control().find('label');
    jQuery( separator ).each( function(){
        var $label = jQuery(this);
        var text = $label.text();
        var path = theme_js_params.theme_path + '/assets/_dist/images/svg-icons/' + text + '.svg';
        var $insert = jQuery('<img src="' + path + '" />');
        $insert.insertAfter($label.find('input'));
    });
}

var Admin = (function ($) {

    $(function () {
        Admin.init();
    });
    return {
        init: function () {
            var _self = this;
            _self.initTemplates();
        },
        initTemplates: function () {
            $('div[data-name=header_template] .acf-input label,div[data-name=footer_template] .acf-input label,div[data-name=buttons_type] .acf-input label').each( function(){
                var $label = $(this);
                var text = $label.text();
                var path = theme_js_params.theme_parent_path + '/admin/template/' + text + '.jpg';

                var $insert = $('<img src="' + path + '" />');
                $insert.insertAfter( $label.find('input') );
            });

            show_icons_library();
        },
    };

})(jQuery);



// acf drag-n-drop flexible layouts between each other inside clone fields
(function($) {
    if (typeof acf !== 'undefined') {

        acf.add_action('wysiwyg_tinymce_init', function(field) {
            // set height of wysiwyg on frontend
            $(field.iframeElement).css('height', 200);
        } );

        acf.addAction('append_field/type=radio', function (field) {
            if( $(field.$el[0]).hasClass('button-icon-library') ) {
                show_icons_library(field);
            }
        });

        acf.add_action('ready', function($el){
            $(".values").sortable({
                dropOnEmpty: true,
                connectWith: ".values",

                start: function(event, ui) {
                    acf.do_action('sortstart', ui.item, ui.placeholder);
                },
                stop: function(event, ui) {
                    acf.do_action('sortstop', ui.item, ui.placeholder);
                    $(this).find('.mce-tinymce').each(function() {
                        tinyMCE.execCommand('mceRemoveControl', true, $(this).attr('id'));
                        tinyMCE.execCommand('mceAddControl', true, $(this).attr('id'));
                    });
                }
            });
        });
        acf.add_action('sortstop', function ($el) {
            if ($($el).parent('.values').length) {
                $($el).closest('.acf-flexible-content').removeClass('-empty');
                var group_id = $($el).closest('.acf-flexible-content').find('input:first-of-type').attr('name');
                group_id = group_id.match(/\[([a-zA-Z0-9_-]+\])/g);

                var column_num = $el.index() + Math.floor(Math.random() * Math.floor(999));
                $($el).find('[name^="acf[field_"]').each(function(){
                    var field_name 		= 	$(this).attr('name');
                    field_name          =   field_name.match(/\[([a-zA-Z0-9_-]+\])/g);

                    if(field_name[0] !== group_id[0]){
                        field_name[0] = group_id[0];
                        field_name[1] = group_id[1];
                        field_name[2] = '[row-' + column_num + '-index]';
                    }

                    var new_name        =   'acf' + field_name.join('');
                    $(this).attr('name', new_name);
                });
            }
        });

        if (theme_js_params.styleguide_colors.length > 2) {
            acf.add_filter('color_picker_args', function( args, $field ){
                args.palettes = theme_js_params.styleguide_colors

                return args;
            });
        }
    }
})(jQuery);

(function($) {
    jQuery('body.toplevel_page_theme-settings .acf-field .acf-label').click(function (){
        let css_var = jQuery(this).find('.description');

        if(css_var.length > 0){
            navigator.clipboard.writeText(css_var.html());

            jQuery('.ds_clipboard_notice').remove();

            jQuery('#wpwrap').append('<div class="ds_clipboard_notice"><span>'+css_var.html()+'</span> copied to clipboard!</div>');

            setTimeout(function (){
                jQuery('.ds_clipboard_notice').fadeOut("normal", function() {
                    $(this).remove();
                });
            },1000)
        }
    });
})(jQuery);