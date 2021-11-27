/* import PropTypes from 'prop-types'; */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrentCountry, aqiTranslate } from '../utils/helpers';

const Country = () => {
  const currentCountries = useSelector((state) => state.countries.filteredData);
  /* const { params: { countryName } } = match; */
  const { countryName } = useParams();
  console.log(`THIS IS THE COUNTRY NAME: ${countryName}`);
  const currentCountry = getCurrentCountry(countryName, currentCountries);
  console.log(currentCountry);
  const {
    airData: {
      main: { aqi },
    },
  } = currentCountry;

  return (
    <div>
      <h2>{`This is the country: ${currentCountry.countryName}`}</h2>
      <h3>{`this has a ${aqiTranslate(aqi)} air quality`}</h3>
    </div>
  );
};

/* Country.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      countryName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}; */

export default Country;