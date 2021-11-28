import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import {
  fetchCountriesData, arrangeData, appendAirData, getQueryTime, aqiTranslate, checkForKeyInArray,
} from '../utils/helpers';
import { filterData, loadCountries, loadAirData } from '../redux/countries/countriesSlice';
import FilterComponent from './FilterComponent';
import globe from '../assets/globe.png';

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 primary-bg main-section flex-center flex-wrap">
          <div className="col-12 d-flex flex-row mb-3">
            <div className="col-6"><img alt="globe" src={globe} className="img-fluid" /></div>
            <div className="col-6 px-2">
              <h1 className="text-white">Air Quality from differents countries around the globe!</h1>
            </div>
          </div>
          <FilterComponent filter={filter} setFilter={setFilter} />
        </div>
        <div className="col-12 divider-bg">
          <h1 className="text-white">{`Air quality for ${filter.subregion}`}</h1>
        </div>
      </div>
      <div className="row countries-container">
        {!checkForKeyInArray('airData', countries)
          ? <h3>loading countries</h3>
          : countries.map((country) => (
            <div key={nanoid()} className="country-element col-6 flex-center secondary-bg">
              <Link to={`/country/${country.countryName}`}>
                <div>
                  <h2>{country.countryName}</h2>
                  <h4>{`${aqiTranslate(country.airData.main.aqi)} air quality`}</h4>
                  <h4>{`Air Quality Index: ${country.airData.main.aqi}`}</h4>
                  <h4 className="main-date-time">{getQueryTime(country.airData.dt)}</h4>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CountriesList;
