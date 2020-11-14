import React from 'react';
import './NewDesignButton.css';
import { Link } from 'react-router-dom';

function NewDesignButton() {
  return (
    <div className='new-design-button standard-button'>
      <Link to='/designer'>
        <button>NEW DESIGN</button>
      </Link>
    </div>
  );
}

export default NewDesignButton;
