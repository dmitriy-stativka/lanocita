/**
 * Calculate Header height and use it as :root variable.
 * Calculate Site notice height and use it as :root variable.
 *
 * Usable for offsetting site items when using WooCommerce variable height site notice.
 */

const ds_headerHeight = () => {
    const headerNotice = document.querySelector('.woocommerce-store-notice');
    if (!headerNotice) return;

    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.classList.add('ds-custom');

    // const mql = window.matchMedia('(max-width: 1111px)');
    const header = document.querySelector('.site-header');

    const observeHeader = new ResizeObserver((entries) => {
        entries.forEach((item) => {
            const height = item.target.offsetHeight;
            styleTag.innerHTML = `:root {--navbar-height: ${ height }px;}`;
            document.head.appendChild(styleTag);
            observeHeader.disconnect();
        });
    });
    observeHeader.observe(header);

    if (headerNotice) {
        const observeNotice = new ResizeObserver((entries) => {
            entries.forEach((item) => {
                const height = item.target.offsetHeight;
                // console.log(`Notice height: ${height}`);
                styleTag.innerHTML += `:root {--wc-notice-height: ${ height }px;}`;
            });
        });
        observeNotice.observe(headerNotice);
    }
};

export {
    ds_headerHeight,
};
