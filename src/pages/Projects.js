import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import remindrLogo from "../images/remindr_logo.png";
import ecommerce from "../images/E-Commerce.png";
import cairn from "../images/Cairn.png";

const Projects = () => {
  return (
    <Router>
      <main className="py-5">
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
    <div class="container">
      <div
        className="row secondary-bg-custom d-flex align-content-center"
        style={{ position: "relative", height: "690px" }}
      >
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <div className="project-img">
              <img
                className="card-img-top"
                src={remindrLogo}
                alt=""
                srcset=""
              ></img>
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Card title that wraps to a new line
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <div className="project-img">
              <img
                className="card-img-top"
                src={cairn}
                alt=""
                srcset=""
              ></img>
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Card title that wraps to a new line
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <div className="project-img">
              <img
                className="card-img-top"
                src={ecommerce}
                alt=""
                srcset=""
              ></img>
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Card title that wraps to a new line
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
