import React from "react";

const Col1 = ({useW50}) => {

  const container = useW50 ? 'col1 w-50' : 'col1'

  return (
    <div className="col-40 text-center text-white">
      <div className={container}>
        <p className="text-start name-text">Nathaniel</p>
        <p className="text-start name-text">
          Ehrlich<span className="home-span colored-period">.</span>
        </p>
        <div className="text-start light-teal-text name-line">_____</div>
        <div className="row col-12 py-lg-3"></div>
        <p className="text-start social-text">
          <a className="link-hover-teal" href="https://www.linkedin.com/in/nwehrlich ">
            LinkedIn
          </a>{" |"}
          <a className="link-hover-teal" href="https://github.com/TechnoPrep"> GitHub</a>
          {" |"}
          <a className="link-hover-teal" href="https://github.com/TechnoPrep"> YouTube</a>
        </p>
        <div className="row col-12 py-lg-3"></div>
        <button
          type="button"
          className="justify-content-start light-teal-text contact-me-btn p-3"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default Col1;
