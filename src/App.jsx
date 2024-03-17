import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Project from './Project';
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} /> 
          <Route exact path="/projects" element={<Projects />} /> 
          <Route path="/projects/:projectId" element={<Project />} /> 
          <Route exact path="/contact" element={<Contact />} /> 
           <Route exact path="/gallery" element={<Gallery />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
