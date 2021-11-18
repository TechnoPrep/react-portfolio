import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
      <footer className="d-flex flex-wrap align-items-center py-3 footer-bg-custom">
        <div className="container text-center mb-5">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => history.goBack()}
            >
              &larr; Go Back
            </button>
          )}
          <h4>
            
          </h4>
        </div>
      </footer>
  );
};

export default Footer;
