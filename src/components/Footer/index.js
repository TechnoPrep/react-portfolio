import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import FA "fab" prefix
import {
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="d-flex flex-wrap align-items-center py-3 footer-bg-custom fixed-bottom">
      <div className="container text-center mb-5">
        <div className="row col-12 py-lg-3"></div>
        <div className="row social-links d-flex justify-content-center">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="col-2 footer-fa-icons">
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nathaniel-ehrlich-018758121/">
                <FontAwesomeIcon icon={faLinkedin} size="3x" color="#fff" />
              </a>
            </div>
            <div className="col-2 footer-fa-icons">
              <a rel="noreferrer" target="_blank" href="https://github.com/TechnoPrep">
                <FontAwesomeIcon icon={faGithub} size="3x" color="#fff" />
              </a>
            </div>
            <div className="col-2 footer-fa-icons">
              <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCmpGQ2QrNXYZaEiIK4VJrjA">
                <FontAwesomeIcon icon={faYoutube} size="3x" color="#fff" />
              </a>
            </div>
          </div>
        </div>
        {location.pathname !== "/" && (
          <>
            <div className="row col-12 py-lg-3"></div>
            <button
              className="btn btn-dark mb-3"
              onClick={() => history.goBack()}
            >
              &larr; Go Back
            </button>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
