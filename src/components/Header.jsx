import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdMic, MdOutlineSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, backBtn }) => {
  const navigate = useNavigate();
  return (
    <header className="py-2 secondary-bg text-white fixed-top header">
      <div className="container-fluid">
        <div className="row mx-0 g-0 justify-content-center align-items-center">
          {backBtn && (
            <div className="col-1" data-testid="backBtn">
              <MdKeyboardArrowLeft className="fs-1" onClick={() => navigate('/')} />
            </div>
          )}
          <div className="col-9">
            <h1 className="mb-0 text-center">{title}</h1>
          </div>
          <div className="col-1 px-1 d-md-none">
            <MdMic className="fs-1" />
          </div>
          <div className="col-1 px-1 d-md-none">
            <MdOutlineSettings className="fs-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backBtn: PropTypes.bool,
};

Header.defaultProps = {
  backBtn: false,
};

export default Header;
