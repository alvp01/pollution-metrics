import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesData, arrangeData, appendAirData } from '../utils/helpers';
import { filterData, loadCountries, loadAirData } from '../redux/countries/countriesSlice';

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.filteredData);
  const [filter, setFilter] = useState({});
  const filterSwitch = useSelector((state) => state.countries.filterSwitch);

  useEffect(async () => {
    if (countries.length !== 0 && countries.length !== 250) {
      dispatch(loadAirData(await appendAirData(countries)));
    }
  }, [filterSwitch]);

  useEffect(() => {
    if (countries.length === 0) {
      const response = fetchCountriesData();
      const countriesArray = arrangeData(response);
      dispatch(loadCountries(countriesArray));
      setFilter({ subregion: 'South America' });
    }
  }, []);

  useEffect(() => {
    if (Object.entries(filter).length !== 0) {
      dispatch(filterData(filter));
    }
  }, [filter]);

  return (
    <ul>
      {countries.map((country, index) => (
        <li key={`${index + 1}`}>
          <h2>{country.countryName}</h2>
          <h3>{`lat: ${country.lat}`}</h3>
          <h3>{`long: ${country.lng}`}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
