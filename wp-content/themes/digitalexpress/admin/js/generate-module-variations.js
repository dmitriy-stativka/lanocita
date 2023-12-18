(function ($) {

    var processNextBlock = function (blocks, index) {
        var $body = $('body');
        var progress = ((index + 1) / blocks.length) * 100;
        if (blocks.length <= index) {
            $body.removeClass('has-admin-loader');
            $('.admin-loader').remove('.admin-loader');
            alert('All module variations have been created!')
            return;
        }

        $.ajax({
            url: ModuleVariationsRunner.ajax_url,
            data: {
                'action': 'ds_generate_module_variations',
                'block_name': blocks[index],
            },
            type: 'POST',
            cache: false,
            beforeSend: function (xhr) {
                if (!$body.hasClass('has-admin-loader')) {
                    $body.addClass('has-admin-loader');
                    $body.append('<div class="admin-loader" data-progress="0"></div>')
                } else {
                    $('.admin-loader').attr('data-progress', parseInt(progress.toString()));
                }
            },
            success: function (response) {
                if (response.success) {
                    processNextBlock(blocks, ++index);
                    return;
                }

                alert('An error happened when trying to create variation for ' + blocks[index] + '. Please check console for errors and restart the process!')
                console.log(response);
            },
            error: function (error) {
                console.log(error);
                alert('All module variations are not created. Please check console for errors and try again!')
            },
        });

    }

    jQuery(document).ready(function ($) {
        // Generate JSON Files.
        $('#ds_generate_modules_variations').on('click', function (e) {
            e.preventDefault();
            if (ModuleVariationsRunner.acf_block_types) {
                processNextBlock(ModuleVariationsRunner.acf_block_types, 0);
            }
        });
    });

})(jQuery);