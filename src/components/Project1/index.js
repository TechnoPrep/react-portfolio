import React from "react";

import totalTicketLogo from "../../images/total-ticket-logo-smaller.png";

const Project1 = () => {
  return (
    <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
      <div className="card main-bg-custom card-custom w-85-custom light-teal-shadow-border">
        <div className="project-img p-3 main-bg-custom">
          <img
            className="card-img-top "
            src={totalTicketLogo}
            alt=""
          ></img>
        </div>

        <div className="card-body card-body-custom main-bg-custom">
          <h5 className="card-title text-white">
            Total Ticket: Ticket Pricing App
          </h5>
          <p className="card-text text-white">
            This application allows your to price various events across multiple Event ticket purchasing products to find the best possible prices!
          </p>
          <div className="d-flex justify-content-evenly">
            <button className="text-white view-project-btn"
            onClick={() => {
              window.open('https://github.com/TechnoPrep/ticket-main','_blank');
              }}>
              View GitHub
            </button>
            <button formtarget="_blank" className="text-white view-project-btn"
            onClick={() => {
              window.open('https://www.total-ticket.com/','_blank');
              }}>
              View App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
