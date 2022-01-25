import React from "react";

import remindrLogo from "../../images/remindr_logo.png";

const Project2 = () => {
  return (
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
            Never forget an appointment again! With Remindr, you are able to schedule email notifications for very important events so you will never miss out!
          </p>
          <div className="d-flex justify-content-evenly">
            <button className="text-white view-project-btn"
            onClick={() => {
              window.open('https://github.com/LoopySquare/Remindr','_blank');
              }}>
              View GitHub
            </button>
            <button formtarget="_blank" className="text-white view-project-btn"
            onClick={() => {
              window.open('https://remindr-notification.herokuapp.com/','_blank');
              }}>
              View App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
