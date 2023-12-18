const ds_gridderInit = () => {

    const gridderElements = document.querySelectorAll('.js-gridder');

    if (gridderElements) {

        gridderElements.forEach((element) => {

            const columns = Number(element.dataset.gridderColumns) || 3; // set default to 3
            const gap = Number(element.dataset.gridderGap) || 15; // set default to 15

            new GridderJS(element, { columns, gap });
        });
    }
};

export {
    ds_gridderInit,
};
