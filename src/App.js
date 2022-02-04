import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import './App.css';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
