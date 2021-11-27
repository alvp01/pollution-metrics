import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { getSubregions } from '../utils/helpers';
import { filterData } from '../redux/countries/countriesSlice';

const FilterComponent = ({ filter, setFilter }) => {
  const allCountries = useSelector((state) => state.countries.data);
  const subRegions = getSubregions(allCountries);
  const dispatch = useDispatch();

  const filterCountries = ((e) => {
    setFilter({ ...filter, subregion: e.target.value });
    console.log(filter);
    dispatch(filterData(filter));
  });

  return (
    <form>
      <div>
        <select onChange={filterCountries}>
          {subRegions.map((region) => (
            <option key={nanoid()}>{region}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

FilterComponent.propTypes = {
  filter: PropTypes.shape({ root: PropTypes.string }).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterComponent;
