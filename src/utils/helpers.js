const data = require('./countries.json');

export const fetchCountriesData = () => (data);

export const arrangeData = (response) => {
  const countries = response
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
