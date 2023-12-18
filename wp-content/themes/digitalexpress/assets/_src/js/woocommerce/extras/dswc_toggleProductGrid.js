/**
 * Toggle Product Grid
 */

export function dswc_toggleProductGrid() {
    const productGridBtn = document.querySelector('#grid-toggle');
    if (!productGridBtn) return;

    const productListBtn = document.querySelector('#list-toggle');
    const productGrid = document.querySelector('.woocommerce-archive-content .products');

    function toggleProductGrid() {
        productListBtn.classList.remove('is-active');
        productGridBtn.classList.add('is-active');
        productGrid.classList.add('-grid');
        productGrid.classList.remove('-list');
        localStorage.setItem('grid', 'enabled');
        document.dispatchEvent(new CustomEvent('gridChange', {
            bubbles: false,
            detail: {
                elem: 4,
            },
        }));
    }

    function toggleProductList() {
        productGridBtn.classList.remove('is-active');
        productListBtn.classList.add('is-active');
        productGrid.classList.add('-list');
        productGrid.classList.remove('-grid');
        localStorage.setItem('grid', 'disabled');
        document.dispatchEvent(new CustomEvent('gridChange', {
            bubbles: false,
            detail: {
                elem: 2,
            },
        }));
    }

    productGridBtn.addEventListener('click', () => {
        toggleProductGrid();
    });

    productListBtn.addEventListener('click', () => {
        toggleProductList();
    });

    // const productSortBtn = document.querySelector('.facetwp-facet-sort_by');
    // productSortBtn.addEventListener('click', () => {
    //     productSortBtn.classList.toggle('is-active');
    // });

    const getGrid = localStorage.getItem('grid');
    if (getGrid === 'disabled') {
        toggleProductList();
    } else {
        toggleProductGrid();
    }
}
