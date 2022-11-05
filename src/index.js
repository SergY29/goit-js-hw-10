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

    if (value === '') {
        return;
    };

    fetchCountries(value).then(result => {
        if (result.length > 10) {
            Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
            return;
        }
        else if (result.length === 1) {
            Notiflix.Notify.info('один');
            return;
        }
        else {
            Notiflix.Notify.info('все ок.');
            return;

        };
    })
        .catch(error => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
        });


    console.log(fetchCountries(value));


}

function markupAll() {

};

function markupOne() {

};




