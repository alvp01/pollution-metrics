import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
