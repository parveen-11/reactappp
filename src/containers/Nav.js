import react from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Logo from './Logo'

function  Nav () {
	return(
    <div className="nav">
      <header className="header">
        <div className="headercolor">
          <div className="container">
            <span><i className="fa-light fa-phone"></i><a href="tel to:000000000">00000000</a><i className="fa-regular fa-globe"></i>
            <a href="">www.drmoavenian.com</a></span>
          </div>  
        </div>
        <div className="headermenu">
          <div className="container">
            <div className="col-sm-2">
              <Logo/>
            </div>
            <div className="col-sm-8">
              <div className="ulmenu">
                <i className="fa-solid fa-bars d-phone menu"id="show" ></i>
                <i className=" fa-solid fa-xmark d-phone menu1"id="hide" ></i>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/courses" >Courses</Link></li>
                  <li><Link to="/faq">FAQS</Link></li>
                  <li><Link to="/About">About</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <button type="button" className="loginbtn">
              <Link to="/login">login</Link>
              </button>    
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;