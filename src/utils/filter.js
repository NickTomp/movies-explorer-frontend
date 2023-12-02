function filter(arr, shortOn, locale) {
    if( locale === undefined )  {return []}
    const searchText = locale === 'basic' ? localStorage.getItem('searchText') : localStorage.getItem('searchTextOnSaved');
    if (searchText === '' && locale === 'basic') {return []}
    const searchArray = searchText.toLowerCase().split(/[ ,]+/);
    function filterDurationCore(el, shortOn) {
        if (!shortOn) { return true }
        else if (shortOn && el.duration <= 40) {
            return true
        }
        else return false
    }
    function filterTextCore(el) {
        const resultName = el.nameRU + ' ' + el.nameEN;
        if (searchArray.some((word) => resultName.toLowerCase().includes(word))) {
            return true
        } else return false
    }
    return arr.filter((el) => {
        if (filterTextCore(el) && filterDurationCore(el, shortOn)) { return true }
        else return false
    })
}
export default filter;