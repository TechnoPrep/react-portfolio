import React from 'react'

import profileImage from '../../images/water_color.jpg';

const HomeTop = () => {
 return ( 
  <section className="py-5">
  <div className="row col-12 d-flex align-items-top">
    <Col1 />
    <Col2 />
    <Col3 />
  </div>
  </section>
 )
}

const Col1 = () => {
  return (
    <div className="col-40 text-center text-white">
      <div className="container w-50">
        <p className="text-start name-text">
          Nathaniel
        </p>
        <p className="text-start name-text">
          Ehrlich<span className="home-span name-text">.</span>
        </p>
        <div className="text-start light-teal-text name-line">
          _____
        </div>
        <div className="row col-12 py-lg-3"></div>
        <p className="text-start social-text">
          <a href="https://www.linkedin.com/in/nathaniel-ehrlich-018758121/">LinkedIn</a> |
          <a href="https://github.com/TechnoPrep"> GitHub</a>
        </p>
        <div className="row col-12 py-lg-3"></div>
        <button type="button" className="justify-content-start light-teal-text contact-me-box p-3"
        onClick={() => {
          window.location.href='/contact';
          }}>
            CONTACT ME
        </button>
      </div>
    </div>
  )
}

const Col2 = () => {
  return (
    <div className="col-20 text-center text-white">
      <img className="profile-image" src={profileImage} alt="profile-water-color" />
    </div>
  )
}

const Col3 = () => {
  return (
    <div className="col-40 text-white">
     <div className="container w-50">
       <h5 className="roboto-400 light-teal-text text-start section-header-text">
       Introduction
       </h5>
       <p className="text-start intro-header-text">
          App Admin, <br></br> 
          Full Stack Web Developer
        </p>
        <p>
        I am currently an Applications Administrator in the Education sector, and working on completeing my Full Stack Web Developer certification from University of Denver. I am a highly motivated individual with a mindset to continuously learn and expand my knowledge base.
        </p>
     </div>
    </div>
  )
}

export default HomeTop;