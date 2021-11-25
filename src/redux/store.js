import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [thunk, logger],
});

export default store;
