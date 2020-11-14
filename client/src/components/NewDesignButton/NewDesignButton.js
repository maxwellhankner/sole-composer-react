import React from 'react';
import './NewDesignButton.css';
import { Link } from 'react-router-dom';

function NewDesignButton() {
  return (
    <div className='new-design-button standard-button'>
      <Link to='/designer'>
        <button>N E W &nbsp; D E S I G N</button>
      </Link>
    </div>
  );
}

export default NewDesignButton;
