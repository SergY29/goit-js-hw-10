
function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`).then(data => data.json());
};



export { fetchCountries }; 