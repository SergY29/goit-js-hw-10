import './css/styles.css';

const DEBOUNCE_DELAY = 300;


// https://restcountries.com/v3.1/name/peru
// https://restcountries.com/v3.1/name/{name}


fetch('https://restcountries.com/v3.1/name/peru').then(data => console.log(data.json()));


