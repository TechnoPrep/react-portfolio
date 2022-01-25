import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
// import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions()

    window.addEventListener("resize", updateDimensions);

    console.log('I Ran');

    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
    console.log('updateDimensions', width);
  }

  const responsive =  width > 1115;
  
  return (    
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="main-bg-custom">
            <Route exact path="/">
              <Home useW50 = {responsive} />
            </Route>
            <Route exact path="/projects">
              <Projects useW50 = {responsive} />
            </Route>
            <Route exact path="/contact">
              <Contact useW50 = {responsive} />
            </Route>
          </div>
          <Footer />
        </div>
        
      </Router>
  );
}

export default App;
