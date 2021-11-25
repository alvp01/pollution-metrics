import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesData, arrangeData } from '../utils/helpers';
import { filterData, fetchCountries } from '../redux/countries/countriesSlice';

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.filteredData);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    if (countries.length === 0) {
      fetchCountriesData().then((response) => {
        const countriesArray = arrangeData(response);
        dispatch(fetchCountries(countriesArray));
        setFilter({ subregion: 'South America' });
      });
    }
  }, []);

  useEffect(() => {
    dispatch(filterData(filter));
  }, [filter]);

  return (
    <ul>
      {countries.map((country, index) => (
        <li key={`${index + 1}`}>
          <h2>{country.countryName}</h2>
          <h3>{`lat: ${country.latlng[0]}`}</h3>
          <h3>{`long: ${country.latlng[1]}`}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
