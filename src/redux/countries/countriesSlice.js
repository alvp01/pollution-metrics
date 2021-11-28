import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    filteredData: [],
    filterSwitch: false,
  },
  reducers: {
    loadCountries: (state, action) => (
      {
        ...state,
        data: [...action.payload],
        filteredData: [...action.payload],
      }),
    filterData: (state, action) => (
      {
        ...state,
        filteredData: state.data
          .filter(
            (country) => {
              const keys = Object.keys(action.payload);
              if (country[keys[0]] !== action.payload[keys[0]]) {
                return false;
              }
              return true;
            },
          ),
        filterSwitch: !state.filterSwitch,
      }
    ),
    loadAirData: (state, action) => (
      {
        ...state,
        filteredData: [...action.payload],
      }),
  },
});

export default countriesSlice.reducer;
export const { loadCountries, filterData, loadAirData } = countriesSlice.actions;
