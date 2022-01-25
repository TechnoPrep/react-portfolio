import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import FA "fab" prefix
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resume from "../files/Nathaniel_Ehrlich_Resume.pdf"

// Import FA "fas" prefix
import {
faPhoneAlt,
faEnvelope,
faFile
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({showTopNavMenu}) => {
  return (
    <section className="py-5 secondary-bg-custom fixed">
      <div className="Row">
        <div className="col text-center text-white">
          <h5 className="roboto-400 light-teal-text section-header-text">
            Contact Me
          </h5>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row row-cols-1 w-50 row-cols-lg-2 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover contact-card-custom h-100 overflow-hidden contact-item-shadow-border">
              <div className="d-flex flex-column h-100 contact-items p-5 pb-3 text-white text-shadow-1">
              <a href="tel:+17206979293" className="contact-fa-icons">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon 
                   icon={faPhoneAlt} 
                   size="6x" 
                   color="#fff"
                  />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  Phone
                </h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover contact-card-custom h-100 overflow-hidden contact-item-shadow-border">
              <div className="d-flex flex-column h-100 contact-items p-5 pb-3 text-white text-shadow-1">
              <a href="mailto:nwehrlich@gmail.com" className="contact-fa-icons">
                <div className="d-flex justify-content-center">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    size="6x" 
                    color="#fff" 
                  />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  Email
                </h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover contact-card-custom h-100 overflow-hidden contact-item-shadow-border">
              <div className="d-flex flex-column h-100 contact-items p-5 pb-3 text-white text-shadow-1">
              <a href="https://www.linkedin.com/in/nwehrlich " target="_blank" rel="noreferrer" className="contact-fa-icons">
                <div className="d-flex justify-content-center"> 
                  <FontAwesomeIcon
                   icon={faLinkedin} 
                   size="6x" 
                   color="#fff" 
                  />
                </div>
                <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                  LinkedIn
                </h4>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover contact-card-custom h-100 overflow-hidden contact-item-shadow-border">
              <div className="d-flex flex-column h-100 contact-items p-5 pb-3 text-white text-shadow-1">
                <a href={resume} target="_blank" rel="noreferrer" className="contact-fa-icons">
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faFile}
                      size="6x"
                      color="#fff"
                    />
                  </div>
                  <h4 className="roboto-400 pt-4 mt-3 mb-4 display-6 lh-1 fw-bold text-center">
                    Resumé
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
