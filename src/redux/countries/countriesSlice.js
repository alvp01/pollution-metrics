import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    filteredData: [],
  },
  reducers: {
    fetchCountries: (state, action) => (
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
      }
    ),
    resetFilterData: (state) => ({
      ...state,
      filteredData: [],
    }),
  },
});

export default countriesSlice.reducer;
export const { fetchCountries, filterData } = countriesSlice.actions;
