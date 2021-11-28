import axios from 'axios';
import env from 'react-dotenv';

const data = require('./countries.json');

export const fetchCountriesData = () => (data);

export const arrangeData = (response) => {
  const countries = response
    .map((country) => {
      const {
        name: { common: countryName },
        subregion,
        latlng,
      } = country;
      const [lat, lng] = latlng;
      const newCountry = {
        countryName, subregion, lat, lng,
      };
      return newCountry;
    });

  return countries;
};

const fetchAirData = async ({ lat, lng }) => {
  const API_TOKEN = env.REACT_APP_API_KEY;
  const URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${API_TOKEN}`;

  const response = await axios.get(URL);

  return response.data;
};

export const appendAirData = (countriesArray) => {
  const countryPromises = [];
  const countriesWithAirData = [];
  countriesArray.forEach((country) => {
    countryPromises.push(fetchAirData(country));
  });

  const unifiedData = Promise.allSettled(countryPromises)
    .then((responses) => {
      responses.forEach((response, index) => {
        const airValues = response.value.list[0];
        countriesWithAirData.push({ ...countriesArray[index], airData: { ...airValues } });
      });
      return countriesWithAirData;
    });

  return unifiedData;
};

export const aqiTranslate = (value) => {
  const airQuality = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  return airQuality[value - 1];
};

export const getSubregions = (countriesArray) => {
  const subregions = [];
  countriesArray.forEach((country) => {
    if (!subregions.includes(country.subregion) && typeof country.subregion !== 'undefined') {
      subregions.push(country.subregion);
    }
  });

  return subregions;
};

export const getCurrentCountry = ((countryName, countriesArray) => {
  let currentCountry = {};
  countriesArray.forEach((country) => {
    if (country.countryName === countryName) currentCountry = { ...country };
  });

  return currentCountry;
});

export const getQueryTime = (timestamp) => {
  const integerTimestamp = parseInt(timestamp, 10);
  const queryTime = new Date(integerTimestamp * 1000);

  return `${queryTime}`;
};

export const checkForKeyInArray = (key, countries) => {
  const isPresent = countries.some((obj) => Object.keys(obj).includes(key));

  return isPresent;
};
