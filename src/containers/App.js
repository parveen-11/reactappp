import logo from '../logo.svg';
import '../App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from './Faq';
import Courses from './Courses';
import About from './About';
import Nav from './Nav';
import Footer from './Footer';
import Login from './Login';
import Home from './Home';
import React, { useState, useEffect } from 'react';


function App() {
  var pathname = window.location.pathname;
  
  return (
    <div className="App">
      <Router>

        {pathname !== '/login' && <Nav />}
          <Routes>
            <Route path="/" component={App} />
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faq" element={<Faq eventKey={null}></Faq>} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        {pathname !== '/login' && <Footer/>}
      </Router>
    </div>
  );
}

export default App;
