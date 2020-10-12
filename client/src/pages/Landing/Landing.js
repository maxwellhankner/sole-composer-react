import React from 'react';
import './Landing.css';
import NavBar from '../../components/NavBar/NavBar.js';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';

function Landing() {
  return (
    <div className='landing-container'>
      <NavBar />
      Sole Composer
      <NewDesignButton />
    </div>
  );
}

export default Landing;
