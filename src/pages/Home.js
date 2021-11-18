import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Intro from "../components/HomeTop";
import Services from "../components/Services";

const Home = () => {
  return (
    <Router>
      <main className="main-bg-custom">
        <Intro />
        <Services />
      </main>
    </Router>
  );
};

export default Home;
