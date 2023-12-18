/**
 * Update quantity input on click
 */
const _updateInputQuantity = (el, value) => {
    const input = el.parent().find('input.qty');
    const quantity = parseInt(input.val(), 10);

    // Check max value
    if (value > 0) {
        const maxAttr = input.attr('max');
        if (typeof maxAttr !== typeof undefined && maxAttr !== false && quantity >= parseInt(maxAttr, 10)) {
            return false;
        }
    }

    // Check min value
    if (value < 0) {
        const minAttr = input.attr('min');
        if (typeof minAttr !== typeof undefined && minAttr !== false && quantity <= parseInt(minAttr, 10)) {
            return false;
        }
    }

    // Update value
    input.val(quantity + value);

    // Trigger cart update
    const updateCartBtn = $("[name='update_cart']");
    updateCartBtn.removeAttr('disabled');

    // TODO: If you want to trigger cart update when you change product quantity, uncomment the line below
    updateCartBtn.trigger('click');
};

export {
    _updateInputQuantity,
};
