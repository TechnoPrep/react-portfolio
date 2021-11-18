import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
// import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="main-bg-custom">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </div>
          <Footer />
        </div>
        
      </Router>
  );
}

export default App;
