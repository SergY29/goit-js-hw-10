const URL = 'https://restcountries.com/v3.1'



function fetchCountries(name) {
    return fetch(`${URL}/name/${name}?fields=name,capital,population,flags,languages`).then(data => data.json());
};

export { fetchCountries };

