function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('Error: ', error));
}

export default fetchCountries;
