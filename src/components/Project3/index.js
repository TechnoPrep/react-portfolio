import React from "react";

import techblog from "../../images/Tech_Blog.png";

const Project3 = () => {
  return (
    <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
      <div className="card main-bg-custom card-custom w-85-custom light-teal-shadow-border">
        <div className="project-img p-3 main-bg-custom">
          <img
            className="card-img-top"
            src={techblog}
            alt=""
          ></img>
        </div>
            
        <div className="card-body card-body-custom main-bg-custom ">
          <h5 className="card-title text-white">
            Tech Blog
          </h5>
          <p className="card-text text-white">
            This is a basic Tech Blog with account creation, creating a post and tracking posts and comments.
          </p>
          <div className="d-flex justify-content-evenly align-self-end">
            <button className="text-white view-project-btn"
            onClick={() => {
              window.open('https://github.com/TechnoPrep/tech-blog/','_blank')  ;
              }}>
              View GitHub
            </button>
            <button className="text-white view-project-btn"
            onClick={() => {
              window.open('https://du-tech-blog.herokuapp.com/','_blank');
              }}>
              View App
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Project3;
