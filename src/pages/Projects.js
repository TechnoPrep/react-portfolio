import React from "react";

import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'

const Projects = () => {
  return (
      <main className="py-5 secondary-bg-custom fixed">
        <div className="row col-12 d-flex align-items-top">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="w-85-custom">
                <div className="d-flex justify-content-center">
                  <h5 className="roboto-400 light-teal-text text-start section-header-text">
                    Projects
                  </h5>
                </div>
                <div className="row d-flex align-content-center">
                <Project1 />
                <Project2 />
                <Project3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Projects;
