import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar-container'>
      <Link to='/designer'>
        <p>Designer</p>
      </Link>
    </div>
  );
}

export default NavBar;
