/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <>
      <Header />
        <Home />

        <About />
      <Footer />
    </>
  );
}

export default App;
