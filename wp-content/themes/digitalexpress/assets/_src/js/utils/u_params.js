// Parse the URL
const u_getParameterByName = (name) => {
    const queryString = window.location.search || window.location.hash.split('?')[1];
    if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        const value = urlParams.get(name);

        return value !== null ? value : '';
    }

    return ''
};

export {
    u_getParameterByName
}
