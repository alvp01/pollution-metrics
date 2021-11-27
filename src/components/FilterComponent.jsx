import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { getSubregions } from '../utils/helpers';

const FilterComponent = ({ filter, setFilter }) => {
  const allCountries = useSelector((state) => state.countries.data);
  const subRegions = getSubregions(allCountries);
  subRegions.unshift(' ');

  const filterCountries = ((e) => {
    if (e.target.value !== ' ') {
      setFilter({ ...filter, subregion: e.target.value });
    }
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
