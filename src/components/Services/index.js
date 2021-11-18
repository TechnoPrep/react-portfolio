import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import FA "fab" prefix
import { 
faReact, 
faNodeJs 
} from "@fortawesome/free-brands-svg-icons";

// Import FA "fas" prefix
import {
faCode,
faDatabase
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className="py-5 secondary-bg-custom">
      <div className="Row">
        <div className="col text-center text-white">
          <h5 className="roboto-400 light-teal-text section-header-text">
            Services
          </h5>
          <h1 className="roboto-400">What I Am Great At</h1>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden light-teal-shadow-border rounded-5">
              <div className="d-flex flex-column h-100 services-items p-5 pb-3 text-white text-shadow-1">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faReact} size="6x" color="#61dafb" />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  ReactJS
                </h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden light-teal-shadow-border rounded-5">
              <div className="d-flex flex-column h-100 services-items p-5 pb-3 text-white text-shadow-1">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faNodeJs} size="6x" color="#68a063" />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  NodeJS
                </h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden light-teal-shadow-border rounded-5">
              <div className="d-flex flex-column h-100 services-items p-5 pb-3 text-white text-shadow-1">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faCode} size="6x" color="#da7731" />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  API Integration
                </h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden light-teal-shadow-border rounded-5">
              <div className="d-flex flex-column h-100 services-items p-5 pb-3 text-white text-shadow-1">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="6x"
                    color="#fff19c"
                  />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  SQL & Mongo
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
