import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Navabaraa from './Components/Navabaraa';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navabaraa />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />   
    </div>
  );
};

export default App;
