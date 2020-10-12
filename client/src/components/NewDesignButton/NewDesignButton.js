import React from 'react';
import './NewDesignButton.css';
import { Link } from 'react-router-dom';

function NewDesignButton() {
  return (
    <div className='new-design-button-container'>
      <Link to='/designer'>
        <button>New Design</button>
      </Link>
    </div>
  );
}

export default NewDesignButton;
