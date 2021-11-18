import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-bg-custom text-light py-3 flex-row align-center">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <Link className="text-light" to="/">
              <h1 className="m-0 roboto-400">NE<span className="home-span">.</span></h1>
            </Link>
          </div>
          <div className="text-end">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link className="nav-link px-4 text-white" to="/projects">
                  <h2 className="m-0 roboto-400">Projects</h2>
                </Link>
              </li>
              <li>
                <Link className="nav-link px-4 text-white" to="/contact">
                  <h2 className="m-0 roboto-400">Contact</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
