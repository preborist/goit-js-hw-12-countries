import './styles.scss';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import updateCountryMarkup from './js/updateCountriesMarkup';

refs.searchForm.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    const inputValue = event.target.value;
    clearArticlesContainer();
    fetchCountries(inputValue).then(updateCountryMarkup);
  }, 500),
);

function clearArticlesContainer() {
  refs.countiesContainer.innerHTML = '';
}
