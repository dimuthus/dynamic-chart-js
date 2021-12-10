import React from 'react';
import "../App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';



const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
   
    
    <Link to="/Dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
      </Link>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;