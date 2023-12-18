/**
 * Update product quantity on single product page
 */

const productQuantityEl = document.querySelectorAll('.product .quantity');

function _singleProductQuantityInit(el) {
    const increaseProductBtn = el.querySelector('.item_qty.plus');
    const decreaseProductBtn = el.querySelector('.item_qty.minus');
    const productQuantityInput = el.querySelector('input.qty');

    increaseProductBtn.addEventListener('click', (ev) => {
        ev.preventDefault;
        _increaseProductQuantity(productQuantityInput);
    });

    decreaseProductBtn.addEventListener('click', (ev) => {
        ev.preventDefault;
        _decreaseProductQuantity(productQuantityInput);
    });
}

function _increaseProductQuantity(input) {
    const quantity = !input.value ? 0 : parseInt(input.value, 10);

    // Check max value
    const maxAttr = input.getAttribute('max');
    if (typeof maxAttr !== typeof undefined && maxAttr !== false && quantity >= parseInt(maxAttr, 10)) {
        return false;
    }

    input.value = quantity + 1;
}

function _decreaseProductQuantity(input) {
    const quantity = !input.value ? 0 : parseInt(input.value, 10);

    // Check min value
    const minAttr = input.getAttribute('min');
    if (typeof minAttr !== typeof undefined && minAttr !== false && quantity <= parseInt(minAttr, 10)) {
        return false;
    }

    input.value = quantity - 1;
}

const dswc_singleProdQty = () => {
    if (productQuantityEl) {
        productQuantityEl.forEach((el) => {
            _singleProductQuantityInit(el);
        });
    }
};

export {
    dswc_singleProdQty,
};
