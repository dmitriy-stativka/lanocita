;(function( $, window ) {
	'use strict';

    $.extend({
        replaceTag: function (element, tagName, withDataAndEvents, deepWithDataAndEvents) {
            var newTag = $("<" + tagName + ">")[0];
            // From [Stackoverflow: Copy all Attributes](http://stackoverflow.com/a/6753486/2096729)
            $.each(element.attributes, function() {
                newTag.setAttribute(this.name, this.value);
            });
            $(element).children().clone(withDataAndEvents, deepWithDataAndEvents).appendTo(newTag);
            return newTag;
        }
    });
    $.fn.extend({
        replaceTag: function (tagName, withDataAndEvents, deepWithDataAndEvents) {
            // Use map to reconstruct the selector with newly created elements
            return this.map(function() {
                return jQuery.replaceTag(this, tagName, withDataAndEvents, deepWithDataAndEvents);
            });
        }
    });

    $.xt_woovs_variation_form = function(form, options){
        // To avoid scope issues, use 'self' instead of 'this'
        // to reference this class from internal events and functions.

        var self = this;
        self.events = {};

        // Access to jQuery and DOM versions of element
        self.$form = $(form);
        self.form = form;
        self.is_ajax = !!self.$form.data('ajax');

        // If already loaded, stop;
        if(self.$form.hasClass('xt_woovs-support')) {
            return self.$form.data('xt-woovs');
        }

        setTimeout(function() {
            var currentEvents = self.$form.data('events');
            if(self.is_ajax || (currentEvents && typeof(currentEvents.found_variation) === 'undefined')) {

                self.$form.wc_variation_form();
            }
        }, 1000);

        // Initialization
        self.is_touch = XT.isTouchDevice();
        self.options = $.extend({}, $.xt_woovs_variation_form.defaultOptions, options);

        self.product_id = self.$form.data("product_id");
        self.$product = self.$form.closest('.product');

        self.$swatches_wrap = self.$form.find('.xt_woovs-swatches-wrap');
        self.$swatches = self.$swatches_wrap.find('.xt_woovs-swatches');

        self.is_single_product = !self.is_archive_product;
        self.is_archive_product = self.$form.hasClass('xt_woovs-archives-product');
        self.is_catalog_mode = self.is_archive_product && !!XT_WOOVS.catalog_mode;

        self.select_options_button = self.$product.find('.xt_woovs_select_options_button');
        self.add_to_cart_button = self.$product.find('.single_add_to_cart_button');

        self.on_demand = self.$form.closest('.xt_woovs-on-demand');
        self.on_demand_display_type = self.on_demand.length ? self.on_demand.data('display') : null;
        self.on_demand_visibility_type = self.on_demand.length ? self.on_demand.data('visibility') : null;
        self.on_demand_trigger = self.on_demand.length ? self.select_options_button : null;
        self.on_demand_backlayer = self.$product.find('.xt_woovs-display-backlayer');
        self.on_demand_preview = self.$product.find('.xt_woovs-on-demand-preview');
        self.trigger_on_hover = (self.is_catalog_mode && !!XT_WOOVS.catalog_mode_hover);
        self.on_demand_close_btn = self.on_demand.find('> span > span');
        self.on_demand_active = false;

        self.original_price = self.$product.find('.price').first().html();
        self.price_selector = self.is_archive_product ? '.price' : '.summary .price';

        self.product_variations = self.$form.data("product_variations");
        self.is_ajax_variation = !self.product_variations;

        self.enable_deselect = !self.trigger_on_hover && self.$swatches_wrap.hasClass("xt_woovs-enable-deselect");
        self.auto_select = self.$swatches_wrap.hasClass("xt_woovs-auto-select");
        self.auto_select_on_select = self.$swatches_wrap.hasClass("xt_woovs-auto-select-on-select");

        self.disabled_clickable = self.$swatches_wrap.hasClass("xt_woovs-disabled-clickable");

        self.tooltip_enabled = false;

        // Add a reverse reference to the DOM object

        self.init = function(){

            self.fixSingleProductPriceDisplay();
            self.resetEvents();
            self.initEvents();

            setTimeout(function() {

                if(self.auto_select) {
                    self.autoSelectFirstAvailable();
                }

                self.$form.trigger("reload_product_variations");
                self.$form.find(':input').trigger('change');
                self.$form.trigger("xt_woovs_loaded", [self]);
                $(document).trigger("xt_woovs_loaded", [self.$form]);
                self.$form.data('xt-woovs', self);
                self.$form.addClass('xt_woovs-support');

            }, 1);
        };

        self.fixSingleProductPriceDisplay = function () {

            // on single product page, if product price found, hide the variation price to avoid showing both.

            if(self.is_single_product) {

                var $price = self.$product.find('.summary .price').first();
                var is_variation_price = $price.closest('.woocommerce-variation-price').length > 0;

                if ($price.length && !is_variation_price) {
                    self.$form.addClass('xt_woovs-hide-variation-price');
                }
            }
        };

        self.setCurrentValueLabel = function($el, value) {

            var attributeRow = $el.closest('tr');
            var currentValueEl = attributeRow.find('td.label .xt_woovs-attribute-value');
            var valueEl = $('<span class="xt_woovs-attribute-value">'+value+'</span>');

            if(attributeRow.length) {

                if(currentValueEl.length) {
                    currentValueEl.remove();
                }
                attributeRow.find('td.label').append(valueEl);
            }
        };

        self.autoSelectAttributes = function(force) {

            force = typeof (force) !== 'undefined';

            if(!force && !self.auto_select_on_select) {
                return;
            }

            // If has other attributes without any options selected, select first option of each.
            // This will force the image to switch without having to manually select options.

            setTimeout(function() {

                self.$swatches.each(function () {

                    var has_selected = $(this).find('.xt_woovs-selected').length > 0;

                    if (!has_selected) {
                        var swatch = $(this).find('.swatch:not(.xt_woovs-disabled):not(.xt_woovs-selected)').first();

                        if (swatch.length) {

                            self.toggleSwatch(swatch, false, false);
                        }
                    }
                });

            }, 10);
        };

        self.autoSelectFirstAvailable = function() {

            var first_attribute = self.$swatches.first();
            var has_selected = first_attribute.find('.xt_woovs-selected').length > 0;

            if(has_selected) {
                return;
            }

            var first_attribute_option = first_attribute.find('.swatch').first();

            if(first_attribute_option.length) {
                first_attribute_option.trigger('click');

                self.autoSelectAttributes(true);
            }

        };

        self.setClearButtonVisibility = function() {

            var $reset = self.$form.find( '.reset_variations' );

            setTimeout(function() {

                if ( $reset.css( 'visibility' ) !== 'hidden' ) {

                    $reset.addClass( 'xt_woovs-reset-visible' );

                } else {

                    $reset.removeClass( 'xt_woovs-reset-visible' );
                }

            },2);
        };

        self.initEvents = function(reset) {

            var func = typeof(reset) !== 'undefined' ? 'off' : 'on';

            if(self.on_demand.length) {

                if (self.on_demand_display_type === 'inline' && self.on_demand_visibility_type === 'hover' && !self.is_touch) {

                    self.on_demand_trigger[func]('click', self.events.showOnHover);
                    self.on_demand_trigger[func]('mouseenter', self.events.showOnHover);

                } else {

                    self.on_demand_trigger[func]('click', self.events.showOnClick);
                    self.on_demand_backlayer[func]('click', self.events.showOnClick);
                }

                if(self.on_demand_display_type === 'inline' && !self.is_touch) {
                    self.on_demand[func]('mouseleave', self.events.showOnHover);
                }

                self.on_demand_close_btn[func]('click', function(){
                    self.closeOnDemand();
                });
            }

            self.$form[func]('woocommerce_variation_has_changed', self.events.onVariationChanged);
            self.$form[func]('found_variation', self.events.onVariationFound);
            self.$form[func]('check_variations', self.events.onCheckVariations);
            self.$form[func]('reset_data', self.events.onReset);

            if(self.trigger_on_hover) {
                self.$form[func]('mouseover', '.swatch', self.events.onSwatchHover);
            }

            self.$form[func]('click', '.swatch', self.events.onSwatchClick);
            self.$form[func]('change', '.swatch.swatch-radio', self.events.onSwatchRadioChange);
            self.$form[func]('click', '.reset_variations', self.events.onReset);

            self.$form[func]('mouseenter', '.xt_woovs-has-tooltip', self.events.onTooltipEnter);
            self.$form[func]('mouseleave', '.xt_woovs-has-tooltip', self.events.onTooltipLeave);
            self.$form[func]('mousemove', '.xt_woovs-has-tooltip', self.events.onTooltipMove);

        };

        self.resetEvents = function() {

            self.initEvents(true);
        };

        self.resetLoopImage = function() {

            var $img = self.findLoopImage();

            if ($img) {

                $img.attr('src', $img.attr('src-bkp'));

                if($img.attr('srcset-bkp')) {

                    $img.attr('srcset', $img.attr('srcset-bkp'));
                    $img.attr('sizes', $img.attr('sizes-bkp'));
                }
            }
        };

        self.findLoopImage = function () {

            var $image = self.$product.find('img.attachment-shop_catalog');
            if($image.length === 0) {

                $image = self.$product.find('.woocommerce-LoopProduct-link img');

                if($image.length === 0) {
                    $image = self.$product.find('img.attachment-woocommerce_thumbnail');

                    if($image.length === 0) {
                        $image = self.$product.find('img.woocommerce-LoopProduct-link');

                        if($image.length === 0) {
                            $image = self.$product.find('img.wp-post-image');
                        }
                    }
                }
            }

            return $image.length > 0 ? $image : null;
        };

        self.showOnDemand = function(){

            $.xt_woovs_variation_form.forms.forEach(function(form) {

                if(form.on_demand.length) {
                    form.closeOnDemand();
                }
            });

            if(self.on_demand_backlayer.length) {
                self.on_demand_backlayer.addClass('xt_woovs-active');
            }

            self.on_demand_trigger.addClass('xt_woovs-active');
            self.on_demand.addClass('xt_woovs-active');
            self.on_demand_active = true;

            if(['modal', 'drawer'].includes(self.on_demand_display_type)) {
                $('html,body').css('overflow', 'hidden');
            }
        };

        self.closeOnDemand = function(){

            if(self.on_demand_backlayer.length) {
                self.on_demand_backlayer.removeClass('xt_woovs-active');
            }

            self.on_demand_trigger.removeClass('xt_woovs-active');
            self.on_demand.removeClass('xt_woovs-active');

            self.on_demand_active = false;

            if(['modal', 'drawer'].includes(self.on_demand_display_type)) {
                $('html,body').css('overflow', '');
            }
        };

        // Form Events

        self.events.showOnHover = function(e) {

            if(e.type === 'click') {
                e.preventDefault();
                return;
            }

            self.on_demand.parent().css('position', 'relative');

            if(e.type === 'mouseenter') {

                if(!self.on_demand_active) {
                    self.showOnDemand();
                }

            }else{

                var can_autoclose = navigator.userAgent.search(/Firefox/) === -1;

                if(can_autoclose && self.on_demand_active && e.relatedTarget && !$(e.relatedTarget).is(self.on_demand) && !$(e.relatedTarget).is(self.on_demand_backlayer)) {
                    self.closeOnDemand();
                }
            }
        };

        self.events.showOnClick = function(e) {

            e.preventDefault();

            if(!self.on_demand_active) {
                self.showOnDemand();
            }else{
                self.closeOnDemand();
            }
        };

        self.toggleSwatch = function(el, clearOnReselect, autoSelect) {

            clearOnReselect = typeof(clearOnReselect) !== 'undefined' ? clearOnReselect : false;
            autoSelect = typeof(autoSelect) !== 'undefined' ? autoSelect : true;

            var $el = $( el ),
                $select = $el.parent().prev().find( 'select' ),
                value = $el.data( 'value' ),
                $option = $select.find('option[value="'+value+'"]');

            if($option.prop('disabled') && self.disabled_clickable) {

                $option.prop('disabled', false).prop('selected', true);
                $select.trigger('change');
                $option.prop('disabled', true).removeProp('selected');

                return;
            }

            if($el.hasClass('xt_woovs-selected')) {
                if (clearOnReselect) {
                    value = "";
                }else{
                    return;
                }
            }

            $select.val(value).trigger("change");
            $select.trigger('click');
            $select.trigger("focusin");

            if(self.is_touch){
                $select.trigger("touchstart");
            }

            $el.trigger("focus");
            $el.trigger("xt_woovs_selected_item", [value, $select, self.$swatches]);

            if(value !== "") {

                if(autoSelect) {
                    self.autoSelectAttributes();
                }

            }else if(clearOnReselect) {

                $el.removeClass( 'xt_woovs-selected' );

                if(self.on_demand_preview.length) {
                    self.on_demand_preview.empty();
                }

                if(self.is_archive_product) {
                    self.resetLoopImage();
                }
            }

        };

        self.events.onSwatchHover = function(e) {

            e.preventDefault();
            e.stopPropagation();

            self.toggleSwatch(this);
        };

        self.events.onSwatchClick = function(e) {

            e.preventDefault();
            e.stopPropagation();

            self.toggleSwatch(this, self.enable_deselect);
        };

        self.events.onSwatchRadioChange = function(e) {

            e.preventDefault();
            e.stopPropagation();

            var $el = $( this ),
                $select = $el.parent().prev().find( 'select' ),
                value = $el.val();

            $select.val(e).trigger("change");
            $select.trigger('click');
            $select.trigger("focusin");

            $el.parent(".swatch-radio").removeClass("xt_woovs-selected xt_woovs-disabled").addClass("xt_woovs-selected");
            $el.parent(".swatch-radio").trigger("xt_woovs_selected_item", [value, $select, self.$swatches]);

        };

        self.events.onVariationChanged = function() {

            self.$swatches.each(function () {

                var $this = $(this);

                var selected = '',
                    $select = $this.prev().find('select'),
                    options = $select.find('option'),
                    current = $select.find('option:selected'),
                    eq = $select.find('option').eq(1),
                    swatch = $this.find('.swatch'),
                    selects = [];

                options.each(function () {
                    if ($(this).val() !== '' && !$(this).prop('disabled')) {

                        selects.push($(this).val());
                        selected = current ? current.val() : eq.val();
                    }
                });

                swatch.each(function () {
                    var attribute_value = $(this).attr('data-value');

                    // if swatch value not found in native select, option is not available. Skip if catalog mode.
                    if (!self.is_catalog_mode && _.indexOf(selects, attribute_value) === -1) {

                        // remove selected class, add disabled class
                        $(this).removeClass('xt_woovs-selected').addClass('xt_woovs-disabled');

                    }else{

                        //  remove disabled class
                        $(this).removeClass('xt_woovs-disabled');

                        // If value is not empty
                        if(current.val() !== '') {

                            // If current value is the selected one
                            if (attribute_value === selected) {

                                // set label value
                                self.setCurrentValueLabel($(this), attribute_value);

                                // add selected class
                                $(this).addClass('xt_woovs-selected');

                            // If not selected value
                            }else{

                                // remove both disabled and selected class
                                $(this).removeClass('xt_woovs-selected');
                            }

                        }
                    }
                });

                // Items Updated
                $this.trigger('xt_woovs_items_updated');

            });
        };

        self.events.onVariationFound = function(e, variation) {

            if(self.$product.length) {

                var timeout = self.on_demand_active ? 20 : 100;

                setTimeout(function() {

                    var $price = self.$product.find(self.price_selector).first();
                    var is_variation_price = $price.closest('.woocommerce-variation-price').length > 0;

                    if((variation.price_html !== '') && $price.length && !is_variation_price) {

                        var price_tag = $price.prop("tagName");

                        $price.replaceWith($(variation.price_html).filter('.price'));
                        $price = self.$product.find(self.price_selector).first();
                        $price.replaceWith($price.clone().replaceTag(price_tag, true, true));

                    }

                    if(self.is_archive_product && variation.image.src !== '') {
                        var $img = self.findLoopImage();
                        if ($img) {

                            if(!$img.attr('src-bkp')) {
                                $img.attr('src-bkp', $img.attr('src'));
                            }

                            var attributes = {
                                alt: variation.image.alt,
                                src: variation.image.thumb_src,
                                width: variation.image.thumb_src_w,
                                height: variation.image.thumb_src_h
                            };

                            if($img.attr('srcset')) {

                                if(!$img.attr('srcset-bkp')) {
                                    $img.attr('srcset-bkp', $img.attr('srcset'));
                                    $img.attr('sizes-bkp', $img.attr('sizes'));
                                }

                                attributes.srcset = variation.image.srcset;
                                attributes.sizes = variation.image.sizes;
                            }

                            $img.attr(attributes);

                            if(self.on_demand_preview.length) {

                                var $preview = self.on_demand_preview.find('img');
                                if($preview.length) {
                                    $preview.attr(attributes);
                                }else {
                                    $preview = $img.clone();
                                    self.on_demand_preview.html($preview);
                                }
                            }

                        }
                    }

                    self.$form.trigger('xt_woovs_found_variation');
                    
                }, timeout);
            }
        };

        self.events.onCheckVariations = function() {

            self.setClearButtonVisibility();
        };

        self.events.onReset = function() {

            self.$product.find(self.price_selector).first().html(self.original_price);

            self.$swatches.each(function () {

                var swatch = $(this).find('.swatch');

                swatch.each(function () {

                    if (!self.is_ajax_variation) {
                        $(this).removeClass('xt_woovs-selected xt_woovs-disabled');

                        if ($(this).hasClass('swatch-radio')) {
                            $(this).find('input:radio').prop('disabled', false).prop('checked', false);
                        }
                    } else {
                        if ($(this).hasClass('swatch-radio')) {
                            //$(this).find('input:radio').prop('checked', false);
                        }
                    }

                    self.setCurrentValueLabel($(this), '');
                });
            });

            self.$form.find( '.reset_variations' ).removeClass( 'xt_woovs-reset-visible' );
            self.$form.trigger('xt_woovs_reset_data');
            self.$form.trigger('woocommerce_variation_has_changed');
        };

        self.events.onTooltipEnter = function(e){

            if(!self.tooltip_enabled) {

                self.tooltip_enabled = true;
                var title = $(this).attr('title');
                var type = $(this).data('tooltip_type');
                var value = $(this).data('tooltip_value');

                value = type === 'text' ? value : '<img src="' + value + '" />';

                $(this).data('tiptext', title).removeAttr('title');

                $('<span class="xt_woovs-tooltip">')
                    .addClass('tooltip-' + type)
                    .html(value)
                    .appendTo('body')
                    .css('top', (e.pageY - 10) + 'px')
                    .css('left', (e.pageX + 20) + 'px')
                    .fadeIn('slow');

            }
        };

        self.events.onTooltipLeave = function(){

            $(this).attr('title', $(this).data('tiptext'));
            $('.xt_woovs-tooltip').remove();

            self.tooltip_enabled = false;
        };

        self.events.onTooltipMove = function(e){

            var mousex = e.pageX ; //Get X coordinates
            var mousey = e.pageY - $(this).outerHeight() - $('.xt_woovs-tooltip').outerHeight(); //Get Y coordinates

            $('.xt_woovs-tooltip').css({ top: mousey, left: mousex });
        };

        // Run initializer
        self.init();


        // Trigger
        $(document).trigger('xt_woovs', [self.$form]);

        return self;
    };

    $.xt_woovs_variation_form.defaultOptions = {};
    $.xt_woovs_variation_form.forms = [];

    $.fn.xt_woovs_variation_form = function (options) {

        return this.each( function() {

            $.xt_woovs_variation_form.forms.push((new $.xt_woovs_variation_form(this, options)));
        });
    };

	$( function () {

	    var init = function(isAjax) {

            isAjax = (typeof(isAjax) !== 'undefined') && isAjax;

            $('.variations_form').each(function () {

                if($(this).data('initialized') !== true) {

                    if(isAjax) {
                        $(this).data('ajax', true);
                    }

                    $(this).xt_woovs_variation_form();

                    $(this).data('initialized', true)
                }

            });
        };

        $(document.body).on('quick-view-displayed xt_atc_added_to_cart', function(evt){

            $.xt_woovs_variation_form.forms.forEach(function(form) {

                if(form.on_demand.length && form.on_demand_display_type !== 'inline') {

                    if (form.on_demand_active) {
                        setTimeout(function () {
                            form.closeOnDemand();
                        }, 10);
                    }
                }
            });
        });

        $( document.body ).on('quick-view-displayed', function() {
            init();
        });

        $( document ).ajaxComplete(function( event, request, settings ) {
            init(true);
        });

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {

                if(mutation.attributeName == "class" && mutation.target.classList.contains('variations_form') && mutation.target.classList.contains('populated') && $(mutation.target).data('initialized') !== true) {
                    init();
                }
            });
        });

        observer.observe(document.body, { attributes : true, subtree: true });

        init();

        $( document.body ).trigger( 'xt_woovs_initialized' );

        window.xt_woovs_init = init;
    });

})( jQuery, window );
