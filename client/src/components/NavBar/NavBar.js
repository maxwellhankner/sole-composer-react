import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div className="navbar-container">
        <Link to="/">
            Home
        </Link>
        <Link to="/designer">
            Designer
        </Link>
    </div>
  );
}

export default NavBar;