import countryTpl from '../templates/country.hbs';
import listCountriesTpl from '../templates/listCountries.hbs';
import refs from './refs';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

function updateCountryMarkup(data) {
  const markupCountry = countryTpl(data);
  const markupListCountries = listCountriesTpl(data);

  if (data.length === 1) {
    refs.countiesContainer.insertAdjacentHTML('beforeend', markupCountry);
  } else if (data.length > 1 && data.length < 10) {
    refs.countiesContainer.insertAdjacentHTML('beforeend', markupListCountries);
  } else if (data.length > 10) {
    toastr['error'](
      'Too many matches found. Please enter a more specific query!',
    );
  } else if (data.length === undefined) {
    toastr['error'](`Error ${data.status}: ${data.message}`);
  }
}

export default updateCountryMarkup;
