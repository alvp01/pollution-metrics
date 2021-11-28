import configureStore from 'redux-mock-store';
import { loadCountries, filterData, loadAirData } from '../redux/countries/countriesSlice';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('test reducer actions', () => {
  it('test loadCountries action', ()=>{
    const initialState = {};
    const store = mockStore(initialState);
    const country = {
      countryName: 'Venezuela',
      lat: 8,
      lng: -66,
      subregion: 'South America',
    }
    store.dispatch(loadCountries(country));

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'countries/loadCountries', payload: country }]);
  });

  it('test filterData action', ()=>{
    const initialState = {};
    const store = mockStore(initialState);
    const filter = { subregion: 'South America' }
    store.dispatch(filterData(filter));

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'countries/filterData', payload: filter }]);
  });

  it('test loadAirData action', ()=>{
    const initialState = {};
    const store = mockStore(initialState);
    const country = {
      countryName: 'Venezuela',
      lat: 8,
      lng: -66,
      subregion: 'South America',
      airData: {
        main: { aqi: 1 },
        components: {
          co: 236.99,
          nh3: 0.27,
          no: 0,
          no2: 0.12,
          o3: 7.87,
          pm2_5: 0.5,
          pm10: 0.51,
          so2: 0.01,
        },
        dt: 1638072000,
      }
    }
    store.dispatch(loadAirData(country));

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'countries/loadAirData', payload: country }]);
  });
});