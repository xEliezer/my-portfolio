/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <>
      <Header />
        <Home />

        <About />

        <Projects />
      <Footer />
    </>
  );
}

export default App;
