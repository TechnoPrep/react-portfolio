import React from "react";

const Col3 = ({useW50}) => {

  const container = useW50 ? 'col3 w-50' : 'col3'

  return (
    <div className="col-40 text-white">
      <div className={container}>
        <h5 className="roboto-400 light-teal-text text-start section-header-text">
          Introduction
        </h5>
        <p className="text-start intro-header-text">
          App Admin, <br></br>
          Full Stack Web Developer
        </p>
        <p>
          I am currently an Applications Administrator in the Education sector,
          and a recent graduate of Web Development Bootcamp through the University Of Denver. 
          A Web Developer with a background in Customer Service!
        </p>
      </div>
    </div>
  );
};

export default Col3;
