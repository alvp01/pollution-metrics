import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrentCountry, aqiTranslate } from '../utils/helpers';
import Header from './Header';

const Country = () => {
  const currentCountries = useSelector((state) => state.countries.filteredData);
  const { countryName } = useParams();
  const currentCountry = getCurrentCountry(countryName, currentCountries);
  const {
    airData: {
      main: { aqi },
      components: {
        co,
        nh3,
        no,
        no2,
        o3,
        so2,
        pm2_5: pm25,
        pm10,
      },
    },
  } = currentCountry;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header title={`${countryName}`} backBtn />
        </div>
        <div className="col-12 flex-center flex-column country-main-section primary-bg">
          <h2>{`${currentCountry.countryName}`}</h2>
          <h3>{`AQI: ${aqi}, ${aqiTranslate(aqi)} quality air`}</h3>
        </div>
        <div className="col-12 divider-bg">
          <h2 className="divider-text font-lato">Components concentration</h2>
        </div>
        <div className="componets-container col-12 px-0">
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Carbon monoxide:</h4>
            <h4>{`${co}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Nitrogen monoxide:</h4>
            <h4>{`${no}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Nitrogen dioxide:</h4>
            <h4>{`${no2}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Ammonia:</h4>
            <h4>{`${nh3}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Ozone:</h4>
            <h4>{`${o3}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Sulphur dioxide:</h4>
            <h4>{`${so2}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Particulates:</h4>
            <h4>{`${pm25}`}</h4>
          </div>
          <div className="component align-items-center col-12 d-flex flex-row justify-content-between px-4">
            <h4>Particulates:</h4>
            <h4>{`${pm10}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
