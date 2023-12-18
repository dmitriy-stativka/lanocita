(function ($) {

    $(function () {

        if (typeof (acf) === 'undefined') {
            return;
        }

        let demoButton = new acf.Model({
            data: {
                fieldName: 'demo_button_settings',
                className: {},
                initClassName: 'c-btn',
                initOptionClass: [
                    '-primary',
                    '-inverted',
                    '-secondary',
                    '-link',
                ],
                styles: {},
                iconReverse: false,
                iconReversedClass: 'icon-reversed',
                iconNames: {
                    all: {
                        type: 'button-icon-type',
                        iconCustom: 'button-icon',
                        iconLibrary: 'button-icon-library'
                    },
                    link: {
                        type: 'link-btn-icon-type',
                        iconCustom: 'link-btn-icon',
                        iconLibrary: 'link-btn-icon-library'
                    }
                }
            },

            events: {
                'change': 'update',
                'click .c-btn-bar__preview>a': 'onClickButton',
            },

            onClickButton: function (e) {
                e.preventDefault();
            },

            setup: function (props) {
                $.extend(this.data, props);
            },

            initialize: function () {
                this.wrapper = this.getFieldByName(this.data.fieldName);
                if (this.wrapper) {
                    this.buttons = this.wrapper.$el.find('a.' + this.data.initClassName);
                    this.btnIcons = this.wrapper.$el.find('a.' + this.data.initClassName).find('.c-btn__ico');
                    this.btnLinkIcon = this.wrapper.$el.find('a.' + this.data.initClassName + '.-link').find('.c-btn__ico');
                }
            },

            getFieldByName: function (name) {
                let $findField = acf.findFields({
                    name: name,
                });

                if ($findField.length > 0) {
                    return acf.getField($findField[0].dataset.key);
                } else {
                    return null;
                }

            },

            getColor: function (colorSelectorName) {
                let color = '';
                let colorSelector = this.getFieldByName(colorSelectorName).val();
                if (colorSelector === 'custom') {
                    color = this.getFieldByName(colorSelectorName + '_custom').val();
                    color = color.length > 0 ? color : 'transparent';
                } else {
                    color = 'var(' + colorSelector + ')';
                }

                return color;
            },

            update: function () {
                if (this.wrapper) {
                    this.updateType();
                    this.updateIcon();
                    this.updateStyles();

                    this.updateBtn();
                }
            },

            updateType: function () {
                this.data.className.type = this.getFieldByName('buttons_type').val();
            },

            updateIcon: function () {
                this.data.hasIcon = this.getFieldByName('is_button_icon').val();
                this.data.hasLinkIcon = this.getFieldByName('is_link_btn_icon').val();

                if (this.data.hasIcon) {
                    this.getIcon('all', 'iconImg');
                } else {
                    for (let i = 0, maxL = this.btnIcons.length; i < maxL; i++) {
                        if ($(this.btnIcons[i]).closest('.' + this.data.initClassName).hasClass('-link')) {
                            console.log('has link');
                            continue;
                        }
                        $(this.btnIcons[i])[0].remove();
                        console.log($(this.btnIcons[i]));
                    }
                    this.btnIcons = [];
                }

                if (this.data.hasLinkIcon) {
                    this.getIcon('link', 'linkIconImg');
                } else {
                    if (!this.data.hasIcon) {
                        for (let j = 0, maxLi = this.btnLinkIcon.length; j < maxLi; j++) {
                            $(this.btnLinkIcon[j])[0].remove();
                        }
                        this.btnLinkIcon = [];
                    }
                }

                if(this.data.hasIcon || this.data.hasLinkIcon) {
                    this.data.className.hasIcon = 'has-icon';
                    let iconPosition = this.getFieldByName('flex-direction').val() === 'row' ? 'right' : 'left';
                    this.data.className.iconPosition = 'icon-' + iconPosition;
                    this.data.iconReverse = this.getFieldByName('button_icon_reversed').val();
                }

                let btn_type = this.getFieldByName('button-style-type').val();
                if (btn_type === 'oblique') {
                    this.data.className.oblique = 'is-oblique';
                }
            },

            getIcon : function(type, varName) {
                let btnIcon = '';
                let btnObj = this.btnIcons;
                if( type === 'link') {
                    btnObj = this.btnLinkIcon;
                }

                let iconType = this.getFieldByName(this.data.iconNames[type].type).val();
                if (iconType === 'custom') {
                    let selectedIcon = this.getFieldByName(this.data.iconNames[type].iconCustom).val();

                    if (selectedIcon > 0) {
                        let iconSrc = this.getFieldByName(this.data.iconNames[type].iconCustom).$el.find('.acf-image-uploader').find('.image-wrap > img')[0].src;

                        if (-1 !== iconSrc.indexOf('.svg', (iconSrc.length - 6))) {
                            $.ajax({
                                method: 'GET',
                                url: iconSrc,
                                context: this
                            }).done(function (data) {
                                btnIcon = $(data).find('svg')[0].outerHTML;
                                $(btnObj).html(btnIcon);
                                $(btnObj).find('svg').attr({'width': 30, 'height': 30});
                            }).fail(function (data) {
                                btnIcon = '<img src="' + iconSrc + '">';
                                $(btnObj).html(btnIcon);
                            });
                        } else {
                            btnIcon = '<img src="' + iconSrc + '">';
                        }
                    } else {
                        btnIcon = '';
                    }

                } else {
                    let iconLibType = this.getFieldByName( this.data.iconNames[type].iconLibrary).val();
                    let iconLib = this.getFieldByName(iconLibType).val();
                    let iconFromLib = $('.svg-sprite>svg').find('#' + iconLib);
                    let fillAttr = iconFromLib.attr('fill');
                    fillAttr = fillAttr ? 'fill="' + fillAttr + '"' : '';
                    let viewBoxAttr = 'viewBox="' + iconFromLib.attr('viewBox') + '"';
                    btnIcon = '<svg width="30" height="30" class="icon icon-lib-' + iconLib + '" aria-hidden="true" role="img" ' + fillAttr + ' ' +
                        viewBoxAttr + ' >' + $(iconFromLib).html() + '</svg>';
                }

                this[varName] = btnIcon;
            },

            updateStyles: function () {
                this.data.styles['--btn-font-family'] = 'var(' + this.getFieldByName('btn-font').val() + ')';
                this.data.styles['--btn-font-size'] = this.getFieldByName('btn-font-size').val() / 10 + 'rem';
                if (this.getFieldByName('btn-font').val() === '--font-family-primary') {
                    this.data.styles['--button-font-weight'] = acf.getField('field_fw_p_button-font-weight').val();
                } else {
                    this.data.styles['--button-font-weight'] = acf.getField('field_fw_s_button-font-weight').val();
                }
                this.data.styles['--btn-text-transform'] = this.getFieldByName('btn-text-transform').val();

                this.data.styles['--btn-padding-top-bottom'] = this.getFieldByName('button-padding-top-bottom').val();
                this.data.styles['--btn-padding-left-right'] = this.getFieldByName('button-padding-left-right').val();

                this.data.styles['--btn-primary-color'] = this.getColor('btn-color');
                this.data.styles['--btn-primary-color-hover'] = this.getColor('btn-color-hover');
                this.data.styles['--btn-primary-bg'] = this.getColor('btn-background-color');
                this.data.styles['--btn-primary-bg-hover'] = this.getColor('btn-background-color-hover');
                this.data.styles['--btn-primary-border-color'] = this.getColor('btn-border-color');
                this.data.styles['--btn-primary-border-color-hover'] = this.getColor('btn-border-color-hover');
                this.data.styles['--btn-primary-border'] = this.getFieldByName('btn-primary-border-width').val() + 'px';
                this.data.styles['--btn-primary-shadow'] = this.getFieldByName('btn-primary-box-shadow').val();

                this.data.styles['--btn-secondary-color'] = this.getColor('btn-color-alt');
                this.data.styles['--btn-secondary-color-hover'] = this.getColor('btn-color-alt-hover');
                this.data.styles['--btn-secondary-bg'] = this.getColor('btn-background-color-alt');
                this.data.styles['--btn-secondary-bg-hover'] = this.getColor('btn-background-color-alt-hover');
                this.data.styles['--btn-secondary-border-color'] = this.getColor('btn-border-color-alt');
                this.data.styles['--btn-secondary-border-color-hover'] = this.getColor('btn-border-color-alt-hover');
                this.data.styles['--btn-secondary-border'] = this.getFieldByName('btn-secondary-border-width').val() + 'px';
                this.data.styles['--btn-secondary-shadow'] = this.getFieldByName('btn-secondary-box-shadow').val();

                this.data.styles['--btn-link-color'] = this.getColor('btn-color-link');
                this.data.styles['--btn-link-color-hover'] = this.getColor('btn-color-link-hover');
                this.data.styles['--link-icon-color'] = this.getColor('link-icon-color');

                let btn_type = this.getFieldByName('button-style-type').val();
                if (btn_type === 'normal') {
                    this.data.styles['--btn-border-radius'] = this.getFieldByName('btn-border-radius').val() + 'px';
                }

            },

            updateBtn: function () {
                for (i = 0, maxL = this.buttons.length; i < maxL; i++) {
                    $(this.buttons[i])[0].className = this.data.initClassName + ' ' + this.data.initOptionClass[i];
                }

                //update class names
                for (const settingClass in this.data.className) {
                    $(this.buttons).addClass(this.data.className[settingClass]);
                }

                //update icon
                if (this.data.hasIcon) {
                    if (this.btnIcons.length === 0) {
                        if (!this.data.hasLinkIcon) {
                            this.wrapper.$el.find('a.' + this.data.initClassName).append('<span class="c-btn__ico"></span>');
                        } else {
                            this.wrapper.$el.find('a.' + this.data.initClassName + ':not(.-link)').append('<span class="c-btn__ico"></span>');
                        }
                        this.btnIcons = this.wrapper.$el.find('a.' + this.data.initClassName).find('.c-btn__ico');
                        this.btnLinkIcon = this.wrapper.$el.find('a.' + this.data.initClassName + '.-link').find('.c-btn__ico');
                    }

                    $(this.btnIcons).html('');
                    $(this.btnIcons).removeClass(this.data.iconReversedClass);

                    if (this.data.iconReverse) {
                        $(this.btnIcons).addClass(this.data.iconReversedClass);
                    }

                    if (this.iconImg) {
                        $(this.btnIcons).html(this.iconImg);
                    }
                }

                if (this.data.hasLinkIcon) {
                    if (this.btnLinkIcon.length === 0) {
                        this.wrapper.$el.find('a.' + this.data.initClassName + '.-link').append('<span class="c-btn__ico"></span>');
                        this.btnLinkIcon = this.wrapper.$el.find('a.' + this.data.initClassName + '.-link').find('.c-btn__ico');
                    }

                    $(this.hasLinkIcon).html('');
                    $(this.hasLinkIcon).removeClass(this.data.iconReversedClass);

                    if (this.data.iconReverse) {
                        $(this.hasLinkIcon).addClass(this.data.iconReversedClass);
                    }

                    if (this.linkIconImg) {
                        $(this.btnLinkIcon).html(this.linkIconImg);
                    }
                }

                //update styles
                for (const styleItem in this.data.styles) {
                    this.wrapper.$el.find('.c-btn-bar').css(styleItem, this.data.styles[styleItem]);
                }
            },
        });

    });

})(jQuery);