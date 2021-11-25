import axios from 'axios';

export const fetchCountriesData = () => {
  const BASE_COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

  return axios.get(BASE_COUNTRIES_URL);
};

export const arrangeData = (response) => {
  const countries = response.data
    .map((country) => {
      const {
        name: { common: countryName },
        capital,
        region,
        subregion,
        latlng,
        flags,
        capitalInfo,
      } = country;
      const newCountry = {
        countryName, capital, capitalInfo, region, subregion, latlng, flags,
      };
      return newCountry;
    });

  return countries;
};
