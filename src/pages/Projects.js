import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import remindrLogo from "../images/remindr_logo.png";
import techblog from "../images/Tech_Blog.png";
import cairn from "../images/Cairn_v2.png";

const Projects = () => {
  return (
    <Router>
      <main className="py-5 secondary-bg-custom fixed">
        <div className="row col-12 d-flex align-items-top">
          <div className="container">
            <Cards />
          </div>
        </div>
      </main>
    </Router>
  );
};

const Cards = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-85-custom">
        <div className="d-flex justify-content-center">
            <h5 className="roboto-400 light-teal-text text-start section-header-text">
              Projects
            </h5>
        </div>
        <div
          className="row d-flex align-content-center"
          
        >

          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <div className="card main-bg-custom card-custom w-85-custom light-teal-shadow-border">
              <div className="project-img p-3 main-bg-custom">
                <img
                  className="card-img-top "
                  src={remindrLogo}
                  alt=""
                ></img>
              </div>
  
              <div className="card-body card-body-custom main-bg-custom">
                <h5 className="card-title text-white">
                  Remindr: Notification App
                </h5>
                <p className="card-text text-white">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-end">
                  <button className="text-white view-project-btn"
                  onClick={() => {
                    window.location.href='https://github.com/LoopySquare/Remindr';
                    }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <div className="card main-bg-custom card-custom w-85-custom light-teal-shadow-border">
              <div className="project-img p-3 main-bg-custom">
                <img
                  className="card-img-top"
                  src={cairn}
                  alt=""
                ></img>
              </div>
  
              <div className="card-body card-body-custom main-bg-custom">
                <h5 className="card-title text-white">
                  Cairn: National Park API
                </h5>
                <p className="card-text text-white">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-end">
                  <button className="text-white view-project-btn"
                  onClick={() => {
                    window.location.href='https://github.com/TechnoPrep/cairn';
                    }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
            <div className="card main-bg-custom card-custom w-85-custom light-teal-shadow-border">
              <div className="project-img p-3 main-bg-custom">
                <img
                  className="card-img-top"
                  src={techblog}
                  alt=""
                ></img>
              </div>
  
              <div className="card-body card-body-custom main-bg-custom">
                <h5 className="card-title text-white">
                  Tech Blog
                </h5>
                <p className="card-text text-white">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-end">
                  <button className="text-white view-project-btn"
                  onClick={() => {
                    window.location.href='https://github.com/TechnoPrep/tech-blog';
                    }}>
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
