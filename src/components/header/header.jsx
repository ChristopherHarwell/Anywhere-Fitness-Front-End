import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./header-styles.scss";

function Header() {
  return (
    <div >
     
      
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

          <h1 className="header-title">
            anywhere-fitness
          </h1>
      

    </div>
  );
}

export default Header;