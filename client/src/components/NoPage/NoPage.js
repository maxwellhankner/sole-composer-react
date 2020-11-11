import React from 'react';
import './NoPage.css';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className='no-page-container'>
      <p className='simple-paragraph'>404 - PAGE NOT FOUND</p>
      <Link to='/'>
        <div className='basic-button'>
          <button>Home</button>
        </div>
      </Link>
    </div>
  );
}

export default NoPage;
