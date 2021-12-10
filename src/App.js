import React from 'react';
import "./App.css"
import * as ReactBootStrap from "react-bootstrap";
import BcChart from "./component/BcChart";
import Navbar from "./component/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
            <Router>
            <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/" component={BcChart}>
            <BcChart />
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

export default NavBar;