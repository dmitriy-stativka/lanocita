(function ($) {

    $(function () {

        if (typeof (acf) === 'undefined') {
            return;
        }

        let demoTitle = new acf.Model({
            data: {
                fieldDemoTarget: 'demo_title_settings',
                styles: {},
                fieldUnitsMapping: {
                    'backtitle-font-size': 'px',
                    'pretitle-font-size': 'px',
                    'pretitle-font-size-mobile': 'px',
                    'h1-font-size': 'px',
                    'h1-font-size-mobile': 'px',
                    'subtitle-font-size': 'px',
                    'subtitle-font-size-mobile': 'px',
                    'h2-font-size': 'px',
                    'h2-font-size-mobile': 'px',
                    'h3-font-size': 'px',
                    'h3-font-size-mobile': 'px',
                    'h4-font-size': 'px',
                    'h4-font-size-mobile': 'px',
                    'pretitle-margin-bottom': 'em',
                    'h1-margin-bottom': 'em',
                    'subtitle-margin-bottom': 'em',
                    'h2-margin-bottom': 'em',
                    'h3-margin-bottom': 'em',
                    'h4-margin-bottom': 'em',
                },
                colorFields: [
                    'backtitle-color',
                    'backtitle-color-alt',
                    'pretitle-color',
                    'pretitle-color-alt',
                    'section-title-color',
                    'section-title-color-alt',
                    'subtitle-color',
                    'subtitle-color-alt',
                    'primary-text-color',
                    'primary-text-color-alt',
                    'primary-link-color',
                    'primary-link-color-alt',
                ],
                fontFamilyFields: [
                    'backtitle-font',
                    'pretitle-font',
                    'h1-font',
                    'subtitle-font',
                    'h2-font',
                    'h3-font',
                    'h4-font',
                    'base-text-font',
                ],
                fontWeightFields: [
                    'backtitle-font-weight-p',
                    'backtitle-font-weight-s',
                    'pretitle-font-weight-p',
                    'pretitle-font-weight-s',
                    'h1-font-weight-p',
                    'h1-font-weight-s',
                    'subtitle-font-weight-p',
                    'subtitle-font-weight-s',
                    'h2-font-weight-p',
                    'h2-font-weight-s',
                    'h3-font-weight-p',
                    'h3-font-weight-s',
                    'h4-font-weight-p',
                    'h4-font-weight-s',
                    'base-text-font-weight-p',
                    'base-text-font-weight-s',
                    'larger-text-font-weight-p',
                    'larger-text-font-weight-s',
                    'smaller-text-font-weight-p',
                    'smaller-text-font-weight-s',
                    'blog-text-font-weight-p',
                    'blog-text-font-weight-s',
                ],
                fields: [
                    'backtitle-font-size',
                    'backtitle-letter-spacing',
                    'backtitle-text-transform',
                    'pretitle-font-size',
                    'pretitle-font-size-mobile',
                    'pretitle-line-height',
                    'pretitle-letter-spacing',
                    'pretitle-margin-bottom',
                    'pretitle-text-transform',
                    'h1-font-size',
                    'h1-font-size-mobile',
                    'h1-line-height',
                    'h1-letter-spacing',
                    'h1-margin-bottom',
                    'h1-text-transform',
                    'subtitle-font-size',
                    'subtitle-font-size-mobile',
                    'subtitle-line-height',
                    'subtitle-letter-spacing',
                    'subtitle-margin-bottom',
                    'subtitle-text-transform',
                    'h2-font-size',
                    'h2-font-size-mobile',
                    'h2-line-height',
                    'h2-letter-spacing',
                    'h2-margin-bottom',
                    'h2-text-transform',
                    'h3-font-size',
                    'h3-font-size-mobile',
                    'h3-line-height',
                    'h3-letter-spacing',
                    'h3-margin-bottom',
                    'h3-text-transform',
                    'h4-font-size',
                    'h4-font-size-mobile',
                    'h4-line-height',
                    'h4-letter-spacing',
                    'h4-margin-bottom',
                    'h4-text-transform',
                    'base_text_title_placeholder',
                    'base-text-size',
                    'base-text-line-height',
                    'larger_text_title_placeholder',
                    'larger-text-size',
                    'smaller_text_title_placeholder',
                    'smaller-text-size',
                    'blog_text_title_placeholder',
                    'blog-text-size',
                ],
            },

            events: {
                'change': 'update',
            },

            setup: function (props) {
                $.extend(this.data, props);
            },

            initialize: function () {
                this.wrapper = this.getFieldByName(this.data.fieldDemoTarget);
            },

            getFieldByName: function (name) {
                let $findField = acf.findFields({
                    name: name,
                });

                return $findField.length > 0 ? acf.getField($findField[0].dataset.key) : false
            },

            getColor: function (field, fieldName) {
                let color = '';
                if (field.val() === 'custom') {
                    color = this.getFieldByName(fieldName + '_custom').val();
                    color = color.length > 0 ? color : 'transparent';
                } else {
                    color = 'var(' + field.val() + ')';
                }

                return color;
            },

            getFontFamily: function (field) {
                return field?.val() ? 'var(' + field.val() + ')' : '';
            },

            getFieldCssVar: function (field) {
                if (!field) {
                    return false;
                }

                let $cssVar = field.$el.find('.acf-label .description');
                return $cssVar.length > 0 && $($cssVar[0]).text() ? $($cssVar[0]).text() : false;
            },

            update: function () {
                if (this.wrapper) {
                    this.updateStyles();
                }
            },

            updateStyles: function () {
                const self = this;

                // Loop common simple fields
                if (this.data.fields.length > 0) {
                    $.each(this.data.fields, function (index, acfName) {
                        let field = self.getFieldByName(acfName);
                        let cssVar = self.getFieldCssVar(field);
                        if (cssVar) {
                            let valueSuffix = self.data.fieldUnitsMapping[acfName] ?? '';
                            self.data.styles[cssVar] = field?.val() + valueSuffix;
                        }
                    });
                }

                // Loop common font family fields
                if (this.data.fontFamilyFields.length > 0) {
                    $.each(this.data.fontFamilyFields, function (index, acfName) {
                        let field = self.getFieldByName(acfName);
                        let cssVar = self.getFieldCssVar(field);
                        if (cssVar) {
                            self.data.styles[cssVar] = self.getFontFamily(field);
                        }

                        let fieldVal = field?.val();
                        if (fieldVal) {
                            let fontWeightPrefix = fieldVal.indexOf('-primary') >= 0 ? 'field_fw_p_' : 'field_fw_s_';
                            let fontWeightField = acf.getField(fontWeightPrefix + acfName + '-weight');
                            let fontWeightFieldCssVar = self.getFieldCssVar(fontWeightField);
                            if (fontWeightField && fontWeightFieldCssVar) {
                                self.data.styles[fontWeightFieldCssVar] = fontWeightField?.val();
                            }
                        }
                    });
                }

                // Loop common color fields
                if (this.data.colorFields.length > 0) {
                    $.each(this.data.colorFields, function (index, acfName) {
                        let field = self.getFieldByName(acfName);
                        let cssVar = self.getFieldCssVar(field);
                        if (cssVar) {
                            self.data.styles[cssVar] = self.getColor(field, acfName);
                        }
                    });
                }

                this.wrapper.$el.css(this.data.styles);
            },

        });

    });

})(jQuery);