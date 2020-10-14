import React from 'react';
import './Landing.css';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';
import { FaBars } from 'react-icons/fa';

function Landing() {
  return (
    <div className='landing-container'>
      <div className='landing-header'>
        <p>Sole Composer</p>
        <FaBars />
      </div>

      <NewDesignButton />
    </div>
  );
}

export default Landing;
