import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./header-styles.scss";

function Header() {
  return (
    <div className="header">
     
      
    <div className="nav-buttons">
          <Button 
          variant="outlined" 
          color="primary"
          >
            <Link 
            className="nav-button" 
            to="/login"
            >
            Login
            </Link>
          </Button>
          <br/>
      
          <Button variant="outlined" color="primary">
            <Link className="nav-button" to="/Register">Register</Link>
          </Button>
    </div>
<NavLink className="header-title" to="/">

         <h1>anywhere-fitness</h1>
          
          </NavLink>

    </div>
  );
}

export default Header;