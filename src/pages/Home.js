import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Intro from "../components/HomeTop";
import Services from "../components/Services";

const Home = ({useW50}) => {
  return (
    <Router>
      <main className="main-bg-custom">
        <Intro useW50={useW50} />
        <Services />
      </main>
    </Router>
  );
};

export default Home;
