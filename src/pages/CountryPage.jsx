import { Link } from 'react-router-dom';
import Country from '../components/Country';

const CountryPage = () => (
  <div className="container-fluid">
    <Link to="/">Back</Link>
    <Country />
  </div>
);

export default CountryPage;
