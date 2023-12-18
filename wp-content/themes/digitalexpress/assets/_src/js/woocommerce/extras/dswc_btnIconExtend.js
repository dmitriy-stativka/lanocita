/**
 * Inject icons on Woocommerce buttons
 */

export function dswc_btnExtendIcon() {
    // Select buttons to change
    const queryBtnsPrimary = [
        '.woocommerce-form-login .button',
        '.woocommerce-form-register .button',
        '.woocommerce-form-coupon .button',
        '.cart-collaterals .button',
        '.woocommerce-message .button',
        '.single-product .related.products .view-product-link',
        '.return-to-shop .button',
        '.coupon .button',
    ];

    function addIcons() {
        queryBtnsPrimary.forEach((item) => {
            const fetchBtns = document.querySelectorAll(item);

            fetchBtns.forEach((btn) => {
                const btnText = btn.textContent;
                btn.innerHTML = `<span class="c-btn__txt">${ btnText }</span>`
                    + '<span class="c-btn__ico"><svg class="icon" width= "30" height="30">'
                    // Set icon name
                    + '<use xlink:href="#btn-icon"/>'
                    + '</svg></span>';

                // Set classes to add to receive default styling
                ['c-btn', '-primary', 'has-icon', 'icon-right'].forEach((bntClass) => {
                    btn.classList.add(bntClass);
                });
            });
        });
    }

    addIcons()

    $(document.body).on('updated_cart_totals', () => {
        addIcons()
    });
}
