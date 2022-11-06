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
const getEl = x => document.querySelector(x);

// console.log(fetchCountries('spain'));

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
getEl('ul').style.listStyle = "none";




function onSearch(e) {
    e.preventDefault();
    let value = e.target.value.trim();

    if (value === '') {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = '';
        return;
    };

    fetchCountries(value)
        .then(data => {
            if (data.length > 10) {
                Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
                return;
            }
            else if (data.length === 1) {
                refs.countryList.innerHTML = '';
                markupOne(data);
                return;
            }
            else {
                refs.countryList.innerHTML = '';
                refs.countryInfo.innerHTML = '';
                markupAll(data);
                return;
            };
        })
        .catch(error => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
        });
    console.log(fetchCountries(value));
}

function markupAll(data) {
    const markupAll = data.map(({ flags, name }) => `<li class="country-info__about">
        <img src="${flags.svg}" alt="${name.official}" width="50" height="40" style="margin-right:15px">
        <p>${name.official}</p>
        </li>`)
        .join("");
    refs.countryList.innerHTML = markupAll;
};

function markupOne(data) {
    const markupOne = data.map(({ flags, name, capital, population, languages }) => `<p class="country-info__about">
        <img src="${flags.svg}" alt="${name.official}" width="120" height="70" style="margin-right:15px">
        <b>${name.official}</b></p>
        <ul style="list-style-type:none">
        <li><b>Capital:</b> ${capital}</li>
        <li><b>Population:</b> ${population}</li>
        <li><b>Languages:</b> ${Object.values(languages)}</li >
        </ul>`)
        .join("");
    refs.countryInfo.innerHTML = markupOne;
};






