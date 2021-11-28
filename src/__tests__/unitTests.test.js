import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CountryPage from '../pages/CountryPage';

import store from '../redux/store';

afterEach(cleanup);

describe('test components', () => {
  it('renders homepage page with redux', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<HomePage />}/>
          </Routes>
        </Router>        
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders country page with redux', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<CountryPage />}/>
          </Routes>
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
