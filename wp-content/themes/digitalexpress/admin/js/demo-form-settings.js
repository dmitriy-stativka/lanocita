( function ( $ ) {

	$( function () {

		if ( typeof ( acf ) === 'undefined' ) { return; }

		let demoForm = new acf.Model( {
			data: {
				fieldName: 'demo_form_settings',
				className: 'c-form',
				styles: {},
			},

			events: {
				'change': 'update',
				'submit form.wpcf7-form': 'onSubmitForm',
			},

			onSubmitForm: function ( e ) {
				e.preventDefault();
			},

			setup: function ( props ) {
				$.extend( this.data, props );
			},

			initialize: function () {
				this.wrapper = this.getFieldByName( this.data.fieldName );
				if ( this.wrapper ) {
					this.formBlock = this.wrapper.$el.find( 'div.' + this.data.className )[0];
				}
			},

			getFieldByName: function ( name ) {
				let $findField = acf.findFields( {
					name: name,
				} );

				if ( $findField.length > 0 ) {
					return acf.getField( $findField[0].dataset.key );
				} else {
					return null;
				}

			},

			getColor: function ( colorSelectorName ) {
				let color = '';
				let colorSelector = this.getFieldByName( colorSelectorName ).val();
				if ( colorSelector === 'custom' ) {
					color = this.getFieldByName( colorSelectorName + '_custom' ).val();
					color = color.length > 0 ? color : 'transparent';
				} else {
					color = 'var(' + colorSelector + ')';
				}

				return color;
			},

			update: function () {
				if ( this.wrapper ) {
					this.updateStyles();

					this.updateForm();
				}
			},

			updateStyles: function () {
				this.data.styles['--label-font-size'] = ( this.getFieldByName( 'label-font-size' ).val() / 10 ) + 'rem';
				this.data.styles['--label-color'] = this.getColor( 'label-color' );

				this.data.styles['--input-font-size'] = ( this.getFieldByName( 'input-font-size' ).val() / 10 ) + 'rem';
				this.data.styles['--input-color'] = this.getColor( 'input-color' );
				this.data.styles['--input-background-color'] = this.getColor( 'input-background-color' );
				this.data.styles['--input-border-width'] = this.getFieldByName( 'input-border-width' ).val() + 'px';
				this.data.styles['--input-border-radius'] = this.getFieldByName( 'input-border-radius' ).val() + 'px';
				this.data.styles['--input-border-color'] = this.getColor( 'input-border-color' );
				this.data.styles['--input-padding-top-bottom'] = this.getFieldByName( 'input-padding-top-bottom' ).val() + 'px';
				this.data.styles['--input-padding-left-right'] = this.getFieldByName( 'input-padding-left-right' ).val() + 'px';

				this.data.styles['--form-row-margin-top-bottom'] = this.getFieldByName( 'form-row-margin-top-bottom' ).val() + 'px';
				this.data.styles['--form-row-margin-left-right'] = this.getFieldByName( 'form-row-margin-left-right' ).val() + 'px';

				this.data.styles['--message-font-size'] = ( this.getFieldByName( 'message-font-size' ).val() / 10 ) + 'rem';
				this.data.styles['--message-line-height'] = this.getFieldByName( 'message-line-height' ).val();

				if ( this.getFieldByName( 'base-text-font' ).val() === '--font-family-primary' ) {
					this.data.styles['--label-font-weight'] = acf.getField( 'field_fw_p_label-font-weight' ).val();
					this.data.styles['--input-font-weight'] = acf.getField( 'field_fw_p_input-font-weight' ).val();
					this.data.styles['--message-font-weight'] = acf.getField( 'field_fw_p_message-font-weight' ).val();
				} else {
					this.data.styles['--label-font-weight'] = acf.getField( 'field_fw_s_label-font-weight' ).val();
					this.data.styles['--input-font-weight'] = acf.getField( 'field_fw_s_input-font-weight' ).val();
					this.data.styles['--message-font-weight'] = acf.getField( 'field_fw_s_message-font-weight' ).val();
				}
			},

			updateForm: function () {
				//update styles
				if ( this.formBlock ) {
					for ( const styleItem in this.data.styles ) {
						$( this.formBlock ).css( styleItem, this.data.styles[styleItem] );
					}
				}
			},
		} );

	} );

} )( jQuery );