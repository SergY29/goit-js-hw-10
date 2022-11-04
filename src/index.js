import './css/styles.css';
import { fetchCountries } from "./fetchCountries";
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

// console.log(fetchCountries('spain'));

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch(e) {
    e.preventDefault();
    let value = e.target.value.trim();


    // fetchCountries(value.trim())

    console.log(fetchCountries(value));


}





